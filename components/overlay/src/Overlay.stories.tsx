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
import { Text } from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import type { OverlayProps } from "./Overlay";
import { Overlay } from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Containers/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  render: (props: OverlayProps) => (
    <YStack position="relative" height="90vh" width="100%" padding="3xl">
      <Text>Content partially obscured by the overlay.</Text>
      <Overlay {...props} />
    </YStack>
  )
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Base: Story = {
  args: {}
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Danger: Story = {
  args: {
    theme: "danger"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};
