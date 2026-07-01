# Schema inicial de banco de dados

## users
- id UUID PK
- name VARCHAR(120) NOT NULL
- email VARCHAR(255) UNIQUE NOT NULL
- password_hash VARCHAR(255) NOT NULL
- role VARCHAR(20) NOT NULL DEFAULT 'user'
- created_at TIMESTAMP NOT NULL DEFAULT now()
- updated_at TIMESTAMP NOT NULL DEFAULT now()

## user_preferences
- id UUID PK
- user_id UUID NOT NULL FK -> users(id)
- min_profit_threshold_pct NUMERIC(10,4) NOT NULL DEFAULT 0.1000
- notifications_enabled BOOLEAN NOT NULL DEFAULT true
- created_at TIMESTAMP NOT NULL DEFAULT now()
- updated_at TIMESTAMP NOT NULL DEFAULT now()

## user_preference_pairs
- id UUID PK
- user_preference_id UUID NOT NULL FK -> user_preferences(id)
- trading_pair_id UUID NOT NULL FK -> trading_pairs(id)

## user_preference_exchanges
- id UUID PK
- user_preference_id UUID NOT NULL FK -> user_preferences(id)
- exchange_id UUID NOT NULL FK -> exchanges(id)

## alert_channels
- id UUID PK
- user_id UUID NOT NULL FK -> users(id)
- type VARCHAR(20) NOT NULL
- target VARCHAR(255) NOT NULL
- enabled BOOLEAN NOT NULL DEFAULT true
- created_at TIMESTAMP NOT NULL DEFAULT now()
- updated_at TIMESTAMP NOT NULL DEFAULT now()

## exchanges
- id UUID PK
- code VARCHAR(50) UNIQUE NOT NULL
- name VARCHAR(120) NOT NULL
- status VARCHAR(20) NOT NULL DEFAULT 'active'
- created_at TIMESTAMP NOT NULL DEFAULT now()

## trading_pairs
- id UUID PK
- symbol VARCHAR(30) UNIQUE NOT NULL
- base_asset VARCHAR(20) NOT NULL
- quote_asset VARCHAR(20) NOT NULL
- active BOOLEAN NOT NULL DEFAULT true
- created_at TIMESTAMP NOT NULL DEFAULT now()

## exchange_fee_profiles
- id UUID PK
- exchange_id UUID NOT NULL FK -> exchanges(id)
- maker_fee_pct NUMERIC(10,4) NOT NULL
- taker_fee_pct NUMERIC(10,4) NOT NULL
- withdrawal_fee_flat NUMERIC(18,8)
- updated_at TIMESTAMP NOT NULL DEFAULT now()

## arbitrage_opportunities
- id UUID PK
- trading_pair_id UUID NOT NULL FK -> trading_pairs(id)
- buy_exchange_id UUID NOT NULL FK -> exchanges(id)
- sell_exchange_id UUID NOT NULL FK -> exchanges(id)
- buy_price NUMERIC(18,8) NOT NULL
- sell_price NUMERIC(18,8) NOT NULL
- gross_spread_pct NUMERIC(10,4) NOT NULL
- total_fees_pct NUMERIC(10,4) NOT NULL
- net_profit_pct NUMERIC(10,4) NOT NULL
- estimated_profit_amount NUMERIC(18,8)
- detected_at TIMESTAMP NOT NULL
- status VARCHAR(20) NOT NULL DEFAULT 'detected'

## dispatched_alerts
- id UUID PK
- opportunity_id UUID NOT NULL FK -> arbitrage_opportunities(id)
- user_id UUID NOT NULL FK -> users(id)
- alert_channel_id UUID NOT NULL FK -> alert_channels(id)
- message_payload JSONB NOT NULL
- delivery_status VARCHAR(20) NOT NULL DEFAULT 'pending'
- delivered_at TIMESTAMP
- error_message TEXT

## Índices recomendados
- users(email)
- exchanges(code)
- trading_pairs(symbol)
- arbitrage_opportunities(detected_at DESC)
- arbitrage_opportunities(trading_pair_id, detected_at DESC)
- arbitrage_opportunities(buy_exchange_id, sell_exchange_id, detected_at DESC)
- dispatched_alerts(user_id, delivered_at DESC)
