/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { X } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "./Button";

/** Story-only args: `icon` renders inside `Button.Icon`. */
type ButtonStoryArgs = ComponentProps<typeof Button> & { icon?: ReactNode };

const meta: Meta<ButtonStoryArgs> = {
  title: "Triggers/Button",
  component: Button,
  tags: ["autodocs"],
  render: ({ children, icon, ...rest }: any) => (
    <Button {...rest}>
      {children && <Button.Text>{children}</Button.Text>}
      {icon && <Button.Icon>{icon}</Button.Icon>}
    </Button>
  )
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<ButtonStoryArgs>;

export const Default: Story = {
  args: {
    children: "Button Text",
    animate: false
  }
};

export const Animated: Story = {
  args: {
    children: "Button Text",
    animate: true
  }
};

export const Icon: Story = {
  args: {
    icon: <X />,
    animate: false
  }
};

export const Rounded: Story = {
  args: {
    icon: <X />,
    rounded: true
  }
};

export const Circular: Story = {
  args: {
    icon: <X />,
    circular: true
  }
};

export const Sized: Story = {
  args: {
    children: "Button Text",
    size: "13xl",
    animate: false
  }
};

export const SizedIcon: Story = {
  args: {
    icon: <X />,
    size: "13xl",
    animate: false
  }
};

export const Tertiary: Story = {
  args: {
    children: "Button Text",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const Outlined: Story = {
  args: {
    children: "Button Text",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const Cascade: Story = {
  args: {
    children: "Button Text",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const DoubleCascade: Story = {
  args: {
    children: "Button Text",
    variant: "double-cascade",
    disabled: false,
    animate: false
  }
};

export const CascadeTop: Story = {
  args: {
    children: "Button Text",
    variant: "cascade-top",
    disabled: false,
    animate: false
  }
};

export const CascadeLeft: Story = {
  args: {
    children: "Button Text",
    variant: "cascade-left",
    disabled: false,
    animate: false
  }
};

export const CascadeBottom: Story = {
  args: {
    children: "Button Text",
    variant: "cascade-bottom",
    disabled: false,
    animate: false
  }
};

export const CascadeRight: Story = {
  args: {
    children: "Button Text",
    variant: "cascade-right",
    disabled: false,
    animate: false
  }
};

export const DiagonalCascade: Story = {
  args: {
    children: "Button Text",
    variant: "diagonal-cascade",
    disabled: false,
    animate: false
  }
};

export const DoubleDiagonalCascade: Story = {
  args: {
    children: "Button Text",
    variant: "double-diagonal-cascade",
    disabled: false,
    animate: false
  }
};

export const DiagonalCascadeTop: Story = {
  args: {
    children: "Button Text",
    variant: "diagonal-cascade-top",
    disabled: false,
    animate: false
  }
};

export const DiagonalCascadeLeft: Story = {
  args: {
    children: "Button Text",
    variant: "diagonal-cascade-left",
    disabled: false,
    animate: false
  }
};

export const DiagonalCascadeBottom: Story = {
  args: {
    children: "Button Text",
    variant: "diagonal-cascade-bottom",
    disabled: false,
    animate: false
  }
};

export const DiagonalCascadeRight: Story = {
  args: {
    children: "Button Text",
    variant: "diagonal-cascade-right",
    disabled: false,
    animate: false
  }
};

export const ReverseCascade: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-cascade",
    disabled: false,
    animate: false
  }
};

export const ReverseDoubleCascade: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-double-cascade",
    disabled: false,
    animate: false
  }
};

export const ReverseCascadeTop: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-cascade-top",
    disabled: false,
    animate: false
  }
};

export const ReverseCascadeLeft: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-cascade-left",
    disabled: false,
    animate: false
  }
};

export const ReverseCascadeBottom: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-cascade-bottom",
    disabled: false,
    animate: false
  }
};

export const ReverseCascadeRight: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-cascade-right",
    disabled: false,
    animate: false
  }
};

export const ReverseDiagonalCascade: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-diagonal-cascade",
    disabled: false,
    animate: false
  }
};

export const ReverseDoubleDiagonalCascade: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-double-diagonal-cascade",
    disabled: false,
    animate: false
  }
};

