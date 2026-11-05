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

import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { getSized, getSpaced } from "@cyclone-ui/helpers";
import { AnimatePresence } from "@tamagui/animate-presence";
import { isWeb } from "@tamagui/constants";
import type {
  FontSizeTokens,
  GetProps,
  SizeTokens,
  ViewProps
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getFontSized } from "@tamagui/get-font-sized";
import { YStack } from "@tamagui/stacks";
import type {
  TabLayout as TamaguiTabLayout,
  TabsContentProps as TamaguiTabsContentProps,
  TabsTabProps as TamaguiTabsTabProps
} from "@tamagui/tabs";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { TabsFluidIndicator } from "./fluid";

export type TabOrientation = "horizontal" | "vertical";
export type TabStyle = "underline" | "floating" | "tabbed" | "fluid";
export type TabVariant = "primary" | "secondary" | "tertiary" | "outlined";

// `Button`'s variants, drawn on the tab list or, when `tabbed`, on the
// selected tab and the panel.
const TAB_SURFACES = {
  primary: {
    backgroundColor: "primary",
    borderWidth: 0,
    borderColor: "transparent",
    boxShadow: "none"
  },
  secondary: {
    backgroundColor: "secondary",
    borderWidth: 1,
    borderColor: "border",
    boxShadow: "color-shadow-resting-raised"
  },
  tertiary: {
    backgroundColor: "surface",
    borderWidth: 1,
    borderColor: "hairline",
    boxShadow: "color-shadow-resting-raised"
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "primary",
    boxShadow: "none"
  }
} as const;

// `dark_brand` / `brand` -> `brand`; `dark`, `base` and `dark_base` are
// uncolored.
const isUncoloredTheme = (themeName: string | null | undefined) => {
  const parts = themeName?.split("_") ?? [];
  const color = parts.length > 1 ? parts[1] : parts[0];

  return !color || color === "base" || color === "light" || color === "dark";
};

// The text and indicator color on the `primary` / `secondary` surfaces.
// `on-secondary` is faint on the uncolored themes' light `secondary`, so those
// use `primary` there, as `Button` does.
const getTabForeground = (
  variant: TabVariant | undefined,
  themeName: string | null | undefined
) =>
  variant === "primary"
    ? "on-primary"
    : variant === "secondary"
      ? isUncoloredTheme(themeName)
        ? "primary"
        : "on-secondary"
      : undefined;

export interface TabsState {
  /**
   * The current tab user is on
   */
  currentTab: string;

  /**
   * Layout of the Tab user might intend to select (hovering / focusing)
   */
  intentAt: TamaguiTabLayout | null;

  /**
   * Layout of the Tab user selected
   */
  activeAt: TamaguiTabLayout | null;

  /**
   * Used to get the direction of activation for animating the active indicator
   */
  prevActiveAt: TamaguiTabLayout | null;

  /**
   * List of step names
   */
  steps: string[];
}

const initialState: TabsState = {
  currentTab: "",
  activeAt: null,
  intentAt: null,
  prevActiveAt: null,
  steps: [] as string[]
};

export interface TabsContextProps {
  /**
   * The internal state of the tabs
   */
  state: TabsState;

  /**
   * The function to update the state
   */
  setState: Dispatch<SetStateAction<TabsState>>;

  /**
   * The function to handle the interaction on the tabs
   */
  onInteraction: TamaguiTabsTabProps["onInteraction"];

  /**
   * The direction of the tabs list (i.e. horizontal or vertical)
   *
   * @default "horizontal"
   */
  orientation: TabOrientation;

  /**
   * The theme of the tabs
   */
  theme?: string | null;

  /**
   * The layout style of the tabs
   *
   * @default "floating"
   */
  tabStyle: TabStyle;

  /**
   * The colors of the tabs, in any `tabStyle`: `primary` fills the tab list
   * (or, when `tabbed`, the selected tab and the panel) with `primary`,
   * `secondary` with `secondary` and a `border` border, `tertiary` with
   * `surface` and a `hairline` border, and `outlined` draws a 2px `primary`
   * border on a transparent background. Unset keeps the style's own colors.
   */
  variant?: TabVariant;

  /**
   * Whether the tabs display their style- and variant-owned borders
   *
   * @default true
   */
  bordered: boolean;

