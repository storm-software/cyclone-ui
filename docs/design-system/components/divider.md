---
title: Divider
description: A thin horizontal or vertical line that separates content, with three thicknesses and a color override.
documentType: reference
tags: [component, divider, display, layout]
component:
  name: divider
  package: "@cyclone-ui/divider"
  stories:
    - title: Display/Divider
      file: components/divider/src/Divider.stories.tsx
---

# Divider

`Divider` draws a line between adjacent content. Use it between sections, list items, or toolbar groups. It is a single Tamagui `View`, so it accepts other view props such as margins.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add divider
pnpm install
```

- **File:** `Divider.tsx`. The CLI writes it to `<path>/divider/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Divider } from "@cyclone-ui/divider";
```

## Usage

A horizontal divider fills the width of its parent.

```tsx
<View width={320} gap="md">
  <Text>Account</Text>
  <Divider size="sm" />
  <Text>Billing</Text>
</View>
```

A vertical divider fills the height of its parent. Give the parent a fixed height or let it stretch.

```tsx
<View flexDirection="row" height={96}>
  <Divider direction="vertical" size="md" />
</View>
```

## Anatomy

```tsx
<Divider />
```

| Part      | Renders                                                       | Purpose                                                                          |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Divider` | A Tamagui `View` with no children. It sets no role or label.  | The line. Its width or height is the thickness, and its background is the color. |

## Examples

The examples are the stories in [`Divider.stories.tsx`](../../../components/divider/src/Divider.stories.tsx). Each story renders in a 320 px wide column.

| Stories                    | What they show                                                       |
| -------------------------- | -------------------------------------------------------------------- |
| `Horizontal`               | A horizontal `sm` divider across the column.                         |
| `Vertical`                 | A vertical `md` divider in a row that is 96 px high.                 |
| `Small`, `Medium`, `Large` | A horizontal divider at the `sm`, `md`, and `lg` thicknesses.        |

## Props

`Divider` accepts all `ViewProps` except `children`, `direction`, `size`, and `color`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | The axis on which the line extends. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The line thickness: 1px, 2px, or 3px. |
| `color` | Color token, theme token, or string | See below | The line color. |

## Variants and states

| Size | Thickness | Default color token |
| --- | --- | --- |
| `sm` | 1px | `hairline` |
| `md` | 2px | `hairline` |
| `lg` | 3px | `border` |

- A horizontal divider has `width: 100%`. The height equals the thickness.
- A vertical divider has `height: 100%` and `align-self: stretch`. The width equals the thickness.
- The line does not shrink in a flex container (`flexShrink: 0`).
- A `color` value replaces the default color.

The stories show the horizontal, vertical, `sm`, `md`, and `lg` cases.

## Accessibility

The source sets no role or label on `Divider`. It is a decorative `View`. The unit tests check the default color, the size on each axis, and the color override.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/divider/src/Divider.tsx`](../../../components/divider/src/Divider.tsx)
- [`components/divider/src/Divider.test.tsx`](../../../components/divider/src/Divider.test.tsx)
- [`components/divider/src/Divider.stories.tsx`](../../../components/divider/src/Divider.stories.tsx)
