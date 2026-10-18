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
import { View } from "@tamagui/core";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { CreditCardInput } from "./CreditCardInput";

/**
 * Story-only args consumed by the custom `render`: options for every Field
 * plus the form's initial values.
 */
type CreditCardInputStoryArgs = Pick<FieldProps, "size" | "disabled"> & {
  initialValues?: {
    cardNumber?: string;
    expiry?: string;
    securityCode?: string;
    nameOnCard?: string;
  };
  bankName?: string;
};

const meta = {
  title: "Form/CreditCardInput",
  component: CreditCardInput,
  tags: ["autodocs"],
  render: (
    { initialValues, bankName, ...props }: CreditCardInputStoryArgs,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{
        cardNumber: "",
        expiry: "",
        securityCode: "",
        nameOnCard: "",
        ...initialValues
      }}>
      <CreditCardInput maxWidth={480}>
        <CreditCardInput.Card bankName={bankName} />
        <Field name="cardNumber" required={true} {...props}>
          <Field.Label>Card number</Field.Label>
          <CreditCardInput.Number />
        </Field>
        <View flexDirection="row" gap="4xl">
          <View flex={1}>
            <Field name="expiry" required={true} {...props}>
              <Field.Label>Expiry date</Field.Label>
              <CreditCardInput.Expiry placeholder="MM/YY" />
            </Field>
          </View>
          <View flex={1}>
            <Field name="securityCode" required={true} {...props}>
              <Field.Label>Security code</Field.Label>
              <CreditCardInput.SecurityCode />
            </Field>
          </View>
        </View>
        <Field name="nameOnCard" required={true} {...props}>
          <Field.Label>Name on card</Field.Label>
          <CreditCardInput.Name />
        </Field>
      </CreditCardInput>
    </Form>
  )
} satisfies Meta<CreditCardInputStoryArgs>;

export default meta;

type Story = StoryObj<CreditCardInputStoryArgs>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    // The card shows placeholders until the fields are filled.
    await expect(canvas.getByText("•••• •••• •••• ••••")).toBeInTheDocument();
    await expect(canvas.getByText("MM/YY")).toBeInTheDocument();

    await userEvent.type(number, "4242424242424242");
    await expect(number).toHaveValue("4242 4242 4242 4242");
    // A month can't start with 2-9, so "9" is padded to "09".
    await userEvent.type(canvas.getByLabelText(/Expiry date/), "999");
    await expect(canvas.getByLabelText(/Expiry date/)).toHaveValue("09/99");
    await userEvent.type(canvas.getByLabelText(/Security code/), "12345");
    await expect(canvas.getByLabelText(/Security code/)).toHaveValue("123");
    await userEvent.type(canvas.getByLabelText(/Name on card/), "Jane Doe");

    // The card follows the fields, and the number's brand is shown on both.
    await waitFor(async () =>
      expect(canvas.getByText("4242 4242 4242 4242")).toBeInTheDocument()
    );
    await expect(canvas.getByText("09/99")).toBeInTheDocument();
    await expect(canvas.getByText("Jane Doe")).toBeInTheDocument();
    await expect(canvas.getAllByText("Visa")).toHaveLength(2);
    await expect(canvas.queryByText(/invalid|incomplete|expired/)).toBeNull();
  }
};

export const Visa: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "4111111111111111");
    await expect(number).toHaveValue("4111 1111 1111 1111");
    await expect(canvas.getAllByText("Visa")).toHaveLength(2);
  }
};

export const Amex: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    // Amex numbers are grouped 4-6-5 and take a 4 digit security code.
    await userEvent.type(number, "378282246310005");
    await expect(number).toHaveValue("3782 822463 10005");
    await userEvent.type(canvas.getByLabelText(/Security code/), "12345");
    await expect(canvas.getByLabelText(/Security code/)).toHaveValue("1234");
    await expect(canvas.getAllByText("Amex")).toHaveLength(2);
  }
};

export const Discover: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "6011111111111117");
    await expect(number).toHaveValue("6011 1111 1111 1117");
    await expect(canvas.getAllByText("Discover")).toHaveLength(2);
  }
};

export const UnionPay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "6221260000000000");
    await expect(number).toHaveValue("6221 2600 0000 0000");
    await expect(canvas.getAllByText("UnionPay")).toHaveLength(2);
  }
};

export const JCB: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "3530111333300000");
    await expect(number).toHaveValue("3530 1113 3330 0000");
    await expect(canvas.getAllByText("JCB")).toHaveLength(2);
  }
};

export const DinersClub: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "30569309025904");
    await expect(number).toHaveValue("3056 930902 5904");
    await expect(canvas.getAllByText("Diners Club")).toHaveLength(2);
  }
};

export const Mastercard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const number = canvas.getByLabelText(/Card number/);

    await userEvent.type(number, "5555555555554444");
    await expect(number).toHaveValue("5555 5555 5555 4444");
    await expect(canvas.getAllByText("Mastercard")).toHaveLength(2);
  }
};

export const CustomBankName: Story = {
  args: {
    initialValues: {
      cardNumber: "5555555555554444",
      expiry: "08/34",
      securityCode: "123",
      nameOnCard: "John Doe"
    },
    bankName: "Storm Bank"
  }
};

export const Invalid: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Fails the Luhn check.
    await userEvent.type(
      canvas.getByLabelText(/Card number/),
      "4242424242424241"
    );
    await userEvent.type(canvas.getByLabelText(/Expiry date/), "0120");

    // Errors are only reported once the field is left.
    await userEvent.type(canvas.getByLabelText(/Security code/), "12");
    await expect(
      await canvas.findByText("Card has expired")
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("Security code must be 3 digits")
    ).toBeNull();
    await userEvent.tab();
    await expect(
      await canvas.findByText("Security code must be 3 digits")
    ).toBeInTheDocument();
    await expect(
      await canvas.findByText("Card number is invalid")
    ).toBeInTheDocument();
  }
};

export const SavedCard: Story = {
  args: {
    initialValues: {
      cardNumber: "5555555555554444",
      expiry: "08/34",
      securityCode: "123",
      nameOnCard: "John Doe"
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByLabelText(/Card number/)).toHaveValue(
      "5555 5555 5555 4444"
    );
    await waitFor(async () =>
      expect(canvas.getByText("5555 5555 5555 4444")).toBeInTheDocument()
    );
    await expect(canvas.getAllByText("Mastercard")).toHaveLength(2);
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const LargeSize: Story = { args: { size: "lg" } };
