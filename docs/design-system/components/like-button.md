---
title: Like Button
description: A circular toggle button with a thumbs-up icon, three sizes, and a thumb and confetti animation on web.
documentType: reference
tags: [component, like-button, toggle, trigger]
---

# Like Button

`LikeButton` is a toggle for liking content. It shows a thumbs-up icon. The icon is filled when liked. On web, liking plays a thumb animation and a confetti burst.

## Import

```tsx
import { LikeButton } from "@cyclone-ui/like-button";
```

## Usage

Uncontrolled:

```tsx
<LikeButton defaultLiked={false} onLikedChange={liked => track(liked)} />
```

Controlled:

```tsx
const [liked, setLiked] = useState(false);

<LikeButton liked={liked} onLikedChange={setLiked} size="lg" />;
```

## Props

`LikeButton` accepts the props of [Toggle](./toggle.md), except `children`, `pressed`, `defaultPressed`, `onPressedChange`, and `size`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `liked` | `boolean` | None | The liked state. Setting it makes the button controlled. |
| `defaultLiked` | `boolean` | `false` | The initial state when uncontrolled. |
| `onLikedChange` | `(liked: boolean) => void` | None | Called with the new state when the user toggles the button. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The button and icon size. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `color` | Color token | See below | Overrides the icon color. |

The `md` icon is 24px. Other sizes scale the icon: `sm` by 32/42 and `lg` by 52/42.

## Variants and states

| State | Icon |
| --- | --- |
| Not liked | `ThumbsUp` with the `light` weight and the `primary` color. |
| Hover (not disabled) | The `primary-hovered` color. |
| Liked | `ThumbsUp` with the `fill` weight and the `primary-active` color. |
| Disabled | The button does not respond. The hover color does not apply. |

The button is circular and borderless. The pressed background is `elevated-active`.

### Motion

When the user likes the content on web, the thumb grows and tips for 600ms. A burst of 16 small squares also flies out from the center. Each square removes itself when it ends. The animation does not run when the user prefers reduced motion, on unliking, or on native, where the button toggles without motion.

## Accessibility

- The button has `aria-label="Like"` and `aria-pressed` follows the liked state. The unit tests check the label and the pressed state.
- The icon and the confetti layer have `aria-hidden`.
- Motion respects `prefers-reduced-motion`.

## Related

- [Feedback](./feedback.md)
- [Toggle](./toggle.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/like-button/src/LikeButton.tsx`](../../../components/like-button/src/LikeButton.tsx)
- [`components/like-button/src/LikeButton.test.tsx`](../../../components/like-button/src/LikeButton.test.tsx)
- [`components/like-button/src/LikeButton.stories.tsx`](../../../components/like-button/src/LikeButton.stories.tsx)
