import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";

// Inicialização do servidor MCP
const server = new McpServer({
  name: "crypto-pulse-mcp",
  version: "1.0.0",
});

// Tool 1 (Com IA): adr_advisor
server.tool(
  "adr_advisor",
  "Atua como um Arquiteto Virtual para validar ideias baseadas nas ADRs.",
  {
    adr_text: z.string().describe("Texto completo das ADRs do documento"),
    question: z.string().describe("Dúvida do desenvolvedor"),
  },
  async (args) => {
    const { adr_text, question } = args;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        content: [{ type: "text", text: "Erro: A variável de ambiente GEMINI_API_KEY não está configurada." }],
        isError: true,
      };
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `Você é um Arquiteto Virtual. Responda à pergunta do desenvolvedor única e exclusivamente com base no seguinte documento de Arquitetura (ADRs):

Documento ADR:
${adr_text}

Pergunta do desenvolvedor:
${question}

Responda de forma clara e técnica. Se a resposta não puder ser deduzida do documento, informe que não há informações suficientes nas ADRs.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;

      return {
        content: [{ type: "text", text: response.text() }],
      };
    } catch (e: any) {
      return {
        content: [{ type: "text", text: `Erro ao gerar resposta com IA: ${e.message}` }],
        isError: true,
      };
    }
  }
);

// Tool 2 (Sem IA): extract_adr_tradeoffs
server.tool(
  "extract_adr_tradeoffs",
  "Mapeia riscos operacionais extraindo as desvantagens (Negativas) de cada decisão das ADRs.",
  {
    adr_text: z.string().describe("Texto completo das ADRs do documento"),
  },
  async (args) => {
    const { adr_text } = args;

    // Expressão regular para capturar o texto imediatamente após "Negativas:" 
    // até o final da linha ou quebra de parágrafo (duas quebras de linha).
    // Usamos [\s\S]*? para captura preguiçosa (lazy) até encontrar \n\s*\n ou o fim da string.
    const regex = /Negativas:\s*([\s\S]*?)(?=\n\s*\n|$)/gi;

    let match;
    const tradeoffs: string[] = [];

    while ((match = regex.exec(adr_text)) !== null) {
      const extractedText = match[1].trim();
      if (extractedText) {
        tradeoffs.push(extractedText);
      }
    }

    if (tradeoffs.length === 0) {
      return {
        content: [{ type: "text", text: "Aviso: Nenhuma consequência negativa foi encontrada nas ADRs fornecidas." }],
      };
    }

    // Formata os resultados como uma lista markdown de riscos operacionais
    const markdownList = tradeoffs.map((t) => `- ${t}`).join("\n");
    const markdownOutput = `### Riscos Operacionais Extraídos das ADRs:\n\n${markdownList}`;

    return {
      content: [{ type: "text", text: markdownOutput }],
    };
  }
);

// Configuração e inicialização do servidor Express para transporte SSE (porta 3004)
async function main() {
  const app = express();
  
  // O MCP requer que suportemos múltiplas sessões simultâneas em SSE.
  // Vamos armazenar cada transport em um Map, chaveado pelo sessionId.
  const transports = new Map<string, SSEServerTransport>();

  // Fallback global para clientes que falham em enviar o sessionId
  let globalTransport: SSEServerTransport | null = null;

  app.get("/sse", async (req, res) => {
    console.error("GET /sse connected");
    // Definimos a URL completa de onde os POSTs chegarão
    const messageUrl = `http://localhost:${process.env.PORT || 3004}/message`;
    const transport = new SSEServerTransport(messageUrl, res);
    
    await server.connect(transport);

    // Armazena o transport para que o endpoint POST consiga encontrá-lo
    transports.set(transport.sessionId, transport);
    globalTransport = transport;

    // Cleanup ao fechar a conexão
    res.on("close", () => {
      transports.delete(transport.sessionId);
      if (globalTransport === transport) {
        globalTransport = null;
      }
    });
  });

  app.post("/message", async (req, res) => {
    console.error("POST /message received with query:", req.query);
    const sessionId = req.query.sessionId as string;
    
    let transport = transports.get(sessionId);
    if (!transport && globalTransport) {
      console.error("Utilizando globalTransport como fallback (sessionId ausente ou inválido).");
      transport = globalTransport;
    }

    if (!transport) {
      console.error(`Rejecting POST /message: Sessão não encontrada para sessionId='${sessionId}'`);
      res.status(404).send(`Sessão não encontrada: ${sessionId}`);
      return;
    }

    try {
      await transport.handlePostMessage(req, res);
    } catch (e) {
      console.error("Erro ao processar mensagem MCP:", e);
      res.status(500).send("Erro interno ao processar mensagem.");
    }
  });

  // Também iniciamos o StdioServerTransport para que o IDE/Antigravity consiga conectar via "command": "node"
  // de forma nativa e super estável (como funcionava antes), mantendo o Express/SSE ativo na porta 3004
  // para cumprir o requisito estrito do trabalho acadêmico.
  const stdioTransport = new StdioServerTransport();
  await server.connect(stdioTransport);
  console.error("StdioServerTransport iniciado com sucesso para conexões via command line.");

  const port = process.env.PORT || 3004;
  app.listen(port, () => {
    console.error(`Crypto Pulse MCP Server rodando na porta ${port} (SSE).`);
  });
}

main().catch((err) => {
  console.error("Erro fatal ao iniciar o servidor MCP:", err);
  process.exit(1);
});
