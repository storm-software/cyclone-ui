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

import { AnimatePresence } from "@tamagui/animate-presence";
import type { ViewProps } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { CheckCircle, Edit3, Lock } from "@tamagui/lucide-icons";
import { Circle } from "@tamagui/shapes";
import { XStack, YStack } from "@tamagui/stacks";
import type {
  TabLayout as TamaguiTabLayout,
  TabsContentProps as TamaguiTabsContentProps,
  TabsProps as TamaguiTabsProps,
  TabsTabProps as TamaguiTabsTabProps
} from "@tamagui/tabs";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import { SizableText } from "@tamagui/text";
import type { Dispatch, SetStateAction } from "react";
import { useLayoutEffect, useState } from "react";

export interface StepsState {
  currentStep: string;
  /**
   * Layout of the Step user might intend to select (hovering / focusing)
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
  // /**
  //  * The direction of the tabs list (i.e. horizontal or vertical)
  //  */
  // orientation?: TamaguiTabsProps["orientation"];
}

const defaultContextValues = {
  state: {
    activeAt: null,
    currentStep: "",
    intentAt: null,
    prevActiveAt: null,
    steps: [] as string[]
  },
  setState: ((_next: StepsState) => {}) as Dispatch<SetStateAction<StepsState>>,
  handleOnInteraction: (_type, _layout) => {},
  theme: "base"
} as const;

export const InternalStateContext = createStyledContext<{
  state: StepsState;
  setState: Dispatch<SetStateAction<StepsState>>;
  handleOnInteraction: TamaguiTabsTabProps["onInteraction"];
  theme: string;
}>(defaultContextValues);

export const StepsFrame = TamaguiTabs.styleable(
  ({ children, onValueChange, ...rest }: TamaguiTabsProps, forwardedRef) => {
    const [state, setState] = useState<StepsState>({
      ...defaultContextValues.state
    });
    const { steps, currentStep } = state;

    const setCurrentStep = (currentStep: string) => {
      onValueChange?.(currentStep);
      setState({ ...state, currentStep });
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
      if (!currentStep) {
        setState(next => ({ ...next, currentStep: next.steps[0] }));
      }
    }, [currentStep, steps]);

    return (
      <InternalStateContext.Provider
        state={state}
        setState={setState}
        handleOnInteraction={handleOnInteraction}
        theme="base">
        <TamaguiTabs
          ref={forwardedRef}
          value={currentStep}
          size="$5xl"
          height={150}
          flexDirection="row"
          activationMode="manual"
          backgroundColor="$backgroundPrimary"
          borderRadius="$lg"
          position="relative"
          {...rest}
          onValueChange={setCurrentStep}
          orientation="vertical">
          {children}
        </TamaguiTabs>
      </InternalStateContext.Provider>
    );
  }
);

export const StepsHeaderList = YStack.styleable(
  ({ children, ...rest }: ViewProps, forwardedRef) => {
    const { state } = InternalStateContext.useStyledContext();
    const {
      activeAt,
      intentAt: _intentAt,
      prevActiveAt,
      currentStep: _currentStep
    } = state;

    // 1 = right, 0 = nowhere, -1 = left
    const direction = (() => {
      if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
        return 0;
      }
      return activeAt.x > prevActiveAt.x ? -1 : 1;
    })();

    return (
      <YStack ref={forwardedRef} {...rest}>
        {/* <AnimatePresence>
          {intentAt && (
            <StepsRovingIndicatorImpl
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
              intent={true}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <StepsRovingIndicatorImpl
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
              active={true}
            />
          )}
        </AnimatePresence> */}

        <TamaguiTabs.List
          disablePassBorderRadius={true}
          loop={false}
          aria-label="Steps"
          gap="$3xl"
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

export const StepsHeaderItem = TamaguiTabs.Tab.styleable(
  ({ children, value, ...rest }: TamaguiTabsTabProps, forwardedRef) => {
    const { handleOnInteraction, setState, state } =
      InternalStateContext.useStyledContext();
    const {
      activeAt: _activeAt,
      intentAt: _intentAt,
      prevActiveAt: _prevActiveAt,
      currentStep
    } = state;

    const index = state.steps.indexOf(value);
    const currentIndex = state.steps.indexOf(currentStep);

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, []);

    return (
      <YStack flexDirection="column" gap="$3xl" justifyContent="center">
        {(state.steps.length === 0 || state.steps[0] !== value) && (
          <Circle
            height={75}
            width={3}
            backgroundColor="$color5"
            elevation="$5xl"
            marginLeft="$7xl"
          />
        )}

        <XStack gap="$5xl" alignItems="center">
          <TamaguiTabs.Tab
            transition="slow"
            ref={forwardedRef}
            unstyled={true}
            padding="$3xl"
            borderRadius={1000_000_000}
            borderWidth="$xs"
            borderColor={index === currentIndex ? "$borderPrimary" : "$color5"}
            {...rest}
            value={value}
            onInteraction={handleOnInteraction}>
            {index < currentIndex && (
              <CheckCircle transition="slow" color="$color5" size="$md" />
            )}
            {index === currentIndex && (
              <Edit3 transition="slow" color="$foregroundPrimary" size="$md" />
            )}
            {index > currentIndex && (
              <Lock transition="slow" color="$color5" size="$md" />
            )}
          </TamaguiTabs.Tab>

          <SizableText
            transition="slow"
            fontFamily="$heading"
            color={
              state.currentStep === value ? "$foregroundPrimary" : "$color5"
            }>
            {children}
          </SizableText>
        </XStack>
      </YStack>
    );
  }
);

export const StepsContentList = ({ children }) => {
  return <View position="relative">{children}</View>;
};

export const StepsContentItem = TamaguiTabs.Content.styleable(
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

export const StepsHeader = withStaticProperties(StepsHeaderList, {
  Item: StepsHeaderItem
});

export const StepsContent = withStaticProperties(StepsContentList, {
  Item: StepsContentItem
});

export const Steps = withStaticProperties(StepsFrame, {
  Header: StepsHeader,
  Content: StepsContent
});

const StepsRovingIndicator = styled(YStack, {
  position: "absolute",
  backgroundColor: "$color8",
  opacity: 1,
  transition: "200ms",
  borderRadius: 1000_000_000,

  enterStyle: {
    opacity: 0
  },

  exitStyle: {
    opacity: 0
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$backgroundAccent",
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
    }
  },

  defaultVariants: {
    active: false,
    intent: false
  }
});

const _StepsRovingIndicatorImpl = StepsRovingIndicator.styleable(
  (props, forwardedRef) => {
    return (
      <StepsRovingIndicator ref={forwardedRef} transition="200ms" {...props} />
    );
  }
);

const AnimatedView = styled(View, {
  flex: 1,
  x: 0,
  opacity: 1,
  position: "absolute",

  transition: "slow",
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
