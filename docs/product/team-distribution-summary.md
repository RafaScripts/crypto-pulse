# Resumo para distribuição ao time — microserviços com Kafka

## Direção aprovada
O Crypto-Pulse será implementado em arquitetura de microserviços com Kafka como backbone assíncrono. O objetivo é manter aderência às ADRs e viabilizar escalabilidade e desacoplamento real entre ingestão, arbitragem, alertas, persistência e projeções para dashboard.

## Serviços
- api-gateway
- auth-service
- market-ingestor
- arbitrage-engine
- notification-service
- persistence-service
- mcp-server
- web-dashboard

## Backbone de eventos
Tópicos principais:
- `market.ticks.normalized.v1`
- `market.exchange.status.v1`
- `arbitrage.opportunities.detected.v1`
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`

## Regras estruturais
- contratos versionados;
- consumidores idempotentes;
- observabilidade mínima por serviço;
- Kafka obrigatório no fluxo distribuído;
- documentação atual como base de implementação.

## Tools MCP obrigatórias
- `analyze_arbitrage_opportunity`
- `adr_advisor`

## Pacote documental
Toda a documentação de arquitetura, produto, contratos, segurança, QA e MCP foi consolidada no diretório `crypto-pulse/` e será entregue também em um arquivo compactado para acompanhar a implementação.
