# Arquitetura do Crypto-Pulse

## Objetivo

Monitorar múltiplas exchanges em tempo real, detectar oportunidades de arbitragem com baixa latência e notificar usuários de forma confiável.

## Contexto

O sistema precisa atender:

- latência p95 < 100ms entre ingestão e alerta;
- operação 24/7 com 99.9% de disponibilidade;
- suporte a alto volume de mensagens;
- persistência de histórico e preferências;
- autenticação e dashboard em tempo real.

## Domínios principais

### 1. Market Data
Responsável por conexão com exchanges, normalização de ticks/orderbooks e publicação de eventos.

### 2. Arbitrage Detection
Responsável por correlacionar preços entre exchanges, calcular spread, aplicar taxas e identificar oportunidades.

### 3. Notifications
Responsável por política de alertas, deduplicação, rate limit e entrega via Telegram/Push.

### 4. User & Access
Responsável por autenticação, perfis, preferências e canais configurados.

### 5. History & Reporting
Responsável por armazenamento histórico, consultas e geração de relatórios.

## Visão de containers

- Ingestion Service
- Arbitrage Engine
- Notification Service
- API Gateway
- Auth Service
- Persistence Service
- Web Dashboard
- Kafka
- Redis
- PostgreSQL

## Fluxo principal

1. Exchanges publicam dados via WebSocket.
2. Ingestion Service normaliza e publica eventos de mercado.
3. Arbitrage Engine consome eventos, calcula oportunidades e publica alert candidates.
4. Notification Service aplica regras de entrega e envia alertas.
5. Persistence Service armazena histórico e configurações.
6. API Gateway expõe APIs para dashboard e integrações.
7. Web Dashboard consome APIs e stream em tempo real.

## Decisões estruturais

- comunicação assíncrona por eventos entre serviços críticos;
- cache quente em Redis para estado corrente;
- PostgreSQL para dados transacionais e históricos;
- Kubernetes como alvo de produção;
- observabilidade com logs, métricas e tracing.
