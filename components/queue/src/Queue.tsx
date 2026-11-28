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
import type { IconProps } from "@cyclone-ui/icons";
import {
  CheckList3,
  Circle,
  ConfirmCircle,
  Dot,
  List
} from "@cyclone-ui/icons";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceDescriptionProps,
  TraceIconProps,
  TraceLineProps,
  TraceProps,
  TraceTitleProps
} from "@cyclone-ui/trace";
import {
  Trace,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceTitle
} from "@cyclone-ui/trace";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import { createContext, forwardRef, use } from "react";

export type QueueTodoStatus = "pending" | "in_progress" | "completed";

export interface QueueTodo {
  id: string;
  title: string;
  /** Shown when the reader opens the todo. */
  description?: string;
  /** Defaults to `pending`. */
  status?: QueueTodoStatus;
}

// Plain contexts: a styled context Provider resets its values to defaults.
const QueueStreamingContext = createContext(false);
const QueueItemContext = createContext<QueueTodoStatus>("pending");

export type QueueProps = TraceProps & {
  /**
   * The todo list, shown in a "N to do" and a "N completed" section. Leave it
   * out to compose the sections yourself.
   */
  todos?: QueueTodo[];
  /**
   * Whether the agent is still working, which makes the todo in progress
   * shimmer. Defaults to `false`.
   */
  isStreaming?: boolean;
};

/**
 * An agent's todo list, split into what is left and what is done. A todo
 * moves to the completed section when it is done.
 */
const QueueRoot = forwardRef<TamaguiElement, QueueProps>(
  ({ todos, isStreaming = false, children, ...props }, forwardedRef) => {
    const left = todos?.filter(todo => todo.status !== "completed") ?? [];
    const done = todos?.filter(todo => todo.status === "completed") ?? [];

    return (
      <QueueStreamingContext value={isStreaming}>
        <Trace ref={forwardedRef} {...props}>
          {children ?? (
            <>
              {left.length > 0 && (
                <TodoSection label="to do" icon={<List />} todos={left} />
              )}
              {done.length > 0 && (
                <TodoSection
                  label="completed"
                  icon={<CheckList3 />}
                  todos={done}
                />
              )}
            </>
          )}
        </Trace>
      </QueueStreamingContext>
    );
  }
);

QueueRoot.displayName = "Queue";

const TodoSection = ({
  label,
  icon,
  todos
}: QueueSectionLabelProps & { todos: QueueTodo[] }) => (
  <QueueSection>
    <QueueSectionTrigger>
      <QueueSectionLabel count={todos.length} label={label} icon={icon} />
    </QueueSectionTrigger>
    <QueueSectionContent>
      <QueueList>
        {todos.map(todo => {
          const item = (
            <QueueItem key={todo.id} status={todo.status}>
              <QueueItemIndicator />
              <QueueItemContent>{todo.title}</QueueItemContent>
            </QueueItem>
          );

          // A todo with a description opens to show it.
          return todo.description ? (
            <Trace.Collapsible key={todo.id}>
              <Trace.Collapsible.Trigger>{item}</Trace.Collapsible.Trigger>
              <Trace.Collapsible.Content>
                {todo.description}
              </Trace.Collapsible.Content>
            </Trace.Collapsible>
          ) : (
            item
          );
        })}
      </QueueList>
    </QueueSectionContent>
  </QueueSection>
);

export type QueueSectionProps = TraceCollapsibleProps;

/** A section of the list that opens and closes. It starts open. */
const QueueSection = forwardRef<TamaguiElement, QueueSectionProps>(
  ({ defaultOpen = true, ...props }, forwardedRef) => (
    <Trace.Collapsible ref={forwardedRef} defaultOpen={defaultOpen} {...props} />
  )
);

QueueSection.displayName = "Queue.Section";

export type QueueSectionTriggerProps = TraceCollapsibleTriggerProps;

/** The button that opens and closes a section. Put a `Queue.SectionLabel` in it. */
const QueueSectionTrigger = TraceCollapsibleTrigger;

export interface QueueSectionLabelProps extends Omit<TraceLineProps, "children"> {
  /** The number of todos in the section. */
  count?: number;
  /** What the todos are: "to do", "completed". */
  label: string;
  icon?: ReactNode;
}

