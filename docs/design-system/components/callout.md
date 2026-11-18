---
title: Callout
description: Reference for the Callout component, a themed highlight box with an icon, an eyebrow, a heading, and body text.
documentType: reference
tags: [component, containers, callout, status]
component:
  name: callout
  package: "@cyclone-ui/callout"
  stories:
    - title: Containers/Callout
      file: components/callout/src/Callout.stories.tsx
---

# Callout

`Callout` is a highlighted box for a key message. It has a gradient background, a header (icon, eyebrow, and heading), and a body. The `theme` prop sets the color.

For a short status banner with a close button, use [Alert](./alert.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add callout
pnpm install
```

- **File:** `Callout.tsx`. The CLI writes it to `<path>/callout/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/linear-gradient`, `@tamagui/stacks`, and `@tamagui/web`.

## Import

```tsx
import { Callout } from "@cyclone-ui/callout";
```

## Usage

```tsx
import { Callout } from "@cyclone-ui/callout";
import { YStack } from "@tamagui/stacks";

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

```tsx
<Callout>
  <Callout.Header>
    <Callout.Header.Icon />
    <Callout.Header.Eyebrow>Eyebrow</Callout.Header.Eyebrow>
    <Callout.Header.Heading>Heading</Callout.Header.Heading>
  </Callout.Header>
  <Callout.Body>Body</Callout.Body>
</Callout>
```

| Part                      | Renders | Purpose |
| ------------------------- | ------- | ------- |
| `Callout`                 | An `outlined` [Container](./container.md) with a 3 px border, a `primary` background, and hidden overflow. Under the content, it draws layers of `LinearGradient` (`@tamagui/linear-gradient`), a `Diagonal` SVG line pattern at 5% opacity, and a dark gradient overlay. | The frame. It applies `theme` to the background and to its parts. The content sits in a Tamagui `YStack` above the background layers. |
| `Callout.Header`          | A Tamagui `XStack` | A row for the icon and the titles. To put the eyebrow above the heading, wrap them in a `YStack`, as in [Usage](#usage). |
| `Callout.Header.Icon`     | A `ThemeableIcon` at size `13xl`, in the `secondary` color | The status icon. Pass children for a custom icon. Without an icon for the theme, nothing renders. |
| `Callout.Header.Eyebrow`  | `EyebrowText` as `<h5>` | A small label above the heading, in the `secondary` color. |
| `Callout.Header.Heading`  | `HeadingLargeText` as `<h2>` | The heading, in the `emphasis` color. |
| `Callout.Body`            | `BodyText` as `<p>` | The body text, in the `emphasis` color. |

`CalloutHeader`, `CalloutIcon`, `CalloutEyebrow`, `CalloutHeading`, and `CalloutBody` are also exported by name. Use them in React Server Components, which cannot read `Callout.Header` from a client module.

## Examples

The examples are the stories in [`Callout.stories.tsx`](../../../components/callout/src/Callout.stories.tsx). Each story renders all the parts, with "Callout Eyebrow", "Callout Heading", and a long sample body.

| Stories | What they show |
| ------- | -------------- |
| `Base` | A callout without `theme`. |
| `Brand`, `Discovery`, `Danger`, `Warning`, `Info`, `Success` | Each color theme. The theme changes the icon, the eyebrow color, and the background. |
| `CustomIcon` | A `QuestionCircle` icon as the children of `Callout.Header.Icon`. |

## Props

`Callout` accepts all props of [Container](./container.md), plus:

| Prop    | Type             | Description                                                                 |
| ------- | ---------------- | --------------------------------------------------------------------------- |
| `theme` | `ColorThemeName` | The color theme of the frame, the icon, and the eyebrow. The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

The header, heading, eyebrow, and body accept the props of their base components. The icon accepts `ThemeableIconProps`. The frame always sets `variant="outlined"` and `overflow="hidden"`, so those props have no effect.

The package also exports `CalloutContext` and the `CalloutProps`, `CalloutHeaderProps`, `CalloutHeadingProps`, `CalloutBodyProps`, and `CalloutIconProps` types.

## Variants

The stories show the base theme and one callout for each of: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`, plus a custom icon. The background mixes the `primary` and `secondary` tokens of the theme. See [Design tokens](../tokens/index.md).

## Accessibility

- The source sets no `role` or live region on `Callout`. It is static content.
- The heading is an `<h2>` element and the eyebrow is an `<h5>` element. The body is a `<p>` element. Check that these heading levels fit the outline of your page.

## Related

- [Alert](./alert.md)
- [Card](./card.md)
- [Container](./container.md)

## Source

- [`components/callout/src/Callout.tsx`](../../../components/callout/src/Callout.tsx)
- [`components/callout/src/Callout.stories.tsx`](../../../components/callout/src/Callout.stories.tsx) (title: `Containers/Callout`)
