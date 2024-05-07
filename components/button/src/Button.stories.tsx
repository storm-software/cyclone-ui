import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button Text"
  }
};

export const Secondary: Story = {
  args: {
    children: "Button Text",
    variant: "secondary"
  }
};

export const Outlined: Story = {
  args: {
    children: "Button Text",
    variant: "outlined"
  }
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    variant: "ghost"
  }
};

export const Glass: Story = {
  args: {
    children: "Button Text",
    variant: "glass"
  }
};

export const BrandPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "brand"
  }
};

export const BrandSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "secondary"
  }
};

export const BrandOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "outlined"
  }
};

export const BrandGhost: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "ghost"
  }
};

export const BrandGlass: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "glass"
  }
};

export const AccentPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "accent"
  }
};

export const AccentSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "accent",
    variant: "secondary"
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

export const AccentGlass: Story = {
  args: {
    children: "Button Text",
    theme: "accent",
    variant: "glass"
  }
};

export const ErrorPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "error"
  }
};

export const ErrorSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "secondary"
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

export const ErrorGlass: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "glass"
  }
};

export const WarningPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "warning"
  }
};

export const WarningSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "secondary"
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

export const WarningGlass: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "glass"
  }
};

export const InfoPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "info"
  }
};

export const InfoSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "secondary"
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

export const InfoGlass: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "glass"
  }
};

export const SuccessPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "success"
  }
};

export const SuccessSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "secondary"
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

export const SuccessGlass: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "glass"
  }
};
