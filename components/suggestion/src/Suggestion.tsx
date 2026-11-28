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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { ScrollView } from "@cyclone-ui/scroll-view";
import { isWeb } from "@tamagui/constants";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View, withStaticProperties } from "@tamagui/core";
import { forwardRef } from "react";

// The `ring-offset` focus ring's outer edge. The scroller clips its overflow,
// so the row is padded by this much and the scroller pulled back out, keeping
// the pills where they were.
const RING_INSET = 7;

// Fades the edge that has more to scroll to, over 32px: scroll-driven
// animations widen each fade with the scroll position. Without them (or
// without overflow) there is no fade. `black` is the mask's opacity, not a
// color.
const FADE_STYLES = `
@property --cyclone-suggestions-start { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --cyclone-suggestions-end { syntax: "<length>"; inherits: false; initial-value: 0px; }
@keyframes cyclone-suggestions-start { from { --cyclone-suggestions-start: 0px; } 10%, to { --cyclone-suggestions-start: 32px; } }
@keyframes cyclone-suggestions-end { from, 90% { --cyclone-suggestions-end: 32px; } to { --cyclone-suggestions-end: 0px; } }
.cyclone-suggestions {
  mask-image: linear-gradient(to right, transparent, black var(--cyclone-suggestions-start), black calc(100% - var(--cyclone-suggestions-end)), transparent);
  animation: cyclone-suggestions-start linear both, cyclone-suggestions-end linear both;
  animation-timeline: scroll(self inline);
}
`;

export type SuggestionsProps = ViewProps;

/**
 * A row of suggestions on one line. It fills its parent's width and scrolls
 * sideways when they don't fit, fading the edge that has more to show. Props
 * go to the row.
 */
const SuggestionsRoot = forwardRef<TamaguiElement, SuggestionsProps>(
  ({ children, ...props }, forwardedRef) => (
    <ScrollView
      horizontal={true}
      className="cyclone-suggestions"
      alignSelf="stretch"
      width="auto"
      margin={-RING_INSET}
      // ScrollView reserves a vertical scrollbar's gutter, which a row
      // never has.
      style={{ scrollbarGutter: "auto" }}>
      {isWeb && <style>{FADE_STYLES}</style>}
      <View
        ref={forwardedRef}
        flexDirection="row"
        alignItems="center"
        gap="xl"
        padding={RING_INSET}
        {...props}>
        {children}
      </View>
    </ScrollView>
  )
);

SuggestionsRoot.displayName = "Suggestions";

export interface SuggestionProps extends Omit<ButtonProps, "onClick"> {
  /** The prompt to send. It is also the label, unless `children` are set. */
  suggestion: string;
  /** Called with `suggestion` when the suggestion is pressed. */
  onClick?: (suggestion: string) => void;
}

/** A pill that sends its `suggestion` when pressed, through `onClick`. */
const Suggestion = forwardRef<TamaguiElement, SuggestionProps>(
  (
    { suggestion, onClick, onPress, children = suggestion, ...props },
    forwardedRef
  ) => (
    <Button
      ref={forwardedRef}
      size="sm"
      rounded={true}
      flexShrink={0}
      {...props}
      onPress={event => {
        onPress?.(event);
        onClick?.(suggestion);
      }}>
      {typeof children === "string" ? (
        <Button.Text>{children}</Button.Text>
      ) : (
        children
      )}
    </Button>
  )
);

Suggestion.displayName = "Suggestion";

export const Suggestions = withStaticProperties(SuggestionsRoot, {
  Item: Suggestion
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Suggestions.Item` is undefined on the server).
 */
export { Suggestion };
