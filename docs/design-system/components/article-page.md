---
title: Article Page
description: Reference for the ArticlePage layout, a page for blog posts and articles with a sticky metadata header, a cover image, share links, and a table of contents.
documentType: reference
tags: [component, layout, page, article, documentation]
component:
  name: article-page
  package: "@cyclone-ui/article-page"
  stories:
    - title: Layouts/ArticlePage
      file: components/article-page/src/ArticlePage.stories.tsx
---

# Article Page

`ArticlePage` is a page layout for blog posts and documentation articles. The header holds the article metadata on its own background. It stays in place while the `Main` sheet scrolls up over it. `Main` holds the article and, on wide screens, a sticky table of contents and share links beside it. Sections for feedback and recommendations follow the article.

Use it for a single article that is read from top to bottom. For documentation with a side nav, use [Docs page](./docs-page.md). For an application shell, use [Page](./page.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add article-page
pnpm install
```

- **File:** `ArticlePage.tsx`. The CLI writes it to `<path>/article-page/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Table of Contents](./table-of-contents.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { ArticlePage } from "@cyclone-ui/article-page";
```

## Usage

```tsx
<ArticlePage>
  <ArticlePage.Header>
    <Breadcrumb currentName="Design systems" />
    <HeadingHeroText>{title}</HeadingHeroText>
    <ArticlePage.Media>
      <CoverImage />
    </ArticlePage.Media>
    <ArticlePage.Details>
      <Byline />
      <ArticlePage.Share url={url} title={title}>
        <BodyText render="span">Share</BodyText>
      </ArticlePage.Share>
    </ArticlePage.Details>
  </ArticlePage.Header>

  <ArticlePage.Main>
    <ArticlePage.Content toc={headings} share={{ url, title }}>
      {article}
    </ArticlePage.Content>
    <ArticlePage.Section aria-labelledby="article-feedback">
      <HeadingMediumText id="article-feedback">Was this article helpful?</HeadingMediumText>
      <Feedback />
    </ArticlePage.Section>
  </ArticlePage.Main>

  <TerrainFooter>{footer}</TerrainFooter>
</ArticlePage>
```

Render `Header` and `Main` as direct children of `ArticlePage`. Put the page footer after `Main`.

## Anatomy

```tsx
<ArticlePage>
  <ArticlePage.Header>
    <ArticlePage.Media />
    <ArticlePage.Details>
      <ArticlePage.Share />
    </ArticlePage.Details>
  </ArticlePage.Header>
  <ArticlePage.Main>
    <ArticlePage.Content />
    <ArticlePage.Section />
  </ArticlePage.Main>
</ArticlePage>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `ArticlePage` | A column Tamagui `View`, at least `100dvh` tall, on the `surface` background | The root. |
| `ArticlePage.Header` | A `View` as `<header>`, `position: sticky` at the top, on the `sunken` background. Its children sit in a centered column at most 1120 px wide | The article metadata, such as the breadcrumb, title, summary, cover, and byline. It stays in place while `Main` scrolls up over it. A header taller than the viewport sticks only when its bottom reaches the bottom of the viewport. |
| `ArticlePage.Media` | A `View` as `<figure>`, full width, with a 16:9 aspect ratio and hidden overflow | The frame for the cover image. |
| `ArticlePage.Details` | A row `View` that wraps, with `justifyContent: space-between` | The row for the byline, share links, and tags. |
| `ArticlePage.Share` | A `View` with `role="group"` and `aria-label="Share"`. Each link is a ghost, circular `Button` as `<a role="link">` with `target="_blank"` and `rel="noopener noreferrer"` | Links that share `url` on X, LinkedIn, and Facebook in a new tab. Children, such as a "Share" label, come before the links. |
| `ArticlePage.Main` | A `View` as `<main>` with a higher `zIndex`, the `surface` background, and a large shadow | The sheet that scrolls up over the header. |
| `ArticlePage.Content` | A row `View`, at most 1120 px wide. The children go in an `<article>`, at most 760 px wide. The table of contents and share links go in a sticky `<aside>`, 240 px wide, shown from the `lg` media query | The article and its aside. The aside renders only when there are `toc` items or a `share` value. |
| `ArticlePage.Section` | A `View` as `<section>`, at most 1120 px wide, with a 2 px top border | A section after the article, such as feedback or recommendations. |

`ArticlePageHeader`, `ArticlePageMedia`, `ArticlePageDetails`, `ArticlePageShare`, `ArticlePageMain`, `ArticlePageContent`, and `ArticlePageSection` are also exported by name. Use them in React Server Components, which cannot read `ArticlePage.Header` from a client module.

## Examples

The example is the story in [`ArticlePage.stories.tsx`](../../../components/article-page/src/ArticlePage.stories.tsx).

| Stories | What they show |
| --- | --- |
| `Default` | A full blog post. The header has a `Breadcrumb`, a title, a summary, a cover illustration in `Media`, and `Details` with the author, date, reading time, `Share` links, and tags. `Main` holds the article with a table of contents and share links, a feedback `Section`, and a "Keep reading" `Section` of `Card` items. A `TerrainFooter` comes after `Main`. The play function checks the "Share on X" link URL. At 1024 px and wider, it scrolls into the article and checks that the table of contents stays in view. |

## Props

`ArticlePage`, `ArticlePage.Header`, `ArticlePage.Media`, `ArticlePage.Details`, `ArticlePage.Main`, and `ArticlePage.Section` accept the props of a Tamagui `View`. They have no props of their own.

### `ArticlePage.Share`

It also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | `string` | - | Required. The article's address, shared as is. |
| `title` | `string` | `""` | Prefills the post on networks that accept text (X). |

### `ArticlePage.Content`

It also accepts the props of a Tamagui `View`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `toc` | `readonly TableOfContentsItem[]` | `[]` | The headings for the table of contents beside the article. Each item has `title`, `url`, and `depth`. |
| `share` | `{ url: string; title?: string }` | - | Shows `ArticlePage.Share` links below the table of contents, with a "Share" heading. |

See [Table of contents](./table-of-contents.md) for `TableOfContentsItem`.

### Exported constants

| Constant | Value | Description |
| --- | --- | --- |
| `ARTICLE_PAGE_MAX_WIDTH` | `1120` | The max width of the header content, `Content`, and each `Section`. |
| `ARTICLE_PAGE_CONTENT_MAX_WIDTH` | `760` | The max width of the article column. |
| `ARTICLE_PAGE_ASIDE_WIDTH` | `240` | The width of the aside. |

## Responsive behavior

| Area | 1024 px and up (`lg`) | Smaller screens |
| --- | --- | --- |
| Aside (table of contents and share links) | Sticks beside the article while the reader scrolls. | Hidden. |
| Header, `Main`, `Content`, `Section` | Full padding and gaps. | Below the `md` media query, the padding and gaps are smaller. |

## States

- **Without `toc` and `share`.** The aside is not rendered, and the article is centered alone.
- **Only `share`.** The aside holds only the share links.

## Accessibility

- The parts render landmarks and sections: `<header>`, `<main>`, `<article>`, `<aside>`, and `<section>`. `Media` renders a `<figure>`.
- Give each `ArticlePage.Section` a name. The story sets `aria-labelledby` to the id of the section heading.
- The table of contents is a navigation landmark with the name "Table of contents".
- `ArticlePage.Share` is a group with the name "Share". Each link has the role `link` and the name "Share on X", "Share on LinkedIn", or "Share on Facebook". The same text shows in a tooltip. The links open in a new tab.

## Related

- [Docs page](./docs-page.md), for documentation with a side nav
- [Table of contents](./table-of-contents.md)
- [Breadcrumb](./breadcrumb.md)
- [Feedback](./feedback.md)
- [Card](./card.md)
- [Terrain footer](./terrain-footer.md)

## Source

- [`components/article-page/src/ArticlePage.tsx`](../../../components/article-page/src/ArticlePage.tsx)
- [`components/article-page/src/ArticlePage.stories.tsx`](../../../components/article-page/src/ArticlePage.stories.tsx) (title: `Layouts/ArticlePage`)
