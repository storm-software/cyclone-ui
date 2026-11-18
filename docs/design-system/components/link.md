---
title: Link
description: A themed text link that renders an anchor on web, opens the URL with Linking on native, and can mark external links with an arrow.
documentType: reference
tags: [component, link, navigation]
component:
  name: link
  package: "@cyclone-ui/link"
  stories:
    - title: Triggers/Link
      file: components/link/src/Link.stories.tsx
---

# Link

`Link` is a [Link Text](./link-text.md) that navigates. On web it renders an `a` element. On native it opens the URL with React Native `Linking`. Use it for inline and standalone hyperlinks.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add link
pnpm install
```

- **File:** `Link.tsx`. The CLI writes it to `<path>/link/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Icons](../icons/index.md), and [Link Text](./link-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/constants` and `@tamagui/core`.

## Import

```tsx
import { Link } from "@cyclone-ui/link";
```

## Usage

```tsx
<BodyText>
  Lorem ipsum <Link href="https://stormsoftware.com">dolor sit</Link> amet
</BodyText>
```

Set `external` to open the link in a new tab and show an external-link icon.

```tsx
<Link href="https://github.com/storm-software/cyclone-ui" external>
  GitHub
</Link>
```

To use a router link, such as the Next.js `Link`, pass it as a `render` element. It keeps the link styles.

```tsx
import NextLink from "next/link";

<Link render={<NextLink href="/sign-up" />}>Sign up</Link>
```

## Anatomy

```tsx
<Link href={url} external>
  Label
  {/* external icon */}
</Link>
```

| Part          | Renders                                                                                                   | Purpose                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `Link`        | A [Link Text](./link-text.md) (a Tamagui `SizableText`) as `<a role="link">`, or as the `render` element   | The link text and the press target. It is the `link` group for the icon hover effect.       |
| External icon | A Tamagui `View` as `<span>` that holds the `ExternalLink` icon in a `ThemeableIcon` at size `4xl`         | Shows that the link opens in a new tab. It shows with `external`, except on web with a `render` element. |

## Examples

The examples are the stories in [`Link.stories.tsx`](../../../components/link/src/Link.stories.tsx). Most stories render a link inside a `BodyText` sentence.

| Stories                                                                                                         | What they show                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Base`, `Small`, `Large`                                                                                        | The default `md` size, and `size="sm"` and `size="lg"`.                                          |
| `Brand`                                                                                                         | The `brand` theme.                                                                               |
| `Mixed`, `MixedInverse`, `Subtle`                                                                               | `variant="emphasis"` with `mixed`, with `mixed` and `inverse`, and `variant="subtle"`.            |
| `External`, `SubtleExternal`, `CallToAction`                                                                    | The external icon, the external icon on a subtle link, and the `cta` style.                       |
| `UnderlineHover`, `UnderlineInitial`, `UnderlineStatic`, `UnderlineNone`                                        | Each `underline` mode.                                                                           |
| `Discovery`, `DiscoveryCallToAction`, `DiscoveryExternal`, and the same set for `Danger`, `Warning`, `Info`, and `Success` | Each status theme on a plain link, a `cta` link, and an external link.                   |
| `RenderElement`                                                                                                 | Plain links and links that render a router-style `<a>` through `render`, inside text and standalone. The play function checks that a rendered link keeps the link styles, `href`, and `target`, has no external icon, and calls the router click handler, `onClick`, and `onPress` once for each click. It also checks that `ref` reaches the anchor. |

## Props

`Link` accepts all [Link Text](./link-text.md) props, such as `variant`, `mixed`, `inverse`, `underline`, `cta`, and `disabled`. The exported type is `LinkProps`. It adds these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | None | The URL. |
| `target` | `string` | None | The anchor target on web. |
| `rel` | `string` | None | The anchor `rel` value. It passes through with the other props. |
| `download` | `string` | None | The anchor `download` value. It passes through with the other props. |
| `external` | `boolean` | `false` | On web, sets `target="_blank"`, which overrides `target`. Shows an external-link icon after the text. With a `render` element on web, it does neither. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Text size. |
| `render` | element name or React element | `"a"` | The element to render. A React element, such as a router link, replaces the `a` element and keeps the link styles. |

## Behavior

- **Web:** The component passes `href` and `target` to the anchor. With a `render` element, it passes them only when you set them.
- **Web with a `render` element:** Your `onClick` and `onPress` run from the element's `onClick`, after the element's own handler. This lets a router cancel its navigation when the event is prevented.
- **Native:** The component calls your `onPress` first. Then it calls `Linking.openURL(href)` when `href` is set.
- **External icon:** The `ExternalLink` icon uses `currentColor`, so it follows the link color in every variant and state. On hover of the link, the icon moves 2px right and 2px up over 200ms.
- The frame sets `role="link"` and `cursor: pointer`.

## Variants and states

The color, underline, size, and disabled options come from [Link Text](./link-text.md). The stories show each size, `brand`, `mixed`, `mixed` with `inverse`, `subtle`, `cta`, each underline mode, the external icon, and the status themes.

## Accessibility

The link has `role="link"`. Use clear link text. The external icon has no label in the source, so state in the text that a link is external when it matters.

## Related

- [Link Text](./link-text.md)
- [Preview Link](./preview-link.md)
- [Anchor](./anchor.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/link/src/Link.tsx`](../../../components/link/src/Link.tsx)
- [`components/link/src/Link.stories.tsx`](../../../components/link/src/Link.stories.tsx) (title: `Triggers/Link`)
