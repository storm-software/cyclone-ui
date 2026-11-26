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

import { Button } from "@cyclone-ui/button";
import { useMessageActions } from "@cyclone-ui/state/message";
import { toast, Toaster } from "@cyclone-ui/toast";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack, YStack } from "@tamagui/stacks";
import type { ComponentProps } from "react";
import { useEffect } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Message } from "./Message";

// `message` and `type` are story-only args consumed by the custom `render`.
type MessageStoryArgs = ComponentProps<typeof Message> & {
  message?: string;
  type?: string;
};

const meta: Meta<MessageStoryArgs> = {
  title: "Containers/Message",
  component: Message,
  tags: ["autodocs"],
  render: ({ message, type, ..._rest }: any) => {
    const { show, hide } = useMessageActions();

    // The toast store is shared: clear it when leaving the story.
    useEffect(
      () => () => {
        toast.dismiss(undefined, { immediate: true });
      },
      []
    );

    return (
      <YStack alignItems="center" width="100%">
        <Message />
        {/* Shows "Copied to clipboard" when the message text is pressed. */}
        <Toaster />

        <XStack alignItems="center" gap="5xl" marginTop="400px" width={400}>
          <Button
            variant="tertiary"
            onPress={() => {
              hide();
            }}>
            <Button.Text>Hide</Button.Text>
          </Button>
          <Button
            variant="primary"
            onPress={() => {
              show(message, {
                heading: "Message Heading",
                type
              });
            }}>
            <Button.Text>Show</Button.Text>
          </Button>
        </XStack>
      </YStack>
    );
  }
} satisfies Meta<MessageStoryArgs>;

export default meta;

type Story = StoryObj<MessageStoryArgs>;

export const Base: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  // Text past the line limit moves into the collapsed details section.
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    // A message shown before the web font loads is measured again after it.
    await canvasElement.ownerDocument.fonts.ready;

    await userEvent.click(page.getByRole("button", { name: "Show" }));
    const toggle = await page.findByRole("button", { name: "Show details" });
    const body = page.getByText(/^Lorem ipsum .*pariatur\.$/);
    const lines = () =>
      Math.round(
        body.offsetHeight / Number.parseFloat(getComputedStyle(body).lineHeight)
      );
    await waitFor(async () => expect(lines()).toBe(2));

    // Expanding unclamps the same text: no ellipsis, no split.
    await userEvent.click(toggle);
    await waitFor(async () => expect(lines()).toBeGreaterThan(3));

    // Pressing the text copies the message.
    await userEvent.click(body);
    // The pill and the toast live region both carry the text.
    await expect(
      await page.findAllByText("Copied to clipboard")
    ).not.toHaveLength(0);
  }
};

export const Short: Story = {
  args: {
    message: "Your changes were saved."
  }
};

export const Brand: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "brand"
  }
};

export const Discovery: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "help"
  }
};

export const Error: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "error"
  }
};

export const Warning: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "warning"
  }
};

export const Info: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "info"
  }
};

export const Success: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "success"
  }
};
