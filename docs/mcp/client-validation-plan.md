# Plano de validação com Cliente MCP

## Objetivo
Demonstrar que as duas ferramentas MCP foram expostas por um servidor MCP funcional e utilizadas por um Cliente MCP.

## Pré-requisitos
- servidor MCP em execução;
- tools registradas: `analyze_arbitrage_opportunity`, `adr_advisor`;
- ADRs acessíveis localmente pelo servidor;
- modelo configurado para a tool `adr_advisor`.

## Cenários obrigatórios

### Cenário 1 — analyze_arbitrage_opportunity
Entrada:
- payload de oportunidade com lucro líquido positivo;
Saída esperada:
- métricas calculadas;
- decisão `monitor` ou `alert` conforme threshold.

### Cenário 2 — analyze_arbitrage_opportunity sem lucro
Entrada:
- payload com taxas superiores ao spread;
Saída esperada:
- decisão `ignore`.

### Cenário 3 — adr_advisor justificando ADR
Entrada:
- pergunta: `Por que Kafka foi escolhido?`
Saída esperada:
- resposta citando ADR-002 e seus trade-offs.

### Cenário 4 — adr_advisor impacto arquitetural
Entrada:
- pergunta: `Qual o impacto de remover Redis?`
Saída esperada:
- resposta apontando impacto na latência/estado quente e vínculo com ADR-007.

## Evidências a registrar
- comando ou interface usada no cliente MCP;
- payload enviado;
- resposta recebida;
- print ou log da execução;
- observações de sucesso/falha.

## Entregáveis
- seção no relatório com evidências;
- anexos com prints/logs;
- roteiro de reprodução local.
