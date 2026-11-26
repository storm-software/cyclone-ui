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
import { expect, fn, waitFor } from "storybook/test";
import type { FileViewerProps } from "./FileViewer";
import { FileViewer } from "./FileViewer";

// File Viewer's English demo files, pinned to a commit.
const SAMPLES =
  "https://raw.githubusercontent.com/flyfish-dev/file-viewer/3d8a37c7fd3114b3f85bdc70fdced39765c55bcc/apps/viewer-demo/public/example/en";

const meta: Meta<typeof FileViewer> = {
  title: "Display/FileViewer",
  component: FileViewer,
  tags: ["autodocs"],
  args: {
    url: `${SAMPLES}/quarterly-operations-report.docx`,
    name: "quarterly-operations-report.docx",
    onEvent: fn()
  },
  render: (args: FileViewerProps) => (
    <View height={640} width="100%" backgroundColor="canvas">
      <FileViewer {...args} data-testid="file-viewer" />
    </View>
  ),
  play: async ({ args, canvas }) => {
    await waitFor(
      async () =>
        expect(args.onEvent).toHaveBeenCalledWith(
          expect.objectContaining({ type: "load-complete" })
        ),
      { timeout: 20_000 }
    );

    const host = canvas.getByTestId("file-viewer");
    const toolbar = (host.shadowRoot ?? host).querySelector(
      '[part~="toolbar"]'
    );
    const elevated = getComputedStyle(host)
      .getPropertyValue("--elevated")
      .trim();
    await expect(toolbar && getComputedStyle(toolbar).backgroundColor).toBe(
      elevated
    );
  }
} satisfies Meta<typeof FileViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Word: Story = {};

export const Excel: Story = {
  args: {
    url: `${SAMPLES}/financial-sample.xlsx`,
    name: "financial-sample.xlsx"
  }
};

export const PowerPoint: Story = {
  args: {
    url: `${SAMPLES}/sample-presentation.pptx`,
    name: "sample-presentation.pptx"
  }
};