  /**
   * The size of the tabs
   *
   * @default true
   */
  size: SizeTokens;
}

export const TabsContext = createStyledContext<
  TabsContextProps,
  | "state"
  | "setState"
  | "onInteraction"
  | "orientation"
  | "tabStyle"
  | "variant"
  | "bordered"
  | "size"
>(
  {
    state: {
      ...initialState
    },
    setState: ((_next: TabsState) => {}) as Dispatch<SetStateAction<TabsState>>,
    onInteraction: (_type: any, _layout: any) => {},
    orientation: "horizontal",
    tabStyle: "floating",
    bordered: true,
    size: true
  } as TabsContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["orientation", "tabStyle", "variant", "bordered", "size"]
  }
);

const TabsFrame = styled(TamaguiTabs, {
  displayName: "Tabs",
  context: TabsContext,
  activationMode: "manual",
  borderRadius: "tabs",
  position: "relative",
  height: "100%",
  width: "100%",

  variants: {
    // Only size tokens restyle the frame. `getSized(true)` clamps to the
    // smallest token (0), which `TabsContext` would then hand to every header
    // item as its size, so the `true` default is left alone.
    size: styled.dynamic<SizeTokens>((val: SizeTokens, { tokens }) =>
      typeof val === "string" && val in tokens.size
        ? { size: getSized(val) }
        : undefined
    ),

    tabStyle: {
      underline: {},
      floating: {},
      tabbed: {},
      fluid: {}
    },

    variant: styled.dynamic<TabVariant>(),

    bordered: {
      false: {}
    }
  } as const,
  defaultVariants: {
    size: true,
    tabStyle: "floating",
    bordered: true
  }
});

type TabsContextOwnedProps =
  "orientation" | "tabStyle" | "variant" | "bordered" | "size";

/** Props the root shares through `TabsContext` take concrete values, not flat clauses. */
export type TabsProps = Omit<
  GetProps<typeof TabsFrame>,
  TabsContextOwnedProps
> &
  Partial<Pick<TabsContextProps, TabsContextOwnedProps>>;

const TabsFrameImpl = createStyledHOC(
  TabsFrame,
  (
    {
      children,
      orientation = "horizontal",
      tabStyle: tabStyleProp = "floating",
      variant,
      bordered = true,
      size = true,
      onValueChange,
      theme,
      ...rest
    }: TabsProps,
    forwardedRef
  ) => {
    // The fluid indicator is WebGL; native falls back to the floating pill.
    const tabStyle =
      tabStyleProp === "fluid" && !isWeb ? "floating" : tabStyleProp;
    const [state, setState] = useState<TabsState>({
      ...initialState
    });
    const { steps, currentTab } = state;

    const handleSetCurrentTab = useCallback(
      (currentTab: string) => {
        onValueChange?.(currentTab);
        setState(prev => ({ ...prev, currentTab }));
      },
      [setState, onValueChange]
    );
    const handleSetIntentIndicator = useCallback(
      (intentAt: TamaguiTabLayout) => setState(prev => ({ ...prev, intentAt })),
      [setState]
    );
    const handleSetActiveIndicator = useCallback(
      (activeAt: TamaguiTabLayout) =>
        setState(prev => ({ ...prev, prevActiveAt: prev.activeAt, activeAt })),
      [setState]
    );

    const handleInteraction: TamaguiTabsTabProps["onInteraction"] = useCallback(
      (type: "select" | "focus" | "hover", layout: TamaguiTabLayout | null) => {
        if (layout) {
          if (type === "select") {
            handleSetActiveIndicator(layout);
          } else {
            handleSetIntentIndicator(layout);
          }
        }
      },
      [handleSetActiveIndicator, handleSetIntentIndicator]
    );

    useLayoutEffect(() => {
      if (!currentTab) {
        // eslint-disable-next-line react/set-state-in-effect
        setState(prev => ({ ...prev, currentTab: prev.steps[0] as string }));
      }
    }, [currentTab, steps]);

    return (
      <TabsContext.Provider
        state={state}
        setState={setState}
        onInteraction={handleInteraction}
        theme={theme}
        size={size}
        tabStyle={tabStyle}
        variant={variant}
        bordered={bordered}
        orientation={orientation}>
        <TabsFrame
          ref={forwardedRef}
          value={currentTab}
          size={size}
          // Before `rest` so callers can stack vertical tabs on small screens.
          flexDirection={orientation === "horizontal" ? "column" : "row"}
          {...rest}
          bordered={bordered}
          onValueChange={handleSetCurrentTab}
          tabStyle={tabStyle}
          variant={variant}
          orientation={orientation}>
          {children}
        </TabsFrame>
      </TabsContext.Provider>
    );
  }
);

