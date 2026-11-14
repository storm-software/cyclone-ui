---
title: Circular Progress
description: Reference for the CircularProgress component, a ring that shows determinate progress.
documentType: reference
tags: [component, display, progress, indicator]
component:
  name: circular-progress
  package: "@cyclone-ui/circular-progress"
  stories:
    - title: Display/CircularProgress
      file: components/circular-progress/src/CircularProgress.stories.tsx
    - title: Display/CircularProgress/Tailwind
      file: components/circular-progress/src/CircularProgress.tailwind.stories.tsx
      style: tailwind
---

# Circular Progress

`CircularProgress` draws a ring with SVG on top of the Tamagui `Progress` primitive. An arc shows how much of `max` is done.

Use it to show determinate progress in a small space. For a bar, see [Progress](./progress.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add circular-progress
pnpm install
```

- **File:** `CircularProgress.tsx`. The CLI writes it to `<path>/circular-progress/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/progress`, and `react-native-svg`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { CircularProgress } from "@cyclone-ui/circular-progress";
```

## Usage

```tsx
<CircularProgress value={40} size="md" theme="success" />
<CircularProgress value={75} color="data-pink-emphasis" />
```

## Anatomy

```tsx
<CircularProgress value={40} />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `CircularProgress` | The Tamagui `Progress` from `@tamagui/progress`: a square `YStack` with `role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext`, and a transparent background | The frame. Its width and height come from `size`. |
| Ring (`solid`) | A `react-native-svg` `Svg` with a track `Circle` and an arc `Path` | The track is a full circle in `trackColor`. The arc is in `color`. It starts at the top, runs clockwise, and has round ends. |
| Segments (`dashed`) | One Tamagui `View` per segment, each in a rotated layer | The segments sit in a circle. Each one is `sunken` when empty and `color` when filled. |

## Examples

The examples are the stories in [`CircularProgress.stories.tsx`](../../../components/circular-progress/src/CircularProgress.stories.tsx). In each story, the value starts at 0 and grows by a random step every second, and goes back to the start after 100.

| Stories | What they show |
| --- | --- |
| `Base` | The `solid` ring at the default `sm` size. |
| `Small`, `Medium`, `Large`, `ExtraLarge` | The `sm`, `md`, `lg`, and `xl` sizes. |
| `Brand`, `Discovery`, `Info`, `Success`, `Warning`, `Danger` | The `solid` ring in each theme. |
| `Dashed`, `DashedBrand`, `DashedLarge` | The `dashed` variant, in the `brand` theme, and at the `lg` size. |
| `DashedCustomSegments` | The `dashed` variant with `segments={12}`. |
| `DataColor` | `color="data-pink-emphasis"`. |

[`CircularProgress.tailwind.stories.tsx`](../../../components/circular-progress/src/CircularProgress.tailwind.stories.tsx) (title: `Display/CircularProgress/Tailwind`) has the same stories for the Tailwind CSS version in `CircularProgress.tailwind.tsx`.

## Props

`CircularProgress` accepts the props of the Tamagui `Progress`, except `color` and `size`, which it redefines.

| Prop    | Type                                  | Default     | Description                                                           |
| ------- | ------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `value` | `number \| null`                      | `0`         | The progress. A value outside 0 to `max` shows as 0. It is rounded to a whole number. |
| `max`   | `number`                              | `100`       | The value that equals a full ring. A value that is not a positive number becomes `100`. |
| `size`  | `"sm" \| "md" \| "lg" \| "xl"` or a size token | `"sm"` | The width and height of the ring.                                  |
| `color` | color or theme token                  | `"primary"` | The color of the arc.                                                 |
| `theme` | theme name                            | -           | The theme that sets the `primary` color. The stories use `brand`, `discovery`, `info`, `success`, `warning`, and `danger`. |
| `variant` | `"solid" \| "dashed"`              | `"solid"`   | `solid` draws a continuous ring that sweeps to each new value. `dashed` splits the ring into segments that fill as the value increases. |
| `segments` | `number`                           | `20`        | The number of `dashed` segments around the ring. More segments are thinner. |
| `trackColor` | color or theme token             | `"hairline"` | The color of the `solid` track. |

## Sizes

| Size | Size token |
| ---- | ---------- |
| `sm` | `10xl`     |
| `md` | `14xl`     |
| `lg` | `18xl`     |
| `xl` | `26xl`     |

See [Design tokens](../tokens/index.md).

## Appearance

- The `solid` track is a full circle in the `hairline` color, or in `trackColor`.
- The arc starts at the top and runs clockwise. It has round ends. On the web, it moves to a new value with a 300 ms `ease-out` transition. On native, it moves at once.
- In the `dashed` variant, a segment that fills grows to 1.3 times its size for 150 ms. When one update fills several segments, they fill one after another: 40 ms apart, and in 600 ms at most for the full sweep. Segments empty at once.
- The `DataColor` story sets `color` to `data-pink-emphasis`.

## Accessibility

- The ring comes from the Tamagui `Progress` primitive, which receives `value` and `max`. The component adds no label. Add a text label near the ring if the value is important.
- The frame has `role="progressbar"`, `aria-valuemin="0"`, and `aria-valuemax` set to `max`. `aria-valuenow` is the rounded value, and `aria-valuetext` is the percent, for example "40%". A value below `0` or above `max` has neither.
- The ring has no accessible name. Set `aria-label`, or `aria-labelledby` to point at a visible label.
- The SVG and the segments ignore the pointer. The ring does not take keyboard focus.

## Related

- [Progress](./progress.md)
- [Spinner](./spinner.md)

## Source

- [`components/circular-progress/src/CircularProgress.tsx`](../../../components/circular-progress/src/CircularProgress.tsx)
- [`components/circular-progress/src/CircularProgress.stories.tsx`](../../../components/circular-progress/src/CircularProgress.stories.tsx) (title: `Display/CircularProgress`)
- [`components/circular-progress/src/CircularProgress.tailwind.tsx`](../../../components/circular-progress/src/CircularProgress.tailwind.tsx)
- [`components/circular-progress/src/CircularProgress.tailwind.stories.tsx`](../../../components/circular-progress/src/CircularProgress.tailwind.stories.tsx) (title: `Display/CircularProgress/Tailwind`)
