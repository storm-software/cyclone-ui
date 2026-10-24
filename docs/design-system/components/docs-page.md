---
title: Docs page
description: Reference for the DocsPage layout, a side navigation and a scrolling article with an optional table of contents.
documentType: reference
tags: [component, layout]
---

# Docs page

`DocsPage` is a shell for documentation and long-form reading. It is built on [Page](./page.md).

On a wide screen, a collapsible side nav sits on the page canvas beside an inset, rounded main panel. The article is centered, and a table of contents sticks beside it. On a smaller screen the side nav opens as an overlay and the document scrolls.

Source: [`components/docs-page`](https://github.com/storm-software/cyclone-ui/tree/main/components/docs-page)

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

| Part | Purpose |
| --- | --- |
| `DocsPage` | The page root. Same props as `Page`. |
| `DocsPage.SideNav` | The navigation column. `Header`, `Body`, and `Footer` come from `Page.SideNav`. |
| `DocsPage.SideNavToggle` | Collapses the side nav. Same control as `Page.SideNavToggle`. |
| `DocsPage.Main` | The inset panel. It is fixed on desktop so only `Content` scrolls. `fixed` is not a public prop. |
| `DocsPage.Header` | Breadcrumbs and page actions. |
| `DocsPage.Header.End` | The slot at the end of the header. |
| `DocsPage.Content` | The article and the optional table of contents. |

The side nav is 268 px wide. The article max width is 760 px. The table of contents is 240 px wide.

Collapse state, the `Ctrl` + `[` shortcut, skip links, and `usePageSideNav` work as they do in `Page`.

## Related pages

- [Page](./page.md)
- [Article page](./article-page.md)
- [Table of contents](./table-of-contents.md)
