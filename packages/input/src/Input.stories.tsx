import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  render: args => (
    <Input {...args}>
      <Input.Label htmlFor="input">Label Text</Input.Label>
      <Input.Box>
        <Input.Area id="input" placeholder="email@example.com" />
      </Input.Box>
    </Input>
  )
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true
  }
};
