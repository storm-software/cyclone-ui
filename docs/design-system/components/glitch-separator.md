---
title: Glitch Separator
description: Reference for the GlitchSeparator component, a seeded square-grid divider between two section colors.
documentType: reference
tags: [component, layout, motion]
component:
  name: glitch-separator
  package: "@cyclone-ui/glitch-separator"
  stories:
    - title: Display/GlitchSeparator
      file: components/glitch-separator/src/GlitchSeparator.stories.tsx
    - title: Display/GlitchSeparator/Tailwind
      file: components/glitch-separator/src/GlitchSeparator.tailwind.stories.tsx
      style: tailwind
---

# Glitch Separator

`GlitchSeparator` draws a ragged grid of squares between two section colors. The pattern comes from a seeded pseudo-random sequence, so server and client render the same edge.

On the web the edge can stay still, animate always, or animate with scroll. Reduced motion is respected. Native renders a still edge.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add glitch-separator
pnpm install
```

- **File:** `GlitchSeparator.tsx`. The CLI writes it to `<path>/glitch-separator/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core` and `react-native-svg`.
- **Tailwind:** with `style: "tailwind"` in `components.json`, the CLI copies the Tailwind CSS version of this component. See the [CLI configuration](../../packages/cli.md).

## Import

```tsx
import { GlitchSeparator } from "@cyclone-ui/glitch-separator";
```

## Usage

```tsx
<GlitchSeparator topColor="canvas" bottomColor="secondary" animate="scroll" seed={27} />
```

`topColor` defaults to `transparent`, so the parent background (or an image or video behind it) shows through above the squares.

## Anatomy

```tsx
<GlitchSeparator />
```

| Part              | Renders                                                                                                                                  | Purpose                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `GlitchSeparator` | A Tamagui `View` with `aria-hidden` and `pointerEvents="none"`. It holds a `react-native-svg` `Svg` with one `Rect` for each grid square. | The frame paints `topColor`. The squares paint `bottomColor`, and a square shows or hides as the edge moves. |

The separator is decorative. Screen readers skip it, and it does not take pointer events.

## Examples

The examples are the stories in [`GlitchSeparator.stories.tsx`](../../../components/glitch-separator/src/GlitchSeparator.stories.tsx). Each story puts the separator between a top section and a bottom section.

| Stories            | What they show                                                                          |
| ------------------ | --------------------------------------------------------------------------------------- |
| `Base`             | A dark top section, a light bottom section, `seed={27}`, and `animate="scroll"`.         |
| `Reversed`         | The same separator with the two colors swapped.                                         |
| `AlternatePattern` | `seed={913}`, which gives a different square pattern.                                   |
| `ThemeTokens`      | The theme keys `canvas` and `surface` as `topColor` and `bottomColor`.                  |
| `Still`, `Always`  | `animate="never"` and `animate="always"`.                                               |
| `Scroll`           | `animate="scroll"` in a 520 px scroll area. Scroll down and back up to see the edge move. |

The Tailwind CSS variant has its own stories in [`GlitchSeparator.tailwind.stories.tsx`](../../../components/glitch-separator/src/GlitchSeparator.tailwind.stories.tsx): `Base`, `Reversed`, `AlternatePattern`, `ThemeTokens`, `Still`, `Always`, `FixedHeight`, and `Scroll`. That variant has no `topColor` prop. It sets the upper color and the height with classes such as `bg-canvas` and `h-[120px]`.

## Props

`GlitchSeparator` also accepts `View` props except `children`.

| Prop          | Type                                     | Default         | Purpose                                                                                                         |
| ------------- | ---------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------- |
| `topColor`    | Theme key, color token, or CSS color     | `"transparent"` | The upper section color; transparent shows the parent background.                                               |
| `bottomColor` | Theme key, color token, or CSS color     | `"secondary"`   | The lower section color. It fills the squares.                                                                  |
| `animate`     | `"never" \| "always" \| "scroll"`        | `"scroll"`      | The web animation mode. Native stays still.                                                                     |
| `animated`    | `boolean`                                | -               | Deprecated. `true` means `"always"` and `false` means `"never"`. Ignored when `animate` is set.                 |
| `seed`        | `number`                                 | `27`            | Stable seed for the square pattern. A non-finite seed falls back to `27`.                                       |

The grid is 30 columns. The row count follows the separator height. The separator fills the width of its parent. Without `height`, it keeps a 5:1 aspect ratio.

With `animate="scroll"`, the edge moves as the separator crosses the viewport. With `animate="always"`, the edge moves on a loop. When the user prefers reduced motion, the edge stays still.

## Related

- [Divider](./divider.md)

## Source

- [`components/glitch-separator/src/GlitchSeparator.tsx`](../../../components/glitch-separator/src/GlitchSeparator.tsx)
- [`components/glitch-separator/src/GlitchSeparator.stories.tsx`](../../../components/glitch-separator/src/GlitchSeparator.stories.tsx) (title: `Display/GlitchSeparator`)
- [`components/glitch-separator/src/GlitchSeparator.tailwind.tsx`](../../../components/glitch-separator/src/GlitchSeparator.tailwind.tsx)
- [`components/glitch-separator/src/GlitchSeparator.tailwind.stories.tsx`](../../../components/glitch-separator/src/GlitchSeparator.tailwind.stories.tsx) (title: `Display/GlitchSeparator/Tailwind`)
