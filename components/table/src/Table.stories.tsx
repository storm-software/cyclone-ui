import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@tamagui/avatar";
import { Text, View } from "@tamagui/core";
import { SizableText } from "@tamagui/text";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "General/Table",
  component: Table,
  tags: ["autodocs"],
  render: ({ children, ...rest }: any) => {
    const [data, setData] = useState(() => [...defaultData]);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel()
    });

    const headerGroups = table.getHeaderGroups();
    const tableRows = table.getRowModel().rows;

    return (
      <Table
        alignCells={{ x: "start", y: "center" }}
        alignHeaderCells={{ x: "start", y: "center" }}
        cellWidth="$18"
        cellHeight="$7"
        {...rest}>
        <Table.Head>
          {headerGroups.map(headerGroup => {
            return (
              <Table.Row key={headerGroup.id} header={true}>
                {headerGroup.headers.map(header => (
                  <Table.HeaderCell
                    key={header.id}
                    {...(header.column.id === "user_base"
                      ? {
                          flexShrink: 1
                        }
                      : {
                          flexShrink: 3
                        })}>
                    <SizableText fontFamily="$label" size="$6">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </SizableText>
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Head>
        <Table.Body>
          {tableRows.map(row => {
            return (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Table.Cell
                    key={cell.id}
                    {...(cell.column.id === "user_base"
                      ? {
                          flexShrink: 1
                        }
                      : {
                          flexShrink: 3
                        })}>
                    {cell.column.id === "user_base" ? (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    ) : (
                      <Text>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Text>
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

type Person = {
  fullName: string;
  username: string;
  age: number;
  visits: number;
  status: string;
  role: string;
  avatar?: string;
};

const defaultData: Person[] = [
  {
    fullName: "Sara Smith",
    username: "@harry",
    age: 24,
    visits: 100,
    status: "Offline",
    role: "Admin"
  },
  {
    fullName: "Andy loren",
    username: "@andy_dev",
    age: 40,
    visits: 40,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "Bob marley",
    username: "@massouddd",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Adam henry",
    username: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Andy loren",
    username: "@andy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "Massoud karimi",
    username: "@massoud",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "John",
    username: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Andy Doe",
    username: "@andy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Admin"
  },
  {
    fullName: "Preston bennet",
    username: "@outworld",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Jack anderson",
    username: "@j_anderson",
    age: 45,
    visits: 20,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "John peterson",
    username: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "Tommy resse",
    username: "@tommy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "Manuel loren",
    username: "@manuel",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Admin"
  }
].map(
  (row, index) =>
    ({
      ...row,
      avatar: `https://i.pravatar.cc/150?img=${index + 1}`
    }) as Person
);

const columnHelper = createColumnHelper<Person>();

const StatusButton = ({ status }: { status: string }) => {
  return (
    <View
      borderRadius={1000_000_000}
      backgroundColor={
        status?.toLocaleLowerCase() === "active" ? "$brand10" : "$base10"
      }
      paddingHorizontal="$2">
      <Text
        color="$bg"
        $gtXs={{
          fontSize: "$2",
          lineHeight: "$1",
          fontWeight: "$2"
        }}
        fontSize="$1"
        fontWeight="$2"
        lineHeight="$1"
        paddingVertical="$1">
        {status}
      </Text>
    </View>
  );
};

const columns = [
  columnHelper.accessor(
    row => ({
      fullName: row.fullName,
      userName: row.username,
      image: row.avatar
    }),
    {
      cell: info => {
        const { fullName, userName, image } = info.getValue();
        return (
          <View
            flexDirection="row"
            alignItems="center"
            gap="$3"
            marginLeft="$2">
            <Avatar circular size="$5">
              <Avatar.Image accessibilityLabel="Profile image" src={image} />
              <Avatar.Fallback backgroundColor="$gray6" />
            </Avatar>
            <View flexDirection="column">
              <Text>{fullName}</Text>
              <Text fontSize="$2" lineHeight="$2" fontWeight="$2" theme="alt2">
                {userName}
              </Text>
            </View>
          </View>
        );
      },
      header: () => "User",
      id: "user_base"
    }
  ),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: info => info.renderValue(),
    footer: info => info.column.id
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: info => info.column.id,
    cell: info => {
      const val = info.renderValue();
      return <StatusButton status={val?.toLocaleLowerCase() ?? ""} />;
    }
  }),
  columnHelper.accessor("role", {
    header: "Role",
    footer: info => info.column.id
  })
];

export const Base: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
};

export const Brand: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "brand"
  }
};

export const Help: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "help"
  }
};

export const Error: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "danger"
  }
};

export const Warning: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "warning"
  }
};

export const Info: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "info"
  }
};

export const Success: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    theme: "success"
  }
};