export const ReverseDiagonalCascadeTop: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-diagonal-cascade-top",
    disabled: false,
    animate: false
  }
};

export const ReverseDiagonalCascadeLeft: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-diagonal-cascade-left",
    disabled: false,
    animate: false
  }
};

export const ReverseDiagonalCascadeBottom: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-diagonal-cascade-bottom",
    disabled: false,
    animate: false
  }
};

export const ReverseDiagonalCascadeRight: Story = {
  args: {
    children: "Button Text",
    variant: "reverse-diagonal-cascade-right",
    disabled: false,
    animate: false
  }
};

export const Primary: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const Secondary: Story = {
  args: {
    children: "Button Text",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const Link: Story = {
  args: {
    children: "Button Text",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const Disabled: Story = {
  args: {
    children: "Button Text",
    variant: "primary",
    disabled: true
  }
};

/**
 * Brand Stories
 */

export const Brand: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const BrandTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const BrandOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const BrandCascade: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const BrandPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const BrandSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const BrandGhost: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const BrandLink: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const BrandDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "brand",
    variant: "primary",
    disabled: true
  }
};

/**
 * Danger Stories
 */

export const Danger: Story = {
  args: {
    children: "Button Text",
    theme: "danger",

    disabled: false,
    animate: false
  }
};

export const DangerTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const DangerOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const DangerCascade: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const DangerPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const DangerSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const DangerGhost: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const DangerLink: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const DangerDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "primary",
    disabled: true
  }
};

/**
 * Warning Stories
 */

export const Warning: Story = {
  args: {
    children: "Button Text",
    theme: "warning",

    disabled: false,
    animate: false
  }
};

export const WarningTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const WarningCascade: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const WarningPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const WarningSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const WarningGhost: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const WarningLink: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const WarningDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "primary",
    disabled: true
  }
};

/**
 * Success Stories
 */

export const Success: Story = {
  args: {
    children: "Button Text",
    theme: "success",

    disabled: false,
    animate: false
  }
};

export const SuccessTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const SuccessCascade: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const SuccessPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const SuccessSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const SuccessGhost: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const SuccessLink: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const SuccessDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "primary",
    disabled: true
  }
};

/**
 * Info Stories
 */

export const Info: Story = {
  args: {
    children: "Button Text",
    theme: "info",

    disabled: false,
    animate: false
  }
};

export const InfoTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const InfoOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const InfoCascade: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const InfoPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const InfoSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const InfoGhost: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const InfoLink: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const InfoDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "primary",
    disabled: true
  }
};

/**
 * Discovery Stories
 */

export const Discovery: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",

    disabled: false,
    animate: false
  }
};

export const DiscoveryTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const DiscoveryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const DiscoveryCascade: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const DiscoveryPrimary: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const DiscoverySecondary: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const DiscoveryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const DiscoveryLink: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const DiscoveryDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "primary",
    disabled: true
  }
};

/**
 * Positive Stories
 */

export const Positive: Story = {
  args: {
    children: "Button Text",
    theme: "positive",

    disabled: false,
    animate: false
  }
};

export const PositiveTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const PositiveOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const PositiveCascade: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const PositivePrimary: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const PositiveSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const PositiveGhost: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const PositiveLink: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const PositiveDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "primary",
    disabled: true
  }
};

/**
 * Negative Stories
 */

export const Negative: Story = {
  args: {
    children: "Button Text",
    theme: "negative",

    disabled: false,
    animate: false
  }
};

export const NegativeTertiary: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "tertiary",
    disabled: false,
    animate: false
  }
};

export const NegativeOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "outlined",
    disabled: false,
    animate: false
  }
};

export const NegativeCascade: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "cascade",
    disabled: false,
    animate: false
  }
};

export const NegativePrimary: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "primary",
    disabled: false,
    animate: false
  }
};

export const NegativeSecondary: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "secondary",
    disabled: false,
    animate: false
  }
};

export const NegativeGhost: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "ghost",
    disabled: false,
    animate: false
  }
};

export const NegativeLink: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "link",
    disabled: false,
    animate: false
  }
};

export const NegativeDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "primary",
    disabled: true
  }
};

