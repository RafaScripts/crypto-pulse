# notification-service

## Responsabilidade
Receber oportunidades e entregar alertas via Telegram/Push.

## Entradas
- `arbitrage.opportunities.detected`
- preferências do usuário

## Saídas
- `alerts.dispatched`

## Regras iniciais
- rate limiting por usuário/canal
- templates de mensagem
- retries com backoff
