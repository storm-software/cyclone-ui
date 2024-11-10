/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import type { Meta, StoryObj } from "@storybook/react";
import { X } from "@tamagui/lucide-icons";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Triggers/Button",
  component: Button,
  tags: ["autodocs"],
  render: ({ children, icon, ...rest }: any) => (
    <Button {...rest}>
      {children && <Button.Text>{children}</Button.Text>}
      {icon && <Button.Icon>{icon}</Button.Icon>}
    </Button>
  )
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: "Button Text"
  }
};

export const Icon: Story = {
  args: {
    icon: <X />
  }
};

export const Primary: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
    disabled: false
  }
};

export const PrimaryIcon: Story = {
  args: {
    icon: <X />,
    variant: "primary",
    disabled: false
  }
};

export const PrimaryNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
    disabled: false,
    bordered: false
  }
};

export const Secondary: Story = {
  args: {
    children: "Button Text",
    variant: "secondary",
    disabled: false
  }
};

export const SecondaryIcon: Story = {
  args: {
    icon: <X />,
    variant: "secondary",
    disabled: false
  }
};

export const SecondaryNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "secondary",
    disabled: false,
    bordered: false
  }
};

export const Tertiary: Story = {
  args: {
    children: "Button Text",
    variant: "tertiary",
    disabled: false
  }
};

export const TertiaryIcon: Story = {
  args: {
    icon: <X />,
    variant: "tertiary",
    disabled: false
  }
};

export const TertiaryNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "tertiary",
    disabled: false,
    bordered: false
  }
};

export const Quaternary: Story = {
  args: {
    children: "Button Text",
    variant: "quaternary",
    disabled: false
  }
};

export const QuaternaryIcon: Story = {
  args: {
    icon: <X />,
    variant: "quaternary",
    disabled: false
  }
};

export const QuaternaryNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "quaternary",
    disabled: false,
    bordered: false
  }
};

export const Outlined: Story = {
  args: {
    children: "Button Text",
    variant: "outlined",
    disabled: false
  }
};

export const OutlinedIcon: Story = {
  args: {
    icon: <X />,
    variant: "outlined",
    disabled: false
  }
};

export const OutlinedNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "outlined",
    disabled: false,
    bordered: false
  }
};

export const Gradient: Story = {
  args: {
    children: "Button Text",
    variant: "gradient",
    disabled: false
  }
};

export const GradientIcon: Story = {
  args: {
    icon: <X />,
    variant: "gradient",
    disabled: false
  }
};

export const GradientNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "gradient",
    disabled: false,
    bordered: false
  }
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    variant: "ghost",
    disabled: false
  }
};

export const GhostIcon: Story = {
  args: {
    icon: <X />,
    variant: "ghost",
    disabled: false
  }
};

export const GhostNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "ghost",
    disabled: false,
    bordered: false
  }
};

export const Glass: Story = {
  args: {
    children: "Button Text",
    variant: "glass",
    disabled: false
  }
};

export const GlassIcon: Story = {
  args: {
    icon: <X />,
    variant: "glass",
    disabled: false
  }
};

export const GlassNoBorder: Story = {
  args: {
    children: "Button Text",
    variant: "glass",
    disabled: false,
    bordered: false
  }
};

export const Link: Story = {
  args: {
    children: "Button Text",
    variant: "link",
    disabled: false
  }
};

export const LinkIcon: Story = {
  args: {
    icon: <X />,
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

export const DisabledIcon: Story = {
  args: {
    icon: <X />,
    disabled: true
  }
};

export const Rounded: Story = {
  args: {
    children: "Text",
    disabled: false,
    variant: "secondary",
    circular: true
  }
};

export const RoundedIcon: Story = {
  args: {
    icon: <X />,
    disabled: false,
    variant: "secondary",
    circular: true
  }
};

export const Ringed: Story = {
  args: {
    children: "Button Text",
    disabled: false,
    ringed: true
  }
};

export const BrandPrimary: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
    theme: "brand",
    disabled: false
  }
};

export const BrandPrimaryIcon: Story = {
  args: {
    icon: <X />,
    variant: "primary",
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

export const BrandSecondaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "brand",
    variant: "secondary",
    disabled: false
  }
};

