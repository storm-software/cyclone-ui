---
title: Bytes Text
description: Reference for the BytesText component, which shows a byte count as readable text such as kilobytes or gigabytes.
documentType: reference
tags: [component, typography, text, bytes, file-size]
component:
  name: bytes-text
  package: "@cyclone-ui/bytes-text"
  stories:
    - title: Typography/BytesText
      file: components/bytes-text/src/BytesText.stories.tsx
---

# Bytes Text

`BytesText` takes a number of bytes as its child. It shows the number as readable text. It uses the `prettyBytes` function from `@stryke/string-format`.

Use it for file sizes and storage values.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add bytes-text
pnpm install
```

- **File:** `BytesText.tsx`. The CLI writes it to `<path>/bytes-text/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/string-format` and `@tamagui/core`.

## Import

```tsx
import { BytesText } from "@cyclone-ui/bytes-text";
```

## Usage

```tsx
<BytesText>1337</BytesText>
<BytesText theme="success">12345678</BytesText>
```

## Anatomy

```tsx
<BytesText>{bytes}</BytesText>
```

| Part        | Renders                                                                                                          | Purpose                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `BytesText` | A [Body Text](./body-text.md) (a Tamagui `SizableText` as `<p>`) that holds the `prettyBytes` text from `@stryke/string-format` | A byte count as readable text.          |

## Examples

The examples are the stories in [`BytesText.stories.tsx`](../../../components/bytes-text/src/BytesText.stories.tsx).

| Stories                                                     | What they show                                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `Base`, `KiloBytes`                                         | `1337` bytes, shown as `1.34 kB`.                                               |
| `Bytes`                                                     | `25` bytes, shown as `25 B`.                                                    |
| `GigaBytes`                                                 | `12345678` bytes, shown as `12.3 MB`.                                           |
| `NoChildren`                                                | No children. The value is not a number, so the text is `0 B`.                   |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | `1337` bytes in the `brand`, `discovery`, `danger`, `warning`, `info`, and `success` themes. |

## Props

`BytesText` is a [Body Text](./body-text.md). It accepts all props of `BodyText`. The exported type is `BytesTextProps`.

| Prop       | Type                       | Description                                                          |
| ---------- | -------------------------- | -------------------------------------------------------------------- |
| `children` | number or numeric string   | The number of bytes. A value that is not a number shows as `0` bytes. |

## Known limit

The props type also includes the `prettyBytes` options and a `locale` prop. The current source does not pass them to `prettyBytes`. Do not rely on them to change the output.

## Related

- [Body Text](./body-text.md)
- [Number Text](./number-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/bytes-text/src/BytesText.tsx`](../../../components/bytes-text/src/BytesText.tsx)
- [`components/bytes-text/src/BytesText.stories.tsx`](../../../components/bytes-text/src/BytesText.stories.tsx) (title: `Typography/BytesText`)
