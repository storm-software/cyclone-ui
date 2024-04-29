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

export const Glass: Story = {
  args: {
    children: "Button Text",
    variant: "glass"
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

export const PrimaryGlass: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "glass"
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

export const SecondaryGlass: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "glass"
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

export const TertiaryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary",
    themeInverse: true
  }
};

export const TertiaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary",
    variant: "ghost"
  }
};

export const TertiaryGlass: Story = {
  args: {
    children: "Button Text",
    theme: "tertiary",
    variant: "glass"
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

export const ErrorGlass: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "glass"
  }
};

export const ErrorInverse: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    themeInverse: true
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

export const WarningInverse: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    themeInverse: true
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

export const InfoInverse: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    themeInverse: true
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

export const SuccessInverse: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    themeInverse: true
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

export const AccentInverse: Story = {
  args: {
    children: "Button Text",
    theme: "accent",
    themeInverse: true
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