export const BrandTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "tertiary",
    disabled: false
  }
};

export const BrandTertiaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "brand",
    variant: "tertiary",
    disabled: false
  }
};

export const BrandQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "quaternary",
    disabled: false
  }
};

export const BrandQuaternaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "brand",
    variant: "quaternary",
    disabled: false
  }
};

export const BrandOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "outlined",
    disabled: false
  }
};

export const BrandOutlinedIcon: Story = {
  args: {
    icon: <X />,
    theme: "brand",
    variant: "outlined",
    disabled: false
  }
};

export const BrandGradient: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "gradient",
    disabled: false
  }
};

export const BrandGradientIcon: Story = {
  args: {
    icon: <X />,
    theme: "brand",
    variant: "gradient",
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

export const BrandGhostIcon: Story = {
  args: {
    icon: <X />,
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

export const BrandGlassIcon: Story = {
  args: {
    icon: <X />,
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

export const AlternatePrimary: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "primary",
    disabled: false
  }
};

export const AlternativePrimaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "primary",
    disabled: false
  }
};

export const AlternateSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "secondary",
    disabled: false
  }
};

export const AlternativeSecondaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "secondary",
    disabled: false
  }
};

export const AlternateTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "tertiary",
    disabled: false
  }
};

export const AlternativeTertiaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "tertiary",
    disabled: false
  }
};

export const AlternateQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "quaternary",
    disabled: false
  }
};

export const AlternativeQuaternaryIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "quaternary",
    disabled: false
  }
};

export const AlternateOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "outlined",
    disabled: false
  }
};

export const AlternativeOutlinedIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "outlined",
    disabled: false
  }
};

export const AlternateGradient: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "gradient",
    disabled: false
  }
};

export const AlternativeGradientIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "gradient",
    disabled: false
  }
};

export const AlternateGhost: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "ghost",
    disabled: false
  }
};

export const AlternativeGhostIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "ghost",
    disabled: false
  }
};

export const AlternateGlass: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "glass",
    disabled: false
  }
};

export const AlternativeGlassIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "glass",
    disabled: false
  }
};

export const AlternateLink: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    variant: "link",
    disabled: false
  }
};

export const AlternativeLinkIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternate",
    variant: "link",
    disabled: false
  }
};

export const AlternateDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "alternate",
    disabled: true
  }
};

export const AlternativeDisabledIcon: Story = {
  args: {
    icon: <X />,
    theme: "alternative",
    disabled: true
  }
};

export const HelpPrimary: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
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

export const HelpTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "tertiary",
    disabled: false
  }
};

export const HelpQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "quaternary",
    disabled: false
  }
};

export const HelpOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "outlined",
    disabled: false
  }
};

export const HelpGradient: Story = {
  args: {
    children: "Button Text",
    theme: "help",
    variant: "gradient",
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
    variant: "primary",
    theme: "danger",
    disabled: false
  }
};

export const ErrorSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "secondary",
    disabled: false
  }
};

export const ErrorTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "tertiary",
    disabled: false
  }
};

export const ErrorQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "quaternary",
    disabled: false
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "outlined",
    disabled: false
  }
};

export const ErrorGradient: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "gradient",
    disabled: false
  }
};

export const ErrorGhost: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "ghost",
    disabled: false
  }
};

export const ErrorGlass: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "glass",
    disabled: false
  }
};

export const ErrorLink: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "link",
    disabled: false
  }
};

export const ErrorDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    disabled: true
  }
};

export const WarningPrimary: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
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

export const WarningTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "tertiary",
    disabled: false
  }
};

export const WarningQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "quaternary",
    disabled: false
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "outlined",
    disabled: false
  }
};

export const WarningGradient: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "gradient",
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
    variant: "primary",
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

export const InfoTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "tertiary",
    disabled: false
  }
};

export const InfoQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "quaternary",
    disabled: false
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "outlined",
    disabled: false
  }
};

export const InfoGradient: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "gradient",
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
    variant: "primary",
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

export const SuccessTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "tertiary",
    disabled: false
  }
};

export const SuccessQuaternary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "quaternary",
    disabled: false
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "outlined",
    disabled: false
  }
};

export const SuccessGradient: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "gradient",
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
