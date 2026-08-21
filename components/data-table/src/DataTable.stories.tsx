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
import { Avatar } from "@tamagui/avatar";
import { Text, View } from "@tamagui/core";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable, DataTableCell, DataTableHeader } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Tables/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  render: ({ options, ...props }: any) => {
    return (
      <DataTable<Person>
        alignCells={{ x: "start", y: "center" }}
        alignHeaderCells={{ x: "start", y: "center" }}
        cellWidth="$20xl"
        cellHeight="$9xl"
        options={{
          ...options,
          columns
        }}
        {...props}
      />
    );
  }
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof DataTable>;

interface Person {
  fullName: string;
  userName: string;
  age: number;
  visits: number;
  status: string;
  role: string;
  avatar?: string;
}

const defaultData: Person[] = [
  {
    fullName: "Sara Smith",
    userName: "@harry",
    age: 24,
    visits: 100,
    status: "Offline",
    role: "Admin"
  },
  {
    fullName: "Andy loren",
    userName: "@andy_dev",
    age: 40,
    visits: 40,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "Bob marley",
    userName: "@massouddd",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Adam henry",
    userName: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Andy loren",
    userName: "@andy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "Massoud karimi",
    userName: "@massoud",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "John",
    userName: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Andy Doe",
    userName: "@andy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Admin"
  },
  {
    fullName: "Preston bennet",
    userName: "@outworld",
    age: 45,
    visits: 20,
    status: "Active",
    role: "Admin"
  },
  {
    fullName: "Jack anderson",
    userName: "@j_anderson",
    age: 45,
    visits: 20,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "John peterson",
    userName: "@john",
    age: 24,
    visits: 100,
    status: "Active",
    role: "Member"
  },
  {
    fullName: "Tommy resse",
    userName: "@tommy",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Member"
  },
  {
    fullName: "Manuel loren",
    userName: "@manuel",
    age: 40,
    visits: 40,
    status: "Offline",
    role: "Admin"
  }
].map((row, index) => ({
  ...row,
  avatar: `https://i.pravatar.cc/150?img=${index + 1}`
}));

const columnHelper = createColumnHelper<Person>();

const StatusButton = ({ status }: { status: string }) => {
  return (
    <View
      borderRadius={1000_000_000}
      backgroundColor={
        status?.toLocaleLowerCase() === "active"
          ? "$backgroundAccent"
          : "$base9"
      }
      paddingHorizontal="$xl">
      <Text
        color="$foregroundOnPrimary"
        $gtXs={{
          fontSize: "$xs",
          lineHeight: "$xs",
          fontWeight: "$extralight"
        }}
        fontSize="$xs"
        fontWeight="$extralight"
        lineHeight="$xs"
        paddingVertical="$md">
        {status}
      </Text>
    </View>
  );
};

const columns = [
  columnHelper.accessor(
    row => ({
      fullName: row.fullName,
      userName: row.userName,
      image: row.avatar
    }),
    {
      cell: info => {
        const { fullName, userName, image } = info.getValue();

        return (
          <View
            flexDirection="row"
            alignItems="center"
            gap="$3xl"
            marginLeft="$xl">
            <Avatar circular size="$7xl">
              <Avatar.Image aria-label="Profile image" src={image} />
              <Avatar.Fallback backgroundColor="$gray6" />
            </Avatar>
            <View flexDirection="column">
              <Text>{fullName}</Text>
              <Text fontSize="$xs" lineHeight="$sm" fontWeight="$extralight" theme="alt2">
                {userName}
              </Text>
            </View>
          </View>
        );
      },
      header: DataTableHeader,
      id: "user_base",
      meta: { facetFn: data => data.userName }
    }
  ),
  columnHelper.accessor("age", {
    header: DataTableHeader,
    cell: DataTableCell,
    footer: info => info.column.id
  }),
  columnHelper.accessor("status", {
    header: DataTableHeader,
    footer: info => info.column.id,
    cell: info => {
      const val = info.renderValue();

      return <StatusButton status={val?.toLocaleLowerCase() ?? ""} />;
    }
  }),
  columnHelper.accessor("role", {
    header: DataTableHeader,
    cell: DataTableCell,
    footer: info => info.column.id
  })
];

export const Base: Story = {
  args: {
    options: {
      data: defaultData
    }
  }
};

export const Pagination: Story = {
  args: {
    options: {
      data: [
        ...defaultData,
        ...defaultData,
        ...defaultData,
        ...defaultData,
        ...defaultData
      ]
    },
    pageSize: 5
  }
};

export const Brand: Story = {
  args: {
    theme: "brand",
    options: {
      data: defaultData
    }
  }
};

export const Alternate: Story = {
  args: {
    theme: "alternate",
    options: {
      data: defaultData
    }
  }
};

export const Discovery: Story = {
  args: {
    theme: "discovery",
    options: {
      data: defaultData
    }
  }
};

export const Error: Story = {
  args: {
    theme: "danger",
    options: {
      data: defaultData
    }
  }
};

export const Warning: Story = {
  args: {
    theme: "warning",
    options: {
      data: defaultData
    }
  }
};

export const Info: Story = {
  args: {
    theme: "info",
    options: {
      data: defaultData
    }
  }
};

export const Success: Story = {
  args: {
    theme: "success",
    options: {
      data: defaultData
    }
  }
};
