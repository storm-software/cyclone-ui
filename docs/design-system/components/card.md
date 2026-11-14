---
title: Card
description: Reference for the Card component, a hoverable content box with an accent bar, a header, a body, and a footer link.
documentType: reference
tags: [component, containers, card]
component:
  name: card
  package: "@cyclone-ui/card"
  stories:
    - title: Containers/Card
      file: components/card/src/Card.stories.tsx
---

# Card

`Card` groups related content in an elevated box. It has a colored bar on the top edge, a soft spotlight that follows the pointer, and a footer link with an arrow.

Use it for a short summary that leads to more content, such as a feature, a topic, or a status. For a plain surface without these parts, use [Container](./container.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add card
pnpm install
```

- **File:** `Card.tsx`. The CLI writes it to `<path>/card/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Eyebrow Text](./eyebrow-text.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), [Ripple Animation](./ripple-animation.md), and [Tag](./tag.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, `@tamagui/helpers`, `@tamagui/stacks`, and `@tamagui/web`.

## Import

```tsx
import { Card } from "@cyclone-ui/card";
import { YStack } from "@tamagui/stacks";
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

```tsx
<Card>
  <Card.Header>
    <Card.Header.Icon />
    <YStack>
      <Card.Header.Eyebrow />
      <Card.Header.Heading />
    </YStack>
    <Card.Header.Tag />
  </Card.Header>
  <Card.Body />
  <Card.Footer>
    <Card.Footer.Link />
  </Card.Footer>
</Card>
```

| Part                   | Renders                                                                                                                                  | Purpose                                                                                                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Card`                 | A [Container](./container.md) with the `card` radius, `position: relative`, `overflow: hidden`, the pointer cursor, and `group="card"` | The frame. It shares `size`, `theme`, and `color` with its parts and tracks the hover state. It draws the accent bar, the spotlight or the pixel canvas, and the data-color border. A `YStack` with `flexGrow: 1` holds the children. |
| `Card.Header`          | A Tamagui `XStack`, items centered, with a `2xl` gap                                                                                     | A row for the icon, the titles, and the tag.                                                                                                                                                                                  |
| `Card.Header.Icon`     | A `ThemeableIcon`, size `13xl`                                                                                                           | The icon. Pass children for a custom icon. Without children, it shows the icon of a status theme (`danger`, `warning`, `info`, `discovery`, or `success`). For other themes, nothing renders.                                 |
| `Card.Header.Eyebrow`  | `EyebrowText` in `ink`                                                                                                                   | A small label above the heading.                                                                                                                                                                                              |
| `Card.Header.Heading`  | `HeadingLargeText` in `primary`                                                                                                          | The heading.                                                                                                                                                                                                                  |
| `Card.Header.Tag`      | A [Tag](./tag.md) in a `View` with `marginLeft: auto`                                                                                    | A tag in the top right corner, after the rest of the header. Plain string children are wrapped in `Tag.Text`.                                                                                                                 |
| `Card.Body`            | `BodyText` with no vertical padding                                                                                                      | The body text.                                                                                                                                                                                                                |
| `Card.Footer`          | A Tamagui `YStack` with `marginTop: auto`                                                                                                | The footer. It stays at the bottom of a stretched card.                                                                                                                                                                       |
| `Card.Footer.Link`     | An `XStack` with a [Link](./link.md) and a `RightArrow` icon                                                                             | The link, followed by an arrow. The arrow completes when the card is hovered.                                                                                                                                                 |

On the `primary` and `secondary` variants, the text, icon, and link use the variant's foreground color. On the other variants, the eyebrow and the body render in the `base` theme.

`CardHeader`, `CardIcon`, `CardEyebrow`, `CardHeading`, `CardTag`, `CardBody`, `CardFooter`, and `CardLink` are also exported by name. Use them in React Server Components, which cannot read `Card.Header` from a client module.

## Examples

The examples are the stories in [`Card.stories.tsx`](../../../components/card/src/Card.stories.tsx). Each story renders a 500 px card with an icon slot, an eyebrow, a heading, body text, and a footer link.

| Stories                                                         | What they show                                                                                         |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Base`                                                          | The default card: the `elevated` variant with the accent bar on the top edge.                          |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success`     | The `brand` theme, and the `discovery`, `danger`, `warning`, `info`, and `success` themes with their status icons. |
| `CustomIcon`, `DataColor`                                       | A custom icon (`QuestionCircle`), and the `data-pink-emphasis` data color with that icon.              |
| `AccentBottom`, `AccentLeft`, `AccentRight`, `AccentNone`       | The accent bar on the other edges (`cardStyle`), and no bar.                                           |
| `Pixel`, `PixelDataColor`                                       | The `pixel` hover effect, in the theme color and in the data color.                                    |
| `Primary`, `Secondary`, `Tertiary`, `Outlined`, `Floating`      | Other Container variants.                                                                              |
| `BrandPrimary`, `BrandSecondary`                                | The filled `primary` and `secondary` variants in the `brand` theme.                                    |
| `Raised`, `Flat`, `Accented`, `Noise`, `Glass`                  | `shadowStyle="raised"` and `"flat"`, an `accented` border, `noise` on `primary`, and `glass` over a colored circle. |
| `WithTag`                                                       | A `Card.Header.Tag` with the text "New".                                                               |

## Props

`Card` accepts all props of [Container](./container.md), plus:

| Prop    | Type                       | Default | Description                                                                |
| ------- | -------------------------- | ------- | -------------------------------------------------------------------------- |
| `theme` | theme name                 | -       | The color theme. The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |
| `color` | `ColorTokens \| ThemeTokens` | -     | A data color for the accent bar, the border, the icon, the heading, and the spotlight. The `DataColor` story uses `data-pink-emphasis`. |
| `size`  | size token                 | `true`  | A size token sets the gap and the padding of the content, and the gap of the header. When the value is also a font size key, the eyebrow, heading, and body take that font size. The default `true` keeps the base `2xl` gap and padding and the parts' own text sizes. |
| `cardStyle` | `"top" \| "bottom" \| "left" \| "right" \| "none" \| "pixel"` | `"top"` | The edge with the accent bar, no bar, or the pixel hover effect. Named `variant` before. |
| `variant` | [Container](./container.md) variant | `"elevated"` | The surface, drawn by the card's Container. `primary`, `secondary`, `tertiary`, and `outlined` follow the [Button](./button.md) variants. The card also takes the Container's `shadowStyle`, `glass`, `noise`, and `accented` props. On `primary` and `secondary`, the heading, eyebrow, body, icon, accent bar, spotlight, and link use `on-primary` / `on-secondary` (`primary` on the uncolored base theme's light `secondary`). |

The parts accept the props of the component they render (see [Anatomy](#anatomy)). `CardProps`, `CardHeaderProps`, `CardFooterProps`, `CardStyle`, and `CardVariant` are exported types.

## States

- **Hover.** The background changes to the variant's hovered background (`elevated-hovered` for the default `elevated`). The accent bar changes to `primary-hovered`. The spotlight shows at 15% opacity and follows the pointer. The footer arrow completes.
- **Cursor.** The card uses the pointer cursor.
- **Data color.** With `color`, the card draws a 1 px border and the accent bar in that color.
- **Pixel effect.** With `cardStyle="pixel"`, a grid of small pixels ripples out from the center while the card is hovered, and shrinks away when the pointer leaves. The effect does not run when the user prefers reduced motion.

## Accessibility

The card itself has no role. The pointer-follow spotlight has `pointerEvents: none`. The pixel canvas is `aria-hidden` and has `pointerEvents: none`. The footer link is a [Link](./link.md), so it is the focusable control.

## Related

- [Callout](./callout.md)
- [Container](./container.md)
- [Link](./link.md)
- [Tag](./tag.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/card/src/Card.tsx`](../../../components/card/src/Card.tsx)
- [`components/card/src/Card.stories.tsx`](../../../components/card/src/Card.stories.tsx) (title: `Containers/Card`)
