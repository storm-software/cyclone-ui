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
import { useState } from "react";
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";
import type { FeedbackProps, FeedbackValue } from "./Feedback";
import { Feedback } from "./Feedback";

const meta: Meta<typeof Feedback> = {
  title: "Blocks/Feedback",
  component: Feedback,
  tags: ["autodocs"],
  args: {
    size: "md",
    disabled: false,
    onCommentSubmit: fn()
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  // Leave room for the confetti burst and the popover.
  decorators: [
    Story => (
      <View padding="xl" minHeight={360}>
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const like = canvas.getByRole("button", { name: "Like" });
    const dislike = canvas.getByRole("button", { name: "Dislike" });

    await userEvent.click(like);
    await expect(like).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(dislike);
    await expect(dislike).toHaveAttribute("aria-pressed", "true");
    await expect(like).toHaveAttribute("aria-pressed", "false");

    // The popover content is portalled outside the canvas.
    const comment = await screen.findByRole("textbox", {
      name: "What could be improved?"
    });
    await userEvent.type(comment, "Too long");
    await userEvent.click(
      screen.getByRole("button", { name: "Send feedback" })
    );

    await expect(args.onCommentSubmit).toHaveBeenCalledWith("Too long");
    await waitFor(async () =>
      expect(dislike).toHaveAttribute("aria-expanded", "false")
    );
  }
};

export const Disliked: Story = {
  args: {
    defaultValue: "dislike"
  }
};

const ControlledFeedback = (args: FeedbackProps) => {
  const [value, setValue] = useState<FeedbackValue>(null);

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <Feedback {...args} value={value} onValueChange={setValue} />
      <Text color="color">{value ?? "none"}</Text>
    </View>
  );
};

export const Controlled: Story = {
  render: args => <ControlledFeedback {...args} />
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Sizes: Story = {
  render: args => (
    <View gap="xl">
      <Feedback {...args} size="sm" />
      <Feedback {...args} size="md" />
      <Feedback {...args} size="lg" />
    </View>
  )
};
