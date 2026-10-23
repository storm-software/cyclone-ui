---
title: Article Page
description: Reference for the ArticlePage layout, a page for documentation and long-form articles with a side nav, an inset panel, and a table of contents.
documentType: reference
tags: [component, layout, page, article, documentation]
---

# Article Page

`ArticlePage` is a page layout for documentation and long articles. A side nav sits on the page canvas. Beside it is an inset, rounded panel. The panel holds a header and the article. A sticky table of contents shows next to the article on wide screens.

It is built on [Page](./page.md). It shares the side nav behavior, the keyboard shortcut, and the skip links of `Page`.

## Import

```tsx
import { ArticlePage } from "@cyclone-ui/article-page";
```

## Usage

```tsx
<ArticlePage sideNavShortcutEnabled={true}>
  <ArticlePage.SideNav>
    <ArticlePage.SideNav.Header>
      <Logo />
      <ArticlePage.SideNavToggle />
    </ArticlePage.SideNav.Header>
    <ArticlePage.SideNav.Body>
      <NavigationLinks />
    </ArticlePage.SideNav.Body>
  </ArticlePage.SideNav>

  <ArticlePage.Main>
    <ArticlePage.Header>
      <Breadcrumb currentName="Headings" />
      <ArticlePage.Header.End>
        <PageActions />
      </ArticlePage.Header.End>
    </ArticlePage.Header>

    <ArticlePage.Content toc={headings}>
      <HeadingTitleText>Headings</HeadingTitleText>
      {children}
    </ArticlePage.Content>
  </ArticlePage.Main>
</ArticlePage>
```

Render each area as a direct child of `ArticlePage`.

## Anatomy

| Part                       | Purpose                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ArticlePage`              | The root. It is `Page` with `sideNavFlyoutEnabled` set to `false` by default.                             |
| `ArticlePage.SideNav`      | The side nav. It has `Header`, `Body`, and `Footer` parts (from `Page.SideNav`).                          |
| `ArticlePage.SideNavToggle`| The button that collapses or opens the side nav (`Page.SideNavToggle`).                                   |
| `ArticlePage.Main`         | The inset panel beside the side nav. It does not accept the `fixed` prop.                                 |
| `ArticlePage.Header`       | The top row of the panel, with an `End` slot on the right for page actions.                               |
| `ArticlePage.Content`      | The scroll area. It holds the `<article>` and the table of contents.                                      |

## Props

### `ArticlePage`

It accepts the props of [Page](./page.md). The ones that this layout uses:

| Prop                      | Type                                                | Default | Description                                                                 |
| ------------------------- | --------------------------------------------------- | ------- | --------------------------------------------------------------------------- |
| `defaultSideNavCollapsed` | `boolean`                                           | `false` | Starts the side nav collapsed on desktop. It always starts collapsed on mobile. |
| `sideNavShortcutEnabled`  | `boolean`                                           | `false` | Lets `Ctrl` + `[` toggle the side nav.                                      |
| `sideNavFlyoutEnabled`    | `boolean`                                           | `false` | Lets hovering the toggle open a collapsed side nav. (`Page` defaults to `true`.) |
| `onSideNavExpandedChange` | `(expanded: boolean, details) => void`              | -       | Called when the side nav opens or closes.                                   |
| `skipLinksLabel`          | `string`                                            | `"Skip to"` | The heading above the skip links.                                       |

### `ArticlePage.SideNav`

| Prop           | Type     | Default | Description              |
| -------------- | -------- | ------- | ------------------------ |
| `defaultWidth` | `number` | `268`   | The width in pixels.     |

### `ArticlePage.Content`

| Prop  | Type                              | Default | Description                                                          |
| ----- | --------------------------------- | ------- | -------------------------------------------------------------------- |
| `toc` | `readonly TableOfContentsItem[]`  | `[]`    | The headings for the table of contents. Each item has `title`, `url`, and `depth`. |

See [Table of Contents](./table-of-contents.md) for `TableOfContentsItem`.

### Exported constants

| Constant                          | Value |
| --------------------------------- | ----- |
| `ARTICLE_PAGE_SIDE_NAV_WIDTH`     | `268` |
| `ARTICLE_PAGE_ARTICLE_MAX_WIDTH`  | `760` |
| `ARTICLE_PAGE_TOC_WIDTH`          | `240` |

## Responsive behavior

| Area            | Wide screens (1024 px and up)                       | Smaller screens                                          |
| --------------- | --------------------------------------------------- | -------------------------------------------------------- |
| Side nav        | Sits on the canvas beside the panel.                | Opens as an overlay on a `surface` background with a border. |
| Panel           | Rounded, with a hairline border and a small shadow. Only `Content` scrolls. | No border, radius, or inset. The document scrolls. |
| Header          | Fixed at the top of the panel.                      | Sticks to the top of the screen.                         |
| Toggle in header| Shown only when the side nav is collapsed.          | Always shown.                                            |
| Table of contents | Shown from 1280 px up, next to the article.       | Hidden.                                                  |

The article column is at most 760 px wide. The table of contents is 240 px wide.

## States

- **Expanded or collapsed side nav.** See the `Default` and `CollapsedSideNav` stories.
- **Without `toc`.** The table of contents is not rendered.

## Accessibility

- The header renders a `header` element. The article renders an `article` element.
- The skip links and the keyboard shortcut come from [Page](./page.md).

## Related

- [Page](./page.md)
- [Table of Contents](./table-of-contents.md)
- [Breadcrumb](./breadcrumb.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/article-page/src/ArticlePage.tsx`](../../../components/article-page/src/ArticlePage.tsx)
- [`components/article-page/src/ArticlePage.stories.tsx`](../../../components/article-page/src/ArticlePage.stories.tsx) (title: `Layouts/ArticlePage`)
