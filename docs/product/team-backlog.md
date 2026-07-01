# Backlog para implementação

## Visão geral
Backlog inicial organizado por disciplina para permitir execução paralela com dependências claras.

## Backend / Coder

### BE-01 — Scaffold do monorepo NestJS
**Objetivo:** criar estrutura `apps/` e `libs/` com configuração base TypeScript/NestJS.
**Dependências:** nenhuma.
**Definição de pronto:** projeto sobe localmente com apps placeholder.

### BE-02 — Auth e usuários
**Objetivo:** implementar login por email/senha, JWT e roles.
**Dependências:** BE-01.
**Definição de pronto:** login funcional e rotas protegidas.

### BE-03 — Preferências e canais de alerta
**Objetivo:** CRUD de preferências e alert channels.
**Dependências:** BE-02, DB-01.
**Definição de pronto:** API documentada e validada.

### BE-04 — Market ingestor Binance/Kraken
**Objetivo:** conectar WebSocket, normalizar ticks e atualizar Redis.
**Dependências:** BE-01, INF-02.
**Definição de pronto:** estado quente atualizado e observável.

### BE-05 — Arbitrage engine
**Objetivo:** calcular oportunidades, deduplicar e persistir.
**Dependências:** BE-04, DB-01.
**Definição de pronto:** oportunidades sendo detectadas e gravadas.

### BE-06 — Notificação Telegram
**Objetivo:** enviar alertas e registrar entregas.
**Dependências:** BE-05.
**Definição de pronto:** envio fim a fim com falha registrada.

### BE-07 — API de oportunidades e status
**Objetivo:** expor overview, histórico e status das exchanges.
**Dependências:** BE-03, BE-05.
**Definição de pronto:** endpoints aderentes ao OpenAPI.

## MCP / Coder

### MCP-01 — Servidor MCP
**Objetivo:** estruturar `apps/mcp-server` e registrar tools.
**Dependências:** BE-01.
**Definição de pronto:** servidor MCP sobe e lista tools.

### MCP-02 — Tool analyze_arbitrage_opportunity
**Objetivo:** implementar cálculo determinístico.
**Dependências:** MCP-01.
**Definição de pronto:** input/output aderentes ao contrato.

### MCP-03 — Tool adr_advisor com IA
**Objetivo:** carregar ADRs, montar prompt e integrar modelo.
**Dependências:** MCP-01.
**Definição de pronto:** respostas coerentes com prompt e contratos.

### MCP-04 — Scripts de teste com Cliente MCP
**Objetivo:** criar roteiro reprodutível de uso das tools.
**Dependências:** MCP-02, MCP-03.
**Definição de pronto:** cenários do plano de validação executáveis.

## Frontend / UI-UX + Coder

### FE-01 — Wireframes do dashboard
**Objetivo:** definir telas mínimas do MVP.
**Dependências:** nenhuma.
**Definição de pronto:** telas aprovadas para implementação.

### FE-02 — Setup Next.js
**Objetivo:** estruturar app web e autenticação básica.
**Dependências:** FE-01, BE-02.
**Definição de pronto:** login e layout funcional.

### FE-03 — Overview e oportunidades
**Objetivo:** listar status de exchanges e oportunidades recentes.
**Dependências:** FE-02, BE-07.
**Definição de pronto:** tela operacional com dados reais/mockados.

### FE-04 — Configurações do usuário
**Objetivo:** editar threshold, pares e canais.
**Dependências:** FE-02, BE-03.
**Definição de pronto:** formulário funcional integrado.

## DevOps

### INF-01 — Docker Compose do monorepo
**Objetivo:** subir PostgreSQL, Redis, apps principais e web.
**Dependências:** BE-01.
**Definição de pronto:** ambiente local reproduzível.

### INF-02 — Configuração de observabilidade
**Objetivo:** logs estruturados, health checks e métricas mínimas.
**Dependências:** INF-01.
**Definição de pronto:** métricas e health endpoints acessíveis.

### INF-03 — Pipeline CI básico
**Objetivo:** lint, test e build.
**Dependências:** BE-01.
**Definição de pronto:** pipeline executando em PR.

## QA

### QA-01 — Estratégia e casos de teste
**Objetivo:** derivar casos do documento de testes.
**Dependências:** nenhuma.
**Definição de pronto:** suíte planejada por módulo.

### QA-02 — Testes API + domínio
**Objetivo:** validar auth, preferências, oportunidades e regras.
**Dependências:** BE-02, BE-03, BE-05, BE-07.
**Definição de pronto:** testes automatizados e relatório.

### QA-03 — Testes MCP
**Objetivo:** validar duas tools e cliente MCP.
**Dependências:** MCP-02, MCP-03, MCP-04.
**Definição de pronto:** evidências prontas para relatório acadêmico.

## Code Review / Arquitetura

### CR-01 — Revisão de boundaries do monorepo
**Objetivo:** garantir separação saudável entre apps/libs.
**Dependências:** BE-01.
**Definição de pronto:** parecer com ajustes necessários.

### CR-02 — Revisão de segurança e contratos
**Objetivo:** revisar auth, OpenAPI, schemas de eventos e tools MCP.
**Dependências:** BE-02, BE-03, MCP-02, MCP-03.
**Definição de pronto:** feedback consolidado e aplicado.
