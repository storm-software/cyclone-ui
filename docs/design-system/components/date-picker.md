---
title: Date picker
description: Reference for the DatePicker component, a masked date field with a calendar popover for one date or a range.
documentType: reference
tags: [component, form, date]
---

# Date picker

`DatePicker` is a masked text field with a calendar popover. The calendar has day, month, and year views. The user can pick one date, or a start and end date.

Inside a [Field](./field.md), the picker formats, parses, and masks the field value for the current mode and separator.

Source: [`components/date-picker`](https://github.com/storm-software/cyclone-ui/tree/main/components/date-picker)

## Import

```tsx
import { DatePicker } from "@cyclone-ui/date-picker";
```

## Usage

```tsx
<DatePicker
  mode="single"
  separator="/"
  onChange={event => event.detail}
>
  <DatePicker.TextBox>
    <DatePicker.TextBox.Value />
  </DatePicker.TextBox>
  <DatePicker.Trigger>
    <DatePicker.Trigger.Icon />
  </DatePicker.Trigger>
</DatePicker>
```

For a range, set `mode="range"` and read `onDatesChange`.

## Anatomy

| Part | Purpose |
| --- | --- |
| `DatePicker` | The field, the mask, and the calendar popover. |
| `DatePicker.TextBox` | The masked input. |
| `DatePicker.TextBox.Value` | The input value. |
| `DatePicker.Separator` | A visual separator. Same part as `Input.Separator`. |
| `DatePicker.Trigger` | Opens the calendar. |
| `DatePicker.Trigger.Icon`, `Trigger.Text` | Icon and label inside the trigger. |

## Props

| Prop | Default | Purpose |
| --- | --- | --- |
| `mode` | `"single"` | `"single"` selects one date. `"range"` selects a start and an end. |
| `separator` | `"/"` | `"/"` or `"."`. It sets the text format. |
| `selectedDate` | - | The date shown in the calendar when `mode` is `single`. |
| `selectedDates` | - | The dates shown when `mode` is `range`. |
| `onInput` | - | Called when the user types, before `onChange`. Use it to block characters. The argument is a `CustomEvent<string>`. |
| `onChange` | - | Called after `onInput` when the text changes. |
| `onDatesChange` | - | Called when the selected range changes. |

With `separator="/"`, a single date uses `MM/DD/YYYY`. A range joins the two dates with ` – `. `format`, `parse`, `formatRange`, and `parseRange` are exported for the same formats.

## Related pages

- [Calendar](./calendar.md)
- [Field](./field.md)
- [Input](./input.md)
