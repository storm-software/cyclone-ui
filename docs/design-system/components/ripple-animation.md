---
title: RippleAnimation
description: A layer that draws a pixelated press ripple from the press point when you call its ripple() handle.
documentType: reference
tags: [component, animation, display, interaction]
---

# RippleAnimation

`RippleAnimation` is a layer that fills its positioned parent. When you call `ripple(event)` on its ref, a fading circle grows from the press point. Each ripple removes itself when it ends.

The ripple is drawn through a grid of small squares. This gives it a pixelated look.

## Import

```tsx
import type { RippleAnimationHandle } from "@cyclone-ui/ripple-animation";
import { RippleAnimation } from "@cyclone-ui/ripple-animation";
```

## Usage

Place the layer inside a positioned parent that has `overflow: hidden`. The parent clips the ripple to its shape.

```tsx
const ripple = useRef<RippleAnimationHandle>(null);

<View
  position="relative"
  overflow="hidden"
  onPress={event => ripple.current?.ripple(event)}>
  <Text>Press me</Text>
  <RippleAnimation ref={ripple} color="primary" />
</View>;
```

## Props

`RippleAnimationProps` extends the Tamagui `ViewProps` without `children`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `ColorTokens \| string` | `"primary"` | Fill color of the ripple. |
| Other `ViewProps` | — | — | Passed to the layer. |

## Handle

The ref exposes `RippleAnimationHandle`.

| Method | Description |
| --- | --- |
| `ripple(event?)` | Starts a ripple from the pointer position of a press event. A keyboard press (`detail` of `0`) or a missing event starts it from the center. Web only. It does nothing on native. |

## Behavior

- A ripple starts as a dot and grows to `2.6` times the longer side of the layer in `600ms`. Its opacity is `0.4` at the start and fades out.
- The layer has `pointerEvents: none` and `aria-hidden`.
- Several ripples can run at the same time.

## Variants

The stories use a press button and show `primary` (default) and `Danger` colors. The `Base` story checks that a ripple appears after a click and is removed afterwards.

## Related

- [RedactedAnimation](./redacted-animation.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/ripple-animation/src/RippleAnimation.tsx`](../../../components/ripple-animation/src/RippleAnimation.tsx)
- [`components/ripple-animation/src/RippleAnimation.stories.tsx`](../../../components/ripple-animation/src/RippleAnimation.stories.tsx)
