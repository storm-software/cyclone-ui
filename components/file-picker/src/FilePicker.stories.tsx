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
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { FilePicker } from "./FilePicker";

const meta: Meta<typeof FilePicker> = {
  title: "Base/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  render: ({ defaultValue, disabled, children, ...props }: any) => (
    <Form name="formName" defaultValues={{ filePickerName: defaultValue }}>
      <Field name="filePickerName" {...props} disabled={disabled} width="500px">
        <Field.Label>Label Text</Field.Label>
        <FilePicker size={props.size} width="500px" disabled={disabled}>
          <FilePicker.Trigger>
            <FilePicker.Trigger.Button />
          </FilePicker.Trigger>
        </FilePicker>
      </Field>
    </Form>
  )
} satisfies Meta<typeof FilePicker>;

export default meta;

type Story = StoryObj<typeof FilePicker>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
) => ({
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
  args: {}
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
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Brand: Story = {
  args: {
    theme: "brand"
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
    <View backgroundColor="$background" padding={24} minHeight="100vh">
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
