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
import { SpeakerHigh, SpeakerLow } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, Theme, View } from "@tamagui/core";
import { useState } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import type { SliderMark, SliderProps, SliderValue } from "./Slider";
import { Slider } from "./Slider";

type SliderStoryArgs = SliderProps &
  Pick<FieldProps<SliderValue>, "required" | "theme" | "validate">;

const meta: Meta<SliderStoryArgs> = {
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
  ],
  render: (
    {
      defaultValue,
      disabled,
      required,
      size,
      theme,
      validate,
      ...control
    }: SliderStoryArgs,
    { id }: { id: string }
  ) => (
    <Form name={`formName-${id}`} initialValues={{ sliderName: defaultValue }}>
      <Field
        name="sliderName"
        disabled={disabled}
        required={required}
        size={size}
        theme={theme}
        validate={validate}>
        <Field.Label>Label Text</Field.Label>
        <Slider {...control} />
      </Field>
    </Form>
  )
};

export default meta;
type Story = StoryObj<SliderStoryArgs>;

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

export const NoInitialValue: Story = {
  args: {
    defaultValue: undefined
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

const VolumeSlider = (args: SliderProps) => {
  const [value, setValue] = useState<SliderValue>(30);

  return (
    <View flexDirection="row" alignItems="center" gap="7xl">
      <SpeakerLow size={24} color="secondary" />
      <View flex={1}>
        <Slider
          {...args}
          getAriaLabel={() => "Volume"}
          value={value}
          onChange={setValue}
        />
      </View>
      <SpeakerHigh size={24} color="secondary" />
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

export const Marks: Story = {
  args: {
    defaultValue: 20,
    step: 10,
    marks: true,
    valueLabelDisplay: "auto"
  }
};

export const LabelledMarks: Story = {
  args: {
    defaultValue: 37,
    marks: temperatureMarks,
    valueLabelDisplay: "auto",
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
      <Text color="secondary" fontFamily="caption">
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

/** Shows a warning above 80. */
export const MaximumValue: Story = {
  args: {
    defaultValue: 80,
    validate: {
      onChange: [
        (value: number) =>
          value > 80
            ? [{ message: "Values above 80 may be unstable", type: "warning" }]
            : []
      ]
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findByRole("slider");

    await expect(canvas.queryByText("Values above 80 may be unstable")).toBe(
      null
    );
    await userEvent.tab();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => expect(slider).toHaveAttribute("aria-valuenow", "81"));
    await waitFor(() =>
      expect(canvas.getByText("Values above 80 may be unstable")).toBeVisible()
    );
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

export const Discovery: Story = {
  args: {
    validate: validation("discovery")
  }
};

export const Error: Story = {
  args: {
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
