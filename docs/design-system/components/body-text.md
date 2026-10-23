---
title: Body Text
description: Reference for the BodyText component, the default paragraph text of the design system.
documentType: reference
tags: [component, typography, text, body]
---

# Body Text

`BodyText` renders a paragraph of body text. Other components, such as [Alert](./alert.md), [Accordion](./accordion.md), and [Bytes Text](./bytes-text.md), build on it.

## Import

```tsx
import { BodyText } from "@cyclone-ui/body-text";
```

## Usage

```tsx
<BodyText>Regular text.</BodyText>
<BodyText size="sm" bold={true}>Small bold text.</BodyText>
<BodyText theme="danger">Text in the danger theme.</BodyText>
```

## Defaults

`BodyText` is a Tamagui `SizableText` with these defaults:

| Property     | Value    |
| ------------ | -------- |
| element      | `p`      |
| `color`      | `ink`    |
| `fontFamily` | `body`   |
| `size`       | `md`     |
| `fontWeight` | `normal` |

The `body` font family token resolves to the self-hosted Storm Sans face. A test checks that the font CSS defines this face. See [Design tokens](../tokens/index.md).

## Props

`BodyText` accepts the props of Tamagui `SizableText` (`BodyTextProps`).

| Prop    | Type      | Default | Description                                         |
| ------- | --------- | ------- | --------------------------------------------------- |
| `size`  | size token | `"md"` | The text size. The stories use `"sm"`.              |
| `bold`  | `boolean` | -       | Makes the text bold. Used in the `Bold` story.      |
| `theme` | `string`  | -       | A color theme. The stories use `brand`, `discovery`, `danger`, and `warning`. |

The size scale and the `bold` option come from the theme configuration, not from this package. Check the [Design tokens](../tokens/index.md) for the available values.

## Stories

`Base`, `Brand`, `Small`, `Bold`, `SmallBold`, `Discovery`, `Error`, `Warning`.

## Related

- [Bytes Text](./bytes-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/body-text/src/BodyText.tsx`](../../../components/body-text/src/BodyText.tsx)
- [`components/body-text/src/BodyText.stories.tsx`](../../../components/body-text/src/BodyText.stories.tsx) (title: `Typography/BodyText`)
- [`components/body-text/src/BodyText.font-loading.test.ts`](../../../components/body-text/src/BodyText.font-loading.test.ts)
