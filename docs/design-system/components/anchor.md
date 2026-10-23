---
title: Anchor
description: Reference for the Anchor component, a wrapper that adds a hover permalink link icon next to its children.
documentType: reference
tags: [component, triggers, link, permalink]
---

# Anchor

`Anchor` wraps its children and adds a link icon after them. The icon appears when the user hovers over the wrapper or focuses the icon. It is useful for headings that readers can link to.

Despite the name, it does not turn the children into a link. The link is the icon. To make the text itself a link, use [Link](./link.md).

## Import

```tsx
import { Anchor } from "@cyclone-ui/anchor";
```

## Usage

```tsx
<Anchor href="#install" permalinkLabel="Link to Install">
  <HeadingText>Install</HeadingText>
</Anchor>
```

## Props

`Anchor` also accepts the props of a Tamagui `View`. The wrapper renders as a `span`.

| Prop             | Type     | Description                                                                 |
| ---------------- | -------- | --------------------------------------------------------------------------- |
| `href`           | `string` | The target of the permalink icon. Without it, the icon has no link behavior. |
| `target`         | `string` | The link target. Web only.                                                  |
| `rel`            | `string` | The link relationship. Web only.                                            |
| `download`       | `string` | The download file name. Web only.                                           |
| `permalinkLabel` | `string` | The accessible label and the title of the permalink.                        |

## Behavior

- **Hidden.** The icon has opacity 0 and no offset.
- **Hover or focus.** The icon fades in and moves 10 px to the right.
- **Icon hover.** The icon color changes from `neutral7` to `primary`.
- **Native.** On native platforms, pressing the icon calls `Linking.openURL(href)`, after `onPress` if you set it.

## Accessibility

- The permalink gets `aria-label` from `permalinkLabel` only when `href` is set.
- The icon itself is hidden from assistive technology (`aria-hidden`).
- Set `permalinkLabel` so screen reader users know where the link goes.

## Related

- [Link](./link.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/anchor/src/Anchor.tsx`](../../../components/anchor/src/Anchor.tsx)
- [`components/anchor/src/Anchor.stories.tsx`](../../../components/anchor/src/Anchor.stories.tsx) (title: `Triggers/Anchor`)
