---
title: Color Area
description: Reference for the ColorArea component, a two-channel color field you drag or operate with the keyboard.
documentType: reference
tags: [component, color, form]
component:
  name: color-area
  package: "@cyclone-ui/color-area"
  stories:
    - title: Form/ColorArea
      file: components/color-area/src/ColorArea.stories.tsx
---

# Color Area

`ColorArea` selects two channels of a color from a gradient. Drag the thumb, or move it with the keyboard. The color model comes from React Stately.

The [color picker](./color-picker.md) uses this area inside its popover. Use `ColorArea` alone when you only need two channels, for example saturation and brightness, without a text field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add color-area
pnpm install
```

- **File:** `ColorArea.tsx`. The CLI writes it to `<path>/color-area/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@react-stately/color` and `@tamagui/core`.

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

```tsx
<ColorArea>
  <ColorArea.Thumb />
</ColorArea>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ColorArea` | A Tamagui `View`, square (`aspectRatio` 1) and at most 224 px wide. Stacked gradient `View` layers are clipped to its rounded corners. | The gradient and the pointer handling. A pointer press or drag sets both channels from the pointer position. |
| `ColorArea.Thumb` | A Tamagui `View` with `role="slider"`, `aria-roledescription="2D slider"`, and `tabIndex` 0 (-1 when disabled) | The thumb. It marks the selected color and takes keyboard focus. The area renders one when you omit `children`. |

`ColorAreaThumb` is also exported by name.

The package also exports `getColorAreaLayers(color, channels)`, which returns the gradient layers that paint an area. RGB areas use `maskImage`, which only the web supports.

## Examples

The examples are the stories in [`ColorArea.stories.tsx`](../../../components/color-area/src/ColorArea.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Basic` | An uncontrolled area that starts at `rgb(116, 52, 255)`, with an explicit `ColorArea.Thumb`. |
| `WithDots`, `Disabled` | The `showDots` grid, and the disabled area. |
| `Controlled` | A controlled RGB area with red on x and green on y, and a swatch with the hex value. |
| `ColorSpaceAndChannels` | Buttons that change `colorSpace`, `xChannel`, and `yChannel`. The same channel cannot be on both axes. |
| `CustomStyles` | A smaller area (`maxWidth={176}`, `borderRadius={24}`) with a thicker thumb border. |

## Props

`ColorArea` accepts React Stately color-area props except `isDisabled`, and `View` props except `children`, `onChange`, and `defaultValue`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| Color` | - | The controlled color. |
| `defaultValue` | `string \| Color` | - | The color on first render. |
| `onChange` | `(color: Color) => void` | - | Called while the color changes. |
| `onChangeEnd` | `(color: Color) => void` | - | Called when the change ends. Each key press is a complete change, so it also calls `onChangeEnd`. |
| `xChannel` | `ColorChannel` | - | The channel mapped to horizontal movement. |
| `yChannel` | `ColorChannel` | - | The channel mapped to vertical movement. |
| `colorSpace` | `ColorSpace` | the color space of the value | The color space for the channels. `xChannel` and `yChannel` must be channels of this space. |
| `disabled` | `boolean` | `false` | Blocks interaction and greys out the area. |
| `readOnly` | `boolean` | `false` | Blocks color changes without the disabled colors. |
| `showDots` | `boolean` | `false` | Overlays a dot grid. Web only. |
| `borderRadius` | radius | `16` | Radius of the area. |
| `maxWidth` | size | `224` | The maximum width of the area. |
| `children` | `ReactNode` | `<ColorArea.Thumb />` | A replacement for the default thumb. |
| `aria-label` | `string` | `"Color picker"` | The accessible name of the thumb. |
| `aria-labelledby` | `string` | - | Sets the thumb's `aria-labelledby`. |

`ColorArea.Thumb` accepts `View` props. They override the default thumb styles.

## Keyboard

When the thumb is focused, these keys step the channels. Shift uses the page step.

| Key | Action |
| --- | --- |
| Arrow Right, Arrow Left | Step the horizontal channel. |
| Arrow Up, Arrow Down | Step the vertical channel. |
| Page Up, Page Down | Page-step the vertical channel. |
| Home, End | Page-step the horizontal channel. |

A pointer press does not show the focus ring. The thumb receives focus on pointer down so later key presses work.

## Accessibility

- The thumb has `role="slider"` and `aria-roledescription="2D slider"`.
- `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` describe the horizontal channel.
- `aria-valuetext` gives the name and value of both channels, then the color name.
- The thumb sets `aria-disabled` and `aria-readonly`. A disabled thumb is removed from the tab order.

## Related

- [Color picker](./color-picker.md)

## Source

- [`components/color-area/src/ColorArea.tsx`](../../../components/color-area/src/ColorArea.tsx)
- [`components/color-area/src/ColorArea.stories.tsx`](../../../components/color-area/src/ColorArea.stories.tsx) (title: `Form/ColorArea`)
