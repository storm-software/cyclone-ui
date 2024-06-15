import type { Meta, StoryObj } from "@storybook/react";
import { NextButton } from "./NextButton";

const meta: Meta<typeof NextButton> = {
  title: "Buttons/NextButton",
  component: NextButton,
  tags: ["autodocs"],
  render: (args: any) => <NextButton {...args} />
} satisfies Meta<typeof NextButton>;

export default meta;

type Story = StoryObj<typeof NextButton>;

export const Base: Story = {
  args: {}
};

export const CustomText: Story = {
  args: {
    children: "Custom Text"
  }
};
