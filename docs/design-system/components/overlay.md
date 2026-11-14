---
title: Overlay
description: A full-bleed backdrop that blurs and tints the content behind it, with a gradient that fades in and out.
documentType: reference
tags: [component, overlay, backdrop, container]
component:
  name: overlay
  package: "@cyclone-ui/overlay"
  stories:
    - title: Containers/Overlay
      file: components/overlay/src/Overlay.stories.tsx
---

# Overlay

`Overlay` is a full-bleed backdrop. It partly hides the content behind it with a blur and a theme-tinted gradient. Use it behind a dialog, a sheet, or other modal content.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add overlay
pnpm install
```

- **File:** `Overlay.tsx`. The CLI writes it to `<path>/overlay/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/linear-gradient`, `@tamagui/stacks`, and `react-native-svg`.

## Import

```tsx
import { Overlay } from "@cyclone-ui/overlay";
```

## Usage

`Overlay` fills its parent with `position: absolute` and `inset: 0`. Put it in a positioned parent, or in a presence wrapper such as a dialog or sheet overlay.

```tsx
import { Text } from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import { Overlay } from "@cyclone-ui/overlay";

export function Example() {
  return (
    <YStack position="relative" height="90vh" width="100%" padding="3xl">
      <Text>Content partially obscured by the overlay.</Text>
      <Overlay theme="brand" />
    </YStack>
  );
}
```

## Anatomy

```tsx
<Overlay>
  {/* bottom gradient */}
  {/* top gradient */}
  {children}
</Overlay>
```

`Overlay` is one component. It renders three layers and then its `children`.

| Part | Renders | Purpose |
| --- | --- | --- |
| Frame | A Tamagui `YStack` with `position: absolute` and `inset: 0` | Fills the parent. It has the `backdrop` color, a `blur(250px)` backdrop filter and filter, and `0.75` opacity. It fades in `200ms`. |
| Bottom gradient | A Tamagui `LinearGradient` from `backdrop` to `transparent`, `zIndex` `10` | Tints the content with `0.4` opacity and a `blur(2px)` filter. It fades in `500ms`. |
| Top gradient | A Tamagui `LinearGradient` from `backdrop` to `transparent`, `zIndex` `20` | Tints the content with `0.1` opacity and a `blur(2px)` filter. It fades in `400ms`. |
| `children` | Your content | Renders after the gradients, on top of them. |

## Examples

The examples are the stories in [`Overlay.stories.tsx`](../../../components/overlay/src/Overlay.stories.tsx). Each story renders the Overlay over a line of text in a `90vh` positioned `YStack`.

| Stories | What they show |
| --- | --- |
| `Base` | The Overlay with the inherited theme. |
| `Brand`, `Discovery`, `Danger`, `Success`, `Warning`, `Info` | The `brand`, `discovery`, `danger`, `success`, `warning`, and `info` themes. |

## Props

`OverlayProps` is `GetProps<typeof Overlay>`. The component accepts the props of the Tamagui `YStack` frame. The source does not add custom props.

| Prop | Type | Description |
| --- | --- | --- |
| `theme` | Tamagui theme name | Sets the theme. The `backdrop` color of every layer follows it. |
| `children` | `ReactNode` | Content rendered above the gradients. |
| Other `YStack` props | — | Passed to the frame. |

## Variants and states

Set the `theme` prop to change the tint. Each theme has its own `backdrop` color. The stories show these themes:

- `brand`
- `discovery`
- `danger`
- `success`
- `warning`
- `info`

With no `theme`, the Overlay uses the inherited theme.

### Enter and exit

All three layers set opacity to `0` for the `enter` and `exit` styles. They fade in and out when a presence wrapper mounts and unmounts them. The transition lasts `200ms` for the frame, `400ms` for the top gradient, and `500ms` for the bottom gradient.

## Accessibility

The source sets `pointerEvents: "auto"` on every layer. The Overlay therefore blocks pointer input to the content behind it. The source defines no roles or labels, and it does not move or trap focus. Keyboard focus can still reach the content behind it, so use it inside a modal component, such as a [Dialog](./dialog.md) or [Sheet](./sheet.md), when the content behind must not be reachable.

## Related

- [Sheet](./sheet.md)
- [Dialog](./dialog.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/overlay/src/Overlay.tsx`](../../../components/overlay/src/Overlay.tsx)
- [`components/overlay/src/Overlay.stories.tsx`](../../../components/overlay/src/Overlay.stories.tsx) (title: `Containers/Overlay`)
