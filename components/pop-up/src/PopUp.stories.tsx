import type { Meta, StoryObj } from "@storybook/react";
import { PopUp, type PopUpProps } from "./PopUp";
import { XStack, YStack } from "@tamagui/stacks";
import { Button } from "@cyclone-ui/button";

const meta: Meta<typeof PopUp> = {
  title: "General/PopUp",
  component: PopUp,
  tags: ["autodocs"],
  render: ({ children, ...rest }: PopUpProps) => (
    <PopUp native={false} {...rest}>
      <PopUp.Trigger asChild={true}>
        <Button>
          <Button.Text>Show Pop-Up</Button.Text>
        </Button>
      </PopUp.Trigger>

      <PopUp.Portal>
        <PopUp.Overlay key="overlay" />
        <PopUp.Content bordered elevate key="content">
          <YStack space>
            <PopUp.Title>Pop-Up Title</PopUp.Title>
            <PopUp.Description>{children}</PopUp.Description>

            <XStack space="$3" justifyContent="flex-end">
              <PopUp.Cancel asChild={true}>
                <Button variant="secondary">Cancel</Button>
              </PopUp.Cancel>
              <PopUp.Action asChild={true}>
                <Button theme="active">Action</Button>
              </PopUp.Action>
            </XStack>
          </YStack>
        </PopUp.Content>
      </PopUp.Portal>
    </PopUp>
  )
} satisfies Meta<typeof PopUp>;

export default meta;

type Story = StoryObj<typeof PopUp>;

export const Base: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};
