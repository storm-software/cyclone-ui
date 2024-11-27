/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Button } from "@cyclone-ui/button";
import { CheckboxField } from "@cyclone-ui/checkbox-field";
import { ColorThemeName } from "@cyclone-ui/colors";
import { Form } from "@cyclone-ui/form";
import { InputField } from "@cyclone-ui/input-field";
import { Pagination } from "@cyclone-ui/pagination";
import { SelectField } from "@cyclone-ui/select-field";
import { Table, type TableProps } from "@cyclone-ui/table";
import { Adapt } from "@tamagui/adapt";
import { createStyledContext, View } from "@tamagui/core";
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
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useState
} from "react";
import { titleCase } from "title-case";

export type DataTableContextProps = {
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
};

export const DataTableContext = createStyledContext<DataTableContextProps>({
  sorting: [] as SortingState,
  setSorting: () => {},
  columnFilters: [] as ColumnFiltersState,
  setColumnFilters: () => {},
  pagination: { pageIndex: 0, pageSize: 10 },
  setPagination: () => {}
} as const);

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
    <DataTableContext.Provider
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
          <Table.Header>
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
          </Table.Header>
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
          <Table.Footer>
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
          </Table.Footer>
        </Table>
      </YStack>
    </DataTableContext.Provider>
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

export const DataTableCell = <TData extends RowData, TValue = any>(
  props: DataTableCellProps<TData, TValue>
) => {
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
};

export const DataTableHeader = <TData extends RowData, TValue = any>(
  props: DataTableHeaderProps<TData, TValue>
) => {
  const [currentFilter, setCurrentFilter] = useState("");

  const { sorting } = DataTableContext.useStyledContext();
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
  }, [toggleSorting, clearSorting, desc]);
  const handleFilterSubmit = useCallback(() => {
    setFilterValue(currentFilter);
  }, [setFilterValue, currentFilter]);
  const handleFilterClear = useCallback(() => {
    setFilterValue("");
    setCurrentFilter("");
  }, [setFilterValue, setCurrentFilter]);
  const handleFilterChanged = useCallback(
    (value: string) => {
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
      paddingRight="$3"
      borderRightColor="$borderColor"
      borderRightWidth={1}>
      <XStack gap="$2" onPress={handleSorting} flex={1} cursor="pointer">
        <SizableText
          animation="medium"
          fontFamily="$label"
          color="$primary"
          size="$6"
          $group-header-hover={{ color: "$fg" }}>
          {titleCase(id.replaceAll("_", " "))}
        </SizableText>
        {isSorted && !desc && (
          <XStack gap="$0.25" alignItems="center">
            <ArrowDownAZ size="$1" color="$primary" />
            <SizableText
              animation="medium"
              fontFamily="$label"
              fontWeight="$6"
              color="$primary"
              size="$2">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
        {isSorted && desc && (
          <XStack gap="$0.25" alignItems="center">
            <ArrowUpZA size="$1" color="$primary" />
            <SizableText
              animation="medium"
              fontFamily="$label"
              fontWeight="$6"
              color="$primary"
              size="$2">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
      </XStack>

      <View
        animation="normal"
        opacity={!currentFilter ? 0 : 1}
        $group-header-hover={{ opacity: 1 }}>
        <Popover size="$5" allowFlip={true}>
          <Popover.Trigger asChild={true}>
            <Button
              variant="ghost"
              theme={ColorThemeName.BASE}
              circular={true}
              color="$primary"
              padding="$2">
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
                animation="normal"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Popover.Sheet>
          </Adapt>

          <Popover.Content
          animation="normal"
            borderWidth={1}
            borderColor="$borderColor"
            elevate={true}
            >
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

            <Form name="columnFilter" onSubmit={handleFilterSubmit}>
              <YStack gap="$4">
                <InputField
                  name="search"
                  value={currentFilter}
                  onChange={handleFilterChanged}>
                  <InputField.Control>
                    <InputField.Control.TextBox>
                      <InputField.Control.TextBox.Value placeholder="Search" />

                      <InputField.Icon onPress={handleFilterClear}>
                        <X />
                      </InputField.Icon>
                    </InputField.Control.TextBox>
                  </InputField.Control>
                </InputField>

                <CheckboxField name="filter" value={true}>
                  <XStack gap="$2">
                    <CheckboxField.Control />
                    <CheckboxField.Label>Filter</CheckboxField.Label>
                  </XStack>
                </CheckboxField>

                <Popover.Close asChild={true}>
                  <Form.Reset asChild={true}>
                    <Button animate={false}>
                      <Button.Text>Clear</Button.Text>
                    </Button>
                  </Form.Reset>
                </Popover.Close>
              </YStack>
            </Form>
          </Popover.Content>
        </Popover>
      </View>
    </XStack>
  );
};

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
      <Form name="pageSizing">
        <SelectField
          name="pageSize"
          options={[
            { name: "5", value: 5 },
            { name: "10", value: 10 },
            { name: "25", value: 25 },
            { name: "50", value: 50 },
            { name: "100", value: 100 }
          ]}
          value={pageSize}
          defaultValue={10}>
          <XStack alignItems="center" gap="$3">
            <SelectField.Label>Items per page</SelectField.Label>
            <SelectField.Control placeholder="Size" />
          </XStack>
        </SelectField>
      </Form>

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
