import type { Meta, StoryObj } from "@storybook/react";

import { EyebrowText } from "./EyebrowText";

const meta: Meta<typeof EyebrowText> = {
  title: "Typography/EyebrowText",
  component: EyebrowText,
  tags: ["autodocs"],
  render: (args: any) => (
    <EyebrowText {...args}>Lorem ipsum dolor sit amet</EyebrowText>
  )
} satisfies Meta<typeof EyebrowText>;

export default meta;

type Story = StoryObj<typeof EyebrowText>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
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
