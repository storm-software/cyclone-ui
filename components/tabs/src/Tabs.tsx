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

import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { getFontSizedFromSize, getSized, getSpaced } from "@cyclone-ui/helpers";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { SizeTokens, VariantSpreadExtras, ViewProps } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import type {
  TabLayout as TamaguiTabLayout,
  TabsContentProps as TamaguiTabsContentProps,
  TabsTabProps as TamaguiTabsTabProps
} from "@tamagui/tabs";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

export type TabOrientation = "horizontal" | "vertical";
export const TabOrientation = {
  HORIZONTAL: "horizontal" as TabOrientation,
  VERTICAL: "vertical" as TabOrientation
} as const;

export type TabVariant = "underline" | "background";
export const TabVariant = {
  UNDERLINE: "underline" as TabVariant,
  BACKGROUND: "background" as TabVariant
} as const;

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
  intentAt: {
    x: 0,
    y: 0,
    width: 100,
    height: 10
  },
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
   * @default "underline"
   */
  variant: TabVariant;

  /**
   * The size of the tabs
   *
   * @default "$true"
   */
  size: SizeTokens;
}

export const TabsContext = createStyledContext<TabsContextProps>({
  state: {
    ...initialState
  },
  setState: ((_next: TabsState) => {}) as Dispatch<SetStateAction<TabsState>>,
  onInteraction: (_type: any, _layout: any) => {},
  orientation: TabOrientation.HORIZONTAL,
  variant: TabVariant.UNDERLINE,
  size: "$true"
});

const TabsFrame = styled(TamaguiTabs, {
  name: "Tabs",
  context: TabsContext,

  activationMode: "manual",
  borderRadius: "$container",
  position: "relative",
  height: "100%",
  width: "100%",

  variants: {
    size: {
      "...size": (val: SizeTokens) => {
        const size = getSized(val);

        return {
          size
        };
      }
    },

    orientation: {
      horizontal: {
        flexDirection: "column"
      },
      vertical: {
        flexDirection: "row"
      }
    },

    variant: {
      underline: {},
      background: {}
    }
  } as const,

  defaultVariants: {
    size: "$true",
    orientation: TabOrientation.HORIZONTAL,
    variant: TabVariant.UNDERLINE
  }
});

const TabsFrameImpl = TabsFrame.styleable(
  (
    {
      children,
      orientation = TabOrientation.HORIZONTAL,
      variant = TabVariant.UNDERLINE,
      size = "$true",
      onValueChange,
      theme,
      ...rest
    },
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
        orientation={orientation}>
        <TabsFrame
          group={"tabs" as any}
          ref={forwardedRef}
          value={currentTab}
          size={size}
          gap="$xl"
          {...rest}
          onValueChange={handleSetCurrentTab}
          variant={variant}
          orientation={orientation}>
          {children}
        </TabsFrame>
      </TabsContext.Provider>
    );
  }
);

const TabsRovingIndicator = styled(YStack, {
  name: "TabsIndicator",
  context: TabsContext,

  transition: "200ms",
  position: "absolute",

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

  variants: {
    active: {
      ":boolean": (val: boolean, _config: VariantSpreadExtras<any>) => {
        if (!val) {
          return {};
        }

        return {
          backgroundColor: "$backgroundPrimary"
        };
      }
    },

    intent: {
      ":boolean": (val: boolean, _config: VariantSpreadExtras<any>) => {
        if (!val) {
          return {};
        }

        return {
          backgroundColor: "$backgroundAccent"
        };
      }
    },

    orientation: {
      horizontal: {
        bottom: -2
      },
      vertical: {
        right: -2
      }
    },

    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<any>) => {
        const size = getSized(val);

        return config.props.orientation === TabOrientation.HORIZONTAL
          ? {
              height: size * 0.1
            }
          : {
              width: size * 0.1
            };
      }
    },

    variant: {
      underline: {
        borderRadius: 0
      },
      background: {
        borderRadius: "$trigger"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    orientation: TabOrientation.HORIZONTAL,
    variant: TabVariant.UNDERLINE,
    active: false,
    intent: false
  }
});

