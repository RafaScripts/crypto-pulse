# Estratégia de testes

## Pirâmide de testes

### Unitários
- regras de cálculo de arbitragem;
- threshold e deduplicação;
- composição de mensagens Telegram;
- parsing e normalização de ticks;
- tool `analyze_arbitrage_opportunity`.

### Integração
- repositórios com PostgreSQL;
- Redis para estado quente;
- API auth/preferences/opportunities;
- integração Telegram mockada;
- carregamento de ADRs no `adr_advisor`.

### E2E
- login -> configuração -> oportunidade -> alerta;
- dashboard consumindo dados mínimos;
- cliente MCP chamando as duas tools.

## Casos obrigatórios MCP
- chamada válida de `analyze_arbitrage_opportunity`;
- cenário sem lucro líquido;
- pergunta de justificativa para Kafka;
- pergunta sobre impacto de remover Redis;
- resposta do `adr_advisor` com base insuficiente deve declarar limitação.

## Critérios mínimos
- cobertura >= 80% no core de domínio;
- todos os contratos MCP com testes felizes e negativos;
- smoke test do ambiente local antes de demo.
