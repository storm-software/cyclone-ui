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
import { Button } from "@cyclone-ui/button";
import { HeadingText } from "@cyclone-ui/heading-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { ComponentProps } from "react";
import { Popover } from "./Popover";

// `hasArrow` belongs to `Popover.Content`; the render below forwards it there.
type PopoverStoryArgs = ComponentProps<typeof Popover> & { hasArrow?: boolean };

const meta: Meta<PopoverStoryArgs> = {
  title: "Containers/Popover",
  component: Popover,
  tags: ["autodocs"],
  render: ({ hasArrow, ...props }) => {
    // Content keeps its own colors; on a filled popover it uses the variant's
    // foreground, like the components with built-in text do.
    const color =
      props.variant === "primary"
        ? "on-primary"
        : props.variant === "secondary"
          ? // `on-secondary` is faint on the base theme's light `secondary`.
            props.theme && props.theme !== "base"
            ? "on-secondary"
            : "primary"
          : undefined;

    return (
      <Popover {...props}>
        <Popover.Trigger asChild={true}>
          <Button>
            <Button.Text>Open Popover</Button.Text>
          </Button>
        </Popover.Trigger>

        <Popover.Content hasArrow={hasArrow}>
          <YStack gap="3xl">
            <HeadingText {...(color && { color })}>Heading Text</HeadingText>
            <BodyText {...(color && { color })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </BodyText>

            <Popover.Content.Close asChild={true}>
              <Button>
                <Button.Text>Close</Button.Text>
              </Button>
            </Popover.Content.Close>
          </YStack>
        </Popover.Content>
      </Popover>
    );
  }
} satisfies Meta<PopoverStoryArgs>;

export default meta;

type Story = StoryObj<PopoverStoryArgs>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Arrow: Story = {
  args: {
    hasArrow: true
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

export const PrimaryArrow: Story = {
  args: {
    variant: "primary",
    hasArrow: true
  }
};

export const OutlinedArrow: Story = {
  args: {
    variant: "outlined",
    hasArrow: true
  }
};
