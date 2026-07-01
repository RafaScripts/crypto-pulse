# Escopo do MVP

## Objetivo do MVP

Entregar uma versão funcional do Crypto-Pulse capaz de monitorar oportunidades de arbitragem em tempo real, gerar alertas via Telegram, expor um dashboard web mínimo e demonstrar duas ferramentas MCP derivadas das ADRs do projeto.

## Itens incluídos no MVP

### Mercado e arbitragem
- integração com Binance e Kraken no MVP inicial;
- monitoramento dos pares `BTC/USDT`, `ETH/USDT` e `SOL/USDT`;
- ingestão via WebSocket com reconexão automática;
- normalização de ticks de mercado;
- cálculo de spread bruto, taxas totais e lucro líquido;
- deduplicação de oportunidades em janela curta;
- persistência de oportunidades detectadas.

### Alertas
- canal principal: Telegram;
- threshold configurável por usuário;
- geração de mensagem de alerta com resumo da oportunidade;
- registro de envio e falha de entrega.

### Usuários e configurações
- autenticação com email/senha;
- perfis `admin` e `user`;
- configuração de pares monitorados;
- configuração de exchanges preferidas;
- configuração de threshold mínimo;
- ativação/desativação de alertas.

### Dashboard web
- login;
- visão geral com status das exchanges;
- lista de oportunidades recentes;
- histórico básico de alertas;
- tela de configurações.

### MCP
- tool `analyze_arbitrage_opportunity` implementada e testada;
- tool `adr_advisor` implementada com IA por prompt e testada;
- execução validada por Cliente MCP.

## Itens fora do MVP
- push mobile nativo;
- OAuth com Google/GitHub;
- relatórios PDF/CSV;
- machine learning/predição;
- suporte a mais de duas exchanges no primeiro ciclo;
- Kubernetes em produção como exigência de entrega inicial;
- service mesh;
- chaos engineering.

## Critérios de sucesso do MVP
- ingestão ativa em pelo menos 2 exchanges;
- oportunidades calculadas corretamente com taxas;
- alerta Telegram funcionando fim a fim;
- dashboard exibindo estado mínimo operacional;
- tools MCP funcionando por cliente MCP;
- documentação suficiente para demonstração acadêmica e continuidade do desenvolvimento.
