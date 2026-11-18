---
title: Composed Chart
description: Reference for the ComposedChart component, which draws bars and lines on the same axes.
documentType: reference
tags: [component, chart]
component:
  name: composed-chart
  package: "@cyclone-ui/composed-chart"
  stories:
    - title: Charts/ComposedChart
      file: components/composed-chart/src/ComposedChart.stories.tsx
---

# Composed Chart

`ComposedChart` draws bars and lines on shared axes. Use it to show a value next to a related trend, such as revenue bars with a growth line.

Bars keep the fill and glow styles of the [bar chart](./bar-chart.md). Lines keep the stroke and point styles of the [line chart](./line-chart.md). The chart also supports a zoom brush, legend selection, and a loading skeleton.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add composed-chart
pnpm install
```

- **File:** `ComposedChart.tsx`. The CLI writes it to `<path>/composed-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

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

```tsx
<ComposedChart>
  <ComposedChart.Grid />
  <ComposedChart.XAxis />
  <ComposedChart.YAxis />
  <ComposedChart.Bar />
  <ComposedChart.Line>
    <ComposedChart.Dot />
    <ComposedChart.ActiveDot />
  </ComposedChart.Line>
  <ComposedChart.Tooltip />
  <ComposedChart.Legend />
  <ComposedChart.Brush />
</ComposedChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ComposedChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `ComposedChart` with `accessibilityLayer` | Owns the data, selection, hovered column, loading skeleton, and brush range. |
| `ComposedChart.Bar` | A Recharts `Bar` with a custom shape: an SVG `<g>` with SVG `<rect>` elements that grow in. SVG `<defs>` hold the series gradient, the fill pattern, and the glow filter. | One bar series. |
| `ComposedChart.Line` | A Recharts `Line`, plus SVG `<defs>` for the series gradient, the reveal `<mask>`, and the glow filter. A clickable line adds a transparent 20 px wide twin line that takes the clicks. | One line series. |
| `ComposedChart.Dot`, `ComposedChart.ActiveDot` | Nothing by themselves. The parent `Line` passes a `ChartDot` (an SVG `<g>` with circles) to the Recharts `dot` and `activeDot` slots. | Point markers. Place them inside a line. |
| `ComposedChart.XAxis`, `ComposedChart.YAxis`, `ComposedChart.Grid` | A Recharts `XAxis`, `YAxis`, and `CartesianGrid` | Axes and grid. They pass Recharts props through. Axes hide while the chart loads. |
| `ComposedChart.Tooltip`, `ComposedChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and series labels. A clickable legend entry renders as `<button>` with `aria-pressed`. |
| `ComposedChart.Brush` | Nothing by itself. The root draws a `ChartBrushView` (an area preview) under the chart. Its two handles have `role="slider"`. | Zoom range. Set `xDataKey` so the handles can label the range. |

While the chart loads, the root also draws skeleton bars and a `LoadingIndicator`.

`ComposedChartBar`, `ComposedChartLine`, `ComposedChartDot`, `ComposedChartActiveDot`, `ComposedChartXAxis`, `ComposedChartYAxis`, `ComposedChartGrid`, `ComposedChartTooltip`, `ComposedChartLegend`, and `ComposedChartBrush` are also exported by name. Use them in React Server Components, which cannot read `ComposedChart.Bar` from a client module.

## Examples

The examples are the stories in [`ComposedChart.stories.tsx`](../../../components/composed-chart/src/ComposedChart.stories.tsx). Each story draws a clickable `revenue` bar series and a clickable `profit` line on a grid, with an x-axis, a clickable legend, and a tooltip. The series use the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | The bar and line with a brush, `default` dots, and `colored-border` active dots. |
| `DuotoneVariant`, `GradientVariant`, `HatchedVariant`, `StrippedVariant` | Each bar `variant`. |
| `DashedStroke`, `AnimatedDashedStroke` | The `dashed` and `animated-dashed` line strokes. |
| `BumpCurve` | `curveType="bump"` on the line. |
| `Dots` | `default` dots and `border` active dots on the line. |
| `Glowing` | `glow` on the bar and the line. |
| `GradientColors` | A four-color gradient on the bars and a two-color gradient on the line. |
| `HoverHighlight` | `enableHoverHighlight` on the bars. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### ComposedChart

`ComposedChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | The rows. Required. |
| `config` | `ChartConfig` | - | Colors and labels for bars and lines. Required. Each key must exist on the data rows. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `curveType` | Recharts `CurveType` | `"linear"` | Default curve for every line. |
| `animationType` | `ChartAnimationType` | `"left-to-right"` | Default intro for every bar and line. When the user prefers reduced motion, the intro is off. |
| `barGap` | `number` | - | Gap between bars that share a category. |
| `barCategoryGap` | `number` | - | Gap between bar categories. |
| `defaultSelectedDataKey` | `string \| null` | `null` | The series selected on first render. |
| `onSelectionChange` | `(selectedDataKey: string \| null) => void` | - | Called with the selected series key, or `null`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `loadingBars` | `number` | `12` | Number of bars in the skeleton. |
| `xDataKey` | `keyof TData & string` | - | Category key for brush labels. |
| `chartProps` | Recharts `ComposedChart` props | - | Extra props for the Recharts composed chart. |

### ComposedChart.Bar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. Required. |
| `variant` | `ComposedBarVariant` | `"default"` | `default`, `hatched`, `duotone`, `duotone-reverse`, `gradient`, or `stripped`. |
| `radius` | `number` | `4` | Corner radius in pixels. |
| `glow` | `boolean` | `false` | Adds a soft glow. |
| `animationType` | `ChartAnimationType` | chart default | Grow-in order for this bar. |
| `isClickable` | `boolean` | `false` | A click selects this bar. |
| `enableHoverHighlight` | `boolean` | `false` | Dims this bar when another column is hovered. |
| `barProps` | Recharts `Bar` props | - | Extra props for the Recharts bar. |

### ComposedChart.Line

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. Required. |
| `strokeVariant` | `ComposedStrokeVariant` | `"solid"` | `solid`, `dashed`, or `animated-dashed`. |
| `curveType` | Recharts `CurveType` | chart default | Curve for this line. |
| `animationType` | `ChartAnimationType` | chart default | Intro for this line. |
| `connectNulls` | `boolean` | `false` | Join segments across null values. |
| `glow` | `boolean` | `false` | Adds a soft glow. |
| `isClickable` | `boolean` | `false` | A click selects this line. |
| `children` | `ReactNode` | - | Optional `Dot` and `ActiveDot`. |
| `lineProps` | Recharts `Line` props | - | Extra props for the Recharts line. |

The line stroke is 2 px wide. To change it, pass `strokeWidth` in `lineProps`.

### ComposedChart.Dot and ComposedChart.ActiveDot

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DotVariant` | `"default"` | `default`, `border`, or `colored-border`. |

### ComposedChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |
| `cursor` | `boolean` | `true` | Shows a dashed vertical line at the pointer. |

### ComposedChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"right"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"top"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles series selection. |

### ComposedChart.XAxis, ComposedChart.YAxis, and ComposedChart.Grid

The axes take Recharts `XAxis` and `YAxis` props. They default to `tickLine={false}`, `axisLine={false}`, `tickMargin={8}`, and `minTickGap={8}`. `YAxis` also defaults to `width="auto"`.

`Grid` takes Recharts `CartesianGrid` props. It defaults to `vertical={false}` and `strokeDasharray="3 3"`.

### ComposedChart.Brush

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `number` | `56` | Preview strip height in pixels. |
| `formatLabel` | `(value: unknown, index: number) => string` | - | Formats the range-handle labels. |
| `onChange` | `(range: ChartBrushRange) => void` | - | Fires as the range moves. |

## Related

- [Chart](./chart.md)
- [Bar chart](./bar-chart.md)
- [Line chart](./line-chart.md)

## Source

- [`components/composed-chart/src/ComposedChart.tsx`](../../../components/composed-chart/src/ComposedChart.tsx)
- [`components/composed-chart/src/ComposedChart.stories.tsx`](../../../components/composed-chart/src/ComposedChart.stories.tsx) (title: `Charts/ComposedChart`)
