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
import type { TableOfContentsItem } from "@cyclone-ui/table-of-contents";
import {
  useActiveTableOfContentsItem,
  usePrefersReducedMotion
} from "@cyclone-ui/table-of-contents";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  createStyledHOC,
  isWeb,
  styled,
  useIsomorphicLayoutEffect,
  View
} from "@tamagui/core";
import { useEffect, useRef, useState } from "react";

const LINK_HEIGHT = 32;
const DOT_SIZE = 5;
/** How far the active label moves right to make room for the dot. */
const LABEL_SHIFT = 12;
/** Room kept beside the active link when the strip scrolls it into view. */
const EDGE = 24;
const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

// Inside `backgroundImage`, since Tamagui parses color-mix() words in
// `backgroundColor` as tokens.
const translucentCanvas = "color-mix(in oklab, var(--canvas) 82%, transparent)";
const opaque = "rgb(0 0 0)";
const clear = "rgb(0 0 0 / 0)";

const ArticleProgressHeaderFrame = styled(View, {
  displayName: "ArticleProgressHeader",
  render: "nav",
  position: "sticky",
  top: 0,
  zIndex: "30",
  width: "100%",
  backgroundImage: `linear-gradient(${translucentCanvas}, ${translucentCanvas})`,
  backdropFilter: "blur(12px)"
});

// Masked separately from the frame, so the fades don't cut into the blur.
const ArticleProgressHeaderScroller = styled(View, {
  displayName: "ArticleProgressHeaderScroller",
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden"
});

const ArticleProgressHeaderTrack = styled(View, {
  displayName: "ArticleProgressHeaderTrack",
  position: "relative",
  width: "max-content",
  paddingHorizontal: "7xl max-md:4xl",
  paddingVertical: "xl"
});

const ArticleProgressHeaderList = styled(View, {
  render: "ul",
  flexDirection: "row",
  gap: "xl",
  margin: 0,
  padding: 0
});

const ArticleProgressHeaderLink = styled(View, {
  displayName: "ArticleProgressHeaderLink",
  render: "a",
  group: "articleProgressHeaderLink",
  flexDirection: "row",
  alignItems: "center",
  height: LINK_HEIGHT,
  paddingHorizontal: "2xl",
  borderRadius: "md",
  cursor: "pointer",
  outlineWidth: "focus-visible:0px",
  boxShadow: "focus-visible:ring-subtle"
});

const ArticleProgressHeaderLabel = styled(BodyText, {
  render: "span",
  size: "sm",
  fontWeight: "normal",
  whiteSpace: "nowrap",
  transition: "color 200ms ease-out",
  color:
    "primary-inactive group-hover/articleProgressHeaderLink:primary-hovered",

  variants: {
    active: {
      true: {
        color: "primary"
      }
    }
  } as const
});

export interface ArticleProgressHeaderExtraProps {
  /** The article's sections in document order; each `url` is a hash link. */
  items: readonly TableOfContentsItem[];
}

export type ArticleProgressHeaderProps = GetProps<
  typeof ArticleProgressHeaderFrame
> &
  ArticleProgressHeaderExtraProps;

/**
 * A sticky, horizontally scrolling strip of an article's section links. A dot
 * slides to the section the reader is in, the strip keeps that link in view and
 * its edges fade while there is more to scroll to. Set `top` to the height of
 * any fixed header above it.
 */
