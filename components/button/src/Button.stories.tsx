import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: "Button Text"
  }
};

export const Outlined: Story = {
  args: {
    children: "Button Text",
    variant: "outlined"
  }
};

export const Inverse: Story = {
  args: {
    children: "Button Text",
    themeInverse: true
  }
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    variant: "ghost"
  }
};

export const Primary: Story = {
  args: {
    children: "Button Text",
    theme: "primary"
  }
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "outlined"
  }
};

export const PrimaryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    themeInverse: true
  }
};

export const PrimaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "ghost"
  }
};

export const Secondary: Story = {
  args: {
    children: "Button Text",
    theme: "secondary"
  }
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "outlined"
  }
};

export const SecondaryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    themeInverse: true
  }
};

export const SecondaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "ghost"
  }
};

export const Tertiary: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary"
  }
};

export const TertiaryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary",
    variant: "outlined"
  }
};

export const TertiaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary",
    variant: "ghost"
  }
};

export const Error: Story = {
  args: {
    children: "Button Text",
    theme: "error"
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "outlined"
  }
};

export const ErrorGhost: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "ghost"
  }
};

export const Warning: Story = {
  args: {
    children: "Button Text",
    theme: "warning"
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "outlined"
  }
};

export const WarningGhost: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "ghost"
  }
};

export const Info: Story = {
  args: {
    children: "Button Text",
    theme: "info"
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "outlined"
  }
};

export const InfoGhost: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "ghost"
  }
};

export const Success: Story = {
  args: {
    children: "Button Text",
    theme: "success"
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "outlined"
  }
};

export const SuccessGhost: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "ghost"
  }
};

export const Accent: Story = {
  args: {
    children: "Button Text",
    theme: "accent"
  }
};

export const AccentOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "accent",
    variant: "outlined"
  }
};

export const AccentGhost: Story = {
  args: {
    children: "Button Text",
    theme: "accent",
    variant: "ghost"
  }
};
