---
title: Time Picker
description: A time input with a masked text box and a clock popover. It supports 12-hour and 24-hour clocks and connects to a Field.
documentType: reference
tags: [component, time-picker, form, input, popover]
component:
  name: time-picker
  package: "@cyclone-ui/time-picker"
  stories:
    - title: Form/TimePicker
      file: components/time-picker/src/TimePicker.stories.tsx
---

# Time Picker

`TimePicker` is a time input. It has a masked text box and a clock popover. The user can type a time, step it with the keyboard, or press or drag the clock hand. The component builds on `Input` and `Popover`, so it shares the `Input` frame and sizes.

Use it for a time of day in a form. For a date or a date range, use [Date picker](./date-picker.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add time-picker
pnpm install
```

- **Files:** `TimePicker.tsx` and `utilities.ts`. The CLI writes them to `<path>/time-picker/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@maskito/core`, `@maskito/kit`, `@tamagui/core`, and `@tamagui/stacks`.

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

## Anatomy

```tsx
<TimePicker>
  <TimePicker.TextBox>
    <TimePicker.TextBox.Value />
  </TimePicker.TextBox>
  <TimePicker.Separator />
  <TimePicker.Trigger>{icon}</TimePicker.Trigger>
</TimePicker>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TimePicker` | An [Input](./input.md) frame (a Tamagui `XStack`) that is the trigger (`asChild`) of a [Popover](./popover.md). Below the `sm` breakpoint, the popover adapts to a bottom [Sheet](./sheet.md). | The control. It holds the hour cycle, the clock view, and the open state. |
| Clock (in the popover) | A Tamagui `YStack` in the `base` theme. The header has hour and minute [Buttons](./button.md) and, for a 12-hour clock, `AM` and `PM` ghost buttons. The face is a circular `View` with `role="group"` that holds a circular button for each number. | Picks the hours, then the minutes. The face takes the pointer input, so the user can press a number or drag the hand. |
| `TimePicker.TextBox` | `Input.TextBox`, a Tamagui `XStack` | The text box frame. |
| `TimePicker.TextBox.Value` | `Input.TextBox.Value`, a native `<input>` on web | The masked text input. |
| `TimePicker.Separator` | `Input.Separator`, a 1 px Tamagui `View` | A vertical line between the text box and the trigger. |
| `TimePicker.Trigger` | `Field.Icon`, a circular ghost [Button](./button.md), with `pointerEvents="none"` | Shows the clock icon. It takes no pointer input. A press on the input opens the clock. |
| `TimePicker.Trigger.Icon`, `TimePicker.Trigger.Text` | `Button.Icon` and `Button.Text` | Icon and label inside the trigger. |

`TimePickerTextBox`, `TimePickerTextBoxValue`, `TimePickerSeparator`, `TimePickerTrigger`, `TimePickerTriggerIcon`, and `TimePickerTriggerText` are also exported by name. Use them in React Server Components, which cannot read `TimePicker.TextBox` from a client module.

## Examples

The examples are the stories in [`TimePicker.stories.tsx`](../../../components/time-picker/src/TimePicker.stories.tsx). Except for `Standalone`, each story renders the picker inside a `Form` and a `Field` with a label.

| Stories | What they show |
| --- | --- |
| `Base` | The default 12-hour picker in a field. |
| `Floating`, `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating` | A floating label on the default, `outlined`, `underlined`, and `inlined` variants. |
| `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | A label above the `outlined`, `underlined`, and `inlined` variants. |
| `Description` | A label above, and a long `Field.Details` text that wraps. |
| `Keyboard` | Starts at `14:30`, shown as `02:30 PM`. The play function swaps AM and PM with Space, Arrow Up, and Arrow Down, then steps the hours up and the minutes down. |
| `ClockSelection` | Starts at `14:30`. The play function presses `04` on the hours face, which moves to the minutes. It drags the hand from `10` to `25` and releases it, which closes the clock. Then it presses `AM`. |
| `TwentyFourHour` | `hourCycle={24}`, starting at `23:30`. Arrow Up wraps the hours to `00`. The face has 24 hour buttons and no AM/PM. The play function picks `15` with the pointer and `45` with the keyboard. |
| `Standalone` | A picker outside a field. It controls `focused`, `selectedTime`, and `onChange`, and shows the time in a read-only text box. |
| `Required`, `Disabled` | A required field and a disabled field. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows its message before blur (`showErrorsBeforeBlur`). |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

The component accepts the `Input` props, except the four props that it redefines:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hourCycle` | `12 \| 24` | `12` | A 12-hour clock with AM/PM, or a 24-hour clock. |
| `selectedTime` | `string \| null` | Parsed from the text in a field | The time shown in the popover, as a 24-hour `HH:mm` string. |
| `onChange` | `(event: CustomEvent<string>) => any` | — | Called when the clock changes the time: a picked number, each value the dragged hand passes, and the AM/PM buttons. Typed text does not call it. `event.detail` is the 24-hour `HH:mm` value. When you set it, the picker does not update the field value. |
| `onInput` | `(event: CustomEvent<string>) => any` | Field handler | Called when the user types in the text box. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The control size. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `focused` | `boolean` | Field value | The popover is open while this is `true` and the picker is not read-only. |
| `readOnly` | `boolean` | Field value, else `false` | Keeps the popover closed and ignores input. |
| `name`, `disabled` | — | Field values | Passed to the `Input`. |

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
- **Keyboard:** Inside a field, Arrow Up and Arrow Down step the part under the caret by one: hours, minutes, or AM/PM. Space swaps AM/PM when the caret is in the AM/PM part. Hours and minutes wrap without carrying over.
- **Typing:** A typed value updates the field only when it is empty or a valid time.
- **Blur:** The text box returns to the last valid value.
- **Clear:** The field clear button is turned off.

## Accessibility

- The clock control group has `aria-label` of `Hours` or `Minutes`, depending on the view.
- The view and AM/PM buttons use `aria-pressed`.
- The text box is a native input, so users can type a time without the popover.
- Each number on the clock face is a button with `aria-pressed`. The buttons take no pointer input, but users can focus one and press Enter to pick it.
- `TimePicker.Trigger` takes no pointer input and has no press handler. It is a visual cue.

## Related

- [Date picker](./date-picker.md)
- [Field](./field.md)
- [Input](./input.md)
- [Popover](./popover.md)
- [Design tokens](../tokens/index.md)
- [Text area](./text-area.md)

## Source

- [`components/time-picker/src/TimePicker.tsx`](../../../components/time-picker/src/TimePicker.tsx)
- [`components/time-picker/src/utilities.ts`](../../../components/time-picker/src/utilities.ts)
- [`components/time-picker/src/TimePicker.stories.tsx`](../../../components/time-picker/src/TimePicker.stories.tsx) (title: `Form/TimePicker`)
