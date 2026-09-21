import { Form } from "@cyclone-ui/form";
import type { FormControlSize } from "@cyclone-ui/helpers";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { Search } from "@tamagui/lucide-icons-2";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { CheckboxField } from "../../../components/checkbox-field/src/CheckboxField";
import { DatePickerField } from "../../../components/date-picker-field/src/DatePickerField";
import { FilePickerField } from "../../../components/file-picker-field/src/FilePickerField";
import { InputField } from "../../../components/input-field/src/InputField";
import { OtpInputField } from "../../../components/otp-input-field/src/OtpInputField";
import { RadioGroupField } from "../../../components/radio-group-field/src/RadioGroupField";
import { SelectField } from "../../../components/select-field/src/SelectField";
import { SwitchField } from "../../../components/switch-field/src/SwitchField";
import { TextAreaField } from "../../../components/text-area-field/src/TextAreaField";

const sizes: FormControlSize[] = ["sm", "md", "lg"];
const items = [
  { name: "Apple", value: "apple" },
  { name: "Pear", value: "pear" }
];

function SizeComparison({ disabled = false }: { disabled?: boolean }) {
  return (
    <View
      backgroundColor="$background"
      minHeight="100vh"
      flexDirection="row"
      flexWrap="wrap"
      gap={32}
      padding={24}>
      {sizes.map(size => (
        <div
          key={size}
          data-form-size={size}
          style={{
            width: 340,
            display: "flex",
            flexDirection: "column",
            gap: 24
          }}>
          <h2>{size}</h2>
          <Form
            name={`sizes-${size}`}
            initialValues={{
              date: new Date(2026, 0, 28),
              check: true,
              text: "Example text"
            }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <InputField name="text" size={size} disabled={disabled}>
                <InputField.Label>Floating input</InputField.Label>
                <InputField.Control>
                  <InputField.Icon position="start">
                    <Search />
                  </InputField.Icon>
                  <InputField.Control.TextBox>
                    <InputField.Control.TextBox.Value
                      aria-label={`${size} input`}
                    />
                  </InputField.Control.TextBox>
                </InputField.Control>
                <InputField.Details>Supporting text</InputField.Details>
              </InputField>
              <InputField
                name="normal"
                size={size}
                variant="normal"
                disabled={disabled}>
                <InputField.Label>Normal input</InputField.Label>
                <InputField.Control>
                  <InputField.Control.TextBox>
                    <InputField.Control.TextBox.Value placeholder="Enter text" />
                  </InputField.Control.TextBox>
                </InputField.Control>
              </InputField>
              <InputField
                name="underline"
                size={size}
                variant="underline"
                disabled={disabled}>
                <InputField.Label>Underline input</InputField.Label>
                <InputField.Control>
                  <InputField.Control.TextBox>
                    <InputField.Control.TextBox.Value placeholder="Enter text" />
                  </InputField.Control.TextBox>
                </InputField.Control>
              </InputField>
              <SelectField
                name="select"
                size={size}
                items={items}
                disabled={disabled}>
                <SelectField.Label>Select fruit</SelectField.Label>
                <SelectField.Control placeholder="Choose fruit" />
              </SelectField>
              <DatePickerField name="date" size={size} disabled={disabled}>
                <DatePickerField.Label>Date</DatePickerField.Label>
                <DatePickerField.Control />
              </DatePickerField>
              <TextAreaField name="notes" size={size} disabled={disabled}>
                <TextAreaField.Label>Notes</TextAreaField.Label>
                <TextAreaField.Control placeholder="Write a note" />
              </TextAreaField>
              <CheckboxField name="check" size={size} disabled={disabled}>
                <CheckboxField.Label>Checkbox</CheckboxField.Label>
                <CheckboxField.Control />
              </CheckboxField>
              <SwitchField name="switch" size={size} disabled={disabled}>
                <SwitchField.Label>Switch</SwitchField.Label>
                <SwitchField.Control />
              </SwitchField>
              <RadioGroupField
                name="radio"
                size={size}
                items={items}
                disabled={disabled}>
                <RadioGroupField.Label>Radio group</RadioGroupField.Label>
                <RadioGroupField.Control />
              </RadioGroupField>
              <OtpInputField
                name="code"
                size={size}
                length={4}
                disabled={disabled}>
                <OtpInputField.Label>Verification code</OtpInputField.Label>
                <OtpInputField.Control />
              </OtpInputField>
              <FilePickerField name="file" size={size} disabled={disabled}>
                <FilePickerField.Label>Upload</FilePickerField.Label>
                <FilePickerField.Control />
              </FilePickerField>
            </div>
          </Form>
        </div>
      ))}
    </View>
  );
}

const meta = {
  title: "Form/Sizing",
  component: SizeComparison,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof SizeComparison>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AllSizes: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const inputHeights = sizes.map(
        size =>
          canvas.getByLabelText(`${size} input`).getBoundingClientRect().height
      );
      expect(inputHeights).toEqual([33, 43, 53]);
      const switchHeights = sizes.map(
        size =>
          within(
            canvasElement.querySelector(
              `[data-form-size="${size}"]`
            ) as HTMLElement
          )
            .getByRole("switch")
            .getBoundingClientRect().height
      );
      expect(switchHeights).toEqual([20, 24, 26]);
    });
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      for (const size of sizes) {
        expect(canvas.getByLabelText(`${size} input`)).toBeDisabled();
      }
    });
  }
};

function ChangingSize() {
  const [size, setSize] = useState<FormControlSize>("md");
  return (
    <>
      <button onClick={() => setSize("lg")}>Use large</button>
      <button onClick={() => setSize("sm")}>Use small</button>
      <Form name="changing-size">
        <InputField name="value" size={size}>
          <InputField.Control>
            <InputField.Control.TextBox>
              <InputField.Control.TextBox.Value aria-label="Resizable input" />
            </InputField.Control.TextBox>
          </InputField.Control>
        </InputField>
      </Form>
    </>
  );
}

export const ChangingSizeProp: Story = {
  render: () => <ChangingSize />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Resizable input");
    await userEvent.type(input, "Keep this value");
    await userEvent.click(canvas.getByText("Use large"));
    await waitFor(() => expect(input.getBoundingClientRect().height).toBe(53));
    await userEvent.click(canvas.getByText("Use small"));
    await waitFor(() => expect(input.getBoundingClientRect().height).toBe(33));
    await expect(input).toHaveValue("Keep this value");
  }
};
