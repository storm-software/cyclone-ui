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
import { PdfDocumentDisplay } from "./PdfDocumentDisplay";

const meta: Meta<typeof PdfDocumentDisplay> = {
  title: "Display/PdfDocumentDisplay",
  component: PdfDocumentDisplay,
  tags: ["autodocs"],
  render: (args: any) => (
    <PdfDocumentDisplay
      {...args}
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      height="375px"
      width="200px"
    />
  )
} satisfies Meta<typeof PdfDocumentDisplay>;

export default meta;

type Story = StoryObj<typeof PdfDocumentDisplay>;

export const Base: Story = {
  args: {}
};
