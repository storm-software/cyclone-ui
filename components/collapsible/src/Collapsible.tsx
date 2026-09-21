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
  AccordionProps
} from "@cyclone-ui/accordion";
import { Accordion } from "@cyclone-ui/accordion";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import type { ReactNode } from "react";
import { forwardRef } from "react";

const DEFAULT_ITEM_VALUE = "collapsible";

export type CollapsibleProps = Omit<
  AccordionProps,
  "children" | "value" | "defaultValue" | "collapsible" | "type"
> & {
  children?: ReactNode;
  value?: boolean;
  defaultValue?: boolean;
};

const CollapsibleFrame = forwardRef<TamaguiElement, CollapsibleProps>(
  ({ children, value, defaultValue, ...props }, forwardedRef) => {
    return (
      <Accordion
        ref={forwardedRef}
        icon="chevron"
        {...(props as any)}
        collapsible={true}
        single={true}
        type="single"
        value={value ? DEFAULT_ITEM_VALUE : undefined}
        defaultValue={defaultValue ? DEFAULT_ITEM_VALUE : undefined}>
        <Accordion.Item value={DEFAULT_ITEM_VALUE}>{children}</Accordion.Item>
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
