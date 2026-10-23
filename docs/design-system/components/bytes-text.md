---
title: Bytes Text
description: Reference for the BytesText component, which shows a byte count as readable text such as kilobytes or gigabytes.
documentType: reference
tags: [component, typography, text, bytes, file-size]
---

# Bytes Text

`BytesText` takes a number of bytes as its child. It shows the number as readable text. It uses the `prettyBytes` function from `@stryke/string-format`.

Use it for file sizes and storage values.

## Import

```tsx
import { BytesText } from "@cyclone-ui/bytes-text";
```

## Usage

```tsx
<BytesText>1337</BytesText>
<BytesText theme="success">12345678</BytesText>
```

## Props

`BytesText` is a [Body Text](./body-text.md). It accepts all props of `BodyText`.

| Prop       | Type                       | Description                                                          |
| ---------- | -------------------------- | -------------------------------------------------------------------- |
| `children` | number or numeric string   | The number of bytes. A value that is not a number shows as `0` bytes. |

## Known limit

The props type also includes the `prettyBytes` options and a `locale` prop. The current source does not pass them to `prettyBytes`. Do not rely on them to change the output.

## Stories

`Base`, `Brand`, `NoChildren`, `Bytes` (`25`), `KiloBytes` (`1337`), `GigaBytes` (`12345678`), `Discovery`, `Error`, `Warning`, `Info`, `Success`. The theme stories set `theme` to `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [Body Text](./body-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/bytes-text/src/BytesText.tsx`](../../../components/bytes-text/src/BytesText.tsx)
- [`components/bytes-text/src/BytesText.stories.tsx`](../../../components/bytes-text/src/BytesText.stories.tsx) (title: `Typography/BytesText`)
