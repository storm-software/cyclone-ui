import { Button } from "@cyclone-ui/button";
import { useMessageActions } from "@cyclone-ui/provider";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "@tamagui/stacks";
// import { HelpCircle } from "@tamagui/lucide-icons";
import { Message, MessageViewport } from "./Message";

const meta: Meta<typeof Message> = {
  title: "General/Message",
  component: Message,
  tags: ["autodocs"],
  render: ({ message, theme, ...rest }: any) => {
    const { show, hide } = useMessageActions();

    return (
      <YStack space={true} alignItems="center">
        <Message />

        <XStack alignItems="center" gap="$4" marginTop="400px">
          <Button
            variant="secondary"
            onPress={() => {
              hide();
            }}>
            Hide
          </Button>
          <Button
            onPress={() => {
              show(message, {
                theme
              });
            }}>
            Show
          </Button>
        </XStack>

        <MessageViewport portalToRoot={true} />
      </YStack>
    );
  }
} satisfies Meta<typeof Message>;

export default meta;

type Story = StoryObj<typeof Message>;

export const Base: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};

export const Brand: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "brand"
  }
};

export const Alternate: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "alternate"
  }
};

export const Help: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "error"
  }
};

export const Warning: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "success"
  }
};
