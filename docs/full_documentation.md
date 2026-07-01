# Crypto Pulse 🚀

Plataforma corporativa de monitoramento, arbitragem quantitativa e inteligência artificial para criptomoedas em tempo real. Uma arquitetura baseada em **Microserviços** (Kubernetes), mensageria assíncrona de alta escala (**Kafka**) e integração nativa com Model Context Protocol (**MCP**).

---

## 🏗️ Arquitetura do Sistema

O ecossistema é dividido em **7 Microserviços Independentes**:

1. **API Gateway**: Porta de entrada REST e rotas.
2. **Auth Service**: Autenticação via JWT.
3. **Ingestion Service**: Consumo de websockets das corretoras (Binance, Bybit).
4. **Arbitrage Engine**: Motor matemático que processa eventos de oportunidade em milissegundos.
5. **Persistence Service**: Gravador de histórico no PostgreSQL.
6. **Notification Service**: Disparador de Alertas Críticos.
7. **MCP Server**: A ponte de Inteligência Artificial para operar o ecossistema (SSE & Stdio).

---

## 👨‍💻 Ambiente Local (Desenvolvimento)

Para rodar todo o ecossistema na sua máquina e criar novos recursos, siga os passos abaixo:

### 1. Pré-requisitos
- Node.js v20+
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- Docker & Docker Compose

### 2. Instalação e Bancos de Dados
Na raiz do repositório, faça o download de todos os pacotes do monorepo:
```bash
pnpm install
```

Antes de ligar o motor Node, você precisa levantar a infraestrutura pesada (PostgreSQL, Redis e Kafka). Nós fizemos isso em um contêiner nativo para você:
```bash
cd infra/docker
docker-compose up -d
cd ../../
```

Após os contêineres subirem, execute as migrações do Prisma para criar as tabelas do banco de dados:
```bash
pnpm run db:setup
```

### 3. Rodando o Ecossistema Inteiro
Para compilar todas as bibliotecas do Workspace e subir os serviços Node no modo *watch* (hot-reload imediato ao salvar arquivos):
```bash
pnpm dev
```
- **Frontend Dashboard:** `http://localhost:3000`
- **API Gateway:** `http://localhost:3001`

---

## ☁️ Ambiente de Produção (OpenStack + Kubernetes)

O sistema de produção opera sob uma rede IPv6 protegida no OpenStack, provisionado e orquestrado via **K3s** (Kubernetes ultra-leve) e roteado nativamente via **Traefik**. 

### 🌐 Links e Domínios Públicos
Os acessos públicos passam pela nuvem blindada do Cloudflare e operam via túneis HTTPS automáticos:
- **Web Dashboard:** [https://cryptopulse.rafascripts.dev.br](https://cryptopulse.rafascripts.dev.br)
- **Servidor MCP (IA):** [https://cryptomcp.rafascripts.dev.br](https://cryptomcp.rafascripts.dev.br)

### Como Fazer o Deploy de Atualizações?
Temos um script automatizado (`deploy.sh`) que faz todo o trabalho sujo. Ele envia as alterações via `scp` para o Nó Mestre, compila os microsserviços via Docker Alpine, salva as imagens nativas (`.tar`), e injeta diretamente no *namespace* `k8s.io` interno do Kubernetes e distribui aos Workers. Nenhuma requisição a imagens de internet é feita pelos pods em produção (Zero Trust).

Sempre que salvar uma alteração do código, basta disparar da sua máquina local:
```bash
bash deploy.sh
```

*(O painel interno do Cluster pode ser inspecionado executando um simples `sudo k3s kubectl get pods -A` acessando via SSH o Nó Mestre).*

---

## 🧠 Integrando a Inteligência Artificial (MCP)

O nosso sistema não é voltado apenas para humanos. Ele tem uma camada onde LLMs e Agentes Locais (Claude, Gemini, Cursor, Copilot) podem se conectar para operar arbitragem de mercado ou debugar o sistema nativamente usando a nossa ponte MCP.

### Configurando o seu Agente Localmente (VS Code / Gemini)
Copie a configuração abaixo e injete no seu `mcp.json`, `mcp_config.json` ou arquivo equivalente do seu Assistente. Essa é a matriz nativa de leitura de processos locais usando protocolo **Stdio**:


video: [https://youtu.be/vtZgZetJBDI](https://youtu.be/vtZgZetJBDI)
```json
{
  "mcpServers": {
    "crypto-pulse-mcp": {
      "command": "node",
      "args": [
        "/home/rafael/Desktop/projects/crypto-pulse-package/crypto-pulse/services/mcp-server/dist/index.js"
      ],
      "env": {
        "GEMINI_API_KEY": "COLOQUE_SUA_CHAVE_AQUI"
      }
    }
  }
}
```

### Conectando um Agente em Nuvem Pública (Protocolo SSE)
Se o seu Agente de IA está em um servidor remoto e deseja operar a API de Produção, basta apontar ele para o servidor K8s que responderá instantaneamente via **Server-Sent Events**:

- **URL de Conexão:** `https://cryptomcp.rafascripts.dev.br/sse`

### Ferramentas Nativas da IA (Tools List):
Ao "espetar" esse servidor, seu assistente ganha nativamente as seguintes habilidades (Tools):
1. **`analyze_arbitrage_opportunity`**: Lê o Orderbook via Websocket e aponta *spreads* que dão lucro nas exchanges no segundo atual.
2. **`calculate_slippage_impact`**: Realiza o cálculo de perda de capital ao arrastar a barra de volume da corretora.
3. **`estimate_transfer_cost`**: Verifica e computa o Gas Fee base das transferências de rede.
4. **`adr_advisor`**: Consulta as ADRs (Architecture Decision Records) ensinando como o ecossistema é montado de ponta a ponta.

---

mais documentações podem ser encontradas na pasta [docs](/docs/)

All copyrights reserved to Rafael Santos Freire
Distributed or Modified without permission is strictly prohibited.
