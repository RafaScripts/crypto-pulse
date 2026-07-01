# Eventos Kafka planejados

## Convenção
`<dominio>.<entidade>.<acao>.v<versao>`

## Catálogo inicial
- `market.ticks.normalized.v1`
- `market.orderbook.normalized.v1`
- `market.exchange.status.v1`
- `arbitrage.opportunities.detected.v1`
- `arbitrage.opportunities.filtered.v1`
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`
- `alerts.dispatch.failed.v1`
- `user.preferences.updated.v1`
- `alert.channels.updated.v1`

## Chaves sugeridas
- ticks e oportunidades: `symbol`
- alertas: `user_id`
- configurações: `user_id`

## Regras
- payloads devem incluir `event_id`, `timestamp` e campos de correlação;
- consumidores devem ser idempotentes;
- eventos incompatíveis devem ganhar nova versão.
