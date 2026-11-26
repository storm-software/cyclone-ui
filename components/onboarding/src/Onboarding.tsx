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

import { BodyText } from "@cyclone-ui/body-text";
import type { ContainerProps } from "@cyclone-ui/container";
import { Container } from "@cyclone-ui/container";
import { EyebrowText } from "@cyclone-ui/eyebrow-text";
import { HeadingLargeText } from "@cyclone-ui/heading-text";
import { NextButton } from "@cyclone-ui/next-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import {
  styled,
  Text,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { KeyboardEvent, ReactNode } from "react";
import {
  createContext,
  forwardRef,
  use,
  useEffect,
  useId,
  useRef,
  useState
} from "react";

export interface OnboardingContextValue {
  /** The current step, from 1. */
  currentStep: number;
  /** The number of steps. */
  totalSteps: number;
  /** The current sub-step of the current step, from 0. */
  stepValue: number;
  /** Go to a step (from 1), at its first sub-step. */
  setStep: (step: number) => void;
  /** Go to a sub-step (from 0) of the current step. */
  setStepValue: (value: number) => void;
  /** Whether `canGoNext` lets the user move on. */
  canGoNext: boolean;
  /** Whether there is a sub-step or step to go back to. */
  canGoBack: boolean;
  /** Whether this is the last sub-step of the last step. */
  isLastStep: boolean;
  /** Go to the next sub-step or step, or complete on the last one. */
  handleNext: () => void;
  /** Go to the previous sub-step or step. */
  handleBack: () => void;
  /**
   * Internal: whether the step just changed, which clears it. The newly shown
   * step takes focus if the change lost it.
   */
  takeNavigation: () => boolean;
}

// A plain context: a styled context Provider resets its values to defaults.
const OnboardingContext = createContext<OnboardingContextValue | null>(null);

/** The state of the nearest `Onboarding`. */
export const useOnboarding = () => {
  const context = use(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an Onboarding");
  }

  return context;
};

export interface OnboardingProps extends Omit<ContainerProps, "children"> {
  /** The number of steps. */
  totalSteps: number;
  /** The current step, from 1. Makes the onboarding controlled. */
  value?: number;
  /** The initial step when uncontrolled. Defaults to 1. */
  defaultValue?: number;
  /** Called with the new step when it changes. */
  onValueChange?: (step: number) => void;
  /**
   * The number of sub-steps of each step, by step (from 1). `Next` and
   * `Back` page through a step's sub-steps (such as a `FeatureCarousel`'s
   * items) before moving to another step. Steps not listed have one.
   */
  subSteps?: Record<number, number>;
  /** Whether the user can move on from a step and sub-step. Defaults to always. */
  canGoNext?: (step: number, stepValue: number) => boolean;
  /** Called when `Next` is pressed on the last sub-step of the last step. */
  onComplete?: () => void;
  children?: ReactNode;
}

const NO_SUB_STEPS: Record<number, number> = {};

