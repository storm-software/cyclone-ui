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
import { LinkText } from "./LinkText";

const meta: Meta<typeof LinkText> = {
  title: "Typography/LinkText",
  component: LinkText,
  tags: ["autodocs"],
  render: (args: any) => (
    <BodyText>
      Lorem ipsum <LinkText {...args}>dolor sit</LinkText> amet
    </BodyText>
  )
} satisfies Meta<typeof LinkText>;

export default meta;

type Story = StoryObj<typeof LinkText>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Small: Story = {
  args: {
    size: "sm"
  }
};

export const Medium: Story = {
  args: {
    size: "md"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const CallToAction: Story = {
  args: {
    cta: true
  }
};

export const BaseVariant: Story = {
  args: {
    variant: "base"
  }
};

export const EmphasisVariant: Story = {
  args: {
    variant: "emphasis"
  }
};

export const InkVariant: Story = {
  args: {
    variant: "ink"
  }
};

export const SubtleVariant: Story = {
  args: {
    variant: "subtle"
  }
};

export const SubtlestVariant: Story = {
  args: {
    variant: "subtlest"
  }
};

export const Mixed: Story = {
  args: {
    variant: "emphasis",
    mixed: true
  }
};

export const MixedInverse: Story = {
  args: {
    variant: "emphasis",
    mixed: true,
    inverse: true
  }
};

export const Themed: Story = {
  args: {
    themed: true
  }
};

export const ThemedMixed: Story = {
  args: {
    variant: "emphasis",
    mixed: true,
    themed: true
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Danger: Story = {
  args: {
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};
