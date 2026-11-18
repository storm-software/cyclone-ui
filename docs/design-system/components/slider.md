---
title: Slider
description: A Material-style slider for a single value or a range, with marks, value labels, and form support.
documentType: reference
tags: [component, form, slider, range]
component:
  name: slider
  package: "@cyclone-ui/slider"
  stories:
    - title: Form/Slider
      file: components/slider/src/Slider.stories.tsx
---

# Slider

`Slider` lets the user choose one value, or a range when you pass an array. It follows the Material UI slider style and is built on the Tamagui `Slider`. It can be controlled or uncontrolled. Inside a `Field`, it reads its value, size, and disabled state from the field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add slider
pnpm install
```

- **File:** `Slider.tsx`. The CLI writes it to `<path>/slider/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/slider`.

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

## Anatomy

```tsx
<Slider />
```

| Part     | Renders                     | Purpose                                                                                     |
| -------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| `Slider` | The Tamagui `Slider` frame  | The pressable area. The track is centered in it. It holds the value, the bounds, and the step. |

The slider has no public parts. It draws these layers from the Tamagui slider primitives:

| Layer       | Renders                                                                                                   | Purpose                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Track       | `Slider.Track`, with a rail `View` at 38% opacity                                                         | The full line of the slider.                                                                              |
| Fill        | `Slider.TrackActive` (`track="normal"`), or `View` fills (`track="inverted"`)                             | The filled part of the track.                                                                             |
| Marks       | A round `View` for each mark, and a `Text` for each mark label                                            | The step or custom marks. A mark on the filled part uses `on-primary`.                                    |
| Thumb       | One `Slider.Thumb` for each value, with `role="slider"`                                                    | The knob that the user drags or moves with the keyboard. A range slider has two or more thumbs.           |
| Value label | A `View` bubble with an arrow, with `aria-hidden`                                                         | Shows the formatted value above the thumb. It is rendered only when `valueLabelDisplay` is not `"off"`. |

On web, when `name` is set, Tamagui also renders one `<input type="hidden">` for each value. These inputs submit the value with the form.

## Examples

The examples are the stories in [`Slider.stories.tsx`](../../../components/slider/src/Slider.stories.tsx). Most stories put the slider and a `Field.Label` in a `Field` inside a `Form`. The default args are `defaultValue={30}`, `valueLabelDisplay="auto"`, and `size="md"`.

| Stories                                                     | What they show                                                                                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Base`                                                      | A slider at 30. Its play function moves the thumb with ArrowRight, End, and Home, and checks `aria-valuenow`.                                    |
| `NoInitialValue`, `Required`, `Description`                 | A field with no initial value (the slider shows the minimum), a required field, and a long `Field.Details` text.                                |
| `Continuous`                                                | A controlled slider without a value label, between two volume icons.                                                                             |
| `Discrete`, `DecimalSteps`, `Marks`                         | `step={10}` with a mark at every step from 10 to 110, `step={0.1}` from 0 to 1, and step marks with the value label on hover and focus.         |
| `CustomMarks`, `LabelledMarks`                              | Custom marks with labels (0°C, 20°C, 37°C, 100°C), and a `valueLabelFormat` that adds `°C`.                                                      |
| `AlwaysVisibleLabel`                                        | `valueLabelDisplay="on"`.                                                                                                                        |
| `Range`, `MinimumDistance`                                  | A controlled range slider that shows its `onChangeCommitted` value, and a range with `minStepsBetweenThumbs={10}`.                               |
| `MaximumValue`                                              | A field validator that shows a warning above 80. Its play function moves the thumb to 81 and checks the message.                                 |
| `Vertical`                                                  | Three vertical sliders: a single value, a range, and labeled marks.                                                                              |
| `TrackInverted`, `TrackFalse`                               | `track="inverted"` and `track={false}` on single-value and range sliders.                                                                        |
| `Disabled`, `ReadOnly`                                      | A disabled field with labeled marks, and a read-only field. The `ReadOnly` play function confirms `aria-readonly="true"` and that ArrowRight does not change the value. |
| `Sizes`, `SmallSize`, `MediumSize`, `LargeSize`             | The `sm`, `md`, and `lg` sizes.                                                                                                                  |
| `Themes`                                                    | The slider inside the `brand`, `info`, `success`, `warning`, and `danger` themes.                                                                |
| `Discovery`, `Error`, `Warning`, `Info`, `Success`          | A validation message of each type. `Error` shows the message before blur (`showErrorsBeforeBlur`).                                               |

