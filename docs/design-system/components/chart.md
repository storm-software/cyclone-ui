---
title: Chart
description: Reference for the shared Cyclone chart parts that map series to theme colors and supply the tooltip, legend, brush, and loading state.
documentType: reference
tags: [component, chart]
component:
  name: chart
  package: "@cyclone-ui/chart"
---

# Chart

`@cyclone-ui/chart` holds the parts that the Cyclone chart packages share. The container maps each series to theme colors. The tooltip, legend, point markers, zoom brush, background patterns, and loading state sit on top of [Recharts](https://recharts.org).

Use this package when you build a custom Recharts chart that should match the other Cyclone charts. The named chart packages ([area](./area-chart.md), [bar](./bar-chart.md), [line](./line-chart.md), and the others) already compose these parts.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add chart
pnpm install
```

- **Files:** `Chart.tsx`, `ChartBackground.tsx`, `ChartBrush.tsx`, `ChartDot.tsx`, `ChartLegend.tsx`, `ChartTooltip.tsx`, `useLoadingData.ts`, and `utilities.ts`. The CLI writes them to `<path>/chart/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Number Text](./number-text.md), and [Spinner](./spinner.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/stacks`, `motion`, and `recharts`.

## Import

```tsx
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@cyclone-ui/chart";
```

`useChart` reads the config. Call it inside `ChartContainer`. Outside that container it throws `useChart must be used within a <ChartContainer />`.

## Usage

Put a Recharts chart inside `ChartContainer`. Paint each series with its `--color-<key>-<index>` variable.

```tsx
import { Bar, BarChart, XAxis } from "recharts";

const config = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile", colors: ["data-green-emphasis"] }
} satisfies ChartConfig;

<ChartContainer config={config}>
  <BarChart data={data} accessibilityLayer>
    <XAxis dataKey="month" />
    <Bar dataKey="desktop" fill="var(--color-desktop-0)" />
    <Bar dataKey="mobile" fill="var(--color-mobile-0)" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
  </BarChart>
