---
title: Progress
description: A themed progress bar with an animated indicator that shows how far a task has progressed.
documentType: reference
tags: [component, progress, display]
component:
  name: progress
  package: "@cyclone-ui/progress"
  stories:
    - title: Display/Progress
      file: components/progress/src/Progress.stories.tsx
    - title: Display/Progress/Tailwind
      file: components/progress/src/Progress.tailwind.stories.tsx
      style: tailwind
---

# Progress

`Progress` is a progress bar built on the Tamagui `Progress`. The indicator moves with a `bouncy` transition. Use it to show how far a task or a load has progressed.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add progress
pnpm install
```

- **File:** `Progress.tsx`. The CLI writes it to `<path>/progress/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/progress`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { Progress } from "@cyclone-ui/progress";
```

## Usage

```tsx
<Progress value={40} />
<Progress value={75} theme="success" />
<Progress value={20} max={50} color="data-pink-emphasis" />
```

## Anatomy

```tsx
<Progress value={40} />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Progress` | The Tamagui `Progress` from `@tamagui/progress`: a `YStack` with `role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` | The track. With `variant="solid"`, it has the `sunken` background. With `variant="dashed"`, it is transparent and holds the segments in a row. |
| Indicator (`solid`) | `Progress.Indicator` from `@tamagui/progress` | The filled part. Its background is `color`. It moves with the `bouncy` transition. |
| Segments (`dashed`) | One Tamagui `View` per segment, with rounded ends | Each segment is `sunken` when empty and `color` when filled. |

## Examples

The examples are the stories in [`Progress.stories.tsx`](../../../components/progress/src/Progress.stories.tsx). In each story, the value starts at 0 and grows by a random step every second, and goes back to the start after 100.

| Stories | What they show |
| --- | --- |
| `Base` | The `solid` bar. |
| `Brand`, `Discovery`, `Info`, `Success`, `Warning`, `Danger` | The `solid` bar in each theme. |
| `Dashed`, `DashedBrand` | The `dashed` variant, without a theme and in the `brand` theme. |
| `DashedCustomSegments` | The `dashed` variant with `segments={24}`. |
| `DataColor` | `color="data-pink-emphasis"`. |

[`Progress.tailwind.stories.tsx`](../../../components/progress/src/Progress.tailwind.stories.tsx) (title: `Display/Progress/Tailwind`) has the same stories for the Tailwind CSS version in `Progress.tailwind.tsx`.

## Props

`ProgressProps` is `GetProps<typeof Progress>`. It accepts the Tamagui `Progress` props, with the defaults below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | Current progress. |
| `max` | `number` | `100` | Value that equals 100% progress. |
| `size` | size token | `"10xl"` | Size of the bar. |
| `color` | `ColorTokens \| ThemeTokens` | `"primary"` | Color token for the indicator. |
| `theme` | theme name | — | Theme. The `primary` color follows it. |
| `variant` | `"solid" \| "dashed"` | `"solid"` | `solid` fills a continuous bar. `dashed` splits the track into segments that fill as the value increases. |
| `segments` | `number` | — | The number of `dashed` segments. By default, the bar shows as many segments as fit the track width, with each segment a tall pill. |

The `solid` track uses the `sunken` background color. A value below `0` or above `max` shows as empty.

## Variants

- **`solid`:** One bar. The indicator moves with the `bouncy` transition.
- **`dashed`:** Segments. A segment that fills grows to 1.3 times its size for 150 ms. When one update fills several segments, they fill one after another: 40 ms apart, and in 600 ms at most for the full sweep. Segments empty at once.
- **Themes and colors:** The stories show the `brand`, `discovery`, `info`, `success`, `warning`, and `danger` themes. A `DataColor` story sets `color="data-pink-emphasis"`.

## Accessibility

- The source adds no extra labels. It relies on the Tamagui `Progress` primitive.
- The track has `role="progressbar"`, `aria-valuemin="0"`, and `aria-valuemax` set to `max`. `aria-valuenow` is the rounded value, and `aria-valuetext` is the percent, for example "40%". The Tamagui `getValueLabel(value, max)` prop changes this text.
- A value below `0` or above `max` has no `aria-valuenow` or `aria-valuetext`.
- The bar has no accessible name. Set `aria-label`, or `aria-labelledby` to point at a visible label.
- The bar does not take keyboard focus.

## Related

- [Spinner](./spinner.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/progress/src/Progress.tsx`](../../../components/progress/src/Progress.tsx)
- [`components/progress/src/Progress.stories.tsx`](../../../components/progress/src/Progress.stories.tsx)
- [`components/progress/src/Progress.tailwind.tsx`](../../../components/progress/src/Progress.tailwind.tsx)
- [`components/progress/src/Progress.tailwind.stories.tsx`](../../../components/progress/src/Progress.tailwind.stories.tsx)
