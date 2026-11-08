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

/* eslint-disable react/no-children-to-array */

import type {
  ContainerSurfaceProps,
  ContainerVariant
} from "@cyclone-ui/container";
import {
  ContainerBackground,
  containerShadows,
  containerVariants,
  getContainerForeground
} from "@cyclone-ui/container";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { ChevronDown } from "@cyclone-ui/icons";
import { AccordionToggle } from "@cyclone-ui/vectors";
import { isString } from "@stryke/type-checks/is-string";
import type { AccordionSingleProps } from "@tamagui/accordion";
import { Accordion as TamaguiAccordion } from "@tamagui/accordion";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Text,
  useThemeName,
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

// Flattened rather than `Omit<A | B>`, which keeps only the keys common to
// both modes and so dropped the single-only `collapsible`. The mode is chosen
// by `type`/`single`, and values are normalized for it before Tamagui sees them.
type BaseAccordionProps = Omit<
  Partial<AccordionSingleProps>,
  "direction" | "type" | "value" | "defaultValue" | "onValueChange"
> & {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  /** The `variant` owns the background; custom colors are not supported. */
  backgroundColor?: never;
};

export type AccordionVariant = ContainerVariant | "ghost";

export type AccordionIcon = "toggle" | "chevron";
export type AccordionIconDirection = "left" | "right";
export type AccordionDirection = "up" | "down";

/**
 * The `Container` layer that draws the surface of the group or, when
 * `separated`, of an item: every variant but `ghost`, which has none.
 */
const AccordionSurface = ({
  variant,
  bordered,
  shadowStyle,
  glass,
  noise,
  accented
}: Pick<AccordionContextProps, "variant" | "bordered"> &
  Omit<ContainerSurfaceProps, "variant">) =>
  variant === "ghost" ? null : (
    <ContainerBackground
      variant={variant}
      shadowStyle={shadowStyle}
      glass={glass}
      noise={noise}
      accented={accented}
      {...(!bordered && { borderWidth: 0 })}
    />
  );

// A separated item's header shows the hovered shade of the item's surface.
const getHeaderBackground = (variant: ContainerVariant, glass?: boolean) => {
  const color: string = containerVariants[variant].backgroundColor;
  const hovered = `${color === "transparent" ? "surface" : color}-hovered`;

  return `transparent hover:${glass ? `${hovered}/60` : hovered}`;
};

// The text and icon color on the `primary` / `secondary` surfaces.
const useForeground = (variant: AccordionVariant) =>
  getContainerForeground(
    variant === "ghost" ? undefined : variant,
    useThemeName()
  );

const getOpenValues = (value?: string | string[]) =>
  isString(value) ? [value] : (value ?? []);

const getSingleValue = (value?: string | string[]) =>
  isString(value) ? value : value?.[0];

export interface AccordionContextProps
  extends Omit<ContainerSurfaceProps, "variant"> {
  open: string[];
  setOpen: (open: string[]) => void;
  variant: AccordionVariant;
  bordered: boolean;
  separated: boolean;
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
  | "separated"
  | "single"
  | "numbered"
  | "icon"
  | "iconDirection"
  | "direction"
  | "shadowStyle"
  | "glass"
  | "noise"
  | "accented"
>(
  {
    open: [],
    setOpen: (_open: string[]) => {},
    variant: "surface",
    bordered: true,
    separated: false,
    single: false,
    numbered: false,
    icon: "toggle",
    iconDirection: "right",
    direction: "down"
  } as AccordionContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["variant", "bordered", "separated", "direction"]
  }
);

