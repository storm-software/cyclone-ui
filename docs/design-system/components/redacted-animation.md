---
title: Redacted Animation
description: A wrapper that covers its content with an accent-colored mask, then slides the mask away to reveal the content.
documentType: reference
tags: [component, animation, display]
component:
  name: redacted-animation
  package: "@cyclone-ui/redacted-animation"
  stories:
    - title: Display/RedactedAnimation
      file: components/redacted-animation/src/RedactedAnimation.stories.tsx
---

# Redacted Animation

`RedactedAnimation` covers its children with a mask in the `primary` color. After a short delay, the mask slides away to the left or right and reveals the content. The mask has uneven, marker-like edges on web.

Use it for a one-time reveal of a heading or an image. For text that decodes from random characters and reacts to the pointer, use [ScrambleAnimation](./scramble-animation.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add redacted-animation
pnpm install
```

- **File:** `RedactedAnimation.tsx`. The CLI writes it to `<path>/redacted-animation/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Heading Text](./heading-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { RedactedAnimation } from "@cyclone-ui/redacted-animation";
```

## Usage

```tsx
<RedactedAnimation direction="right" delay={400}>
  <HeadingLargeText color="primary">
    Presence-aware identity management
  </HeadingLargeText>
</RedactedAnimation>
```

## Anatomy

```tsx
<RedactedAnimation>{children}</RedactedAnimation>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `RedactedAnimation` | A Tamagui `View` with `position: relative`, `alignSelf: flex-start`, `maxWidth: 100%`, and `overflow: hidden` | The frame. It holds the content and clips the mask when the mask slides out. |
| Mask | A Tamagui `View` with `aria-hidden`, `position: absolute` over the frame, `zIndex: 1`, a `primary` background, and `pointerEvents: none`. On web, a `clipPath` polygon gives it ragged, marker-like edges. | Covers the content. A `setTimeout` of `delay` milliseconds starts the reveal. Then a `400ms` Tamagui `transition` animates its `x` to `-100%` or `100%`. |

The mask is internal. It is not exported. The polygon offsets are in pixels with a percentage limit, so the edge shape stays the same on tall images and gets smaller with small text.

## Examples

The examples are the stories in [`RedactedAnimation.stories.tsx`](../../../components/redacted-animation/src/RedactedAnimation.stories.tsx). Each story shows the content on a `canvas` background.

| Stories | What they show |
| --- | --- |
| `SlideLeft` | The default: a large heading in the `primary` color, with the mask sliding to the left. |
| `SlideRight` | The same heading with `direction="right"`. |
| `ImageContent` | An image (288 × 192 px) as the content. The mask covers the full image. |
| `SmallText` | An extra-small heading. The mask edges get smaller with the text. |

## Props

`RedactedAnimationProps` is the props of the Tamagui `View` frame (without `direction`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"left" \| "right"` | `"left"` | The side the mask slides to. |
| `delay` | `number` | `200` | Milliseconds to wait before the reveal. |
| `children` | `ReactNode` | — | The content to reveal. Use a component, such as a heading. The frame is a `View`, so raw text is not valid. |

The frame uses `position: relative`, `alignSelf: flex-start`, `maxWidth: 100%`, and `overflow: hidden`. The mask transition lasts `400ms`.

## States

- **Covered:** The mask covers the content for `delay` milliseconds.
- **Revealed:** The mask slides to `-100%` (`left`) or `100%` (`right`).
- **Reduced motion:** When the user prefers reduced motion, the content shows at once. The mask has no transition.

## Accessibility

The mask has `aria-hidden` and `pointerEvents: none`. It does not hide the content from assistive technology.

## Related

- [Navigation header](./navigation-header.md), which uses `RedactedAnimation`
- [ScrambleAnimation](./scramble-animation.md)
- [RippleAnimation](./ripple-animation.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/redacted-animation/src/RedactedAnimation.tsx`](../../../components/redacted-animation/src/RedactedAnimation.tsx)
- [`components/redacted-animation/src/RedactedAnimation.stories.tsx`](../../../components/redacted-animation/src/RedactedAnimation.stories.tsx) (title: `Display/RedactedAnimation`)
