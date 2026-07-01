---
name: gortex-13-dirs-prompt-toolkit-application-curr
description: "Work in the . +13 dirs · prompt_toolkit.application.curr… area — 615 symbols across 140 files (89% cohesion)"
---

# . +13 dirs · prompt_toolkit.application.curr…

615 symbols | 140 files | 89% cohesion

## When to Use

Use this skill when working on files in:
- `external-call::dep:prompt_toolkit.application.Application`
- `external-call::dep:prompt_toolkit.application.current.get_app`
- `external-call::dep:prompt_toolkit.application.run_in_terminal.in_terminal`
- `external-call::dep:prompt_toolkit.auto_suggest.DynamicAutoSuggest`
- `external-call::dep:prompt_toolkit.buffer.Buffer`
- `external-call::dep:prompt_toolkit.clipboard.DynamicClipboard`
- `external-call::dep:prompt_toolkit.clipboard.InMemoryClipboard`
- `external-call::dep:prompt_toolkit.completion.DynamicCompleter`
- `external-call::dep:prompt_toolkit.completion.ThreadedCompleter`
- `external-call::dep:prompt_toolkit.cursor_shapes.DynamicCursorShapeConfig`
- `external-call::dep:prompt_toolkit.filters.Condition`
- `external-call::dep:prompt_toolkit.filters.has_focus`
- `external-call::dep:prompt_toolkit.filters.is_true`
- `external-call::dep:prompt_toolkit.formatted_text.Template`
- `external-call::dep:prompt_toolkit.formatted_text.fragment_list_len`
- `external-call::dep:prompt_toolkit.formatted_text.fragment_list_to_text`
- `external-call::dep:prompt_toolkit.formatted_text.merge_formatted_text`
- `external-call::dep:prompt_toolkit.formatted_text.to_formatted_text`
- `external-call::dep:prompt_toolkit.formatted_text.utils.fragment_list_len`
- `external-call::dep:prompt_toolkit.formatted_text.utils.fragment_list_to_text`
- `external-call::dep:prompt_toolkit.input.DummyInput`
- `external-call::dep:prompt_toolkit.key_binding.bindings.auto_suggest.load_auto_suggest_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.basic.load_basic_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.completion.display_completions_like_readline`
- `external-call::dep:prompt_toolkit.key_binding.bindings.cpr.load_cpr_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_search_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_shift_selection_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.mouse.load_mouse_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.open_in_editor.load_open_in_editor_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.vi.load_vi_bindings`
- `external-call::dep:prompt_toolkit.key_binding.bindings.vi.load_vi_search_bindings`
- `external-call::dep:prompt_toolkit.key_binding.defaults.load_key_bindings`
- `external-call::dep:prompt_toolkit.key_binding.key_bindings.ConditionalKeyBindings`
- `external-call::dep:prompt_toolkit.key_binding.key_bindings.DynamicKeyBindings`
- `external-call::dep:prompt_toolkit.key_binding.key_bindings.GlobalOnlyKeyBindings`
- `external-call::dep:prompt_toolkit.key_binding.key_bindings.KeyBindings`
- `external-call::dep:prompt_toolkit.key_binding.key_bindings.merge_key_bindings`
- `external-call::dep:prompt_toolkit.layout.ConditionalContainer`
- `external-call::dep:prompt_toolkit.layout.Float`
- `external-call::dep:prompt_toolkit.layout.FloatContainer`
- `external-call::dep:prompt_toolkit.layout.FormattedTextControl`
- `external-call::dep:prompt_toolkit.layout.HSplit`
- `external-call::dep:prompt_toolkit.layout.Layout`
- `external-call::dep:prompt_toolkit.layout.VSplit`
- `external-call::dep:prompt_toolkit.layout.Window`
- `external-call::dep:prompt_toolkit.layout.containers.ConditionalContainer`
- `external-call::dep:prompt_toolkit.layout.containers.DynamicContainer`
- `external-call::dep:prompt_toolkit.layout.containers.Float`
- `external-call::dep:prompt_toolkit.layout.containers.FloatContainer`
- `external-call::dep:prompt_toolkit.layout.containers.HSplit`
- `external-call::dep:prompt_toolkit.layout.containers.VSplit`
- `external-call::dep:prompt_toolkit.layout.containers.Window`
- `external-call::dep:prompt_toolkit.layout.containers.to_container`
- `external-call::dep:prompt_toolkit.layout.controls.BufferControl`
- `external-call::dep:prompt_toolkit.layout.controls.FormattedTextControl`
- `external-call::dep:prompt_toolkit.layout.controls.SearchBufferControl`
- `external-call::dep:prompt_toolkit.layout.controls.UIContent`
- `external-call::dep:prompt_toolkit.layout.dimension.Dimension`
- `external-call::dep:prompt_toolkit.layout.layout.Layout`
- `external-call::dep:prompt_toolkit.layout.layout.walk`
- `external-call::dep:prompt_toolkit.layout.margins.ConditionalMargin`
- `external-call::dep:prompt_toolkit.layout.margins.NumberedMargin`
- `external-call::dep:prompt_toolkit.layout.margins.ScrollbarMargin`
- `external-call::dep:prompt_toolkit.layout.menus.CompletionsMenu`
- `external-call::dep:prompt_toolkit.layout.menus.MultiColumnCompletionsMenu`
- `external-call::dep:prompt_toolkit.layout.processors.AfterInput`
- `external-call::dep:prompt_toolkit.layout.processors.AppendAutoSuggestion`
- `external-call::dep:prompt_toolkit.layout.processors.BeforeInput`
- `external-call::dep:prompt_toolkit.layout.processors.ConditionalProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.DisplayMultipleCursors`
- `external-call::dep:prompt_toolkit.layout.processors.DynamicProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.HighlightIncrementalSearchProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.HighlightSelectionProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.PasswordProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.ReverseSearchProcessor`
- `external-call::dep:prompt_toolkit.layout.processors.merge_processors`
- `external-call::dep:prompt_toolkit.layout.walk`
- `external-call::dep:prompt_toolkit.lexers.DynamicLexer`
- `external-call::dep:prompt_toolkit.lexers.SimpleLexer`
- `external-call::dep:prompt_toolkit.output.DummyOutput`
- `external-call::dep:prompt_toolkit.shortcuts.prompt.create_confirm_session`
- `external-call::dep:prompt_toolkit.styles.ConditionalStyleTransformation`
- `external-call::dep:prompt_toolkit.styles.DynamicStyle`
- `external-call::dep:prompt_toolkit.styles.DynamicStyleTransformation`
- `external-call::dep:prompt_toolkit.styles.Style`
- `external-call::dep:prompt_toolkit.styles.SwapLightAndDarkStyleTransformation`
- `external-call::dep:prompt_toolkit.styles.merge_style_transformations`
- `external-call::dep:prompt_toolkit.utils.get_cwidth`
- `external-call::dep:prompt_toolkit.validation.DynamicValidator`
- `external-call::dep:prompt_toolkit.widgets.Box`
- `external-call::dep:prompt_toolkit.widgets.Button`
- `external-call::dep:prompt_toolkit.widgets.CheckboxList`
- `external-call::dep:prompt_toolkit.widgets.Dialog`
- `external-call::dep:prompt_toolkit.widgets.Frame`
- `external-call::dep:prompt_toolkit.widgets.Label`
- `external-call::dep:prompt_toolkit.widgets.ProgressBar`
- `external-call::dep:prompt_toolkit.widgets.RadioList`
- `external-call::dep:prompt_toolkit.widgets.Shadow`
- `external-call::dep:prompt_toolkit.widgets.TextArea`
- `external-call::dep:prompt_toolkit.widgets.ValidationToolbar`
- `external-call::dep:prompt_toolkit.widgets.toolbars.SearchToolbar`
- `external-call::dep:prompt_toolkit.widgets.toolbars.SystemToolbar`
- `external-call::dep:prompt_toolkit.widgets.toolbars.ValidationToolbar`
- `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py`
- `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/_proxy.py`
- `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/container.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/application.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/dummy.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/completion/base.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/filters/app.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/filters/base.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/formatted_text/utils.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/basic.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/completion.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/emacs.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/page_navigation.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/search.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/vi.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/defaults.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/key_bindings.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/containers.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/controls.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/margins.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/menus.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/processors.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/screen.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/choice_input.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/dialogs.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/progress_bar/base.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/progress_bar/formatters.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/prompt.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/utils.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/base.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/defaults.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/style.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/base.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/dialogs.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/menus.py`
- `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/toolbars.py`