</ChartContainer>
```

For a series with several colors, define a `ChartColorGradient` in the chart's `<defs>` and set `fill` to `url(#<id>)`.

## Anatomy

```tsx
<ChartContainer config={config} footer={<ChartBrushView data={data} chartConfig={config} />}>
  <LoadingIndicator isLoading={isLoading} />
  <RechartsChart>
    <ChartBackground variant="dots" />
    <defs>
      <ChartColorGradient id={gradientId} dataKey="desktop" config={config} />
      <ChartRevealMask id={seriesId} type="left-to-right" />
    </defs>
    {/* Recharts series; pass <ChartDot /> to their dot slots */}
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
  </RechartsChart>
</ChartContainer>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ChartContainer` | A Tamagui `YStack` with the `cyclone-chart` class and a `data-chart` id. It holds a `ChartStyle` `<style>` element, a Recharts `ResponsiveContainer`, and the `footer`. | Sizes the chart, shares the config, and sets the series color variables. |
| `ChartStyle` | A `<style>` element | Defines the `--color-<key>-<index>` variables, the body font, and theme colors for the Recharts axes, grid, and cursor. `ChartContainer` renders it for you. |
| `ChartTooltip` | A Recharts `Tooltip` with a 200 ms animation | The tooltip slot. Pass `ChartTooltipContent` as `content`. |
| `ChartTooltipContent` | A Tamagui `YStack` with `BodyText` labels and `NumberText` values | The tooltip panel. |
| `ChartLegend` | The Recharts `Legend` | The legend slot. Pass `ChartLegendContent` as `content`. |
| `ChartLegendContent` | A Tamagui `XStack` of entries. With `isClickable`, each entry renders as `<button>` with `aria-pressed`. | The legend entries. |
| `ChartDot` | An SVG `<g>` with circles, painted from the series gradient | A point marker for a Recharts `dot` or `activeDot` slot. |
| `ChartBackground` | A Recharts `ZIndexLayer` at z-index `-1` with an SVG `<pattern>`, a blurred edge `<mask>`, and a `<rect>` | A decorative pattern behind the series. |
| `ChartColorGradient` | An SVG `<linearGradient>` with one `<stop>` per series color | Paints a series with its colors. |
| `ChartRevealMask` | An SVG `<mask>` with animated `<rect>` elements | The intro wipe. Its id is `<id>-reveal-mask`. |
| `ChartBrush` | Nothing (it returns `null`) | Declares the zoom brush. A chart reads it with `useChartBrushSlot`. |
| `ChartBrushView` | A `<div>` with a miniature Recharts chart and two handles with `role="slider"` | The zoom brush strip. |
| `LoadingIndicator` | An absolute Tamagui `YStack` over the chart with a `Spinner` and the word "Loading" | Shows that data is loading. |

The pure helpers (`CHART_DATA_COLORS`, `axisValueToPercentFormatter`, `getColorsCount`, `getEasedGradientStops`, `getLoadingData`, `getPayloadConfigFromPayload`, and `getSeriesBackground`) come from `utilities.ts`, which has no `"use client"` directive. The package index exports them by name to keep them outside the client component boundary.

## Examples

`chart` has no stories file. Its parts appear in the stories of the chart packages: see the examples on the [area](./area-chart.md#examples), [bar](./bar-chart.md#examples), [line](./line-chart.md#examples), [composed](./composed-chart.md#examples), [pie](./pie-chart.md#examples), [radar](./radar-chart.md#examples), [radial](./radial-chart.md#examples), and [Sankey](./sankey-chart.md#examples) chart pages. The line chart's `Legend*` and `Bg*` stories show each legend shape and each `ChartBackground` pattern.

## Props

### ChartContainer

`ChartContainer` sizes a Recharts chart to its box. The container, including `footer`, keeps a 16:9 ratio unless you set a height.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `config` | `ChartConfig` | - | Series labels and colors. Required. |
| `children` | Recharts chart | - | The chart element. Required. |
| `footer` | `ReactNode` | - | Content under the chart, such as a zoom brush. |
| `initialDimension` | `{ width, height }` | `{ width: 320, height: 200 }` | The size Recharts uses before layout. |

The container also accepts `YStack` props except `children`.

`LoadingIndicator` covers the chart with a spinner and the word "Loading" when `isLoading` is true.

### ChartTooltipContent

`ChartTooltipContent` also accepts the Recharts tooltip props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `TooltipVariant` | `"default"` | `default` uses the `elevated` background. `frosted-glass` uses a translucent, blurred background. |
| `roundness` | `TooltipRoundness` | `tooltip` radius token | The corner radius. |
| `indicator` | `"line" \| "dot" \| "dashed"` | `"dot"` | The series marker shape. |
| `hideLabel` | `boolean` | `false` | Hides the label at the top. |
| `hideIndicator` | `boolean` | `false` | Hides the series markers. |
| `nameKey` | `string` | - | The payload key that names each row. Pie and radial charts use it. |
| `labelKey` | `string` | - | The config key for the label. |
| `selected` | `string \| null` | - | The selected series. Other rows show at 30% opacity. |

### ChartLegendContent

`ChartLegendContent` also accepts the Recharts legend content props, such as `payload`, `align`, and `verticalAlign`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ChartLegendVariant` | `"rounded-square"` | The marker shape. |
| `align` | `"left" \| "center" \| "right"` | `"right"` | Horizontal position of the entries. |
| `hideIcon` | `boolean` | `false` | Shows the color marker instead of the series `icon`. |
| `nameKey` | `string` | - | The payload key that names each entry. |
| `selected` | `string \| null` | - | The selected series. Other entries show at 30% opacity. |
| `isClickable` | `boolean` | - | Makes each entry a button that toggles the selection. |
| `onSelectChange` | `(selected: string \| null) => void` | - | Called with the new selection, or `null`. |

### ChartDot

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `dataKey` | `string` | - | The series key. Required. |
| `chartId` | `string` | - | The id prefix of the series gradient `<chartId>-colors-<dataKey>`. Required. |
| `type` | `DotVariant` | `"default"` | `default`, `border`, or `colored-border`. |
| `cx`, `cy` | `number` | - | The center. Recharts sets them. With no center, the dot draws nothing. |
| `fillOpacity` | `number` | `1` | The opacity of the fill. |
| `maskId` | `string` | - | An SVG `<mask>` id, so the dot shares a series' reveal wipe. |
| `className` | `string` | - | A class for the `<g>` element. |

### ChartBrushView

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, unknown>[]` | - | The full dataset. The miniature chart always draws all of it. Required. |
| `chartConfig` | `ChartConfig` | - | Series labels and colors. Required. |
| `dataKeys` | `string[]` | every `chartConfig` key | The series to draw. |
| `xDataKey` | `string` | - | The x-axis key, for the handle labels. |
| `variant` | `ChartBrushVariant` | `"area"` | `line`, `area`, or `bar`. |
| `height` | `number` | `56` | The strip height in pixels. |
| `startIndex`, `endIndex` | `number` | - | The controlled range. Set both. |
| `defaultStartIndex`, `defaultEndIndex` | `number` | `0`, last index | The first range when uncontrolled. |
| `onChange` | `(range: ChartBrushRange) => void` | - | Called when the range changes. |
| `formatLabel` | `(value: unknown, index: number) => string` | - | Formats the handle labels. |
| `minSpan` | `number` | `2` | The minimum number of points that stay selected. |
| `showLabels` | `boolean` | `true` | Shows the handle labels. |
| `stacked` | `boolean` | `false` | Stacks the areas or bars in the miniature chart. |
| `strokeVariant` | `"solid" \| "dashed" \| "animated-dashed"` | `"solid"` | The miniature stroke. `animated-dashed` draws as `dashed`. |
| `curveType` | Recharts `CurveType` | `"monotone"` | The miniature curve. |
| `connectNulls` | `boolean` | `false` | Joins segments across null values. |
| `barRadius` | `number` | - | The bar corner radius. |
| `skipStyle` | `boolean` | `false` | Skips the color variables when a `ChartContainer` already sets them. |
| `style` | `CSSProperties` | - | Styles for the outer `<div>`. |

With no data, the brush draws nothing.

## Series config

`ChartConfig` is a record. Each key is a series name.

| Field | Type | Purpose |
| --- | --- | --- |
| `label` | `ReactNode` | The name shown in the tooltip and legend. |
| `icon` | component | An optional icon for the legend. |
| `colors` | `ChartColor[]` | One color for a solid series, or several for a gradient. |

A `ChartColor` is a theme key (for example `data-blue-emphasis`), a color token, or any CSS color. Theme keys resolve to CSS variables, so the series follows the active light or dark theme.

When a series omits `colors`, the container assigns `CHART_DATA_COLORS` in this order: `data-blue-emphasis`, `data-green-emphasis`, `data-orange-emphasis`, `data-purple-emphasis`, `data-pink-emphasis`, `data-red-emphasis`, `data-yellow-emphasis`, `data-neutral-emphasis`.

`ChartContainer` writes each color as `--color-<key>-<index>` on the chart.

## Tooltip, legend, and dots

| Export | Values |
| --- | --- |
| `TooltipVariant` | `default`, `frosted-glass` |
| `TooltipRoundness` | `sm`, `md`, `lg`, `xl` |
| `ChartLegendVariant` | `square`, `circle`, `circle-outline`, `rounded-square`, `rounded-square-outline`, `vertical-bar`, `horizontal-bar` |
| `DotVariant` | `default`, `border`, `colored-border` |

See [ChartTooltipContent](#charttooltipcontent) and [ChartLegendContent](#chartlegendcontent) for the props.

## Background patterns

`ChartBackground` draws one pattern. `variant` is required.

`dots`, `grid`, `cross-hatch`, `diagonal-lines`, `plus`, `falling-triangles`, `4-pointed-star`, `tiny-checkers`, `overlapping-circles`, `wiggle-lines`, `bubbles`.

## Zoom brush

`ChartBrush` is a slot. The chart packages render the brush when you place it as a child. It does not draw by itself.

| Prop | Purpose |
| --- | --- |
| `height` | Preview strip height in pixels. |
| `formatLabel` | Formats the range-handle labels. |
| `onChange` | Fires as the range moves. The argument is a `ChartBrushRange`. |

`ChartBrushView` draws the miniature chart. Its `variant` is `line`, `area`, or `bar`. The arrow keys move a focused handle by one point.

To add the brush to your own chart, `useChartBrushSlot(children)` finds the `ChartBrush` child and returns its props. `useChartBrush({ data })` returns the range, the visible slice of `data`, and the `brushProps` to pass to `ChartBrushView`. New data resets the range to cover all of it.

## Motion

`ChartAnimationType` is `none`, `left-to-right`, `right-to-left`, `center-out`, or `edges-in`. The chart packages use this for the intro reveal. The reveal lasts 1 second.

## Related

- [Area chart](./area-chart.md)
- [Bar chart](./bar-chart.md)
- [Line chart](./line-chart.md)
- [Composed chart](./composed-chart.md)
- [Pie chart](./pie-chart.md)
- [Radar chart](./radar-chart.md)
- [Radial chart](./radial-chart.md)
- [Sankey chart](./sankey-chart.md)

## Source

- [`components/chart/src/Chart.tsx`](../../../components/chart/src/Chart.tsx)
- [`components/chart/src/ChartBackground.tsx`](../../../components/chart/src/ChartBackground.tsx)
- [`components/chart/src/ChartBrush.tsx`](../../../components/chart/src/ChartBrush.tsx)
- [`components/chart/src/ChartDot.tsx`](../../../components/chart/src/ChartDot.tsx)
- [`components/chart/src/ChartLegend.tsx`](../../../components/chart/src/ChartLegend.tsx)
- [`components/chart/src/ChartTooltip.tsx`](../../../components/chart/src/ChartTooltip.tsx)
- [`components/chart/src/useLoadingData.ts`](../../../components/chart/src/useLoadingData.ts)
- [`components/chart/src/utilities.ts`](../../../components/chart/src/utilities.ts)
