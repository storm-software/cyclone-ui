---
title: Bar Chart
description: Reference for the BarChart component, a composable bar chart with grouped, stacked, and horizontal layouts.
documentType: reference
tags: [component, chart]
component:
  name: bar-chart
  package: "@cyclone-ui/bar-chart"
  stories:
    - title: Charts/BarChart
      file: components/bar-chart/src/BarChart.stories.tsx
---

# Bar Chart

`BarChart` compares values across categories. It is built on Recharts and the shared [chart](./chart.md) parts.

Bars can be grouped, stacked, or shown as percentages. They can run vertically or horizontally. Fills include a solid color, a gradient, a hatch, a duotone, and stripes.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add bar-chart
pnpm install
```

- **File:** `BarChart.tsx`. The CLI writes it to `<path>/bar-chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Chart](./chart.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `motion` and `recharts`.

## Import

```tsx
import { BarChart } from "@cyclone-ui/bar-chart";
```

Place the parts inside `BarChart`. Outside it they throw.

## Usage

```tsx
const data = [
  { quarter: "Q1", desktop: 40, mobile: 24 },
  { quarter: "Q2", desktop: 52, mobile: 31 }
];

<BarChart
  data={data}
  xDataKey="quarter"
  layout="vertical"
  config={{
    desktop: { label: "Desktop" },
    mobile: { label: "Mobile" }
  }}
>
  <BarChart.XAxis dataKey="quarter" />
  <BarChart.YAxis />
  <BarChart.Bar dataKey="desktop" />
  <BarChart.Bar dataKey="mobile" variant="hatched" />
  <BarChart.Tooltip />
  <BarChart.Legend isClickable />
</BarChart>
```

`config` keys must exist on each data row. A series without `colors` takes the next [data palette](./chart.md#series-config) color.

## Anatomy

```tsx
<BarChart>
  <BarChart.Grid />
  <BarChart.XAxis />
  <BarChart.YAxis />
  <BarChart.Bar />
  <BarChart.Tooltip />
  <BarChart.Legend />
  <BarChart.Brush />
</BarChart>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `BarChart` | A [`ChartContainer`](./chart.md#props) (a Tamagui `YStack` around a Recharts `ResponsiveContainer`) that holds a Recharts `BarChart` with `accessibilityLayer`. With `backgroundVariant`, a `ChartBackground` pattern sits behind the bars. | Owns the data, selection, loading skeleton, and brush range. |
| `BarChart.Bar` | A Recharts `Bar` with a custom shape: an SVG `<g>` that holds a transparent hit rectangle and the painted Recharts `Rectangle`. SVG `<defs>` hold the series gradient and the fill pattern. | One series. |
| `BarChart.XAxis`, `BarChart.YAxis`, `BarChart.Grid` | A Recharts `XAxis`, `YAxis`, and `CartesianGrid` | Axes and grid. They pass Recharts props through. Axes hide while the chart loads. |
| `BarChart.Tooltip`, `BarChart.Legend` | A Recharts `Tooltip` with `ChartTooltipContent`, and a Recharts `Legend` with `ChartLegendContent` | Hover details and series labels. A clickable legend entry renders as `<button>` with `aria-pressed`. |
| `BarChart.Brush` | Nothing by itself. The root draws a `ChartBrushView` under the chart. Its two handles have `role="slider"`. | Zoom range. Set `xDataKey` so the handles can label the range. |

While the chart loads, the root also draws skeleton bars and a `LoadingIndicator`.

`BarChartBar`, `BarChartXAxis`, `BarChartYAxis`, `BarChartGrid`, `BarChartTooltip`, `BarChartLegend`, and `BarChartBrush` are also exported by name. Use them in React Server Components, which cannot read `BarChart.Bar` from a client module.

## Examples

The examples are the stories in [`BarChart.stories.tsx`](../../../components/bar-chart/src/BarChart.stories.tsx). Every story uses the default data palette unless noted.

| Stories | What they show |
| --- | --- |
| `Base` | Grouped monthly bars with a grid, a clickable legend, a tooltip, clickable bars, and a brush with short month labels. |
| `DefaultVariant`, `HatchedVariant`, `DuotoneVariant`, `DuotoneReverseVariant`, `GradientVariant`, `StrippedVariant` | Each bar `variant`, with clickable bars and legend. |
| `StackedType`, `PercentType` | The `stacked` and `percent` values of `stackType`. |
| `GradientColors` | A four-color and a two-color gradient series. |
| `GlowingDesktop`, `GlowingMobile` | `glowing` on one of the two series. |
| `Buffer` | `bufferBar` on both series. The last month draws as a hatched buffer bar. |
| `HorizontalLayout` | One series with `layout="horizontal"`, a hidden numeric x-axis, and months on the y-axis. |
| `HoverHighlight` | `enableHoverHighlight` dims the other bars while one is hovered. |
| `ChartConfigDefault`, `ChartConfigIcons` | A read-only chart with the tooltip open at index 4, first with color markers and then with series icons from `config`. |
| `TooltipDefault`, `TooltipFrostedGlass` | The `default` and `frosted-glass` tooltips, open at index 4. |
| `LoadingState` | The loading skeleton (`isLoading` with empty data). |

## Props

### BarChart

`BarChart` also accepts `ChartContainer` props except `config`, `children`, and `footer`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `TData[]` | - | The rows. Required. |
| `config` | `ChartConfig` | - | Series colors and labels. Required. Each key must exist on the data rows. |
| `children` | `ReactNode` | - | The composed parts. Required. |
| `stackType` | `"default" \| "stacked" \| "percent"` | `"default"` | `default` groups bars. `stacked` stacks them. `percent` shows each bar as a share of the category. |
| `layout` | `"vertical" \| "horizontal"` | `"vertical"` | `vertical` draws columns. `horizontal` draws bars from the left. |
| `barRadius` | `number` | `2` | Corner radius for every bar. |
| `animationType` | `ChartAnimationType` | `"left-to-right"` | Grow-in order. `"none"` skips it. Reduced motion also falls back to `"none"`. |
| `barGap` | `number` | - | Gap between bars in one category. |
| `barCategoryGap` | `number` | - | Gap between categories. |
| `backgroundVariant` | `BackgroundVariant` | - | A [background pattern](./chart.md#background-patterns). |
| `defaultSelectedDataKey` | `string \| null` | `null` | The series selected on first render. |
| `onSelectionChange` | `(selectedDataKey: string \| null) => void` | - | Called with the selected series key, or `null`. |
| `isLoading` | `boolean` | `false` | Shows the loading skeleton. |
| `loadingBars` | `number` | `12` | Number of bars in the skeleton. |
| `xDataKey` | `keyof TData & string` | - | Category key for brush labels. |
| `chartProps` | Recharts `BarChart` props | - | Extra props for the Recharts bar chart. |

Every bar grows from its baseline: the bottom when the layout is vertical, and the left when it is horizontal.

### BarChart.Bar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | Series key. It must exist on the data and the config. Required. |
| `variant` | `BarVariant` | `"default"` | `default`, `hatched`, `duotone`, `duotone-reverse`, `gradient`, or `stripped`. |
| `radius` | `number` | chart `barRadius` | Corner radius for this bar. |
| `animationType` | `ChartAnimationType` | chart default | Grow-in order for this bar. |
| `isClickable` | `boolean` | `false` | A click selects this bar. |
| `enableHoverHighlight` | `boolean` | `false` | Dims the other bars while one is hovered. |
| `glowing` | `boolean` | `false` | Adds a soft outer glow. |
| `bufferBar` | `boolean` | `false` | Draws the last data point as a hatched buffer bar. |
| `barProps` | Recharts `Bar` props | - | Extra props for the Recharts bar. |

The `stripped` variant rounds only the top corners and adds a solid strip above the bar.

### BarChart.Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` or `frosted-glass`. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | `sm`, `md`, `lg`, or `xl`. |
| `defaultIndex` | `number` | - | The data index shown with no hover. |

The bar tooltip has no cursor.

### BarChart.Legend

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. See [legend shapes](./chart.md#tooltip-legend-and-dots). |
| `align` | `"left" \| "center" \| "right"` | `"right"` | Horizontal position. |
| `verticalAlign` | `"top" \| "middle" \| "bottom"` | `"top"` | Vertical position. |
| `isClickable` | `boolean` | `false` | A clickable legend toggles series selection. |

### BarChart.XAxis, BarChart.YAxis, and BarChart.Grid

The axes take Recharts `XAxis` and `YAxis` props. They default to `tickLine={false}`, `axisLine={false}`, `tickMargin={8}`, and `minTickGap={8}`. `YAxis` also defaults to `width="auto"`. The axis `type` follows the layout: with `layout="horizontal"`, the x-axis is numeric and the y-axis is categorical.

`Grid` takes Recharts `CartesianGrid` props. It defaults to `strokeDasharray="3 3"` and draws lines along the value axis only.

### BarChart.Brush

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `number` | `56` | Preview strip height in pixels. |
| `formatLabel` | `(value: unknown, index: number) => string` | - | Formats the range-handle labels. |
| `onChange` | `(range: ChartBrushRange) => void` | - | Fires as the range moves. |

## Related

- [Chart](./chart.md)
- [Composed chart](./composed-chart.md)
- [Line chart](./line-chart.md)

## Source

- [`components/bar-chart/src/BarChart.tsx`](../../../components/bar-chart/src/BarChart.tsx)
- [`components/bar-chart/src/BarChart.stories.tsx`](../../../components/bar-chart/src/BarChart.stories.tsx) (title: `Charts/BarChart`)
