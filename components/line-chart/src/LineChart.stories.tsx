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

import type {
  BackgroundVariant,
  ChartConfig,
  ChartLegendVariant,
  DotVariant
} from "@cyclone-ui/chart";
import { ChartBackground } from "@cyclone-ui/chart";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { LineStrokeVariant } from "./LineChart";
import { LineChart } from "./LineChart";

const data = [
  { month: "January", desktop: 342, mobile: 184 },
  { month: "February", desktop: 876, mobile: 491 },
  { month: "March", desktop: 512, mobile: 290 },
  { month: "April", desktop: 629, mobile: 391 },
  { month: "May", desktop: 458, mobile: 309 },
  { month: "June", desktop: 781, mobile: 449 },
  { month: "July", desktop: 394, mobile: 234 },
  { month: "August", desktop: 925, mobile: 557 },
  { month: "September", desktop: 647, mobile: 367 },
  { month: "October", desktop: 532, mobile: 357 },
  { month: "November", desktop: 803, mobile: 515 },
  { month: "December", desktop: 271, mobile: 149 }
];

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
  title: "Charts/LineChart",
  component: LineChart,
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
  dot,
  activeDot,
  strokeVariant = "solid",
  isClickable = true,
  glowing,
  enableBufferLine
}: {
  dot?: DotVariant;
  activeDot?: DotVariant;
  strokeVariant?: LineStrokeVariant;
  isClickable?: boolean;
  glowing?: "desktop" | "mobile";
  enableBufferLine?: boolean;
}) => (
  <>
    {(["desktop", "mobile"] as const).map(dataKey => (
      <LineChart.Line
        key={dataKey}
        dataKey={dataKey}
        strokeVariant={strokeVariant}
        isClickable={isClickable}
        glowing={glowing === dataKey}
        enableBufferLine={enableBufferLine}>
        {dot && <LineChart.Dot variant={dot} />}
        {activeDot && <LineChart.ActiveDot variant={activeDot} />}
      </LineChart.Line>
    ))}
  </>
);

export const Base: Story = {
  render: () => (
    <LineChart data={data} config={chartConfig} xDataKey="month">
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Brush formatLabel={value => shortMonth(String(value))} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series dot="border" activeDot="colored-border" />
    </LineChart>
  )
};

const strokeStory = (strokeVariant: LineStrokeVariant): Story => ({
  render: () => (
    <LineChart data={data} config={chartConfig}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.YAxis dataKey="desktop" />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series strokeVariant={strokeVariant} activeDot="default" />
    </LineChart>
  )
});

export const SolidStroke: Story = strokeStory("solid");
export const DashedStroke: Story = strokeStory("dashed");
export const AnimatedDashedStroke: Story = strokeStory("animated-dashed");

const curveStory = (curveType: "bump" | "monotoneY" | "step"): Story => ({
  render: () => (
    <LineChart data={data} config={chartConfig} curveType={curveType}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.YAxis dataKey="desktop" />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series dot="default" activeDot="default" />
    </LineChart>
  )
});

export const BumpCurve: Story = curveStory("bump");
export const MonotoneYCurve: Story = curveStory("monotoneY");
export const StepCurve: Story = curveStory("step");

const dotStory = (dot: DotVariant): Story => ({
  render: () => (
    <LineChart data={data} config={chartConfig} xDataKey="month">
      <LineChart.Grid />
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Tooltip />
      <Series dot={dot} isClickable={false} />
    </LineChart>
  )
});

export const DotDefault: Story = dotStory("default");
export const DotBorder: Story = dotStory("border");
export const DotColoredBorder: Story = dotStory("colored-border");

const legendStory = (variant: ChartLegendVariant): Story => ({
  render: () => (
    <LineChart data={data} config={chartConfig}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend variant={variant} />
      <LineChart.Tooltip />
      <Series isClickable={false} />
    </LineChart>
  )
});

export const LegendSquare: Story = legendStory("square");
export const LegendCircle: Story = legendStory("circle");
export const LegendCircleOutline: Story = legendStory("circle-outline");
export const LegendRoundedSquare: Story = legendStory("rounded-square");
export const LegendRoundedSquareOutline: Story = legendStory(
  "rounded-square-outline"
);
export const LegendVerticalBar: Story = legendStory("vertical-bar");
export const LegendHorizontalBar: Story = legendStory("horizontal-bar");

// The pattern sits behind the series; it isn't a part of the line chart.
const backgroundStory = (variant: BackgroundVariant): Story => ({
  render: () => (
    <LineChart data={data} config={chartConfig}>
      <ChartBackground variant={variant} />
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series dot="border" activeDot="colored-border" />
    </LineChart>
  )
});

export const BgDots: Story = backgroundStory("dots");
export const BgGrid: Story = backgroundStory("grid");
export const BgCrossHatch: Story = backgroundStory("cross-hatch");
export const BgDiagonalLines: Story = backgroundStory("diagonal-lines");
export const BgPlus: Story = backgroundStory("plus");
export const BgFallingTriangles: Story = backgroundStory("falling-triangles");
export const Bg4PointedStar: Story = backgroundStory("4-pointed-star");
export const BgTinyCheckers: Story = backgroundStory("tiny-checkers");
export const BgOverlappingCircles: Story = backgroundStory(
  "overlapping-circles"
);
export const BgWiggleLines: Story = backgroundStory("wiggle-lines");
export const BgBubbles: Story = backgroundStory("bubbles");

export const GlowingDesktop: Story = {
  render: () => (
    <LineChart data={data} config={gradientConfig}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series glowing="desktop" dot="colored-border" activeDot="default" />
    </LineChart>
  )
};

export const GlowingMobile: Story = {
  render: () => (
    <LineChart data={data} config={chartConfig}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series glowing="mobile" dot="border" activeDot="colored-border" />
    </LineChart>
  )
};

export const GradientColors: Story = {
  render: () => (
    <LineChart data={data} config={gradientConfig}>
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series dot="colored-border" activeDot="default" />
    </LineChart>
  )
};

export const GradientColorsBump: Story = {
  render: () => (
    <LineChart data={data} config={gradientConfig} curveType="bump">
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series dot="colored-border" activeDot="default" />
    </LineChart>
  )
};

export const Buffer: Story = {
  render: () => (
    <LineChart data={data} config={chartConfig} xDataKey="month">
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.Brush />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series enableBufferLine dot="border" activeDot="colored-border" />
    </LineChart>
  )
};

export const Loading: Story = {
  render: () => (
    <LineChart
      data={[] as typeof data}
      config={chartConfig}
      isLoading
      curveType="bump">
      <LineChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <LineChart.YAxis dataKey="desktop" />
      <LineChart.Legend isClickable />
      <LineChart.Tooltip />
      <Series activeDot="default" />
    </LineChart>
  )
};
