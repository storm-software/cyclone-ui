---
title: Body Text
description: Reference for the BodyText component, the default paragraph text of the design system.
documentType: reference
tags: [component, typography, text, body]
component:
  name: body-text
  package: "@cyclone-ui/body-text"
  stories:
    - title: Typography/BodyText
      file: components/body-text/src/BodyText.stories.tsx
---

# Body Text

`BodyText` renders a paragraph of body text. Other components, such as [Alert](./alert.md), [Accordion](./accordion.md), and [Bytes Text](./bytes-text.md), build on it.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add body-text
pnpm install
```

- **File:** `BodyText.tsx`. The CLI writes it to `<path>/body-text/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/get-font-sized`, and `@tamagui/text`.

## Import

```tsx
import { BodyText } from "@cyclone-ui/body-text";
```

## Usage

```tsx
<BodyText>Regular text.</BodyText>
<BodyText size="sm" fontWeight="bold">Small bold text.</BodyText>
<BodyText theme="danger">Text in the danger theme.</BodyText>
```

## Anatomy

```tsx
<BodyText>Text</BodyText>
```

| Part       | Renders                                                                                             | Purpose                   |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `BodyText` | A Tamagui `SizableText` as `<p>`, in the `body` font family, size `md`, weight `normal`, and color `ink` | A paragraph of body text. |

## Examples

The examples are the stories in [`BodyText.stories.tsx`](../../../components/body-text/src/BodyText.stories.tsx). Each story renders the same long paragraph.

| Stories                                                     | What they show                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `Base`                                                      | The default style.                                                              |
| `Small`, `Bold`, `SmallBold`                                | `size="sm"`, `fontWeight="bold"`, and both together.                            |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes.    |

## Props

`BodyText` accepts the props of Tamagui `SizableText`. The exported type is `BodyTextProps`. It has no custom props.

| Prop         | Type              | Default    | Description                                                                   |
| ------------ | ----------------- | ---------- | ----------------------------------------------------------------------------- |
| `size`       | font size token   | `"md"`     | The text size. The stories use `"sm"`.                                        |
| `fontWeight` | font weight token | `"normal"` | The text weight. The `Bold` and `SmallBold` stories use `"bold"`.             |
| `theme`      | `string`          | -          | A color theme. The stories use `brand`, `discovery`, `danger`, `warning`, `info`, and `success`. |

The size scale comes from the `body` font in the theme configuration, not from this package. Check the [Design tokens](../tokens/index.md) for the available values.

## Defaults

| Property     | Value    |
| ------------ | -------- |
| element      | `p`      |
| `color`      | `ink`    |
| `fontFamily` | `body`   |
| `size`       | `md`     |
| `fontWeight` | `normal` |

The `body` font family token resolves to the self-hosted Storm Sans face. A test checks that the font CSS defines this face. See [Design tokens](../tokens/index.md).

## Related

- [Bytes Text](./bytes-text.md)
- [Heading Text](./heading-text.md)
- [Inline Code Text](./inline-code-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/body-text/src/BodyText.tsx`](../../../components/body-text/src/BodyText.tsx)
- [`components/body-text/src/BodyText.stories.tsx`](../../../components/body-text/src/BodyText.stories.tsx) (title: `Typography/BodyText`)
- [`components/body-text/src/BodyText.font-loading.test.ts`](../../../components/body-text/src/BodyText.font-loading.test.ts)
