---
title: Test Results
description: A Trace line for a test run by an AI agent that counts the tests, like "Ran 42 tests, 2 failed", and opens into its suites, their tests and the output of each failure.
documentType: reference
tags: [component, test-results, tests, ai, agent, tool, trace, collapsible]
component:
  name: test-results
  package: "@cyclone-ui/test-results"
  stories:
    - title: AI/TestResults
      file: components/test-results/src/TestResults.stories.tsx
---

# Test Results

`TestResults` shows a test run by an AI agent. Its [Trace](./trace.md) line counts what ran, like "Ran 42 tests, 2 failed, 1 skipped", with the run's duration. Opening it shows each suite as a line of its own, each suite's tests with their status, and the output of each failure in the code font. A run with a failure, and each suite with one, opens on its own.

It is the Cyclone UI version of the [AI SDK Elements](https://elements.ai-sdk.dev) Test Results component, rebuilt on `Trace` like the [shadcn/ui](https://ui.shadcn.com/docs/ai-elements) one. The exports and props keep their AI SDK Elements names.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add test-results
pnpm install
```

- **File:** `TestResults.tsx`. The CLI writes it to `<path>/test-results/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Trace](./trace.md), [Code Block](./code-block.md), [Progress](./progress.md), [Visually Hidden](./visually-hidden.md), [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), Copy Button, [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), Toast, and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`.

## Import

```tsx
import { Test, TestError, TestResults, TestSuite } from "@cyclone-ui/test-results";
```

## Usage

```tsx
<TestResults summary={{ passed: 4, failed: 1, skipped: 1, total: 6, duration: 5420 }}>
  <TestResults.Header />
  <TestResults.Content>
    {suites.map(suite => (
      <TestSuite key={suite.name} name={suite.name} status={suite.status}>
        <TestSuite.Name>
          <TestSuite.Stats passed={suite.passed} failed={suite.failed} />
        </TestSuite.Name>
        <TestSuite.Content>
          {suite.tests.map(test => (
            <Test
              key={test.name}
              name={test.name}
              status={test.status}
              duration={test.duration}>
              {test.error && (
                <TestError>
                  <TestError.Message>{test.error.message}</TestError.Message>
                  <TestError.Stack>{test.error.stack}</TestError.Stack>
                </TestError>
              )}
            </Test>
          ))}
        </TestSuite.Content>
      </TestSuite>
    ))}
  </TestResults.Content>
</TestResults>
```

While the run is in progress, leave `summary` out: the line reads "Running tests" with a spinner. Pass `status="running"` to the tests that haven't finished. When the summary arrives, the line counts the tests, and opens if one failed.

With the AI SDK, run the tests as a tool and render its output when the part is `output-available`. Map the other tool states as in [Tool](./tool.md).

## Anatomy

```tsx
<TestResults>
  <TestResults.Header>
    <TestResults.Summary />
    <TestResults.Duration />
  </TestResults.Header>
  <TestResults.Content>
    <TestResults.Progress />
    <TestSuite>
      <TestSuite.Name>
        <TestSuite.Stats />
      </TestSuite.Name>
      <TestSuite.Content>
        <Test>
          <TestError>
            <TestError.Message />
            <TestError.Stack />
          </TestError>
        </Test>
      </TestSuite.Content>
    </TestSuite>
  </TestResults.Content>
</TestResults>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `TestResults` | A `Trace` with a `Trace.Collapsible` | Holds the summary and the open state. |
| `TestResults.Header` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a checklist icon (a spinner while running), the summary and the duration | The run's line. `status="error"` when a test failed, `running` without a summary. |
| `TestResults.Summary` | A `Trace.Title` | "Ran 42 tests, 2 failed, 1 skipped", or "Running tests". |
| `TestResults.Duration` | A `Trace.Description` | The run's duration, like "5.4s". |
| `TestResults.Progress` | A [Progress](./progress.md) bar of the passed tests and "5/8 tests passed" | Optional. The bar uses the `success` theme, or `danger` when a test failed. |
| `TestResults.Content` | A `Trace.Collapsible.Content` with a `Trace` | The suites. |
| `TestSuite` | A `Trace.Collapsible` | One suite, usually a file. |
| `TestSuite.Name` | A `Trace.Collapsible.Trigger` with a `Trace.Line`: a document icon, the name, then the children | The suite's line. |
| `TestSuite.Stats` | A `Trace.Description` | "1 passed, 1 failed, 1 skipped". |
| `TestSuite.Content` | A `Trace.Collapsible.Content` with a `Trace` | The suite's tests. |
| `Test` | A `Trace.Line` with `Test.Status`, `Test.Name` and `Test.Duration`, in a `Trace.Collapsible` when it has a `TestError` | One test. |
| `Test.Status` | A `Trace.Icon` | A check (in the `success` color), a cross, a minus or a spinner. |
| `Test.Name` | A `Trace.Title` | The test's name, after its status for screen readers. |
| `Test.Duration` | A `Trace.Description` | How long the test took, like "52ms". |
| `TestError` | A [`CodeBlock`](./code-block.md) | The failure's output in the code font. |
| `TestError.Message` | A `<span>` in the `danger` color | What went wrong. |
| `TestError.Stack` | A dimmed `<span>` | Where it went wrong. |

## Examples

The examples are the stories in [`TestResults.stories.tsx`](../../../components/test-results/src/TestResults.stories.tsx). Each uses three suites with passed, failed and skipped tests.

