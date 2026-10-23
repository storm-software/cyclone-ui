---
title: "Typography tokens"
description: "Font families, font sizes, line heights, weights, and letter spacing available in Cyclone UI."
documentType: reference
tags: [tokens, typography, font]
---

# Typography tokens

Typography tokens have two layers. Semantic typography roles choose a font family and a line height. Primitive scales give the font sizes, weights, line heights, and letter spacing. For the font files, see the [Storm Sans](../fonts/storm-sans.md) and [Storm Serif](../fonts/storm-serif.md) pages.

Sources: [`semantic/tokens.json`](../../../packages/tokens/src/tokens/semantic/tokens.json) (group `typography`) and [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json).

## Typography roles

A role sets the family and the line height. The component sets the size and weight. CSS variable pattern: `--storm-typography-<role>`. The value is a CSS `font` shorthand.

| Role | Family | Line height | Style | CSS variable |
| --- | --- | --- | --- | --- |
| `display` | Storm Sans | `line-height.normal` (1.2375) | normal | `--storm-typography-display` |
| `editorial` | Storm Serif | `line-height.normal` (1.2375) | normal | `--storm-typography-editorial` |
| `body` | Storm Sans | `line-height.snug` (1.125) | normal | `--storm-typography-body` |
| `caption` | Storm Sans | `line-height.snug` (1.125) | italic | `--storm-typography-caption` |
| `eyebrow` | Google Sans Code | `line-height.none` (0.765) | normal | `--storm-typography-eyebrow` |
| `code` | Google Sans Code | `line-height.snug` (1.125) | normal | `--storm-typography-code` |

### display

Default UI display face: Storm Sans with normal leading. Size and weight come from the component. Use it for headings, labels and other short, prominent UI text such as titles, buttons, tags and toggles.

Used by HeadingText (`base` variant, all levels), LabelText, Button, LinkText, Tag, Toggle, Breadcrumb, TypeTable and CodeBlock/CreditCardInput chrome.

### editorial

Editorial display face: Storm Serif with normal leading. Size and weight come from the component. Use it for long-form, content-led headings such as article, blog and marketing page titles, where a warmer, bookish tone fits better than `display`.

Used by HeadingText's `editorial` variant for the larger levels; the smallest levels fall back to `display` for legibility.

### body

Running-text face: Storm Sans with snug leading. Size and weight come from the component. Use it for paragraphs, descriptions and other multi-line reading copy, from dense table rows and sidebars to article body text.

Used by BodyText, LinkText and Breadcrumb.

### caption

Supporting-text face: Storm Sans italic with snug leading. Size and weight come from the component. Use it for secondary, low-emphasis text that annotates something else, such as helper and validation messages, small labels, value readouts and metadata.

Used by Field helper and validation text, ValidationText, Badge, Slider value labels, ColorPicker and EyebrowText.

### eyebrow

Kicker face: Google Sans Code with no extra leading, so it sits tight against the content below. Size and weight come from the component. Use it for the short, usually uppercase category or section label placed directly above a heading.

Used by EyebrowText.

### code

Monospace face: Google Sans Code with snug leading. Size and weight come from the component. Use it for anything that must keep fixed-width alignment or reads as a literal value, such as source code, file paths, identifiers, keyboard input, card numbers and step counters.

Used by CodeBlock, InlineCodeText, FileTree, FilePicker, Stepper, CreditCardInput and code content inside Accordion.

Google Sans Code is used by `eyebrow` and `code`. The font projects in this repository (`fonts/storm-sans` and `fonts/storm-serif`) do not include it.

In a Tamagui component, set the role as the font family. This example comes from `components/button/src/Button.tsx`:

```ts
fontFamily: "display",
fontSize: "sm",
fontWeight: "600",
lineHeight: "sm",
```

In CSS:

```css
.title {
  font: var(--storm-typography-display);
  font-size: var(--storm-font-size-3xl);
  font-weight: var(--storm-font-weight-semibold);
}
```

## Font sizes

CSS variable pattern: `--storm-font-size-<step>`. The unit is `rem`. The px column assumes a 16px root size.

