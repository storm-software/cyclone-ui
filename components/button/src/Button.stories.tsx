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
