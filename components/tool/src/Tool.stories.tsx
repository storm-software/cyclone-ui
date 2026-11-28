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

import { Confirmation } from "@cyclone-ui/confirmation";
import { Drawer } from "@cyclone-ui/drawer";
import { ChevronRight, Console, Document } from "@cyclone-ui/icons";
import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import type { ToolPart, ToolProps } from "./Tool";
import { Tool } from "./Tool";

const meta: Meta<ToolProps> = {
  title: "AI/Tool",
  component: Tool,
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
type Story = StoryObj<ToolProps>;

type RunCommandPart = ToolPart & {
  input?: { command: string };
  output?: { stdout: string };
};

// A `runCommand` call: the line names the command and the output is its
// stdout.
const RunCommand = ({
  part,
  isStreaming,
  defaultOpen
}: {
  part: RunCommandPart;
  isStreaming?: boolean;
  defaultOpen?: boolean;
}) => (
  <Tool defaultOpen={defaultOpen}>
    <Tool.Header
      type={part.type}
      state={part.state}
      approval={part.approval}
      title={part.input?.command}
      isStreaming={isStreaming}
    />
    <Tool.Content>
      <Tool.Output output={part.output?.stdout} errorText={part.errorText} />
    </Tool.Content>
  </Tool>
);

const part = (
  toolCallId: string,
  state: RunCommandPart["state"],
  command: string,
  rest?: Partial<RunCommandPart>
): RunCommandPart => ({
  type: "tool-runCommand",
  toolCallId,
  state,
  input: { command },
  ...rest
});

export const States: Story = {
  render: () => (
    <Trace>
      <RunCommand
        part={part("status", "output-available", "git status --short", {
          output: { stdout: " M app/api/chat/route.ts\n M components/chat.tsx" }
        })}
      />
      <RunCommand
        part={part("dev", "output-error", "pnpm dev", {
          errorText: "Command timed out after 120 seconds."
        })}
      />
      <RunCommand part={part("rm", "output-denied", "rm -rf dist")} />
      <RunCommand part={part("test", "input-available", "pnpm test")} />
      <RunCommand
        part={part("lint", "input-available", "pnpm lint")}
        isStreaming={false}
      />
      <RunCommand
        part={part("push", "approval-requested", "git push", {
          approval: { id: "push" }
        })}
      />
    </Trace>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const name of [
      "Ran git status --short",
      "Failed to run pnpm dev",
      "Denied rm -rf dist",
      "Running pnpm test",
      // Still running when the chat stopped.
      "Failed to run pnpm lint",
      "Waiting to run git push"
    ]) {
      await expect(canvas.getByRole("button", { name })).toBeVisible();
    }

    const failed = canvas.getByRole("button", {
      name: "Failed to run pnpm dev"
    });
    await userEvent.click(failed);
    await expect(failed).toHaveAttribute("aria-expanded", "true");
    await waitFor(async () =>
      expect(canvas.getByText(/timed out after 120 seconds/)).toBeVisible()
    );
  }
};

const SEARCH: ToolPart = {
  type: "tool-searchDocs",
  toolCallId: "search",
  state: "output-available",
  input: { query: "useChat transport", limit: 2 },
  output: {
    results: [
      { title: "Transport", url: "/docs/ai-sdk-ui/transport" },
      { title: "useChat", url: "/docs/reference/ai-sdk-ui/use-chat" }
    ]
  }
};

export const InputAndOutput: Story = {
  render: () => (
    <Tool defaultOpen={true}>
      <Tool.Header type={SEARCH.type} state={SEARCH.state} />
      <Tool.Content>
        <Tool.Input input={SEARCH.input} />
        <Tool.Output output={SEARCH.output} errorText={SEARCH.errorText} />
      </Tool.Content>
    </Tool>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The tool's name comes from the part's type.
    const trigger = canvas.getByRole("button", { name: "Ran searchDocs" });

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    // Pretty-printed JSON.
    await expect(
      canvas.getByText(/"query": "useChat transport"/)
    ).toBeVisible();
    await expect(canvas.getByText(/"title": "Transport"/)).toBeVisible();

    // Keyboard: Space closes and reopens it.
    trigger.focus();
    await userEvent.keyboard(" ");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard(" ");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  }
};

const COMMANDS: { command: string; stdout?: string; error?: string }[] = [
  { command: "node --version", stdout: "v24.18.0" },
  { command: "npm --version", stdout: "11.6.2" },
  { command: "pnpm --version", error: "command not found: pnpm" }
];

