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
import { CodeBlock, Pre } from "@cyclone-ui/code-block";
import {
  CheckList3,
  CloseCircle,
  ConfirmCircle,
  Document,
  Loading,
  MinusCircle
} from "@cyclone-ui/icons";
import { Progress } from "@cyclone-ui/progress";
import type {
  TraceCollapsibleContentProps,
  TraceCollapsibleProps,
  TraceCollapsibleTriggerProps,
  TraceDescriptionProps,
  TraceIconProps,
  TraceLineProps,
  TraceStatus,
  TraceTitleProps
} from "@cyclone-ui/trace";
import { Trace } from "@cyclone-ui/trace";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import type { TamaguiElement, TextProps, ViewProps } from "@tamagui/core";
import { Text, View, withStaticProperties } from "@tamagui/core";
import type { ReactNode } from "react";
import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  use,
  useState
} from "react";

export type TestResultStatus = "passed" | "failed" | "skipped" | "running";

export interface TestResultsSummaryData {
  passed: number;
  failed: number;
  skipped: number;
  total: number;
  /** The run's duration, in milliseconds. */
  duration?: number;
}

/** `850ms`, `4.2s` or `1m 5s`. */
const formatDuration = (ms: number) =>
  ms < 1000
    ? `${Math.round(ms)}ms`
    : ms < 60_000
      ? `${Number((ms / 1000).toFixed(1))}s`
      : `${Math.floor(ms / 60_000)}m ${Math.round((ms % 60_000) / 1000)}s`;

// "3 passed, 1 failed": the non-zero counts.
const formatCounts = (counts: Partial<Record<TestResultStatus, number>>) =>
  (["passed", "failed", "skipped"] as const)
    .filter(status => counts[status])
    .map(status => `${counts[status]} ${status}`)
    .join(", ");

// Trace line statuses: failed work is an error, running work shimmers and
// skipped tests are dimmed like work that never ran.
const LINE_STATUS: Record<TestResultStatus, TraceStatus | undefined> = {
  passed: undefined,
  failed: "error",
  skipped: "pending",
  running: "running"
};

// Opens while its own choice is unset: a run or suite with a failure.
const useOpenState = (
  { open, defaultOpen, onOpenChange }: TraceCollapsibleProps,
  failed: boolean
) => {
  const [choice, setChoice] = useState(defaultOpen);

  return {
    open: open ?? choice ?? failed,
    onOpenChange: (next: boolean) => {
      setChoice(next);
      onOpenChange?.(next);
    }
  };
};

const TestResultsContext = createContext<TestResultsSummaryData | undefined>(
  undefined
);

export type TestResultsProps = TraceCollapsibleProps & {
  /** The counts once the run is done. Without them the run reads as running. */
  summary?: TestResultsSummaryData;
};

/**
 * A test run: a line that counts the tests, like "Ran 42 tests, 2 failed",
 * and opens into its suites. It opens when a test failed, unless the reader
 * opened or closed it.
 */
const TestResultsRoot = forwardRef<TamaguiElement, TestResultsProps>(
  ({ summary, open, defaultOpen, onOpenChange, ...props }, forwardedRef) => (
    <TestResultsContext value={summary}>
      <Trace>
        <Trace.Collapsible
          ref={forwardedRef}
          {...useOpenState(
            { open, defaultOpen, onOpenChange },
            Boolean(summary?.failed)
          )}
          {...props}
        />
      </Trace>
    </TestResultsContext>
  )
);

TestResultsRoot.displayName = "TestResults";

export type TestResultsHeaderProps = TraceCollapsibleTriggerProps;

/** The run's line. Without children it shows the summary and duration. */
const TestResultsHeader = forwardRef<TamaguiElement, TestResultsHeaderProps>(
  ({ children, ...props }, forwardedRef) => {
    const summary = use(TestResultsContext);

    return (
      <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
        <Trace.Line
          status={
            !summary ? "running" : summary.failed > 0 ? "error" : undefined
          }>
          <Trace.Icon>{summary ? <CheckList3 /> : <Loading />}</Trace.Icon>
          {children ?? (
            <>
              <TestResultsSummary />
              <TestResultsDuration />
            </>
          )}
        </Trace.Line>
      </Trace.Collapsible.Trigger>
    );
  }
);

