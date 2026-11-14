---
title: Confetti Burst
description: Reference for the ConfettiBurst component, a web-only anchor that fires a ring of confetti when you call burst.
documentType: reference
tags: [component, motion]
component:
  name: confetti-burst
  package: "@cyclone-ui/confetti-burst"
  stories:
    - title: Display/ConfettiBurst
      file: components/confetti-burst/src/ConfettiBurst.stories.tsx
---

# Confetti Burst

`ConfettiBurst` is an invisible anchor. Call `burst()` on its handle to fire a ring of accent-colored squares from its center.

The effect uses the Web Animations API. On native, and when the user prefers reduced motion, `burst()` does nothing.

Use it for a short celebration after an action, such as a top rating. For a press response on a control, use [RippleAnimation](./ripple-animation.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add confetti-burst
pnpm install
```

- **File:** `ConfettiBurst.tsx`. The CLI writes it to `<path>/confetti-burst/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import type { ConfettiBurstHandle } from "@cyclone-ui/confetti-burst";
import { ConfettiBurst } from "@cyclone-ui/confetti-burst";
```

## Usage

Put the anchor in a parent with `position: relative`. The anchor centers itself on that parent.

```tsx
const burstRef = useRef<ConfettiBurstHandle>(null);

<View
  render="button"
  position="relative"
  onPress={() => burstRef.current?.burst()}>
  <Text>Celebrate</Text>
  <ConfettiBurst ref={burstRef} spread={24} count={16} />
</View>;
```

## Anatomy

```tsx
<ConfettiBurst ref={burstRef} />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ConfettiBurst` | A Tamagui `View` with `aria-hidden`, `position: absolute`, `top: 50%`, `left: 50%`, a `0` width and height, and `pointerEvents: none` | The anchor. It sits at the center of its positioned parent. `burst()` adds the confetti squares to it. |
| Confetti square | A DOM `<span>` that `burst()` appends to the anchor: a 5 px square with a 1 px radius and a `var(--primary)` background. `element.animate()` (Web Animations API) moves it out, rotates it, scales it to `0.3`, and fades it out in 900 ms with `cubic-bezier(0.16,1,0.3,1)` easing. | One piece of confetti. The squares fly out at evenly spaced angles with a small random offset. Each one travels `0.8` to `1.6` times `spread`. It removes itself when its animation finishes. |

The squares are added outside React. They do not cause a re-render.

## Examples

The examples are the stories in [`ConfettiBurst.stories.tsx`](../../../components/confetti-burst/src/ConfettiBurst.stories.tsx). Each story puts the anchor in a "Celebrate" button that calls `burst()` on press.

| Stories | What they show |
| --- | --- |
| `Base` | The default `spread` of `24` and `count` of `16`. Its play function clicks the button and checks that the anchor now holds confetti squares. |
| `Wide` | A larger burst: `spread` of `64` and `count` of `32`. |
| `Danger` | The button in the `danger` theme. The squares take the theme's `primary` color. |

## Props

`ConfettiBurst` also accepts `View` props except `children`.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `spread` | `number` | `24` | Base distance, in pixels, that each square flies from the center. |
| `count` | `number` | `16` | Number of squares in one burst. |
| `ref` | `Ref<ConfettiBurstHandle>` | - | Receives the handle with `burst()`. |

## Handle

| Method | Purpose |
| --- | --- |
| `burst()` | Starts one burst. It does nothing on native or when `prefers-reduced-motion: reduce` matches. |

Each square removes itself when its animation finishes. The animation lasts 900 milliseconds.

The package also exports `prefersReducedMotion()`, which returns `true` when `(prefers-reduced-motion: reduce)` matches on web, and the `BrowserElement` type that describes the DOM element that `burst()` uses.

## Accessibility

- The anchor has `aria-hidden` and `pointerEvents: none`. The confetti is decoration. It adds no text for screen readers.
- When the user prefers reduced motion, `burst()` does nothing.
- The anchor gets no focus. Give the control that calls `burst()` its own accessible name.

## Related

- [Rating](./rating.md), which uses `ConfettiBurst`
- [Ripple animation](./ripple-animation.md)

## Source

- [`components/confetti-burst/src/ConfettiBurst.tsx`](../../../components/confetti-burst/src/ConfettiBurst.tsx)
- [`components/confetti-burst/src/ConfettiBurst.stories.tsx`](../../../components/confetti-burst/src/ConfettiBurst.stories.tsx) (title: `Display/ConfettiBurst`)
