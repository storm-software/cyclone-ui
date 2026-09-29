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
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Base/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {
    color: "hairline",
    direction: "horizontal",
    size: "sm"
  },
  decorators: [
    Story => (
      <View width={320} gap="md">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    size: "md"
  },
  render: args => (
    <View flexDirection="row" height={96} paddingHorizontal="xl">
      <Divider {...args} />
    </View>
  )
};

export const Small: Story = {
  args: {
    size: "sm"
  }
};

export const Medium: Story = {
  args: {
    size: "md"
  }
};

export const Large: Story = {
  args: {
    size: "lg"
  }
};
