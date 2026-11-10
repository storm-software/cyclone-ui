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

import { HeadingExtraSmallText } from "@cyclone-ui/heading-text";
import { ConfirmCircle, Lock, Pencil } from "@cyclone-ui/icons";
import type { NextButtonProps } from "@cyclone-ui/next-button";
import { NextButton } from "@cyclone-ui/next-button";
import { NumberText } from "@cyclone-ui/number-text";
import type { PreviousButtonProps } from "@cyclone-ui/previous-button";
import { PreviousButton } from "@cyclone-ui/previous-button";
import { AnimatePresence } from "@tamagui/animate-presence";
import type {
  GetProps,
  TamaguiComponent,
  TamaguiElement,
  ViewProps
} from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  getVariableValue,
  styled,
  Theme,
  useTheme,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type {
  TabLayout as TamaguiTabLayout,
  TabsContentProps as TamaguiTabsContentProps,
  TabsProps as TamaguiTabsProps,
  TabsTabProps as TamaguiTabsTabProps
} from "@tamagui/tabs";
import { Tabs as TamaguiTabs } from "@tamagui/tabs";
import { SizableText } from "@tamagui/text";
import type {
  Dispatch,
  ReactElement,
  ReactNode,
  Ref,
  SetStateAction
} from "react";
import {
  Children,
  cloneElement,
  createContext,
  Fragment,
  isValidElement,
  useContext,
  useLayoutEffect,
  useState
} from "react";
import { Circle, Line, Path, Svg } from "react-native-svg";

export type StepperSize = "sm" | "lg";

export type StepperOrientation = "horizontal" | "vertical";

export type StepperLineStyle = "solid" | "dashed";

/**
 * `all` shows every step's title and description next to its marker.
 * `current` shows only the current step's, above the markers.
 */
export type StepperDetails = "all" | "current";

/**
 * `complete` steps come before the current one. Later steps are `visited`
 * once they have been selected, and `locked` until then.
 */
export type StepperStepStatus = "complete" | "current" | "visited" | "locked";

/** What a `marker` render function gets for its step. */
export interface StepperStep {
  index: number;
  status: StepperStepStatus;
  /** Whether the pointer is over a step the user can navigate to. */
  hovered: boolean;
  /** The color token the default marker paints the step with. */
  color: "primary" | "primary-hovered" | "hairline" | "hairline-hovered";
}

// In px: the marker's diameter, the ring and line strokes, a vertical line's
// length and the default icon size.
const STEPPER_SIZES = {
  sm: { marker: 32, ring: 1.5, line: 2, length: 40, icon: 16 },
  lg: { marker: 54, ring: 2, line: 3, length: 75, icon: 24 }
} as const;

// Each step's line, then its ring, fill one after another. Every segment
// takes `FILL_DURATION` ms, so a jump across steps takes at most
// `MAX_FILL_DURATION` ms.
const FILL_DURATION = 200;
const MAX_FILL_DURATION = 600;

// Web-only CSS transition: react-native-svg passes `style` to the DOM, but
// its shape types don't declare it.
// ponytail: native snaps to the new fill; drive strokeDashoffset with Reanimated if native needs the animation
const fillTransition = (duration: number, delay: number): object => ({
  style: {
    transition: `stroke-dashoffset ${duration}ms linear ${delay}ms, stroke 200ms`
  }
});

// Raw `SizableText` defaults to the `color` key, which the themes lack.
const StepperText = styled(SizableText, {
  color: "ink"
});

const STATUS_ICONS = {
  complete: ConfirmCircle,
  current: Pencil,
  visited: ConfirmCircle,
  locked: Lock
} as const;

export interface StepperState {
  currentStep: string;
  /**
   * The step selected before `currentStep`, which the fill animates from
   */
  previousStep: string;
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
}

