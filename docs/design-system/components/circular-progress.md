---
title: Circular Progress
description: Reference for the CircularProgress component, a ring that shows determinate progress.
documentType: reference
tags: [component, display, progress, indicator]
---

# Circular Progress

`CircularProgress` draws a ring with SVG on top of the Tamagui `Progress` primitive. An arc shows how much of `max` is done.

Use it to show determinate progress in a small space. For a bar, see [Progress](./progress.md).

## Import

```tsx
import { CircularProgress } from "@cyclone-ui/circular-progress";
```

## Usage

```tsx
<CircularProgress value={40} size="md" theme="success" />
<CircularProgress value={75} color="data-pink-emphasis" />
```

## Props

`CircularProgress` accepts the props of the Tamagui `Progress`, except `color` and `size`, which it redefines.

| Prop    | Type                                  | Default     | Description                                                           |
| ------- | ------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `value` | `number \| null`                      | `0`         | The progress. A value outside 0 to `max` shows as 0. It is rounded to a whole number. |
| `max`   | `number`                              | `100`       | The value that equals a full ring. A value that is not a positive number becomes `100`. |
| `size`  | `"sm" \| "md" \| "lg" \| "xl"` or a size token | `"sm"` | The width and height of the ring.                                  |
| `color` | color or theme token                  | `"primary"` | The color of the arc.                                                 |
| `theme` | theme name                            | -           | The theme that sets the `primary` color. The stories use `brand`, `discovery`, `info`, `success`, `warning`, and `danger`. |

## Sizes

| Size | Size token |
| ---- | ---------- |
| `sm` | `10xl`     |
| `md` | `14xl`     |
| `lg` | `18xl`     |
| `xl` | `26xl`     |

See [Design tokens](../tokens/index.md).

## Appearance

- The track is a full circle in the `sunken` color.
- The arc starts at the top and runs clockwise. It has round ends.
- The `DataColor` story sets `color` to `data-pink-emphasis`.

## Accessibility

The ring comes from the Tamagui `Progress` primitive, which receives `value` and `max`. The component adds no label. Add a text label near the ring if the value is important.

## Related

- [Progress](./progress.md)
- [Spinner](./spinner.md)

## Source

- [`components/circular-progress/src/CircularProgress.tsx`](../../../components/circular-progress/src/CircularProgress.tsx)
- [`components/circular-progress/src/CircularProgress.stories.tsx`](../../../components/circular-progress/src/CircularProgress.stories.tsx) (title: `Display/CircularProgress`)
