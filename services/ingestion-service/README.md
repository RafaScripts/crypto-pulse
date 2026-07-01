# ingestion-service

## Responsabilidade
Conectar às exchanges via WebSocket, normalizar mensagens e publicar eventos de mercado.

## Entradas
- Streams WebSocket Binance/Coinbase/Kraken

## Saídas
- `market.ticks.normalized`
- `market.orderbook.raw`

## Requisitos-chave
- Reconexão automática
- Heartbeat/keepalive
- Observabilidade por exchange
