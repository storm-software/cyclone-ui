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

import { LabelText } from "@cyclone-ui/label-text";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  StackProps,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import type {
  TabLayout as TamaguiTabLayout,
  TabsContentProps as TamaguiTabsContentProps,
  TabsProps as TamaguiTabsProps,
  TabsTabProps as TamaguiTabsTabProps
} from "@tamagui/tabs";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import { SizableText } from "@tamagui/text";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useLayoutEffect,
  useState
} from "react";

export interface TabsState {
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
  /**
   * The direction of the tabs list (i.e. horizontal or vertical)
   */
  orientation?: TamaguiTabsProps["orientation"];
}

const defaultContextValues = {
  state: {
    activeAt: null,
    currentTab: "",
    intentAt: null,
    prevActiveAt: null,
    steps: [] as string[],
    orientation: "horizontal"
  },
  setState: ((next: TabsState) => {}) as Dispatch<SetStateAction<TabsState>>,
  handleOnInteraction: (type: any, layout: any) => {},
  theme: "base"
} as const;

export const InternalStateContext = createStyledContext<{
  state: TabsState;
  setState: Dispatch<SetStateAction<TabsState>>;
  handleOnInteraction: TamaguiTabsTabProps["onInteraction"];
  theme: string;
}>(defaultContextValues);

export const TabsFrame = TamaguiTabs.styleable(
  (
    { children, orientation, onValueChange, ...rest }: TamaguiTabsProps,
    forwardedRef
  ) => {
    const [state, setState] = useState<TabsState>({
      ...defaultContextValues.state,
      orientation
    });
    const { steps, currentTab } = state;

    const setCurrentTab = (currentTab: string) => {
      onValueChange?.(currentTab);
      setState({ ...state, currentTab });
    };
    const setIntentIndicator = intentAt => setState({ ...state, intentAt });
    const setActiveIndicator = activeAt =>
      setState({ ...state, prevActiveAt: state.activeAt, activeAt });

    const handleOnInteraction: TamaguiTabsTabProps["onInteraction"] = (
      type,
      layout
    ) => {
      if (type === "select") {
        setActiveIndicator(layout);
      } else {
        setIntentIndicator(layout);
      }
    };

    useLayoutEffect(() => {
      if (!currentTab) {
        setState(next => ({ ...next, currentTab: next.steps[0] }));
      }
    }, [currentTab, steps]);

    return (
      <InternalStateContext.Provider
        state={state}
        setState={setState}
        handleOnInteraction={handleOnInteraction}
        theme="base">
        <TamaguiTabs
          ref={forwardedRef}
          value={currentTab}
          size="$4"
          padding="$2"
          height={150}
          flexDirection={orientation === "horizontal" ? "column" : "row"}
          activationMode="manual"
          backgroundColor="$background"
          borderRadius="$4"
          position="relative"
          {...rest}
          onValueChange={setCurrentTab}
          orientation={orientation}>
          {children}
        </TamaguiTabs>
      </InternalStateContext.Provider>
    );
  }
);

export const TabsHeaderList = YStack.styleable(
  ({ children, ...rest }: StackProps, forwardedRef) => {
    const { state } = InternalStateContext.useStyledContext();
    const { activeAt, intentAt, prevActiveAt, currentTab } = state;

    // 1 = right, 0 = nowhere, -1 = left
    const direction = (() => {
      if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
        return 0;
      }
      return activeAt.x > prevActiveAt.x ? -1 : 1;
    })();

    return (
      <YStack ref={forwardedRef} {...rest}>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicatorImpl
              borderRadius="$4"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
              intent={true}
              orientation={state.orientation}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicatorImpl
              borderRadius="$4"
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
              active={true}
              orientation={state.orientation}
            />
          )}
        </AnimatePresence>

        <TamaguiTabs.List
          disablePassBorderRadius={true}
          loop={false}
          aria-label="Tabs"
          gap="$2"
          backgroundColor="transparent">
          <AnimatePresence
            exitBeforeEnter={true}
            custom={{ direction }}
            initial={false}>
            {children}
          </AnimatePresence>
        </TamaguiTabs.List>
      </YStack>
    );
  }
);

export const TabsHeaderItem = TamaguiTabs.Tab.styleable(
  ({ children, value, ...rest }: TamaguiTabsTabProps, forwardedRef) => {
    const { handleOnInteraction, setState, state } =
      InternalStateContext.useStyledContext();

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, []);

    return (
      <TamaguiTabs.Tab
        ref={forwardedRef}
        unstyled={true}
        paddingVertical="$2"
        paddingHorizontal="$3"
        {...rest}
        value={value}
        onInteraction={handleOnInteraction}>
        <LabelText color={state.currentTab === value ? "$primary" : "$color9"}>
          {children}
        </LabelText>
      </TamaguiTabs.Tab>
    );
  }
);

export const TabsContentList = ({ children }: PropsWithChildren) => {
  return <View position="relative">{children}</View>;
};

export const TabsContentItem = TamaguiTabs.Content.styleable(
  ({ children, value, ...rest }: TamaguiTabsContentProps, forwardedRef) => {
    return (
      <AnimatedView key={value}>
        <TamaguiTabs.Content
          ref={forwardedRef}
          {...rest}
          value={value}
          flex={1}
          justifyContent="center">
          <SizableText textAlign="center">{children}</SizableText>
        </TamaguiTabs.Content>
      </AnimatedView>
    );
  }
);

export const TabsHeader = withStaticProperties(TabsHeaderList, {
  Item: TabsHeaderItem
});

export const TabsContent = withStaticProperties(TabsContentList, {
  Item: TabsContentItem
});

export const Tabs = withStaticProperties(TabsFrame, {
  Header: TabsHeader,
  Content: TabsContent
});

const TabsRovingIndicator = styled(YStack, {
  position: "absolute",
  backgroundColor: "$color8",
  opacity: 1,
  animation: "200ms",

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$accent10",
        opacity: 1,
        color: "$color12"
      }
    },

    intent: {
      true: {
        backgroundColor: "$color8",
        opacity: 1,
        color: "$color9"
      }
    },

    orientation: {
      horizontal: {
        bottom: 0,
        height: "$0.25"
      },
      vertical: {
        right: 0,
        width: "$0.25"
      }
    }
  },

  defaultVariants: {
    active: false,
    intent: false,
    orientation: "horizontal"
  }
});

const TabsRovingIndicatorImpl = TabsRovingIndicator.styleable(
  ({ height, width, orientation, ...props }, forwardedRef) => {
    return (
      <TabsRovingIndicator
        ref={forwardedRef}
        animation="200ms"
        {...props}
        orientation={orientation}
        height={orientation === "horizontal" ? "$0.25" : height}
        width={orientation === "vertical" ? "$0.25" : width}
      />
    );
  }
);

const AnimatedView = styled(View, {
  flex: 1,
  x: 0,
  opacity: 1,
  position: "absolute",

  animation: "slow",
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
