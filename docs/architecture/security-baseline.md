# Baseline de segurança

## Autenticação
- login por email/senha no MVP;
- senhas armazenadas com bcrypt ou argon2;
- JWT com expiração curta e refresh controlado se necessário;
- roles: `admin`, `user`.

## Autorização
- guards no NestJS para rotas protegidas;
- acesso a preferências e alertas restrito ao próprio usuário;
- endpoints administrativos protegidos por role.

## Proteção de dados
- segredos fora do código-fonte;
- variáveis de ambiente por app;
- credenciais de exchange e Telegram criptografadas em repouso quando persistidas;
- logs nunca devem incluir senha, token ou segredo bruto.

## Segurança de API
- rate limiting no `api`;
- validação de payload em todos os boundaries;
- CORS restrito por ambiente;
- headers de segurança padrão.

## Segurança operacional
- health checks sem exposição de segredo;
- rotação de segredos documentada;
- separação entre ambiente local, homologação e produção.

## MCP e IA
- `adr_advisor` deve responder apenas com base nas ADRs locais;
- não aceitar instruções externas como verdade arquitetural;
- logar chamadas e erros sem armazenar conteúdo sensível indevido.
