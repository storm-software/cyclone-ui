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
import { Text, Theme, View } from "@tamagui/core";
import { useRef } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { ConfettiBurstHandle, ConfettiBurstProps } from "./ConfettiBurst";
import { ConfettiBurst } from "./ConfettiBurst";

const BurstButton = (args: ConfettiBurstProps) => {
  const confetti = useRef<ConfettiBurstHandle>(null);

  return (
    <View
      render="button"
      position="relative"
      alignSelf="flex-start"
      paddingHorizontal="xl"
      paddingVertical="md"
      borderWidth={1}
      borderColor="hairline"
      borderRadius="control"
      backgroundColor="surfaceSunken"
      cursor="pointer"
      onPress={() => confetti.current?.burst()}>
      <Text color="color">Celebrate</Text>
      <ConfettiBurst testID="confetti" {...args} ref={confetti} />
    </View>
  );
};

const meta: Meta<typeof ConfettiBurst> = {
  title: "Display/ConfettiBurst",
  component: ConfettiBurst,
  tags: ["autodocs"],
  args: {
    spread: 24,
    count: 16
  },
  render: args => <BurstButton {...args} />,
  // Leave room for the confetti burst.
  decorators: [
    Story => (
      <View padding="3xl">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const confetti = canvas.getByTestId("confetti");

    await expect(confetti).toBeEmptyDOMElement();
    await userEvent.click(canvas.getByRole("button", { name: "Celebrate" }));
    // Each square removes itself once its animation finishes.
    await expect(confetti).not.toBeEmptyDOMElement();
  }
};

export const Wide: Story = {
  args: {
    spread: 64,
    count: 32
  }
};

export const Danger: Story = {
  render: args => (
    <Theme name="danger">
      <BurstButton {...args} />
    </Theme>
  )
};
