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

import { QuestionCircle } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { YStack } from "@tamagui/stacks";
import type { ComponentProps, ReactNode } from "react";
import { Card } from "./Card";

// `icon` is a story-only arg consumed by the custom `render` below.
type CardStoryArgs = ComponentProps<typeof Card> & { icon?: ReactNode };

const meta: Meta<CardStoryArgs> = {
  title: "Containers/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    cardStyle: {
      control: "select",
      options: ["top", "bottom", "left", "right", "none", "pixel"]
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "outlined", "floating"]
    }
  },
  render: ({ icon, ...args }: CardStoryArgs) => (
    <Card {...args} width="500px">
      <Card.Header>
        <Card.Header.Icon>{icon}</Card.Header.Icon>
        <YStack gap="md">
          <Card.Header.Eyebrow>Card Eyebrow</Card.Header.Eyebrow>
          <Card.Header.Heading>Card Heading</Card.Header.Heading>
        </YStack>
      </Card.Header>
      <Card.Body>{args.children}</Card.Body>
      <Card.Footer>
        <Card.Footer.Link href="#">Card Link</Card.Footer.Link>
      </Card.Footer>
    </Card>
  )
} satisfies Meta<CardStoryArgs>;

export default meta;

type Story = StoryObj<CardStoryArgs>;

export const Base: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};

export const Brand: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "brand"
  }
};

export const CustomIcon: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: <QuestionCircle />
  }
};

export const DataColor: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "data-pink-emphasis",
    icon: <QuestionCircle />
  }
};

export const Discovery: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "discovery"
  }
};

export const Error: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "success"
  }
};

export const AccentBottom: Story = {
  args: {
    ...Base.args,
    cardStyle: "bottom"
  }
};

export const AccentLeft: Story = {
  args: {
    ...Base.args,
    cardStyle: "left"
  }
};

export const AccentRight: Story = {
  args: {
    ...Base.args,
    cardStyle: "right"
  }
};

export const AccentNone: Story = {
  args: {
    ...Base.args,
    cardStyle: "none"
  }
};

export const Pixel: Story = {
  args: {
    ...Base.args,
    cardStyle: "pixel"
  }
};

export const PixelDataColor: Story = {
  args: {
    ...DataColor.args,
    cardStyle: "pixel"
  }
};

export const Primary: Story = {
  args: {
    ...Base.args,
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    ...Base.args,
    variant: "secondary"
  }
};

export const Tertiary: Story = {
  args: {
    ...Base.args,
    variant: "tertiary"
  }
};

export const Outlined: Story = {
  args: {
    ...Base.args,
    variant: "outlined"
  }
};

export const BrandPrimary: Story = {
  args: {
    ...Base.args,
    theme: "brand",
    variant: "primary"
  }
};

export const BrandSecondary: Story = {
  args: {
    ...Base.args,
    theme: "brand",
    variant: "secondary"
  }
};