## Key Files

| File | Symbols |
|------|---------|
| `external-call::dep:prompt_toolkit.application.Application` | prompt_toolkit.application.Application |
| `external-call::dep:prompt_toolkit.application.current.get_app` | prompt_toolkit.application.current.get_app |
| `external-call::dep:prompt_toolkit.application.run_in_terminal.in_terminal` | prompt_toolkit.application.run_in_terminal.in_terminal |
| `external-call::dep:prompt_toolkit.auto_suggest.DynamicAutoSuggest` | prompt_toolkit.auto_suggest.DynamicAutoSuggest |
| `external-call::dep:prompt_toolkit.buffer.Buffer` | prompt_toolkit.buffer.Buffer |
| `external-call::dep:prompt_toolkit.clipboard.DynamicClipboard` | prompt_toolkit.clipboard.DynamicClipboard |
| `external-call::dep:prompt_toolkit.clipboard.InMemoryClipboard` | prompt_toolkit.clipboard.InMemoryClipboard |
| `external-call::dep:prompt_toolkit.completion.DynamicCompleter` | prompt_toolkit.completion.DynamicCompleter |
| `external-call::dep:prompt_toolkit.completion.ThreadedCompleter` | prompt_toolkit.completion.ThreadedCompleter |
| `external-call::dep:prompt_toolkit.cursor_shapes.DynamicCursorShapeConfig` | prompt_toolkit.cursor_shapes.DynamicCursorShapeConfig |
| `external-call::dep:prompt_toolkit.filters.Condition` | prompt_toolkit.filters.Condition |
| `external-call::dep:prompt_toolkit.filters.has_focus` | prompt_toolkit.filters.has_focus |
| `external-call::dep:prompt_toolkit.filters.is_true` | prompt_toolkit.filters.is_true |
| `external-call::dep:prompt_toolkit.formatted_text.Template` | prompt_toolkit.formatted_text.Template |
| `external-call::dep:prompt_toolkit.formatted_text.fragment_list_len` | prompt_toolkit.formatted_text.fragment_list_len |
| `external-call::dep:prompt_toolkit.formatted_text.fragment_list_to_text` | prompt_toolkit.formatted_text.fragment_list_to_text |
| `external-call::dep:prompt_toolkit.formatted_text.merge_formatted_text` | prompt_toolkit.formatted_text.merge_formatted_text |
| `external-call::dep:prompt_toolkit.formatted_text.to_formatted_text` | prompt_toolkit.formatted_text.to_formatted_text |
| `external-call::dep:prompt_toolkit.formatted_text.utils.fragment_list_len` | prompt_toolkit.formatted_text.utils.fragment_list_len |
| `external-call::dep:prompt_toolkit.formatted_text.utils.fragment_list_to_text` | prompt_toolkit.formatted_text.utils.fragment_list_to_text |
| `external-call::dep:prompt_toolkit.input.DummyInput` | prompt_toolkit.input.DummyInput |
| `external-call::dep:prompt_toolkit.key_binding.bindings.auto_suggest.load_auto_suggest_bindings` | prompt_toolkit.key_binding.bindings.auto_suggest.load_auto_suggest_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.basic.load_basic_bindings` | prompt_toolkit.key_binding.bindings.basic.load_basic_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.completion.display_completions_like_readline` | prompt_toolkit.key_binding.bindings.completion.display_completions_like_readline |
| `external-call::dep:prompt_toolkit.key_binding.bindings.cpr.load_cpr_bindings` | prompt_toolkit.key_binding.bindings.cpr.load_cpr_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_bindings` | prompt_toolkit.key_binding.bindings.emacs.load_emacs_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_search_bindings` | prompt_toolkit.key_binding.bindings.emacs.load_emacs_search_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.emacs.load_emacs_shift_selection_bindings` | prompt_toolkit.key_binding.bindings.emacs.load_emacs_shift_selection_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.mouse.load_mouse_bindings` | prompt_toolkit.key_binding.bindings.mouse.load_mouse_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.open_in_editor.load_open_in_editor_bindings` | prompt_toolkit.key_binding.bindings.open_in_editor.load_open_in_editor_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.vi.load_vi_bindings` | prompt_toolkit.key_binding.bindings.vi.load_vi_bindings |
| `external-call::dep:prompt_toolkit.key_binding.bindings.vi.load_vi_search_bindings` | prompt_toolkit.key_binding.bindings.vi.load_vi_search_bindings |
| `external-call::dep:prompt_toolkit.key_binding.defaults.load_key_bindings` | prompt_toolkit.key_binding.defaults.load_key_bindings |
| `external-call::dep:prompt_toolkit.key_binding.key_bindings.ConditionalKeyBindings` | prompt_toolkit.key_binding.key_bindings.ConditionalKeyBindings |
| `external-call::dep:prompt_toolkit.key_binding.key_bindings.DynamicKeyBindings` | prompt_toolkit.key_binding.key_bindings.DynamicKeyBindings |
| `external-call::dep:prompt_toolkit.key_binding.key_bindings.GlobalOnlyKeyBindings` | prompt_toolkit.key_binding.key_bindings.GlobalOnlyKeyBindings |
| `external-call::dep:prompt_toolkit.key_binding.key_bindings.KeyBindings` | prompt_toolkit.key_binding.key_bindings.KeyBindings |
| `external-call::dep:prompt_toolkit.key_binding.key_bindings.merge_key_bindings` | prompt_toolkit.key_binding.key_bindings.merge_key_bindings |
| `external-call::dep:prompt_toolkit.layout.ConditionalContainer` | prompt_toolkit.layout.ConditionalContainer |
| `external-call::dep:prompt_toolkit.layout.Float` | prompt_toolkit.layout.Float |
| `external-call::dep:prompt_toolkit.layout.FloatContainer` | prompt_toolkit.layout.FloatContainer |
| `external-call::dep:prompt_toolkit.layout.FormattedTextControl` | prompt_toolkit.layout.FormattedTextControl |
| `external-call::dep:prompt_toolkit.layout.HSplit` | prompt_toolkit.layout.HSplit |
| `external-call::dep:prompt_toolkit.layout.Layout` | prompt_toolkit.layout.Layout |
| `external-call::dep:prompt_toolkit.layout.VSplit` | prompt_toolkit.layout.VSplit |
| `external-call::dep:prompt_toolkit.layout.Window` | prompt_toolkit.layout.Window |
| `external-call::dep:prompt_toolkit.layout.containers.ConditionalContainer` | prompt_toolkit.layout.containers.ConditionalContainer |
| `external-call::dep:prompt_toolkit.layout.containers.DynamicContainer` | prompt_toolkit.layout.containers.DynamicContainer |
| `external-call::dep:prompt_toolkit.layout.containers.Float` | prompt_toolkit.layout.containers.Float |
| `external-call::dep:prompt_toolkit.layout.containers.FloatContainer` | prompt_toolkit.layout.containers.FloatContainer |
| `external-call::dep:prompt_toolkit.layout.containers.HSplit` | prompt_toolkit.layout.containers.HSplit |
| `external-call::dep:prompt_toolkit.layout.containers.VSplit` | prompt_toolkit.layout.containers.VSplit |
| `external-call::dep:prompt_toolkit.layout.containers.Window` | prompt_toolkit.layout.containers.Window |
| `external-call::dep:prompt_toolkit.layout.containers.to_container` | prompt_toolkit.layout.containers.to_container |
| `external-call::dep:prompt_toolkit.layout.controls.BufferControl` | prompt_toolkit.layout.controls.BufferControl |
| `external-call::dep:prompt_toolkit.layout.controls.FormattedTextControl` | prompt_toolkit.layout.controls.FormattedTextControl |
| `external-call::dep:prompt_toolkit.layout.controls.SearchBufferControl` | prompt_toolkit.layout.controls.SearchBufferControl |
| `external-call::dep:prompt_toolkit.layout.controls.UIContent` | prompt_toolkit.layout.controls.UIContent |
| `external-call::dep:prompt_toolkit.layout.dimension.Dimension` | prompt_toolkit.layout.dimension.Dimension |
| `external-call::dep:prompt_toolkit.layout.layout.Layout` | prompt_toolkit.layout.layout.Layout |
| `external-call::dep:prompt_toolkit.layout.layout.walk` | prompt_toolkit.layout.layout.walk |
| `external-call::dep:prompt_toolkit.layout.margins.ConditionalMargin` | prompt_toolkit.layout.margins.ConditionalMargin |
| `external-call::dep:prompt_toolkit.layout.margins.NumberedMargin` | prompt_toolkit.layout.margins.NumberedMargin |
| `external-call::dep:prompt_toolkit.layout.margins.ScrollbarMargin` | prompt_toolkit.layout.margins.ScrollbarMargin |
| `external-call::dep:prompt_toolkit.layout.menus.CompletionsMenu` | prompt_toolkit.layout.menus.CompletionsMenu |
| `external-call::dep:prompt_toolkit.layout.menus.MultiColumnCompletionsMenu` | prompt_toolkit.layout.menus.MultiColumnCompletionsMenu |
| `external-call::dep:prompt_toolkit.layout.processors.AfterInput` | prompt_toolkit.layout.processors.AfterInput |
| `external-call::dep:prompt_toolkit.layout.processors.AppendAutoSuggestion` | prompt_toolkit.layout.processors.AppendAutoSuggestion |
| `external-call::dep:prompt_toolkit.layout.processors.BeforeInput` | prompt_toolkit.layout.processors.BeforeInput |
| `external-call::dep:prompt_toolkit.layout.processors.ConditionalProcessor` | prompt_toolkit.layout.processors.ConditionalProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.DisplayMultipleCursors` | prompt_toolkit.layout.processors.DisplayMultipleCursors |
| `external-call::dep:prompt_toolkit.layout.processors.DynamicProcessor` | prompt_toolkit.layout.processors.DynamicProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.HighlightIncrementalSearchProcessor` | prompt_toolkit.layout.processors.HighlightIncrementalSearchProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.HighlightSelectionProcessor` | prompt_toolkit.layout.processors.HighlightSelectionProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.PasswordProcessor` | prompt_toolkit.layout.processors.PasswordProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.ReverseSearchProcessor` | prompt_toolkit.layout.processors.ReverseSearchProcessor |
| `external-call::dep:prompt_toolkit.layout.processors.merge_processors` | prompt_toolkit.layout.processors.merge_processors |
| `external-call::dep:prompt_toolkit.layout.walk` | prompt_toolkit.layout.walk |
| `external-call::dep:prompt_toolkit.lexers.DynamicLexer` | prompt_toolkit.lexers.DynamicLexer |
| `external-call::dep:prompt_toolkit.lexers.SimpleLexer` | prompt_toolkit.lexers.SimpleLexer |
| `external-call::dep:prompt_toolkit.output.DummyOutput` | prompt_toolkit.output.DummyOutput |
| `external-call::dep:prompt_toolkit.shortcuts.prompt.create_confirm_session` | prompt_toolkit.shortcuts.prompt.create_confirm_session |
| `external-call::dep:prompt_toolkit.styles.ConditionalStyleTransformation` | prompt_toolkit.styles.ConditionalStyleTransformation |
| `external-call::dep:prompt_toolkit.styles.DynamicStyle` | prompt_toolkit.styles.DynamicStyle |
| `external-call::dep:prompt_toolkit.styles.DynamicStyleTransformation` | prompt_toolkit.styles.DynamicStyleTransformation |
| `external-call::dep:prompt_toolkit.styles.Style` | prompt_toolkit.styles.Style |
| `external-call::dep:prompt_toolkit.styles.SwapLightAndDarkStyleTransformation` | prompt_toolkit.styles.SwapLightAndDarkStyleTransformation |
| `external-call::dep:prompt_toolkit.styles.merge_style_transformations` | prompt_toolkit.styles.merge_style_transformations |
| `external-call::dep:prompt_toolkit.utils.get_cwidth` | prompt_toolkit.utils.get_cwidth |
| `external-call::dep:prompt_toolkit.validation.DynamicValidator` | prompt_toolkit.validation.DynamicValidator |
| `external-call::dep:prompt_toolkit.widgets.Box` | prompt_toolkit.widgets.Box |
| `external-call::dep:prompt_toolkit.widgets.Button` | prompt_toolkit.widgets.Button |
| `external-call::dep:prompt_toolkit.widgets.CheckboxList` | prompt_toolkit.widgets.CheckboxList |
| `external-call::dep:prompt_toolkit.widgets.Dialog` | prompt_toolkit.widgets.Dialog |
| `external-call::dep:prompt_toolkit.widgets.Frame` | prompt_toolkit.widgets.Frame |
| `external-call::dep:prompt_toolkit.widgets.Label` | prompt_toolkit.widgets.Label |
| `external-call::dep:prompt_toolkit.widgets.ProgressBar` | prompt_toolkit.widgets.ProgressBar |
| `external-call::dep:prompt_toolkit.widgets.RadioList` | prompt_toolkit.widgets.RadioList |
| `external-call::dep:prompt_toolkit.widgets.Shadow` | prompt_toolkit.widgets.Shadow |
| `external-call::dep:prompt_toolkit.widgets.TextArea` | prompt_toolkit.widgets.TextArea |
| `external-call::dep:prompt_toolkit.widgets.ValidationToolbar` | prompt_toolkit.widgets.ValidationToolbar |
| `external-call::dep:prompt_toolkit.widgets.toolbars.SearchToolbar` | prompt_toolkit.widgets.toolbars.SearchToolbar |
| `external-call::dep:prompt_toolkit.widgets.toolbars.SystemToolbar` | prompt_toolkit.widgets.toolbars.SystemToolbar |
| `external-call::dep:prompt_toolkit.widgets.toolbars.ValidationToolbar` | prompt_toolkit.widgets.toolbars.ValidationToolbar |
| `os_venv/lib/python3.12/site-packages/cmd2/cmd2.py` | session |
| `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/_proxy.py` | find_container, attrs, name_or_id, container, ignore_missing, ... |
| `os_venv/lib/python3.12/site-packages/openstack/key_manager/v1/container.py` | Container |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/application.py` | _key_bindings, current_window, conditional_pygments_style, current_buffer, other_controls, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/application/dummy.py` | __init__ |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/completion/base.py` | start_position, style, __init__, display_meta, text, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/filters/app.py` | control_is_searchable, has_arg, emacs_insert_mode, is_read_only, vi_replace_mode, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/filters/base.py` | Condition, __call__, func, __repr__, __init__ |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/formatted_text/utils.py` | fragment_list_width, fragments |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/basic.py` | has_text_before_cursor, in_quoted_insert |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/completion.py` | _display_completions_like_readline, page, _create_more_session, completions, run_compl, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/emacs.py` | is_arg, is_returnable, load_emacs_search_bindings |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/page_navigation.py` | load_vi_page_navigation_bindings, load_page_navigation_bindings, load_emacs_page_navigation_bindings |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/search.py` | _previous_buffer_is_returnable |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/bindings/vi.py` | load_vi_search_bindings, tilde_operator, search_buffer_is_empty, is_returnable, digraph_symbol_1_given, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/defaults.py` | load_key_bindings |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/key_binding/key_bindings.py` | KeyBindingsBase |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/containers.py` | get_topmost_visible, get_line_height, scroll_offset_end, _scroll_without_linewrapping, get_min_vertical_scroll, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/controls.py` | get_line, lineno, __getitem__, i, get_line_prefix, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/margins.py` | get_width, get_ui_content |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/menus.py` | move, right, preferred_height, max_available_height, preferred_height, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/processors.py` | apply_transformation, ReverseSearchProcessor, apply_transformation, style, get_char, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/layout/screen.py` | char, style, __init__ |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/choice_input.py` | ChoiceInput, create_default_choice_input_style, prompt, __init__, show_frame, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/dialogs.py` | text, text, style, values, cancel_text, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/progress_bar/base.py` | create_content, width, run, __enter__, height |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/progress_bar/formatters.py` | text, sym_a, style, __init__, end, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/prompt.py` | auto_suggest, _create_prompt_bindings, color_depth, prompt_continuation, complete_while_typing, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/shortcuts/utils.py` | style, include_default_pygments_style, print_container, file, style, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/base.py` | BaseStyle |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/defaults.py` | default_ui_style |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/styles/style.py` | merge_styles, styles |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/base.py` | select_character, _handle_enter, char, width, body, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/dialogs.py` | __pt_container__, modal, with_background, __init__, Dialog, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/menus.py` | text, menu_items, one_item, __init__, disabled, ... |
| `os_venv/lib/python3.12/site-packages/prompt_toolkit/widgets/toolbars.py` | width, CompletionsToolbar, __init__, enable_global_bindings, __pt_container__, ... |

## Connected Communities

- **. +7 dirs · prompt_toolkit.filters.to_filter** (7 cross-edges)
- **. +37 dirs · cast** (4 cross-edges)
- **. +13 dirs · run_async** (2 cross-edges)
- **site-packages/prompt_toolkit +3 dirs** (2 cross-edges)
- **prompt_toolkit/layout +1 dirs · _copy_body** (2 cross-edges)
- **shortcuts/progress_bar +1 dirs** (2 cross-edges)
- **prompt_toolkit/styles +2 dirs** (2 cross-edges)
- **network/v2 +65 dirs** (2 cross-edges)
- **. +2 dirs · preferred_height** (2 cross-edges)
- **. +18 dirs · append** (2 cross-edges)
- **. +9 dirs · partial** (2 cross-edges)
- **. +4 dirs · partial** (2 cross-edges)
- **. +3 dirs · Output** (1 cross-edges)
- **shortcuts/progress_bar +2 dirs** (1 cross-edges)
- **. +2 dirs · format** (1 cross-edges)
- **shortcuts/progress_bar · format · formatters (10)** (1 cross-edges)
- **. +2 dirs · _create_merged_style** (1 cross-edges)
- **. +2 dirs · run_command** (1 cross-edges)
- **network/v2 +30 dirs** (1 cross-edges)
- **prompt_toolkit/layout · _content** (1 cross-edges)
- **prompt_toolkit/input +1 dirs · add_win32_handle** (1 cross-edges)
- **. +2 dirs · load_vi_bindings** (1 cross-edges)

## How to Explore

```
get_communities with id: "community-5948"
smart_context with task: "understand . +13 dirs · prompt_toolkit.application.curr…", format: "gcx"
```

_`format: "gcx"` returns the [GCX1 compact wire format](../../docs/wire-format.md) — round-trippable, ~27% fewer tokens than JSON. Drop it for JSON output; agents using `@gortex/wire` or the Go `github.com/gortexhq/gcx-go` package decode either._