// Each call streams its input, runs, then gets its output or error, one step
// every 450ms.
const StreamingCalls = () => {
  const [step, setStep] = useState(0);
  const done = step >= COMMANDS.length * 2;

  useEffect(() => {
    if (done) return;
    const timer = setTimeout(() => setStep(value => value + 1), 450);

    return () => clearTimeout(timer);
  }, [done, step]);

  return (
    <Trace>
      {COMMANDS.slice(0, Math.min(step / 2 + 1, COMMANDS.length)).map(
        ({ command, stdout, error }, index) => {
          const started = index * 2;

          return (
            <RunCommand
              key={command}
              part={
                step < started + 1
                  ? part(command, "input-streaming", command)
                  : step < started + 2
                    ? part(command, "input-available", command)
                    : error
                      ? part(command, "output-error", command, {
                          errorText: error
                        })
                      : part(command, "output-available", command, {
                          output: { stdout: stdout ?? "" }
                        })
              }
            />
          );
        }
      )}
    </Trace>
  );
};

export const Streaming: Story = {
  render: () => <StreamingCalls />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Running node --version" })
    ).toBeVisible();
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: "Failed to run pnpm --version" })
        ).toBeVisible(),
      { timeout: 10_000 }
    );
    await expect(
      canvas.getByRole("button", { name: "Ran npm --version" })
    ).toBeVisible();
  }
};

// While the approval is pending the call is a Confirmation, outside the
// trace. Once answered it is a line again: it runs if approved.
const ApprovalFlow = () => {
  const [current, setCurrent] = useState<RunCommandPart>(() =>
    part("rm", "approval-requested", "rm -rf dist", { approval: { id: "rm" } })
  );
  const answer = (approved: boolean) =>
    setCurrent({
      ...current,
      state: "approval-responded",
      approval: { id: "rm", approved }
    });

  useEffect(() => {
    if (current.state !== "approval-responded" || !current.approval?.approved) {
      return;
    }
    const timer = setTimeout(
      () =>
        setCurrent({
          ...current,
          state: "output-available",
          output: { stdout: "" }
        }),
      900
    );

    return () => clearTimeout(timer);
  }, [current]);

  return current.state === "approval-requested" ? (
    <Confirmation
      approval={current.approval}
      state={current.state}
      icon={<Console />}>
      <Confirmation.Title description="The command runs in this project.">
        Run {current.input?.command}?
      </Confirmation.Title>
      <Confirmation.Actions>
        <Confirmation.Action variant="outlined" onPress={() => answer(false)}>
          Deny
        </Confirmation.Action>
        <Confirmation.Action variant="primary" onPress={() => answer(true)}>
          Approve
        </Confirmation.Action>
      </Confirmation.Actions>
    </Confirmation>
  ) : (
    <RunCommand part={current} />
  );
};

export const Approval: Story = {
  render: () => <ApprovalFlow />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Approve" }));
    await expect(
      canvas.getByRole("button", { name: "Running rm -rf dist" })
    ).toBeVisible();
    await waitFor(async () =>
      expect(
        canvas.getByRole("button", { name: "Ran rm -rf dist" })
      ).toBeVisible()
    );
  }
};

export const ApprovalDenied: Story = {
  render: () => <ApprovalFlow />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Deny" }));
    await expect(
      canvas.getByRole("button", { name: "Denied rm -rf dist" })
    ).toBeVisible();
  }
};

const PACKAGE_JSON = `{
  "name": "acme-chat",
  "private": true,
  "dependencies": {
    "@ai-sdk/react": "^4.0.0",
    "ai": "^7.0.0",
    "next": "^16.3.0"
  }
}`;

// Long output opens in a drawer instead of under the line.
const OutputInDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Trace>
      <Trace.Button onPress={() => setOpen(true)}>
        <Trace.Line>
          <Trace.Icon>
            <Document />
          </Trace.Icon>
          <Trace.Title>Read package.json</Trace.Title>
          <Trace.Icon>
            <ChevronRight />
          </Trace.Icon>
        </Trace.Line>
      </Trace.Button>
      <Drawer open={open} onOpenChange={setOpen}>
        <Drawer.Overlay />
        <Drawer.Frame>
          <Drawer.Content>
            <Drawer.Header closable={true}>
              <Drawer.Title>package.json</Drawer.Title>
              <Drawer.Description>
                {PACKAGE_JSON.split("\n").length} lines
              </Drawer.Description>
            </Drawer.Header>
            <Tool.Output output={PACKAGE_JSON} label="" />
          </Drawer.Content>
        </Drawer.Frame>
      </Drawer>
    </Trace>
  );
};

export const OutputInSheet: Story = {
  render: () => <OutputInDrawer />,
  play: async ({ canvasElement }) => {
    const trigger = within(canvasElement).getByRole("button", {
      name: "Read package.json"
    });

    await userEvent.click(trigger);
    await waitFor(async () =>
      expect(screen.getByText(/"name": "acme-chat"/)).toBeVisible()
    );
    await userEvent.keyboard("{Escape}");
    await waitFor(async () =>
      expect(screen.queryByText(/"name": "acme-chat"/)).toBeNull()
    );
    // Open again for the screenshot.
    await userEvent.click(trigger);
    await waitFor(async () =>
      expect(screen.getByText(/"name": "acme-chat"/)).toBeVisible()
    );
  }
};
