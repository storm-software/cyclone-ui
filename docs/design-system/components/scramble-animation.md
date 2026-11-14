---
title: Scramble Animation
description: A wrapper that decodes its text from random characters when it mounts, then scrambles the characters near the pointer.
documentType: reference
tags: [component, animation, display, text, interaction]
component:
  name: scramble-animation
  package: "@cyclone-ui/scramble-animation"
  stories:
    - title: Display/ScrambleAnimation
      file: components/scramble-animation/src/ScrambleAnimation.stories.tsx
---

# Scramble Animation

`ScrambleAnimation` wraps text content. When it mounts, the text decodes from random characters. When the pointer moves over the content, the characters near the pointer scramble and then settle back. The effect is web only. It does not run when the user prefers reduced motion.

Use it for a "decoding" effect on a heading or a short paragraph. For a one-time reveal under a sliding mask, which also works on images, use [RedactedAnimation](./redacted-animation.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add scramble-animation
pnpm install
```

- **File:** `ScrambleAnimation.tsx`. The CLI writes it to `<path>/scramble-animation/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Heading Text](./heading-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ScrambleAnimation } from "@cyclone-ui/scramble-animation";
```

## Usage

```tsx
<ScrambleAnimation radius={100} scrambleChars=".:">
  <HeadingLargeText color="primary">
    Presence-aware identity management
  </HeadingLargeText>
</ScrambleAnimation>
```

## Anatomy

```tsx
<ScrambleAnimation>{children}</ScrambleAnimation>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ScrambleAnimation` | A Tamagui `View` with `position: relative`, `alignSelf: flex-start`, and `maxWidth: 100%` | The frame. It holds the content and the overlay. |
| Content | A Tamagui `View` around `children`. On web, the component sets `-webkit-text-fill-color: transparent` on it. | Holds the real content. The children inherit the transparent text fill, so only the text is hidden. Images and borders stay visible. It receives the `pointermove` events. |
| Overlay | A Tamagui `View` with `aria-hidden`, `position: absolute` at the top left, and `pointerEvents: none`. It holds one absolutely positioned `<span>` for each visible character. | Draws a copy of each character over the hidden original. A `requestAnimationFrame` loop swaps the copies to random `scrambleChars` and back. The loop stops when no character is scrambled. |

The overlay finds each character with a DOM `TreeWalker` and measures it with a `Range`. It splits text into graphemes with `Intl.Segmenter` when the browser has it. Each `<span>` copies the color, font family, font size, font style, and font weight of the original text. Spaces get no `<span>`. A `MutationObserver`, a `ResizeObserver`, and `document.fonts.ready` rebuild the overlay when the text, the size, or the fonts change.

The content and the overlay are internal. They are not exported.

## Examples

The examples are the stories in [`ScrambleAnimation.stories.tsx`](../../../components/scramble-animation/src/ScrambleAnimation.stories.tsx). Each story shows a large heading in the `primary` color on a `canvas` background, at most 720 px wide.

| Stories | What they show |
| --- | --- |
| `Default` | The default props: the intro decode, then `.` and `:` near the pointer. |
| `BinaryCharacters` | `scrambleChars="01"` with `speed={1}`, so the scrambled characters change on every frame. |
| `NoIntro` | `intro={false}`. The text shows at once and scrambles only near the pointer. |
| `MultiLine` | A long extra-small heading that wraps over several lines, with a smaller `radius` of `60`. |

## Props

`ScrambleAnimation` also accepts the props of its frame `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `100` | Distance, in pixels, from the pointer within which characters scramble. |
| `duration` | `number` | `1.2` | Seconds that a character directly under the pointer stays scrambled. It also sets the length of the intro. |
| `speed` | `number` | `0.5` | How often scrambled characters change. `1` is every frame (1/60 s). `0.5` is every second frame. |
| `scrambleChars` | `string` | `".:"` | Characters used while scrambling. |
| `intro` | `boolean` | `true` | Decodes the text from scrambled characters when the component mounts. |
| `children` | `ReactNode` | - | The content. All text in it scrambles. |

Changes to `radius`, `duration`, `speed`, and `scrambleChars` apply at once. `intro` applies only when the effect starts.

## Behavior

- **Intro.** Each character stays scrambled for `0.15` seconds plus a part of `duration`. Characters later in the text wait longer, with a small random offset. The text decodes in reading order. The last characters settle approximately `0.15 + duration` seconds after mount.
- **Pointer.** On each `pointermove` over the content, every character within `radius` of the pointer scrambles. The time is `duration` at the pointer and falls to `0` at the edge of `radius`.
- **No DOM.** When there is no `document`, for example on native or during a server render, the effect does not run. The content shows as normal text.

## Accessibility

- **Reduced motion.** When `prefers-reduced-motion: reduce` matches, the effect does not start, and the text shows as normal. The component follows changes to this setting while it is mounted.
- **Screen readers.** The overlay has `aria-hidden`. The real text stays in the DOM and in the accessibility tree, with only its fill color made transparent. Screen readers read the real text, not the scrambled characters.
- **Pointer.** The overlay has `pointerEvents: none`, so pointer events reach the content under it.

## Related

- [RedactedAnimation](./redacted-animation.md)
- [Heading Text](./heading-text.md)

## Source

- [`components/scramble-animation/src/ScrambleAnimation.tsx`](../../../components/scramble-animation/src/ScrambleAnimation.tsx)
- [`components/scramble-animation/src/ScrambleAnimation.stories.tsx`](../../../components/scramble-animation/src/ScrambleAnimation.stories.tsx) (title: `Display/ScrambleAnimation`)
