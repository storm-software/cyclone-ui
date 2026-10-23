---
title: Time picker
description: A time input with a masked text box and a clock popover. It supports 12-hour and 24-hour clocks and connects to a Field.
documentType: reference
tags: [component, time-picker, form, input, popover]
---

# Time picker

`TimePicker` is a time input. It has a masked text box and a clock popover. The user can type a time, step it with the keyboard, or press or drag the clock hand. The component builds on `Input` and `Popover`, so it shares the `Input` frame and sizes.

## Import

```tsx
import { TimePicker } from "@cyclone-ui/time-picker";
import {
  format,
  parse,
  getTimeFormat,
  TIME_MASK_12H,
  TIME_MASK_24H
} from "@cyclone-ui/time-picker";
```

## Usage

Inside a `Field`, the picker renders its own text box and clock button.

```tsx
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { TimePicker } from "@cyclone-ui/time-picker";

export function Example() {
  return (
    <Form name="meeting" initialValues={{ start: "14:30" }}>
      <Field name="start">
        <Field.Label>Start time</Field.Label>
        <TimePicker hourCycle={12} />
      </Field>
    </Form>
  );
}
```

The field value is a 24-hour `HH:mm` string. The picker formats, parses, and masks it for the hour cycle.

### Standalone

Outside a `Field`, supply the children and the state. The `Standalone` story shows the pattern:

```tsx
import { Clock } from "@cyclone-ui/icons";
import { TimePicker, format, getTimeFormat } from "@cyclone-ui/time-picker";
import { useState } from "react";

export function Standalone() {
  const [time, setTime] = useState("09:45");
  const [focused, setFocused] = useState(false);

  return (
    <TimePicker
      focused={focused}
      selectedTime={time}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={event => setTime(event.detail)}>
      <TimePicker.TextBox>
        <TimePicker.TextBox.Value
          value={format(time)}
          placeholder={getTimeFormat()}
          readOnly
        />
      </TimePicker.TextBox>
      <TimePicker.Separator />
      <TimePicker.Trigger>
        <Clock />
      </TimePicker.Trigger>
    </TimePicker>
  );
}
```

## Parts

| Part | Role |
| --- | --- |
| `TimePicker` | The control. It wraps `Input` in a popover trigger. |
| `TimePicker.TextBox` | The text box frame. |
| `TimePicker.TextBox.Value` | The masked text input. |
| `TimePicker.Separator` | The `Input.Separator`. |
| `TimePicker.Trigger` | The clock button. It has `Icon` and `Text` parts from `Button`. |

## Props

The component accepts the `Input` props, except the four props that it redefines:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hourCycle` | `12 \| 24` | `12` | A 12-hour clock with AM/PM, or a 24-hour clock. |
| `selectedTime` | `string \| null` | Parsed from the text | The time shown in the popover, as a 24-hour `HH:mm` string. |
| `onChange` | `(event: CustomEvent<string>) => any` | — | Called when a time is picked in the popover. `event.detail` is the 24-hour `HH:mm` value. |
| `onInput` | `(event: CustomEvent<string>) => any` | Field handler | Called when the user types in the text box. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The control size. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `name`, `disabled`, `focused` | — | Field values | Passed to the `Input`. |

### Exports

| Export | Description |
| --- | --- |
| `getTimeFormat(hourCycle?)` | Returns `"HH:MM AA"` for 12 hours (default), or `"HH:MM"` for 24 hours. |
| `format(value, hourCycle?)` | Formats a 24-hour `HH:mm` string, a `hh:mm AM` string, or a `Date` for the text input. It returns `""` for an invalid value. |
| `parse(value)` | Parses the same inputs to a 24-hour `HH:mm` string, or `null`. |
| `TIME_MASK_12H`, `TIME_MASK_24H` | The Maskito mask options for each hour cycle. |

## Behavior

- **Popover:** The clock opens below the input when it has focus. It starts on the hours view. After you pick the hour, it moves to the minutes view. Picking the minutes completes the time.
- **Clock header:** Two buttons switch between hours and minutes. In 12-hour mode, AM and PM buttons are shown. Each uses `aria-pressed`.
- **Keyboard:** Arrow Up and Arrow Down step the part under the caret by one: hours, minutes, or AM/PM. Space swaps AM/PM when the caret is in the AM/PM part. Hours and minutes wrap without carrying over.
- **Typing:** A typed value updates the field only when it is empty or a valid time.
- **Blur:** The text box returns to the last valid value.
- **Clear:** The field clear button is turned off.

The stories include `Keyboard`, `ClockSelection`, `TwentyFourHour`, `Standalone`, the floating and above label variants, `Required`, `Disabled`, the validation themes, and the three sizes.

## Accessibility

- The clock control group has `aria-label` of `Hours` or `Minutes`, depending on the view.
- The view and AM/PM buttons use `aria-pressed`.
- The text box is a native input, so users can type a time without the popover.

## Related

- [Design tokens](../tokens/index.md)
- [Text area](./text-area.md)

## Source

- [`components/time-picker/src/TimePicker.tsx`](../../../components/time-picker/src/TimePicker.tsx)
- [`components/time-picker/src/TimePicker.stories.tsx`](../../../components/time-picker/src/TimePicker.stories.tsx)
