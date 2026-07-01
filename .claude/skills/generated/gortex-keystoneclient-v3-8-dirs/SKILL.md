---
name: gortex-keystoneclient-v3-8-dirs
description: "Work in the keystoneclient/v3 +8 dirs area — 805 symbols across 48 files (93% cohesion)"
---

# keystoneclient/v3 +8 dirs

805 symbols | 48 files | 93% cohesion

## When to Use

Use this skill when working on files in:
- `external-call::dep:keystoneclient.base`
- `external-call::dep:keystoneclient.v3.contrib.oauth1.utils`
- `external-call::dep:keystoneclient.v3.policies`
- `os_venv/lib/python3.12/site-packages/keystoneclient/adapter.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/base.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_base.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/certificates.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/ec2.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/endpoints.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/extensions.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/roles.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/services.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/tenants.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/tokens.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/users.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/access_rules.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/application_credentials.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/auth.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/endpoint_filter.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/endpoint_policy.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/base.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/identity_providers.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/mappings.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/protocols.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/service_providers.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/access_tokens.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/auth.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/consumers.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/request_tokens.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/simple_cert.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/trusts.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/credentials.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/domains.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/ec2.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/endpoint_groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/endpoints.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/limits.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/policies.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/projects.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/regions.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/registered_limits.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/role_assignments.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/roles.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/services.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/v3/users.py`
- `services/api-gateway/src/main.ts`

## Key Files

| File | Symbols |
|------|---------|
| `external-call::dep:keystoneclient.base` | keystoneclient.base |
| `external-call::dep:keystoneclient.v3.contrib.oauth1.utils` | keystoneclient.v3.contrib.oauth1.utils |
| `external-call::dep:keystoneclient.v3.policies` | keystoneclient.v3.policies |
| `os_venv/lib/python3.12/site-packages/keystoneclient/adapter.py` | url, kwargs, head |
| `os_venv/lib/python3.12/site-packages/keystoneclient/base.py` | kwargs, kwargs, kwargs, obj_class, url, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_base.py` | test_put, test_update, test_human_id, test_resource_repr, test_put, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/certificates.py` | client, __init__, get_ca_certificate, get_signing_certificate, CertificatesManager |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/ec2.py` | access, user_id, delete, get, user_id, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/endpoints.py` | list, EndpointManager, id, delete |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/extensions.py` | list, ExtensionManager |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/roles.py` | role, get, tenant, tenant, tenant, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/services.py` | id, id, get, delete, list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/tenants.py` | role, limit, tenant, create, enabled, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/tokens.py` | validate_access_info, validate, token, get_revoked, token, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v2_0/users.py` | tenant, get, user, update_enabled, user, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/access_rules.py` | access_rule, access_rule, delete, user, get, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/application_credentials.py` | list, kwargs, delete, update, user, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/auth.py` | AuthManager, domains, projects, systems |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/endpoint_filter.py` | list_projects_for_endpoint, endpoint_group, project, endpoint, check_endpoint_in_project, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/endpoint_policy.py` | policy, region, service, policy, policy, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/base.py` | EntityManager, list |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/identity_providers.py` | identity_provider, id, get, kwargs, list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/mappings.py` | mapping, MappingManager, get, mapping_id, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/protocols.py` | mapping, update, identity_provider, request_body, delete, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/federation/service_providers.py` | id, kwargs, kwargs, kwargs, service_provider, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/access_tokens.py` | AccessTokenManager, request_key, consumer_secret, consumer_key, verifier, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/auth.py` | auth, headers, kwargs, kwargs, session, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/consumers.py` | create, get, update, description, consumer, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/request_tokens.py` | consumer_key, create, project, request_token, roles, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/oauth1/utils.py` | body, get_oauth_token_from_body |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/simple_cert.py` | get_ca_certificates, get_certificates, __init__, SimpleCertManager, client |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/contrib/trusts.py` | kwargs, delete, remaining_uses, trust, trust, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/credentials.py` | credential, get, update, list, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/domains.py` | domain, enabled, domain, name, delete, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/ec2.py` | user_id, access, EC2Manager, access, list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/endpoint_groups.py` | kwargs, create, check, kwargs, endpoint_group, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/endpoints.py` | interface, interface, EndpointManager, enabled, service, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/groups.py` | name, GroupManager, kwargs, kwargs, delete, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/limits.py` | delete, service, region, list, region, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/policies.py` | type, get, blob, delete, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/projects.py` | project, kwargs, create, tags, enabled, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/regions.py` | list, region, kwargs, description, enabled, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/registered_limits.py` | get, RegisteredLimitManager, description, list, resource_name, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/role_assignments.py` | put, kwargs |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/roles.py` | delete, prior_role, check, domain, user, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/services.py` | description, service, service, description, name, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/v3/users.py` | update, get, user, name, group, ... |
| `services/api-gateway/src/main.ts` | bootstrap, port, configService, brokers, app, ... |

## Connected Communities

- **keystoneclient/v3 +12 dirs** (42 cross-edges)
- **. +61 dirs** (9 cross-edges)
- **functional/cloud +53 dirs** (4 cross-edges)
- **. +23 dirs · fixtures** (4 cross-edges)
- **openstackclient/api +3 dirs** (4 cross-edges)
- **site-packages/keystoneclient · post** (3 cross-edges)
- **. +2 dirs · openstack.config.cloud_region** (2 cross-edges)
- **functional/v3 +5 dirs** (2 cross-edges)
- **site-packages/keystoneclient · _post** (2 cross-edges)
- **site-packages/keystoneclient · request · baseclient** (1 cross-edges)
- **. +22 dirs** (1 cross-edges)
- **keystoneclient/v3 · build_url** (1 cross-edges)
- **site-packages/keystoneclient · request · adapter** (1 cross-edges)
- **tests/unit · mock_request_method** (1 cross-edges)
- **. +12 dirs · oslo_serialization.jsonutils** (1 cross-edges)
- **unit/v3 +4 dirs** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-3065"
smart_context with task: "understand keystoneclient/v3 +8 dirs", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