| Step | Token | Value | px | Line height with the same step |
| --- | --- | --- | --- | --- |
| `xxs` | `font-size.xxs` | `0.75rem` | 12px | None |
| `xs` | `font-size.xs` | `0.875rem` | 14px | `line-height.xs` (1.2) |
| `sm` | `font-size.sm` | `1rem` | 16px | `line-height.sm` (1.285714) |
| `md` | `font-size.md` | `1.125rem` | 18px | `line-height.md` (1.35) |
| `lg` | `font-size.lg` | `1.25rem` | 20px | `line-height.lg` (1.4) |
| `xl` | `font-size.xl` | `1.5rem` | 24px | `line-height.xl` (1.26) |
| `2xl` | `font-size.2xl` | `1.875rem` | 30px | `line-height.2xl` (1.2) |
| `3xl` | `font-size.3xl` | `2.25rem` | 36px | `line-height.3xl` (1.08) |
| `4xl` | `font-size.4xl` | `3rem` | 48px | `line-height.4xl` (1) |
| `5xl` | `font-size.5xl` | `3.75rem` | 60px | `line-height.5xl` (0.9) |
| `6xl` | `font-size.6xl` | `4.5rem` | 72px | `line-height.6xl` (0.9) |
| `7xl` | `font-size.7xl` | `6rem` | 96px | `line-height.7xl` (0.9) |
| `8xl` | `font-size.8xl` | `8rem` | 128px | `line-height.8xl` (0.9) |
| `9xl` | `font-size.9xl` | `10rem` | 160px | `line-height.9xl` (0.9) |
| `10xl` | `font-size.10xl` | `12rem` | 192px | `line-height.10xl` (0.9) |
| `11xl` | `font-size.11xl` | `14rem` | 224px | None |
| `12xl` | `font-size.12xl` | `16rem` | 256px | None |
| `13xl` | `font-size.13xl` | `18rem` | 288px | None |
| `14xl` | `font-size.14xl` | `20rem` | 320px | None |
| `15xl` | `font-size.15xl` | `24rem` | 384px | None |

## Line heights

CSS variable pattern: `--storm-line-height-<name>`. Values have no unit. Multiply them by the font size.

| Name | Token | Value |
| --- | --- | --- |
| `none` | `line-height.none` | 0.765 |
| `tight` | `line-height.tight` | 1.0575 |
| `snug` | `line-height.snug` | 1.125 |
| `normal` | `line-height.normal` | 1.2375 |
| `relaxed` | `line-height.relaxed` | 1.35 |
| `loose` | `line-height.loose` | 1.665 |
| `xs` | `line-height.xs` | 1.2 |
| `sm` | `line-height.sm` | 1.285714 |
| `md` | `line-height.md` | 1.35 |
| `lg` | `line-height.lg` | 1.4 |
| `xl` | `line-height.xl` | 1.26 |
| `2xl` | `line-height.2xl` | 1.2 |
| `3xl` | `line-height.3xl` | 1.08 |
| `4xl` | `line-height.4xl` | 1 |
| `5xl` | `line-height.5xl` | 0.9 |
| `6xl` | `line-height.6xl` | 0.9 |
| `7xl` | `line-height.7xl` | 0.9 |
| `8xl` | `line-height.8xl` | 0.9 |
| `9xl` | `line-height.9xl` | 0.9 |
| `10xl` | `line-height.10xl` | 0.9 |

## Font weights

CSS variable pattern: `--storm-font-weight-<name>`.

| Name | Token | Value |
| --- | --- | --- |
| `thin` | `font-weight.thin` | 100 |
| `extralight` | `font-weight.extralight` | 200 |
| `light` | `font-weight.light` | 300 |
| `normal` | `font-weight.normal` | 400 |
| `medium` | `font-weight.medium` | 500 |
| `semibold` | `font-weight.semibold` | 600 |
| `bold` | `font-weight.bold` | 700 |
| `extrabold` | `font-weight.extrabold` | 800 |
| `black` | `font-weight.black` | 900 |

A font family may not have a face for every weight. Check the [Storm Sans](../fonts/storm-sans.md#weights) and [Storm Serif](../fonts/storm-serif.md#weights) pages.

## Letter spacing

CSS variable pattern: `--storm-letter-spacing-<name>`. The source file records the unit as `rem`.

| Name | Token | Value |
| --- | --- | --- |
| `tighter` | `letter-spacing.tighter` | `-0.05rem` |
| `tight` | `letter-spacing.tight` | `-0.025rem` |
| `normal` | `letter-spacing.normal` | `0rem` |
| `wide` | `letter-spacing.wide` | `0.025rem` |
| `wider` | `letter-spacing.wider` | `0.05rem` |
| `widest` | `letter-spacing.widest` | `0.1rem` |

The token descriptions in the source file write these values in `em`. The numeric values and the `rem` unit come from `$value`. The generated CSS uses `rem`.

## Related pages

- [Storm Sans](../fonts/storm-sans.md)
- [Storm Serif](../fonts/storm-serif.md)
- [Tokens overview](./index.md)
