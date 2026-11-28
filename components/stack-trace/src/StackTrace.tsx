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

import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import type { CopyButtonProps } from "@cyclone-ui/copy-button";
import { CopyButton } from "@cyclone-ui/copy-button";
import { AlertCircle, DocumentCode, List } from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceTitleProps
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { TamaguiElement, TextProps, ViewProps } from "@tamagui/core";
import { Text, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  Children,
  createContext,
  forwardRef,
  Fragment,
  isValidElement,
  use
} from "react";
import type { ParsedStackTrace, StackFrame } from "./parse-stack-trace";
import { parseStackTrace } from "./parse-stack-trace";

export interface StackTraceContextValue {
  /** The parsed stack. */
  trace: ParsedStackTrace;
  /** The stack as given. */
  raw: string;
  onFilePathClick?: StackTraceProps["onFilePathClick"];
}

// A plain context: a styled context Provider resets its values to defaults.
const StackTraceContext = createContext<StackTraceContextValue | null>(null);

/** The stack of the nearest `StackTrace`. */
export const useStackTrace = () => {
  const context = use(StackTraceContext);
  if (!context) {
    throw new Error("useStackTrace must be used within a StackTrace");
  }

  return context;
};

export type StackTraceProps = TraceCollapsibleProps & {
  /** The stack, such as a tool's `errorText` or an `error.stack`. */
  trace: string;
  /**
   * Called when one of your own frames is pressed, to open the file at the
   * line. Without it, the frames are not buttons.
   */
  onFilePathClick?: (
    filePath: string,
    lineNumber?: number,
    columnNumber?: number
  ) => void;
};

/**
 * A failed tool call: a danger line that reads "Failed: TypeError: …" and
 * opens into the error and its frames. Without children it renders a header
 * with a copy button and the frames.
 */
const StackTraceRoot = forwardRef<TamaguiElement, StackTraceProps>(
  ({ trace, onFilePathClick, children, ...props }, forwardedRef) => (
    <StackTraceContext
      value={{ trace: parseStackTrace(trace), raw: trace, onFilePathClick }}>
      <Trace>
        <Trace.Collapsible ref={forwardedRef} {...props}>
          {children ?? (
            <>
              <StackTraceHeader>
                <StackTraceError />
                <StackTraceActions>
                  <StackTraceCopyButton />
                </StackTraceActions>
              </StackTraceHeader>
              <StackTraceContent />
            </>
          )}
        </Trace.Collapsible>
      </Trace>
    </StackTraceContext>
  )
);

StackTraceRoot.displayName = "StackTrace";

export type StackTraceActionsProps = ViewProps;

/** Buttons beside the line, such as `StackTrace.CopyButton`. */
const StackTraceActions = forwardRef<TamaguiElement, StackTraceActionsProps>(
  (props, forwardedRef) => (
    <View
      ref={forwardedRef}
      flexDirection="row"
      alignItems="center"
      gap="md"
      {...props}
    />
  )
);

StackTraceActions.displayName = "StackTrace.Actions";

export type StackTraceHeaderProps = TraceCollapsibleTriggerProps;

/**
 * The danger line that opens the frames. `StackTrace.Actions` among its
 * children render beside it, since a button can't hold other buttons.
 */
const StackTraceHeader = forwardRef<TamaguiElement, StackTraceHeaderProps>(
  ({ children, ...props }, forwardedRef) => {
    const items = Children.toArray(children);
    const isActions = (item: ReactNode) =>
      isValidElement(item) && item.type === StackTraceActions;

    return (
      <View flexDirection="row" alignItems="center" minWidth={0}>
        <Trace.Collapsible.Trigger ref={forwardedRef} flexShrink={1} {...props}>
          <Trace.Line status="error">
            <Trace.Icon>
              <AlertCircle />
            </Trace.Icon>
            {items.filter(item => !isActions(item))}
          </Trace.Line>
        </Trace.Collapsible.Trigger>
        {items.filter(isActions)}
      </View>
    );
  }
);

StackTraceHeader.displayName = "StackTrace.Header";

export type StackTraceErrorProps = TraceTitleProps;

/** The line's title: "Failed: TypeError: …", the first line of the message. */
const StackTraceError = forwardRef<TamaguiElement, StackTraceErrorProps>(
  ({ children, ...props }, forwardedRef) => {
    const { errorType } = useStackTrace().trace;

    return (
      <Trace.Title ref={forwardedRef} {...props}>
        {"Failed: "}
        {children ?? (
          <>
            <StackTraceErrorType />
            {/* A space of its own: screen readers drop one at a span's end. */}
            {errorType ? " " : null}
            <StackTraceErrorMessage />
          </>
        )}
      </Trace.Title>
    );
  }
);

StackTraceError.displayName = "StackTrace.Error";

export type StackTraceErrorTypeProps = TextProps;

/** The error's type, like `TypeError:`. Nothing when the stack has none. */
const StackTraceErrorType = forwardRef<
  TamaguiElement,
  StackTraceErrorTypeProps
>(({ children, ...props }, forwardedRef) => {
  const { errorType } = useStackTrace().trace;
  if (!children && !errorType) return null;

  return (
    <Text ref={forwardedRef} render="span" {...props}>
      {children ?? `${errorType}:`}
    </Text>
  );
});

StackTraceErrorType.displayName = "StackTrace.ErrorType";

export type StackTraceErrorMessageProps = TextProps;

