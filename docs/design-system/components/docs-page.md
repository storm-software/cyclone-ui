---
title: Docs Page
description: Reference for the DocsPage layout, a side navigation and a scrolling article with an optional table of contents.
documentType: reference
tags: [component, layout]
component:
  name: docs-page
  package: "@cyclone-ui/docs-page"
  stories:
    - title: Layouts/DocsPage
      file: components/docs-page/src/DocsPage.stories.tsx
---

# Docs Page

`DocsPage` is a shell for documentation and long-form reading. It is built on [Page](./page.md).

On a wide screen, a collapsible side nav sits on the page canvas beside an inset, rounded main panel. The article is centered, and a table of contents sticks beside it. On a smaller screen the side nav opens as an overlay and the document scrolls.

Use it for documentation and other long reading with a side nav. For an application shell with a top nav, a resizable side nav, and a panel, use `Page`. For a blog post with a cover image and no side nav, use [Article page](./article-page.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add docs-page
pnpm install
```

- **File:** `DocsPage.tsx`. The CLI writes it to `<path>/docs-page/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Icons](../icons/index.md), [Page](./page.md), [Scroll View](./scroll-view.md), and [Table of Contents](./table-of-contents.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { DocsPage } from "@cyclone-ui/docs-page";
```

## Usage

```tsx
<DocsPage>
  <DocsPage.SideNav>
    <DocsPage.SideNav.Header>
      <DocsPage.SideNavToggle />
    </DocsPage.SideNav.Header>
    <DocsPage.SideNav.Body>{links}</DocsPage.SideNav.Body>
    <DocsPage.SideNav.Footer />
  </DocsPage.SideNav>
  <DocsPage.Main>
    <DocsPage.Header>
      Home
      <DocsPage.Header.End>{actions}</DocsPage.Header.End>
    </DocsPage.Header>
    <DocsPage.Content toc={headings}>{article}</DocsPage.Content>
  </DocsPage.Main>
</DocsPage>
```

`toc` is a list of `TableOfContentsItem` values. The contents render beside the article at 1280 px and wider.

## Anatomy

```tsx
<DocsPage>
  <DocsPage.SideNav>
    <DocsPage.SideNav.Header>
      <DocsPage.SideNavToggle />
    </DocsPage.SideNav.Header>
    <DocsPage.SideNav.Body />
    <DocsPage.SideNav.Footer />
  </DocsPage.SideNav>
  <DocsPage.Main>
    <DocsPage.Header>
      <DocsPage.Header.End />
    </DocsPage.Header>
    <DocsPage.Content toc={headings} />
  </DocsPage.Main>
</DocsPage>
```

"Desktop" is the `lg` media query of `Page`.

| Part | Renders | Purpose |
| --- | --- | --- |
| `DocsPage` | `Page`, with `sideNavFlyoutEnabled` set to `false` by default | The page root. Same props as `Page`. |
| `DocsPage.SideNav` | `Page.SideNav` (a `<nav>`), 268 px wide by default. On desktop it has the `canvas` background and no border. Below desktop it has the `surface` background and a right border | The navigation column. `Header`, `Body`, and `Footer` come from `Page.SideNav`. It has no `Splitter` part. |
| `DocsPage.SideNavToggle` | `Page.SideNavToggle` (a `<button>`) | Collapses the side nav. Same control as `Page.SideNavToggle`. |
| `DocsPage.Main` | `Page.Main` (a `<main>`) with `fixed` set, around an inner panel `View`. On desktop the panel is inset, rounded (`2xl`), with a hairline border and a small shadow | The inset panel. It is fixed on desktop so only `Content` scrolls. `fixed` is not a public prop. |
| `DocsPage.Header` | A `View` as `<header>`, 56 px tall, `position: sticky` at the top | Breadcrumbs and page actions. It puts its own `Page.SideNavToggle` first. The toggle shows while the side nav is collapsed and on smaller screens. The header only sticks on smaller screens, where the document scrolls. |
| `DocsPage.Header.End` | A row `View` with `marginLeft: auto` | The slot at the end of the header. |
| `DocsPage.Content` | A row `View` that scrolls on desktop. The children go in an `<article>`. The table of contents goes in a sticky column, shown from the `xl` media query | The article and the optional table of contents. |

The side nav is 268 px wide. The article max width is 760 px. The table of contents is 240 px wide.

Collapse state, the `Ctrl` + `[` shortcut, skip links, and `usePageSideNav` work as they do in `Page`.

`DocsPageSideNav`, `DocsPageSideNavHeader`, `DocsPageSideNavBody`, `DocsPageSideNavFooter`, `DocsPageSideNavToggle`, `DocsPageMain`, `DocsPageHeader`, `DocsPageHeaderEnd`, and `DocsPageContent` are also exported by name. Use them in React Server Components, which cannot read `DocsPage.SideNav` from a client module.

## Examples

The examples are the stories in [`DocsPage.stories.tsx`](../../../components/docs-page/src/DocsPage.stories.tsx). Both fill the side nav with a [Navigation sidebar](./navigation-sidebar.md) (`render="div"`) and put a `Breadcrumb` and page actions in the header.

| Stories | What they show |
| --- | --- |
| `Default` | The full layout with a table of contents. On desktop, the play function checks that main does not scroll and, at 1280 px and wider, that the table of contents shows. It collapses the side nav with its toggle and opens it again with the header's toggle. |
| `CollapsedSideNav` | `defaultSideNavCollapsed`. Hovering the header's toggle does not open a flyout. Click it to open the side nav. |

## Props

### `DocsPage`

It accepts the props of [`Page`](./page.md#page). One default is different:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `sideNavFlyoutEnabled` | `boolean` | `false` | Lets hovering the toggle open a collapsed side nav as a flyout. The header's toggle sits on the left edge, so the flyout is off by default. |

### `DocsPage.SideNav`

It accepts the props of [`Page.SideNav`](./page.md#pagesidenav). One default is different:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultWidth` | `number` | `268` | Starting width in pixels. |

### `DocsPage.Main`

It accepts the props of [`Page.Main`](./page.md#pagemain) except `fixed`.

### `DocsPage.Header`

It accepts the props of a Tamagui `View`.

### `DocsPage.Content`

It also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `toc` | `readonly TableOfContentsItem[]` | `[]` | The headings for the table of contents. Each item has `title`, `url`, and `depth`. With no items, the table of contents is not rendered. |

### Exported constants

| Constant | Value |
| --- | --- |
| `DOCS_PAGE_SIDE_NAV_WIDTH` | `268` |
| `DOCS_PAGE_ARTICLE_MAX_WIDTH` | `760` |
| `DOCS_PAGE_TOC_WIDTH` | `240` |

## Related

- [Page](./page.md)
- [Article page](./article-page.md)
- [Navigation sidebar](./navigation-sidebar.md)
- [Breadcrumb](./breadcrumb.md)
- [Table of contents](./table-of-contents.md)

## Source

- [`components/docs-page/src/DocsPage.tsx`](../../../components/docs-page/src/DocsPage.tsx)
- [`components/docs-page/src/DocsPage.stories.tsx`](../../../components/docs-page/src/DocsPage.stories.tsx) (title: `Layouts/DocsPage`)
