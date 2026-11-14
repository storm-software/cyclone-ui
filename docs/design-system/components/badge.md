---
title: Badge
description: Reference for the Badge component, a small count or dot that attaches to a corner of another element.
documentType: reference
tags: [component, triggers, badge, count, notification]
component:
  name: badge
  package: "@cyclone-ui/badge"
  stories:
    - title: Triggers/Badge
      file: components/badge/src/Badge.stories.tsx
    - title: Triggers/Badge/Tailwind
      file: components/badge/src/Badge.tailwind.stories.tsx
      style: tailwind
---

# Badge

`Badge` wraps an element and shows a small badge on one of its corners. The badge can show a count, a short label, or a dot.

Use it for notification counts and status dots on icons, avatars, and buttons. Its API follows the Material UI `Badge`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add badge
pnpm install
```

- **File:** `Badge.tsx`. The CLI writes it to `<path>/badge/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

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

## Anatomy

```tsx
<Badge badgeContent={4}>{child}</Badge>
```

`Badge` is one part. It renders these pieces:

| Part       | Renders                                                                                                                                                          | Purpose                                                                         |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Root       | A Tamagui `View` as `<span>`, `inline-flex` and `fit-content` wide. Replace it with `slots.root`.                                                                | Holds `children` and the badge.                                                 |
| Badge      | A Tamagui `View` as `<span aria-hidden>`, positioned on a corner, in the theme of `color`. Replace it with `slots.badge`. With `pulse` on web, it adds a `<style>` element and a `<span class="cyclone-badge-pulse">` ring. | The count, label, or dot.                                                       |
| Badge text | A Tamagui `Text`.                                                                                                                                                | Shows `badgeContent` when it is a string or a number. Other content renders as is. |

## Examples

The examples are the stories in [`Badge.stories.tsx`](../../../components/badge/src/Badge.stories.tsx). Most stories put the badge on a mail icon.

| Stories                | What they show                                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `Base`                 | A `primary` badge with `4`. The play function checks `aria-hidden` and that the badge is centered on the top-right corner.        |
| `Colors`               | The `default`, `primary`, `secondary`, `error`, `info`, `success`, and `warning` colors.                                         |
| `Dot`                  | `variant="dot"`. The play function checks that the dot has no text and is 8 px wide.                                             |
| `Pulse`                | `pulse` on two dots (one on a circle with `overlap="circular"`) and on a count. The play function checks the ring animation.      |
| `MaxValue`             | `99`, `100` (shows `99+`), and `1000` with `max={999}` (shows `999+`).                                                           |
| `ShowZero`, `Invisible` | A zero count without and with `showZero`, and `invisible`. The play functions check the scale of each badge.                    |
| `Visibility`           | Buttons that change the count and hide the dot. The play function checks that the badge keeps its last count while it scales out. |
| `Alignment`            | Each `anchorOrigin` corner. The play function checks the position of each badge.                                                 |
| `Overlap`              | `rectangular` and `circular` overlap on a square and a circle. The play function checks the 14% inset.                           |
| `Customized`           | `slotProps.badge` that moves the badge and adds a `canvas` border.                                                               |
| `Danger`               | `theme="danger"` on the root.                                                                                                    |

The Tailwind CSS variant has its own stories in [`Badge.tailwind.stories.tsx`](../../../components/badge/src/Badge.tailwind.stories.tsx), with the same names: `Base`, `Colors`, `Dot`, `Pulse`, `MaxValue`, `ShowZero`, `Invisible`, `Visibility`, `Alignment`, `Overlap`, `Customized`, and `Danger`. Its `Customized` story styles the badge with a `className` in `slotProps.badge`.

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
- **Text.** The text uses the `caption` font family, the `xxs` font size and line height, and the `semibold` weight.

## Accessibility

- The badge is hidden from assistive technology (`aria-hidden`). Describe the count on the wrapped element, for example with `aria-label`.

## Related

- [Tag](./tag.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/badge/src/Badge.tsx`](../../../components/badge/src/Badge.tsx)
- [`components/badge/src/Badge.stories.tsx`](../../../components/badge/src/Badge.stories.tsx) (title: `Triggers/Badge`)
- [`components/badge/src/Badge.tailwind.tsx`](../../../components/badge/src/Badge.tailwind.tsx)
- [`components/badge/src/Badge.tailwind.stories.tsx`](../../../components/badge/src/Badge.tailwind.stories.tsx) (title: `Triggers/Badge/Tailwind`)