export const ArticleProgressHeader = createStyledHOC(
  ArticleProgressHeaderFrame,
  (
    {
      items,
      "aria-label": ariaLabel = "On this page",
      ...props
    }: ArticleProgressHeaderProps,
    forwardedRef
  ) => {
    const { activeUrl } = useActiveTableOfContentsItem(items);
    const prefersReducedMotion = usePrefersReducedMotion();
    // A pressed link stays current while the page scrolls to its section,
    // so the dot doesn't stop at every section on the way.
    const [pressedUrl, setPressedUrl] = useState<string>();
    const currentUrl = pressedUrl ?? activeUrl;
    // Transitions start after the dot's first placement, so it doesn't
    // slide in from the corner.
    const [live, setLive] = useState(false);
    const [overflow, setOverflow] = useState({ start: false, end: false });
    const scrollerRef = useRef<TamaguiElement>(null);
    const trackRef = useRef<TamaguiElement>(null);
    const dotRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (!isWeb || !pressedUrl) return;

      const release = () => setPressedUrl(undefined);
      // Waits for the scroll to settle; no scroll at all releases sooner.
      let timer = setTimeout(release, 1000);
      const onScroll = () => {
        clearTimeout(timer);
        timer = setTimeout(release, 200);
      };

      addEventListener("scroll", onScroll, true);
      return () => {
        clearTimeout(timer);
        removeEventListener("scroll", onScroll, true);
      };
    }, [pressedUrl]);

    // Edge fades.
    useEffect(() => {
      const scroller = scrollerRef.current as unknown as HTMLElement | null;
      if (!isWeb || !scroller) return;

      const update = () => {
        const start = scroller.scrollLeft > 1;
        const end =
          scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 1;

        setOverflow(current =>
          current.start === start && current.end === end
            ? current
            : { start, end }
        );
      };
      const observer = new ResizeObserver(update);

      update();
      scroller.addEventListener("scroll", update, { passive: true });
      observer.observe(scroller);
      return () => {
        scroller.removeEventListener("scroll", update);
        observer.disconnect();
      };
    }, []);

    // Moves the dot onto the current link, and again when the links resize
    // (for example when the font loads). Written to the DOM directly, since a
    // re-render per resize would restart the transition.
    useIsomorphicLayoutEffect(() => {
      const track = trackRef.current as unknown as HTMLElement | null;
      const dot = dotRef.current;
      if (!isWeb || !track || !dot) return;

      let frame = 0;
      const place = () => {
        const link = track.querySelector<HTMLElement>("a[aria-current]");
        if (!link) return;

        const trackRect = track.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        const paddingLeft = Number.parseFloat(
          getComputedStyle(link).paddingLeft
        );

        dot.style.translate = `${linkRect.left - trackRect.left + paddingLeft}px ${
          linkRect.top - trackRect.top + (linkRect.height - DOT_SIZE) / 2
        }px`;
      };
      const observer = new ResizeObserver(place);

      place();
      observer.observe(track);
      if (!live) {
        // Two frames, so the first position paints before transitions start.
        frame = requestAnimationFrame(() => {
          frame = requestAnimationFrame(() => setLive(true));
        });
      }

      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
      };
    }, [currentUrl, live]);

    // Keeps the current link in view.
    useEffect(() => {
      const scroller = scrollerRef.current as unknown as HTMLElement | null;
      const link = scroller?.querySelector("a[aria-current]");
      if (!isWeb || !scroller || !link || !scroller.clientWidth) return;

      const scrollerRect = scroller.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      const behavior = prefersReducedMotion || !live ? "auto" : "smooth";

      if (linkRect.left - EDGE < scrollerRect.left) {
        scroller.scrollTo({
          left: scroller.scrollLeft + linkRect.left - EDGE - scrollerRect.left,
          behavior
        });
      } else if (linkRect.right + EDGE > scrollerRect.right) {
        scroller.scrollTo({
          left:
            scroller.scrollLeft + linkRect.right + EDGE - scrollerRect.right,
          behavior
        });
      }
    }, [currentUrl, live, prefersReducedMotion]);

    if (items.length === 0) return null;

    const animate = live && !prefersReducedMotion;
    const maskImage =
      overflow.start && overflow.end
        ? `linear-gradient(90deg, ${clear}, ${opaque} ${EDGE}px calc(100% - ${EDGE}px), ${clear})`
        : overflow.start
          ? `linear-gradient(90deg, ${clear}, ${opaque} ${EDGE}px)`
          : overflow.end
            ? `linear-gradient(90deg, ${opaque} calc(100% - ${EDGE}px), ${clear})`
            : undefined;

    return (
      <ArticleProgressHeaderFrame
        ref={forwardedRef}
        aria-label={ariaLabel}
        {...props}>
        <ArticleProgressHeaderScroller
          ref={scrollerRef}
          style={{ scrollbarWidth: "none", maskImage }}>
          <ArticleProgressHeaderTrack ref={trackRef}>
            <ArticleProgressHeaderList style={{ listStyle: "none" }}>
              {items.map((item, index) => {
                const current = item.url === currentUrl;

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <View key={`${item.url}-${index}`} render="li">
                    <ArticleProgressHeaderLink
                      {...({ href: item.url } as object)}
                      aria-current={current ? "location" : undefined}
                      style={{ textDecoration: "none" }}
                      onPress={() => setPressedUrl(item.url)}>
                      <ArticleProgressHeaderLabel active={current}>
                        {isWeb ? (
                          // A DOM span: Tamagui drops a CSS `transition`
                          // passed in `style`.
                          <span
                            style={{
                              display: "inline-block",
                              transform: `translateX(${current ? LABEL_SHIFT : 0}px)`,
                              transition: animate
                                ? current
                                  ? `transform 300ms ${EASE_OUT} 160ms`
                                  : `transform 250ms ${EASE_OUT}`
                                : "none"
                            }}>
                            {item.title}
                          </span>
                        ) : (
                          item.title
                        )}
                      </ArticleProgressHeaderLabel>
                    </ArticleProgressHeaderLink>
                  </View>
                );
              })}
            </ArticleProgressHeaderList>

            {isWeb ? (
              <span
                ref={dotRef}
                aria-hidden={true}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: DOT_SIZE,
                  height: DOT_SIZE,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  pointerEvents: "none",
                  // Shown once it has been placed on the current link.
                  opacity: live ? 1 : 0,
                  transition: animate ? `translate 350ms ${EASE_OUT}` : "none"
                }}
              />
            ) : null}
          </ArticleProgressHeaderTrack>
        </ArticleProgressHeaderScroller>
      </ArticleProgressHeaderFrame>
    );
  },
  { displayName: "ArticleProgressHeader" }
);
