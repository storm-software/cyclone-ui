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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { X } from "@tamagui/lucide-icons-2";
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

export const Default: Story = {
  args: {
    children: "Button Text"
  }
};

export const Icon: Story = {
  args: {
    icon: <X />
  }
};

export const Sized: Story = {
  args: {
    children: "Button Text",
    size: "$13xl"
  }
};

export const SizedIcon: Story = {
  args: {
    icon: <X />,
    size: "$13xl"
  }
};

/**
 * Primary Stories
 */

export const Primary: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "surface",
    disabled: false
  }
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "outlined",
    disabled: false
  }
};

export const PrimaryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "inverse",
    disabled: false
  }
};

export const PrimarySubtle: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "subtle",
    disabled: false
  }
};

export const PrimaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "ghost",
    disabled: false
  }
};

export const PrimaryLink: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    variant: "link",
    disabled: false
  }
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "primary",
    disabled: true
  }
};

/**
 * Secondary Stories
 */

export const Secondary: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    disabled: false
  }
};

export const SecondarySurface: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "surface",
    disabled: false
  }
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "outlined",
    disabled: false
  }
};

export const SecondaryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "inverse",
    disabled: false
  }
};

export const SecondarySubtle: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "subtle",
    disabled: false
  }
};

export const SecondaryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "ghost",
    disabled: false
  }
};

export const SecondaryLink: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
    variant: "link",
    disabled: false
  }
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "secondary",
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

    disabled: false
  }
};

export const DangerSurface: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "surface",
    disabled: false
  }
};

export const DangerOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "outlined",
    disabled: false
  }
};

export const DangerInverse: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "inverse",
    disabled: false
  }
};

export const DangerSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "subtle",
    disabled: false
  }
};

export const DangerGhost: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "ghost",
    disabled: false
  }
};

export const DangerLink: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "link",
    disabled: false
  }
};

export const DangerDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "danger",
    variant: "inverse",
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

    disabled: false
  }
};

export const WarningSurface: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "surface",
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

export const WarningInverse: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "inverse",
    disabled: false
  }
};

export const WarningSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "warning",
    variant: "subtle",
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
    variant: "inverse",
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

    disabled: false
  }
};

export const SuccessSurface: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "surface",
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

export const SuccessInverse: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "inverse",
    disabled: false
  }
};

export const SuccessSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "success",
    variant: "subtle",
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
    variant: "inverse",
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

    disabled: false
  }
};

export const InfoSurface: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "surface",
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

export const InfoInverse: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "inverse",
    disabled: false
  }
};

export const InfoSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "info",
    variant: "subtle",
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
    variant: "inverse",
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

    disabled: false
  }
};

export const DiscoverySurface: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "surface",
    disabled: false
  }
};

export const DiscoveryOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "outlined",
    disabled: false
  }
};

export const DiscoveryInverse: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "inverse",
    disabled: false
  }
};

export const DiscoverySubtle: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "subtle",
    disabled: false
  }
};

export const DiscoveryGhost: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "ghost",
    disabled: false
  }
};

export const DiscoveryLink: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "link",
    disabled: false
  }
};

export const DiscoveryDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "discovery",
    variant: "inverse",
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

    disabled: false
  }
};

export const PositiveSurface: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "surface",
    disabled: false
  }
};

export const PositiveOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "outlined",
    disabled: false
  }
};

export const PositiveInverse: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "inverse",
    disabled: false
  }
};

export const PositiveSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "subtle",
    disabled: false
  }
};

export const PositiveGhost: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "ghost",
    disabled: false
  }
};

export const PositiveLink: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "link",
    disabled: false
  }
};

export const PositiveDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "positive",
    variant: "inverse",
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

    disabled: false
  }
};

export const NegativeSurface: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "surface",
    disabled: false
  }
};

export const NegativeOutlined: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "outlined",
    disabled: false
  }
};

export const NegativeInverse: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "inverse",
    disabled: false
  }
};

export const NegativeSubtle: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "subtle",
    disabled: false
  }
};

export const NegativeGhost: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "ghost",
    disabled: false
  }
};

export const NegativeLink: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "link",
    disabled: false
  }
};

export const NegativeDisabled: Story = {
  args: {
    children: "Button Text",
    theme: "negative",
    variant: "inverse",
    disabled: true
  }
};