const OnboardingRoot = forwardRef<TamaguiElement, OnboardingProps>(
  (
    {
      totalSteps,
      value,
      defaultValue = 1,
      onValueChange,
      subSteps = NO_SUB_STEPS,
      canGoNext: canGoNextProp,
      onComplete,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [currentStep, setCurrentStep] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    const [storedStepValue, setStoredStepValue] = useState(0);
    const navigatedRef = useRef(false);

    const lastSubStep = (step: number) => Math.max((subSteps[step] ?? 1) - 1, 0);
    // A controlled step can change under a stale sub-step.
    const stepValue = Math.min(storedStepValue, lastSubStep(currentStep));
    const canGoNext = canGoNextProp?.(currentStep, stepValue) ?? true;

    const setStep = (step: number) => {
      navigatedRef.current = true;
      setStoredStepValue(0);
      setCurrentStep(step);
    };

    const context: OnboardingContextValue = {
      currentStep,
      totalSteps,
      stepValue,
      setStep,
      setStepValue: setStoredStepValue,
      canGoNext,
      canGoBack: currentStep > 1 || stepValue > 0,
      isLastStep:
        currentStep >= totalSteps && stepValue >= lastSubStep(currentStep),
      handleNext: () => {
        if (!canGoNext) return;
        if (stepValue < lastSubStep(currentStep)) {
          setStoredStepValue(stepValue + 1);
        } else if (currentStep < totalSteps) {
          setStep(currentStep + 1);
        } else {
          onComplete?.();
        }
      },
      handleBack: () => {
        if (stepValue > 0) {
          setStoredStepValue(stepValue - 1);
        } else if (currentStep > 1) {
          // Back into a step lands on its last sub-step.
          setStep(currentStep - 1);
          setStoredStepValue(lastSubStep(currentStep - 1));
        }
      },
      takeNavigation: () => {
        const navigated = navigatedRef.current;
        navigatedRef.current = false;
        return navigated;
      }
    };

    return (
      <OnboardingContext value={context}>
        <Container
          ref={forwardedRef}
          variant="elevated"
          padding="8xl max-sm:4xl"
          gap="7xl max-sm:5xl"
          {...props}>
          {children}
        </Container>
      </OnboardingContext>
    );
  }
);

export interface OnboardingStepProps extends ViewProps {
  /** The step (from 1) that shows this content. */
  step: number;
}

/** Content shown only on its `step`. */
const OnboardingStep = forwardRef<TamaguiElement, OnboardingStepProps>(
  ({ step, children, ...props }, forwardedRef) => {
    const { currentStep, takeNavigation } = useOnboarding();
    const active = currentStep === step;
    const ref = useRef<TamaguiElement>(null);
    const composedRef = useComposedRefs<TamaguiElement>(forwardedRef, ref);

    // A step change can unmount or disable the focused button (`Back` on the
    // first step, a gated `Next`), which drops focus to the page: move it to
    // the new step instead, so keyboard users stay in the onboarding.
    useEffect(() => {
      if (!active || !takeNavigation()) return;
      const focused = globalThis.document?.activeElement as
        | HTMLButtonElement
        | null
        | undefined;
      if (!focused || focused === globalThis.document.body || focused.disabled) {
        (ref.current as HTMLElement | null)?.focus();
      }
    }, [active, takeNavigation]);

    if (!active) return null;

    return (
      <View
        ref={composedRef}
        tabIndex={-1}
        outlineStyle="none"
        transition="200ms"
        opacity="1 enter:0"
        {...props}>
        {children}
      </View>
    );
  }
);

export type OnboardingStepIndicatorVariant = "dots" | "pills";

export interface OnboardingStepIndicatorProps extends ViewProps {
  /** Round dots (the current one stretched) or equal bars. Defaults to `dots`. */
  variant?: OnboardingStepIndicatorVariant;
}

const OnboardingStepDot = styled(View, {
  displayName: "OnboardingStepDot",
  transition: "200ms",
  borderRadius: 1000_000,
  backgroundColor: "primary/20",
  variants: {
    variant: {
      dots: { width: 8, height: 8 },
      pills: { height: 4, flexGrow: 1, flexBasis: 0, maxWidth: 32 }
    },
    complete: {
      true: { backgroundColor: "primary/60" }
    },
    active: {
      true: { backgroundColor: "primary" }
    }
  } as const
});

/** The progress through the steps. */
const OnboardingStepIndicator = forwardRef<
  TamaguiElement,
  OnboardingStepIndicatorProps
>(({ variant = "dots", ...props }, forwardedRef) => {
  const { currentStep, totalSteps } = useOnboarding();

  return (
    <View
      ref={forwardedRef}
      role="progressbar"
      aria-label={`Step ${currentStep} of ${totalSteps}`}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="md"
      {...props}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <OnboardingStepDot
          key={i}
          variant={variant}
          complete={i + 1 < currentStep}
          active={i + 1 === currentStep}
          {...(variant === "dots" && i + 1 === currentStep && { width: 24 })}
        />
      ))}
    </View>
  );
});

export interface OnboardingHeaderProps extends ViewProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Custom content in place of the title and description. */
  children?: ReactNode;
}

/** A centered title and description. */
const OnboardingHeader = forwardRef<TamaguiElement, OnboardingHeaderProps>(
  ({ title, description, children, ...props }, forwardedRef) => (
    <View ref={forwardedRef} alignItems="center" gap="xl" {...props}>
      {children ?? (
        <>
          {title != null && (
            <HeadingLargeText variant="editorial" textAlign="center">
              {title}
            </HeadingLargeText>
          )}
          {description != null && (
            <BodyText textAlign="center">{description}</BodyText>
          )}
        </>
      )}
    </View>
  )
);

