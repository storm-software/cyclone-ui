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
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Base/Container",
  component: Container,
  tags: ["autodocs"],
  render: ({ children, ...rest }: any) => (
    <Container {...rest}>{children}</Container>
  )
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

// Default theme

export const Base: Story = {
  args: {
    children: "Container Text"
  }
};

export const Primary: Story = {
  args: {
    children: "Container Text",
    variant: "primary"
  }
};

export const PrimaryNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const Secondary: Story = {
  args: {
    children: "Container Text",
    variant: "secondary"
  }
};

export const SecondaryNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const Tertiary: Story = {
  args: {
    children: "Container Text",
    variant: "tertiary"
  }
};

export const TertiaryNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const Quaternary: Story = {
  args: {
    children: "Container Text",
    variant: "quaternary"
  }
};

export const QuaternaryNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const Outlined: Story = {
  args: {
    children: "Container Text",
    variant: "outlined"
  }
};

export const OutlinedNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const Glass: Story = {
  args: {
    children: "Container Text",
    variant: "glass"
  }
};

export const GlassNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const Circular: Story = {
  args: {
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const CircularNoBorder: Story = {
  args: {
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Base theme

export const BasePrimary: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "primary"
  }
};

export const BasePrimaryNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const BaseSecondary: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "secondary"
  }
};

export const BaseSecondaryNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const BaseTertiary: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const BaseTertiaryNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const BaseQuaternary: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const BaseQuaternaryNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const BaseOutlined: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "outlined"
  }
};

export const BaseOutlinedNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const BaseGlass: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "glass"
  }
};

export const BaseGlassNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const BaseCircular: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const BaseCircularNoBorder: Story = {
  args: {
    theme: "base",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Brand theme

export const BrandPrimary: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "primary"
  }
};

export const BrandPrimaryNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const BrandSecondary: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "secondary"
  }
};

export const BrandSecondaryNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const BrandTertiary: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const BrandTertiaryNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const BrandQuaternary: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const BrandQuaternaryNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const BrandOutlined: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "outlined"
  }
};

export const BrandOutlinedNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const BrandGlass: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "glass"
  }
};

export const BrandGlassNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const BrandCircular: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const BrandCircularNoBorder: Story = {
  args: {
    theme: "brand",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Alternate theme

export const AlternatePrimary: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "primary"
  }
};

export const AlternatePrimaryNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const AlternateSecondary: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "secondary"
  }
};

export const AlternateSecondaryNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const AlternateTertiary: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const AlternateTertiaryNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const AlternateQuaternary: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const AlternateQuaternaryNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const AlternateOutlined: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "outlined"
  }
};

export const AlternateOutlinedNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const AlternateGlass: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "glass"
  }
};

export const AlternateGlassNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const AlternateCircular: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const AlternateCircularNoBorder: Story = {
  args: {
    theme: "alternate",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Accent theme

export const AccentPrimary: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "primary"
  }
};

export const AccentPrimaryNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const AccentSecondary: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "secondary"
  }
};

export const AccentSecondaryNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const AccentTertiary: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const AccentTertiaryNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const AccentQuaternary: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const AccentQuaternaryNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const AccentOutlined: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "outlined"
  }
};

export const AccentOutlinedNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const AccentGlass: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "glass"
  }
};

export const AccentGlassNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const AccentCircular: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const AccentCircularNoBorder: Story = {
  args: {
    theme: "accent",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Link theme

export const LinkPrimary: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "primary"
  }
};

export const LinkPrimaryNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const LinkSecondary: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "secondary"
  }
};

export const LinkSecondaryNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const LinkTertiary: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const LinkTertiaryNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const LinkQuaternary: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const LinkQuaternaryNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const LinkOutlined: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "outlined"
  }
};

export const LinkOutlinedNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const LinkGlass: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "glass"
  }
};

export const LinkGlassNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const LinkCircular: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const LinkCircularNoBorder: Story = {
  args: {
    theme: "link",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Help theme

export const HelpPrimary: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "primary"
  }
};

export const HelpPrimaryNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const HelpSecondary: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "secondary"
  }
};

export const HelpSecondaryNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const HelpTertiary: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const HelpTertiaryNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const HelpQuaternary: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const HelpQuaternaryNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const HelpOutlined: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "outlined"
  }
};

