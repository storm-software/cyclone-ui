/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Heading6Text } from "@cyclone-ui/heading-text";
import { AccordionToggle } from "@cyclone-ui/vectors";
import { isString } from "@storm-stack/types/type-checks/is-string";
import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Accordion as TamaguiAccordion
} from "@tamagui/accordion";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { createStyledContext, styled } from "@tamagui/core";
import { YGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { Separator } from "@tamagui/separator";
import { forwardRef, useCallback, useState } from "react";

type BaseAccordionProps = AccordionSingleProps | AccordionMultipleProps;

export type AccordionContextProps = {
  open: string[];
  setOpen: (open: string[]) => void;
};

export const AccordionContext = createStyledContext<AccordionContextProps>({
  open: [],
  setOpen: (open: string[]) => {}
});

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
    <AccordionContext.Provider open={open} setOpen={setOpen}>
      <TamaguiAccordion
        ref={forwardedRef}
        type={type}
        {...props}
        borderRadius="$true"
        onValueChange={handleValueChange}>
        <YGroup separator={<Separator color="$borderColor" />}>
          {children}
        </YGroup>
      </TamaguiAccordion>
    </AccordionContext.Provider>
  );
});

export type AccordionItemContextProps = {
  open: boolean;
};

export const AccordionItemContext =
  createStyledContext<AccordionItemContextProps>({
    open: false
  });

const AccordionItem = styled(TamaguiAccordion.Item, {
  name: "Accordion",
  context: AccordionItemContext
});

const AccordionItemImpl = AccordionItem.styleable(
  ({ children, value, ...props }, forwardedRef) => {
    const { open } = AccordionContext.useStyledContext();

    return (
      <YGroup.Item>
        <AccordionItemContext.Provider open={open.includes(value)}>
          <AccordionItem
            ref={forwardedRef}
            key={value}
            value={value}
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

  animation: "normal",
  padding: "$3",
  backgroundColor: "$background",
  zIndex: "$6",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "transparent",

  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },

  focusStyle: {
    backgroundColor: "unset"
  },

  pressStyle: {
    backgroundColor: "unset"
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundHover",
    outlineColor: "$accent10",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$1.25"
  },

  variants: {
    open: {
      true: {
        backgroundColor: "$backgroundFocus",

        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },

        focusStyle: {
          backgroundColor: "unset"
        },

        pressStyle: {
          backgroundColor: "unset"
        }
      }
    }
  } as const,

  defaultVariants: {
    open: false
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
        {...props}>
        {children}
        <AccordionToggle
          isExpanded={open}
          color={open ? "$primary" : "$secondary"}
          $group-accordion-hover={{
            color: "$primary"
          }}
          size="$2.5"
        />
      </AccordionItemHeader>
    );
  },
  {
    staticConfig: { componentName: "AccordionHeader" }
  }
);

const AccordionItemHeaderHeading = Heading6Text.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { open } = AccordionItemContext.useStyledContext();

    return (
      <Heading6Text
        ref={forwardedRef}
        animation="normal"
        color={open ? "$primary" : "$secondary"}
        $group-accordion-hover={{
          color: "$primary"
        }}
        {...props}>
        {children}
      </Heading6Text>
    );
  },
  {
    staticConfig: { componentName: "AccordionHeader" }
  }
);

const AccordionItemContent = styled(TamaguiAccordion.Content, {
  name: "AccordionContent",
  context: AccordionItemContext,

  zIndex: "$5"
});

const AccordionItemContentImpl = AccordionItemContent.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiAccordion.HeightAnimator animation="normal">
        <AccordionItemContent
          ref={forwardedRef}
          animation="normal"
          exitStyle={{ opacity: 0 }}
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
