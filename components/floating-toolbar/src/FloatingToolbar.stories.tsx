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
import { Button } from "@cyclone-ui/button";
import {
  ChevronDown,
  Github,
  Magnify,
  MenuFoldLeft,
  Moon,
  Notebook,
  Sunny
} from "@cyclone-ui/icons";
import { ToggleGroup } from "@cyclone-ui/toggle-group";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { FloatingToolbar } from "./FloatingToolbar";

const items = [
  { title: "Introduction", url: "#introduction", depth: 2 },
  { title: "Installation", url: "#installation", depth: 2 },
  { title: "Usage", url: "#usage", depth: 2 },
  { title: "Layouts", url: "#layouts", depth: 3 },
  { title: "Theming", url: "#theming", depth: 2 }
] as const;

const sections = [
  ["introduction", "Introduction", "h2"],
  ["installation", "Installation", "h2"],
  ["usage", "Usage", "h2"],
  ["layouts", "Layouts", "h3"],
  ["theming", "Theming", "h2"]
] as const;

const meta: Meta<typeof FloatingToolbar> = {
  title: "Docs/FloatingToolbar",
  component: FloatingToolbar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  render: args => (
    <>
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 160px",
          fontFamily: "inherit"
        }}>
        <h1>Overview</h1>
        <p>An introduction to the framework.</p>
        {sections.map(([id, title, Tag]) => (
          <section key={id} style={{ minHeight: 480 }}>
            <Tag id={id}>{title}</Tag>
            <p>
              This is a live preview of the layout. Open the pages in the
              sidebar, search for content, or switch the theme: it works like
              your docs site.
            </p>
          </section>
        ))}
      </main>

      <FloatingToolbar {...args}>
        <FloatingToolbar.Row>
          <View
            flexDirection="row"
            alignItems="center"
            gap="lg"
            paddingHorizontal="lg"
            // Stays beside the header when the table of contents expands.
            alignSelf="flex-end"
            height={28}>
            <View
              width={20}
              height={20}
              borderRadius={1000}
              theme="brand"
              backgroundColor="primary"
            />
            <BodyText size="sm" fontWeight="semibold">
              My Docs
            </BodyText>
          </View>
          <FloatingToolbar.Divider />
          <FloatingToolbar.TableOfContents items={items} />
        </FloatingToolbar.Row>

        <FloatingToolbar.Row>
          <Button variant="tertiary" size="sm">
            <Button.Icon>
              <Notebook />
            </Button.Icon>
            <Button.Text flexGrow={1}>Framework</Button.Text>
            <Button.Icon>
              <ChevronDown />
            </Button.Icon>
          </Button>
          <FloatingToolbar.Divider />
          <Button variant="ghost" size="sm" circular={true} tooltip="GitHub">
            <Button.Icon>
              <Github />
            </Button.Icon>
          </Button>
          <Button variant="ghost" size="sm" circular={true} tooltip="Search">
            <Button.Icon>
              <Magnify />
            </Button.Icon>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            circular={true}
            tooltip="Collapse sidebar">
            <Button.Icon>
              <MenuFoldLeft />
            </Button.Icon>
          </Button>
          <FloatingToolbar.Divider />
          <ToggleGroup defaultValue="dark" allowEmpty={false} size="sm">
            <ToggleGroup.Item value="light" aria-label="Light theme">
              <Sunny size={16} />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="dark" aria-label="Dark theme">
              <Moon size={16} />
            </ToggleGroup.Item>
          </ToggleGroup>
        </FloatingToolbar.Row>
      </FloatingToolbar>
    </>
  )
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Solid: Story = {
  args: { glass: false }
};

/** Without the tab on the left side, the toolbar stays where it is placed. */
export const NotDraggable: Story = {
  args: { draggable: false }
};

export const TableOfContentsOnly: Story = {
  render: args => (
    <>
      <main
        style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 160px" }}>
        {sections.map(([id, title, Tag]) => (
          <section key={id} style={{ minHeight: 480 }}>
            <Tag id={id}>{title}</Tag>
            <p>Scroll to move the active heading and its progress ring.</p>
          </section>
        ))}
      </main>
      <FloatingToolbar {...args}>
        <FloatingToolbar.Row>
          <FloatingToolbar.TableOfContents items={items} />
        </FloatingToolbar.Row>
      </FloatingToolbar>
    </>
  )
};

/** Pressing outside the open table of contents closes it. */
export const ClosesOnOutsidePress: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", { name: /On this page/ });

    await userEvent.click(header);
    await waitFor(async () =>
      expect(header.getAttribute("aria-expanded")).toBe("true")
    );

    // Inside: a link in the list keeps it open.
    await userEvent.click(canvas.getByRole("link", { name: "Installation" }));
    await expect(header.getAttribute("aria-expanded")).toBe("true");

    await userEvent.click(
      canvas.getByText("An introduction to the framework.")
    );
    await waitFor(async () =>
      expect(header.getAttribute("aria-expanded")).toBe("false")
    );
  }
};

/** Escape closes the open table of contents and returns focus to its header. */
export const ClosesOnEscape: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", { name: /On this page/ });

    await userEvent.click(header);
    await waitFor(async () =>
      expect(header.getAttribute("aria-expanded")).toBe("true")
    );

    canvas.getByRole("link", { name: "Installation" }).focus();
    await userEvent.keyboard("{Escape}");
    await waitFor(async () =>
      expect(header.getAttribute("aria-expanded")).toBe("false")
    );
    await expect(header).toHaveFocus();
  }
};

/** Opening at the end must agree with the already-mounted toolbar header. */
export const OpensAtScrollEnd: Story = {
  render: args => (
    <>
      <div
        data-testid="reading-area"
        style={{ height: 400, overflowY: "auto" }}>
        <main style={{ padding: "24px 24px 40px" }}>
          {sections.map(([id, title, Tag], index) => (
            <section
              key={id}
              style={{ minHeight: index === sections.length - 1 ? 80 : 240 }}>
              <Tag id={id}>{title}</Tag>
            </section>
          ))}
        </main>
      </div>
      <FloatingToolbar {...args}>
        <FloatingToolbar.Row>
          <FloatingToolbar.TableOfContents items={items} />
        </FloatingToolbar.Row>
      </FloatingToolbar>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const readingArea = canvas.getByTestId("reading-area");
    readingArea.scrollTop = readingArea.scrollHeight;

    const header = await canvas.findByRole("button", {
      name: "On this page: Theming"
    });
    await userEvent.click(header);
    await waitFor(() =>
      expect(canvas.getByRole("link", { name: "Theming" })).toHaveAttribute(
        "aria-current",
        "location"
      )
    );

    // Reopening mounts a fresh list without another scroll event.
    await userEvent.click(header);
    await userEvent.click(header);
    await waitFor(() =>
      expect(canvas.getByRole("link", { name: "Theming" })).toHaveAttribute(
        "aria-current",
        "location"
      )
    );
  }
};
