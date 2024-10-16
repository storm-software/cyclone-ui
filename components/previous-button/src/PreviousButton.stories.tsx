import type { Meta, StoryObj } from "@storybook/react";
import { PreviousButton } from "./PreviousButton";

const meta: Meta<typeof PreviousButton> = {
  title: "Triggers/PreviousButton",
  component: PreviousButton,
  tags: ["autodocs"],
  render: (args: any) => <PreviousButton {...args} />
} satisfies Meta<typeof PreviousButton>;

export default meta;

type Story = StoryObj<typeof PreviousButton>;

export const Base: Story = {
  args: {}
};

export const CustomText: Story = {
  args: {
    children: "Custom Text"
  }
};
