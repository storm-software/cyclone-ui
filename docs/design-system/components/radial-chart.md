---
title: Radial chart
description: Reference for the RadialChart component, a composable radial bar chart that draws each category as a ring.
documentType: reference
tags: [component, chart]
---

# Radial chart

`RadialChart` compares a few values as progress around a circle. Each category is a ring. The arc can be a full circle or a semicircle. Colors come from the theme.

The chart also supports legend selection and a loading skeleton.

Source: [`components/radial-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/radial-chart)

## Import

```tsx
import { RadialChart } from "@cyclone-ui/radial-chart";
```

Place the parts inside `RadialChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { name: "Storage", value: 72 },
  { name: "Bandwidth", value: 40 }
];

<RadialChart
  data={data}
  nameKey="name"
  max={100}
  variant="semi"
  config={{
    Storage: { label: "Storage" },
    Bandwidth: { label: "Bandwidth" }
  }}
>
  <RadialChart.RadialBar dataKey="value" showBackground />
  <RadialChart.Tooltip />
  <RadialChart.Legend />
</RadialChart>
```

`config` is keyed by each bar's name.

## Anatomy

| Part | Purpose |
| --- | --- |
| `RadialChart` | Owns the data, the arc shape, selection, and the loading skeleton. |
| `RadialChart.RadialBar` | The rings. |
| `RadialChart.Tooltip`, `RadialChart.Legend` | Hover details and bar labels. |

## Root props

`RadialChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Purpose |
| --- | --- |
| `data` | One bar per row. Required. |
| `nameKey` | Key that holds each bar's name. Required. |
| `config` | Bar colors and labels, keyed by name. Required. |
| `children` | The composed parts. Required. |
| `variant` | `full` or `semi`. |
| `max` | The value a full sweep represents. Without it, the largest bar fills the arc. Set it (for example `100`) for a gauge. |
| `innerRadius`, `outerRadius` | Ring size. A number or a string. |
| `defaultSelectedDataKey` | The bar selected on first render. Default `null`. |
| `onSelectionChange` | Called with `{ dataKey, value }`, or `null`. |
| `isLoading` | Shows the loading skeleton. Default `false`. |
| `backgroundVariant` | A [background pattern](./chart.md#background-patterns). |
| `chartProps` | Extra props for the Recharts radial bar chart. |

## Radial bar props

| Prop | Purpose |
| --- | --- |
| `dataKey` | Value key. It sets each bar's size. |
| `cornerRadius` | Corner radius of the bars. |
| `barSize` | Thickness of each radial bar. |
| `showBackground` | Draws the unfilled track behind each bar. |
| `isClickable` | A click selects a bar. |
| `radialBarProps` | Extra Recharts radial bar props. `dataKey` is omitted. |

## Tooltip and legend

`Tooltip` takes `variant`, `roundness`, and `defaultIndex`. `Legend` takes `variant`, `align`, `verticalAlign`, and `isClickable`. The shared values are on the [chart](./chart.md) page.

## Related pages

- [Chart](./chart.md)
- [Pie chart](./pie-chart.md)
- [Progress](./progress.md)
