---
name: gortex-39-dirs
description: "Work in the . +39 dirs area — 959 symbols across 97 files (79% cohesion)"
---

# . +39 dirs

959 symbols | 97 files | 79% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:dogpile.cache`
- `external-call::dep:keystoneauth1.loading.adapter`
- `external-call::dep:openstack._log`
- `external-call::dep:openstack.config._util`
- `external-call::dep:openstack.config.loader.OpenStackConfig`
- `external-call::dep:openstack.config.vendors`
- `external-call::dep:openstack.orchestration.util.environment_format`
- `external-call::dep:openstack.orchestration.util.utils`
- `external-call::stdlib:prometheus_client`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/discover.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/loading/opts.py`
- `os_venv/lib/python3.12/site-packages/openstack/baremetal/v1/_common.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/attachment.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/default_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/group_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/volume.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_compute.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_identity.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_network.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_network_common.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_object_store.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/_utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/meta.py`
- `os_venv/lib/python3.12/site-packages/openstack/cloud/openstackcloud.py`
- `os_venv/lib/python3.12/site-packages/openstack/clustering/v1/node.py`
- `os_venv/lib/python3.12/site-packages/openstack/common/metadata.py`
- `os_venv/lib/python3.12/site-packages/openstack/compute/v2/keypair.py`
- `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_ip.py`
- `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_remote_console.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/__init__.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/_util.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/cloud_region.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/defaults.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/loader.py`
- `os_venv/lib/python3.12/site-packages/openstack/connection.py`
- `os_venv/lib/python3.12/site-packages/openstack/fields.py`
- `os_venv/lib/python3.12/site-packages/openstack/identity/v2/extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/identity/v3/role_assignment.py`
- `os_venv/lib/python3.12/site-packages/openstack/identity/version.py`
- `os_venv/lib/python3.12/site-packages/openstack/image/v2/metadef_property.py`
- `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/secret.py`
- `os_venv/lib/python3.12/site-packages/openstack/message/v2/_base.py`
- `os_venv/lib/python3.12/site-packages/openstack/network/v2/floating_ip.py`
- `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/_base.py`
- `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/container.py`
- `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/event_utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/template_utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/placement/v1/resource_provider_inventory.py`
- `os_venv/lib/python3.12/site-packages/openstack/placement/v1/trait.py`
- `os_venv/lib/python3.12/site-packages/openstack/proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/resource.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_compute.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_endpoints.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_floating_ip.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_project_cleanup.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_services.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_node.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_ports.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_flavors.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_object.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_resource.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/utils.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/api/compute_v2.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/common/clientmanager.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/common/project_cleanup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/common/quota.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/agent.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/host.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/server.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/role.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/role_assignment.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/network/v2/floating_ip.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume_backup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_backup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_builtin.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_match.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_singleton.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_warn.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/types.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/utils/__init__.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/resolvelib/structs.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/support.py`
- `os_venv/lib/python3.12/site-packages/urllib3/contrib/pyopenssl.py`
- `os_venv/lib/python3.12/site-packages/yaml/reader.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | Queue, chain, queue, urljoin, ThreadPoolExecutor, ... |
| `external-call::dep:dogpile.cache` | dogpile.cache |
| `external-call::dep:keystoneauth1.loading.adapter` | keystoneauth1.loading.adapter |
| `external-call::dep:openstack._log` | openstack._log |
| `external-call::dep:openstack.config._util` | openstack.config._util |
| `external-call::dep:openstack.config.loader.OpenStackConfig` | openstack.config.loader.OpenStackConfig |
| `external-call::dep:openstack.config.vendors` | openstack.config.vendors |
| `external-call::dep:openstack.orchestration.util.environment_format` | openstack.orchestration.util.environment_format |
| `external-call::dep:openstack.orchestration.util.utils` | openstack.orchestration.util.utils |
| `external-call::stdlib:prometheus_client` | prometheus_client |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/discover.py` | __init__, next_min_version, version, max_microversion, raw_status, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/loading/opts.py` | _all_opts |
| `os_venv/lib/python3.12/site-packages/openstack/baremetal/v1/_common.py` | value, comma_separated_list, value, resource_type, fields_type |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/attachment.py` | _prepare_request_body, session, microversion, _transform_create_request, prepend_key, ... |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/default_type.py` | prepend_key, resource_request_key, _prepare_request_body |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/group_type.py` | prop, fetch_group_specs, session, session, get_group_specs_property |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/volume.py` | prepend_key, resource_request_key, _prepare_request_body |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_compute.py` | key, _to_bool, resource, server, timeout, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_identity.py` | project, domain, name_or_id, project, user, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_network.py` | list_routers, list_subnets, filters, filters, list_networks, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_network_common.py` | kwargs, _normalize_secgroup_rule, __init__, rule, args, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_object_store.py` | get_object, query_string, name, obj, refresh, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/_utils.py` | data, filters, _dict_filter, d, _filter_list, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/meta.py` | cloud, cloud, get_groups_from_server, port, server, ... |
| `os_venv/lib/python3.12/site-packages/openstack/cloud/openstackcloud.py` | filters, max_version, project_cleanup, project_id, app_name, ... |
| `os_venv/lib/python3.12/site-packages/openstack/clustering/v1/node.py` | params, preview, session, adopt |
| `os_venv/lib/python3.12/site-packages/openstack/common/metadata.py` | key, session, get_metadata_item |
| `os_venv/lib/python3.12/site-packages/openstack/compute/v2/keypair.py` | _consume_attrs, mapping, attrs |
| `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_group.py` | _transform_create_request, microversion, session |
| `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_ip.py` | session, server_id, base_path, allow_unknown_params, paginated, ... |
| `os_venv/lib/python3.12/site-packages/openstack/compute/v2/server_remote_console.py` | microversion, session, _transform_create_request |
| `os_venv/lib/python3.12/site-packages/openstack/config/__init__.py` | load_yaml_config, load_envvars, app_name, get_cloud_region, service_key, ... |
| `os_venv/lib/python3.12/site-packages/openstack/config/_util.py` | __init__, min_api_version, default_microversion, version, max_api_version, ... |
| `os_venv/lib/python3.12/site-packages/openstack/config/cloud_region.py` | default, resource, get_cache_resource_expiration, statsd_prefix, cache_path, ... |
| `os_venv/lib/python3.12/site-packages/openstack/config/defaults.py` | get_defaults, json_path |
| `os_venv/lib/python3.12/site-packages/openstack/config/loader.py` | pw_func, _expand_region_name, set_one_cloud, get_extra_config, args, ... |
| `os_venv/lib/python3.12/site-packages/openstack/connection.py` | app_name, __init__, rate_limit, oslo_conf, extra_services, ... |
| `os_venv/lib/python3.12/site-packages/openstack/fields.py` | coerce_to_default, name, type, list_type, deprecated, ... |
| `os_venv/lib/python3.12/site-packages/openstack/identity/v2/extension.py` | base_path, max_items, allow_unknown_params, headers, paginated, ... |
| `os_venv/lib/python3.12/site-packages/openstack/identity/v3/role_assignment.py` | RoleAssignment |
| `os_venv/lib/python3.12/site-packages/openstack/identity/version.py` | microversion, params, allow_unknown_params, base_path, list, ... |
| `os_venv/lib/python3.12/site-packages/openstack/image/v2/metadef_property.py` | params, list, f, microversion, _dict_filter, ... |
| `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/secret.py` | params, skip_cache, session, microversion, error_message, ... |
| `os_venv/lib/python3.12/site-packages/openstack/message/v2/_base.py` | microversion, max_items, allow_unknown_params, list, microversion, ... |
| `os_venv/lib/python3.12/site-packages/openstack/network/v2/floating_ip.py` | find_available, session |
| `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/_base.py` | metadata, attrs, __init__ |
| `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/_proxy.py` | name, is_object_stale, container, get_object_segment_size, file_sha256, ... |
| `os_venv/lib/python3.12/site-packages/openstack/object_store/v1/container.py` | new, kwargs |
| `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/event_utils.py` | stack_name, cloud, get_events, limit, marker, ... |
| `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/template_utils.py` | template_url, object_request, env_path_is_object, env_path_is_object, process_environment_and_files, ... |
| `os_venv/lib/python3.12/site-packages/openstack/orchestration/util/utils.py` | resource_nested_identifier, rsrc |
| `os_venv/lib/python3.12/site-packages/openstack/placement/v1/resource_provider_inventory.py` | allow_unknown_params, base_path, list, d, paginated, ... |
| `os_venv/lib/python3.12/site-packages/openstack/placement/v1/trait.py` | allow_unknown_params, params, list, microversion, session, ... |
| `os_venv/lib/python3.12/site-packages/openstack/proxy.py` | _get_connection |
| `os_venv/lib/python3.12/site-packages/openstack/resource.py` | query, limit, headers, resource_type, existing, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_compute.py` | test_set_and_delete_metadata |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_endpoints.py` | test_create_endpoint |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_flavor.py` | test_create_flavor |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_floating_ip.py` | _cleanup_ips, server |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_port.py` | test_create_port, test_delete_port, test_get_port_by_id, TestPort, test_get_port, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_project_cleanup.py` | TestProjectCleanup, setUp, test_cleanup_swift, test_cleanup, _create_network_resources, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_services.py` | test_list_services, test_delete_service_by_name, test_create_service, test_update_service, TestServices, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_node.py` | TestUpdateMachinePatch, kwargs, test_update_machine_patch, get_mock_url |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_ports.py` | test_get_nic_by_mac, test_list_nics, test_list_nics_for_machine, TestBaremetalPort, test_list_nics_failure, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_flavors.py` | test_list_flavors, test_list_flavors_with_extra |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_object.py` | test_get_object, test_object_segment_retries, test_create_object_index_rax, TestObjectUploads, test_create_object, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py` | test_bool_keys, test_csv_keys |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_resource.py` | test_access_by_aka |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_utils.py` | TestTinyDAG, test_walker_fn, test_list, graph, test_walk, ... |
| `os_venv/lib/python3.12/site-packages/openstack/utils.py` | __getstate__, __dir__, partial, size, k, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/api/compute_v2.py` | all_projects, compute_client, list_networks, list_floating_ips, get_floating_ip, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/common/clientmanager.py` | cli_options, pw_func, e, setup_auth, __init__, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/common/project_cleanup.py` | take_action, ProjectCleanup, parsed_args |
| `os_venv/lib/python3.12/site-packages/openstackclient/common/quota.py` | default, project, take_action, detail, _build_options_list, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/agent.py` | take_action, ListAgent, CreateAgent, parsed_args, take_action, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/host.py` | parsed_args, parsed_args, ListHost, take_action, take_action, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/compute/v2/server.py` | machine_readable, image_client, AddressesColumn, human_readable, compute_client, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/role.py` | RemoveRole, AddRole, take_action, parsed_args, take_action, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/role_assignment.py` | include_names, assignment, _format_role_assignment_ |
| `os_venv/lib/python3.12/site-packages/openstackclient/network/v2/floating_ip.py` | item, _get_columns |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume.py` | __init__, server_cache, AttachmentsColumn, value, human_readable |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume_backup.py` | human_readable |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v2/volume_snapshot.py` | human_readable |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume.py` | __init__, value, server_cache, AttachmentsColumn, human_readable |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_backup.py` | human_readable |
| `os_venv/lib/python3.12/site-packages/openstackclient/volume/v3/volume_snapshot.py` | human_readable |
| `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_builtin.py` | test_builtin_version, setUp, TestBuiltin |
| `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_match.py` | setUp |
| `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_singleton.py` | test_singleton_different |
| `os_venv/lib/python3.12/site-packages/os_service_types/tests/test_warn.py` | setUp |
| `os_venv/lib/python3.12/site-packages/os_service_types/types.py` | ServiceTypes |
| `os_venv/lib/python3.12/site-packages/osc_lib/utils/__init__.py` | sleep_time, sdk_resource, wait_for_delete, osc_column_map, attrs, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py` | __iter__ |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/resolvelib/structs.py` | __repr__, __bool__, __getitem__, key, IteratorMapping, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/support.py` | combine_markers |
| `os_venv/lib/python3.12/site-packages/urllib3/contrib/pyopenssl.py` | _verify_callback, cnx, x509, err_no, return_code, ... |
| `os_venv/lib/python3.12/site-packages/yaml/reader.py` | length, update |

