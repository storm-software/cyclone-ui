import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useState
} from "react";
import { titleCase } from "title-case";
import { Button } from "@cyclone-ui/button";
import { Input } from "@cyclone-ui/input";
import { Pagination } from "@cyclone-ui/pagination";
import { Select } from "@cyclone-ui/select";
import { Table, type TableProps } from "@cyclone-ui/table";
import { Adapt } from "@tamagui/adapt";
import { createStyledContext, View } from "@tamagui/core";
import { Form } from "@tamagui/form";
import { ArrowDownAZ, ArrowUpZA, Filter, X } from "@tamagui/lucide-icons";
import { Popover } from "@tamagui/popover";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import {
  CellContext,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type HeaderContext,
  type PaginationState,
  type Table as ReactTable,
  type RowData,
  type SortingState,
  type TableOptions
} from "@tanstack/react-table";

const defaultContextValues = {
  sorting: [] as SortingState,
  setSorting: () => {},
  columnFilters: [] as ColumnFiltersState,
  setColumnFilters: () => {},
  pagination: { pageIndex: 0, pageSize: 10 },
  setPagination: () => {}
} as const;

export const InternalStateContext = createStyledContext<{
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}>(defaultContextValues);

export type DataTableOptions<TData = any> = Partial<TableOptions<TData>> &
  Omit<TableOptions<TData>, "getCoreRowModel">;

export interface DataTableProps<TData extends RowData> extends TableProps {
  options: DataTableOptions<TData>;
  pageSize?: number | null | false;
}

export function DataTable<TData extends RowData>({
  options,
  pageSize = 100,
  ...rest
}: DataTableProps<TData>) {
  const [data, setData] = useState<TData[]>(() => [...options.data]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: typeof pageSize === "number" && pageSize > 0 ? pageSize : 100
  });
  const [pageCount, setPageCount] = useState<number>(1);

  // const columnHelper = useMemo(() => createColumnHelper<TData>(), []);

  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    manualPagination: false,
    ...options,
    rowCount: data.length,
    data
  });

  const headerGroups = table.getHeaderGroups();
  const tableRows = table.getRowModel().rows;

  useLayoutEffect(() => {
    setPageCount(table.getPageCount());
  }, [pageSize, data.length]);

  return (
    <InternalStateContext.Provider
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      pagination={pagination}
      setPagination={setPagination}>
      <YStack gap="$3">
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        {pageCount > 1 && (
          <DataTablePagination
            setPageIndex={table.setPageIndex}
            nextPage={table.nextPage}
            previousPage={table.previousPage}
            firstPage={table.firstPage}
            lastPage={table.lastPage}
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
            pageCount={pageCount}
          />
        )}
      </YStack>
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

  const { sorting } = InternalStateContext.useStyledContext();
  const id = props.header.id;
  const { toggleSorting, clearSorting, setFilterValue } = props.column;

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
                    <Button animate={false}>
                      <Button.Text>Apply Filter</Button.Text>
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

export type DataTablePaginationProps<TData extends RowData> = Pick<
  ReactTable<TData>,
  "setPageIndex" | "nextPage" | "previousPage" | "firstPage" | "lastPage"
> &
  Pick<PaginationState, "pageIndex" | "pageSize"> & {
    pageCount: number;
  };

export function DataTablePagination<TData extends RowData>({
  setPageIndex,
  nextPage,
  previousPage,
  firstPage,
  lastPage,
  pageIndex,
  pageSize,
  pageCount
}: DataTablePaginationProps<TData>) {
  return (
    <XStack
      group={"header" as any}
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center">
      <Select
        name="pageSize"
        options={[
          { name: "5", value: 5 },
          { name: "10", value: 10 },
          { name: "25", value: 25 },
          { name: "50", value: 50 },
          { name: "100", value: 100 }
        ]}>
        <XStack alignItems="center" gap="$3">
          <Select.Label>Items per page</Select.Label>
          <Select.Box>
            <Select.Value placeholder="Size" />
          </Select.Box>
        </XStack>
      </Select>
      <Pagination
        pageIndex={pageIndex}
        pageCount={pageCount}
        setPageIndex={setPageIndex}
        onNext={nextPage}
        onPrevious={previousPage}
        onFirst={firstPage}
        onLast={lastPage}
      />
    </XStack>
  );
}
