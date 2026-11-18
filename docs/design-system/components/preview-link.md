---
title: Preview Link
description: A link with a dotted underline that shows a tooltip with more details on hover or focus.
documentType: reference
tags: [component, link, tooltip, trigger]
component:
  name: preview-link
  package: "@cyclone-ui/preview-link"
  stories:
    - title: Triggers/PreviewLink
      file: components/preview-link/src/PreviewLink.stories.tsx
---

# Preview Link

`PreviewLink` is a [Link](./link.md) with a dotted underline. It shows a [Tooltip](./tooltip.md) with more details when the link is hovered or focused. Use it when a short summary of the target helps the reader decide whether to follow the link.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add preview-link
pnpm install
```

- **File:** `PreviewLink.tsx`. The CLI writes it to `<path>/preview-link/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Container](./container.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/tooltip`.

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

## Anatomy

```tsx
<PreviewLink href={url} preview="Details">
  Label
</PreviewLink>
// renders:
<Tooltip>
  <Tooltip.Trigger asChild>
    <Link href={url}>Label</Link>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <BodyText>Details</BodyText>
  </Tooltip.Content>
</Tooltip>
```

| Part          | Renders                                                                                                | Purpose                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| `PreviewLink` | A `Tooltip` from `@cyclone-ui/tooltip`                                                                  | Connects the link and the preview. It gets `theme` and `placement`. |
| Link          | A [Link](./link.md) as `<a role="link">`, used as the tooltip trigger (`asChild`), with a dotted underline 3 px thick | The link that the reader hovers, focuses, and presses.         |
| Preview       | `Tooltip.Content`. A string is wrapped in a `BodyText` with `3xl` horizontal and `2xl` vertical margins  | The details about the link target.                            |

## Examples

The examples are the stories in [`PreviewLink.stories.tsx`](../../../components/preview-link/src/PreviewLink.stories.tsx). Each story renders the link inside a `BodyText` sentence with a string `preview`.

| Stories    | What they show                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------ |
| `Base`     | The default link and preview.                                                                    |
| `Brand`    | `theme="brand"` on the link and the tooltip.                                                     |
| `External` | An `external` link to `https://stormsoftware.com`, with the preview "Opens stormsoftware.com in a new tab." |
| `Subtle`   | `variant="subtle"`.                                                                              |

## Props

`PreviewLinkProps` is `LinkProps` from `@cyclone-ui/link` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `preview` | `ReactNode` | — | The details shown in the tooltip. A string is wrapped in `BodyText`. Required. |
| `placement` | `TooltipProps["placement"]` | `"top"` | Where the tooltip appears, relative to the link. |
| `theme` | theme name | — | Applied to the link and the tooltip. |
| `style` | style object | — | Merged after the default `textDecorationThickness: 3`. |
| Other `LinkProps` | — | — | For example `href`, `external`, and `variant`. |

The link uses `textDecorationStyle="dotted"` and a `textDecorationThickness` of `3`.

## Variants

The link variants come from [Link](./link.md) and [Link Text](./link-text.md). The stories show the default link, `theme="brand"`, an `external` link, and `variant="subtle"`.

## Related

- [Link](./link.md)
- [Tooltip](./tooltip.md)
- [Link Text](./link-text.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/preview-link/src/PreviewLink.tsx`](../../../components/preview-link/src/PreviewLink.tsx)
- [`components/preview-link/src/PreviewLink.stories.tsx`](../../../components/preview-link/src/PreviewLink.stories.tsx) (title: `Triggers/PreviewLink`)
