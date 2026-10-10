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
import type { GetProps } from "@tamagui/core";
import type { FilePickerVariant } from "./FilePicker";
import { FilePicker } from "./FilePicker";

/**
 * Field props plus the story-only args consumed by the custom `render` (the
 * picker's `variant`/`max` and the Details).
 */
type FilePickerFieldStoryArgs = GetProps<typeof Field> & {
  pickerVariant?: FilePickerVariant;
  max?: number;
  details?: string;
};

const meta: Meta<FilePickerFieldStoryArgs> = {
  title: "Form/FilePicker",
  component: Field,
  tags: ["autodocs"],
  render: (
    { pickerVariant, max, details, ...props }: any,
    { id }: { id: string }
  ) => {
    return (
      <Form name={`formName-${id}`} initialValues={{ filePickerFieldName: "" }}>
        <Field name="filePickerFieldName" {...props}>
          <Field.Label>Label Text</Field.Label>
          <FilePicker variant={pickerVariant} max={max} />
          {details && <Field.Details>{details}</Field.Details>}
        </Field>
      </Form>
    );
  }
} satisfies Meta<FilePickerFieldStoryArgs>;

export default meta;

type Story = StoryObj<FilePickerFieldStoryArgs>;

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

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Multiple: Story = {
  args: {
    max: 10
  }
};

export const Simple: Story = {
  args: {
    pickerVariant: "simple",
    details: "SVG, PNG, JPG or GIF (MAX. 800x400px)."
  }
};

export const SimpleMultiple: Story = {
  args: {
    pickerVariant: "simple",
    max: 10
  }
};

export const SimpleDisabled: Story = {
  args: {
    pickerVariant: "simple",
    disabled: true
  }
};

export const SimpleError: Story = {
  args: {
    pickerVariant: "simple",
    validate: validation("danger")
  }
};

export const SimpleSmallSize: Story = {
  args: { pickerVariant: "simple", size: "sm" }
};

export const SimpleLargeSize: Story = {
  args: { pickerVariant: "simple", size: "lg" }
};

// export const DefaultValue: Story = {
//   args: {
//     defaultValue: "Defaulted Text"
//   }
// };

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
