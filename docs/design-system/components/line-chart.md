---
title: Line Chart
description: Reference for the LineChart component, a composable line chart with strokes, curves, point markers, and a zoom brush.
documentType: reference
tags: [component, chart]
component:
  name: line-chart
  package: "@cyclone-ui/line-chart"
  stories:
    - title: Charts/LineChart
      file: components/line-chart/src/LineChart.stories.tsx
---

# Line Chart

`LineChart` compares how several series trend over time. It is built on Recharts and the shared [chart](./chart.md) parts.

Lines take solid, dashed, or animated strokes, curve types, a glow, point markers, and a dashed buffer segment.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add line-chart
pnpm install
```

- **File:** `LineChart.tsx`. The CLI writes it to `<path>/line-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

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

```tsx
<LineChart>
  <LineChart.Grid />
  <LineChart.XAxis />
  <LineChart.YAxis />
  <LineChart.Line>
    <LineChart.Dot />
    <LineChart.ActiveDot />
  </LineChart.Line>
  <LineChart.Tooltip />
  <LineChart.Legend />
  <LineChart.Brush />
</LineChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `LineChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `LineChart` with `accessibilityLayer` | Owns the data, selection, loading skeleton, and brush range. |
| `LineChart.Line` | An SVG `<g>` with a Recharts `Line`, plus SVG `<defs>` for the series gradient, the reveal `<mask>`, and the glow filter. A clickable line adds a transparent 15 px wide twin line that takes the clicks. | One series. |
| `LineChart.Dot`, `LineChart.ActiveDot` | Nothing by themselves. The parent `Line` passes a `ChartDot` (an SVG `<g>` with circles) to the Recharts `dot` and `activeDot` slots. | Point markers. Place them inside a line. |
| `LineChart.XAxis`, `LineChart.YAxis`, `LineChart.Grid` | A Recharts `XAxis`, `YAxis`, and `CartesianGrid` | Axes and grid. They pass Recharts props through. Axes hide while the chart loads. |
| `LineChart.Tooltip`, `LineChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and series labels. A clickable legend entry renders as `<button>` with `aria-pressed`. |
| `LineChart.Brush` | Nothing by itself. The root draws a `ChartBrushView` under the chart. Its two handles have `role="slider"`. | Zoom range. Set `xDataKey` so the handles can label the range. |

While the chart loads, the root also draws a skeleton line and a `LoadingIndicator`.

`LineChartLine`, `LineChartDot`, `LineChartActiveDot`, `LineChartXAxis`, `LineChartYAxis`, `LineChartGrid`, `LineChartTooltip`, `LineChartLegend`, and `LineChartBrush` are also exported by name. Use them in React Server Components, which cannot read `LineChart.Line` from a client module.

## Examples

The examples are the stories in [`LineChart.stories.tsx`](../../../components/line-chart/src/LineChart.stories.tsx). Every story uses the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | Two clickable lines with `border` dots, `colored-border` active dots, a clickable legend, a tooltip, and a brush with short month labels. |
| `SolidStroke`, `DashedStroke`, `AnimatedDashedStroke` | Each `strokeVariant`, with a y-axis. |
| `BumpCurve`, `MonotoneYCurve`, `StepCurve` | The `bump`, `monotoneY`, and `step` values of `curveType`, with `default` dots. |
| `DotDefault`, `DotBorder`, `DotColoredBorder` | Each `Dot` variant on lines that are not clickable, with a grid. |
| `LegendSquare`, `LegendCircle`, `LegendCircleOutline`, `LegendRoundedSquare`, `LegendRoundedSquareOutline`, `LegendVerticalBar`, `LegendHorizontalBar` | Each legend `variant`. |
| `BgDots`, `BgGrid`, `BgCrossHatch`, `BgDiagonalLines`, `BgPlus`, `BgFallingTriangles`, `Bg4PointedStar`, `BgTinyCheckers`, `BgOverlappingCircles`, `BgWiggleLines`, `BgBubbles` | Each [`ChartBackground`](./chart.md#background-patterns) pattern, placed as a child of the chart. |
| `GlowingDesktop`, `GlowingMobile` | `glowing` on one of the two lines. `GlowingDesktop` uses a five-color gradient series. |
| `GradientColors`, `GradientColorsBump` | A five-color gradient series next to a one-color series, with the `linear` and `bump` curves. |
| `Buffer` | `enableBufferLine` on both lines, with a brush. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### LineChart

`LineChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | The rows. Required. |
| `config` | `ChartConfig` | - | Series colors and labels. Required. Each key must exist on the data rows. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `curveType` | Recharts `CurveType` | `"linear"` | Default curve for every line. |
| `animationType` | `ChartAnimationType` | `"left-to-right"` | Default intro. See [Chart motion](./chart.md#motion). When the user prefers reduced motion, the intro is off. |
| `defaultSelectedDataKey` | `string \| null` | `null` | The series selected on first render. |
| `onSelectionChange` | `(selectedDataKey: string \| null) => void` | - | Called with the selected series key, or `null`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `loadingPoints` | `number` | `14` | Number of points in the skeleton. |
| `xDataKey` | `keyof TData & string` | - | Category key for brush labels. |
| `chartProps` | Recharts `LineChart` props | - | Extra props for the Recharts line chart. |

### LineChart.Line

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. It must exist on the data and the config. Required. |
| `strokeVariant` | `LineStrokeVariant` | `"solid"` | `solid`, `dashed`, or `animated-dashed`. |
| `strokeWidth` | `number` | `0.8` | Stroke thickness in pixels. |
| `curveType` | Recharts `CurveType` | chart default | Curve for this line. |
| `animationType` | `ChartAnimationType` | chart default | Intro for this line. |
| `connectNulls` | `boolean` | `false` | Join segments across null values. |
| `isClickable` | `boolean` | `false` | A click selects this line. |
| `glowing` | `boolean` | `false` | Adds a soft outer glow. |
| `enableBufferLine` | `boolean` | `false` | Draws the last segment as a dashed buffer. |
| `children` | `ReactNode` | - | Optional `Dot` and `ActiveDot`. |
| `lineProps` | Recharts `Line` props | - | Extra props for the Recharts line. |

### LineChart.Dot and LineChart.ActiveDot

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DotVariant` | `"default"` | `default`, `border`, or `colored-border`. |

### LineChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |
| `cursor` | `boolean` | `true` | Shows a dashed vertical line at the pointer. |

### LineChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"right"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"top"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles series selection. |

### LineChart.XAxis, LineChart.YAxis, and LineChart.Grid

The axes take Recharts `XAxis` and `YAxis` props. They default to `tickLine={false}`, `axisLine={false}`, `tickMargin={8}`, and `minTickGap={8}`. `YAxis` also defaults to `width="auto"`.

`Grid` takes Recharts `CartesianGrid` props. It defaults to `vertical={false}` and `strokeDasharray="3 3"`.

### LineChart.Brush

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `number` | `56` | Preview strip height in pixels. |
| `formatLabel` | `(value: unknown, index: number) => string` | - | Formats the range-handle labels. |
| `onChange` | `(range: ChartBrushRange) => void` | - | Fires as the range moves. |

## Related

- [Chart](./chart.md)
- [Area chart](./area-chart.md)
- [Composed chart](./composed-chart.md)

## Source

- [`components/line-chart/src/LineChart.tsx`](../../../components/line-chart/src/LineChart.tsx)
- [`components/line-chart/src/LineChart.stories.tsx`](../../../components/line-chart/src/LineChart.stories.tsx) (title: `Charts/LineChart`)
