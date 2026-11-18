---
title: Color Picker
description: Reference for the ColorPicker component, a color field with a swatch that opens an area, sliders, and swatches.
documentType: reference
tags: [component, color, form]
component:
  name: color-picker
  package: "@cyclone-ui/color-picker"
  stories:
    - title: Form/ColorPicker
      file: components/color-picker/src/ColorPicker.stories.tsx
---

# Color Picker

`ColorPicker` is a text field for a color. A swatch opens a popover with an area, sliders, channel fields, and preset swatches.

On its own, the picker is uncontrolled, or controlled with `value` and `onChange`. Inside a [Field](./field.md), the field stores the color as a hex string.

Use it when a user types or picks any color. To pick two channels on a fixed surface, without a text field or popover, use a [Color area](./color-area.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add color-picker
pnpm install
```

- **Files:** `ColorPicker.tsx` and `utilities.ts`. The CLI writes them to `<path>/color-picker/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Color Area](./color-area.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Toggle](./toggle.md), [Toggle Group](./toggle-group.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@react-stately/color` and `@tamagui/core`.

## Import

```tsx
import { ColorPicker, parseColor } from "@cyclone-ui/color-picker";
```

The package also re-exports the `Color`, `ColorChannel`, and `ColorSpace` types from `@react-stately/color`.

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
  <ColorPicker.Slider channel="lightness" colorSpace="hsl" />
  <ColorPicker.ChannelField channel="lightness" colorSpace="hsl" />
  <ColorPicker.Swatches colors={["#ffffff", "#000000"]} />
</ColorPicker>
```

Each part edits the channels of its `colorSpace`, which is `hsb` by default. Set `colorSpace="hsl"` for the `lightness` channel.

## Anatomy

```tsx
<ColorPicker>
  {/* Popover content. Without children, the default content renders. */}
  <ColorPicker.Area />
  <ColorPicker.Slider channel="hue" />
  <ColorPicker.ChannelField channel="hue" />
  <ColorPicker.Swatches colors={swatches} />
</ColorPicker>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ColorPicker` | An [`Input`](./input.md) with an `Input.Trigger` swatch button, an `Input.Separator`, and an `Input.TextBox.Value` (a native `<input>` on the web). The swatch is the trigger of a 264 px wide [`Popover`](./popover.md), which becomes a [`Sheet`](./sheet.md) on small screens. | The text field, swatch trigger, and popover. Typed colors apply while they parse. Blur or Enter formats the text. |
| `ColorPicker.Area` | A [`ColorArea`](./color-area.md) | Sets two channels. The default is saturation on x and brightness on y, in `hsb`. `value`, `defaultValue`, and `onChange` come from the picker. |
| `ColorPicker.Slider` | A Tamagui `View` track with a gradient, and a thumb `View` with `role="slider"` | Sets one `channel`. It shows the channel name and value above the track unless `showLabel={false}`. |
| `ColorPicker.ChannelField` | A small [`Input`](./input.md) with `inputMode="decimal"` | Edits one `channel` as a number. Arrow Up and Arrow Down step it. Blur or Enter applies it. |
| `ColorPicker.Swatches` | A wrapping row of Tamagui `View` circles with `role="button"` and `aria-pressed` | Preset colors. Pressing one sets the color. `colors` is required. |

The default popover content is the area, a hue slider, an `RGB`/`HSL`/`HSB` [Toggle group](./toggle-group.md) (`HSL` selected at first), channel fields for the selected color space, and the swatches.

`ColorPickerArea`, `ColorPickerSlider`, `ColorPickerChannelField`, and `ColorPickerSwatches` are also exported by name. Use them in React Server Components, which cannot read `ColorPicker.Area` from a client module.

The parts read the picker's color from context. They throw an error when rendered outside `ColorPicker`.

## Examples

The examples are the stories in [`ColorPicker.stories.tsx`](../../../components/color-picker/src/ColorPicker.stories.tsx). Most stories render the picker in a `Field` inside a `Form`, starting at `#0485F7`.

| Stories | What they show |
| --- | --- |
| `Base` | Typing `f43` applies `#FF4433` at once and formats it on blur. The swatch opens the popover, and End on the hue slider changes the text to `#FF3333`. |
| `Empty`, `Required` | A field with no color, and a required field with no color. |
| `PaintdropTrigger`, `CircleTrigger`, `SquareTrigger` | Each `triggerStyle`. |
| `NoSwatches`, `CustomSwatches` | `swatches={false}`, and a custom list of nine pastel colors. |
| `Floating`, `UnderlinedFloating`, `InlinedFloating`, `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove`, `Description` | The field variants with floating and above labels, and a long description. |
| `Basic` | A picker whose popover holds only `ColorPicker.Area` and a hue `ColorPicker.Slider`. |
| `Controlled` | A controlled picker with swatches, an area, and a hue slider without a label. The selected hex shows below it. |
| `WithSliders` | A color space toggle and one slider for each channel of that space, alpha included. |
| `Disabled` | A disabled picker. |
| `Error`, `Warning`, `Success` | Field validation messages of each type. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

`ColorPicker` also accepts [Input](./input.md) props, except the keys listed here. Unset `size`, `disabled`, and `readOnly` fall back to the surrounding form control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| Color \| null` | - | The controlled color. `null` means no color. |
| `defaultValue` | `string \| Color \| null` | - | The initial color when uncontrolled. |
| `onChange` | `(color: Color \| null) => void` | - | Called with the new `Color`, or `null` when the text box is cleared. Inside a `Field`, the field receives a hex string instead. |
| `swatches` | `string[] \| false` | nine preset colors | Preset colors for the default popover content. `false` shows no swatches. |
| `placeholder` | `string` | - | Placeholder for the text box. |
| `triggerStyle` | `"paintdrop" \| "circle" \| "square"` | `"paintdrop"` | The shape of the swatch trigger. |
| `children` | `ReactNode` | the default content | Popover content that replaces the default. |
| `aria-label` | `string` | - | The accessible name of the text box. |

Colors are hex, `rgb()`, `hsl()`, or `hsb()` strings, or `Color` objects. Hex digits can leave out the `#`. The text box shows `#RRGGBB`, or `#RRGGBBAA` for a translucent color.

### Part props

The parts also accept `View` props, except `children`.

| Part | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `ColorPicker.Area` | [Color area](./color-area.md) props | - | - | All except `value`, `defaultValue`, and `onChange`. `colorSpace`, `xChannel`, and `yChannel` default to `hsb`, `saturation`, and `brightness`. |
| `ColorPicker.Slider` | `channel` | `ColorChannel` | - | Required. The channel that the slider sets. |
| `ColorPicker.Slider` | `colorSpace` | `ColorSpace` | `"hsb"` | The color space of `channel`. |
| `ColorPicker.Slider` | `showLabel` | `boolean` | `true` | Shows the channel name and value above the track. |
| `ColorPicker.ChannelField` | `channel` | `ColorChannel` | - | Required. The channel that the field edits. |
| `ColorPicker.ChannelField` | `colorSpace` | `ColorSpace` | `"hsb"` | The color space of `channel`. |
| `ColorPicker.Swatches` | `colors` | `string[]` | - | Required. The preset colors. |

### Utilities

The package exports the helpers that the picker uses.

| Export | Returns |
| --- | --- |
| `parseColor(value)` | A `Color` from a color string. Re-exported from `@react-stately/color`. |
| `toColor(value)` | A `Color` from a `Color` or a color string, or `null` for an empty or invalid value. |
| `formatColor(color)` | `#RRGGBB`, `#RRGGBBAA` for a translucent color, or `""` without a color. |
| `getSwatchBackground(css)` | Background style props that paint a color or gradient over a checkerboard. |
| `getColorSliderBackground(color, channel, inset)` | The CSS gradient of a slider track. |
| `CHECKERBOARD` | The checkerboard gradient under translucent colors. |

## Accessibility

- The swatch trigger is a button. Its label is `Select color`, plus `, currently <hex>` when a color is set.
- Set `aria-label` (or use a `Field` label) to name the text box.
- A slider thumb has `role="slider"`, the channel name as its label, and `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext`.
- On a slider thumb, Arrow keys step the channel, Shift and Arrow keys or Page Up and Page Down page-step it, and Home and End go to the minimum and maximum. A pointer press does not show the focus ring.
- Each channel field has the channel name as its `aria-label`.
- Each swatch has the color name as its label and `aria-pressed` for the selected color. Enter and Space select it.
- When disabled, the thumbs and swatches leave the tab order and set `aria-disabled`.

## Related

- [Color area](./color-area.md)
- [Field](./field.md)
- [Input](./input.md)
- [Popover](./popover.md)

## Source

- [`components/color-picker/src/ColorPicker.tsx`](../../../components/color-picker/src/ColorPicker.tsx)
- [`components/color-picker/src/utilities.ts`](../../../components/color-picker/src/utilities.ts)
- [`components/color-picker/src/ColorPicker.stories.tsx`](../../../components/color-picker/src/ColorPicker.stories.tsx) (title: `Form/ColorPicker`)
