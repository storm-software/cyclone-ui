---
title: Date Picker
description: Reference for the DatePicker component, a masked date field with a calendar popover for one date or a range.
documentType: reference
tags: [component, form, date]
component:
  name: date-picker
  package: "@cyclone-ui/date-picker"
  stories:
    - title: Form/DatePicker
      file: components/date-picker/src/DatePicker.stories.tsx
---

# Date Picker

`DatePicker` is a masked text field with a calendar popover. The calendar has day, month, and year views. The user can pick one date, or a start and end date.

Inside a [Field](./field.md), the picker formats, parses, and masks the field value for the current mode and separator.

Use it for a date field in a form, where the user can type the date or pick it. To show a calendar without a text field, use [Calendar](./calendar.md). For a time of day, use [Time picker](./time-picker.md).

Source: [`components/date-picker`](https://github.com/storm-software/cyclone-ui/tree/main/components/date-picker)

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add date-picker
pnpm install
```

- **Files:** `DatePicker.tsx` and `utilities.ts`. The CLI writes them to `<path>/date-picker/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Calendar](./calendar.md), [Container](./container.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@maskito/core`, `@maskito/kit`, `@stryke/date`, and `@tamagui/core`.

## Import

```tsx
import { DatePicker } from "@cyclone-ui/date-picker";
import {
  format,
  formatRange,
  getDateFormat,
  getDateRangeFormat,
  parse,
  parseRange
} from "@cyclone-ui/date-picker";
```

## Usage

Inside a `Field`, the picker renders its own text box, separator, and calendar icon. The field label floats by default.

```tsx
import { DatePicker } from "@cyclone-ui/date-picker";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";

export function Example() {
  return (
    <Form name="booking" initialValues={{ date: null }}>
      <Field name="date">
        <Field.Label>Date</Field.Label>
        <DatePicker separator="/" />
      </Field>
    </Form>
  );
}
```

For a range, set `mode="range"`.

### Standalone

Outside a `Field`, supply the children and the state. The popover is open only while `focused` is `true`, so control `focused` with `onFocus` and `onBlur`. The `Range` story shows the pattern:

```tsx
import { Calendar } from "@cyclone-ui/icons";
import {
  DatePicker,
  formatRange,
  getDateRangeFormat
} from "@cyclone-ui/date-picker";
import { useState } from "react";

export function Standalone() {
  const [dates, setDates] = useState<Date[]>([]);
  const [focused, setFocused] = useState(false);

  return (
    <DatePicker
      mode="range"
      focused={focused}
      selectedDates={dates}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onDatesChange={event => setDates(event.detail)}>
      <DatePicker.TextBox>
        <DatePicker.TextBox.Value
          value={formatRange(dates)}
          placeholder={getDateRangeFormat()}
          readOnly={true}
        />
      </DatePicker.TextBox>
      <DatePicker.Separator />
      <DatePicker.Trigger>
        <Calendar />
      </DatePicker.Trigger>
    </DatePicker>
  );
}
```

## Anatomy

```tsx
<DatePicker>
  <DatePicker.TextBox>
    <DatePicker.TextBox.Value />
  </DatePicker.TextBox>
  <DatePicker.Separator />
  <DatePicker.Trigger>{icon}</DatePicker.Trigger>
</DatePicker>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `DatePicker` | An [Input](./input.md) frame (a Tamagui `XStack`) that is the trigger (`asChild`) of a [Popover](./popover.md). The popover holds a [Calendar](./calendar.md). Below the `sm` breakpoint, the popover adapts to a bottom [Sheet](./sheet.md). | The field, the mask, and the calendar popover. It holds the mode, the separator, the size, the variant, and the open state. |
| `DatePicker.TextBox` | `Input.TextBox`, a Tamagui `XStack` | The text box frame. |
| `DatePicker.TextBox.Value` | `Input.TextBox.Value`, a native `<input>` on web | The masked input value. A `placeholder` of `"MM.DD.YYYY"` (`DEFAULT_DATE_FORMAT`) changes to the format for the current mode and separator. |
| `DatePicker.Separator` | `Input.Separator`, a 1 px Tamagui `View` | A visual separator. Same part as `Input.Separator`. |
| `DatePicker.Trigger` | `Field.Icon`, a circular ghost [Button](./button.md), with `pointerEvents="none"` | Shows the calendar icon. It takes no pointer input. A press on the input opens the calendar. |
| `DatePicker.Trigger.Icon`, `DatePicker.Trigger.Text` | `Button.Icon` and `Button.Text` | Icon and label inside the trigger. |

`DatePickerTextBox`, `DatePickerTextBoxValue`, `DatePickerSeparator`, `DatePickerTrigger`, `DatePickerTriggerIcon`, and `DatePickerTriggerText` are also exported by name. Use them in React Server Components, which cannot read `DatePicker.TextBox` from a client module.

## Examples

The examples are the stories in [`DatePicker.stories.tsx`](../../../components/date-picker/src/DatePicker.stories.tsx). Except for `Range`, each story renders the picker inside a `Form` and a `Field` with a label.

| Stories | What they show |
| --- | --- |
| `Base` | The default picker in a field. |
| `Floating`, `OutlinedFloating`, `UnderlinedFloating`, `InlinedFloating` | A floating label on the default, `outlined`, `underlined`, and `inlined` variants. |
| `OutlinedAbove`, `UnderlinedAbove`, `InlinedAbove` | A label above the `outlined`, `underlined`, and `inlined` variants. |
| `Description` | A label above, and a long `Field.Details` text that wraps. |
| `Dot`, `Slash` | `separator="."` and `separator="/"`. |
| `Range` | A standalone range picker outside a field. It controls `focused`, `selectedDates`, and `onDatesChange`, and shows the two dates in a read-only text box. |
| `Required`, `Disabled` | A required field and a disabled field. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | A validation message of each type. `Error` shows its message before blur (`showErrorsBeforeBlur`). |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |

## Props

The component accepts the `Input` props, except the props that it redefines:

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `mode` | `"single" \| "range"` | `"single"` | `"single"` selects one date. `"range"` selects a start and an end. |
| `separator` | `"/" \| "."` | `"/"` | It sets the text format. |
| `selectedDate` | `Date \| null` | Parsed from the text in a field | The date shown in the calendar when `mode` is `single`. |
| `selectedDates` | `Date[]` | Parsed from the text in a field | The dates shown when `mode` is `range`. |
| `onInput` | `(event: CustomEvent<string>) => any` | Field handler | Called when the user types. Use it to block characters. |
| `onChange` | `(event: CustomEvent<Date \| null>) => any` | Field handler | Called when the user selects a date in the calendar, when `mode` is `single`. `event.detail` is the date. |
| `onDatesChange` | `(event: CustomEvent<Date[]>) => any` | Field handler | Called when the selected range changes in the calendar, when `mode` is `range`. |
| `size` | `"sm" \| "md" \| "lg"` | Field size | The control size. The calendar uses the same size. |
| `variant` | `"outlined" \| "underlined" \| "inlined"` | `"outlined"` | The frame style. Inside a field, the field variant is used. |
| `focused` | `boolean` | Field value | The popover is open while this is `true` and the picker is not read-only. |
| `readOnly` | `boolean` | Field value, else `false` | Keeps the popover closed and ignores input. |
| `name`, `disabled` | - | Field values | Passed to the `Input`. |

With `separator="/"`, a single date uses `MM/DD/YYYY`. A range joins the two dates with ` – ` (`DATE_RANGE_SEPARATOR`). `format`, `parse`, `formatRange`, and `parseRange` are exported for the same formats. `getDateFormat(separator)` and `getDateRangeFormat(separator)` return the format strings. The Maskito options are exported as `DATE_MASK_SLASH`, `DATE_MASK_DOT`, `DATE_RANGE_MASK_SLASH`, and `DATE_RANGE_MASK_DOT`.

## Behavior

These apply when the picker is inside a `Field`:

- **Popover:** A press on the input opens the calendar below it. A selected date in `single` mode, or a second date in `range` mode, calls the field blur handler.
- **Keyboard:** Arrow Up and Arrow Down step the part under the caret by one: month, day, or year. In `range` mode, a step that puts the end before the start is ignored.
- **Typing:** The mask rejects impossible dates, such as `04/31`. A typed value updates the field only when it is empty or a valid date or range.
- **Blur:** The text box returns to the last valid value.
- **Clear:** The field clear button is turned off.

## Accessibility

- The text box is a native input, so users can type a date without the calendar.
- The calendar cells are buttons. See [Calendar](./calendar.md#accessibility).
- `DatePicker.Trigger` takes no pointer input and has no press handler. It is a visual cue.

## Related

- [Calendar](./calendar.md)
- [Field](./field.md)
- [Input](./input.md)
- [Popover](./popover.md)
- [Time picker](./time-picker.md)

## Source

- [`components/date-picker/src/DatePicker.tsx`](../../../components/date-picker/src/DatePicker.tsx)
- [`components/date-picker/src/utilities.ts`](../../../components/date-picker/src/utilities.ts)
- [`components/date-picker/src/DatePicker.stories.tsx`](../../../components/date-picker/src/DatePicker.stories.tsx) (title: `Form/DatePicker`)