const TabsRovingIndicator = styled(YStack, {
  displayName: "TabsIndicator",
  context: TabsContext,
  transition: "100ms",
  position: "absolute",
  pointerEvents: "none",
  opacity: "enter:0 exit:0",

  variants: {
    // Styled by the `.resolve` below because the color depends on `tabStyle`
    // and `variant`.
    active: styled.dynamic<boolean>(),

    // Receives `"true"` from the `group-hover/tabs:true` clause.
    intent: styled.dynamic<boolean | "true">(val => ({
      backgroundColor:
        val === true || val === "true" ? "transparent" : undefined,
      borderColor: val === true || val === "true" ? "transparent" : undefined
    })),

    orientation: {
      horizontal: {},
      vertical: {}
    },

    // Styled by the `.resolve` below because the axis depends on `orientation`.
    size: styled.dynamic<SizeTokens>(),

    tabStyle: {
      underline: {
        borderRadius: 0,
        borderColor: "transparent"
      },
      floating: {
        borderRadius: "tab",
        borderWidth: 1,
        borderColor: "hairline",
        boxShadow: "color-shadow-resting-raised",
        alignItems: "center",
        justifyContent: "center"
      },
      tabbed: {},
      // Drawn by `TabsFluidIndicator` instead.
      fluid: {}
    },

    variant: styled.dynamic<TabVariant>(),

    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    size: true,
    orientation: "horizontal",
    tabStyle: "underline",
    active: false,
    intent: false
  }
}).resolve(props => {
  // A size token sets the indicator thickness; the default `true` leaves it to
  // the explicit width/height props.
  const thickness =
    typeof props.size === "string" || typeof props.size === "number"
      ? getSized(props.size) * 0.1
      : undefined;
  const horizontal = props.orientation !== "vertical";

  return {
    // `TabsRovingIndicatorImpl` recolors the underline on a filled list. The
    // floating pill is raised one step above a `tertiary` (`surface`) list.
    backgroundColor: props.active
      ? (props.tabStyle ?? "underline") === "underline"
        ? "primary"
        : props.variant === "tertiary"
          ? "elevated"
          : "surface"
      : undefined,
    height: horizontal ? thickness : undefined,
    width: horizontal ? undefined : thickness
  };
});

const TabsRovingIndicatorImpl = createStyledHOC(
  TabsRovingIndicator,
  ({ children, height, width, active, ...rest }, forwardedRef) => {
    const { orientation, tabStyle, variant } = TabsContext.useStyledContext();
    const themeName = useThemeName();
    const isActiveUnderline =
      active && tabStyle === "underline" && orientation === "horizontal";
    // A `primary` underline would vanish into a filled list.
    const underlineColor =
      active && tabStyle === "underline"
        ? getTabForeground(variant, themeName)
        : undefined;

    return (
      <TabsRovingIndicator
        ref={forwardedRef}
        {...rest}
        active={active}
        {...(underlineColor && { backgroundColor: underlineColor })}
        width={
          orientation === "horizontal" || tabStyle === "floating"
            ? width
            : undefined
        }
        height={
          isActiveUnderline
            ? "xs"
            : orientation === "vertical" || tabStyle === "floating"
              ? height
              : undefined
        }
        bottom={
          tabStyle === "underline" && orientation === "horizontal"
            ? -2
            : undefined
        }
        right={
          tabStyle === "underline" && orientation === "vertical"
            ? -2
            : undefined
        }>
        {children}
      </TabsRovingIndicator>
    );
  }
);

const AnimatedView = styled(View, {
  displayName: "TabsIndicator",
  context: TabsContext,

  transition: "100ms",
  flex: 1,
  x: 0,
  opacity: 1,
  position: "absolute",
  height: "100%",
  width: "100%",

  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: styled.dynamic<number>(direction => ({
      x: `enter:${direction > 0 ? -50 : 50}px exit:${direction < 0 ? -50 : 50}px`,
      opacity: "enter:0 exit:0",
      zIndex: "exit:0"
    }))
  } as const
});

