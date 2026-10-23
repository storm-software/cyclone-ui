---
title: PreviewLink
description: A link with a dotted underline that shows a tooltip with more details on hover or focus.
documentType: reference
tags: [component, link, tooltip, trigger]
---

# PreviewLink

`PreviewLink` is a `Link` with a dotted underline. It shows a `Tooltip` with more details when the link is hovered or focused.

## Import

```tsx
import { PreviewLink } from "@cyclone-ui/preview-link";
```

## Usage

```tsx
<BodyText>
  Lorem ipsum{" "}
  <PreviewLink href="#" preview="A short description of the linked page.">
    dolor sit
  </PreviewLink>{" "}
  amet
</BodyText>
```

## Props

`PreviewLinkProps` is `LinkProps` from `@cyclone-ui/link` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `preview` | `ReactNode` | — | The details shown in the tooltip. A string is wrapped in `BodyText`. Required. |
| `placement` | `TooltipProps["placement"]` | `"top"` | Where the tooltip appears, relative to the link. |
| `theme` | theme name | — | Applied to the link and the tooltip. |
| Other `LinkProps` | — | — | For example `href`, `external`, and `variant`. |

The link uses `textDecorationStyle="dotted"` and a `textDecorationThickness` of `3`.

## Variants

The stories show:

- Base link with a string preview.
- `theme="brand"`.
- `external` link with `href="https://stormsoftware.com"`.
- `variant="subtle"`.

## Related

- Tooltip and Link component packages (`@cyclone-ui/tooltip`, `@cyclone-ui/link`).
- [Design tokens](../tokens/index.md)

## Source

- [`components/preview-link/src/PreviewLink.tsx`](../../../components/preview-link/src/PreviewLink.tsx)
- [`components/preview-link/src/PreviewLink.stories.tsx`](../../../components/preview-link/src/PreviewLink.stories.tsx)
