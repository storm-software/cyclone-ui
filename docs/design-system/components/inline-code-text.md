---
title: Inline Code Text
description: An inline span for short code snippets in the code font, with a floating background and rounded corners.
documentType: reference
tags: [component, inline-code-text, typography, code]
---

# Inline Code Text

`InlineCodeText` marks up commands, identifiers, or values inside running text. It is a styled Tamagui `SizableText` that renders a `span`.

## Import

```tsx
import { InlineCodeText } from "@cyclone-ui/inline-code-text";
```

## Usage

```tsx
<BodyText>
  Run <InlineCodeText>pnpm install</InlineCodeText> before you start.
</BodyText>
```

## Props

`InlineCodeText` accepts the props of `SizableText`. The exported type is `InlineCodeTextProps`. The component has no custom props.

## Default style

| Property | Value |
| --- | --- |
| Element | `span` |
| `display` | `inline-flex` |
| `fontFamily` | `code` |
| `size` | `lg` |
| `color` | `emphasis` |
| `backgroundColor` | `floating` |
| `paddingVertical` | `sm` |
| `paddingHorizontal` | `xl` |
| `borderRadius` | `container` |

## Variants and states

The component has no variants. The stories show the default style and these `theme` values: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. A unit test checks that the story shows the component between `BodyText` text.

## Related

- [Design tokens](../tokens/index.md)

## Source

- [`components/inline-code-text/src/InlineCodeText.tsx`](../../../components/inline-code-text/src/InlineCodeText.tsx)
- [`components/inline-code-text/src/InlineCodeText.spec.ts`](../../../components/inline-code-text/src/InlineCodeText.spec.ts)
- [`components/inline-code-text/src/InlineCodeText.stories.tsx`](../../../components/inline-code-text/src/InlineCodeText.stories.tsx)
