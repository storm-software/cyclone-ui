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
import { TableOfContents } from "./TableOfContents";

const items = [
  { title: "Overview", url: "#overview", depth: 2 },
  { title: "Hot Keys", url: "#hot-keys", depth: 3 },
  { title: "References", url: "#references", depth: 3 },
  { title: "Custom UI", url: "#custom-ui", depth: 2 },
  { title: "Content Renderer", url: "#content-renderer", depth: 3 }
] as const;

const meta: Meta<typeof TableOfContents> = {
  title: "Docs/TableOfContents",
  component: TableOfContents,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    items,
    children: "On this page"
  },
  decorators: [
    Story => (
      <div style={{ minWidth: 360 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const ScrollTracking: Story = {
  parameters: { layout: "fullscreen" },
  render: args => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(240px, 300px) minmax(0, 1fr)",
        gap: 56,
        width: "min(920px, 100vw)",
        height: 560,
        padding: 40,
        overflowY: "auto"
      }}>
      <aside style={{ position: "sticky", top: 0, alignSelf: "start" }}>
        <TableOfContents {...args} />
      </aside>

      <main style={{ minWidth: 0 }}>
        <section style={{ minHeight: 380 }}>
          <h2 id="overview">Overview</h2>
          <p>
            A table of contents keeps long-form documentation understandable
            without taking readers away from the page.
          </p>
        </section>
        <section style={{ minHeight: 380 }}>
          <h3 id="hot-keys">Hot Keys</h3>
          <p>Use keyboard shortcuts to move through the renderer quickly.</p>
        </section>
        <section style={{ minHeight: 380 }}>
          <h3 id="references">References</h3>
          <p>Review the source material connected to the current document.</p>
        </section>
        <section style={{ minHeight: 380 }}>
          <h2 id="custom-ui">Custom UI</h2>
          <p>Adapt the presentation while retaining document semantics.</p>
        </section>
        <section style={{ minHeight: 520 }}>
          <h3 id="content-renderer">Content Renderer</h3>
          <p>Render structured content using the application theme.</p>
        </section>
      </main>
    </div>
  )
};
