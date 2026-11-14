---
title: Inline Code Text
description: An inline span for short code snippets in the code font, with a subtle background, a hairline border, and rounded corners, that wraps like text.
documentType: reference
tags: [component, inline-code-text, typography, code]
component:
  name: inline-code-text
  package: "@cyclone-ui/inline-code-text"
  stories:
    - title: Typography/InlineCodeText
      file: components/inline-code-text/src/InlineCodeText.stories.tsx
---

# Inline Code Text

`InlineCodeText` marks up commands, identifiers, or values inside running text. It is a styled Tamagui `SizableText` that renders a `span`.

For keys that the reader presses, use [Kbd](./kbd.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add inline-code-text
pnpm install
```

- **File:** `InlineCodeText.tsx`. The CLI writes it to `<path>/inline-code-text/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, and `@tamagui/text`.

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

## Anatomy

```tsx
<InlineCodeText>code</InlineCodeText>
```

| Part             | Renders                                                                                                 | Purpose                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `InlineCodeText` | A Tamagui `SizableText` as `<span>`, with `display: inline`, in the `code` font family, size `md`, and weight `normal` | A short code snippet inside a line of text. |

## Examples

The examples are the stories in [`InlineCodeText.stories.tsx`](../../../components/inline-code-text/src/InlineCodeText.stories.tsx). Each story renders the component inside a `BodyText` sentence.

| Stories                                                     | What they show                                                                                            |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Base`                                                      | The default style between two words of body text.                                                         |
| `Wrapping`                                                  | A long command in a 320 px wide paragraph. The code wraps to the next line, and each line keeps its padding, border, and radius. |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes.                              |

## Props

`InlineCodeText` accepts the props of `SizableText`. The exported type is `InlineCodeTextProps`. The component has no custom props.

## Default style

| Property | Value |
| --- | --- |
| Element | `span` |
| `display` | `inline` |
| `boxDecorationBreak` | `clone` |
| `fontFamily` | `code` |
| `size` | `md` |
| `fontWeight` | `normal` |
| `lineHeight` | `1.6` |
| `color` | `emphasis` |
| `backgroundColor` | `floating-active` |
| `paddingTop` | `md` |
| `paddingBottom` | `lg` |
| `paddingHorizontal` | `xl` |
| `borderWidth` | `1` |
| `borderColor` | `hairline` |
| `borderRadius` | `sm` |

`display: inline` lets long code wrap like text. `boxDecorationBreak: clone` repeats the padding, border, and radius on each line. The unitless `lineHeight` of `1.6` makes the line box tall enough that wrapped lines do not overlap.

## Variants and states

The component has no variants. The stories show the default style, a wrapped snippet, and these `theme` values: `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. A unit test checks that the story shows the component between `BodyText` text.

## Related

- [Kbd](./kbd.md)
- [Code Block](./code-block.md)
- [Body Text](./body-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/inline-code-text/src/InlineCodeText.tsx`](../../../components/inline-code-text/src/InlineCodeText.tsx)
- [`components/inline-code-text/src/InlineCodeText.spec.ts`](../../../components/inline-code-text/src/InlineCodeText.spec.ts)
- [`components/inline-code-text/src/InlineCodeText.stories.tsx`](../../../components/inline-code-text/src/InlineCodeText.stories.tsx) (title: `Typography/InlineCodeText`)
