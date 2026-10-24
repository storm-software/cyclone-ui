---
title: Bar chart
description: Reference for the BarChart component, a composable bar chart with grouped, stacked, and horizontal layouts.
documentType: reference
tags: [component, chart]
---

# Bar chart

`BarChart` compares values across categories. It is built on Recharts and the shared [chart](./chart.md) parts.

Bars can be grouped, stacked, or shown as percentages. They can run vertically or horizontally. Fills include a solid color, a gradient, a hatch, a duotone, and stripes.

Source: [`components/bar-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/bar-chart)

## Import

```tsx
import { BarChart } from "@cyclone-ui/bar-chart";
```

Place the parts inside `BarChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { quarter: "Q1", desktop: 40, mobile: 24 },
  { quarter: "Q2", desktop: 52, mobile: 31 }
];

<BarChart
  data={data}
  xDataKey="quarter"
  layout="vertical"
  config={{
    desktop: { label: "Desktop" },
    mobile: { label: "Mobile" }
  }}
>
  <BarChart.XAxis dataKey="quarter" />
  <BarChart.YAxis />
  <BarChart.Bar dataKey="desktop" />
  <BarChart.Bar dataKey="mobile" variant="hatched" />
  <BarChart.Tooltip />
  <BarChart.Legend isClickable />
</BarChart>
```

`config` keys must exist on each data row. A series without `colors` takes the next [data palette](./chart.md#series-config) color.

## Anatomy

| Part | Purpose |
| --- | --- |
| `BarChart` | Owns the data, selection, loading skeleton, and brush range. |
| `BarChart.Bar` | One series. |
| `BarChart.XAxis`, `BarChart.YAxis`, `BarChart.Grid` | Axes and grid. They pass Recharts props through. |
| `BarChart.Tooltip`, `BarChart.Legend` | Hover details and series labels. |
| `BarChart.Brush` | Zoom range. Set `xDataKey` so the handles can label the range. |

## Root props

`BarChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | The rows. Required. |
| `config` | - | Series colors and labels. Required. |
| `children` | - | The composed parts. Required. |
| `stackType` | `"default"` | `default` groups bars. `stacked` stacks them. `percent` shows each bar as a share of the category. |
| `layout` | `"vertical"` | `vertical` draws columns. `horizontal` draws bars from the left. |
| `barRadius` | chart default | Corner radius for every bar. |
| `animationType` | `"left-to-right"` | Grow-in order. `"none"` skips it. Reduced motion also falls back to `"none"`. |
| `barGap` | - | Gap between bars in one category. |
| `barCategoryGap` | - | Gap between categories. |
| `backgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedDataKey` | `null` | The series selected on first render. |
| `onSelectionChange` | - | Called with the selected series key, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `loadingBars` | chart default | Number of bars in the skeleton. |
| `xDataKey` | - | Category key for brush labels. |
| `chartProps` | - | Extra props for the Recharts bar chart. |

Every bar grows from its baseline: the bottom when the layout is vertical, and the left when it is horizontal.

## Bar props

| Prop | Purpose |
| --- | --- |
| `dataKey` | Series key. It must exist on the data and the config. |
| `variant` | `default`, `hatched`, `duotone`, `duotone-reverse`, `gradient`, or `stripped`. |
| `radius` | Corner radius for this bar. Falls back to the chart radius. |
| `animationType` | Grow-in order for this bar. |
| `isClickable` | A click selects this bar. |
| `enableHoverHighlight` | Dims the other bars while one is hovered. |
| `glowing` | Adds a soft outer glow. |
| `bufferBar` | Draws the last data point as a hatched buffer bar. |
| `barProps` | Extra props for the Recharts bar. |

## Tooltip and legend

`Tooltip` takes `variant` (`default` or `frosted-glass`), `roundness` (`sm`, `md`, `lg`, or `xl`), and `defaultIndex`.

`Legend` takes `variant`, `align` (`left`, `center`, or `right`), `verticalAlign` (`top`, `middle`, or `bottom`), and `isClickable`.

## Related pages

- [Chart](./chart.md)
- [Composed chart](./composed-chart.md)
- [Line chart](./line-chart.md)
