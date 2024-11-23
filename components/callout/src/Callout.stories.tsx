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
import { HelpCircle } from "@tamagui/lucide-icons";
import { YStack } from "@tamagui/stacks";
import { Callout } from "./Callout";

const meta: Meta<typeof Callout> = {
  title: "Containers/Callout",
  component: Callout,
  tags: ["autodocs"],
  render: ({ children, icon, ...rest }: any) => (
    <Callout {...rest}>
      <Callout.Header>
        <Callout.Header.Icon>{icon}</Callout.Header.Icon>
        <YStack gap="$1">
          <Callout.Header.Eyebrow>Callout Eyebrow</Callout.Header.Eyebrow>
          <Callout.Header.Heading>Callout Heading</Callout.Header.Heading>
        </YStack>
      </Callout.Header>

      <Callout.Body>{children}</Callout.Body>
    </Callout>
  )
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof Callout>;

const bodyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const Base: Story = {
  args: {
    children: bodyText
  }
};

export const CustomIcon: Story = {
  args: {
    children: bodyText,
    icon: <HelpCircle />
  }
};

export const Brand: Story = {
  args: {
    children: bodyText,
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    children: bodyText,
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    children: bodyText,
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    children: bodyText,
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    children: bodyText,
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    children: bodyText,
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    children: bodyText,
    theme: "success"
  }
};

export const Positive: Story = {
  args: {
    children: bodyText,
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    children: bodyText,
    theme: "negative"
  }
};
