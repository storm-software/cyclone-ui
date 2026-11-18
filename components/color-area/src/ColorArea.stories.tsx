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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, View } from "@tamagui/core";
import { useState } from "react";
import type { Color, ColorChannel, ColorSpace } from "./ColorArea";
import { ColorArea, parseColor } from "./ColorArea";

const meta: Meta<typeof ColorArea> = {
  title: "Form/ColorArea",
  component: ColorArea,
  tags: ["autodocs"],
  args: {
    defaultValue: "rgb(116, 52, 255)",
    showDots: false,
    disabled: false
  },
  decorators: [
    Story => (
      <View backgroundColor="canvas" padding="7xl" width={480}>
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => (
    <ColorArea {...args}>
      <ColorArea.Thumb />
    </ColorArea>
  )
};

export const WithDots: Story = {
  args: { showDots: true, defaultValue: "hsl(200, 100%, 50%)" }
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "hsl(200, 100%, 50%)" }
};

const ColorValue = ({ color, format }: { color: Color; format: string }) => (
  <View flexDirection="row" alignItems="center" gap="3xl">
    <View
      width={32}
      height={32}
      borderRadius="sm"
      borderWidth={1}
      borderColor="hairline"
      backgroundColor={color.toString("css")}
    />
    <Text fontFamily="code" fontSize={14} color="emphasis">
      {format}
    </Text>
  </View>
);

export const Controlled: Story = {
  render: () => {
    const [color, setColor] = useState<Color>(parseColor("#9B80FF"));

    return (
      <View gap="4xl">
        <ColorArea
          colorSpace="rgb"
          xChannel="red"
          yChannel="green"
          value={color}
          onChange={setColor}
        />
        <ColorValue color={color} format={color.toString("hex")} />
      </View>
    );
  }
};

const CHANNELS: Record<ColorSpace, ColorChannel[]> = {
  hsb: ["hue", "saturation", "brightness"],
  hsl: ["hue", "saturation", "lightness"],
  rgb: ["red", "green", "blue"]
};

const DEFAULT_AXES: Record<ColorSpace, [ColorChannel, ColorChannel]> = {
  hsb: ["saturation", "brightness"],
  hsl: ["saturation", "lightness"],
  rgb: ["blue", "green"]
};

const Choice = <T extends string>({
  options,
  value,
  disabled = [],
  onChange
}: {
  options: T[];
  value: T;
  disabled?: T[];
  onChange: (value: T) => void;
}) => (
  <View flexDirection="row" gap="sm">
    {options.map(option => (
      <View
        key={option}
        role="button"
        aria-pressed={option === value}
        aria-disabled={disabled.includes(option)}
        paddingHorizontal="2xl"
        paddingVertical="sm"
        borderRadius="sm"
        borderWidth={1}
        borderColor={option === value ? "primary" : "hairline"}
        opacity={disabled.includes(option) ? 0.4 : 1}
        cursor={disabled.includes(option) ? "not-allowed" : "pointer"}
        onPress={() => !disabled.includes(option) && onChange(option)}>
        <Text fontFamily="caption" fontSize={14} color="emphasis">
          {option}
        </Text>
      </View>
    ))}
  </View>
);

/** The same channel can't be on both axes, so each axis disables the other's. */
export const ColorSpaceAndChannels: Story = {
  render: () => {
    const [colorSpace, setColorSpace] = useState<ColorSpace>("hsb");
    const [color, setColor] = useState<Color>(() =>
      parseColor("hsb(219, 58%, 93%)")
    );
    const [[xChannel, yChannel], setAxes] = useState(DEFAULT_AXES.hsb);

    return (
      <View gap="4xl">
        <Choice
          options={["rgb", "hsl", "hsb"] as ColorSpace[]}
          value={colorSpace}
          onChange={space => {
            setColorSpace(space);
            setAxes(DEFAULT_AXES[space]);
          }}
        />
        <Choice
          options={CHANNELS[colorSpace]}
          value={xChannel}
          disabled={[yChannel]}
          onChange={channel => setAxes([channel, yChannel])}
        />
        <Choice
          options={CHANNELS[colorSpace]}
          value={yChannel}
          disabled={[xChannel]}
          onChange={channel => setAxes([xChannel, channel])}
        />
        <ColorArea
          colorSpace={colorSpace}
          xChannel={xChannel}
          yChannel={yChannel}
          value={color}
          onChange={setColor}
        />
        <ColorValue color={color} format={color.toString(colorSpace)} />
      </View>
    );
  }
};

export const CustomStyles: Story = {
  render: args => (
    <ColorArea {...args} maxWidth={176} borderRadius={24}>
      <ColorArea.Thumb borderWidth={4} />
    </ColorArea>
  )
};
