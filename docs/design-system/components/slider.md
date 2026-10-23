---
title: Slider
description: A Material-style slider for a single value or a range, with marks, value labels, and form support.
documentType: reference
tags: [component, form, slider, range]
---

# Slider

`Slider` lets the user choose one value, or a range when you pass an array. It follows the Material UI slider style and is built on the Tamagui `Slider`. It can be controlled or uncontrolled. Inside a `Field`, it reads its value, size, and disabled state from the field.

## Import

```tsx
import { Slider } from "@cyclone-ui/slider";
```

## Usage

```tsx
<Slider defaultValue={30} getAriaLabel={() => "Volume"} />

<Slider
  value={range}
  onChange={setRange}
  getAriaLabel={index => (index ? "Maximum" : "Minimum")}
/>

<Slider defaultValue={30} step={10} marks valueLabelDisplay="auto" />

<Slider
  defaultValue={20}
  marks={[{ value: 0, label: "0°C" }, { value: 100, label: "100°C" }]}
/>

<Slider orientation="vertical" height={300} defaultValue={30} />
```

## Props

`SliderProps` extends the Tamagui slider props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| number[]` | — | The value. An array makes a range slider. Makes the slider controlled. |
| `defaultValue` | `number \| number[]` | — | Initial value when uncontrolled. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | The increment values snap to. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the slider. |
| `onChange` | `(value, activeThumb) => void` | — | Called on every change, with the value and the index of the moved thumb. |
| `onChangeCommitted` | `(value) => void` | — | Called when a drag ends or a key press changes the value. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track and thumb size. Inherited from the field when inside one. |
| `marks` | `boolean \| SliderMark[]` | `false` | `true` shows a mark at every step. An array shows marks at the given values. |
| `track` | `"normal" \| "inverted" \| false` | `"normal"` | Fills the selected range, everything outside it, or nothing. |
| `valueLabelDisplay` | `"auto" \| "on" \| "off"` | `"off"` | Shows the value label on hover, focus, and drag (`auto`), always (`on`), or never (`off`). |
| `valueLabelFormat` | `string \| (value, index) => ReactNode` | — | Content of the value label. |
| `disabled` | `boolean` | `false` | Disables the slider. Inherited from the field when inside one. |
| `aria-labelledby` | `string` | Field label id | Id of the element that labels every thumb. |
| `getAriaLabel` | `(index: number) => string` | — | Builds the accessible name of a thumb. |
| `getAriaValueText` | `(value: number, index: number) => string` | — | Builds the accessible value text of a thumb. |

`SliderMark` has a `value` and an optional `label`. The package also exports `valueToPercent` and `getSliderMarks`.

## Variants and states

The stories show continuous and discrete sliders, decimal steps, marks, labeled marks, an always visible value label, a range, a minimum distance between thumbs, a vertical slider, `track="inverted"`, `track={false}`, disabled, the sizes `sm`, `md`, and `lg`, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Accessibility

Every thumb is a separate focusable control. Inside a field, the field label names every thumb. A disabled slider removes its thumbs from the tab order.

## Related

- [Rating](./rating.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/slider/src/Slider.tsx`](../../../components/slider/src/Slider.tsx)
- [`components/slider/src/Slider.stories.tsx`](../../../components/slider/src/Slider.stories.tsx)
- [`components/slider/src/Slider.test.tsx`](../../../components/slider/src/Slider.test.tsx)
