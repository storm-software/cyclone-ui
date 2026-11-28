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
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { TerminalProps } from "./Terminal";
import { Terminal } from "./Terminal";

const meta: Meta<TerminalProps> = {
  title: "AI/Terminal",
  component: Terminal,
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
type Story = StoryObj<TerminalProps>;

const BUILD = [
  "> acme-chat@0.1.0 build",
  "> next build",
  "",
  "   ▲ Next.js 16.3.0",
  "   Creating an optimized production build ...",
  " ✓ Compiled successfully in 4.2s",
  " ✓ Linting and checking validity of types",
  " ✓ Collecting page data",
  " ✓ Generating static pages (12/12)",
  " ✓ Collecting build traces",
  " ✓ Finalizing page optimization",
  "",
  "Route (app)                Size  First Load JS",
  "┌ ○ /                     1.9 kB       112 kB",
  "├ ○ /settings             2.4 kB       114 kB",
  "└ ƒ /api/chat              141 B       102 kB"
];

// Prints a line of `pnpm build` every 150ms.
const StreamingBuild = () => {
  const [lines, setLines] = useState(0);
  const isStreaming = lines < BUILD.length;

  useEffect(() => {
    if (!isStreaming) return;
    const timer = setTimeout(() => setLines(value => value + 1), 150);

    return () => clearTimeout(timer);
  }, [isStreaming, lines]);

  return (
    <Terminal
      command="pnpm build"
      output={BUILD.slice(0, lines).join("\n")}
      isStreaming={isStreaming}
      exitCode={isStreaming ? undefined : 0}
    />
  );
};

export const Streaming: Story = {
  render: () => <StreamingBuild />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const running = canvas.getByRole("button", { name: "Running pnpm build" });

    // Opens once the first output arrives.
    await waitFor(async () =>
      expect(running).toHaveAttribute("aria-expanded", "true")
    );
    // Scrolled to the newest output while it streams.
    await waitFor(
      async () =>
        expect(canvas.getByText(/Collecting build traces/)).toBeVisible(),
      { timeout: 5000 }
    );
    const viewport = canvasElement.querySelector(
      ".cyclone-code-block-viewport"
    ) as HTMLElement;
    await expect(viewport.scrollHeight).toBeGreaterThan(viewport.clientHeight);
    await waitFor(async () =>
      expect(viewport.scrollTop + viewport.clientHeight).toBeGreaterThanOrEqual(
        viewport.scrollHeight - 1
      )
    );

    // Closes on its own once the command is done.
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: "Ran pnpm build" })
        ).toHaveAttribute("aria-expanded", "false"),
      { timeout: 10_000 }
    );
  }
};

// cspell:ignore ELIFECYCLE
const LINT = `> acme-chat@0.1.0 lint
> eslint .

app/api/chat/route.ts
  14:7  error  'model' is assigned a value but never used  no-unused-vars

components/chat.tsx
  42:5  error  React Hook useEffect has a missing dependency: 'messages'  react-hooks/exhaustive-deps

✖ 2 problems (2 errors, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.`;

export const ExitCode: Story = {
  render: () => (
    <View gap="xl">
      <Terminal command="pnpm install" output="Done in 1.4s" exitCode={0} />
      <Terminal
        command="pnpm lint"
        output={LINT}
        exitCode={1}
        defaultOpen={true}
      />
    </View>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Ran pnpm install" })
    ).toHaveAttribute("aria-expanded", "false");
    await expect(
      canvas.getByRole("button", { name: "pnpm lint exited with code 1" })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText(/2 problems/)).toBeVisible();
  }
};

const onClear = fn();

const Clearable = () => {
  const [output, setOutput] = useState("$ node --version\nv24.18.0");

  return (
    <Terminal
      command="node --version"
      output={output}
      exitCode={0}
      defaultOpen={true}
      onClear={() => {
        onClear();
        setOutput("");
      }}
    />
  );
};

export const Actions: Story = {
  render: () => <Clearable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText(/v24\.18\.0/)).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: "Copy output" })
    ).toBeEnabled();
    await userEvent.click(canvas.getByRole("button", { name: "Clear output" }));
    await expect(onClear).toHaveBeenCalledOnce();
    await waitFor(async () =>
      expect(canvas.queryByText(/v24\.18\.0/)).toBeNull()
    );
    // Nothing left to copy or clear.
    await expect(
      canvas.getByRole("button", { name: "Copy output" })
    ).toBeDisabled();
  }
};

// The parts, laid out by hand: a custom title and a busy indicator beside
// the line.
export const Composed: Story = {
  render: () => (
    <Terminal
      command="pnpm test"
      output={"> vitest run\n\n ✓ lib/ai.test.ts (6 tests) 41ms"}
      isStreaming={true}>
      <Terminal.Header>
        <Terminal.Title>Testing the chat helpers</Terminal.Title>
        <Terminal.Status />
        <Terminal.Actions>
          <Terminal.CopyButton />
        </Terminal.Actions>
      </Terminal.Header>
      <Terminal.Content />
    </Terminal>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Testing the chat helpers"
    });

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    // The reader's choice wins over the open-while-running default.
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  }
};
