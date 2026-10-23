---
title: Timeline
description: A list of events joined by a line, vertical or horizontal, with optional opposite content and custom markers.
documentType: reference
tags: [component, timeline, list, container]
---

# Timeline

`Timeline` renders a list of events that a line joins. Use it for order tracking, changelogs, and activity feeds. The component is generic over the event type. You pass the events as `value` and render each part with a function.

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

## Props

`TimelineProps<T>` extends the Tamagui `ViewProps` without `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `readonly T[]` | — | The events, in order. |
| `content` | `(item, index) => ReactNode` | — | Renders the main content of an event. |
| `opposite` | `(item, index) => ReactNode` | — | Renders content on the other side of the line, such as a date. |
| `marker` | `(item, index) => ReactNode` | `TimelineMarker` | Renders the marker of an event. |
| `layout` | `"vertical" \| "horizontal"` | `"vertical"` | The direction the events run in. |
| `align` | `"left" \| "right" \| "top" \| "bottom" \| "alternate"` | `"left"` (vertical), `"top"` (horizontal) | Where the line sits relative to the content. |

`left` and `right` are for a vertical timeline. `top` and `bottom` are for a horizontal one. `alternate` switches sides on each event and keeps the line centered, even without `opposite`.

## `TimelineMarker`

`TimelineMarker` is the default marker. It is a `16 × 16` round `View` with a 2px `subtle` border and a `subtle` background. Use it as a base in a custom `marker`, or restyle it.

## Variants and states

- **Line:** A 2px line in the `outline` color joins each marker to the next one. The last event has no line.
- **Spacing:** Each event except the last has `7xl` padding on the side that leads to the next event. The gap between marker and content is `4xl`.
- **Layouts in stories:** `Base`, `Opposite`, `Right`, `Alternate`, `CustomMarkers`, `Horizontal`, `HorizontalBottom`, and `HorizontalAlternate`.

## Accessibility

The root has `role="list"`. Each event has `role="listitem"`. The source adds no other roles or labels.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/timeline/src/Timeline.tsx`](../../../components/timeline/src/Timeline.tsx)
- [`components/timeline/src/Timeline.stories.tsx`](../../../components/timeline/src/Timeline.stories.tsx)