const defaultContextValues = {
  state: {
    activeAt: null,
    currentStep: "",
    previousStep: "",
    intentAt: null,
    prevActiveAt: null,
    steps: [] as string[],
    visitedSteps: [] as string[]
  },
  setState: ((_next: StepperState) => {}) as Dispatch<
    SetStateAction<StepperState>
  >,
  setCurrentStep: (_currentStep: string) => {},
  handleOnInteraction: ((_type, _layout) => {}) as NonNullable<
    TamaguiTabsTabProps["onInteraction"]
  >,
  numbered: false,
  size: "lg" as StepperSize,
  orientation: "vertical" as StepperOrientation,
  showDescription: "always" as "always" | "active",
  details: "all" as StepperDetails,
  themed: false,
  theme: "base"
} as const;

export const InternalStateContext = createStyledContext<{
  state: StepperState;
  setState: Dispatch<SetStateAction<StepperState>>;
  setCurrentStep: (currentStep: string) => void;
  handleOnInteraction: TamaguiTabsTabProps["onInteraction"];
  numbered: boolean;
  size: StepperSize;
  orientation: StepperOrientation;
  showDescription: "always" | "active";
  details: StepperDetails;
  themed: boolean;
  theme: string;
}>(defaultContextValues);

// The fill timing of the item's ring, read by `StepperMarker`.
const StepperStepContext = createContext<{
  status: StepperStepStatus;
  hovered: boolean;
  delay: number;
  duration: number;
}>({
  status: "locked",
  hovered: false,
  delay: 0,
  duration: FILL_DURATION
});

// Makes `step` current, remembering where the fill animates from.
const moveTo = (state: StepperState, step: string): StepperState => ({
  ...state,
  currentStep: step,
  previousStep: state.currentStep,
  visitedSteps: state.visitedSteps.includes(step)
    ? state.visitedSteps
    : [...state.visitedSteps, step]
});

export const StepperFrame = createStyledHOC(
  TamaguiTabs,
  (
    {
      children,
      numbered = false,
      size = "lg",
      orientation = "vertical",
      showDescription = "always",
      details = "all",
      themed = false,
      value,
      defaultValue,
      onValueChange,
      ...rest
    }: Omit<TamaguiTabsProps, "orientation"> & {
      numbered?: boolean;
      /** `sm` draws smaller markers with thinner rings and lines. */
      size?: StepperSize;
      orientation?: StepperOrientation;
      /** Show each step's description always, or only on the current step. */
      showDescription?: "always" | "active";
      /** Show every step's title and description, or only the current step's. */
      details?: StepperDetails;
      /** Draw completed steps' markers and lines with the `success` theme. */
      themed?: boolean;
      /**
       * The current step, for a controlled stepper (e.g. one that follows the
       * URL). Header presses and `Stepper.NextButton` / `PreviousButton` then
       * only call `onValueChange`.
       */
      value?: string;
      /** The step shown first by an uncontrolled stepper. */
      defaultValue?: string;
    },
    forwardedRef
  ) => {
    const [state, setState] = useState<StepperState>({
      ...defaultContextValues.state
    });

    const { steps, currentStep, visitedSteps } = state;
    // A controlled `value` decides the step: header presses and the buttons
    // only report the step they want through `onValueChange`.
    const controlled = value !== undefined;

    const setCurrentStep = (step: string) => {
      onValueChange?.(step);
      if (!controlled) {
        setState(next => moveTo(next, step));
      }
    };
    const setIntentIndicator = (intentAt: TamaguiTabLayout | null) =>
      setState(next => ({ ...next, intentAt }));
    const setActiveIndicator = (activeAt: TamaguiTabLayout | null) =>
      setState(next => ({ ...next, prevActiveAt: next.activeAt, activeAt }));

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
        // The first step shown fills in place, without animating from another.
        // eslint-disable-next-line react/set-state-in-effect
        setState(next => {
          const step =
            [value, defaultValue].find(
              candidate =>
                candidate !== undefined && next.steps.includes(candidate)
            ) ?? next.steps[0];

          return step === undefined
            ? next
            : {
                ...next,
                currentStep: step,
                previousStep: step,
                visitedSteps: [step]
              };
        });
      } else if (controlled && value !== currentStep && steps.includes(value)) {
        // eslint-disable-next-line react/set-state-in-effect
        setState(next => moveTo(next, value));
      }
    }, [controlled, currentStep, defaultValue, steps, value]);

    return (
      <InternalStateContext.Provider
        state={state}
        setState={setState}
        setCurrentStep={setCurrentStep}
        handleOnInteraction={handleOnInteraction}
        numbered={numbered}
        size={size}
        orientation={orientation}
        showDescription={showDescription}
        details={details}
        themed={themed}
        theme="base">
        <TamaguiTabs
          ref={forwardedRef}
          value={currentStep}
          flexDirection={orientation === "vertical" ? "row" : "column"}
          activationMode="manual"
          borderRadius="container"
          position="relative"
          {...rest}
          onValueChange={step => {
            // Steps that haven't been reached yet are locked.
            if (
              steps.indexOf(step) < steps.indexOf(currentStep) ||
              visitedSteps.includes(step)
            ) {
              setCurrentStep(step);
            }
          }}
          orientation={orientation}>
          {children}
        </TamaguiTabs>
      </InternalStateContext.Provider>
    );
  }
);

