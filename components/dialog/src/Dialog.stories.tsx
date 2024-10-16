import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { XStack, YStack } from "@tamagui/stacks";
import { Dialog, type DialogProps } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "General/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  render: ({ children, ...rest }: DialogProps) => (
    <Dialog native={false} {...rest}>
      <Dialog.Trigger asChild={true}>
        <Button>
          <Button.Text>Show Dialog</Button.Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay key="overlay" />
        <Dialog.Content bordered elevate key="content">
          <YStack space>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>
              <BodyText>{children}</BodyText>
            </Dialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              <Dialog.Cancel asChild={true}>
                <Button variant="secondary">
                  <Button.Text>Cancel</Button.Text>
                </Button>
              </Dialog.Cancel>
              <Dialog.Action asChild={true}>
                <Button theme="active">
                  <Button.Text>Action</Button.Text>
                </Button>
              </Dialog.Action>
            </XStack>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};
