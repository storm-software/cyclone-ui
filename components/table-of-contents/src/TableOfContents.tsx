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

import { BodyText } from "@cyclone-ui/body-text";
import type { GetProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { List } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Platform } from "react-native";

const ITEM_HEIGHT = 48;
const LEVEL_INDENT = 16;
const RAIL_LEFT = 9;
const LABEL_GAP = 24;
const RAIL_CURVE_RADIUS = 8;
const ACTIVE_MARKER_SIZE = 7;
const MOTION_DURATION = 240;
const MOTION_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

interface BrowserElement {
  getBoundingClientRect: () => { top: number };
}

interface BrowserMediaQuery {
  matches: boolean;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
}

interface BrowserWindow {
  innerHeight: number;
  matchMedia: (query: string) => BrowserMediaQuery;
  requestAnimationFrame: (callback: () => void) => number;
  cancelAnimationFrame: (frame: number) => void;
  addEventListener: (
    type: "scroll" | "resize" | "hashchange",
    listener: () => void,
    options?: boolean | { passive?: boolean }
  ) => void;
  removeEventListener: (
    type: "scroll" | "resize" | "hashchange",
    listener: () => void,
    options?: boolean
  ) => void;
}

interface BrowserDocument {
  getElementById: (id: string) => BrowserElement | null;
}

interface Point {
  x: number;
  y: number;
}

interface RailGeometry {
  markerDistances: number[];
  path: string;
  points: Point[];
}

function getBrowserGlobals() {
  return globalThis as typeof globalThis & {
    window?: BrowserWindow;
    document?: BrowserDocument;
  };
}

export interface TableOfContentsItem {
  /** The label displayed for the heading. */
  title: ReactNode;
  /** A hash URL pointing to the heading, for example `#installation`. */
  url: string;
  /** The document heading level. */
  depth: number;
}

export interface TableOfContentsExtraProps {
  /** Headings in document order. */
  items: readonly TableOfContentsItem[];
  /** The title displayed above the links. */
  children?: ReactNode;
}

const TableOfContentsFrame = styled(YStack, {
  name: "TableOfContents",
  render: "nav",

  width: "100%",
  minWidth: 240,
  maxWidth: 360,
  gap: "$3xl"
});

const TableOfContentsHeading = styled(XStack, {
  alignItems: "center",
  gap: "$3xl",
  minHeight: "$7xl"
});

const TableOfContentsHeadingText = styled(BodyText, {
  render: "span",
  color: "$foregroundCaption",
  fontSize: "$lg",
  fontWeight: "$md"
});

const TableOfContentsItems = styled(View, {
  position: "relative",
  width: "100%"
});

const TableOfContentsList = styled(YStack, {
  render: "ol",

  position: "relative",
  margin: 0,
  padding: 0
});

const TableOfContentsListItem = styled(View, {
  render: "li",

  height: ITEM_HEIGHT,
  margin: 0,
  padding: 0
});

const TableOfContentsLinkFrame = styled(View, {
  name: "TableOfContentsLink",
  render: "a",

  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  paddingRight: "$2xl",
  borderRadius: "$xs",
  cursor: "pointer",

  focusStyle: {
    outlineWidth: 0,
    boxShadow: "$ringSubtle"
  }
});

const TableOfContentsLink = TableOfContentsLinkFrame.styleable<{
  href: string;
}>(({ href, style, ...props }, forwardedRef) => (
  <TableOfContentsLinkFrame
    ref={forwardedRef}
    {...props}
    {...({ href } as any)}
    style={[{ textDecoration: "none" }, style]}
  />
));

const TableOfContentsLinkText = styled(BodyText, {
  render: "span",
  transition: "color 160ms ease-out",
  color: "$foregroundInactive",
  fontSize: "$lg",
  fontWeight: "$normal",

  "$group-tableOfContentsItem-hover": {
    color: "$foregroundHover"
  },

  variants: {
    active: {
      true: {
        color: "$foreground"
      }
    },
    reducedMotion: {
      true: {
        transition: "none"
      }
    }
  } as const
});

const TableOfContentsRailLayer = styled(View, {
  position: "absolute",
  top: 0,
  left: 0,
  overflow: "hidden",
  pointerEvents: "none"
});

function getItemDepth(item: TableOfContentsItem) {
  return Number.isFinite(item.depth) ? item.depth : 0;
}

function getLineLength(start: Point, end: Point) {
  return Math.hypot(end.x - start.x, end.y - start.y);
}

function getCubicPoint(
  progress: number,
  start: Point,
  controlStart: Point,
  controlEnd: Point,
  end: Point
) {
  const remaining = 1 - progress;

  return {
    x:
      remaining ** 3 * start.x +
      3 * remaining ** 2 * progress * controlStart.x +
      3 * remaining * progress ** 2 * controlEnd.x +
      progress ** 3 * end.x,
    y:
      remaining ** 3 * start.y +
      3 * remaining ** 2 * progress * controlStart.y +
      3 * remaining * progress ** 2 * controlEnd.y +
      progress ** 3 * end.y
  };
}

