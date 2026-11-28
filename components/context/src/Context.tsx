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
import { CircularProgress } from "@cyclone-ui/circular-progress";
import { Popover } from "@cyclone-ui/popover";
import { Progress } from "@cyclone-ui/progress";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import { useMedia, View, withStaticProperties } from "@tamagui/core";
import { usePopperContextSlow } from "@tamagui/popper";
import { useControllableState } from "@tamagui/use-controllable-state";
import type { JSX, ReactNode } from "react";
import { createContext, forwardRef, use } from "react";

/**
 * The token counts of a conversation, in the shape of the AI SDK's
 * `LanguageModelUsage`.
 */
export interface ContextUsage {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  reasoningTokens?: number;
  cachedInputTokens?: number;
}

export interface ContextValue {
  /** The tokens the conversation uses. */
  usedTokens: number;
  /** The model's context window, in tokens. */
  maxTokens: number;
  /** The usage by kind of token. */
  usage?: ContextUsage;
  /** The conversation's cost so far, in US dollars. */
  cost?: number;
  /** The share of the context window used, from 0 to 1. */
  ratio: number;
  /** Opens or closes the card. */
  setOpen: (open: boolean) => void;
}

// A plain context: a styled context Provider resets its values to defaults.
const ContextContext = createContext<ContextValue | null>(null);

/** The usage of the nearest `Context`. */
export const useContextValue = () => {
  const context = use(ContextContext);
  if (!context) {
    throw new Error("useContextValue must be used within a Context");
  }

  return context;
};

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1
});
const percent = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 1
});
// A few decimals: a conversation often costs less than a cent.
const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 4
});

// Opens almost at once and lingers briefly, so the pointer can reach the card.
const HOVERABLE = { delay: { open: 10, close: 100 } };

export type ContextProps = Omit<
  GetProps<typeof Popover>,
  "open" | "defaultOpen" | "onOpenChange"
> & {
  /** The tokens the conversation uses. */
  usedTokens: number;
  /** The model's context window, in tokens. */
  maxTokens: number;
  /** The usage by kind of token, shown as rows in the card. */
  usage?: ContextUsage;
  /** The conversation's cost so far, in US dollars. Shown when set. */
  cost?: number;
  /** Whether the card is open. Makes it controlled; pass `onOpenChange` too. */
  open?: boolean;
  /** Whether the card starts open when uncontrolled. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with the new open state when the card opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Custom parts. Defaults to a `Context.Trigger` and a `Context.Content`. */
  children?: ReactNode;
};

/**
 * How much of the model's context window the conversation has used: a
 * trigger with the percentage and a ring, which opens a card with a usage bar
 * and the token counts on hover, focus or press. On small screens the card is
 * a bottom sheet.
 */
const ContextRoot = ({
  usedTokens,
  maxTokens,
  usage,
  cost,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}: ContextProps): JSX.Element => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const ratio = maxTokens > 0 ? Math.min(Math.max(usedTokens / maxTokens, 0), 1) : 0;

  return (
    <ContextContext value={{ usedTokens, maxTokens, usage, cost, ratio, setOpen }}>
      <Popover
        hoverable={HOVERABLE}
        // Any token: Popover's default `size={true}` reaches the content's
        // DOM node and React warns about it.
        size="md"
        {...props}
        open={open}
        onOpenChange={(next: boolean) => setOpen(next)}>
        {children ?? (
          <>
            <ContextTrigger />
            <ContextContent />
          </>
        )}
      </Popover>
    </ContextContext>
  );
};

export type ContextTriggerProps = ButtonProps;

/**
 * A small ghost button with the percentage used and a ring. Hovering or
 * focusing it opens the card; pressing it (on touch screens) does too.
 */
