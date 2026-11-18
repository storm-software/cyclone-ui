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
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { File } from "./File";

const meta: Meta<typeof File> = {
  title: "Display/File",
  component: File,
  tags: ["autodocs"],
  args: {
    id: 1,
    status: "initialized",
    name: "sample.svg",
    size: 1024,
    lastModified: 1_762_300_800_000,
    mimeType: "image/svg+xml",
    uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100'%3E%3Crect width='400' height='100' fill='%23424264'/%3E%3C/svg%3E"
  },
  render: (args: any) => (
    <View backgroundColor="background" padding={24} width={500} maxWidth="100%">
      <File {...args} />
    </View>
  )
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Removable: Story = {
  args: { onRemove: () => {} }
};

export const Disabled: Story = {
  args: { disabled: true, onRemove: () => {} }
};

export const SmallSize: Story = { args: { controlSize: "sm" } };

export const LargeSize: Story = { args: { controlSize: "lg" } };

export const UploadProgress: Story = {
  args: { progress: 42, onRemove: fn(), onCancel: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("progressbar", { name: "Uploading sample.svg" })
    ).toBeInTheDocument();
    // NumberFlow renders its digits in a shadow root, labelled by value.
    await expect(canvas.getByRole("img", { name: "42" })).toBeInTheDocument();

    // The remove button cancels the upload instead.
    await userEvent.click(
      canvas.getByRole("button", { name: "Cancel upload of sample.svg" })
    );
    await expect(args.onCancel).toHaveBeenCalledTimes(1);
    await expect(args.onRemove).not.toHaveBeenCalled();
  }
};

export const UploadFailed: Story = {
  args: {
    progress: 60,
    status: "failed",
    issues: [
      {
        code: "upload",
        type: "danger",
        message: "The server rejected sample.svg"
      }
    ],
    onRemove: fn()
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("alert")).toHaveTextContent(
      "The server rejected sample.svg"
    );
    await expect(canvas.queryByRole("progressbar")).not.toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: "Remove sample.svg" })
    ).toBeInTheDocument();
  }
};

export const UploadFailedDefaultMessage: Story = {
  args: { status: "failed", onRemove: fn() },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("alert")).toHaveTextContent(
      "Upload failed"
    );
  }
};

export const UploadComplete: Story = {
  args: { progress: 100, status: "uploaded" },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).queryByRole("progressbar")
    ).not.toBeInTheDocument();
    // Only an upload finishing shows the success state.
    await expect(
      within(canvasElement).queryByRole("status")
    ).not.toBeInTheDocument();
  }
};

export const UploadSucceeded: Story = {
  render: (args: any) => {
    const [progress, setProgress] = useState(90);
    useEffect(() => {
      const timeout = setTimeout(() => setProgress(100), 500);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <View
        backgroundColor="background"
        padding={24}
        width={500}
        maxWidth="100%">
        <File {...args} progress={progress} />
      </View>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      await canvas.findByRole("status", {}, { timeout: 2000 })
    ).toHaveTextContent("Upload complete");
    await expect(canvas.queryByRole("progressbar")).not.toBeInTheDocument();
    // The success state is brief.
    await waitFor(
      async () => expect(canvas.queryByRole("status")).not.toBeInTheDocument(),
      { timeout: 5000 }
    );
  }
};

export const SimulatedUpload: Story = {
  render: (args: any) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 5));
      }, 300);

      return () => clearInterval(interval);
    }, []);

    return (
      <View
        backgroundColor="background"
        padding={24}
        width={500}
        maxWidth="100%">
        <File {...args} progress={progress} onRemove={() => {}} />
      </View>
    );
  }
};
