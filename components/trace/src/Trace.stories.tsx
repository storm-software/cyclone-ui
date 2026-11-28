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
import { Dialog } from "@cyclone-ui/dialog";
import {
  AlertCircle,
  ChevronRight,
  Circle,
  ConfirmCircle,
  Console,
  Document,
  Edit,
  ExternalLink,
  Loading,
  Search,
  Web
} from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import type { TraceProps } from "./Trace";
import { Trace } from "./Trace";

const meta: Meta<TraceProps> = {
  title: "AI/Trace",
  component: Trace,
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
type Story = StoryObj<TraceProps>;

export const Base: Story = {
  render: () => (
    <Trace>
      <Trace.Line>
        <Trace.Icon>
          <Search />
        </Trace.Icon>
        <Trace.Title>Searched for minimumReleaseAge</Trace.Title>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <Document />
        </Trace.Icon>
        <Trace.Title>Read pnpm-workspace.yaml</Trace.Title>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <Console />
        </Trace.Icon>
        <Trace.Title>Ran pnpm install</Trace.Title>
      </Trace.Line>
    </Trace>
  )
};

export const Status: Story = {
  render: () => (
    <Trace>
      <Trace.Line>
        <Trace.Icon>
          <ConfirmCircle />
        </Trace.Icon>
        <Trace.Title>Ran pnpm install</Trace.Title>
      </Trace.Line>
      <Trace.Line status="error">
        <Trace.Icon>
          <AlertCircle />
        </Trace.Icon>
        <Trace.Title>Failed to run pnpm lint</Trace.Title>
      </Trace.Line>
      <Trace.Line status="running">
        <Trace.Icon>
          <Loading />
        </Trace.Icon>
        <Trace.Title>Running pnpm build</Trace.Title>
      </Trace.Line>
      <Trace.Line status="pending">
        <Trace.Icon>
          <Circle />
        </Trace.Icon>
        <Trace.Title>Run pnpm test</Trace.Title>
      </Trace.Line>
    </Trace>
  )
};

export const Description: Story = {
  render: () => (
    <Trace>
      <Trace.Line>
        <Trace.Icon>
          <Edit />
        </Trace.Icon>
        <Trace.Title>
          Edited components/settings/notification-preferences-form.tsx
        </Trace.Title>
        <Trace.Description fontFamily="code">+48 −12</Trace.Description>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <Console />
        </Trace.Icon>
        <Trace.Title>Ran pnpm test</Trace.Title>
        <Trace.Description>14s</Trace.Description>
      </Trace.Line>
      <Trace.Line>
        <Trace.Icon>
          <Search />
        </Trace.Icon>
        <Trace.Title>Searched for useChat</Trace.Title>
        <Trace.Description>8 results</Trace.Description>
      </Trace.Line>
    </Trace>
  )
};

export const Collapsible: Story = {
  render: () => (
    <Trace>
      <Trace.Collapsible>
        <Trace.Collapsible.Trigger>
          <Trace.Line>
            <Trace.Icon>
              <Console />
            </Trace.Icon>
            <Trace.Title>Ran node --version</Trace.Title>
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>
          <CodeBlock allowCopy={false} margin={0}>
            <Pre>
              <code>{"$ node --version\nv24.18.0"}</code>
            </Pre>
          </CodeBlock>
        </Trace.Collapsible.Content>
      </Trace.Collapsible>
      <Trace.Collapsible defaultOpen={true}>
        <Trace.Collapsible.Trigger>
          <Trace.Line>
            <Trace.Icon>
              <ConfirmCircle />
            </Trace.Icon>
            <Trace.Title>Thought</Trace.Title>
            <Trace.Description>12s</Trace.Description>
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>
          {
            "The build log shows install and compile finish in under a minute.\n\nImage optimization takes almost four, and it reruns on every deploy because the cache key includes the commit hash."
          }
        </Trace.Collapsible.Content>
      </Trace.Collapsible>
    </Trace>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Ran node --version/ });

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await waitFor(async () =>
      expect(canvas.getByText(/v24\.18\.0/)).toBeVisible()
    );

    // The second line starts open.
    await expect(
      canvas.getByRole("button", { name: /Thought/ })
    ).toHaveAttribute("aria-expanded", "true");
  }
};

const REASONING =
  "The deploy log has three phases. Install takes 38s and next build takes 52s, both normal for this repo.\n\nImage optimization takes 3m 50s. It reruns on every deploy because its cache key includes the commit hash, so the cache never hits.";

