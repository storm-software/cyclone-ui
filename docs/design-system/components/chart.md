---
title: Chart
description: Reference for the shared Cyclone chart parts that map series to theme colors and supply the tooltip, legend, brush, and loading state.
documentType: reference
tags: [component, chart]
---

# Chart

`@cyclone-ui/chart` holds the parts that the Cyclone chart packages share. The container maps each series to theme colors. The tooltip, legend, point markers, zoom brush, background patterns, and loading state sit on top of [Recharts](https://recharts.org).

Use this package when you build a custom Recharts chart that should match the other Cyclone charts. The named chart packages ([area](./area-chart.md), [bar](./bar-chart.md), [line](./line-chart.md), and the others) already compose these parts.

Source: [`components/chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/chart)

## Import

```tsx
import {
  ChartContainer,
  type ChartConfig
} from "@cyclone-ui/chart";
```

`useChart` reads the config. Call it inside `ChartContainer`. Outside that container it throws `useChart must be used within a <ChartContainer />`.

## Series config

`ChartConfig` is a record. Each key is a series name.

| Field | Type | Purpose |
| --- | --- | --- |
| `label` | `ReactNode` | The name shown in the tooltip and legend. |
| `icon` | component | An optional icon for the legend. |
| `colors` | `ChartColor[]` | One color for a solid series, or several for a gradient. |

A `ChartColor` is a theme key (for example `data-blue-emphasis`), a color token, or any CSS color. Theme keys resolve to CSS variables, so the series follows the active light or dark theme.

When a series omits `colors`, the container assigns `CHART_DATA_COLORS` in this order: `data-blue-emphasis`, `data-green-emphasis`, `data-orange-emphasis`, `data-purple-emphasis`, `data-pink-emphasis`, `data-red-emphasis`, `data-yellow-emphasis`, `data-neutral-emphasis`.

`ChartContainer` writes each color as `--color-<key>-<index>` on the chart.

## Container

`ChartContainer` sizes a Recharts chart to its box. The container, including `footer`, keeps a 16:9 ratio unless you set a height.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `config` | `ChartConfig` | - | Series labels and colors. Required. |
| `children` | Recharts chart | - | The chart element. Required. |
| `footer` | `ReactNode` | - | Content under the chart, such as a zoom brush. |
| `initialDimension` | `{ width, height }` | `{ width: 320, height: 200 }` | The size Recharts uses before layout. |

The container also accepts `YStack` props except `children`.

`LoadingIndicator` covers the chart with a spinner and the word "Loading" when `isLoading` is true.

## Tooltip, legend, and dots

| Export | Values |
| --- | --- |
| `TooltipVariant` | `default`, `frosted-glass` |
| `TooltipRoundness` | `sm`, `md`, `lg`, `xl` |
| `ChartLegendVariant` | `square`, `circle`, `circle-outline`, `rounded-square`, `rounded-square-outline`, `vertical-bar`, `horizontal-bar` |
| `DotVariant` | `default`, `border`, `colored-border` |

`ChartTooltipContent` accepts Recharts tooltip props plus `hideLabel`. `ChartLegendContent` accepts Recharts legend props plus `hideIcon`.

## Background patterns

`ChartBackground` draws one pattern. `variant` is required.

`dots`, `grid`, `cross-hatch`, `diagonal-lines`, `plus`, `falling-triangles`, `4-pointed-star`, `tiny-checkers`, `overlapping-circles`, `wiggle-lines`, `bubbles`.

## Zoom brush

`ChartBrush` is a slot. The chart packages render the brush when you place it as a child. It does not draw by itself.

| Prop | Purpose |
| --- | --- |
| `height` | Preview strip height in pixels. |
| `formatLabel` | Formats the range-handle labels. |
| `onChange` | Fires as the range moves. The argument is a `ChartBrushRange`. |

`ChartBrushView` draws the miniature chart. Its `variant` is `line`, `area`, or `bar`.

## Motion

`ChartAnimationType` is `none`, `left-to-right`, `right-to-left`, `center-out`, or `edges-in`. The chart packages use this for the intro reveal. The reveal lasts 1 second.

## Related pages

- [Area chart](./area-chart.md)
- [Bar chart](./bar-chart.md)
- [Line chart](./line-chart.md)
- [Composed chart](./composed-chart.md)
- [Pie chart](./pie-chart.md)
- [Radar chart](./radar-chart.md)
- [Radial chart](./radial-chart.md)
- [Sankey chart](./sankey-chart.md)
