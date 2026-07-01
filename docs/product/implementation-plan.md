# Plano de implementação

## Sprint 0 — Definição e base
- consolidar stack oficial com NestJS
- fechar escopo do MVP
- definir ferramentas MCP e vínculo com ADRs
- organizar monorepo
- preparar Docker Compose

## Sprint 1 — Core de domínio
- modelar entidades principais
- criar schema inicial PostgreSQL
- implementar autenticação básica
- implementar configurações de usuário

## Sprint 2 — Market data
- integrar primeira exchange via WebSocket
- normalizar ticks
- armazenar estado quente em Redis
- expor health/status operacional

## Sprint 3 — Arbitragem e alertas
- implementar cálculo de spread e lucro líquido
- persistir oportunidades
- integrar alertas Telegram
- criar a tool MCP `analyze_arbitrage_opportunity`

## Sprint 4 — Arquitetura assistida por IA
- implementar servidor MCP em NestJS/Node
- criar a tool MCP `adr_advisor`
- carregar ADRs do projeto
- construir prompt estruturado para análise arquitetural
- testar com cliente MCP

## Sprint 5 — Dashboard e validação
- criar dashboard web mínimo
- listar oportunidades e status
- validar fluxos fim a fim
- documentar evidências de uso do cliente MCP

## Sprint 6 — Refino final
- testes integrados
- documentação final
- alinhamento com requisitos acadêmicos
- preparação para apresentação
