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
import { getContainerForeground } from "@cyclone-ui/container";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Containers/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  render: (props: any) => {
    // Content keeps its own colors; on a filled tooltip it uses the variant's
    // foreground, like the components with built-in text do.
    const color = getContainerForeground(props.variant, props.theme);

    return (
      <Tooltip {...props}>
        {/* Not a `Button`: it depends on this package for its `tooltip`. */}
        <Tooltip.Trigger asChild={true}>
          <BodyText tabIndex={0} alignSelf="flex-start">
            Hover for a tooltip
          </BodyText>
        </Tooltip.Trigger>

        <Tooltip.Content>
          <BodyText {...(color && { color })}>Lorem ipsum dolor</BodyText>
        </Tooltip.Content>
      </Tooltip>
    );
  }
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Error: Story = {
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

export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined"
  }
};

export const Floating: Story = {
  args: {
    variant: "floating"
  }
};

export const Elevated: Story = {
  args: {
    shadowStyle: "elevated"
  }
};

export const Accented: Story = {
  args: {
    accented: true
  }
};

export const Glass: Story = {
  args: {
    variant: "primary",
    glass: true
  }
};

export const Flat: Story = {
  args: {
    shadowStyle: "flat"
  }
};
