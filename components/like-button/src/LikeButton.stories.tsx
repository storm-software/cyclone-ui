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
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { LikeButtonProps } from "./LikeButton";
import { LikeButton } from "./LikeButton";

const meta: Meta<typeof LikeButton> = {
  title: "Base/LikeButton",
  component: LikeButton,
  tags: ["autodocs"],
  args: {
    defaultLiked: false,
    size: "md",
    disabled: false
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  // Leave room for the confetti burst.
  decorators: [
    Story => (
      <View padding="xl">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", { name: "Like" });

    await expect(button).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await userEvent.keyboard(" ");
    await expect(button).toHaveAttribute("aria-pressed", "false");
  }
};

export const Liked: Story = {
  args: {
    defaultLiked: true
  }
};

const ControlledLikeButton = (args: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <LikeButton {...args} liked={liked} onLikedChange={setLiked} />
      <Text color="color">{liked ? 1 : 0}</Text>
    </View>
  );
};

export const Controlled: Story = {
  render: args => <ControlledLikeButton {...args} />
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Sizes: Story = {
  render: args => (
    <View flexDirection="row" gap="xl">
      <LikeButton {...args} size="sm" />
      <LikeButton {...args} size="md" />
      <LikeButton {...args} size="lg" />
    </View>
  )
};

export const Danger: Story = {
  render: args => (
    <Theme name="danger">
      <LikeButton {...args} defaultLiked={true} />
    </Theme>
  )
};
