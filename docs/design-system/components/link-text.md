---
title: Link Text
description: Styled, interactive link text with five color variants, underline modes, two sizes, a call-to-action style, and a disabled state.
documentType: reference
tags: [component, link-text, typography, link]
---

# Link Text

`LinkText` styles text as a link. It sets color, underline, and hover and press states. It does not navigate by itself. Use [Link](./link.md) when you need an `href`.

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

## Props

`LinkText` accepts the props of `SizableText` and adds these:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"base" \| "emphasis" \| "ink" \| "subtle" \| "subtlest"` | `"base"` | Sets the text color. `base` uses the `link` color. The other values use the color token of the same name. |
| `underline` | `"hover" \| "initial" \| "static" \| "none"` | `"static"` | Sets when the underline shows. |
| `size` | `"sm" \| "md"` | `"md"` | Sets the body font size and line height. |
| `cta` | `boolean` | `false` | Uses the `display` font in small, uppercase, weight 600 text. |
| `mixed` | `boolean` | `false` | Draws the underline in the `link` color while the text keeps the `variant` color. |
| `inverse` | `boolean` | `false` | Swaps the text and underline colors. It only has an effect with `mixed`. |
| `themed` | `boolean` | `false` | Uses `primary` wherever `link` would be used. |
| `disabled` | `boolean` | `false` | Uses the `-disabled` color and a default cursor. |
| `color` | Color token | None | Overrides the text color. A plain value applies to all interaction states. |
| `textDecorationColor` | Color token | None | Overrides the underline color. |

## Variants and states

| Underline | Behavior |
| --- | --- |
| `static` | Always underlined. |
| `initial` | Underlined. The underline is removed on hover. |
| `hover` | Not underlined. The underline shows on hover. |
| `none` | Never underlined. |

| Size | Font | Weight |
| --- | --- | --- |
| `sm` | `body`, size `sm` | 500 |
| `md` | `body`, size `md` | 400 |

- Each color uses a state color set: the base token, then `-hovered` on hover, and `-active` on press and focus.
- The color change uses a 200ms transition. The text does not wrap (`whiteSpace: nowrap`).
- If the active theme is `light`, `dark`, or ends in `base`, the component uses the `light_base` or `dark_base` theme.

The stories show the default style, `brand`, `sm`, `md`, disabled, call-to-action, each `variant`, `mixed`, `mixed` with `inverse`, `themed`, and the `discovery`, `danger`, `warning`, `info`, and `success` themes.

## Related

- [Link](./link.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/link-text/src/LinkText.tsx`](../../../components/link-text/src/LinkText.tsx)
- [`components/link-text/src/LinkText.stories.tsx`](../../../components/link-text/src/LinkText.stories.tsx)