TestResultsHeader.displayName = "TestResults.Header";

export type TestResultsSummaryProps = TraceTitleProps;

/** The counts, like "Ran 42 tests, 2 failed", or "Running tests". */
const TestResultsSummary = forwardRef<TamaguiElement, TestResultsSummaryProps>(
  ({ children, ...props }, forwardedRef) => {
    const summary = use(TestResultsContext);

    return (
      <Trace.Title ref={forwardedRef} {...props}>
        {children ??
          (summary
            ? [
                `Ran ${summary.total} test${summary.total === 1 ? "" : "s"}`,
                formatCounts({
                  failed: summary.failed,
                  skipped: summary.skipped
                })
              ]
                .filter(Boolean)
                .join(", ")
            : "Running tests")}
      </Trace.Title>
    );
  }
);

TestResultsSummary.displayName = "TestResults.Summary";

export type TestResultsDurationProps = TraceDescriptionProps;

/** The run's duration, like "4.2s". Nothing until the run is done. */
const TestResultsDuration = forwardRef<
  TamaguiElement,
  TestResultsDurationProps
>(({ children, ...props }, forwardedRef) => {
  const duration = use(TestResultsContext)?.duration;
  if (children == null && duration == null) return null;

  return (
    <Trace.Description ref={forwardedRef} {...props}>
      {children ?? formatDuration(duration!)}
    </Trace.Description>
  );
});

TestResultsDuration.displayName = "TestResults.Duration";

export type TestResultsProgressProps = ViewProps;

/** A bar of the passed tests, with "40/42 tests passed". */
const TestResultsProgress = forwardRef<
  TamaguiElement,
  TestResultsProgressProps
>(({ children, ...props }, forwardedRef) => {
  const summary = use(TestResultsContext);
  if (!summary) return null;

  return (
    <View ref={forwardedRef} alignSelf="stretch" gap="lg" {...props}>
      <Progress
        theme={summary.failed > 0 ? "danger" : "success"}
        size="xs"
        value={summary.passed}
        max={summary.total || 1}
        aria-label="Tests passed"
      />
      {children ?? (
        <BodyText size="xs" color="subtle" fontVariant={["tabular-nums"]}>
          {`${summary.passed}/${summary.total} tests passed`}
        </BodyText>
      )}
    </View>
  );
});

TestResultsProgress.displayName = "TestResults.Progress";

export type TestResultsContentProps = TraceCollapsibleContentProps;

/** The run's suites. */
const TestResultsContent = forwardRef<TamaguiElement, TestResultsContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Content ref={forwardedRef} {...props}>
      <Trace>{children}</Trace>
    </Trace.Collapsible.Content>
  )
);

TestResultsContent.displayName = "TestResults.Content";

export const TestResults = withStaticProperties(TestResultsRoot, {
  Header: TestResultsHeader,
  Summary: TestResultsSummary,
  Duration: TestResultsDuration,
  Progress: TestResultsProgress,
  Content: TestResultsContent
});

interface TestSuiteContextValue {
  name: string;
  status: TestResultStatus;
}

const TestSuiteContext = createContext<TestSuiteContextValue>({
  name: "",
  status: "passed"
});

export type TestSuiteProps = TraceCollapsibleProps & {
  /** The suite, usually a file such as `cart.test.ts`. */
  name: string;
  /** `failed` when one of its tests failed. */
  status: TestResultStatus;
};

/**
 * A group of tests, usually a file: a line that opens into its tests. It
 * opens when it has a failure, unless the reader opened or closed it.
 */
const TestSuiteRoot = forwardRef<TamaguiElement, TestSuiteProps>(
  (
    { name, status, open, defaultOpen, onOpenChange, ...props },
    forwardedRef
  ) => (
    <TestSuiteContext value={{ name, status }}>
      <Trace.Collapsible
        ref={forwardedRef}
        {...useOpenState(
          { open, defaultOpen, onOpenChange },
          status === "failed"
        )}
        {...props}
      />
    </TestSuiteContext>
  )
);

