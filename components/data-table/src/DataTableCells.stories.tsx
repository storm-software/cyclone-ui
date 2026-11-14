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

import { BodyText } from "@cyclone-ui/body-text";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import { Edit } from "@cyclone-ui/icons";
import {
  Table,
  TableBooleanCell,
  TableDateCell,
  TableNumberCell,
  TableProgressCell,
  TableStatusCell,
  TableTagsCell
} from "@cyclone-ui/table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import type { ColumnDef } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { DataTable, DataTableHeader } from "./DataTable";
import {
  createDataTableViewColumn,
  DataTableAvatarCell,
  DataTableCopyCell,
  DataTableViewButton
} from "./DataTableCells";

const meta: Meta = {
  title: "Tables/DataTable Cells",
  component: DataTableViewButton as ComponentType<any>,
  subcomponents: {
    DataTableAvatarCell,
    DataTableCopyCell
  } as Record<string, ComponentType<any>>,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj;

interface Customer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: string;
  verified: boolean;
  revenue: number;
  onboarding: number;
  roles: string[];
  lastSeen: number;
}

const HOUR = 3_600_000;

const customers: Customer[] = [
  {
    id: "cus_8f2a91",
    name: "Sara Smith",
    email: "sara@example.com",
    status: "Active",
    verified: true,
    revenue: 12_840.5,
    onboarding: 100,
    roles: ["Admin", "Billing"],
    lastSeen: Date.now() - 2 * HOUR
  },
  {
    id: "cus_3c7d04",
    name: "Andy Loren",
    email: "andy@example.com",
    status: "Pending",
    verified: false,
    revenue: 980,
    onboarding: 35,
    roles: ["Member"],
    lastSeen: Date.now() - 26 * HOUR
  },
  {
    id: "cus_b19e66",
    name: "Bob Marley",
    email: "bob@example.com",
    status: "Failed",
    verified: true,
    revenue: 0,
    onboarding: 10,
    roles: ["Member", "Support", "Billing"],
    lastSeen: Date.now() - 9 * 24 * HOUR
  },
  {
    id: "cus_44a0f3",
    name: "Grace Hopper",
    email: "grace@example.com",
    status: "Active",
    verified: true,
    revenue: 54_310.25,
    onboarding: 80,
    roles: ["Owner"],
    lastSeen: Date.now() - 5 * 60_000
  },
  {
    id: "cus_e5d2c8",
    name: "Preston Bennet",
    email: "preston@example.com",
    status: "Offline",
    verified: false,
    revenue: 2_150,
    onboarding: 60,
    roles: [],
    lastSeen: Date.now() - 45 * 24 * HOUR
  }
].map((customer, index) => ({
  ...customer,
  avatar: `https://i.pravatar.cc/150?img=${index + 1}`
}));

const columnHelper = createColumnHelper<Customer>();

const customerColumn = columnHelper.accessor("name", {
  header: DataTableHeader,
  enableColumnFilter: false,
  cell: ({ row }) => (
    <DataTableAvatarCell
      name={row.original.name}
      description={row.original.email}
      src={row.original.avatar}
    />
  )
});

const cellColumns = [
  customerColumn,
  columnHelper.accessor("id", {
    header: DataTableHeader,
    enableColumnFilter: false,
    cell: info => <DataTableCopyCell value={info.getValue()} />
  }),
  columnHelper.accessor("status", {
    header: DataTableHeader,
    cell: info => <TableStatusCell status={info.getValue()} />
  }),
  columnHelper.accessor("verified", {
    header: DataTableHeader,
    cell: info => <TableBooleanCell value={info.getValue()} />
  }),
  columnHelper.accessor("revenue", {
    header: DataTableHeader,
    enableColumnFilter: false,
    cell: info => (
      <TableNumberCell
        value={info.getValue()}
        locale="en-US"
        format={{ style: "currency", currency: "USD" }}
      />
    )
  }),
  columnHelper.accessor("onboarding", {
    header: DataTableHeader,
    enableColumnFilter: false,
    cell: info => <TableProgressCell value={info.getValue()} />
  }),
  columnHelper.accessor("roles", {
    header: DataTableHeader,
    enableColumnFilter: false,
    enableSorting: false,
    cell: info => <TableTagsCell tags={info.getValue()} max={2} />
  }),
  columnHelper.accessor("lastSeen", {
    header: DataTableHeader,
    enableColumnFilter: false,
    cell: info => (
      <TableDateCell value={info.getValue()} relative={true} locale="en-US" />
    )
  })
] as ColumnDef<Customer, any>[];

const onView = fn();

