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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import {
  FacebookLogo,
  LinkedinLogo,
  ShareNetwork,
  XLogo
} from "@cyclone-ui/icons";
import type { TableOfContentsItem } from "@cyclone-ui/table-of-contents";
import { TableOfContents } from "@cyclone-ui/table-of-contents";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { useEffect, useRef } from "react";

/** Widest the header, sections and recommendations grow. */
export const ARTICLE_PAGE_MAX_WIDTH = 1120;

/** Widest the article column grows, for a comfortable line length. */
export const ARTICLE_PAGE_CONTENT_MAX_WIDTH = 760;

export const ARTICLE_PAGE_ASIDE_WIDTH = 240;

interface ArticlePageBrowserElement {
  offsetHeight: number;
  style: { setProperty: (property: string, value: string) => void };
}

interface ArticlePageResizeObserver {
  observe: (element: ArticlePageBrowserElement) => void;
  disconnect: () => void;
}

const ArticlePageFrame = styled(View, {
  displayName: "ArticlePage",
  position: "relative",
  width: "100%",
  minHeight: "100dvh",
  flexDirection: "column",
  backgroundColor: "surface"
});

export type ArticlePageProps = GetProps<typeof ArticlePageFrame>;

const ArticlePageHeaderFrame = styled(View, {
  displayName: "ArticlePageHeader",
  render: "header",
  // Stays put while the content below scrolls up over it.
  position: "sticky",
  top: 0,
  zIndex: "0",
  width: "100%",
  boxSizing: "border-box",
  alignItems: "center",
  paddingHorizontal: "7xl max-md:4xl",
  paddingTop: "9xl max-md:7xl",
  paddingBottom: "20xl max-md:14xl",
  backgroundColor: "sunken"
});

const ArticlePageHeaderContent = styled(View, {
  displayName: "ArticlePageHeaderContent",
  width: "100%",
  maxWidth: ARTICLE_PAGE_MAX_WIDTH,
  flexDirection: "column",
  gap: "10xl max-md:8xl"
});

export type ArticlePageHeaderProps = GetProps<typeof ArticlePageHeaderFrame>;

/**
 * The article's metadata, on its own background. It stays in place while the
 * content scrolls up over it.
 */
const ArticlePageHeader = createStyledHOC(
  ArticlePageHeaderFrame,
  ({ children, ...props }: ArticlePageHeaderProps, forwardedRef) => {
    const headerRef = useRef<TamaguiElement | null>(null);
    const ref = useComposedRefs(forwardedRef, headerRef);

    useEffect(() => {
      const header = headerRef.current as unknown as ArticlePageBrowserElement;
      const ResizeObserverImpl = (
        globalThis as typeof globalThis & {
          ResizeObserver?: new (
            callback: () => void
          ) => ArticlePageResizeObserver;
        }
      ).ResizeObserver;

      if (!header || !ResizeObserverImpl) {
        return;
      }

      // A header taller than the viewport sticks once its bottom reaches the
      // viewport's, so all of it can be read before the content covers it.
      const observer = new ResizeObserverImpl(() => {
        header.style.setProperty(
          "top",
          `min(0px, calc(100dvh - ${header.offsetHeight}px))`
        );
      });
      observer.observe(header);

      return () => observer.disconnect();
    }, []);

    return (
      <ArticlePageHeaderFrame ref={ref} {...props}>
        <ArticlePageHeaderContent>{children}</ArticlePageHeaderContent>
      </ArticlePageHeaderFrame>
    );
  },
  { displayName: "ArticlePageHeader" }
);

const ArticlePageMedia = styled(View, {
  displayName: "ArticlePageMedia",
  render: "figure",
  margin: 0,
  width: "100%",
  aspectRatio: "16 / 9",
  overflow: "hidden",

  backgroundColor: "surface"
});

const ArticlePageDetails = styled(View, {
  displayName: "ArticlePageDetails",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "5xl",
  rowGap: "4xl"
});

const ArticlePageShareFrame = styled(View, {
  displayName: "ArticlePageShare",
  role: "group",
  flexDirection: "row",
  alignItems: "center",
  gap: "md"
});

export interface ArticlePageShareExtraProps {
  /** The article's address, shared as is. */
  url: string;
  /** Prefills the post on networks that accept text. */
  title?: string;
}

export type ArticlePageShareProps = GetProps<typeof ArticlePageShareFrame> &
  ArticlePageShareExtraProps;

