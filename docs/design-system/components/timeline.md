---
title: Timeline
description: A list of events joined by a line, vertical or horizontal, with optional opposite content and custom markers.
documentType: reference
tags: [component, timeline, list, container]
component:
  name: timeline
  package: "@cyclone-ui/timeline"
  stories:
    - title: Containers/Timeline
      file: components/timeline/src/Timeline.stories.tsx
    - title: Containers/Timeline/Tailwind
      file: components/timeline/src/Timeline.tailwind.stories.tsx
      style: tailwind
---

# Timeline

`Timeline` renders a list of events that a line joins. Use it for order tracking, changelogs, and activity feeds. The component is generic over the event type. You pass the events as `value` and render each part with a function.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add timeline
pnpm install
```

- **File:** `Timeline.tsx`. The CLI writes it to `<path>/timeline/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { Timeline, TimelineMarker } from "@cyclone-ui/timeline";
import type {
  TimelineProps,
  TimelineLayout,
  TimelineAlign
} from "@cyclone-ui/timeline";
```

## Usage

```tsx
import { Text } from "@tamagui/core";
import { Timeline } from "@cyclone-ui/timeline";

const events = [
  { date: "Mar 1", title: "Order placed" },
  { date: "Mar 2", title: "Shipped" },
  { date: "Mar 4", title: "Delivered" }
];

export function Example() {
  return (
    <Timeline
      value={events}
      align="alternate"
      opposite={event => <Text>{event.date}</Text>}
      content={event => <Text>{event.title}</Text>}
    />
  );
}
```

## Anatomy

```tsx
<Timeline
  value={events}
  opposite={(event, index) => opposite}
  marker={(event, index) => <TimelineMarker />}
  content={(event, index) => content}
/>
```

`Timeline` has no child parts. You render each part of an event with a function. It renders these pieces:

| Part             | Renders                                                                                       | Purpose                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `Timeline`       | A Tamagui `View` with `role="list"`.                                                          | The root. Its direction follows `layout`.                                  |
| Event            | A Tamagui `View` with `role="listitem"`.                                                      | Holds the opposite side, the marker and line, and the content of one event. |
| Opposite side    | A Tamagui `View` with the result of `opposite`.                                               | Shows only with `opposite` or `align="alternate"`.                         |
| `TimelineMarker` | A Tamagui `View`: a 16 × 16 ring.                                                             | The default marker. Replace it with `marker`.                              |
| Line             | A 2 px Tamagui `View` in the `hairline` color, with an `xl` margin at each end.               | Joins the marker to the next one. The last event has no line.              |
| Content side     | A Tamagui `View` with the result of `content`.                                                | The main content of the event.                                             |

## Examples

The examples are the stories in [`Timeline.stories.tsx`](../../../components/timeline/src/Timeline.stories.tsx). Each story shows four order events (`Ordered`, `Processing`, `Shipped`, `Delivered`).

| Stories                                              | What they show                                                                                                  |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Base`                                               | A vertical timeline with the date, status, and description as content. The play function checks the `list` and `listitem` roles. |
| `Opposite`                                           | The date on the `opposite` side, and the status and description as content.                                     |
| `Right`                                              | `align="right"`.                                                                                                |
| `Alternate`                                          | `align="alternate"` with dates on the opposite side.                                                            |
| `CustomMarkers`                                      | A `marker` function that makes a 32 px `TimelineMarker` with an icon, in `primary` or `secondary`.              |
| `Horizontal`, `HorizontalBottom`, `HorizontalAlternate` | `layout="horizontal"` with `align` at its default `top`, at `bottom`, and at `alternate` with dates.         |

The Tailwind CSS variant has its own stories in [`Timeline.tailwind.stories.tsx`](../../../components/timeline/src/Timeline.tailwind.stories.tsx), with the same names: `Base`, `Opposite`, `Right`, `Alternate`, `CustomMarkers`, `Horizontal`, `HorizontalBottom`, and `HorizontalAlternate`. They set widths and marker styles with classes.

## Props

`TimelineProps<T>` extends the Tamagui `ViewProps` without `children`, `content`, and `marker`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `readonly T[]` | — | The events, in order. Required. |
| `content` | `(item, index) => ReactNode` | — | Renders the main content of an event. Required. |
| `opposite` | `(item, index) => ReactNode` | — | Renders content on the other side of the line, such as a date. |
| `marker` | `(item, index) => ReactNode` | `TimelineMarker` | Renders the marker of an event. |
| `layout` | `"vertical" \| "horizontal"` | `"vertical"` | The direction the events run in. |
| `align` | `"left" \| "right" \| "top" \| "bottom" \| "alternate"` | `"left"` (vertical), `"top"` (horizontal) | Where the line sits relative to the content. |

`left` and `right` are for a vertical timeline. `top` and `bottom` are for a horizontal one. `alternate` switches sides on each event and keeps the line centered, even without `opposite`.

## `TimelineMarker`

`TimelineMarker` is the default marker. It is a `16 × 16` round `View` with a 2px `subtle` border and a `subtle` background. Use it as a base in a custom `marker`, or restyle it.

## Variants and states

- **Line:** A 2px line in the `hairline` color joins each marker to the next one. The last event has no line.
- **Spacing:** Each event except the last has `7xl` padding on the side that leads to the next event. The gap between marker and content is `4xl`.
- **Layouts in stories:** `Base`, `Opposite`, `Right`, `Alternate`, `CustomMarkers`, `Horizontal`, `HorizontalBottom`, and `HorizontalAlternate`.

## Accessibility

The root has `role="list"`. Each event has `role="listitem"`. The source adds no other roles or labels.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/timeline/src/Timeline.tsx`](../../../components/timeline/src/Timeline.tsx)
- [`components/timeline/src/Timeline.stories.tsx`](../../../components/timeline/src/Timeline.stories.tsx) (title: `Containers/Timeline`)
- [`components/timeline/src/Timeline.tailwind.tsx`](../../../components/timeline/src/Timeline.tailwind.tsx)
- [`components/timeline/src/Timeline.tailwind.stories.tsx`](../../../components/timeline/src/Timeline.tailwind.stories.tsx) (title: `Containers/Timeline/Tailwind`)
