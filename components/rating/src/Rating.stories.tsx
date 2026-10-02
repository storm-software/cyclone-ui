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

import { Heart } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, Theme, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { RatingProps } from "./Rating";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Form/Rating",
  component: Rating,
  tags: ["autodocs"],
  args: {
    defaultValue: 2,
    max: 5,
    precision: 1,
    size: "md",
    readOnly: false,
    disabled: false,
    highlightSelectedOnly: false
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    precision: {
      control: "inline-radio",
      options: [1, 0.5, 0.25, 0.1]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const rating = within(canvasElement).getByRole("slider");

    await expect(rating).toHaveAttribute("aria-valuenow", "2");

    await userEvent.tab();
    await expect(rating).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(rating).toHaveAttribute("aria-valuenow", "3");

    await userEvent.keyboard("{End}");
    await expect(rating).toHaveAttribute("aria-valuenow", "5");

    await userEvent.keyboard("{Home}");
    await expect(rating).toHaveAttribute("aria-valuenow", "0");
  }
};

const ControlledRating = (args: RatingProps) => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <View flexDirection="row" alignItems="center" gap="md">
      <Rating
        {...args}
        value={value}
        onChange={setValue}
        onChangeActive={setHover}
      />
      <Text color="color">{hover ?? value ?? "No rating"}</Text>
    </View>
  );
};

/** Click the selected value again to clear it. */
export const HoverFeedback: Story = {
  render: args => <ControlledRating {...args} />
};

export const HalfRatings: Story = {
  args: {
    defaultValue: 2.5,
    precision: 0.5
  }
};

export const ReadOnly: Story = {
  args: {
    value: 3.5,
    precision: 0.5,
    readOnly: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const NoRating: Story = {
  args: {
    defaultValue: null
  }
};

export const Sizes: Story = {
  render: args => (
    <View gap="md">
      <Rating {...args} size="sm" />
      <Rating {...args} size="md" />
      <Rating {...args} size="lg" />
    </View>
  )
};

export const CustomIcon: Story = {
  args: {
    icon: Heart,
    defaultValue: 3,
    precision: 0.5
  },
  render: args => (
    <Theme name="danger">
      <Rating {...args} />
    </Theme>
  )
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: 7
  }
};

export const HighlightSelectedOnly: Story = {
  args: {
    highlightSelectedOnly: true,
    defaultValue: 3
  }
};

export const Warning: Story = {
  render: args => (
    <Theme name="warning">
      <Rating {...args} />
    </Theme>
  )
};
