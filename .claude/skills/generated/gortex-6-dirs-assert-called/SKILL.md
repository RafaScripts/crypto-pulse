---
name: gortex-6-dirs-assert-called
description: "Work in the . +6 dirs · assert_called area — 722 symbols across 72 files (92% cohesion)"
---

# . +6 dirs · assert_called

722 symbols | 72 files | 92% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:cinderclient.api_versions`
- `external-call::dep:cinderclient.tests.unit.v3.fakes`
- `external-call::dep:cinderclient.v3.attachments`
- `external-call::dep:cinderclient.v3.availability_zones`
- `external-call::dep:cinderclient.v3.capabilities`
- `external-call::dep:cinderclient.v3.capabilities.Capabilities`
- `external-call::dep:cinderclient.v3.cgsnapshots`
- `external-call::dep:cinderclient.v3.clusters`
- `external-call::dep:cinderclient.v3.consistencygroups`
- `external-call::dep:cinderclient.v3.default_types`
- `external-call::dep:cinderclient.v3.group_snapshots`
- `external-call::dep:cinderclient.v3.group_types`
- `external-call::dep:cinderclient.v3.groups`
- `external-call::dep:cinderclient.v3.messages`
- `external-call::dep:cinderclient.v3.pools`
- `external-call::dep:cinderclient.v3.qos_specs`
- `external-call::dep:cinderclient.v3.quota_classes`
- `external-call::dep:cinderclient.v3.quotas`
- `external-call::dep:cinderclient.v3.resource_filters`
- `external-call::dep:cinderclient.v3.services`
- `external-call::dep:cinderclient.v3.volume_backups`
- `external-call::dep:cinderclient.v3.volume_backups_restore`
- `external-call::dep:cinderclient.v3.volume_encryption_types`
- `external-call::dep:cinderclient.v3.volume_encryption_types.VolumeEncryptionType`
- `external-call::dep:cinderclient.v3.volume_snapshots`
- `external-call::dep:cinderclient.v3.volume_transfers`
- `external-call::dep:cinderclient.v3.volume_type_access`
- `external-call::dep:cinderclient.v3.volume_types`
- `external-call::dep:cinderclient.v3.volumes`
- `external-call::dep:cinderclient.v3.workers`
- `os_venv/lib/python3.12/site-packages/cinderclient/api_versions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/exceptions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/shell.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_api_versions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/fakes_base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_attachments.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_capabilities.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_cgsnapshots.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_clusters.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_consistencygroups.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_default_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_group_snapshots.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_group_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_groups.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_messages.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_pools.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_qos.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_quota_classes.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_quotas.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_resource_filters.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_services.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_services_base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_shell.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_snapshot_actions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_type_access.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_backups.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_backups_30.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_encryption_types.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_transfers.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volumes.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volumes_base.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/utils.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/client.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_type.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | quote_plus |
| `external-call::dep:cinderclient.api_versions` | cinderclient.api_versions |
| `external-call::dep:cinderclient.tests.unit.v3.fakes` | cinderclient.tests.unit.v3.fakes |
| `external-call::dep:cinderclient.v3.attachments` | cinderclient.v3.attachments |
| `external-call::dep:cinderclient.v3.availability_zones` | cinderclient.v3.availability_zones |
| `external-call::dep:cinderclient.v3.capabilities` | cinderclient.v3.capabilities |
| `external-call::dep:cinderclient.v3.capabilities.Capabilities` | cinderclient.v3.capabilities.Capabilities |
| `external-call::dep:cinderclient.v3.cgsnapshots` | cinderclient.v3.cgsnapshots |
| `external-call::dep:cinderclient.v3.clusters` | cinderclient.v3.clusters |
| `external-call::dep:cinderclient.v3.consistencygroups` | cinderclient.v3.consistencygroups |
| `external-call::dep:cinderclient.v3.default_types` | cinderclient.v3.default_types |
| `external-call::dep:cinderclient.v3.group_snapshots` | cinderclient.v3.group_snapshots |
| `external-call::dep:cinderclient.v3.group_types` | cinderclient.v3.group_types |
| `external-call::dep:cinderclient.v3.groups` | cinderclient.v3.groups |
| `external-call::dep:cinderclient.v3.messages` | cinderclient.v3.messages |
| `external-call::dep:cinderclient.v3.pools` | cinderclient.v3.pools |
| `external-call::dep:cinderclient.v3.qos_specs` | cinderclient.v3.qos_specs |
| `external-call::dep:cinderclient.v3.quota_classes` | cinderclient.v3.quota_classes |
| `external-call::dep:cinderclient.v3.quotas` | cinderclient.v3.quotas |
| `external-call::dep:cinderclient.v3.resource_filters` | cinderclient.v3.resource_filters |
| `external-call::dep:cinderclient.v3.services` | cinderclient.v3.services |
| `external-call::dep:cinderclient.v3.volume_backups` | cinderclient.v3.volume_backups |
| `external-call::dep:cinderclient.v3.volume_backups_restore` | cinderclient.v3.volume_backups_restore |
| `external-call::dep:cinderclient.v3.volume_encryption_types` | cinderclient.v3.volume_encryption_types |
| `external-call::dep:cinderclient.v3.volume_encryption_types.VolumeEncryptionType` | cinderclient.v3.volume_encryption_types.VolumeEncryptionType |
| `external-call::dep:cinderclient.v3.volume_snapshots` | cinderclient.v3.volume_snapshots |
| `external-call::dep:cinderclient.v3.volume_transfers` | cinderclient.v3.volume_transfers |
| `external-call::dep:cinderclient.v3.volume_type_access` | cinderclient.v3.volume_type_access |
| `external-call::dep:cinderclient.v3.volume_types` | cinderclient.v3.volume_types |
| `external-call::dep:cinderclient.v3.volumes` | cinderclient.v3.volumes |
| `external-call::dep:cinderclient.v3.workers` | cinderclient.v3.workers |
| `os_venv/lib/python3.12/site-packages/cinderclient/api_versions.py` | matches, max_version, func_name, min_version, is_latest, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/base.py` | find, ManagerWithFind, findall, list, _format_sort_key_param, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/client.py` | get_server_version, url, api_version, __init__, insecure, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/exceptions.py` | response, body, from_response |
| `os_venv/lib/python3.12/site-packages/cinderclient/shell.py` | version, input_args, _add_subparser_args, options, do_help, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_api_versions.py` | test_wrong_major_version, test_wrong_format, exp_major, exp_range, GetAPIVersionTestCase, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_base.py` | test_findall_invalid_attribute |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py` | mock_request, test_get_server_version, test_get_server_version_v2, url, mock_request |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/fakes_base.py` | get_volumes_detail, kw, kw, kw, get_volumes_5678, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_attachments.py` | test_create_attachment, AttachmentsTest, test_create_attachment_without_instance_uuid, test_complete_attachment |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_capabilities.py` | test___repr__, CapabilitiesTest, test__repr__when_empty, test_get_capabilities |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_cgsnapshots.py` | test_delete_cgsnapshot, test_update_cgsnapshot_no_props, test_list_cgsnapshot_with_search_opts, test_create_cgsnapshot, test_update_cgsnapshot, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_clusters.py` | detailed, test_clusters_list_pre_version |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_consistencygroups.py` | test_update_consistencygroup_remove_volumes, test_create_consistencygroup_with_volume_types, test_list_consistencygroup_detailed_false, test_update_consistencygroup_none, test_update_consistencygroup_add_volumes, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_default_types.py` | test_get_all, test_get, test_set, VolumeTypeDefaultTest, test_unset |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_group_snapshots.py` | detailed, GroupSnapshotsTest, test_list_group_snapshot_with_search_opts, test_update_group_snapshot_no_props, test_delete_group_snapshot, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_group_types.py` | test_list_group_types_not_public, test_create, test_set_key_pre_version, test_default, test_set_key, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_groups.py` | add, test_list_group_detailed_false, test_failover_replication_group, test_get_group, test_delete_group, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_messages.py` | test_list_messages, test_delete_messages, sort_string, test_list_messages_with_sort, test_get_messages, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_pools.py` | test_get_detail_pool_stats, PoolsTest, test_get_pool_stats |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_qos.py` | test_get, test_set_keys, test_get_associations, test_create, QoSSpecsTest, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_quota_classes.py` | test_refresh_quota, test_class_quotas_get, test_update_quota, QuotaClassSetsTest |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_quotas.py` | test_tenant_quotas_get, test_update_quota_with_skip_, QuotaSetsTest, test_delete_quota, test_update_quota, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_resource_filters.py` | query_url, test_list_resource_filters, resource |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_services.py` | test_get_log_levels, test_api_version, test_list_services_with_backend_state, test_set_log_levels, test_list_services_with_cluster_info, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_services_base.py` | test_list_services, test_services_enable, test_list_services_with_host_binary, ServicesTest, test_services_disable, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_shell.py` | test_snapshot_manageable_list_details, mock_find_volume, ShellTest, mock_find_vol, src_grp_id, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_snapshot_actions.py` | test_update_snapshot_status, SnapshotActionsTest, test_snapshot_unmanage, test_list_snapshots_with_marker_limit, test_list_snapshots_with_sort, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_type_access.py` | test_add_project_access, TypeAccessTest, test_list, test_remove_project_access |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_types.py` | test_get, test_delete, test_unset_keys, test_unset_multiple_keys, test_update_name, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_backups.py` | VolumesTest, test_restore_with_name, test_update, test_restore, test_pre_version |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_backups_30.py` | test_create, test_list_with_pagination, test_sorted_list_by_data_timestamp, test_force_delete_with_false_force_param_vaule, test_get, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_encryption_types.py` | test_update, test_get_no_encryption, test___repr__, test_delete, VolumeEncryptionTypesTest, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volume_transfers.py` | test_list, test_delete, client, _test_delete, test_accept, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volumes.py` | reimage_reserved, test_reimage, error, test_volume_list_manageable_detailed, test_create_volume_with_hint, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_volumes_base.py` | test_extend, test_get_encryption_metadata, test_snapshot_list_manageable_detailed, test_attach, test_volume_manage, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/utils.py` | find_volume, volume, find_resource, kwargs, name_or_id, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/client.py` | region_name, proxy_token, endpoint_type, volume_service_name, project_id, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/v3/volumes.py` | container_format, upload_to_image, visibility, disk_format, force, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/client.py` | check_version, check_api_version |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_type.py` | __init__, machine_readable, human_readable, value, ListVolumeType, ... |

## Connected Communities

- **cinderclient/v3 +3 dirs · cinderclient.shell_utils** (20 cross-edges)
- **network/v2 +65 dirs** (6 cross-edges)
- **. +64 dirs** (4 cross-edges)
- **. +10 dirs · dumps** (4 cross-edges)
- **site-packages/cinderclient · _cs_request_base_url** (2 cross-edges)
- **site-packages/osc_lib +6 dirs** (2 cross-edges)
- **openstackclient/api +3 dirs** (2 cross-edges)
- **. +61 dirs** (2 cross-edges)
- **unit/v3 · _stub_volume** (2 cross-edges)
- **cinderclient/v3 +3 dirs · _list** (1 cross-edges)
- **. +1 dirs · cinderclient.v3.limits** (1 cross-edges)
- **compute/v2 +17 dirs** (1 cross-edges)
- **. +9 dirs · partial** (1 cross-edges)
- **. +20 dirs** (1 cross-edges)
- **functional/cloud +53 dirs** (1 cross-edges)
- **. +3 dirs · oslo_utils.importutils** (1 cross-edges)
- **. +18 dirs · append** (1 cross-edges)
- **. +4 dirs · add_exclusive_arg** (1 cross-edges)
- **. +2 dirs · get_plugin** (1 cross-edges)
- **. +11 dirs** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-2311"
smart_context with task: "understand . +6 dirs · assert_called", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