| Story | What it shows |
| --- | --- |
| `Base` | A run with two failures. The play function checks that the run and the failed suites start open and a passing suite starts closed, that a test's status is in its text for screen readers, and that the reader's choice wins over the failure. |
| `Passed` | A run where every test passed: closed, without the danger color. The play function opens it with `Enter`. |
| `WithProgress` | The run open, with `TestResults.Progress` above the suites. |
| `Streaming` | The tests finish one at a time. The run reads "Running tests" until the summary arrives, then opens because a test failed. |

## Props

### TestResults

`TestResults` accepts the [`Trace.Collapsible`](./trace.md) props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `summary` | `TestResultsSummaryData` | None | `{ passed, failed, skipped, total, duration? }`, with `duration` in milliseconds. Leave it out while the run is in progress. |
| `open` | `boolean` | None | Whether the run is open. Setting it makes `TestResults` controlled; pass `onOpenChange` too. |
| `defaultOpen` | `boolean` | Open when `summary.failed > 0` | Whether the run starts open. Without it, the run opens when a failure arrives, until the reader opens or closes it. |
| `onOpenChange` | `(open: boolean) => void` | None | Called with the new open state. |

### TestResults.Header, .Summary, .Duration, .Progress, .Content

`TestResults.Header` accepts the `Trace.Collapsible.Trigger` props; its `children` replace the summary and duration. `TestResults.Summary` accepts the `Trace.Title` props and `TestResults.Duration` the `Trace.Description` props; their `children` replace the text. `TestResults.Progress` accepts the `View` props; its `children` replace the "5/8 tests passed" text. It renders nothing without a summary. `TestResults.Content` accepts the `Trace.Collapsible.Content` props.

### TestSuite

`TestSuite` accepts the `Trace.Collapsible` props.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The suite's name, usually a file. |
| `status` | `"passed" \| "failed" \| "skipped" \| "running"` | Required | The line's status: `failed` is the danger color, `running` shimmers, `skipped` is dimmed. |
| `defaultOpen` | `boolean` | Open when `status` is `failed` | Whether the suite starts open. |

### TestSuite.Name, .Stats, .Content

`TestSuite.Name` accepts the `Trace.Collapsible.Trigger` props; its children follow the name. `TestSuite.Stats` accepts the `Trace.Description` props and the `passed`, `failed` and `skipped` counts; zero counts are left out. `TestSuite.Content` accepts the `Trace.Collapsible.Content` props.

### Test

`Test` accepts the `Trace.Line` props, except `status`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | The test's name. |
| `status` | `"passed" \| "failed" \| "skipped" \| "running"` | Required | The test's status. |
| `duration` | `number` | None | How long the test took, in milliseconds. |
| `children` | `ReactNode` | None | A `TestError` opens under the line. Other children replace the status, name and duration. |

### Test.Status, Test.Name, Test.Duration

`Test.Status` accepts the `Trace.Icon` props, `Test.Name` the `Trace.Title` props and `Test.Duration` the `Trace.Description` props. Their `children` replace the icon, name or duration. They read the nearest `Test`.

### TestError, TestError.Message, TestError.Stack

`TestError` accepts the `CodeBlock` props; its children are the output, a string or a `TestError.Message` and a `TestError.Stack`. The message and stack accept the Tamagui `Text` props.

The exported types are `TestResultsProps`, `TestResultsSummaryData`, `TestResultStatus`, `TestResultsHeaderProps`, `TestResultsSummaryProps`, `TestResultsDurationProps`, `TestResultsProgressProps`, `TestResultsContentProps`, `TestSuiteProps`, `TestSuiteNameProps`, `TestSuiteStatsProps`, `TestSuiteContentProps`, `TestProps`, `TestStatusProps`, `TestNameProps`, `TestDurationProps`, `TestErrorProps`, `TestErrorMessageProps`, and `TestErrorStackProps`. For React Server Components, the parts are also exported under their AI SDK Elements names: `TestResultsHeader`, `TestResultsSummary`, `TestResultsDuration`, `TestResultsProgress`, `TestResultsContent`, `TestSuiteName`, `TestSuiteStats`, `TestSuiteContent`, `TestStatus`, `TestName`, `TestDuration`, `TestErrorMessage`, and `TestErrorStack`.

## Behavior

- The run opens when its summary has a failure, and each suite opens when its `status` is `failed`, unless `open` or `defaultOpen` says otherwise. Once the reader opens or closes a line, their choice wins.
- A failed test with a `TestError` starts open.
- Durations read "52ms" under a second, "5.4s" under a minute, and "1m 5s" after.
- The summary leaves out zero counts: "Ran 3 tests" when everything passed.

## Variants and states

- **Passed:** a check icon in the `success` theme's color, and the line in its normal colors.
- **Failed:** a cross icon, and the line (with its suite and run) in the `danger` theme's color.
- **Skipped:** a minus icon, and the line dimmed like pending work.
- **Running:** a spinner, and the title shimmers. A run without a summary reads "Running tests".

## Accessibility

- The run, each suite and each failed test with output are buttons with `aria-expanded`, named by their line, like "Ran 8 tests, 2 failed, 1 skipped 5.4s".
- Each test's name starts with its status in visually hidden text, like "Failed: updates a user profile", so the status doesn't rely on the icon or the color. The icons are decorative.
- The progress bar is named "Tests passed".
- The failure output is a focusable, scrolling code region.

## Related

- [Trace](./trace.md)
- [Stack Trace](./stack-trace.md)
- [Tool](./tool.md)
- [Progress](./progress.md)
- [Code Block](./code-block.md)

## Source

- [`components/test-results/src/TestResults.tsx`](../../../components/test-results/src/TestResults.tsx)
- [`components/test-results/src/TestResults.stories.tsx`](../../../components/test-results/src/TestResults.stories.tsx)
