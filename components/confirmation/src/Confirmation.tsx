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

import type { BodyTextProps } from "@cyclone-ui/body-text";
import { BodyText } from "@cyclone-ui/body-text";
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import type { ContainerProps } from "@cyclone-ui/container";
import { Container } from "@cyclone-ui/container";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { Text, View, withStaticProperties } from "@tamagui/core";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import type { ReactNode } from "react";
import { createContext, forwardRef, use, useId } from "react";

/**
 * The state of a tool call (an AI SDK tool part's `state`), from its input
 * streaming in to its output.
 */
export type ToolState =
  | "input-streaming"
  | "input-available"
  | "approval-requested"
  | "approval-responded"
  | "output-available"
  | "output-error"
  | "output-denied";

/** A tool call's approval request and, once answered, the answer. */
export interface ToolApproval {
  id: string;
  /** Set once the person answers. */
  approved?: boolean;
  reason?: string;
}

export interface ConfirmationContextValue {
  approval: ToolApproval;
  state: ToolState;
  /** The id of the `Confirmation.Title`, which names the confirmation. */
  titleId: string;
}

// A plain context: a styled context Provider resets its values to defaults.
const ConfirmationContext = createContext<ConfirmationContextValue | null>(
  null
);

/** The approval and state of the nearest `Confirmation`. */
export const useConfirmation = () => {
  const context = use(ConfirmationContext);
  if (!context) {
    throw new Error("useConfirmation must be used within a Confirmation");
  }

  return context;
};

export interface ConfirmationProps extends ContainerProps {
  /** The tool part's `approval`. Without it, nothing renders. */
  approval?: ToolApproval;
  /** The tool part's `state`. Nothing renders while the input streams in. */
  state: ToolState;
  /** An icon before the question that names the tool, such as `<Console />`. */
  icon?: ReactNode;
}

/**
 * Asks the person to approve or deny a tool call before it runs: a bordered
 * row with an icon, the question and the actions. Once the person answers,
 * render the call as a `Tool` line instead.
 */
const ConfirmationRoot = forwardRef<TamaguiElement, ConfirmationProps>(
  ({ approval, state, icon, children, ...props }, forwardedRef) => {
    const titleId = useId();
    const getThemedIcon = useGetThemedIcon({ size: 16, color: "currentColor" });

    if (
      !approval ||
      state === "input-streaming" ||
      state === "input-available"
    ) {
      return null;
    }

    const context: ConfirmationContextValue = { approval, state, titleId };

    return (
      <ConfirmationContext value={context}>
        <Container
          ref={forwardedRef}
          role="group"
          aria-labelledby={titleId}
          variant="tertiary"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          gap="3xl"
          padding="3xl"
          {...props}>
          {icon != null && (
            // A View can't carry `color` in v3, so this Text passes it to the
            // icon's `currentColor`.
            <Text display="flex" flexShrink={0} color="ink" aria-hidden={true}>
              {getThemedIcon(icon)}
            </Text>
          )}
          {children}
        </Container>
      </ConfirmationContext>
    );
  }
);

ConfirmationRoot.displayName = "Confirmation";

export interface ConfirmationTitleProps extends BodyTextProps {
  /** Secondary text under the question, such as where the command runs. */
  description?: ReactNode;
}

/**
 * The question, such as "Run rm -rf dist?", which names the confirmation. Put
 * `Confirmation.Request`, `.Accepted` and `.Rejected` inside it to change the
 * text once the person answers.
 */
const ConfirmationTitle = forwardRef<TamaguiElement, ConfirmationTitleProps>(
  ({ description, children, ...props }, forwardedRef) => {
    const { titleId } = useConfirmation();

    return (
      // Wide enough for a short question before the actions wrap under it.
      <View flexGrow={1} flexShrink={1} flexBasis={0} minWidth={160} gap="md">
        <BodyText
          ref={forwardedRef}
          id={titleId}
          size="sm"
          fontWeight="medium"
          color="emphasis"
          {...props}>
          {children}
        </BodyText>
        {description != null && (
          <BodyText size="sm" color="subtle">
            {description}
          </BodyText>
        )}
      </View>
    );
  }
);

ConfirmationTitle.displayName = "Confirmation.Title";

export interface ConfirmationRequestProps {
  children?: ReactNode;
}

/** Shown while the approval is pending. */
const ConfirmationRequest = ({ children }: ConfirmationRequestProps) =>
  useConfirmation().state === "approval-requested" ? children : null;

export interface ConfirmationAcceptedProps {
  children?: ReactNode;
}

/** Shown once the person approved the call. */
const ConfirmationAccepted = ({ children }: ConfirmationAcceptedProps) => {
  const { approval, state } = useConfirmation();

  return state !== "approval-requested" && approval.approved === true
    ? children
    : null;
};

export interface ConfirmationRejectedProps {
  children?: ReactNode;
}

/** Shown once the person denied the call. */
const ConfirmationRejected = ({ children }: ConfirmationRejectedProps) => {
  const { approval, state } = useConfirmation();

  return state !== "approval-requested" && approval.approved === false
    ? children
    : null;
};

export type ConfirmationActionsProps = ViewProps;

/** The buttons, at the end of the row. Shown while the approval is pending. */
const ConfirmationActions = forwardRef<
  TamaguiElement,
  ConfirmationActionsProps
>((props, forwardedRef) => {
  const { state } = useConfirmation();
  if (state !== "approval-requested") return null;

  return (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="xl"
      marginLeft="auto"
      {...props}
    />
  );
});

ConfirmationActions.displayName = "Confirmation.Actions";

export type ConfirmationActionProps = ButtonProps;

/** A small button, such as Deny (`variant="outlined"`) or Approve (`"primary"`). */
const ConfirmationAction = forwardRef<TamaguiElement, ConfirmationActionProps>(
  ({ children, ...props }, forwardedRef) => (
    // Buttons grow by default, which would stretch them across the row.
    <Button ref={forwardedRef} size="sm" flexGrow={0} {...props}>
      {typeof children === "string" ? (
        <Button.Text>{children}</Button.Text>
      ) : (
        children
      )}
    </Button>
  )
);

ConfirmationAction.displayName = "Confirmation.Action";

export const Confirmation = withStaticProperties(ConfirmationRoot, {
  Title: ConfirmationTitle,
  Request: ConfirmationRequest,
  Accepted: ConfirmationAccepted,
  Rejected: ConfirmationRejected,
  Actions: ConfirmationActions,
  Action: ConfirmationAction
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Confirmation.Title` is undefined on the server).
 */
export {
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle
};
