# Mensagem executiva para a equipe

Time,

Fechamos a fase de definição do Crypto-Pulse e a direção aprovada é **arquitetura de microserviços com Kafka como backbone assíncrono**. A documentação já foi consolidada e está pronta para servir como base de implementação.

## Objetivo do MVP
Entregar uma plataforma funcional de monitoramento de arbitragem de criptomoedas com:
- Binance + Kraken;
- pares BTC/USDT, ETH/USDT e SOL/USDT;
- cálculo de oportunidades em tempo real;
- alertas via Telegram;
- dashboard web mínimo;
- duas ferramentas MCP obrigatórias para entrega acadêmica.

## Serviços previstos
- api-gateway
- auth-service
- market-ingestor
- arbitrage-engine
- notification-service
- persistence-service
- mcp-server
- web-dashboard

## Backbone Kafka
Tópicos principais já definidos:
- `market.ticks.normalized.v1`
- `market.exchange.status.v1`
- `arbitrage.opportunities.detected.v1`
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`

Regras obrigatórias:
- contratos versionados;
- consumidores idempotentes;
- observabilidade mínima por serviço;
- documentação como fonte de verdade.

## Entrega acadêmica MCP
As tools obrigatórias são:
- `analyze_arbitrage_opportunity`
- `adr_advisor`

A segunda deve usar IA por prompt sobre as ADRs do projeto e ambas precisam ser testadas por Cliente MCP.

## Documentação disponível
O pacote documental está consolidado em `crypto-pulse/` e também no arquivo `crypto-pulse-docs.zip`.

## Ordem de execução recomendada
1. scaffold dos microserviços e ambiente local;
2. migrations/seeds e contratos Kafka;
3. market-ingestor e arbitrage-engine;
4. notification + persistence;
5. api-gateway + dashboard;
6. mcp-server + tools;
7. testes integrados e evidências acadêmicas.

## Referências principais
- `docs/product/team-backlog-microservices-kafka.md`
- `docs/architecture/kafka-planning.md`
- `docs/mcp/tools-definition.md`
- `docs/mcp/client-validation-plan.md`
- `contracts/openapi/openapi.yaml`

Leiam antes de implementar. Sem heroísmo improvisado, por favor. Arquitetura distribuída já pune o suficiente por conta própria.
