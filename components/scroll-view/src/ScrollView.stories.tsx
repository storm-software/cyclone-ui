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

import { Diagonal } from "@cyclone-ui/vectors";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { ScrollView } from "./ScrollView";

const meta = {
  title: "Base/ScrollView",
  component: ScrollView,
  tags: ["autodocs"],
  args: {
    size: "sm",
    maxHeight: 400
  },
  render: args => (
    <View alignItems="center" height={500} padding="4" width="100%">
      <ScrollView {...args}>
        <Diagonal width="100%" height={2000} />
      </ScrollView>
    </View>
  )
} satisfies Meta<typeof ScrollView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallSize: Story = {};

export const LargeSize: Story = {
  args: { size: "lg" }
};

export const FitsWithinMaxHeight: Story = {
  render: args => (
    <View alignItems="center" height={500} padding="4" width="100%">
      <ScrollView {...args}>
        <Diagonal width="100%" height={200} />
      </ScrollView>
    </View>
  )
};

export const ScrollingDisabled: Story = {
  args: { scrollEnabled: false }
};

export const Fullscreen: Story = {
  args: { fullscreen: true }
};
