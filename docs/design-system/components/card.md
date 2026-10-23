---
title: Card
description: Reference for the Card component, a hoverable content box with an accent bar, a header, a body, and a footer link.
documentType: reference
tags: [component, containers, card]
---

# Card

`Card` groups related content in an elevated box. It has a colored bar on the top edge, a soft spotlight that follows the pointer, and a footer link with an arrow.

## Import

```tsx
import { Card } from "@cyclone-ui/card";
```

## Usage

```tsx
<Card theme="brand" width="500px">
  <Card.Header>
    <Card.Header.Icon />
    <YStack gap="md">
      <Card.Header.Eyebrow>Eyebrow</Card.Header.Eyebrow>
      <Card.Header.Heading>Heading</Card.Header.Heading>
    </YStack>
  </Card.Header>
  <Card.Body>Some content.</Card.Body>
  <Card.Footer>
    <Card.Footer.Link href="#">Read more</Card.Footer.Link>
  </Card.Footer>
</Card>
```

## Anatomy

| Part                   | Purpose                                                                         |
| ---------------------- | ------------------------------------------------------------------------------- |
| `Card`                 | The frame. It is a [Container](./container.md) with the `card` radius.          |
| `Card.Header`          | A row for the icon and the titles.                                              |
| `Card.Header.Icon`     | The icon. Pass children for a custom icon. Without an icon for the theme, nothing renders. |
| `Card.Header.Eyebrow`  | A small label (`EyebrowText`).                                                  |
| `Card.Header.Heading`  | The heading (`HeadingLargeText`).                                               |
| `Card.Body`            | The body text (`BodyText`).                                                     |
| `Card.Footer`          | A vertical stack for the footer.                                                |
| `Card.Footer.Link`     | A [Link](./link.md) followed by an arrow. The arrow completes when the card is hovered. |

## Props

`Card` accepts all props of [Container](./container.md), plus:

| Prop    | Type                       | Default | Description                                                                |
| ------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `theme` | theme name                 | -       | The color theme. The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |
| `color` | color or theme token       | -       | A data color for the accent bar, the border, the icon, the heading, and the spotlight. The `DataColor` story uses `data-pink-emphasis`. |
| `size`  | size token                 | `true`  | Sets the gap and the padding. By default, the sizes of the parts apply.    |

## States

- **Hover.** The background changes to `elevated-hovered`. The accent bar changes to `primary-hovered`. The spotlight shows at 15% opacity and follows the pointer. The footer arrow completes.
- **Cursor.** The card uses the pointer cursor.
- **Data color.** With `color`, the card draws a 1 px border and the accent bar in that color.

## Accessibility

The card itself has no role. The pointer-follow spotlight has `pointerEvents: none`. The footer link is a [Link](./link.md), so it is the focusable control.

## Related

- [Callout](./callout.md)
- [Container](./container.md)
- [Link](./link.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/card/src/Card.tsx`](../../../components/card/src/Card.tsx)
- [`components/card/src/Card.stories.tsx`](../../../components/card/src/Card.stories.tsx) (title: `Containers/Card`)
