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
import { Clock } from "@cyclone-ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GetProps } from "@tamagui/core";
import { useState } from "react";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";
import { format, getTimeFormat, TimePicker } from "./TimePicker";

interface TimePickerValidation {
  onChange: (() => { message: string; type: string }[])[];
}

/** Story-only args consumed by the custom `render` (the Form and Field). */
type TimePickerStoryArgs = GetProps<typeof TimePicker> & {
  initialValue?: string;
  labelVariant?: FieldLabelVariant;
  required?: boolean;
  validate?: TimePickerValidation;
};

const meta: Meta<TimePickerStoryArgs> = {
  title: "Form/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  render: (
    { hourCycle, initialValue, labelVariant, variant, ...props }: any,
    { id }: { id: string }
  ) => {
    return (
      <Form
        name={`formName-${id}`}
        initialValues={{ timePickerName: initialValue ?? null }}>
        <Field name="timePickerName" {...props} variant={variant}>
          <Field.Label variant={labelVariant}>Label Text</Field.Label>
          <TimePicker
            hourCycle={hourCycle}
            variant={variant}
            size={props.size}
          />
        </Field>
      </Form>
    );
  }
} satisfies Meta<TimePickerStoryArgs>;

export default meta;

type Story = StoryObj<TimePickerStoryArgs>;

const validation = (
  type:
    | "danger"
    | "warning"
    | "info"
    | "discovery"
    | "success"
    | "positive"
    | "negative"
): TimePickerValidation => ({
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
  args: {}
};

export const Floating: Story = {
  args: {
    labelVariant: "floating"
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

export const Keyboard: Story = {
  args: {
    initialValue: "14:30"
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("textbox");
    const pressAt = async (caret: number, key: string) => {
      input.focus();
      input.setSelectionRange(caret, caret);
      await userEvent.keyboard(key);
    };

    await expect(input).toHaveValue("02:30\u00A0PM");

    // Space, up and down swap the meridiem.
    await pressAt(7, " ");
    await expect(input).toHaveValue("02:30\u00A0AM");
    await pressAt(7, "{ArrowUp}");
    await expect(input).toHaveValue("02:30\u00A0PM");
    await pressAt(7, "{ArrowDown}");
    await expect(input).toHaveValue("02:30\u00A0AM");

    // Up and down step the hours and minutes, wrapping without carrying over.
    await pressAt(1, "{ArrowUp}");
    await expect(input).toHaveValue("03:30\u00A0AM");
    await pressAt(4, "{ArrowDown}");
    await expect(input).toHaveValue("03:29\u00A0AM");
  }
};

// Points the pointer at a number on a clock face.
const at = (dial: HTMLElement, label: string) => {
  const rect = within(dial)
    .getByRole("button", { name: label })
    .getBoundingClientRect();

  return {
    target: dial,
    coords: {
      clientX: rect.x + rect.width / 2,
      clientY: rect.y + rect.height / 2
    }
  };
};

export const ClockSelection: Story = {
  args: {
    initialValue: "14:30"
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole("textbox");
    // One session, so a button pressed in one call is released in a later one.
    const user = userEvent.setup();

    // Pressing a number picks it, and moves on to the minutes.
    await user.click(input);
    const hours = await screen.findByRole("group", { name: "Hours" });
    await user.pointer({ keys: "[MouseLeft]", ...at(hours, "04") });
    await expect(input).toHaveValue("04:30\u00A0PM");

    // Dragging the hand picks the minutes it passes, and releasing it closes
    // the clock.
    const minutes = await screen.findByRole("group", { name: "Minutes" });
    await user.pointer({ keys: "[MouseLeft>]", ...at(minutes, "10") });
    await expect(input).toHaveValue("04:10\u00A0PM");
    await user.pointer(at(minutes, "25"));
    await expect(input).toHaveValue("04:25\u00A0PM");
    await user.pointer({ keys: "[/MouseLeft]", ...at(minutes, "25") });
    await waitFor(async () => expect(minutes).not.toBeVisible());

    await user.click(input);
    await user.click(await screen.findByRole("button", { name: "AM" }));
    await expect(input).toHaveValue("04:25\u00A0AM");
  }
};

export const TwentyFourHour: Story = {
  args: {
    hourCycle: 24,
    initialValue: "23:30"
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>("textbox");
    await expect(input).toHaveValue("23:30");

    input.focus();
    input.setSelectionRange(1, 1);
    await userEvent.keyboard("{ArrowUp}");
    await expect(input).toHaveValue("00:30");

    // 00 and 13 to 23 sit on an inner ring, and there is no AM/PM.
    await userEvent.click(input);
    const hours = await screen.findByRole("group", { name: "Hours" });
    await expect(within(hours).getAllByRole("button")).toHaveLength(24);
    await expect(screen.queryByRole("button", { name: "AM" })).toBeNull();
    await userEvent.pointer({ keys: "[MouseLeft]", ...at(hours, "15") });
    await expect(input).toHaveValue("15:30");

    // The numbers can also be picked with the keyboard.
    const minutes = await screen.findByRole("group", { name: "Minutes" });
    within(minutes).getByRole("button", { name: "45" }).focus();
    await userEvent.keyboard("{Enter}");
    await expect(input).toHaveValue("15:45");
  }
};

export const Standalone: Story = {
  render: props => {
    const [time, setTime] = useState("09:45");
    const [focused, setFocused] = useState(false);

    return (
      <TimePicker
        {...props}
        focused={focused}
        selectedTime={time}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={event => setTime(event.detail)}>
        <TimePicker.TextBox>
          <TimePicker.TextBox.Value
            value={format(time)}
            placeholder={getTimeFormat()}
            readOnly={true}
          />
        </TimePicker.TextBox>
        <TimePicker.Separator />
        <TimePicker.Trigger>
          <Clock />
        </TimePicker.Trigger>
      </TimePicker>
    );
  }
};

export const Required: Story = {
  args: {
    required: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
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
