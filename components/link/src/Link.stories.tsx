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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Triggers/Link",
  component: Link,
  tags: ["autodocs"],
  render: (args: any) => (
    <BodyText>
      Lorem ipsum <Link {...args}>dolor sit</Link> amet
    </BodyText>
  )
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Base: Story = {
  args: {
    href: "#"
  }
};

export const Inverse: Story = {
  args: {
    href: "#",
    variant: "base",
    inverse: true
  }
};

export const Mixed: Story = {
  args: {
    href: "#",
    mixed: true
  }
};

export const CallToAction: Story = {
  args: {
    href: "#",
    cta: true
  }
};

export const External: Story = {
  args: {
    href: "#",
    external: true
  }
};

export const UnderlineHover: Story = {
  args: {
    href: "#",
    underline: "hover"
  }
};

export const UnderlineInitial: Story = {
  args: {
    href: "#",
    underline: "initial"
  }
};

export const UnderlineStatic: Story = {
  args: {
    href: "#",
    underline: "static"
  }
};

export const UnderlineNone: Story = {
  args: {
    href: "#",
    underline: "none"
  }
};

export const Discovery: Story = {
  args: {
    href: "#",
    theme: "discovery"
  }
};

export const DiscoveryCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "discovery"
  }
};

export const DiscoveryExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "discovery"
  }
};

export const Danger: Story = {
  args: {
    href: "#",
    theme: "danger"
  }
};

export const DangerCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "danger"
  }
};

export const DangerExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    href: "#",
    theme: "warning"
  }
};

export const WarningCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "warning"
  }
};

export const WarningExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    href: "#",
    theme: "info"
  }
};

export const InfoCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "info"
  }
};

export const InfoExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    href: "#",
    theme: "success"
  }
};

export const SuccessCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "success"
  }
};

export const SuccessExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "success"
  }
};

export const Positive: Story = {
  args: {
    href: "#",
    theme: "positive"
  }
};

export const PositiveCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "positive"
  }
};

export const PositiveExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    href: "#",
    theme: "negative"
  }
};

export const NegativeCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "negative"
  }
};

export const NegativeExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "negative"
  }
};
