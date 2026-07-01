# Planejamento de uso do Kafka

## Objetivo
Definir como o Kafka será utilizado no Crypto-Pulse para suportar uma arquitetura efetivamente orientada a microserviços, mantendo desacoplamento entre ingestão, análise, persistência, notificação e observabilidade operacional.

## Papel do Kafka na arquitetura

O Kafka será o backbone assíncrono entre os principais serviços. Em vez de comunicação ponto a ponto entre todos os componentes, eventos de domínio e eventos operacionais serão publicados em tópicos e consumidos por serviços independentes.

## Serviços produtores e consumidores

### 1. market-ingestor
**Produz:**
- `market.ticks.normalized.v1`
- `market.orderbook.normalized.v1` (opcional no MVP)
- `market.exchange.status.v1`

**Consome:**
- nenhum inicialmente

### 2. arbitrage-engine
**Consome:**
- `market.ticks.normalized.v1`
- `market.orderbook.normalized.v1` (se habilitado)

**Produz:**
- `arbitrage.opportunities.detected.v1`
- `arbitrage.opportunities.filtered.v1` (opcional para auditoria)

### 3. persistence-service
**Consome:**
- `arbitrage.opportunities.detected.v1`
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`
- `market.exchange.status.v1`

**Produz:**
- nenhum inicialmente

### 4. notification-service
**Consome:**
- `arbitrage.opportunities.detected.v1`

**Produz:**
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`
- `alerts.dispatch.failed.v1`

### 5. api-gateway / dashboard backend
**Consome:**
- `arbitrage.opportunities.detected.v1`
- `market.exchange.status.v1`
- `alerts.dispatched.v1`

**Produz:**
- opcionalmente `user.preferences.updated.v1`

### 6. observability/audit worker
**Consome:**
- todos os eventos relevantes para trilha de auditoria ou métricas derivadas

## Tópicos Kafka planejados

### Tópicos de mercado
- `market.ticks.normalized.v1`
- `market.orderbook.normalized.v1`
- `market.exchange.status.v1`

### Tópicos de arbitragem
- `arbitrage.opportunities.detected.v1`
- `arbitrage.opportunities.filtered.v1`

### Tópicos de alerta
- `alerts.dispatch.requested.v1`
- `alerts.dispatched.v1`
- `alerts.dispatch.failed.v1`

### Tópicos de configuração
- `user.preferences.updated.v1`
- `alert.channels.updated.v1`

## Estratégia de particionamento

### `market.ticks.normalized.v1`
- chave: `symbol`
- objetivo: manter ordenação por par monitorado
- particionamento inicial sugerido: 6 partições

### `arbitrage.opportunities.detected.v1`
- chave: `symbol`
- objetivo: distribuir carga por par sem perder ordenação local
- particionamento inicial sugerido: 3 partições

### `alerts.dispatch.requested.v1`
- chave: `user_id`
- objetivo: preservar coerência de entrega por usuário/canal
- particionamento inicial sugerido: 3 partições

## Consumer groups planejados

### Grupo `arbitrage-engine`
Consome ticks normalizados. Permite escalar múltiplas instâncias do motor de arbitragem.

### Grupo `notification-service`
Consome oportunidades detectadas. Permite escalar envio de alertas.

### Grupo `persistence-service`
Consome eventos para persistência sem impactar produtores.

### Grupo `dashboard-projection`
Consome eventos e atualiza projeções ou cache do dashboard.

## Garantias e semântica

### Entrega
- assumir modelo `at-least-once`;
- consumidores devem ser idempotentes;
- duplicação eventual é tratada por chave de negócio e janelas de deduplicação.

### Ordenação
- garantida apenas por partição;
- por isso a chave dos tópicos deve refletir o agregado relevante (`symbol`, `user_id`).

### Replay
- eventos podem ser reprocessados para reconstruir projeções, auditoria ou debugging.

## Retenção de tópicos

### Mercado
- retenção curta a média (ex.: 1 a 3 dias) para alto volume;
- uso principal: processamento near real-time e debugging recente.

### Arbitragem
- retenção média (ex.: 7 dias) para auditoria e replay.

### Alertas
- retenção média (ex.: 7 a 14 dias) para troubleshooting.

### Configuração
- retenção maior se tratado como trilha de mudanças.

## Contratos e versionamento
- todos os tópicos com sufixo de versão (`.v1`);
- evolução incompatível exige novo tópico ou novo schema versionado;
- schemas devem ser publicados em `contracts/events/`.

## Fluxo fim a fim com Kafka
1. `market-ingestor` recebe tick via WebSocket.
2. Publica em `market.ticks.normalized.v1`.
3. `arbitrage-engine` consome, calcula oportunidade e publica em `arbitrage.opportunities.detected.v1`.
4. `notification-service` consome oportunidade, decide alerta e publica `alerts.dispatch.requested.v1` / `alerts.dispatched.v1`.
5. `persistence-service` consome eventos e grava no PostgreSQL.
6. `api/dashboard` consome eventos para projeções em tempo real.

## Estratégia de adoção

### Fase 1 — MVP com Kafka mínimo
- subir Kafka no ambiente local;
- publicar apenas `market.ticks.normalized.v1` e `arbitrage.opportunities.detected.v1`;
- notification e persistence já como consumidores separados.

### Fase 2 — Expansão
- adicionar tópicos de alertas e status de exchange;
- criar projeções para dashboard;
- instrumentar consumer lag.

### Fase 3 — Hardening
- retries controlados;
- dead-letter strategy quando fizer sentido;
- replay operacional documentado;
- tuning de partições e retenção.

## Riscos e mitigação

### Risco: complexidade operacional
Mitigação: começar com poucos tópicos e contracts bem controlados.

### Risco: duplicidade de processamento
Mitigação: idempotência em persistence e notification.

### Risco: schemas frouxos
Mitigação: versionamento explícito + validação contratual.

### Risco: debug difícil
Mitigação: correlation id, logs estruturados e métricas de lag.
