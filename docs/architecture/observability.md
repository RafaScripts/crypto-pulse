# Observabilidade

## Objetivo
Garantir diagnóstico rápido de falhas, medição de latência e visibilidade mínima sobre ingestão, arbitragem, alertas e uso das tools MCP.

## Logs
- formato JSON;
- campos mínimos: timestamp, level, service, message, correlation_id, context;
- mascarar segredos e dados sensíveis.

## Métricas mínimas
- `market_ingestor_messages_total`
- `market_ingestor_reconnects_total`
- `market_ingestor_latency_ms`
- `arbitrage_opportunities_detected_total`
- `arbitrage_engine_calculation_latency_ms`
- `telegram_alerts_sent_total`
- `telegram_alerts_failed_total`
- `mcp_tool_calls_total`
- `mcp_tool_failures_total`
- `http_request_duration_ms`

## Health checks
- API: banco, redis, integrações críticas;
- market-ingestor: status das conexões WebSocket;
- arbitrage-engine: acesso a Redis e banco;
- mcp-server: carregamento das ADRs e disponibilidade do modelo configurado.

## Correlation ID
Toda requisição HTTP, execução de alerta e chamada MCP deve carregar correlation id para rastreio.

## Dashboards mínimos
- status das exchanges;
- oportunidades detectadas por minuto;
- falhas de alertas;
- chamadas MCP por ferramenta.