const withRounded = (story: Story): Story => ({
  ...story,
  args: { ...story.args, rounded: true }
});

export const DefaultRounded: Story = withRounded(Default);
export const IconRounded: Story = withRounded(Icon);
export const SizedRounded: Story = withRounded(Sized);
export const SizedIconRounded: Story = withRounded(SizedIcon);
export const TertiaryRounded: Story = withRounded(Tertiary);
export const OutlinedRounded: Story = withRounded(Outlined);
export const CascadeRounded: Story = withRounded(Cascade);
export const CascadeTopRounded: Story = withRounded(CascadeTop);
export const CascadeLeftRounded: Story = withRounded(CascadeLeft);
export const CascadeBottomRounded: Story = withRounded(CascadeBottom);
export const CascadeRightRounded: Story = withRounded(CascadeRight);
export const DiagonalCascadeRounded: Story = withRounded(DiagonalCascade);
export const DiagonalCascadeTopRounded: Story = withRounded(DiagonalCascadeTop);
export const DiagonalCascadeLeftRounded: Story =
  withRounded(DiagonalCascadeLeft);
export const DiagonalCascadeBottomRounded: Story = withRounded(
  DiagonalCascadeBottom
);
export const DiagonalCascadeRightRounded: Story =
  withRounded(DiagonalCascadeRight);
export const ReverseCascadeRounded: Story = withRounded(ReverseCascade);
export const ReverseDoubleCascadeRounded: Story =
  withRounded(ReverseDoubleCascade);
export const ReverseCascadeTopRounded: Story = withRounded(ReverseCascadeTop);
export const ReverseCascadeLeftRounded: Story = withRounded(ReverseCascadeLeft);
export const ReverseCascadeBottomRounded: Story =
  withRounded(ReverseCascadeBottom);
export const ReverseCascadeRightRounded: Story =
  withRounded(ReverseCascadeRight);
export const ReverseDiagonalCascadeRounded: Story = withRounded(
  ReverseDiagonalCascade
);
export const ReverseDoubleDiagonalCascadeRounded: Story = withRounded(
  ReverseDoubleDiagonalCascade
);
export const ReverseDiagonalCascadeTopRounded: Story = withRounded(
  ReverseDiagonalCascadeTop
);
export const ReverseDiagonalCascadeLeftRounded: Story = withRounded(
  ReverseDiagonalCascadeLeft
);
export const ReverseDiagonalCascadeBottomRounded: Story = withRounded(
  ReverseDiagonalCascadeBottom
);
export const ReverseDiagonalCascadeRightRounded: Story = withRounded(
  ReverseDiagonalCascadeRight
);
export const PrimaryRounded: Story = withRounded(Primary);
export const SecondaryRounded: Story = withRounded(Secondary);
export const GhostRounded: Story = withRounded(Ghost);
export const LinkRounded: Story = withRounded(Link);
export const DisabledRounded: Story = withRounded(Disabled);

export const BrandRounded: Story = withRounded(Brand);
export const BrandTertiaryRounded: Story = withRounded(BrandTertiary);
export const BrandOutlinedRounded: Story = withRounded(BrandOutlined);
export const BrandCascadeRounded: Story = withRounded(BrandCascade);
export const BrandPrimaryRounded: Story = withRounded(BrandPrimary);
export const BrandSecondaryRounded: Story = withRounded(BrandSecondary);
export const BrandGhostRounded: Story = withRounded(BrandGhost);
export const BrandLinkRounded: Story = withRounded(BrandLink);
export const BrandDisabledRounded: Story = withRounded(BrandDisabled);

export const DangerRounded: Story = withRounded(Danger);
export const DangerTertiaryRounded: Story = withRounded(DangerTertiary);
export const DangerOutlinedRounded: Story = withRounded(DangerOutlined);
export const DangerCascadeRounded: Story = withRounded(DangerCascade);
export const DangerPrimaryRounded: Story = withRounded(DangerPrimary);
export const DangerSecondaryRounded: Story = withRounded(DangerSecondary);
export const DangerGhostRounded: Story = withRounded(DangerGhost);
export const DangerLinkRounded: Story = withRounded(DangerLink);
export const DangerDisabledRounded: Story = withRounded(DangerDisabled);

