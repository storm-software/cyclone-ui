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

import { TextArea } from "@cyclone-ui/text-area";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within
} from "storybook/test";
import type { ContextProps } from "./Context";
import { Context } from "./Context";

const USAGE = {
  inputTokens: 8420,
  outputTokens: 1260,
  reasoningTokens: 980,
  cachedInputTokens: 2048
};

// Waits for the card (portaled to the body) to fade in.
const opened = async (body: ReturnType<typeof within>, text = "10.7K / 128K") =>
  waitFor(async () => expect(body.getByText(text)).toBeVisible());

// Waits for the card to close.
const closed = async (body: ReturnType<typeof within>) =>
  waitFor(
    async () =>
      expect(body.queryByText("10.7K / 128K")).not.toBeInTheDocument(),
    { timeout: 3000 }
  );

const meta: Meta<ContextProps> = {
  title: "AI/Context",
  component: Context,
  tags: ["autodocs"],
  args: {
    usedTokens: 10660,
    maxTokens: 128000,
    usage: USAGE,
    onOpenChange: fn()
  },
  decorators: [
    Story => (
      // Tall enough for the open card in screenshots.
      <View
        padding="xl"
        maxWidth={480}
        width="100%"
        minHeight={360}
        alignItems="flex-start">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<ContextProps>;

export const Base: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "8.3% of context used"
    });

    // Hovering opens the card.
    await userEvent.hover(trigger);
    await opened(body);
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    await expect(
      body.getByRole("progressbar", { name: "Context used" })
    ).toHaveAttribute("aria-valuenow", "8");
    for (const [label, value] of [
      ["Input", "8.4K"],
      ["Output", "1.3K"],
      ["Reasoning", "980"],
      ["Cache", "2K"]
    ] as const) {
      await expect(body.getByText(label).nextSibling).toHaveTextContent(value);
    }
    // No cost, no footer.
    await expect(body.queryByText("Total cost")).not.toBeInTheDocument();

    // Leaving closes it.
    await userEvent.unhover(trigger);
    await closed(body);
  }
};

export const Keyboard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "8.3% of context used"
    });

    // Tabbing to the trigger opens the card, and focus stays on the trigger.
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await opened(body);
    await expect(trigger).toHaveFocus();

    // Escape closes it, and Enter opens it again.
    await userEvent.keyboard("{Escape}");
    await closed(body);
    await userEvent.keyboard("{Enter}");
    await opened(body);

    // Moving focus away closes it.
    await userEvent.tab();
    await expect(trigger).not.toHaveFocus();
    await closed(body);
  }
};

export const Press: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // A tap (a click without hover) opens the card, and a press outside
    // closes it.
    await fireEvent.click(
      canvas.getByRole("button", { name: "8.3% of context used" })
    );
    await opened(body);
    await fireEvent.pointerDown(canvasElement.ownerDocument.body);
    await fireEvent.pointerUp(canvasElement.ownerDocument.body);
    await closed(body);
  }
};

export const WithCost: Story = {
  args: { cost: 0.0421 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await userEvent.hover(
      canvas.getByRole("button", { name: "8.3% of context used" })
    );
    await expect(
      (await body.findByText("Total cost")).nextSibling
    ).toHaveTextContent("$0.0421");
  }
};

export const Open: Story = {
  args: { defaultOpen: true, cost: 0.0421 }
};

export const NearlyFull: Story = {
  args: {
    defaultOpen: true,
    usedTokens: 121_480,
    usage: {
      inputTokens: 98_200,
      outputTokens: 14_900,
      reasoningTokens: 8380,
      cachedInputTokens: 64_000
    }
  },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await expect(
      within(canvasElement).getByRole("button", {
        name: "94.9% of context used"
      })
    ).toBeVisible();
    await opened(body, "121.5K / 128K");
  }
};

export const Empty: Story = {
  args: { defaultOpen: true, usedTokens: 0, usage: undefined },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await expect(
      within(canvasElement).getByRole("button", { name: "0% of context used" })
    ).toBeVisible();
    await opened(body, "0 / 128K");
    // No counts, no token rows.
    await expect(body.queryByText("Input")).not.toBeInTheDocument();
  }
};

export const Composed: Story = {
  args: { defaultOpen: true },
  render: args => (
    <Context {...args}>
      <Context.Trigger />
      <Context.Content>
        <Context.ContentHeader />
        <Context.ContentBody>
          <Context.InputUsage />
          <Context.OutputUsage />
        </Context.ContentBody>
      </Context.Content>
    </Context>
  ),
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await waitFor(async () => expect(body.getByText("Output")).toBeVisible());
    await expect(body.queryByText("Reasoning")).not.toBeInTheDocument();
  }
};

export const WhileTyping: Story = {
  render: args => (
    <View width="100%" gap="xl" alignItems="flex-end">
      <TextArea aria-label="Message" width="100%" />
      <Context {...args} />
    </View>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const message = canvas.getByRole("textbox", { name: "Message" });

    // Hovering the meter while typing leaves focus in the text.
    await userEvent.click(message);
    await userEvent.keyboard("Summarize");
    const trigger = canvas.getByRole("button", {
      name: "8.3% of context used"
    });
    await userEvent.hover(trigger);
    await opened(body);
    await userEvent.unhover(trigger);
    await closed(body);
    await expect(message).toHaveFocus();
    await userEvent.keyboard(" the log");
    await expect(message).toHaveValue("Summarize the log");
  }
};
