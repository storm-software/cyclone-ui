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

import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { TextAreaField } from "./TextAreaField";

const meta: Meta<typeof TextAreaField> = {
  title: "Form/TextAreaField",
  component: TextAreaField,
  tags: ["autodocs"],
  render: ({ defaultValue = "", ...props }: any) => (
    <Form name="formName" initialValues={{ textAreaFieldName: defaultValue }}>
      <TextAreaField name="textAreaFieldName" {...props}>
        <TextAreaField.Label>Label Text</TextAreaField.Label>
        <TextAreaField.Control placeholder="Enter a message" rows={3} />
        <TextAreaField.Details>
          This is an example detailed message for a text area field
        </TextAreaField.Details>
      </TextAreaField>
    </Form>
  )
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");

    await expect(textArea.tagName).toBe("TEXTAREA");
    await userEvent.type(textArea, "A multiline value");
    await expect(textArea).toHaveValue("A multiline value");
  }
};

export const Required: Story = {
  args: {
    required: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.queryByText("(Optional)")).not.toBeInTheDocument();
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

export const Discovery: Story = {
  args: {
    theme: "discovery"
  }
};

export const Error: Story = {
  args: {
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    theme: "success"
  }
};
