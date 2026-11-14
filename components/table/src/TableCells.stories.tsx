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
import type { ReactNode } from "react";
import { expect, within } from "storybook/test";
import { Table } from "./Table";
import {
  TableBooleanCell,
  TableCellText,
  TableDateCell,
  TableEmptyCell,
  TableNumberCell,
  TableProgressCell,
  TableStatusCell,
  TableTagsCell
} from "./TableCells";

// Each story lists its examples in a two-column table: the props, then the cell.
const Examples = ({ rows }: { rows: Record<string, ReactNode> }) => (
  <View padding="xl">
    <Table
      sizing="content"
      alignCells={{ x: "start", y: "center" }}
      alignHeaderCells={{ x: "start", y: "center" }}>
      <Table.Header>
        <Table.Row header={true}>
          <Table.HeaderCell>Props</Table.HeaderCell>
          <Table.HeaderCell>Cell</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.entries(rows).map(([props, cell]) => (
          <Table.Row key={props}>
            <Table.Cell>
              <TableCellText size="sm" color="subtle" fontFamily="code">
                {props}
              </TableCellText>
            </Table.Cell>
            <Table.Cell>{cell}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </View>
);

const meta = {
  title: "Tables/Table Cells",
  component: TableStatusCell,
  subcomponents: {
    TableBooleanCell,
    TableNumberCell,
    TableDateCell,
    TableProgressCell,
    TableTagsCell,
    TableEmptyCell
  } as Record<string, any>,
  tags: ["autodocs"]
} satisfies Meta<typeof TableStatusCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StatusCell: Story = {
  render: () => (
    <Examples
      rows={{
        'status="Active"': <TableStatusCell status="Active" />,
        'status="pending"': <TableStatusCell status="pending" />,
        'status="Failed"': <TableStatusCell status="Failed" />,
        'status="processing"': <TableStatusCell status="processing" />,
        'status="Offline"': <TableStatusCell status="Offline" />,
        'status="in_review" theme="discovery"': (
          <TableStatusCell status="in_review" theme="discovery">
            In review
          </TableStatusCell>
        ),
        'status="On hold" themes={{ "On hold": "warning" }}': (
          <TableStatusCell status="On hold" themes={{ "On hold": "warning" }} />
        ),
        "status={null}": <TableStatusCell status={null} />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("In review")).toBeVisible();
    await expect(canvas.getByText("—")).toBeVisible();
  }
};

export const BooleanCell: Story = {
  render: () => (
    <Examples
      rows={{
        "value={true}": <TableBooleanCell value={true} />,
        "value={false}": <TableBooleanCell value={false} />,
        'value={true} variant="text"': (
          <TableBooleanCell value={true} variant="text" />
        ),
        'value={false} variant="text" falseLabel="Disabled"': (
          <TableBooleanCell
            value={false}
            variant="text"
            falseLabel="Disabled"
          />
        ),
        "value={true} colored={true}": (
          <TableBooleanCell value={true} colored={true} />
        ),
        "value={false} colored={true}": (
          <TableBooleanCell value={false} colored={true} />
        ),
        'value={true} variant="text" trueLabel="Paid" colored={true}': (
          <TableBooleanCell
            value={true}
            variant="text"
            trueLabel="Paid"
            colored={true}
          />
        ),
        'value={false} variant="text" falseLabel="Unpaid" colored={true}': (
          <TableBooleanCell
            value={false}
            variant="text"
            falseLabel="Unpaid"
            colored={true}
          />
        ),
        "value={null}": <TableBooleanCell value={null} />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Story tsconfigs have no DOM lib.
    const colorOf = (element: any) =>
      (globalThis as any).getComputedStyle(
        element.querySelector("svg") ?? element
      ).color;

    const [yes, coloredYes] = canvas.getAllByRole("img", { name: "Yes" });
    const [no, coloredNo] = canvas.getAllByRole("img", { name: "No" });
    await expect(yes).toBeVisible();
    await expect(no).toBeVisible();
    await expect(canvas.getByText("Disabled")).toBeVisible();

    // `colored` keeps true green and turns the muted cross (and text) red.
    await expect(colorOf(coloredYes)).toBe(colorOf(yes));
    await expect(colorOf(coloredNo)).not.toBe(colorOf(no));
    await expect(colorOf(coloredNo)).toBe(colorOf(canvas.getByText("Unpaid")));
    await expect(colorOf(canvas.getByText("Paid"))).toBe(colorOf(yes));
  }
};

export const NumberCell: Story = {
  render: () => (
    <Examples
      rows={{
        'value={1234567.891} locale="en-US"': (
          <TableNumberCell value={1234567.891} locale="en-US" />
        ),
        'format={{ style: "currency", currency: "USD" }}': (
          <TableNumberCell
            value={1234.5}
            locale="en-US"
            format={{ style: "currency", currency: "USD" }}
          />
        ),
        'locale="de-DE" format={{ style: "currency", currency: "EUR" }}': (
          <TableNumberCell
            value={1234.5}
            locale="de-DE"
            format={{ style: "currency", currency: "EUR" }}
          />
        ),
        'format={{ style: "percent", maximumFractionDigits: 1 }}': (
          <TableNumberCell
            value={0.2568}
            locale="en-US"
            format={{ style: "percent", maximumFractionDigits: 1 }}
          />
        ),
        'format={{ notation: "compact" }}': (
          <TableNumberCell
            value={1530000}
            locale="en-US"
            format={{ notation: "compact" }}
          />
        ),
        "value={NaN}": <TableNumberCell value={Number.NaN} />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("1,234,567.891")).toBeVisible();
    await expect(canvas.getByText("$1,234.50")).toBeVisible();
    await expect(canvas.getByText("25.7%")).toBeVisible();
    await expect(canvas.getByText("1.5M")).toBeVisible();
  }
};

const THREE_DAYS_AGO = Date.now() - 3 * 86_400_000;

export const DateCell: Story = {
  render: () => (
    <Examples
      rows={{
        'value="2026-11-14T15:30:00Z" locale="en-US"': (
          <TableDateCell value="2026-11-14T15:30:00Z" locale="en-US" />
        ),
        'format={{ dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }}':
          (
            <TableDateCell
              value="2026-11-14T15:30:00Z"
              locale="en-US"
              format={{
                dateStyle: "medium",
                timeStyle: "short",
                timeZone: "UTC"
              }}
            />
          ),
        "value={threeDaysAgo} relative={true}": (
          <TableDateCell
            value={THREE_DAYS_AGO}
            relative={true}
            locale="en-US"
          />
        ),
        'value="not a date"': <TableDateCell value="not a date" />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("Nov 14, 2026")).toBeVisible();
    await expect(canvas.getByText("Nov 14, 2026, 3:30 PM")).toBeVisible();
    await expect(canvas.getByText("3 days ago")).toBeVisible();
  }
};

export const ProgressCell: Story = {
  render: () => (
    <Examples
      rows={{
        "value={0}": <TableProgressCell value={0} />,
        "value={42}": <TableProgressCell value={42} />,
        "value={100}": <TableProgressCell value={100} />,
        "value={3} max={8}": <TableProgressCell value={3} max={8} />,
        'value={64} theme="success"': (
          <TableProgressCell value={64} theme="success" />
        ),
        "value={75} showValue={false}": (
          <TableProgressCell value={75} showValue={false} />
        ),
        "value={null}": <TableProgressCell value={null} />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("38%")).toBeVisible();
  }
};

export const TagsCell: Story = {
  render: () => (
    <Examples
      rows={{
        'tags={["Admin", "Billing"]}': (
          <TableTagsCell tags={["Admin", "Billing"]} />
        ),
        "tags={[5 tags]} max={3}": (
          <TableTagsCell
            tags={["Design", "Frontend", "Backend", "DevOps", "QA"]}
            max={3}
          />
        ),
        'themes={{ Urgent: "danger", Bug: "warning" }}': (
          <TableTagsCell
            tags={["Urgent", "Bug", "UI"]}
            themes={{ Urgent: "danger", Bug: "warning" }}
          />
        ),
        "tags={[]}": <TableTagsCell tags={[]} />
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("+2")).toBeVisible();
    await expect(canvas.queryByText("DevOps")).not.toBeInTheDocument();
  }
};

export const EmptyCell: Story = {
  render: () => (
    <Examples
      rows={{
        "(no props)": <TableEmptyCell />,
        'children="N/A"': <TableEmptyCell>N/A</TableEmptyCell>
      }}
    />
  )
};
