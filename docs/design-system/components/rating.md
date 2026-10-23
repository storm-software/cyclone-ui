---
title: Rating
description: A row of icons, stars by default, to display or select a rating. Supports fractions, clearing, and read-only mode.
documentType: reference
tags: [component, form, rating, display]
---

# Rating

`Rating` is a row of icons. It can show a rating or let the user choose one. It can be controlled or uncontrolled. Inside a `Field`, it reads its value, size, and disabled state from the field.

## Import

```tsx
import { Rating } from "@cyclone-ui/rating";
```

## Usage

```tsx
import { Heart } from "@cyclone-ui/icons";

<Rating defaultValue={3} />
<Rating value={value} onChange={setValue} precision={0.5} />
<Rating value={4.5} precision={0.5} readOnly />
<Rating icon={Heart} max={10} defaultValue={7} />
```

## Props

`RatingProps` extends the Tamagui view props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number \| null` | — | The rating. `null` means no rating. Makes the rating controlled. |
| `defaultValue` | `number \| null` | `null` | Initial value when uncontrolled. |
| `max` | `number` | `5` | Number of icons and the maximum value. |
| `precision` | `number` | `1` | Smallest selectable step, for example `0.5`. |
| `onChange` | `(value: number \| null) => void` | — | Called with the new value, or `null` when the current value is clicked again. |
| `onChangeActive` | `(value: number \| null) => void` | — | Called with the hovered value, or `null` when the pointer leaves. |
| `readOnly` | `boolean` | `false` | Shows the value without allowing changes. |
| `disabled` | `boolean` | `false` | Disables the rating. Inherited from the field when inside one. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Icon size. Inherited from the field when inside one. |
| `icon` | `IconComponent` | `Star` | Icon for filled values. |
| `emptyIcon` | `IconComponent` | `icon` | Icon for empty values. |
| `iconWeight` | `IconWeight` | `"fill"` | Weight of the filled icon. |
| `emptyIconWeight` | `IconWeight` | `"regular"` | Weight of the empty icon. |
| `color` | `ColorTokens \| ThemeTokens \| string` | `"primary"` | Color of filled icons. |
| `emptyColor` | `ColorTokens \| ThemeTokens \| string` | `"outline"` | Color of empty icons. It is `primary` when the field shows a validation message. |
| `highlightSelectedOnly` | `boolean` | `false` | Fills only the icon that matches the value. |
| `getLabelText` | `(value: number) => string` | `"N Star(s)"` | Builds the accessible description of a value. |

The package also exports `roundRatingValue(value, precision)`. It rounds a value to the nearest multiple of `precision`.

## Keyboard and accessibility

- An interactive rating is focusable and has `role="slider"` with `aria-valuemin` `0`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext`.
- `ArrowRight` and `ArrowUp` add `precision`. `ArrowLeft` and `ArrowDown` subtract `precision`. `Home` sets `0`. `End` sets `max`.
- A read-only rating has `role="img"` with a label.
- A disabled rating has `aria-disabled` and is removed from the tab order.
- Use `Field.Label` to name the rating inside a field.

## Variants and states

The stories show default value, hover feedback, half ratings, read-only, disabled, no rating, sizes, custom icon, custom max, minimum rating, `highlightSelectedOnly`, and the validation themes `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Slider](./slider.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/rating/src/Rating.tsx`](../../../components/rating/src/Rating.tsx)
- [`components/rating/src/Rating.stories.tsx`](../../../components/rating/src/Rating.stories.tsx)
- [`components/rating/src/Rating.test.tsx`](../../../components/rating/src/Rating.test.tsx)
