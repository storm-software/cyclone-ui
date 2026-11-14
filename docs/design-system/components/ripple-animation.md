---
title: Ripple Animation
description: A layer that draws a pixelated press ripple from the press point when you call its ripple() handle.
documentType: reference
tags: [component, animation, display, interaction]
component:
  name: ripple-animation
  package: "@cyclone-ui/ripple-animation"
  stories:
    - title: Display/RippleAnimation
      file: components/ripple-animation/src/RippleAnimation.stories.tsx
---

# Ripple Animation

`RippleAnimation` is a layer that fills its positioned parent. When you call `ripple(event)` on its ref, a fading circle grows from the press point. Each ripple removes itself when it ends.

The ripple is drawn through a grid of small squares. This gives it a pixelated look.

Use it to show where a press landed on a custom pressable surface. [Button](./button.md) and [Tag](./tag.md) already include it. For a one-time celebration, use [Confetti burst](./confetti-burst.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add ripple-animation
pnpm install
```

- **File:** `RippleAnimation.tsx`. The CLI writes it to `<path>/ripple-animation/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<View position="relative" overflow="hidden">
  {content}
  <RippleAnimation ref={ripple} />
</View>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `RippleAnimation` | A Tamagui `View` with `aria-hidden`, `position: absolute`, `inset: 0`, and `pointerEvents: none`. A CSS `maskImage` intersects a seeded SVG noise tile with a 4 px `conic-gradient` grid (`maskComposite: intersect`). | The layer. It fills the positioned parent and holds the ripples. The mask gives the ripples their pixelated look. While a ripple plays, `element.animate()` (Web Animations API) moves the noise tile in 8 steps over 650 ms, so the squares flicker. |
| Ripple | A Tamagui `View` circle with the `color` background, one per call to `ripple()` | The circle. Its diameter is the longer side of the layer, and its center is on the press point. It mounts at scale `0.001` and opacity `0.5`. A `600ms ease-out` Tamagui `transition` grows it to scale `2.6` and fades it to opacity `0`. React state removes it after 650 ms. |

The ripple circle is internal. It is not exported.

## Examples

The examples are the stories in [`RippleAnimation.stories.tsx`](../../../components/ripple-animation/src/RippleAnimation.stories.tsx). Each story puts the layer in a "Press me" button with `position: relative` and `overflow: hidden`. The button calls `ripple(event)` on press.

| Stories | What they show |
| --- | --- |
| `Base` | The default `primary` color. Its play function clicks the button, checks that a ripple appears in the layer, and then waits until the ripple removes itself. |
| `Danger` | `color="danger"`. |

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

- A ripple starts as a dot and grows to `2.6` times the longer side of the layer in `600ms`. Its opacity is `0.5` at the start and fades out. The ripple is removed `650ms` after it starts.
- A ripple placed from a pointer press maps the pointer position back to the untransformed layer. This keeps the center correct when an ancestor has a `scale`, such as a pressed button.
- When the user prefers reduced motion, the squares do not flicker. The ripple still grows and fades.
- The layer has `pointerEvents: none` and `aria-hidden`.
- Several ripples can run at the same time.

## Variants

`RippleAnimation` has no variants. Set `color` to change the ripple color, for example `color="danger"`.

## Accessibility

The layer has `aria-hidden` and `pointerEvents: none`. The ripple is decoration. It adds no text for screen readers and does not change how the parent receives presses.

## Related

- [Button](./button.md), which uses `RippleAnimation`
- [Tag](./tag.md), which uses `RippleAnimation`
- [Confetti burst](./confetti-burst.md)
- [RedactedAnimation](./redacted-animation.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/ripple-animation/src/RippleAnimation.tsx`](../../../components/ripple-animation/src/RippleAnimation.tsx)
- [`components/ripple-animation/src/RippleAnimation.stories.tsx`](../../../components/ripple-animation/src/RippleAnimation.stories.tsx) (title: `Display/RippleAnimation`)
