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

import { isString } from "@stryke/type-checks/is-string";
import type {
  AccordionMultipleProps,
  AccordionSingleProps
} from "@tamagui/accordion";
import { Accordion as TamaguiAccordion } from "@tamagui/accordion";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { createStyledContext, styled } from "@tamagui/core";
import { YGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { forwardRef, useCallback, useState } from "react";
import { HeadingSmallText } from "../../heading-text/src/HeadingText";
import { AccordionToggle } from "../../vectors/src/AccordionToggle";

type BaseAccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionContextProps {
  open: string[];
  setOpen: (open: string[]) => void;
}

export const AccordionContext = createStyledContext<AccordionContextProps>({
  open: [],
  setOpen: (_open: string[]) => {}
});

// eslint-disable-next-line react-refresh/only-export-components
const AccordionFrameImpl = forwardRef<
  TamaguiElement,
  Partial<BaseAccordionProps>
>(({ children, type = "multiple", onValueChange, ...props }, forwardedRef) => {
  const [open, setOpen] = useState<string[]>([]);

  const handleValueChange = useCallback(
    (next: string | string[]) => {
      if (isString(next)) {
        setOpen(prev =>
          prev.includes(next)
            ? prev.filter(item => item !== next)
            : [...prev, next]
        );
      } else {
        setOpen(next ?? []);
      }

      onValueChange?.(next as string & string[]);
    },
    [setOpen]
  );

  return (
    <>
      {}
      <AccordionContext.Provider open={open} setOpen={setOpen}>
        <TamaguiAccordion
          ref={forwardedRef}
          type={type}
          unstyled
          {...props}
          borderRadius="$true"
          onValueChange={handleValueChange}>
          <YGroup>{children}</YGroup>
        </TamaguiAccordion>
      </AccordionContext.Provider>
    </>
  );
});

export interface AccordionItemContextProps {
  open: boolean;
}

export const AccordionItemContext =
  createStyledContext<AccordionItemContextProps>({
    open: false
  });

const AccordionItem = styled(TamaguiAccordion.Item, {
  name: "Accordion",
  context: AccordionItemContext,
  unstyled: true,

  borderBottomWidth: 1,
  borderBottomColor: "$borderPrimary",

  hoverStyle: {
    borderBottomColor: "$borderPrimaryHover"
  }
});

const AccordionItemImpl = AccordionItem.styleable(
  ({ children, value, ...props }, forwardedRef) => {
    const { open } = AccordionContext.useStyledContext();

    return (
      <YGroup.Item>
        {}
        <AccordionItemContext.Provider open={open.includes(value)}>
          <AccordionItem
            ref={forwardedRef}
            key={value}
            value={value}
            unstyled
            {...props}>
            {children}
          </AccordionItem>
        </AccordionItemContext.Provider>
      </YGroup.Item>
    );
  }
);

const AccordionItemHeader = styled(TamaguiAccordion.Trigger, {
  name: "AccordionHeader",
  context: AccordionItemContext,

  transition: "medium",
  padding: "$3xl",
  backgroundColor: "$backgroundElevated",
  zIndex: "$60",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "transparent",

  hoverStyle: {
    backgroundColor: "$backgroundElevatedHover"
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundElevated",
    outlineColor: "$borderAccent",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$lg"
  }
});

const AccordionItemHeaderImpl = AccordionItemHeader.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { open } = AccordionItemContext.useStyledContext();

    return (
      <AccordionItemHeader
        group={"accordion" as any}
        ref={forwardedRef}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        unstyled
        {...props}>
        {children}
        <AccordionToggle
          isExpanded={open}
          color={open ? "$foregroundPrimary" : "$foregroundPrimaryHover"}
          size="$2xl"
          $group-accordion-hover={{
            color: "$foregroundPrimaryHover"
          }}
        />
      </AccordionItemHeader>
    );
  },
  {
    staticConfig: { componentName: "AccordionHeader" }
  }
);

const AccordionItemHeaderHeading = HeadingSmallText.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { open } = AccordionItemContext.useStyledContext();

    return (
      <HeadingSmallText
        ref={forwardedRef}
        transition="medium"
        color={open ? "$foregroundPrimary" : "$foregroundPrimaryHover"}
        hoverStyle={{
          color: "$foregroundPrimaryHover"
        }}
        $group-accordion-hover={{
          color: "$foregroundPrimaryHover"
        }}
        {...props}>
        {children}
      </HeadingSmallText>
    );
  },
  {
    staticConfig: { componentName: "AccordionHeader" }
  }
);

const AccordionItemContent = styled(TamaguiAccordion.Content, {
  name: "AccordionContent",
  context: AccordionItemContext,

  zIndex: "$50"
});

const AccordionItemContentImpl = AccordionItemContent.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiAccordion.HeightAnimator transition="medium">
        <AccordionItemContent
          ref={forwardedRef}
          transition="medium"
          exitStyle={{ opacity: 0 }}
          unstyled
          {...props}>
          {children}
        </AccordionItemContent>
      </TamaguiAccordion.HeightAnimator>
    );
  },
  {
    staticConfig: { componentName: "AccordionContent" }
  }
);

export type AccordionItemProps = GetProps<typeof AccordionItemImpl>;
export type AccordionItemHeaderProps = GetProps<typeof AccordionItemHeaderImpl>;
export type AccordionItemContentProps = GetProps<
  typeof AccordionItemContentImpl
>;

export const Accordion = withStaticProperties(AccordionFrameImpl, {
  Item: withStaticProperties(AccordionItemImpl, {
    Header: withStaticProperties(AccordionItemHeaderImpl, {
      Heading: AccordionItemHeaderHeading
    }),
    Content: AccordionItemContentImpl
  })
});

export type AccordionProps = GetProps<typeof Accordion>;
