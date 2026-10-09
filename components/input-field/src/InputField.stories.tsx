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
import { Lock, MagnifyingGlass } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { InputField } from "./InputField";

/** Field props plus the story-only `labelVariant`, passed to `InputField.Label`. */
type InputFieldStoryArgs = GetProps<typeof InputField> & {
  labelVariant?: FieldLabelVariant;
};

const meta: Meta<InputFieldStoryArgs> = {
  title: "Form/InputField",
  component: InputField,
  tags: ["autodocs"],
  render: (
    { defaultValue = "", labelVariant, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ inputFieldName: defaultValue }}>
      <InputField name="inputFieldName" {...props}>
        <InputField.Label variant={labelVariant}>Label Text</InputField.Label>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value placeholder="email@example.com" />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
    </Form>
  )
} satisfies Meta<InputFieldStoryArgs>;

export default meta;

type Story = StoryObj<InputFieldStoryArgs>;

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

export const Floating: Story = {
  args: {
    labelVariant: "floating"
  },
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputFieldName: "" }}>
      <InputField {...props} name="inputFieldName">
        <InputField.Label variant={labelVariant}>Label Text</InputField.Label>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
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
    await waitFor(() => {
      const focusedLabelRect = label.getBoundingClientRect();
      // Field floats the label 4px below the frame's top edge, notching the
      // border, so its centre sits just below the input's top.
      const focusedLabelOffset =
        focusedLabelRect.top + focusedLabelRect.height / 2 - inputRect.top;
      expect(focusedLabelOffset).toBeGreaterThanOrEqual(0);
      expect(focusedLabelOffset).toBeLessThan(5);
      expect(
        Number.parseFloat(getComputedStyle(labelText).fontSize)
      ).toBeLessThan(initialFontSize);
    });

    await userEvent.type(input, "input value");
    await userEvent.tab();
    await waitFor(() => {
      const valuedLabelRect = label.getBoundingClientRect();
      // Field floats the label 4px below the frame's top edge, notching the
      // border, so its centre sits just below the input's top.
      const valuedLabelOffset =
        valuedLabelRect.top + valuedLabelRect.height / 2 - inputRect.top;
      expect(valuedLabelOffset).toBeGreaterThanOrEqual(0);
      expect(valuedLabelOffset).toBeLessThan(5);
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
    <Form name={`formName-${id}`} initialValues={{ inputFieldName: "" }}>
      <InputField {...props} name="inputFieldName">
        <InputField.Label variant={labelVariant}>Search</InputField.Label>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Icon position="start" aria-label="Search icon">
              <MagnifyingGlass aria-hidden={true} />
            </InputField.Icon>
            <InputField.Control.TextBox.Value />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
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
    <Form name={`formName-${id}`} initialValues={{ inputFieldName: "" }}>
      <div style={{ width: 240 }}>
        <InputField {...props} name="inputFieldName">
          <InputField.Label variant={labelVariant} showOptional={true}>
            An intentionally long field label that must not overlap the icon
          </InputField.Label>
          <InputField.Control>
            <InputField.Control.TextBox>
              <InputField.Control.TextBox.Value />
              <InputField.Icon position="end" aria-label="Lock field">
                <Lock aria-hidden={true} />
              </InputField.Icon>
            </InputField.Control.TextBox>
          </InputField.Control>
        </InputField>
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
      // `Error` is shadowed by the `Error` story export below.
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

export const WithLink: Story = {
  args: {},
  render: ({ labelVariant, ...props }, { id }) => (
    <Form name={`formName-${id}`} initialValues={{ inputFieldName: "" }}>
      <InputField {...props} name="inputFieldName">
        <InputField.Label variant={labelVariant}>Email</InputField.Label>
        <InputField.Link href="#input-field-link">Why we ask</InputField.Link>
        <InputField.Control>
          <InputField.Control.TextBox>
            <InputField.Control.TextBox.Value placeholder="email@example.com" />
          </InputField.Control.TextBox>
        </InputField.Control>
      </InputField>
    </Form>
  )
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

export const Brand: Story = {
  args: {
    theme: "brand"
  }
};

export const BrandFloating: Story = {
  args: {
    theme: "brand",
    labelVariant: "floating"
  }
};

export const BrandUnderlined: Story = {
  args: {
    theme: "brand",
    variant: "underlined"
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
    validate: validation("danger")
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(
      "This is an example detailed message for an input field"
    );
    const iconButton = canvas.getAllByRole("button").at(-1)!;
    const iconContainer = iconButton;

    await expect(iconContainer).toHaveStyle({
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
    validate: validation("danger"),
    labelVariant: "floating"
  }
};

export const ErrorUnderlined: Story = {
  args: {
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

export const Positive: Story = {
  args: {
    validate: validation("positive")
  }
};

export const PositiveFloating: Story = {
  args: {
    validate: validation("positive"),
    labelVariant: "floating"
  }
};

export const PositiveUnderlined: Story = {
  args: {
    validate: validation("positive"),
    variant: "underlined"
  }
};

export const Negative: Story = {
  args: {
    validate: validation("negative")
  }
};

export const NegativeFloating: Story = {
  args: {
    validate: validation("negative"),
    labelVariant: "floating"
  }
};

export const NegativeUnderlined: Story = {
  args: {
    validate: validation("negative"),
    variant: "underlined"
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };
