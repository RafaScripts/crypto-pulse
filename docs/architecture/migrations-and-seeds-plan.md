# Migrations e seeds planejados

## Migrations iniciais
1. create_users
2. create_user_preferences
3. create_alert_channels
4. create_exchanges
5. create_trading_pairs
6. create_exchange_fee_profiles
7. create_arbitrage_opportunities
8. create_dispatched_alerts
9. create_preference_join_tables

## Seeds iniciais
### Exchanges
- Binance
- Kraken

### Trading pairs
- BTC/USDT
- ETH/USDT
- SOL/USDT

### Fee profiles
- fee maker/taker inicial por exchange (valores configuráveis)

### Usuário admin local
- apenas para ambiente de desenvolvimento/homologação

## Decisão sobre ticks
No MVP, ticks normalizados não serão persistidos indiscriminadamente em PostgreSQL. O estado quente fica em Redis. Persistir apenas:
- oportunidades detectadas;
- registros de alerta;
- métricas/agregados futuros quando necessário.
