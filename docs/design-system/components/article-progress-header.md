---
title: Article Progress Header
description: Reference for the ArticleProgressHeader component, a sticky strip of an article's section links that marks the section the reader is in.
documentType: reference
tags: [component, navigation, docs, table-of-contents, sticky]
component:
  name: article-progress-header
  package: "@cyclone-ui/article-progress-header"
  stories:
    - title: Docs/ArticleProgressHeader
      file: components/article-progress-header/src/ArticleProgressHeader.stories.tsx
---

# Article Progress Header

`ArticleProgressHeader` is a sticky strip of an article's section links in one row. It shows the section that the reader is in. A dot slides to that section's link while the reader scrolls. The strip scrolls sideways to keep that link in view, and fades its edges while there is more to scroll to.

Use it when there is no room for a [Table of contents](./table-of-contents.md) beside the article, for example on a phone. A `TableOfContents` is a vertical list with an indented rail for nested headings. This strip shows all items in one row and ignores their `depth`. [Docs Page](./docs-page.md) shows its `toc` beside the content only on screens 1280 px and wider.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add article-progress-header
pnpm install
```

- **File:** `ArticleProgressHeader.tsx`. The CLI writes it to `<path>/article-progress-header/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Icons](../icons/index.md), and [Table of Contents](./table-of-contents.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ArticleProgressHeader } from "@cyclone-ui/article-progress-header";
import type { TableOfContentsItem } from "@cyclone-ui/table-of-contents";
```

## Usage

Give each section an `id` that matches the hash in its item's `url`. Set `top` to the height of any sticky bar above the strip.

```tsx
const sections: TableOfContentsItem[] = [
  { title: "Install", url: "#install", depth: 2 },
  { title: "Options", url: "#options", depth: 2 },
  { title: "Accessibility", url: "#accessibility", depth: 2 }
];

<SiteHeader height={56} />
<ArticleProgressHeader items={sections} top={56} />
<main>
  <section id="install">…</section>
  <section id="options">…</section>
  <section id="accessibility">…</section>
</main>
```

## Anatomy

`ArticleProgressHeader` is one component. It builds its parts from `items`, so it takes no children. The parts below are internal and are not exported.

```tsx
<ArticleProgressHeader items={items} />

// It renders:
// <nav aria-label="On this page">       frame
//   scroller
//     track
//       <ul>                             list
//         <li><a href={item.url}>        link, one per item
//           <span>{item.title}</span>    label
//       <span aria-hidden />             dot
```

| Part     | Renders                                                                                                               | Purpose                                                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Frame    | A Tamagui `View` as `<nav>`, with `position: sticky`, `top: 0`, `zIndex: 30`, and full width                          | The navigation landmark. Its background is the `canvas` color at 82% over a 12 px backdrop blur.                                       |
| Scroller | A Tamagui `View` with `overflowX: auto` and a hidden scrollbar                                                        | Scrolls the links sideways. A mask fades a 24 px edge on each side that has more links to scroll to.                                   |
| Track    | A Tamagui `View` with `position: relative` and `width: max-content`                                                   | Holds the list and the dot. Its horizontal padding is `7xl`, and `4xl` below the `md` breakpoint.                                      |
| List     | A Tamagui `View` as `<ul>`, in a row with an `xl` gap and no list markers                                             | Holds one `<li>` for each item, in the order of `items`.                                                                               |
| Link     | A Tamagui `View` as `<a href={item.url}>`, 32 px high with an `md` radius                                             | Goes to the section. The current link has `aria-current="location"`. Keyboard focus shows a `ring-subtle` ring.                        |
| Label    | `BodyText` as `<span>`, size `sm`, without wrap                                                                       | The item `title`. It is `primary-inactive`, `primary-hovered` on hover, and `primary` when current. The current label moves 12 px right to make room for the dot. |
| Dot      | A `<span aria-hidden>`, a 5 px `primary` circle (web only)                                                            | Marks the current link. It slides from link to link.                                                                                   |

## Examples

The examples are the stories in [`ArticleProgressHeader.stories.tsx`](../../../components/article-progress-header/src/ArticleProgressHeader.stories.tsx). Both stories put the strip under a 56 px sticky top bar (`top={56}`), above ten sections of an article.

| Stories  | What they show                                                                                                                                                                                      |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`   | The strip at full width. The play function checks that the strip is sticky, that scrolling to "Options" makes its link current, and that pressing "Accessibility" makes that link current at once. |
| `Narrow` | The strip at a phone viewport (`mobile1`). The play function checks that the clipped edges fade, and that the strip scrolls the current link into view after a scroll to the last section.           |

## Props

`ArticleProgressHeader` also accepts the props of a Tamagui `View`.

| Prop         | Type                             | Default          | Description                                                                                                                         |
| ------------ | -------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `items`      | `readonly TableOfContentsItem[]` | -                | Required. The article's sections in document order. Each `url` is a hash link, such as `#install`. With no items, nothing renders. |
| `top`        | number or space token            | `0`              | The sticky offset. Set it to the height of any sticky or fixed header above the strip.                                              |
| `aria-label` | `string`                         | `"On this page"` | The accessible name of the navigation landmark.                                                                                     |

`TableOfContentsItem` comes from [Table of contents](./table-of-contents.md): `{ title: ReactNode; url: string; depth: number }`. The strip does not use `depth`.

## Behavior

- **Current section.** The strip uses `useActiveTableOfContentsItem` from Table of contents. On web, the current section is the last one whose heading is above a line at 35% of the window height (180 px at most). At the end of the page, the last section is current. On other platforms, the first item stays current.
- **Pressed link.** A pressed link becomes current at once. It stays current while the page scrolls to its section, so the dot does not stop at each section on the way. It releases 200 ms after the scroll stops, or after 1 second if the page does not scroll.
- **Current link in view.** When the current link is outside the strip, the strip scrolls until the link has 24 px of space from the edge.
- **Dot placement.** The dot is hidden until it is on the current link, so it does not slide in from the corner. It moves again when the links change size, for example when a font loads.
- **Reduced motion.** When the user prefers reduced motion, the dot and the labels move without a transition, and the strip scrolls without a smooth animation.

## Responsive behavior

The strip shows at all widths. Below the `md` breakpoint, its side padding changes from `7xl` to `4xl`. When the links are wider than the strip, it scrolls sideways and fades the edge on each side that has more links. The `Narrow` story shows this.

## Accessibility

- The frame is a `<nav>` landmark. Its name is "On this page" unless you set `aria-label`.
- The links are `<a>` elements with `href` in a `<ul>` list. Users move to them with `Tab` and follow them with `Enter`. Keyboard focus shows a ring.
- The current link has `aria-current="location"`, so screen readers announce it as the current location.
- The dot is `aria-hidden`.
- Motion follows the user's reduced motion setting. See [Behavior](#behavior).

## Related

- [Table of contents](./table-of-contents.md)
- [Docs Page](./docs-page.md)
- [Article Page](./article-page.md)
- [Body Text](./body-text.md)

## Source

- [`components/article-progress-header/src/ArticleProgressHeader.tsx`](../../../components/article-progress-header/src/ArticleProgressHeader.tsx)
- [`components/article-progress-header/src/ArticleProgressHeader.stories.tsx`](../../../components/article-progress-header/src/ArticleProgressHeader.stories.tsx) (title: `Docs/ArticleProgressHeader`)
