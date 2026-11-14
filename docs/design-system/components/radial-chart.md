---
title: Radial Chart
description: Reference for the RadialChart component, a composable radial bar chart that draws each category as a ring.
documentType: reference
tags: [component, chart]
component:
  name: radial-chart
  package: "@cyclone-ui/radial-chart"
  stories:
    - title: Charts/RadialChart
      file: components/radial-chart/src/RadialChart.stories.tsx
---

# Radial Chart

`RadialChart` compares a few values as progress around a circle. Each category is a ring. The arc can be a full circle or a semicircle. Colors come from the theme.

The chart also supports legend selection and a loading skeleton.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add radial-chart
pnpm install
```

- **File:** `RadialChart.tsx`. The CLI writes it to `<path>/radial-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `recharts`.

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

```tsx
<RadialChart>
  <RadialChart.RadialBar />
  <RadialChart.Tooltip />
  <RadialChart.Legend />
</RadialChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `RadialChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `RadialBarChart` and SVG `<defs>` with one diagonal gradient per `config` key. With `max`, it adds a Recharts `PolarAngleAxis` with no ticks and no axis line. With `backgroundVariant`, a `ChartBackground` pattern sits behind the rings. | Owns the data, the arc shape, selection, and the loading skeleton. |
| `RadialChart.RadialBar` | A Recharts `RadialBar` that paints each bar as a Recharts `Sector` with a small drop shadow | The rings. |
| `RadialChart.Tooltip`, `RadialChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and bar labels. A clickable legend entry renders as `<button>` with `aria-pressed`. Both hide while the chart loads. |

While the chart loads, the root also draws five skeleton rings that change length every 1.5 seconds, and a `LoadingIndicator`.

`RadialChartRadialBar`, `RadialChartTooltip`, and `RadialChartLegend` are also exported by name. Use them in React Server Components, which cannot read `RadialChart.RadialBar` from a client module.

## Examples

The examples are the stories in [`RadialChart.stories.tsx`](../../../components/radial-chart/src/RadialChart.stories.tsx). Each story shows five browser rings with a legend and a tooltip. The rings use the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | `variant="full"` with clickable rings and a clickable legend. |
| `SemiVariant` | `variant="semi"`: a half circle. |
| `GradientColors` | A three-color gradient on each ring. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### RadialChart

`RadialChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | One bar per row. Required. |
| `nameKey` | `keyof TData & string` | - | Key that holds each bar's name. Required. |
| `config` | `ChartConfig` | - | Bar colors and labels, keyed by name. Required. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `variant` | `RadialVariant` | `"full"` | `full` or `semi`. |
| `max` | `number` | - | The value a full sweep represents. Without it, the largest bar fills the arc. Set it (for example `100`) for a gauge. |
| `innerRadius` | `number \| string` | `"30%"` | Inner ring size. |
| `outerRadius` | `number \| string` | `"100%"` | Outer ring size. |
| `defaultSelectedDataKey` | `string \| null` | `null` | The bar selected on first render. |
| `onSelectionChange` | `(selection: { dataKey: string; value: number } \| null) => void` | - | Called with `{ dataKey, value }`, or `null`. `dataKey` is the bar name. When the legend makes the selection, `value` is `0`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `backgroundVariant` | `BackgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `chartProps` | Recharts `RadialBarChart` props | - | Extra props for the Recharts radial bar chart. |

### RadialChart.RadialBar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Value key. It sets each bar's size. Required. |
| `cornerRadius` | `number` | `5` | Corner radius of the bars. |
| `barSize` | `number` | `14` | Thickness of each radial bar. |
| `showBackground` | `boolean` | `true` | Draws the unfilled track behind each bar. |
| `isClickable` | `boolean` | `false` | A click selects a bar. Only clickable bars dim when another bar is selected. |
| `radialBarProps` | Recharts `RadialBar` props | - | Extra Recharts radial bar props. `dataKey` is omitted. |

### RadialChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |

### RadialChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"bottom"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles bar selection. |

## Related

- [Chart](./chart.md)
- [Pie chart](./pie-chart.md)
- [Progress](./progress.md)

## Source

- [`components/radial-chart/src/RadialChart.tsx`](../../../components/radial-chart/src/RadialChart.tsx)
- [`components/radial-chart/src/RadialChart.stories.tsx`](../../../components/radial-chart/src/RadialChart.stories.tsx) (title: `Charts/RadialChart`)
