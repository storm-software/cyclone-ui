---
title: Tooltip
description: A tooltip with trigger and content parts. The content is elevated, animates in and out, and shows an arrow by default.
documentType: reference
tags: [component, tooltip, overlay, container]
component:
  name: tooltip
  package: "@cyclone-ui/tooltip"
  stories:
    - title: Containers/Tooltip
      file: components/tooltip/src/Tooltip.stories.tsx
---

# Tooltip

`Tooltip` shows short supplemental information next to a trigger. It builds on the Tamagui `Tooltip`. Use it for hints that the user reads on hover or focus. Do not put essential information only in a tooltip.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add tooltip
pnpm install
```

- **File:** `Tooltip.tsx`. The CLI writes it to `<path>/tooltip/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md) and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/popover`, `@tamagui/popper`, and `@tamagui/tooltip`.

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

## Anatomy

```tsx
<Tooltip>
  <Tooltip.Trigger />
  <Tooltip.Content>{text}</Tooltip.Content>
</Tooltip>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Tooltip` | A Tamagui `Tooltip` inside a `Suspense` boundary with a `null` fallback. | The root. Holds the open state, the `size` context, and the surface props. |
| `Tooltip.Trigger` | The Tamagui `Tooltip.Trigger`. | The element that shows the tooltip on hover or keyboard focus. Use `asChild` to use your own element. |
| `Tooltip.Content` | The Tamagui `Tooltip.Content` in a portal, with `role="tooltip"` from Floating UI and `pointerEvents="none"`. A `ContainerBackground` draws the surface under the children. With `hasArrow`, a Tamagui `Tooltip.Arrow` is added and moved inward by the border width. | The popup. It shows an arrow by default. |

`TooltipTrigger` and `TooltipContent` are also exported by name. Use them in React Server Components, which cannot read `Tooltip.Content` from a client module.

The `Suspense` boundary lets Next.js Cache Components prerender the page around a tooltip. During that prerender, the tooltip itself streams in later. Ordinary server rendering includes the trigger.

## Examples

The examples are the stories in [`Tooltip.stories.tsx`](../../../components/tooltip/src/Tooltip.stories.tsx). Each story shows the tooltip when you hover or focus the text "Hover for a tooltip". The trigger is a focusable `BodyText`, not a `Button`, because `Button` depends on this package. On `primary` and `secondary` tooltips, the text uses `getContainerForeground`.

| Stories | What they show |
| --- | --- |
| `Base` | The default `tertiary` tooltip with the `raised` shadow and an arrow. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Floating` | Each of these `variant` values. |
| `Elevated`, `Flat` | The `elevated` shadow, and the `flat` shadow, which also removes the border. |
| `Accented`, `Glass` | A `primary` border, and frosted glass on a `primary` tooltip. |

## Props

### `Tooltip`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `SizeTokens` | `true` | Stored in the tooltip context. The Tamagui tooltip has no `size` prop. |
| `variant` | [Container](./container.md) variant | `"tertiary"` | The surface of the content and the arrow. See below. |
| `shadowStyle` | `"none" \| "raised" \| "elevated" \| "flat"` | `"raised"` | The content's shadow. |
| `glass`, `accented` | `boolean` | `false` | The [Container](./container.md) options: frosted glass and a `primary` border. A tooltip is too small for `noise`. |
| `theme` | Tamagui theme name | Inherited | The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

The root passes all other props to the Tamagui `Tooltip`. These are the main ones:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open`, `onOpenChange` | `boolean`, `(open: boolean) => void` | - | Control the open state. |
| `delay` | `number` or `{ open?: number; close?: number }` | `400` | The time in milliseconds before the tooltip opens or closes on hover. |
| `restMs` | `number` | The `delay` when it is a number, else `0` | The time the pointer must rest on the trigger before the tooltip opens. |
| `placement` | Floating UI placement | `"bottom"` | The side of the trigger. The tooltip flips and stays in the viewport. |
| `zIndex` | `number` | - | The z-index of the portal, for a tooltip over other portaled content, such as a dialog. |
| `disableAutoCloseOnScroll` | `boolean` | `false` | Keeps the tooltip open when the document scrolls. |

### `Tooltip.Content`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `hasArrow` | `boolean` | `true` | Shows the arrow. |
| `variant`, `shadowStyle`, `glass`, `accented` | Same as `Tooltip` | The `Tooltip`'s | Override the root's surface for this content. `shadowStyle` replaces the former `elevated` flag. |
| `arrowBorderColor` | color token | The variant's border | The arrow border color. |

## Variants and states

- **Enter and exit:** The content fades from opacity `0`, scales from `0.9`, and moves `-5px` on the vertical axis. The change lasts `200ms`.
- **Focus:** The content shows a `3px` solid `primary-active` outline, offset by `lg`, when it has keyboard focus.
- **Shape:** The content uses the `tooltip` radius, a `3xl` vertical padding, and a `2xl` horizontal padding.
- **Context size:** The root puts `size` in `TooltipContext` (`true` when you omit it). The context default, `12xl`, applies only without a `Tooltip` root. The tooltip parts do not read `size`.
- **Variants:** a [Container](./container.md) of the `variant` (any Container variant, the same set as [Button](./button.md)) draws the surface behind the content, and the arrow takes its background and border. `outlined` keeps an opaque `elevated` backing. Explicit `backgroundColor`, `borderColor`, and `borderWidth` on `Tooltip.Content` win over the variant, on the surface and the arrow. Text inside a `primary` or `secondary` tooltip should use `getContainerForeground(variant, themeName)` from `@cyclone-ui/container`.

## Accessibility

The Cyclone source sets no roles or labels. The Tamagui `Tooltip` supplies this behavior:

- The content has `role="tooltip"`.
- The tooltip opens on hover after the `delay`, and on keyboard focus (`focus-visible` only).
- The Escape key closes it. A document scroll also closes it, unless `disableAutoCloseOnScroll` is set.
- The content does not take focus and ignores the pointer.

Do not put essential information only in a tooltip. Touch screens have no hover. A trigger that is not a native control needs `tabIndex={0}` to get keyboard focus, as in the stories.

## Related

- [Button](./button.md), whose `tooltip` prop uses `Tooltip`
- [Popover](./popover.md)
- [Design tokens](../tokens/index.md)
- [Visually hidden](./visually-hidden.md)

## Source

- [`components/tooltip/src/Tooltip.tsx`](../../../components/tooltip/src/Tooltip.tsx)
- [`components/tooltip/src/Tooltip.stories.tsx`](../../../components/tooltip/src/Tooltip.stories.tsx) (title: `Containers/Tooltip`)
- [`components/tooltip/src/Tooltip.prerender.spec.tsx`](../../../components/tooltip/src/Tooltip.prerender.spec.tsx)
