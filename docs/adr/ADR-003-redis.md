# ADR-003 — Redis para estado quente

## Status
Aceito

## Contexto
O motor de arbitragem precisa acessar o estado mais recente com latência mínima.

## Decisão
Usar Redis para manter preços correntes, snapshots resumidos e estruturas de apoio à detecção.

## Consequências
### Positivas
- Leituras rápidas
- Menor pressão no banco principal

### Negativas
- Complexidade de invalidação
- Cuidado com consistência eventual
