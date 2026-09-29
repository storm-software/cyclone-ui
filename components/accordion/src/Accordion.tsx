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

/* eslint-disable react/no-children-to-array */

import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { CaretDown } from "@cyclone-ui/icons";
import { AccordionToggle } from "@cyclone-ui/vectors";
import { isString } from "@stryke/type-checks/is-string";
import type {
  AccordionMultipleProps,
  AccordionSingleProps
} from "@tamagui/accordion";
import { Accordion as TamaguiAccordion } from "@tamagui/accordion";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Text,
  View
} from "@tamagui/core";
import { YGroup } from "@tamagui/group";
import { withStaticProperties } from "@tamagui/helpers";
import { XStack } from "@tamagui/stacks";
import type { Ref } from "react";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useState
} from "react";

type BaseAccordionProps = Omit<
  Partial<AccordionSingleProps | AccordionMultipleProps>,
  "direction"
>;

export type AccordionVariant = "default" | "separated" | "bordered" | "ghost";

export type AccordionIcon = "toggle" | "chevron";
export type AccordionIconDirection = "left" | "right";
export type AccordionDirection = "up" | "down";

const getOpenValues = (value?: string | string[]) =>
  isString(value) ? [value] : (value ?? []);

export interface AccordionContextProps {
  open: string[];
  setOpen: (open: string[]) => void;
  variant: AccordionVariant;
  bordered: boolean;
  single: boolean;
  numbered: boolean;
  icon: AccordionIcon;
  iconDirection: AccordionIconDirection;
  direction: AccordionDirection;
}

export const AccordionContext = createStyledContext<
  AccordionContextProps,
  | "open"
  | "setOpen"
  | "variant"
  | "bordered"
  | "single"
  | "numbered"
  | "icon"
  | "iconDirection"
  | "direction"
>(
  {
    open: [],
    setOpen: (_open: string[]) => {},
    variant: "default",
    bordered: true,
    single: false,
    numbered: false,
    icon: "toggle",
    iconDirection: "right",
    direction: "down"
  } as AccordionContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["variant", "bordered", "direction"]
  }
);

const AccordionGroup = styled(YGroup, {
  displayName: "AccordionGroup",
  context: AccordionContext,
  width: "100%",
  borderRadius: "container",
  borderWidth: 0,
  borderColor: "transparent",
  backgroundColor: "transparent",
  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: "hairline",
        backgroundColor: "surfaceElevated",
        paddingHorizontal: "6xl",
        paddingVertical: "lg",
        overflow: "hidden"
      },
      separated: {
        gap: "lg",
        overflow: "visible",
        borderRadius: 0
      },
      bordered: {
        gap: "lg",
        overflow: "visible",
        borderRadius: 0
      },
      ghost: {}
    },
    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const
});

// eslint-disable-next-line react-refresh/only-export-components
const AccordionFrameImpl = forwardRef<
  TamaguiElement,
  BaseAccordionProps & {
    variant?: AccordionVariant;
    bordered?: boolean;
    single?: boolean;
    numbered?: boolean;
    icon?: AccordionIcon;
    iconDirection?: AccordionIconDirection;
    direction?: AccordionDirection;
  }