export interface OnboardingNavigationProps extends ViewProps {
  /** Defaults to `Back`. */
  backLabel?: string;
  /** Defaults to `Next`. */
  nextLabel?: string;
  /** The `Next` label on the last step. Defaults to `Get started`. */
  completeLabel?: string;
}

/** `Back` and `Next` buttons; `Next` completes the onboarding on the last step. */
const OnboardingNavigation = forwardRef<
  TamaguiElement,
  OnboardingNavigationProps
>(
  (
    {
      backLabel = "Back",
      nextLabel = "Next",
      completeLabel = "Get started",
      ...props
    },
    forwardedRef
  ) => {
    const { canGoBack, canGoNext, isLastStep, handleBack, handleNext } =
      useOnboarding();
    const label = isLastStep ? completeLabel : nextLabel;

    return (
      <View
        ref={forwardedRef}
        role="group"
        aria-label="Onboarding navigation"
        flexDirection="row"
        // The buttons stack when their labels don't fit side by side.
        flexWrap="wrap"
        gap="3xl"
        {...props}>
        {/* Labeled buttons: drop the arrow buttons' "Previous" / "Next"
            labels and tooltips. One `Next` button for every step keeps
            focus on it when its label turns to `completeLabel`. */}
        <PreviousButton
          variant="outlined"
          aria-label={backLabel}
          tooltip={undefined}
          disabled={!canGoBack}
          onPress={handleBack}>
          {backLabel}
        </PreviousButton>
        <NextButton
          variant="primary"
          aria-label={label}
          tooltip={undefined}
          disabled={!canGoNext}
          onPress={handleNext}>
          {label}
        </NextButton>
      </View>
    );
  }
);

export const Onboarding = withStaticProperties(OnboardingRoot, {
  Step: OnboardingStep,
  StepIndicator: OnboardingStepIndicator,
  Header: OnboardingHeader,
  Navigation: OnboardingNavigation
});

interface FeatureCarouselContextValue {
  value: number;
  setValue: (value: number) => void;
}

const FeatureCarouselContext =
  createContext<FeatureCarouselContextValue | null>(null);

export interface FeatureCarouselProps extends ViewProps {
  /**
   * The selected item (from 0). Makes the carousel controlled; inside an
   * `Onboarding` it defaults to the onboarding's sub-step, so `Next` and
   * `Back` page through the items.
   */
  value?: number;
  /** The initial item when uncontrolled outside an `Onboarding`. */
  defaultValue?: number;
  /** Called with the new item when it changes. */
  onValueChange?: (value: number) => void;
}

/**
 * A list of features, one expanded at a time. Arrow, `Home` and `End` keys
 * move between them.
 */
const FeatureCarouselRoot = forwardRef<TamaguiElement, FeatureCarouselProps>(
  (
    { value: valueProp, defaultValue = 0, onValueChange, children, ...props },
    forwardedRef
  ) => {
    const onboarding = use(OnboardingContext);
    const bound = valueProp === undefined ? onboarding : null;
    const [value, setValue] = useControllableState({
      prop: bound ? bound.stepValue : valueProp,
      defaultProp: defaultValue,
      onChange: next => {
        bound?.setStepValue(next);
        onValueChange?.(next);
      }
    });

    return (
      <FeatureCarouselContext
        value={{ value, setValue }}>
        <View
          ref={forwardedRef}
          role="tablist"
          aria-label="Features"
          aria-orientation="vertical"
          gap="2xl"
          {...props}>
          {children}
        </View>
      </FeatureCarouselContext>
    );
  }
);

const FeatureCarouselItemFrame = styled(View, {
  displayName: "FeatureCarouselItem",
  transition: "200ms",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "2xl",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  borderRadius: "control",
  borderWidth: 1,
  cursor: "pointer",
  outlineStyle: "none",
  boxShadow: "none focus-visible:ring-offset",
  variants: {
    // Keep both states' values the same shape: v3 can leave a hover stuck
    // when a press removes the element's `hover:` clause.
    active: {
      true: {
        backgroundColor: "primary/10 hover:primary/10",
        borderColor: "primary/30 hover:primary/30"
      },
      false: {
        backgroundColor: "transparent hover:surface-hovered",
        borderColor: "transparent hover:transparent"
      }
    }
  } as const,
  defaultVariants: {
    active: false
  }
});

