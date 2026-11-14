---
title: Pie Chart
description: Reference for the PieChart component, a composable pie and donut chart with gradient sectors and a legend.
documentType: reference
tags: [component, chart]
component:
  name: pie-chart
  package: "@cyclone-ui/pie-chart"
  stories:
    - title: Charts/PieChart
      file: components/pie-chart/src/PieChart.stories.tsx
---

# Pie Chart

`PieChart` shows how a whole splits into a few parts. Sectors take gradient colors from the theme. They can be padded, overlapped, labeled, rounded, or given a glow.

Set `innerRadius` above `0` to draw a donut. The chart also supports legend selection, a background pattern, and a loading skeleton.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add pie-chart
pnpm install
```

- **File:** `PieChart.tsx`. The CLI writes it to `<path>/pie-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

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

```tsx
<PieChart>
  <PieChart.Background />
  <PieChart.Pie>
    <PieChart.Label />
  </PieChart.Pie>
  <PieChart.Tooltip />
  <PieChart.Legend />
</PieChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `PieChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `PieChart` with `accessibilityLayer`, and a `LoadingIndicator` | Owns the data, selection, and loading indicator. |
| `PieChart.Pie` | A Recharts `Pie` that paints each sector as a Recharts `Sector`, plus SVG `<defs>` for the sector gradients and glow filters. While the chart loads, it draws five pulsing skeleton sectors. | The sectors. |
| `PieChart.Label` | Nothing by itself. The parent `Pie` draws a Recharts `LabelList`. | Sector labels. Place the label inside `Pie`. |
| `PieChart.Tooltip`, `PieChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and sector labels. A clickable legend entry renders as `<button>` with `aria-pressed`. |
| `PieChart.Background` | A `ChartBackground` | A [background pattern](./chart.md#background-patterns). |

`PieChartPie`, `PieChartLabel`, `PieChartTooltip`, `PieChartLegend`, and `PieChartBackground` are also exported by name. Use them in React Server Components, which cannot read `PieChart.Pie` from a client module.

## Examples

The examples are the stories in [`PieChart.stories.tsx`](../../../components/pie-chart/src/PieChart.stories.tsx). Each story shows five browser sectors with a clickable legend and a tooltip. The sectors use the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | A clickable pie. |
| `Donut` | `innerRadius={60}`. |
| `Labels` | A `Label` on a small donut with `paddingAngle={4}` and `cornerRadius={8}`. |
| `Padded` | The same padded, rounded donut without labels. |
| `OverlappingPadded` | `paddingAngle={-25}` and `cornerRadius={99}`. The sectors overlap with an outline between them. |
| `Glowing` | `glowingSectors` on the `chrome` and `safari` sectors. |
| `GradientColors` | A two-color gradient (`subtle` to `emphasis`) on each sector. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### PieChart

`PieChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | One sector per row. Required. |
| `dataKey` | `keyof TData & string` | - | Key that holds the numeric value. Required. |
| `nameKey` | `keyof TData & string` | - | Key that holds the sector name. Required. |
| `config` | `ChartConfig` | - | Sector colors and labels, keyed by name. Required. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `defaultSelectedSector` | `string \| null` | `null` | The sector selected on first render. |
| `onSelectionChange` | `(selection: { dataKey: string; value: number } \| null) => void` | - | Called with `{ dataKey, value }`, or `null`. `dataKey` is the sector name. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `chartProps` | Recharts `PieChart` props | - | Extra props for the Recharts pie chart. |

### PieChart.Pie

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `PieVariant` | - | `gradient`. The fill is always a diagonal color gradient. |
| `innerRadius` | `number \| string` | `0` | Set above `0` for a donut. |
| `outerRadius` | `number \| string` | `"80%"` | Outer radius. |
| `cornerRadius` | `number` | `0` | Corner radius of each sector, in pixels. |
| `paddingAngle` | `number` | `0` | Gap between sectors, in degrees. A negative value overlaps them and outlines each sector. |
| `startAngle`, `endAngle` | `number` | `0`, `360` | Where the pie starts and ends. |
| `isClickable` | `boolean` | `false` | A click selects a sector. Only a clickable pie dims the sectors that are not selected. |
| `glowingSectors` | `string[]` | `[]` | Sector names that render with a soft outer glow. |
| `children` | `ReactNode` | - | Optional `Label`. |
| `pieProps` | Recharts `Pie` props | - | Extra Recharts pie props. `data`, `dataKey`, and `nameKey` are omitted. |

### PieChart.Label

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | the pie value key | The data key for the label text. |
| `labelListProps` | Recharts `LabelList` props | - | Extra props for the Recharts label list. `dataKey` is omitted. |

### PieChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The sector index shown with no hover. |

### PieChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"bottom"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles sector selection. |

### PieChart.Background

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `BackgroundVariant` | `"dots"` | A pattern from the [pattern list](./chart.md#background-patterns). |

## Related

- [Chart](./chart.md)
- [Radial chart](./radial-chart.md)

## Source

- [`components/pie-chart/src/PieChart.tsx`](../../../components/pie-chart/src/PieChart.tsx)
- [`components/pie-chart/src/PieChart.stories.tsx`](../../../components/pie-chart/src/PieChart.stories.tsx) (title: `Charts/PieChart`)
