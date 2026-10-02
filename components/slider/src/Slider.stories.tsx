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

import { SpeakerHigh, SpeakerLow } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, Theme, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { SliderMark, SliderProps, SliderValue } from "./Slider";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    defaultValue: 30,
    min: 0,
    max: 100,
    step: 1,
    size: "md",
    orientation: "horizontal",
    track: "normal",
    valueLabelDisplay: "auto",
    disabled: false,
    "aria-label": "Value"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"]
    },
    track: {
      control: "inline-radio",
      options: ["normal", "inverted", false]
    },
    valueLabelDisplay: {
      control: "inline-radio",
      options: ["auto", "on", "off"]
    }
  },
  decorators: [
    Story => (
      <View width={300} padding="8xl">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    getAriaLabel: () => "Value"
  },
  play: async ({ canvasElement }) => {
    const thumb = within(canvasElement).getByRole("slider");

    await expect(thumb).toHaveAttribute("aria-valuenow", "30");

    await userEvent.tab();
    await expect(thumb).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(thumb).toHaveAttribute("aria-valuenow", "31");

    await userEvent.keyboard("{End}");
    await expect(thumb).toHaveAttribute("aria-valuenow", "100");

    await userEvent.keyboard("{Home}");
    await expect(thumb).toHaveAttribute("aria-valuenow", "0");
  }
};

const VolumeSlider = (args: SliderProps) => {
  const [value, setValue] = useState<SliderValue>(30);

  return (
    <View flexDirection="row" alignItems="center" gap="7xl">
      <SpeakerLow size={24} color="inkBody" />
      <View flex={1}>
        <Slider
          {...args}
          getAriaLabel={() => "Volume"}
          value={value}
          onChange={setValue}
        />
      </View>
      <SpeakerHigh size={24} color="inkBody" />
    </View>
  );
};

/** A controlled slider flanked by icons. */
export const Continuous: Story = {
  args: {
    valueLabelDisplay: "off"
  },
  render: args => <VolumeSlider {...args} />
};

export const Sizes: Story = {
  render: args => (
    <View gap="7xl">
      <Slider {...args} size="sm" defaultValue={50} />
      <Slider {...args} size="md" defaultValue={50} />
      <Slider {...args} size="lg" defaultValue={50} />
    </View>
  )
};

/** Snaps to each step, with a mark at every step. */
export const Discrete: Story = {
  args: {
    defaultValue: 30,
    step: 10,
    min: 10,
    max: 110,
    marks: true
  }
};

export const DecimalSteps: Story = {
  args: {
    defaultValue: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    marks: true
  }
};

const temperatureMarks: SliderMark[] = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" }
];

export const CustomMarks: Story = {
  args: {
    defaultValue: 20,
    step: 10,
    marks: temperatureMarks,
    valueLabelFormat: value => `${value}°C`
  }
};

export const AlwaysVisibleLabel: Story = {
  args: {
    defaultValue: 80,
    step: 10,
    marks: true,
    valueLabelDisplay: "on"
  }
};

const RangeSlider = (args: SliderProps) => {
  const [value, setValue] = useState<SliderValue>([20, 37]);
  const [committed, setCommitted] = useState<SliderValue>([20, 37]);

  return (
    <View gap="7xl">
      <Slider
        {...args}
        getAriaLabel={index => (index === 0 ? "Minimum" : "Maximum")}
        value={value}
        onChange={setValue}
        onChangeCommitted={setCommitted}
      />
      <Text color="inkBody" fontFamily="caption">
        Committed: {String(committed)}
      </Text>
    </View>
  );
};

/** Pass an array to select a range. */
export const Range: Story = {
  render: args => <RangeSlider {...args} />
};

export const MinimumDistance: Story = {
  args: {
    defaultValue: [20, 40],
    minStepsBetweenThumbs: 10
  }
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    height: 300
  },
  render: args => (
    <View flexDirection="row" gap="14xl" height={300}>
      <Slider {...args} defaultValue={30} />
      <Slider {...args} defaultValue={[20, 37]} />
      <Slider {...args} defaultValue={30} marks={temperatureMarks} />
    </View>
  )
};

export const TrackInverted: Story = {
  args: {
    track: "inverted",
    marks: temperatureMarks
  },
  render: args => (
    <View gap="10xl">
      <Slider {...args} defaultValue={30} />
      <Slider {...args} defaultValue={[20, 37]} />
    </View>
  )
};

export const TrackFalse: Story = {
  args: {
    track: false,
    marks: temperatureMarks
  },
  render: args => (
    <View gap="10xl">
      <Slider {...args} defaultValue={37} />
      <Slider {...args} defaultValue={[20, 37, 50]} />
    </View>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    marks: temperatureMarks
  }
};

/** Wrap the slider in a theme to change its color. */
export const Themes: Story = {
  render: args => (
    <View gap="7xl">
      {["brand", "info", "success", "warning", "danger"].map(name => (
        <Theme key={name} name={name as "brand"}>
          <Slider {...args} />
        </Theme>
      ))}
    </View>
  )
};
