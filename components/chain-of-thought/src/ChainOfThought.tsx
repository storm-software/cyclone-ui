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
import {
  AlertCircle,
  Circle,
  ConfirmCircle,
  Loading
} from "@cyclone-ui/icons";
import type { TagProps } from "@cyclone-ui/tag";
import { Tag } from "@cyclone-ui/tag";
import type {
  TaskContentProps,
  TaskItemProps,
  TaskProps,
  TaskTriggerProps
} from "@cyclone-ui/task";
import { Task, TaskContent, useTask } from "@cyclone-ui/task";
import type { TraceStatus } from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export type ChainOfThoughtProps = TaskProps;

/**
 * The steps behind an answer, under a summary line. The summary's status and
 * title follow the steps. It opens while they run and closes when they are
 * done, unless the reader opened or closed it.
 */
const ChainOfThoughtRoot = forwardRef<TamaguiElement, ChainOfThoughtProps>(
  (props, forwardedRef) => <Task ref={forwardedRef} {...props} />
);

ChainOfThoughtRoot.displayName = "ChainOfThought";

export type ChainOfThoughtHeaderProps = Omit<TaskTriggerProps, "title">;

/**
 * The summary line, with an icon for its status. Its title defaults to
 * "Researching" while a step runs, then "Researched in 3 steps" (", 1 failed"
 * when steps failed); children replace the title.
 */
const ChainOfThoughtHeader = forwardRef<
  TamaguiElement,
  ChainOfThoughtHeaderProps
>(({ children, ...props }, forwardedRef) => {
  const { status, itemCount, errorCount } = useTask();

  return (
    <Task.Trigger
      ref={forwardedRef}
      {...props}
      title={
        children ??
        (status === "running"
          ? "Researching"
          : `Researched in ${itemCount} ${itemCount === 1 ? "step" : "steps"}${
              errorCount > 0 ? `, ${errorCount} failed` : ""
            }`)
      }
    />
  );
});

ChainOfThoughtHeader.displayName = "ChainOfThought.Header";

export type ChainOfThoughtContentProps = TaskContentProps;

/**
 * The steps, indented under the summary. They stay mounted while it is
 * closed, so they keep their own open state.
 */
const ChainOfThoughtContent = TaskContent;

export type ChainOfThoughtStepStatus = "complete" | "active" | "pending" | "error";

const LINE_STATUS: Record<ChainOfThoughtStepStatus, TraceStatus | undefined> = {
  complete: undefined,
  active: "running",
  pending: "pending",
  error: "error"
};

// An element, not a component: `Trace.Icon` sizes and colors its child.
const getStatusIcon = (status: TraceStatus | undefined) =>
  status === "running" ? (
    <Loading />
  ) : status === "error" ? (
    <AlertCircle />
  ) : status === "pending" ? (
    <Circle />
  ) : (
    <ConfirmCircle />
  );

export type ChainOfThoughtStepProps = Omit<
  TaskItemProps,
  "status" | "children"
> & {
  /** What the step did, in the tense of its status: "Searched the web for …". */
  label: ReactNode;
  /** Defaults to `complete`. */
  status?: ChainOfThoughtStepStatus;
  /** Defaults to an icon for the status. */
  icon?: ReactNode;
  /** Whether a step with children starts open. */
  defaultOpen?: boolean;
  /** The step's detail, such as search results or output. The line opens to show it. */
  children?: ReactNode;
};

/**
 * One step: a line with an icon, the label and a description. With children,
 * the line opens to show them.
 */
const ChainOfThoughtStep = forwardRef<TamaguiElement, ChainOfThoughtStepProps>(
  (
    { label, status = "complete", icon, defaultOpen, children, ...props },
    forwardedRef
  ) => {
    const lineStatus = LINE_STATUS[status];
    const line = (
      <Task.Item
        ref={forwardedRef}
        status={lineStatus}
        icon={icon ?? getStatusIcon(lineStatus)}
        {...props}>
        {label}
      </Task.Item>
    );

    if (children == null || children === false) {
      return line;
    }

    return (
      <Trace.Collapsible defaultOpen={defaultOpen}>
        <Trace.Collapsible.Trigger>{line}</Trace.Collapsible.Trigger>
        <Trace.Collapsible.Content>{children}</Trace.Collapsible.Content>
      </Trace.Collapsible>
    );
  }
);

ChainOfThoughtStep.displayName = "ChainOfThought.Step";

const ChainOfThoughtSearchResultsFrame = styled(View, {
  name: "ChainOfThoughtSearchResults",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "lg"
});

export type ChainOfThoughtSearchResultsProps = GetProps<
  typeof ChainOfThoughtSearchResultsFrame
>;

/** The results of a search step, as a row of tags that wraps. */
const ChainOfThoughtSearchResults = forwardRef<
  TamaguiElement,
  ChainOfThoughtSearchResultsProps
>((props, forwardedRef) => (
  <ChainOfThoughtSearchResultsFrame ref={forwardedRef} {...props} />
));

ChainOfThoughtSearchResults.displayName = "ChainOfThought.SearchResults";

export type ChainOfThoughtSearchResultProps = TagProps;

/** One result, such as a hostname or a file name. */
const ChainOfThoughtSearchResult = forwardRef<
  TamaguiElement,
  ChainOfThoughtSearchResultProps
>(({ children, ...props }, forwardedRef) => (
  <Tag ref={forwardedRef} variant="surface" {...props}>
    <Tag.Text>{children}</Tag.Text>
  </Tag>
));

ChainOfThoughtSearchResult.displayName = "ChainOfThought.SearchResult";

export type ChainOfThoughtImageProps = ViewProps & {
  /** Text under the image. */
  caption?: ReactNode;
};

/** An image a step produced or read, such as a chart or a screenshot. */
const ChainOfThoughtImage = forwardRef<TamaguiElement, ChainOfThoughtImageProps>(
  ({ caption, children, ...props }, forwardedRef) => (
    <View
      ref={forwardedRef}
      render="figure"
      margin={0}
      gap="xl"
      {...props}>
      <View
        alignItems="center"
        justifyContent="center"
        maxHeight={352}
        overflow="hidden"
        borderRadius="lg"
        backgroundColor="sunken"
        padding="3xl">
        {children}
      </View>
      {caption != null && (
        <BodyText render="figcaption" size="xs" color="subtle">
          {caption}
        </BodyText>
      )}
    </View>
  )
);

ChainOfThoughtImage.displayName = "ChainOfThought.Image";

export const ChainOfThought = withStaticProperties(ChainOfThoughtRoot, {
  Header: ChainOfThoughtHeader,
  Content: ChainOfThoughtContent,
  Step: ChainOfThoughtStep,
  SearchResults: ChainOfThoughtSearchResults,
  SearchResult: ChainOfThoughtSearchResult,
  Image: ChainOfThoughtImage
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`ChainOfThought.Step` is undefined on the server).
 */
export {
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtImage,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep
};
