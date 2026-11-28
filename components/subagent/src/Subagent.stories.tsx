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

import type { ToolPart, ToolState } from "@cyclone-ui/tool";
import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { SubagentProps } from "./Subagent";
import { Subagent } from "./Subagent";

const meta: Meta<SubagentProps> = {
  title: "AI/Subagent",
  component: Subagent,
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
type Story = StoryObj<SubagentProps>;

const TASK = "Find out why image optimization reruns on every deploy.";
const REPORT =
  "The cache is keyed on the commit SHA, so every deploy misses it and optimizes all 1,240 images again.";

const STEPS = [
  {
    command: "grep -rn cacheKey scripts",
    stdout:
      "scripts/optimize-images.ts:14:  const cacheKey = process.env.COMMIT_SHA"
  },
  {
    command: "sed -n 13,15p scripts/optimize-images.ts",
    stdout:
      'const cacheDir = ".next/cache/images"\nconst cacheKey = process.env.COMMIT_SHA\nconst cached = await restoreCache(cacheDir, cacheKey)'
  },
  { command: "ls public/images | wc -l", stdout: "1240" }
];

// The subagent's `runCommand` calls: the first `done` have their output and
// the next one runs.
const getCalls = (
  done: number
): (ToolPart & { input: { command: string } })[] =>
  STEPS.slice(0, done + 1).map(({ command, stdout }, index) => ({
    type: "tool-runCommand",
    toolCallId: `step-${index}`,
    state: index < done ? "output-available" : "input-available",
    input: { command },
    output: index < done ? stdout : undefined
  }));

const Run = ({
  state,
  done,
  isStreaming,
  report
}: {
  state: ToolState;
  done: number;
  isStreaming?: boolean;
  report?: string;
}) => (
  <Subagent defaultOpen={true}>
    <Subagent.Header
      name="the research agent"
      model="claude-sonnet-4.5"
      state={state}
      // Each partial output is preliminary until the subagent finishes.
      preliminary={!report}
      isStreaming={isStreaming}>
      {report && <Trace.Description>48s</Trace.Description>}
    </Subagent.Header>
    <Subagent.Content>
      <Subagent.Instructions>{TASK}</Subagent.Instructions>
      <Subagent.Tools>
        {getCalls(done).map(call => (
          <Subagent.Tool
            key={call.toolCallId}
            tool={call}
            title={call.input.command}
            isStreaming={isStreaming}
          />
        ))}
      </Subagent.Tools>
      {report && <Subagent.Output>{report}</Subagent.Output>}
    </Subagent.Content>
  </Subagent>
);

// One tool call finishes every 700ms, then the subagent reports back.
const StreamingRun = () => {
  const [done, setDone] = useState(0);
  const finished = done >= STEPS.length;

  useEffect(() => {
    if (finished) return;
    const timer = setTimeout(() => setDone(value => value + 1), 700);

    return () => clearTimeout(timer);
  }, [done, finished]);

  return (
    <Run
      state={done === 0 ? "input-available" : "output-available"}
      done={done}
      report={finished ? REPORT : undefined}
    />
  );
};

export const Running: Story = {
  render: () => <StreamingRun />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: /Running the research agent/ })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("button", { name: "Running grep -rn cacheKey scripts" })
    ).toBeVisible();

    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /Ran the research agent/ })
        ).toBeVisible(),
      { timeout: 10_000 }
    );
    await expect(canvas.getByText(REPORT)).toBeVisible();

    // A tool call opens to its output.
    const call = canvas.getByRole("button", {
      name: "Ran ls public/images | wc -l"
    });
    await userEvent.click(call);
    await expect(call).toHaveAttribute("aria-expanded", "true");
    await waitFor(async () => expect(canvas.getByText("1240")).toBeVisible());
  }
};

export const Details: Story = {
  render: () => (
    <Run state="output-available" done={STEPS.length} report={REPORT} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: /Ran the research agent/
    });

    await expect(header).toHaveTextContent("claude-sonnet-4.5");
    await expect(header).toHaveTextContent("48s");
    await expect(canvas.getByText(TASK)).toBeVisible();

    // Keyboard: Enter closes and reopens the run.
    header.focus();
    await userEvent.keyboard("{Enter}");
    await expect(header).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("{Enter}");
    await expect(header).toHaveAttribute("aria-expanded", "true");
  }
};

export const Failed: Story = {
  render: () => (
    <Subagent defaultOpen={true}>
      <Subagent.Header
        name="the research agent"
        model="claude-sonnet-4.5"
        state="output-error"
      />
      <Subagent.Content>
        <Subagent.Instructions>{TASK}</Subagent.Instructions>
        <Subagent.Tools>
          <Subagent.Tool
            tool={{
              type: "tool-runCommand",
              toolCallId: "step-0",
              state: "output-error",
              input: { command: "grep -rn cacheKey scripts" },
              errorText: "grep: scripts: No such file or directory"
            }}
            title="grep -rn cacheKey scripts"
          />
        </Subagent.Tools>
      </Subagent.Content>
    </Subagent>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: /Failed to run the research agent/ })
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", {
        name: "Failed to run grep -rn cacheKey scripts"
      })
    ).toBeVisible();
  }
};

export const Stopped: Story = {
  name: "Stopped while running",
  render: () => <Run state="output-available" done={1} isStreaming={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The chat stopped before the subagent finished.
    await expect(
      canvas.getByRole("button", { name: /Failed to run the research agent/ })
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", {
        name: "Failed to run sed -n 13,15p scripts/optimize-images.ts"
      })
    ).toBeVisible();
  }
};