TestSuiteRoot.displayName = "TestSuite";

export type TestSuiteNameProps = TraceCollapsibleTriggerProps;

/** The suite's line: its name, then `children` such as `TestSuite.Stats`. */
const TestSuiteName = forwardRef<TamaguiElement, TestSuiteNameProps>(
  ({ children, ...props }, forwardedRef) => {
    const { name, status } = use(TestSuiteContext);

    return (
      <Trace.Collapsible.Trigger ref={forwardedRef} {...props}>
        <Trace.Line status={LINE_STATUS[status]}>
          <Trace.Icon>
            <Document />
          </Trace.Icon>
          <Trace.Title>{name}</Trace.Title>
          {children}
        </Trace.Line>
      </Trace.Collapsible.Trigger>
    );
  }
);

TestSuiteName.displayName = "TestSuite.Name";

export type TestSuiteStatsProps = TraceDescriptionProps & {
  passed?: number;
  failed?: number;
  skipped?: number;
};

/** The suite's counts, like "3 passed, 1 failed". */
const TestSuiteStats = forwardRef<TamaguiElement, TestSuiteStatsProps>(
  ({ passed, failed, skipped, children, ...props }, forwardedRef) => (
    <Trace.Description ref={forwardedRef} {...props}>
      {children ?? formatCounts({ passed, failed, skipped })}
    </Trace.Description>
  )
);

TestSuiteStats.displayName = "TestSuite.Stats";

export type TestSuiteContentProps = TraceCollapsibleContentProps;

/** The suite's tests. */
const TestSuiteContent = forwardRef<TamaguiElement, TestSuiteContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Trace.Collapsible.Content ref={forwardedRef} {...props}>
      <Trace>{children}</Trace>
    </Trace.Collapsible.Content>
  )
);

TestSuiteContent.displayName = "TestSuite.Content";

export const TestSuite = withStaticProperties(TestSuiteRoot, {
  Name: TestSuiteName,
  Stats: TestSuiteStats,
  Content: TestSuiteContent
});

interface TestContextValue {
  name: string;
  status: TestResultStatus;
  duration?: number;
}

const TestContext = createContext<TestContextValue>({
  name: "",
  status: "passed"
});

const STATUS_ICONS: Record<TestResultStatus, ReactNode> = {
  passed: <ConfirmCircle />,
  failed: <CloseCircle />,
  skipped: <MinusCircle />,
  running: <Loading />
};

const STATUS_LABELS: Record<TestResultStatus, string> = {
  passed: "Passed",
  failed: "Failed",
  skipped: "Skipped",
  running: "Running"
};

export type TestProps = Omit<TraceLineProps, "status"> & {
  name: string;
  status: TestResultStatus;
  /** How long the test took, in milliseconds. */
  duration?: number;
};

/**
 * One test: a line with its status, name and duration. A `TestError` among
 * its children turns it into a line that opens into the error (open at
 * first).
 */
const TestRoot = forwardRef<TamaguiElement, TestProps>(
  ({ name, status, duration, children, ...props }, forwardedRef) => {
    const items = Children.toArray(children);
    const isError = (item: ReactNode) =>
      isValidElement(item) && item.type === TestErrorRoot;
    const errors = items.filter(isError);
    const rest = items.filter(item => !isError(item));
    const line = (
      <Trace.Line ref={forwardedRef} status={LINE_STATUS[status]} {...props}>
        {rest.length > 0 ? (
          rest
        ) : (
          <>
            <TestStatusIcon />
            <TestName />
            <TestDuration />
          </>
        )}
      </Trace.Line>
    );

    return (
      <TestContext value={{ name, status, duration }}>
        {errors.length > 0 ? (
          <Trace.Collapsible defaultOpen={true}>
            <Trace.Collapsible.Trigger>{line}</Trace.Collapsible.Trigger>
            <Trace.Collapsible.Content>{errors}</Trace.Collapsible.Content>
          </Trace.Collapsible>
        ) : (
          line
        )}
      </TestContext>
    );
  }
);