>(
  (
    {
      children,
      type = "multiple",
      variant = "default",
      bordered = true,
      single = false,
      numbered = false,
      icon = "toggle",
      iconDirection = "right",
      direction = "down",
      defaultValue,
      onValueChange,
      backgroundColor,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const isSingle = single || type === "single";
    const [open, setOpen] = useState<string[]>(() =>
      getOpenValues(value ?? defaultValue)
    );

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

        (onValueChange as ((value: string | string[]) => void) | undefined)?.(
          next
        );
      },
      [isSingle, onValueChange]
    );

    return (
      <AccordionContext.Provider
        open={open}
        setOpen={setOpen}
        variant={variant}
        bordered={bordered}
        single={isSingle}
        numbered={numbered}
        icon={icon}
        iconDirection={iconDirection}
        direction={direction}>
        <TamaguiAccordion
          ref={forwardedRef}
          type={isSingle ? "single" : "multiple"}
          theme="base"
          {...props}
          borderRadius="container"
          width="100%"
          defaultValue={defaultValue as never}
          value={value as never}
          onValueChange={handleValueChange}>
          <AccordionGroup
            variant={variant}
            bordered={bordered}
            backgroundColor={backgroundColor}>
            {
              // eslint-disable-next-line ts/promise-function-async
              Children.toArray(children).map((child, index, items) => {
                if (!isValidElement(child)) {
                  return child;
                }

                const isLast =
                  variant === "default" && index === items.length - 1;

                // eslint-disable-next-line react/no-clone-element
                return cloneElement(child, { index, last: isLast } as never);
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
  index: number;
}

export const AccordionItemContext = createStyledContext<
  AccordionItemContextProps,
  "open" | "index"
>(
  {
    open: false,
    index: 0
  } as AccordionItemContextProps,
  {
    keys: ["open", "index"]
  }
);

const AccordionItem = styled(TamaguiAccordion.Item, {
  displayName: "Accordion",
  context: AccordionContext,
  overflow: "hidden",

  variants: {
    variant: {
      default: {
        borderBottomWidth: 1,
        borderBottomColor: "hairline"
      },
      separated: {
        borderRadius: "container",
        borderWidth: 1,
        borderColor: "hairline",
        backgroundColor: "surfaceElevated"
      },
      bordered: {
        borderRadius: "container",
        borderWidth: 1,
        borderColor: "hairline",
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
    },

    bordered: {
      false: {
        borderWidth: 0,
        borderBottomWidth: 0
      }
    }
  } as const
});

const AccordionItemImpl = createStyledHOC(
  AccordionItem,
  (
    {
      children,
      index = 0,
      value,
      ...props
    }: GetProps<typeof AccordionItem> & { index?: number },
    forwardedRef
  ) => {
    const { direction, open } = AccordionContext.useStyledContext();
    const isOpen = open.includes(value);

    return (
      <YGroup.Item>
        <AccordionItemContext.Provider open={isOpen} index={index}>
          <AccordionItem
            ref={forwardedRef as Ref<TamaguiElement>}
            key={value}
            value={value}
            {...props}
            flexDirection={direction === "up" ? "column-reverse" : "column"}>
            {children}
          </AccordionItem>
        </AccordionItemContext.Provider>
      </YGroup.Item>
    );
  }
);

const AccordionItemHeader = styled(TamaguiAccordion.Trigger, {
  displayName: "AccordionHeader",
  context: AccordionContext,
  transition: "250ms",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  zIndex: "60",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "transparent",
  boxShadow: "none focus-visible:ringOffset",
  cursor: "hover:pointer",
  outlineStyle: "focus-visible:none",
  outlineWidth: "focus-visible:0px",
  variants: {
    variant: {
      default: {
        paddingHorizontal: 0,
        backgroundColor: "transparent"
      },
      separated: {
        paddingHorizontal: "4xl",
        backgroundColor: "surfaceElevated hover:surfaceElevatedHover"
      },
      bordered: {
        paddingHorizontal: "4xl",
        backgroundColor: "transparent hover:surfaceElevatedHover",
        cursor: "hover:pointer"
      },
      ghost: {
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: "hairline",
        backgroundColor: "transparent hover:transparent",
        cursor: "hover:pointer"
      }
    },
    bordered: {
      false: {
        borderBottomWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    variant: "default"
  }
});

const AccordionItemHeaderImpl = createStyledHOC(
  AccordionItemHeader,
  ({ children, onMouseEnter, onMouseLeave, ...props }, forwardedRef) => {
    const { numbered, direction, icon, iconDirection } =
      AccordionContext.useStyledContext();
    const { index, open } = AccordionItemContext.useStyledContext();
    // The header icons are `themed` SVG icons, which resolve a single color
    // value and cannot take a `group-hover/accordion:` clause.
    const [hovered, setHovered] = useState(false);
    const iconColor = hovered ? "accentHover" : "accent";

    return (
      <AccordionItemHeader
        group={"accordion" as any}
        ref={forwardedRef}
        flexDirection={iconDirection === "left" ? "row-reverse" : "row"}
        justifyContent="space-between"
        alignItems="center"
        {...props}
        onMouseEnter={event => {
          setHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={event => {
          setHovered(false);
          onMouseLeave?.(event);
        }}>
        {numbered ? (
          <XStack alignItems="center" flex={1} gap="6xl">
            <Text color="inkBody" fontFamily="code">
              {String(index + 1).padStart(2, "0")}
            </Text>
            {children}
          </XStack>
        ) : (
          children
        )}
        {icon === "toggle" && (
          <AccordionToggle
            isExpanded={open}
            color={iconColor}
            size="6xl"
            strokeWidth={2.5}
          />
        )}
        {icon === "chevron" && (
          <View
            transition="200ms"
            transformOrigin="center"
            rotate={
              (open && direction !== "up") || (!open && direction === "up")
                ? "180deg"
                : "0deg"
            }
            alignItems="center"
            justifyContent="center"
            pointerEvents="none">
            <CaretDown
              aria-hidden={true}
              color={iconColor}
              size="6xl"
              weight="bold"
            />
          </View>
        )}
      </AccordionItemHeader>
    );
  },
  {
    displayName: "AccordionHeader"
  }
);

const AccordionItemHeaderHeading = createStyledHOC(
  HeadingSmallText,
  ({ children, ...props }, forwardedRef) => {
    return (
      <HeadingSmallText
        ref={forwardedRef}
        transition="250ms"
        color="accent group-hover/accordion:accentHover"
        cursor="group-hover/accordion:pointer"
        {...props}>
        {children}
      </HeadingSmallText>
    );
  },
  {
    displayName: "AccordionHeader"
  }
);

const AccordionItemContent = styled(TamaguiAccordion.Content, {
  displayName: "AccordionContent",
  context: AccordionContext,
  zIndex: "50",
  variants: {
    variant: {
      default: {
        paddingHorizontal: 0,
        backgroundColor: "transparent"
      },
      separated: {
        paddingHorizontal: "4xl",
        backgroundColor: "surfaceElevated"
      },
      bordered: {
        paddingHorizontal: "4xl",
        backgroundColor: "transparent"
      },
      ghost: {
        padding: 0,
        paddingTop: "3xl",
        backgroundColor: "transparent"
      }
    },

    direction: {
      up: {
        paddingTop: "2xl",
        paddingBottom: 0
      },
      down: {
        paddingTop: 0,
        paddingBottom: "2xl"
      }
    }
  } as const,
  defaultVariants: {
    variant: "default",
    direction: "down"
  }
});

const AccordionItemContentImpl = createStyledHOC(
  AccordionItemContent,
  ({ children, ...props }, forwardedRef) => {
    return (
      <TamaguiAccordion.HeightAnimator transition="250ms">
        <AccordionItemContent
          ref={forwardedRef}
          transition="250ms"
          opacity="exit:0"
          {...props}>
          {children}
        </AccordionItemContent>
      </TamaguiAccordion.HeightAnimator>
    );
  },
  {
    displayName: "AccordionContent"
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
