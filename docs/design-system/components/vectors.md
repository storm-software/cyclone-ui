---
title: Vectors
description: A set of themed SVG graphics for status, direction, state indicators, background patterns, and the Storm logo.
documentType: reference
tags: [component, vectors, svg, icon, graphics]
---

# Vectors

`@cyclone-ui/vectors` is a set of custom SVG graphics. They use the same props as other Cyclone UI icons, and they pick up the current theme color. Several graphics animate when a state prop changes. For the general icon set, see the [icon catalog](../icons/index.md).

## Import

```tsx
import { AlertCircle, Arrow, Binary } from "@cyclone-ui/vectors";
```

The package exports every vector from its index, with the matching `*Props` types.

## Usage

```tsx
import { CheckCircle } from "@cyclone-ui/vectors";

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
| `AlertCircle` | `primary` | `getIconByTheme` uses it for `warning` themes. |
| `CheckCircle` | `on-primary` | `getIconByTheme` uses it for `success` themes. |
| `ErrorCircle` | `primary` | `getIconByTheme` uses it for `danger` themes. |
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

## Accessibility

The logos set `role="img"` on the SVG. The source sets no label on them or on the other vectors. Pair a status vector with visible text, or add a label.

## Related

- [Design tokens](../tokens/index.md)
- [Icon catalog](../icons/index.md)
- [Themeable icon](./themeable-icon.md)

## Source

- [`components/vectors/src/index.ts`](../../../components/vectors/src/index.ts)
- [`components/vectors/src/themed-icon.tsx`](../../../components/vectors/src/themed-icon.tsx)
- Stories: `components/vectors/src/*.stories.tsx`
