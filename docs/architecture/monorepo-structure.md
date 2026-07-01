# Estrutura do monorepo

## Estratégia

Monorepo TypeScript com NestJS para backend/apps e Next.js para frontend. A estrutura privilegia separação por contexto, reuso de código e facilidade de evolução para arquitetura distribuída.

## Estrutura sugerida

```text
crypto-pulse/
  apps/
    api/
    market-ingestor/
    arbitrage-engine/
    mcp-server/
    web/
  libs/
    domain/
    application/
    infrastructure/
    integrations/
    contracts/
    observability/
    testing/
  docs/
  infra/
  contracts/
  scripts/
```

## Apps

### apps/api
Responsável por autenticação, preferências, histórico, status e WebSocket gateway para dashboard.

### apps/market-ingestor
Worker NestJS para consumir streams WebSocket das exchanges, normalizar eventos e publicar estado quente.

### apps/arbitrage-engine
Worker NestJS para calcular oportunidades com base no estado corrente e persistir/encaminhar alertas.

### apps/mcp-server
Servidor MCP responsável por expor as duas ferramentas acadêmicas.

### apps/web
Dashboard Next.js para autenticação, visualização e configurações.

## Libs

### libs/domain
Entidades, value objects, regras de negócio puras.

### libs/application
Casos de uso, services de aplicação, orquestração.

### libs/infrastructure
Repositórios, persistência, configuração de banco, Redis e adaptadores técnicos.

### libs/integrations
Clientes de exchange, Telegram, provedores de IA e utilidades externas.

### libs/contracts
DTOs, schemas, tipos compartilhados, contratos de eventos e responses.

### libs/observability
Logs estruturados, métricas, correlation id, health checks.

### libs/testing
Factories, fixtures, mocks e helpers de teste.

## Dependências permitidas
- `apps/*` podem depender de `libs/*`;
- `libs/domain` não depende de libs técnicas;
- `libs/application` depende de `domain` e interfaces;
- `libs/infrastructure` implementa portas definidas por `application/domain`;
- `libs/integrations` concentra clientes externos.

## Convenções
- TypeScript strict mode;
- validação com class-validator ou zod nos boundaries;
- DTOs versionados quando necessário;
- logs JSON em produção;
- pasta `docs/` como fonte da verdade arquitetural.
