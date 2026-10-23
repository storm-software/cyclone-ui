---
title: Themeable icon
description: An icon wrapper that applies size and color to its child icon and animates on enter and exit. It also includes a status icon that follows the theme.
documentType: reference
tags: [component, themeable-icon, icon, theme, status]
---

# Themeable icon

`ThemeableIcon` wraps an icon and gives it a size and color. `ThemedIcon` picks a status icon from the current theme name. Use them to show status icons that follow the theme.

## Import

```tsx
import {
  ThemeableIcon,
  ThemedIcon,
  getIconByTheme
} from "@cyclone-ui/themeable-icon";
import type {
  ThemeableIconProps,
  ThemedIconProps
} from "@cyclone-ui/themeable-icon";
```

## Usage

Wrap an icon in `ThemeableIcon`:

```tsx
import { Check } from "@cyclone-ui/icons";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";

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
import { ThemedIcon } from "@cyclone-ui/themeable-icon";

export function Status() {
  return <ThemedIcon theme="danger" />;
}
```

## Props

### `ThemeableIcon`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | The icon to render. |
| `size` | `SizeTokens` | `true` | The icon size. The default keeps the intrinsic icon size. |
| `color` | color token or value | — | The icon color. Only the base clause is used. A state clause such as `hover:...` is dropped. |
| `disabled` | `boolean` | `false` | Uses the `primary-disabled` color. |
| `theme` | `string \| null` | Inherited | Sets the theme of the frame. |

The component also accepts the Tamagui `View` props.

### `ThemedIcon`

`ThemedIcon` takes `theme`, `color`, `disabled`, and `size`. It renders the icon that `getIconByTheme` returns. When `disabled`, it makes the size smaller by one step.

### `getIconByTheme`

`getIconByTheme({ theme, disabled, ...iconProps })` returns an icon element, or `null` when no rule matches. The check uses `theme.includes(...)` in this order:

| Condition | Icon |
| --- | --- |
| `disabled` | `Lock` |
| theme includes `danger` | `ErrorCircle` |
| theme includes `warning` | `AlertCircle` |
| theme includes `info` | `InfoCircle` |
| theme includes `discovery` | `DiscoveryCircle` |
| theme includes `success` | `CheckCircle` |
| theme includes `positive` | `PlusCircle` |
| theme includes `negative` | `MinusCircle` |

`Lock`, `PlusCircle`, and `MinusCircle` come from `@cyclone-ui/icons`. The circle icons come from [`@cyclone-ui/vectors`](./vectors.md).

## Variants and states

- **Enter and exit:** The frame starts at opacity `0` and scale `0.5` for the `enter` and `exit` styles. The change lasts `200ms`.
- **Themes:** The stories show `brand`, `discovery`, `danger`, `warning`, `info`, and `success`, and a `Disabled` story.

## Accessibility

The source sets no label or role. Pair a status icon with visible text, such as [validation text](./validation-text.md), or add your own label.

## Related

- [Design tokens](../tokens/index.md)
- [Vectors](./vectors.md)
- [Switch](./switch.md)

## Source

- [`components/themeable-icon/src/ThemeableIcon.tsx`](../../../components/themeable-icon/src/ThemeableIcon.tsx)
- [`components/themeable-icon/src/ThemeableIcon.stories.tsx`](../../../components/themeable-icon/src/ThemeableIcon.stories.tsx)
