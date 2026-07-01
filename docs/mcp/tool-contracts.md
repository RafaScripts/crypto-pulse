# Contratos das ferramentas MCP

## Tool: analyze_arbitrage_opportunity

### Descrição
Analisa uma oportunidade de arbitragem e retorna métricas de spread, taxas, lucro líquido e decisão de alerta.

### Input schema
```json
{
  "symbol": "BTC/USDT",
  "buy_exchange": "kraken",
  "sell_exchange": "binance",
  "buy_price": 99900.10,
  "sell_price": 100120.90,
  "buy_fee_pct": 0.10,
  "sell_fee_pct": 0.10,
  "capital": 1000,
  "threshold_pct": 0.15
}
```

### Output schema
```json
{
  "gross_spread_pct": 0.2200,
  "total_fees_pct": 0.2000,
  "net_profit_pct": 0.0200,
  "estimated_profit": 0.20,
  "decision": "ignore",
  "message_preview": "Oportunidade detectada..."
}
```

### Regras
- `gross_spread_pct = ((sell_price - buy_price) / buy_price) * 100`
- `total_fees_pct = buy_fee_pct + sell_fee_pct`
- `net_profit_pct = gross_spread_pct - total_fees_pct`
- `decision = alert` se `net_profit_pct >= threshold_pct`
- `decision = monitor` se positivo mas abaixo do threshold
- `decision = ignore` se não houver lucro líquido positivo

---

## Tool: adr_advisor

### Descrição
Responde perguntas arquiteturais com base nas ADRs do projeto, usando um modelo de IA e um prompt estruturado.

### Input schema
```json
{
  "question": "Por que Kafka foi escolhido?",
  "mode": "justification"
}
```

### Output schema
```json
{
  "answer": "Kafka foi escolhido por...",
  "relevant_adrs": ["ADR-002"],
  "tradeoffs": ["complexidade operacional", "alto throughput"],
  "recommended_action": "manter Kafka apenas se o volume e a necessidade de replay justificarem"
}
```

### Modos suportados
- `justification`
- `tradeoff`
- `impact`
- `summary`

### Regras de prompt
- responder com base apenas nas ADRs carregadas;
- explicitar trade-offs;
- não inventar decisões não documentadas;
- quando faltar informação, dizer isso claramente.
