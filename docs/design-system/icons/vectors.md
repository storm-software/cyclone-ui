---
title: Vectors
description: A set of themed SVG graphics for status, direction, state indicators, background patterns, and the Storm logo.
documentType: reference
tags: [component, vectors, svg, icon, graphics]
component:
  name: icons
  package: "@cyclone-ui/icons"
---

# Vectors

The vectors are a set of custom SVG graphics in the [`@cyclone-ui/icons`](./index.md) package. They were in a separate `@cyclone-ui/vectors` package before. They use the same props as other Cyclone UI icons, and they pick up the current theme color. Several graphics animate when a state prop changes. For the general icon set, see the [icon catalog](./index.md).

## Installation

The vectors are part of the icons package. Copy the package into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add icons
pnpm install
```

## Import

```tsx
import { AlertCircle, Arrow, Binary } from "@cyclone-ui/icons/vectors";
```

The `@cyclone-ui/icons/vectors` subpath exports every vector, with the matching `*Props` types. Each vector also has its own subpath, such as `@cyclone-ui/icons/vectors/Arrow`. The package root exports them as one namespace, `vectors`, because some names (such as `AlertCircle` and `Check`) are also line-md icon names.

## Usage

```tsx
import { CheckCircle } from "@cyclone-ui/icons/vectors";

export function Example() {
  return <CheckCircle size={32} color="primary" isComplete />;
}
```

## Common props

Each vector takes the `IconProps` from `@tamagui/helpers-icon`. Most set `size` to `24`. A string `size` is first looked up in the Tamagui `size` tokens. A `color` is read with `useCurrentColor`. Each vector has its own default color, listed below.

## Catalog

### Status circles

These five share one prop: `isComplete` (`boolean`, default `true`). Setting it to `false` resets the drawing. Setting it back to `true` plays the draw animation.

| Export | Default color | Notes |
| --- | --- | --- |
| `AlertCircle` | `primary` | `getIconByTheme` uses it for `danger` and `warning` themes. |
| `CheckCircle` | `on-primary` | `getIconByTheme` uses it for `success` themes. |
| `ErrorCircle` | `primary` | `getIconByTheme` uses it for `error` themes. |
| `DiscoveryCircle` | `primary` | `getIconByTheme` uses it for `discovery` themes. |
| `InfoCircle` | `primary` | `AlertCircle`, flipped on the X axis. `getIconByTheme` uses it for `info` themes. |

### Marks and arrows

| Export | Props | Default color | Notes |
| --- | --- | --- | --- |
| `Check` | `isComplete` | `on-primary` | A check mark. It draws when `isComplete` is `true`. |
| `Arrow` | `pointing`, `isComplete`, `animateShrink` | `on-primary` | `pointing` is `"up"`, `"right"` (default), `"down"`, or `"left"`. `isComplete` and `animateShrink` default to `true`. |
| `RightArrow`, `LeftArrow`, `UpArrow`, `DownArrow` | `Arrow` props, without `pointing` | `on-primary` | `Arrow` with a fixed direction. |

### State indicators

| Export | Props | Default color | Notes |
| --- | --- | --- | --- |
| `AccordionToggle` | `isExpanded` (default `false`) | `primary` | An icon that rotates between `-90deg` and `0deg`. |
| `MenuToggle` | `isOpen`, `isHovered` (both default `false`) | `on-primary` | A menu icon that animates for the open and hover states. |
| `SearchTrigger` | `isLoading` (default `false`) | `on-primary` | A search icon that animates for the loading state. |
| `Binary` | `state` (`"off"` or `"on"`, default `"off"`) | `on-primary` | An on/off indicator. |

### Background patterns

`BackgroundNoise`, `CheckerBoard`, and `Diagonal` take only the common props. Their default color is `on-primary`. The `BackgroundNoise` story sets a `height` of `200` and a `width` of `600`.

### Brand and file graphics

| Export | Props | Notes |
| --- | --- | --- |
| `PdfIcon` | Common props | A PDF file icon. |
| `StormLogoIcon` | Common props and `theme` | The Storm logo mark. With no `color`, it uses the `primary` color of the theme. |
| `StormLogoText` | Common props and `theme` | The Storm logo text. It uses the same color rule. |

The `theme` prop wraps the logo in that theme.

## Examples

Each vector has a stories file next to it in [`components/icons/src/vectors`](../../../components/icons/src/vectors), with the Storybook title `Vectors/<Name>`. Most have one `Base` story. The others add:

| Stories file | Stories |
| --- | --- |
| `Arrow.stories.tsx` | `Base`, `Up`, `Right`, `Down`, `Left` |
| `DiscoveryCircle.stories.tsx` | `Base`, `Small` |
| `StormLogoIcon.stories.tsx` | `Base`, `Brand`, `Danger`, `Warning`, `Info`, `Discovery`, `Success` |
| `StormLogoText.stories.tsx` | The `StormLogoIcon` set, plus `Thick`, `Outlined`, and `ThickOutlined` |

## Accessibility

The logos set `role="img"` on the SVG. The source sets no label on them or on the other vectors. Pair a status vector with visible text, or add a label.

## Related

- [Design tokens](../tokens/index.md)
- [Icon catalog](./index.md)
- [Themeable icon](./themeable-icon.md)

## Source

- [`components/icons/src/vectors.ts`](../../../components/icons/src/vectors.ts)
- [`components/icons/src/vectors/themed-icon.tsx`](../../../components/icons/src/vectors/themed-icon.tsx)
- Stories: `components/icons/src/vectors/*.stories.tsx`
