import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  render: ({ children, ...rest }: any) => (
    <Button {...rest}>
      <Button.Text>{children}</Button.Text>
    </Button>
  )
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button Text",
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    children: "Button Text",
    variant: "secondary",
    disabled: false
  }
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    variant: "ghost",
    disabled: false
  }
};

export const Glass: Story = {
  args: {
    children: "Button Text",
    variant: "glass",
    disabled: false
  }
};

export const Link: Story = {
  args: {
    children: "Button Text",
    variant: "link",
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    children: "Button Text",
    disabled: true
  }
};

export const Rounded: Story = {
  args: {
    children: "Button Text",
    disabled: false,
    circular: true
  }
};

export const Outlined: Story = {
  args: {
    children: "Button Text",
    disabled: false,
    outlined: true
  }
};

export const BrandPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    disabled: false
  }
};

export const BrandSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "secondary",
    disabled: false
  }
};

export const BrandGhost: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "ghost",
    disabled: false
  }
};

export const BrandGlass: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "glass",
    disabled: false
  }
};

export const BrandLink: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "link",
    disabled: false
  }
};

export const BrandDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    disabled: true
  }
};

export const HelpPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    disabled: false
  }
};

export const HelpSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "secondary",
    disabled: false
  }
};

export const HelpGhost: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "ghost",
    disabled: false
  }
};

export const HelpGlass: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "glass",
    disabled: false
  }
};

export const HelpLink: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "link",
    disabled: false
  }
};

export const HelpDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    disabled: true
  }
};

export const ErrorPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    disabled: false
  }
};

export const ErrorSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "secondary",
    disabled: false
  }
};

export const ErrorGhost: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "ghost",
    disabled: false
  }
};

export const ErrorGlass: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "glass",
    disabled: false
  }
};

export const ErrorLink: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    variant: "link",
    disabled: false
  }
};

export const ErrorDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "error",
    disabled: true
  }
};

export const WarningPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    disabled: false
  }
};

export const WarningSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "secondary",
    disabled: false
  }
};

export const WarningGhost: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "ghost",
    disabled: false
  }
};

export const WarningGlass: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "glass",
    disabled: false
  }
};

export const WarningLink: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "link",
    disabled: false
  }
};

export const WarningDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    disabled: true
  }
};

export const InfoPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    disabled: false
  }
};

export const InfoSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "secondary",
    disabled: false
  }
};

export const InfoGhost: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "ghost",
    disabled: false
  }
};

export const InfoGlass: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "glass",
    disabled: false
  }
};

export const InfoLink: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "link",
    disabled: false
  }
};

export const InfoDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    disabled: true
  }
};

export const SuccessPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    disabled: false
  }
};

export const SuccessSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "secondary",
    disabled: false
  }
};

export const SuccessGhost: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "ghost",
    disabled: false
  }
};

export const SuccessGlass: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "glass",
    disabled: false
  }
};

export const SuccessLink: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "link",
    disabled: false
  }
};

export const SuccessDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    disabled: true
  }
};
