---
title: Container
description: Reference for the Container component, a padded, rounded surface with theme variants.
documentType: reference
tags: [component, layout]
component:
  name: container
  package: "@cyclone-ui/container"
  stories:
    - title: Containers/Container
      file: components/container/src/Container.stories.tsx
---

# Container

`Container` wraps content in a padded, rounded box. Its `variant` sets the background and the border from the theme's surface tokens. It can also add a shadow, frosted glass, or a film grain.

Use it for panels and other plain surfaces. For a surface with a header, a body, an accent bar, and a footer link, use [Card](./card.md). Many components draw their own surface with a `Container`; see [Building on Container](#building-on-container).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add container
pnpm install
```

- **File:** `Container.tsx`. The CLI writes it to `<path>/container/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Container } from "@cyclone-ui/container";
```

## Usage

```tsx
<Container variant="elevated" size="4xl">
  Panel content
</Container>

<Container glass noise>
  A frosted glass surface with a film grain overlay
</Container>
```

## Anatomy

```tsx
<Container variant="surface">{children}</Container>

// A Container layer drawn as the background of another component:
<View position="relative" zIndex={0}>
  <ContainerBackground variant="surface" />
  {children}
</View>
```

| Part                  | Renders                                                                                                                                         | Purpose                                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Container`           | Two Tamagui `View`s: an outer `group` view (full width, `flexGrow: 1`) and the frame inside it. The frame has `tabIndex={-1}` and a ring on `focus-visible`. | The surface. The frame draws the variant's background and border, and the padding, radius, and shadow. It gives its children the foreground color of the variant (see `useContainerForeground`).          |
| Noise layer           | A Tamagui `View` with `position: absolute`, `zIndex: -1`, `pointerEvents: "none"`, `mixBlendMode: "hard-light"`, and opacity `0.12`              | Only with `noise`. Draws the grain over the background and under the children. The frame becomes `position: relative`, `overflow: hidden`, and `zIndex: 0` to clip the grain to its rounded shape.      |
| `ContainerBackground` | A Tamagui `View` with `aria-hidden`, `position: absolute`, `inset: 0`, `zIndex: -1`, and `pointerEvents: "none"`, around a `tight` `Container` | Draws a `Container` surface behind the children of its parent. See [Building on Container](#building-on-container).                                                                                      |

## Examples

The examples are the stories in [`Container.stories.tsx`](../../../components/container/src/Container.stories.tsx). Most stories render one 300 px high `Container` with the text "Container Text".

| Stories                                                                                         | What they show                                                                                                  |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Base`                                                                                          | The default `elevated` variant.                                                                                 |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Sunken`, `Canvas`, `Surface`, `Elevated`, `Floating` | Each variant.                                                                                                   |
| `Glass`, `GlassNoise`                                                                           | `glass`, then `glass` with `noise`, over two colored circles, so the blur has something to show.                |
| `Noise`, `PrimaryNoise`                                                                         | The film grain on the `elevated` and `primary` variants.                                                        |
| `Circular`, `Tight`                                                                             | `circular` and `tight` on the `secondary` variant.                                                              |
| `Accented`, `Hovered`                                                                           | An `accented` border on `surface`, and the hovered background of `primary` (`hovered={true}`).                  |
| `ShadowRaised`, `ShadowElevated`, `ShadowFlat`                                                  | Each `shadowStyle` on the `elevated` variant.                                                                   |
| `Sized`, `NumericSize`, `Sizes`                                                                 | The `6xl` size token, a numeric `size` (`8`), which keeps the base padding, and the `xs` to `6xl` sizes in a row. |
| `Themes`                                                                                        | Each variant in the `discovery`, `success`, `info`, `danger`, and `warning` themes.                              |

## Props

`Container` also accepts the props of its styled frame, a Tamagui `View`. Explicit style props, such as `borderWidth={0}`, override the variant's.

| Prop           | Type                                             | Default       | Purpose                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`      | `ContainerVariant`                               | `"elevated"`  | The surface. See [Variants](#variants).                                                                                                                                                                         |
| `size`         | size token, `number`, or `true`                  | `true`        | The padding, from a size token. Other values (the default `true`, or a number) keep the base `2xl` padding.                                                                                                    |
| `shadowStyle`  | `"none" \| "raised" \| "elevated" \| "flat"`     | `"none"`      | `raised` adds the resting raised shadow, `elevated` a large floating shadow, and `flat` removes the border as well as the shadow.                                                                               |
| `circular`     | `boolean`                                        | `false`       | Makes the box a circle.                                                                                                                                                                                         |
| `tight`        | `boolean`                                        | `false`       | Removes the padding.                                                                                                                                                                                            |
| `accented`     | `boolean`                                        | `false`       | Draws the border in `primary`.                                                                                                                                                                                  |
| `glass`        | `boolean`                                        | `false`       | Frosted glass: the variant's background at 60% opacity, a blur and saturation boost on whatever is behind, a faint white sheen from the top edge, and a faint white border. Web only for the blur.             |
| `noise`        | `boolean`                                        | `false`       | Overlays a fine film grain inside the rounded frame, blended with `hard-light` so it lightens and darkens the background.                                                                                       |
| `hovered`      | `boolean`                                        | `false`       | Shows the variant's hovered background, e.g. while a parent is hovered.                                                                                                                                         |
| `hoverGroup`   | `string`                                         | -             | Shows the variant's hovered background while the ancestor `group` of this name is hovered, in CSS.                                                                                                              |
| `borderRadius` | radius token                                     | `"container"` | The radius of the frame and its outer group view.                                                                                                                                                               |

`circular` and `tight` also set the height to `fit-content`.

## Variants

Each surface variant paints the color token of the same name.

| Variant | Surface |
| --- | --- |
| `primary` | `primary` background, no border. |
| `secondary` | `secondary` background, `border` border. |
| `tertiary` | `surface` background, `hairline` border. |
| `outlined` | Transparent background, 2 px `primary` border. |
| `sunken` | `sunken` background, `border` border. |
| `canvas` | `canvas` background, `border` border. |
| `surface` | `surface` background, `border` border. |
| `elevated` | The default. `elevated` background, `border` border. |
| `floating` | `floating` background, `border` border. |

[Button](./button.md) draws these variants with a `Container`, and so do the surfaces of Card, Dialog, Popover, Tooltip, Sheet, ContextMenu, Accordion, Collapsible and Tag, the floating Tabs pill, and the Toggle indicator.

## Building on Container

The package also exports what other components use to draw a Container surface:

| Export | Purpose |
| --- | --- |
| `ContainerBackground` | A `Container` drawn as its parent's background: stretched behind the parent's children, following its radius, click-through and hidden from assistive tech. The parent must be positioned (`position: "relative"`; Tamagui views aren't by default) and a stacking context (`zIndex: 0` or `isolation: "isolate"`), and leave its own background and border clear. The layer draws no shadow: the parent draws `containerShadows[shadowStyle]`. Pass the layer the `shadowStyle` anyway, so `flat` drops its border. |
| `ContainerSurfaceProps` | The `variant`, `shadowStyle`, `glass`, `noise` and `accented` props, for components that accept them. |
| `containerVariants` | Each variant's `backgroundColor`, `borderWidth` and `borderColor`. |
| `containerShadows` | Each `shadowStyle`'s `boxShadow` (`flat` is `none`), for the parent of a `ContainerBackground`, which draws the shadow itself. |
| `getContainerForeground(variant, themeName)` | The text color on a variant: `on-primary` on `primary`, `on-secondary` on `secondary` (`primary` on an uncolored theme, where `on-secondary` is faint), and `undefined` otherwise. |
| `useContainerForeground()` | The same color for content inside the nearest `Container`, in that container's theme. Card and Dialog read it for their built-in text. |

## Related

- [Card](./card.md)
- [Button](./button.md)
- [Page](./page.md)

## Source

- [`components/container/src/Container.tsx`](../../../components/container/src/Container.tsx)
- [`components/container/src/Container.stories.tsx`](../../../components/container/src/Container.stories.tsx) (title: `Containers/Container`)
- [`components/container/src/Container.layers.spec.ts`](../../../components/container/src/Container.layers.spec.ts)
