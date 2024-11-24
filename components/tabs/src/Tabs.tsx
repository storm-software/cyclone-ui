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

import { Heading4Text } from "@cyclone-ui/heading-text";
import { getFontSizedFromSize, getSized, getSpaced } from "@cyclone-ui/helpers";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  SizeTokens,
  StackProps,
  styled,
  VariantSpreadExtras,
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
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState
} from "react";

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
  intentAt: null,
  prevActiveAt: null,
  steps: [] as string[]
};

export type TabsContextProps = {
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
};

export const TabsContext = createStyledContext<TabsContextProps>({
  state: {
    ...initialState
  },
  setState: ((next: TabsState) => {}) as Dispatch<SetStateAction<TabsState>>,
  onInteraction: (type: any, layout: any) => {},
  orientation: TabOrientation.HORIZONTAL,
  variant: TabVariant.UNDERLINE,
  size: "$true"
});

const TabsFrame = styled(TamaguiTabs, {
  name: "Tabs",
  context: TabsContext,

  activationMode: "manual",
  borderRadius: "$true",
  position: "relative",

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<any>) => {
        const size = getSized(val);
        const padding = getSpaced(val);

        return {
          size,
          padding,
          borderRadius: config.tokens.radius[size]
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
          ref={forwardedRef}
          value={currentTab}
          size={size}
          gap="$2"
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

  animation: "200ms",
  position: "absolute",

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

  variants: {
    active: {
      ":boolean": (val: boolean, config: VariantSpreadExtras<any>) => {
        if (!val) {
          return {};
        }

        return {
          backgroundColor: "$primary"
        };
      }
    },

    intent: {
      ":boolean": (val: boolean, config: VariantSpreadExtras<any>) => {
        if (!val) {
          return {};
        }

        return {
          backgroundColor: "$accent10"
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
        borderRadius: "$true"
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

  animation: "200ms",
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
          zIndex: 0,
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

  animation: "200ms",
  borderStyle: "solid",
  borderColor: "transparent",

  variants: {
    orientation: {
      horizontal: {},
      vertical: {}
    },

    variant: {
      underline: {
        borderBottomColor: "$borderColor",
        borderBottomWidth: "$0.2"
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
  ({ children, ...rest }: StackProps, forwardedRef) => {
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
              intent={true}
              orientation={orientation}
              variant={variant}
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

const TabsHeaderItemHeading = styled(Heading4Text, {
  name: "TabsHeading",
  context: TabsContext,

  animation: "200ms",

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

  animation: "200ms",
  unstyled: true,
  flex: 1,

  variants: {
    size: {
      "...size": (val: SizeTokens, config: VariantSpreadExtras<any>) => {
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
          color={currentTab === value ? "$primary" : "$muted"}
          $group-hover={{
            color: currentTab === value ? "$primary" : "$accent10"
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