const TabsHeaderList = styled(YStack, {
  displayName: "Tabs",
  context: TabsContext,
  transition: "100ms",
  borderStyle: "solid",
  position: "relative",
  padding: "sm",

  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        minWidth: "20xl"
      }
    },

    tabStyle: {
      underline: {
        borderColor: "transparent",
        borderBottomColor: "sunken",
        borderBottomWidth: "lg",
        borderRadius: 0
      },
      floating: {
        backgroundColor: "sunken",
        borderRadius: "tabs",
        borderColor: "hairline",
        borderWidth: 1
      },
      tabbed: {
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0
      },
      fluid: {
        backgroundColor: "sunken",
        borderRadius: 999,
        borderColor: "hairline",
        borderWidth: 1
      }
    },

    // Styled by the `.resolve` below because it depends on `tabStyle`.
    variant: styled.dynamic<TabVariant>(),

    bordered: {
      false: {
        borderWidth: 0,
        borderBottomWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    orientation: "horizontal",
    tabStyle: "floating"
  }
}).resolve(({ variant, tabStyle, bordered }) => {
  // A tabbed list is bare: the selected tab and the panel carry the variant.
  if (!variant || tabStyle === "tabbed") {
    return undefined;
  }

  const surface = TAB_SURFACES[variant as TabVariant];
  const borderWidth = bordered === false ? 0 : surface.borderWidth;

  return {
    ...surface,
    borderWidth,
    // Replaces the underline style's bottom track too.
    borderBottomWidth: borderWidth,
    borderBottomColor: surface.borderColor
  };
});

const TabsHeaderListImpl = createStyledHOC(
  TabsHeaderList,
  ({ children, ...rest }: ViewProps, forwardedRef) => {
    const {
      state: { activeAt, intentAt, prevActiveAt, currentTab, steps },
      orientation,
      tabStyle,
      variant,
      bordered
    } = TabsContext.useStyledContext();

    // 1 = right, 0 = nowhere, -1 = left
    const direction = useMemo(
      () =>
        !activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x
          ? 0
          : activeAt.x > prevActiveAt.x
            ? -1
            : 1,
      [activeAt, prevActiveAt]
    );

    return (
      <TabsHeaderList
        group="tabs"
        ref={forwardedRef}
        orientation={orientation}
        tabStyle={tabStyle}
        variant={variant}
        bordered={bordered}
        {...rest}>
        {tabStyle === "fluid" ? (
          <TabsFluidIndicator
            selected={currentTab}
            count={steps.length}
            // A `primary` pill would vanish into a `primary` list.
            color={variant === "primary" ? "on-primary" : "primary"}
          />
        ) : (
          tabStyle !== "tabbed" && (
            <>
              {tabStyle === "underline" && (
                <TabsRovingIndicatorImpl
                  width={intentAt?.width ?? 0}
                  height={intentAt?.height ?? 0}
                  x={intentAt?.x ?? 0}
                  y={intentAt?.y ?? 0}
                  opacity={`0 group-hover/tabs:${intentAt ? 1 : 0}`}
                  orientation={orientation}
                  tabStyle={tabStyle}
                  variant={variant}
                  bordered={bordered}
                  intent={intentAt ? "group-hover/tabs:true" : undefined}
                />
              )}
              <AnimatePresence>
                {activeAt && (
                  <TabsRovingIndicatorImpl
                    width={activeAt.width}
                    height={activeAt.height}
                    x={activeAt.x}
                    y={activeAt.y}
                    active={true}
                    orientation={orientation}
                    tabStyle={tabStyle}
                    variant={variant}
                    bordered={bordered}
                  />
                )}
              </AnimatePresence>
            </>
          )
        )}

        <TamaguiTabs.List
          loop={false}
          aria-label="Tabs"
          gap="md"
          position="relative"
          zIndex={1}
          backgroundColor="transparent">
          <AnimatePresence mode="wait" custom={{ direction }} initial={false}>
            {children}
          </AnimatePresence>
        </TamaguiTabs.List>
      </TabsHeaderList>
    );
  }
);

