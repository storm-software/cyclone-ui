import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  render: (args: any) => (
    <RadioGroup name="radioGroupName" {...args}>
      <RadioGroup.Label>Label Text</RadioGroup.Label>
      {options.map(option => (
        <RadioGroup.Option {...option} />
      ))}
      <RadioGroup.Details>
        This is an example detailed message for an radio group
      </RadioGroup.Details>
    </RadioGroup>
  )
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const options = [
  { name: "Apple", value: "Apple" },
  { name: "Blackberry", value: "Blackberry" },
  { name: "Starfruit", value: "Starfruit" },
  { name: "Blueberry", value: "Blueberry" },
  { name: "Raspberry", value: "Raspberry" },
  { name: "Strawberry", value: "Strawberry" },
  { name: "Pineapple", value: "Pineapple" },
  { name: "Lime", value: "Lime" },
  { name: "Orange", value: "Orange" },
  { name: "Grape", value: "Grape" }
];

export const Base: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "error"
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

export const Success: Story = {
  args: {
    theme: "success"
  }
};
