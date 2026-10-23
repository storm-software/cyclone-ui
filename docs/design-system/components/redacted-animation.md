---
title: RedactedAnimation
description: A wrapper that covers its content with an accent-colored mask, then slides the mask away to reveal the content.
documentType: reference
tags: [component, animation, display]
---

# RedactedAnimation

`RedactedAnimation` covers its children with a mask in the `primary` color. After a short delay, the mask slides away to the left or right and reveals the content. The mask has uneven, marker-like edges on web.

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

## Props

`RedactedAnimationProps` is the props of the Tamagui `View` frame (without `direction`) plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"left" \| "right"` | `"left"` | The side the mask slides to. |
| `delay` | `number` | `200` | Milliseconds to wait before the reveal. |
| `children` | `ReactNode` | — | The content to reveal. |

The frame uses `position: relative`, `alignSelf: flex-start`, `maxWidth: 100%`, and `overflow: hidden`. The mask transition lasts `400ms`.

## States

- **Covered:** The mask covers the content for `delay` milliseconds.
- **Revealed:** The mask slides to `-100%` (`left`) or `100%` (`right`).
- **Reduced motion:** When the user prefers reduced motion, the content shows at once. The mask has no transition.

The stories show text (large and small), an image, and both directions.

## Accessibility

The mask has `aria-hidden` and `pointerEvents: none`. It does not hide the content from assistive technology.

## Related

- [RippleAnimation](./ripple-animation.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/redacted-animation/src/RedactedAnimation.tsx`](../../../components/redacted-animation/src/RedactedAnimation.tsx)
- [`components/redacted-animation/src/RedactedAnimation.stories.tsx`](../../../components/redacted-animation/src/RedactedAnimation.stories.tsx)
