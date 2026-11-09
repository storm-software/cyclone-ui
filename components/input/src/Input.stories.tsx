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
import { Lock, Search } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { InputProps } from "./Input";
import { Input } from "./Input";

/**
 * Story-only args consumed by the custom `render`: Field options plus the
 * Input's own `variant` and `description` (rendered as its `Field.Details`).
 * Spreading every Input prop into the Field would also forward style props
 * (such as the CSS `mask`) that clash with field options.
 */
type InputStoryArgs = Pick<
  FieldProps,
  | "theme"
  | "size"
  | "disabled"
  | "readOnly"
  | "required"
  | "validate"
  | "showErrorsBeforeBlur"
  | "clearable"
  | "showDisabledMessage"
> & {
  variant?: InputProps["variant"];
  labelVariant?: FieldLabelVariant;
  defaultValue?: string;
  description?: string;
};

const meta: Meta<InputStoryArgs> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  render: (
    {
      defaultValue,
      variant,
      labelVariant,
      description,
      ...props
    }: InputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: defaultValue }}>
      <Field name="inputName" {...props} variant={variant}>
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <Input variant={variant} size={props.size}>
          <Input.TextBox>
            <Input.TextBox.Value placeholder="email@example.com" />
          </Input.TextBox>
        </Input>
        {description && <Field.Details>{description}</Field.Details>}
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
        message: "This is an example detailed message for an input field",
        type
      }
    ]
  ]
});

export const Base: Story = {
  args: {},
  tags: ["input-height-regression"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Label Text").closest("label");

    await expect(input).toHaveStyle({ height: "43px" });
    await expect(label).not.toBeNull();
    await expect(
      Math.abs(
        label!.getBoundingClientRect().top +
          label!.getBoundingClientRect().height / 2 -
          (input.getBoundingClientRect().top +
            input.getBoundingClientRect().height / 2)
      )
    ).toBeLessThan(2);
    await userEvent.type(input, "input value");
    await expect(input).toHaveValue("input value");
  }
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    clearable: true,
    defaultValue: "Keep me"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await expect(input).toHaveAttribute("readonly");
    await expect(input).not.toBeDisabled();
    await expect(input).toHaveValue("Keep me");
    await userEvent.type(input, " changed");
    await expect(input).toHaveValue("Keep me");
    await expect(canvas.queryByRole("button", { name: /clear/i })).toBeNull();
  }
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: "" }}>
      <Field {...props} name="inputName">
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <Input>
          <Input.TextBox>
            <Input.TextBox.Value />
          </Input.TextBox>
        </Input>
      </Field>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const labelText = canvas.getByText("Label Text");
    const label = labelText.closest("label") as HTMLLabelElement;
    const initialFontSize = Number.parseFloat(
      getComputedStyle(labelText).fontSize
    );
    const inputRect = input.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();

    await expect(
      Math.abs(
        labelRect.top +
          labelRect.height / 2 -
          (inputRect.top + inputRect.height / 2)
      )
    ).toBeLessThan(2);

    await userEvent.click(input);
    await waitFor(async () => {
      const focusedLabelRect = label.getBoundingClientRect();
      const focusedLabelOffset =
        focusedLabelRect.top + focusedLabelRect.height / 2 - inputRect.top;
      await expect(focusedLabelOffset).toBeGreaterThanOrEqual(0);
      await expect(focusedLabelOffset).toBeLessThan(5);
      await expect(
        Number.parseFloat(getComputedStyle(labelText).fontSize)
      ).toBeLessThan(initialFontSize);
    });

    await userEvent.type(input, "input value");
    await userEvent.tab();
    await waitFor(async () => {
      const valuedLabelRect = label.getBoundingClientRect();
      const valuedLabelOffset =
        valuedLabelRect.top + valuedLabelRect.height / 2 - inputRect.top;
      await expect(valuedLabelOffset).toBeGreaterThanOrEqual(0);
      await expect(valuedLabelOffset).toBeLessThan(5);
    });
  }
};

export const FloatingWithPlaceholder: Story = {
  args: {
    labelVariant: "floating"
  }
};

export const FloatingWithStartIcon: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: "" }}>
      <Field {...props} name="inputName">
        <Field.Label variant={labelVariant}>Search</Field.Label>
        <Input>
          <Input.TextBox>
            <Field.Icon position="start" aria-label="Search icon">
              <Search aria-hidden={true} />
            </Field.Icon>
            <Input.TextBox.Value />
          </Input.TextBox>
        </Input>
      </Field>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Search").closest("label");
    const inputTextLeft =
      input.getBoundingClientRect().left +
      Number.parseFloat(getComputedStyle(input).paddingLeft);

    await expect(label).not.toBeNull();
    await waitFor(async () => {
      await expect(
        Math.abs(label!.getBoundingClientRect().left - inputTextLeft)
      ).toBeLessThan(2);
    });

    await userEvent.click(input);
    await waitFor(async () => {
      await expect(
        Math.abs(label!.getBoundingClientRect().left - inputTextLeft)
      ).toBeLessThan(2);
    });
  }
};

