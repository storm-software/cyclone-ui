---
title: Search Input
description: A search text input with a magnifying-glass icon and a keyboard-navigable list of suggestions.
documentType: reference
tags: [component, form, input, search]
component:
  name: search-input
  package: "@cyclone-ui/search-input"
  stories:
    - title: Form/SearchInput
      file: components/search-input/src/SearchInput.stories.tsx
---

# Search Input

`SearchInput` is a search field built on [Input](./input.md). It shows an icon and a popover of suggestions. The popover uses the same context menu as [Select](./select.md).

It works alone, as a controlled input (`value` and `onChange`), or inside a `Field`. Inside a `Field`, it is clearable by default.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add search-input
pnpm install
```

- **File:** `SearchInput.tsx`. The CLI writes it to `<path>/search-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { SearchInput } from "@cyclone-ui/search-input";
```

## Usage

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { SearchInput } from "@cyclone-ui/search-input";

<Form name="search" initialValues={{ query: "" }}>
  <Field name="query">
    <Field.Label>Label Text</Field.Label>
    <SearchInput suggestions={["Apple", "Pear", "Peach"]}>
      <SearchInput.TextBox />
    </SearchInput>
  </Field>
</Form>;
```

## Anatomy

```tsx
<SearchInput suggestions={suggestions}>
  <SearchInput.TextBox icon={<Search />} />
  <SearchInput.Trigger aria-label="Filter">
    <SearchInput.Trigger.Icon>{icon}</SearchInput.Trigger.Icon>
  </SearchInput.Trigger>
</SearchInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `SearchInput` | An [`Input`](./input.md) (a Tamagui `XStack` frame) | The root. It holds the value and the suggestion options. Inside a `Field`, it connects to the field and makes the field clearable by default. |
| `SearchInput.TextBox` | An `Input.TextBox` that is the anchor of a [`ContextMenu`](./context-menu.md). It holds a `Field.Icon`, an `Input.TextBox.Value` as `<input role="combobox">`, and the children. | The text box. It shows the icon at the start and opens the list of suggestions under it. |
| Suggestion list (no part of its own) | `ContextMenu.Content` with a scroll view that has `role="listbox"`, and one `ContextMenu.Item` (a `<button>`) with `role="option"` for each suggestion | The suggestions that match the typed text. The list always uses the `base` theme and is at least as wide as the text box, plus `4px` on each side. It stays a popover on small screens. |
| `SearchInput.Trigger` | `Input.Trigger`: a `link` [`Button`](./button.md) with `Icon` and `Text` parts | An optional button in the input frame. |

`SearchInputTextBox` and `SearchInputTrigger` are also exported by name. Use them in React Server Components, which cannot read `SearchInput.TextBox` from a client module.

## Examples

The examples are the stories in [`SearchInput.stories.tsx`](../../../components/search-input/src/SearchInput.stories.tsx). Each story puts the search input in a `Form` and a `Field`.

| Stories | What they show |
| --- | --- |
| `Base` | The default search input with the search icon and the `Search...` placeholder. |
| `CustomIcon`, `NoIcon` | A `Filter` icon, and no icon (`icon={null}`). |
| `Required`, `Disabled`, `DefaultValue` | A required field, a disabled field, and a field that starts with text. |
| `Description` | A label above the field and a long `Field.Details` description that wraps. |
| `AutoComplete` | A list of 22 fruit suggestions. The play function types `ap`, chooses Apricot with the pointer, then types `bl` and chooses Blueberry with **Down arrow**, **Down arrow**, and **Enter**. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows it before blur. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

### `SearchInput`

`SearchInputProps` is the [Input](./input.md) props (without `value` and `defaultValue`) plus the props below. The package also exports these props as `SearchInputExtraProps`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `suggestions` | `readonly string[]` | `[]` | Values offered while the user types. Matching is case-insensitive. Duplicates and a suggestion equal to the typed text are not shown. |
| `filterSuggestions` | `boolean` | `true` | Offers only suggestions that contain the typed text. Turn it off when the suggestions are already matched, for example by a search API. |
| `renderSuggestion` | `(suggestion: string, query: string) => ReactNode` | Suggestion on one line, typed words highlighted | Draws a suggestion row. |
| `value` | `string` | — | The controlled value. Inside a `Field`, the field value is used. |
| `defaultValue` | `string` | — | The initial value when uncontrolled and outside a `Field`. |
| `readOnly` | `boolean` | `false` (the field state inside a `Field`) | Ignores changes and does not show suggestions. |

### `SearchInput.TextBox`

It accepts the `Input.TextBox` props, `aria-label`, and `placeholder`, plus:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `<Search />` | The icon at the start. Pass `null` to hide it. |
| `placeholder` | `string` | `"Search..."` | The placeholder of the text entry. |

### `highlightMatches`

`highlightMatches(text: string, query: string): ReactNode` returns `text` with each word of `query` in a bold `<mark>`. Use it in a custom `renderSuggestion` to match the default rows.

## Keyboard

- The list opens when the typed text is not empty and some suggestions match.
- **Down arrow** and **up arrow** highlight the next and previous suggestion. They wrap at the ends and open the list.
- **Enter** chooses the highlighted suggestion while the list is open.
- **Escape** closes the list.
- Focus stays in the text entry. A click on a suggestion does not move focus.

## Accessibility

The text entry has `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, and, while the list is open, `aria-controls`. `aria-activedescendant` points to the highlighted suggestion. Each suggestion has `role="option"`, `tabIndex={-1}`, and `aria-selected` when it is highlighted.

## Variants and states

The stories show the default icon, a custom icon (`Filter`), no icon, required, disabled, a default value, autocomplete, the sizes `sm`, `md`, and `lg`, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Input](./input.md)
- [Select](./select.md)
- [SearchDialog](./search-dialog.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/search-input/src/SearchInput.tsx`](../../../components/search-input/src/SearchInput.tsx)
- [`components/search-input/src/SearchInput.stories.tsx`](../../../components/search-input/src/SearchInput.stories.tsx)