const ContextTrigger = forwardRef<TamaguiElement, ContextTriggerProps>(
  (
    {
      children,
      onPress,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...props
    },
    forwardedRef
  ) => {
    const { ratio, setOpen } = useContextValue();
    // The popover's scope is `""`, for which Tamagui's anchor doesn't wire
    // hover: without these, the card opens only if the pointer moves again
    // after entering the trigger (see `Tooltip.Trigger`).
    const popper = usePopperContextSlow("");
    const used = percent.format(ratio);
    // Below `sm` the card is a bottom sheet, which only a press opens.
    const sheet = Boolean((useMedia() as Record<string, boolean>)["max-sm"]);

    return (
      // The handlers sit on the trigger, which runs them before the
      // Button's: the Button calls `preventDefault()` before its `onPress`,
      // which skips any handler composed after the trigger's.
      <Popover.Trigger
        asChild={true}
        // Press opens rather than toggles: hovering already opened it.
        disablePressTrigger={true}
        onPress={event => {
          onPress?.(event);
          setOpen(true);
        }}
        onMouseEnter={event => {
          onMouseEnter?.(event);
          if (!sheet) popper.onHoverReference?.(event.nativeEvent);
        }}
        onMouseLeave={event => {
          onMouseLeave?.(event);
          if (!sheet) popper.onLeaveReference?.();
        }}
        // Keyboard focus opens the card, and leaving closes it.
        onFocus={event => {
          onFocus?.(event);
          if (
            !sheet &&
            (event.target as HTMLElement).matches?.(":focus-visible")
          ) {
            setOpen(true);
          }
        }}
        onBlur={event => {
          onBlur?.(event);
          if (!sheet) setOpen(false);
        }}>
        <Button
          ref={forwardedRef}
          variant="ghost"
          size="sm"
          // A Button grows along its parent's main axis; the trigger keeps
          // its own size.
          flexGrow={0}
          aria-label={`${used} of context used`}
          {...props}>
          {children ?? (
            <>
              <Button.Text fontVariant={["tabular-nums"]}>{used}</Button.Text>
              <CircularProgress
                aria-hidden={true}
                size={16}
                zIndex="20"
                value={Math.round(ratio * 100)}
              />
            </>
          )}
        </Button>
      </Popover.Trigger>
    );
  }
);

ContextTrigger.displayName = "Context.Trigger";

export type ContextContentProps = GetProps<typeof Popover.Content>;

/**
 * The card. Defaults to a `Context.ContentHeader`, a `Context.ContentBody`
 * and, when `cost` is set, a `Context.ContentFooter`.
 */
const ContextContent = ({
  children,
  ...props
}: ContextContentProps): JSX.Element => {
  const { cost } = useContextValue();

  return (
    <Popover.Content
      width="30xl"
      padding={0}
      // A card to read, not a dialog: it never takes or traps focus, so
      // hovering it while typing leaves the caret where it was.
      disableFocusScope={true}
      trapFocus={false}
      onCloseAutoFocus={false}
      {...props}>
      {children ?? (
        <>
          <ContextContentHeader />
          <ContextContentBody />
          {cost !== undefined && <ContextContentFooter />}
        </>
      )}
    </Popover.Content>
  );
};

// One label and value pair on a row.
const ContextRow = forwardRef<
  TamaguiElement,
  ViewProps & { label: ReactNode; value: ReactNode }
>(({ label, value, ...props }, forwardedRef) => (
  <View
    ref={forwardedRef}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="baseline"
    gap="3xl"
    {...props}>
    <BodyText render="span" size="sm" color="subtle">
      {label}
    </BodyText>
    <BodyText
      render="span"
      size="sm"
      color="emphasis"
      fontVariant={["tabular-nums"]}>
      {value}
    </BodyText>
  </View>
));

export type ContextContentHeaderProps = ViewProps;

/** "Context", the tokens used of the window, and a usage bar. */
const ContextContentHeader = forwardRef<
  TamaguiElement,
  ContextContentHeaderProps
