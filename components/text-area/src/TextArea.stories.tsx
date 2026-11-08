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

import type { FieldLabelVariant, FieldProps } from "@cyclone-ui/field";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { expect, userEvent, within } from "storybook/test";
import { TextArea } from "./TextArea";

type TextAreaStoryArgs = GetProps<typeof TextArea> &
  Omit<FieldProps<string>, "children" | "name"> & {
    labelVariant?: FieldLabelVariant;
    description?: string;
  };

const meta: Meta<TextAreaStoryArgs> = {
  title: "Form/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter a message",
    rows: 3
  },
  render: (
    {
      defaultValue = "",
      description,
      disabled,
      labelVariant,
      placeholder,
      rows,
      size,
      variant,
      ...props
    }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ textAreaName: defaultValue }}>
      <Field
        name="textAreaName"
        {...props}
        disabled={disabled}
        size={size}
        variant={variant}>
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <TextArea
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          size={size}
          variant={variant}
        />
        {description && <Field.Details>{description}</Field.Details>}
      </Field>
    </Form>
  )
};

export default meta;

type Story = StoryObj<TextAreaStoryArgs>;

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

// This package's tsconfig omits the DOM lib, so reach the browser global
// through `globalThis`.
const getBrowserStyle = (element: Element, pseudoElement?: string) =>
  (globalThis as any).getComputedStyle(element, pseudoElement);

/** Vertical center of a textarea's first text line, in viewport pixels. */
const firstLineCenter = (textArea: HTMLElement) => {
  const style = getBrowserStyle(textArea);
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
    await expect(getBrowserStyle(textArea).color).not.toBe("rgba(0, 0, 0, 0)");
    await expect(getBrowserStyle(textArea, "::placeholder").color).not.toBe(
      "rgba(0, 0, 0, 0)"
    );
    await expect(getBrowserStyle(textArea).boxShadow).toBe("none");
    await userEvent.click(textArea);
    await new Promise(resolve => {
      setTimeout(resolve, 250);
    });
    await expect(getBrowserStyle(textArea).boxShadow).not.toBe("none");
    await userEvent.type(textArea, "A multiline value");
    await expect(textArea).toHaveValue("A multiline value");
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating",
    placeholder: undefined
  }
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

export const Description: Story = {
  args: {
    labelVariant: "above",
    description:
      "This is a description that is longer than the label and will wrap to multiple lines. It is used to provide more information about the field."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Required: Story = {
  args: {
    required: true
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).queryByText("(Optional)")
    ).not.toBeInTheDocument();
  }
};

export const DefaultValue: Story = {
  args: {
    defaultValue: "Defaulted Text"
  }
};

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
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

const buttonVariants = ["outlined", "underlined", "inlined"] as const;

const longMessage =
  "A message long enough to run under the button in the corner, which floats above the text instead of pushing it aside.";

/**
 * `Field.Button` floats over the text area's bottom end corner, above its
 * text.
 */
export const WithButton: Story = {
  args: {
    labelVariant: "floating"
  },
  render: (
    { labelVariant, rows, size, variant: _variant, ...props }: any,
    {
      id
    }: {
      id: string;
    }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={Object.fromEntries(
        buttonVariants.map(variant => [variant, longMessage])
      )}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          width: 360
        }}>
        {buttonVariants.map(variant => (
          <Field
            key={variant}
            {...props}
            name={variant}
            size={size}
            variant={variant}>
            <Field.Label
              variant={labelVariant}>{`${variant} message`}</Field.Label>
            <TextArea rows={rows} size={size} variant={variant}>
              <Field.Button>Send</Field.Button>
            </TextArea>
          </Field>
        ))}
      </div>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textAreas = canvas.getAllByRole("textbox");
    const buttons = canvas.getAllByRole("button", { name: "Send" });

    await expect(buttons).toHaveLength(buttonVariants.length);
    for (const [index, button] of buttons.entries()) {
      const box = textAreas[index]!.getBoundingClientRect();
      const rect = button.getBoundingClientRect();
      // Inside the 1px border, inset by the 4px margin (flush with an
      // underline's end).
      const sideInset = buttonVariants[index] === "underlined" ? 0 : 5;

      await expect(getBrowserStyle(button.parentElement!).position).toBe(
        "absolute"
      );
      await expect(Math.abs(box.bottom - rect.bottom - 5)).toBeLessThan(1);
      await expect(Math.abs(box.right - rect.right - sideInset)).toBeLessThan(
        1
      );
    }
  }
};
