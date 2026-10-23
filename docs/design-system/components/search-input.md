---
title: SearchInput
description: A search text input with a magnifying-glass icon and a keyboard-navigable list of suggestions.
documentType: reference
tags: [component, form, input, search]
---

# SearchInput

`SearchInput` is a search field built on [Input](./input.md). It shows an icon and a popover of suggestions. The popover uses the same context menu as [Select](./select.md).

It works alone, as a controlled input (`value` and `onChange`), or inside a `Field`. Inside a `Field`, it is clearable by default.

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

## Parts

| Part | Description |
| --- | --- |
| `SearchInput` | The root. |
| `SearchInput.TextBox` | The text box. It shows the icon. |
| `SearchInput.Trigger` | The `Input.Trigger`. |

## Props

### `SearchInput`

`SearchInputProps` is the [Input](./input.md) props (without `value` and `defaultValue`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `suggestions` | `readonly string[]` | `[]` | Values offered while the user types. Matching is case-insensitive. |
| `filterSuggestions` | `boolean` | `true` | Offers only suggestions that contain the typed text. Turn it off when the suggestions are already matched, for example by a search API. |
| `renderSuggestion` | `(suggestion: string) => ReactNode` | Suggestion on one line | Draws a suggestion row. |
| `value` | `string` | — | The controlled value. Inside a `Field`, the field value is used. |
| `defaultValue` | `string` | — | The initial value when uncontrolled and outside a `Field`. |

### `SearchInput.TextBox`

It accepts the `Input.TextBox` props, `aria-label`, and `placeholder`, plus:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `<MagnifyingGlass />` | The icon at the start. Pass `null` to hide it. |

## Keyboard

- Arrow keys highlight a suggestion.
- Enter chooses the highlighted suggestion.
- Escape closes the list.

## Accessibility

The text entry uses `aria-autocomplete="list"`, `aria-controls`, `aria-expanded`, and `aria-activedescendant`. Each suggestion sets `aria-selected`.

## Variants and states

The stories show the default icon, a custom icon (`Funnel`), no icon, required, disabled, a default value, autocomplete, the sizes `sm`, `md`, and `lg`, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Input](./input.md)
- [Select](./select.md)
- [SearchDialog](./search-dialog.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/search-input/src/SearchInput.tsx`](../../../components/search-input/src/SearchInput.tsx)
- [`components/search-input/src/SearchInput.stories.tsx`](../../../components/search-input/src/SearchInput.stories.tsx)