TestRoot.displayName = "Test";

export type TestStatusProps = TraceIconProps;

/** The status icon: green when passed, red when failed. */
const TestStatusIcon = forwardRef<TamaguiElement, TestStatusProps>(
  ({ children, ...props }, forwardedRef) => {
    const { status } = use(TestContext);

    return (
      <Trace.Icon
        ref={forwardedRef}
        {...(status === "passed" && { theme: "success", color: "primary" })}
        {...props}>
        {children ?? STATUS_ICONS[status]}
      </Trace.Icon>
    );
  }
);

TestStatusIcon.displayName = "Test.Status";

export type TestNameProps = TraceTitleProps;

/** The test's name, after its status for screen readers ("Failed: …"). */
const TestName = forwardRef<TamaguiElement, TestNameProps>(
  ({ children, ...props }, forwardedRef) => {
    const { name, status } = use(TestContext);

    return (
      <Trace.Title ref={forwardedRef} {...props}>
        <VisuallyHidden render="span">
          <Text>{`${STATUS_LABELS[status]}: `}</Text>
        </VisuallyHidden>
        {children ?? name}
      </Trace.Title>
    );
  }
);

TestName.displayName = "Test.Name";

export type TestDurationProps = TraceDescriptionProps;

/** How long the test took, like "12ms". */
const TestDuration = forwardRef<TamaguiElement, TestDurationProps>(
  ({ children, ...props }, forwardedRef) => {
    const { duration } = use(TestContext);
    if (children == null && duration == null) return null;

    return (
      <Trace.Description ref={forwardedRef} {...props}>
        {children ?? formatDuration(duration!)}
      </Trace.Description>
    );
  }
);

TestDuration.displayName = "Test.Duration";

export const Test = withStaticProperties(TestRoot, {
  Status: TestStatusIcon,
  Name: TestName,
  Duration: TestDuration
});

export type TestErrorProps = ViewProps;

/**
 * A failure's output in the code font: a `TestError.Message` and a
 * `TestError.Stack`, or a string. Put it in a failed `Test`.
 */
const TestErrorRoot = forwardRef<TamaguiElement, TestErrorProps>(
  ({ children, ...props }, forwardedRef) => (
    <CodeBlock ref={forwardedRef} allowCopy={false} margin={0} {...props}>
      <Pre color="ink">
        <code>{children}</code>
      </Pre>
    </CodeBlock>
  )
);

TestErrorRoot.displayName = "TestError";

export type TestErrorMessageProps = TextProps;

/** What went wrong, in the danger color. */
const TestErrorMessage = forwardRef<TamaguiElement, TestErrorMessageProps>(
  (props, forwardedRef) => (
    <Text
      ref={forwardedRef}
      render="span"
      theme="danger"
      color="primary"
      whiteSpace="pre-wrap"
      {...props}
    />
  )
);

TestErrorMessage.displayName = "TestError.Message";

export type TestErrorStackProps = TextProps;

/** Where it went wrong, dimmed under the message. */
const TestErrorStack = forwardRef<TamaguiElement, TestErrorStackProps>(
  (props, forwardedRef) => (
    <Text
      ref={forwardedRef}
      render="span"
      color="subtle"
      marginTop="xl"
      {...props}
    />
  )
);

TestErrorStack.displayName = "TestError.Stack";

export const TestError = withStaticProperties(TestErrorRoot, {
  Message: TestErrorMessage,
  Stack: TestErrorStack
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`TestResults.Header` is undefined on the server). They keep
 * the AI SDK Elements names.
 */
export {
  TestDuration,
  TestErrorMessage,
  TestErrorStack,
  TestName,
  TestResultsContent,
  TestResultsDuration,
  TestResultsHeader,
  TestResultsProgress,
  TestResultsSummary,
  TestStatusIcon as TestStatus,
  TestSuiteContent,
  TestSuiteName,
  TestSuiteStats
};