export const FloatingWithEndIconTruncation: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: "" }}>
      <div style={{ width: 240 }}>
        <Field {...props} name="inputName">
          <Field.Label variant={labelVariant} showOptional={true}>
            An intentionally long field label that must not overlap the icon
          </Field.Label>
          <Input>
            <Input.TextBox>
              <Input.TextBox.Value />
              <Field.Icon position="end" aria-label="Lock field">
                <Lock aria-hidden={true} />
              </Field.Icon>
            </Input.TextBox>
          </Input>
        </Field>
      </div>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelText = canvas.getByText(
      "An intentionally long field label that must not overlap the icon",
      { exact: true }
    );
    const icon = canvasElement.querySelector("svg");

    if (!icon) {
      throw new globalThis.Error("Expected the Inlined icon to render");
    }

    await waitFor(async () => {
      await expect(
        canvas.getByText("(Optional)", { exact: true })
      ).not.toBeVisible();
      await expect(labelText.scrollWidth).toBeGreaterThan(
        labelText.clientWidth
      );
      await expect(getComputedStyle(labelText).textOverflow).toBe("ellipsis");
      await expect(labelText.getBoundingClientRect().right).toBeLessThanOrEqual(
        icon.getBoundingClientRect().left
      );
    });

    // The truncated label shows its full text in a (portaled) tooltip.
    await userEvent.hover(labelText);
    await waitFor(
      async () => {
        await expect(
          within(canvasElement.ownerDocument.body).getAllByText(
            "An intentionally long field label that must not overlap the icon",
            { exact: true }
          )
        ).toHaveLength(2);
      },
      { timeout: 3000 }
    );
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

export const WithLink: Story = {
  args: {},
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: "" }}>
      <Field {...props} name="inputName">
        <Field.Label variant={labelVariant}>Email</Field.Label>
        <Field.Link href="#input-field-link">Why we ask</Field.Link>
        <Input>
          <Input.TextBox>
            <Input.TextBox.Value placeholder="email@example.com" />
          </Input.TextBox>
        </Input>
      </Field>
    </Form>
  )
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

export const Clearable: Story = {
  args: {
    clearable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "input value");
    const clearButton = canvas.getByRole("button");
    await expect(clearButton).toBeVisible();
    await userEvent.click(clearButton);
    await expect(input).toHaveValue("");
    await expect(input).toHaveFocus();
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
    validate: validation("discovery")
  }
};

export const DiscoveryFloating: Story = {
  args: {
    validate: validation("discovery"),
    labelVariant: "floating"
  }
};

export const DiscoveryUnderlined: Story = {
  args: {
    validate: validation("discovery"),
    variant: "underlined"
  }
};

export const Error: Story = {
  args: {
    showErrorsBeforeBlur: true,
    validate: validation("danger")
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(
      "This is an example detailed message for an input field"
    );
    const iconButton = canvas.getAllByRole("button").at(-1)!;

    await expect(iconButton).toHaveStyle({
      flexShrink: "0",
      width: "32px",
      minWidth: "32px"
    });

    await userEvent.hover(iconButton);
    const messages = await within(document.body).findAllByText(
      "This is an example detailed message for an input field"
    );
    await waitFor(async () => {
      await expect(messages.at(-1)!).toBeVisible();
    });
  }
};

export const ErrorFloating: Story = {
  args: {
    showErrorsBeforeBlur: true,
    validate: validation("danger"),
    labelVariant: "floating"
  }
};

export const ErrorUnderlined: Story = {
  args: {
    showErrorsBeforeBlur: true,
    validate: validation("danger"),
    variant: "underlined"
  }
};

export const Warning: Story = {
  args: {
    validate: validation("warning")
  }
};

export const WarningFloating: Story = {
  args: {
    validate: validation("warning"),
    labelVariant: "floating"
  }
};

export const WarningUnderlined: Story = {
  args: {
    validate: validation("warning"),
    variant: "underlined"
  }
};

export const Info: Story = {
  args: {
    validate: validation("info")
  }
};

export const InfoFloating: Story = {
  args: {
    validate: validation("info"),
    labelVariant: "floating"
  }
};

export const InfoUnderlined: Story = {
  args: {
    validate: validation("info"),
    variant: "underlined"
  }
};

export const Success: Story = {
  args: {
    validate: validation("success")
  }
};

export const SuccessFloating: Story = {
  args: {
    validate: validation("success"),
    labelVariant: "floating"
  }
};