function getCubicLength(
  start: Point,
  controlStart: Point,
  controlEnd: Point,
  end: Point
) {
  const steps = 16;
  let length = 0;
  let previous = start;

  for (let step = 1; step <= steps; step += 1) {
    const point = getCubicPoint(
      step / steps,
      start,
      controlStart,
      controlEnd,
      end
    );
    length += getLineLength(previous, point);
    previous = point;
  }

  return length;
}

function getRailGeometry(
  items: readonly TableOfContentsItem[],
  minDepth: number
): RailGeometry {
  const points = items.map((item, index) => ({
    x: RAIL_LEFT + (getItemDepth(item) - minDepth) * LEVEL_INDENT,
    y: (index + 0.5) * ITEM_HEIGHT
  }));
  const first = points[0];

  if (!first) return { markerDistances: [], path: "", points };

  let path = `M ${first.x} 0 L ${first.x} ${first.y}`;
  let pathLength = first.y;
  const markerDistances = [pathLength];

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const point = points[index];

    if (!previous || !point) continue;

    if (previous.x === point.x) {
      path += ` L ${point.x} ${point.y}`;
      pathLength += getLineLength(previous, point);
      markerDistances.push(pathLength);
      continue;
    }

    const midpoint = (previous.y + point.y) / 2;
    const curveStart = {
      x: previous.x,
      y: midpoint - RAIL_CURVE_RADIUS
    };
    const controlStart = { x: previous.x, y: midpoint - 2 };
    const controlEnd = { x: point.x, y: midpoint + 2 };
    const curveEnd = { x: point.x, y: midpoint + RAIL_CURVE_RADIUS };
    path += ` L ${previous.x} ${midpoint - RAIL_CURVE_RADIUS}`;
    path += ` C ${previous.x} ${midpoint - 2}, ${point.x} ${midpoint + 2}, ${point.x} ${midpoint + RAIL_CURVE_RADIUS}`;
    path += ` L ${point.x} ${point.y}`;
    pathLength += getLineLength(previous, curveStart);
    pathLength += getCubicLength(
      curveStart,
      controlStart,
      controlEnd,
      curveEnd
    );
    pathLength += getLineLength(curveEnd, point);
    markerDistances.push(pathLength);
  }

  const last = points.at(-1);

  return {
    markerDistances,
    path: last ? `${path} L ${last.x} ${items.length * ITEM_HEIGHT}` : path,
    points
  };
}

function getHashId(url: string) {
  const hashIndex = url.indexOf("#");
  if (hashIndex < 0 || hashIndex === url.length - 1) return;

  try {
    return decodeURIComponent(url.slice(hashIndex + 1));
  } catch {
    return url.slice(hashIndex + 1);
  }
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const browserWindow = getBrowserGlobals().window;
    if (Platform.OS !== "web" || !browserWindow) return;

    const query = browserWindow.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function TableOfContentsRail({
  items,
  activeIndex,
  activeStartIndex,
  minDepth,
  prefersReducedMotion
}: {
  items: readonly TableOfContentsItem[];
  activeIndex: number;
  activeStartIndex: number;
  minDepth: number;
  prefersReducedMotion: boolean;
}) {
  const height = items.length * ITEM_HEIGHT;
  const maxDepth = Math.max(...items.map(getItemDepth));
  const width =
    RAIL_LEFT + (Math.max(minDepth, maxDepth) - minDepth) * LEVEL_INDENT + 2;
  const geometry = getRailGeometry(items, minDepth);
  const activeY = (activeIndex + 0.5) * ITEM_HEIGHT;
  const activeStartY =
    activeStartIndex === 0
      ? 0
      : activeStartIndex * ITEM_HEIGHT +
        (geometry.points[activeStartIndex - 1]?.x ===
        geometry.points[activeStartIndex]?.x
          ? 0
          : RAIL_CURVE_RADIUS);
  const railTransition = prefersReducedMotion
    ? "none"
    : `clip-path ${MOTION_DURATION}ms ${MOTION_EASING}`;
  const markerTransition = prefersReducedMotion
    ? "none"
    : `offset-distance ${MOTION_DURATION}ms ${MOTION_EASING}`;

  if (Platform.OS !== "web") {
    return (
      <TableOfContentsRailLayer
        aria-hidden={true}
        left={RAIL_LEFT}
        width={2}
        height={height}
        backgroundColor="$borderSubtle"
      />
    );
  }

  return (
    <TableOfContentsRailLayer
      aria-hidden={true}
      width={width + ACTIVE_MARKER_SIZE}
      height={height}>
      <svg
        aria-hidden="true"
        focusable="false"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}>
        <path
          d={geometry.path}
          fill="none"
          stroke="var(--borderSubtle)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <TableOfContentsRailLayer
        width={width}
        height={height}
        style={{
          clipPath: `polygon(0 ${activeStartY}px, 100% ${activeStartY}px, 100% ${activeY}px, 0 ${activeY}px)`,
          transition: railTransition
        }}>
        <svg
          aria-hidden="true"
          focusable="false"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}>
          <path
            d={geometry.path}
            fill="none"
            stroke="var(--foreground)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </TableOfContentsRailLayer>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: ACTIVE_MARKER_SIZE,
          height: ACTIVE_MARKER_SIZE,
          borderRadius: "50%",
          backgroundColor: "var(--foreground)",
          offsetPath: `path("${geometry.path}")`,
          offsetDistance: `${geometry.markerDistances[activeIndex] ?? 0}px`,
          offsetRotate: "0deg",
          transition: markerTransition
        }}
      />
    </TableOfContentsRailLayer>
  );
}

