---
title: Area chart
description: Reference for the AreaChart component, a composable area chart with stack modes, fill styles, a zoom brush, and a loading skeleton.
documentType: reference
tags: [component, chart]
---

# Area chart

`AreaChart` draws how values change over time and how series add up. It is built on Recharts and the shared [chart](./chart.md) parts.

Areas can overlap, stack, or expand to 100%. Each area can use a gradient, solid, dotted, line, or hatched fill, and a solid, dashed, or animated stroke.

Source: [`components/area-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/area-chart)

## Import

```tsx
import { AreaChart } from "@cyclone-ui/area-chart";
```

Place the parts inside `AreaChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { month: "Jan", revenue: 120, cost: 80 },
  { month: "Feb", revenue: 160, cost: 90 }
];

<AreaChart
  data={data}
  xDataKey="month"
  stackType="stacked"
  config={{
    revenue: { label: "Revenue", colors: ["data-blue-emphasis"] },
    cost: { label: "Cost", colors: ["data-orange-emphasis"] }
  }}
>
  <AreaChart.Grid />
  <AreaChart.XAxis dataKey="month" />
  <AreaChart.YAxis />
  <AreaChart.Area dataKey="revenue" variant="gradient" />
  <AreaChart.Area dataKey="cost" variant="solid" />
  <AreaChart.Tooltip />
  <AreaChart.Legend />
  <AreaChart.Brush />
</AreaChart>
```

`config` keys must exist on each data row.

## Anatomy

| Part | Purpose |
| --- | --- |
| `AreaChart` | Owns the data, selection, loading skeleton, and brush range. |
| `AreaChart.Area` | One series. |
| `AreaChart.Dot`, `AreaChart.ActiveDot` | Point markers. Place them inside an area. |
| `AreaChart.XAxis`, `AreaChart.YAxis`, `AreaChart.Grid` | Axes and grid. They pass Recharts props through. Axes hide while the chart loads. |
| `AreaChart.Tooltip`, `AreaChart.Legend` | Hover details and series labels. |
| `AreaChart.Brush` | Zoom range. Set `xDataKey` on the chart so the handles can label the range. |

## Root props

`AreaChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | The rows. Required. |
| `config` | - | Series colors and labels. Required. |
| `children` | - | The composed parts. Required. |
| `curveType` | `"linear"` | Default curve for every area. A Recharts `CurveType`. |
| `animationType` | `"left-to-right"` | Default intro. See [Chart motion](./chart.md#motion). |
| `stackType` | `"default"` | `default` overlaps. `stacked` adds the series. `expanded` shows each series as a share of the total. |
| `defaultSelectedDataKey` | `null` | The series selected on first render. |
| `onSelectionChange` | - | Called with the selected series key, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `loadingPoints` | - | Number of points in the skeleton. |
| `xDataKey` | - | Category key. The brush uses it for handle labels. |
| `chartProps` | - | Extra props for the Recharts area chart. |

The expanded stack formats the value axis as percentages.

## Area props

| Prop | Default | Purpose |
| --- | --- | --- |
| `dataKey` | - | Series key. It must exist on the data and the config. |
| `variant` | - | `gradient`, `gradient-reverse`, `solid`, `dotted`, `lines`, or `hatched`. |
| `strokeVariant` | - | `solid`, `dashed`, or `animated-dashed`. |
| `strokeWidth` | - | Stroke thickness in pixels. |
| `curveType` | chart default | Curve for this area. |
| `animationType` | chart default | Intro for this area. |
| `connectNulls` | - | Join segments across null values. |
| `isClickable` | - | A click selects this area. |
| `children` | - | Optional `Dot` and `ActiveDot`. |
| `areaProps` | - | Extra props for the Recharts area. |

`AreaChart.Dot` and `AreaChart.ActiveDot` take `variant`: `default`, `border`, or `colored-border`.

## Tooltip and legend

`Tooltip` takes `variant` (`default` or `frosted-glass`), `roundness` (`sm`, `md`, `lg`, or `xl`), `defaultIndex`, and `cursor`.

`Legend` takes `variant` (see [legend shapes](./chart.md#tooltip-legend-and-dots)), `align`, `verticalAlign`, and `isClickable`. A clickable legend toggles series selection.

## Related pages

- [Chart](./chart.md)
- [Line chart](./line-chart.md)
- [Bar chart](./bar-chart.md)
