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
import { getSized, getSpaced } from "@cyclone-ui/helpers";
import { AnimatePresence } from "@tamagui/animate-presence";
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

export type TabOrientation = "horizontal" | "vertical";
export type TabVariant = "underline" | "floating" | "tabbed";

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
   * The variant of the tabs
   *
   * @default "floating"
   */
  variant: TabVariant;

  /**
   * Whether the tabs display their variant-owned borders
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

export const TabsContext = createStyledContext<TabsContextProps, "state" | "setState" | "onInteraction" | "orientation" | "variant" | "bordered" | "size">({
  state: {
    ...initialState
  },
  setState: ((_next: TabsState) => {}) as Dispatch<SetStateAction<TabsState>>,
  onInteraction: (_type: any, _layout: any) => {},
  orientation: "horizontal",
  variant: "floating",
  bordered: true,
  size: true
} as TabsContextProps, {
  // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["orientation", "variant", "bordered", "size"]
});

const TabsFrame = styled(TamaguiTabs, {
  displayName: "Tabs",
  context: TabsContext,
  activationMode: "manual",
  borderRadius: "container",
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

    variant: {
      underline: {},
      floating: {},
      tabbed: {}
    },

    bordered: {
      false: {}
    }
  } as const,
  defaultVariants: {
    size: true,
    variant: "floating",
    bordered: true
  }
});

type TabsContextOwnedProps = "orientation" | "variant" | "bordered" | "size";

/** Props the root shares through `TabsContext` take concrete values, not flat clauses. */
export type TabsProps = Omit<
  GetProps<typeof TabsFrame>,
  TabsContextOwnedProps
> &
  Partial<Pick<TabsContextProps, TabsContextOwnedProps>>;

const TabsFrameImpl = createStyledHOC(TabsFrame, 
  (
    {
      children,
      orientation = "horizontal",
      variant = "floating",
      bordered = true,
      size = true,
      onValueChange,
      theme,
      ...rest
    }: TabsProps,
    forwardedRef
  ) => {
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
        variant={variant}
        bordered={bordered}
        orientation={orientation}>
        <TabsFrame
          ref={forwardedRef}
          value={currentTab}
          size={size}
          {...rest}
          bordered={bordered}
          onValueChange={handleSetCurrentTab}
          variant={variant}
          flexDirection={orientation === "horizontal" ? "column" : "row"}
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
    // Styled by the `.resolve` below because the color depends on `variant`.
    active: styled.dynamic<boolean>(),

    // Receives `"true"` from the `group-hover/tabs:true` clause.
    intent: styled.dynamic<boolean | "true">(val => ({
      backgroundColor: val === true || val === "true" ? "transparent" : undefined,
      borderColor: val === true || val === "true" ? "transparent" : undefined
    })),

    orientation: {
      horizontal: {},
      vertical: {}
    },

    // Styled by the `.resolve` below because the axis depends on `orientation`.
    size: styled.dynamic<SizeTokens>(),

    variant: {
      underline: {
        borderRadius: 0,
        borderColor: "transparent"
      },
      floating: {
        borderRadius: "button",
        borderWidth: 1,
        borderColor: "hairline",
        alignItems: "center",
        justifyContent: "center"
      },
      tabbed: {}
    },

    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    size: true,
    orientation: "horizontal",
    variant: "underline",
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
    backgroundColor: props.active
      ? (props.variant ?? "underline") === "underline"
        ? "accent"
        : "surfaceElevated"
      : undefined,
    height: horizontal ? thickness : undefined,
    width: horizontal ? undefined : thickness
  };
});

