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

import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { ReasoningProps } from "./Reasoning";
import { Reasoning, useReasoning } from "./Reasoning";

const meta: Meta<ReasoningProps> = {
  title: "AI/Reasoning",
  component: Reasoning,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={480} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<ReasoningProps>;

const REASONING =
  "The deploy log has three phases. Install takes 38s and next build takes 52s, both normal for this repo.\n\nImage optimization takes 3m 50s. It reruns on every deploy because its cache key includes the commit hash, so the cache never hits.";

// Streams the text in, 12 characters every 40ms, after `delay` ms.
const useStreamedText = (text: string, delay = 0) => {
  const [length, setLength] = useState(0);
  const [started, setStarted] = useState(delay === 0);
  const isStreaming = started && length < text.length;

  useEffect(() => {
    const timer = started
      ? isStreaming
        ? setTimeout(() => setLength(value => value + 12), 40)
        : undefined
      : setTimeout(() => setStarted(true), delay);

    return () => clearTimeout(timer);
  }, [delay, isStreaming, length, started]);

  return { text: text.slice(0, length), isStreaming, started };
};

const StreamingReasoning = (props: ReasoningProps) => {
  const { text, isStreaming } = useStreamedText(REASONING);

  return (
    <Reasoning isStreaming={isStreaming} {...props}>
      {text}
    </Reasoning>
  );
};

/** Opens while the text streams in, then closes and shows how long it took. */
export const Streaming: Story = {
  render: args => <StreamingReasoning {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () =>
      expect(canvas.getByRole("button", { name: "Thinking" })).toHaveAttribute(
        "aria-expanded",
        "true"
      )
    );
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /^Thought for \d+s$/ })
        ).toHaveAttribute("aria-expanded", "false"),
      { timeout: 10_000 }
    );
  }
};

/** Closed by the reader while it streams, it stays closed when it is done. */
export const ReaderChoice: Story = {
  render: args => <StreamingReasoning {...args} />,
  args: { onOpenChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Thinking" });

    await userEvent.click(trigger);
    await expect(args.onOpenChange).toHaveBeenCalledWith(false);
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /^Thought for \d+s$/ })
        ).toBeVisible(),
      { timeout: 10_000 }
    );
    await expect(
      canvas.getByRole("button", { name: /^Thought for/ })
    ).toHaveAttribute("aria-expanded", "false");

    // Enter opens it again.
    canvas.getByRole("button", { name: /^Thought for/ }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    await waitFor(async () =>
      expect(canvas.getByText(/cache never hits/)).toBeVisible()
    );
  }
};

/** A finished part from history, with the duration the server measured. */
export const Done: Story = {
  args: { duration: 12, children: REASONING },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Thought for 12s" });

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await waitFor(async () =>
      expect(canvas.getByText(/cache never hits/)).toBeVisible()
    );
  }
};

/** Open from the start, as the reader's choice. Without a duration it reads "Thought". */
export const DefaultOpen: Story = {
  args: { defaultOpen: true, children: REASONING },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", { name: "Thought" })
    ).toHaveAttribute("aria-expanded", "true");
  }
};

/** Before any text arrives the line has nothing to open, so it is not a button. */
export const Empty: Story = {
  args: { isStreaming: true, children: "" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Thinking")).toBeVisible();
    await expect(canvas.queryByRole("button")).toBeNull();
  }
};

const PARTS = [
  "Install and compile finish in under a minute, so the build itself is fine.",
  "Image optimization takes almost four minutes. Its cache key includes the commit hash, so every deploy misses the cache."
];

const SeveralPartsDemo = () => {
  const first = useStreamedText(PARTS[0]!);
  const second = useStreamedText(PARTS[1]!, 1200);

  return (
    <Trace>
      <Reasoning isStreaming={first.isStreaming}>{first.text}</Reasoning>
      {second.started && (
        <Reasoning isStreaming={second.isStreaming}>{second.text}</Reasoning>
      )}
    </Trace>
  );
};

/** Some models send several reasoning parts in one message: one line each in a `Trace`. */
export const SeveralParts: Story = {
  render: () => <SeveralPartsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () =>
        expect(
          canvas.getAllByRole("button", { name: /^Thought for \d+s$/ })
        ).toHaveLength(2),
      { timeout: 10_000 }
    );
  }
};

const Elapsed = () => {
  const { isStreaming, duration } = useReasoning();

  return (
    <Trace.Line status={isStreaming ? "running" : undefined}>
      <Trace.Title>{isStreaming ? "Planning the fix" : "Planned the fix"}</Trace.Title>
      {duration !== undefined && (
        <Trace.Description>{duration}s</Trace.Description>
      )}
    </Trace.Line>
  );
};

/** The parts composed: a custom title and a line that reads `useReasoning()`. */
export const Composed: Story = {
  render: () => (
    <Trace>
      <Reasoning duration={4} defaultOpen={true}>
        <Reasoning.Trigger
          getThinkingMessage={(isStreaming, duration) =>
            isStreaming ? "Reasoning" : `Reasoned for ${duration} seconds`
          }
        />
        <Reasoning.Content>{PARTS[0]}</Reasoning.Content>
      </Reasoning>
      <Reasoning duration={9}>
        <Reasoning.Trigger>
          <Elapsed />
        </Reasoning.Trigger>
        <Reasoning.Content>{PARTS[1]}</Reasoning.Content>
      </Reasoning>
    </Trace>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Reasoned for 4 seconds" })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("button", { name: /Planned the fix/ })
    ).toHaveTextContent("9s");
  }
};