## Props

`SliderProps` extends the Tamagui slider props (such as `minStepsBetweenThumbs`, `dir`, `onSlideStart`, and `onSlideEnd`), except `value`, `defaultValue`, `onValueChange`, `size`, `children`, and `onChange`. Inside a form control, a prop that you do not set falls back to the state of the control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| number[]` | form value | The value. An array makes a range slider. Makes the slider controlled. |
| `defaultValue` | `number \| number[]` | — | Initial value when uncontrolled. Inside a form control with no value, the slider shows `defaultValue`, else `min`. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | The increment values snap to. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the slider. A vertical slider is 200px high unless you set `height`. |
| `onChange` | `(value, activeThumb) => void` | — | Called on every change, with the value and the index of the moved thumb. Inside a form control, the form is updated too. |
| `onChangeCommitted` | `(value) => void` | — | Called when a drag ends or a key press changes the value. |
| `size` | `"sm" \| "md" \| "lg"` | form control size, else `"md"` | Track and thumb size. |
| `name` | `string` | form control name | The name of the hidden inputs that submit the value with the form. |
| `marks` | `boolean \| SliderMark[]` | `false` | `true` shows a mark at every step (up to 100 steps). An array shows marks at the given values. |
| `track` | `"normal" \| "inverted" \| false` | `"normal"` | Fills the selected range, everything outside it, or nothing. |
| `valueLabelDisplay` | `"auto" \| "on" \| "off"` | `"off"` | Shows the value label on hover, focus, and drag (`auto`), always (`on`), or never (`off`). |
| `valueLabelFormat` | `string \| (value, index) => ReactNode` | — | Content of the value label. |
| `disabled` | `boolean` | form disabled state, else `false` | Disables the slider. |
| `readOnly` | `boolean` | form read-only state, else `false` | Prevents changes without the disabled colors. Sets `aria-readonly` on the slider and each thumb. |
| `aria-labelledby` | `string` | Field label id | Id of the element that labels every thumb. |
| `getAriaLabel` | `(index: number) => string` | — | Builds the accessible name of a thumb. |
| `getAriaValueText` | `(value: number, index: number) => string` | — | Builds the accessible value text of a thumb. |

`SliderMark` has a `value` and an optional `label` (`ReactNode`). The package also exports the types `SliderSize` and `SliderValue`, and the functions `valueToPercent(value, min, max)` and `getSliderMarks(marks, min, max, step)`.

## Sizes

| Size | Track | Thumb | Pressable thickness |
| ---- | ----- | ----- | ------------------- |
| `sm` | 2px   | 12px  | 24px                |
| `md` | 4px   | 20px  | 30px                |
| `lg` | 6px   | 24px  | 34px                |

`md` matches the Material UI medium slider.

## Variants and states

The stories show continuous and discrete sliders, decimal steps, marks, labeled marks, an always visible value label, a range, a minimum distance between thumbs, a vertical slider, `track="inverted"`, `track={false}`, disabled, read-only, the sizes `sm`, `md`, and `lg`, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

- **Hover, focus, drag.** A focus ring shows around the thumb on hover, on keyboard focus, and while it is dragged. The `sm` size uses `ring-subtle-offset`. The cursor is `grab`, and `grabbing` while a thumb is dragged.
- **Disabled.** The track and thumbs use `primary-disabled`, the cursor is `not-allowed`, and no ring or `auto` value label shows.
- **Color.** The fill uses `primary` and the thumbs use `primary-active`. Wrap the slider in a theme to change the color.

## Accessibility

- Every thumb is a separate focusable control with `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-orientation`.
- Arrow keys move the focused thumb by one `step`. Page Up, Page Down, and Shift with an arrow key move it by 10 steps. Home moves the first thumb to `min`. End moves the last thumb to `max`.
- Inside a field, the field label names every thumb through `aria-labelledby`. Outside a field, use `getAriaLabel` or `aria-labelledby`. `getAriaValueText` sets `aria-valuetext`.
- Moving focus between the thumbs of a range slider does not blur the field.
- A disabled slider removes its thumbs from the tab order.

## Related

- [Rating](./rating.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/slider/src/Slider.tsx`](../../../components/slider/src/Slider.tsx)
- [`components/slider/src/Slider.stories.tsx`](../../../components/slider/src/Slider.stories.tsx)
- [`components/slider/src/Slider.test.tsx`](../../../components/slider/src/Slider.test.tsx)
