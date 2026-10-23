---
title: Calendar
description: Reference for the Calendar component, which shows days, months, and years and selects one date or a date range.
documentType: reference
tags: [component, display, calendar, date]
---

# Calendar

`Calendar` shows a month of days. The user selects one date or a start and end date. The header lets the user switch to a month view or a year view. It is built on `@rehookify/datepicker`.

Use it on its own, or as the picker inside a [Date Picker](./date-picker.md).

## Import

```tsx
import { Calendar } from "@cyclone-ui/calendar";
```

## Usage

Select one date:

```tsx
<Calendar
  mode="single"
  selectedDate={date}
  onChange={event => setDate(event.detail)}
/>
```

Select a range:

```tsx
<Calendar
  mode="range"
  selectedDates={dates}
  onDatesChange={event => setDates(event.detail)}
/>
```

## Props

| Prop            | Type                                         | Default    | Description                                                                |
| --------------- | -------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| `mode`          | `"single" \| "range"`                        | `"single"` | Selects one date, or a start and end date.                                 |
| `size`          | `"sm" \| "md" \| "lg"`                       | `"md"`     | The form control size. The cells and the text scale to it.                 |
| `selectedDate`  | `Date \| null`                               | `null`     | The selected date in `single` mode.                                        |
| `selectedDates` | `Date[]`                                     | `[]`       | The selected dates in `range` mode.                                        |
| `onChange`      | `(event: CustomEvent<Date \| null>) => any`  | -          | Called in `single` mode. The date is in `event.detail`.                    |
| `onDatesChange` | `(event: CustomEvent<Date[]>) => any`        | -          | Called in `range` mode. The dates are in `event.detail`.                   |

The calendar keeps its own selection. It also updates when `selectedDate`, `selectedDates`, or `mode` change. The calendar opens on the month of the first selected date, or on the current month.

## Views

| View    | How to open it                          | What it shows                                              |
| ------- | --------------------------------------- | ---------------------------------------------------------- |
| `day`   | The default.                            | The weekday names and a grid of days. Arrow buttons move by one month. |
| `month` | Select the month in the header.         | A grid of month names in 2 columns. The header moves by year. |
| `year`  | Select the year in the header.          | A range of years with arrow buttons.                       |

Choosing a month or a year returns to the day view.

## States

- **Today.** The day for today uses the `outlined` button variant.
- **Selected.** A selected day, and days inside a range, use the `primary` variant.
- **Outside the month.** Days from other months use the `ghost` variant and are disabled.
- **Slide animation.** The grid slides when the user moves to another month or year.

The cells are [Buttons](./button.md). See [Design tokens](../tokens/index.md) for the form size tokens.

## Stories

`Single` and `Range` (title: `Display/Calendar`). The story controls offer `mode` (`single`, `range`) and `size` (`sm`, `md`, `lg`).

## Related

- [Date Picker](./date-picker.md)
- [Button](./button.md)

## Source

- [`components/calendar/src/Calendar.tsx`](../../../components/calendar/src/Calendar.tsx)
- [`components/calendar/src/Calendar.stories.tsx`](../../../components/calendar/src/Calendar.stories.tsx)
