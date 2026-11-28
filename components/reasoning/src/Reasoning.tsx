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

import { ConfirmCircle, Loading } from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps
} from "@cyclone-ui/trace";
import { Trace, TraceCollapsibleContent } from "@cyclone-ui/trace";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  createContext,
  forwardRef,
  use,
  useEffect,
  useRef,
  useState
} from "react";

export interface ReasoningContextValue {
  /** Whether the model is still thinking. */
  isStreaming: boolean;
  /** Whether the thinking is shown. */
  isOpen: boolean;
  /** Shows or hides the thinking, as the reader's choice. */
  setIsOpen: (open: boolean) => void;
  /** How long the model thought, in seconds, once it is known. */
  duration: number | undefined;
}

// A plain context: a styled context Provider resets its values to defaults.
const ReasoningContext = createContext<ReasoningContextValue | null>(null);

/** The state of the nearest `Reasoning`. */
export const useReasoning = () => {
  const context = use(ReasoningContext);
  if (!context) {
    throw new Error("useReasoning must be used within a Reasoning");
  }

  return context;
};

export type ReasoningProps = TraceCollapsibleProps & {
  /** Whether the model is still thinking. Defaults to `false`. */
  isStreaming?: boolean;
  /**
   * How long the model thought, in seconds. Without it, the time from when
   * `isStreaming` turns on to when it turns off is shown.
   */
  duration?: number;
  /**
   * The thinking text, shown under a default trigger, or the
   * `Reasoning.Trigger` and `Reasoning.Content` parts. Empty text renders a
   * line with nothing to open.
   */
  children?: ReactNode;
};

/** Seconds from when `streaming` turns on to when it turns off. */
const useStreamingSeconds = (streaming: boolean) => {
  const startRef = useRef<number | undefined>(undefined);
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    if (streaming) {
      startRef.current ??= Date.now();
      return;
    }
    if (startRef.current === undefined) return;
    setSeconds(Math.ceil((Date.now() - startRef.current) / 1000));
    startRef.current = undefined;
  }, [streaming]);

  return seconds;
};

/**
 * A model's thinking: a line that reads "Thinking" while it streams and
 * "Thought for 5s" after, and opens to show the text. It opens while the
 * model thinks and closes when it is done, unless the reader opened or
 * closed it. Put several in one `Trace`, a line each.
 */
const ReasoningRoot = forwardRef<TamaguiElement, ReasoningProps>(
  (
    {
      isStreaming = false,
      open,
      defaultOpen,
      onOpenChange,
      duration,
      children,
      ...props
    },
    forwardedRef
  ) => {
    // The reader's choice; until they make one, the line follows the stream.
    const [choice, setChoice] = useState(defaultOpen);
    const measured = useStreamingSeconds(isStreaming);
    const context: ReasoningContextValue = {
      isStreaming,
      isOpen: open ?? choice ?? isStreaming,
      setIsOpen: next => {
        setChoice(next);
        onOpenChange?.(next);
      },
      duration: duration ?? measured
    };

    return (
      <ReasoningContext value={context}>
        {children === "" ? (
          // Nothing to open before the model has written anything.
          <ReasoningLine ref={forwardedRef} />
        ) : (
          <Trace.Collapsible
            ref={forwardedRef}
            {...props}
            open={context.isOpen}
            onOpenChange={context.setIsOpen}>
            {typeof children === "string" ? (
              <>
                <ReasoningTrigger />
                <ReasoningContent>{children}</ReasoningContent>
              </>
            ) : (
              children
            )}
          </Trace.Collapsible>
        )}
      </ReasoningContext>
    );
  }
);

ReasoningRoot.displayName = "Reasoning";

const getDefaultThinkingMessage = (isStreaming: boolean, duration?: number) =>
  isStreaming
    ? "Thinking"
    : duration === undefined
      ? "Thought"
      : `Thought for ${duration}s`;

type ReasoningLineProps = Pick<ReasoningTriggerProps, "getThinkingMessage">;

const ReasoningLine = forwardRef<TamaguiElement, ReasoningLineProps>(
  ({ getThinkingMessage = getDefaultThinkingMessage }, forwardedRef) => {
    const { isStreaming, duration } = useReasoning();

    return (
      <Trace.Line
        ref={forwardedRef}
        status={isStreaming ? "running" : undefined}>
        <Trace.Icon>{isStreaming ? <Loading /> : <ConfirmCircle />}</Trace.Icon>
        <Trace.Title>{getThinkingMessage(isStreaming, duration)}</Trace.Title>
      </Trace.Line>
    );
  }
);

export type ReasoningTriggerProps = TraceCollapsibleTriggerProps & {
  /**
   * The title, from whether the model is thinking and how long it thought.
   * Defaults to "Thinking", then "Thought for 5s" (or "Thought" when the
   * duration is unknown).
   */
  getThinkingMessage?: (isStreaming: boolean, duration?: number) => ReactNode;
};

/**
 * The line that opens and closes the thinking: a spinner and "Thinking" with
 * a shimmer while it streams, a check and "Thought for 5s" after. Children
 * replace the line.
 */
const ReasoningTrigger = forwardRef<TamaguiElement, ReasoningTriggerProps>(
  ({ getThinkingMessage, children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
      {children ?? <ReasoningLine getThinkingMessage={getThinkingMessage} />}
    </Trace.Collapsible.Trigger>
  )
);

ReasoningTrigger.displayName = "Reasoning.Trigger";

export type ReasoningContentProps = TraceCollapsibleContentProps;

/** The thinking, indented under the line. A string keeps its line breaks. */
const ReasoningContent = TraceCollapsibleContent;

export const Reasoning = withStaticProperties(ReasoningRoot, {
  Trigger: ReasoningTrigger,
  Content: ReasoningContent
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Reasoning.Trigger` is undefined on the server).
 */
export { ReasoningContent, ReasoningTrigger };
