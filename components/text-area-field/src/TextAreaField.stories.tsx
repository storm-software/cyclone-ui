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

import type { FieldLabelVariant } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { expect, userEvent, within } from "storybook/test";
import { TextAreaField } from "./TextAreaField";

/** Field props plus the story-only `labelVariant`, passed to `TextAreaField.Label`. */
type TextAreaFieldStoryArgs = GetProps<typeof TextAreaField> & {
  labelVariant?: FieldLabelVariant;
};

const meta: Meta<TextAreaFieldStoryArgs> = {
  title: "Form/TextAreaField",
  component: TextAreaField,
  tags: ["autodocs"],
  render: (
    { defaultValue = "", labelVariant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ textAreaFieldName: defaultValue }}>
      <TextAreaField name="textAreaFieldName" {...props}>
        <TextAreaField.Label variant={labelVariant}>
          Label Text
        </TextAreaField.Label>
        <TextAreaField.Control placeholder="Enter a message" rows={3} />
      </TextAreaField>
    </Form>
  )
} satisfies Meta<TextAreaFieldStoryArgs>;

export default meta;

type Story = StoryObj<TextAreaFieldStoryArgs>;

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

/** Vertical center of a textarea's first text line, in viewport pixels. */
const firstLineCenter = (textArea: HTMLElement) => {
  const style = getComputedStyle(textArea);
  // `line-height: normal` computes to a keyword; browsers use about 1.2em.
  const lineHeight =
    Number.parseFloat(style.lineHeight) ||
    Number.parseFloat(style.fontSize) * 1.2;

  return (
    textArea.getBoundingClientRect().top +
    Number.parseFloat(style.borderTopWidth) +
    Number.parseFloat(style.paddingTop) +
    lineHeight / 2
  );
};

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");
    const label = canvas.getByText("Label Text").closest("label");

    await expect(textArea.tagName).toBe("TEXTAREA");
    await expect(label).not.toBeNull();
    await expect(
      Math.abs(
        label!.getBoundingClientRect().top +
          label!.getBoundingClientRect().height / 2 -
          firstLineCenter(textArea)
      )
    ).toBeLessThan(2);
    await expect(getComputedStyle(textArea).color).not.toBe("rgba(0, 0, 0, 0)");
    await expect(getComputedStyle(textArea, "::placeholder").color).not.toBe(
      "rgba(0, 0, 0, 0)"
    );
    await userEvent.type(textArea, "A multiline value");
    await expect(textArea).toHaveValue("A multiline value");
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ textAreaFieldName: "" }}>
      <TextAreaField {...props} name="textAreaFieldName">
        <TextAreaField.Label variant={labelVariant}>
          Label Text
        </TextAreaField.Label>
        <TextAreaField.Control rows={3} />
      </TextAreaField>
    </Form>
  )
};

export const FloatingWithPlaceholder: Story = {
  args: {
    labelVariant: "floating"
  }
};

export const OutlinedFloating: Story = {
  args: {
    variant: "outlined",
    labelVariant: "floating"
  }
};

export const UnderlinedFloating: Story = {
  args: {
    variant: "underlined",
    labelVariant: "floating"
  }
};

export const InlinedFloating: Story = {
  args: {
    variant: "inlined",
    labelVariant: "floating"
  }
};

export const OutlinedAbove: Story = {
  args: {
    variant: "outlined",
    labelVariant: "above"
  }
};

export const UnderlinedAbove: Story = {
  args: {
    variant: "underlined",
    labelVariant: "above"
  }
};

export const InlinedAbove: Story = {
  args: {
    variant: "inlined",
    labelVariant: "above"
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
