---
name: gortex-61-dirs
description: "Work in the . +61 dirs area — 2150 symbols across 266 files (88% cohesion)"
---

# . +61 dirs

2150 symbols | 266 files | 88% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:keystoneauth1.access`
- `external-call::dep:keystoneauth1.extras.oauth1`
- `external-call::dep:keystoneauth1.fixture`
- `external-call::dep:keystoneauth1.identity`
- `external-call::dep:keystoneauth1.identity.generic.password`
- `external-call::dep:keystoneauth1.identity.generic.token`
- `external-call::dep:keystoneauth1.loading._plugins.identity.v3`
- `external-call::dep:keystoneauth1.loading.cli`
- `external-call::dep:keystoneauth1.service_token`
- `external-call::dep:keystoneclient.auth.cli`
- `external-call::dep:keystoneclient.auth.identity`
- `external-call::dep:keystoneclient.auth.identity.generic.cli`
- `external-call::dep:keystoneclient.auth.token_endpoint`
- `external-call::dep:keystoneclient.contrib.auth.v3.oidc`
- `external-call::dep:keystoneclient.fixture`
- `external-call::dep:keystoneclient.tests.unit.client_fixtures`
- `external-call::dep:keystoneclient.tests.unit.v3.utils`
- `external-call::dep:keystoneclient.v3.contrib.oauth1.auth`
- `external-call::dep:oauthlib.oauth1`
- `external-call::dep:openstack.block_storage.v3.extension`
- `external-call::dep:openstack.compute.v2.availability_zone`
- `external-call::dep:openstack.compute.v2.extension`
- `external-call::dep:openstack.compute.v2.migration`
- `external-call::dep:openstack.compute.v2.server_action`
- `external-call::dep:openstack.image.v2.member`
- `external-call::dep:openstack.network.v2.address_group`
- `external-call::dep:openstack.network.v2.address_scope`
- `external-call::dep:openstack.network.v2.auto_allocated_topology`
- `external-call::dep:openstack.network.v2.extension`
- `external-call::dep:openstack.network.v2.local_ip_association`
- `external-call::dep:openstack.network.v2.ndp_proxy`
- `external-call::dep:openstack.network.v2.network_ip_availability`
- `external-call::dep:openstack.network.v2.qos_minimum_packet_rate_rule`
- `external-call::dep:openstack.network.v2.rbac_policy`
- `external-call::dep:openstack.network.v2.security_group`
- `external-call::dep:openstack.network.v2.security_group_rule`
- `external-call::dep:openstack.network.v2.service_profile`
- `external-call::dep:openstack.tests.unit.cloud.test_baremetal_node`
- `external-call::dep:openstackclient.api.compute_v2`
- `external-call::dep:openstackclient.api.volume_v2`
- `external-call::dep:openstackclient.api.volume_v3`
- `external-call::dep:openstackclient.compute.v2.host`
- `external-call::dep:openstackclient.compute.v2.hypervisor_stats`
- `external-call::dep:openstackclient.tests.unit.fakes`
- `external-call::dep:requests.structures`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/fixture_data/client.py`
- `os_venv/lib/python3.12/site-packages/dogpile/cache/backends/memcached.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/plugin.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/v2.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/v3.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v2_access.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v2_service_catalog.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v3_access.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v3_service_catalog.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/client_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/kerberos/test_mapped.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/kerberos/utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/oauth1/test_oauth1.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/oauth1/test_oauth1_loading.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/saml2/test_auth_adfs.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_common.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3_federation.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3_oidc.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_password.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_token.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_tokenless_auth.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_cli.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_conf.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_generic.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_loading.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_opts.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_v3.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_service_token.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_session.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/token_endpoint.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/access.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/adapter.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/base.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/httpclient.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/client_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_domain_configs.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_domains.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_endpoint_groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_federation.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_policies.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_projects.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_roles.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_services.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_users.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_cli.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_default_cli.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_common.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v2.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v3.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v3_federated.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_password.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_token.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_token_endpoint.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/client_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_ec2utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_session.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/client_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_access.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_client.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_endpoints.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_roles.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_services.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tenants.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tokens.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_users.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/client_fixtures.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_access.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_access_rules.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_application_credentials.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_manager.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_oidc.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_saml2.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_client.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_credentials.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_domain_configs.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_domains.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_ec2.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_filter.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_policy.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoints.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_federation.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_groups.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_limits.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_oauth1.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_policies.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_projects.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_regions.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_registered_limits.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_role_assignments.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_roles.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_services.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_tokens.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_trusts.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_users.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/utils.py`
- `os_venv/lib/python3.12/site-packages/openstack/test/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_endpoints.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_roles.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_services.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/clustering/v1/test_cluster.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/compute/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/dns/v2/test_blacklist.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/dns/v2/test_zone.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/identity/v3/test_domain_config.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/image/v2/test_metadef_property.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/network/v2/test_default_security_group_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/placement/v1/test_resource_provider.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/placement/v1/test_resource_provider_inventory.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/base.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_node.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_ports.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_availability_zone.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_migration.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_actions.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_member.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_address_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_address_scope.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_auto_allocated_topology.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_local_ip_association.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_ndp_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_network_ip_availability.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_minimum_packet_rate_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_rbac_policy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_security_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_security_group_rule.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_service_profile.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/object_store/v1/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_connection.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/application_credential.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/common/test_quota.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/common.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_aggregate.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server_event.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_cache.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_metadef_resource_type.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/common.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_address_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_address_scope.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_default_security_group_rule.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_floating_ip.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_ip_availability.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_local_ip.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_agent.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_meter.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_meter_rule.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_qos_policy.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_qos_rule.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_rbac.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_segment.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_segment_range.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_trunk.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_router.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_security_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_security_group_rule.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_subnet.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_subnet_pool.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/base.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_qos.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_transfer_request.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_backup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_type.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/common.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_qos.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_transfer_request.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_type.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_compute_v2.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v2.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v3.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_agent.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_host.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_hypervisor_stats.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/integ/base.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_qos_rule.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/utils.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/utils/__init__.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py`
- `os_venv/lib/python3.12/site-packages/oslo_serialization/msgpackutils.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/uuidutils.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/rich/style.py`
- `os_venv/lib/python3.12/site-packages/prettytable/prettytable.py`
- `os_venv/lib/python3.12/site-packages/requests/structures.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/more_itertools/recipes.py`
- `os_venv/lib/python3.12/site-packages/urllib3/util/retry.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | randint, upper, random.choice, uuid, sleep, ... |
| `external-call::dep:keystoneauth1.access` | keystoneauth1.access |
| `external-call::dep:keystoneauth1.extras.oauth1` | keystoneauth1.extras.oauth1 |
| `external-call::dep:keystoneauth1.fixture` | keystoneauth1.fixture |
| `external-call::dep:keystoneauth1.identity` | keystoneauth1.identity |
| `external-call::dep:keystoneauth1.identity.generic.password` | keystoneauth1.identity.generic.password |
| `external-call::dep:keystoneauth1.identity.generic.token` | keystoneauth1.identity.generic.token |
| `external-call::dep:keystoneauth1.loading._plugins.identity.v3` | keystoneauth1.loading._plugins.identity.v3 |
| `external-call::dep:keystoneauth1.loading.cli` | keystoneauth1.loading.cli |
| `external-call::dep:keystoneauth1.service_token` | keystoneauth1.service_token |
| `external-call::dep:keystoneclient.auth.cli` | keystoneclient.auth.cli |
| `external-call::dep:keystoneclient.auth.identity` | keystoneclient.auth.identity |
| `external-call::dep:keystoneclient.auth.identity.generic.cli` | keystoneclient.auth.identity.generic.cli |
| `external-call::dep:keystoneclient.auth.token_endpoint` | keystoneclient.auth.token_endpoint |
| `external-call::dep:keystoneclient.contrib.auth.v3.oidc` | keystoneclient.contrib.auth.v3.oidc |
| `external-call::dep:keystoneclient.fixture` | keystoneclient.fixture |
| `external-call::dep:keystoneclient.tests.unit.client_fixtures` | keystoneclient.tests.unit.client_fixtures |
| `external-call::dep:keystoneclient.tests.unit.v3.utils` | keystoneclient.tests.unit.v3.utils |
| `external-call::dep:keystoneclient.v3.contrib.oauth1.auth` | keystoneclient.v3.contrib.oauth1.auth |
| `external-call::dep:oauthlib.oauth1` | oauthlib.oauth1 |
| `external-call::dep:openstack.block_storage.v3.extension` | openstack.block_storage.v3.extension |
| `external-call::dep:openstack.compute.v2.availability_zone` | openstack.compute.v2.availability_zone |
| `external-call::dep:openstack.compute.v2.extension` | openstack.compute.v2.extension |
| `external-call::dep:openstack.compute.v2.migration` | openstack.compute.v2.migration |
| `external-call::dep:openstack.compute.v2.server_action` | openstack.compute.v2.server_action |
| `external-call::dep:openstack.image.v2.member` | openstack.image.v2.member |
| `external-call::dep:openstack.network.v2.address_group` | openstack.network.v2.address_group |
| `external-call::dep:openstack.network.v2.address_scope` | openstack.network.v2.address_scope |
| `external-call::dep:openstack.network.v2.auto_allocated_topology` | openstack.network.v2.auto_allocated_topology |
| `external-call::dep:openstack.network.v2.extension` | openstack.network.v2.extension |
| `external-call::dep:openstack.network.v2.local_ip_association` | openstack.network.v2.local_ip_association |
| `external-call::dep:openstack.network.v2.ndp_proxy` | openstack.network.v2.ndp_proxy |
| `external-call::dep:openstack.network.v2.network_ip_availability` | openstack.network.v2.network_ip_availability |
| `external-call::dep:openstack.network.v2.qos_minimum_packet_rate_rule` | openstack.network.v2.qos_minimum_packet_rate_rule |
| `external-call::dep:openstack.network.v2.rbac_policy` | openstack.network.v2.rbac_policy |
| `external-call::dep:openstack.network.v2.security_group` | openstack.network.v2.security_group |
| `external-call::dep:openstack.network.v2.security_group_rule` | openstack.network.v2.security_group_rule |
| `external-call::dep:openstack.network.v2.service_profile` | openstack.network.v2.service_profile |
| `external-call::dep:openstack.tests.unit.cloud.test_baremetal_node` | openstack.tests.unit.cloud.test_baremetal_node |
| `external-call::dep:openstackclient.api.compute_v2` | openstackclient.api.compute_v2 |
| `external-call::dep:openstackclient.api.volume_v2` | openstackclient.api.volume_v2 |
| `external-call::dep:openstackclient.api.volume_v3` | openstackclient.api.volume_v3 |
| `external-call::dep:openstackclient.compute.v2.host` | openstackclient.compute.v2.host |
| `external-call::dep:openstackclient.compute.v2.hypervisor_stats` | openstackclient.compute.v2.hypervisor_stats |
| `external-call::dep:openstackclient.tests.unit.fakes` | openstackclient.tests.unit.fakes |
| `external-call::dep:requests.structures` | requests.structures |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/fixture_data/client.py` | __init__, setUp, kwargs, Base, args |
| `os_venv/lib/python3.12/site-packages/dogpile/cache/backends/memcached.py` | wait, acquire, MemcachedLock |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/plugin.py` | user_id, get_user_id, get_plugin_loader, create_plugin, project_id, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/v2.py` | __init__, name, name, set_bind, audit_chain_id, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/v3.py` | trustor_user_id, access_rules, impersonation, domain_name, set_trust_scope, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v2_access.py` | AccessV2Test, test_building_unscoped_accessinfo, test_v2_roles, test_building_scoped_accessinfo, test_is_admin_project, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v2_service_catalog.py` | test_service_catalog_get_endpoints_region_names, test_service_catalog_empty, test_service_catalog_endpoint_id, test_servcie_catalog_get_url_region_names, test_service_catalog_without_service_type, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v3_access.py` | test_federated_property_standard_token, test_oauth_access, test_building_project_as_domain_scoped_accessinfo, test_building_domain_scoped_accessinfo, test_is_admin_project_unset, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/access/test_v3_service_catalog.py` | test_service_catalog_regions, test_service_catalog_endpoints, test_service_catalog_get_endpoints_region_names, test_service_catalog_without_service_type, ServiceCatalogV3Test, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/client_fixtures.py` | domain_scoped_token, project_scoped_token |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/kerberos/test_mapped.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/kerberos/utils.py` | __init__, requests_mock |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/oauth1/test_oauth1.py` | test_warning_dual_scope, stub_auth, _validate_oauth_headers, subject_token, auth_header, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/oauth1/test_oauth1_loading.py` | kwargs, test_basic, OAuth1LoadingTests, create, setUp |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/extras/saml2/test_auth_adfs.py` | test_end_to_end_workflow |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_common.py` | test_ssl_error, test_setting_bad_connection_params, test_discovering_with_protocol_relative, kwargs, test_endpoint_override_skips_discovery, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3.py` | test_unscoped_with_scope_data |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3_federation.py` | test_get_ecp_assertion_wrong_headers, test_remote_url, test_end_to_end_workflow, test_send_ecp_authn_response_303_redirect, test_get_ecp_assertion_empty_response, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_identity_v3_oidc.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_password.py` | new_plugin, test_v3_disocovery_failure_v2_url, kwargs, test_default_domain_name_with_v3, test_password_cache_id, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_token.py` | kwargs, TokenTests, test_token_cache_id, new_plugin, test_symbols |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/test_tokenless_auth.py` | test_project_of_domain__name_scope_header_pass, test_project_of_domain_id_scope_header_pass |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/identity/utils.py` | test_path_based_url_v2, assertCreateV2, assertCreateV3, test_default_domain_name_no_v3, test_v3_plugin_from_failure, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_cli.py` | test_deprecated_env_multi_options, test_deprecated_env_options, m, test_deprecated_multi_cli_options, test_overrides_default_string_value, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_conf.py` | test_loading_v3, test_loading_v2 |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_generic.py` | test_loads_v3_with_user_domain |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_loading.py` | test_create_plugin_loader |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_opts.py` | test_argparse_default, test_argparse_default_with_deprecations |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/loading/test_v3.py` | V3PasswordTests, test_basic, test_without_project_domain, test_basic, setUp, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_fixtures.py` | test_oauth2, test_token_bind, test_project_as_domain_scoped, test_domain_scoped, test_catalog, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_service_token.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_session.py` | __call__, RequestsAuth, request, __init__, args, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/token_endpoint.py` | session, get_auth_ref |
| `os_venv/lib/python3.12/site-packages/keystoneclient/access.py` | has_service_catalog, __init__, kwargs, args, AccessInfoV2 |
| `os_venv/lib/python3.12/site-packages/keystoneclient/adapter.py` | delete, kwargs, url |
| `os_venv/lib/python3.12/site-packages/keystoneclient/base.py` | list, kwargs, build_url, dict_args_in_out, update, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/httpclient.py` | username, tenant_name, user_id, project_domain_id, tenant_id, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/client_fixtures.py` | Region, setUp, client, Endpoint, client, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_domain_configs.py` | test_update_invalid_domain_config, test_create_invalid_domain_config |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_domains.py` | test_create_domain, test_delete_domain |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_endpoint_groups.py` | EndpointGroupsTestMixin, test_update_endpoint_group, test_get_endpoint_group, test_check_endpoint_group, check_endpoint_group, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_federation.py` | test_idp_get, TestIdentityProviders, test_idp_create_enabled_true, test_idp_delete, test_idp_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_groups.py` | test_delete_group, GroupsTestCase, test_update_group, test_get_group, test_create_group, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_policies.py` | test_delete_policy, test_update_policy, test_get_policy, check_policy, policy, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_projects.py` | test_update_project, test_create_project, test_list_projects_with_tag_filters, test_create_subproject, test_delete_project, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_roles.py` | test_update_role_name, test_create_domain_role, test_delete_role, test_create_role |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_services.py` | test_delete_service, ServicesTestCase, service_ref, test_create_service, test_get_service, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/functional/v3/test_users.py` | test_list_users_with_filters, test_delete_user, test_create_user |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_cli.py` | m, m, CliTests, m, test_deprecated_multi_cli_options, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_default_cli.py` | mock_stdin, test_token_only_override, test_endpoint_override, test_prompt_password, test_prompt_no_password, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_common.py` | test_getting_endpoints_on_auth_interface, kwargs, get_auth_data, kwargs, test_getting_endpoints, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v2.py` | test_prompt_password, mock_stdin |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v3.py` | test_prompt_password, setUp, test_unscoped_with_scope_data, mock_stdin |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_v3_federated.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_password.py` | mock_stdin, kwargs, PasswordTests, test_symbols, new_plugin, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_token.py` | new_plugin, kwargs |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_token_endpoint.py` | test_basic_endpoint_case, test_token_endpoint_options |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/utils.py` | setUp, test_path_based_url_v3, test_v2_params_v3_url, kwargs, GenericPluginTestCase, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/client_fixtures.py` | BaseFixture, KscSessionV2, new_client, new_client, new_client, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_ec2utils.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_fixtures.py` | test_unscoped, test_trust_scoped, test_trust_scoped, test_project_scoped, test_roles, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_session.py` | test_legacy_binding, test_session_debug_output |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/client_fixtures.py` | auth_response_body, unscoped_token, project_scoped_token |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_access.py` | test_trusts |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_client.py` | test_management_url_is_updated, test_client_params |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_endpoints.py` | test_delete, EndpointTests, test_create_with_optional_params_as_none, test_create_with_optional_params, test_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_roles.py` | test_roles_for_user_tenant, test_remove_user_role_tenant, setUp, test_add_user_role, test_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_services.py` | test_delete, setUp, ServiceTests, test_create_without_description, test_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tenants.py` | TenantTests, test_tenant_remove_user, test_list, test_list_limit, test_update, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tokens.py` | test_with_tenant_id, test_user_password, test_validate_token, test_authenticate_use_admin_url, test_without_auth_params, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_users.py` | test_create_user_without_email, test_update, test_create, test_list_limit_marker, test_list_marker, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/client_fixtures.py` | kwargs, unscoped_token, domain_scoped_token, trust_token, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_access.py` | test_oauth_access |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_access_rules.py` | setUp, kwargs, AccessRuleTests, test_update, new_ref, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_application_credentials.py` | test_update, test_create_with_role_id_and_names, test_create_expires, test_create_with_roles, setUp, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_manager.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_oidc.py` | setUp, test_conf_params |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_auth_saml2.py` | test_saml_create, SAMLGenerationTests, setUp, test_ecp_create |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_client.py` | test_client_params |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_credentials.py` | CredentialTests, new_ref, kwargs, setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_domain_configs.py` | test_list_by_id, setUp, test_list, test_delete, resource, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_domains.py` | DomainTests, test_list_filter_name, test_filter_for_default_domain_by_id, setUp, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_ec2.py` | test_get, EC2Tests, test_create, test_list, test_delete |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_filter.py` | test_check_endpoint_group_in_project, new_endpoint_group_ref, test_add_endpoint_group_to_project, test_list_endpoint_groups_for_project_value_error, test_list_projects_for_endpoint_group, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_groups.py` | kwargs, new_ref, setUp, EndpointGroupTests |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoint_policy.py` | manager_action, test_check_policy_association_for_endpoint_via_obj, test_check_policy_association_for_service_via_id, manager_action, http_action, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_endpoints.py` | test_update_invalid_interface, test_list_invalid_interface, test_list_internal_interface, test_list_admin_interface, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_federation.py` | protocol_id, kwargs, FederationProjectTests, new_ref, new_ref, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_groups.py` | GroupTests, test_list_groups_for_domain, kwargs, new_ref, test_list_groups_for_user, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_limits.py` | test_list_filtered_by_region, test_create, new_ref, LimitTests, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_oauth1.py` | test_no_oauthlib_installed, auth_header, setUp, test_create_access_token_expires_at, setUp, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_policies.py` | PolicyTests, new_ref, kwargs, setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_projects.py` | test_delete_tag, test_list_tags, test_list_projects_for_domain, _new_project_ref, test_get_with_subtree_as_ids, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_regions.py` | kwargs, setUp, test_update_enabled_defaults_to_none, RegionTests, new_ref |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_registered_limits.py` | test_list_filter_by_service, RegisteredLimitTests, test_list_filter_region, test_list_filter_resource_name, new_ref, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_role_assignments.py` | ref_list, test_include_names_assignments_list, test_system_assignment_list_for_user, test_user_and_group_list, returned_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_roles.py` | test_domain_role_grant, test_find, test_project_group_role_check_inherited, kwargs, test_domain_group_role_list, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_services.py` | test_list_filter_type, new_ref, test_list_filter_name, setUp, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_tokens.py` | test_validate_token_with_access_info, TokenTests, test_validate_token_allow_expired, test_revoke_token_with_access_info_instance, test_get_revoked_audit_id_only, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_trusts.py` | kwargs, test_create, TrustTests, test_list_filter_trustee, test_create_roles, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/test_users.py` | test_check_user_in_group, UserTests, ref, test_create_doesnt_log_password, new_ref, ... |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v3/utils.py` | ref, ref, ref, CrudTests, test_list_by_id, ... |
| `os_venv/lib/python3.12/site-packages/openstack/test/fakes.py` | attrs, generate_fake_resources, resource_type, count, generate_fake_resource, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_endpoints.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_port.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_roles.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_services.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/clustering/v1/test_cluster.py` | test_update |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/compute/v2/test_flavor.py` | test_flavor_access, test_flavor, setUp, _delete_flavor, flavor, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/dns/v2/test_blacklist.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/dns/v2/test_zone.py` | setUp, TestZone, test_list_zones, test_get_zone, test_create_rs, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/identity/v3/test_domain_config.py` | test_domain_config |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/image/v2/test_metadef_property.py` | setUp, tearDown, TestMetadefProperty, test_metadef_property |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/network/v2/test_default_security_group_rule.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/placement/v1/test_resource_provider.py` | test_resource_provider_aggregates |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/placement/v1/test_resource_provider_inventory.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/base.py` | expected, use_glance, use_cinder, kwargs, name, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_extension.py` | test_basic, TestExtension, test_make_extension |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_node.py` | machine_name, make_fake_port, node_id, setUp, address, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_baremetal_ports.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_image_snapshot.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_availability_zone.py` | test_basic, TestAvailabilityZone, test_make_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_extension.py` | TestExtension, test_basic, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_migration.py` | test_make_it, TestMigration, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_proxy.py` | test_share_attachments, test_volume_attachment_create__missing_parameters, TestVolumeAttachment, test_volume_attachment_update, test_create_share_attachment, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_actions.py` | TestServerAction, test_make_it, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_member.py` | test_basic, test_make_it, TestMember |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_address_group.py` | test_make_it, test_basic, TestAddressGroup |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_address_scope.py` | test_basic, TestAddressScope, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_auto_allocated_topology.py` | test_basic, TestAutoAllocatedTopology, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_extension.py` | test_make_it, TestExtension, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_local_ip_association.py` | test_basic, test_make_it, TestLocalIP |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_ndp_proxy.py` | TestNDPProxy, test_basic, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_network_ip_availability.py` | test_make_it, test_basic, test_make_it_with_optional, TestNetworkIPAvailability |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_qos_minimum_packet_rate_rule.py` | test_basic, test_make_it, TestQoSMinimumPacketRateRule |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_rbac_policy.py` | test_basic, test_make_it, TestRBACPolicy |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_security_group.py` | test_basic, TestSecurityGroup, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_security_group_rule.py` | TestSecurityGroupRule, test_make_it, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_service_profile.py` | TestServiceProfile, test_make_it, test_make_it_with_optional, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/object_store/v1/test_proxy.py` | test_file_segment |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_connection.py` | test_authorize_failure |
| `os_venv/lib/python3.12/site-packages/openstackclient/identity/v3/application_credential.py` | is_uuid_like, value |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/common/test_quota.py` | test_quota_show_usage_option, _restore_quota_limit, test_quota_set_network_with_force, test_quota_list_compute_option, test_quota_set_network, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/common.py` | wait, server_delete, ComputeTestCase, server_create, get_network, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_aggregate.py` | test_aggregate_crud, test_aggregate_add_and_remove_host, AggregateTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_flavor.py` | test_flavor_properties, test_flavor_list, FlavorTests, test_flavor_delete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server.py` | test_server_boot_with_bdm_snapshot, _test_server_boot_with_bdm_volume, test_server_stop_start, _test_server_boot_with_bdm_image, test_server_boot_with_bdm_volume_legacy, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server_event.py` | test_server_event_list_and_show_deleted_server, ServerEventTests, setUp, test_server_event_list_and_show |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/compute/v2/test_server_group.py` | test_server_group_show_and_list, test_server_group_delete, ServerGroupTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_cache.py` | CacheTests, test_cached_image |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_image.py` | test_image_set_rename |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/image/v2/test_metadef_resource_type.py` | test_metadef_resource_type, ImageMetadefResourceTypeTests, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/common.py` | setUpClass |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_address_group.py` | setUp, test_address_group_set_unset_and_show, AddressGroupTests, test_address_group_list, test_address_group_create_and_delete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_address_scope.py` | test_address_scope_list, test_address_scope_delete, AddressScopeTests, test_address_scope_set |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_default_security_group_rule.py` | test_security_group_rule_list, setUp, test_security_group_rule_show, SecurityGroupRuleTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_floating_ip.py` | setUpClass |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_ip_availability.py` | setUpClass |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_local_ip.py` | test_local_ip_list, test_local_ip_set_unset_and_show, setUp, test_local_ip_create_and_delete, LocalIPTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network.py` | test_network_list, test_network_set, test_network_create_compute, test_network_delete_network, test_network_create_network, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_agent.py` | test_network_agent_list_routers, TestAgentList, setUp, test_network_dhcp_agent_list |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_flavor.py` | test_network_flavor_list, test_network_flavor_show, test_network_flavor_set, NetworkFlavorTests, test_network_flavor_delete, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_meter.py` | test_meter_show, TestMeter, setUp, test_meter_list, test_meter_delete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_meter_rule.py` | setUpClass |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_qos_policy.py` | test_qos_policy_list, setUp, NetworkQosPolicyTests, test_qos_policy_set, test_qos_rule_create_delete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_qos_rule.py` | setUp, test_qos_rule_show, setUp, test_qos_rule_create_delete, NetworkQosRuleTestsMinimumBandwidth, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_rbac.py` | test_network_rbac_set, test_network_rbac_show, setUp, test_network_rbac_list, NetworkRBACTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_segment.py` | test_network_segment_list, NetworkSegmentTests, test_network_segment_create_delete, setUp, test_network_segment_set_show, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_segment_range.py` | NetworkSegmentRangeTests, test_network_segment_range_list, test_network_segment_range_set_show, setUp, test_network_segment_range_create_delete |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_network_trunk.py` | test_network_trunk_create_delete, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_port.py` | test_port_show_with_trunk, test_port_list, _trunk_creation, test_port_delete, name, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_router.py` | _test_set_router_distributed, test_router_list, RouterTests, test_router_add_remove_route, test_router_create_and_delete, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_security_group.py` | test_security_group_show, setUp, test_security_group_list, SecurityGroupTests, test_security_group_set |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_security_group_rule.py` | test_security_group_rule_show, test_security_group_rule_list, setUp, SecurityGroupRuleTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_subnet.py` | args, name, setUpClass, name, test_subnet_set_show_unset, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_subnet_pool.py` | SubnetPoolTests, _create_resource_for_tag_test, name, test_subnet_pool_set_show, cmd, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/base.py` | wait, name_field, check_name, wait, failures, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_qos.py` | test_volume_qos_set_show_unset, QosTests, test_volume_qos_create_delete_list, test_volume_qos_asso_disasso |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_transfer_request.py` | test_volume_transfer_request_accept, TransferRequestTests, test_volume_transfer_request_list_show |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume.py` | test_volume_delete, test_volume_set_and_unset, VolumeTests, test_volume_snapshot, test_volume_list_backward_compatibility, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_backup.py` | VolumeBackupTests, test_volume_backup_restore, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_snapshot.py` | test_volume_snapshot_set, test_volume_snapshot_list, test_volume_snapshot_delete, VolumeSnapshotTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v2/test_volume_type.py` | test_volume_type_set_unset_properties, test_volume_type_set_unset_multiple_properties, test_volume_type_set_unset_project, VolumeTypeTests, test_volume_type_create_list, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/common.py` | setUpClass |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_qos.py` | test_volume_qos_create_delete_list, test_volume_qos_asso_disasso, QosTests, test_volume_qos_set_show_unset |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_transfer_request.py` | test_volume_transfer_request_accept, TransferRequestTests, test_volume_transfer_request_list_show |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume.py` | test_volume_set_and_unset, test_volume_delete, VolumeTests, test_volume_list_backward_compatibility, test_volume_snapshot, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_group.py` | test_volume_group, setUpClass, VolumeGroupTests |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_snapshot.py` | setUpClass, VolumeSnapshotTests, test_volume_snapshot |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/volume/v3/test_volume_type.py` | test_volume_type_set_unset_properties, test_volume_type_set_unset_project, test_multi_delete, test_volume_type_set_unset_multiple_properties, test_encryption_type, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_compute_v2.py` | test_list_networks, test_create_floating_ip, test_find_network_by_name, test_find_security_group_by_name, test_list_security_groups, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v2.py` | test_find_consistency_group_by_name_duplicate, test_find_consistency_group_by_id, TestConsistencyGroup, test_find_consistency_group_by_name, test_find_consistency_group_not_found |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v3.py` | test_find_consistency_group_not_found, test_find_consistency_group_by_id, test_find_consistency_group_by_name_duplicate, test_find_consistency_group_by_name, TestConsistencyGroup |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/fakes.py` | attrs, attrs, attrs, count, create_networks, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_agent.py` | test_delete_multiple_agents_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_host.py` | TestHostSet, test_host_set_no_option, test_host_show_no_option, setUp, test_host_list_with_option, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_hypervisor_stats.py` | test_hypervisor_show_stats, TestHypervisorStatsShow, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/fakes.py` | create_one_role, count, attrs, create_projects, create_one_service, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/fakes.py` | create_one_project, create_one_group, create_one_role_assignment, attrs, attrs, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/fakes.py` | create_one_image, attrs |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/fakes.py` | count, attrs, create_one_image, create_tasks, create_one_image_member, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/integ/base.py` | req_mock, req_mock, make_v2_token, make_v3_token |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fakes.py` | create_one_qos_rule, attrs, create_one_service_profile, create_one_local_ip_association, create_one_meter, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network.py` | test_network_list_status |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_qos_rule.py` | test_qos_rule_list, setUp, TestListNetworkQosRule |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/utils.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/fakes.py` | attrs, create_one_service, create_one_backup, create_one_type_access, attrs, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py` | TestColumns, test_attachments_column_with_server_cache, test_attachments_column_without_server_cache |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/fakes.py` | methods, attrs, create_one_volume_group_snapshot, create_one_volume_group, create_one_type_access, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py` | test_attachments_column_without_server_cache, test_attachments_column_with_server_cache, TestColumns |
| `os_venv/lib/python3.12/site-packages/osc_lib/utils/__init__.py` | value, is_uuid_like |
| `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py` | namespace, parse_args, args |
| `os_venv/lib/python3.12/site-packages/oslo_serialization/msgpackutils.py` | deserialize, data |
| `os_venv/lib/python3.12/site-packages/oslo_utils/uuidutils.py` | dashed, generate_uuid |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/rich/style.py` | without_color |
| `os_venv/lib/python3.12/site-packages/prettytable/prettytable.py` | _set_random_style |
| `os_venv/lib/python3.12/site-packages/requests/structures.py` | copy |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/more_itertools/recipes.py` | random_product, args, repeat |
| `os_venv/lib/python3.12/site-packages/urllib3/util/retry.py` | _sleep_backoff, get_backoff_time |

## Entry Points

- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_port.py::PortTests.test_port_list`

