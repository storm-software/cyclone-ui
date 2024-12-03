/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Diagonal } from "@cyclone-ui/vectors";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "@tamagui/core";
import { ScrollView } from "./ScrollView";

const meta: Meta<typeof ScrollView> = {
  title: "Base/ScrollView",
  component: ScrollView,
  tags: ["autodocs"],
  render: (args: any) => (
    <View
      display="flex"
      width="100%"
      height={500}
      backgroundColor="red"
      alignItems="center"
      justifyContent="center">
      <ScrollView {...args} maxHeight={400} width="90%">
        <Diagonal width="100%" height={2000} />
      </ScrollView>
    </View>
  )
} satisfies Meta<typeof ScrollView>;

export default meta;

type Story = StoryObj<typeof ScrollView>;

export const Base: Story = {
  args: {}
};
