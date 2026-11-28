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

import { Avatar } from "@cyclone-ui/avatar";
import { BodyText } from "@cyclone-ui/body-text";
import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import { Pencil, Update } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { PromptMessageFeedbackValue, PromptMessageProps } from "./PromptMessage";
import { PromptMessage } from "./PromptMessage";

const meta: Meta<PromptMessageProps> = {
  title: "AI/PromptMessage",
  component: PromptMessage,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={560} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<PromptMessageProps>;

const PROMPT =
  "How do I add a settings dialog? It should open from the gear icon in the header.";

const REPLY =
  "Install Dialog, then open it from the gear button in site-header.tsx.\n\nWrap the button in a Dialog.Trigger and put the settings form in Dialog.Container. Focus moves into the dialog when it opens, and Esc closes it.";

const onEdit = fn();
const onRetry = fn();
const onFeedback = fn();

const Conversation = () => (
  <View gap="8xl">
    <PromptMessage from="user">
      <PromptMessage.Content>{PROMPT}</PromptMessage.Content>
      <PromptMessage.Actions>
        <PromptMessage.Copy value={PROMPT} />
        <PromptMessage.Action label="Edit" onPress={onEdit}>
          <Pencil />
        </PromptMessage.Action>
      </PromptMessage.Actions>
    </PromptMessage>
    <PromptMessage from="assistant">
      <PromptMessage.Content>{REPLY}</PromptMessage.Content>
      <PromptMessage.Actions>
        <PromptMessage.Copy value={REPLY} />
        <PromptMessage.Feedback onValueChange={onFeedback} />
        <PromptMessage.Action label="Retry" onPress={onRetry}>
          <Update />
        </PromptMessage.Action>
      </PromptMessage.Actions>
    </PromptMessage>
  </View>
);

export const Base: Story = {
  render: () => <Conversation />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const good = canvas.getByRole("button", { name: "Good response" });
    const bad = canvas.getByRole("button", { name: "Bad response" });

    await expect(good).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(good);
    await expect(good).toHaveAttribute("aria-pressed", "true");
    await waitFor(async () => expect(onFeedback).toHaveBeenLastCalledWith("like"));

    // The toggles are exclusive, and pressing the selected one clears it.
    await userEvent.click(bad);
    await expect(good).toHaveAttribute("aria-pressed", "false");
    await expect(bad).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(bad);
    await expect(bad).toHaveAttribute("aria-pressed", "false");
    await waitFor(async () => expect(onFeedback).toHaveBeenLastCalledWith(null));

    await userEvent.click(canvas.getByRole("button", { name: "Retry" }));
    await expect(onRetry).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByRole("button", { name: "Edit" }));
    await expect(onEdit).toHaveBeenCalledTimes(1);
    await expect(canvas.getAllByRole("button", { name: "Copy text" })).toHaveLength(2);
  }
};

// The reply streams in, and its actions show once it is done.
const StreamingReply = () => {
  const [length, setLength] = useState(0);
  const streaming = length < REPLY.length;

  useEffect(() => {
    if (!streaming) return;
    const timer = setTimeout(() => setLength(value => value + 8), 30);

    return () => clearTimeout(timer);
  }, [length, streaming]);

  return (
    <View gap="8xl">
      <PromptMessage from="user">
        <PromptMessage.Content>{PROMPT}</PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="assistant" aria-busy={streaming}>
        <PromptMessage.Content>{REPLY.slice(0, length)}</PromptMessage.Content>
        {!streaming && (
          <PromptMessage.Actions>
            <PromptMessage.Copy value={REPLY} />
            <PromptMessage.Feedback />
            <PromptMessage.Action label="Retry">
              <Update />
            </PromptMessage.Action>
          </PromptMessage.Actions>
        )}
      </PromptMessage>
    </View>
  );
};

export const Streaming: Story = {
  render: () => <StreamingReply />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.queryByRole("button", { name: "Retry" })).toBeNull();
    await waitFor(
      async () =>
        expect(canvas.getByRole("button", { name: "Retry" })).toBeVisible(),
      { timeout: 10_000 }
    );
    await expect(canvas.getByText(/Esc closes it\./)).toBeVisible();
  }
};