export const WarningRounded: Story = withRounded(Warning);
export const WarningTertiaryRounded: Story = withRounded(WarningTertiary);
export const WarningOutlinedRounded: Story = withRounded(WarningOutlined);
export const WarningCascadeRounded: Story = withRounded(WarningCascade);
export const WarningPrimaryRounded: Story = withRounded(WarningPrimary);
export const WarningSecondaryRounded: Story = withRounded(WarningSecondary);
export const WarningGhostRounded: Story = withRounded(WarningGhost);
export const WarningLinkRounded: Story = withRounded(WarningLink);
export const WarningDisabledRounded: Story = withRounded(WarningDisabled);

export const SuccessRounded: Story = withRounded(Success);
export const SuccessTertiaryRounded: Story = withRounded(SuccessTertiary);
export const SuccessOutlinedRounded: Story = withRounded(SuccessOutlined);
export const SuccessCascadeRounded: Story = withRounded(SuccessCascade);
export const SuccessPrimaryRounded: Story = withRounded(SuccessPrimary);
export const SuccessSecondaryRounded: Story = withRounded(SuccessSecondary);
export const SuccessGhostRounded: Story = withRounded(SuccessGhost);
export const SuccessLinkRounded: Story = withRounded(SuccessLink);
export const SuccessDisabledRounded: Story = withRounded(SuccessDisabled);

export const InfoRounded: Story = withRounded(Info);
export const InfoTertiaryRounded: Story = withRounded(InfoTertiary);
export const InfoOutlinedRounded: Story = withRounded(InfoOutlined);
export const InfoCascadeRounded: Story = withRounded(InfoCascade);
export const InfoPrimaryRounded: Story = withRounded(InfoPrimary);
export const InfoSecondaryRounded: Story = withRounded(InfoSecondary);
export const InfoGhostRounded: Story = withRounded(InfoGhost);
export const InfoLinkRounded: Story = withRounded(InfoLink);
export const InfoDisabledRounded: Story = withRounded(InfoDisabled);

export const DiscoveryRounded: Story = withRounded(Discovery);
export const DiscoveryTertiaryRounded: Story = withRounded(DiscoveryTertiary);
export const DiscoveryOutlinedRounded: Story = withRounded(DiscoveryOutlined);
export const DiscoveryCascadeRounded: Story = withRounded(DiscoveryCascade);
export const DiscoveryPrimaryRounded: Story = withRounded(DiscoveryPrimary);
export const DiscoverySecondaryRounded: Story = withRounded(DiscoverySecondary);
export const DiscoveryGhostRounded: Story = withRounded(DiscoveryGhost);
export const DiscoveryLinkRounded: Story = withRounded(DiscoveryLink);
export const DiscoveryDisabledRounded: Story = withRounded(DiscoveryDisabled);

export const PositiveRounded: Story = withRounded(Positive);
export const PositiveTertiaryRounded: Story = withRounded(PositiveTertiary);
export const PositiveOutlinedRounded: Story = withRounded(PositiveOutlined);
export const PositiveCascadeRounded: Story = withRounded(PositiveCascade);
export const PositivePrimaryRounded: Story = withRounded(PositivePrimary);
export const PositiveSecondaryRounded: Story = withRounded(PositiveSecondary);
export const PositiveGhostRounded: Story = withRounded(PositiveGhost);
export const PositiveLinkRounded: Story = withRounded(PositiveLink);
export const PositiveDisabledRounded: Story = withRounded(PositiveDisabled);

export const NegativeRounded: Story = withRounded(Negative);
export const NegativeTertiaryRounded: Story = withRounded(NegativeTertiary);
export const NegativeOutlinedRounded: Story = withRounded(NegativeOutlined);
export const NegativeCascadeRounded: Story = withRounded(NegativeCascade);
export const NegativePrimaryRounded: Story = withRounded(NegativePrimary);
export const NegativeSecondaryRounded: Story = withRounded(NegativeSecondary);
export const NegativeGhostRounded: Story = withRounded(NegativeGhost);
export const NegativeLinkRounded: Story = withRounded(NegativeLink);
export const NegativeDisabledRounded: Story = withRounded(NegativeDisabled);
