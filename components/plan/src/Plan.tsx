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

import type { IconProps } from "@cyclone-ui/icons";
import { Circle, ConfirmCircle, Dot, MapTrifold } from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceDescriptionProps,
  TraceLineProps,
  TraceTitleProps
} from "@cyclone-ui/trace";
import { Trace, TraceDescription, TraceTitle } from "@cyclone-ui/trace";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import { Children, createContext, forwardRef, isValidElement, use } from "react";

// A plain context: a styled context Provider resets its values to defaults.
const PlanContext = createContext(false);

export type PlanProps = TraceCollapsibleProps & {
  /** Whether the agent is still working through the plan. Defaults to `false`. */
  isStreaming?: boolean;
};

/**
 * The steps an agent decides on before it starts, and how far it has got: a
 * line with the goal and its progress that opens into the steps. It starts
 * open.
 */
const PlanRoot = forwardRef<TamaguiElement, PlanProps>(
  ({ isStreaming = false, defaultOpen = true, ...props }, forwardedRef) => (
    <PlanContext value={isStreaming}>
      <Trace.Collapsible
        ref={forwardedRef}
        defaultOpen={defaultOpen}
        {...props}
      />
    </PlanContext>
  )
);

PlanRoot.displayName = "Plan";

const PlanActionFrame = styled(View, {
  name: "PlanAction",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
  gap: "lg"
});

export type PlanActionProps = GetProps<typeof PlanActionFrame>;

/**
 * Buttons beside the plan's line, such as "Edit". Put it in `Plan.Header`:
 * it is rendered next to the trigger, not inside it.
 */
const PlanAction = forwardRef<TamaguiElement, PlanActionProps>(
  (props, forwardedRef) => <PlanActionFrame ref={forwardedRef} {...props} />
);

PlanAction.displayName = "Plan.Action";

export type PlanHeaderProps = TraceCollapsibleTriggerProps;

/**
 * The line that opens and closes the steps: a map icon, then its children,
 * a `Plan.Title` and a `Plan.Description`. It shimmers while the plan
 * streams.
 */
const PlanHeader = forwardRef<TamaguiElement, PlanHeaderProps>(
  ({ children, ...props }, forwardedRef) => {
    const isStreaming = use(PlanContext);
    // Buttons can't sit inside the trigger's button.
    const items = Children.toArray(children);
    const isAction = (child: ReactNode) =>
      isValidElement(child) && child.type === PlanAction;
    const actions = items.filter(isAction);
    const hasActions = actions.length > 0;

    const trigger = (
      <Trace.Collapsible.Trigger
        ref={forwardedRef}
        {...(hasActions && { alignSelf: "center", flexShrink: 1 })}
        {...props}>
        <Trace.Line status={isStreaming ? "running" : undefined}>
          <Trace.Icon>
            <MapTrifold />
          </Trace.Icon>
          {items.filter(child => !isAction(child))}
        </Trace.Line>
      </Trace.Collapsible.Trigger>
    );

    return hasActions ? (
      // The trigger's margin keeps its focus ring clear of the clipping
      // collapsible; the actions sit beside it.
      <View flexDirection="row" alignItems="center" gap="xl" minWidth={0}>
        {trigger}
        {actions}
      </View>
    ) : (
      trigger
    );
  }
);

PlanHeader.displayName = "Plan.Header";

export type PlanContentProps = TraceCollapsibleContentProps;

/**
 * The steps, a `Trace` indented under the line. Text before them, such as how
 * the agent will go about it, goes inside too.
 */
const PlanContent = forwardRef<TamaguiElement, PlanContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Content ref={forwardedRef} {...props}>
      <Trace>{children}</Trace>
    </Trace.Collapsible.Content>
  )
);

PlanContent.displayName = "Plan.Content";

// A ring with a dot in it, for the work in progress. `Trace.Icon` passes the
// size and color on to both icons.
const CircleDot = (props: IconProps) => (
  <View position="relative">
    <Circle {...props} />
    <View position="absolute" inset={0}>
      <Dot {...props} variant="filled" />
    </View>
  </View>
);

export type PlanStepStatus = "done" | "running" | "pending";

export type PlanStepProps = Omit<TraceLineProps, "status"> & {
  /** Defaults to `pending`. */
  status?: PlanStepStatus;
};

/**
 * One step: a check when done, a dotted circle while it runs (its title
 * shimmers while the plan streams) and a dimmed circle while it waits.
 */
const PlanStep = forwardRef<TamaguiElement, PlanStepProps>(
  ({ status = "pending", children, ...props }, forwardedRef) => {
    const isStreaming = use(PlanContext);

    return (
      <Trace.Line
        ref={forwardedRef}
        status={
          status === "pending"
            ? "pending"
            : status === "running" && isStreaming
              ? "running"
              : undefined
        }
        {...props}>
        <Trace.Icon>
          {status === "done" ? (
            <ConfirmCircle />
          ) : status === "running" ? (
            <CircleDot />
          ) : (
            <Circle />
          )}
        </Trace.Icon>
        <Trace.Title>{children}</Trace.Title>
      </Trace.Line>
    );
  }
);

PlanStep.displayName = "Plan.Step";

const PlanFooterFrame = styled(View, {
  name: "PlanFooter",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "xl",
  // Lines up with the plan's line, past the collapsible's focus ring inset.
  paddingHorizontal: "xl",
  paddingBottom: "xl"
});

export type PlanFooterProps = GetProps<typeof PlanFooterFrame>;

/** A row under the plan that stays when it closes, such as an approve button. */
const PlanFooter = forwardRef<TamaguiElement, PlanFooterProps>(
  (props, forwardedRef) => <PlanFooterFrame ref={forwardedRef} {...props} />
);

PlanFooter.displayName = "Plan.Footer";

/**
 * Renders only its children: the whole line opens the plan. Kept for code
 * written against AI SDK Elements.
 */
const PlanTrigger = ({ children }: { children?: ReactNode }) => children;

export type PlanTitleProps = TraceTitleProps;
export type PlanDescriptionProps = TraceDescriptionProps;

/** The goal: "Plan: migrate to Base UI". */
const PlanTitle = TraceTitle;
/** The progress: "2 of 4 done". */
const PlanDescription = TraceDescription;

export const Plan = withStaticProperties(PlanRoot, {
  Header: PlanHeader,
  Title: PlanTitle,
  Description: PlanDescription,
  Action: PlanAction,
  Trigger: PlanTrigger,
  Content: PlanContent,
  Step: PlanStep,
  Footer: PlanFooter
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Plan.Header` is undefined on the server).
 */
export {
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanFooter,
  PlanHeader,
  PlanStep,
  PlanTitle,
  PlanTrigger
};
