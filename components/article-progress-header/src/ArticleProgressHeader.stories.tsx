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
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ArticleProgressHeader } from "./ArticleProgressHeader";

const TOP_BAR_HEIGHT = 56;
const STRIP_HEIGHT = 46;

const items = [
  { title: "Install", url: "#install", depth: 2 },
  { title: "Quick start", url: "#quick-start", depth: 2 },
  { title: "Options", url: "#options", depth: 2 },
  { title: "Empty states", url: "#empty-states", depth: 2 },
  { title: "React", url: "#react", depth: 2 },
  { title: "Vanilla", url: "#vanilla", depth: 2 },
  { title: "CDN", url: "#cdn", depth: 2 },
  { title: "Figures", url: "#figures", depth: 2 },
  { title: "Theme", url: "#theme", depth: 2 },
  { title: "Accessibility", url: "#accessibility", depth: 2 }
];

const meta: Meta<typeof ArticleProgressHeader> = {
  title: "Docs/ArticleProgressHeader",
  component: ArticleProgressHeader,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: { items, top: TOP_BAR_HEIGHT },
  render: args => (
    <div style={{ background: "var(--canvas)", color: "var(--ink)" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          height: TOP_BAR_HEIGHT,
          paddingInline: 24,
          background: "var(--canvas)"
        }}>
        <BodyText fontWeight="medium">Article</BodyText>
      </div>

      <ArticleProgressHeader {...args} />

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        {items.map((item, index) => (
          <section
            key={item.url}
            id={item.url.slice(1)}
            style={{
              // Lands headings below both sticky bars.
              scrollMarginTop: TOP_BAR_HEIGHT + STRIP_HEIGHT,
              paddingTop: 56,
              minHeight: index === items.length - 1 ? 240 : 420
            }}>
            <BodyText render="h2" fontWeight="medium">
              {item.title}
            </BodyText>
            <BodyText color="subtle">
              Each section is a hash link target. As it reaches the top of the
              page, its link in the strip becomes current and the dot slides
              over to it.
            </BodyText>
          </section>
        ))}
      </main>
    </div>
  )
};

export default meta;

type Story = StoryObj<typeof meta>;

const getNav = (canvasElement: HTMLElement) =>
  within(canvasElement).getByRole("navigation", { name: "On this page" });

const getCurrent = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<HTMLAnchorElement>("nav a[aria-current]");

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const nav = getNav(canvasElement);
    window.scrollTo({ top: 0 });

    await waitFor(() =>
      expect(getCurrent(canvasElement)?.getAttribute("href")).toBe("#install")
    );
    await expect(nav).toHaveStyle({ position: "sticky" });

    // Scrolling the page moves the current link.
    canvasElement
      .querySelector("#options")
      ?.scrollIntoView({ behavior: "instant" });
    await waitFor(() =>
      expect(getCurrent(canvasElement)?.getAttribute("href")).toBe("#options")
    );

    // Pressing a link makes it current right away.
    await userEvent.click(
      within(nav).getByRole("link", { name: "Accessibility" })
    );
    await waitFor(() =>
      expect(getCurrent(canvasElement)?.getAttribute("href")).toBe(
        "#accessibility"
      )
    );
    window.scrollTo({ top: 0 });
  }
};

/** At phone width the strip scrolls sideways and fades the clipped edges. */
export const Narrow: Story = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
  play: async ({ canvasElement }) => {
    const nav = getNav(canvasElement);
    const scroller = nav.firstElementChild as HTMLElement;

    if (scroller.scrollWidth <= scroller.clientWidth) return;

    await waitFor(() => expect(scroller.style.maskImage).toContain("90deg"));

    canvasElement
      .querySelector("#accessibility")
      ?.scrollIntoView({ behavior: "instant" });

    // The current link is scrolled into view.
    await waitFor(async () => {
      const link = getCurrent(canvasElement);
      await expect(link?.getAttribute("href")).toBe("#accessibility");
      await expect(link!.getBoundingClientRect().right).toBeLessThanOrEqual(
        scroller.getBoundingClientRect().right
      );
    });
    window.scrollTo({ top: 0 });
  }
};
