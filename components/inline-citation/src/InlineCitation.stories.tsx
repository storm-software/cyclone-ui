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
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";
import type { InlineCitationProps } from "./InlineCitation";
import { InlineCitation } from "./InlineCitation";

const meta: Meta<InlineCitationProps> = {
  title: "AI/InlineCitation",
  component: InlineCitation,
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
type Story = StoryObj<InlineCitationProps>;

interface Source {
  url: string;
  title: string;
  description: string;
  quote?: string;
}

const SOURCES = {
  streaming: {
    url: "https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming",
    title: "Linking and Navigating",
    description: "How the App Router streams a route to the browser."
  },
  suspense: {
    url: "https://react.dev/reference/react/Suspense",
    title: "<Suspense>",
    description: "Display a fallback until its children have finished loading.",
    quote:
      "React will display your loading fallback until all the code and data needed by the children has been loaded."
  },
  serverComponents: {
    url: "https://react.dev/reference/rsc/server-components",
    title: "Server Components",
    description: "Components that render ahead of time, on the server."
  },
  chunked: {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Transfer-Encoding",
    title: "Transfer-Encoding",
    description: "Send a response as a series of chunks."
  }
} satisfies Record<string, Source>;

const Citation = ({
  source,
  onOpenChange
}: {
  source: Source;
  onOpenChange?: (open: boolean) => void;
}) => (
  <InlineCitation.Card onOpenChange={onOpenChange}>
    <InlineCitation.Card.Trigger sources={[source.url]} />
    <InlineCitation.Card.Body>
      <InlineCitation.Source
        title={source.title}
        url={source.url}
        description={source.description}
      />
    </InlineCitation.Card.Body>
  </InlineCitation.Card>
);

const onOpenChange = fn();

export const Base: Story = {
  render: () => (
    <View gap="2xl">
      <BodyText size="sm">
        Next.js streams a route in chunks, so the page shows up before every
        request finishes.
        <Citation source={SOURCES.streaming} onOpenChange={onOpenChange} />
      </BodyText>
      <BodyText size="sm">
        Server Components help here, because their code never ships to the
        browser.
        <Citation source={SOURCES.serverComponents} /> It all runs over chunked
        transfer encoding, so there is nothing extra to set up.
        <Citation source={SOURCES.chunked} />
      </BodyText>
    </View>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "nextjs.org" });

    await step("Hover opens the card", async () => {
      await userEvent.hover(trigger);
      await waitFor(async () =>
        expect(screen.getByText("Linking and Navigating")).toBeVisible()
      );
      await expect(onOpenChange).toHaveBeenLastCalledWith(true);
      // Hovering doesn't move focus.
      await expect(document.body).toHaveFocus();
      await userEvent.unhover(trigger);
      await waitFor(
        async () =>
          expect(screen.queryByText("Linking and Navigating")).toBeNull(),
        { timeout: 3000 }
      );
    });

    await step(
      "Keyboard focus opens it, Enter moves in, Escape returns",
      async () => {
        await userEvent.tab();
        await expect(trigger).toHaveFocus();
        await waitFor(async () =>
          expect(screen.getByText("Linking and Navigating")).toBeVisible()
        );
        await userEvent.keyboard("{Enter}");
        const link = screen.getByRole("link", { name: /nextjs\.org/ });
        await waitFor(async () => expect(link).toHaveFocus());
        await expect(link).toHaveAttribute("target", "_blank");
        await expect(link).toHaveAccessibleName(
          "nextjs.org (opens in a new tab)"
        );
        await userEvent.keyboard("{Escape}");
        await waitFor(async () =>
          expect(screen.queryByText("Linking and Navigating")).toBeNull()
        );
        await expect(trigger).toHaveFocus();
      }
    );
  }
};

const CITED = [SOURCES.suspense, SOURCES.streaming, SOURCES.serverComponents];

export const Carousel: Story = {
  render: () => (
    <BodyText size="sm">
      Wrap a slow part of the page in a Suspense boundary and{" "}
      <InlineCitation>
        <InlineCitation.Text>
          React sends the fallback first, then streams the finished HTML into
          the same response
        </InlineCitation.Text>
        <InlineCitation.Card>
          <InlineCitation.Card.Trigger
            sources={CITED.map(source => source.url)}
          />
          <InlineCitation.Card.Body>
            <InlineCitation.Carousel>
              <InlineCitation.Carousel.Header />
              <InlineCitation.Carousel.Content>
                {CITED.map(source => (
                  <InlineCitation.Carousel.Item key={source.url}>
                    <InlineCitation.Source
                      title={source.title}
                      url={source.url}
                      description={source.description}
                    />
                    {"quote" in source ? (
                      <InlineCitation.Quote>
                        {source.quote}
                      </InlineCitation.Quote>
                    ) : null}
                  </InlineCitation.Carousel.Item>
                ))}
              </InlineCitation.Carousel.Content>
            </InlineCitation.Carousel>
          </InlineCitation.Card.Body>
        </InlineCitation.Card>
      </InlineCitation>
      , with no extra request from the browser.
    </BodyText>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The first source's hostname and a count of the rest.
    const trigger = canvas.getByRole("button", { name: "react.dev +2" });

    // A press (touch) opens it, and a second press keeps it open.
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await waitFor(async () => {
      await expect(screen.getByText("1/3")).toBeVisible();
      await expect(screen.getByText("<Suspense>")).toBeVisible();
    });

    await userEvent.click(screen.getByRole("button", { name: "Next source" }));
    await expect(screen.getByText("2/3")).toBeVisible();
    await waitFor(async () =>
      expect(screen.getByText("Linking and Navigating")).toBeVisible()
    );

    // Wraps around at the ends.
    await userEvent.click(
      screen.getByRole("button", { name: "Previous source" })
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Previous source" })
    );
    await expect(screen.getByText("3/3")).toBeVisible();
    await waitFor(async () =>
      expect(screen.getByText("Server Components")).toBeVisible()
    );
  }
};

export const Open: Story = {
  render: () => (
    <View minHeight={240}>
      <BodyText size="sm">
        A loading.tsx file does the same for a whole route segment.
        <InlineCitation.Card defaultOpen={true}>
          <InlineCitation.Card.Trigger sources={[SOURCES.suspense.url]} />
          <InlineCitation.Card.Body>
            <InlineCitation.Source
              title={SOURCES.suspense.title}
              url={SOURCES.suspense.url}
              description={SOURCES.suspense.description}
            />
            <InlineCitation.Quote>
              {SOURCES.suspense.quote}
            </InlineCitation.Quote>
          </InlineCitation.Card.Body>
        </InlineCitation.Card>
      </BodyText>
    </View>
  )
};
