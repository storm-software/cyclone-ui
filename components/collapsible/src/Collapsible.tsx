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

import type {
  AccordionItemContentProps,
  AccordionItemHeaderProps,
  AccordionVariant
} from "@cyclone-ui/accordion";
import { Accordion } from "@cyclone-ui/accordion";
import type { AccordionSingleProps } from "@tamagui/accordion";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import type { ReactNode } from "react";
import { forwardRef } from "react";

const DEFAULT_ITEM_VALUE = "collapsible";

/**
 * A single-item Accordion. Use `itemValue` when controlling the expanded
 * state with `value`, `defaultValue`, or `onValueChange`.
 */
export type CollapsibleProps = Omit<
  AccordionSingleProps,
  "children" | "collapsible" | "type"
> & {
  children?: ReactNode;
  itemValue?: string;
  numbered?: boolean;
  variant?: AccordionVariant;
};

const CollapsibleFrame = forwardRef<TamaguiElement, CollapsibleProps>(
  ({ children, itemValue = DEFAULT_ITEM_VALUE, ...props }, forwardedRef) => {
    return (
      <Accordion
        ref={forwardedRef}
        icon="chevron"
        {...(props as any)}
        collapsible
        single
        type="single">
        <Accordion.Item value={itemValue}>{children}</Accordion.Item>
      </Accordion>
    );
  }
);

export type CollapsibleHeaderProps = AccordionItemHeaderProps;
export type CollapsibleContentProps = AccordionItemContentProps;

export const Collapsible = withStaticProperties(CollapsibleFrame, {
  Header: Accordion.Item.Header,
  Content: Accordion.Item.Content
});
