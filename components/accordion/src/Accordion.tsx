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

import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { AccordionToggle } from "@cyclone-ui/vectors";
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
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useState
} from "react";

type BaseAccordionProps = AccordionSingleProps | AccordionMultipleProps;

export type AccordionVariant =
  "default" | "surface" | "separated" | "bordered" | "ghost";

export interface AccordionContextProps {
  open: string[];
  setOpen: (open: string[]) => void;
  variant: AccordionVariant;
  single: boolean;
}

export const AccordionContext = createStyledContext<AccordionContextProps>({
  open: [],
  setOpen: (_open: string[]) => {},
  variant: "default",
  single: false
});

const AccordionGroup = styled(YGroup, {
  name: "AccordionGroup",
  context: AccordionContext,

  width: "100%",
  borderRadius: "$container",
  borderWidth: 0,
  borderColor: "transparent",
  backgroundColor: "transparent",

  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: "$border",
        backgroundColor: "$backgroundElevated",
        paddingHorizontal: "$6xl",
        paddingVertical: "$lg",
        overflow: "hidden"
      },
      surface: {
        borderWidth: 1,
        borderColor: "$border",
        backgroundColor: "$backgroundPage",
        paddingHorizontal: "$6xl",
        paddingVertical: "$lg",
        overflow: "hidden"
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
  Partial<BaseAccordionProps> & {
    variant?: AccordionVariant;
    single?: boolean;
  }
>(
  (
    {
      children,
      type = "multiple",
      variant = "default",
      single = false,
      onValueChange,
      ...props
    },
    forwardedRef
  ) => {
    const isSingle = single || type === "single";
    const [open, setOpen] = useState<string[]>([]);

    const handleValueChange = useCallback(
      (next: string | string[]) => {
        if (isSingle) {
          const nextValue = isString(next) ? next : (next?.[0] ?? "");
          setOpen(nextValue ? [nextValue] : []);
        } else if (isString(next)) {
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
      [isSingle, onValueChange]
    );

    return (
      <AccordionContext.Provider
        open={open}
        setOpen={setOpen}
        variant={variant}
        single={isSingle}>
        <TamaguiAccordion
          ref={forwardedRef}
          type={isSingle ? "single" : "multiple"}
          theme="primary"
          unstyled
          {...props}
          borderRadius="$container"
          width="100%"
          onValueChange={handleValueChange}>
          <AccordionGroup variant={variant}>
            {
              // eslint-disable-next-line ts/promise-function-async
              Children.toArray(children).map((child, index, items) => {
                if (!isValidElement(child)) {
                  return child;
                }

                const isLast =
                  (variant === "default" || variant === "surface") &&
                  index === items.length - 1;

                // eslint-disable-next-line react/no-clone-element
                return cloneElement(child, { last: isLast } as never);
              })
            }
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
        borderBottomColor: "$border"
      },
      surface: {
        borderBottomWidth: 1,
        borderBottomColor: "$border"
      },
      separated: {
        borderRadius: "$container",
        borderWidth: 1,
        borderColor: "$border",
        backgroundColor: "$backgroundElevated"
      },
      bordered: {
        borderRadius: "$container",
        borderWidth: 1,
        borderColor: "$border",
        backgroundColor: "transparent"
      },
      ghost: {
        borderWidth: 0,
        backgroundColor: "transparent"
      }
    },
    last: {
      true: {
        borderBottomWidth: 0
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
            unstyled={true}
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

  transition: "250ms",
  paddingHorizontal: "$3xl",
  paddingVertical: "$2xl",
  zIndex: "$60",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "transparent",

  hoverStyle: {
    cursor: "pointer"
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$lg"
  },

  variants: {
    variant: {
      default: {
        paddingHorizontal: 0,
        backgroundColor: "$backgroundElevated"
      },
      surface: {
        paddingHorizontal: 0,
        backgroundColor: "$backgroundPage"
      },
      separated: {
        paddingHorizontal: "$4xl",
        backgroundColor: "$backgroundElevated",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover"
        }
      },
      bordered: {
        paddingHorizontal: "$4xl",
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover",
          cursor: "pointer"
        }
      },
      ghost: {
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          cursor: "pointer"
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
          color="$foreground"
          size="$lg"
          strokeWidth={2.5}
          $group-accordion-hover={{
            color: "$foregroundHover",
            cursor: "pointer"
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
    return (
      <HeadingSmallText
        ref={forwardedRef}
        transition="250ms"
        color="$foreground"
        $group-accordion-hover={{
          color: "$foregroundHover",
          cursor: "pointer"
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
  padding: "$3xl",
  paddingTop: 0,
  zIndex: "$50",

  variants: {
    variant: {
      default: {
        paddingHorizontal: 0,
        backgroundColor: "$backgroundElevated"
      },
      surface: {
        paddingHorizontal: 0,
        backgroundColor: "$backgroundPage"
      },
      separated: {
        paddingHorizontal: "$4xl",
        backgroundColor: "$backgroundElevated"
      },
      bordered: {
        paddingHorizontal: "$4xl",
        backgroundColor: "transparent"
      },
      ghost: {
        padding: 0,
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
      <TamaguiAccordion.HeightAnimator transition="250ms">
        <AccordionItemContent
          ref={forwardedRef}
          transition="250ms"
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
