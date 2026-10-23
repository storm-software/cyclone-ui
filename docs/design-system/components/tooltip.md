---
title: Tooltip
description: A tooltip with trigger and content parts. The content is elevated, animates in and out, and shows an arrow by default.
documentType: reference
tags: [component, tooltip, overlay, container]
---

# Tooltip

`Tooltip` shows short supplemental information next to a trigger. It builds on the Tamagui `Tooltip`. Use it for hints that the user reads on hover or focus. Do not put essential information only in a tooltip.

## Import

```tsx
import { Tooltip } from "@cyclone-ui/tooltip";
```

## Usage

```tsx
import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { Tooltip } from "@cyclone-ui/tooltip";

export function Example() {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>
          <Button.Text>Open Tooltip</Button.Text>
        </Button>
      </Tooltip.Trigger>

      <Tooltip.Content>
        <BodyText>Lorem ipsum dolor</BodyText>
      </Tooltip.Content>
    </Tooltip>
  );
}
```

## Parts

| Part | Role |
| --- | --- |
| `Tooltip` | The root. It accepts the Tamagui `Tooltip` props and a `size` prop. |
| `Tooltip.Trigger` | The Tamagui `Tooltip.Trigger`. Use `asChild` to use your own element. |
| `Tooltip.Content` | The popup. It shows an arrow by default. |

## Props

### `Tooltip`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `SizeTokens` | `true` | Stored in the tooltip context. The Tamagui tooltip has no `size` prop. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

The root passes all other props to the Tamagui `Tooltip`. The source does not list them, so see the Tamagui docs for placement and delay.

### `Tooltip.Content`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hasArrow` | `boolean` | `true` | Shows the arrow. |
| `arrowBorderColor` | color token | Content `borderColor` | The arrow border color. |
| `borderColor` | color token | `"outline"` | The content border color. |
| `backgroundColor` | color token | `"elevated"` | The content and arrow background. |
| `elevated` | `boolean` | `true` | Adds the `0px 4px 30px #0D0C0766` shadow. |

## Variants and states

- **Enter and exit:** The content fades from opacity `0`, scales from `0.9`, and moves `-5px` on the vertical axis. The change lasts `200ms`.
- **Focus:** The content shows a `3px` solid `primary-active` outline when it has keyboard focus.
- **Shape:** The content uses the `tooltip` radius, a `3xl` vertical padding, and a `2xl` horizontal padding.
- **Context size:** The default context size is `12xl`.

## Accessibility

The source sets no roles or labels. The Tamagui `Tooltip` provides the trigger and popup behavior.

## Related

- [Design tokens](../tokens/index.md)
- [Visually hidden](./visually-hidden.md)

## Source

- [`components/tooltip/src/Tooltip.tsx`](../../../components/tooltip/src/Tooltip.tsx)
- [`components/tooltip/src/Tooltip.stories.tsx`](../../../components/tooltip/src/Tooltip.stories.tsx)
