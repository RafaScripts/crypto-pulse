---
name: gortex-unit-cloud-11-dirs
description: "Work in the unit/cloud +11 dirs area — 735 symbols across 75 files (92% cohesion)"
---

# unit/cloud +11 dirs

735 symbols | 75 files | 92% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:openstack.compute.v2.volume_attachment`
- `external-call::dep:openstack.network.v2.port`
- `external-call::dep:openstack.network.v2.qos_bandwidth_limit_rule`
- `external-call::dep:openstack.network.v2.qos_dscp_marking_rule`
- `external-call::dep:openstack.network.v2.qos_minimum_bandwidth_rule`
- `external-call::dep:openstack.network.v2.qos_rule_type`
- `external-call::dep:openstack.network.v2.subnet`
- `external-call::dep:openstack.tests.unit.cloud.fakes`
- `external-call::dep:openstack.tests.unit.cloud.test_zone`
- `external-call::stdlib:testtools`
- `os_venv/lib/python3.12/site-packages/cmd2/completion.py`
- `os_venv/lib/python3.12/site-packages/openstack/connection.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_volume_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_accelerator.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_aggregate.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_cloud.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_compute.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_create_server.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_create_volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_delete_server.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_delete_volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_flavors.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_common.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_neutron.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_nova.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_identity_users.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_keypair.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_limits.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_meta.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_network.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_object.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator_noauth.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_bandwidth_limit_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_dscp_marking_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_minimum_bandwidth_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_policy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_rule_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_quotas.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_rebuild_server.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_recordset.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_router.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_security_groups.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_console.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_delete_metadata.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_set_metadata.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_shared_file_system.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_stack.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_subnet.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_update_server.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_users.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume_access.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume_backups.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_zone.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_volume_attachment.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_bandwidth_limit_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_dscp_marking_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_minimum_bandwidth_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_rule_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_subnet.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_trunk.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sources.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/cookies.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/models.py`
- `os_venv/lib/python3.12/site-packages/pyparsing/core.py`
- `os_venv/lib/python3.12/site-packages/pyparsing/exceptions.py`
- `os_venv/lib/python3.12/site-packages/requests/cookies.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | copy |
| `external-call::dep:openstack.compute.v2.volume_attachment` | openstack.compute.v2.volume_attachment |
| `external-call::dep:openstack.network.v2.port` | openstack.network.v2.port |
| `external-call::dep:openstack.network.v2.qos_bandwidth_limit_rule` | openstack.network.v2.qos_bandwidth_limit_rule |
| `external-call::dep:openstack.network.v2.qos_dscp_marking_rule` | openstack.network.v2.qos_dscp_marking_rule |
| `external-call::dep:openstack.network.v2.qos_minimum_bandwidth_rule` | openstack.network.v2.qos_minimum_bandwidth_rule |
| `external-call::dep:openstack.network.v2.qos_rule_type` | openstack.network.v2.qos_rule_type |
| `external-call::dep:openstack.network.v2.subnet` | openstack.network.v2.subnet |
| `external-call::dep:openstack.tests.unit.cloud.fakes` | openstack.tests.unit.cloud.fakes |
| `external-call::dep:openstack.tests.unit.cloud.test_zone` | openstack.tests.unit.cloud.test_zone |
| `external-call::stdlib:testtools` | testtools |
| `os_venv/lib/python3.12/site-packages/cmd2/completion.py` | __deepcopy__, memo |
| `os_venv/lib/python3.12/site-packages/openstack/connection.py` | name_key, id_key, auth, pop_keys, service_type, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_volume_type.py` | test_add_remove_volume_type_access, test_remove_volume_type_access_missing_volume, _assert_project, test_remove_volume_type_access_missing_project, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_accelerator.py` | test_list_accelerator_requests, setUp, test_delete_accelerator_request, test_list_device_profiles, filters, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_aggregate.py` | test_delete_aggregate_by_name, test_create_aggregate, test_set_aggregate_metadata, test_remove_host_from_aggregate, test_add_host_to_aggregate, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_cloud.py` | mock_sleep, test_connect_as_context, test_range_search_4, test_iterate_timeout_timeout, test_endpoint_for, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_compute.py` | TestServers, test_get_server, test_get_server_not_found, test_list_servers_exception, test_list_servers_filters, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_create_server.py` | mock_wait, test_create_server_config_drive_none, test_create_server_no_addresses, test_create_server_with_timeout, test_create_server_network_v4_fixed_ip, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_create_volume_snapshot.py` | test_create_volume_snapshot_wait, test_create_volume_snapshot_with_timeout, test_create_volume_snapshot_with_error, TestCreateVolumeSnapshot, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_delete_server.py` | test_delete_server, test_delete_server_delete_fips_nova, TestDeleteServer, test_delete_server_fails, test_delete_server_already_gone_wait, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_delete_volume_snapshot.py` | TestDeleteVolumeSnapshot, test_delete_volume_snapshot, test_delete_volume_snapshot_with_timeout, test_delete_volume_snapshot_with_error, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_flavors.py` | test_list_flavor_access, test_get_flavor_string_and_int, test_get_flavor_by_ram_not_found, test_set_flavor_specs, test_delete_flavor_exception, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_common.py` | test_add_auto_ip, mock_add_auto_ip, mock_attach_ip_to_server, mock_get_floating_ip, mock_add_ip_list, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_neutron.py` | test_create_floating_ip, test_find_nat_source_config, test_available_floating_ip_new, elem_type, TestFloatingIP, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_floating_ip_nova.py` | test_create_floating_ip, TestFloatingIP, test_add_ip_from_pool, elem_type, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_identity_users.py` | resource, base_url_append, test_create_user_without_password, append, interface, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image.py` | test_list_images, test_create_image_put_meta_int, cloud, test_create_image_put_v2_wrong_checksum_delete, test_create_image_task, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image_snapshot.py` | test_create_image_snapshot_wait_until_active_never_active, TestImageSnapshot, test_create_image_snapshot_wait_active |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_keypair.py` | test_list_keypairs, TestKeypair, test_delete_keypair_not_found, test_create_keypair_exception, test_list_keypairs_notempty_filters, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_limits.py` | test_get_compute_limits, test_other_get_compute_limits, TestLimits |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_meta.py` | test_get_server_cloud_rackspace_v6, mock_has_service, test_get_server_cloud_osic_split, mock_get_image_name, get_image_name, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_network.py` | test_get_network_by_id, test_create_network_external, test_create_network_provider_wrong_type, test_create_network_specific_tenant, exp, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_object.py` | test_get_container_invalid, test_get_container_access_not_found |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator.py` | test_get_image_id, TestOperatorCloud, test_list_old_hypervisors, get_session_mock, test_get_image_name, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator_noauth.py` | setUp, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_port.py` | test_update_port_exception, test_create_port, real, test_create_port_exception, test_delete_subnet_multiple_found, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_bandwidth_limit_rule.py` | test_create_qos_bandwidth_limit_rule_no_qos_extension, test_delete_qos_bandwidth_limit_rule, test_update_qos_bandwidth_limit_rule, real, TestQosBandwidthLimitRule, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_dscp_marking_rule.py` | exp, test_delete_qos_dscp_marking_rule, test_create_qos_dscp_marking_rule_no_qos_extension, test_create_qos_dscp_marking_rule, test_get_qos_dscp_marking_rule_no_qos_extension, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_minimum_bandwidth_rule.py` | test_delete_qos_minimum_bandwidth_rule_no_qos_extension, test_get_qos_minimum_bandwidth_rule_no_qos_extension, exp, TestQosMinimumBandwidthRule, test_create_qos_minimum_bandwidth_rule_no_qos_extension, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_policy.py` | test_create_qos_policy, test_update_qos_policy, test_delete_qos_policy_no_qos_extension, test_get_qos_policy_no_qos_extension, test_delete_qos_policy_multiple_found, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_qos_rule_type.py` | real, test_get_qos_rule_type_details_no_qos_extension, test_list_qos_rule_types, test_get_qos_rule_type_details_no_qos_details_extension, test_get_qos_rule_type_details, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_quotas.py` | test_neutron_delete_quotas, setUp, TestQuotas, test_update_quotas, test_get_quotas, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_rebuild_server.py` | setUp, test_rebuild_server_wait, test_rebuild_server_rebuild_exception, test_rebuild_server_timeout, test_rebuild_server_server_error, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_recordset.py` | test_list_recordsets, test_update_recordset, test_delete_recordset, test_get_recordset_by_id, TestRecordset, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_router.py` | test_get_router_not_found, _test_list_router_interfaces, real, TestRouter, test_create_router_without_enable_snat, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_security_groups.py` | make_fake_nova_security_group_rule, test_remove_security_group_from_server_neutron, test_create_security_group_stateless_neutron, from_port, test_add_bad_security_group_to_server_nova, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_console.py` | test_get_server_console_name_or_id, setUp, test_get_server_console_dict, test_get_server_console_no_console, TestServerConsole |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_delete_metadata.py` | test_server_delete_metadata_with_exception, setUp, TestServerDeleteMetadata, test_server_delete_metadata |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_group.py` | test_create_server_group, test_delete_server_group, TestServerGroup, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_server_set_metadata.py` | setUp, TestServerSetMetadata, test_server_set_metadata, test_server_set_metadata_with_exception |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_shared_file_system.py` | TestSharedFileSystem, test_list_availability_zones, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_stack.py` | test_list_stacks_exception, test_delete_stack_exception, test_search_stacks_exception |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_subnet.py` | test_create_subnet_bad_network, test_create_subnet, test_create_subnet_non_unique_network, test_update_subnet_gateway_ip, test_create_subnet_from_subnetpool_with_prefixlen, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_update_server.py` | TestUpdateServer, setUp, test_update_server_with_update_exception, test_update_server_name |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_users.py` | test_create_user_v3_no_domain |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume.py` | test_attach_volume_exception, test_set_volume_bootable, real, test_get_volume_by_id, test_detach_volume_exception, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume_access.py` | setUp, TestVolumeAccess, test_add_volume_type_access, test_list_volume_types, test_get_volume_type_access, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_volume_backups.py` | test_search_volume_backups, test_list_volume_backups, _compare_backups, test_delete_volume_backup_wait, test_get_volume_backup, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_zone.py` | TestZone, __init__, test_create_zone, cmp, test_get_zone_not_found_returns_false, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_volume_attachment.py` | TestServerInterface, test_make_it, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_port.py` | TestPort, test_basic, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_proxy.py` | delete_port_binding, mock_get, test_delete_port_binding, mock_get, test_port_bindings, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_bandwidth_limit_rule.py` | test_basic, TestQoSBandwidthLimitRule, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_dscp_marking_rule.py` | test_basic, test_make_it, TestQoSDSCPMarkingRule |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_minimum_bandwidth_rule.py` | test_basic, test_make_it, TestQoSMinimumBandwidthRule |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_rule_type.py` | TestQoSRuleType, test_basic, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_subnet.py` | test_make_it, test_basic, TestSubnet |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_trunk.py` | TestCreateNetworkTrunk, test_set_network_trunk_admin_state_up_enable, test_create_network_trunk_subports_without_required_key_fail, test_create_trunk_with_subport_invalid_segmentation_id_fail, test_create_default_options, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sources.py` | test_invalid_env |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/cookies.py` | jar, _copy_cookie_jar |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/models.py` | copy |
| `os_venv/lib/python3.12/site-packages/pyparsing/core.py` | copy, do_actions, parseImpl, loc, instring |
| `os_venv/lib/python3.12/site-packages/pyparsing/exceptions.py` | copy |
| `os_venv/lib/python3.12/site-packages/requests/cookies.py` | _copy_cookie_jar, jar |

## Connected Communities

- **unit/cloud +2 dirs · openstack.cloud.meta** (26 cross-edges)
- **. +61 dirs** (22 cross-edges)
- **. +5 dirs · _make_mock_url** (18 cross-edges)
- **site-packages/openstack · get_mock_url** (16 cross-edges)
- **compute/v2 +2 dirs** (14 cross-edges)
- **python3.12/site-packages · update · _identity** (9 cross-edges)
- **. +64 dirs** (3 cross-edges)
- **. +39 dirs** (3 cross-edges)
- **unit/cloud +14 dirs** (3 cross-edges)
- **. +11 dirs** (2 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.router** (2 cross-edges)
- **network/v2 +2 dirs · openstack.network.v2.network** (2 cross-edges)
- **. +2 dirs · openstack.config.cloud_region** (2 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.qos_policy** (2 cross-edges)
- **network/v2 +65 dirs** (2 cross-edges)
- **functional/cloud +7 dirs** (2 cross-edges)
- **. +10 dirs · dumps** (2 cross-edges)
- **_vendor/requests +7 dirs** (2 cross-edges)
- **openstack/cloud +12 dirs** (2 cross-edges)
- **unit/cloud +5 dirs** (2 cross-edges)
- **. +18 dirs · deepcopy** (1 cross-edges)
- **block_storage/v3 +2 dirs · openstack.block_storage.v3.snap…** (1 cross-edges)
- **_vendor/requests · merge_setting** (1 cross-edges)
- **site-packages/keystoneclient +36 dirs** (1 cross-edges)
- **. +4 dirs · itemgetter** (1 cross-edges)
- **python3.12/site-packages · set** (1 cross-edges)
- **unit/cloud · has_service** (1 cross-edges)
- **block_storage/v3 +2 dirs · openstack.block_storage.v3.volu…** (1 cross-edges)
- **site-packages/pyparsing +7 dirs** (1 cross-edges)
- **. +4 dirs · BytesIO** (1 cross-edges)
- **. +2 dirs · openstack.image.v1.image** (1 cross-edges)
- **network/v2 +2 dirs · openstackclient.tests.unit.netw…** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-3701"
smart_context with task: "understand unit/cloud +11 dirs", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
