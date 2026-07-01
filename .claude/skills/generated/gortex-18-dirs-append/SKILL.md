---
name: gortex-18-dirs-append
description: "Work in the . +18 dirs · append area — 975 symbols across 67 files (90% cohesion)"
---

# . +18 dirs · append

975 symbols | 67 files | 90% cohesion

## When to Use

Use this skill when working on files in:
- ``
- `external-call::dep:IPython.start_ipython`
- `external-call::dep:IPython.terminal.interactiveshell.TerminalInteractiveShell`
- `external-call::dep:IPython.terminal.ipapp.TerminalIPythonApp`
- `external-call::dep:code.InteractiveConsole`
- `external-call::dep:prompt_toolkit.application.create_app_session`
- `external-call::dep:prompt_toolkit.application.get_app`
- `external-call::dep:prompt_toolkit.auto_suggest.AutoSuggestFromHistory`
- `external-call::dep:prompt_toolkit.completion.DummyCompleter`
- `external-call::dep:prompt_toolkit.filters`
- `external-call::dep:prompt_toolkit.formatted_text.ANSI`
- `external-call::dep:prompt_toolkit.history.InMemoryHistory`
- `external-call::dep:prompt_toolkit.input.create_input`
- `external-call::dep:prompt_toolkit.output.create_output`
- `external-call::dep:prompt_toolkit.patch_stdout.patch_stdout`
- `external-call::dep:prompt_toolkit.print_formatted_text`
- `external-call::dep:prompt_toolkit.shortcuts.PromptSession`
- `external-call::dep:prompt_toolkit.shortcuts.choice`
- `external-call::dep:rich.console.Console`
- `external-call::dep:rich.console.Group`
- `external-call::dep:rich.highlighter.ReprHighlighter`
- `external-call::dep:rich.pretty.is_expandable`
- `external-call::dep:rich.protocol.rich_cast`
- `external-call::dep:rich.rule.Rule`
- `external-call::dep:rich.style.Style`
- `external-call::dep:rich.table.Column`
- `external-call::dep:rich.text.Text`
- `external-call::dep:rich.theme.Theme`
- `external-call::dep:rich.traceback.Traceback`
- `external-call::stdlib:pydoc`
- `external-call::stdlib:readline`
- `external-call::stdlib:rlcompleter`
- `os_venv/lib/python3.12/site-packages/autopage/__init__.py`
- `os_venv/lib/python3.12/site-packages/autopage/command.py`
- `os_venv/lib/python3.12/site-packages/cliff/interactive.py`
- `os_venv/lib/python3.12/site-packages/cmd2/annotated.py`
- `os_venv/lib/python3.12/site-packages/cmd2/argparse_completer.py`
- `os_venv/lib/python3.12/site-packages/cmd2/argparse_utils.py`
- `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py`
- `os_venv/lib/python3.12/site-packages/cmd2/command_set.py`
- `os_venv/lib/python3.12/site-packages/cmd2/completion.py`
- `os_venv/lib/python3.12/site-packages/cmd2/decorators.py`
- `os_venv/lib/python3.12/site-packages/cmd2/history.py`
- `os_venv/lib/python3.12/site-packages/cmd2/parsing.py`
- `os_venv/lib/python3.12/site-packages/cmd2/pt_utils.py`
- `os_venv/lib/python3.12/site-packages/cmd2/rich_utils.py`
- `os_venv/lib/python3.12/site-packages/cmd2/string_utils.py`
- `os_venv/lib/python3.12/site-packages/cmd2/theme.py`
- `os_venv/lib/python3.12/site-packages/cmd2/utils.py`
- `os_venv/lib/python3.12/site-packages/dogpile/testing/assertions.py`
- `os_venv/lib/python3.12/site-packages/jmespath/compat.py`
- `os_venv/lib/python3.12/site-packages/markdown_it/renderer.py`
- `os_venv/lib/python3.12/site-packages/oslo_utils/excutils.py`
- `os_venv/lib/python3.12/site-packages/pbr/hooks/files.py`
- `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/__init__.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/compat.py`
- `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/prettytable/colortable.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/application.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/buffer.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/history.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/patch_stdout.py`
- `os_venv/lib/python3.12/site-packages/rich/__init__.py`
- `os_venv/lib/python3.12/site-packages/rich/screen.py`
- `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/unix.py`
- `os_venv/lib/python3.12/site-packages/setuptools/config/setupcfg.py`

## Key Files