const AccordionGroup = styled(YGroup, {
  displayName: "AccordionGroup",
  context: AccordionContext,
  width: "100%",
  borderRadius: "container",
  paddingHorizontal: "6xl",
  paddingVertical: "lg",
  overflow: "hidden",
  variants: {
    // An `AccordionSurface` draws every variant but `ghost`.
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      sunken: {},
      canvas: {},
      surface: {},
      elevated: {},
      floating: {},
      outlined: {},
      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0
      }
    },
    // Declared after `variant`: the items carry the surfaces.
    separated: {
      true: {
        gap: "lg",
        padding: 0,
        overflow: "visible",
        borderRadius: 0,
        boxShadow: "none"
      }
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
  BaseAccordionProps &
    Omit<ContainerSurfaceProps, "variant"> & {
    variant?: AccordionVariant;
    bordered?: boolean;
    separated?: boolean;
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
      variant = "surface",
      bordered = true,
      separated = false,
      single = false,
      numbered = false,
      icon = "toggle",
      iconDirection = "right",
      direction = "down",
      shadowStyle,
      glass,
      noise,
      accented,
      defaultValue,
      onValueChange,
      backgroundColor: _backgroundColor,
      borderRadius = "container",
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

        onValueChange?.(next);
      },
      [isSingle, onValueChange]
    );

    return (
      <AccordionContext.Provider
        // A controlled `value` wins, so programmatic changes reach the items.
        open={value === undefined ? open : getOpenValues(value)}
        setOpen={setOpen}
        variant={variant}
        bordered={bordered}
        separated={separated}
        single={isSingle}
        numbered={numbered}
        icon={icon}
        iconDirection={iconDirection}
        direction={direction}
        shadowStyle={shadowStyle}
        glass={glass}
        noise={noise}
        accented={accented}>
        <TamaguiAccordion
          ref={forwardedRef}
          theme="base"
          // Positioned and a stacking context for the `AccordionSurface`.
          position="relative"
          zIndex={0}
          {...props}
          {...(isSingle
            ? {
                type: "single" as const,
                value: getSingleValue(value),
                defaultValue: getSingleValue(defaultValue)
              }
            : {
                type: "multiple" as const,
                value: value === undefined ? undefined : getOpenValues(value),
                defaultValue:
                  defaultValue === undefined
                    ? undefined
                    : getOpenValues(defaultValue)
              })}
          borderRadius={borderRadius}
          width="100%"
          onValueChange={handleValueChange}>
          {/* Beside the group, not in it: a `YGroup` counts its children to
              find the first and last item. */}
          {!separated && (
            <AccordionSurface
              variant={variant}
              bordered={bordered}
              shadowStyle={shadowStyle}
              glass={glass}
              noise={noise}
              accented={accented}
            />
          )}
          <AccordionGroup
            borderRadius={borderRadius}
            variant={variant}
            bordered={bordered}
            separated={separated}
            {...(!separated &&
              shadowStyle && { boxShadow: containerShadows[shadowStyle] })}>
            {
              // eslint-disable-next-line ts/promise-function-async
              Children.toArray(children).map((child, index, items) => {
                if (!isValidElement(child)) {
                  return child;
                }

                const isLast = !separated && index === items.length - 1;

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
  borderBottomWidth: 1,
  borderBottomColor: "border",

  variants: {
    // An `AccordionSurface` draws the item's border. Positioned and a
    // stacking context for it.
    separated: {
      true: {
        borderRadius: "container",
        borderBottomWidth: 0,
        position: "relative",
        zIndex: 0
      }
    },

    // Ghost headers draw their own underline instead.
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      sunken: {},
      canvas: {},
      surface: {},
      elevated: {},
      floating: {},
      outlined: {},
      ghost: {
        borderWidth: 0,
        borderBottomWidth: 0
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
    const {
      direction,
      open,
      separated,
      variant,
      bordered,
      shadowStyle,
      glass,
      noise,
      accented
    } = AccordionContext.useStyledContext();
    const isOpen = open.includes(value);

    return (
      <YGroup.Item>
        <AccordionItemContext.Provider open={isOpen} index={index}>
          <AccordionItem
            ref={forwardedRef as Ref<TamaguiElement>}
            key={value}
            value={value}
            backgroundColor="transparent"
            {...(separated &&
              shadowStyle && { boxShadow: containerShadows[shadowStyle] })}
            {...props}
            flexDirection={direction === "up" ? "column-reverse" : "column"}>
            {separated && (
              <AccordionSurface
                variant={variant}
                bordered={bordered}
                shadowStyle={shadowStyle}
                glass={glass}
                noise={noise}
                accented={accented}
              />
            )}
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
  paddingHorizontal: 0,
  paddingVertical: "2xl",
  zIndex: "60",
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: "border",
  boxShadow: "none focus-visible:ring-offset",
  cursor: "hover:pointer",
  outlineStyle: "focus-visible:none",
  outlineWidth: "focus-visible:0px",
  backgroundColor: "transparent",

  variants: {
    separated: {
      true: {
        paddingHorizontal: "4xl"
      }
    },

    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      sunken: {},
      canvas: {},
      surface: {},
      elevated: {},
      floating: {},
      outlined: {},
      ghost: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "border"
      }
    },

    bordered: {
      false: {
        borderBottomWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    variant: "surface"
  }
});

const AccordionItemHeaderImpl = createStyledHOC(
  AccordionItemHeader,
  ({ children, ...props }, forwardedRef) => {
    const {
      numbered,
      direction,
      icon,
      iconDirection,
      separated,
      variant,
      glass
    } = AccordionContext.useStyledContext();
    const { index, open } = AccordionItemContext.useStyledContext();
    const foreground = useForeground(variant);

    return (
      <AccordionItemHeader
        group={"accordion"}
        ref={forwardedRef}
        flexDirection={iconDirection === "left" ? "row-reverse" : "row"}
        justifyContent="space-between"
        alignItems="center"
        {...(separated &&
          variant !== "ghost" && {
            backgroundColor: getHeaderBackground(variant, glass)
          })}
        {...props}>
        {numbered ? (
          <XStack alignItems="center" flex={1} gap="6xl">
            <Text color={foreground ?? "ink"} fontFamily="code">
              {String(index + 1).padStart(2, "0")}
            </Text>
            {children}
          </XStack>
        ) : (
          children
        )}
        {/* The icons resolve a single color value, so they follow the
            heading's `group-hover/accordion:` color through `currentColor`. */}
        <Text
          display="flex"
          transition="250ms"
          color={foreground ?? "primary group-hover/accordion:primary-hovered"}>
          {icon === "toggle" && (
            <AccordionToggle
              isExpanded={open}
              color="currentColor"
              size="6xl"
              strokeWidth={3.25}
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
              <ChevronDown aria-hidden={true} color="currentColor" size="6xl" />
            </View>
          )}
        </Text>
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
    const { variant } = AccordionContext.useStyledContext();
    const foreground = useForeground(variant);

    return (
      <HeadingSmallText
        ref={forwardedRef}
        transition="250ms"
        color={foreground ?? "primary group-hover/accordion:primary-hovered"}
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
  paddingHorizontal: 0,
  backgroundColor: "transparent",
  variants: {
    separated: {
      true: {
        paddingHorizontal: "4xl"
      }
    },
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      sunken: {},
      canvas: {},
      surface: {},
      elevated: {},
      floating: {},
      outlined: {},
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
    variant: "surface",
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

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Accordion.ItemHeaderHeading` is undefined on the server).
 */
export {
  AccordionItemImpl as AccordionItem,
  AccordionItemContentImpl as AccordionItemContent,
  AccordionItemHeaderImpl as AccordionItemHeader,
  AccordionItemHeaderHeading
};
