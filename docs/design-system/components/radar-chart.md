---
title: Radar Chart
description: Reference for the RadarChart component, a composable radar chart that compares series across the same attributes.
documentType: reference
tags: [component, chart]
component:
  name: radar-chart
  package: "@cyclone-ui/radar-chart"
  stories:
    - title: Charts/RadarChart
      file: components/radar-chart/src/RadarChart.stories.tsx
---

# Radar Chart

`RadarChart` compares several series across the same set of attributes. Series can be filled or drawn as lines over a polygon or circle grid. They can glow and show point markers.

The chart also supports legend selection and a loading skeleton.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add radar-chart
pnpm install
```

- **File:** `RadarChart.tsx`. The CLI writes it to `<path>/radar-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `recharts`.

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

```tsx
<RadarChart>
  <RadarChart.PolarGrid />
  <RadarChart.PolarAngleAxis />
  <RadarChart.PolarRadiusAxis />
  <RadarChart.Radar>
    <RadarChart.Dot />
    <RadarChart.ActiveDot />
  </RadarChart.Radar>
  <RadarChart.Tooltip />
  <RadarChart.Legend />
</RadarChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `RadarChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `RadarChart`. With `backgroundVariant`, a `ChartBackground` pattern sits behind the series. | Owns the data, selection, and loading skeleton. |
| `RadarChart.Radar` | A Recharts `Radar`, plus SVG `<defs>` for the stroke and fill gradients and the glow filter | One series. |
| `RadarChart.Dot`, `RadarChart.ActiveDot` | Nothing by themselves. The parent `Radar` passes a `ChartDot` (an SVG `<g>` with circles) to the Recharts `dot` and `activeDot` slots. | Point markers. Place them inside a radar. |
| `RadarChart.PolarGrid` | A Recharts `PolarGrid` | The grid. |
| `RadarChart.PolarAngleAxis`, `RadarChart.PolarRadiusAxis` | A Recharts `PolarAngleAxis` and `PolarRadiusAxis` | The category and value axes. They hide while the chart loads. |
| `RadarChart.Tooltip`, `RadarChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and series labels. A clickable legend entry renders as `<button>` with `aria-pressed`. Both hide while the chart loads. |

While the chart loads, the root also draws a skeleton radar that changes shape every 1.5 seconds, and a `LoadingIndicator`.

`RadarChartRadar`, `RadarChartDot`, `RadarChartActiveDot`, `RadarChartPolarGrid`, `RadarChartPolarAngleAxis`, `RadarChartPolarRadiusAxis`, `RadarChartTooltip`, and `RadarChartLegend` are also exported by name. Use them in React Server Components, which cannot read `RadarChart.Radar` from a client module.

## Examples

The examples are the stories in [`RadarChart.stories.tsx`](../../../components/radar-chart/src/RadarChart.stories.tsx). Each story draws a `desktop` and a `mobile` radar with `colored-border` dots and `default` active dots, on a polar grid with an angle axis, a legend, and a tooltip. The series use the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | Clickable radars and a clickable legend. |
| `CircleGrid` | `gridType="circle"` on the polar grid. |
| `LinesVariant` | `variant="lines"`: strokes with no fill. |
| `Glowing` | `isGlowing` on the `desktop` radar. |
| `GradientColors` | A three-color and a two-color gradient series. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### RadarChart

`RadarChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | The rows. Required. |
| `config` | `ChartConfig` | - | Series colors and labels. Required. Each key must exist on the data rows. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `backgroundVariant` | `BackgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedDataKey` | `string \| null` | `null` | The series selected on first render. |
| `onSelectionChange` | `(selectedDataKey: string \| null) => void` | - | Called with the selected series key, or `null`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `loadingPoints` | `number` | `6` | Number of points in the skeleton. |
| `chartProps` | Recharts `RadarChart` props | - | Extra props for the Recharts radar chart. |

### RadarChart.Radar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. It must exist on the data and the config. Required. |
| `variant` | `RadarVariant` | `"filled"` | `filled` or `lines`. |
| `fillOpacity` | `number` | `0.3` | Opacity of the fill when `variant` is `filled`. |
| `isGlowing` | `boolean` | `false` | Adds a soft outer glow. |
| `isClickable` | `boolean` | `false` | A click selects this radar. Only a clickable radar dims when another series is selected. |
| `children` | `ReactNode` | - | Optional `Dot` and `ActiveDot`. |
| `radarProps` | Recharts `Radar` props | - | Extra Recharts radar props. `dataKey` is omitted. |

### RadarChart.Dot and RadarChart.ActiveDot

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DotVariant` | `"default"` | `default`, `border`, or `colored-border`. |

### RadarChart.PolarGrid and the axes

`PolarGrid` takes Recharts `PolarGrid` props. It defaults to `gridType="polygon"`, `strokeDasharray="3 4"`, and an `ink` stroke at 0.2 opacity. Set `gridType="circle"` for a round grid.

`PolarAngleAxis` and `PolarRadiusAxis` take the Recharts props of the same name. Their ticks use the `subtle` color at 12 px and 10 px, with no tick lines. `PolarRadiusAxis` also hides its axis line.

### RadarChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |

### RadarChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"bottom"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles series selection. |

## Related

- [Chart](./chart.md)
- [Radial chart](./radial-chart.md)

## Source

- [`components/radar-chart/src/RadarChart.tsx`](../../../components/radar-chart/src/RadarChart.tsx)
- [`components/radar-chart/src/RadarChart.stories.tsx`](../../../components/radar-chart/src/RadarChart.stories.tsx) (title: `Charts/RadarChart`)
