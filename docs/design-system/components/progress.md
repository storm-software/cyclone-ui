---
title: Progress
description: A themed progress bar with an animated indicator that shows how far a task has progressed.
documentType: reference
tags: [component, progress, display]
---

# Progress

`Progress` is a progress bar built on the Tamagui `Progress`. The indicator moves with a `bouncy` transition. Use it to show how far a task or a load has progressed.

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

## Props

`ProgressProps` is `GetProps<typeof Progress>`. It accepts the Tamagui `Progress` props, with the defaults below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | Current progress. |
| `max` | `number` | `100` | Value that equals 100% progress. |
| `size` | size token | `"10xl"` | Size of the bar. |
| `color` | `ColorTokens \| ThemeTokens` | `"primary"` | Color token for the indicator. |
| `theme` | theme name | — | Theme. The `primary` color follows it. |

The track uses the `sunken` background color.

## Variants

The stories show these themes: `brand`, `discovery`, `info`, `success`, `warning`, and `danger`. A `DataColor` story sets `color="data-pink-emphasis"`.

## Accessibility

The source adds no extra labels. It relies on the Tamagui `Progress` primitive.

## Related

- [Spinner](./spinner.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/progress/src/Progress.tsx`](../../../components/progress/src/Progress.tsx)
- [`components/progress/src/Progress.stories.tsx`](../../../components/progress/src/Progress.stories.tsx)
