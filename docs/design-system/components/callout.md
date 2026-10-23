---
title: Callout
description: Reference for the Callout component, a themed highlight box with an icon, an eyebrow, a heading, and body text.
documentType: reference
tags: [component, containers, callout, status]
---

# Callout

`Callout` is a highlighted box for a key message. It has a gradient background, a header (icon, eyebrow, and heading), and a body. The `theme` prop sets the color.

For a short status banner with a close button, use [Alert](./alert.md).

## Import

```tsx
import { Callout } from "@cyclone-ui/callout";
```

## Usage

```tsx
<Callout theme="info">
  <Callout.Header>
    <Callout.Header.Icon />
    <YStack gap="md">
      <Callout.Header.Eyebrow>Did you know?</Callout.Header.Eyebrow>
      <Callout.Header.Heading>Callouts take a theme</Callout.Header.Heading>
    </YStack>
  </Callout.Header>
  <Callout.Body>The icon follows the theme.</Callout.Body>
</Callout>
```

## Anatomy

| Part                      | Purpose                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `Callout`                 | The frame. It is an `outlined` [Container](./container.md) with a gradient and a diagonal pattern. |
| `Callout.Header`          | A row for the icon and the titles.                                                          |
| `Callout.Header.Icon`     | The status icon. Pass children for a custom icon. Without an icon for the theme, nothing renders. |
| `Callout.Header.Eyebrow`  | A small label above the heading (`EyebrowText`).                                            |
| `Callout.Header.Heading`  | The heading (`HeadingLargeText`).                                                           |
| `Callout.Body`            | The body text (`BodyText`).                                                                 |

## Props

`Callout` accepts all props of [Container](./container.md), plus:

| Prop    | Type             | Description                                                                 |
| ------- | ---------------- | --------------------------------------------------------------------------- |
| `theme` | `ColorThemeName` | The color theme of the frame, the icon, and the eyebrow. The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

The header, heading, eyebrow, and body accept the props of their base components. The icon accepts `ThemeableIconProps`.

## Variants

The stories show the base theme and one callout for each of: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`, plus a custom icon. The background mixes the `primary` and `secondary` tokens of the theme. See [Design tokens](../tokens/index.md).

## Related

- [Alert](./alert.md)
- [Card](./card.md)
- [Container](./container.md)

## Source

- [`components/callout/src/Callout.tsx`](../../../components/callout/src/Callout.tsx)
- [`components/callout/src/Callout.stories.tsx`](../../../components/callout/src/Callout.stories.tsx) (title: `Containers/Callout`)
