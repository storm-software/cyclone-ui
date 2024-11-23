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

import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { HelpCircle } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Containers/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  render: ({ children, icon, theme, ...rest }: any) => (
    <AlertDialog {...rest} theme={theme}>
      <AlertDialog.Trigger asChild={true}>
        <Button>
          <Button.Text>Show Dialog</Button.Text>
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Container>
        <AlertDialog.Container.Icon>{icon}</AlertDialog.Container.Icon>
        <AlertDialog.Container.Content>
          <AlertDialog.Container.Content.Heading>
            AlertDialog Heading
          </AlertDialog.Container.Content.Heading>
          <AlertDialog.Container.Content.Body>
            {children}
          </AlertDialog.Container.Content.Body>

          <XStack gap="$3" marginTop="$3" width="100%">
            <AlertDialog.Container.Close>
              <AlertDialog.Container.Close.Text>
                Close
              </AlertDialog.Container.Close.Text>
            </AlertDialog.Container.Close>
            <AlertDialog.Container.Action>
              <AlertDialog.Container.Action.Text>
                Action
              </AlertDialog.Container.Action.Text>
            </AlertDialog.Container.Action>
          </XStack>
        </AlertDialog.Container.Content>
      </AlertDialog.Container>
    </AlertDialog>
  )
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof AlertDialog>;

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
