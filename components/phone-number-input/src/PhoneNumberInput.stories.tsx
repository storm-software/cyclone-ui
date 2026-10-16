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
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { PhoneNumberInputProps } from "./PhoneNumberInput";
import { PhoneNumberInput } from "./PhoneNumberInput";

/**
 * Story-only args consumed by the custom `render`: Field options plus the
 * PhoneNumberInput's own `defaultCountry`.
 */
type PhoneNumberInputStoryArgs = Pick<
  FieldProps,
  | "theme"
  | "size"
  | "disabled"
  | "required"
  | "validate"
  | "showErrorsBeforeBlur"
> &
  Pick<PhoneNumberInputProps, "defaultCountry"> & {
    defaultValue?: string;
  };

const meta = {
  title: "Form/PhoneNumberInput",
  component: PhoneNumberInput,
  tags: ["autodocs"],
  render: (
    { defaultValue = "", defaultCountry, ...props }: PhoneNumberInputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ inputFieldName: defaultValue }}>
      <Field name="inputFieldName" {...props}>
        <Field.Label>Label Text</Field.Label>
        <PhoneNumberInput defaultCountry={defaultCountry}>
          <PhoneNumberInput.TextBox>
            <PhoneNumberInput.TextBox.Value placeholder="Phone number" />
          </PhoneNumberInput.TextBox>
        </PhoneNumberInput>
      </Field>
    </Form>
  )
} satisfies Meta<PhoneNumberInputStoryArgs>;

export default meta;

type Story = StoryObj<PhoneNumberInputStoryArgs>;

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
  args: {},
  tags: ["input-height-regression", "phone-number-input"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let input = canvas.getByRole("textbox");
    // Floating is the default variant: a 45px frame, 43px inside its border.
    await expect(input).toHaveStyle({ height: "43px" });
    await expect(input).toHaveAttribute("type", "tel");
    await expect(input).toHaveValue("+1 ");

    await userEvent.type(input, "2125550123");
    await expect(input).toHaveValue("+1 212 555-0123");

    const countryTrigger = canvas.getByRole("button", {
      name: /select country code/i
    });
    await expect(countryTrigger).toHaveStyle({
      width: "32px",
      minWidth: "32px"
    });
    await userEvent.click(countryTrigger);
    const document = within(canvasElement.ownerDocument.body);
    const search = document.getByRole("combobox", {
      name: "Search countries"
    });
    const firstCountry = document.getByRole("button", {
      name: /\(AC\)\s+\+247/i
    });
    // The ghost button's first child is its hover background, so find the
    // content row through the country name.
    const firstCountryLabel = within(firstCountry).getByText("Ascension Island")
      .parentElement as HTMLElement;
    const firstCountryLabelRange = firstCountry.ownerDocument.createRange();
    firstCountryLabelRange.selectNodeContents(firstCountryLabel);

    await expect(firstCountry).toHaveTextContent("Ascension Island");
    await expect(firstCountryLabel).toHaveStyle({ flexDirection: "row" });
    await expect(
      firstCountryLabelRange.getBoundingClientRect().right
    ).toBeLessThanOrEqual(firstCountry.getBoundingClientRect().right);

    await userEvent.type(search, "United Kingdom");
    await waitFor(async () =>
      expect(document.getByRole("button", { name: /GB.*\+44/i })).toBeVisible()
    );
    await userEvent.click(document.getByRole("button", { name: /GB.*\+44/i }));

    // The concrete input remounts when its country-specific Maskito options
    // change, so continue the interaction through the new DOM node.
    input = canvas.getByRole("textbox");
    await waitFor(async () => expect(input).toHaveValue("+44 "));
    await waitFor(async () =>
      expect(
        document.queryByRole("combobox", { name: "Search countries" })
      ).not.toBeInTheDocument()
    );
    input = canvas.getByRole("textbox");
    await userEvent.type(input, "2071234567");
    await expect(input).toHaveValue("+44 20 7123-4567");
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
    defaultValue: "+44 20 7123-4567"
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("This is an example validation message");
    const iconButton = canvas.getAllByRole("button").at(-1)!;
    const iconContainer = iconButton;

    await expect(iconContainer).toHaveStyle({
      flexShrink: "0",
      width: "32px",
      minWidth: "32px"
    });
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
