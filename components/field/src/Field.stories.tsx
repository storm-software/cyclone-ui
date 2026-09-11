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
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "./Field";

const meta: Meta<typeof Field> = {
  title: "Form/Field",
  component: Field,
  tags: ["autodocs"],
  render: (props: any) => (
    <Form name="formName" defaultValues={{ fieldName: "" }}>
      <Field name="fieldName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <BodyText>The form field can be added here</BodyText>
      </Field>
    </Form>
  )
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof Field>;

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

export const Underline: Story = {
  args: {
    variant: "underline"
  }
};

export const WithLink: Story = {
  args: {},
  render: props => (
    <Form name="formName" defaultValues={{ fieldName: "" }}>
      <Field name="fieldName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <Field.Link href="#field-link">Learn more</Field.Link>
        <BodyText>The form field can be added here</BodyText>
      </Field>
    </Form>
  )
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