export const WithAvatar: Story = {
  render: () => (
    <View gap="8xl">
      <PromptMessage
        from="user"
        avatar={<Avatar name="Pat Sullivan" size="sm" />}>
        <PromptMessage.Header>You · 2:14 PM</PromptMessage.Header>
        <PromptMessage.Content>{PROMPT}</PromptMessage.Content>
      </PromptMessage>
      <PromptMessage
        from="assistant"
        avatar={<Avatar name="Cyclone" size="sm" />}>
        <PromptMessage.Header>Cyclone · 2:14 PM</PromptMessage.Header>
        <PromptMessage.Content>{REPLY}</PromptMessage.Content>
        <PromptMessage.Actions>
          <PromptMessage.Copy value={REPLY} />
          <PromptMessage.Feedback />
        </PromptMessage.Actions>
      </PromptMessage>
    </View>
  )
};

export const Group: Story = {
  render: () => (
    <View gap="8xl">
      <PromptMessage from="user">
        <PromptMessage.Content>The build is failing on main.</PromptMessage.Content>
        <PromptMessage.Content>
          It started after the Next.js upgrade. Can you take a look?
        </PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="assistant">
        <PromptMessage.Content>
          Two routes still read params synchronously. Next.js 16 passes them as
          a promise, so I awaited them in both pages and the build passes.
        </PromptMessage.Content>
      </PromptMessage>
    </View>
  )
};

export const RichContent: Story = {
  render: () => (
    <PromptMessage from="assistant">
      <PromptMessage.Content>
        <BodyText size="sm">Install Dialog with the Cyclone UI CLI:</BodyText>
        <CodeBlock margin={0}>
          <Pre color="ink">
            <code>pnpm exec cyclone-ui add dialog</code>
          </Pre>
        </CodeBlock>
        <BodyText size="sm">
          Then open it from the gear button in site-header.tsx.
        </BodyText>
      </PromptMessage.Content>
    </PromptMessage>
  )
};

export const Variants: Story = {
  render: () => (
    <View gap="5xl">
      <PromptMessage from="user">
        <PromptMessage.Content>surface: the person's messages</PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="user">
        <PromptMessage.Content variant="primary">
          primary: a strong bubble
        </PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="user">
        <PromptMessage.Content variant="tinted">
          tinted: a light wash of the theme's primary
        </PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="user">
        <PromptMessage.Content variant="tinted" theme="info">
          tinted with theme="info"
        </PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="assistant">
        <PromptMessage.Content>
          ghost: the agent's replies, unframed and as wide as the row
        </PromptMessage.Content>
      </PromptMessage>
    </View>
  )
};

const onRetryFailed = fn();

export const Failed: Story = {
  render: () => (
    <View gap="8xl">
      <PromptMessage from="user">
        <PromptMessage.Content>Deploy the preview branch.</PromptMessage.Content>
      </PromptMessage>
      <PromptMessage from="assistant">
        <PromptMessage.Content variant="tinted" theme="danger">
          The deploy failed: the preview environment is missing DATABASE_URL.
        </PromptMessage.Content>
        <PromptMessage.Actions>
          <PromptMessage.Action label="Retry" onPress={onRetryFailed}>
            <Update />
          </PromptMessage.Action>
        </PromptMessage.Actions>
      </PromptMessage>
    </View>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Retry" })
    );
    await expect(onRetryFailed).toHaveBeenCalledTimes(1);
  }
};

// A controlled `PromptMessage.Feedback`, as a thread would keep it per message.
const ControlledFeedback = () => {
  const [feedback, setFeedback] = useState<PromptMessageFeedbackValue>("like");

  return (
    <PromptMessage from="assistant">
      <PromptMessage.Content>{REPLY}</PromptMessage.Content>
      <PromptMessage.Actions>
        <PromptMessage.Feedback value={feedback} onValueChange={setFeedback} />
      </PromptMessage.Actions>
      <BodyText size="xs" color="subtle">
        Feedback: {String(feedback)}
      </BodyText>
    </PromptMessage>
  );
};

export const Controlled: Story = {
  render: () => <ControlledFeedback />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const good = canvas.getByRole("button", { name: "Good response" });

    await expect(good).toHaveAttribute("aria-pressed", "true");
    // Keyboard: Tab onto Bad response and press it with Enter.
    good.focus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Bad response" })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(async () =>
      expect(canvas.getByText("Feedback: dislike")).toBeVisible()
    );
    await expect(good).toHaveAttribute("aria-pressed", "false");
  }
};
