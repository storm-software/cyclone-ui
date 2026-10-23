/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import type {
  PageMainProps,
  PageProps,
  PageSideNavProps
} from "@cyclone-ui/page";
import { Page, PAGE_TOP_NAV_HEIGHT, usePageSideNav } from "@cyclone-ui/page";
import type { TableOfContentsItem } from "@cyclone-ui/table-of-contents";
import { TableOfContents } from "@cyclone-ui/table-of-contents";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";

export const ARTICLE_PAGE_SIDE_NAV_WIDTH = 268;

/** Widest the article column grows, for a comfortable line length. */
export const ARTICLE_PAGE_ARTICLE_MAX_WIDTH = 760;

export const ARTICLE_PAGE_TOC_WIDTH = 240;

export type ArticlePageProps = PageProps;

// The header's toggle sits on the left edge, so a hover flyout would open
// whenever the pointer drifts there; the side nav only opens on click.
const ArticlePageRoot = ({
  sideNavFlyoutEnabled = false,
  ...props
}: ArticlePageProps) => (
  <Page sideNavFlyoutEnabled={sideNavFlyoutEnabled} {...props} />
);

export type ArticlePageSideNavProps = PageSideNavProps;

/** Sits on the page canvas; it only takes its own surface as an overlay. */
const ArticlePageSideNavImpl = ({
  defaultWidth = ARTICLE_PAGE_SIDE_NAV_WIDTH,
  ...props
}: ArticlePageSideNavProps) => (
  <Page.SideNav
    defaultWidth={defaultWidth}
    backgroundColor="canvas max-lg:surface"
    borderRightWidth="0px max-lg:1px"
    {...props}
  />
);

const ArticlePageSideNav = withStaticProperties(ArticlePageSideNavImpl, {
  Header: Page.SideNav.Header,
  Body: Page.SideNav.Body,
  Footer: Page.SideNav.Footer
});

// Grows and shrinks into main's height on desktop, so only `Content` scrolls.
const ArticlePagePanel = styled(View, {
  displayName: "ArticlePagePanel",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 0,
  flexDirection: "column",
  backgroundColor: "surface",
  borderWidth: "0px lg:1px",
  borderColor: "hairline",
  borderRadius: "0px lg:2xl",
  boxShadow: "none lg:sm",
  overflow: "visible lg:hidden"
});

export type ArticlePageMainProps = Omit<PageMainProps, "fixed">;

/**
 * An inset, rounded panel beside the side nav. On desktop only its
 * `Content` scrolls; smaller screens scroll the document.
 */
const ArticlePageMain = ({ children, ...props }: ArticlePageMainProps) => (
  <Page.Main
    fixed={true}
    boxSizing="border-box"
    padding="0px lg:2xl"
    {...props}>
    <ArticlePagePanel>{children}</ArticlePagePanel>
  </Page.Main>
);

const ArticlePageHeaderFrame = styled(View, {
  displayName: "ArticlePageHeader",
  render: "header",
  // Only sticks on smaller screens, where the document scrolls.
  position: "sticky",
  top: 0,
  zIndex: "10",
  flexShrink: 0,
  height: PAGE_TOP_NAV_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  gap: "xl",
  paddingLeft: "7xl max-md:4xl",
  paddingRight: "4xl",
  backgroundColor: "surface"
});

/**
 * The top row of the panel, for breadcrumbs and page actions. It shows a side
 * nav toggle whenever the side nav isn't inline beside it.
 */
const ArticlePageHeaderImpl = createStyledHOC(
  ArticlePageHeaderFrame,
  ({ children, ...props }, forwardedRef) => {
    const { expanded } = usePageSideNav();

    return (
      <ArticlePageHeaderFrame ref={forwardedRef} {...props}>
        <Page.SideNavToggle display={expanded ? "none max-lg:flex" : "flex"} />
        {children}
      </ArticlePageHeaderFrame>
    );
  },
  { displayName: "ArticlePageHeader" }
);

const ArticlePageHeaderEnd = styled(View, {
  displayName: "ArticlePageHeaderEnd",
  flexShrink: 0,
  marginLeft: "auto",
  flexDirection: "row",
  alignItems: "center",
  gap: "md"
});

const ArticlePageHeader = withStaticProperties(ArticlePageHeaderImpl, {
  End: ArticlePageHeaderEnd
});

const ArticlePageContentFrame = styled(View, {
  displayName: "ArticlePageContent",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 0,
  overflowY: "visible lg:auto",
  // Centers the article and table of contents as a pair.
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "9xl",
  paddingHorizontal: "7xl max-md:4xl"
});

const ArticlePageArticle = styled(View, {
  displayName: "ArticlePageArticle",
  render: "article",
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
  maxWidth: ARTICLE_PAGE_ARTICLE_MAX_WIDTH,
  flexDirection: "column",
  gap: "4xl",
  paddingTop: "7xl",
  paddingBottom: "8xl"
});

const ArticlePageToc = styled(View, {
  displayName: "ArticlePageToc",
  position: "sticky",
  top: 0,
  flexShrink: 0,
  width: ARTICLE_PAGE_TOC_WIDTH,
  paddingTop: "8xl",
  display: "none xl:flex"
});

export interface ArticlePageContentExtraProps {
  /** Headings listed beside the article on screens 1280px and wider. */
  toc?: readonly TableOfContentsItem[];
}

export type ArticlePageContentProps = GetProps<typeof ArticlePageContentFrame> &
  ArticlePageContentExtraProps;

/** The scroll container that holds the article and its table of contents. */
const ArticlePageContent = createStyledHOC(
  ArticlePageContentFrame,
  ({ children, toc = [], ...props }: ArticlePageContentProps, forwardedRef) => (
    <ArticlePageContentFrame ref={forwardedRef} {...props}>
      <ArticlePageArticle>{children}</ArticlePageArticle>
      {toc.length > 0 ? (
        <ArticlePageToc>
          <TableOfContents items={toc} />
        </ArticlePageToc>
      ) : null}
    </ArticlePageContentFrame>
  ),
  { displayName: "ArticlePageContent" }
);

/**
 * A spacious layout for documentation and long-form articles, built on
 * `Page`. Compose its areas as direct children:
 *
 * - `ArticlePage.SideNav`: sits on the page canvas on desktop and opens as an
 *   overlay on smaller screens, with `Header`, `Body` (scrolls) and `Footer`.
 *   Place an `ArticlePage.SideNavToggle` in its header to collapse it.
 * - `ArticlePage.Main`: an inset panel holding a `Header` (with an `End` slot)
 *   and the `Content`, which centers the article beside its table of contents.
 *
 * Collapse state, the `Ctrl` + `[` shortcut and skip links
 * work as they do in `Page`, and `usePageSideNav` controls the side nav.
 */
export const ArticlePage = withStaticProperties(ArticlePageRoot, {
  SideNav: ArticlePageSideNav,
  SideNavToggle: Page.SideNavToggle,
  Main: ArticlePageMain,
  Header: ArticlePageHeader,
  Content: ArticlePageContent
});
