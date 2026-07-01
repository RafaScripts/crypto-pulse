# Modelo de domínio

## Contexto principal

O Crypto-Pulse monitora preços de múltiplas exchanges, detecta oportunidades de arbitragem, persiste histórico e dispara alertas conforme preferências configuradas por usuário.

## Agregados e entidades

### User
Representa o usuário autenticado do sistema.

Campos principais:
- id
- name
- email
- password_hash
- role (`admin`, `user`)
- created_at
- updated_at

### UserPreference
Configuração operacional por usuário.

Campos principais:
- id
- user_id
- min_profit_threshold_pct
- preferred_pairs
- preferred_exchanges
- notifications_enabled
- created_at
- updated_at

### AlertChannel
Canal configurado de entrega de alertas.

Campos principais:
- id
- user_id
- type (`telegram`, `push`, `email`)
- target
- enabled
- created_at
- updated_at

### Exchange
Catálogo de exchanges suportadas.

Campos principais:
- id
- code (`binance`, `coinbase`, `kraken`)
- name
- status
- created_at

### TradingPair
Par de moedas monitorado.

Campos principais:
- id
- symbol (`BTC/USDT`)
- base_asset
- quote_asset
- active
- created_at

### MarketTick
Representa um tick normalizado recebido de uma exchange.

Campos principais:
- id
- exchange_id
- trading_pair_id
- bid_price
- ask_price
- event_time
- ingest_time

Observação:
Para alta frequência, pode ser apenas transitório/event-driven no MVP, persistindo somente quando necessário.

### ArbitrageOpportunity
Entidade principal do domínio de arbitragem.

Campos principais:
- id
- trading_pair_id
- buy_exchange_id
- sell_exchange_id
- buy_price
- sell_price
- gross_spread_pct
- total_fees_pct
- net_profit_pct
- estimated_profit_amount
- detected_at
- status (`detected`, `alerted`, `dismissed`, `expired`)

### DispatchedAlert
Registro de entrega de alerta.

Campos principais:
- id
- opportunity_id
- user_id
- alert_channel_id
- message_payload
- delivery_status (`pending`, `sent`, `failed`)
- delivered_at
- error_message

## Regras de domínio

1. Uma oportunidade de arbitragem só é elegível quando `net_profit_pct > min_profit_threshold_pct`.
2. Alertas devem respeitar preferências do usuário e canais habilitados.
3. Oportunidades repetidas em janela curta devem ser deduplicadas.
4. O cálculo deve considerar taxas de compra e venda por exchange.
5. O status operacional de exchange impacta ingestão e elegibilidade.
