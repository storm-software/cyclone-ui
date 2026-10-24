---
title: Color area
description: Reference for the ColorArea component, a two-channel color field you drag or operate with the keyboard.
documentType: reference
tags: [component, color, form]
---

# Color area

`ColorArea` selects two channels of a color from a gradient. Drag the thumb, or move it with the keyboard. The color model comes from React Stately.

The [color picker](./color-picker.md) uses this area inside its popover.

Source: [`components/color-area`](https://github.com/storm-software/cyclone-ui/tree/main/components/color-area)

## Import

```tsx
import { ColorArea, parseColor } from "@cyclone-ui/color-area";
```

The package also re-exports `Color`, `ColorChannel`, `ColorFormat`, and `ColorSpace` from `@react-stately/color`.

## Usage

```tsx
<ColorArea
  defaultValue={parseColor("hsb(200, 80%, 90%)")}
  xChannel="saturation"
  yChannel="brightness"
  onChange={color => console.log(color.toString("hex"))}
/>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `ColorArea` | The gradient and the pointer handling. |
| `ColorArea.Thumb` | The thumb. The area renders one when you omit `children`. |

## Props

`ColorArea` accepts React Stately color-area props except `isDisabled`, and `View` props except `children`, `onChange`, and `defaultValue`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `value` | - | The controlled color. |
| `defaultValue` | - | The color on first render. |
| `onChange` | - | Called while the color changes. |
| `onChangeEnd` | - | Called when the change ends. |
| `xChannel` | - | The channel mapped to horizontal movement. |
| `yChannel` | - | The channel mapped to vertical movement. |
| `colorSpace` | - | The color space for the channels. |
| `disabled` | `false` | Blocks interaction and greys out the area. |
| `showDots` | `false` | Overlays a dot grid. Web only. |
| `borderRadius` | `16` | Radius of the area. |
| `children` | the default thumb | A replacement for `ColorArea.Thumb`. |
| `aria-label` | `"Color picker"` | The accessible name. |

## Keyboard

When the thumb is focused, these keys step the channels. Shift uses the page step.

| Key | Action |
| --- | --- |
| Arrow Right, Arrow Left | Step the horizontal channel. |
| Arrow Up, Arrow Down | Step the vertical channel. |
| Page Up, Page Down | Page-step the vertical channel. |
| Home, End | Page-step the horizontal channel. |

A pointer press does not show the focus ring. The thumb receives focus on pointer down so later key presses work.

## Related pages

- [Color picker](./color-picker.md)
