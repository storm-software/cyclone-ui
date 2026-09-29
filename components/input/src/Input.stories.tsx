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

import type { FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { InputProps } from "./Input";
import { Input } from "./Input";

/**
 * Story-only args consumed by the custom `render`: Field options plus the
 * Input's own `variant`. Spreading every Input prop into the Field would also
 * forward style props (such as the CSS `mask`) that clash with field options.
 */
type InputStoryArgs = Pick<
  FieldProps,
  "theme" | "size" | "disabled" | "required" | "validate"
> & {
  variant?: InputProps["variant"];
  defaultValue?: string;
};

const meta: Meta<InputStoryArgs> = {
  title: "Base/Input",
  component: Input,
  tags: ["autodocs"],
  render: (
    { defaultValue, variant, ...props }: InputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: defaultValue }}>
      <Field
        name="inputName"
        {...props}
        // Field names the plain presentation `normal`; Input calls it `default`.
        variant={variant === "default" ? "normal" : variant}>
        <Field.Label>Label Text</Field.Label>
        <Input variant={variant} size={props.size}>
          <Input.TextBox>
            <Input.TextBox.Value placeholder="email@example.com" />
          </Input.TextBox>
        </Input>
      </Field>
    </Form>
  )
} satisfies Meta<InputStoryArgs>;

export default meta;

type Story = StoryObj<InputStoryArgs>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): NonNullable<FieldProps["validate"]> => ({
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

export const Underline: Story = {
  args: {
    variant: "underline"
  }
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

export const DefaultValue: Story = {
  args: {
    defaultValue: "Defaulted Text"
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
