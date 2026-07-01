---
name: gortex-cinderclient-v3-3-dirs-cinderclient-shell-utils
description: "Work in the cinderclient/v3 +3 dirs · cinderclient.shell_utils area — 574 symbols across 30 files (87% cohesion)"
---

# cinderclient/v3 +3 dirs · cinderclient.shell_utils

574 symbols | 30 files | 87% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:cinderclient._i18n._`
- `external-call::dep:cinderclient.client`
- `external-call::dep:cinderclient.exceptions`
- `external-call::dep:cinderclient.shell_utils`
- `os_venv/lib/python3.12/site-packages/cinderclient/api_versions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/exceptions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/shell.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_exceptions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_http.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_shell.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_utils.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/attachments.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/capabilities.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/clusters.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/consistencygroups.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/group_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/limits.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/qos_specs.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/quota_classes.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/shell.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/shell_base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_backups_restore.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_snapshots.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes_base.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | namedtuple, fromkeys |
| `external-call::dep:cinderclient._i18n._` | cinderclient._i18n._ |
| `external-call::dep:cinderclient.client` | cinderclient.client |
| `external-call::dep:cinderclient.exceptions` | cinderclient.exceptions |
| `external-call::dep:cinderclient.shell_utils` | cinderclient.shell_utils |
| `os_venv/lib/python3.12/site-packages/cinderclient/api_versions.py` | get_api_version, server_end_version, headers, get_highest_version, client, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/base.py` | cache_type, val, cache_type, completion_cache, write_to_completion_cache, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/client.py` | cert, get_volume_api_version_from_endpoint, kwargs, http_log_debug, get_volume_api_version_from_endpoint, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/exceptions.py` | start_version, end_version, argument_name, __init__, UnsupportedAttribute, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/shell.py` | requested, end_version, check_duplicate_filters, _run_extension_hooks, _build_versioned_help_message, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py` | test_resp_does_not_log_sensitive_info, ClientTestSensitiveInfo, mock_request, test_req_does_not_log_sensitive_info, ClientTest, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_exceptions.py` | test_from_response_overlimit_gmt, mock_utcnow |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_http.py` | get_authed_endpoint_url, test_os_endpoint_url, test_get_no_auth_url, retries |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_shell.py` | test_default_auth_env |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_utils.py` | expected, test_print_list_with_list_no_sort, PrintListTestCase, test_print_list_with_return, test__pretty_format_dict, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/attachments.py` | show, id |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/capabilities.py` | __repr__, Capabilities |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/clusters.py` | show, name, binary |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/consistencygroups.py` | ConsistencygroupManager, cgsnapshot_id, list, name, user_id, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/group_types.py` | get_keys, list, is_public, search_opts, is_public |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/limits.py` | tenant_id, absolute, LimitsManager, get |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/qos_specs.py` | name, create, specs |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/quota_classes.py` | QuotaClassSet, update, kwargs, args |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/shell.py` | args, cs, args, args, do_backup_update, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/shell_base.py` | cs, args, cs, cs, cs, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_backups_restore.py` | VolumeBackupRestoreManager, name, volume_id, restore, backup_id |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_snapshots.py` | marker, limit, metadata, cluster, host, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volume_types.py` | __repr__, set_keys, keys, is_public, metadata, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes.py` | metadata, availability_zone, manage, description, ref, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes_base.py` | get_pools, extend, new_size, volume, detail |

## Connected Communities

- **site-packages/cinderclient +3 dirs** (28 cross-edges)
- **. +6 dirs · assert_called** (13 cross-edges)
- **. +6 dirs · oslo_utils.strutils** (13 cross-edges)
- **. +37 dirs · get** (9 cross-edges)
- **cinderclient/v3 +3 dirs · _list** (6 cross-edges)
- **cinderclient/v3 +4 dirs** (5 cross-edges)
- **site-packages/oslo_utils +5 dirs** (5 cross-edges)
- **site-packages/cinderclient · _create** (4 cross-edges)
- **. +83 dirs** (3 cross-edges)
- **cinderclient/v3 · delete · messages** (3 cross-edges)
- **site-packages/cinderclient · request** (3 cross-edges)
- **. +23 dirs · fixtures** (3 cross-edges)
- **functional/cloud +53 dirs** (3 cross-edges)
- **openstackclient/common +6 dirs** (2 cross-edges)
- **_vendor/requests +7 dirs** (2 cross-edges)
- **unit/loading +11 dirs** (2 cross-edges)
- **site-packages/cinderclient · _get** (2 cross-edges)
- **. +64 dirs** (1 cross-edges)
- **. +6 dirs · StreamHandler** (1 cross-edges)
- **python3.12/site-packages · items · shell** (1 cross-edges)
- **cinderclient/v3 · delete_metadata** (1 cross-edges)
- **pygments/lexers +11 dirs** (1 cross-edges)
- **. +12 dirs · oslo_serialization.jsonutils** (1 cross-edges)
- **site-packages/cinderclient · _find_actions** (1 cross-edges)
- **cinderclient/v3 · list** (1 cross-edges)
- **. +4 dirs · urlsplit** (1 cross-edges)
- **. +3 dirs · oslo_utils.encodeutils** (1 cross-edges)
- **site-packages/cinderclient · _get_keystone_session** (1 cross-edges)
- **cinderclient/v3 · do_metadata** (1 cross-edges)
- **site-packages/osc_lib +6 dirs** (1 cross-edges)
- **. +18 dirs · deepcopy** (1 cross-edges)
- **. +2 dirs · openstack.config.cloud_region** (1 cross-edges)
- **. +2 dirs · cinderclient.shell** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-2358"
smart_context with task: "understand cinderclient/v3 +3 dirs · cinderclient.shell_utils", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