## Connected Communities

- **. +22 dirs** (50 cross-edges)
- **. +18 dirs · deepcopy** (44 cross-edges)
- **functional/v3 +5 dirs** (35 cross-edges)
- **. +20 dirs** (31 cross-edges)
- **unit/loading +11 dirs** (23 cross-edges)
- **unit/auth +3 dirs** (17 cross-edges)
- **. +64 dirs** (16 cross-edges)
- **unit/v2_0 +6 dirs** (13 cross-edges)
- **compute/v2 +17 dirs** (13 cross-edges)
- **functional/cloud +53 dirs** (10 cross-edges)
- **. +11 dirs** (9 cross-edges)
- **python3.12/site-packages · items · shell** (8 cross-edges)
- **. +23 dirs · oslo_config.cfg** (7 cross-edges)
- **. +83 dirs** (7 cross-edges)
- **unit/v3 +1 dirs** (7 cross-edges)
- **unit/cloud +5 dirs** (7 cross-edges)
- **compute/v2 +2 dirs** (6 cross-edges)
- **unit/v3 +4 dirs** (6 cross-edges)
- **unit/cloud +11 dirs** (6 cross-edges)
- **unit/cloud +14 dirs** (5 cross-edges)
- **block_storage/v3 +2 dirs · openstack.block_storage.v3.volu…** (5 cross-edges)
- **. +39 dirs** (5 cross-edges)
- **site-packages/keystoneclient +6 dirs** (5 cross-edges)
- **. +10 dirs · openstack.test.fakes** (4 cross-edges)
- **tests/unit +2 dirs · expect_deprecations_here** (4 cross-edges)
- **unit/config +7 dirs** (4 cross-edges)
- **unit/auth +1 dirs** (4 cross-edges)
- **site-packages/keystoneclient · post** (3 cross-edges)
- **unit/auth +2 dirs** (3 cross-edges)
- **keystoneauth1/fixture +4 dirs** (3 cross-edges)
- **unit/cloud +2 dirs · openstack.cloud.meta** (2 cross-edges)
- **site-packages/keystoneclient · get_raw_token_from_identity_ser…** (2 cross-edges)
- **. +37 dirs · cast** (2 cross-edges)
- **shared_file_system/v2 +1 dirs · openstack.shared_file_system.v2… · external-call::dep:openstack.shared_file_system.v2 · test_proxy (35)** (2 cross-edges)
- **. +1 dirs · openstackclient.volume.v2.volume** (2 cross-edges)
- **. +1 dirs · keystoneauth1.loading._plugins.…** (2 cross-edges)
- **. +7 dirs · append** (2 cross-edges)
- **python3.12/site-packages · stub_url** (2 cross-edges)
- **. +1 dirs · openstackclient.volume.v3.volume** (2 cross-edges)
- **keystoneauth1/loading +2 dirs** (2 cross-edges)
- **unit/identity +1 dirs** (2 cross-edges)
- **python3.12/site-packages · set** (2 cross-edges)
- **. +12 dirs · oslo_serialization.jsonutils** (2 cross-edges)
- **. +2 dirs · __init__ · external-call::dep:keystoneclient.v3.contrib.oauth1** (1 cross-edges)
- **. +2 dirs · openstack.image.v1.image** (1 cross-edges)
- **python3.12/site-packages · update · _identity** (1 cross-edges)
- **. +18 dirs · append** (1 cross-edges)
- **compute/v2 +1 dirs · openstack.compute.v2.server_int…** (1 cross-edges)
- **site-packages/keystoneclient · request · adapter** (1 cross-edges)
- **. +1 dirs · Ec2SignerTest** (1 cross-edges)
- **. +1 dirs · openstack.compute.v2.server_mig…** (1 cross-edges)
- **functional/cloud +7 dirs** (1 cross-edges)
- **functional/v3 · check_domain** (1 cross-edges)
- **functional/v3 · check_user** (1 cross-edges)
- **. +2 dirs · __init__ · external-call::dep:keystoneclient.v3** (1 cross-edges)
- **site-packages/keystoneclient +3 dirs** (1 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.local_ip** (1 cross-edges)
- **site-packages/keystoneclient · _post** (1 cross-edges)
- **python3.12/site-packages · _get_token_resource** (1 cross-edges)
- **. +2 dirs · keystoneclient.adapter** (1 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.qos_policy** (1 cross-edges)
- **network/v2 +2 dirs · openstackclient.tests.unit.netw…** (1 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.router** (1 cross-edges)
- **image/v2 +1 dirs · openstack.image.v2.task** (1 cross-edges)
- **. +4 dirs · openstack.connection** (1 cross-edges)
- **extras/kerberos +7 dirs** (1 cross-edges)
- **. +4 dirs · partial** (1 cross-edges)
- **python3.12/site-packages · request · session · fakes** (1 cross-edges)
- **. +1 dirs · __init__ · external-call::dep:keystoneclient** (1 cross-edges)
- **_vendor/requests +7 dirs** (1 cross-edges)
- **identity/v3 +4 dirs** (1 cross-edges)
- **keystoneclient/v3 +8 dirs** (1 cross-edges)
- **. +37 dirs · get** (1 cross-edges)
- **. +6 dirs · requests_mock.contrib.fixture** (1 cross-edges)
- **keystoneclient/v3 +12 dirs** (1 cross-edges)
- **. +23 dirs · fixtures** (1 cross-edges)
- **network/v2 +2 dirs · openstack.network.v2.network** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-7786"
smart_context with task: "understand . +61 dirs", format: "gcx"
find_usages with id: "os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/network/v2/test_port.py::PortTests.test_port_list", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
