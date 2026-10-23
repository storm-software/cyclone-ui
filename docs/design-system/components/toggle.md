---
title: Toggle
description: A button that switches between an on and an off state. A raised indicator inside a sunken frame shows the on state.
documentType: reference
tags: [component, toggle, button, form]
---

# Toggle

`Toggle` is a button with two states, pressed and not pressed. The pressed state shows as a raised indicator inside a sunken frame. Use it for a single on/off choice that acts like a button. For a set of related choices, use [`ToggleGroup`](./toggle-group.md).

## Import

```tsx
import { Toggle } from "@cyclone-ui/toggle";
```

## Usage

```tsx
import { Toggle } from "@cyclone-ui/toggle";

export function Example() {
  return (
    <Toggle defaultPressed onPressedChange={pressed => console.log(pressed)}>
      Bold
    </Toggle>
  );
}
```

`children` can be a function. It receives the pressed state, so you can show different content for each state:

```tsx
<Toggle>{pressed => (pressed ? "On" : "Off")}</Toggle>
```

A string or number child is wrapped in styled `ToggleText`. Any other child renders as is.

## Props

`ToggleProps` is the Tamagui frame props, without `children`, `role`, `onPress`, and `frameSize`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `pressed` | `boolean` | — | The pressed state. Setting it makes the toggle controlled. |
| `defaultPressed` | `boolean` | `false` | The initial state when uncontrolled. |
| `onPressedChange` | `(pressed: boolean) => void` | — | Called with the new state on press. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size. |
| `children` | `ReactNode \| (pressed: boolean) => ReactNode` | — | The content. |
| `fluid` | `boolean` | `false` | Spans the parent width. |
| `borderless` | `boolean` | `false` | Hides the border and background. A transparent 1px border stays, so the size does not change. |
| `rounded` | `boolean` | `false` | Uses pill-shaped corners. |
| `circular` | `boolean` | `false` | Uses a circle with a square box from the size token. |
| `invalid` | `boolean` | `false` | Switches to the `danger` theme. |
| `disabled` | `boolean` | `false` | Sets opacity to `0.5`, shows a `not-allowed` cursor, and ignores presses. |
| `pressedBackgroundColor` | `string` | `"subtle"` | The indicator color when pressed and `borderless`. |

The package also exports `ToggleText`, `getToggleInset(size)`, and the `ToggleSize` type. `getToggleInset` returns the gap between the frame and the inner indicator. It is `2.5` times the size scale.

## Variants and states

- **Not pressed:** The frame uses a `sunken` background and a `hairline` border. The text is `subtle`. Hover changes the background to `sunken-hovered` and the text to `ink`.
- **Pressed:** The indicator uses a `surface` background, a `hairline` border, and an `sm` shadow. The text is `emphasis`.
- **Focus:** A keyboard focus shows a `ring-offset` shadow.
- **Sizes:** `sm`, `md`, and `lg`. The frame height comes from the form size token.

The stories show `Base`, `Icon`, `RenderProps`, `Controlled`, `Sizes`, `Fluid`, `Borderless`, `Rounded`, `Circular`, `Invalid`, and `Disabled`.

## Accessibility

- The frame is a native `button`.
- `aria-pressed` reflects the state. `aria-invalid` is set when `invalid` is true.
- An icon-only toggle needs a label. The `Icon` story sets `aria-label`.
- The tests check `aria-pressed`, `aria-invalid`, and `disabled` in the rendered HTML.

## Related

- [Design tokens](../tokens/index.md)
- [Toggle group](./toggle-group.md)
- [Switch](./switch.md)

## Source

- [`components/toggle/src/Toggle.tsx`](../../../components/toggle/src/Toggle.tsx)
- [`components/toggle/src/Toggle.test.tsx`](../../../components/toggle/src/Toggle.test.tsx)
- [`components/toggle/src/Toggle.stories.tsx`](../../../components/toggle/src/Toggle.stories.tsx)
