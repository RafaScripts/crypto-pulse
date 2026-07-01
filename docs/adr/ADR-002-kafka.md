# ADR-002 — Kafka como backbone de eventos

## Status
Aceito

## Contexto
Há alto volume de eventos de mercado e necessidade de desacoplamento entre ingestão, análise, persistência e notificação.

## Decisão
Usar Kafka para transporte de eventos assíncronos e replay.

## Consequências
### Positivas
- Alta vazão
- Replay de eventos
- Consumidores independentes

### Negativas
- Operação mais complexa
- Custo de infraestrutura
- Necessidade de disciplina de contratos
