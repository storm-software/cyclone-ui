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
import { Tag } from "@cyclone-ui/tag";
import type {
  ToolContentProps,
  ToolHeaderProps,
  ToolPart,
  ToolProps,
  ToolState
} from "@cyclone-ui/tool";
import { Tool } from "@cyclone-ui/tool";
import type { TraceProps } from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type SubagentProps = ToolProps;

/**
 * Work the agent hands to a subagent: a line that opens to the task, the
 * subagent's tool calls and what it found. Put a `Subagent.Header` and a
 * `Subagent.Content` inside it.
 */
const SubagentRoot = forwardRef<TamaguiElement, SubagentProps>(
  (props, forwardedRef) => <Tool ref={forwardedRef} {...props} />
);

SubagentRoot.displayName = "Subagent";

export type SubagentHeaderProps = Omit<
  ToolHeaderProps,
  "type" | "toolName" | "title" | "state"
> & {
  /** What ran, after the verb, as in "Ran the research agent". */
  name: string;
  /** The subagent's model, shown in a tag after the title. */
  model?: string;
  /**
   * The subagent tool part's `state`. Pass `preliminary` while its output
   * streams in. Defaults to `"output-available"`.
   */
  state?: ToolState;
};

/**
 * The line: "Running the research agent" while it runs, then "Ran …", or
 * "Failed to run …". Children follow the title, such as a `Trace.Description`
 * with how long it ran.
 */
const SubagentHeader = forwardRef<TamaguiElement, SubagentHeaderProps>(
  (
    { name, model, state = "output-available", children, ...props },
    forwardedRef
  ) => (
    <Tool.Header ref={forwardedRef} state={state} title={name} {...props}>
      {children}
      {model && (
        <Tag
          variant="tertiary"
          flexShrink={0}
          paddingVertical={0}
          paddingHorizontal="xl">
          <Tag.Text
            size="xxs"
            fontFamily="code"
            fontWeight="normal"
            color="ink">
            {model}
          </Tag.Text>
        </Tag>
      )}
    </Tool.Header>
  )
);

SubagentHeader.displayName = "Subagent.Header";

export type SubagentContentProps = ToolContentProps;

/** The run's detail, indented under the line. */
const SubagentContent = Tool.Content;

export type SubagentInstructionsProps = BodyTextProps;

/** The task the subagent was given, at the top of the content. */
const SubagentInstructions = forwardRef<
  TamaguiElement,
  SubagentInstructionsProps
>((props, forwardedRef) => (
  <BodyText
    ref={forwardedRef}
    size="sm"
    color="subtle"
    whiteSpace="pre-wrap"
    {...props}
  />
));

SubagentInstructions.displayName = "Subagent.Instructions";

export type SubagentToolsProps = TraceProps;

/** The subagent's tool calls, as a nested trace. */
const SubagentTools = forwardRef<TamaguiElement, SubagentToolsProps>(
  (props, forwardedRef) => <Trace ref={forwardedRef} {...props} />
);

SubagentTools.displayName = "Subagent.Tools";

export type SubagentToolProps = Omit<ToolProps, "children"> & {
  /** One of the subagent's tool parts. */
  tool: ToolPart;
  /** What the tool ran, after the verb, in place of the tool's name. */
  title?: ReactNode;
  /** Whether the chat is still streaming; see `Tool.Header`. */
  isStreaming?: boolean;
};

/** One tool call of the subagent: a `Tool` with its input and output. */
const SubagentTool = forwardRef<TamaguiElement, SubagentToolProps>(
  ({ tool, title, isStreaming, ...props }, forwardedRef) => (
    <Tool ref={forwardedRef} {...props}>
      <Tool.Header
        type={tool.type}
        toolName={tool.toolName}
        state={tool.state}
        approval={tool.approval}
        preliminary={tool.preliminary}
        title={title}
        isStreaming={isStreaming}
      />
      <Tool.Content>
        <Tool.Input input={tool.input} />
        <Tool.Output output={tool.output} errorText={tool.errorText} />
      </Tool.Content>
    </Tool>
  )
);

SubagentTool.displayName = "Subagent.Tool";

export type SubagentOutputProps = BodyTextProps & {
  /** The schema of a structured result, shown as code under the text. */
  schema?: string;
};

/** What the subagent found, after its tool calls. */
const SubagentOutput = forwardRef<TamaguiElement, SubagentOutputProps>(
  ({ schema, children, ...props }, forwardedRef) => (
    <>
      {children != null && (
        <BodyText ref={forwardedRef} size="sm" whiteSpace="pre-wrap" {...props}>
          {children}
        </BodyText>
      )}
      {schema && <Tool.Output output={schema} label="Output schema" />}
    </>
  )
);

SubagentOutput.displayName = "Subagent.Output";

export const Subagent = withStaticProperties(SubagentRoot, {
  Header: SubagentHeader,
  Content: SubagentContent,
  Instructions: SubagentInstructions,
  Tools: SubagentTools,
  Tool: SubagentTool,
  Output: SubagentOutput
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Subagent.Header` is undefined on the server).
 */
export {
  SubagentContent,
  SubagentHeader,
  SubagentInstructions,
  SubagentOutput,
  SubagentTool,
  SubagentTools
};

/** The AI SDK Elements names, for code migrating from its `Agent`. */
export {
  Subagent as Agent,
  SubagentContent as AgentContent,
  SubagentHeader as AgentHeader,
  SubagentInstructions as AgentInstructions,
  SubagentOutput as AgentOutput,
  SubagentTool as AgentTool,
  SubagentTools as AgentTools
};
export type {
  SubagentContentProps as AgentContentProps,
  SubagentHeaderProps as AgentHeaderProps,
  SubagentInstructionsProps as AgentInstructionsProps,
  SubagentOutputProps as AgentOutputProps,
  SubagentProps as AgentProps,
  SubagentToolProps as AgentToolProps,
  SubagentToolsProps as AgentToolsProps
};
