# Fluxos de runtime

## Fluxo 1 — Ingestão de mercado
1. `market-ingestor` abre conexão WebSocket com Binance/Kraken.
2. Recebe mensagem bruta de ticker/orderbook.
3. Normaliza payload para contrato interno.
4. Atualiza estado quente no Redis.
5. Emite evento interno ou chamada para o `arbitrage-engine`.
6. Registra métricas de latência, reconnect e falha.

## Fluxo 2 — Detecção de arbitragem
1. `arbitrage-engine` lê o estado atual do par nas exchanges monitoradas.
2. Calcula spread bruto.
3. Consulta perfil de taxas por exchange.
4. Calcula custo total e lucro líquido.
5. Verifica threshold configurado.
6. Deduplica oportunidades na janela ativa.
7. Persiste `arbitrage_opportunity`.
8. Se elegível, envia solicitação de notificação.

## Fluxo 3 — Envio de alerta Telegram
1. O módulo de notificação recebe oportunidade elegível.
2. Busca usuários/canais habilitados.
3. Gera mensagem formatada.
4. Envia via integração Telegram.
5. Registra sucesso/falha em `dispatched_alerts`.
6. Atualiza status da oportunidade quando aplicável.

## Fluxo 4 — Dashboard web
1. Usuário autentica por email/senha.
2. `api` emite JWT.
3. Frontend consulta overview, oportunidades e configurações.
4. WebSocket gateway envia atualizações em tempo real.
5. Usuário altera preferências.
6. API persiste novas regras.

## Fluxo 5 — Tool MCP analyze_arbitrage_opportunity
1. Cliente MCP chama a tool com payload estruturado.
2. `mcp-server` valida entrada.
3. Executa cálculo determinístico.
4. Retorna métricas e decisão.
5. Opcionalmente gera preview da mensagem.

## Fluxo 6 — Tool MCP adr_advisor
1. Cliente MCP envia pergunta arquitetural.
2. `mcp-server` carrega ADRs locais.
3. Monta prompt estruturado com contexto permitido.
4. Chama modelo de IA.
5. Normaliza saída no formato contratual.
6. Retorna resposta com ADRs relevantes e trade-offs.

## Tratamento de erro
- reconnect exponencial em falhas WebSocket;
- timeout e retry limitado para Telegram;
- fallback controlado para ausência de taxa configurada;
- resposta explícita quando `adr_advisor` não encontrar base documental suficiente.
