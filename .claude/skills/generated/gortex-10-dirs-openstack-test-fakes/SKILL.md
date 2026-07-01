---
name: gortex-10-dirs-openstack-test-fakes
description: "Work in the . +10 dirs · openstack.test.fakes area — 500 symbols across 63 files (90% cohesion)"
---

# . +10 dirs · openstack.test.fakes

500 symbols | 63 files | 90% cohesion

## When to Use

Use this skill when working on files in:
- `external-call::dep:openstack.network.v2.tap_mirror`
- `external-call::dep:openstack.network.v2.tap_service`
- `external-call::dep:openstack.test.fakes`
- `external-call::dep:openstackclient.common.quota`
- `external-call::dep:openstackclient.compute.v2.console`
- `external-call::dep:openstackclient.compute.v2.console_connection`
- `external-call::dep:openstackclient.compute.v2.flavor`
- `external-call::dep:openstackclient.compute.v2.server_volume`
- `external-call::dep:openstackclient.identity.v3.endpoint`
- `external-call::dep:openstackclient.identity.v3.federation_protocol`
- `external-call::dep:openstackclient.identity.v3.group`
- `external-call::dep:openstackclient.identity.v3.identity_provider`
- `external-call::dep:openstackclient.identity.v3.limit`
- `external-call::dep:openstackclient.identity.v3.mapping`
- `external-call::dep:openstackclient.identity.v3.project`
- `external-call::dep:openstackclient.identity.v3.registered_limit`
- `external-call::dep:openstackclient.identity.v3.role`
- `external-call::dep:openstackclient.identity.v3.role_assignment`
- `external-call::dep:openstackclient.identity.v3.trust`
- `external-call::dep:openstackclient.network.v2.taas.tap_mirror`
- `external-call::dep:openstackclient.network.v2.taas.tap_service`
- `external-call::dep:openstackclient.volume.v2.service`
- `external-call::dep:openstackclient.volume.v2.volume_backup`
- `external-call::dep:openstackclient.volume.v2.volume_snapshot`
- `external-call::dep:openstackclient.volume.v3.service`
- `external-call::dep:openstackclient.volume.v3.volume_backup`
- `external-call::dep:openstackclient.volume.v3.volume_snapshot`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_tap_mirror.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_tap_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_quota.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_console.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_console_connection.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_keypair.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_credential.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_endpoint.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_identity_provider.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_limit.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_mappings.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_project.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_protocol.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_registered_limit.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role_assignment.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_trust.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_unscoped_saml.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_policy.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_flow.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_mirror.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_service.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_backup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_backup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_snapshot.py`

## Key Files

| File | Symbols |
|------|---------|
| `external-call::dep:openstack.network.v2.tap_mirror` | openstack.network.v2.tap_mirror |
| `external-call::dep:openstack.network.v2.tap_service` | openstack.network.v2.tap_service |
| `external-call::dep:openstack.test.fakes` | openstack.test.fakes |
| `external-call::dep:openstackclient.common.quota` | openstackclient.common.quota |
| `external-call::dep:openstackclient.compute.v2.console` | openstackclient.compute.v2.console |
| `external-call::dep:openstackclient.compute.v2.console_connection` | openstackclient.compute.v2.console_connection |
| `external-call::dep:openstackclient.compute.v2.flavor` | openstackclient.compute.v2.flavor |
| `external-call::dep:openstackclient.compute.v2.server_volume` | openstackclient.compute.v2.server_volume |
| `external-call::dep:openstackclient.identity.v3.endpoint` | openstackclient.identity.v3.endpoint |
| `external-call::dep:openstackclient.identity.v3.federation_protocol` | openstackclient.identity.v3.federation_protocol |
| `external-call::dep:openstackclient.identity.v3.group` | openstackclient.identity.v3.group |
| `external-call::dep:openstackclient.identity.v3.identity_provider` | openstackclient.identity.v3.identity_provider |
| `external-call::dep:openstackclient.identity.v3.limit` | openstackclient.identity.v3.limit |
| `external-call::dep:openstackclient.identity.v3.mapping` | openstackclient.identity.v3.mapping |
| `external-call::dep:openstackclient.identity.v3.project` | openstackclient.identity.v3.project |
| `external-call::dep:openstackclient.identity.v3.registered_limit` | openstackclient.identity.v3.registered_limit |
| `external-call::dep:openstackclient.identity.v3.role` | openstackclient.identity.v3.role |
| `external-call::dep:openstackclient.identity.v3.role_assignment` | openstackclient.identity.v3.role_assignment |
| `external-call::dep:openstackclient.identity.v3.trust` | openstackclient.identity.v3.trust |
| `external-call::dep:openstackclient.network.v2.taas.tap_mirror` | openstackclient.network.v2.taas.tap_mirror |
| `external-call::dep:openstackclient.network.v2.taas.tap_service` | openstackclient.network.v2.taas.tap_service |
| `external-call::dep:openstackclient.volume.v2.service` | openstackclient.volume.v2.service |
| `external-call::dep:openstackclient.volume.v2.volume_backup` | openstackclient.volume.v2.volume_backup |
| `external-call::dep:openstackclient.volume.v2.volume_snapshot` | openstackclient.volume.v2.volume_snapshot |
| `external-call::dep:openstackclient.volume.v3.service` | openstackclient.volume.v3.service |
| `external-call::dep:openstackclient.volume.v3.volume_backup` | openstackclient.volume.v3.volume_backup |
| `external-call::dep:openstackclient.volume.v3.volume_snapshot` | openstackclient.volume.v3.volume_snapshot |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_tap_mirror.py` | test_make_it, TestTapMirror, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_tap_service.py` | test_make_it, TestTapService, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_fakes.py` | test_generate_fake_resource_one |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_quota.py` | setUp, setUp, setUp, setUp, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_console.py` | test_console_url_show_by_default, test_console_url_show_with_spice_direct, test_show, test_show_no_args, test_console_url_show_with_novnc, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_console_connection.py` | test_console_connection_show, TestConsoleTokens, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_flavor.py` | setUp, setUp, setUp, setUp, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_keypair.py` | TestKeypairShow, test_keypair_show_with_user_pre_v210, TestKeypair, test_keypair_show_with_user, test_keypair_show_no_options, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py` | setUp, setUp, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server_volume.py` | setUp, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_credential.py` | test_credential_multi_delete_with_exception, test_credential_multi_delete, test_credential_delete, TestCredentialDelete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_endpoint.py` | TestEndpointCreateServiceWithoutName, test_endpoint_create_no_options, test_remove_project_endpoint_with_options, test_endpoint_set_url, test_add_project_to_endpoint_no_option, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_group.py` | TestGroupSet, test_group_list_no_options, TestGroupList, test_group_set_name_and_description, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_identity_provider.py` | test_create_identity_provider_description, setUp, TestIdentityProviderShow, TestIdentityProviderList, TestIdentityProviderDelete, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_limit.py` | setUp, setUp, setUp, setUp, test_limit_delete_with_exception, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_mappings.py` | test_mapping_show, TestMappingList, TestMappingDelete, test_delete_mapping, TestMappingSet, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_project.py` | test_project_create_domain, test_project_list_with_pagination, test_project_create_conflict_without_or_show, test_project_remove_tags, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_protocol.py` | setUp, test_delete_protocol, TestProtocolShow, test_list_protocols, test_set_new_mapping, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_registered_limit.py` | setUp, test_registered_limit_set_resource_name, test_registered_limit_set_service, test_registered_limit_list, test_registered_limit_show_with_options, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role.py` | test_role_create_with_description, test_role_create_with_domain, test_role_set_description, test_role_create_with_immutable_option, test_role_list_domain_role, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role_assignment.py` | test_role_assignment_list_user_with_domain, test_role_assignment_list_domain_role, test_role_assignment_list_project, test_role_assignment_list_project_with_domain, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_trust.py` | TestTrustShow, setUp, TestTrustCreate, setUp, test_trust_create_basic, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_unscoped_saml.py` | setUp, TestProjectList, test_accessible_projects_list |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/test_image.py` | mock_get_data_f, mock_get_data_f, mock_get_data_f, test_image_create_from_volume_v31, test_image_create_from_volume, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_policy.py` | test_delete_with_multiple_resources |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_flow.py` | _get_data, columns, test_delete_tap_flow, test_update_tap_flow, attrs, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_mirror.py` | TestShowTapMirror, TestDeleteTapMirror, setUp, test_update_tap_mirror, test_delete_tap_mirror, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/taas/test_tap_service.py` | test_delete_tap_service, test_create_tap_service, TestListTapService, setUp, TestUpdateTapService, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_service.py` | test_service_list, test_service_set_nothing, setUp, test_service_set_disable_with_reason, test_service_set_only_with_disable_reason, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py` | test_volume_create_hints, TestVolumeCreate, test_volume_create_with_snapshot, test_volume_create_min_options, test_volume_create_with_source_volume, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_backup.py` | test_backup_create, TestBackupCreate, setUp, test_backup_set_state, test_backup_show, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_snapshot.py` | TestVolumeSnapshotUnset, test_snapshot_list_without_options, test_snapshot_list_all_projects, test_snapshot_list_status_option, test_snapshot_create_without_volume, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_service.py` | setUp, test_service_set_only_with_disable_reason, test_service_set_disable, test_service_set_enable, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py` | test_volume_create_with_backup_pre_v347, setUp, test_volume_create_with_source_volume, setUp, test_volume_create_with_snapshot |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_backup.py` | test_backup_list_with_options, setUp, setUp, TestBackupList, test_delete_multiple_backups_with_exception, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_snapshot.py` | setUp, setUp, test_snapshot_list_all_projects, TestVolumeSnapshotShow, setUp, ... |

## Connected Communities

- **compute/v2 +15 dirs** (10 cross-edges)
- **. +61 dirs** (5 cross-edges)
- **. +64 dirs** (5 cross-edges)
- **compute/v2 · set_compute_api_version** (4 cross-edges)
- **. +18 dirs · deepcopy** (4 cross-edges)
- **. +1 dirs · openstackclient.compute.v2.serv… · external-call::dep:openstackclient.compute.v2 · test_server** (3 cross-edges)
- **network/v2 +2 dirs · openstackclient.tests.unit.netw…** (3 cross-edges)
- **. +1 dirs · openstackclient.volume.v3.volume** (2 cross-edges)
- **network/v2 +2 dirs · openstackclient.tests.unit.iden…** (2 cross-edges)
- **. +39 dirs** (1 cross-edges)
- **network/v2 +65 dirs** (1 cross-edges)
- **. +3 dirs · openstackclient.tests.unit.comp…** (1 cross-edges)
- **network/v2 +5 dirs** (1 cross-edges)
- **. +1 dirs · openstackclient.compute.v2.keyp…** (1 cross-edges)
- **identity/v3 +1 dirs · setUp · external-call::dep:openstackclient.identity.v3 · test_domain** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-4288"
smart_context with task: "understand . +10 dirs · openstack.test.fakes", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
