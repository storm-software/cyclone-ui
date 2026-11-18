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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/tailwind";
import { Skeleton } from "./Skeleton.tailwind";

const meta: Meta<typeof Skeleton> = {
  title: "Display/Skeleton/Tailwind",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    animation: "wave",
    shape: "rectangle"
  },
  argTypes: {
    animation: { control: "inline-radio", options: ["wave", "none"] },
    shape: { control: "inline-radio", options: ["rectangle", "circle"] }
  },
  decorators: [
    Story => (
      <View className="w-[480px] bg-canvas p-7xl">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Shapes: Story = {
  render: args => (
    <View className="gap-6xl">
      <View className="flex-row items-end gap-4xl">
        <Skeleton {...args} shape="circle" className="size-[32px]" />
        <Skeleton {...args} shape="circle" className="size-[48px]" />
        <Skeleton {...args} shape="circle" className="size-[64px]" />
      </View>
      <View className="flex-row items-end gap-4xl">
        <Skeleton {...args} className="size-[32px]" />
        <Skeleton {...args} className="size-[48px]" />
        <Skeleton {...args} className="size-[64px]" />
      </View>
      <View className="gap-2xl">
        <Skeleton {...args} />
        <Skeleton {...args} className="w-3/4" />
        <Skeleton {...args} className="h-[32px] w-1/2" />
      </View>
    </View>
  )
};

export const Card: Story = {
  render: args => (
    <View className="gap-4xl rounded-container bg-surface p-6xl">
      <View className="flex-row items-center gap-4xl">
        <Skeleton {...args} shape="circle" className="size-[48px]" />
        <View className="flex-1 gap-2xl">
          <Skeleton {...args} className="w-2/5" />
          <Skeleton {...args} className="h-[12px] w-1/4" />
        </View>
      </View>
      <Skeleton {...args} className="h-[160px]" />
      <View className="flex-row justify-between">
        <Skeleton {...args} className="h-[32px] w-[96px]" />
        <Skeleton {...args} className="h-[32px] w-[96px]" />
      </View>
    </View>
  )
};

export const NoAnimation: Story = {
  args: {
    animation: "none"
  },
  render: Card.render
};
