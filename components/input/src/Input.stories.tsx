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

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Primary: Story = {
  args: {
    theme: "primary"
  }
};

export const PrimaryOutlined: Story = {
  args: {
    theme: "primary",
    variant: "outlined"
  }
};

export const Secondary: Story = {
  args: {
    theme: "secondary"
  }
};

export const SecondaryOutlined: Story = {
  args: {
    theme: "secondary",
    variant: "outlined"
  }
};

export const Tertiary: Story = {
  args: {
    theme: "tertiary"
  }
};

export const TertiaryOutlined: Story = {
  args: {
    theme: "tertiary",
    variant: "outlined"
  }
};

export const Error: Story = {
  args: {
    theme: "error"
  }
};

export const ErrorOutlined: Story = {
  args: {
    theme: "error",
    variant: "outlined"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const WarningOutlined: Story = {
  args: {
    theme: "warning",
    variant: "outlined"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const InfoOutlined: Story = {
  args: {
    theme: "info",
    variant: "outlined"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};

export const SuccessOutlined: Story = {
  args: {
    theme: "success",
    variant: "outlined"
  }
};

export const Accent: Story = {
  args: {
    theme: "accent"
  }
};

export const AccentOutlined: Story = {
  args: {
    theme: "accent",
    variant: "outlined"
  }
};
