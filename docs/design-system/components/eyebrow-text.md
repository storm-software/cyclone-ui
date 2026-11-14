---
title: Eyebrow Text
description: A small, uppercase, muted label that renders as an h5 and sits above a main heading.
documentType: reference
tags: [component, eyebrow-text, typography]
component:
  name: eyebrow-text
  package: "@cyclone-ui/eyebrow-text"
  stories:
    - title: Typography/EyebrowText
      file: components/eyebrow-text/src/EyebrowText.stories.tsx
---

# Eyebrow Text

`EyebrowText` is a short overline label. Use it above a main heading or section title. It is a styled Tamagui `SizableText` that renders an `h5` element.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add eyebrow-text
pnpm install
```

- **File:** `EyebrowText.tsx`. The CLI writes it to `<path>/eyebrow-text/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, and `@tamagui/text`.

## Import

```tsx
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
```

## Usage

```tsx
<>
  <EyebrowText>Release notes</EyebrowText>
  <HeadingText level="title">What is new</HeadingText>
</>
```

Set the `theme` prop to change the color theme.

```tsx
<EyebrowText theme="brand">Lorem ipsum dolor sit amet</EyebrowText>
```

## Anatomy

```tsx
<EyebrowText>Label</EyebrowText>
```

| Part          | Renders                                                                                                   | Purpose                                 |
| ------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `EyebrowText` | A Tamagui `SizableText` as `<h5>`, in the `eyebrow` font family, size `xs`, weight `medium`, uppercase, and color `subtle` | A short label above a heading.          |

## Examples

The examples are the stories in [`EyebrowText.stories.tsx`](../../../components/eyebrow-text/src/EyebrowText.stories.tsx). Each story renders the text "Lorem ipsum dolor sit amet".

| Stories                                                     | What they show                                                               |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `Base`                                                      | The default style.                                                           |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |

## Props

`EyebrowText` accepts the props of `SizableText`. The exported type is `EyebrowTextProps`. The component has no custom props.

## Default style

| Property | Value |
| --- | --- |
| Element | `h5` |
| `color` | `subtle` |
| `fontFamily` | `eyebrow` |
| `size` | `xs` |
| `fontWeight` | `medium` |
| `textTransform` | `uppercase` |

## Variants and states

The component has no variants. The stories show the default style and these `theme` values: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Heading Text](./heading-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/eyebrow-text/src/EyebrowText.tsx`](../../../components/eyebrow-text/src/EyebrowText.tsx)
- [`components/eyebrow-text/src/EyebrowText.stories.tsx`](../../../components/eyebrow-text/src/EyebrowText.stories.tsx) (title: `Typography/EyebrowText`)
