---
title: Toggle Group
description: A row of toggle buttons in one shared frame. It selects one value by default, or several with the multiple prop.
documentType: reference
tags: [component, toggle-group, toggle, form]
component:
  name: toggle-group
  package: "@cyclone-ui/toggle-group"
  stories:
    - title: Triggers/ToggleGroup
      file: components/toggle-group/src/ToggleGroup.stories.tsx
---

# Toggle Group

`ToggleGroup` holds a row of [`Toggle`](./toggle.md) buttons in one sunken frame. The group owns the selection. Each `ToggleGroup.Item` adds its `value` to it.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add toggle-group
pnpm install
```

- **File:** `ToggleGroup.tsx`. The CLI writes it to `<path>/toggle-group/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md), [Icons](../icons/index.md), and [Toggle](./toggle.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ToggleGroup } from "@cyclone-ui/toggle-group";
import { getNextSelection } from "@cyclone-ui/toggle-group";
```

## Usage

```tsx
import { ToggleGroup } from "@cyclone-ui/toggle-group";

export function Example() {
  return (
    <ToggleGroup
      defaultValue="week"
      onValueChange={value => console.log(value)}>
      <ToggleGroup.Item value="day">Day</ToggleGroup.Item>
      <ToggleGroup.Item value="week">Week</ToggleGroup.Item>
      <ToggleGroup.Item value="month">Month</ToggleGroup.Item>
    </ToggleGroup>
  );
}
```

Set `multiple` to allow more than one selected item. The value is then a `string[]`.

## Anatomy

```tsx
<ToggleGroup>
  <ToggleGroup.Item value="a">A</ToggleGroup.Item>
  <ToggleGroup.Item value="b">B</ToggleGroup.Item>
</ToggleGroup>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ToggleGroup` | A Tamagui `View` with `role="group"` | The shared sunken frame. It holds the selection and shares the size, variant, and states with its items. It sets `aria-invalid`, `aria-disabled`, and `aria-readonly` when those states are on. |
| `ToggleGroup.Item` | A [`Toggle`](./toggle.md): a `<button>` with `aria-pressed` | One choice. It has no own border or inset, so the group stays as tall as a standalone toggle. It is pressed while its `value` is in the selection. |

`ToggleGroupItem` is also exported by name. Use it in React Server Components, which cannot read `ToggleGroup.Item` from a client module.

## Examples

The examples are the stories in [`ToggleGroup.stories.tsx`](../../../components/toggle-group/src/ToggleGroup.stories.tsx). Most stories render three text items: Left, Center, and Right.

| Stories | What they show |
| --- | --- |
| `Base` | Single selection that starts on Left. The play function selects Center, then presses it again to clear it, and checks `aria-pressed`. |
| `Icons` | Four icon-only alignment items with `aria-label`s and `allowEmpty={false}`, so one item always stays selected. |
| `Multiple` | `multiple` selection of Bold, Italic, and Underline. The play function selects two items. |
| `Controlled` | `value` and `onValueChange` from React state, with the value shown as text. |
| `Sizes` | The `sm`, `md`, and `lg` sizes. |
| `Fluid`, `Borderless`, `Rounded` | The `fluid`, `borderless`, and `rounded` frames. |
| `Invalid` | A controlled group that is `invalid` while nothing is selected. |
| `Disabled` | A disabled group, and a group with one disabled item. The play function checks which buttons are disabled. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, and the `PrimaryBorderless` through `OutlinedBorderless` versions | Each colored `variant`, with and without the frame. |
| `Surface`, `Raised`, `Flat` | The `surface` variant, `raised` on the `elevated` variant, and `flat` on the `surface` variant. |

## Props

`ToggleGroupProps` is the Tamagui frame props plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `false` | Allows several selected items. |
| `value` | `string \| string[] \| null` | — | The selection. Setting it makes the group controlled. |
| `defaultValue` | `string \| string[] \| null` | — | The initial selection when uncontrolled. |
| `onValueChange` | `(value: string \| string[] \| null) => void` | — | Called with the new selection. It receives an array when `multiple` is set. Otherwise it receives a string or `null`. |
| `allowEmpty` | `boolean` | `true` | Lets the user clear the last selected item. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The size of every item. |
| `variant` | [Container](./container.md) variant | — | Every item's indicator colors, as on [Toggle](./toggle.md). The shared frame stays `sunken`. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | — | Every item's indicator shadow, as on Toggle. |
| `invalid` | `boolean` | `false` | Switches to the `danger` theme. |
| `disabled` | `boolean` | `false` | Disables every item. When unset, it comes from the enclosing form control, if there is one. |
| `readOnly` | `boolean` | `false` | Ignores presses without the disabled style. Sets `aria-readonly` on the group and every item. When unset, it comes from the enclosing form control, if there is one. |
| `fluid` | `boolean` | `false` | Spans the parent width. The items share it evenly. |
| `borderless` | `boolean` | `false` | Removes the frame border and background. |
| `rounded` | `boolean` | `false` | Uses pill-shaped corners. |

### `ToggleGroup.Item`

`ToggleGroupItemProps` is `ToggleProps` without `pressed`, `defaultPressed`, `onPressedChange`, `size`, and `fluid`. It adds one prop:

| Prop | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value this item adds to the selection. |

An item that renders outside a `ToggleGroup` throws an error.

### `getNextSelection`

`getNextSelection(selected, value, multiple, allowEmpty)` returns the next selection array after a press. It returns `undefined` when the press is rejected. A press is rejected when it would remove the last value and `allowEmpty` is `false`.

## Variants and states

- **Frame:** A `hairline` border, a `sunken` background, and the `tabs` radius. The gap and padding use the same inset as a standalone toggle.
- **Single selection:** Pressing an item selects it. Pressing the selected item clears it when `allowEmpty` is `true`.
- **Multiple selection:** Pressing an item adds it or removes it.
- **Item style:** Each item takes its size, `variant`, `shadowStyle`, `invalid`, `borderless`, and `rounded` settings from the group. A selected item shows the raised indicator of a `Toggle`.
- **Disabled:** The group disables every item. An item can also set its own `disabled`.
- **Read-only:** The selection does not change. An item can also set its own `readOnly`.

## Accessibility

- The frame has `role="group"`. It sets `aria-invalid`, `aria-disabled`, and `aria-readonly` when those states are on.
- Each item is a `Toggle`, so it is a `button` with `aria-pressed`. Each item is a separate Tab stop. The source adds no arrow-key navigation between items.
- The source adds no group label. Add an `aria-label` to the group.

## Related

- [Design tokens](../tokens/index.md)
- [Toggle](./toggle.md)
- [Tabs](./tabs.md)

## Source

- [`components/toggle-group/src/ToggleGroup.tsx`](../../../components/toggle-group/src/ToggleGroup.tsx)
- [`components/toggle-group/src/ToggleGroup.test.tsx`](../../../components/toggle-group/src/ToggleGroup.test.tsx)
- [`components/toggle-group/src/ToggleGroup.stories.tsx`](../../../components/toggle-group/src/ToggleGroup.stories.tsx)
