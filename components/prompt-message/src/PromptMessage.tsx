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
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { ContainerBackground } from "@cyclone-ui/container";
import { CopyButton } from "@cyclone-ui/copy-button";
import { ThumbsDown, ThumbsUp } from "@cyclone-ui/icons";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View, withStaticProperties } from "@tamagui/core";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { ReactNode } from "react";
import { Children, createContext, forwardRef, use, useMemo } from "react";

export type { CopyButtonProps as PromptMessageCopyProps } from "@cyclone-ui/copy-button";

/** Who sent a message: the person, the agent, or the system. */
export type PromptMessageFrom = "user" | "assistant" | "system";

export interface PromptMessageContextValue {
  /** Who sent the message. */
  from: PromptMessageFrom;
}

// A plain context: a styled context Provider resets its values to defaults.
const PromptMessageContext = createContext<PromptMessageContextValue>({
  from: "assistant"
});

/** The sender of the nearest `PromptMessage`. */
export const usePromptMessage = () => use(PromptMessageContext);

// Text-only children (strings and numbers) are wrapped in `BodyText`.
const isText = (children: ReactNode) =>
  Children.toArray(children).every(
    child => typeof child === "string" || typeof child === "number"
  );

export interface PromptMessageProps extends ViewProps {
  /**
   * Who sent the message. The person's (`user`) messages sit at the end of
   * the row, in a bubble; the others sit at the start. Defaults to
   * `assistant`.
   */
  from?: PromptMessageFrom;
  /** An avatar, such as an `Avatar`, beside the message, level with its top. */
  avatar?: ReactNode;
}

/**
 * One turn of a conversation: a column of its header, content and actions,
 * aligned to the sender's side, with an optional avatar beside it. Put
 * several `PromptMessage.Content` parts in one message for consecutive
 * bubbles from the same sender.
 */
const PromptMessageRoot = forwardRef<TamaguiElement, PromptMessageProps>(
  ({ from = "assistant", avatar, children, ...props }, forwardedRef) => {
    const user = from === "user";
    const context = useMemo(() => ({ from }), [from]);

    return (
      <PromptMessageContext value={context}>
        <View
          ref={forwardedRef}
          flexDirection={user ? "row-reverse" : "row"}
          alignItems="flex-start"
          gap="2xl"
          width="100%"
          minWidth={0}
          {...props}>
          {avatar}
          <View
            flex={1}
            minWidth={0}
            gap="xl"
            alignItems={user ? "flex-end" : "flex-start"}>
            {children}
          </View>
        </View>
      </PromptMessageContext>
    );
  }
);

PromptMessageRoot.displayName = "PromptMessage";

export type PromptMessageHeaderProps = ViewProps;