/** The first line of the error's message. */
const StackTraceErrorMessage = forwardRef<
  TamaguiElement,
  StackTraceErrorMessageProps
>(({ children, ...props }, forwardedRef) => {
  const { errorMessage } = useStackTrace().trace;

  return (
    <Text ref={forwardedRef} render="span" {...props}>
      {children ?? errorMessage.split("\n")[0]}
    </Text>
  );
});

StackTraceErrorMessage.displayName = "StackTrace.ErrorMessage";

export type StackTraceCopyButtonProps = Omit<CopyButtonProps, "value">;

/** Copies the whole stack. Put it in `StackTrace.Actions`. */
const StackTraceCopyButton = forwardRef<
  TamaguiElement,
  StackTraceCopyButtonProps
>((props, forwardedRef) => (
  <CopyButton
    ref={forwardedRef}
    value={useStackTrace().raw}
    aria-label="Copy stack trace"
    {...props}
  />
));

StackTraceCopyButton.displayName = "StackTrace.CopyButton";

/** Renders nothing: the whole line opens the frames. Kept for AI SDK Elements code. */
const StackTraceExpandButton = () => null;

export type StackTraceContentProps = TraceCollapsibleContentProps;

/**
 * The detail under the line. Without children it shows the full error and
 * the frames.
 */
const StackTraceContent = forwardRef<TamaguiElement, StackTraceContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Content ref={forwardedRef} {...props}>
      {children ?? <StackTraceFrames />}
    </Trace.Collapsible.Content>
  )
);

StackTraceContent.displayName = "StackTrace.Content";

const getFrameTitle = ({
  functionName,
  filePath,
  lineNumber,
  raw
}: StackFrame) =>
  filePath
    ? `${functionName ? `${functionName} in ` : ""}${filePath}:${lineNumber}`
    : raw.replace(/^at /, "");

export type StackTraceFramesProps = ViewProps & {
  /** Show the `node_modules` and Node frames, folded into a line. Defaults to `true`. */
  showInternalFrames?: boolean;
};

/**
 * The full error, your own frames as lines (buttons with `onFilePathClick`)
 * and the internal frames folded into a dimmed, monospace list.
 */
const StackTraceFrames = forwardRef<TamaguiElement, StackTraceFramesProps>(
  ({ showInternalFrames = true, ...props }, forwardedRef) => {
    const { trace, onFilePathClick } = useStackTrace();
    const own = trace.frames.filter(frame => !frame.isInternal);
    const internal = trace.frames.filter(frame => frame.isInternal);

    return (
      <View ref={forwardedRef} gap="xl" minWidth={0} {...props}>
        {/* The title truncates, so the content repeats the whole error. */}
        {/* Not `BodyText`: its size tokens don't fit the code font. */}
        <Text
          render="p"
          fontFamily="code"
          fontSize={14}
          lineHeight="20px"
          theme="danger"
          color="primary"
          whiteSpace="pre-wrap"
          wordBreak="break-word">
          {[trace.errorType, trace.errorMessage].filter(Boolean).join(": ")}
        </Text>
        <Trace>
          {own.map((frame, index) => {
            const line = (
              <Trace.Line>
                <Trace.Icon>
                  <DocumentCode />
                </Trace.Icon>
                <Trace.Title>{getFrameTitle(frame)}</Trace.Title>
              </Trace.Line>
            );
            const { filePath } = frame;

            return onFilePathClick && filePath ? (
              <Trace.Button
                key={index}
                onPress={() =>
                  onFilePathClick(
                    filePath,
                    frame.lineNumber,
                    frame.columnNumber
                  )
                }>
                {line}
              </Trace.Button>
            ) : (
              <Fragment key={index}>{line}</Fragment>
            );
          })}
          {showInternalFrames && internal.length > 0 && (
            <Trace.Collapsible>
              <Trace.Collapsible.Trigger>
                <Trace.Line>
                  <Trace.Icon>
                    <List />
                  </Trace.Icon>
                  <Trace.Title>
                    {`${internal.length} framework frame${internal.length === 1 ? "" : "s"}`}
                  </Trace.Title>
                </Trace.Line>
              </Trace.Collapsible.Trigger>
              <Trace.Collapsible.Content>
                <CodeBlock allowCopy={false} margin={0}>
                  <Pre color="subtle">
                    <code>{internal.map(frame => frame.raw).join("\n")}</code>
                  </Pre>
                </CodeBlock>
              </Trace.Collapsible.Content>
            </Trace.Collapsible>
          )}
        </Trace>
      </View>
    );
  }
);

StackTraceFrames.displayName = "StackTrace.Frames";

export const StackTrace = withStaticProperties(StackTraceRoot, {
  Header: StackTraceHeader,
  Error: StackTraceError,
  ErrorType: StackTraceErrorType,
  ErrorMessage: StackTraceErrorMessage,
  Actions: StackTraceActions,
  CopyButton: StackTraceCopyButton,
  ExpandButton: StackTraceExpandButton,
  Content: StackTraceContent,
  Frames: StackTraceFrames
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`StackTrace.Header` is undefined on the server).
 */
export {
  StackTraceActions,
  StackTraceContent,
  StackTraceCopyButton,
  StackTraceError,
  StackTraceErrorMessage,
  StackTraceErrorType,
  StackTraceExpandButton,
  StackTraceFrames,
  StackTraceHeader
};
