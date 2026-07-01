---
name: gortex-83-dirs
description: "Work in the . +83 dirs area — 3621 symbols across 418 files (87% cohesion)"
---

# . +83 dirs

3621 symbols | 418 files | 87% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:_aix_support.aix_platform`
- `external-call::dep:_imp.is_builtin`
- `external-call::dep:_imp.is_frozen`
- `external-call::dep:bz2.BZ2File`
- `external-call::dep:cffi._shimmed_dist_utils.sysconfig`
- `external-call::dep:cinderclient.extension`
- `external-call::dep:distutils._log.log`
- `external-call::dep:distutils._modified.newer`
- `external-call::dep:distutils._modified.newer_group`
- `external-call::dep:distutils._modified.newer_pairwise`
- `external-call::dep:distutils.archive_util`
- `external-call::dep:distutils.archive_util.ARCHIVE_FORMATS`
- `external-call::dep:distutils.archive_util.check_archive_formats`
- `external-call::dep:distutils.archive_util.make_archive`
- `external-call::dep:distutils.archive_util.make_tarball`
- `external-call::dep:distutils.archive_util.make_zipfile`
- `external-call::dep:distutils.ccompiler.new_compiler`
- `external-call::dep:distutils.command.bdist.bdist`
- `external-call::dep:distutils.command.bdist_dumb.bdist_dumb`
- `external-call::dep:distutils.command.bdist_rpm.bdist_rpm`
- `external-call::dep:distutils.command.build.build`
- `external-call::dep:distutils.command.build_ext`
- `external-call::dep:distutils.command.build_ext.build_ext`
- `external-call::dep:distutils.command.build_py.build_py`
- `external-call::dep:distutils.command.build_scripts.build_scripts`
- `external-call::dep:distutils.command.clean.clean`
- `external-call::dep:distutils.command.config.config`
- `external-call::dep:distutils.command.config.dump_file`
- `external-call::dep:distutils.command.install.install`
- `external-call::dep:distutils.command.install_data.install_data`
- `external-call::dep:distutils.command.install_headers.install_headers`
- `external-call::dep:distutils.command.install_lib.install_lib`
- `external-call::dep:distutils.command.install_scripts.install_scripts`
- `external-call::dep:distutils.command.sdist.sdist`
- `external-call::dep:distutils.command.sdist.show_formats`
- `external-call::dep:distutils.core.Command`
- `external-call::dep:distutils.core.Distribution`
- `external-call::dep:distutils.cygwinccompiler.CygwinCCompiler`
- `external-call::dep:distutils.dir_util`
- `external-call::dep:distutils.errors`
- `external-call::dep:distutils.errors.DistutilsError`
- `external-call::dep:distutils.extension.Extension`
- `external-call::dep:distutils.extension.read_setup_file`
- `external-call::dep:distutils.file_util.copy_file`
- `external-call::dep:distutils.filelist`
- `external-call::dep:distutils.log`
- `external-call::dep:distutils.spawn.spawn`
- `external-call::dep:distutils.sysconfig._config_vars`
- `external-call::dep:distutils.sysconfig.customize_compiler`
- `external-call::dep:distutils.sysconfig.get_config_var`
- `external-call::dep:distutils.sysconfig.get_python_lib`
- `external-call::dep:distutils.tests.missing_compiler_executable`
- `external-call::dep:distutils.tests.support`
- `external-call::dep:distutils.tests.support.copy_xxmodule_c`
- `external-call::dep:distutils.tests.support.fixup_build_ext`
- `external-call::dep:distutils.util.byte_compile`
- `external-call::dep:distutils.util.convert_path`
- `external-call::dep:distutils.util.get_host_platform`
- `external-call::dep:distutils.util.get_macosx_target_ver`
- `external-call::dep:distutils.util.get_platform`
- `external-call::dep:distutils.util.grok_environment_error`
- `external-call::dep:distutils.util.is_mingw`
- `external-call::dep:distutils.util.split_version`
- `external-call::dep:docutils.utils`
- `external-call::dep:email.generator.BytesGenerator`
- `external-call::dep:email.generator.Generator`
- `external-call::dep:email.parser.Parser`
- `external-call::dep:email.policy.EmailPolicy`
- `external-call::dep:grp.getgrnam`
- `external-call::dep:jaraco.functools.compose`
- `external-call::dep:jaraco.text`
- `external-call::dep:lzma.LZMAFile`
- `external-call::dep:more_itertools.always_iterable`
- `external-call::dep:more_itertools.ilen`
- `external-call::dep:openstack.baremetal.configdrive`
- `external-call::dep:oslo_utils.fileutils`
- `external-call::dep:packaging.tags`
- `external-call::dep:packaging.tags.sys_tags`
- `external-call::dep:packaging.version`
- `external-call::dep:pbr.extra_files`
- `external-call::dep:pbr.options`
- `external-call::dep:pip._internal.exceptions.ExternallyManagedEnvironment`
- `external-call::dep:pip._internal.exceptions.InvalidSchemeCombination`
- `external-call::dep:pip._internal.exceptions.LegacyDistutilsInstall`
- `external-call::dep:pip._internal.exceptions.PreviousBuildDirError`
- `external-call::dep:pip._internal.exceptions.UninstallMissingRecord`
- `external-call::dep:pip._internal.exceptions.UserInstallationInvalid`
- `external-call::dep:pip._internal.locations.get_bin_prefix`
- `external-call::dep:pip._internal.locations.get_bin_user`
- `external-call::dep:pip._internal.locations.get_platlib`
- `external-call::dep:pip._internal.locations.get_purelib`
- `external-call::dep:pip._internal.models.scheme.Scheme`
- `external-call::dep:pip._internal.req.req_uninstall.UninstallPathSet`
- `external-call::dep:pip._internal.utils.appdirs`
- `external-call::dep:pip._internal.utils.filesystem.adjacent_tmp_file`
- `external-call::dep:pip._internal.utils.filesystem.replace`
- `external-call::dep:pip._internal.utils.misc.ensure_dir`
- `external-call::dep:pip._internal.utils.misc.is_installable_dir`
- `external-call::dep:pip._internal.utils.misc.renames`
- `external-call::dep:pip._internal.utils.temp_dir.AdjacentTempDirectory`
- `external-call::dep:pip._internal.utils.temp_dir.TempDirectory`
- `external-call::dep:pip._internal.utils.unpacking.unpack_file`
- `external-call::dep:pip._internal.utils.virtualenv.running_under_virtualenv`
- `external-call::dep:pwd.getpwnam`
- `external-call::dep:py_compile.compile`
- `external-call::dep:reno.setup_command`
- `external-call::dep:setuptools._importlib.metadata`
- `external-call::dep:setuptools._normalization.safer_name`
- `external-call::dep:setuptools.archive_util._unpack_zipfile_obj`
- `external-call::dep:setuptools.archive_util.unpack_archive`
- `external-call::dep:setuptools.archive_util.unpack_directory`
- `external-call::dep:setuptools.command.bdist_egg`
- `external-call::dep:setuptools.command.egg_info`
- `external-call::dep:setuptools.command.egg_info._egg_basename`
- `external-call::dep:setuptools.command.egg_info.manifest_maker`
- `external-call::dep:setuptools.command.sdist`
- `external-call::dep:setuptools.command.sdist.walk_revctrl`
- `external-call::dep:setuptools.discovery.PEP420PackageFinder`
- `external-call::dep:setuptools.discovery.construct_package_dir`
- `external-call::dep:setuptools.dist._Distribution`
- `external-call::dep:setuptools.errors.BaseError`
- `external-call::dep:setuptools.errors.PackageDiscoveryError`
- `external-call::dep:setuptools.glob.glob`
- `external-call::dep:sysconfig.get_config_var`
- `external-call::dep:sysconfig.get_path`
- `external-call::dep:sysconfig.get_platform`
- `external-call::dep:sysconfig.get_python_version`
- `external-call::dep:tempest.lib.exceptions`
- `external-call::dep:test.support.patch`
- `external-call::dep:test.support.warnings_helper.check_warnings`
- `external-call::dep:wheel.macosx_libfile.calculate_macosx_platform_tag`
- `external-call::dep:wheel.wheelfile`
- `external-call::dep:wheel.wheelfile.WheelFile`
- `external-call::stdlib:_osx_support`
- `external-call::stdlib:fcntl`
- `external-call::stdlib:filecmp`
- `external-call::stdlib:inflect`
- `external-call::stdlib:java`
- `external-call::stdlib:jsonschema`
- `external-call::stdlib:marshal`
- `external-call::stdlib:mimetypes`
- `external-call::stdlib:path`
- `external-call::stdlib:pkgutil`
- `external-call::stdlib:plistlib`
- `external-call::stdlib:pty`
- `external-call::stdlib:pwd`
- `external-call::stdlib:py_compile`
- `external-call::stdlib:site`
- `external-call::stdlib:sysconfig`
- `external-call::stdlib:tokenize`
- `external-call::stdlib:zipimport`
- `os_venv/lib/python3.12/site-packages/autopage/tests/isolation.py`
- `os_venv/lib/python3.12/site-packages/autopage/tests/sinks.py`
- `os_venv/lib/python3.12/site-packages/cffi/_imp_emulation.py`
- `os_venv/lib/python3.12/site-packages/cffi/api.py`
- `os_venv/lib/python3.12/site-packages/cffi/ffiplatform.py`
- `os_venv/lib/python3.12/site-packages/cffi/recompiler.py`
- `os_venv/lib/python3.12/site-packages/cffi/vengine_cpy.py`
- `os_venv/lib/python3.12/site-packages/cffi/vengine_gen.py`
- `os_venv/lib/python3.12/site-packages/cffi/verifier.py`
- `os_venv/lib/python3.12/site-packages/cinderclient/client.py`
- `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py`
- `os_venv/lib/python3.12/site-packages/cmd2/utils.py`
- `os_venv/lib/python3.12/site-packages/dogpile/cache/backends/file.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/serializer.py`
- `os_venv/lib/python3.12/site-packages/keystoneauth1/loading/base.py`
- `os_venv/lib/python3.12/site-packages/openstack/baremetal/configdrive.py`
- `os_venv/lib/python3.12/site-packages/openstack/compute/v2/extension.py`
- `os_venv/lib/python3.12/site-packages/openstack/config/vendors/__init__.py`
- `os_venv/lib/python3.12/site-packages/openstack/image/v1/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/image/v2/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_cluster_templates.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_image.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/test_configdrive.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_json.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_loader.py`
- `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_stats.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/api/object_store_v1.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/base.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py`
- `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/test_hacking.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/data/__init__.py`
- `os_venv/lib/python3.12/site-packages/os_service_types/tests/base.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/sphinxconfiggen.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_cfg.py`
- `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_generator.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/fileutils.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/netutils.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/tests/imageutils/test_format_inspector.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/tests/test_fileutils.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/versionutils.py`
- `os_venv/lib/python3.12/site-packages/packaging/tags.py`
- `os_venv/lib/python3.12/site-packages/pbr/_compat/commands.py`
- `os_venv/lib/python3.12/site-packages/pbr/_compat/easy_install.py`
- `os_venv/lib/python3.12/site-packages/pbr/extra_files.py`
- `os_venv/lib/python3.12/site-packages/pbr/git.py`
- `os_venv/lib/python3.12/site-packages/pbr/hooks/files.py`
- `os_venv/lib/python3.12/site-packages/pbr/setupcfg.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/fixtures.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/base.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_c_extension.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_changelog_author.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_extra_files.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_pbr_json.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_wsgi_scripts.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/test_files.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/test_git.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/test_packaging.py`
- `os_venv/lib/python3.12/site-packages/pbr/tests/util.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/build_env.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/cache.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/cli/autocompletion.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/cli/cmdoptions.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/cli/main_parser.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/commands/install.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/configuration.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/locations/__init__.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/locations/_distutils.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/locations/_sysconfig.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/locations/base.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/base.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_dists.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_envs.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/pkg_resources.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/models/link.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/models/scheme.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/network/auth.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/network/cache.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/operations/check.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/operations/prepare.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/pyproject.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_file.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_install.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_uninstall.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/compat.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/egg_link.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/entrypoints.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/logging.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/misc.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/unpacking.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/utils/virtualenv.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/mercurial.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/subversion.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/versioncontrol.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/caches/file_cache.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/compat.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/resources.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/scripts.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/util.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distro/distro.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/pkg_resources/__init__.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/android.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/windows.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/pyproject_hooks/_impl.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/utils.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/truststore/_openssl.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/_securetransport/low_level.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/_xdg.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/android.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/api.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/windows.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/buffer.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/completion/filesystem.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/eventloop/inputhook.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/input/posix_pipe.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/input/win32.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/utils.py`
- `os_venv/lib/python3.12/site-packages/psutil/__init__.py`
- `os_venv/lib/python3.12/site-packages/psutil/_common.py`
- `os_venv/lib/python3.12/site-packages/psutil/_psaix.py`
- `os_venv/lib/python3.12/site-packages/psutil/_psbsd.py`
- `os_venv/lib/python3.12/site-packages/psutil/_pslinux.py`
- `os_venv/lib/python3.12/site-packages/psutil/_psosx.py`
- `os_venv/lib/python3.12/site-packages/psutil/_psposix.py`
- `os_venv/lib/python3.12/site-packages/psutil/_pssunos.py`
- `os_venv/lib/python3.12/site-packages/psutil/_pswindows.py`
- `os_venv/lib/python3.12/site-packages/pygments/lexers/_php_builtins.py`
- `os_venv/lib/python3.12/site-packages/pyperclip/__init__.py`
- `os_venv/lib/python3.12/site-packages/requests/utils.py`
- `os_venv/lib/python3.12/site-packages/setuptools/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_core_metadata.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/archive_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/cmd.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/_framework_compat.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_dumb.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_rpm.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_clib.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_ext.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_py.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/check.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/clean.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/config.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_data.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_egg_info.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_headers.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_lib.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/sdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/base.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/cygwin.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/msvc.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_base.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_cygwin.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_unix.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/unix.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/zos.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/dir_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/dist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/file_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/filelist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/spawn.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/sysconfig.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/support.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_archive_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist_dumb.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist_rpm.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_clib.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_ext.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_py.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_clean.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_config_cmd.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_dir_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_extension.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_file_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_filelist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_data.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_headers.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_lib.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_log.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_modified.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_sdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_spawn.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_sysconfig.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/text_file.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_entry_points.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_normalization.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_path.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_shutil.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/backports/tarfile/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/importlib_metadata/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/importlib_metadata/compat/py311.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/context/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/text/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/text/show-newlines.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/android.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/windows.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_bdist_wheel.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_commands/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_commands/tags.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_metadata.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/macosx_libfile.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/wheelfile.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/zipp/__init__.py`
- `os_venv/lib/python3.12/site-packages/setuptools/archive_util.py`
- `os_venv/lib/python3.12/site-packages/setuptools/build_meta.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_egg.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_wheel.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/build.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/build_ext.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/build_py.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/dist_info.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/easy_install.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/editable_wheel.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/egg_info.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/install_egg_info.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/install_lib.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/install_scripts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/rotate.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/sdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/command/setopt.py`
- `os_venv/lib/python3.12/site-packages/setuptools/compat/py311.py`
- `os_venv/lib/python3.12/site-packages/setuptools/config/_apply_pyprojecttoml.py`
- `os_venv/lib/python3.12/site-packages/setuptools/config/expand.py`
- `os_venv/lib/python3.12/site-packages/setuptools/config/pyprojecttoml.py`
- `os_venv/lib/python3.12/site-packages/setuptools/config/setupcfg.py`
- `os_venv/lib/python3.12/site-packages/setuptools/discovery.py`
- `os_venv/lib/python3.12/site-packages/setuptools/dist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/glob.py`
- `os_venv/lib/python3.12/site-packages/setuptools/installer.py`
- `os_venv/lib/python3.12/site-packages/setuptools/msvc.py`
- `os_venv/lib/python3.12/site-packages/setuptools/namespaces.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/contexts.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/environment.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/fixtures.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/integration/test_pip_install_sdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_bdist_egg.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_build_meta.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_build_py.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_core_metadata.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_develop.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_editable_install.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_egg_info.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_find_packages.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_manifest.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_sdist.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_setuptools.py`
- `os_venv/lib/python3.12/site-packages/setuptools/tests/test_wheel.py`
- `os_venv/lib/python3.12/site-packages/setuptools/unicode_utils.py`
- `os_venv/lib/python3.12/site-packages/setuptools/wheel.py`
- `os_venv/lib/python3.12/site-packages/setuptools/windows_support.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | multiprocessing, close, parse, isfile, rmtree, ... |
| `external-call::dep:_aix_support.aix_platform` | _aix_support.aix_platform |
| `external-call::dep:_imp.is_builtin` | _imp.is_builtin |
| `external-call::dep:_imp.is_frozen` | _imp.is_frozen |
| `external-call::dep:bz2.BZ2File` | bz2.BZ2File |
| `external-call::dep:cffi._shimmed_dist_utils.sysconfig` | cffi._shimmed_dist_utils.sysconfig |
| `external-call::dep:cinderclient.extension` | cinderclient.extension |
| `external-call::dep:distutils._log.log` | distutils._log.log |
| `external-call::dep:distutils._modified.newer` | distutils._modified.newer |
| `external-call::dep:distutils._modified.newer_group` | distutils._modified.newer_group |
| `external-call::dep:distutils._modified.newer_pairwise` | distutils._modified.newer_pairwise |
| `external-call::dep:distutils.archive_util` | distutils.archive_util |
| `external-call::dep:distutils.archive_util.ARCHIVE_FORMATS` | distutils.archive_util.ARCHIVE_FORMATS |
| `external-call::dep:distutils.archive_util.check_archive_formats` | distutils.archive_util.check_archive_formats |
| `external-call::dep:distutils.archive_util.make_archive` | distutils.archive_util.make_archive |
| `external-call::dep:distutils.archive_util.make_tarball` | distutils.archive_util.make_tarball |
| `external-call::dep:distutils.archive_util.make_zipfile` | distutils.archive_util.make_zipfile |
| `external-call::dep:distutils.ccompiler.new_compiler` | distutils.ccompiler.new_compiler |
| `external-call::dep:distutils.command.bdist.bdist` | distutils.command.bdist.bdist |
| `external-call::dep:distutils.command.bdist_dumb.bdist_dumb` | distutils.command.bdist_dumb.bdist_dumb |
| `external-call::dep:distutils.command.bdist_rpm.bdist_rpm` | distutils.command.bdist_rpm.bdist_rpm |
| `external-call::dep:distutils.command.build.build` | distutils.command.build.build |
| `external-call::dep:distutils.command.build_ext` | distutils.command.build_ext |
| `external-call::dep:distutils.command.build_ext.build_ext` | distutils.command.build_ext.build_ext |
| `external-call::dep:distutils.command.build_py.build_py` | distutils.command.build_py.build_py |
| `external-call::dep:distutils.command.build_scripts.build_scripts` | distutils.command.build_scripts.build_scripts |
| `external-call::dep:distutils.command.clean.clean` | distutils.command.clean.clean |
| `external-call::dep:distutils.command.config.config` | distutils.command.config.config |
| `external-call::dep:distutils.command.config.dump_file` | distutils.command.config.dump_file |
| `external-call::dep:distutils.command.install.install` | distutils.command.install.install |
| `external-call::dep:distutils.command.install_data.install_data` | distutils.command.install_data.install_data |
| `external-call::dep:distutils.command.install_headers.install_headers` | distutils.command.install_headers.install_headers |
| `external-call::dep:distutils.command.install_lib.install_lib` | distutils.command.install_lib.install_lib |
| `external-call::dep:distutils.command.install_scripts.install_scripts` | distutils.command.install_scripts.install_scripts |
| `external-call::dep:distutils.command.sdist.sdist` | distutils.command.sdist.sdist |
| `external-call::dep:distutils.command.sdist.show_formats` | distutils.command.sdist.show_formats |
| `external-call::dep:distutils.core.Command` | distutils.core.Command |
| `external-call::dep:distutils.core.Distribution` | distutils.core.Distribution |
| `external-call::dep:distutils.cygwinccompiler.CygwinCCompiler` | distutils.cygwinccompiler.CygwinCCompiler |
| `external-call::dep:distutils.dir_util` | distutils.dir_util |
| `external-call::dep:distutils.errors` | distutils.errors |
| `external-call::dep:distutils.errors.DistutilsError` | distutils.errors.DistutilsError |
| `external-call::dep:distutils.extension.Extension` | distutils.extension.Extension |
| `external-call::dep:distutils.extension.read_setup_file` | distutils.extension.read_setup_file |
| `external-call::dep:distutils.file_util.copy_file` | distutils.file_util.copy_file |
| `external-call::dep:distutils.filelist` | distutils.filelist |
| `external-call::dep:distutils.log` | distutils.log |
| `external-call::dep:distutils.spawn.spawn` | distutils.spawn.spawn |
| `external-call::dep:distutils.sysconfig._config_vars` | distutils.sysconfig._config_vars |
| `external-call::dep:distutils.sysconfig.customize_compiler` | distutils.sysconfig.customize_compiler |
| `external-call::dep:distutils.sysconfig.get_config_var` | distutils.sysconfig.get_config_var |
| `external-call::dep:distutils.sysconfig.get_python_lib` | distutils.sysconfig.get_python_lib |
| `external-call::dep:distutils.tests.missing_compiler_executable` | distutils.tests.missing_compiler_executable |
| `external-call::dep:distutils.tests.support` | distutils.tests.support |
| `external-call::dep:distutils.tests.support.copy_xxmodule_c` | distutils.tests.support.copy_xxmodule_c |
| `external-call::dep:distutils.tests.support.fixup_build_ext` | distutils.tests.support.fixup_build_ext |
| `external-call::dep:distutils.util.byte_compile` | distutils.util.byte_compile |
| `external-call::dep:distutils.util.convert_path` | distutils.util.convert_path |
| `external-call::dep:distutils.util.get_host_platform` | distutils.util.get_host_platform |
| `external-call::dep:distutils.util.get_macosx_target_ver` | distutils.util.get_macosx_target_ver |
| `external-call::dep:distutils.util.get_platform` | distutils.util.get_platform |
| `external-call::dep:distutils.util.grok_environment_error` | distutils.util.grok_environment_error |
| `external-call::dep:distutils.util.is_mingw` | distutils.util.is_mingw |
| `external-call::dep:distutils.util.split_version` | distutils.util.split_version |
| `external-call::dep:docutils.utils` | docutils.utils |
| `external-call::dep:email.generator.BytesGenerator` | email.generator.BytesGenerator |
| `external-call::dep:email.generator.Generator` | email.generator.Generator |
| `external-call::dep:email.parser.Parser` | email.parser.Parser |
| `external-call::dep:email.policy.EmailPolicy` | email.policy.EmailPolicy |
| `external-call::dep:grp.getgrnam` | grp.getgrnam |
| `external-call::dep:jaraco.functools.compose` | jaraco.functools.compose |
| `external-call::dep:jaraco.text` | jaraco.text |
| `external-call::dep:lzma.LZMAFile` | lzma.LZMAFile |
| `external-call::dep:more_itertools.always_iterable` | more_itertools.always_iterable |
| `external-call::dep:more_itertools.ilen` | more_itertools.ilen |
| `external-call::dep:openstack.baremetal.configdrive` | openstack.baremetal.configdrive |
| `external-call::dep:oslo_utils.fileutils` | oslo_utils.fileutils |
| `external-call::dep:packaging.tags` | packaging.tags |
| `external-call::dep:packaging.tags.sys_tags` | packaging.tags.sys_tags |
| `external-call::dep:packaging.version` | packaging.version |
| `external-call::dep:pbr.extra_files` | pbr.extra_files |
| `external-call::dep:pbr.options` | pbr.options |
| `external-call::dep:pip._internal.exceptions.ExternallyManagedEnvironment` | pip._internal.exceptions.ExternallyManagedEnvironment |
| `external-call::dep:pip._internal.exceptions.InvalidSchemeCombination` | pip._internal.exceptions.InvalidSchemeCombination |
| `external-call::dep:pip._internal.exceptions.LegacyDistutilsInstall` | pip._internal.exceptions.LegacyDistutilsInstall |
| `external-call::dep:pip._internal.exceptions.PreviousBuildDirError` | pip._internal.exceptions.PreviousBuildDirError |
| `external-call::dep:pip._internal.exceptions.UninstallMissingRecord` | pip._internal.exceptions.UninstallMissingRecord |
| `external-call::dep:pip._internal.exceptions.UserInstallationInvalid` | pip._internal.exceptions.UserInstallationInvalid |
| `external-call::dep:pip._internal.locations.get_bin_prefix` | pip._internal.locations.get_bin_prefix |
| `external-call::dep:pip._internal.locations.get_bin_user` | pip._internal.locations.get_bin_user |
| `external-call::dep:pip._internal.locations.get_platlib` | pip._internal.locations.get_platlib |
| `external-call::dep:pip._internal.locations.get_purelib` | pip._internal.locations.get_purelib |
| `external-call::dep:pip._internal.models.scheme.Scheme` | pip._internal.models.scheme.Scheme |
| `external-call::dep:pip._internal.req.req_uninstall.UninstallPathSet` | pip._internal.req.req_uninstall.UninstallPathSet |
| `external-call::dep:pip._internal.utils.appdirs` | pip._internal.utils.appdirs |
| `external-call::dep:pip._internal.utils.filesystem.adjacent_tmp_file` | pip._internal.utils.filesystem.adjacent_tmp_file |
| `external-call::dep:pip._internal.utils.filesystem.replace` | pip._internal.utils.filesystem.replace |
| `external-call::dep:pip._internal.utils.misc.ensure_dir` | pip._internal.utils.misc.ensure_dir |
| `external-call::dep:pip._internal.utils.misc.is_installable_dir` | pip._internal.utils.misc.is_installable_dir |
| `external-call::dep:pip._internal.utils.misc.renames` | pip._internal.utils.misc.renames |
| `external-call::dep:pip._internal.utils.temp_dir.AdjacentTempDirectory` | pip._internal.utils.temp_dir.AdjacentTempDirectory |
| `external-call::dep:pip._internal.utils.temp_dir.TempDirectory` | pip._internal.utils.temp_dir.TempDirectory |
| `external-call::dep:pip._internal.utils.unpacking.unpack_file` | pip._internal.utils.unpacking.unpack_file |
| `external-call::dep:pip._internal.utils.virtualenv.running_under_virtualenv` | pip._internal.utils.virtualenv.running_under_virtualenv |
| `external-call::dep:pwd.getpwnam` | pwd.getpwnam |
| `external-call::dep:py_compile.compile` | py_compile.compile |
| `external-call::dep:reno.setup_command` | reno.setup_command |
| `external-call::dep:setuptools._importlib.metadata` | setuptools._importlib.metadata |
| `external-call::dep:setuptools._normalization.safer_name` | setuptools._normalization.safer_name |
| `external-call::dep:setuptools.archive_util._unpack_zipfile_obj` | setuptools.archive_util._unpack_zipfile_obj |
| `external-call::dep:setuptools.archive_util.unpack_archive` | setuptools.archive_util.unpack_archive |
| `external-call::dep:setuptools.archive_util.unpack_directory` | setuptools.archive_util.unpack_directory |
| `external-call::dep:setuptools.command.bdist_egg` | setuptools.command.bdist_egg |
| `external-call::dep:setuptools.command.egg_info` | setuptools.command.egg_info |
| `external-call::dep:setuptools.command.egg_info._egg_basename` | setuptools.command.egg_info._egg_basename |
| `external-call::dep:setuptools.command.egg_info.manifest_maker` | setuptools.command.egg_info.manifest_maker |
| `external-call::dep:setuptools.command.sdist` | setuptools.command.sdist |
| `external-call::dep:setuptools.command.sdist.walk_revctrl` | setuptools.command.sdist.walk_revctrl |
| `external-call::dep:setuptools.discovery.PEP420PackageFinder` | setuptools.discovery.PEP420PackageFinder |
| `external-call::dep:setuptools.discovery.construct_package_dir` | setuptools.discovery.construct_package_dir |
| `external-call::dep:setuptools.dist._Distribution` | setuptools.dist._Distribution |
| `external-call::dep:setuptools.errors.BaseError` | setuptools.errors.BaseError |
| `external-call::dep:setuptools.errors.PackageDiscoveryError` | setuptools.errors.PackageDiscoveryError |
| `external-call::dep:setuptools.glob.glob` | setuptools.glob.glob |
| `external-call::dep:sysconfig.get_config_var` | sysconfig.get_config_var |
| `external-call::dep:sysconfig.get_path` | sysconfig.get_path |
| `external-call::dep:sysconfig.get_platform` | sysconfig.get_platform |
| `external-call::dep:sysconfig.get_python_version` | sysconfig.get_python_version |
| `external-call::dep:tempest.lib.exceptions` | tempest.lib.exceptions |
| `external-call::dep:test.support.patch` | test.support.patch |
| `external-call::dep:test.support.warnings_helper.check_warnings` | test.support.warnings_helper.check_warnings |
| `external-call::dep:wheel.macosx_libfile.calculate_macosx_platform_tag` | wheel.macosx_libfile.calculate_macosx_platform_tag |
| `external-call::dep:wheel.wheelfile` | wheel.wheelfile |
| `external-call::dep:wheel.wheelfile.WheelFile` | wheel.wheelfile.WheelFile |
| `external-call::stdlib:_osx_support` | _osx_support |
| `external-call::stdlib:fcntl` | fcntl |
| `external-call::stdlib:filecmp` | filecmp |
| `external-call::stdlib:inflect` | inflect |
| `external-call::stdlib:java` | java |
| `external-call::stdlib:jsonschema` | jsonschema |
| `external-call::stdlib:marshal` | marshal |
| `external-call::stdlib:mimetypes` | mimetypes |
| `external-call::stdlib:path` | path |
| `external-call::stdlib:pkgutil` | pkgutil |
| `external-call::stdlib:plistlib` | plistlib |
| `external-call::stdlib:pty` | pty |
| `external-call::stdlib:pwd` | pwd |
| `external-call::stdlib:py_compile` | py_compile |
| `external-call::stdlib:site` | site |
| `external-call::stdlib:sysconfig` | sysconfig |
| `external-call::stdlib:tokenize` | tokenize |
| `external-call::stdlib:zipimport` | zipimport |
| `os_venv/lib/python3.12/site-packages/autopage/tests/isolation.py` | lines, child_function, columns, recorded_output, isolate, ... |
| `os_venv/lib/python3.12/site-packages/autopage/tests/sinks.py` | TTYFixture, _setUp |
| `os_venv/lib/python3.12/site-packages/cffi/_imp_emulation.py` | find_module, path, name, get_suffixes |
| `os_venv/lib/python3.12/site-packages/cffi/api.py` | tmpdir, ensure, value, key, filename, ... |
| `os_venv/lib/python3.12/site-packages/cffi/ffiplatform.py` | maybe_relative_path, f1, path, samefile, f2 |
| `os_venv/lib/python3.12/site-packages/cffi/recompiler.py` | ffi, _is_file_like, c_file, source_extension, ffi, ... |
| `os_venv/lib/python3.12/site-packages/cffi/vengine_cpy.py` | module_name, path, so_suffixes, find_module |
| `os_venv/lib/python3.12/site-packages/cffi/vengine_gen.py` | path, module_name, patch_extension_kwds, find_module, kwds, ... |
| `os_venv/lib/python3.12/site-packages/cffi/verifier.py` | flags, modulename, preamble, force_generic_engine, _compile_module, ... |
| `os_venv/lib/python3.12/site-packages/cinderclient/client.py` | discover_extensions, load_module, _discover_via_python_path, version, version, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py` | line, text, begidx, path_complete, complete_blank, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/utils.py` | files_from_glob_patterns, access, pattern, get_exes_in_path, starts_with, ... |
| `os_venv/lib/python3.12/site-packages/dogpile/cache/backends/file.py` | basedir, argument, _init_dbm_file, _init_lock, __init__, ... |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/fixture/serializer.py` | cassette_name, cassette_library_dir, generate_cassette_name |
| `os_venv/lib/python3.12/site-packages/keystoneauth1/loading/base.py` | ext, _auth_plugin_available |
| `os_venv/lib/python3.12/site-packages/openstack/baremetal/configdrive.py` | metadata, versions, vendor_data, user_data, network_data, ... |
| `os_venv/lib/python3.12/site-packages/openstack/compute/v2/extension.py` | Extension |
| `os_venv/lib/python3.12/site-packages/openstack/config/vendors/__init__.py` | _get_vendor_defaults |
| `os_venv/lib/python3.12/site-packages/openstack/image/v1/_proxy.py` | name, _get_name_and_filename, image_format |
| `os_venv/lib/python3.12/site-packages/openstack/image/v2/_proxy.py` | _get_name_and_filename, name, image_format |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_cluster_templates.py` | test_cluster_templates |
| `os_venv/lib/python3.12/site-packages/openstack/tests/functional/cloud/test_image.py` | test_download_image |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/baremetal/test_configdrive.py` | test_with_user_data_as_string, user_data, test_success, metadata, test_without_user_data, ... |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_config.py` | test_set_one_cloud_creates_file |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_json.py` | test_vendors_valid_json, TestConfig, test_defaults_valid_json |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/config/test_loader.py` | test__load_yaml_json_file_without_json_yaml, test__load_yaml_json_file_without_perm, TestLoader, test__load_yaml_json_file_without_json, test_base_load_yaml_json_file |
| `os_venv/lib/python3.12/site-packages/openstack/tests/unit/test_stats.py` | _cleanup, _setUp, StatsdFixture |
| `os_venv/lib/python3.12/site-packages/openstackclient/api/object_store_v1.py` | container, object, object_save, file |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/functional/base.py` | cmd, fail_ok, execute |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/compute/v2/test_server.py` | test_server_create_with_block_device_from_file |
| `os_venv/lib/python3.12/site-packages/openstackclient/tests/unit/test_hacking.py` | _load_checks, code, _get_examples, test_checks, HackingTestCase, ... |
| `os_venv/lib/python3.12/site-packages/os_service_types/data/__init__.py` | read_data, filename |
| `os_venv/lib/python3.12/site-packages/os_service_types/tests/base.py` | fd, name, _delete_temp, suffix, mode, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/cfg.py` | _search_dirs, namespace, _get_config_dirs, option_string, find_file, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/sphinxconfiggen.py` | _generate_sample, app, info, msg, generate_sample, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_cfg.py` | test_config_dirs_empty_list_when_nothing_parsed, TildeExpansionTestCase, test_config_dir_doesnt_exist, test_find_file_without_init, test_config_file_tilde, ... |
| `os_venv/lib/python3.12/site-packages/oslo_config/tests/test_generator.py` | test_output_opts_group |
| `os_venv/lib/python3.12/site-packages/oslo_utils/fileutils.py` | write_to_tempfile, suffix, path, prefix, ensure_tree, ... |
| `os_venv/lib/python3.12/site-packages/oslo_utils/netutils.py` | is_ipv6_enabled |
| `os_venv/lib/python3.12/site-packages/oslo_utils/tests/imageutils/test_format_inspector.py` | tearDown, tearDown |
| `os_venv/lib/python3.12/site-packages/oslo_utils/tests/test_fileutils.py` | test_non_exist_file, check_file_content, TestComputeFileChecksum, setUp, setUp, ... |
| `os_venv/lib/python3.12/site-packages/oslo_utils/versionutils.py` | requested_version, current_version, is_compatible, same_major |
| `os_venv/lib/python3.12/site-packages/packaging/tags.py` | _compute_32_bit_interpreter |
| `os_venv/lib/python3.12/site-packages/pbr/_compat/commands.py` | find_sources, _add_pbr_defaults, LocalEggInfo, add_defaults, LocalManifestMaker, ... |
| `os_venv/lib/python3.12/site-packages/pbr/_compat/easy_install.py` | find_executable, path, executable |
| `os_venv/lib/python3.12/site-packages/pbr/extra_files.py` | set_extra_files, extra_files |
| `os_venv/lib/python3.12/site-packages/pbr/git.py` | generate_authors, changelog, write_git_changelog, dest_dir, dest_dir, ... |
| `os_venv/lib/python3.12/site-packages/pbr/hooks/files.py` | get_manpath, section, get_man_section |
| `os_venv/lib/python3.12/site-packages/pbr/setupcfg.py` | pbr, value, attr, dist |
| `os_venv/lib/python3.12/site-packages/pbr/tests/fixtures.py` | _setUp, __init__, __init__, Packages, file_name, ... |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/base.py` | BaseWheelTestCase, setUp |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_c_extension.py` | test_generates_c_extensions, get_suffixes, get_soabi, TestCExtension |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_changelog_author.py` | TestPackagingInGitRepoWithoutCommit, test_authors, test_authors, test_changelog, TestPackagingInPlainDirectory, ... |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_extra_files.py` | test_sdist_extra_files, test_sdist_git_extra_files, TestExtraFiles |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_pbr_json.py` | test_metadata_directory_has_pbr_json, TestPbrJson |
| `os_venv/lib/python3.12/site-packages/pbr/tests/functional/test_wsgi_scripts.py` | _get_path, TestPackaging, test_data_directory_has_wsgi_scripts |
| `os_venv/lib/python3.12/site-packages/pbr/tests/test_files.py` | setUp |
| `os_venv/lib/python3.12/site-packages/pbr/tests/test_git.py` | SkipFileWrites, test_generate_authors, setUp, test_skip |
| `os_venv/lib/python3.12/site-packages/pbr/tests/test_packaging.py` | test_nested_requirements, test_override_with_env_multiple_files, setUp, test_override_with_env, setUp, ... |
| `os_venv/lib/python3.12/site-packages/pbr/tests/util.py` | path, rmtree |
| `os_venv/lib/python3.12/site-packages/pip/_internal/build_env.py` | __init__, BuildEnvironment, _get_system_sitepackages, installer, get_runnable_pip, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/cache.py` | link, _get_candidates, EphemWheelCache, __init__, canonical_package_name, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/cli/autocompletion.py` | auto_complete_paths, current, completion_type |
| `os_venv/lib/python3.12/site-packages/pip/_internal/cli/cmdoptions.py` | option, parser, _handle_src, value, opt_str |
| `os_venv/lib/python3.12/site-packages/pip/_internal/cli/main_parser.py` | identify_python_interpreter, python |
| `os_venv/lib/python3.12/site-packages/pip/_internal/commands/install.py` | target_dir, _handle_target_dir, target_temp_dir, upgrade |
| `os_venv/lib/python3.12/site-packages/pip/_internal/configuration.py` | iter_config_files, get_configuration_files |
| `os_venv/lib/python3.12/site-packages/pip/_internal/locations/__init__.py` | get_bin_prefix, _looks_like_red_hat_scheme, old, home, root, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/locations/_distutils.py` | prefix, user, get_platlib, get_bin_prefix, isolated, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/locations/_sysconfig.py` | _infer_home, isolated, _should_use_osx_framework_prefix, user, prefix, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/locations/base.py` | pathname, new_root, change_root, is_osx_framework, get_src_prefix, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/base.py` | stream, __init__, info, MemoryWheel, _iter_declared_entries_from_legacy, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_dists.py` | metadata_contents, directory, from_directory, project_name, from_metadata_file_contents, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_envs.py` | location, _looks_like_wheel |
| `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/pkg_resources.py` | from_directory, directory |
| `os_venv/lib/python3.12/site-packages/pip/_internal/models/link.py` | is_existing_dir |
| `os_venv/lib/python3.12/site-packages/pip/_internal/models/scheme.py` | Scheme |
| `os_venv/lib/python3.12/site-packages/pip/_internal/network/auth.py` | KeyRingBaseProvider, keyring_provider, get_keyring_provider, PATH_as_shutil_which_determines_it, provider |
| `os_venv/lib/python3.12/site-packages/pip/_internal/network/cache.py` | _write_from_io, _write_to_file, path, source_file, writer_func, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/operations/check.py` | packages, check_unsupported, supported_tags |
| `os_venv/lib/python3.12/site-packages/pip/_internal/operations/prepare.py` | download_dir, download, link, req, verbosity, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/pyproject.py` | make_pyproject_path, unpacked_source_directory |
| `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_file.py` | options, opts, session, handle_option_line, finder, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_install.py` | setup_py_path, ensure_pristine_source_checkout, parent_dir, ensure_build_location, auto_confirm, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/req/req_uninstall.py` | compact, __init__, _get_file_stash, path, __init__, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/compat.py` | get_path_uid, path |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/egg_link.py` | raw_name, egg_link_path_from_sys_path, egg_link_path_from_location, _egg_link_names, raw_name, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/entrypoints.py` | get_best_invocation_for_this_python, get_best_invocation_for_this_pip |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/logging.py` | _open, format, kwargs, __init__, add_timestamp, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/misc.py` | ensure_dir, dir, get_pip_version, is_installable_dir, is_local, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/unpacking.py` | set_extracted_file_to_default_mode_plus_executable, filename, leading, info, current_umask, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/utils/virtualenv.py` | _no_global_under_legacy_virtualenv |
| `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/mercurial.py` | location, get_subdirectory |
| `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/subversion.py` | get_remote_url, get_revision, _get_svn_url_rev, location, location, ... |
| `os_venv/lib/python3.12/site-packages/pip/_internal/vcs/versioncontrol.py` | find_path_to_project_root_from_repo_root, location, repo_root |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/caches/file_cache.py` | data, path, _write |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/compat.py` | kwargs, default, debug_override, which, mode, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/resources.py` | path, get_resources, resource, resources, resource, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/scripts.py` | encoding, executable, _get_alternate_executable, options, get_manifest, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/util.py` | encoding, get_executable, prefix_to_dir, pred, _iglob, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distro/distro.py` | root_dir, distro_release_file, os_release_file, include_oslevel, _debian_version, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/pkg_resources/__init__.py` | path_item, _isdir, importer, get_supported_platform, path, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/android.py` | user_log_dir, user_runtime_dir |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/unix.py` | site_config_dir, site_data_dir |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/windows.py` | opinion_value, csidl_name, user_pictures_dir, Windows, _append_parts, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/pyproject_hooks/_impl.py` | cwd, cmd, extra_environ, source_tree, requested, ... |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/requests/utils.py` | extract_zipped_paths, path, atomic_open, filename |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/truststore/_openssl.py` | capath, _capath_contains_certs |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/_securetransport/low_level.py` | _temporary_keychain |
| `os_venv/lib/python3.12/site-packages/platformdirs/_xdg.py` | site_config_dir, site_data_dir, site_applications_dir |
| `os_venv/lib/python3.12/site-packages/platformdirs/android.py` | user_runtime_dir, user_log_dir |
| `os_venv/lib/python3.12/site-packages/platformdirs/api.py` | _optionally_create_directory, path |
| `os_venv/lib/python3.12/site-packages/platformdirs/unix.py` | site_applications_dir, user_log_dir, _site_applications_dirs |
| `os_venv/lib/python3.12/site-packages/platformdirs/windows.py` | user_runtime_dir, user_applications_dir, user_bin_dir, user_log_dir, opinion_value, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/buffer.py` | _editor_complex_tempfile, open_in_editor, _editor_simple_tempfile, validate_and_handle |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/completion/filesystem.py` | __init__, PathCompleter, get_completions, only_directories, ExecutableCompleter, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/eventloop/inputhook.py` | __init__, inputhook, selector, close |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/input/posix_pipe.py` | send_bytes, data, __init__ |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/input/win32.py` | close, close |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/utils.py` | to_str, value |
| `os_venv/lib/python3.12/site-packages/psutil/__init__.py` | terminal, pernic, remove, num_fds, net_io_counters, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_common.py` | parse_environ_block, fname, bcat, fname, data, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_psaix.py` | exe, num_fds, threads, cwd |
| `os_venv/lib/python3.12/site-packages/psutil/_psbsd.py` | terminal, num_fds, inst, net_if_stats, exe, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_pslinux.py` | ppid, net_if_stats, ask_sys_class_block, __init__, disk_io_counters, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_psosx.py` | environ, open_files, disk_partitions, terminal, net_if_stats, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_psposix.py` | get_terminal_map, convert_exit_code, num, can_use_pidfd_open, status, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_pssunos.py` | exe, _assert_alive, start, open_files, toaddr, ... |
| `os_venv/lib/python3.12/site-packages/psutil/_pswindows.py` | environ, open_files, net_io_counters, name, convert_dos_path, ... |
| `os_venv/lib/python3.12/site-packages/pygments/lexers/_php_builtins.py` | get_php_references, modules, regenerate, filename |
| `os_venv/lib/python3.12/site-packages/pyperclip/__init__.py` | _py2_executable_exists, name |
| `os_venv/lib/python3.12/site-packages/requests/utils.py` | atomic_open, extract_zipped_paths, filename, path |
| `os_venv/lib/python3.12/site-packages/setuptools/__init__.py` | reinit_subcommands, kw, reinitialize_command, path, _find_all_simple, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_core_metadata.py` | base_dir, _safe_license_file, write_pkg_info, file |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/archive_util.py` | owner, _get_gid, _get_uid, verbose, base_name, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/cmd.py` | level, link, copy_file, outfile, level, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/_framework_compat.py` | vars, enabled |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist.py` | run, finalize_options, bdist, item, initialize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_dumb.py` | initialize_options, bdist_dumb, run, finalize_options |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_rpm.py` | _make_spec_file, run, initialize_options, _dist_path, path, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build.py` | run, has_scripts, has_ext_modules, has_c_libraries, has_pure_modules, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_clib.py` | get_library_names |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_ext.py` | build_extensions, get_ext_fullpath, ext, find_swig, _build_extensions_serial, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_py.py` | check_package, module_file, build_py, get_module_outfile, finalize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/build_scripts.py` | script, outfiles, _copy_script, shebang, _change_mode, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/check.py` | report_level, message, error_handler, warn, debug, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/clean.py` | initialize_options, run, clean, finalize_options |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/config.py` | try_cpp, include_dirs, func, initialize_options, head, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install.py` | create_home_path, run, create_path_file, get_outputs, has_lib, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_data.py` | _, initialize_options, f, get_inputs, _copy, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_egg_info.py` | get_outputs, finalize_options, run, initialize_options, install_egg_info |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_headers.py` | initialize_options, get_inputs, run, get_outputs, install_headers, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_lib.py` | run, output_dir, cmd_option, get_inputs, files, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/install_scripts.py` | initialize_options, finalize_options, install_scripts, get_outputs, run, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/sdist.py` | get_archive_files, checking_metadata, _add_defaults_standards, sdist, make_distribution, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/base.py` | msg, dirs, library_dirs, extra, libnames, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/cygwin.py` | pp_opts, obj, is_cygwincc, dir, output_filename, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/msvc.py` | _parse_path, _find_exe, sources, output_filename, cmd, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_base.py` | c_file, c_file, test_set_include_dirs, test_include_dirs_after_multiple_compile_calls |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_cygwin.py` | test_runtime_library_dir_option, test_find_library_file, request, stuff, test_dll_libraries_not_none, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/tests/test_unix.py` | test_find_library_file, monkeypatch, test_has_function, TestUnixCCompiler |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/unix.py` | source, debug, cmd, extra_postargs, find_library_file, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/compilers/C/zos.py` | output_dir, export_symbols, extra_preargs, extra_postargs, target_desc, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/dir_util.py` | _build_cmdtuple, preserve_mode, args, ensure_relative, preserve_symlinks, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/dist.py` | _gen_paths |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/file_util.py` | move_file, preserve_mode, buffer_size, src, link, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/filelist.py` | items, extend, walk_item, _UniqueDirs, __call__ |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/spawn.py` | path, cmd, env, search_path, verbose, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/sysconfig.py` | _get_python_inc_nt, standard_lib, _is_parent, _fix_pcbuild, parse_config_h, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/support.py` | TempdirManager, kwargs, cmd, copy_xxmodule_c, DummyCommand, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_archive_util.py` | path, test_make_tarball_gzip, test_tarfile_root_owner, test_make_tarball_bzip2, tmpdir, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist.py` | test_formats, TestBuild, test_skip_build |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist_dumb.py` | test_simple_built |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_bdist_rpm.py` | test_no_optimize_flag, test_quiet |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build.py` | TestBuild, test_finalize_options |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_clib.py` | test_run |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_ext.py` | test_deployment_target_default, test_build_ext, build_ext, test_deployment_target_higher_ok, args, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_py.py` | test_empty_package_dir, test_dir_in_package_data, test_namespace_package_does_not_warn, caplog, test_dont_write_bytecode, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_build_scripts.py` | test_version_int, scripts, test_build, test_default_settings, get_build_scripts_cmd, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_clean.py` | test_simple_run, TestClean |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_config_cmd.py` | args, _info, test_search_cpp, test_clean, test_finalize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_dir_util.py` | test_mkpath_with_custom_mode, stuff, distutils_managed_tempdir, test_copy_tree_exception_in_listdir, request, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_extension.py` | TestExtension, test_extension_init, test_read_setup_file |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_file_util.py` | test_copy_file_hard_link_failure, test_copy_file_hard_link |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_filelist.py` | test_non_local_discovery, tmp_path, temp_cwd, TestFindAll, test_missing_symlink, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install.py` | test_debug_mode, TestInstall, test_record_extensions, test_home_installation_scheme, caplog, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_data.py` | test_simple_run, TestInstallData |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_headers.py` | test_simple_run, TestInstallHeaders |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_lib.py` | caplog, test_get_outputs, test_get_inputs, test_dont_write_bytecode, TestInstallLib, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_scripts.py` | test_installation, TestInstallScripts, test_default_settings |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_log.py` | caplog, test_non_ascii, TestLog |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_modified.py` | test_newer_pairwise, test_newer_group, test_newer_pairwise_fresh, TestDepUtil, test_newer_pairwise_mismatch, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_sdist.py` | test_invalid_template_wrong_arguments, test_show_formats, messages, caplog, clean_lines, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_spawn.py` | test_spawn |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_sysconfig.py` | test_srcdir_simple |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_util.py` | test_get_platform, test_grok_environment_error, TestUtil, test_get_host_platform, test_dont_write_bytecode, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/text_file.py` | close |
| `os_venv/lib/python3.12/site-packages/setuptools/_distutils/util.py` | optimize, base_dir, byte_compile, change_root, force, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_entry_points.py` | load, eps |
| `os_venv/lib/python3.12/site-packages/setuptools/_normalization.py` | value, filename_component |
| `os_venv/lib/python3.12/site-packages/setuptools/_path.py` | path, filename, normpath, _cygwin_patch, ensure_directory, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_scripts.py` | type, is_64bit, get_win_launcher |
| `os_venv/lib/python3.12/site-packages/setuptools/_shutil.py` | arg, _auto_chmod, attempt_chmod_verbose, mode, path, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/backports/tarfile/__init__.py` | fileobj, mode, src, getmembers, s, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/importlib_metadata/__init__.py` | stem, _name_from_stem |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/importlib_metadata/compat/py311.py` | wrap, path |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/context/__init__.py` | remove_readonly, url, path, exc_info, pushd, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/text/__init__.py` | multi_substitution, substitutions |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/jaraco/text/show-newlines.py` | filename, report_newlines |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/android.py` | user_runtime_dir, user_log_dir |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/unix.py` | site_config_dir, site_data_dir |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/windows.py` | csidl_name, path, get_win_folder_if_csidl_name_not_env_var, site_data_dir, site_cache_dir, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_bdist_wheel.py` | egginfo_path, expected, finalize_options, distinfo_path, run, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_commands/__init__.py` | tags_f, args |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_commands/tags.py` | new_tags, original_tags, _compute_tags, build_tag, wheel, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/_metadata.py` | pkginfo_path, egg_info_path, pkginfo_to_metadata |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/macosx_libfile.py` | archive_root, platform_tag, calculate_macosx_platform_tag |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/wheel/wheelfile.py` | open, mode, name_or_info, pwd |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/zipp/__init__.py` | filename |
| `os_venv/lib/python3.12/site-packages/setuptools/archive_util.py` | progress_filter, filename, extract_dir, filename, progress_filter, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/build_meta.py` | _open_setup_script, _BuildMetaLegacyBackend, setup_script, result_directory, arbitrary_args, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_egg.py` | base_dir, verbose, egg_dir, initialize_options, gen_header, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_wheel.py` | safer_version, _validate_py_limited_api, _is_32bit_interpreter, initialize_options, warn, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/build.py` | get_source_files, finalize_options, get_output_mapping, get_outputs, initialize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/build_ext.py` | fullname, build_py, orig_path, output_dir, _get_equivalent_stub, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/build_py.py` | get_data_files, parent, files, warn, importable, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/dist_info.py` | initialize_options, requires_bkp, _maybe_bkp_dir, dist_info, finalize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/easy_install.py` | name, __getattr__ |
| `os_venv/lib/python3.12/site-packages/setuptools/command/editable_wheel.py` | bdist_wheel, _collect_build_outputs, _can_symlink_files, base_dir, run, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/egg_info.py` | write_manifest, save_version_info, exclude, initialize_options, path, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/install_egg_info.py` | install_egg_info, get_outputs, copytree, finalize_options, initialize_options, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/install_lib.py` | outfile, infile, level, copy_tree, preserve_mode, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/install_scripts.py` | run, mode, ignored, _install_ep_scripts, script_name, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/rotate.py` | run |
| `os_venv/lib/python3.12/site-packages/setuptools/command/sdist.py` | _add_defaults_data_files, build_py, run, make_distribution, add_defaults, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/command/setopt.py` | config_file, kind, initialize_options, edit_config, run, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/compat/py311.py` | path, onexc, ignore_errors, shutil_rmtree |
| `os_venv/lib/python3.12/site-packages/setuptools/config/_apply_pyprojecttoml.py` | config, filename, dist, apply |
| `os_venv/lib/python3.12/site-packages/setuptools/config/expand.py` | spec, __init__, parent, _filter_existing_files, filepath, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/config/pyprojecttoml.py` | filepath, load_file, ignore_option_errors, __init__, dist, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/config/setupcfg.py` | ignore_option_errors, filepath, other_files, _apply, dist |
| `os_venv/lib/python3.12/site-packages/setuptools/discovery.py` | distribution, packages, name, pkg_dir, ignore_ext_modules, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/dist.py` | finalize_options, args, run_command, _parse_command_opts, command, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/glob.py` | dirname, pathname, glob0, escape, recursive, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/installer.py` | find_links, _fixup_find_links, req, _fetch_build_egg_no_warn, dist |
| `os_venv/lib/python3.12/site-packages/setuptools/msvc.py` | __init__, target_cpu, arch, vc_ver, vc_min_ver |
| `os_venv/lib/python3.12/site-packages/setuptools/namespaces.py` | _get_target, _get_nspkg_file, _get_all_ns_packages, Installer, _get_root, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/contexts.py` | cd, tempdir, save_user_site_setting, kwargs |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/environment.py` | _which_dirs, path, cmd, cmd, data_stream, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/fixtures.py` | setup_py_template, make_nspkg_sdist, version, path, dist_path, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/integration/test_pip_install_sdist.py` | version, tmp_path, package, package, retrieve_sdist, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_bdist_egg.py` | test_bdist_egg, test_exclude_source_files |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_build_meta.py` | test_build_sdist_explicit_dist, __init__, name, kwargs, args, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_build_py.py` | tmpdir_cwd, tmpdir_cwd, test_existing_egg_info, test_executable_data, test_read_only, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_core_metadata.py` | tmp_path, dist, test_pkg_info_roundtrip |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_develop.py` | temp_user, monkeypatch |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_editable_install.py` | new_dirs, _addsitedirs |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_egg_info.py` | env, tmpdir_cwd, env, test_provides_extra, tmpdir_cwd, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_find_packages.py` | teardown_method, method, test_pep420_ns_package_no_non_package_dirs |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_manifest.py` | method, method, setup_method, method, teardown_method, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_sdist.py` | dst, test_write_manifest_skips_non_utf8_filenames, symlink_or_skip_test, src, test_symlinked_extension_sources, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_setuptools.py` | tmpdir, can_symlink |
| `os_venv/lib/python3.12/site-packages/setuptools/tests/test_wheel.py` | install_tree_includes, tree, test_wheel_no_dist_dir, flatten_tree, params, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/unicode_utils.py` | string, try_encode, path, filesys_decode, enc |
| `os_venv/lib/python3.12/site-packages/setuptools/wheel.py` | src_dir, _get_supported_tags, __init__, install_as_egg, egg_info, ... |
| `os_venv/lib/python3.12/site-packages/setuptools/windows_support.py` | hide_file, path |

## Entry Points

- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_rpm.py::bdist_rpm.run`
- `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_egg.py::bdist_egg.run`
- `os_venv/lib/python3.12/site-packages/setuptools/_distutils/tests/test_install_data.py::TestInstallData.test_simple_run`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/backports/tarfile/__init__.py::main`
- `os_venv/lib/python3.12/site-packages/setuptools/command/bdist_wheel.py::bdist_wheel.run`

## Connected Communities

- **setuptools/tests +7 dirs** (45 cross-edges)
- **. +37 dirs · get** (43 cross-edges)
- **. +9 dirs · pytest** (31 cross-edges)
- **. +6 dirs · _extract_member** (30 cross-edges)
- **_vendor/platformdirs +15 dirs** (27 cross-edges)
- **. +2 dirs · setuptools.dist.Distribution** (23 cross-edges)
- **. +23 dirs · join** (22 cross-edges)
- **. +18 dirs · append** (16 cross-edges)
- **. +4 dirs · distutils.sysconfig** (14 cross-edges)
- **. +23 dirs · fixtures** (13 cross-edges)
- **. +7 dirs · append** (11 cross-edges)
- **. +10 dirs · dedent** (10 cross-edges)
- **site-packages/keystoneclient +36 dirs** (10 cross-edges)
- **. +23 dirs · oslo_config.cfg** (10 cross-edges)
- **site-packages/psutil · get_procfs_path** (9 cross-edges)
- **. +61 dirs** (8 cross-edges)
- **setuptools/tests +4 dirs** (8 cross-edges)
- **. +2 dirs · openstack.config.loader** (8 cross-edges)
- **. +39 dirs** (7 cross-edges)
- **. +7 dirs · getenv** (7 cross-edges)
- **. +37 dirs · cast** (7 cross-edges)
- **. +3 dirs · resolve** (6 cross-edges)
- **. +12 dirs · escape** (6 cross-edges)
- **pygments/lexers +11 dirs** (6 cross-edges)
- **. +2 dirs · append** (5 cross-edges)
- **. +3 dirs · commit** (5 cross-edges)
- **site-packages/msgpack +3 dirs** (5 cross-edges)
- **tests/functional · run_setup** (5 cross-edges)
- **oslo_config/tests +1 dirs** (5 cross-edges)
- **. +3 dirs · distutils.errors.DistutilsOptio…** (5 cross-edges)
- **. +10 dirs · time** (5 cross-edges)
- **network/v2 +65 dirs** (4 cross-edges)
- **unit/cloud +11 dirs** (4 cross-edges)
- **. +1 dirs · distutils.dir_util.remove_tree** (4 cross-edges)
- **pygments/lexers +5 dirs** (4 cross-edges)
- **site-packages/pbr · _run_git_command** (4 cross-edges)
- **. +4 dirs · run_command** (4 cross-edges)
- **site-packages/setuptools +2 dirs · emit** (4 cross-edges)
- **cliff/tests +6 dirs** (4 cross-edges)
- **. +4 dirs · pbr.version** (4 cross-edges)
- **cache/backends · get · memcached** (3 cross-edges)
- **. +1 dirs · OrderedDict** (3 cross-edges)
- **. +7 dirs · write** (3 cross-edges)
- **. +5 dirs · codecs** (3 cross-edges)
- **. +5 dirs · from_iterable** (3 cross-edges)
- **site-packages/cffi · Recompiler** (3 cross-edges)
- **_vendor/distlib +1 dirs** (3 cross-edges)
- **. +2 dirs · _create_img** (3 cross-edges)
- **_vendor/requests +7 dirs** (3 cross-edges)
- **pygments/lexers +14 dirs** (3 cross-edges)
- **setuptools/_distutils +3 dirs** (3 cross-edges)
- **wheel/_commands +1 dirs** (2 cross-edges)
- **. +4 dirs · add_exclusive_arg** (2 cross-edges)
- **unit/config +7 dirs** (2 cross-edges)
- **. +4 dirs · BytesIO** (2 cross-edges)
- **. +4 dirs · itemgetter** (2 cross-edges)
- **. +1 dirs · distutils.dist.Distribution** (2 cross-edges)
- **setuptools/command · _already_tagged** (2 cross-edges)
- **site-packages/oslo_config · parse** (2 cross-edges)
- **functional/cloud +7 dirs** (2 cross-edges)
- **. +2 dirs · flags_from_pkgconfig** (2 cross-edges)
- **. +4 dirs · run** (2 cross-edges)
- **_vendor/more_itertools +3 dirs · _sample_weighted** (2 cross-edges)
- **. +2 dirs · email** (2 cross-edges)
- **. +2 dirs · makedist** (2 cross-edges)
- **. +9 dirs · partial** (2 cross-edges)
- **site-packages/setuptools · validate** (2 cross-edges)
- **_vendor/pkg_resources · _rebuild_mod_path** (2 cross-edges)
- **setuptools/_distutils · open** (2 cross-edges)
- **site-packages/cffi +1 dirs · load_library** (2 cross-edges)
- **setuptools/_distutils · get_platform** (2 cross-edges)
- **site-packages/psutil · oneshot** (2 cross-edges)
- **message/v2 +2 dirs** (2 cross-edges)
- **site-packages/psutil +1 dirs · disk_partitions** (2 cross-edges)
- **python3.12/site-packages · check** (2 cross-edges)
- **. +1 dirs · _assert_packages** (2 cross-edges)
- **. +3 dirs · pip._internal.utils.deprecation…** (2 cross-edges)
- **. +9 dirs · system** (2 cross-edges)
- **. +7 dirs · _winapi** (2 cross-edges)
- **. +7 dirs · sign** (2 cross-edges)
- **pygments/lexers +3 dirs** (2 cross-edges)
- **. +3 dirs · pip._internal.utils.misc.write_…** (2 cross-edges)
- **site-packages/setuptools · Distribution** (2 cross-edges)
- **setuptools/tests +5 dirs** (2 cross-edges)
- **site-packages/cffi +1 dirs · _flatten** (2 cross-edges)
- **site-packages/cffi · _patch_meth** (2 cross-edges)
- **openstackclient/api +3 dirs** (2 cross-edges)
- **setuptools/tests +3 dirs** (2 cross-edges)
- **compilers/C · compile** (1 cross-edges)
- **site-packages/pyparsing +7 dirs** (1 cross-edges)
- **setuptools/command · _get_platform_patterns** (1 cross-edges)
- **. +8 dirs · user_agent** (1 cross-edges)
- **site-packages/cffi +1 dirs · complete_struct_or_union** (1 cross-edges)
- **site-packages/setuptools · iglob** (1 cross-edges)
- **. +4 dirs · _calc_signature_4** (1 cross-edges)
- **_vendor/requests +4 dirs** (1 cross-edges)
- **. +1 dirs · __init__ · . · filewrapper** (1 cross-edges)
- **. +1 dirs · _Filter** (1 cross-edges)
- **compute/v2 +17 dirs** (1 cross-edges)
- **. +2 dirs · distutils.errors.DistutilsSetup…** (1 cross-edges)
- **. +1 dirs · _caller_frame_info** (1 cross-edges)
- **. +11 dirs** (1 cross-edges)
- **. +5 dirs · backport_makefile** (1 cross-edges)
- **. +1 dirs · detect_encoding** (1 cross-edges)
- **_vendor/more_itertools · index** (1 cross-edges)
- **. +2 dirs · run_command** (1 cross-edges)
- **setuptools/tests · test_requires_dist** (1 cross-edges)
- **. +64 dirs** (1 cross-edges)
- **. +1 dirs · decide_user_install** (1 cross-edges)
- **. +2 dirs · from_file** (1 cross-edges)
- **setuptools/config · __init__ · expand** (1 cross-edges)
- **. +2 dirs · testRequire** (1 cross-edges)
- **tests/unit · _assert_token_auth** (1 cross-edges)
- **. +1 dirs · parse_file** (1 cross-edges)
- **setuptools/tests · get_outputs** (1 cross-edges)
- **. +1 dirs · _get_new_credentials** (1 cross-edges)
- **site-packages/psutil +3 dirs · findall** (1 cross-edges)
- **_vendor/wheel · safer_name** (1 cross-edges)
- **config/_validate_pyproject +2 dirs** (1 cross-edges)
- **unit/identity +2 dirs** (1 cross-edges)
- **setuptools/config · _apply_project_table** (1 cross-edges)
- **. +1 dirs · NullProvider** (1 cross-edges)
- **_vendor/more_itertools · exactly_n** (1 cross-edges)
- **. +12 dirs · simplefilter** (1 cross-edges)
- **. +2 dirs · install_options** (1 cross-edges)
- **. +2 dirs · read_mach_header** (1 cross-edges)
- **. +10 dirs · sub** (1 cross-edges)
- **site-packages/psutil · _proc_basic_info** (1 cross-edges)
- **. +1 dirs · test_process_template** (1 cross-edges)
- **. +18 dirs · deepcopy** (1 cross-edges)
- **. +3 dirs · from_bytes** (1 cross-edges)
- **site-packages/setuptools · _convert_requires** (1 cross-edges)
- **_vendor/wheel · convert_requirements** (1 cross-edges)
- **. +3 dirs · pip._internal.exceptions.Comman…** (1 cross-edges)
- **_vendor/pkg_resources · _read_utf8_with_fallback** (1 cross-edges)
- **. +5 dirs · exc_info** (1 cross-edges)
- **site-packages/cffi · _to_py** (1 cross-edges)
- **site-packages/setuptools · construct_package_dir** (1 cross-edges)
- **_vendor/more_itertools +1 dirs · repeat** (1 cross-edges)
- **compute/v2 · TestServerCreate** (1 cross-edges)
- **. +1 dirs · _dbm_file** (1 cross-edges)
- **site-packages/pbr · _iter_changelog** (1 cross-edges)
- **stevedore/tests +7 dirs** (1 cross-edges)
- **. +1 dirs · test_wheel_info** (1 cross-edges)
- **autopage/tests · __init__ · isolation (9)** (1 cross-edges)
- **site-packages/cffi · _write_source** (1 cross-edges)
- **_vendor/wheel · safe_version** (1 cross-edges)
- **pip/_internal · BaseDistribution** (1 cross-edges)
- **_internal/metadata +1 dirs** (1 cross-edges)
- **autopage/tests +1 dirs · close** (1 cross-edges)
- **site-packages/setuptools · _get_config** (1 cross-edges)
- **. +1 dirs · emit** (1 cross-edges)
- **functional/cloud +53 dirs** (1 cross-edges)
- **. +3 dirs · issue_warning** (1 cross-edges)
- **setuptools/command · _run_build_commands** (1 cross-edges)
- **. +1 dirs · ZipResourceFinder** (1 cross-edges)
- **autopage/tests +2 dirs · AutoPager** (1 cross-edges)
- **. +7 dirs · winreg** (1 cross-edges)
- **. +3 dirs · unpack_vcs_link** (1 cross-edges)
- **. +13 dirs · run_async** (1 cross-edges)
- **setuptools/command · _select_strategy** (1 cross-edges)
- **. +2 dirs · __init__ · . · __init__** (1 cross-edges)
- **_vendor/distro · version** (1 cross-edges)
- **site-packages/prompt_toolkit · Document** (1 cross-edges)
- **. +1 dirs · format_alias** (1 cross-edges)
- **. +1 dirs · _get_cache_path** (1 cross-edges)
- **site-packages/prompt_toolkit · append_to_history** (1 cross-edges)
- **metadata/importlib +7 dirs** (1 cross-edges)
- **site-packages/prompt_toolkit +3 dirs** (1 cross-edges)
- **compute/v2 · set_compute_api_version** (1 cross-edges)
- **. +7 dirs · import_module** (1 cross-edges)
- **site-packages/setuptools · _install_setup_requires** (1 cross-edges)
- **. +2 dirs · install** (1 cross-edges)
- **. +2 dirs · _write_requirements** (1 cross-edges)
- **. +8 dirs · unicodedata** (1 cross-edges)
- **. +2 dirs · _eval_with_owner** (1 cross-edges)
- **setuptools/_distutils · execute · cmd** (1 cross-edges)
- **site-packages/psutil · _get_kinfo_proc** (1 cross-edges)
- **_vendor/distlib · parse_marker** (1 cross-edges)
- **openstack/cloud +12 dirs** (1 cross-edges)
- **site-packages/psutil · Process** (1 cross-edges)
- **site-packages/psutil · convert_oserror** (1 cross-edges)
- **. +4 dirs · info** (1 cross-edges)
- **. +1 dirs · get_completions · external-call::dep:prompt_toolkit.completion** (1 cross-edges)
- **_vendor/wheel · split_sections** (1 cross-edges)
- **site-packages/cffi · _prnt** (1 cross-edges)
- **. +1 dirs · oslo_utils.imageutils._luks** (1 cross-edges)
- **. +2 dirs · get_location** (1 cross-edges)
- **setuptools/command · get_exclusions** (1 cross-edges)
- **functional/cloud +5 dirs** (1 cross-edges)
- **tests/integration** (1 cross-edges)
- **. +3 dirs · _build_subcommand_handler** (1 cross-edges)
- **. +2 dirs · _distribution_fullname** (1 cross-edges)
- **functional/cloud +6 dirs** (1 cross-edges)
- **. +4 dirs · pip._internal.utils.misc.redact…** (1 cross-edges)
- **. +2 dirs · _fetch_build_eggs** (1 cross-edges)
- **compilers/C · __init__** (1 cross-edges)
- **. +1 dirs · setup_cfg_to_setup_kwargs** (1 cross-edges)
- **site-packages/setuptools · build_wheel** (1 cross-edges)
- **. +7 dirs · exit** (1 cross-edges)
- **. +3 dirs · _test_xx** (1 cross-edges)
- **pygments/lexers +1 dirs · find_lexer_class_for_filename** (1 cross-edges)
- **contrib/_securetransport · _load_items_from_file** (1 cross-edges)
- **. +4 dirs · partial** (1 cross-edges)
- **. +3 dirs · pip._internal.metadata.get_defa…** (1 cross-edges)
- **python3.12/site-packages · serialize** (1 cross-edges)
- **. +5 dirs · _strip_extras** (1 cross-edges)
- **site-packages/setuptools +1 dirs · validate** (1 cross-edges)
- **urllib3/contrib +4 dirs** (1 cross-edges)
- **. +2 dirs · compute_file_checksum** (1 cross-edges)
- **setuptools/_distutils · get_macosx_target_ver** (1 cross-edges)
- **_vendor/more_itertools +2 dirs · tee** (1 cross-edges)
- **autopage/tests +1 dirs · autopage.tests.isolation** (1 cross-edges)
- **pip/_internal +2 dirs · install** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-7693"
smart_context with task: "understand . +83 dirs", format: "gcx"
find_usages with id: "os_venv/lib/python3.12/site-packages/setuptools/_distutils/command/bdist_rpm.py::bdist_rpm.run", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
