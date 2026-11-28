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

import { AlertCircle, ConfirmCircle, Loading } from "@cyclone-ui/icons";
import type { InlineCodeTextProps } from "@cyclone-ui/inline-code-text";
import { InlineCodeText } from "@cyclone-ui/inline-code-text";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceLineProps,
  TraceStatus
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import { useIsomorphicLayoutEffect } from "@tamagui/constants";
import type { TamaguiElement } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  createContext,
  forwardRef,
  use,
  useCallback,
  useId,
  useState
} from "react";

export interface TaskContextValue {
  /** Whether the steps are shown. */
  isOpen: boolean;
  /** Shows or hides the steps, as the reader's choice. */
  setIsOpen: (open: boolean) => void;
  /**
   * `running` while an item runs or waits (or `isStreaming` is set), `error`
   * once one failed, and none when every item is done.
   */
  status: TraceStatus | undefined;
  /** The number of items. */
  itemCount: number;
  /** The number of failed items. */
  errorCount: number;
}

interface TaskContextInternal extends TaskContextValue {
  /** Tracks an item's status until the returned cleanup runs. */
  register: (id: string, status: TraceStatus | undefined) => () => void;
}

// A plain context: a styled context Provider resets its values to defaults.
const TaskContext = createContext<TaskContextInternal | null>(null);

const useTaskInternal = () => {
  const context = use(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a Task");
  }

  return context;
};

/** The state of the nearest `Task`. */
export const useTask = (): TaskContextValue => useTaskInternal();

export type TaskProps = TraceCollapsibleProps & {
  /**
   * Keeps the task running between steps, while the agent is still working
   * on it. Without it, the task runs only while one of its items does.
   */
  isStreaming?: boolean;
};

/**
 * A piece of work an agent is doing: a line that opens into the steps it
 * took. Its status follows its items. It opens while it runs and closes when
 * it is done, unless the reader opened or closed it. Put several in one
 * `Trace`, a line each.
 */
const TaskRoot = forwardRef<TamaguiElement, TaskProps>(
  (
    { isStreaming = false, open, defaultOpen, onOpenChange, ...props },
    forwardedRef
  ) => {
    const [items, setItems] = useState(
      () => new Map<string, TraceStatus | undefined>()
    );
    // The reader's choice; until they make one, the task follows its status.
    const [choice, setChoice] = useState(defaultOpen);

    const register = useCallback(
      (id: string, status: TraceStatus | undefined) => {
        setItems(prev => new Map(prev).set(id, status));

        return () =>
          setItems(prev => {
            const next = new Map(prev);
            next.delete(id);
            return next;
          });
      },
      []
    );

    const statuses = [...items.values()];
    const errorCount = statuses.filter(status => status === "error").length;
    const status: TraceStatus | undefined =
      isStreaming ||
      statuses.some(status => status === "running" || status === "pending")
        ? "running"
        : errorCount > 0
          ? "error"
          : undefined;

    const context: TaskContextInternal = {
      isOpen: open ?? choice ?? status === "running",
      setIsOpen: next => {
        setChoice(next);
        onOpenChange?.(next);
      },
      status,
      itemCount: statuses.length,
      errorCount,
      register
    };

    return (
      <TaskContext value={context}>
        <Trace.Collapsible
          ref={forwardedRef}
          {...props}
          open={context.isOpen}
          onOpenChange={context.setIsOpen}
        />
      </TaskContext>
    );
  }
);

TaskRoot.displayName = "Task";

// An element, not a component: `Trace.Icon` sizes and colors its child.
const getStatusIcon = (status: TraceStatus | undefined) =>
  status === "running" ? (
    <Loading />
  ) : status === "error" ? (
    <AlertCircle />
  ) : (
    <ConfirmCircle />
  );

export type TaskTriggerProps = TraceCollapsibleTriggerProps & {
  /**
   * What the agent is doing, then what it did: "Updating the page metadata",
   * "Updated the page metadata".
   */
  title?: ReactNode;
};

/**
 * The line that opens and closes the steps: an icon for the task's status
 * and the title. Children replace the line.
 */
const TaskTrigger = forwardRef<TamaguiElement, TaskTriggerProps>(
  ({ title, children, ...props }, forwardedRef) => {
    const { status } = useTaskInternal();

    return (
      <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
        {children ?? (
          <Trace.Line status={status}>
            <Trace.Icon>{getStatusIcon(status)}</Trace.Icon>
            <Trace.Title>{title}</Trace.Title>
          </Trace.Line>
        )}
      </Trace.Collapsible.Trigger>
    );
  }
);

TaskTrigger.displayName = "Task.Trigger";

export type TaskContentProps = TraceCollapsibleContentProps;

/**
 * The steps, a `Trace` indented under the line. They stay mounted while the
 * task is closed, so they keep counting toward its status and keep their own
 * open state.
 */
const TaskContent = forwardRef<TamaguiElement, TaskContentProps>(
  ({ children, ...props }, forwardedRef) => {
    const { isOpen } = useTaskInternal();

    return (
      <Trace.Collapsible.Content ref={forwardedRef} forceMount={true} {...props}>
        {/* Hidden steps leave the tab order and the accessibility tree.
            `inert` is untyped on View, so it's spread. */}
        <Trace {...{ inert: !isOpen }}>{children}</Trace>
      </Trace.Collapsible.Content>
    );
  }
);

TaskContent.displayName = "Task.Content";

export type TaskItemProps = TraceLineProps & {
  /** An icon before the title, such as the kind of step (a search, a read). */
  icon?: ReactNode;
  /** Secondary text after the title, such as a count or a duration. */
  description?: ReactNode;
};

/**
 * One step: a line with a title in the matching tense ("Searching for …",
 * "Searched for …", "Failed to search for …"). Its `status` counts toward the
 * task's.
 */
const TaskItem = forwardRef<TamaguiElement, TaskItemProps>(
  ({ status, icon, description, children, ...props }, forwardedRef) => {
    const id = useId();
    const register = use(TaskContext)?.register;

    useIsomorphicLayoutEffect(
      () => register?.(id, status),
      [register, id, status]
    );

    return (
      <Trace.Line ref={forwardedRef} status={status} {...props}>
        {icon != null && <Trace.Icon>{icon}</Trace.Icon>}
        <Trace.Title>{children}</Trace.Title>
        {description != null && (
          <Trace.Description>{description}</Trace.Description>
        )}
      </Trace.Line>
    );
  }
);

TaskItem.displayName = "Task.Item";

export type TaskItemFileProps = InlineCodeTextProps;

/**
 * A file name inside an item's title, in the line's color. It has no fill, so
 * a running title's shimmer shows through it.
 */
const TaskItemFile = forwardRef<TamaguiElement, TaskItemFileProps>(
  (props, forwardedRef) => (
    <InlineCodeText
      ref={forwardedRef}
      size="xs"
      color="inherit"
      backgroundColor="transparent"
      {...props}
    />
  )
);

TaskItemFile.displayName = "Task.ItemFile";

export const Task = withStaticProperties(TaskRoot, {
  Trigger: TaskTrigger,
  Content: TaskContent,
  Item: TaskItem,
  ItemFile: TaskItemFile
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`Task.Trigger` is undefined on the server).
 */
export { TaskContent, TaskItem, TaskItemFile, TaskTrigger };