// No `context: TabsContext` here: its `variant` key (primary / secondary /
// ...) would override `HeadingSmallText`'s own `variant` (base / editorial)
// and drop the `display` font. `TabsHeaderItemImpl` passes `size`, `selected`
// and `color` explicitly instead.
const TabsHeaderItemHeading = styled(HeadingSmallText, {
  displayName: "TabsHeading",
  transition: "200ms",
  textAlign: "center",
  paddingVertical: "xl",

  variants: {
    // One step below `HeadingSmallText` (lg), and one more for inactive tabs.
    // Declared before `size` so an explicit font size key still wins.
    selected: {
      true: {
        color: "primary",
        fontSize: "md max-sm:sm",
        fontWeight: "semibold"
      },
      false: {
        color: "primary-inactive",
        fontSize: "sm max-sm:xs",
        fontWeight: "normal"
      }
    },

    // Only font size keys restyle the text; `true` keeps the heading's size.
    size: styled.dynamic<FontSizeTokens | SizeTokens | number>((val, env) =>
      typeof val === "string" && !!env.font && val in env.font.size
        ? getFontSized(val, env)
        : undefined
    )
  } as const,
  defaultVariants: {
    size: true,
    selected: false
  }
});

const TabsHeaderItem = styled(TamaguiTabs.Tab, {
  displayName: "TabsHeading",
  context: TabsContext,

  transition: "100ms",

  variants: {
    orientation: {
      horizontal: {
        flex: 1
      },
      vertical: {}
    },

    size: styled.dynamic<SizeTokens>(val => {
      const space = getSpaced(val, { scale: 5 });

      return {
        paddingVertical: space,
        paddingHorizontal: space
      };
    }),

    tabStyle: {
      underline: {},
      floating: {},
      // Styled by the `.resolve` below because it depends on `orientation`.
      tabbed: {},
      fluid: {}
    },

    // Styled by the `.resolve` below; it only applies to the tabbed style.
    variant: styled.dynamic<TabVariant>(),

    // Styled by the `.resolve` below; it only applies to the tabbed style.
    selected: styled.dynamic<boolean>(),

    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const,

  defaultVariants: {
    orientation: "horizontal",
    size: true,
    tabStyle: "floating",
    selected: false
  }
}).resolve(props => {
  if (props.tabStyle !== "tabbed") {
    return undefined;
  }

  const horizontal = props.orientation !== "vertical";
  const surface = props.variant
    ? TAB_SURFACES[props.variant as TabVariant]
    : undefined;
  const borderWidth =
    props.bordered === false ? 0 : (surface?.borderWidth ?? 1);
  // The selected tab joins the panel, so it shares the panel's surface.
  const selectedBackground = surface?.backgroundColor ?? "surface";

  return {
    backgroundColor: props.selected
      ? selectedBackground
      : "canvas hover:canvas-hovered",
    borderColor: surface?.borderColor ?? "hairline",
    borderWidth,
    // Tamagui v3's Tabs.List is a Group that drops the connecting border on
    // every tab but the first; tabbed tabs are spaced apart and keep it.
    borderLeftWidth: horizontal ? borderWidth : undefined,
    borderTopWidth: horizontal ? undefined : borderWidth,
    borderTopLeftRadius: "tab",
    borderTopRightRadius: horizontal ? "tab" : 0,
    borderBottomLeftRadius: horizontal ? 0 : "tab",
    borderBottomRightRadius: 0,
    borderBottomColor:
      props.selected && horizontal ? selectedBackground : undefined,
    borderRightColor:
      props.selected && !horizontal ? selectedBackground : undefined,
    // Overlaps the content's border; without one, the tabs would jut past the
    // gaps between them.
    marginBottom: horizontal ? -borderWidth : undefined,
    marginRight: horizontal ? undefined : -borderWidth,
    zIndex: 2
  };
});

const TabsHeaderItemImpl = createStyledHOC(
  TabsHeaderItem,
  ({ children, value, ...rest }, forwardedRef) => {
    const {
      onInteraction,
      setState,
      state: { currentTab },
      size,
      orientation,
      tabStyle,
      variant,
      bordered
    } = TabsContext.useStyledContext();
    const themeName = useThemeName();
    const selected = currentTab === value;

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, [setState, value]);

    // The label sits on the variant's surface, except on the floating pill and
    // on an unselected `tabbed` tab (`canvas`).
    const foreground =
      (tabStyle === "floating" && selected) ||
      (tabStyle === "tabbed" && !selected)
        ? undefined
        : getTabForeground(variant, themeName);

    const heading = (
      <TabsHeaderItemHeading
        size={size}
        color={foreground ?? "group-hover:primary-active"}
        selected={selected}>
        {children}
      </TabsHeaderItemHeading>
    );

    return (
      <TabsHeaderItem
        ref={forwardedRef}
        group={true}
        size={size}
        orientation={orientation}
        tabStyle={tabStyle}
        variant={variant}
        bordered={bordered}
        selected={selected}
        {...rest}
        value={value}
        onInteraction={onInteraction}>
        {tabStyle === "fluid" ? (
          <View position="relative">
            {heading}
            {/* Clipped to the pill by `TabsFluidIndicator`. */}
            <TabsHeaderItemHeading
              data-fluid-overlay=""
              aria-hidden
              size={size}
              selected={selected}
              // On the pill, which is `on-primary` on a `primary` list.
              color={variant === "primary" ? "primary" : "on-primary"}
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              pointerEvents="none"
              style={{ clipPath: "inset(100%)" }}>
              {children}
            </TabsHeaderItemHeading>
          </View>
        ) : (
          heading
        )}
      </TabsHeaderItem>
    );
  }
);

