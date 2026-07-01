# arbitrage-engine

## Responsabilidade
Consumir dados normalizados, calcular spread e lucro líquido, identificar oportunidades elegíveis.

## Entradas
- `market.ticks.normalized`

## Saídas
- `arbitrage.opportunities.detected`

## Regras iniciais
- considerar taxas por exchange
- aplicar threshold mínimo configurável
- deduplicar alertas repetidos por janela curta
