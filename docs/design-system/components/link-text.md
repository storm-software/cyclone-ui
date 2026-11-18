---
title: Link Text
description: Styled, interactive link text with five color variants, underline modes, two sizes, a call-to-action style, and a disabled state.
documentType: reference
tags: [component, link-text, typography, link]
component:
  name: link-text
  package: "@cyclone-ui/link-text"
  stories:
    - title: Typography/LinkText
      file: components/link-text/src/LinkText.stories.tsx
---

# Link Text

`LinkText` styles text as a link. It sets color, underline, and hover and press states. It does not navigate by itself. Use [Link](./link.md) when you need an `href`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add link-text
pnpm install
```

- **File:** `LinkText.tsx`. The CLI writes it to `<path>/link-text/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, and `@tamagui/text`.

## Import

```tsx
import { LinkText } from "@cyclone-ui/link-text";
```

## Usage

```tsx
<BodyText>
  Lorem ipsum <LinkText>dolor sit</LinkText> amet
</BodyText>
```

```tsx
<LinkText variant="emphasis" mixed underline="hover">
  Read more
</LinkText>
```

## Anatomy

```tsx
<LinkText>Label</LinkText>
```

| Part       | Renders                                                                                                                           | Purpose                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `LinkText` | A Tamagui `SizableText` in the `body` font family (the `display` font family with `cta`), with a solid underline 3 px below the text | Link-styled text. It sets the color, underline, and states. |

## Examples

The examples are the stories in [`LinkText.stories.tsx`](../../../components/link-text/src/LinkText.stories.tsx). Each story renders the link text inside a `BodyText` sentence.

| Stories                                                       | What they show                                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `Base`, `Brand`                                               | The default style, and the `brand` theme.                                            |
| `Small`, `Medium`                                             | `size="sm"` and `size="md"`.                                                         |
| `Disabled`, `CallToAction`                                    | `disabled`, and the `cta` style.                                                     |
| `BaseVariant`, `EmphasisVariant`, `InkVariant`, `SubtleVariant` | Each `variant`.                                                                    |
| `Mixed`, `MixedInverse`                                       | `variant="emphasis"` with `mixed`, and with `mixed` and `inverse`.                   |
| `Themed`, `ThemedMixed`                                       | `themed`, and `themed` with `variant="emphasis"` and `mixed`.                        |
| `Discovery`, `Danger`, `Warning`, `Info`, `Success`           | The `discovery`, `danger`, `warning`, `info`, and `success` themes.                  |

## Props

`LinkText` accepts the props of `SizableText` and adds these. The exported types are `LinkTextProps`, `LinkTextExtraProps`, and `LinkTextVariant`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"base" \| "emphasis" \| "ink" \| "subtle"` | `"base"` | Sets the text color. `base` uses the `link` color. The other values use the color token of the same name. |
| `underline` | `"hover" \| "initial" \| "static" \| "none"` | `"static"` | Sets when the underline shows. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Sets the body font size and line height. |
| `cta` | `boolean` | `false` | Uses the `display` font in small, uppercase, weight 600 text. |
| `mixed` | `boolean` | `false` | Draws the underline in the `link` color while the text keeps the `variant` color. |
| `inverse` | `boolean` | `false` | Swaps the text and underline colors. It only has an effect with `mixed`. |
| `themed` | `boolean` | `false` | Uses `primary` wherever `link` would be used. |
| `disabled` | `boolean` | `false` | Uses the `link-disabled` color (`primary-disabled` with `themed`), also on hover, and a default cursor. |
| `color` | Color token | None | Overrides the text color. A plain token applies to all interaction states. A value with state clauses, such as `group-hover/card:primary-hovered`, replaces only the states it names. |
| `textDecorationColor` | Color token | None | Overrides the underline color. It follows the same rules as `color`. |

## Variants and states

| Underline | Behavior |
| --- | --- |
| `static` | Always underlined. |
| `initial` | Underlined. The underline is removed on hover. |
| `hover` | Not underlined. The underline shows on hover. |
| `none` | Never underlined. |

| Size | Font | Weight |
| --- | --- | --- |
| `sm` | `body`, size `sm` | `medium` |
| `md` | `body`, size `md` | `medium` |
| `lg` | `body`, size `lg` | `medium` |

- Each color uses a state color set: the base token, then `-hovered` on hover, and `-active` on press and focus.
- The color change uses a 200ms transition. The text does not wrap (`whiteSpace: nowrap`).
- If the active theme is `light` or `dark`, or there is no theme name, the component sets the relative `base` theme. Other themes, such as `brand`, stay in effect.

## Related

- [Link](./link.md)
- [Body Text](./body-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/link-text/src/LinkText.tsx`](../../../components/link-text/src/LinkText.tsx)
- [`components/link-text/src/LinkText.stories.tsx`](../../../components/link-text/src/LinkText.stories.tsx) (title: `Typography/LinkText`)
