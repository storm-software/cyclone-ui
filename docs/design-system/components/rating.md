---
title: Rating
description: A row of icons, stars by default, to display or select a rating. Supports fractions, clearing, and read-only mode.
documentType: reference
tags: [component, form, rating, display]
component:
  name: rating
  package: "@cyclone-ui/rating"
  stories:
    - title: Form/Rating
      file: components/rating/src/Rating.stories.tsx
---

# Rating

`Rating` is a row of icons. It can show a rating or let the user choose one. It can be controlled or uncontrolled. Inside a `Field`, it reads its value, size, and disabled state from the field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add rating
pnpm install
```

- **File:** `Rating.tsx`. The CLI writes it to `<path>/rating/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Confetti Burst](./confetti-burst.md) and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Rating } from "@cyclone-ui/rating"
```

## Usage

```tsx
import { Heart } from "@cyclone-ui/icons";

<Rating defaultValue={3} />
<Rating value={value} onChange={setValue} precision={0.5} />
<Rating value={4.5} precision={0.5} readOnly />
<Rating icon={Heart} max={10} defaultValue={7} />
```

## Anatomy

```tsx
<Rating />
```

| Part     | Renders                                                                                                                         | Purpose                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Rating` | A Tamagui `View` row with `role="slider"`, or `role="img"` when `readOnly`. It is focusable (`tabIndex={0}`) when it is interactive. | The frame. It holds the value, handles the keyboard, and draws `max` icons.                                                                                                 |

Each icon is a `View` with `aria-hidden`. It shows the empty icon, and the filled icon on top in a clipped `View` whose width follows the fill. An interactive rating splits each icon into one hit area for each `precision` step. Two [`ConfettiBurst`](./confetti-burst.md) layers sit on the hit areas for the highest value and the value one step below it.

## Examples

The examples are the stories in [`Rating.stories.tsx`](../../../components/rating/src/Rating.stories.tsx). Most stories render the rating in a `Form` and a `Field` with a `Field.Label`.

| Stories                                               | What they show                                                                                                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Base`                                                | A field rating with value 2. The play function uses the arrow keys, `End`, and `Home`, and checks the confetti on the two highest values.                    |
| `Required`, `Description`                             | A required field, and a field with `Field.Details` text.                                                                                                     |
| `DefaultValue`, `NoRating`                            | A start value of 3, and no start value (`null`).                                                                                                             |
| `HoverFeedback`                                       | A controlled rating without a field. A text label shows the hovered value from `onChangeActive`. Click the selected value again to clear it.                |
| `HalfRatings`                                         | `precision={0.5}` with a start value of 2.5. The play function steps to 4.5 with the arrow keys.                                                             |
| `ReadOnly`, `Disabled`                                | A read-only value of 3.5, and a disabled rating.                                                                                                             |
| `Sizes`, `SmallSize`, `MediumSize`, `LargeSize`       | The `sm`, `md`, and `lg` sizes, side by side without a field and one size for each story in a field.                                                         |
| `CustomIcon`, `CustomMax`                             | A `Heart` icon with half steps in the `danger` theme, and `max={10}`.                                                                                        |
| `HighlightSelectedOnly`                               | Only the icon that matches the value is filled.                                                                                                              |
| `MinimumRating`                                       | A field validator that requires 3 or more stars. The play function sets 2 and shows that the error appears only after the rating loses focus.               |
| `WarningTheme`                                        | A rating in the `warning` theme without a field.                                                                                                             |
| `Discovery`, `Error`, `Warning`, `Info`, `Success`    | A field validation message of each type. `Error` sets `showErrorsBeforeBlur`.                                                                                |

## Props

`RatingProps` extends the Tamagui view props.

| Prop                    | Type                                   | Default       | Description                                                                      |
| ----------------------- | -------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| `value`                 | `number \| null`                       | —             | The rating. `null` means no rating. Makes the rating controlled.                 |
| `defaultValue`          | `number \| null`                       | `null`        | Initial value when uncontrolled.                                                 |
| `max`                   | `number`                               | `5`           | Number of icons and the maximum value.                                           |
| `precision`             | `number`                               | `1`           | Smallest selectable step, for example `0.5`.                                     |
| `onChange`              | `(value: number \| null) => void`      | —             | Called with the new value, or `null` when the current value is clicked again.    |
| `onChangeActive`        | `(value: number \| null) => void`      | —             | Called with the hovered value, or `null` when the pointer leaves.                |
| `readOnly`              | `boolean`                              | `false`       | Shows the value without allowing changes. Inherited from the field when inside one. |
| `disabled`              | `boolean`                              | `false`       | Disables the rating. Inherited from the field when inside one.                   |
| `size`                  | `"sm" \| "md" \| "lg"`                 | `"md"`        | Icon size. Inherited from the field when inside one.                             |
| `icon`                  | `IconComponent`                        | `Star`        | Icon for filled values.                                                          |
| `emptyIcon`             | `IconComponent`                        | `icon`        | Icon for empty values.                                                           |
| `iconVariant`           | `IconVariant`                          | `"filled"`    | Variant of the filled icon.                                                      |
| `emptyIconVariant`      | `IconVariant`                          | `"regular"`   | Variant of the empty icon.                                                       |
| `color`                 | `ColorTokens \| ThemeTokens \| string` | `"primary"`   | Color of filled icons.                                                           |
| `emptyColor`            | `ColorTokens \| ThemeTokens \| string` | `"hairline"`  | Color of empty icons. It is `primary` when the field shows a validation message. |
| `highlightSelectedOnly` | `boolean`                              | `false`       | Fills only the icon that matches the value.                                      |
| `getLabelText`          | `(value: number) => string`            | `"N Star(s)"` | Builds the accessible description of a value.                                    |
| `id`                    | `string`                               | field `name`  | The element id. Inside a field, it defaults to the field name, so `Field.Label` can point to the rating. |

The package also exports `roundRatingValue(value, precision)`. It rounds a value to the nearest multiple of `precision`.

## Keyboard and accessibility

- An interactive rating is focusable and has `role="slider"` with `aria-valuemin` `0`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext`.
- `ArrowRight` and `ArrowUp` add `precision`. `ArrowLeft` and `ArrowDown` subtract `precision`. `Home` sets `0`. `End` sets `max`.
- A read-only rating has `role="img"` with a label.
- A disabled rating has `aria-disabled` and is removed from the tab order.
- Use `Field.Label` to name the rating inside a field.

## Variants and states

- **Hover.** The hovered icon grows, tilts, and springs back. Pressing it squishes it. The fill follows the pointer until it leaves the rating.
- **Clear.** Click the selected value again to set the value to `null`.
- **Confetti.** A confetti burst plays when the user selects the highest value, or the value one `precision` step below it.
- **Read-only.** The rating shows its value and ignores input.
- **Disabled.** The rating shows at half opacity with a `not-allowed` cursor and ignores input.
- **Validation.** Inside a field that shows a validation message, empty icons use the `primary` color.

The stories show each state. See [Examples](#examples).

## Related

- [Slider](./slider.md)
- [Field](./field.md)
- [Confetti burst](./confetti-burst.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/rating/src/Rating.tsx`](../../../components/rating/src/Rating.tsx)
- [`components/rating/src/Rating.stories.tsx`](../../../components/rating/src/Rating.stories.tsx)
- [`components/rating/src/Rating.test.tsx`](../../../components/rating/src/Rating.test.tsx)
