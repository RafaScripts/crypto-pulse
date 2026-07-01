# Arquitetura alvo do Crypto-Pulse

## Stack oficial

### Backend
- NestJS (TypeScript)
- REST API + WebSocket Gateway
- MCP Server em Node.js/TypeScript integrado ao ecossistema do projeto

### Frontend
- Next.js
- Dashboard web em tempo real

### Dados e mensageria
- PostgreSQL
- Redis
- Kafka opcional no MVP, recomendado apenas se a avaliação exigir aderência literal à ADR de mensageria

### Infra
- Docker Compose para desenvolvimento local
- Kubernetes como alvo arquitetural/documental, não como obrigação imediata do MVP

## Estratégia de implementação

Para o MVP, a recomendação é um monorepo em NestJS com módulos e apps separados por responsabilidade, evitando microserviços totalmente fragmentados cedo demais.

## Estrutura sugerida

- `apps/api` — API principal, autenticação, configurações, histórico
- `apps/market-ingestor` — worker para WebSocket das exchanges
- `apps/arbitrage-engine` — worker para cálculo de oportunidades
- `apps/mcp-server` — servidor MCP com as ferramentas acadêmicas
- `apps/web` — dashboard Next.js
- `libs/domain` — regras de domínio e DTOs
- `libs/contracts` — contratos internos, eventos e schemas
- `libs/integrations` — clients de exchange, Telegram e provedores externos
- `libs/observability` — logging, métricas e tracing

## Decisão pragmática

A arquitetura continua aderente às ADRs, mas o MVP deve priorizar modularidade e capacidade de demonstração. Se for necessário evoluir para microserviços independentes, a separação por apps e libs já prepara o terreno sem impor custo operacional prematuro.
