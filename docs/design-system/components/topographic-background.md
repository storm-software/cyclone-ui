---
title: Topographic Background
description: A full-bleed topographic map background for web pages. The interactive variant warps the contour lines with WebGL and paints color in under the pointer.
documentType: reference
tags: [component, display, background, animation, theme]
component:
  name: topographic-background
  package: "@cyclone-ui/topographic-background"
  stories:
    - title: Display/TopographicBackground
      file: components/topographic-background/src/TopographicBackground.stories.tsx
---

# Topographic Background

`TopographicBackground` fills its nearest positioned ancestor with a topographic map image. It ignores pointer events. Place it behind the content of a page or a section. It is web only. On native, it renders an empty frame.

The default `interactive` variant follows the light or dark theme. With a mouse or another fine pointer that can hover, it warps the contour lines with WebGL and paints the colored map in under the pointer. The `dark`, `light`, and `color` variants show the image alone, with no motion or hover effect.

Use it for a full-page or hero background. For a background built from the theme colors, use [Themeable gradient](./themeable-gradient.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add topographic-background
pnpm install
```

- **Files:** `images.ts`, `TopographicBackground.tsx`, and `topography.ts`. The CLI writes them to `<path>/topographic-background/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { TopographicBackground } from "@cyclone-ui/topographic-background";
```

The package also exports the image URLs `topographyDarkSrc`, `topographyLightSrc`, and `topographyColorSrc`, and the `TopographicBackgroundProps` and `TopographicBackgroundVariant` types. The WebGL renderer, `startTopography`, is available from `@cyclone-ui/topographic-background/topography`.

## Usage

```tsx
<View position="relative" minHeight="100vh">
  <TopographicBackground />
  {content}
</View>

<TopographicBackground variant="color" />
```

## Anatomy

```tsx
<TopographicBackground variant="interactive" />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TopographicBackground` | A Tamagui `View` with `aria-hidden`, `accessibilityElementsHidden`, `importantForAccessibility="no-hide-descendants"`, `position: absolute`, `inset: 0`, `overflow: hidden`, and `pointerEvents: none` | The frame. It fills the nearest positioned ancestor. On native, it has no children. |
| Image | An `<img alt="">` (web only) with `draggable={false}` and `objectFit: cover` that fills the frame | The static map. It shows `colorSrc` for `color`, `lightSrc` for `light` or for `interactive` in a light theme, and `darkSrc` in the other cases. It is always in the server markup, so it paints before hydration. |
| Canvas | A `<canvas>` (web only, `interactive` only) over the image | After hydration, when `(hover: hover) and (pointer: fine)` matches, a WebGL2 renderer draws into it. A fragment shader warps the map with slow value noise. A second pass, at half resolution, keeps the paint under the pointer. A `requestAnimationFrame` loop renders 30 frames per second, when `floor(timestamp / (1000 / 30))` changes. |

The image and the canvas are internal. They are not exported. The renderer follows the pointer on `window` (`pointermove`, `pointerdown`, and `pointerout`), because the canvas sits behind the page.

## Examples

The examples are the stories in [`TopographicBackground.stories.tsx`](../../../components/topographic-background/src/TopographicBackground.stories.tsx). Each story fills a full-screen `View` with `position: relative` and a `minHeight` of `100vh`. The `variant` control selects the variant.

| Stories | What they show |
| --- | --- |
| `Interactive` | The default `interactive` variant. It follows the Storybook toolbar theme. Move the pointer to paint color in. |
| `Dark`, `Light`, `Color` | The static `dark`, `light`, and `color` images. |

## Props

`TopographicBackground` also accepts the props of its frame `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"interactive" \| "dark" \| "light" \| "color"` | `"interactive"` | The image and the behavior. See [Variants](#variants). |
| `darkSrc` | `string` | `topographyDarkSrc` | URL of the dark (grey) topography image. The interactive renderer uses it as the map. |
| `lightSrc` | `string` | `topographyLightSrc` | URL of the light topography image. |
| `colorSrc` | `string` | `topographyColorSrc` | URL of the same contours in color. The interactive renderer paints it in under the pointer. |
| `paintShader` | `string` | none | GLSL that also paints the color map in, with no pointer. See [Paint shader](#paint-shader). |

The default URLs point to the SVG files in the package `assets` folder (`topography-dark.svg`, `topography-light.svg`, and `topography-color.svg`).

## Variants

| Variant | Shows |
| --- | --- |
| `interactive` | The grey map for the current theme, with motion and paint under the pointer. Touch-first devices get the static image for the current theme. |
| `dark` | The dark (grey) image only. |
| `light` | The light image only. |
| `color` | The color image only. |

The theme is light when the current theme name starts with `light`.

## Behavior

- **Warp.** The contour lines bend and move a few pixels. The warp eases in over the first 4 seconds.
- **Paint.** Moving the pointer paints the color map in with a brush. Its radius is approximately 6% of the canvas height. A fast movement makes a thinner line. When the pointer stops, the paint dries back to grey in approximately 3 seconds. A press, or a return into the window, starts a new stroke.
- **Theme.** In a light theme, the shader inverts the grey map. A theme change redraws the canvas without a restart.
- **Pause.** The loop stops when the page is hidden or the canvas is scrolled out of view, and starts again when it is visible.
- **Fallback.** When WebGL2 is not available or an image does not load, the static image stays. The renderer also handles a lost and restored WebGL context.
- **Resolution.** The canvas uses the device pixel ratio, up to `1.5`.

## Paint shader

`paintShader` paints color in without a pointer, for an effect such as rain. It is GLSL that defines this function:

```glsl
float paint(vec2 px, vec2 viewport, float time, bool light);
```

| Argument | Value |
| --- | --- |
| `px` | The pixel, in CSS pixels from the top-left corner of the viewport. |
| `viewport` | The size of the viewport, in CSS pixels. |
| `time` | The `requestAnimationFrame` timestamp of the frame, in seconds, modulo 3600. |
| `light` | `true` in a light theme. |

It returns how much of the color map shows, from 0 (grey) to 1 (full color). The shader combines it with the pointer's paint. Like the warp, it eases in over the first 4 seconds, so the first frame matches the static image. Name any helper functions so that they don't clash with the renderer's own `hash`, `noise`, and `toLinear`.

The arguments don't depend on the canvas. Another renderer on the page can evaluate the same GLSL with the same arguments. If it also draws when `floor(timestamp / (1000 / 30))` changes, its effect stays in step with the background. A drop can then fall from the background into another canvas without a break.

```tsx
const rain = `
  float paint(vec2 px, vec2 viewport, float time, bool light) {
    float column = floor(px.x / 24.0);
    float y = fract(px.y / viewport.y - time * (0.5 + fract(column * 0.37)));
    return step(abs(fract(px.x / 24.0) - 0.5), 0.02) * step(y, 0.05);
  }
`;

<TopographicBackground paintShader={rain} />
```

Only the `interactive` renderer draws it. Touch-first devices and reduced motion don't show it.

## Accessibility

- **Decorative.** The frame has `aria-hidden`, `accessibilityElementsHidden`, and `importantForAccessibility="no-hide-descendants"`. The image has an empty `alt`. Screen readers skip the background. It adds no text.
- **Pointer.** The frame has `pointerEvents: none`, and the renderer listens on `window` with passive listeners. The background does not block presses on the content.
- **Reduced motion.** When `prefers-reduced-motion: reduce` matches, the renderer draws one still frame and does not start its loop. The map stays still, and neither the pointer nor `paintShader` paints. The renderer follows changes to this setting.

## Related

- [Themeable gradient](./themeable-gradient.md)
- [Color compositions](./color-compositions.md)

## Source

- [`components/topographic-background/src/TopographicBackground.tsx`](../../../components/topographic-background/src/TopographicBackground.tsx)
- [`components/topographic-background/src/topography.ts`](../../../components/topographic-background/src/topography.ts)
- [`components/topographic-background/src/images.ts`](../../../components/topographic-background/src/images.ts)
- [`components/topographic-background/src/TopographicBackground.stories.tsx`](../../../components/topographic-background/src/TopographicBackground.stories.tsx) (title: `Display/TopographicBackground`)
