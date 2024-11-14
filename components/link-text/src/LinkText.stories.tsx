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

export const BaseInverseVariant: Story = {
  args: {
    variant: "base",
    inverse: true
  }
};

export const MixedVariant: Story = {
  args: {
    variant: "mixed",
    underline: "static"
  }
};

export const MixedInverseVariant: Story = {
  args: {
    variant: "mixed",
    inverse: true,
    underline: "static"
  }
};

export const ThemedVariant: Story = {
  args: {
    variant: "themed"
  }
};

export const ThemedInverseVariant: Story = {
  args: {
    variant: "themed",
    inverse: true
  }
};

export const BaseTheme: Story = {
  args: {
    theme: "base"
  }
};

export const BrandTheme: Story = {
  args: {
    theme: "brand"
  }
};

export const AlternateTheme: Story = {
  args: {
    theme: "alternate"
  }
};

export const HelpTheme: Story = {
  args: {
    theme: "help"
  }
};

export const LinkTheme: Story = {
  args: {
    theme: "link"
  }
};

export const ErrorTheme: Story = {
  args: {
    theme: "danger"
  }
};

export const WarningTheme: Story = {
  args: {
    theme: "warning"
  }
};

export const InfoTheme: Story = {
  args: {
    theme: "info"
  }
};

export const SuccessTheme: Story = {
  args: {
    theme: "success"
  }
};

export const PositiveTheme: Story = {
  args: {
    theme: "positive"
  }
};

export const NegativeTheme: Story = {
  args: {
    theme: "negative"
  }
};
