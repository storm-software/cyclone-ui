---
title: Badge
description: Reference for the Badge component, a small count or dot that attaches to a corner of another element.
documentType: reference
tags: [component, triggers, badge, count, notification]
---

# Badge

`Badge` wraps an element and shows a small badge on one of its corners. The badge can show a count, a short label, or a dot.

Use it for notification counts and status dots on icons, avatars, and buttons. Its API follows the Material UI `Badge`.

## Import

```tsx
import { Badge } from "@cyclone-ui/badge";
```

## Usage

```tsx
<Badge badgeContent={4} color="error" aria-label="4 unread messages">
  <MailIcon />
</Badge>

<Badge variant="dot" color="success" pulse={true}>
  <Avatar />
</Badge>
```

## Props

`Badge` also accepts the props of a Tamagui `View` for the root element (a `span`).

| Prop           | Type                                       | Default                                  | Description                                                                 |
| -------------- | ------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------------- |
| `badgeContent` | `ReactNode`                                | -                                        | The content of the badge. Strings and numbers use the badge text style.     |
| `children`     | `ReactNode`                                | -                                        | The element that the badge is added to.                                     |
| `color`        | `BadgeColor`                               | `"default"`                              | The color of the badge. See [Colors](#colors).                              |
| `variant`      | `"standard" \| "dot"`                      | `"standard"`                             | `dot` hides the content and shows a small dot.                              |
| `anchorOrigin` | `{ vertical?: "top" \| "bottom"; horizontal?: "left" \| "right" }` | `{ vertical: "top", horizontal: "right" }` | The corner that the badge is centered on.          |
| `overlap`      | `"rectangular" \| "circular"`              | `"rectangular"`                          | The shape of the wrapped element. `circular` moves the badge in by 14%.     |
| `max`          | `number`                                   | `99`                                     | The largest count to show. A larger count shows as `${max}+`.               |
| `showZero`     | `boolean`                                  | `false`                                  | Shows the badge when `badgeContent` is `0`.                                 |
| `invisible`    | `boolean`                                  | `false`                                  | Hides the badge.                                                            |
| `pulse`        | `boolean`                                  | `false`                                  | Adds a ring that expands from the badge and fades. Web only. Skipped when the user prefers reduced motion. |
| `slots`        | `{ root?: ElementType; badge?: ElementType }` | -                                     | Replaces the root or badge component.                                       |
| `slotProps`    | `{ root?: Partial<...>; badge?: Partial<...> }` | -                                   | Props for the root and the badge.                                           |

## Colors

`color` takes a Material UI palette name or any Cyclone UI color theme name.

| `color`     | Theme used                                  |
| ----------- | ------------------------------------------- |
| `default`   | The surrounding theme (`base` unless a parent sets one) |
| `primary`   | `brand`                                     |
| `secondary` | `discovery`                                 |
| `error`     | `danger`                                    |
| `info`      | `info`                                      |
| `success`   | `success`                                   |
| `warning`   | `warning`                                   |
| a theme name | That theme                                 |

The badge uses the `primary` background token and the `on-primary` text token of the theme. See [Design tokens](../tokens/index.md).

## Behavior

- **Hidden states.** The badge hides when `invisible` is `true`. It also hides when `badgeContent` is `0` (unless `showZero`), or is missing (unless `variant="dot"`).
- **Animation.** The badge scales in over 225 ms and out over 195 ms. While it hides, it keeps its last content, color, and position.
- **Pulse.** The ring is CSS only. On native platforms the badge is static.
- **Text.** The text uses the `caption` font family at 12 px, weight 500.

## Accessibility

- The badge is hidden from assistive technology (`aria-hidden`). Describe the count on the wrapped element, for example with `aria-label`.

## Related

- [Tag](./tag.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/badge/src/Badge.tsx`](../../../components/badge/src/Badge.tsx)
- [`components/badge/src/Badge.stories.tsx`](../../../components/badge/src/Badge.stories.tsx) (title: `Triggers/Badge`)
