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

import { BodyText } from "@cyclone-ui/body-text";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type { SourcesProps } from "./Sources";
import { Sources } from "./Sources";

const meta: Meta<SourcesProps> = {
  title: "AI/Sources",
  component: Sources,
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
type Story = StoryObj<SourcesProps>;

const SOURCES = [
  {
    url: "https://docs.astro.build/en/install-and-setup/",
    title: "Install Astro | docs.astro.build"
  },
  {
    url: "https://www.npmjs.com/package/create-astro",
    title: "create-astro | npmjs.com"
  },
  { url: "https://pnpm.io/cli/create", title: "pnpm create | pnpm.io" }
];

export const Base: Story = {
  args: { onOpenChange: fn() },
  render: args => (
    <Sources {...args}>
      <Sources.Trigger count={SOURCES.length} />
      <Sources.Content>
        {SOURCES.map(source => (
          <Sources.Source
            key={source.url}
            href={source.url}
            title={source.title}
          />
        ))}
      </Sources.Content>
    </Sources>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Used 3 sources/ });

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(args.onOpenChange).toHaveBeenCalledWith(true);

    const link = await canvas.findByRole("link", { name: /create-astro/ });
    await waitFor(async () => expect(link).toBeVisible());
    await expect(link).toHaveAttribute(
      "href",
      "https://www.npmjs.com/package/create-astro"
    );
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAccessibleName(
      "create-astro | npmjs.com (opens in a new tab)"
    );

    // Keyboard: the trigger closes the list again.
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  }
};

export const Open: Story = {
  render: () => (
    <Sources defaultOpen={true}>
      <Sources.Trigger count={SOURCES.length} />
      <Sources.Content>
        {SOURCES.map(source => (
          <Sources.Source
            key={source.url}
            href={source.url}
            title={source.title}
          />
        ))}
      </Sources.Content>
    </Sources>
  )
};

export const Single: Story = {
  render: () => (
    <Sources defaultOpen={true}>
      <Sources.Trigger count={1} />
      <Sources.Content>
        <Sources.Source href="https://www.typescriptlang.org/tsconfig/#strict" />
      </Sources.Content>
    </Sources>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Used 1 source" })
    ).toBeVisible();
    // Without a title, the link is named by the URL's hostname.
    await expect(
      canvas.getByRole("link", { name: /^typescriptlang\.org/ })
    ).toBeVisible();
  }
};

const REPLY =
  "Run pnpm create astro@latest and follow the prompts. It scaffolds the project and installs the dependencies.";

// The reply streams in, then its sources arrive one at a time. The agent
// cites the first page twice, so the sources are deduped by URL.
const StreamingReply = () => {
  const [length, setLength] = useState(0);
  const [cited, setCited] = useState(0);
  const parts = [SOURCES[0]!, ...SOURCES];
  const done = length >= REPLY.length;

  useEffect(() => {
    if (done && cited >= parts.length) return;
    const timer = setTimeout(
      () =>
        done ? setCited(value => value + 1) : setLength(value => value + 8),
      done ? 200 : 30
    );

    return () => clearTimeout(timer);
  }, [cited, done, length, parts.length]);

  const sources = parts
    .slice(0, cited)
    .filter(
      (source, index, all) =>
        all.findIndex(other => other.url === source.url) === index
    );

  return (
    <View gap="4xl">
      <BodyText size="sm">{REPLY.slice(0, length)}</BodyText>
      {sources.length > 0 && (
        <Sources>
          <Sources.Trigger count={sources.length} />
          <Sources.Content>
            {sources.map(source => (
              <Sources.Source
                key={source.url}
                href={source.url}
                title={source.title}
              />
            ))}
          </Sources.Content>
        </Sources>
      )}
    </View>
  );
};

export const Streaming: Story = {
  render: () => <StreamingReply />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: "Used 3 sources" })
        ).toBeVisible(),
      { timeout: 10_000 }
    );
  }
};
