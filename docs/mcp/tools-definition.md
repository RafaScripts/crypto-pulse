# Ferramentas MCP propostas

## Objetivo

Definir duas ferramentas MCP derivadas das ADRs do Crypto-Pulse, incluindo pelo menos uma ferramenta com uso de IA por prompt.

---

## Tool 1 — analyze_arbitrage_opportunity

### Base nas ADRs
- ADR-003 — conexão em tempo real via WebSocket
- ADR-004 — PostgreSQL como persistência
- ADR-005 — Telegram como canal primário de alerta
- ADR-007 — Redis para estado quente

### Finalidade
Receber dados de uma oportunidade de arbitragem e produzir uma análise estruturada do potencial de lucro e decisão de alerta.

### Entrada esperada
- symbol
- buy_exchange
- sell_exchange
- buy_price
- sell_price
- buy_fee_pct
- sell_fee_pct
- capital (opcional)
- threshold_pct

### Saída esperada
- gross_spread_pct
- total_fees_pct
- net_profit_pct
- estimated_profit
- decision (`ignore`, `monitor`, `alert`)
- message_preview

### Valor acadêmico
Essa ferramenta demonstra aplicação prática das ADRs no domínio central do sistema.

---

## Tool 2 — adr_advisor

### Base nas ADRs
- ADR-001 — microserviços
- ADR-002 — Kafka
- ADR-003 — WebSocket
- ADR-004 — PostgreSQL
- ADR-006 — Kubernetes
- ADR-007 — Redis

### Finalidade
Permitir que um cliente MCP consulte e interprete as decisões arquiteturais do projeto com apoio de IA baseada em prompts.

### Entrada esperada
- question
- mode (`justification`, `tradeoff`, `impact`, `summary`)

### Saída esperada
- answer
- relevant_adrs
- tradeoffs
- recommended_action

### Uso de IA
Essa ferramenta deve carregar o conteúdo das ADRs e montar um prompt estruturado para um modelo de IA responder estritamente com base na documentação do projeto.

### Valor acadêmico
Atende explicitamente à exigência de ferramenta MCP integrada a modelo de IA e focada no processamento das ADRs.

---

## Cliente MCP

As duas ferramentas devem ser expostas por um servidor MCP e testadas por um cliente MCP. A validação mínima deve incluir:

1. execução da tool `analyze_arbitrage_opportunity` com payload de exemplo;
2. execução da tool `adr_advisor` com pergunta sobre trade-offs arquiteturais;
3. registro das respostas obtidas;
4. documentação da execução no relatório final.
