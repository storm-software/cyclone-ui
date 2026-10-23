---
title: Overlay
description: A full-bleed backdrop that blurs and tints the content behind it, with a gradient that fades in and out.
documentType: reference
tags: [component, overlay, backdrop, container]
---

# Overlay

`Overlay` is a full-bleed backdrop. It partly hides the content behind it with a blur and a theme-tinted gradient. Use it behind a dialog, a sheet, or other modal content.

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

`Overlay` is made of three layers:

1. A frame (`YStack`) with a `blur(35px)` backdrop filter, a `#0D0C0766` background, and `0.75` opacity.
2. A top gradient from `primary` to `transparent`, with `blur(2px)` and `0.1` opacity.
3. A bottom gradient from `primary` to `transparent`, with `blur(2px)` and `0.4` opacity.

The `children` render after the gradients, on top of them.

## Props

`OverlayProps` is `GetProps<typeof Overlay>`. The component accepts the props of the Tamagui `YStack` frame. The source does not add custom props.

| Prop | Type | Description |
| --- | --- | --- |
| `theme` | Tamagui theme name | Sets the theme. The `primary` gradient color follows it. |
| `children` | `ReactNode` | Content rendered above the gradients. |
| Other `YStack` props | — | Passed to the frame. |

## Variants and states

Set the `theme` prop to change the tint. The stories show these themes:

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

The source sets `pointerEvents: "auto"` on every layer. The Overlay therefore blocks pointer input to the content behind it. The source defines no roles or labels.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/overlay/src/Overlay.tsx`](../../../components/overlay/src/Overlay.tsx)
- [`components/overlay/src/Overlay.stories.tsx`](../../../components/overlay/src/Overlay.stories.tsx)