export const HelpOutlinedNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const HelpGlass: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "glass"
  }
};

export const HelpGlassNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const HelpCircular: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const HelpCircularNoBorder: Story = {
  args: {
    theme: "help",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Success theme

export const SuccessPrimary: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "primary"
  }
};

export const SuccessPrimaryNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const SuccessSecondary: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "secondary"
  }
};

export const SuccessSecondaryNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const SuccessTertiary: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const SuccessTertiaryNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const SuccessQuaternary: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const SuccessQuaternaryNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const SuccessOutlined: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "outlined"
  }
};

export const SuccessOutlinedNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const SuccessGlass: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "glass"
  }
};

export const SuccessGlassNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const SuccessCircular: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const SuccessCircularNoBorder: Story = {
  args: {
    theme: "success",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Info theme

export const InfoPrimary: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "primary"
  }
};

export const InfoPrimaryNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const InfoSecondary: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "secondary"
  }
};

export const InfoSecondaryNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const InfoTertiary: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const InfoTertiaryNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const InfoQuaternary: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const InfoQuaternaryNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const InfoOutlined: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "outlined"
  }
};

export const InfoOutlinedNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const InfoGlass: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "glass"
  }
};

export const InfoGlassNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const InfoCircular: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const InfoCircularNoBorder: Story = {
  args: {
    theme: "info",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Error theme

export const ErrorPrimary: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "primary"
  }
};

export const ErrorPrimaryNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const ErrorSecondary: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "secondary"
  }
};

export const ErrorSecondaryNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const ErrorTertiary: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const ErrorTertiaryNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const ErrorQuaternary: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const ErrorQuaternaryNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const ErrorOutlined: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "outlined"
  }
};

export const ErrorOutlinedNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const ErrorGlass: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "glass"
  }
};

export const ErrorGlassNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const ErrorCircular: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const ErrorCircularNoBorder: Story = {
  args: {
    theme: "danger",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Warning theme

export const WarningPrimary: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "primary"
  }
};

export const WarningPrimaryNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const WarningSecondary: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "secondary"
  }
};

export const WarningSecondaryNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const WarningTertiary: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const WarningTertiaryNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const WarningQuaternary: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const WarningQuaternaryNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const WarningOutlined: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "outlined"
  }
};

export const WarningOutlinedNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const WarningGlass: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "glass"
  }
};

export const WarningGlassNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const WarningCircular: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const WarningCircularNoBorder: Story = {
  args: {
    theme: "warning",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Positive theme

export const PositivePrimary: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "primary"
  }
};

export const PositivePrimaryNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const PositiveSecondary: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "secondary"
  }
};

export const PositiveSecondaryNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const PositiveTertiary: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const PositiveTertiaryNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const PositiveQuaternary: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const PositiveQuaternaryNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const PositiveOutlined: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "outlined"
  }
};

export const PositiveOutlinedNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const PositiveGlass: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "glass"
  }
};

export const PositiveGlassNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const PositiveCircular: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const PositiveCircularNoBorder: Story = {
  args: {
    theme: "positive",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};

// Negative theme

export const NegativePrimary: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "primary"
  }
};

export const NegativePrimaryNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "primary",
    bordered: false
  }
};

export const NegativeSecondary: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "secondary"
  }
};

export const NegativeSecondaryNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "secondary",
    bordered: false
  }
};

export const NegativeTertiary: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "tertiary"
  }
};

export const NegativeTertiaryNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "tertiary",
    bordered: false
  }
};

export const NegativeQuaternary: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "quaternary"
  }
};

export const NegativeQuaternaryNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "quaternary",
    bordered: false
  }
};

export const NegativeOutlined: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "outlined"
  }
};

export const NegativeOutlinedNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "outlined",
    bordered: false
  }
};

export const NegativeGlass: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "glass"
  }
};

export const NegativeGlassNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "glass",
    bordered: false
  }
};

export const NegativeCircular: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "secondary",
    circular: true
  }
};

export const NegativeCircularNoBorder: Story = {
  args: {
    theme: "negative",
    children: "Container Text",
    variant: "secondary",
    circular: true,
    bordered: false
  }
};
