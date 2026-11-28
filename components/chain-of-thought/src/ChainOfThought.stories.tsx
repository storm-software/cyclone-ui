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
import { Search } from "@cyclone-ui/icons";
import { StackIllustration } from "@cyclone-ui/illustrations";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { ChainOfThoughtProps } from "./ChainOfThought";
import { ChainOfThought } from "./ChainOfThought";

const meta: Meta<ChainOfThoughtProps> = {
  title: "AI/ChainOfThought",
  component: ChainOfThought,
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
type Story = StoryObj<ChainOfThoughtProps>;

const LOG = "install    41s\ncompile    38s\nimages   3m 52s";
const RESULTS = [
  "https://nextjs.org/docs/app/api-reference/components/image",
  "https://vercel.com/docs/deployments/troubleshoot-a-build"
];
const FILES = ["next.config.ts", "scripts/optimize-images.ts"];

const BuildLog = ({ text }: { text: string }) => (
  <CodeBlock allowCopy={false} margin={0}>
    <Pre>
      <code>{text}</code>
    </Pre>
  </CodeBlock>
);

const SearchResults = () => (
  <ChainOfThought.SearchResults>
    {RESULTS.map(url => (
      <ChainOfThought.SearchResult key={url}>
        {new URL(url).hostname}
      </ChainOfThought.SearchResult>
    ))}
  </ChainOfThought.SearchResults>
);

const Files = () => (
  <ChainOfThought.SearchResults>
    {FILES.map(file => (
      <ChainOfThought.SearchResult key={file}>{file}</ChainOfThought.SearchResult>
    ))}
  </ChainOfThought.SearchResults>
);

// `[running, done]` labels per step; a step takes 700ms, then the answer starts.
const STEPS = [
  ["Reading the build log for dpl_8Kx2", "Read the build log for dpl_8Kx2"],
  [
    "Searching the web for next.js image cache key",
    "Searched the web for next.js image cache key"
  ],
  ["Searching the code for cacheKey", "Searched the code for cacheKey"]
] as const;

const StreamingChain = () => {
  const [done, setDone] = useState(0);
  const answering = done >= STEPS.length;

  useEffect(() => {
    if (answering) return;
    const timer = setTimeout(() => setDone(value => value + 1), 700);

    return () => clearTimeout(timer);
  }, [answering, done]);

  const label = (index: number) => STEPS[index]![index < done ? 1 : 0];
  const status = (index: number) => (index < done ? "complete" : "active");

  return (
    // Running until the answer starts, also between steps.
    <ChainOfThought isStreaming={!answering}>
      <ChainOfThought.Header />
      <ChainOfThought.Content>
        <ChainOfThought.Step label={label(0)} status={status(0)} defaultOpen={true}>
          {done > 0 && <BuildLog text={LOG} />}
        </ChainOfThought.Step>
        {done >= 1 && (
          <ChainOfThought.Step label={label(1)} status={status(1)}>
            {done > 1 && <SearchResults />}
          </ChainOfThought.Step>
        )}
        {done >= 2 && (
          <ChainOfThought.Step label={label(2)} status={status(2)}>
            {done > 2 && <Files />}
          </ChainOfThought.Step>
        )}
      </ChainOfThought.Content>
    </ChainOfThought>
  );
};

/**
 * Each step appears as the agent takes it. The summary reads "Researching"
 * and stays open until the answer starts, then sums up and closes.
 */
export const Streaming: Story = {
  render: () => <StreamingChain />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Researching" })
    ).toHaveAttribute("aria-expanded", "true");
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: "Researched in 3 steps" })
        ).toHaveAttribute("aria-expanded", "false"),
      { timeout: 10_000 }
    );
  }
};

/** A failed step is counted in the summary, which turns the danger color. */
export const Failed: Story = {
  args: { defaultOpen: true },
  render: args => (
    <ChainOfThought {...args}>
      <ChainOfThought.Header />
      <ChainOfThought.Content>
        <ChainOfThought.Step label="Read the build log for dpl_8Kx2" />
        <ChainOfThought.Step
          label="Failed to search the web for next.js image cache key"
          status="error">
          <BuildLog text="Error: The search service timed out after 30s." />
        </ChainOfThought.Step>
        <ChainOfThought.Step label="Searched the code for cacheKey">
          <Files />
        </ChainOfThought.Step>
      </ChainOfThought.Content>
    </ChainOfThought>
  ),
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByRole("button", {
        name: "Researched in 3 steps, 1 failed"
      })
    ).toHaveAttribute("aria-expanded", "true");
  }
};

/**
 * Finished and closed. Steps keep their open state while the summary is
 * closed, and leave the tab order.
 */
export const Done: Story = {
  args: { onOpenChange: fn() },
  render: args => (
    <ChainOfThought {...args}>
      <ChainOfThought.Header />
      <ChainOfThought.Content>
        <ChainOfThought.Step label="Read the build log for dpl_8Kx2">
          <BuildLog text={LOG} />
        </ChainOfThought.Step>
        <ChainOfThought.Step
          label="Searched the web for next.js image cache key"
          icon={<Search />}
          description="2 results">
          <SearchResults />
        </ChainOfThought.Step>
      </ChainOfThought.Content>
    </ChainOfThought>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByRole("button", {
      name: "Researched in 2 steps"
    });

    await expect(summary).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(summary);
    await expect(args.onOpenChange).toHaveBeenCalledWith(true);

    const step = await canvas.findByRole("button", { name: /Searched the web/ });
    await userEvent.click(step);
    await waitFor(async () =>
      expect(canvas.getByText("nextjs.org")).toBeVisible()
    );

    // Closed and opened again, the step is still open.
    await userEvent.click(summary);
    await expect(step.closest("[inert]")).not.toBeNull();
    await userEvent.click(summary);
    await expect(step.closest("[inert]")).toBeNull();
    await expect(step).toHaveAttribute("aria-expanded", "true");
  }
};

/**
 * Every step status, an image and a custom summary title. A pending step
 * keeps the summary running.
 */
export const Steps: Story = {
  args: { defaultOpen: true },
  render: args => (
    <ChainOfThought {...args}>
      <ChainOfThought.Header>Planning the layout</ChainOfThought.Header>
      <ChainOfThought.Content>
        <ChainOfThought.Step label="Sketched the page sections" defaultOpen={true}>
          <ChainOfThought.Image caption="The stack of sections, top to bottom.">
            <StackIllustration
              palette={{ plate: "surface" }}
              width="100%"
              height={160}
            />
          </ChainOfThought.Image>
        </ChainOfThought.Step>
        <ChainOfThought.Step label="Choosing the grid" status="active" />
        <ChainOfThought.Step label="Write the responsive styles" status="pending" />
      </ChainOfThought.Content>
    </ChainOfThought>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Planning the layout" })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByText(/stack of sections/).closest("figure")
    ).toBeVisible();
  }
};
