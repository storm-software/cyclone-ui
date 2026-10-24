/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import type { ChartConfig } from "@cyclone-ui/chart";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { AreaStrokeVariant, AreaVariant } from "./AreaChart";
import { AreaChart } from "./AreaChart";

const data = [
  { month: "January", desktop: 342, mobile: 245 },
  { month: "February", desktop: 876, mobile: 654 },
  { month: "March", desktop: 512, mobile: 387 },
  { month: "April", desktop: 629, mobile: 521 },
  { month: "May", desktop: 458, mobile: 412 },
  { month: "June", desktop: 781, mobile: 598 },
  { month: "July", desktop: 394, mobile: 312 },
  { month: "August", desktop: 925, mobile: 743 },
  { month: "September", desktop: 647, mobile: 489 },
  { month: "October", desktop: 532, mobile: 476 },
  { month: "November", desktop: 803, mobile: 687 },
  { month: "December", desktop: 271, mobile: 198 }
];

const dailyData = Array.from({ length: 30 }, (_, index) => ({
  date: `June ${index + 1}`,
  desktop: Math.round(420 + 260 * Math.sin(index / 3) + index * 12),
  mobile: Math.round(280 + 170 * Math.sin(index / 3 + 1) + index * 8)
}));

// No `colors`: series take the theme's data palette in order
const chartConfig = {
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" }
} satisfies ChartConfig;

const gradientConfig = {
  desktop: {
    label: "Desktop",
    colors: [
      "data-red-emphasis",
      "data-orange-emphasis",
      "data-pink-emphasis",
      "data-purple-emphasis",
      "data-blue-emphasis"
    ]
  },
  mobile: { label: "Mobile", colors: ["data-neutral-emphasis"] }
} satisfies ChartConfig;

const shortMonth = (value: string) => value.substring(0, 3);

// Every story composes its own chart in `render`, so the meta takes no args.
const meta: Meta = {
  title: "Charts/AreaChart",
  component: AreaChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => (
      <YStack
        width={640}
        padding="4xl"
        borderWidth={1}
        borderColor="hairline"
        borderRadius="card"
        backgroundColor="elevated">
        <Story />
      </YStack>
    )
  ]
};

export default meta;

type Story = StoryObj;

const Series = ({
  variant = "gradient",
  strokeVariant
}: {
  variant?: AreaVariant;
  strokeVariant?: AreaStrokeVariant;
}) => (
  <>
    <AreaChart.Area
      dataKey="desktop"
      variant={variant}
      strokeVariant={strokeVariant}
      isClickable>
      <AreaChart.ActiveDot variant="colored-border" />
    </AreaChart.Area>
    <AreaChart.Area
      dataKey="mobile"
      variant={variant}
      strokeVariant={strokeVariant}
      isClickable>
      <AreaChart.ActiveDot variant="colored-border" />
    </AreaChart.Area>
  </>
);

export const Base: Story = {
  render: () => (
    <AreaChart
      data={data}
      config={chartConfig}
      stackType="stacked"
      xDataKey="month">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Brush formatLabel={value => shortMonth(String(value))} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <AreaChart.Area dataKey="desktop" isClickable>
        <AreaChart.Dot variant="border" />
        <AreaChart.ActiveDot variant="colored-border" />
      </AreaChart.Area>
      <AreaChart.Area dataKey="mobile" isClickable>
        <AreaChart.Dot variant="border" />
        <AreaChart.ActiveDot variant="colored-border" />
      </AreaChart.Area>
    </AreaChart>
  )
};

export const DefaultType: Story = {
  render: () => (
    <AreaChart data={data} config={chartConfig}>
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};

export const StackedType: Story = {
  render: () => (
    <AreaChart data={data} config={chartConfig} stackType="stacked">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};

export const ExpandedType: Story = {
  render: () => (
    <AreaChart data={data} config={chartConfig} stackType="expanded">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.YAxis />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};

const variantStory = (variant: AreaVariant): Story => ({
  render: () => (
    <AreaChart data={data} config={chartConfig} stackType="stacked">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series variant={variant} />
    </AreaChart>
  )
});

export const GradientVariant: Story = variantStory("gradient");
export const GradientReverseVariant: Story = variantStory("gradient-reverse");
export const SolidVariant: Story = variantStory("solid");
export const DottedVariant: Story = variantStory("dotted");
export const LinesVariant: Story = variantStory("lines");
export const HatchedVariant: Story = variantStory("hatched");

const strokeStory = (strokeVariant: AreaStrokeVariant): Story => ({
  render: () => (
    <AreaChart data={data} config={chartConfig}>
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series strokeVariant={strokeVariant} />
    </AreaChart>
  )
});

export const SolidStroke: Story = strokeStory("solid");
export const DashedStroke: Story = strokeStory("dashed");
export const AnimatedDashedStroke: Story = strokeStory("animated-dashed");

const curveStory = (curveType: "bump" | "monotoneY" | "step"): Story => ({
  render: () => (
    <AreaChart data={data} config={chartConfig} curveType={curveType}>
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
});

export const BumpCurve: Story = curveStory("bump");
export const MonotoneYCurve: Story = curveStory("monotoneY");
export const StepCurve: Story = curveStory("step");

export const GradientColors: Story = {
  render: () => (
    <AreaChart data={data} config={gradientConfig} stackType="stacked">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};

export const GradientColorsBump: Story = {
  render: () => (
    <AreaChart
      data={data}
      config={gradientConfig}
      stackType="stacked"
      curveType="bump">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};

export const Brush: Story = {
  render: () => (
    <AreaChart
      data={dailyData}
      config={chartConfig}
      curveType="monotone"
      xDataKey="date">
      <AreaChart.Grid />
      <AreaChart.XAxis
        dataKey="date"
        tickFormatter={value => String(value).split(" ")[1] ?? ""}
      />
      <AreaChart.Brush height={56} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <AreaChart.Area dataKey="desktop" isClickable />
      <AreaChart.Area dataKey="mobile" isClickable />
    </AreaChart>
  )
};

export const FrostedGlassTooltip: Story = {
  render: () => (
    <AreaChart data={data} config={chartConfig} stackType="stacked">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Tooltip variant="frosted-glass" defaultIndex={7} />
      <Series />
    </AreaChart>
  )
};

export const Loading: Story = {
  render: () => (
    <AreaChart
      data={[] as typeof data}
      config={chartConfig}
      isLoading
      stackType="stacked"
      curveType="bump">
      <AreaChart.Grid />
      <AreaChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <AreaChart.Legend isClickable />
      <AreaChart.Tooltip />
      <Series />
    </AreaChart>
  )
};
