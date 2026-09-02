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

import type { NextButtonProps } from "@cyclone-ui/next-button";
import { NextButton } from "@cyclone-ui/next-button";
import type { PreviousButtonProps } from "@cyclone-ui/previous-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { CheckCircle, Edit3, Lock } from "@tamagui/lucide-icons-2";
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
import type { Dispatch, Ref, SetStateAction } from "react";
import {
  Children,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useState
} from "react";

export interface StepperState {
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
  /**
   * Steps that have been selected at least once.
   */
  visitedSteps: string[];
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
    steps: [] as string[],
    visitedSteps: [] as string[]
  },
  setState: ((_next: StepperState) => {}) as Dispatch<
    SetStateAction<StepperState>
  >,
  setCurrentStep: (_currentStep: string) => {},
  handleOnInteraction: (_type, _layout) => {},
  numbered: false,
  theme: "primary"
} as const;

export const InternalStateContext = createStyledContext<{
  state: StepperState;
  setState: Dispatch<SetStateAction<StepperState>>;
  setCurrentStep: (currentStep: string) => void;
  handleOnInteraction: TamaguiTabsTabProps["onInteraction"];
  numbered: boolean;
  theme: string;
}>(defaultContextValues);

export const StepperFrame = TamaguiTabs.styleable(
  (
    {
      children,
      numbered = false,
      onValueChange,
      ...rest
    }: TamaguiTabsProps & {
      numbered?: boolean;
    },
    forwardedRef
  ) => {
    const [state, setState] = useState<StepperState>({
      ...defaultContextValues.state
    });
    const { steps, currentStep } = state;

    const setCurrentStep = (currentStep: string) => {
      onValueChange?.(currentStep);
      setState(next => ({
        ...next,
        currentStep,
        visitedSteps: next.visitedSteps.includes(currentStep)
          ? next.visitedSteps
          : [...next.visitedSteps, currentStep]
      }));
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
        setState(next => ({
          ...next,
          currentStep: next.steps[0],
          visitedSteps: [next.steps[0]]
        }));
      }
    }, [currentStep, steps]);

    return (
      <InternalStateContext.Provider
        state={state}
        setState={setState}
        setCurrentStep={setCurrentStep}
        handleOnInteraction={handleOnInteraction}
        numbered={numbered}
        theme="primary">
        <TamaguiTabs
          ref={forwardedRef}
          value={currentStep}
          size="$10xl"
          flexDirection="row"
          activationMode="manual"
          borderRadius="$container"
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

export const StepperHeaderList = YStack.styleable(
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
            <StepperRovingIndicatorImpl
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
            <StepperRovingIndicatorImpl
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
          aria-label="Stepper"
          gap="$3xl"
          backgroundColor="transparent">
          <AnimatePresence
            exitBeforeEnter={true}
            custom={{ direction }}
            initial={false}>
            {Children.toArray(children).map((child, index) =>
              isValidElement(child)
                ? cloneElement(child, { index } as never)
                : child
            )}
          </AnimatePresence>
        </TamaguiTabs.List>
      </YStack>
    );
  }
);

export const StepperHeaderItem = TamaguiTabs.Tab.styleable<{ index?: number }>(
  ({ children, index: itemIndex = 0, value, ...rest }, forwardedRef) => {
    const { handleOnInteraction, numbered, setState, state } =
      InternalStateContext.useStyledContext();
    const {
      activeAt: _activeAt,
      intentAt: _intentAt,
      prevActiveAt: _prevActiveAt,
      currentStep
    } = state;

    const index = state.steps.indexOf(value);
    const currentIndex = state.steps.indexOf(currentStep);
    const isPastOrCurrent = index <= currentIndex;
    const isVisitedFutureStep =
      index > currentIndex && state.visitedSteps.includes(value);

    useLayoutEffect(() => {
      setState(next => ({ ...next, steps: [...next.steps, value] }));
    }, []);

    return (
      <YStack flexDirection="column" gap="$3xl" justifyContent="center">
        {(state.steps.length === 0 || state.steps[0] !== value) && (
          <Circle
            height={75}
            width={3}
            backgroundColor={
              index <= currentIndex ? "$background" : "$borderSubtle"
            }
            elevation="$5xl"
            marginLeft="$7xl"
          />
        )}

        <XStack gap="$5xl" alignItems="center">
          <TamaguiTabs.Tab
            transition="200ms"
            ref={forwardedRef}
            unstyled={true}
            padding="$3xl"
            borderRadius={1000_000_000}
            borderWidth="$md"
            borderColor={isPastOrCurrent ? "$foreground" : "$borderSubtle"}
            {...rest}
            value={value}
            onInteraction={handleOnInteraction}>
            {index < currentIndex && (
              <CheckCircle transition="200ms" color="$foreground" size="$4xl" />
            )}
            {index === currentIndex && (
              <Edit3 transition="200ms" color="$foreground" size="$4xl" />
            )}
            {isVisitedFutureStep && (
              <CheckCircle
                transition="200ms"
                color="$borderSubtle"
                size="$4xl"
              />
            )}
            {index > currentIndex && !isVisitedFutureStep && (
              <Lock transition="200ms" color="$borderSubtle" size="$4xl" />
            )}
          </TamaguiTabs.Tab>

          {numbered && (
            <SizableText color="$foregroundBody" fontFamily="$code">
              {String(itemIndex + 1).padStart(2, "0")}
            </SizableText>
          )}

          <SizableText
            transition="200ms"
            fontFamily="$heading"
            color={
              state.currentStep === value ? "$foreground" : "$borderSubtle"
            }>
            {children}
          </SizableText>
        </XStack>
      </YStack>
    );
  }
);

