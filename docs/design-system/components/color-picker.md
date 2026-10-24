---
title: Color picker
description: Reference for the ColorPicker component, a color field with a swatch that opens an area, sliders, and swatches.
documentType: reference
tags: [component, color, form]
---

# Color picker

`ColorPicker` is a text field for a color. A swatch opens a popover with an area, sliders, channel fields, and preset swatches.

On its own, the picker is uncontrolled, or controlled with `value` and `onChange`. Inside a [Field](./field.md), the field stores the color as a hex string.

Source: [`components/color-picker`](https://github.com/storm-software/cyclone-ui/tree/main/components/color-picker)

## Import

```tsx
import { ColorPicker, parseColor } from "@cyclone-ui/color-picker";
```

## Usage

```tsx
<ColorPicker
  defaultValue="#3366cc"
  placeholder="#000000"
  swatches={["#112233", "#3366cc", "#cc6633"]}
  onChange={color => color?.toString("hex")}
/>
```

Replace the popover content by passing children:

```tsx
<ColorPicker defaultValue="hsl(200, 80%, 50%)">
  <ColorPicker.Area xChannel="hue" yChannel="saturation" />
  <ColorPicker.Slider channel="lightness" />
  <ColorPicker.ChannelField channel="lightness" />
  <ColorPicker.Swatches colors={["#ffffff", "#000000"]} />
</ColorPicker>
```

## Anatomy

| Part | Purpose |
| --- | --- |
| `ColorPicker` | The text field, swatch trigger, and popover. |
| `ColorPicker.Area` | A [color area](./color-area.md). `value`, `defaultValue`, and `onChange` come from the picker. |
| `ColorPicker.Slider` | A slider for one `channel`. |
| `ColorPicker.ChannelField` | A field for one `channel`. |
| `ColorPicker.Swatches` | Preset colors. `colors` is required. |

## Props

`ColorPicker` also accepts [Input](./input.md) props, except the keys listed here.

| Prop | Purpose |
| --- | --- |
| `value` | The controlled color. A string, a `Color`, or `null`. |
| `defaultValue` | The initial color when uncontrolled. |
| `onChange` | Called with the new `Color`, or `null` when the text box is cleared. Inside a `Field`, the field receives a hex string instead. |
| `swatches` | Preset colors for the default popover content. |
| `placeholder` | Placeholder for the text box. |
| `children` | Popover content that replaces the default. |

`Swatches` colors are hex, `rgb()`, `hsl()`, or `hsb()` strings.

## Related pages

- [Color area](./color-area.md)
- [Field](./field.md)
- [Input](./input.md)
