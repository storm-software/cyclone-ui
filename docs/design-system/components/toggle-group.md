---
title: Toggle group
description: A row of toggle buttons in one shared frame. It selects one value by default, or several with the multiple prop.
documentType: reference
tags: [component, toggle-group, toggle, form]
---

# Toggle group

`ToggleGroup` holds a row of [`Toggle`](./toggle.md) buttons in one sunken frame. The group owns the selection. Each `ToggleGroup.Item` adds its `value` to it.

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
| `invalid` | `boolean` | `false` | Switches to the `danger` theme. |
| `disabled` | `boolean` | `false` | Disables every item. |
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
- **Item style:** Each item takes its size, `invalid`, `borderless`, and `rounded` settings from the group. A selected item shows the raised indicator of a `Toggle`.
- **Disabled:** The group disables every item. An item can also set its own `disabled`.

The stories show `Base`, `Icons`, `Multiple`, `Controlled`, `Sizes`, `Fluid`, `Borderless`, `Rounded`, `Invalid`, and `Disabled`.

## Accessibility

- The frame has `role="group"`. It sets `aria-invalid` and `aria-disabled` when those states are on.
- Each item is a `Toggle`, so it is a `button` with `aria-pressed`.
- The source adds no group label. Add an `aria-label` to the group.

## Related

- [Design tokens](../tokens/index.md)
- [Toggle](./toggle.md)
- [Tabs](./tabs.md)

## Source

- [`components/toggle-group/src/ToggleGroup.tsx`](../../../components/toggle-group/src/ToggleGroup.tsx)
- [`components/toggle-group/src/ToggleGroup.test.tsx`](../../../components/toggle-group/src/ToggleGroup.test.tsx)
- [`components/toggle-group/src/ToggleGroup.stories.tsx`](../../../components/toggle-group/src/ToggleGroup.stories.tsx)