const ARROW_STEPS: Record<string, number> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1
};

export interface FeatureCarouselItemProps extends ViewProps {
  /** The item's place in the carousel, from 0. */
  index: number;
  icon?: ReactNode;
  /** Shown while the item is selected. */
  description?: ReactNode;
  /** The item's title. */
  children?: ReactNode;
}

const FeatureCarouselItem = forwardRef<
  TamaguiElement,
  FeatureCarouselItemProps
>(({ index, icon, description, children, onPress, ...props }, forwardedRef) => {
  const carousel = use(FeatureCarouselContext);
  if (!carousel) {
    throw new Error("FeatureCarousel.Item must be used within a FeatureCarousel");
  }
  const { value, setValue } = carousel;
  const active = value === index;

  // Only the selected item is in the tab order, and moving to another
  // selects it, so `Enter` and `Space` have nothing left to do.
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const tabs = event.currentTarget
      .closest('[role="tablist"]')
      ?.querySelectorAll<HTMLElement>('[role="tab"]');
    const count = tabs?.length ?? 0;
    const step = ARROW_STEPS[event.key];
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? count - 1
          : step === undefined
            ? undefined
            : (index + step + count) % count;
    if (next === undefined) return;
    event.preventDefault();
    setValue(next);
    tabs?.[next]?.focus();
  };

  return (
    <FeatureCarouselItemFrame
      ref={forwardedRef}
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      active={active}
      {...props}
      onPress={event => {
        onPress?.(event);
        setValue(index);
      }}
      onKeyDown={handleKeyDown}>
      {icon != null && (
        // A View can't carry `color` in v3, so a Text passes it down to
        // `currentColor` icons.
        <Text
          display="flex"
          flexShrink={0}
          transition="200ms"
          color={active ? "primary" : "ink"}>
          {icon}
        </Text>
      )}
      <View flex={1} minWidth={0} gap="lg">
        <BodyText fontWeight="semibold" color="emphasis">
          {children}
        </BodyText>
        {active && description != null && (
          <BodyText size="sm" transition="200ms" opacity="1 enter:0">
            {description}
          </BodyText>
        )}
      </View>
    </FeatureCarouselItemFrame>
  );
});

export const FeatureCarousel = withStaticProperties(FeatureCarouselRoot, {
  Item: FeatureCarouselItem
});

export interface TipsListProps extends ViewProps {
  /** A label shown above the tips. */
  title?: string;
}

/** A numbered list of tips. */
const TipsListRoot = forwardRef<TamaguiElement, TipsListProps>(
  ({ title, children, ...props }, forwardedRef) => {
    const titleId = useId();

    return (
      <View ref={forwardedRef} gap="3xl" {...props}>
        {title && (
          <EyebrowText id={titleId} render="p">
            {title}
          </EyebrowText>
        )}
        <View
          render="ol"
          aria-label={title ? undefined : "Tips"}
          aria-labelledby={title ? titleId : undefined}
          flexDirection="column"
          margin={0}
          padding={0}
          gap="4xl">
          {children}
        </View>
      </View>
    );
  }
);

export interface TipsListItemProps extends ViewProps {
  /** The number shown beside the tip. */
  number?: number;
}

const TipsListItem = forwardRef<TamaguiElement, TipsListItemProps>(
  ({ number, children, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      render="li"
      flexDirection="row"
      alignItems="flex-start"
      gap="2xl"
      {...props}>
      {number != null && (
        <View
          aria-hidden={true}
          width={24}
          height={24}
          flexShrink={0}
          borderRadius="sm"
          alignItems="center"
          justifyContent="center"
          backgroundColor="primary/10">
          <BodyText size="sm" fontWeight="semibold" color="primary">
            {number}
          </BodyText>
        </View>
      )}
      {/* A div, so a tip can hold more than text. */}
      <BodyText render="div" flex={1} minWidth={0}>
        {children}
      </BodyText>
    </View>
  )
);

export const TipsList = withStaticProperties(TipsListRoot, {
  Item: TipsListItem
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Onboarding.Step` is undefined on the server).
 */
export {
  FeatureCarouselItem,
  OnboardingHeader,
  OnboardingNavigation,
  OnboardingStep,
  OnboardingStepIndicator,
  TipsListItem
};