export const TableOfContents =
  TableOfContentsFrame.styleable<TableOfContentsExtraProps>(
    ({ items, children = "On this page", ...props }, forwardedRef) => {
      const [activeUrl, setActiveUrl] = useState(items[0]?.url ?? "");
      const prefersReducedMotion = usePrefersReducedMotion();
      const activeIndex = Math.max(
        0,
        items.findIndex(item => item.url === activeUrl)
      );
      const minDepth = items.length ? Math.min(...items.map(getItemDepth)) : 0;
      const activePathIndexes = useMemo(() => {
        const result = new Set([activeIndex]);
        const activeItem = items[activeIndex];
        let depth = activeItem ? getItemDepth(activeItem) : minDepth;

        for (let index = activeIndex - 1; index >= 0; index -= 1) {
          const item = items[index];
          if (item && getItemDepth(item) < depth) {
            result.add(index);
            depth = getItemDepth(item);
          }
        }

        return result;
      }, [activeIndex, items, minDepth]);
      const activeStartIndex = Math.min(...activePathIndexes);

      useEffect(() => {
        const { window: browserWindow, document: browserDocument } =
          getBrowserGlobals();
        if (
          Platform.OS !== "web" ||
          !browserWindow ||
          !browserDocument ||
          items.length === 0
        ) {
          return;
        }

        const targets = items.flatMap(item => {
          const id = getHashId(item.url);
          const element = id ? browserDocument.getElementById(id) : null;

          return element ? [{ element, url: item.url }] : [];
        });

        if (targets.length === 0) return;

        let frame = 0;
        const updateActiveItem = () => {
          frame = 0;
          const activationLine = Math.min(
            browserWindow.innerHeight * 0.35,
            180
          );
          let next = targets[0];

          for (const target of targets) {
            if (target.element.getBoundingClientRect().top <= activationLine) {
              next = target;
            } else {
              break;
            }
          }

          if (next) {
            setActiveUrl(current =>
              current === next.url ? current : next.url
            );
          }
        };
        const scheduleUpdate = () => {
          if (!frame) {
            frame = browserWindow.requestAnimationFrame(updateActiveItem);
          }
        };

        updateActiveItem();
        browserWindow.addEventListener("scroll", scheduleUpdate, true);
        browserWindow.addEventListener("resize", scheduleUpdate, {
          passive: true
        });
        browserWindow.addEventListener("hashchange", scheduleUpdate);

        return () => {
          browserWindow.cancelAnimationFrame(frame);
          browserWindow.removeEventListener("scroll", scheduleUpdate, true);
          browserWindow.removeEventListener("resize", scheduleUpdate);
          browserWindow.removeEventListener("hashchange", scheduleUpdate);
        };
      }, [items]);

      if (items.length === 0) return null;

      return (
        <TableOfContentsFrame
          ref={forwardedRef}
          aria-label="Table of contents"
          {...props}>
          <TableOfContentsHeading>
            <List
              aria-hidden={true}
              color="$foregroundCaption"
              size="$5xl"
              strokeWidth={2.2}
            />
            <TableOfContentsHeadingText>{children}</TableOfContentsHeadingText>
          </TableOfContentsHeading>

          <TableOfContentsItems>
            <TableOfContentsRail
              items={items}
              activeIndex={activeIndex}
              activeStartIndex={activeStartIndex}
              minDepth={minDepth}
              prefersReducedMotion={prefersReducedMotion}
            />

            <TableOfContentsList style={{ listStyle: "none" }}>
              {items.map((item, index) => {
                const depth = getItemDepth(item) - minDepth;
                const active = index === activeIndex;

                return (
                  <TableOfContentsListItem key={`${item.url}-${index}`}>
                    <TableOfContentsLink
                      group={"tableOfContentsItem" as any}
                      href={item.url}
                      aria-current={active ? "location" : undefined}
                      paddingLeft={RAIL_LEFT + depth * LEVEL_INDENT + LABEL_GAP}
                      onPress={() => setActiveUrl(item.url)}>
                      <TableOfContentsLinkText
                        active={activePathIndexes.has(index)}
                        reducedMotion={prefersReducedMotion}>
                        {item.title}
                      </TableOfContentsLinkText>
                    </TableOfContentsLink>
                  </TableOfContentsListItem>
                );
              })}
            </TableOfContentsList>
          </TableOfContentsItems>
        </TableOfContentsFrame>
      );
    },
    { staticConfig: { componentName: "TableOfContents" } }
  );

export type TableOfContentsProps = GetProps<typeof TableOfContents>;