export const SuccessUnderlined: Story = {
  args: {
    validate: validation("success"),
    variant: "underlined"
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };

const buttonStyles = [
  { variant: "outlined", circular: false },
  { variant: "outlined", circular: true },
  { variant: "underlined", circular: false },
  { variant: "inlined", circular: false },
  { variant: "inlined", circular: true }
] as const;

const getButtonStyleName = ({
  variant,
  circular
}: (typeof buttonStyles)[number]) => `${variant}${circular ? " circular" : ""}`;

/**
 * `Field.Button` fills the text box, inset by a small margin, in every input
 * style, and rounds to match a circular input.
 */
export const WithButton: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, variant: _variant, ...props }, { id }) => (
    <Form
      name={`formName-${id}`}
      initialValues={Object.fromEntries(
        buttonStyles.map((_, index) => [`input${index}`, ""])
      )}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          width: 360
        }}>
        {buttonStyles.map((style, index) => (
          <Field
            key={getButtonStyleName(style)}
            {...props}
            name={`input${index}`}
            variant={style.variant}>
            <Field.Label variant={labelVariant}>
              {`A long ${getButtonStyleName(style)} label beside the button`}
            </Field.Label>
            <Input
              variant={style.variant}
              circular={style.circular}
              size={props.size}>
              <Input.TextBox>
                <Input.TextBox.Value placeholder="email@example.com" />
                <Field.Button>Subscribe</Field.Button>
              </Input.TextBox>
            </Input>
          </Field>
        ))}
      </div>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button", { name: "Subscribe" });

    await expect(buttons).toHaveLength(buttonStyles.length);
    for (const [index, button] of buttons.entries()) {
      let textBox = button.parentElement;
      while (textBox && !textBox.querySelector("input")) {
        textBox = textBox.parentElement;
      }

      const box = textBox!.getBoundingClientRect();
      const rect = button.getBoundingClientRect();
      const radius = Number.parseFloat(
        getComputedStyle(button).borderTopLeftRadius
      );

      // Fills the text box's height, inset by the 4px margin.
      await expect(Math.abs(rect.top - box.top - 4)).toBeLessThan(1);
      await expect(Math.abs(box.bottom - rect.bottom - 4)).toBeLessThan(1);
      if (buttonStyles[index]!.circular) {
        await expect(radius).toBeGreaterThanOrEqual(rect.height / 2);
      } else {
        await expect(radius).toBeLessThan(rect.height / 2);
      }

      // The resting floating label truncates before the button.
      const label = canvas
        .getByText(
          `A long ${getButtonStyleName(buttonStyles[index]!)} label beside the button`
        )
        .closest("label")!;
      await waitFor(async () =>
        expect(label.getBoundingClientRect().right).toBeLessThanOrEqual(
          rect.left
        )
      );
    }

    // Focusing the field opens the outline notch under the floated label.
    // Tabbing out rests the label; the notch has to close with it.
    const input = canvas.getAllByRole("textbox")[0]!;
    await userEvent.click(input);
    await userEvent.tab();
    await userEvent.tab();
    const legend = canvasElement.querySelector("legend")!;
    await waitFor(() =>
      expect(Number.parseFloat(getComputedStyle(legend).width)).toBe(0)
    );
  }
};

/** The ancestors (below the canvas) that clip the element's overflow. */
const getClippingAncestors = (element: HTMLElement, root: HTMLElement) => {
  const clipping: HTMLElement[] = [];
  for (
    let ancestor = element.parentElement;
    ancestor && ancestor !== root;
    ancestor = ancestor.parentElement
  ) {
    const { overflowX, overflowY } = getComputedStyle(ancestor);
    if ([overflowX, overflowY].some(value => value !== "visible")) {
      clipping.push(ancestor);
    }
  }

  return clipping;
};

/**
 * An end `Field.Button` stays at the very end of the text box, after the
 * field's clear and status icons, and its focus ring is never clipped.
 */
export const WithButtonAndStatus: Story = {
  args: {
    labelVariant: "floating",
    clearable: true,
    showErrorsBeforeBlur: true,
    validate: validation("danger")
  },
  render: ({ labelVariant, variant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputName: "" }}>
      <div style={{ width: 360 }}>
        <Field {...props} name="inputName" variant={variant}>
          <Field.Label variant={labelVariant}>Email</Field.Label>
          <Input variant={variant} size={props.size}>
            <Input.TextBox data-testid="text-box">
              <Input.TextBox.Value />
              <Field.Button>Subscribe</Field.Button>
            </Input.TextBox>
          </Input>
        </Field>
      </div>
    </Form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const button = canvas.getByRole("button", { name: "Subscribe" });
    const textBox = canvas.getByTestId("text-box");

    await userEvent.type(input, "hello");
    // The clear and status icons render before the button.
    await waitFor(async () => {
      const icons = [...textBox.querySelectorAll("svg")];
      await expect(icons.length).toBeGreaterThanOrEqual(2);
      for (const icon of icons) {
        await expect(icon.getBoundingClientRect().right).toBeLessThanOrEqual(
          button.getBoundingClientRect().left
        );
      }
    });

    // The frame clips its content until the button takes focus.
    await expect(
      getClippingAncestors(button, canvasElement).length
    ).toBeGreaterThan(0);
    for (let step = 0; step < 5 && document.activeElement !== button; step++) {
      await userEvent.tab();
    }
    await expect(button).toHaveFocus();
    await waitFor(async () =>
      expect(getClippingAncestors(button, canvasElement)).toHaveLength(0)
    );

    // The button is last in tab order, too.
    await userEvent.tab();
    await expect(textBox.contains(document.activeElement)).toBe(false);
    await waitFor(async () =>
      expect(
        getClippingAncestors(button, canvasElement).length
      ).toBeGreaterThan(0)
    );
  }
};
