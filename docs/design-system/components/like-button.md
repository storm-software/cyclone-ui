---
title: Like Button
description: A circular toggle button with a thumbs-up icon, three sizes, and a thumb and confetti animation on web.
documentType: reference
tags: [component, like-button, toggle, trigger]
component:
  name: like-button
  package: "@cyclone-ui/like-button"
  stories:
    - title: Triggers/LikeButton
      file: components/like-button/src/LikeButton.stories.tsx
---

# Like Button

`LikeButton` is a toggle for liking content. It shows a thumbs-up icon. The icon is filled when liked. On web, liking plays a thumb animation and a confetti burst.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add like-button
pnpm install
```

- **File:** `LikeButton.tsx`. The CLI writes it to `<path>/like-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Container](./container.md), [Icons](../icons/index.md), and [Toggle](./toggle.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

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

## Anatomy

```tsx
<LikeButton />
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `LikeButton` | A [`Toggle`](./toggle.md): a `<button>` with `aria-label="Like"` and `aria-pressed` | The circular, borderless frame. It holds the liked state. |
| Thumb (internal) | A Tamagui `View` with `aria-hidden`, holding the `ThumbsUp` SVG icon | The icon. It is lifted a little so that it looks centered in the circle. The thumb animation runs on this view. |
| Confetti layer (internal) | A zero-size Tamagui `View` with `aria-hidden` and `pointerEvents="none"`, at the center of the button | On web, the confetti squares are added here as `<span>` elements. Each square removes itself when its animation ends. |

## Examples

The examples are the stories in [`LikeButton.stories.tsx`](../../../components/like-button/src/LikeButton.stories.tsx). A decorator adds padding around each story to leave room for the confetti.

| Stories | What they show |
| --- | --- |
| `Base` | An uncontrolled button that starts not liked. The play function likes it with a click, unlikes it with the Space key, and checks `aria-pressed`. |
| `Liked` | `defaultLiked={true}`. |
| `Controlled` | `liked` and `onLikedChange` from React state, with a count of 0 or 1 next to the button. |
| `Disabled` | A disabled button. |
| `Sizes` | The `sm`, `md`, and `lg` sizes. |
| `Danger` | A liked button in the `danger` theme. |

## Props

`LikeButton` accepts the props of [Toggle](./toggle.md), except `children`, `pressed`, `defaultPressed`, `onPressedChange`, and `size`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `liked` | `boolean` | None | The liked state. Setting it makes the button controlled. |
| `defaultLiked` | `boolean` | `false` | The initial state when uncontrolled. |
| `onLikedChange` | `(liked: boolean) => void` | None | Called with the new state when the user toggles the button. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The button and icon size. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `color` | Color token | See below | Overrides the icon color in every state. |

The `md` icon is 24px. Other sizes scale the icon: `sm` by 32/42 and `lg` by 52/42.

## Variants and states

| State | Icon |
| --- | --- |
| Not liked | `ThumbsUp` with the `regular` variant and the `primary` color. |
| Hover (not disabled) | The `primary-hovered` color. |
| Liked | `ThumbsUp` with the `filled` variant and the `primary-active` color. |
| Disabled | The button does not respond. The hover color does not apply. |

The button is circular and borderless. The pressed background is `elevated-active`.

### Motion

When the user likes the content on web, the thumb grows and tips for 600ms. A burst of 16 small squares also flies out from the center. Each square removes itself when it ends. The animation does not run when the user prefers reduced motion, on unliking, or on native, where the button toggles without motion.

## Accessibility

- The button has `aria-label="Like"` and `aria-pressed` follows the liked state. The unit tests check the label and the pressed state.
- The button is a native `button`, so it takes keyboard focus. The Space key toggles it. The `Base` story checks this.
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
