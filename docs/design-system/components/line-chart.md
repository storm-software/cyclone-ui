---
title: Line chart
description: Reference for the LineChart component, a composable line chart with strokes, curves, point markers, and a zoom brush.
documentType: reference
tags: [component, chart]
---

# Line chart

`LineChart` compares how several series trend over time. It is built on Recharts and the shared [chart](./chart.md) parts.

Lines take solid, dashed, or animated strokes, curve types, a glow, point markers, and a dashed buffer segment.

Source: [`components/line-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/line-chart)

## Import

```tsx
import { LineChart } from "@cyclone-ui/line-chart";
```

Place the parts inside `LineChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { month: "Jan", visits: 80, signups: 20 },
  { month: "Feb", visits: 110, signups: 28 }
];

<LineChart
  data={data}
  xDataKey="month"
  curveType="monotone"
  config={{
    visits: { label: "Visits" },
    signups: { label: "Signups" }
  }}
>
  <LineChart.XAxis dataKey="month" />
  <LineChart.YAxis />
  <LineChart.Line dataKey="visits">
    <LineChart.Dot variant="border" />
  </LineChart.Line>
  <LineChart.Line dataKey="signups" strokeVariant="dashed" />
  <LineChart.Tooltip cursor />
  <LineChart.Legend />
</LineChart>
```

`config` keys must exist on each data row.

## Anatomy

| Part | Purpose |
| --- | --- |
| `LineChart` | Owns the data, selection, loading skeleton, and brush range. |
| `LineChart.Line` | One series. |
| `LineChart.Dot`, `LineChart.ActiveDot` | Point markers. Place them inside a line. |
| `LineChart.XAxis`, `LineChart.YAxis`, `LineChart.Grid` | Axes and grid. They pass Recharts props through. |
| `LineChart.Tooltip`, `LineChart.Legend` | Hover details and series labels. |
| `LineChart.Brush` | Zoom range. Set `xDataKey` so the handles can label the range. |

## Root props

`LineChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | The rows. Required. |
| `config` | - | Series colors and labels. Required. |
| `children` | - | The composed parts. Required. |
| `curveType` | `"linear"` | Default curve for every line. A Recharts `CurveType`. |
| `animationType` | `"left-to-right"` | Default intro. See [Chart motion](./chart.md#motion). |
| `defaultSelectedDataKey` | `null` | The series selected on first render. |
| `onSelectionChange` | - | Called with the selected series key, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `loadingPoints` | - | Number of points in the skeleton. |
| `xDataKey` | - | Category key for brush labels. |
| `chartProps` | - | Extra props for the Recharts line chart. |

## Line props

| Prop | Purpose |
| --- | --- |
| `dataKey` | Series key. It must exist on the data and the config. |
| `strokeVariant` | `solid`, `dashed`, or `animated-dashed`. |
| `strokeWidth` | Stroke thickness in pixels. |
| `curveType` | Curve for this line. Falls back to the chart curve. |
| `animationType` | Intro for this line. |
| `connectNulls` | Join segments across null values. |
| `isClickable` | A click selects this line. |
| `glowing` | Adds a soft outer glow. |
| `enableBufferLine` | Draws the last segment as a dashed buffer. |
| `children` | Optional `Dot` and `ActiveDot`. |
| `lineProps` | Extra props for the Recharts line. |

`LineChart.Dot` and `LineChart.ActiveDot` take `variant`: `default`, `border`, or `colored-border`.

## Tooltip and legend

`Tooltip` takes `variant` (`default` or `frosted-glass`), `roundness` (`sm`, `md`, `lg`, or `xl`), `defaultIndex`, and `cursor`.

`Legend` takes `variant`, `align`, `verticalAlign`, and `isClickable`. A clickable legend toggles series selection.

## Related pages

- [Chart](./chart.md)
- [Area chart](./area-chart.md)
- [Composed chart](./composed-chart.md)
