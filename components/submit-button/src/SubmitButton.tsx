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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { CloseCircle, ConfirmCircle, Loading } from "@cyclone-ui/icons";
import type { RightArrowProps } from "@cyclone-ui/icons/vectors";
import { RightArrow } from "@cyclone-ui/icons/vectors";
import { useHover } from "@stryke/hooks";
import type { TamaguiComponent, TamaguiElement } from "@tamagui/core";
import {
  createStyledHOC,
  useComposedRefs,
  useThemeName,
  View
} from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { ReactNode, Ref } from "react";
import { useEffect, useRef, useState } from "react";

const STATUSES = ["idle", "pending", "success", "error"] as const;

/**
 * The state of a submission. The names match TanStack Query's mutation
 * `status`, so `status={mutation.status}` works as is.
 */
export type SubmitButtonStatus = (typeof STATUSES)[number];

/** The web document, or `undefined` on native. */
const getDocument = () =>
  (globalThis as { document?: { activeElement: unknown; body: unknown } })
    .document;

/** How long a state takes to slide in or out. */
const TRANSITION_MS = 300;
/** How far, in pixels, a hidden state sits from the center. */
const OFFSET = 12;

interface StateRowProps {
  active: boolean;
  /** Whether this state comes before the current one. */
  before: boolean;
  direction: "vertical" | "horizontal";
  children: ReactNode;
}

/** One state's label and icon, stacked in the shared grid cell. */
const StateRow = ({ active, before, direction, children }: StateRowProps) => {
  // A horizontal row slides out to the right, then moves back to the left
  // (while invisible) once it has faded, so it next slides in from there.
  const [wasActive, setWasActive] = useState(active);
  const [exiting, setExiting] = useState(false);
  if (active !== wasActive) {
    setWasActive(active);
    setExiting(wasActive);
  }
  useEffect(() => {
    if (!exiting) {
      return;
    }

    const timeout = setTimeout(() => setExiting(false), TRANSITION_MS);

    return () => clearTimeout(timeout);
  }, [exiting]);

  const offset =
    direction === "horizontal"
      ? active
        ? 0
        : exiting
          ? OFFSET
          : -OFFSET
      : active
        ? 0
        : before
          ? -OFFSET
          : OFFSET;

  return (
    <XStack
      gridColumn="1"
      gridRow="1"
      gap="2xl"
      alignItems="center"
      justifyContent="center"
      transition={`${TRANSITION_MS}ms`}
      opacity={active ? 1 : 0}
      // Both always set, so switching `direction` keeps the style shape.
      x={direction === "horizontal" ? offset : 0}
      y={direction === "horizontal" ? 0 : offset}
      aria-hidden={!active || undefined}>
      {children}
    </XStack>
  );
};

export type SubmitButtonProps = ButtonProps &
  Pick<RightArrowProps, "animateShrink"> & {
    hideText?: boolean;

    /**
     * Control the displayed state instead of tracking the promise returned by
     * `onPress`.
     */
    status?: SubmitButtonStatus;

    /**
     * The text to display when the button is in the pending state.
     *
     * @defaultValue "Submitting"
     */
    pendingText?: string;

    /**
     * The text to display when the button is in the success state.
     *
     * @defaultValue "Submitted"
     */
    successText?: string;

    /**
     * The text to display when the button is in the error state.
     *
     * @defaultValue "Try again"
     */
    errorText?: string;

    /**
     * How long, in milliseconds, the success and error states show before
     * the button returns to idle. Pass `-1` to never reset. Only applies to
     * the state tracked from `onPress`, not a controlled `status`.
     *
     * @defaultValue 2000
     */
    resetDelay?: number;

    /**
     * Overrides `resetDelay` for the success state. Pass `-1` to never reset.
     */
    resetDelaySuccess?: number;

    /**
     * Overrides `resetDelay` for the error state. Pass `-1` to never reset.
     */
    resetDelayError?: number;

    /**
     * How the labels move between states: `vertical` slides the next state
     * up from below (and back down when returning to an earlier state),
     * `horizontal` always slides it in from the left and the previous one out
     * on the right.
     *
     * @defaultValue "vertical"
     */
    direction?: "vertical" | "horizontal";
  };

