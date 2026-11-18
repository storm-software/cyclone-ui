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
import { View } from "@tamagui/core";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Display/Skeleton",
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
      <View backgroundColor="canvas" padding="7xl" width={480}>
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
    <View gap="6xl">
      <View flexDirection="row" alignItems="flex-end" gap="4xl">
        <Skeleton {...args} shape="circle" size={32} />
        <Skeleton {...args} shape="circle" size={48} />
        <Skeleton {...args} shape="circle" size={64} />
      </View>
      <View flexDirection="row" alignItems="flex-end" gap="4xl">
        <Skeleton {...args} size={32} />
        <Skeleton {...args} size={48} />
        <Skeleton {...args} size={64} />
      </View>
      <View gap="2xl">
        <Skeleton {...args} />
        <Skeleton {...args} width="75%" />
        <Skeleton {...args} width="50%" height={32} />
      </View>
    </View>
  )
};

export const Card: Story = {
  render: args => (
    <View
      backgroundColor="surface"
      borderRadius="container"
      gap="4xl"
      padding="6xl">
      <View flexDirection="row" alignItems="center" gap="4xl">
        <Skeleton {...args} shape="circle" size={48} />
        <View flex={1} gap="2xl">
          <Skeleton {...args} width="40%" />
          <Skeleton {...args} width="25%" height={12} />
        </View>
      </View>
      <Skeleton {...args} height={160} />
      <View flexDirection="row" justifyContent="space-between">
        <Skeleton {...args} width={96} height={32} />
        <Skeleton {...args} width={96} height={32} />
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
