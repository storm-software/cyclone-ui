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

import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { ClientFileResult } from "@cyclone-ui/state";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import { FilePicker } from "./FilePicker";

interface FilePickerValidation {
  onChange: (() => { message: string; type: string }[])[];
}

/** Story-only args consumed by the custom `render` (the Form and Field). */
type FilePickerStoryArgs = GetProps<typeof FilePicker> & {
  defaultValue?: unknown;
  required?: boolean;
  validate?: FilePickerValidation;
};

const meta: Meta<FilePickerStoryArgs> = {
  title: "Form/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  render: (
    { defaultValue, disabled, children, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ filePickerName: defaultValue }}>
      <Field name="filePickerName" {...props} disabled={disabled} width="500px">
        <Field.Label>Label Text</Field.Label>
        <FilePicker
          size={props.size}
          variant={props.variant}
          max={props.max}
          width="500px"
          disabled={disabled}>
          <FilePicker.Files />
          <FilePicker.Trigger>
            <FilePicker.Trigger.Button>{children}</FilePicker.Trigger.Button>
          </FilePicker.Trigger>
        </FilePicker>
      </Field>
    </Form>
  )
} satisfies Meta<FilePickerStoryArgs>;

export default meta;

type Story = StoryObj<FilePickerStoryArgs>;

/**
 * Attach files as a pick from the file dialog would, returning the input.
 *
 * @remarks
 * Not `userEvent.upload`: it patches the input's `value` setter, which then
 * throws when react-dropzone resets the input before opening the dialog, so
 * the story could no longer be clicked afterwards.
 */
const attachFiles = (canvasElement: HTMLElement, names: string[]) => {
  // Story tsconfigs have no DOM lib, so the DOM globals are untyped.
  const { DataTransfer, Event, File } = globalThis as any;
  const input = (canvasElement as any).querySelector('input[type="file"]');
  const transfer = new DataTransfer();
  for (const name of names) {
    transfer.items.add(
      new File([`${name}\n`], name, { type: "application/yaml" })
    );
  }
  input.files = transfer.files;
  input.dispatchEvent(new Event("change", { bubbles: true }));

  return input;
};

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): FilePickerValidation => ({
  onChange: [
    () => [
      {
        message: "This is an example validation message",
        type
      }
    ]
  ]
});

export const Base: Story = {
  args: {},
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const input = attachFiles(canvasElement, ["first.yml"]);
    await canvas.findByText("first.yml");

    // With the one allowed file attached, clicking the dropzone still opens
    // the dialog (once) so the file can be replaced.
    let opened = 0;
    input.click = () => {
      opened += 1;
    };
    await userEvent.click(
      canvas.getByText("Click or drop a file to replace it")
    );
    await expect(opened).toBe(1);
  }
};

export const Simple: Story = {
  args: {
    variant: "simple"
  }
};

export const SimpleMultiple: Story = {
  args: {
    variant: "simple",
    max: 10
  }
};

export const SimpleDisabled: Story = {
  args: {
    variant: "simple",
    disabled: true
  }
};

export const SimpleError: Story = {
  args: {
    variant: "simple",
    validate: validation("danger")
  }
};

export const SimpleSmallSize: Story = {
  args: { variant: "simple", size: "sm" }
};

export const SimpleLargeSize: Story = {
  args: { variant: "simple", size: "lg" }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const CustomText: Story = {
  args: {
    children: "Custom button text"
  }
};

export const Multiple: Story = {
  args: {
    max: 10
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    attachFiles(canvasElement, ["first.yml"]);
    await canvas.findByText("first.yml");

    // A later pick adds to the files already attached.
    attachFiles(canvasElement, ["second.yml", "third.yml"]);
    await canvas.findByText("third.yml");
    await expect(canvas.getByText("first.yml")).toBeTruthy();
    await expect(canvas.getByText("second.yml")).toBeTruthy();

    // A file added after a removal gets its own card (ids don't repeat).
    await userEvent.click(
      canvas.getByRole("button", { name: "Remove first.yml" })
    );
    attachFiles(canvasElement, ["fourth.yml"]);
    await canvas.findByText("fourth.yml");
    await expect(canvas.queryByText("first.yml")).toBeNull();
    await expect(
      canvas.getAllByRole("button", { name: /^Remove / }).length
    ).toBe(3);
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    validate: validation("danger")
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning")
  }
};

export const Info: Story = {
  args: {
    validate: validation("info")
  }
};

export const Success: Story = {
  args: {
    validate: validation("success")
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

const previewFile = {
  id: 1,
  status: "initialized" as const,
  name: "sample.svg",
  size: 1024,
  mimeType: "image/svg+xml",
  uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100'%3E%3Crect width='400' height='100' fill='%23424264'/%3E%3C/svg%3E"
};

export const PopulatedSizes: Story = {
  render: () => (
    <View backgroundColor="background" padding={24} minHeight="100vh">
      <Form name="file-preview-sizes">
        {(["sm", "md", "lg"] as const).map(size => (
          <Field key={size} name={size} size={size}>
            <Field.Label>{size}</Field.Label>
            <FilePicker size={size} files={[previewFile]} width={400}>
              <FilePicker.Files>
                <FilePicker.Files.File {...previewFile} />
              </FilePicker.Files>
            </FilePicker>
          </Field>
        ))}
      </Form>
    </View>
  )
};

const previewFiles: ClientFileResult[] = [
  { ...previewFile, id: 1 },
  {
    ...previewFile,
    id: 4,
    // Long enough to be cut short with an ellipsis.
    name: "quarterly-financial-report-final-revision-approved-by-legal-and-finance.svg"
  },
  {
    id: 2,
    status: "initialized",
    name: "docker-compose.yml",
    size: 2850,
    mimeType: "application/yaml",
    uri: `data:application/yaml,${encodeURIComponent(
      Array.from(
        { length: 12 },
        (_, i) =>
          `services:\n  service-${i}:\n    image: "storm/service:${i}"\n    restart: unless-stopped\n`
      ).join("")
    )}`
  },
  {
    id: 3,
    status: "initialized",
    name: "tracemonkey.pdf",
    size: 1016315,
    mimeType: "application/pdf",
    uri: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
  }
];

export const PopulatedFileTypes: Story = {
  render: () => (
    <View backgroundColor="background" padding={24} minHeight="100vh">
      <Form name="file-preview-types">
        <Field name="fileTypes">
          <Field.Label>Image, text and PDF previews</Field.Label>
          <FilePicker files={previewFiles} max={5} width={600}>
            <FilePicker.Files>
              {previewFiles.map(file => (
                <FilePicker.Files.File key={file.id} {...file} />
              ))}
            </FilePicker.Files>
          </FilePicker>
        </Field>
      </Form>
    </View>
  )
};

export const SimplePopulated: Story = {
  render: () => {
    const [files, setFiles] = useState<ClientFileResult[]>([previewFile]);

    return (
      <View backgroundColor="background" padding={24}>
        <Form name="file-simple-populated">
          <Field name="simplePopulated">
            <Field.Label>Upload file</Field.Label>
            <FilePicker
              variant="simple"
              files={files}
              // `onChange` intersects the DOM change handler with the files callback.
              onChange={setFiles as never}
              width={500}>
              <FilePicker.Trigger>
                <FilePicker.Trigger.Button />
              </FilePicker.Trigger>
            </FilePicker>
          </Field>
        </Form>
      </View>
    );
  }
};
