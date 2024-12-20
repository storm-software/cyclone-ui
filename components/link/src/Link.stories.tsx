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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react";
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

export const Brand: Story = {
  args: {
    href: "#",
    theme: "brand"
  }
};

export const BrandCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "brand"
  }
};

export const BrandExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    href: "#",
    theme: "alternate"
  }
};

export const AlternateCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "alternate"
  }
};

export const AlternateExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    href: "#",
    theme: "help"
  }
};

export const HelpCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "help"
  }
};

export const HelpExternal: Story = {
  args: {
    href: "#",
    external: true,
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    href: "#",
    theme: "danger"
  }
};

export const ErrorCallToAction: Story = {
  args: {
    href: "#",
    cta: true,
    theme: "danger"
  }
};

export const ErrorExternal: Story = {
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
