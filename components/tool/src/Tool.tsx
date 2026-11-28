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
import type { CodeBlockProps } from "@cyclone-ui/code-block";
import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import type { ToolApproval, ToolState } from "@cyclone-ui/confirmation";
import {
  AlertCircle,
  Clock,
  CloseCircle,
  ConfirmCircle,
  Loading
} from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceStatus
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { TamaguiElement } from "@tamagui/core";
import { View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import { forwardRef, isValidElement } from "react";

export type { ToolApproval, ToolState };

/**
 * A tool call: the fields of an AI SDK tool part (`ToolUIPart` or
 * `DynamicToolUIPart`) that Tool reads.
 */
export interface ToolPart {
  /** `tool-<name>`, or `dynamic-tool` with a `toolName`. */
  type: `tool-${string}` | "dynamic-tool";
  toolCallId: string;
  toolName?: string;
  state: ToolState;
  input?: unknown;
  output?: unknown;
  errorText?: string;
  approval?: ToolApproval;
  /** A partial output the tool streams before its final one. */
  preliminary?: boolean;
}

export interface ToolLineOptions {
  /** The part's `approval`: a denied call reads "Denied …". */
  approval?: ToolApproval;
  /** The part's `preliminary` flag: a partial output still reads "Running …". */
  preliminary?: boolean;
  /**
   * Whether the chat is still streaming. A call that is still running when it
   * stops failed. Defaults to `true`.
   */
  isStreaming?: boolean;
}

/**
 * What a tool call's line shows for its state: the Trace status, the verb
 * before what it ran ("Ran", "Failed to run", …) and an icon.
 */
export const getToolLine = (
  state: ToolState,
  { approval, preliminary, isStreaming = true }: ToolLineOptions = {}
): { status?: TraceStatus; verb: string; icon: ReactNode } => {
  if (
    state === "output-denied" ||
    (state === "approval-responded" && approval?.approved === false)
  ) {
    return { verb: "Denied", icon: <CloseCircle /> };
  }
  if (state === "approval-requested") {
    return { status: "pending", verb: "Waiting to run", icon: <Clock /> };
  }
  if (state === "output-available" && !preliminary) {
    return { verb: "Ran", icon: <ConfirmCircle /> };
  }
  if (state === "output-error" || !isStreaming) {
    return { status: "error", verb: "Failed to run", icon: <AlertCircle /> };
  }

  return { status: "running", verb: "Running", icon: <Loading /> };
};

const STATUS_LABELS: Record<ToolState, string> = {
  "input-streaming": "Pending",
  "input-available": "Running",
  "approval-requested": "Awaiting Approval",
  "approval-responded": "Responded",
  "output-available": "Completed",
  "output-error": "Error",
  "output-denied": "Denied"
};

/** A state's icon and label, such as "Completed", as a line in its status. */
export const getStatusBadge = (status: ToolState) => {
  const line = getToolLine(status);

  return (
    <Trace.Line status={line.status}>
      <Trace.Icon>{line.icon}</Trace.Icon>
      <Trace.Title>{STATUS_LABELS[status]}</Trace.Title>
    </Trace.Line>
  );
};

export type ToolProps = TraceCollapsibleProps;

/**
 * A tool call: a line that opens to its input and output. Put a
 * `Tool.Header` and a `Tool.Content` inside it.
 */
const ToolRoot = forwardRef<TamaguiElement, ToolProps>(
  (props, forwardedRef) => (
    <Trace>
      <Trace.Collapsible ref={forwardedRef} {...props} />
    </Trace>
  )
);

ToolRoot.displayName = "Tool";

export type ToolHeaderProps = Omit<TraceCollapsibleTriggerProps, "type"> &
  ToolLineOptions & {
    /** The part's `type`. Its name (`tool-readFile` → readFile) is the title by default. */
    type?: ToolPart["type"];
    /** The part's `toolName`, the title by default for a `dynamic-tool`. */
    toolName?: string;
    /** The part's `state`, which sets the line's status, icon and verb. */
    state: ToolState;
    /** What the tool ran, after the verb, as in "Ran pnpm test". */
    title?: ReactNode;
    /** An icon that names the tool, in place of the state's icon. */
    icon?: ReactNode;
  };

/**
 * The line: an icon and "Running …", "Ran …", "Failed to run …" or
 * "Denied …" for the part's state, and a chevron. Children follow the title,
 * such as a `Trace.Description`.
 */
const ToolHeader = forwardRef<TamaguiElement, ToolHeaderProps>(
  (
    {
      type,
      toolName,
      state,
      title,
      approval,
      preliminary,
      isStreaming,
      icon,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const line = getToolLine(state, { approval, preliminary, isStreaming });
    const name = title ?? (type === "dynamic-tool" ? toolName : type?.slice(5));

    return (
      <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
        <Trace.Line status={line.status}>
          <Trace.Icon>{icon ?? line.icon}</Trace.Icon>
          <Trace.Title>
            {line.verb} {name}
          </Trace.Title>
          {children}
        </Trace.Line>
      </Trace.Collapsible.Trigger>
    );
  }
);

ToolHeader.displayName = "Tool.Header";

export type ToolContentProps = TraceCollapsibleContentProps;

/** The call's detail, indented under the line: its input and output. */
const ToolContent = Trace.Collapsible.Content;

type ToolCodeProps = Omit<CodeBlockProps, "children"> & {
  /** The small label above the code. Pass `""` for none. */
  label?: string;
};

// A labeled, wrapped code-font block, scrolling past 256px.
const ToolCode = forwardRef<
  TamaguiElement,
  ToolCodeProps & { children: string }
>(({ label, children, ...props }, forwardedRef) => (
  <View gap="lg" minWidth={0}>
    {label ? (
      <BodyText size="xs" color="subtle">
        {label}
      </BodyText>
    ) : null}
    <CodeBlock
      ref={forwardedRef}
      margin={0}
      viewportProps={{ style: { maxHeight: 256 } }}
      {...props}>
      <Pre
        color="ink"
        width="100%"
        whiteSpace="pre-wrap"
        wordBreak="break-word">
        <code>{children}</code>
      </Pre>
    </CodeBlock>
  </View>
));

const stringify = (value: unknown) =>
  typeof value === "string" ? value : JSON.stringify(value, null, 2);

export type ToolInputProps = ToolCodeProps & {
  /** The part's `input`, shown as pretty-printed JSON. */
  input: ToolPart["input"];
};

/**
 * The call's input as JSON, labeled "Input". Renders nothing until the input
 * starts.
 */
const ToolInput = forwardRef<TamaguiElement, ToolInputProps>(
  ({ input, label = "Input", ...props }, forwardedRef) =>
    input === undefined ? null : (
      <ToolCode ref={forwardedRef} label={label} {...props}>
        {stringify(input)}
      </ToolCode>
    )
);

ToolInput.displayName = "Tool.Input";

export type ToolOutputProps = ToolCodeProps & {
  /**
   * The part's `output`: a string as is, an element rendered as is, anything
   * else as pretty-printed JSON.
   */
  output?: ToolPart["output"];
  /** The part's `errorText`, shown in place of the output when the call failed. */
  errorText?: ToolPart["errorText"];
};

/**
 * The call's output, labeled "Output", or its error, labeled "Error". Renders
 * nothing until either arrives.
 */
const ToolOutput = forwardRef<TamaguiElement, ToolOutputProps>(
  ({ output, errorText, label, ...props }, forwardedRef) => {
    if (errorText) {
      return (
        <ToolCode ref={forwardedRef} label={label ?? "Error"} {...props}>
          {errorText}
        </ToolCode>
      );
    }
    if (output == null) return null;
    if (isValidElement(output)) return output;

    return (
      <ToolCode ref={forwardedRef} label={label ?? "Output"} {...props}>
        {stringify(output)}
      </ToolCode>
    );
  }
);

ToolOutput.displayName = "Tool.Output";

export const Tool = withStaticProperties(ToolRoot, {
  Header: ToolHeader,
  Content: ToolContent,
  Input: ToolInput,
  Output: ToolOutput
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Tool.Header` is undefined on the server).
 */
export { ToolContent, ToolHeader, ToolInput, ToolOutput };
