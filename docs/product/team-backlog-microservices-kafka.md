# Backlog do time — modo microserviços com Kafka

## Premissas
- Kafka é obrigatório como backbone assíncrono;
- serviços independentes por responsabilidade;
- contratos versionados por evento;
- consumidores idempotentes;
- documentação atual é a fonte de verdade para implementação.

## Serviços do backend
- `api-gateway`
- `auth-service`
- `market-ingestor`
- `arbitrage-engine`
- `notification-service`
- `persistence-service`
- `mcp-server`
- `web-dashboard`

## Backend / Coder

### MS-BE-01 — Scaffold base dos microserviços NestJS
**Objetivo:** criar a estrutura executável dos serviços NestJS e bibliotecas compartilhadas.
**Dependências:** nenhuma.
**Definição de pronto:** todos os serviços sobem localmente com configuração mínima.

### MS-BE-02 — Auth service
**Objetivo:** implementar autenticação, usuários, JWT e roles.
**Dependências:** MS-BE-01, MS-DB-01.
**Definição de pronto:** login funcional, guards e contratos básicos prontos.

### MS-BE-03 — API Gateway
**Objetivo:** expor endpoints REST e WebSocket para dashboard, preferências, oportunidades e status.
**Dependências:** MS-BE-01, MS-BE-02.
**Definição de pronto:** endpoints aderentes ao OpenAPI e autenticação integrada.

### MS-BE-04 — Market ingestor
**Objetivo:** integrar Binance e Kraken via WebSocket, normalizar ticks e publicar em Kafka.
**Dependências:** MS-BE-01, MS-INF-01.
**Definição de pronto:** publicação em `market.ticks.normalized.v1` e status de exchange operacionais.

### MS-BE-05 — Arbitrage engine
**Objetivo:** consumir ticks do Kafka, calcular oportunidades, deduplicar e publicar oportunidades detectadas.
**Dependências:** MS-BE-04, MS-DB-01.
**Definição de pronto:** publicação em `arbitrage.opportunities.detected.v1` com regras válidas.

### MS-BE-06 — Notification service
**Objetivo:** consumir oportunidades, aplicar preferências/threshold e enviar alertas Telegram.
**Dependências:** MS-BE-05, MS-BE-02.
**Definição de pronto:** publicação de `alerts.dispatch.requested.v1` e `alerts.dispatched.v1`, com registro de falhas.

### MS-BE-07 — Persistence service
**Objetivo:** consumir eventos Kafka e persistir dados relevantes no PostgreSQL.
**Dependências:** MS-BE-04, MS-BE-05, MS-BE-06, MS-DB-01.
**Definição de pronto:** oportunidades, alertas e status persistidos de forma idempotente.

### MS-BE-08 — Projeções para dashboard
**Objetivo:** construir projeções/leitura otimizada para status e oportunidades recentes.
**Dependências:** MS-BE-03, MS-BE-07.
**Definição de pronto:** consultas rápidas para o dashboard.

## Kafka / Backend

### MS-KAFKA-01 — Contratos e producers
**Objetivo:** implementar contratos e publicação dos tópicos versionados.
**Dependências:** MS-BE-01.
**Definição de pronto:** producers funcionando com payloads aderentes aos schemas.

### MS-KAFKA-02 — Consumers idempotentes
**Objetivo:** garantir consumo resiliente e sem duplicação lógica.
**Dependências:** MS-KAFKA-01.
**Definição de pronto:** deduplicação e processamento seguro em persistence/notification.

### MS-KAFKA-03 — Observabilidade Kafka
**Objetivo:** expor lag, falhas de consumo e throughput por tópico.
**Dependências:** MS-INF-02.
**Definição de pronto:** métricas de Kafka visíveis no stack local.

## Banco / Backend

### MS-DB-01 — Migrations e seeds
**Objetivo:** implementar migrations reais e seeds iniciais de exchanges, pares e fee profiles.
**Dependências:** MS-BE-01.
**Definição de pronto:** banco sobe pronto para uso local.

## MCP / Coder