| File | Symbols |
|------|---------|
| `` | _get_action_name, signal, startswith, replace, getpgid, ... |
| `external-call::dep:IPython.start_ipython` | IPython.start_ipython |
| `external-call::dep:IPython.terminal.interactiveshell.TerminalInteractiveShell` | IPython.terminal.interactiveshell.TerminalInteractiveShell |
| `external-call::dep:IPython.terminal.ipapp.TerminalIPythonApp` | IPython.terminal.ipapp.TerminalIPythonApp |
| `external-call::dep:code.InteractiveConsole` | code.InteractiveConsole |
| `external-call::dep:prompt_toolkit.application.create_app_session` | prompt_toolkit.application.create_app_session |
| `external-call::dep:prompt_toolkit.application.get_app` | prompt_toolkit.application.get_app |
| `external-call::dep:prompt_toolkit.auto_suggest.AutoSuggestFromHistory` | prompt_toolkit.auto_suggest.AutoSuggestFromHistory |
| `external-call::dep:prompt_toolkit.completion.DummyCompleter` | prompt_toolkit.completion.DummyCompleter |
| `external-call::dep:prompt_toolkit.filters` | prompt_toolkit.filters |
| `external-call::dep:prompt_toolkit.formatted_text.ANSI` | prompt_toolkit.formatted_text.ANSI |
| `external-call::dep:prompt_toolkit.history.InMemoryHistory` | prompt_toolkit.history.InMemoryHistory |
| `external-call::dep:prompt_toolkit.input.create_input` | prompt_toolkit.input.create_input |
| `external-call::dep:prompt_toolkit.output.create_output` | prompt_toolkit.output.create_output |
| `external-call::dep:prompt_toolkit.patch_stdout.patch_stdout` | prompt_toolkit.patch_stdout.patch_stdout |
| `external-call::dep:prompt_toolkit.print_formatted_text` | prompt_toolkit.print_formatted_text |
| `external-call::dep:prompt_toolkit.shortcuts.PromptSession` | prompt_toolkit.shortcuts.PromptSession |
| `external-call::dep:prompt_toolkit.shortcuts.choice` | prompt_toolkit.shortcuts.choice |
| `external-call::dep:rich.console.Console` | rich.console.Console |
| `external-call::dep:rich.console.Group` | rich.console.Group |
| `external-call::dep:rich.highlighter.ReprHighlighter` | rich.highlighter.ReprHighlighter |
| `external-call::dep:rich.pretty.is_expandable` | rich.pretty.is_expandable |
| `external-call::dep:rich.protocol.rich_cast` | rich.protocol.rich_cast |
| `external-call::dep:rich.rule.Rule` | rich.rule.Rule |
| `external-call::dep:rich.style.Style` | rich.style.Style |
| `external-call::dep:rich.table.Column` | rich.table.Column |
| `external-call::dep:rich.text.Text` | rich.text.Text |
| `external-call::dep:rich.theme.Theme` | rich.theme.Theme |
| `external-call::dep:rich.traceback.Traceback` | rich.traceback.Traceback |
| `external-call::stdlib:pydoc` | pydoc |
| `external-call::stdlib:readline` | readline |
| `external-call::stdlib:rlcompleter` | rlcompleter |
| `os_venv/lib/python3.12/site-packages/autopage/__init__.py` | _sigint_ignore |
| `os_venv/lib/python3.12/site-packages/autopage/command.py` | PagerCommand, pager_command, DefaultPager, environment_variables, pager_cmdline, ... |
| `os_venv/lib/python3.12/site-packages/cliff/interactive.py` | _split_line, InteractiveApp, do_help, line, get_names, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/annotated.py` | choices, _ActionPolicy, _convert_choices, parser_builder, _policy, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/argparse_completer.py` | begidx, __init__, print_help, endidx, _ArgumentState, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/argparse_utils.py` | find_parser, suggest_on_error, formatter_class, prog, Cmd2ArgumentParser, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py` | _build_py_parser, style, find_commandset_for_command, emoji, kwargs, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/command_set.py` | __init__, cmd, on_unregistered, remove_settable, add_settable, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/completion.py` | __post_init__, Completions, to_strings, Choices |
| `os_venv/lib/python3.12/site-packages/cmd2/decorators.py` | command, help, preserve_quotes, ns_provider, subcommand, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/history.py` | pr, verbose, from_dict, single_line_format, idx, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/parsing.py` | is_subcommand, tokens, __new__, _pos_args, _command_and_args, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/pt_utils.py` | text, _complete_event, document, __init__, lex_document, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/rich_utils.py` | __init__, emoji, highlight, style, log_locals, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/string_utils.py` | val, character, strip_quotes, width, val, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/theme.py` | style_name, register_synchronized_prefix, pt_ui_names, prefix, update_theme, ... |
| `os_venv/lib/python3.12/site-packages/cmd2/utils.py` | tokens_to_quote, readbytes, remove_duplicates, expand_user, clear, ... |
| `os_venv/lib/python3.12/site-packages/dogpile/testing/assertions.py` | winsleep |
| `os_venv/lib/python3.12/site-packages/jmespath/compat.py` | get_methods |
| `os_venv/lib/python3.12/site-packages/markdown_it/renderer.py` | __init__, parser |
| `os_venv/lib/python3.12/site-packages/oslo_utils/excutils.py` | should_ignore_ex, __init__ |
| `os_venv/lib/python3.12/site-packages/pbr/hooks/files.py` | unquote_path, expand_globs, path |
| `os_venv/lib/python3.12/site-packages/pip/_internal/metadata/__init__.py` | _should_use_importlib_metadata |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/distlib/compat.py` | python_implementation |
| `os_venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/unix.py` | site_runtime_dir |
| `os_venv/lib/python3.12/site-packages/platformdirs/unix.py` | site_runtime_dir |
| `os_venv/lib/python3.12/site-packages/prettytable/colortable.py` | horizontal_char, horizontal_color, s, format_code, default_color, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/application.py` | _restore_sigint_from_ctypes |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/buffer.py` | select_last, complete_event, start_completion, insert_common_part, select_first |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/history.py` | load_history_strings, add |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/patch_stdout.py` | __exit__, args, fileno, close |
| `os_venv/lib/python3.12/site-packages/rich/__init__.py` | kwargs, reconfigure, args |
| `os_venv/lib/python3.12/site-packages/rich/screen.py` | __init__, style, renderables, application_mode |
| `os_venv/lib/python3.12/site-packages/setuptools/_vendor/platformdirs/unix.py` | site_runtime_dir |
| `os_venv/lib/python3.12/site-packages/setuptools/config/setupcfg.py` | parse_section, section_options |

## Connected Communities

- **. +83 dirs** (25 cross-edges)
- **. +37 dirs · cast** (22 cross-edges)
- **. +37 dirs · get** (18 cross-edges)
- **. +9 dirs · partial** (5 cross-edges)
- **. +13 dirs · prompt_toolkit.application.curr…** (4 cross-edges)
- **. +9 dirs · system** (3 cross-edges)
- **. +1 dirs · __enter__** (3 cross-edges)
- **site-packages/debtcollector +5 dirs** (3 cross-edges)
- **. +3 dirs · _build_subcommand_handler** (3 cross-edges)
- **. +3 dirs · update_myself** (2 cross-edges)
- **. +2 dirs · pyperclip** (2 cross-edges)
- **site-packages/cmd2 · str_search** (2 cross-edges)
- **site-packages/psutil +3 dirs · findall** (2 cross-edges)
- **site-packages/prompt_toolkit · get_cursor_left_position** (2 cross-edges)
- **unit/cloud +14 dirs** (2 cross-edges)
- **. +3 dirs · islice** (2 cross-edges)
- **. +1 dirs · render** (2 cross-edges)
- **site-packages/prompt_toolkit · insert_text** (1 cross-edges)
- **site-packages/prompt_toolkit · auto_down** (1 cross-edges)
- **. +7 dirs · getenv** (1 cross-edges)
- **site-packages/rich +1 dirs · print** (1 cross-edges)
- **. +1 dirs · get_completions · external-call::dep:prompt_toolkit.completion** (1 cross-edges)
- **site-packages/cmd2 · _match_argument** (1 cross-edges)
- **network/v2 +65 dirs** (1 cross-edges)
- **python3.12/site-packages · run_subcommand** (1 cross-edges)
- **. +39 dirs** (1 cross-edges)
- **. +1 dirs · get_origin** (1 cross-edges)
- **. +2 dirs · __init__ · external-call::dep:prompt_toolkit.formatted_text** (1 cross-edges)
- **. +2 dirs · files** (1 cross-edges)
- **pygments/lexers +14 dirs** (1 cross-edges)
- **. +61 dirs** (1 cross-edges)
- **. +10 dirs · dumps** (1 cross-edges)
- **site-packages/cmd2 +1 dirs** (1 cross-edges)
- **python3.12/site-packages · __init__ · interactive** (1 cross-edges)
- **site-packages/rich +2 dirs** (1 cross-edges)
- **. +5 dirs · exc_info** (1 cross-edges)
- **. +10 dirs · Lock** (1 cross-edges)
- **. +6 dirs · _extract_member** (1 cross-edges)
- **. +2 dirs · _update_defaults** (1 cross-edges)
- **. +2 dirs · run_command** (1 cross-edges)
- **. +11 dirs** (1 cross-edges)
- **site-packages/rich +1 dirs · make_test_card** (1 cross-edges)
- **autopage/tests +1 dirs · close** (1 cross-edges)
- **. +2 dirs · __init__ · . · __init__** (1 cross-edges)
- **site-packages/rich +1 dirs · inspect** (1 cross-edges)
- **. +1 dirs · __init__ · . · timeout** (1 cross-edges)
- **. +5 dirs · from_iterable** (1 cross-edges)
- **dogpile/util +2 dirs** (1 cross-edges)
- **. +64 dirs** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-2476"
smart_context with task: "understand . +18 dirs · append", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
