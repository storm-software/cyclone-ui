---
title: Link
description: A themed text link that renders an anchor on web, opens the URL with Linking on native, and can mark external links with an arrow.
documentType: reference
tags: [component, link, navigation]
---

# Link

`Link` is a [Link Text](./link-text.md) that navigates. On web it renders an `a` element. On native it opens the URL with React Native `Linking`. Use it for inline and standalone hyperlinks.

## Import

```tsx
import { Link } from "@cyclone-ui/link";
```

## Usage

```tsx
<BodyText>
  Lorem ipsum <Link href="https://stormsoftware.com">dolor sit</Link> amet
</BodyText>
```

Set `external` to open the link in a new tab and show an arrow icon.

```tsx
<Link href="https://github.com/storm-software/cyclone-ui" external>
  GitHub
</Link>
```

## Props

`Link` accepts all [Link Text](./link-text.md) props, such as `variant`, `mixed`, `inverse`, `underline`, `cta`, and `disabled`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | None | The URL. |
| `target` | `string` | None | The anchor target on web. |
| `rel` | `string` | None | The anchor `rel` value. It passes through with the other props. |
| `download` | `string` | None | The anchor `download` value. It passes through with the other props. |
| `external` | `boolean` | `false` | On web, sets `target="_blank"`, which overrides `target`. Shows an arrow icon after the text. |
| `size` | `"sm" \| "md"` | `"md"` | Text size. |

## Behavior

- **Web:** The component passes `href` and `target` to the anchor.
- **Native:** The component calls your `onPress` first. Then it calls `Linking.openURL(href)` when `href` is set.
- **External arrow:** The `ArrowUpRight` icon uses the link's current text color. On hover of the link, the icon moves 2px right and 2px up.
- The frame sets `role="link"` and `cursor: pointer`.

## Variants and states

The color, underline, size, and disabled options come from [Link Text](./link-text.md). The stories show the default style, `brand`, `mixed`, `mixed` with `inverse`, `subtle`, `subtlest`, and the external arrow with `subtle` and `subtlest`.

## Accessibility

The link has `role="link"`. Use clear link text. The arrow icon is not described in the source, so state in the text that a link is external when it matters.

## Related

- [Link Text](./link-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/link/src/Link.tsx`](../../../components/link/src/Link.tsx)
- [`components/link/src/Link.stories.tsx`](../../../components/link/src/Link.stories.tsx)
