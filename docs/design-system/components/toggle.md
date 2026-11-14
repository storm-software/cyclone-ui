---
title: Toggle
description: A button that switches between an on and an off state. A raised indicator inside a sunken frame shows the on state.
documentType: reference
tags: [component, toggle, button, form]
component:
  name: toggle
  package: "@cyclone-ui/toggle"
  stories:
    - title: Triggers/Toggle
      file: components/toggle/src/Toggle.stories.tsx
---

# Toggle

`Toggle` is a button with two states, pressed and not pressed. The pressed state shows as a raised indicator inside a sunken frame. Use it for a single on/off choice that acts like a button. For a set of related choices, use [`ToggleGroup`](./toggle-group.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add toggle
pnpm install
```

- **File:** `Toggle.tsx`. The CLI writes it to `<path>/toggle/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md) and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<Toggle>
  <ToggleText>Label</ToggleText>
</Toggle>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Toggle` | A Tamagui `View` as `<button>` with `aria-pressed` | The sunken frame. It holds the state, the size, and the press handler. It sets `aria-readonly` and `aria-invalid` when those states are on. |
| Indicator (internal) | A Tamagui `View` | Fills the frame inside an inset and holds the children. Without a `variant`, it is raised (a `surface` background, a border, and a shadow) only while pressed. With a `variant`, it draws a `ContainerBackground` layer of that variant in both states. |
| `ToggleText` | A Tamagui `Text` | The label. Its color changes on hover and while pressed. `Toggle` adds it for a string or number child. Use it yourself next to an icon in function children. |

The package also exports `getToggleInset(size)`, which returns the gap between the frame and the indicator.

## Examples

The examples are the stories in [`Toggle.stories.tsx`](../../../components/toggle/src/Toggle.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Base` | A text toggle. The play function toggles it with a click and with the Space key and checks `aria-pressed`. It also checks that the frame corners are rounder than the indicator corners. |
| `Icon`, `Circular` | An icon-only toggle with `aria-label="Bookmark"`. The star icon is filled while pressed. `Circular` shows it in a `circular` frame. |
| `RenderProps` | Function children: "On" and "Off" text, and an icon with `ToggleText` that change with the state (lock and volume icons). |
| `Controlled` | `pressed` and `onPressedChange` from React state, with the state shown as text. |
| `Sizes` | The `sm`, `md`, and `lg` sizes. |
| `Fluid`, `Borderless`, `Rounded` | The `fluid`, `borderless`, and `rounded` frames. |
| `Invalid` | A controlled toggle that is `invalid` until you press it. |
| `Disabled` | A disabled toggle. The play function checks that it is disabled and not pressed. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, and the `PrimaryBorderless` through `OutlinedBorderless` versions | Each colored `variant`, with and without the frame. |
| `PrimaryPressed`, `Surface`, `Floating`, `SurfacePressed` | More variants, and variants that start pressed. |
| `Raised`, `Flat`, `SurfaceFlat` | `shadowStyle` on a pressed toggle: `raised` on the `elevated` variant, and `flat` with no variant and on the `surface` variant. |

## Props

`ToggleProps` is the Tamagui frame props, without `children`, `role`, `onPress`, and `frameSize`, plus these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `pressed` | `boolean` | — | The pressed state. Setting it makes the toggle controlled. |
| `defaultPressed` | `boolean` | `false` | The initial state when uncontrolled. |
| `onPressedChange` | `(pressed: boolean) => void` | — | Called with the new state on press. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The control size. |
| `variant` | [Container](./container.md) variant | — | Draws the indicator as a Container of the variant, as [Button](./button.md) does, in its `-inactive` shade while off and `-active` shade while on. See below. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | — | The indicator's shadow while it shows. Without a `variant`, `flat` also hides the indicator's border. |
| `children` | `ReactNode \| (pressed: boolean) => ReactNode` | — | The content. |
| `fluid` | `boolean` | `false` | Spans the parent width. |
| `borderless` | `boolean` | `false` | Hides the border and background. A transparent 1px border stays, so the size does not change. |
| `rounded` | `boolean` | `false` | Uses pill-shaped corners. |
| `circular` | `boolean` | `false` | Uses a circle with a square box from the size token. |
| `invalid` | `boolean` | `false` | Switches to the `danger` theme. |
| `disabled` | `boolean` | `false` | Sets opacity to `0.5`, shows a `not-allowed` cursor, and ignores presses. When unset, it comes from the enclosing form control, if there is one. |
| `readOnly` | `boolean` | `false` | Ignores presses without the disabled style. Sets `aria-readonly`. When unset, it comes from the enclosing form control, if there is one. |
| `pressedBackgroundColor` | `string` | `"subtle"` | The indicator color when pressed and `borderless`, without a `variant`. |
| `hoveredBackgroundColor` | `string` | — | The indicator color on hover when not pressed, `borderless`, without a `variant`, and not disabled. |

The package also exports `ToggleText`, `getToggleInset(size)`, and the `ToggleSize` and `ToggleVariant` types. `getToggleInset` returns the gap between the frame and the inner indicator. It is `2.5` times the size scale.

## Variants and states

- **Not pressed:** The frame uses a `sunken` background and a `hairline` border. The text is `subtle`. Hover changes the background to `sunken-hovered` and the text to `ink`.
- **Pressed:** The indicator uses a `surface` background, a `hairline` border, and an `sm` shadow. The text is `emphasis`.
- **Variants:** `variant` draws the indicator as a [Container](./container.md) of the variant in both states, with the variant's border. Any Container variant works, the same set as [Button](./button.md). The sunken frame stays around it, or is hidden when `borderless`. Not pressed uses the background's `-inactive` shade and pressed uses its `-active` shade (`tertiary` uses `surface-*`, and `outlined` shades its 2px `primary-*` border instead). Hover changes either to the `-hovered` shade. The text is `on-primary` on `primary`, `on-secondary` on `secondary` (`primary` with the uncolored base theme), and `primary` otherwise. `glass`, `noise`, and `accented` aren't offered: the state shades replace the Container's background.
- **Focus:** A keyboard focus shows a `ring-offset` shadow.
- **Sizes:** `sm`, `md`, and `lg`. The frame height comes from the form size token.
- **Read-only:** Presses do not change the state. The disabled style does not apply.

## Accessibility

- The frame is a native `button`, so it takes keyboard focus. The Space key toggles it. The `Base` story checks this.
- `aria-pressed` reflects the state. `aria-invalid` is set when `invalid` is true, and `aria-readonly` when `readOnly` is true.
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