// Opens while the text streams in and closes when it is done, unless the
// reader opened or closed it.
const StreamingReasoning = () => {
  const [length, setLength] = useState(0);
  const [open, setOpen] = useState<boolean>();
  const running = length < REASONING.length;

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setLength(value => value + 12), 40);

    return () => clearTimeout(timer);
  }, [length, running]);

  return (
    <Trace>
      <Trace.Collapsible open={open ?? running} onOpenChange={setOpen}>
        <Trace.Collapsible.Trigger>
          <Trace.Line status={running ? "running" : undefined}>
            <Trace.Icon>{running ? <Loading /> : <ConfirmCircle />}</Trace.Icon>
            <Trace.Title>{running ? "Thinking" : "Thought for 5s"}</Trace.Title>
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>
          {REASONING.slice(0, length)}
        </Trace.Collapsible.Content>
      </Trace.Collapsible>
    </Trace>
  );
};

export const Streaming: Story = {
  render: () => <StreamingReasoning />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("button", { name: /Thinking/ })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    // Closes on its own once the thinking is done.
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /Thought for 5s/ })
        ).toHaveAttribute("aria-expanded", "false"),
      { timeout: 10_000 }
    );
  }
};

export const Link: Story = {
  render: () => (
    <Trace>
      <Trace.Link href="#read">
        <Trace.Line>
          <Trace.Icon>
            <Document />
          </Trace.Icon>
          <Trace.Title>Read apps/docs/lib/docs.ts</Trace.Title>
          <Trace.Icon>
            <ChevronRight />
          </Trace.Icon>
        </Trace.Line>
      </Trace.Link>
      <Trace.Link
        href="https://docs.astro.build/en/install-and-setup/"
        external={true}>
        <Trace.Line>
          <Trace.Icon>
            <Web />
          </Trace.Icon>
          <Trace.Title>Install Astro | docs.astro.build</Trace.Title>
          <Trace.Icon>
            <ExternalLink />
          </Trace.Icon>
        </Trace.Line>
      </Trace.Link>
    </Trace>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const external = canvas.getByRole("link", { name: /Install Astro/ });

    await expect(external).toHaveAttribute("target", "_blank");
    await expect(external).toHaveAccessibleName(
      "Install Astro | docs.astro.build (opens in a new tab)"
    );
  }
};

const FILES = [
  "apps/docs/lib/docs.ts",
  "apps/docs/lib/components.ts",
  "apps/docs/next.config.mjs",
  "apps/docs/package.json"
];

export const InDialog: Story = {
  render: () => (
    <Trace>
      <Dialog>
        <Dialog.Trigger asChild={true}>
          <Trace.Button>
            <Trace.Line>
              <Trace.Icon>
                <Search />
              </Trace.Icon>
              <Trace.Title>Explored 4 files</Trace.Title>
              <Trace.Icon>
                <ChevronRight />
              </Trace.Icon>
            </Trace.Line>
          </Trace.Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay key="overlay" />
          <Dialog.Container key="content" maxWidth={480} width="100%">
            <Dialog.Heading>Explored 4 files</Dialog.Heading>
            <Dialog.Body>Files read while preparing the response.</Dialog.Body>
            <Trace>
              {FILES.map(file => (
                <Trace.Line key={file}>
                  <Trace.Icon>
                    <Document />
                  </Trace.Icon>
                  <Trace.Title fontFamily="code">{file}</Trace.Title>
                </Trace.Line>
              ))}
            </Trace>
          </Dialog.Container>
        </Dialog.Portal>
      </Dialog>
    </Trace>
  ),
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: /Explored 4 files/ })
    );
    await waitFor(async () =>
      expect(screen.getByText("apps/docs/next.config.mjs")).toBeVisible()
    );
  }
};

const STEPS = [
  "Searched for minimumReleaseAge",
  "Read pnpm-workspace.yaml",
  "Edited pnpm-workspace.yaml"
];

export const Nested: Story = {
  render: () => (
    <Trace>
      <Trace.Collapsible defaultOpen={true}>
        <Trace.Collapsible.Trigger>
          <Trace.Line>
            <Trace.Title>Explored the workspace</Trace.Title>
            <Trace.Description>3 steps</Trace.Description>
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>
          <Trace>
            {STEPS.map(step => (
              <Trace.Line key={step}>
                <Trace.Icon>
                  <ConfirmCircle />
                </Trace.Icon>
                <Trace.Title>{step}</Trace.Title>
              </Trace.Line>
            ))}
            <Trace.Collapsible>
              <Trace.Collapsible.Trigger>
                <Trace.Line status="error">
                  <Trace.Icon>
                    <AlertCircle />
                  </Trace.Icon>
                  <Trace.Title>Failed to run pnpm install</Trace.Title>
                </Trace.Line>
              </Trace.Collapsible.Trigger>
              <Trace.Collapsible.Content>
                {"ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with \"frozen-lockfile\""}
              </Trace.Collapsible.Content>
            </Trace.Collapsible>
          </Trace>
        </Trace.Collapsible.Content>
      </Trace.Collapsible>
    </Trace>
  )
};