### MS-MCP-01 — Servidor MCP
**Objetivo:** estruturar o serviço MCP e registrar ferramentas.
**Dependências:** MS-BE-01.
**Definição de pronto:** cliente MCP lista tools disponíveis.

### MS-MCP-02 — Tool analyze_arbitrage_opportunity
**Objetivo:** implementar cálculo determinístico conforme contrato.
**Dependências:** MS-MCP-01.
**Definição de pronto:** tool validada com casos positivos e negativos.

### MS-MCP-03 — Tool adr_advisor
**Objetivo:** implementar análise com IA baseada em prompt e ADRs locais.
**Dependências:** MS-MCP-01.
**Definição de pronto:** respostas fundamentadas, com JSON contratual.

### MS-MCP-04 — Cliente MCP e scripts de demonstração
**Objetivo:** garantir execução reproduzível das tools por cliente MCP.
**Dependências:** MS-MCP-02, MS-MCP-03.
**Definição de pronto:** cenários acadêmicos reproduzíveis com evidência.

## Frontend / UI-UX + Coder

### MS-FE-01 — Wireframes finais do dashboard
**Objetivo:** consolidar UX do MVP com base no fluxo operacional.
**Dependências:** nenhuma.
**Definição de pronto:** wireframes de login, overview, oportunidades, alertas e configurações.

### MS-FE-02 — Setup Next.js e autenticação
**Objetivo:** estruturar o dashboard e fluxo de login.
**Dependências:** MS-FE-01, MS-BE-02, MS-BE-03.
**Definição de pronto:** acesso autenticado ao dashboard.

### MS-FE-03 — Overview em tempo real
**Objetivo:** exibir status das exchanges, oportunidades recentes e alertas.
**Dependências:** MS-FE-02, MS-BE-08.
**Definição de pronto:** dashboard conectado ao backend.

### MS-FE-04 — Configurações do usuário
**Objetivo:** editar preferências, pares, exchanges e threshold.
**Dependências:** MS-FE-02, MS-BE-03.
**Definição de pronto:** tela integrada às APIs.

## DevOps

### MS-INF-01 — Ambiente local com Kafka
**Objetivo:** subir PostgreSQL, Redis, Kafka e serviços necessários via Docker Compose.
**Dependências:** MS-BE-01.
**Definição de pronto:** stack local reproduzível.

### MS-INF-02 — Observabilidade distribuída
**Objetivo:** logs estruturados, métricas, health checks e correlation id.
**Dependências:** MS-INF-01.
**Definição de pronto:** visibilidade mínima dos serviços e Kafka.

### MS-INF-03 — CI/CD básico
**Objetivo:** pipeline com lint, test, build e checagem contratual.
**Dependências:** MS-BE-01.
**Definição de pronto:** validação automática em PR.

## QA

### MS-QA-01 — Matriz de testes dos microserviços
**Objetivo:** derivar casos de teste por serviço, contrato e fluxo distribuído.
**Dependências:** nenhuma.
**Definição de pronto:** plano executável por sprint.

### MS-QA-02 — Testes de integração distribuída
**Objetivo:** validar fluxo WebSocket -> Kafka -> arbitragem -> Telegram -> persistência.
**Dependências:** MS-BE-04, MS-BE-05, MS-BE-06, MS-BE-07.
**Definição de pronto:** cenários críticos automatizados.

### MS-QA-03 — Testes MCP
**Objetivo:** validar tools MCP e cliente MCP.
**Dependências:** MS-MCP-02, MS-MCP-03, MS-MCP-04.
**Definição de pronto:** evidências prontas para entrega acadêmica.

## Code Review / Arquitetura

### MS-CR-01 — Revisão dos boundaries dos serviços
**Objetivo:** garantir desacoplamento correto e uso saudável do Kafka.
**Dependências:** MS-BE-01, MS-KAFKA-01.
**Definição de pronto:** parecer arquitetural com ajustes necessários.

### MS-CR-02 — Revisão de segurança, contratos e idempotência
**Objetivo:** revisar JWT, OpenAPI, schemas, consumers e tools MCP.
**Dependências:** MS-BE-02, MS-BE-03, MS-KAFKA-02, MS-MCP-03.
**Definição de pronto:** checklist de risco tratado.
