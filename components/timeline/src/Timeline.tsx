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

import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { ReactElement, ReactNode, Ref } from "react";
import { forwardRef } from "react";

export type TimelineLayout = "vertical" | "horizontal";

/**
 * Where the line sits relative to the content: `left` / `right` for a
 * vertical timeline, `top` / `bottom` for a horizontal one, or `alternate`
 * to switch sides on every event.
 */
export type TimelineAlign = "left" | "right" | "top" | "bottom" | "alternate";

export interface TimelineProps<T> extends Omit<ViewProps, "children"> {
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

/** The default event marker: a ring on the line. Restyle it in `marker`. */
export const TimelineMarker = styled(View, {
  name: "TimelineMarker",
  width: 16,
  height: 16,
  flexShrink: 0,
  borderRadius: "full",
  borderWidth: 2,
  borderColor: "inkSubtle",
  backgroundColor: "inkSubtle"
});

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
      ...props
    }: TimelineProps<T>,
    forwardedRef: Ref<TamaguiElement>
  ) => {
    const vertical = layout === "vertical";
    // An alternating timeline keeps the line centered even without `opposite`.
    const showOpposite = !!opposite || align === "alternate";

    return (
      <View
        ref={forwardedRef}
        role="list"
        flexDirection={vertical ? "column" : "row"}
        {...props}>
        {value.map((item, index) => {
          const last = index === value.length - 1;
          const reversed =
            align === "right" ||
            align === "bottom" ||
            (align === "alternate" && index % 2 === 1);
          // Vertical events on the left of the line hug it.
          const sideAlign = vertical && reversed ? "flex-end" : "flex-start";
          const oppositeAlign =
            vertical && !reversed ? "flex-end" : "flex-start";
          // The spacing between events, on the side away from the next marker.
          const spacing = last
            ? undefined
            : vertical
              ? { paddingBottom: "7xl" as const }
              : { paddingRight: "7xl" as const };

          return (
            <View
              key={index}
              role="listitem"
              flexDirection={
                vertical
                  ? reversed
                    ? "row-reverse"
                    : "row"
                  : reversed
                    ? "column-reverse"
                    : "column"
              }
              flex={vertical || last ? undefined : 1}
              gap="4xl">
              {showOpposite && (
                <View flex={1} alignItems={oppositeAlign} {...spacing}>
                  {opposite?.(item, index)}
                </View>
              )}
              <View
                flexDirection={vertical ? "column" : "row"}
                alignItems="center">
                {marker ? marker(item, index) : <TimelineMarker />}
                {!last && (
                  <View
                    flex={1}
                    backgroundColor="hairline"
                    {...(vertical
                      ? { width: 2, marginVertical: "xl" as const }
                      : { height: 2, marginHorizontal: "xl" as const })}
                  />
                )}
              </View>
              <View flex={1} alignItems={sideAlign} {...spacing}>
                {content(item, index)}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
) as <T>(
  props: TimelineProps<T> & { ref?: Ref<TamaguiElement> }
) => ReactElement;
