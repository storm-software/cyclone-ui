---
title: Area Chart
description: Reference for the AreaChart component, a composable area chart with stack modes, fill styles, a zoom brush, and a loading skeleton.
documentType: reference
tags: [component, chart]
component:
  name: area-chart
  package: "@cyclone-ui/area-chart"
  stories:
    - title: Charts/AreaChart
      file: components/area-chart/src/AreaChart.stories.tsx
---

# Area Chart

`AreaChart` draws how values change over time and how series add up. It is built on Recharts and the shared [chart](./chart.md) parts.

Areas can overlap, stack, or expand to 100%. Each area can use a gradient, solid, dotted, line, or hatched fill, and a solid, dashed, or animated stroke.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add area-chart
pnpm install
```

- **File:** `AreaChart.tsx`. The CLI writes it to `<path>/area-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

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

```tsx
<AreaChart>
  <AreaChart.Grid />
  <AreaChart.XAxis />
  <AreaChart.YAxis />
  <AreaChart.Area>
    <AreaChart.Dot />
    <AreaChart.ActiveDot />
  </AreaChart.Area>
  <AreaChart.Tooltip />
  <AreaChart.Legend />
  <AreaChart.Brush />
</AreaChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `AreaChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `AreaChart` with `accessibilityLayer` | Owns the data, selection, loading skeleton, and brush range. |
| `AreaChart.Area` | A Recharts `Area`, plus SVG `<defs>` for the series gradient, the fill pattern, and the reveal `<mask>` | One series. |
| `AreaChart.Dot`, `AreaChart.ActiveDot` | Nothing by themselves. The parent `Area` passes a `ChartDot` (an SVG `<g>` with circles) to the Recharts `dot` and `activeDot` slots. | Point markers. Place them inside an area. |
| `AreaChart.XAxis`, `AreaChart.YAxis`, `AreaChart.Grid` | A Recharts `XAxis`, `YAxis`, and `CartesianGrid` | Axes and grid. They pass Recharts props through. Axes hide while the chart loads. |
| `AreaChart.Tooltip`, `AreaChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and series labels. A clickable legend entry renders as `<button>` with `aria-pressed`. |
| `AreaChart.Brush` | Nothing by itself. The root draws a `ChartBrushView` under the chart. Its two handles have `role="slider"`. | Zoom range. Set `xDataKey` on the chart so the handles can label the range. |

While the chart loads, the root also draws a skeleton area and a `LoadingIndicator`.

`AreaChartArea`, `AreaChartDot`, `AreaChartActiveDot`, `AreaChartXAxis`, `AreaChartYAxis`, `AreaChartGrid`, `AreaChartTooltip`, `AreaChartLegend`, and `AreaChartBrush` are also exported by name. Use them in React Server Components, which cannot read `AreaChart.Area` from a client module.

## Examples

The examples are the stories in [`AreaChart.stories.tsx`](../../../components/area-chart/src/AreaChart.stories.tsx). Every story uses the default data palette unless noted, and most make the areas and legend clickable.

| Stories | What they show |
| --- | --- |
| `Base` | A stacked chart with a grid, an x-axis, a clickable legend, a tooltip, `border` dots, `colored-border` active dots, and a brush with short month labels. |
| `DefaultType`, `StackedType`, `ExpandedType` | The three `stackType` values. `ExpandedType` adds a y-axis with percent ticks. |
| `GradientVariant`, `GradientReverseVariant`, `SolidVariant`, `DottedVariant`, `LinesVariant`, `HatchedVariant` | Each area `variant` on a stacked chart. |
| `SolidStroke`, `DashedStroke`, `AnimatedDashedStroke` | Each `strokeVariant` on overlapping areas. |
| `BumpCurve`, `MonotoneYCurve`, `StepCurve` | The `bump`, `monotoneY`, and `step` values of `curveType`. |
| `GradientColors`, `GradientColorsBump` | A five-color gradient series next to a one-color series, with the `linear` and `bump` curves. |
| `Brush` | 30 daily points with a 56 px brush and a `monotone` curve. |
| `FrostedGlassTooltip` | The `frosted-glass` tooltip, open at index 7 with no hover. |
| `Loading` | The loading skeleton (`isLoading` with empty data). |

## Props

### AreaChart

`AreaChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | The rows. Required. |
| `config` | `ChartConfig` | - | Series colors and labels. Required. Each key must exist on the data rows. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `curveType` | Recharts `CurveType` | `"linear"` | Default curve for every area. |
| `animationType` | `ChartAnimationType` | `"left-to-right"` | Default intro. See [Chart motion](./chart.md#motion). When the user prefers reduced motion, the intro is off. |
| `stackType` | `"default" \| "stacked" \| "expanded"` | `"default"` | `default` overlaps. `stacked` adds the series. `expanded` shows each series as a share of the total. |
| `defaultSelectedDataKey` | `string \| null` | `null` | The series selected on first render. |
| `onSelectionChange` | `(selectedDataKey: string \| null) => void` | - | Called with the selected series key, or `null`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `loadingPoints` | `number` | `14` | Number of points in the skeleton. |
| `xDataKey` | `keyof TData & string` | - | Category key. The brush uses it for handle labels. |
| `chartProps` | Recharts `AreaChart` props | - | Extra props for the Recharts area chart. |

The expanded stack formats the value axis as percentages.

### AreaChart.Area

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. It must exist on the data and the config. Required. |
| `variant` | `AreaVariant` | `"gradient"` | `gradient`, `gradient-reverse`, `solid`, `dotted`, `lines`, or `hatched`. |
| `strokeVariant` | `AreaStrokeVariant` | `"dashed"` | `solid`, `dashed`, or `animated-dashed`. |
| `strokeWidth` | `number` | `0.8` | Stroke thickness in pixels. |
| `curveType` | Recharts `CurveType` | chart default | Curve for this area. |
| `animationType` | `ChartAnimationType` | chart default | Intro for this area. |
| `connectNulls` | `boolean` | `false` | Join segments across null values. |
| `isClickable` | `boolean` | `false` | A click selects this area. |
| `children` | `ReactNode` | - | Optional `Dot` and `ActiveDot`. |
| `areaProps` | Recharts `Area` props | - | Extra props for the Recharts area. |

When another series is selected, this area changes to a faint line texture.

### AreaChart.Dot and AreaChart.ActiveDot

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DotVariant` | `"default"` | `default`, `border`, or `colored-border`. |

### AreaChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |
| `cursor` | `boolean` | `true` | Shows a dashed vertical line at the pointer. |

### AreaChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"right"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"top"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles series selection. |

### AreaChart.XAxis, AreaChart.YAxis, and AreaChart.Grid

The axes take Recharts `XAxis` and `YAxis` props. They default to `tickLine={false}`, `axisLine={false}`, `tickMargin={8}`, and `minTickGap={8}`. `YAxis` also defaults to `width="auto"`.

`Grid` takes Recharts `CartesianGrid` props. It defaults to `vertical={false}` and `strokeDasharray="3 3"`.

### AreaChart.Brush

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `number` | `56` | Preview strip height in pixels. |
| `formatLabel` | `(value: unknown, index: number) => string` | - | Formats the range-handle labels. |
| `onChange` | `(range: ChartBrushRange) => void` | - | Fires as the range moves. |

## Related

- [Chart](./chart.md)
- [Line chart](./line-chart.md)
- [Bar chart](./bar-chart.md)

## Source

- [`components/area-chart/src/AreaChart.tsx`](../../../components/area-chart/src/AreaChart.tsx)
- [`components/area-chart/src/AreaChart.stories.tsx`](../../../components/area-chart/src/AreaChart.stories.tsx) (title: `Charts/AreaChart`)
