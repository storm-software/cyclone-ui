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
import { Text, View } from "@tamagui/core";
import { useRef } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type {
  RippleAnimationHandle,
  RippleAnimationProps
} from "./RippleAnimation";
import { RippleAnimation } from "./RippleAnimation";

const RippleButton = (args: RippleAnimationProps) => {
  const rippleRef = useRef<RippleAnimationHandle>(null);

  return (
    <View
      render="button"
      position="relative"
      overflow="hidden"
      alignSelf="flex-start"
      paddingHorizontal="3xl"
      paddingVertical="xl"
      borderWidth={1}
      borderColor="hairline"
      borderRadius="control"
      backgroundColor="sunken"
      cursor="pointer"
      onPress={event => rippleRef.current?.ripple(event)}>
      <Text color="ink">Press me</Text>
      <RippleAnimation testID="ripple" {...args} ref={rippleRef} />
    </View>
  );
};

const meta: Meta<typeof RippleAnimation> = {
  title: "Display/RippleAnimation",
  component: RippleAnimation,
  tags: ["autodocs"],
  args: {
    color: "primary"
  },
  render: args => <RippleButton {...args} />
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ripple = canvas.getByTestId("ripple");

    await expect(ripple).toBeEmptyDOMElement();
    await userEvent.click(canvas.getByRole("button", { name: "Press me" }));
    await expect(ripple).not.toBeEmptyDOMElement();
    // Each ripple removes itself once its animation finishes.
    await waitFor(async () => expect(ripple).toBeEmptyDOMElement(), {
      timeout: 2000
    });
  }
};

export const Danger: Story = {
  args: {
    color: "danger"
  }
};
