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

import type { ChartConfig, TooltipVariant } from "@cyclone-ui/chart";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { BarStackType, BarVariant } from "./BarChart";
import { BarChart } from "./BarChart";

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

// The buffer example ends on a higher, still-filling month
const bufferData = [
  ...data.slice(0, 10),
  { month: "November", desktop: 503, mobile: 215 },
  { month: "December", desktop: 971, mobile: 749 }
];

const horizontalData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 }
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
      "data-pink-emphasis",
      "data-purple-emphasis",
      "data-blue-emphasis"
    ]
  },
  mobile: {
    label: "Mobile",
    colors: ["data-green-emphasis", "data-blue-emphasis"]
  }
} satisfies ChartConfig;

// Inline stand-ins for the example's lucide icons; they follow the text color
const MonitorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const iconConfig = {
  desktop: { label: "Desktop", icon: MonitorIcon },
  mobile: { label: "Mobile", icon: SmartphoneIcon }
} satisfies ChartConfig;

const shortMonth = (value: string) => value.substring(0, 3);

// Every story composes its own chart in `render`, so the meta takes no args.
const meta: Meta = {
  title: "Charts/BarChart",
  component: BarChart,
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

export const Base: Story = {
  render: () => (
    <BarChart data={data} config={chartConfig} xDataKey="month">
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Brush formatLabel={value => shortMonth(String(value))} />
      <BarChart.Legend isClickable />
      <BarChart.Tooltip />
      <BarChart.Bar dataKey="desktop" isClickable />
      <BarChart.Bar dataKey="mobile" isClickable />
    </BarChart>
  )
};

// Clickable legend and bars, as most of the examples use
const clickableStory = ({
  variant = "default",
  stackType,
  config = chartConfig,
  glowing
}: {
  variant?: BarVariant;
  stackType?: BarStackType;
  config?: typeof chartConfig | typeof gradientConfig;
  glowing?: "desktop" | "mobile";
}): Story => ({
  render: () => (
    <BarChart data={data} config={config} stackType={stackType}>
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend isClickable />
      <BarChart.Tooltip />
      <BarChart.Bar
        dataKey="desktop"
        variant={variant}
        glowing={glowing === "desktop"}
        isClickable
      />
      <BarChart.Bar
        dataKey="mobile"
        variant={variant}
        glowing={glowing === "mobile"}
        isClickable
      />
    </BarChart>
  )
});

export const DefaultVariant: Story = clickableStory({ variant: "default" });
export const HatchedVariant: Story = clickableStory({ variant: "hatched" });
export const DuotoneVariant: Story = clickableStory({ variant: "duotone" });
export const DuotoneReverseVariant: Story = clickableStory({
  variant: "duotone-reverse"
});
export const GradientVariant: Story = clickableStory({ variant: "gradient" });
export const StrippedVariant: Story = clickableStory({ variant: "stripped" });

export const StackedType: Story = clickableStory({ stackType: "stacked" });
export const PercentType: Story = clickableStory({ stackType: "percent" });

export const GradientColors: Story = clickableStory({ config: gradientConfig });

export const GlowingDesktop: Story = clickableStory({ glowing: "desktop" });
export const GlowingMobile: Story = clickableStory({ glowing: "mobile" });

export const Buffer: Story = {
  render: () => (
    <BarChart data={bufferData} config={chartConfig}>
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend isClickable />
      <BarChart.Tooltip />
      <BarChart.Bar dataKey="desktop" bufferBar isClickable />
      <BarChart.Bar dataKey="mobile" bufferBar isClickable />
    </BarChart>
  )
};

export const HorizontalLayout: Story = {
  render: () => (
    <BarChart
      data={horizontalData}
      config={{ desktop: chartConfig.desktop }}
      layout="horizontal">
      <BarChart.Grid />
      {/* Recharts' implicit x-axis is categorical; the bars need a numeric one */}
      <BarChart.XAxis hide />
      <BarChart.YAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend />
      <BarChart.Tooltip />
      <BarChart.Bar dataKey="desktop" />
    </BarChart>
  )
};

export const HoverHighlight: Story = {
  render: () => (
    <BarChart data={data} config={chartConfig}>
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend />
      <BarChart.Tooltip />
      <BarChart.Bar dataKey="desktop" enableHoverHighlight />
      <BarChart.Bar dataKey="mobile" enableHoverHighlight />
    </BarChart>
  )
};

// A read-only chart with the tooltip pinned to May
const staticStory = ({
  config = chartConfig,
  tooltipVariant
}: {
  config?: typeof chartConfig | typeof iconConfig;
  tooltipVariant?: TooltipVariant;
}): Story => ({
  render: () => (
    <BarChart data={data} config={config}>
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend />
      <BarChart.Tooltip variant={tooltipVariant} defaultIndex={4} />
      <BarChart.Bar dataKey="desktop" />
      <BarChart.Bar dataKey="mobile" />
    </BarChart>
  )
});

export const ChartConfigDefault: Story = staticStory({});
export const ChartConfigIcons: Story = staticStory({ config: iconConfig });
export const TooltipDefault: Story = staticStory({ tooltipVariant: "default" });
export const TooltipFrostedGlass: Story = staticStory({
  tooltipVariant: "frosted-glass"
});

export const LoadingState: Story = {
  render: () => (
    <BarChart data={[] as typeof data} config={chartConfig} isLoading>
      <BarChart.Grid />
      <BarChart.XAxis dataKey="month" tickFormatter={shortMonth} />
      <BarChart.Legend />
      <BarChart.Tooltip />
      <BarChart.Bar dataKey="desktop" />
      <BarChart.Bar dataKey="mobile" />
    </BarChart>
  )
};
