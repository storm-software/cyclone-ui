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

export const DOCS_PAGE_SIDE_NAV_WIDTH = 268;

/** Widest the docs column grows, for a comfortable line length. */
export const DOCS_PAGE_ARTICLE_MAX_WIDTH = 760;

export const DOCS_PAGE_TOC_WIDTH = 240;

export type DocsPageProps = PageProps;

// The header's toggle sits on the left edge, so a hover flyout would open
// whenever the pointer drifts there; the side nav only opens on click.
const DocsPageRoot = ({
  sideNavFlyoutEnabled = false,
  ...props
}: DocsPageProps) => (
  <Page sideNavFlyoutEnabled={sideNavFlyoutEnabled} {...props} />
);

export type DocsPageSideNavProps = PageSideNavProps;

/** Sits on the page canvas; it only takes its own surface as an overlay. */
const DocsPageSideNavImpl = ({
  defaultWidth = DOCS_PAGE_SIDE_NAV_WIDTH,
  ...props
}: DocsPageSideNavProps) => (
  <Page.SideNav
    defaultWidth={defaultWidth}
    backgroundColor="canvas max-lg:surface"
    borderRightWidth="0px max-lg:1px"
    {...props}
  />
);

const DocsPageSideNav = withStaticProperties(DocsPageSideNavImpl, {
  Header: Page.SideNav.Header,
  Body: Page.SideNav.Body,
  Footer: Page.SideNav.Footer
});

// Grows and shrinks into main's height on desktop, so only `Content` scrolls.
const DocsPagePanel = styled(View, {
  displayName: "DocsPagePanel",
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

export type DocsPageMainProps = Omit<PageMainProps, "fixed">;

/**
 * An inset, rounded panel beside the side nav. On desktop only its
 * `Content` scrolls; smaller screens scroll the document.
 */
const DocsPageMain = ({ children, ...props }: DocsPageMainProps) => (
  <Page.Main
    fixed={true}
    boxSizing="border-box"
    padding="0px lg:2xl"
    {...props}>
    <DocsPagePanel>{children}</DocsPagePanel>
  </Page.Main>
);

const DocsPageHeaderFrame = styled(View, {
  displayName: "DocsPageHeader",
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
const DocsPageHeaderImpl = createStyledHOC(
  DocsPageHeaderFrame,
  ({ children, ...props }, forwardedRef) => {
    const { expanded } = usePageSideNav();

    return (
      <DocsPageHeaderFrame ref={forwardedRef} {...props}>
        <Page.SideNavToggle display={expanded ? "none max-lg:flex" : "flex"} />
        {children}
      </DocsPageHeaderFrame>
    );
  },
  { displayName: "DocsPageHeader" }
);

const DocsPageHeaderEnd = styled(View, {
  displayName: "DocsPageHeaderEnd",
  flexShrink: 0,
  marginLeft: "auto",
  flexDirection: "row",
  alignItems: "center",
  gap: "md"
});

const DocsPageHeader = withStaticProperties(DocsPageHeaderImpl, {
  End: DocsPageHeaderEnd
});

const DocsPageContentFrame = styled(View, {
  displayName: "DocsPageContent",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 0,
  overflowY: "visible lg:auto",
  // Centers the docs and table of contents as a pair.
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "9xl",
  paddingHorizontal: "7xl max-md:4xl"
});

const DocsPageArticle = styled(View, {
  displayName: "DocsPageArticle",
  render: "article",
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
  maxWidth: DOCS_PAGE_ARTICLE_MAX_WIDTH,
  flexDirection: "column",
  gap: "4xl",
  paddingTop: "7xl",
  paddingBottom: "8xl"
});

const DocsPageToc = styled(View, {
  displayName: "DocsPageToc",
  position: "sticky",
  top: 0,
  flexShrink: 0,
  width: DOCS_PAGE_TOC_WIDTH,
  paddingTop: "8xl",
  display: "none xl:flex"
});

export interface DocsPageContentExtraProps {
  /** Headings listed beside the documentation on screens 1280px and wider. */
  toc?: readonly TableOfContentsItem[];
}

export type DocsPageContentProps = GetProps<typeof DocsPageContentFrame> &
  DocsPageContentExtraProps;

/** The scroll container that holds the documentation and its table of contents. */
const DocsPageContent = createStyledHOC(
  DocsPageContentFrame,
  ({ children, toc = [], ...props }: DocsPageContentProps, forwardedRef) => (
    <DocsPageContentFrame ref={forwardedRef} {...props}>
      <DocsPageArticle>{children}</DocsPageArticle>
      {toc.length > 0 ? (
        <DocsPageToc>
          <TableOfContents items={toc} />
        </DocsPageToc>
      ) : null}
    </DocsPageContentFrame>
  ),
  { displayName: "DocsPageContent" }
);

/**
 * A spacious layout for documentation and long-form documentation, built on
 * `Page`. Compose its areas as direct children:
 *
 * - `DocsPage.SideNav`: sits on the page canvas on desktop and opens as an
 *   overlay on smaller screens, with `Header`, `Body` (scrolls) and `Footer`.
 *   Place an `DocsPage.SideNavToggle` in its header to collapse it.
 * - `DocsPage.Main`: an inset panel holding a `Header` (with an `End` slot)
 *   and the `Content`, which centers the documentation beside its table of contents.
 *
 * Collapse state, the `Ctrl` + `[` shortcut and skip links
 * work as they do in `Page`, and `usePageSideNav` controls the side nav.
 */
export const DocsPage = withStaticProperties(DocsPageRoot, {
  SideNav: DocsPageSideNav,
  SideNavToggle: Page.SideNavToggle,
  Main: DocsPageMain,
  Header: DocsPageHeader,
  Content: DocsPageContent
});
