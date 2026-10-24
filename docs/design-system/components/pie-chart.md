---
title: Pie chart
description: Reference for the PieChart component, a composable pie and donut chart with gradient sectors and a legend.
documentType: reference
tags: [component, chart]
---

# Pie chart

`PieChart` shows how a whole splits into a few parts. Sectors take gradient colors from the theme. They can be padded, overlapped, labeled, rounded, or given a glow.

Set `innerRadius` above `0` to draw a donut. The chart also supports legend selection, a background pattern, and a loading skeleton.

Source: [`components/pie-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/pie-chart)

## Import

```tsx
import { PieChart } from "@cyclone-ui/pie-chart";
```

Place the parts inside `PieChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { name: "Design", value: 40 },
  { name: "Engineering", value: 60 }
];

<PieChart
  data={data}
  dataKey="value"
  nameKey="name"
  config={{
    Design: { label: "Design", colors: ["data-blue-emphasis"] },
    Engineering: { label: "Engineering", colors: ["data-green-emphasis"] }
  }}
>
  <PieChart.Pie innerRadius="50%" />
  <PieChart.Tooltip />
  <PieChart.Legend isClickable />
</PieChart>
```

`config` is keyed by sector name.

## Anatomy

| Part | Purpose |
| --- | --- |
| `PieChart` | Owns the data, selection, and loading indicator. |
| `PieChart.Pie` | The sectors. |
| `PieChart.Label` | Sector labels. Place the label inside `Pie`. |
| `PieChart.Tooltip`, `PieChart.Legend` | Hover details and sector labels. |
| `PieChart.Background` | A [background pattern](./chart.md#background-patterns). |

## Root props

`PieChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | One sector per row. Required. |
| `dataKey` | - | Key that holds the numeric value. Required. |
| `nameKey` | - | Key that holds the sector name. Required. |
| `config` | - | Sector colors and labels, keyed by name. Required. |
| `children` | - | The composed parts. Required. |
| `defaultSelectedSector` | `null` | The sector selected on first render. |
| `onSelectionChange` | - | Called with `{ dataKey, value }`, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `chartProps` | - | Extra props for the Recharts pie chart. |

## Pie props

| Prop | Purpose |
| --- | --- |
| `variant` | `gradient`. The fill is a diagonal color gradient. |
| `innerRadius` | Set above `0` for a donut. A number or a string. |
| `outerRadius` | Outer radius. A number or a string. |
| `cornerRadius` | Corner radius of each sector, in pixels. |
| `paddingAngle` | Gap between sectors, in degrees. A negative value overlaps them. |
| `startAngle`, `endAngle` | Where the pie starts and ends. |
| `isClickable` | A click selects a sector. |
| `glowingSectors` | Sector names that render with a soft outer glow. |
| `children` | Optional `Label`. |
| `pieProps` | Extra Recharts pie props. `data`, `dataKey`, and `nameKey` are omitted. |

`Label` takes `dataKey` (the label text; it defaults to the pie value key) and `labelListProps`.

## Tooltip, legend, and background

`Tooltip` takes `variant`, `roundness`, and `defaultIndex`. `Legend` takes `variant`, `align`, `verticalAlign`, and `isClickable`. `Background` takes a `variant` from the [pattern list](./chart.md#background-patterns).

## Related pages

- [Chart](./chart.md)
- [Radial chart](./radial-chart.md)
