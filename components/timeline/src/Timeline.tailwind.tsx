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

// The `@tamagui/tailwind` variant of Timeline.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  Ref
} from "react";
import { forwardRef } from "react";

export type TimelineLayout = "vertical" | "horizontal";

/**
 * Where the line sits relative to the content: `left` / `right` for a
 * vertical timeline, `top` / `bottom` for a horizontal one, or `alternate`
 * to switch sides on every event.
 */
export type TimelineAlign = "left" | "right" | "top" | "bottom" | "alternate";

export interface TimelineProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof View>,
  "children"
> {
  /** The events to display, in order. */
  value: readonly T[];
  /** Renders an event's main content. */
  content: (item: T, index: number) => ReactNode;
  /** Renders content on the other side of the line, such as a date. */
  opposite?: (item: T, index: number) => ReactNode;
  /** Renders an event's marker. Defaults to `TimelineMarker`. */
  marker?: (item: T, index: number) => ReactNode;
  /** The direction the events run in. */
  layout?: TimelineLayout;
  /** Defaults to `left` (vertical) or `top` (horizontal). */
  align?: TimelineAlign;
}

// Cyclone defines no border width tokens, so `border-2` would stay an unstyled
// class; use a px value. Without Tailwind's preflight a border also needs
// `border-solid`.
/** The default event marker: a ring on the line. Restyle it in `marker`. */
export const TimelineMarker = styled(
  View,
  "size-[16px] shrink-0 rounded-full border-[2px] border-solid border-subtle bg-subtle",
  { displayName: "TimelineMarker" }
);

/** A list of events connected by a line, vertically or horizontally. */
export const Timeline = forwardRef(
  <T,>(
    {
      value,
      content,
      opposite,
      marker,
      layout = "vertical",
      align = layout === "vertical" ? "left" : "top",
      className,
      ...props
    }: TimelineProps<T>,
    forwardedRef: Ref<TailwindViewElement>
  ) => {
    const vertical = layout === "vertical";
    // An alternating timeline keeps the line centered even without `opposite`.
    const showOpposite = !!opposite || align === "alternate";

    return (
      <View
        ref={forwardedRef}
        role="list"
        className={`${vertical ? "flex-col" : "flex-row"} ${className ?? ""}`}
        {...props}>
        {value.map((item, index) => {
          const last = index === value.length - 1;
          const reversed =
            align === "right" ||
            align === "bottom" ||
            (align === "alternate" && index % 2 === 1);
          // Vertical events on the left of the line hug it.
          const sideAlign = vertical && reversed ? "items-end" : "items-start";
          const oppositeAlign =
            vertical && !reversed ? "items-end" : "items-start";
          // The spacing between events, on the side away from the next marker.
          const spacing = last ? "" : vertical ? "pb-7xl" : "pr-7xl";
          const direction = vertical
            ? reversed
              ? "flex-row-reverse"
              : "flex-row"
            : reversed
              ? "flex-col-reverse"
              : "flex-col";

          return (
            <View
              key={index}
              role="listitem"
              className={`${direction} gap-4xl ${vertical || last ? "" : "flex-1"}`}>
              {showOpposite && (
                <View className={`flex-1 ${oppositeAlign} ${spacing}`}>
                  {opposite?.(item, index)}
                </View>
              )}
              <View
                className={`${vertical ? "flex-col" : "flex-row"} items-center`}>
                {marker ? marker(item, index) : <TimelineMarker />}
                {!last && (
                  <View
                    className={`flex-1 bg-outline ${vertical ? "my-xl w-[2px]" : "mx-xl h-[2px]"}`}
                  />
                )}
              </View>
              <View className={`flex-1 ${sideAlign} ${spacing}`}>
                {content(item, index)}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
) as <T>(
  props: TimelineProps<T> & { ref?: Ref<TailwindViewElement> }
) => ReactElement;
