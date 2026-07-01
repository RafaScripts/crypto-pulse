# ADR-001 — Arquitetura baseada em microserviços

## Status
Aceito

## Contexto
O sistema precisa de alta disponibilidade, escalabilidade independente e isolamento de falhas para ingestão, análise e entrega de alertas.

## Decisão
Adotar arquitetura de microserviços com serviços orientados a domínio.

## Consequências
### Positivas
- Escala independente por carga
- Isolamento de falhas
- Evolução modular

### Negativas
- Maior complexidade operacional
- Necessidade de observabilidade distribuída
- Mais esforço de consistência entre serviços
