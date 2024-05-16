import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  render: (args: any) => (
    <Select name="selectName" {...args}>
      <Select.Label>Label Text</Select.Label>
      <Select.Box>
        <Select.Value placeholder="email@example.com" />
      </Select.Box>
      <Select.Details>
        This is an example detailed message for an select
      </Select.Details>
    </Select>
  )
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { name: "Apple", value: "Apple" },
  { name: "Pear", value: "Pear" },
  { name: "Blackberry", value: "Blackberry" },
  { name: "Peach", value: "Peach" },
  { name: "Apricot", value: "Apricot" },
  { name: "Melon", value: "Melon" },
  { name: "Honeydew", value: "Honeydew" },
  { name: "Starfruit", value: "Starfruit" },
  { name: "Blueberry", value: "Blueberry" },
  { name: "Raspberry", value: "Raspberry" },
  { name: "Strawberry", value: "Strawberry" },
  { name: "Mango", value: "Mango" },
  { name: "Pineapple", value: "Pineapple" },
  { name: "Lime", value: "Lime" },
  { name: "Lemon", value: "Lemon" },
  { name: "Coconut", value: "Coconut" },
  { name: "Guava", value: "Guava" },
  { name: "Papaya", value: "Papaya" },
  { name: "Orange", value: "Orange" },
  { name: "Grape", value: "Grape" },
  { name: "Jackfruit", value: "Jackfruit" },
  { name: "Durian", value: "Durian" }
];

export const Base: Story = {
  args: {
    options
  }
};

export const Required: Story = {
  args: {
    required: true,
    options
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options
  }
};

export const Help: Story = {
  args: {
    theme: "help",
    options
  }
};

export const Error: Story = {
  args: {
    theme: "error",
    options
  }
};

export const Warning: Story = {
  args: {
    theme: "warning",
    options
  }
};

export const Info: Story = {
  args: {
    theme: "info",
    options
  }
};

export const Success: Story = {
  args: {
    theme: "success",
    options
  }
};