/** A section's line: an icon and "2 to do". */
const QueueSectionLabel = forwardRef<TamaguiElement, QueueSectionLabelProps>(
  ({ count, label, icon, ...props }, forwardedRef) => (
    <Trace.Line ref={forwardedRef} {...props}>
      {icon != null && <Trace.Icon>{icon}</Trace.Icon>}
      <Trace.Title>
        {count === undefined ? label : `${count} ${label}`}
      </Trace.Title>
    </Trace.Line>
  )
);

QueueSectionLabel.displayName = "Queue.SectionLabel";

export type QueueSectionContentProps = TraceCollapsibleContentProps;

/** A section's todos, indented under its line. Put a `Queue.List` in it. */
const QueueSectionContent = TraceCollapsibleContent;

export type QueueListProps = TraceProps;

/** The todos of a section. */
const QueueList = forwardRef<TamaguiElement, QueueListProps>(
  (props, forwardedRef) => <Trace ref={forwardedRef} {...props} />
);

QueueList.displayName = "Queue.List";

export type QueueItemProps = Omit<TraceLineProps, "status"> & {
  /** Defaults to `pending`. */
  status?: QueueTodoStatus;
};

/**
 * One todo: a `Queue.ItemIndicator` and a `Queue.ItemContent`. The todo in
 * progress shimmers while the queue streams.
 */
const QueueItem = forwardRef<TamaguiElement, QueueItemProps>(
  ({ status = "pending", ...props }, forwardedRef) => {
    const isStreaming = use(QueueStreamingContext);

    return (
      <QueueItemContext value={status}>
        <Trace.Line
          ref={forwardedRef}
          status={
            status === "in_progress" && isStreaming ? "running" : undefined
          }
          {...props}
        />
      </QueueItemContext>
    );
  }
);

QueueItem.displayName = "Queue.Item";

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

export type QueueItemIndicatorProps = TraceIconProps;

/**
 * The todo's status: an empty circle while it waits, a dotted circle while
 * in progress and a check when done. Children replace the icon.
 */
const QueueItemIndicator = forwardRef<TamaguiElement, QueueItemIndicatorProps>(
  ({ children, ...props }, forwardedRef) => {
    const status = use(QueueItemContext);

    return (
      <Trace.Icon ref={forwardedRef} {...props}>
        {children ??
          (status === "completed" ? (
            <ConfirmCircle />
          ) : status === "in_progress" ? (
            <CircleDot />
          ) : (
            <Circle />
          ))}
      </Trace.Icon>
    );
  }
);

QueueItemIndicator.displayName = "Queue.ItemIndicator";

export type QueueItemContentProps = TraceTitleProps;
export type QueueItemDescriptionProps = TraceDescriptionProps;

/** The todo's title. */
const QueueItemContent = TraceTitle;
/** Secondary text after the title. */
const QueueItemDescription = TraceDescription;

const QueueItemActionsFrame = styled(View, {
  name: "QueueItemActions",
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
  gap: "md"
});

export type QueueItemActionsProps = GetProps<typeof QueueItemActionsFrame>;

/**
 * Buttons after the todo's title. Don't put them in a todo that opens: a
 * button can't sit inside its trigger.
 */
const QueueItemActions = forwardRef<TamaguiElement, QueueItemActionsProps>(
  (props, forwardedRef) => (
    <QueueItemActionsFrame ref={forwardedRef} {...props} />
  )
);

QueueItemActions.displayName = "Queue.ItemActions";

export type QueueItemActionProps = ButtonProps;

/**
 * A small round icon button, such as remove. Name it with `aria-label` (and
 * `tooltip`).
 */
const QueueItemAction = forwardRef<TamaguiElement, QueueItemActionProps>(
  ({ children, ...props }, forwardedRef) => (
    // As tall as the line, with a 14px icon.
    <Button
      ref={forwardedRef}
      variant="ghost"
      size="3xl"
      circular={true}
      flexGrow={0}
      {...props}>
      <Button.Icon size="7xl">{children}</Button.Icon>
    </Button>
  )
);

QueueItemAction.displayName = "Queue.ItemAction";

export const Queue = withStaticProperties(QueueRoot, {
  Section: QueueSection,
  SectionTrigger: QueueSectionTrigger,
  SectionLabel: QueueSectionLabel,
  SectionContent: QueueSectionContent,
  List: QueueList,
  Item: QueueItem,
  ItemIndicator: QueueItemIndicator,
  ItemContent: QueueItemContent,
  ItemDescription: QueueItemDescription,
  ItemActions: QueueItemActions,
  ItemAction: QueueItemAction
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Queue.Item` is undefined on the server).
 */
export {
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueItemDescription,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger
};
