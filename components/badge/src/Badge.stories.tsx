import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "General/Badge",
  component: Badge,
  tags: ["autodocs"],
  render: (args: any) => (
    <Badge {...args}>
      <Badge.Text>{args.children}</Badge.Text>
    </Badge>
  )
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    children: "Badge Text"
  }
};

export const Rounded: Story = {
  args: {
    children: "Badge Text",
    circular: true
  }
};

export const Outlined: Story = {
  args: {
    children: "Badge Text",
    outlined: true
  }
};

export const Brand: Story = {
  args: {
    children: "Badge Text",
    theme: "brand"
  }
};

export const BrandRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "brand",
    circular: true
  }
};

export const BrandOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "brand",
    outlined: true
  }
};

export const Help: Story = {
  args: {
    children: "Badge Text",
    theme: "help"
  }
};

export const HelpRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "help",
    circular: true
  }
};

export const HelpOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "help",
    outlined: true
  }
};

export const Error: Story = {
  args: {
    children: "Badge Text",
    theme: "error"
  }
};

export const ErrorRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "error",
    circular: true
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "error",
    outlined: true
  }
};

export const Warning: Story = {
  args: {
    children: "Badge Text",
    theme: "warning"
  }
};

export const WarningRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "warning",
    circular: true
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "warning",
    outlined: true
  }
};

export const Info: Story = {
  args: {
    children: "Badge Text",
    theme: "info"
  }
};

export const InfoRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "info",
    circular: true
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "info",
    outlined: true
  }
};

export const Success: Story = {
  args: {
    children: "Badge Text",
    theme: "success"
  }
};

export const SuccessRounded: Story = {
  args: {
    children: "Badge Text",
    theme: "success",
    circular: true
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Badge Text",
    theme: "success",
    outlined: true
  }
};
