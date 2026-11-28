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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { useEffect, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import type {
  TestResultsProps,
  TestResultsSummaryData,
  TestResultStatus
} from "./TestResults";
import { Test, TestError, TestResults, TestSuite } from "./TestResults";

const meta: Meta<TestResultsProps> = {
  title: "AI/TestResults",
  component: TestResults,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <View padding="xl" maxWidth={480} width="100%">
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<TestResultsProps>;

interface TestData {
  name: string;
  status: TestResultStatus;
  duration?: number;
  message?: string;
  stack?: string;
}

interface SuiteData {
  name: string;
  tests: TestData[];
}

const SUITES: SuiteData[] = [
  {
    name: "auth.test.ts",
    tests: [
      {
        name: "logs in with valid credentials",
        status: "passed",
        duration: 12
      },
      { name: "rejects an invalid password", status: "passed", duration: 8 },
      { name: "refreshes an expired token", status: "passed", duration: 31 }
    ]
  },
  {
    name: "user-api.test.ts",
    tests: [
      { name: "creates a user", status: "passed", duration: 44 },
      {
        name: "updates a user profile",
        status: "failed",
        duration: 52,
        message: "Expected status 200, received 500",
        stack: "at Object.<anonymous> (src/user-api.test.ts:45:12)"
      },
      { name: "deletes a user", status: "skipped" }
    ]
  },
  {
    name: "db.test.ts",
    tests: [
      { name: "connects to the database", status: "passed", duration: 120 },
      {
        name: "times out a slow query",
        status: "failed",
        duration: 5000,
        message: "Exceeded timeout of 5000 ms for a test.",
        stack: "at Object.<anonymous> (src/db.test.ts:22:3)"
      }
    ]
  }
];

const count = (tests: TestData[], status: TestResultStatus) =>
  tests.filter(test => test.status === status).length;

const summarize = (suites: SuiteData[], duration?: number) => {
  const tests = suites.flatMap(suite => suite.tests);

  return {
    passed: count(tests, "passed"),
    failed: count(tests, "failed"),
    skipped: count(tests, "skipped"),
    total: tests.length,
    duration
  } satisfies TestResultsSummaryData;
};

const Suites = ({ suites }: { suites: SuiteData[] }) =>
  suites.map(suite => (
    <TestSuite
      key={suite.name}
      name={suite.name}
      status={
        count(suite.tests, "failed")
          ? "failed"
          : count(suite.tests, "running")
            ? "running"
            : "passed"
      }>
      <TestSuite.Name>
        <TestSuite.Stats
          passed={count(suite.tests, "passed")}
          failed={count(suite.tests, "failed")}
          skipped={count(suite.tests, "skipped")}
        />
      </TestSuite.Name>
      <TestSuite.Content>
        {suite.tests.map(test => (
          <Test
            key={test.name}
            name={test.name}
            status={test.status}
            duration={test.duration}>
            {test.message && (
              <TestError>
                <TestError.Message>{test.message}</TestError.Message>
                <TestError.Stack>{test.stack}</TestError.Stack>
              </TestError>
            )}
          </Test>
        ))}
      </TestSuite.Content>
    </TestSuite>
  ));

export const Base: Story = {
  args: { onOpenChange: fn() },
  render: args => (
    <TestResults {...args} summary={summarize(SUITES, 5420)}>
      <TestResults.Header />
      <TestResults.Content>
        <Suites suites={SUITES} />
      </TestResults.Content>
    </TestResults>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const run = canvas.getByRole("button", {
      name: "Ran 8 tests, 2 failed, 1 skipped 5.4s"
    });

    // A failure opens the run, its suite and the failed test.
    await expect(run).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("button", { name: /user-api\.test\.ts/ })
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByText("Expected status 200, received 500")
    ).toBeVisible();
    // Screen readers hear each test's status.
    await expect(
      canvas.getByText("deletes a user").parentElement
    ).toHaveTextContent("Skipped: deletes a user");

    // A suite without failures starts closed.
    const auth = canvas.getByRole("button", { name: /auth\.test\.ts/ });
    await expect(auth).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(auth);
    await waitFor(async () =>
      expect(canvas.getByText("refreshes an expired token")).toBeVisible()
    );

    // The reader's choice wins over the failure.
    await userEvent.click(run);
    await expect(run).toHaveAttribute("aria-expanded", "false");
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
    await userEvent.click(run);
    await expect(run).toHaveAttribute("aria-expanded", "true");
  }
};

const PASSING = [SUITES[0]!];

export const Passed: Story = {
  render: () => (
    <TestResults summary={summarize(PASSING, 51)}>
      <TestResults.Header />
      <TestResults.Content>
        <Suites suites={PASSING} />
      </TestResults.Content>
    </TestResults>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const run = canvas.getByRole("button", { name: "Ran 3 tests 51ms" });

    await expect(run).toHaveAttribute("aria-expanded", "false");
    run.focus();
    await userEvent.keyboard("{Enter}");
    await expect(run).toHaveAttribute("aria-expanded", "true");
  }
};

export const WithProgress: Story = {
  render: () => (
    <TestResults summary={summarize(SUITES, 5420)} defaultOpen={true}>
      <TestResults.Header>
        <TestResults.Summary />
        <TestResults.Duration />
      </TestResults.Header>
      <TestResults.Content>
        <TestResults.Progress marginBottom="lg" />
        {SUITES.map(suite => (
          <TestSuite key={suite.name} name={suite.name} status="passed">
            <TestSuite.Name />
          </TestSuite>
        ))}
      </TestResults.Content>
    </TestResults>
  ),
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText("5/8 tests passed")
    ).toBeVisible();
  }
};

// The suites stream in one test at a time, then the run reports its counts.
const StreamingRun = () => {
  const tests = SUITES.flatMap(suite => suite.tests);
  const [done, setDone] = useState(0);
  const finished = done >= tests.length;

  useEffect(() => {
    if (finished) return;
    const timer = setTimeout(() => setDone(value => value + 1), 250);

    return () => clearTimeout(timer);
  }, [done, finished]);

  let seen = 0;
  const suites = SUITES.map(suite => ({
    ...suite,
    tests: suite.tests.map(test =>
      seen++ < done ? test : { name: test.name, status: "running" as const }
    )
  }));

  return (
    <TestResults summary={finished ? summarize(SUITES, 5420) : undefined}>
      <TestResults.Header />
      <TestResults.Content>
        <Suites suites={suites} />
      </TestResults.Content>
    </TestResults>
  );
};

export const Streaming: Story = {
  render: () => <StreamingRun />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Running tests" })
    ).toHaveAttribute("aria-expanded", "false");
    // Opens on its own once the run reports a failure.
    await waitFor(
      async () =>
        expect(
          canvas.getByRole("button", { name: /^Ran 8 tests, 2 failed/ })
        ).toHaveAttribute("aria-expanded", "true"),
      { timeout: 10_000 }
    );
  }
};