/** A row above the content, such as the sender's name and the time. */
const PromptMessageHeader = forwardRef<TamaguiElement, PromptMessageHeaderProps>(
  ({ children, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="xl"
      maxWidth="100%"
      minWidth={0}
      {...props}>
      {isText(children) ? (
        <BodyText size="xs" color="subtle" numberOfLines={1}>
          {children}
        </BodyText>
      ) : (
        children
      )}
    </View>
  )
);

PromptMessageHeader.displayName = "PromptMessage.Header";

/**
 * The message's surface: `surface` is a neutral bubble, `primary` a strong
 * one, `tinted` a light wash of the theme's `primary` (with `theme="danger"`,
 * an error), and `ghost` unframed text that spans the row.
 */
export type PromptMessageContentVariant =
  | "surface"
  | "primary"
  | "tinted"
  | "ghost";

export interface PromptMessageContentProps extends ViewProps {
  /**
   * The surface. Defaults to `surface` for the person's messages and `ghost`
   * for the others.
   */
  variant?: PromptMessageContentVariant;
}

const CONTENT_TEXT_COLORS = {
  surface: "ink",
  primary: "on-primary",
  tinted: "primary",
  ghost: "ink"
} as const;

/**
 * The message itself. Bubbles fit their content, up to 80% of the row; a
 * `ghost` message spans it. A string is shown as body text that keeps its
 * line breaks.
 */
const PromptMessageContent = forwardRef<
  TamaguiElement,
  PromptMessageContentProps
>(({ variant: variantProp, children, ...props }, forwardedRef) => {
  const { from } = usePromptMessage();
  const variant = variantProp ?? (from === "user" ? "surface" : "ghost");

  return (
    <View
      ref={forwardedRef}
      gap="xl"
      minWidth={0}
      {...(variant === "ghost"
        ? { alignSelf: "stretch" }
        : {
            // Positioned and a stacking context for the `ContainerBackground`.
            position: "relative",
            zIndex: 0,
            maxWidth: "80%",
            paddingVertical: "2xl",
            paddingHorizontal: "4xl",
            borderRadius: "container",
            ...(variant === "tinted" && { backgroundColor: "primary/10" })
          })}
      {...props}>
      {(variant === "surface" || variant === "primary") && (
        <ContainerBackground variant={variant} />
      )}
      {isText(children) ? (
        <BodyText
          size="sm"
          whiteSpace="pre-wrap"
          wordBreak="break-word"
          color={CONTENT_TEXT_COLORS[variant]}>
          {children}
        </BodyText>
      ) : (
        children
      )}
    </View>
  );
});

PromptMessageContent.displayName = "PromptMessage.Content";

export type PromptMessageActionsProps = ViewProps;

// Half of what an action button's circle adds around its icon: the actions
// are pulled out by this much on the message's side, so the first icon lines
// up with the text (or the bubble's edge).
const ACTION_INSET = 8;

/** A row of actions under the content, on the message's side. */
const PromptMessageActions = forwardRef<
  TamaguiElement,
  PromptMessageActionsProps
>((props, forwardedRef) => {
  const { from } = usePromptMessage();

  return (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="md"
      {...(from === "user"
        ? { marginRight: -ACTION_INSET }
        : { marginLeft: -ACTION_INSET })}
      {...props}
    />
  );
});

PromptMessageActions.displayName = "PromptMessage.Actions";

export interface PromptMessageActionProps extends ButtonProps {
  /** Shown in a tooltip while the pointer rests on the button. Defaults to `label`. */
  tooltip?: string;
  /** The button's accessible name. Defaults to `tooltip`. */
  label?: string;
}

/**
 * A ghost icon button with a tooltip, such as Retry or Edit. Its children are
 * the icon. Pass `aria-pressed` for a toggle.
 */
const PromptMessageAction = forwardRef<
  TamaguiElement,
  PromptMessageActionProps
>(({ tooltip, label, children, ...props }, forwardedRef) => (
  // Matches `CopyButton`, so `PromptMessage.Copy` sits in the same row.
  <Button
    ref={forwardedRef}
    variant="ghost"
    ghostOpacity={0.5}
    size="8xl"
    circular={true}
    color="ink"
    tooltip={tooltip ?? label}
    aria-label={label}
    {...props}>
    <Button.Icon>{children}</Button.Icon>
  </Button>
));

PromptMessageAction.displayName = "PromptMessage.Action";

/** A response the reader liked, disliked, or neither. */
export type PromptMessageFeedbackValue = "like" | "dislike" | null;

export interface PromptMessageFeedbackProps extends Omit<ViewProps, "children"> {
  /** The selected feedback. Makes the toggles controlled. */
  value?: PromptMessageFeedbackValue;
  /** The initial feedback when uncontrolled. Defaults to `null`. */
  defaultValue?: PromptMessageFeedbackValue;
  /** Called with the new feedback when either toggle is pressed. */
  onValueChange?: (value: PromptMessageFeedbackValue) => void;
}

const FEEDBACK = [
  { value: "like", label: "Good response", Icon: ThumbsUp },
  { value: "dislike", label: "Bad response", Icon: ThumbsDown }
] as const;

/**
 * Good response and Bad response toggles. Pressing the selected one clears
 * it; the selected one has a filled icon and `aria-pressed`.
 */
const PromptMessageFeedback = forwardRef<
  TamaguiElement,
  PromptMessageFeedbackProps
>(({ value, defaultValue = null, onValueChange, ...props }, forwardedRef) => {
  const [feedback, setFeedback] =
    useControllableState<PromptMessageFeedbackValue>({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange
    });

  return (
    <View
      ref={forwardedRef}
      role="group"
      aria-label="Feedback"
      flexDirection="row"
      alignItems="center"
      gap="md"
      {...props}>
      {FEEDBACK.map(({ value: option, label, Icon }) => {
        const pressed = feedback === option;

        return (
          <PromptMessageAction
            key={option}
            label={label}
            aria-pressed={pressed}
            color={pressed ? "primary" : "ink"}
            onPress={() => setFeedback(pressed ? null : option)}>
            <Icon variant={pressed ? "filled" : "regular"} />
          </PromptMessageAction>
        );
      })}
    </View>
  );
});

PromptMessageFeedback.displayName = "PromptMessage.Feedback";

export const PromptMessage = withStaticProperties(PromptMessageRoot, {
  Header: PromptMessageHeader,
  Content: PromptMessageContent,
  Actions: PromptMessageActions,
  Action: PromptMessageAction,
  /** A `CopyButton` that matches the other actions. */
  Copy: CopyButton,
  Feedback: PromptMessageFeedback
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`PromptMessage.Content` is undefined on the server).
 */
export {
  PromptMessageAction,
  PromptMessageActions,
  PromptMessageContent,
  CopyButton as PromptMessageCopy,
  PromptMessageFeedback,
  PromptMessageHeader
};
