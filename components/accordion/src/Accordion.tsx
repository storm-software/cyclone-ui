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

export type AccordionVariant =
  | "default"
  | "surface"
  | "separated"
  | "bordered"
  | "ghost";

export interface AccordionContextProps {
  open: string[];
  setOpen: (open: string[]) => void;
  variant: AccordionVariant;
}

export const AccordionContext = createStyledContext<AccordionContextProps>({
  open: [],
  setOpen: (_open: string[]) => {},
  variant: "default"
});

const AccordionGroup = styled(YGroup, {
  name: "AccordionGroup",
  context: AccordionContext,

  width: "100%",
  borderRadius: "$true",
  borderWidth: 0,
  borderColor: "transparent",
  backgroundColor: "transparent",

  variants: {
    variant: {
      default: {},
      surface: {
        borderWidth: 1,
        borderColor: "$borderPrimary",
        backgroundColor: "$background"
      },
      separated: {
        gap: "$lg",
        overflow: "visible",
        borderRadius: 0
      },
      bordered: {
        gap: "$lg",
        overflow: "visible",
        borderRadius: 0
      },
      ghost: {}
    }
  } as const
});

// eslint-disable-next-line react-refresh/only-export-components
const AccordionFrameImpl = forwardRef<
  TamaguiElement,
  Partial<BaseAccordionProps> & { variant?: AccordionVariant }
>(
  (
    {
      children,
      type = "multiple",
      variant = "default",
      onValueChange,
      ...props
    },
    forwardedRef
  ) => {
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
      [onValueChange]
    );

    return (
      <AccordionContext.Provider
        open={open}
        setOpen={setOpen}
        variant={variant}>
        <TamaguiAccordion
          ref={forwardedRef}
          type={type}
          unstyled
          {...props}
          borderRadius="$true"
          width="100%"
          onValueChange={handleValueChange}>
          <AccordionGroup variant={variant}>
            {children}
          </AccordionGroup>
        </TamaguiAccordion>
      </AccordionContext.Provider>
    );
  }
);

export interface AccordionItemContextProps {
  open: boolean;
}

export const AccordionItemContext =
  createStyledContext<AccordionItemContextProps>({
    open: false
  });

const AccordionItem = styled(TamaguiAccordion.Item, {
  name: "Accordion",
  context: AccordionContext,
  unstyled: true,

  overflow: "hidden",

  variants: {
    variant: {
      default: {
        borderBottomWidth: 1,
        borderBottomColor: "$borderPrimary",

        hoverStyle: {
          borderBottomColor: "$borderPrimaryHover"
        }
      },
      surface: {
        borderBottomWidth: 1,
        borderBottomColor: "$borderPrimary",

        hoverStyle: {
          borderBottomColor: "$borderPrimaryHover"
        }
      },
      separated: {
        borderRadius: "$true",
        borderWidth: 1,
        borderColor: "$borderPrimary",
        backgroundColor: "$backgroundElevated"
      },
      bordered: {
        borderRadius: "$true",
        borderWidth: 1,
        borderColor: "$borderPrimary",
        backgroundColor: "transparent"
      },
      ghost: {
        borderWidth: 0,
        backgroundColor: "transparent"
      }
    }
  } as const
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
  context: AccordionContext,

  transition: "medium",
  padding: "$3xl",
  zIndex: "$60",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "transparent",

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$lg"
  },

  variants: {
    variant: {
      default: {
        backgroundColor: "$backgroundElevated",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover"
        }
      },
      surface: {
        backgroundColor: "$background",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover"
        }
      },
      separated: {
        backgroundColor: "$backgroundElevated",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover"
        }
      },
      bordered: {
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover"
        }
      },
      ghost: {
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "default"
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
  context: AccordionContext,

  zIndex: "$50",

  variants: {
    variant: {
      default: {
        backgroundColor: "$backgroundElevated"
      },
      surface: {
        padding: "$3xl",
        paddingTop: 0,
        backgroundColor: "$background"
      },
      separated: {
        padding: "$3xl",
        paddingTop: 0,
        backgroundColor: "$backgroundElevated"
      },
      bordered: {
        padding: "$3xl",
        paddingTop: 0,
        backgroundColor: "transparent"
      },
      ghost: {
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    variant: "default"
  }
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
