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
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { ToggleGroup } from "@cyclone-ui/toggle-group";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { Color, ColorChannel, ColorSpace } from "./ColorPicker";
import { ColorPicker, parseColor } from "./ColorPicker";

interface ColorPickerValidation {
  onChange: (() => { message: string; type: string }[])[];
}

/** Story-only args consumed by the custom `render` (the Form and Field). */
type ColorPickerStoryArgs = GetProps<typeof ColorPicker> & {
  labelVariant?: FieldLabelVariant;
  required?: boolean;
  validate?: ColorPickerValidation;
};

const CUSTOM_SWATCHES = [
  "#fca5a5",
  "#fdba74",
  "#fef08a",
  "#86efac",
  "#5eead4",
  "#a5b4fc",
  "#d8b4fe",
  "#f9a8d4",
  "#fda4af"
];

const meta: Meta<ColorPickerStoryArgs> = {
  title: "Form/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  args: {
    defaultValue: "#0485F7"
  },
  render: (
    { defaultValue, labelVariant, variant, swatches, ...props }: any,
    { id }: { id: string }
  ) => (
    <Form
      name={`formName-${id}`}
      initialValues={{ colorPickerName: defaultValue }}>
      <Field name="colorPickerName" {...props} variant={variant}>
        <Field.Label variant={labelVariant}>Label Text</Field.Label>
        <ColorPicker variant={variant} size={props.size} swatches={swatches} />
      </Field>
    </Form>
  )
} satisfies Meta<ColorPickerStoryArgs>;

export default meta;

type Story = StoryObj<ColorPickerStoryArgs>;

const validation = (
  type: "danger" | "warning" | "info" | "discovery" | "success"
): ColorPickerValidation => ({
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole("textbox");
    await expect(textbox).toHaveValue("#0485F7");

    // Typed colors apply live and are formatted on blur.
    await userEvent.clear(textbox);
    await userEvent.type(textbox, "f43");
    await expect(
      canvas.getByRole("button", { name: /currently #FF4433/ })
    ).toBeInTheDocument();
    await userEvent.tab();
    await expect(textbox).toHaveValue("#FF4433");

    // The swatch opens the popover, whose slider edits the same color.
    await userEvent.click(canvas.getByRole("button", { name: /Select color/ }));
    const body = within(canvasElement.ownerDocument.body);
    const hue = await body.findByRole("slider", { name: "Hue" });
    (hue as unknown as { focus: () => void }).focus();
    await userEvent.keyboard("{End}");
    await waitFor(async () => expect(textbox).toHaveValue("#FF3333"));
  }
};

export const Empty: Story = {
  args: { defaultValue: null }
};

export const NoSwatches: Story = {
  args: { defaultValue: "#F43F5E", swatches: false }
};

export const CustomSwatches: Story = {
  args: { defaultValue: "#F43F5E", swatches: CUSTOM_SWATCHES }
};

export const Floating: Story = {
  args: { labelVariant: "floating" }
};

export const UnderlinedFloating: Story = {
  args: { variant: "underlined", labelVariant: "floating" }
};

export const InlinedFloating: Story = {
  args: { variant: "inlined", labelVariant: "floating" }
};

export const OutlinedAbove: Story = {
  args: { variant: "outlined", labelVariant: "above" }
};

export const UnderlinedAbove: Story = {
  args: { variant: "underlined", labelVariant: "above" }
};

export const InlinedAbove: Story = {
  args: { variant: "inlined", labelVariant: "above" }
};

/** The popover holds only what its children compose, like HeroUI's basic picker. */
export const Basic: Story = {
  render: () => (
    <ColorPicker aria-label="Color" defaultValue="#0485F7">
      <ColorPicker.Area />
      <ColorPicker.Slider channel="hue" />
    </ColorPicker>
  )
};

export const Controlled: Story = {
  render: () => {
    const [color, setColor] = useState<Color | null>(() =>
      parseColor("#325578")
    );

    return (
      <View gap="4xl" width={320}>
        <ColorPicker aria-label="Color" value={color} onChange={setColor}>
          <ColorPicker.Swatches
            colors={CUSTOM_SWATCHES}
            justifyContent="center"
          />
          <ColorPicker.Area />
          <ColorPicker.Slider channel="hue" showLabel={false} />
        </ColorPicker>
        <Text fontFamily="caption" fontSize={14} color="emphasis">
          Selected: {color?.toString("hex") ?? "none"}
        </Text>
      </View>
    );
  }
};

const CHANNELS: Record<ColorSpace, ColorChannel[]> = {
  hsl: ["hue", "saturation", "lightness", "alpha"],
  hsb: ["hue", "saturation", "brightness", "alpha"],
  rgb: ["red", "green", "blue", "alpha"]
};

/** One slider per channel, alpha included, in the chosen color space. */
export const WithSliders: Story = {
  render: () => {
    const [colorSpace, setColorSpace] = useState<ColorSpace>("hsl");

    return (
      <ColorPicker aria-label="Color" defaultValue="hsl(219, 58%, 93%)">
        <ToggleGroup
          size="sm"
          fluid={true}
          allowEmpty={false}
          value={colorSpace}
          onValueChange={value => setColorSpace(value as ColorSpace)}>
          {(Object.keys(CHANNELS) as ColorSpace[]).map(space => (
            <ToggleGroup.Item key={space} value={space}>
              {space.toUpperCase()}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
        {CHANNELS[colorSpace].map(channel => (
          <ColorPicker.Slider
            key={channel}
            channel={channel}
            colorSpace={colorSpace}
          />
        ))}
      </ColorPicker>
    );
  }
};

export const Required: Story = {
  args: { required: true, defaultValue: null }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const Error: Story = {
  args: { validate: validation("danger") }
};

export const Warning: Story = {
  args: { validate: validation("warning") }
};

export const Success: Story = {
  args: { validate: validation("success") }
};

export const SmallSize: Story = { args: { size: "sm" } };

export const MediumSize: Story = { args: { size: "md" } };

export const LargeSize: Story = { args: { size: "lg" } };
