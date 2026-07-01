# ADR-004 — PostgreSQL como banco principal

## Status
Aceito

## Contexto
O sistema precisa persistir usuários, preferências, histórico de oportunidades e consultas analíticas.

## Decisão
Adotar PostgreSQL como armazenamento principal, com possibilidade futura de TimescaleDB.

## Consequências
### Positivas
- Consistência transacional
- Bom suporte analítico
- Ecossistema maduro

### Negativas
- Requer tuning em alta escala
- Possível gargalo de escrita sem particionamento
