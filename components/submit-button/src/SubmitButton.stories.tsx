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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { XStack } from "@tamagui/stacks";
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within
} from "storybook/test";
import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "Triggers/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  render: (args: any) => <SubmitButton {...args} />
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof SubmitButton>;

const settle = (ok: boolean, ms = 1500) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => (ok ? resolve() : reject(new Error("Failed"))), ms);
  });

/**
 * Settles the press made by `heldPress`. Play functions call it once they've
 * checked the pending state, so a slow commit can't skip past it.
 */
let finishPress: (ok: boolean) => void = () => undefined;
const heldPress = async () =>
  new Promise<void>((resolve, reject) => {
    finishPress = ok => (ok ? resolve() : reject(new Error("Failed")));
  });

export const Base: Story = {
  args: {
    onPress: async () => settle(true)
  }
};

export const CustomText: Story = {
  args: {
    children: "Send message",
    pendingText: "Sending",
    successText: "Sent",
    errorText: "Not sent",
    onPress: async () => settle(true)
  }
};

export const Primary: Story = {
  args: {
    variant: "primary",
    onPress: async () => settle(true)
  }
};

export const Success: Story = {
  args: {
    // The success delay wins over the shared "never reset"
    resetDelay: -1,
    resetDelaySuccess: 500,
    onPress: fn(heldPress)
  },
  play: async ({ args, canvasElement }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toHaveAccessibleName("Submit");

    await userEvent.click(button);
    await expect(button).toHaveAccessibleName("Submitting");
    await expect(button).toHaveAttribute("aria-busy", "true");
    await expect(button).toBeDisabled();
    // A second press while pending doesn't submit again
    await fireEvent.click(button);
    await expect(args.onPress).toHaveBeenCalledTimes(1);

    finishPress(true);
    await waitFor(async () => expect(button).toHaveAccessibleName("Submitted"));
    await expect(button).toBeEnabled();
    // Disabling dropped the focus; it comes back once enabled
    await waitFor(async () => expect(button).toHaveFocus());
    await waitFor(async () => expect(button).toHaveAccessibleName("Submit"), {
      timeout: 2000
    });
  }
};

export const Failure: Story = {
  args: {
    // The error state never resets, despite the shared delay
    resetDelay: 300,
    resetDelayError: -1,
    onPress: heldPress
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button");

    await userEvent.click(button);
    await expect(button).toHaveAccessibleName("Submitting");

    finishPress(false);

    await waitFor(async () => expect(button).toHaveAccessibleName("Try again"));
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    await expect(button).toHaveAccessibleName("Try again");
  }
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    onPress: async () => settle(true)
  }
};

export const HideText: Story = {
  args: {
    hideText: true,
    onPress: async () => settle(true)
  }
};

export const States: Story = {
  render: (args: any) => (
    <XStack gap="5xl">
      <SubmitButton {...args} status="idle" />
      <SubmitButton {...args} status="pending" />
      <SubmitButton {...args} status="success" />
      <SubmitButton {...args} status="error" />
    </XStack>
  )
};
