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
import { Button } from "@cyclone-ui/button";
import { HeadingText } from "@cyclone-ui/heading-text";
import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "@tamagui/stacks";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Base/Popover",
  component: Popover,
  tags: ["autodocs"],
  render: (props: any) => {
    return (
      <Popover {...props}>
        <Popover.Trigger asChild={true}>
          <Button>
            <Button.Text>Open Popover</Button.Text>
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <YStack gap="$3">
            <HeadingText>Heading Text</HeadingText>
            <BodyText>
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
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  args: {}
};

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    theme: "help"
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

export const Positive: Story = {
  args: {
    theme: "positive"
  }
};

export const Negative: Story = {
  args: {
    theme: "negative"
  }
};
