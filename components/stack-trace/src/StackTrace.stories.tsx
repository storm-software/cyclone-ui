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

import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import { Console, Loading } from "@cyclone-ui/icons";
import { Trace } from "@cyclone-ui/trace";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { StackTraceProps } from "./StackTrace";
import { StackTrace } from "./StackTrace";

const meta: Meta<StackTraceProps> = {
  title: "AI/StackTrace",
  component: StackTrace,
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
type Story = StoryObj<StackTraceProps>;

const STACK = `TypeError: Cannot read properties of undefined (reading 'total')
    at formatInvoice (app/lib/billing.ts:42:31)
    at InvoiceRow (app/components/invoice-row.tsx:18:12)
    at renderWithHooks (node_modules/react-dom/cjs/react-dom.development.js:14985:18)
    at beginWork (node_modules/react-dom/cjs/react-dom.development.js:19049:16)
    at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:22776:12)
    at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:22707:5)`;

export const Base: Story = {
  args: {
    trace: STACK,
    defaultOpen: true,
    onFilePathClick: fn(),
    onOpenChange: fn()
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Failed: TypeError: Cannot read properties of undefined (reading 'total')"
    });

    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Your own frames open the file at the line.
    await userEvent.click(
      canvas.getByRole("button", {
        name: "formatInvoice in app/lib/billing.ts:42"
      })
    );
    await expect(args.onFilePathClick).toHaveBeenCalledWith(
      "app/lib/billing.ts",
      42,
      31
    );

    // The framework frames are folded.
    const framework = canvas.getByRole("button", {
      name: "4 framework frames"
    });
    await expect(framework).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(framework);
    await waitFor(async () =>
      expect(canvas.getByText(/at workLoopSync/)).toBeVisible()
    );

    await expect(
      canvas.getByRole("button", { name: "Copy stack trace" })
    ).toBeVisible();

    // Keyboard: the line closes the frames.
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
  }
};

export const Closed: Story = {
  args: { trace: STACK }
};

export const Composed: Story = {
  render: () => (
    <StackTrace trace={STACK} defaultOpen={true}>
      <StackTrace.Header>
        <StackTrace.Error>
          <StackTrace.ErrorType />
        </StackTrace.Error>
        <StackTrace.Actions>
          <StackTrace.CopyButton />
        </StackTrace.Actions>
      </StackTrace.Header>
      <StackTrace.Content>
        <StackTrace.Frames showInternalFrames={false} />
      </StackTrace.Content>
    </StackTrace>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Failed: TypeError:" })
    ).toBeVisible();
    // Without `onFilePathClick`, frames are plain lines.
    await expect(
      canvas.getByText("InvoiceRow in app/components/invoice-row.tsx:18")
    ).toBeVisible();
    await expect(
      canvas.queryByRole("button", { name: /InvoiceRow/ })
    ).toBeNull();
    await expect(canvas.queryByText(/framework frames/)).toBeNull();
  }
};

export const MessageOnly: Story = {
  args: {
    trace: "Error: ENOENT: no such file or directory, open '.env.local'",
    defaultOpen: true
  }
};

const SEED_STACK = `TypeError: Cannot read properties of undefined (reading 'email')
    at seedUsers (prisma/seed.ts:27:34)
    at main (prisma/seed.ts:51:9)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object.transformer (node_modules/tsx/dist/register.cjs:3:1104)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)`;

// Two tool calls: the first one succeeds, the second fails after a while.
const ToolRun = () => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFailed(true), 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Trace>
      <Trace.Collapsible>
        <Trace.Collapsible.Trigger>
          <Trace.Line>
            <Trace.Icon>
              <Console />
            </Trace.Icon>
            <Trace.Title>Ran pnpm prisma migrate reset --skip-seed</Trace.Title>
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>
          <CodeBlock allowCopy={false} margin={0}>
            <Pre color="ink">
              <code>{"Database reset successful"}</code>
            </Pre>
          </CodeBlock>
        </Trace.Collapsible.Content>
      </Trace.Collapsible>
      {failed ? (
        <StackTrace trace={SEED_STACK} />
      ) : (
        <Trace.Line status="running">
          <Trace.Icon>
            <Loading />
          </Trace.Icon>
          <Trace.Title>Running pnpm prisma db seed</Trace.Title>
        </Trace.Line>
      )}
    </Trace>
  );
};

export const InToolRun: Story = {
  render: () => <ToolRun />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Running pnpm prisma db seed")).toBeVisible();
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /^Failed: TypeError/ })
        ).toHaveAttribute("aria-expanded", "false"),
      { timeout: 5000 }
    );
  }
};