const getShareLinks = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);

  return [
    {
      network: "X",
      icon: XLogo,
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`
    },
    {
      network: "LinkedIn",
      icon: LinkedinLogo,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      network: "Facebook",
      icon: FacebookLogo,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    }
  ];
};

/**
 * Links that share the article on X, LinkedIn and Facebook in a new tab.
 * Children, such as a "Share" label, come before the links.
 */
const ArticlePageShare = createStyledHOC(
  ArticlePageShareFrame,
  (
    { url, title = "", children, ...props }: ArticlePageShareProps,
    forwardedRef
  ) => (
    <ArticlePageShareFrame ref={forwardedRef} aria-label="Share" {...props}>
      {children}
      {getShareLinks(url, title).map(({ network, icon: Icon, href }) => (
        <Button
          key={network}
          render="a"
          // `Button` defaults to the button role, even as an anchor.
          role="link"
          href={href}
          {...{ target: "_blank", rel: "noopener noreferrer" }}
          aria-label={`Share on ${network}`}
          variant="ghost"
          circular={true}
          flexGrow={0}
          size="9xl">
          <Button.Icon>
            <Icon aria-hidden={true} />
          </Button.Icon>
        </Button>
      ))}
    </ArticlePageShareFrame>
  ),
  { displayName: "ArticlePageShare" }
);

const ArticlePageMain = styled(View, {
  displayName: "ArticlePageMain",
  render: "main",
  // Above the sticky header, so it scrolls up over it.
  position: "relative",
  zIndex: "10",
  width: "100%",
  boxSizing: "border-box",
  flexDirection: "column",
  alignItems: "center",
  paddingHorizontal: "7xl max-md:4xl",
  backgroundColor: "surface",
  boxShadow: "lg"
});

const ArticlePageContentFrame = styled(View, {
  displayName: "ArticlePageContent",
  width: "100%",
  maxWidth: ARTICLE_PAGE_MAX_WIDTH,
  // Centers the article and its aside as a pair.
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10xl",
  paddingVertical: "14xl max-md:10xl"
});

const ArticlePageArticle = styled(View, {
  displayName: "ArticlePageArticle",
  render: "article",
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
  maxWidth: ARTICLE_PAGE_CONTENT_MAX_WIDTH,
  flexDirection: "column",
  gap: "10xl max-md:8xl"
});

const ArticlePageAside = styled(View, {
  displayName: "ArticlePageAside",
  render: "aside",
  // Follows the reader down the article.
  position: "sticky",
  top: "14xl",
  flexShrink: 0,
  width: ARTICLE_PAGE_ASIDE_WIDTH,
  flexDirection: "column",
  gap: "8xl",
  display: "none lg:flex"
});

// Matches the table of contents' own heading.
const ArticlePageAsideHeading = styled(View, {
  displayName: "ArticlePageAsideHeading",
  flexDirection: "row",
  alignItems: "center",
  gap: "3xl",
  minHeight: "7xl"
});

export interface ArticlePageContentExtraProps {
  /** Headings listed beside the article on screens 1024px and wider. */
  toc?: readonly TableOfContentsItem[];
  /** Shares the article from below the table of contents. */
  share?: ArticlePageShareExtraProps;
}

export type ArticlePageContentProps = GetProps<typeof ArticlePageContentFrame> &
  ArticlePageContentExtraProps;

/**
 * The article, beside a sticky aside with its table of contents and share
 * links on screens 1024px and wider.
 */
const ArticlePageContent = createStyledHOC(
  ArticlePageContentFrame,
  (
    { children, toc = [], share, ...props }: ArticlePageContentProps,
    forwardedRef
  ) => (
    <ArticlePageContentFrame ref={forwardedRef} {...props}>
      <ArticlePageArticle>{children}</ArticlePageArticle>
      {toc.length > 0 || share ? (
        <ArticlePageAside>
          {toc.length > 0 ? <TableOfContents items={toc} /> : null}
          {share ? (
            <View gap="md">
              <ArticlePageAsideHeading>
                <ShareNetwork aria-hidden={true} color="subtle" size="5xl" />
                <BodyText render="span" color="subtle" fontWeight="medium">
                  Share
                </BodyText>
              </ArticlePageAsideHeading>
              <ArticlePageShare {...share} />
            </View>
          ) : null}
        </ArticlePageAside>
      ) : null}
    </ArticlePageContentFrame>
  ),
  { displayName: "ArticlePageContent" }
);

const ArticlePageSection = styled(View, {
  displayName: "ArticlePageSection",
  render: "section",
  width: "100%",
  maxWidth: ARTICLE_PAGE_MAX_WIDTH,
  flexDirection: "column",
  gap: "5xl",
  paddingVertical: "12xl max-md:10xl",
  borderTopWidth: 2,
  borderTopColor: "hairline"
});

/**
 * A blog or documentation article. Compose its areas as direct children:
 *
 * - `ArticlePage.Header`: the article's metadata on its own background. It
 *   stays in place while `Main` scrolls up over it. Holds a `Media` frame for
 *   the cover image and a `Details` row for the byline, `Share` links and
 *   tags.
 * - `ArticlePage.Main`: the sheet that covers the header, holding the article
 *   `Content` (with a sticky table of contents and share links beside it) and
 *   any `Section`s after it, such as feedback and recommendations.
 *
 * Place the page footer after `Main`.
 */
export const ArticlePage = withStaticProperties(ArticlePageFrame, {
  Header: ArticlePageHeader,
  Media: ArticlePageMedia,
  Details: ArticlePageDetails,
  Share: ArticlePageShare,
  Main: ArticlePageMain,
  Content: ArticlePageContent,
  Section: ArticlePageSection
});