const TabsRovingIndicatorImpl = createStyledHOC(TabsRovingIndicator, 
  ({ children, height, width, active, ...rest }, forwardedRef) => {
    const { orientation, variant } = TabsContext.useStyledContext();
    const isActiveUnderline =
      active && variant === "underline" && orientation === "horizontal";

    return (
      <TabsRovingIndicator
        ref={forwardedRef}
        {...rest}
        active={active}
        width={
          orientation === "horizontal" || variant === "floating"
            ? width
            : undefined
        }
        height={
          isActiveUnderline
            ? "xs"
            : orientation === "vertical" || variant === "floating"
              ? height
              : undefined
        }
        bottom={
          variant === "underline" && orientation === "horizontal"
            ? -2
            : undefined
        }
        right={
          variant === "underline" && orientation === "vertical" ? -2 : undefined
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
  padding: "md",
  variants: {
    orientation: {
      horizontal: {},
      vertical: {
        minWidth: "20xl"
      }
    },

    variant: {
      underline: {
        borderColor: "transparent",
        borderBottomColor: "surfaceSunken",
        borderBottomWidth: "lg",
        borderRadius: 0
      },
      floating: {
        backgroundColor: "surfaceSunken",
        borderRadius: "container",
        borderColor: "hairline",
        borderWidth: 1
      },
      tabbed: {
        backgroundColor: "surfaceCanvas",
        borderWidth: 0,
        padding: 0
      }
    },

    bordered: {
      false: {
        borderWidth: 0,
        borderBottomWidth: 0
      }
    }
  } as const,
  defaultVariants: {
    orientation: "horizontal",
    variant: "floating"
  }
});

const TabsHeaderListImpl = createStyledHOC(TabsHeaderList, 
  ({ children, ...rest }: ViewProps, forwardedRef) => {
    const {
      state: { activeAt, intentAt, prevActiveAt },
      orientation,
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
        group={"tabs" as any}
        ref={forwardedRef}
        orientation={orientation}
        variant={variant}
        bordered={bordered}
        {...rest}>
        {variant !== "tabbed" && (
          <>
            {variant !== "floating" && (
              <TabsRovingIndicatorImpl
                width={intentAt?.width ?? 0}
                height={intentAt?.height ?? 0}
                x={intentAt?.x ?? 0}
                y={intentAt?.y ?? 0}
                opacity={`0 group-hover/tabs:${intentAt ? 1 : 0}`}
                orientation={orientation}
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
                  variant={variant}
                  bordered={bordered}
                />
              )}
            </AnimatePresence>
          </>
        )}

        <TamaguiTabs.List
          loop={false}
          aria-label="Tabs"
          gap="md"
          position="relative"
          zIndex={1}
          backgroundColor="transparent">
          <AnimatePresence
            mode="wait"
            custom={{ direction }}
            initial={false}>
            {children}
          </AnimatePresence>
        </TamaguiTabs.List>
      </TabsHeaderList>
    );
  }
);

const TabsHeaderItemHeading = styled(HeadingSmallText, {
  displayName: "TabsHeading",
  context: TabsContext,
  transition: "200ms",
  textAlign: "center",
  paddingVertical: "xl",
  variants: {
    // `TabsContext` passes `size: true`, which Tamagui v3 maps to the `sm` /
    // `4` font key the typography fonts do not define; resolve it (and any
    // font size key) against the font's own `true` step.
    size: styled.dynamic<FontSizeTokens | SizeTokens | number>((val, env) =>
      val === true ||
      (typeof val === "string" && !!env.font && val in env.font.size)
        ? getFontSized(val === true ? ("true" as FontSizeTokens) : val, env)
        : undefined
    ),

    selected: {
      true: {
        color: "accentActive",
        fontWeight: "bold"
      },
      false: {
        color: "accentInactive",
        fontWeight: "normal"
      }
    }
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

    variant: {
      underline: {},
      floating: {},
      // Styled by the `.resolve` below because it depends on `orientation`.
      tabbed: {}
    },

    // Styled by the `.resolve` below; it only applies to the tabbed variant.
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
    variant: "floating",
    selected: false
  }
}).resolve(props => {
  if (props.variant !== "tabbed") {
    return undefined;
  }

  const horizontal = props.orientation !== "vertical";
  const borderWidth = props.bordered === false ? 0 : 1;

  return {
    backgroundColor: props.selected
      ? "surfaceElevated"
      : "surfaceCanvas hover:surfaceCanvasHover",
    borderColor: "hairline",
    borderWidth,
    // Tamagui v3's Tabs.List is a Group that drops the connecting border on
    // every tab but the first; tabbed tabs are spaced apart and keep it.
    borderLeftWidth: horizontal ? borderWidth : undefined,
    borderTopWidth: horizontal ? undefined : borderWidth,
    borderTopLeftRadius: "container",
    borderTopRightRadius: horizontal ? "container" : 0,
    borderBottomLeftRadius: horizontal ? 0 : "container",
    borderBottomRightRadius: 0,
    borderBottomColor: props.selected && horizontal ? "surfaceElevated" : undefined,
    borderRightColor: props.selected && !horizontal ? "surfaceElevated" : undefined,
    marginBottom: horizontal ? -1 : undefined,
    marginRight: horizontal ? undefined : -1,
    zIndex: 2
  };
});

const TabsHeaderItemImpl = createStyledHOC(TabsHeaderItem, 
  ({ children, value, ...rest }, forwardedRef) => {
    const {
      onInteraction,
      setState,
      state: { currentTab },
      size,
      orientation,
      variant,
      bordered
    } = TabsContext.useStyledContext();

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, [setState, value]);

    return (
      <TabsHeaderItem
        ref={forwardedRef}
        group={true}
        size={size}
        orientation={orientation}
        variant={variant}
        bordered={bordered}
        selected={currentTab === value}

        {...rest}
        value={value}
        onInteraction={onInteraction}>
        <TabsHeaderItemHeading
          size={size === true ? ("true" as FontSizeTokens) : size}
          color="group-hover:accent"
          selected={currentTab === value}>
          {children}
        </TabsHeaderItemHeading>
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

    variant: {
      underline: {},
      floating: {},
      // Styled by the `.resolve` below because it depends on `orientation`.
      tabbed: {}
    },

    bordered: {
      false: {
        borderWidth: 0
      }
    }
  } as const,

  defaultVariants: {
    orientation: "horizontal",
    variant: "floating"
  }
}).resolve(props => {
  if (props.variant !== "tabbed") {
    return undefined;
  }

  const horizontal = props.orientation !== "vertical";

  return {
    backgroundColor: "surfaceElevated",
    borderColor: "hairline",
    borderWidth: props.bordered === false ? 0 : 1,
    borderTopRightRadius: horizontal ? undefined : "container",
    borderBottomLeftRadius: horizontal ? "container" : undefined,
    borderBottomRightRadius: "container"
  };
});

const TabsContentItem = createStyledHOC(TamaguiTabs.Content, 
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