## Entry Points

- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_project_cleanup.py::TestProjectCleanup.test_cleanup_vpnaas`

## Connected Communities

- **network/v2 +65 dirs** (71 cross-edges)
- **functional/cloud +53 dirs** (67 cross-edges)
- **site-packages/keystoneclient +36 dirs** (21 cross-edges)
- **python3.12/site-packages · update · _identity** (20 cross-edges)
- **openstack/cloud +2 dirs** (11 cross-edges)
- **. +37 dirs · get** (10 cross-edges)
- **compute/v2 +15 dirs** (9 cross-edges)
- **. +5 dirs · _make_mock_url** (8 cross-edges)
- **. +20 dirs** (8 cross-edges)
- **site-packages/openstack · get_mock_url** (6 cross-edges)
- **. +18 dirs · deepcopy** (6 cross-edges)
- **compute/v2 +32 dirs** (6 cross-edges)
- **site-packages/os_service_types +3 dirs** (5 cross-edges)
- **python3.12/site-packages · _make_clientmanager** (5 cross-edges)
- **. +7 dirs · append** (4 cross-edges)
- **osc_lib/cli +8 dirs** (4 cross-edges)
- **. +61 dirs** (4 cross-edges)
- **. +83 dirs** (4 cross-edges)
- **unit/loading +11 dirs** (4 cross-edges)
- **. +37 dirs · cast** (4 cross-edges)
- **tests/unit +3 dirs · expect_deprecations** (3 cross-edges)
- **. +22 dirs** (3 cross-edges)
- **. +2 dirs · append** (3 cross-edges)
- **unit/cloud +2 dirs · openstack.cloud.meta** (3 cross-edges)
- **. +2 dirs · files** (2 cross-edges)
- **unit/config · _test_magic_fixes** (2 cross-edges)
- **openstack/cloud · ComputeCloudMixin** (2 cross-edges)
- **cliff/tests +6 dirs** (2 cross-edges)
- **unit/v2_0 +6 dirs** (2 cross-edges)
- **. +1 dirs · get_file_contents** (2 cross-edges)
- **openstack/cloud · get_flavor** (2 cross-edges)
- **python3.12/site-packages · _find_winning_auth_value** (2 cross-edges)
- **site-packages/openstack · find** (2 cross-edges)
- **site-packages/yaml · __init__ · reader (8) #2** (2 cross-edges)
- **. +12 dirs · simplefilter** (2 cross-edges)
- **. +10 dirs · Lock** (2 cross-edges)
- **. +2 dirs · openstack.config.cloud_region** (2 cross-edges)
- **unit/cloud +11 dirs** (2 cross-edges)
- **site-packages/openstack · Proxy** (2 cross-edges)
- **. +10 dirs · time** (1 cross-edges)
- **. +1 dirs · search** (1 cross-edges)
- **python3.12/site-packages · emit_list** (1 cross-edges)
- **openstack/cloud · get_and_munchify** (1 cross-edges)
- **pygments/lexers +11 dirs** (1 cross-edges)
- **openstack/common · set_metadata** (1 cross-edges)
- **openstack/cloud +12 dirs** (1 cross-edges)
- **. +1 dirs · _table_tester_helper** (1 cross-edges)
- **. +10 dirs · dumps** (1 cross-edges)
- **. +1 dirs · find_best_address** (1 cross-edges)
- **. +5 dirs · urlparse** (1 cross-edges)
- **openstackclient/common +6 dirs** (1 cross-edges)
- **. +23 dirs · fixtures** (1 cross-edges)
- **unit/config +7 dirs** (1 cross-edges)
- **. +9 dirs · partial** (1 cross-edges)
- **. +64 dirs** (1 cross-edges)
- **. +7 dirs · write** (1 cross-edges)
- **. +4 dirs · _generate_nodes_per_command** (1 cross-edges)
- **network/v2 +30 dirs** (1 cross-edges)
- **site-packages/openstack · assertEqual** (1 cross-edges)
- **openstack/cloud · get_image_exclude** (1 cross-edges)
- **. +2 dirs · parse_qs** (1 cross-edges)
- **openstack/cloud · get_server_ip** (1 cross-edges)
- **. +4 dirs · add_exclusive_arg** (1 cross-edges)
- **pygments/lexers +14 dirs** (1 cross-edges)
- **openstack/cloud · search_ports** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-4063"
smart_context with task: "understand . +39 dirs", format: "gcx"
find_usages with id: "os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_project_cleanup.py::TestProjectCleanup.test_cleanup_vpnaas", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