>(({ children, ...props }, forwardedRef) => {
  const { usedTokens, maxTokens, ratio } = useContextValue();

  return (
    <View ref={forwardedRef} padding="3xl" gap="xl" {...props}>
      {children ?? (
        <>
          <ContextRow
            label={
              <BodyText render="span" size="sm" fontWeight="semibold" color="emphasis">
                Context
              </BodyText>
            }
            value={`${compact.format(usedTokens)} / ${compact.format(maxTokens)}`}
          />
          <Progress
            size="sm"
            // A number: the `full` token rounds the ends into points.
            borderRadius={1000_000_000}
            value={Math.round(ratio * 100)}
            aria-label="Context used"
          />
        </>
      )}
    </View>
  );
});

ContextContentHeader.displayName = "Context.ContentHeader";

export type ContextContentBodyProps = ViewProps;

/**
 * The token rows under a rule. Defaults to the input, output, reasoning and
 * cache rows, each shown only when its count is above zero.
 */
const ContextContentBody = forwardRef<TamaguiElement, ContextContentBodyProps>(
  ({ children, ...props }, forwardedRef) => {
    const { usage } = useContextValue();
    const empty =
      !usage?.inputTokens &&
      !usage?.outputTokens &&
      !usage?.reasoningTokens &&
      !usage?.cachedInputTokens;

    if (children == null && empty) return null;

    return (
      <View
        ref={forwardedRef}
        padding="3xl"
        gap="md"
        borderTopWidth={1}
        borderColor="hairline"
        {...props}>
        {children ?? (
          <>
            <ContextInputUsage />
            <ContextOutputUsage />
            <ContextReasoningUsage />
            <ContextCacheUsage />
          </>
        )}
      </View>
    );
  }
);

ContextContentBody.displayName = "Context.ContentBody";

export type ContextContentFooterProps = ViewProps;

/** The total cost under a rule. */
const ContextContentFooter = forwardRef<
  TamaguiElement,
  ContextContentFooterProps
>(({ children, ...props }, forwardedRef) => {
  const { cost } = useContextValue();

  return (
    <View
      ref={forwardedRef}
      padding="3xl"
      borderTopWidth={1}
      borderColor="hairline"
      {...props}>
      {children ?? <ContextRow label="Total cost" value={usd.format(cost ?? 0)} />}
    </View>
  );
});

ContextContentFooter.displayName = "Context.ContentFooter";

export type ContextUsageProps = ViewProps;

const createUsageRow = (label: string, key: keyof ContextUsage) => {
  const Row = forwardRef<TamaguiElement, ContextUsageProps>(
    ({ children, ...props }, forwardedRef) => {
      const tokens = useContextValue().usage?.[key];

      if (children != null) return <>{children}</>;
      if (!tokens) return null;

      return (
        <ContextRow
          ref={forwardedRef}
          label={label}
          value={compact.format(tokens)}
          {...props}
        />
      );
    }
  );
  Row.displayName = `Context.${label}Usage`;

  return Row;
};

/** The input tokens, when above zero. */
const ContextInputUsage = createUsageRow("Input", "inputTokens");
/** The output tokens, when above zero. */
const ContextOutputUsage = createUsageRow("Output", "outputTokens");
/** The reasoning tokens, when above zero. */
const ContextReasoningUsage = createUsageRow("Reasoning", "reasoningTokens");
/** The cached input tokens, when above zero. */
const ContextCacheUsage = createUsageRow("Cache", "cachedInputTokens");

export const Context = withStaticProperties(ContextRoot, {
  Trigger: ContextTrigger,
  Content: ContextContent,
  ContentHeader: ContextContentHeader,
  ContentBody: ContextContentBody,
  ContentFooter: ContextContentFooter,
  InputUsage: ContextInputUsage,
  OutputUsage: ContextOutputUsage,
  ReasoningUsage: ContextReasoningUsage,
  CacheUsage: ContextCacheUsage
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Context.Trigger` is undefined on the server).
 */
export {
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger
};
