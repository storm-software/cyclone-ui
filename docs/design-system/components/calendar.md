---
title: Calendar
description: Reference for the Calendar component, which shows days, months, and years and selects one date or a date range.
documentType: reference
tags: [component, display, calendar, date]
component:
  name: calendar
  package: "@cyclone-ui/calendar"
  stories:
    - title: Display/Calendar
      file: components/calendar/src/Calendar.stories.tsx
---

# Calendar

`Calendar` shows a month of days. The user selects one date or a start and end date. The header lets the user switch to a month view or a year view. It is built on `@rehookify/datepicker`.

Use it on its own, or as the picker inside a [Date Picker](./date-picker.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add calendar
pnpm install
```

- **Files:** `Calendar.tsx`, `CalendarImpl.tsx`, `CalendarSkeleton.tsx`, and `types.ts`. The CLI writes them to `<path>/calendar/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@rehookify/datepicker`, `@tamagui/animate-presence`, `@tamagui/core`, and `@tamagui/stacks`.

## Import

```tsx
import { Calendar, CalendarSkeleton } from "@cyclone-ui/calendar";
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

## Anatomy

```tsx
<Calendar />

// The Suspense fallback, also exported for your own loading states:
<CalendarSkeleton />
```

`Calendar` has no child parts. It builds these regions itself:

| Part               | Renders                                                                                                   | Purpose                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Calendar`         | A React `Suspense` boundary around a Tamagui `YStack` in the `base` theme, inside a `@rehookify/datepicker` `DatePickerProvider` | Holds the selection and the shown month. The width is seven day cells plus their gaps.                     |
| Header             | Two ghost [Buttons](./button.md) with chevron icons, and the year (`<h4>`) and month name (`<h2>`) as heading text | Moves by one month. Pressing the year opens the year view. Pressing the month name opens the month view.  |
| Day grid           | Weekday names as `<h5>` heading text, then rows of 7 [Buttons](./button.md)                               | Selects a day. Days outside the shown month are disabled.                                                  |
| Month grid         | [Buttons](./button.md) in rows of 2, under a header with the year and two ghost arrow buttons             | Selects a month, then returns to the day view. The header arrows move by one year.                        |
| Year grid          | Wrapped [Buttons](./button.md), under a header with the year range (`<h3>`) and two ghost arrow buttons   | Selects a year, then returns to the day view. The header arrows show earlier or later years.              |
| `CalendarSkeleton` | Tamagui `XStack` with `role="status"` and `aria-label="Loading calendar"`; its placeholder blocks are `aria-hidden` | The `Suspense` fallback. It reserves the size of the header and a 6-week day grid. It takes only `size`.  |

## Examples

The examples are the stories in [`Calendar.stories.tsx`](../../../components/calendar/src/Calendar.stories.tsx). The story controls offer `mode` (`single`, `range`) and `size` (`sm`, `md`, `lg`).

| Stories   | What they show                                                    |
| --------- | ----------------------------------------------------------------- |
| `Single`  | The default calendar. It selects one date.                        |
| `Range`   | `mode="range"`. It selects a start and an end date.               |
| `Loading` | `CalendarSkeleton` alone, at the selected `size`.                 |

## Props

| Prop            | Type                                         | Default    | Description                                                                |
| --------------- | -------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| `mode`          | `"single" \| "range"`                        | `"single"` | Selects one date, or a start and end date.                                 |
| `size`          | `"sm" \| "md" \| "lg"`                       | `"md"`     | The form control size. The cells and the text scale to it.                 |
| `selectedDate`  | `Date \| null`                               | `null`     | The selected date in `single` mode.                                        |
| `selectedDates` | `Date[]`                                     | `[]`       | The selected dates in `range` mode.                                        |
| `onChange`      | `(event: CustomEvent<Date \| null>) => any`  | -          | Called in `single` mode. The date is in `event.detail`.                    |
| `onDatesChange` | `(event: CustomEvent<Date[]>) => any`        | -          | Called in `range` mode. The dates are in `event.detail`.                   |

`CalendarSkeleton` takes one prop, `size` (`"sm" | "md" | "lg"`, default `"md"`).

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

## Accessibility

- Each day, month, and year cell is a [Button](./button.md), so it renders a `<button>` and takes keyboard focus.
- The header arrow buttons have a `tooltip`, which is also their `aria-label`: "Go to previous month", "Go to next month", "Go to previous year", "Go to next year", "Show earlier years", and "Show later years".
- The year and the month name in the header have `tabIndex={0}`, so they take keyboard focus.
- Days outside the shown month are disabled.
- While the calendar loads, `CalendarSkeleton` has `role="status"` and the label "Loading calendar".

## Related

- [Date Picker](./date-picker.md)
- [Button](./button.md)
- [Time picker](./time-picker.md)

## Source

- [`components/calendar/src/Calendar.tsx`](../../../components/calendar/src/Calendar.tsx)
- [`components/calendar/src/CalendarImpl.tsx`](../../../components/calendar/src/CalendarImpl.tsx)
- [`components/calendar/src/CalendarSkeleton.tsx`](../../../components/calendar/src/CalendarSkeleton.tsx)
- [`components/calendar/src/types.ts`](../../../components/calendar/src/types.ts)
- [`components/calendar/src/Calendar.stories.tsx`](../../../components/calendar/src/Calendar.stories.tsx) (title: `Display/Calendar`)
