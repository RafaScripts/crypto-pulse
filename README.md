# Crypto Pulse 🚀

Bem-vindo ao Crypto Pulse! A plataforma corporativa de monitoramento e arbitragem quantitativa para criptomoedas em tempo real.

⚠️ **Atenção:** O sistema completo, a arquitetura de microsserviços e suas funcionalidades principais estão **em construção**. 
Para ver a documentação da arquitetura e dos serviços planejados, acesse a pasta [docs](./docs/full_documentation.md).

O foco atual deste arquivo é instruir a instalação e integração nativa com o **Model Context Protocol (MCP)**.

---

## 🧠 Model Context Protocol (MCP)

O protocolo MCP permite que LLMs e Agentes de IA se conectem ao nosso ecossistema localmente para operar ferramentas de arbitragem e monitoramento diretamente no projeto.

### Instalação e Configuração

Antes de conectar o assistente, certifique-se de instalar as dependências e compilar o projeto:

```bash
# Na raiz do repositório, instale os pacotes
pnpm install

# Faça o build do projeto para gerar a pasta /dist do servidor MCP
pnpm build
```

Para conectar o seu assistente (como Cursor, Copilot, Gemini ou Claude) ao nosso servidor MCP local, você deve apontar a configuração de MCP (normalmente num arquivo como `mcp.json` ou `mcp_config.json`) para o nosso script recém-compilado.

Adicione o seguinte bloco de configuração no seu assistente:

```json
{
  "mcpServers": {
    "crypto-pulse-mcp": {
      "command": "node",
      "args": [
        "/Users/rafael/Desktop/projects/crypto-pulse-package/crypto-pulse/services/mcp-server/dist/server.js"
      ],
      "env": {
        "GEMINI_API_KEY": "CHAVE_AQUI"
      }
    }
  }
}
```

⚠️ **Importante:** 
- Substitua `"CHAVE_AQUI"` pela sua chave de API válida do Gemini.
- Ajuste o caminho no array `"args"` para refletir o **caminho absoluto correto** do repositório clonado na sua máquina (onde o `server.js` foi gerado após o build).

### Uso do Servidor MCP

Ao inicializar esta configuração no seu cliente MCP, a Inteligência Artificial ganha acesso imediato às seguintes ferramentas nativas (Tools) do sistema:

1. **`adr_advisor`**: Atua como um Arquiteto Virtual para validar ideias e tirar dúvidas baseadas nas ADRs usando a IA.
2. **`extract_adr_tradeoffs`**: Mapeia riscos operacionais extraindo as desvantagens (Negativas) de cada decisão das ADRs.

---

All copyrights reserved to Rafael Santos Freire.
Distributed or Modified without permission is strictly prohibited.