export const AllCells: Story = {
  render: () => {
    const [selected, setSelected] = useState<Customer>();
    const columns = useMemo(
      () => [
        ...cellColumns,
        createDataTableViewColumn<Customer>({
          onView: customer => {
            onView(customer);
            setSelected(customer);
          }
        })
      ],
      []
    );

    return (
      <YStack gap="3xl" padding="xl">
        <DataTable<Customer> options={{ data: customers, columns }} />
        {/* Stands in for a drawer or modal with the row's details. */}
        <View
          padding="3xl"
          borderWidth={1}
          borderColor="hairline"
          borderRadius="card">
          {selected ? (
            <YStack gap="md">
              <HeadingSmallText>{selected.name}</HeadingSmallText>
              <BodyText color="subtle">{selected.email}</BodyText>
            </YStack>
          ) : (
            <BodyText color="subtle">
              Press a row's View button to show its details here.
            </BodyText>
          )}
        </View>
      </YStack>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "View row 2" }));

    await expect(onView).toHaveBeenCalledWith(
      expect.objectContaining({ id: "cus_3c7d04", name: "Andy Loren" })
    );
    await expect(
      await canvas.findByRole("heading", { name: "Andy Loren" })
    ).toBeVisible();
  }
};

export const ViewButtons: Story = {
  render: () => {
    const columns = useMemo(
      () => [
        customerColumn,
        createDataTableViewColumn<Customer>({ onView }),
        createDataTableViewColumn<Customer>({
          id: "preview",
          label: "Preview",
          iconOnly: true,
          onView
        }),
        createDataTableViewColumn<Customer>({
          id: "details",
          label: "Details",
          href: customer => `#/customers/${customer.id}`
        }),
        createDataTableViewColumn<Customer>({
          id: "edit",
          label: "Edit",
          icon: <Edit size="2xl" animated={false} />,
          onView
        })
      ],
      []
    );

    return (
      <View padding="xl">
        <DataTable<Customer>
          options={{ data: customers, columns }}
          pageSize={false}
        />
      </View>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole("button", { name: "Details row 3" })
    ).toHaveAttribute("href", "#/customers/cus_b19e66");

    onView.mockClear();
    await userEvent.click(
      canvas.getByRole("button", { name: "Preview row 1" })
    );
    await expect(onView).toHaveBeenCalledWith(
      expect.objectContaining({ id: "cus_8f2a91" }),
      expect.objectContaining({ index: 0 })
    );
  }
};

const writeText = fn(async (_text: string) => {});

export const CopyCell: Story = {
  render: () => (
    <View padding="xl">
      <DataTable<Customer>
        pageSize={false}
        options={{
          data: customers,
          columns: [
            customerColumn,
            columnHelper.accessor("id", {
              header: DataTableHeader,
              enableColumnFilter: false,
              cell: info => <DataTableCopyCell value={info.getValue()} />
            }),
            columnHelper.accessor("email", {
              header: DataTableHeader,
              enableColumnFilter: false,
              cell: info => (
                <DataTableCopyCell value={info.getValue()}>
                  {info.getValue().split("@")[0]}
                </DataTableCopyCell>
              )
            })
          ] as ColumnDef<Customer, any>[]
        }}
      />
    </View>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The clipboard is missing outside secure contexts and needs permission
    // in automated browsers. Story tsconfigs have no DOM lib.
    const { navigator } = globalThis as any;
    const clipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText }
    });

    try {
      await userEvent.click(
        canvas.getByRole("button", { name: "Copy cus_44a0f3" })
      );
      await expect(writeText).toHaveBeenCalledWith("cus_44a0f3");
      await expect(
        await canvas.findByRole("button", { name: "Copied" })
      ).toBeVisible();

      await waitFor(
        async () =>
          expect(
            canvas.queryByRole("button", { name: "Copied" })
          ).not.toBeInTheDocument(),
        { timeout: 3000 }
      );
    } finally {
      if (clipboard) {
        Object.defineProperty(navigator, "clipboard", clipboard);
      } else {
        delete navigator.clipboard;
      }
    }
  }
};

export const AvatarCell: Story = {
  render: () => (
    <View padding="xl">
      <Table
        sizing="content"
        alignCells={{ x: "start", y: "center" }}
        alignHeaderCells={{ x: "start", y: "center" }}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <DataTableAvatarCell
                name="Sara Smith"
                description="sara@example.com"
                src="https://i.pravatar.cc/150?img=1"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <DataTableAvatarCell
                name="Andy Loren"
                description="@andy_dev"
                src="https://i.pravatar.cc/150?img=2"
                status="success"
                statusLabel="Online"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <DataTableAvatarCell name="Preston Bennet" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <DataTableAvatarCell
                name="Grace Hopper"
                description="Owner"
                size="md"
                circular={false}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </View>
  )
};