const TabsContentList = styled(View, {
  displayName: "TabsContent",
  context: TabsContext,

  position: "relative",

  variants: {
    orientation: {
      horizontal: {
        width: "100%"
      },
      vertical: {
        flex: 1,
        minWidth: 0
      }
    },

    tabStyle: {
      underline: {},
      floating: {},
      // Styled by the `.resolve` below because it depends on `orientation`.
      tabbed: {},
      fluid: {}
    },

    // Styled by the `.resolve` below; it only applies to the tabbed style.
    variant: styled.dynamic<TabVariant>(),

    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const,

  defaultVariants: {
    orientation: "horizontal",
    tabStyle: "floating"
  }
}).resolve(props => {
  if (props.tabStyle !== "tabbed") {
    return undefined;
  }

  const horizontal = props.orientation !== "vertical";
  const surface = props.variant
    ? TAB_SURFACES[props.variant as TabVariant]
    : undefined;

  return {
    backgroundColor: surface?.backgroundColor ?? "surface",
    borderColor: surface?.borderColor ?? "hairline",
    borderWidth: props.bordered === false ? 0 : (surface?.borderWidth ?? 1),
    boxShadow: surface?.boxShadow,
    borderTopRightRadius: horizontal ? undefined : "tab",
    borderBottomLeftRadius: horizontal ? "tab" : undefined,
    borderBottomRightRadius: "tab"
  };
});

const TabsContentItem = createStyledHOC(
  TamaguiTabs.Content,
  ({ children, value, ...rest }: TamaguiTabsContentProps, forwardedRef) => {
    const {
      state: { currentTab }
    } = TabsContext.useStyledContext();
    const isActive = currentTab === value;

    return (
      <AnimatedView
        key={value}
        flexBasis={isActive ? "auto" : undefined}
        flexGrow={isActive ? 0 : undefined}
        flexShrink={isActive ? 0 : undefined}
        position={isActive ? "relative" : "absolute"}
        height={isActive ? "auto" : "100%"}>
        <TamaguiTabs.Content
          ref={forwardedRef}
          {...rest}
          value={value}
          flexBasis={isActive ? "auto" : undefined}
          flexGrow={isActive ? 0 : 1}
          flexShrink={isActive ? 0 : undefined}>
          {children}
        </TamaguiTabs.Content>
      </AnimatedView>
    );
  },
  {
    displayName: "TabsContentItem"
  }
);

export const Tabs = withStaticProperties(TabsFrameImpl, {
  Header: withStaticProperties(TabsHeaderListImpl, {
    Item: TabsHeaderItemImpl
  }),
  Content: withStaticProperties(TabsContentList, {
    Item: TabsContentItem
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Tabs.HeaderItem` is undefined on the server).
 */
export {
  TabsContentItem,
  TabsContentList,
  TabsHeaderItemImpl as TabsHeaderItem,
  TabsHeaderListImpl as TabsHeaderList
};
