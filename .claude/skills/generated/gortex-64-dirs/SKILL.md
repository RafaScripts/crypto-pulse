---
name: gortex-64-dirs
description: "Work in the . +64 dirs area — 1565 symbols across 273 files (85% cohesion)"
---

# . +64 dirs

1565 symbols | 273 files | 85% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:cliff.app`
- `external-call::dep:cliff.commandmanager`
- `external-call::dep:cliff.complete`
- `external-call::dep:cliff.help`
- `external-call::dep:cliff.tests.utils`
- `external-call::dep:keystoneauth1.fixture.hooks`
- `external-call::dep:keystoneclient.tests.unit.utils`
- `external-call::dep:openstack._hacking.checks`
- `external-call::dep:openstack.baremetal.v1.allocation`
- `external-call::dep:openstack.baremetal.v1.driver`
- `external-call::dep:openstack.baremetal.v1.port`
- `external-call::dep:openstack.block_storage.v2.backup`
- `external-call::dep:openstack.block_storage.v2.service`
- `external-call::dep:openstack.block_storage.v2.type`
- `external-call::dep:openstack.block_storage.v3.backup`
- `external-call::dep:openstack.block_storage.v3.default_type`
- `external-call::dep:openstack.block_storage.v3.group`
- `external-call::dep:openstack.block_storage.v3.group_type`
- `external-call::dep:openstack.block_storage.v3.type`
- `external-call::dep:openstack.clustering.v1._proxy`
- `external-call::dep:openstack.clustering.v1.cluster`
- `external-call::dep:openstack.clustering.v1.node`
- `external-call::dep:openstack.clustering.v1.profile_type`
- `external-call::dep:openstack.clustering.v1.service`
- `external-call::dep:openstack.common.quota_set`
- `external-call::dep:openstack.compute.v2.aggregate`
- `external-call::dep:openstack.compute.v2.flavor`
- `external-call::dep:openstack.compute.v2.hypervisor`
- `external-call::dep:openstack.compute.v2.server_ip`
- `external-call::dep:openstack.config.defaults`
- `external-call::dep:openstack.database.v1.instance`
- `external-call::dep:openstack.dns.v2.tld`
- `external-call::dep:openstack.dns.v2.zone`
- `external-call::dep:openstack.dns.v2.zone_export`
- `external-call::dep:openstack.dns.v2.zone_import`
- `external-call::dep:openstack.dns.v2.zone_share`
- `external-call::dep:openstack.identity.v2.extension`
- `external-call::dep:openstack.identity.v3.limit`
- `external-call::dep:openstack.identity.v3.registered_limit`
- `external-call::dep:openstack.identity.v3.token`
- `external-call::dep:openstack.identity.version`
- `external-call::dep:openstack.key_manager.v1.secret_consumer`
- `external-call::dep:openstack.load_balancer.v2.load_balancer`
- `external-call::dep:openstack.message.v2.claim`
- `external-call::dep:openstack.message.v2.message`
- `external-call::dep:openstack.message.v2.queue`
- `external-call::dep:openstack.message.v2.subscription`
- `external-call::dep:openstack.network.v2.agent`
- `external-call::dep:openstack.network.v2.bgp_speaker`
- `external-call::dep:openstack.network.v2.flavor`
- `external-call::dep:openstack.network.v2.port_binding`
- `external-call::dep:openstack.network.v2.trunk`
- `external-call::dep:openstack.orchestration.v1.template`
- `external-call::dep:openstack.proxy`
- `external-call::dep:openstack.shared_file_system.v2.service`
- `external-call::dep:openstack.shared_file_system.v2.share_type`
- `external-call::dep:openstack.tests.unit.test_resource`
- `external-call::dep:openstack.tests.unit.test_resource.FakeResponse`
- `external-call::dep:openstackclient.common.project_cleanup`
- `external-call::dep:osc_lib.shell`
- `external-call::dep:osc_lib.test.fakes`
- `external-call::dep:oslo_config.sphinxconfiggen`
- `os_venv/lib/python3.12/site-packages/autopage/tests/test_autopage.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/fakes.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_api_versions.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_http.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_utils.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/utils.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_auth.py`
- `os_venv/lib/python3.12/site-packages/cliff/app.py`
- `os_venv/lib/python3.12/site-packages/cliff/command.py`
- `os_venv/lib/python3.12/site-packages/cliff/commandmanager.py`
- `os_venv/lib/python3.12/site-packages/cliff/complete.py`
- `os_venv/lib/python3.12/site-packages/cliff/show.py`
- `os_venv/lib/python3.12/site-packages/cliff/sphinxext.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_app.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_command.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_command_hooks.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_commandmanager.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_complete.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_help.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_lister.py`
- `os_venv/lib/python3.12/site-packages/cliff/tests/test_show.py`
- `os_venv/lib/python3.12/site-packages/cliff/utils.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/session.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_betamax_hooks.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_fair_sempahore.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_common.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_cms.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_session.py`
- `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tenants.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v2/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/identity/v3/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/identity/v3/token.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/network/v2/common.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_allocation.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_driver.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_node.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_port.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_backup.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_transfer.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_attachment.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_backup.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_cluster.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_default_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_transfer.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_clustering.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_fwaas.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_network.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_openstackcloud.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_cluster.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_node.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_profile_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_metadata.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_quota_set.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_tag.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_aggregate.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_hypervisor.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_actions.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_ip.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_migration.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_remote_console.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_cloud_config.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/database/v1/test_instance.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_tld.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_export.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_import.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_share.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/test_version.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v2/test_extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_domain.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_group.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_limit.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_project.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_registered_limit.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_token.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_user.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_cache.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_metadef_namespace.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_service_info.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/key_manager/v1/test_secret.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/key_manager/v1/test_secret_consumer.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/load_balancer/test_load_balancer.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/load_balancer/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_claim.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_message.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_queue.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_subscription.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_agent.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_bgp_speaker.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_floating_ip.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_port_binding.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_router.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_trunk.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_stack.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_stack_files.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_template.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_group_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_instance.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_snapshot.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_type.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_exceptions.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_fakes.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_hacking.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_proxy_base.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_resource.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_utils.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_compute_v2.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v2.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v3.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_command.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_module.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_project_cleanup.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_flavor.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_keypair.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_service.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_usage.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/test_common.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/test_catalog.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/test_user.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_catalog.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_endpoint_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_identity_provider.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_mappings.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role_assignment.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_user.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/test_common.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_policy.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_floating_ip_port_forwarding.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_local_ip_association.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_qos_policy.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_router.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/object/v1/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/object/v1/test_object_all.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/test_find_resource.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_consistency_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_qos_specs.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_transfer_request.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_type.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/fakes.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_consistency_group.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_qos_specs.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_transfer_request.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_type.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/shell.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/test/base.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/test/fakes.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/api/test_api.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/cli/test_identity.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/command/test_command.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_clientmanager.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_logs.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_shell.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/utils/test_tags.py`
- `os_venv/lib/python3.12/site-packages/osc_lib/tests/utils/test_utils.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_cfg.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_generator.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sources.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sphinxconfiggen.py`
- `os_venv/lib/python3.12/site-packages/oslo_i18n/tests/test_gettextutils.py`
- `os_venv/lib/python3.12/site-packages/oslo_i18n/tests/test_message.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/tests/imageutils/test_format_inspector.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/tests/test_netutils.py`
- `os_venv/lib/python3.12/site-packages/requests/models.py`
- `os_venv/lib/python3.12/site-packages/requests/sessions.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | patch, object, Mock, MagicMock, __init__ |
| `external-call::dep:cliff.app` | cliff.app |
| `external-call::dep:cliff.commandmanager` | cliff.commandmanager |
| `external-call::dep:cliff.complete` | cliff.complete |
| `external-call::dep:cliff.help` | cliff.help |
| `external-call::dep:cliff.tests.utils` | cliff.tests.utils |
| `external-call::dep:keystoneauth1.fixture.hooks` | keystoneauth1.fixture.hooks |
| `external-call::dep:keystoneclient.tests.unit.utils` | keystoneclient.tests.unit.utils |
| `external-call::dep:openstack._hacking.checks` | openstack._hacking.checks |
| `external-call::dep:openstack.baremetal.v1.allocation` | openstack.baremetal.v1.allocation |
| `external-call::dep:openstack.baremetal.v1.driver` | openstack.baremetal.v1.driver |
| `external-call::dep:openstack.baremetal.v1.port` | openstack.baremetal.v1.port |
| `external-call::dep:openstack.block_storage.v2.backup` | openstack.block_storage.v2.backup |
| `external-call::dep:openstack.block_storage.v2.service` | openstack.block_storage.v2.service |
| `external-call::dep:openstack.block_storage.v2.type` | openstack.block_storage.v2.type |
| `external-call::dep:openstack.block_storage.v3.backup` | openstack.block_storage.v3.backup |
| `external-call::dep:openstack.block_storage.v3.default_type` | openstack.block_storage.v3.default_type |
| `external-call::dep:openstack.block_storage.v3.group` | openstack.block_storage.v3.group |
| `external-call::dep:openstack.block_storage.v3.group_type` | openstack.block_storage.v3.group_type |
| `external-call::dep:openstack.block_storage.v3.type` | openstack.block_storage.v3.type |
| `external-call::dep:openstack.clustering.v1._proxy` | openstack.clustering.v1._proxy |
| `external-call::dep:openstack.clustering.v1.cluster` | openstack.clustering.v1.cluster |
| `external-call::dep:openstack.clustering.v1.node` | openstack.clustering.v1.node |
| `external-call::dep:openstack.clustering.v1.profile_type` | openstack.clustering.v1.profile_type |
| `external-call::dep:openstack.clustering.v1.service` | openstack.clustering.v1.service |
| `external-call::dep:openstack.common.quota_set` | openstack.common.quota_set |
| `external-call::dep:openstack.compute.v2.aggregate` | openstack.compute.v2.aggregate |
| `external-call::dep:openstack.compute.v2.flavor` | openstack.compute.v2.flavor |
| `external-call::dep:openstack.compute.v2.hypervisor` | openstack.compute.v2.hypervisor |
| `external-call::dep:openstack.compute.v2.server_ip` | openstack.compute.v2.server_ip |
| `external-call::dep:openstack.config.defaults` | openstack.config.defaults |
| `external-call::dep:openstack.database.v1.instance` | openstack.database.v1.instance |
| `external-call::dep:openstack.dns.v2.tld` | openstack.dns.v2.tld |
| `external-call::dep:openstack.dns.v2.zone` | openstack.dns.v2.zone |
| `external-call::dep:openstack.dns.v2.zone_export` | openstack.dns.v2.zone_export |
| `external-call::dep:openstack.dns.v2.zone_import` | openstack.dns.v2.zone_import |
| `external-call::dep:openstack.dns.v2.zone_share` | openstack.dns.v2.zone_share |
| `external-call::dep:openstack.identity.v2.extension` | openstack.identity.v2.extension |
| `external-call::dep:openstack.identity.v3.limit` | openstack.identity.v3.limit |
| `external-call::dep:openstack.identity.v3.registered_limit` | openstack.identity.v3.registered_limit |
| `external-call::dep:openstack.identity.v3.token` | openstack.identity.v3.token |
| `external-call::dep:openstack.identity.version` | openstack.identity.version |
| `external-call::dep:openstack.key_manager.v1.secret_consumer` | openstack.key_manager.v1.secret_consumer |
| `external-call::dep:openstack.load_balancer.v2.load_balancer` | openstack.load_balancer.v2.load_balancer |
| `external-call::dep:openstack.message.v2.claim` | openstack.message.v2.claim |
| `external-call::dep:openstack.message.v2.message` | openstack.message.v2.message |
| `external-call::dep:openstack.message.v2.queue` | openstack.message.v2.queue |
| `external-call::dep:openstack.message.v2.subscription` | openstack.message.v2.subscription |
| `external-call::dep:openstack.network.v2.agent` | openstack.network.v2.agent |
| `external-call::dep:openstack.network.v2.bgp_speaker` | openstack.network.v2.bgp_speaker |
| `external-call::dep:openstack.network.v2.flavor` | openstack.network.v2.flavor |
| `external-call::dep:openstack.network.v2.port_binding` | openstack.network.v2.port_binding |
| `external-call::dep:openstack.network.v2.trunk` | openstack.network.v2.trunk |
| `external-call::dep:openstack.orchestration.v1.template` | openstack.orchestration.v1.template |
| `external-call::dep:openstack.proxy` | openstack.proxy |
| `external-call::dep:openstack.shared_file_system.v2.service` | openstack.shared_file_system.v2.service |
| `external-call::dep:openstack.shared_file_system.v2.share_type` | openstack.shared_file_system.v2.share_type |
| `external-call::dep:openstack.tests.unit.test_resource` | openstack.tests.unit.test_resource |
| `external-call::dep:openstack.tests.unit.test_resource.FakeResponse` | openstack.tests.unit.test_resource.FakeResponse |
| `external-call::dep:openstackclient.common.project_cleanup` | openstackclient.common.project_cleanup |
| `external-call::dep:osc_lib.shell` | osc_lib.shell |
| `external-call::dep:osc_lib.test.fakes` | osc_lib.test.fakes |
| `external-call::dep:oslo_config.sphinxconfiggen` | oslo_config.sphinxconfiggen |
| `os_venv/lib/python3.12/site-packages/autopage/tests/test_autopage.py` | test_launch_pager_fail, test_pager_cat, test_no_pager, test_launch_pager |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/fakes.py` | authenticate |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_api_versions.py` | setUp |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_client.py` | httpclient_mock, test_construct_http_client_endpoint_url, session_mock |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_http.py` | test_get_global_id, ClientTest, test_get, test_get_call, get_authed_client, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/test_utils.py` | resource_id, get, test_find_none, kwargs |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/utils.py` | __eq__, other, data, TestResponse, __init__ |
| `os_venv/lib/python3.12/site-packages/cinderclient/tests/unit/v3/test_auth.py` | test_auth_automatic |
| `os_venv/lib/python3.12/site-packages/cliff/app.py` | deferred_help, interactive_app_factory, description, command_manager, get_fuzzy_matches, ... |
| `os_venv/lib/python3.12/site-packages/cliff/command.py` | run, parsed_args |
| `os_venv/lib/python3.12/site-packages/cliff/commandmanager.py` | command_class, load_commands, _get_commands_by_partial_name, _get_last_possible_command_index, namespace, ... |
| `os_venv/lib/python3.12/site-packages/cliff/complete.py` | command, add_command, _get_data_recurse, get_parser, CompleteDictionary, ... |
| `os_venv/lib/python3.12/site-packages/cliff/show.py` | ShowOne, dict2columns, data |
| `os_venv/lib/python3.12/site-packages/cliff/sphinxext.py` | setup, app |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_app.py` | test_interrupted_help, TestHelpHandling, test_deferred_help, test_fuzzy_common_prefix, test_io_streams, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_command.py` | setUp, setUp, setUp, TestHelp, setUp |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_command_hooks.py` | TestListerCommand, test_no_name, kwargs, parsed_args, make_app, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_commandmanager.py` | TestIsModuleIgnored, test_find_legacy, test_load_commands_duplicates, test, TestLegacyCommand, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_complete.py` | then_actions_equal, test_dictionary, TestCompletionAction, TestCompletion, given_complete_command, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_help.py` | test_show_help_for_help, run_help, mock_load, test_show_help_for_command, TestHelp, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_lister.py` | test_sort_by_non_displayed_column, test_formatter_args, test_sort_by_column_reverse_order, test_sort_by_non_existing_column, test_filter_by_columns_normalized, ... |
| `os_venv/lib/python3.12/site-packages/cliff/tests/test_show.py` | test_dict2columns, TestShow, test_formatter_args, test_no_exist_column |
| `os_venv/lib/python3.12/site-packages/cliff/utils.py` | cost, s1, s2, damerau_levenshtein |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/session.py` | delete, kwargs, url |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_betamax_hooks.py` | mask_fixture_values, test_pre_record_hook_empty_body |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/tests/unit/test_fair_sempahore.py` | setUp |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/auth/test_identity_common.py` | prefix, GenericAuthPluginTests, test_setting_headers, url, test_setting_connection_params |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_cms.py` | test_process_communicate_handle_oserror_epipe_files_ok, test_process_communicate_handle_oserror_epipe, files_acc_mock, files_acc_mock |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/test_session.py` | test_http_session_opts, test_mask_password_in_http_log_response |
| `os_venv/lib/python3.12/site-packages/keystoneclient/tests/unit/v2_0/test_tenants.py` | test_delete |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v2/_proxy.py` | url, service, import_backup |
| `os_venv/lib/python3.12/site-packages/openstack/block_storage/v3/_proxy.py` | create_group_from_source, attrs |
| `os_venv/lib/python3.12/site-packages/openstack/identity/v3/_proxy.py` | token, token, nocatalog, revoke_token, check_token, ... |
| `os_venv/lib/python3.12/site-packages/openstack/identity/v3/token.py` | Token |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/network/v2/common.py` | _get_command, args |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_allocation.py` | test_basic, TestAllocation, test_instantiate, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_driver.py` | test_list_vendor_passthru, TestDriver, test_call_vendor_passthru, test_instantiate, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_node.py` | setUp, setUp, test_attach_vif_with_portgroup_uuid, test_incompatible_microversion_optional_params, test_remove_trait, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/v1/test_port.py` | TestPort, test_instantiate, test_basic, test_list_conductor_groups |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_backup.py` | test_restore_vol_id, test_create, test_reset_status, test_basic, TestBackup, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_proxy.py` | test_type_remove_private_access, test_type_extra_specs_delete, test_type_encryption_update, test_type_encryption_delete_ignore, test_type_delete, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_service.py` | test_make_it, test_basic, test_failover, test_enable, test_freeze, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_snapshot.py` | test_manage, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_transfer.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_type.py` | test_new, TestTypeEncryption, setUp, test_delete_extra_specs, test_set_extra_specs, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v2/test_volume.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_attachment.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_backup.py` | test_create_incremental, test_restore_vol_id, TestBackup, test_basic, test_restore, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_cluster.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_default_type.py` | TestDefaultType, setUp, test_basic, test_create |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group.py` | TestGroup, TestGroupAction, setUp, test_basic, test_delete, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group_snapshot.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_group_type.py` | test_fetch_group_specs, test_update_group_specs_property, setUp, test_create_group_specs, test_basic, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_proxy.py` | test_backup_restore, test_backup_update, test_type_remove_private_access, test_backup_import, test_types, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_service.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_snapshot.py` | mock_mv, setUp, mock_mv, test_manage_pre_38, test_manage |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_transfer.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_type.py` | TestTypeEncryption, test_get_private_access, test_create, test_delete_extra_specs, test_new, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/block_storage/v3/test_volume.py` | mock_mv, setUp, test_upload_image, test_init_attachment, test_upload_image_args, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_clustering.py` | _compare_clusters, real, exp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_fwaas.py` | test_delete_firewall_policy_filters |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_network.py` | test_list_networks_neutron_not_found |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_openstackcloud.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/cloud/test_operator.py` | get_session_mock, get_session_mock, test_get_session_endpoint_identity, test_get_session_endpoint_unavailable |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_cluster.py` | test_policy_detach, test_operation, test_add_nodes, test_basic, test_replace_nodes, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_node.py` | test_adopt, test_operation, test_force_delete, TestNodeDetail, test_recover, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_profile_type.py` | test_ops, test_basic, test_instantiate, TestProfileType |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_proxy.py` | test_node_adopt_preview, test_receiver_create, test_policy_type_get, mock_get, test_receiver_update, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/clustering/v1/test_service.py` | test_basic, TestService, setUp, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_metadata.py` | test_delete_all_metadata, test_delete_single_item, TestMetadata, test_set_metadata_item, test_delete_signle_item_empty, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_quota_set.py` | test_get_usage, TestQuotaSet, test_basic, test_update_quota, test_get, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/common/test_tag.py` | test_tagged_resource_always_created_with_empty_tag_list, test_check_tag_exists, TestTagMixin, test_remove_single_tag_with_microversion, test_fetch_tags, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_aggregate.py` | test_remove_host, setUp, test_basic, TestAggregate, test_add_host, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_flavor.py` | test_add_tenant_access, test_fetch_extra_specs, test_get_extra_specs_property, test_remove_tenant_access, test_make_defaults, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_hypervisor.py` | mv_mock, test_make_it, test_basic, setUp, test_get_uptime, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_proxy.py` | TestFlavor, test_flavor_get_no_extra, test_flavor_add_tenant_access, test_flavor_find, test_flavor_get_access, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server.py` | test_create_image_microver, test_create_image_minimal, setUp, test_get_console_url, test_create_image_header |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_actions.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_ip.py` | test_basic, test_list_network_label, TestServerIP, test_make_it, test_list |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_migration.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_server_remote_console.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/compute/v2/test_service.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_cloud_config.py` | mock_session, mock_session, mock_session, mock_get_session, test_get_session_with_timing, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py` | test_set_auth_cache_empty_auth, kr_mock, test_set_auth_cache, kr_mock |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/database/v1/test_instance.py` | test_action_resize, test_enable_root_user, test_basic, test_action_resize_volume, test_is_root_enabled, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_tld.py` | setUp, test_basic, TestTLD, test_make_it |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone.py` | test_basic, test_make_it, TestZone, test_abandon, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_export.py` | TestZoneExport, test_create, test_make_it, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_import.py` | test_make_it, TestZoneImport, test_create, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/dns/v2/test_zone_share.py` | test_make_it, setUp, TestZoneShare, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/fakes.py` | FakeAuthenticator, __init__, FakeTransport, __init__ |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/test_version.py` | test_make_it, test_basic, test_list, TestVersion |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v2/test_extension.py` | test_make_it, TestExtension, test_basic, test_list |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_domain.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_group.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_limit.py` | setUp, test_make_it, test_basic, TestLimit, test_commit, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_project.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_registered_limit.py` | setUp, test_commit, test_basic, TestRegistered_limit, test_make_it, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_token.py` | test_revoke_error, test_validate, test_make_it, test_check_with_param, test_validate_error, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/identity/v3/test_user.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_cache.py` | test_queue, test_clear |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_image.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_metadef_namespace.py` | test_delete_all_properties, test_delete_all_objects, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_proxy.py` | test_image_create_checksum_mismatch, test_add_tag, test_image_create_with_all_stores, test_images, test_reactivate_image, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/image/v2/test_service_info.py` | test_delete_image |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/key_manager/v1/test_secret.py` | sot, test_get_no_payload, content_type, _test_payload, metadata |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/key_manager/v1/test_secret_consumer.py` | test_basic, test_make_it, TestSecretConsumer, test_delete_with_body |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/load_balancer/test_load_balancer.py` | test_delete_cascade, test_basic, TestLoadBalancer, TestLoadBalancerStats, test_make_it, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/load_balancer/v2/test_proxy.py` | test_load_balancer_delete_non_cascade, mock_get_resource, test_load_balancer_delete_cascade, mock_get_resource |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_claim.py` | test_delete_client_id_project_id_exist, test_basic, TestClaim, mock_uuid, mock_uuid, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_message.py` | test_post_client_id_project_id_exist, test_basic, test_delete_claimed, TestMessage, mock_uuid, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_proxy.py` | mock_get_resource, test_message_delete_claimed, mock_get_resource, test_message_delete, mock_get_resource, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_queue.py` | test_create_client_id_project_id_exist, test_get, mock_uuid, mock_uuid, test_create, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/message/v2/test_subscription.py` | test_make_it, test_delete, test_get_client_id_project_id_exist, TestSubscription, mock_uuid, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_agent.py` | test_update_router_in_agent, test_add_router_to_agent_with_ha_chassis_priority, mock_list, TestAgent, TestRouterL3Agent, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_bgp_speaker.py` | TestBgpSpeaker, test_add_bgp_peer, test_add_bgp_speaker_to_dragent, test_remove_bgp_speaker_from_dragent, test_remove_gateway_network, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_flavor.py` | test_disassociate_flavor_from_service_profile, test_basic, test_make_it, test_associate_flavor_with_service_profile, TestFlavor, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_floating_ip.py` | test_find_available, test_find_available_nada |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_port_binding.py` | test_basic, test_make_it, test_activate_port_binding, TestPortBinding, test_delete_port_binding |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_proxy.py` | test_quota_get_details, mock_get, mock_get, test_quota_default_get |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_router.py` | test_add_interface_subnet, test_remove_extra_routes, test_remove_interface_4xx, test_add_router_gateway, TestRouter, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/network/v2/test_trunk.py` | test_basic, test_add_subports_4xx, TestTrunk, test_make_it, test_delete_subports_4xx |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_proxy.py` | mock_validate, test_validate_template, mock_stack, test_check_stack_with_stack_ID |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_stack.py` | test_export, test_commit_preview, test_check, test_fetch, test_suspend, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_stack_files.py` | test_get, mock_prepare_request |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/orchestration/v1/test_template.py` | TestTemplate, mock_translate, mock_translate, mock_translate, test_validate_with_template_url, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_proxy.py` | test_wait_for_delete, mock_wait, mock_wait, test_wait_for_status |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_service.py` | test_basic, setUp, test_disable, test_enable, test_make_services, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share.py` | test_reset_status_share, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_group_snapshot.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_instance.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_snapshot.py` | test_reset_status, setUp |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/shared_file_system/v2/test_share_type.py` | test_share_type, test_delete_extra_specs, test_set_extra_specs, TestShareType, test_basic |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_exceptions.py` | TestRaiseFromResponse, test_raise_http_exception, test_raise_no_exception, setUp, test_raise_baremetal_corrected_format, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_fakes.py` | test_generate_fake_resource_list |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_hacking.py` | HackingTestCase, test_assert_no_deprecated_exceptions, test_assert_no_setupclass |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_proxy.py` | setUp, setUp, setUp, test__get_resource_from_resource, test__get_resource_new, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_proxy_base.py` | resource_type, verify_get_overrided, setUp, patch_target, proxy |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_resource.py` | test_repr, test_commit_put_explicit_microversion, test_multiple_matches, test_status_fails_different_attribute, test_values_as_list_params, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_utils.py` | setUp, setUp, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_compute_v2.py` | setUp, setUp, setUp, setUp, TestFloatingIPPool, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v2.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/api/test_volume_v3.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_command.py` | test_validate_os_beta_command_enabled, TestCommand, test_command_has_logger |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_module.py` | test_module_list_all, test_module_list_no_options, TestModuleList |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/common/test_project_cleanup.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_flavor.py` | test_flavor_create_all_options, test_flavor_create_other_options |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_keypair.py` | mock_generate, TestKeypairCreate, test_keypair_create_public_key, test_keypair_create_with_key_type, test_keypair_create_private_key, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py` | mock_exec, test_server_resize_no_options, test_server_set_with_state_prompt_n, test_migrate_confirm, test_server_remove_security_group__nova_network, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_service.py` | test_service_set_enable_and_state_down_with_exception, test_service_set_find_service_by_host_and_binary_many_results |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_usage.py` | test_usage_show_no_options |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/fakes.py` | __init__ |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/test_common.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/fakes.py` | __getattr__, kwargs, name, FakeClientMixin, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/test_catalog.py` | TestCatalog, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v2_0/test_user.py` | test_user_set_password_prompt, test_user_create_password_prompt |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/fakes.py` | FakeClientMixin, __init__, __init__, TestFederatedIdentity, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_catalog.py` | TestCatalog, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_endpoint_group.py` | test_endpoint_group_set_filters, test_endpointgroup_create_no_options |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_identity_provider.py` | test_create_identity_provider_remote_ids_file |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_mappings.py` | test_set_new_rules, test_create_mapping |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_role_assignment.py` | test_role_assignment_list_def_creds |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/identity/v3/test_user.py` | test_user_create_password_prompt, test_user_set_password_prompt, passwords, test_user_password_change, TestUserSetPassword, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/fakes.py` | FakeClientMixin, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v1/test_image.py` | test_image_create_file, mock_open |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/image/v2/fakes.py` | setUp, FakeClientMixin |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/test_common.py` | setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fakes.py` | FakeClientMixin, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_group.py` | test_set_no_ingress_policies, test_unset_port, test_unset_enable, TestDeleteFirewallGroup, test_set_ingress_policy_and_no_ingress_policy, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/fwaas/test_policy.py` | test_unset_firewall_rule_not_matched, TestUnsetFirewallPolicy, test_show_filtered_by_id_or_name, test_unset_audited, test_unset_firewall_rule_matched, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_floating_ip_port_forwarding.py` | test_multi_port_forwarding_delete_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_local_ip_association.py` | test_multi_local_ip_association_delete_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_network_qos_policy.py` | test_multi_qos_policies_delete_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/network/v2/test_router.py` | test_router_list_no_ha_no_distributed, test_show_all_options, test_show_no_extra_route_extension, test_show_no_options, TestShowRouter, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/object/v1/fakes.py` | FakeClientMixin, setUp |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/object/v1/test_object_all.py` | test_save_to_stdout |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/test_find_resource.py` | test_not_find, test_not_find, TestFindResourceVolumes, setUp, setUp, ... |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/fakes.py` | FakeVolumeClient, kwargs, __init__ |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_consistency_group.py` | test_delete_multiple_consistency_groups_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_qos_specs.py` | test_delete_multiple_qoses_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume.py` | test_volume_create_options |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_transfer_request.py` | test_delete_multiple_transfers_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v2/test_volume_type.py` | test_delete_multiple_types_with_exception, test_type_show_with_list_access_exec |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/fakes.py` | kwargs, setUp, __init__, FakeVolumeClient, TestVolume |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_consistency_group.py` | test_delete_multiple_consistency_groups_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_qos_specs.py` | test_delete_multiple_qoses_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume.py` | test_volume_create_options |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_transfer_request.py` | test_delete_multiple_transfers_with_exception |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/volume/v3/test_volume_type.py` | test_delete_multiple_types_with_exception, test_type_show_with_list_access_exec |
| `os_venv/lib/python3.12/site-packages/osc_lib/shell.py` | deferred_help, __init__, stdout, stderr, description, ... |
| `os_venv/lib/python3.12/site-packages/osc_lib/test/base.py` | setUp |
| `os_venv/lib/python3.12/site-packages/osc_lib/test/fakes.py` | get_configuration, version, __init__, __init__, FakeModule, ... |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/api/test_api.py` | test_baseapi_delete |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/cli/test_identity.py` | test_find_project_with_generic_exception, test_find_project, test_find_project_with_domain, IdentityUtilsTestCase, test_find_project_with_forbidden_exception |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/command/test_command.py` | test_command_has_logger, test_validate_os_beta_command_enabled, TestCommand |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_clientmanager.py` | url, json, BaseTestClientManager, setUp, stub_auth, ... |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_logs.py` | test_init, TestLogConfigurator, formatter, handle, warning_filter, ... |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/test_shell.py` | test_shell_init, setUp, TestShellArgV, test_shell_argv, setUp |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/utils/test_tags.py` | test_update_tags_for_unset, test_update_tags_for_set |
| `os_venv/lib/python3.12/site-packages/osc_lib/tests/utils/test_utils.py` | test_find_resource_find_no_unique, mock_sleep, test_wait_for_delete_error_with_overrides_exception, mock_sleep, mock_sleep, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_cfg.py` | test__parse_file_ioerror |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_generator.py` | test_generator_call_with_no_arguments_raises_system_exit, GeneratorRaiseErrorTestCase |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sources.py` | TestProcessingSources, test_source_named, test_no_sources_default, test_no_sources |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_sphinxconfiggen.py` | test_multi_sample_gen_with_without_any_base, isdir, isfile, isdir, isfile, ... |
| `os_venv/lib/python3.12/site-packages/oslo_i18n/tests/test_gettextutils.py` | test_gettext_install_updates_builtins, test_gettext_install_looks_up_localedir |
| `os_venv/lib/python3.12/site-packages/oslo_i18n/tests/test_message.py` | test_contextual_untranslatable, test_plural, translation, test_contextual, translation, ... |
| `os_venv/lib/python3.12/site-packages/oslo_utils/tests/imageutils/test_format_inspector.py` | _new_container, test_inner_safety_failure_is_recorded, test_adds_inner_safety_check, TestContainerFileInspector, test_inner_safety_noop_without_inner, ... |
| `os_venv/lib/python3.12/site-packages/oslo_utils/tests/test_netutils.py` | test_get_my_ipv6_disabled, test_get_my_ipv4_disabled |
| `os_venv/lib/python3.12/site-packages/requests/models.py` | next |
| `os_venv/lib/python3.12/site-packages/requests/sessions.py` | url, head, kwargs |

## Connected Communities

- **. +61 dirs** (71 cross-edges)
- **network/v2 +65 dirs** (34 cross-edges)
- **compute/v2 +17 dirs** (28 cross-edges)
- **compute/v2 +32 dirs** (23 cross-edges)
- **functional/cloud +53 dirs** (20 cross-edges)
- **. +18 dirs · deepcopy** (20 cross-edges)
- **. +23 dirs · oslo_config.cfg** (13 cross-edges)
- **network/v2 +1 dirs · openstack.network.v2.router** (10 cross-edges)
- **network/v2 +30 dirs** (8 cross-edges)
- **orchestration/v1 +1 dirs** (8 cross-edges)
- **python3.12/site-packages · update · _identity** (7 cross-edges)
- **cliff/tests · get_parser** (7 cross-edges)
- **_vendor/requests +7 dirs** (7 cross-edges)
- **. +2 dirs · openstack.config.cloud_region** (7 cross-edges)
- **block_storage/v3 +2 dirs · openstack.block_storage.v3.volu…** (5 cross-edges)
- **compute/v2 · set_compute_api_version** (5 cross-edges)
- **unit/cloud +11 dirs** (5 cross-edges)
- **baremetal/v1 +3 dirs** (5 cross-edges)
- **compute/v2 +15 dirs** (4 cross-edges)
- **. +6 dirs · assert_called** (4 cross-edges)
- **site-packages/openstack · get_mock_url** (4 cross-edges)
- **compute/v2 +2 dirs** (4 cross-edges)
- **site-packages/openstack · commit** (4 cross-edges)
- **autopage/tests +2 dirs · AutoPager** (4 cross-edges)
- **python3.12/site-packages · items · shell** (4 cross-edges)
- **. +39 dirs** (4 cross-edges)
- **. +2 dirs · oslo_i18n._message** (3 cross-edges)
- **. +2 dirs · osc_lib.logs** (3 cross-edges)
- **. +18 dirs · append** (3 cross-edges)
- **. +12 dirs · oslo_serialization.jsonutils** (3 cross-edges)
- **. +10 dirs · dumps** (3 cross-edges)
- **. +22 dirs** (3 cross-edges)
- **cinderclient/v3 +3 dirs · cinderclient.shell_utils** (3 cross-edges)
- **network/v2 +2 dirs · openstackclient.tests.unit.netw…** (3 cross-edges)
- **. +10 dirs · openstack.test.fakes** (3 cross-edges)
- **compute/v2 · TestServerCreate** (2 cross-edges)
- **unit/loading +6 dirs** (2 cross-edges)
- **image/v2 +2 dirs · openstack.image.v2.metadef_name…** (2 cross-edges)
- **unit/config +7 dirs** (2 cross-edges)
- **block_storage/v3 +2 dirs · openstack.block_storage.v3.snap…** (2 cross-edges)
- **. +2 dirs · oslo_utils.netutils** (2 cross-edges)
- **oslo_i18n/tests +5 dirs** (2 cross-edges)
- **unit/auth +3 dirs** (2 cross-edges)
- **unit/common · take_action** (2 cross-edges)
- **image/v2 +2 dirs · openstack.image.v2.cache** (2 cross-edges)
- **functional/v3 +5 dirs** (2 cross-edges)
- **. +1 dirs · oslo_utils.imageutils.format_in…** (2 cross-edges)
- **network/v2 +2 dirs · openstack.network.v2.floating_ip** (2 cross-edges)
- **cinderclient/v3 +3 dirs · _list** (1 cross-edges)
- **site-packages/oslo_utils · start** (1 cross-edges)
- **. +1 dirs · test_get_terminal_size** (1 cross-edges)
- **cliff/tests +6 dirs** (1 cross-edges)
- **site-packages/keystoneclient · post** (1 cross-edges)
- **. +4 dirs · BytesIO** (1 cross-edges)
- **shared_file_system/v2 +1 dirs · openstack.shared_file_system.v2… · external-call::dep:openstack.shared_file_system.v2 · test_proxy (35)** (1 cross-edges)
- **. +3 dirs · openstackclient.tests.unit.comp…** (1 cross-edges)
- **image/v2 +2 dirs · openstack.image.v2.service_info** (1 cross-edges)
- **site-packages/cliff · _run_after_hooks · command** (1 cross-edges)
- **autopage/tests +2 dirs · autopage.command** (1 cross-edges)
- **site-packages/openstack · _list** (1 cross-edges)
- **. +6 dirs · requests_mock.contrib.fixture** (1 cross-edges)
- **stevedore/tests +7 dirs** (1 cross-edges)
- **site-packages/requests · request** (1 cross-edges)
- **python3.12/site-packages · take_action** (1 cross-edges)
- **. +3 dirs · openstackclient.tests.unit.volu…** (1 cross-edges)
- **. +10 dirs · sub** (1 cross-edges)
- **site-packages/cliff · _run_before_hooks** (1 cross-edges)
- **site-packages/openstack · find** (1 cross-edges)
- **. +23 dirs · fixtures** (1 cross-edges)
- **. +2 dirs · openstackclient.tests.unit.volu…** (1 cross-edges)
- **. +20 dirs** (1 cross-edges)
- **. +3 dirs · locale** (1 cross-edges)
- **. +1 dirs · openstack.key_manager.v1.secret** (1 cross-edges)
- **shared_file_system/v2 +1 dirs · openstack.shared_file_system.v2… · external-call::dep:openstack.shared_file_system.v2 · test_proxy (13)** (1 cross-edges)
- **block_storage/v2 +1 dirs · openstack.block_storage.v2.snap…** (1 cross-edges)
- **. +1 dirs · openstackclient.compute.v2.serv… · external-call::dep:openstackclient.compute.v2 · test_server** (1 cross-edges)
- **site-packages/osc_lib +6 dirs** (1 cross-edges)
- **. +7 dirs · append** (1 cross-edges)
- **orchestration/v1 +2 dirs** (1 cross-edges)
- **unit/auth +2 dirs** (1 cross-edges)
- **. +5 dirs · _make_mock_url** (1 cross-edges)
- **. +11 dirs** (1 cross-edges)
- **. +3 dirs · oslo_utils.importutils** (1 cross-edges)
- **. +1 dirs · openstackclient.network.v2.fwaa… · external-call::dep:openstackclient.network.v2.fwaas · test_policy** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-4498"
smart_context with task: "understand . +64 dirs", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