export const StepperHeaderList = createStyledHOC(
  YStack,
  ({ children, ...rest }: ViewProps, forwardedRef) => {
    const { details, numbered, size, state, setState } =
      InternalStateContext.useStyledContext();
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

    const items = Children.toArray(children).filter(
      isValidElement
    ) as ReactElement<{
      value: string;
      children?: ReactNode;
      description?: ReactNode;
    }>[];
    const current = Math.max(
      0,
      items.findIndex(item => item.props.value === state.currentStep)
    );

    // The steps, in order, are the header's items. Read on every render, so
    // added, removed or reordered items (and remounts) keep them in sync.
    const values = items.map(item => item.props.value);
    useLayoutEffect(() => {
      setState(next =>
        next.steps.length === values.length &&
        next.steps.every((step, index) => step === values[index])
          ? next
          : { ...next, steps: values }
      );
    });

    return (
      <YStack ref={forwardedRef} gap="3xl" {...rest}>
        {details === "current" && (
          <XStack gap="2xl" alignItems="baseline">
            {numbered && (
              // One inline run, so the animated numerator shares the
              // denominator's baseline. A flex row top-aligns them, and
              // NumberFlow's mask padding then drops the numerator.
              <StepperText
                fontSize="xs"
                fontWeight="medium"
                lineHeight="sm"
                // Shrinking would wrap the count onto two lines.
                flexShrink={0}
                whiteSpace="nowrap">
                <NumberText
                  display="inline"
                  fontSize="xs"
                  fontWeight="medium"
                  lineHeight="sm">
                  {current + 1}
                </NumberText>
                {` / ${items.length}`}
              </StepperText>
            )}
            {/* Every step's details share one grid cell, so it keeps the size
            of the largest. The current step's fade in while the others
            slide off to their side of it. */}
            <View display="grid" flexShrink={1}>
              {items.map(({ props: item }, index) => (
                <YStack
                  key={item.value}
                  gridColumn="1"
                  gridRow="1"
                  transition="300ms"
                  opacity={index === current ? 1 : 0}
                  x={index === current ? 0 : index < current ? -20 : 20}
                  pointerEvents={index === current ? "auto" : "none"}
                  aria-hidden={index !== current || undefined}>
                  <HeadingExtraSmallText
                    {...(size === "sm" && { fontSize: "sm" })}
                    lineHeight="sm"
                    color="emphasis">
                    {item.children}
                  </HeadingExtraSmallText>
                  {!!item.description && (
                    <StepperText
                      fontFamily="body"
                      size={size === "sm" ? "sm" : "md"}
                      fontWeight="normal"
                      color="subtle">
                      {item.description}
                    </StepperText>
                  )}
                </YStack>
              ))}
            </View>
          </XStack>
        )}

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
          loop={false}
          aria-label="Stepper"
          gap="3xl"
          backgroundColor="transparent">
          <AnimatePresence mode="wait" custom={{ direction }} initial={false}>
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

/**
 * The default step marker: a ring that fills as the stepper reaches the step.
 * Render it in a step's `marker` around your own icon to keep the animation.
 */
export const StepperMarker = ({ children, ...props }: ViewProps) => {
  const { size, orientation } = InternalStateContext.useStyledContext();
  const { status, hovered, delay, duration } = useContext(StepperStepContext);
  const theme = useTheme();
  const { marker, ring } = STEPPER_SIZES[size];
  const center = marker / 2;
  const radius = (marker - ring) / 2;
  const circumference = 2 * Math.PI * radius;
  const filled = status === "complete" || status === "current";
  // Clockwise from where the line from the previous step meets the ring
  const fillPath =
    orientation === "vertical"
      ? `M ${center} ${center - radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 ${-2 * radius}`
      : `M ${center - radius} ${center} a ${radius} ${radius} 0 1 1 ${2 * radius} 0 a ${radius} ${radius} 0 1 1 ${-2 * radius} 0`;

  return (
    <View
      width={marker}
      height={marker}
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Svg
        width={marker}
        height={marker}
        pointerEvents="none"
        style={{ position: "absolute" }}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={getVariableValue(
            hovered ? theme["hairline-hovered"] : theme.hairline,
            "color"
          )}
          strokeWidth={ring}
          {...fillTransition(duration, delay)}
        />
        <Path
          d={fillPath}
          fill="none"
          stroke={getVariableValue(
            hovered ? theme["primary-hovered"] : theme.primary,
            "color"
          )}
          strokeWidth={ring}
          strokeDasharray={circumference}
          strokeDashoffset={filled ? 0 : circumference}
          {...fillTransition(duration, delay)}
        />
      </Svg>
      {children}
    </View>
  );
};

const StepperLine = ({
  filled,
  delay,
  duration,
  reverse,
  lineStyle
}: {
  filled: boolean;
  delay: number;
  duration: number;
  /** Whether the fill is emptying, from the end of the line back. */
  reverse: boolean;
  lineStyle: StepperLineStyle;
}) => {
  const { size, orientation } = InternalStateContext.useStyledContext();
  const theme = useTheme();
  const { marker, line, length } = STEPPER_SIZES[size];
  const vertical = orientation === "vertical";
  const [measured, setMeasured] = useState(0);
  const dashed = lineStyle === "dashed";
  // A solid line is one dash in a 1×1 viewBox stretched over the line. Dashed
  // lines are drawn in px so their dashes keep their size, with the gaps
  // stretched so the line starts and ends on a dash.
  const span = dashed ? (vertical ? length : measured) : 1;
  const thickness = dashed ? line : 1;
  const dash = dashed ? line * 2 : 1;
  const count = !dashed
    ? 1
    : span > dash
      ? Math.round((span + dash) / (dash * 2))
      : 0;
  const pitch = count > 1 ? (span - dash) / (count - 1) : 0;

  return (
    <View
      {...(vertical
        ? { width: line, height: length, marginLeft: (marker - line) / 2 }
        : {
            flex: 1,
            minWidth: marker,
            height: line,
            onLayout: event => setMeasured(event.nativeEvent.layout.width)
          })}>
      <Svg
        width="100%"
        height="100%"
        pointerEvents="none"
        {...(!dashed && { viewBox: "0 0 1 1", preserveAspectRatio: "none" })}>
        {Array.from({ length: count }, (_, index) => {
          const start = index * pitch;
          const end = start + dash;
          const points = vertical
            ? { x1: thickness / 2, y1: start, x2: thickness / 2, y2: end }
            : { x1: start, y1: thickness / 2, x2: end, y2: thickness / 2 };

          return (
            <Fragment key={index}>
              <Line
                {...points}
                stroke={getVariableValue(theme.hairline, "color")}
                strokeWidth={thickness}
              />
              <Line
                {...points}
                stroke={getVariableValue(theme.primary, "color")}
                strokeWidth={thickness}
                strokeDasharray={dash}
                strokeDashoffset={filled ? 0 : dash}
                // The fill sweeps the line in `duration`, drawing each dash
                // as it passes
                {...fillTransition(
                  (dash / span) * duration,
                  delay + ((reverse ? span - end : start) / span) * duration
                )}
              />
            </Fragment>
          );
        })}
      </Svg>
    </View>
  );
};

export const StepperHeaderItem = createStyledHOC(
  TamaguiTabs.Tab,
  (
    {
      children,
      description,
      marker,
      lineStyle = "solid",
      index: itemIndex = 0,
      value,
      ...rest
    }: Omit<GetProps<typeof TamaguiTabs.Tab>, "marker"> & {
      index?: number;
      /** Displayed below the step name. */
      description?: ReactNode;
      /** Renders the step's marker. Defaults to a `StepperMarker` with a status icon. */
      marker?: (step: StepperStep) => ReactNode;
      /** The style of the line leading to this step. */
      lineStyle?: StepperLineStyle;
    },
    forwardedRef
  ) => {
    const {
      details,
      handleOnInteraction,
      numbered,
      orientation,
      showDescription,
      size,
      state,
      themed
    } = InternalStateContext.useStyledContext();
    const themeName = useThemeName();
    const { currentStep, previousStep, steps, visitedSteps } = state;
    const [pointerOver, setPointerOver] = useState(false);

    const index = steps.indexOf(value);
    const currentIndex = steps.indexOf(currentStep);
    const status: StepperStepStatus =
      index < 0 || index > currentIndex
        ? visitedSteps.includes(value)
          ? "visited"
          : "locked"
        : index < currentIndex
          ? "complete"
          : "current";
    const filled = status === "complete" || status === "current";
    const navigable = status === "complete" || status === "visited";
    const hovered = pointerOver && navigable;
    const color: StepperStep["color"] = `${filled ? "primary" : "hairline"}${
      hovered ? "-hovered" : ""
    }`;
    const StatusIcon = STATUS_ICONS[status];
    // Always a named theme: switching from none to a name remounts the
    // children, which would cut the fill transitions short.
    const vectorTheme = themed && status === "complete" ? "success" : themeName;

    // Segment `2i - 1` is step i's line and `2i` its ring. Moving from one
    // step to another fills (or empties) the segments between them in order.
    const from = Math.max(0, steps.indexOf(previousStep)) * 2;
    const to = currentIndex * 2;
    const duration = Math.min(
      FILL_DURATION,
      MAX_FILL_DURATION / Math.max(1, Math.abs(to - from))
    );
    const delayOf = (segment: number) =>
      Math.max(0, to > from ? segment - from - 1 : from - segment) * duration;

    return (
      <View
        flexDirection={orientation === "vertical" ? "column" : "row"}
        alignItems={orientation === "vertical" ? undefined : "center"}
        flex={orientation === "vertical" || itemIndex === 0 ? undefined : 1}
        gap="3xl">
        {itemIndex > 0 && (
          <Theme name={vectorTheme}>
            <StepperLine
              filled={filled}
              delay={delayOf(index * 2 - 1)}
              duration={duration}
              reverse={to < from}
              lineStyle={lineStyle}
            />
          </Theme>
        )}

        <TamaguiTabs.Tab
          ref={forwardedRef}
          flexDirection="row"
          flexShrink={1}
          alignItems="center"
          gap={size === "sm" ? "3xl" : "5xl"}
          cursor={
            navigable
              ? "pointer"
              : status === "locked"
                ? "not-allowed"
                : "default"
          }
          aria-disabled={status === "locked" || undefined}
          // Without its details, the tab is named by its title.
          aria-label={
            details === "current" && typeof children === "string"
              ? children
              : undefined
          }
          {...rest}
          value={value}
          onInteraction={handleOnInteraction}
          onMouseEnter={() => setPointerOver(true)}
          onMouseLeave={() => setPointerOver(false)}>
          <StepperStepContext.Provider
            value={{
              status,
              hovered,
              delay: delayOf(index * 2),
              duration
            }}>
            <Theme name={vectorTheme}>
              {marker ? (
                marker({ index: itemIndex, status, hovered, color })
              ) : (
                <StepperMarker>
                  <StatusIcon color={color} size={STEPPER_SIZES[size].icon} />
                </StepperMarker>
              )}
            </Theme>
          </StepperStepContext.Provider>

          {details === "all" && (
            <YStack
              flexDirection="row"
              alignItems="flex-end"
              justifyContent="center"
              gap="2xl">
              {numbered && (
                <StepperText
                  transition="200ms"
                  fontSize="xs"
                  fontWeight="medium"
                  lineHeight="sm"
                  color={
                    hovered
                      ? "ink-hovered"
                      : (orientation === "horizontal" && filled) ||
                          status === "current"
                        ? "ink"
                        : "ink-inactive"
                  }>
                  {`${String(itemIndex + 1).padStart(2, "0")}.`}
                </StepperText>
              )}
              <YStack flexShrink={1}>
                <HeadingExtraSmallText
                  transition="200ms"
                  {...(size === "sm" && { fontSize: "sm" })}
                  lineHeight="sm"
                  color={
                    hovered
                      ? "emphasis-hovered"
                      : (orientation === "horizontal" && filled) ||
                          status === "current"
                        ? "emphasis"
                        : "emphasis-inactive"
                  }>
                  {children}
                </HeadingExtraSmallText>
                {!!description &&
                  (showDescription === "always" || status === "current") && (
                    <StepperText
                      transition="200ms"
                      fontFamily="body"
                      size={size === "sm" ? "sm" : "md"}
                      fontWeight="normal"
                      color={
                        hovered
                          ? "subtle-hovered"
                          : (orientation === "horizontal" && filled) ||
                              status === "current"
                            ? "subtle"
                            : "subtle-inactive"
                      }>
                      {description}
                    </StepperText>
                  )}
              </YStack>
            </YStack>
          )}
        </TamaguiTabs.Tab>
      </View>
    );
  }
);

export const StepperContentList = styled(View, {
  position: "relative",
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0
});

export const StepperContentItem = createStyledHOC(
  TamaguiTabs.Content,
  ({ children, value, ...rest }: TamaguiTabsContentProps, forwardedRef) => {
    const { state } = InternalStateContext.useStyledContext();

    // Only the current step's content takes up space, so it sizes the stepper.
    if (value !== state.currentStep) {
      return null;
    }

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

export const StepperNextButton: TamaguiComponent<
  NextButtonProps,
  TamaguiElement
> = createStyledHOC(
  NextButton,
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
        disabled={disabled ?? !nextStep}
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

export const StepperPreviousButton: TamaguiComponent<
  PreviousButtonProps,
  TamaguiElement
> = createStyledHOC(
  PreviousButton,
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
        disabled={disabled ?? !previousStep}
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
  Marker: StepperMarker,
  NextButton: StepperNextButton,
  PreviousButton: StepperPreviousButton
});

const StepperRovingIndicator = styled(YStack, {
  position: "absolute",
  backgroundColor: "surface",
  opacity: "1 enter:0 exit:0",
  transition: "200ms",
  borderRadius: 1000_000_000,
  variants: {
    active: {
      true: {
        backgroundColor: "primary",
        opacity: 1,
        color: "primary"
      }
    },

    intent: {
      true: {
        backgroundColor: "surface",
        opacity: 1,
        color: "ink"
      }
    }
  },
  defaultVariants: {
    active: false,
    intent: false
  }
});

// Only referenced by the commented-out roving indicator in `StepperHeaderList`.
// @ts-expect-error TS6133: intentionally unused until the indicator is re-enabled
const _StepperRovingIndicatorImpl = createStyledHOC(
  StepperRovingIndicator,
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
  flexGrow: 1,
  x: 0,
  opacity: 1,

  transition: "slow",
  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: styled.dynamic<number>(direction => ({
      x: `enter:${direction > 0 ? -50 : 50}px exit:${direction < 0 ? -50 : 50}px`,
      opacity: "enter:0 exit:0",
      zIndex: "exit:0"
    }))
  } as const
});
