---
title: Radar chart
description: Reference for the RadarChart component, a composable radar chart that compares series across the same attributes.
documentType: reference
tags: [component, chart]
---

# Radar chart

`RadarChart` compares several series across the same set of attributes. Series can be filled or drawn as lines over a polygon or circle grid. They can glow and show point markers.

The chart also supports legend selection and a loading skeleton.

Source: [`components/radar-chart`](https://github.com/storm-software/cyclone-ui/tree/main/components/radar-chart)

## Import

```tsx
import { RadarChart } from "@cyclone-ui/radar-chart";
```

Place the parts inside `RadarChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { skill: "Type", alpha: 80, beta: 60 },
  { skill: "Color", alpha: 70, beta: 90 }
];

<RadarChart
  data={data}
  config={{
    alpha: { label: "Alpha" },
    beta: { label: "Beta" }
  }}
>
  <RadarChart.PolarGrid />
  <RadarChart.PolarAngleAxis dataKey="skill" />
  <RadarChart.Radar dataKey="alpha" variant="filled" />
  <RadarChart.Radar dataKey="beta" variant="lines" />
  <RadarChart.Tooltip />
  <RadarChart.Legend />
</RadarChart>
```

`config` keys must exist on each data row.

## Anatomy

| Part | Purpose |
| --- | --- |
| `RadarChart` | Owns the data, selection, and loading skeleton. |
| `RadarChart.Radar` | One series. |
| `RadarChart.Dot`, `RadarChart.ActiveDot` | Point markers. Place them inside a radar. |
| `RadarChart.PolarGrid` | The grid. |
| `RadarChart.PolarAngleAxis`, `RadarChart.PolarRadiusAxis` | The category and value axes. |
| `RadarChart.Tooltip`, `RadarChart.Legend` | Hover details and series labels. |

## Root props

`RadarChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `data` | - | The rows. Required. |
| `config` | - | Series colors and labels. Required. |
| `children` | - | The composed parts. Required. |
| `backgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedDataKey` | `null` | The series selected on first render. |
| `onSelectionChange` | - | Called with the selected series key, or `null`. |
| `isLoading` | `false` | Shows the loading skeleton. |
| `loadingPoints` | chart default | Number of points in the skeleton. |
| `chartProps` | - | Extra props for the Recharts radar chart. |

## Radar props

| Prop | Purpose |
| --- | --- |
| `dataKey` | Series key. It must exist on the data and the config. |
| `variant` | `filled` or `lines`. |
| `fillOpacity` | Opacity of the fill when `variant` is `filled`. |
| `isGlowing` | Adds a soft outer glow. |
| `isClickable` | A click selects this radar. |
| `children` | Optional `Dot` and `ActiveDot`. |
| `radarProps` | Extra Recharts radar props. `dataKey` is omitted. |

`Dot` and `ActiveDot` take `variant`: `default`, `border`, or `colored-border`.

## Tooltip and legend

`Tooltip` takes `variant`, `roundness`, and `defaultIndex`. `Legend` takes `variant`, `align`, `verticalAlign`, and `isClickable`. The shared values are on the [chart](./chart.md) page.

## Related pages

- [Chart](./chart.md)
- [Radial chart](./radial-chart.md)
