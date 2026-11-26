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

import { Button } from "@cyclone-ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import type { FileViewerDialogProps } from "./FileViewerDialog";
import { FileViewerDialog } from "./FileViewerDialog";

// File Viewer's English demo files, pinned to a commit.
const SAMPLES =
  "https://raw.githubusercontent.com/flyfish-dev/file-viewer/3d8a37c7fd3114b3f85bdc70fdced39765c55bcc/apps/viewer-demo/public/example/en";

const meta: Meta<typeof FileViewerDialog> = {
  title: "Containers/FileViewerDialog",
  component: FileViewerDialog,
  tags: ["autodocs"],
  args: {
    name: "sample.svg",
    mimeType: "image/svg+xml",
    size: 1024,
    uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23424264'/%3E%3Ccircle cx='200' cy='150' r='80' fill='%2390a0ff'/%3E%3C/svg%3E"
  },
  render: (args: FileViewerDialogProps) => (
    <FileViewerDialog {...args}>
      <Button>
        <Button.Text>Open file</Button.Text>
      </Button>
    </FileViewerDialog>
  )
} satisfies Meta<typeof FileViewerDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Open file" })
    );

    // Named by its title.
    const dialog = await screen.findByRole("dialog", { name: "sample.svg" });
    // `waitFor`: the dialog fades in.
    await waitFor(async () =>
      expect(within(dialog).getByText(/image\/svg\+xml/)).toBeVisible()
    );
    // `Button` renders an `<a>` but keeps its button role.
    await expect(
      within(dialog).getByText("Download").closest("a")
    ).toHaveAttribute("download", "sample.svg");

    await userEvent.click(
      within(dialog).getByRole("button", { name: "Close" })
    );
    await waitFor(async () =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  }
};

export const PlainText: Story = {
  args: {
    name: "notes.md",
    mimeType: "text/markdown",
    size: 96,
    uri: `data:text/markdown,${encodeURIComponent(
      "# Release notes\n\n- Files open in a dialog.\n- Office files preview on the web.\n"
    )}`,
    defaultOpen: true
  },
  play: async () => {
    await waitFor(async () =>
      expect(screen.getByText(/Files open in a dialog\./)).toBeVisible()
    );
  }
};

export const Pdf: Story = {
  args: {
    name: "tracemonkey.pdf",
    mimeType: "application/pdf",
    size: 1_016_315,
    uri: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
    defaultOpen: true
  },
  play: async () => {
    // The page buttons show once the document loads.
    await expect(
      await screen.findByText("Page 1 of 14", {}, { timeout: 20_000 })
    ).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Next page" }));
    await expect(screen.getByText("Page 2 of 14")).toBeVisible();
  }
};

export const Word: Story = {
  args: {
    name: "quarterly-operations-report.docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    size: 83_054,
    uri: `${SAMPLES}/quarterly-operations-report.docx`,
    defaultOpen: true
  }
};

export const Excel: Story = {
  args: {
    name: "financial-sample.xlsx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    size: 83_418,
    uri: `${SAMPLES}/financial-sample.xlsx`,
    defaultOpen: true
  }
};

export const PowerPoint: Story = {
  args: {
    name: "sample-presentation.pptx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    size: 1_947_635,
    uri: `${SAMPLES}/sample-presentation.pptx`,
    defaultOpen: true
  }
};

export const Video: Story = {
  args: {
    name: "flower.webm",
    mimeType: "video/webm",
    size: 554_058,
    uri: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    defaultOpen: true
  }
};

export const Unsupported: Story = {
  args: {
    name: "archive.zip",
    mimeType: "application/zip",
    size: 2_048_000,
    uri: "data:application/zip;base64,",
    defaultOpen: true
  },
  play: async () => {
    await waitFor(async () =>
      expect(screen.getByText(/There's no preview for this file/)).toBeVisible()
    );
  }
};