const TabsRovingIndicatorImpl = TabsRovingIndicator.styleable(
  ({ children, height, width, ...rest }, forwardedRef) => {
    const { orientation, variant } = TabsContext.useStyledContext();

    return (
      <TabsRovingIndicator
        ref={forwardedRef}
        {...rest}
        width={
          orientation === TabOrientation.HORIZONTAL ||
          variant === TabVariant.BACKGROUND
            ? width
            : undefined
        }
        height={
          orientation === TabOrientation.VERTICAL ||
          variant === TabVariant.BACKGROUND
            ? height
            : undefined
        }>
        {children}
      </TabsRovingIndicator>
    );
  }
);

const AnimatedView = styled(View, {
  name: "TabsIndicator",
  context: TabsContext,

  transition: "200ms",
  flex: 1,
  x: 0,
  opacity: 1,
  position: "absolute",

  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: {
      ":number": direction => ({
        enterStyle: {
          x: direction > 0 ? -50 : 50,
          opacity: 0
        },
        exitStyle: {
          zIndex: "$0",
          x: direction < 0 ? -50 : 50,
          opacity: 0
        }
      })
    }
  } as const
});

const TabsHeaderList = styled(YStack, {
  name: "Tabs",
  context: TabsContext,

  transition: "200ms",
  borderStyle: "solid",
  borderColor: "transparent",

  variants: {
    orientation: {
      horizontal: {},
      vertical: {}
    },

    variant: {
      underline: {
        borderBottomColor: "$borderPrimary",
        borderBottomWidth: "$xxs"
      },
      background: {}
    }
  } as const,

  defaultVariants: {
    orientation: TabOrientation.HORIZONTAL,
    variant: TabVariant.UNDERLINE
  }
});

const TabsHeaderListImpl = TabsHeaderList.styleable(
  ({ children, ...rest }: ViewProps, forwardedRef) => {
    const {
      state: { activeAt, intentAt, prevActiveAt },
      orientation,
      variant
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
        ref={forwardedRef}
        orientation={orientation}
        variant={variant}
        {...rest}>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicatorImpl
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
              orientation={orientation}
              variant={variant}
              $group-tabs-hover={{
                intent: true
              }}
            />
          )}
        </AnimatePresence>
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
            />
          )}
        </AnimatePresence>

        <TamaguiTabs.List
          disablePassBorderRadius={
            orientation === TabOrientation.HORIZONTAL ? "bottom" : "end"
          }
          loop={false}
          aria-label="Tabs"
          backgroundColor="transparent">
          <AnimatePresence
            exitBeforeEnter={true}
            custom={{ direction }}
            initial={false}>
            {children}
          </AnimatePresence>
        </TamaguiTabs.List>
      </TabsHeaderList>
    );
  }
);

const TabsHeaderItemHeading = styled(HeadingLargeText, {
  name: "TabsHeading",
  context: TabsContext,

  transition: "200ms",

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<any>) => {
        return getFontSizedFromSize(val, config);
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const TabsHeaderItem = styled(TamaguiTabs.Tab, {
  name: "TabsHeading",
  context: TabsContext,

  transition: "200ms",
  unstyled: true,
  flex: 1,

  variants: {
    size: {
      "...size": (val: SizeTokens, _config: VariantSpreadExtras<any>) => {
        const space = getSpaced(val);

        return {
          paddingVertical: space * 0.5,
          paddingHorizontal: space
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const TabsHeaderItemImpl = TabsHeaderItem.styleable(
  ({ children, value, ...rest }, forwardedRef) => {
    const {
      onInteraction,
      setState,
      state: { currentTab },
      size
    } = TabsContext.useStyledContext();

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, []);

    return (
      <TabsHeaderItem
        ref={forwardedRef}
        group={true}
        size={size}
        {...rest}
        value={value}
        onInteraction={onInteraction}>
        <TabsHeaderItemHeading
          size={size}
          color={currentTab === value ? "$foregroundPrimary" : "$base4"}
          $group-hover={{
            color: "$foregroundPrimaryHover"
          }}>
          {children}
        </TabsHeaderItemHeading>
      </TabsHeaderItem>
    );
  }
);

const TabsContentList = ({ children }: PropsWithChildren) => {
  return <View position="relative">{children}</View>;
};

const TabsContentItem = TamaguiTabs.Content.styleable(
  ({ children, value, ...rest }: TamaguiTabsContentProps, forwardedRef) => {
    return (
      <AnimatedView key={value}>
        <TamaguiTabs.Content
          ref={forwardedRef}
          {...rest}
          value={value}
          flex={1}>
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
