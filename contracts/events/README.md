# Event Contracts

## Tópicos iniciais

- `market.ticks.raw`
- `market.orderbook.raw`
- `market.ticks.normalized`
- `arbitrage.opportunities.detected`
- `alerts.dispatch.requested`
- `alerts.dispatched`

## Evento: market.ticks.normalized

```json
{
  "event_id": "uuid",
  "exchange": "binance",
  "symbol": "BTC/USDT",
  "bid": 100000.12,
  "ask": 100010.45,
  "timestamp": "2026-06-17T10:00:00Z",
  "source_latency_ms": 12
}
```

## Evento: arbitrage.opportunities.detected

```json
{
  "event_id": "uuid",
  "symbol": "BTC/USDT",
  "buy_exchange": "kraken",
  "sell_exchange": "binance",
  "buy_price": 99900.10,
  "sell_price": 100120.90,
  "gross_spread_pct": 0.22,
  "estimated_fees_pct": 0.08,
  "net_profit_pct": 0.14,
  "detected_at": "2026-06-17T10:00:00Z"
}
```
