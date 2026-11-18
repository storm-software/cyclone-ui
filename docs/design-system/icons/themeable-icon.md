---
title: Themeable icon
description: An icon wrapper in @cyclone-ui/icons that applies size and color to its child icon and animates on enter and exit, plus a status icon that follows the theme.
documentType: reference
tags: [component, icon, theme, status]
component:
  name: icons
  package: "@cyclone-ui/icons"
  stories:
    - title: Display/ThemeableIcon
      file: components/icons/src/ThemeableIcon.stories.tsx
---

# Themeable icon

`ThemeableIcon` wraps an icon and gives it a size and color. `ThemedIcon` picks a status icon from the current theme name. Use them to show status icons that follow the theme.

Both are part of the [`@cyclone-ui/icons`](./index.md) package. They were in a separate `@cyclone-ui/themeable-icon` package before.

## Installation

`ThemeableIcon` is part of the icons package. Copy the package into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add icons
pnpm install
```

## Import

```tsx
import {
  ThemeableIcon,
  ThemedIcon,
  getIconByTheme
} from "@cyclone-ui/icons";
import type {
  ThemeableIconProps,
  ThemedIconProps
} from "@cyclone-ui/icons";
```

The subpath `@cyclone-ui/icons/ThemeableIcon` exports the same names.

## Usage

Wrap an icon in `ThemeableIcon`:

```tsx
import { Check, ThemeableIcon } from "@cyclone-ui/icons";

export function Example() {
  return (
    <ThemeableIcon size="3xl" color="primary">
      <Check />
    </ThemeableIcon>
  );
}
```

Use `ThemedIcon` to show the status icon for a theme:

```tsx
import { ThemedIcon } from "@cyclone-ui/icons";

export function Status() {
  return <ThemedIcon theme="danger" />;
}
```

## Anatomy

```tsx
<ThemeableIcon>
  {icon}
</ThemeableIcon>

<ThemedIcon theme="success" />
```

| Part            | Renders                                                                         | Purpose                                                                                     |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `ThemeableIcon` | A Tamagui `View` frame that holds the child icon                                | Passes `size` and `color` to the child icon and fades and scales the frame on enter and exit. |
| `ThemedIcon`    | The same frame with a `ThemeableIcon` inside, holding the icon from `getIconByTheme` | Shows the status icon for `theme`.                                                          |

## Examples

The examples are the stories in [`ThemeableIcon.stories.tsx`](../../../components/icons/src/ThemeableIcon.stories.tsx).

| Stories                                                    | What they show                                                         |
| ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| `Base`                                                     | `ThemeableIcon` with no props.                                         |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | `ThemeableIcon` with `theme` set to `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |
| `Disabled`                                                 | `ThemeableIcon` with `disabled`.                                       |

The stories pass no child icon, so they show only the frame.

## Props

### `ThemeableIcon`

| Prop       | Type                 | Default   | Description                                                                                     |
| ---------- | -------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `children` | `ReactNode`          | -         | The icon to render.                                                                             |
| `size`     | `SizeTokens`         | `true`    | The icon size. The default keeps the intrinsic icon size (24 px).                               |
| `color`    | color token or value | -         | The icon color. Only the base clause is used. A state clause such as `hover:...` is dropped, because an SVG `stroke` or `fill` cannot carry it. |
| `disabled` | `boolean`            | `false`   | Uses the `primary-disabled` color.                                                              |
| `theme`    | `string \| null`     | Inherited | Sets the theme of the frame.                                                                    |

The component also accepts the Tamagui `View` props.

### `ThemedIcon`

`ThemedIcon` takes `theme`, `color`, `disabled`, and `size`, and the Tamagui `View` props. It renders the icon that `getIconByTheme` returns. When `disabled` is `true`, it makes the size smaller by four steps.

### `getIconByTheme`

`getIconByTheme({ theme, disabled, ...iconProps })` returns an icon element, or `null` when no rule matches. The check uses `theme.includes(...)` in this order:

| Condition                  | Icon                          |
| -------------------------- | ----------------------------- |
| `disabled`                 | `Lock` with `variant="filled"` |
| theme includes `error`     | `ErrorCircle`                 |
| theme includes `danger`    | `AlertCircle`                 |
| theme includes `warning`   | `AlertCircle`                 |
| theme includes `info`      | `InfoCircle`                  |
| theme includes `discovery` | `DiscoveryCircle`             |
| theme includes `success`   | `CheckCircle`                 |

`Lock` is a line-md icon. The circle icons are [vectors](./vectors.md).

## Variants and states

- **Enter and exit:** The frame starts at opacity `0` and scale `0.5` for the `enter` and `exit` styles. The change lasts `200ms`.
- **Disabled:** The icon uses the `primary-disabled` color. `ThemedIcon` shows the filled `Lock` icon.

## Accessibility

The source sets no label or role. Pair a status icon with visible text, such as [validation text](../components/validation-text.md), or add your own label.

## Related

- [Icons](./index.md)
- [Vectors](./vectors.md)
- [Design tokens](../tokens/index.md)
- [Switch](../components/switch.md)

## Source

- [`components/icons/src/ThemeableIcon.tsx`](../../../components/icons/src/ThemeableIcon.tsx)
- [`components/icons/src/ThemeableIcon.stories.tsx`](../../../components/icons/src/ThemeableIcon.stories.tsx)