/**
 * A `Button` labeled "Submit" with a right arrow. When `onPress` returns a
 * promise, the button shows the pending state until it settles, then the
 * success (resolved) or error (rejected) state until `resetDelay` passes.
 * The button is disabled while pending.
 */
export const SubmitButton: TamaguiComponent<SubmitButtonProps, TamaguiElement> =
  createStyledHOC(
    Button,
    (
      {
        children,
        hideText = false,
        animateShrink = false,
        onPress,
        status: statusProp,
        pendingText = "Submitting",
        successText = "Submitted",
        errorText = "Try again",
        resetDelay = 2000,
        resetDelaySuccess,
        resetDelayError,
        direction = "vertical",
        ...props
      }: SubmitButtonProps,
      forwardedRef
    ) => {
      const [hoverRef, hovering] = useHover();
      const elementRef = useRef<TamaguiElement>(null);
      const ref = useComposedRefs(
        forwardedRef,
        hoverRef as Ref<TamaguiElement>,
        elementRef
      );
      const themeName = useThemeName();
      const [trackedStatus, setTrackedStatus] =
        useState<SubmitButtonStatus>("idle");
      const status = statusProp ?? trackedStatus;

      const delay =
        trackedStatus === "success"
          ? (resetDelaySuccess ?? resetDelay)
          : trackedStatus === "error"
            ? (resetDelayError ?? resetDelay)
            : -1;
      useEffect(() => {
        if (delay < 0) {
          return;
        }

        const timeout = setTimeout(() => setTrackedStatus("idle"), delay);

        return () => clearTimeout(timeout);
      }, [trackedStatus, delay]);
      const current = STATUSES.indexOf(status);

      // Disabling the pending button drops its focus to the page. Give it
      // back once the button is enabled again, unless focus moved elsewhere.
      const restoreFocusRef = useRef(false);
      const isPending = status === "pending";
      useEffect(() => {
        if (isPending) {
          return;
        }

        const document = getDocument();
        if (
          restoreFocusRef.current &&
          document?.activeElement === document?.body
        ) {
          (elementRef.current as { focus?: () => void } | null)?.focus?.();
        }
        restoreFocusRef.current = false;
      }, [isPending]);

      const labels = {
        idle: children || "Submit",
        pending: pendingText,
        success: successText,
        error: errorText
      };
      const icons = {
        idle: (
          <RightArrow isComplete={hovering} animateShrink={animateShrink} />
        ),
        // Each icon draws itself in when `animated` turns on, and rests on its
        // final frame (the spinner stops) while hidden.
        pending: <Loading animated={status === "pending"} />,
        success: <ConfirmCircle animated={status === "success"} />,
        error: <CloseCircle animated={status === "error"} />
      };

      return (
        <Button
          ref={ref}
          justifyContent="center"
          // Always a theme name: going from no theme to one remounts the
          // children, which would cut the state transition short. Relative to
          // the scheme (`dark_brand` -> `brand`), so the server's light render
          // and a dark client hydrate to the same className.
          theme={
            status === "success"
              ? "success"
              : status === "error"
                ? "danger"
                : themeName.replace(/^(?:light|dark)(?:_|$)/, "") || "base"
          }
          aria-busy={status === "pending"}
          // Icon-only: the label moves to the tooltip (and `aria-label`).
          {...(hideText &&
            typeof labels[status] === "string" && { tooltip: labels[status] })}
          {...props}
          // Disabled while pending, so a second press can't submit again.
          disabled={isPending || props.disabled}
          onPress={event => {
            restoreFocusRef.current =
              getDocument()?.activeElement === elementRef.current;

            // Typed `void`, but an async handler returns its promise.
            const result: unknown = onPress?.(event);
            if (result instanceof Promise) {
              setTrackedStatus("pending");
              result.then(
                () => setTrackedStatus("success"),
                () => setTrackedStatus("error")
              );
            }
          }}>
          {/* Every state shares one grid cell, so the button keeps the width
          of the widest label. */}
          <View display="grid" zIndex="20">
            {STATUSES.map((name, index) => (
              <StateRow
                key={name}
                active={index === current}
                before={index < current}
                direction={direction}>
                {!hideText && <Button.Text>{labels[name]}</Button.Text>}
                <Button.Icon>{icons[name]}</Button.Icon>
              </StateRow>
            ))}
          </View>
        </Button>
      );
    }
  );
