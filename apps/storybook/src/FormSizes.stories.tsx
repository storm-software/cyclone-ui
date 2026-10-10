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
import type { FormControlSize } from "@cyclone-ui/helpers";
import { MagnifyingGlass } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useId, useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Checkbox } from "../../../components/checkbox/src/Checkbox";
import { DatePicker } from "../../../components/date-picker/src/DatePicker";
import { Field } from "../../../components/field/src/Field";
import { FilePicker } from "../../../components/file-picker/src/FilePicker";
import { Input } from "../../../components/input/src/Input";
import { OtpInput } from "../../../components/otp-input/src/OtpInput";
import { RadioGroup } from "../../../components/radio-group/src/RadioGroup";
import { Rating } from "../../../components/rating/src/Rating";
import { Select } from "../../../components/select/src/Select";
import { Slider } from "../../../components/slider/src/Slider";
import { Switch } from "../../../components/switch/src/Switch";
import { TextArea } from "../../../components/text-area/src/TextArea";

const sizes: FormControlSize[] = ["sm", "md", "lg"];
const items = [
  { name: "Apple", value: "apple" },
  { name: "Pear", value: "pear" }
];

function SizeComparison({ disabled = false }: { disabled?: boolean }) {
  const id = useId();

  return (
    <View
      backgroundColor="background"
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
            name={`sizes-${size}-${id}`}
            initialValues={{
              date: new Date(2026, 0, 28),
              check: true,
              text: "Example text",
              rating: 3,
              slider: 40
            }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Field name="text" size={size} disabled={disabled}>
                <Field.Label>Floating input</Field.Label>
                <Input>
                  <Input.TextBox>
                    <Field.Icon position="start">
                      <MagnifyingGlass />
                    </Field.Icon>
                    <Input.TextBox.Value aria-label={`${size} input`} />
                  </Input.TextBox>
                </Input>
                <Field.Details>Supporting text</Field.Details>
              </Field>
              <Field
                name="above"
                size={size}
                disabled={disabled}>
                <Field.Label variant="above">Label above input</Field.Label>
                <Input>
                  <Input.TextBox>
                    <Input.TextBox.Value placeholder="Enter text" />
                  </Input.TextBox>
                </Input>
              </Field>
              <Field
                name="outlined"
                size={size}
                variant="outlined"
                disabled={disabled}>
                <Field.Label>Outlined input</Field.Label>
                <Input>
                  <Input.TextBox>
                    <Input.TextBox.Value placeholder="Enter text" />
                  </Input.TextBox>
                </Input>
              </Field>
              <Field
                name="underlined"
                size={size}
                variant="underlined"
                disabled={disabled}>
                <Field.Label>Underlined input</Field.Label>
                <Input>
                  <Input.TextBox>
                    <Input.TextBox.Value placeholder="Enter text" />
                  </Input.TextBox>
                </Input>
              </Field>
              <Field
                name="inlined"
                size={size}
                variant="inlined"
                disabled={disabled}>
                <Field.Label>Inlined input</Field.Label>
                <Input>
                  <Input.TextBox>
                    <Input.TextBox.Value placeholder="Enter text" />
                  </Input.TextBox>
                </Input>
              </Field>
              <Field name="select" size={size} items={items} disabled={disabled}>
                <Field.Label>Select fruit</Field.Label>
                <Select placeholder="Choose fruit" />
              </Field>
              <Field name="date" size={size} disabled={disabled}>
                <Field.Label>Date</Field.Label>
                <DatePicker />
              </Field>
              <Field name="notes" size={size} disabled={disabled}>
                <Field.Label>Notes</Field.Label>
                <TextArea placeholder="Write a note" />
              </Field>
              <Field name="check" size={size} disabled={disabled}>
                <Field.Label>Checkbox</Field.Label>
                <Checkbox />
              </Field>
              <Field name="switch" size={size} disabled={disabled}>
                <Field.Label>Switch</Field.Label>
                <Switch />
              </Field>
              <Field name="radio" size={size} items={items} disabled={disabled}>
                <Field.Label>Radio group</Field.Label>
                <RadioGroup />
              </Field>
              <Field name="rating" size={size} disabled={disabled}>
                <Field.Label>Rating</Field.Label>
                <Rating />
              </Field>
              <Field name="slider" size={size} disabled={disabled}>
                <Field.Label>Slider</Field.Label>
                <Slider />
              </Field>
              <Field name="code" size={size} disabled={disabled}>
                <Field.Label>Verification code</Field.Label>
                <OtpInput length={4} />
              </Field>
              <Field name="file" size={size} disabled={disabled}>
                <Field.Label>Upload</Field.Label>
                <FilePicker />
              </Field>
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
  const id = useId();

  return (
    <>
      <button onClick={() => setSize("lg")}>Use large</button>
      <button onClick={() => setSize("sm")}>Use small</button>
      <Form name={`changing-size-${id}`}>
        <Field name="value" size={size}>
          <Input>
            <Input.TextBox>
              <Input.TextBox.Value aria-label="Resizable input" />
            </Input.TextBox>
          </Input>
        </Field>
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
    await waitFor(async () =>
      expect(input.getBoundingClientRect().height).toBe(53)
    );
    await userEvent.click(canvas.getByText("Use small"));
    await waitFor(async () =>
      expect(input.getBoundingClientRect().height).toBe(33)
    );
    await expect(input).toHaveValue("Keep this value");
  }
};
