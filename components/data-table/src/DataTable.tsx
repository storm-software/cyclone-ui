import { Table, type TableProps } from "@cyclone-ui/table";
import { XStack, YStack } from "@tamagui/stacks";
import { View, createStyledContext } from "@tamagui/core";
import {
  type TableOptions,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  RowData,
  ColumnDefTemplate,
  CellContext,
  SortingState,
  ColumnSort,
  HeaderContext,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltersState
} from "@tanstack/react-table";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";
import { SizableText } from "@tamagui/text";
import { Button } from "@cyclone-ui/button";
import { Input } from "@cyclone-ui/input";
import {
  Menu,
  Edit3,
  Filter,
  X,
  ArrowDownAZ,
  ArrowUpZA
} from "@tamagui/lucide-icons";
import { Popover } from "@tamagui/popover";
import { Adapt } from "@tamagui/adapt";
import { titleCase } from "title-case";
import { Form } from "@tamagui/form";

const defaultContextValues = {
  sorting: [] as SortingState,
  setSorting: () => {},
  columnFilters: [] as ColumnFiltersState,
  setColumnFilters: () => {}
} as const;

export const InternalStateContext = createStyledContext<{
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
}>(defaultContextValues);

export type DataTableOptions<TData = any> = Partial<TableOptions<TData>> &
  Omit<TableOptions<TData>, "getCoreRowModel">;

export interface DataTableProps<TData extends RowData> extends TableProps {
  options: DataTableOptions<TData>;
}

export function DataTable<TData extends RowData>({
  options,
  ...rest
}: DataTableProps<TData>) {
  const [data, setData] = useState(() => [...options.data]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // const columnHelper = useMemo(() => createColumnHelper<TData>(), []);

  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    ...options,
    data
  });

  const headerGroups = table.getHeaderGroups();
  const tableRows = table.getRowModel().rows;

  return (
    <InternalStateContext.Provider
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}>
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
                  <Table.HeaderCell key={header.id} group={"header" as any}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </InternalStateContext.Provider>
  );
}

export interface DataTableCellProps<TData extends RowData, TValue = any>
  extends CellContext<TData, TValue> {
  value?: string;
}

export type DataTableHeaderProps<
  TData extends RowData,
  TValue = any
> = HeaderContext<TData, TValue>;

export function DataTableCell<TData extends RowData, TValue = any>(
  props: DataTableCellProps<TData, TValue>
) {
  const value = props.value ? props.value : props.renderValue();
  return (
    <SizableText
      animation="medium"
      fontFamily="$body"
      color="$color"
      $group-row-hover={{ color: "$primary" }}>
      {value}
    </SizableText>
  );
}

export function DataTableHeader<TData extends RowData, TValue = any>(
  props: DataTableHeaderProps<TData, TValue>
) {
  const [currentFilter, setCurrentFilter] = useState("");

  const { sorting, setSorting } = InternalStateContext.useStyledContext();
  const id = props.header.id;
  const { toggleSorting, clearSorting, setFilterValue } = props.column;

  const canSort = props.column.getCanSort();

  const isSorted = props.column.getIsSorted();
  const sortIndex = props.column.getSortIndex();
  const desc = sorting.find(sort => sort.id === id)?.desc;

  const handleSorting = useCallback(() => {
    if (desc === false) {
      clearSorting();
    } else {
      toggleSorting(!desc, true);
    }
  }, [toggleSorting, desc, sorting]);
  const handleFilterSubmit = useCallback(() => {
    setFilterValue(currentFilter);
  }, [currentFilter]);
  const handleFilterClear = useCallback(() => {
    setFilterValue("");
    setCurrentFilter("");
  }, [setFilterValue, setCurrentFilter]);
  const handleFilterChanged = useCallback(
    value => {
      setCurrentFilter(value ?? "");
    },
    [setCurrentFilter]
  );

  return (
    <XStack
      group={"header" as any}
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="$1">
      <XStack gap="$2" onPress={handleSorting} flex={1} cursor="pointer">
        <SizableText
          animation="medium"
          fontFamily="$label"
          color="$color"
          size="$6"
          $group-header-hover={{ color: "$primary" }}>
          {titleCase(id.replaceAll("_", " "))}
        </SizableText>
        {isSorted && !desc && (
          <XStack gap="$0.25" alignItems="center">
            <ArrowDownAZ size="$1" color="$color" />
            <SizableText
              animation="medium"
              fontFamily="$label"
              fontWeight="$6"
              color="$color"
              size="$2">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
        {isSorted && desc && (
          <XStack gap="$0.25" alignItems="center">
            <ArrowUpZA size="$1" color="$color" />
            <SizableText
              animation="medium"
              fontFamily="$label"
              fontWeight="$6"
              color="$color"
              size="$2">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
      </XStack>

      <View
        animation="slow"
        opacity={!currentFilter ? 0 : 1}
        $group-header-hover={{ opacity: 1 }}>
        <Popover size="$5" allowFlip={true}>
          <Popover.Trigger asChild={true}>
            <Button variant="ghost" circular={true} padding="$1.5">
              <Button.Icon>
                <Filter size="$1" />
              </Button.Icon>
            </Button>
          </Popover.Trigger>

          <Adapt when={"sm" as any} platform="touch">
            <Popover.Sheet modal={true} dismissOnSnapToBottom={true}>
              <Popover.Sheet.Frame padding="$2">
                <Adapt.Contents />
              </Popover.Sheet.Frame>
              <Popover.Sheet.Overlay
                animation="slow"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Popover.Sheet>
          </Adapt>

          <Popover.Content
            borderWidth={1}
            borderColor="$borderColor"
            elevate={true}
            animation="slow">
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

            <Form onSubmit={handleFilterSubmit}>
              <YStack gap="$4">
                <Input name="filter">
                  <Input.Value
                    placeholder="Filter"
                    value={currentFilter}
                    onChange={handleFilterChanged}>
                    <Input.Icon>
                      <Button
                        variant="ghost"
                        circular={true}
                        padding="$1.5"
                        onPress={handleFilterClear}>
                        <Button.Icon>
                          <X size="$1" />
                        </Button.Icon>
                      </Button>
                    </Input.Icon>
                  </Input.Value>
                </Input>

                <Popover.Close asChild={true}>
                  <Form.Trigger asChild={true}>
                    <Button size="$3" animate={false}>
                      Apply Filter
                    </Button>
                  </Form.Trigger>
                </Popover.Close>
              </YStack>
            </Form>
          </Popover.Content>
        </Popover>
      </View>
    </XStack>
  );
}