export const StepperContentList = styled(View, {
  position: "relative",
  flex: 1,
  minWidth: 0
});

export const StepperContentItem = TamaguiTabs.Content.styleable(
  ({ children, value, ...rest }: TamaguiTabsContentProps, forwardedRef) => {
    return (
      <AnimatedView key={value}>
        <TamaguiTabs.Content ref={forwardedRef} {...rest} value={value}>
          {children}
        </TamaguiTabs.Content>
      </AnimatedView>
    );
  }
);

export const StepperHeader = withStaticProperties(StepperHeaderList, {
  Item: StepperHeaderItem
});

export const StepperContent = withStaticProperties(StepperContentList, {
  Item: StepperContentItem
});

export const StepperNextButton = NextButton.styleable(
  (
    { disabled, onPress, ...props }: NextButtonProps,
    forwardedRef: Ref<TamaguiElement>
  ) => {
    const { setCurrentStep, state } = InternalStateContext.useStyledContext();
    const nextStep = state.steps[state.steps.indexOf(state.currentStep) + 1];

    return (
      <NextButton
        ref={forwardedRef}
        {...props}
        disabled={disabled || !nextStep}
        onPress={(
          event: Parameters<NonNullable<NextButtonProps["onPress"]>>[0]
        ) => {
          onPress?.(event);
          if (nextStep) {
            setCurrentStep(nextStep);
          }
        }}
      />
    );
  }
);

export const StepperPreviousButton = PreviousButton.styleable(
  (
    { disabled, onPress, ...props }: PreviousButtonProps,
    forwardedRef: Ref<TamaguiElement>
  ) => {
    const { setCurrentStep, state } = InternalStateContext.useStyledContext();
    const previousStep =
      state.steps[state.steps.indexOf(state.currentStep) - 1];

    return (
      <PreviousButton
        ref={forwardedRef}
        {...props}
        disabled={disabled || !previousStep}
        onPress={(
          event: Parameters<NonNullable<PreviousButtonProps["onPress"]>>[0]
        ) => {
          onPress?.(event);
          if (previousStep) {
            setCurrentStep(previousStep);
          }
        }}
      />
    );
  }
);

export const Stepper = withStaticProperties(StepperFrame, {
  Header: StepperHeader,
  Content: StepperContent,
  NextButton: StepperNextButton,
  PreviousButton: StepperPreviousButton
});

const StepperRovingIndicator = styled(YStack, {
  position: "absolute",
  backgroundColor: "$backgroundElevated",
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
        backgroundColor: "$background",
        opacity: 1,
        color: "$foreground"
      }
    },

    intent: {
      true: {
        backgroundColor: "$backgroundElevated",
        opacity: 1,
        color: "$foregroundBody"
      }
    }
  },

  defaultVariants: {
    active: false,
    intent: false
  }
});

const _StepperRovingIndicatorImpl = StepperRovingIndicator.styleable(
  (props, forwardedRef) => {
    return (
      <StepperRovingIndicator
        ref={forwardedRef}
        transition="200ms"
        {...props}
      />
    );
  }
);

const AnimatedView = styled(View, {
  flex: 1,
  x: 0,
  opacity: 1,
  position: "absolute",
  height: "100%",
  width: "100%",

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
          zIndex: "$0",
          x: direction < 0 ? -50 : 50,
          opacity: 0
        }
      })
    }
  } as const
});
