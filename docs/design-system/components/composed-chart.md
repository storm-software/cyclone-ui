---
title: Composed chart
description: Reference for the ComposedChart component, which draws bars and lines on the same axes.
documentType: reference
tags: [component, chart]
---

# Composed chart

`ComposedChart` draws bars and lines on shared axes. Use it to show a value next to a related trend, such as revenue bars with a growth line.

Bars keep the fill and glow styles of the [bar chart](./bar-chart.md). Lines keep the stroke and point styles of the [line chart](./line-chart.md). The chart also supports a zoom brush, legend selection, and a loading skeleton.

Source: [`components/composed-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/composed-chart)

## Import

```tsx
import { ComposedChart } from "@cyclone-ui/composed-chart";
```

Place the parts inside `ComposedChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { month: "Jan", revenue: 120, growth: 4 },
  { month: "Feb", revenue: 160, growth: 8 }
];

<ComposedChart
  data={data}
  xDataKey="month"
  config={{
    revenue: { label: "Revenue" },
    growth: { label: "Growth" }
  }}
>
  <ComposedChart.XAxis dataKey="month" />
  <ComposedChart.YAxis />
  <ComposedChart.Bar dataKey="revenue" />
  <ComposedChart.Line dataKey="growth" strokeVariant="solid">
    <ComposedChart.Dot />
  </ComposedChart.Line>
  <ComposedChart.Tooltip />
  <ComposedChart.Legend />
</ComposedChart>
```

`config` keys must exist on each data row.

## Anatomy

| Part | Purpose |
| --- | --- |
| `ComposedChart` | Owns the data, selection, loading skeleton, and brush range. |
| `ComposedChart.Bar` | One bar series. |
| `ComposedChart.Line` | One line series. |
| `ComposedChart.Dot`, `ComposedChart.ActiveDot` | Point markers. Place them inside a line. |
| `ComposedChart.XAxis`, `ComposedChart.YAxis`, `ComposedChart.Grid` | Axes and grid. |
| `ComposedChart.Tooltip`, `ComposedChart.Legend` | Hover details and series labels. |
| `ComposedChart.Brush` | Zoom range. Set `xDataKey` so the handles can label the range. |

## Root props

`ComposedChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | The rows. Required. |
| `config` | - | Colors and labels for bars and lines. Required. |
| `children` | - | The composed parts. Required. |
| `curveType` | `"linear"` | Default curve for every line. |
| `animationType` | `"left-to-right"` | Default intro for every bar and line. |
| `barGap` | - | Gap between bars that share a category. |
| `barCategoryGap` | - | Gap between bar categories. |
| `defaultSelectedDataKey` | `null` | The series selected on first render. |
| `onSelectionChange` | - | Called with the selected series key, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `loadingBars` | `12` | Number of bars in the skeleton. |
| `xDataKey` | - | Category key for brush labels. |
| `chartProps` | - | Extra props for the Recharts composed chart. |

## Bar and line props

`ComposedChart.Bar`:

| Prop | Purpose |
| --- | --- |
| `dataKey` | Series key. Required. |
| `variant` | `default`, `hatched`, `duotone`, `duotone-reverse`, `gradient`, or `stripped`. |
| `radius` | Corner radius in pixels. |
| `glow` | Adds a soft glow. |
| `animationType` | Grow-in order for this bar. |
| `isClickable` | A click selects this bar. |
| `enableHoverHighlight` | Dims this bar when another column is hovered. |
| `barProps` | Extra props for the Recharts bar. |

`ComposedChart.Line`:

| Prop | Purpose |
| --- | --- |
| `dataKey` | Series key. Required. |
| `strokeVariant` | `solid`, `dashed`, or `animated-dashed`. |
| `curveType` | Curve for this line. |
| `animationType` | Intro for this line. |
| `connectNulls` | Join segments across null values. |
| `glow` | Adds a soft glow. |
| `isClickable` | A click selects this line. |
| `children` | Optional `Dot` and `ActiveDot`. |
| `lineProps` | Extra props for the Recharts line. |

`Dot` and `ActiveDot` take `variant`: `default`, `border`, or `colored-border`.

## Tooltip and legend

`Tooltip` takes `variant`, `roundness`, `defaultIndex`, and `cursor`. `Legend` takes `variant`, `align`, `verticalAlign`, and `isClickable`. The shared values are on the [chart](./chart.md) page.

## Related pages

- [Chart](./chart.md)
- [Bar chart](./bar-chart.md)
- [Line chart](./line-chart.md)
