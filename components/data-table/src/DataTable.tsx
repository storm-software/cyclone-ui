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
import { CallbackContext, FieldStore, FormStore } from "@cyclone-ui/form-state";
import { LabelText } from "@cyclone-ui/label-text";
import { Pagination } from "@cyclone-ui/pagination";
import { Popover } from "@cyclone-ui/popover";
import { SearchInputField } from "@cyclone-ui/search-input-field";
import { SelectField } from "@cyclone-ui/select-field";
import { Table, type TableProps } from "@cyclone-ui/table";
import { titleCase } from "@storm-stack/string-fns/title-case";
import type { SelectOption } from "@storm-stack/types/utility-types/form";
import { createStyledContext, View } from "@tamagui/core";
import { ArrowDownAZ, ArrowUpZA, Filter } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import {
  CellContext,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
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
  useMemo,
  useState
} from "react";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    facetFn?: (data: TData) => string;
  }
}

const defaultFilterFn = <TData extends RowData>(
  row: Row<TData>,
  columnId: string,
  filterValues: string[]
) => {
  return filterValues
    .map(filterValue => filterValue.toLowerCase())
    .includes(String(row.getValue(columnId)).toLowerCase());
};

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
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
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
    columns: options.columns.map(column => ({
      filterFn: defaultFilterFn,
      ...column
    })),
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
            {tableRows.length === 0 && (
              <Table.Row>
                <View
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  padding="$5">
                  <LabelText size="$6">No data to display</LabelText>
                </View>
              </Table.Row>
            )}
          </Table.Body>
          {pageCount > 1 && (
            <Table.Footer>
              <Table.Row header={true}>
                <DataTablePagination
                  setPageIndex={table.setPageIndex}
                  nextPage={table.nextPage}
                  previousPage={table.previousPage}
                  firstPage={table.firstPage}
                  lastPage={table.lastPage}
                  rowCount={data.length}
                  pageIndex={pagination.pageIndex}
                  pageSize={pagination.pageSize}
                  pageCount={pageCount}
                />
              </Table.Row>
            </Table.Footer>
          )}
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
      animation="normal"
      fontFamily="$body"
      color="$color"
      $group-row-hover={{ color: "$primary" }}>
      {value}
    </SizableText>
  );
};

const SEARCH_FIELD_NAME = "__search";
const SELECT_ALL_FIELD_NAME = "__selectAll";

const DataTableHeaderFilterFields = <TData extends RowData, TValue = any>(
  props: DataTableHeaderProps<TData, TValue>["column"]
) => {
  const {
    setFilterValue,
    getFacetedUniqueValues,
    columnDef: { meta }
  } = props;

  const sortedUniqueValues = useMemo(
    () => Array.from(getFacetedUniqueValues().keys()).sort().slice(0, 5000),
    [getFacetedUniqueValues()]
  );

  const handleFilterChanged = useCallback(
    (value: string) => {
      setFilterValue(value);
    },
    [setFilterValue]
  );

  return (
    <YStack gap="$3" width="100%">
      <SearchInputField name={SEARCH_FIELD_NAME} size="$3" width="$15">
        <SearchInputField.Control>
          <SearchInputField.Control.TextBox placeholder="Filter..." />
        </SearchInputField.Control>
      </SearchInputField>

      <Popover.Content.ScrollView maxHeight="$16" padding={5}>
        <YStack gap="$2">
          <CheckboxField name={SELECT_ALL_FIELD_NAME} size="$3">
            <XStack gap="$3">
              <CheckboxField.Control />
              <CheckboxField.Label>{"(Select All)"}</CheckboxField.Label>
            </XStack>
          </CheckboxField>

          {sortedUniqueValues.map(value => {
            return (
              <CheckboxField key={value} name={String(value)} size="$3">
                <XStack gap="$3">
                  <CheckboxField.Control />
                  <CheckboxField.Label>
                    {meta?.facetFn?.(value) ?? value}
                  </CheckboxField.Label>
                </XStack>
              </CheckboxField>
            );
          })}
        </YStack>
      </Popover.Content.ScrollView>
    </YStack>
  );
};

export const DataTableHeader = <TData extends RowData, TValue = any>(
  props: DataTableHeaderProps<TData, TValue>
) => {
  const [currentSearch, setCurrentSearch] = useState("");

  const { column, header } = props;

  const { sorting } = DataTableContext.useStyledContext();
  const { toggleSorting, clearSorting, setFilterValue, getFilterValue, id } =
    column;

  const isSorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();
  const desc = sorting.find(sort => sort.id === id)?.desc;

  const handleSorting = useCallback(() => {
    if (desc === false) {
      clearSorting();
    } else {
      toggleSorting(!desc, true);
    }
  }, [toggleSorting, clearSorting, desc]);

  // const handleFilterSubmit = useCallback(() => {
  //   setFilterValue(currentFilter);
  // }, [setFilterValue, currentFilter]);
  // const handleFilterClear = useCallback(() => {
  //   setFilterValue("");
  //   setCurrentFilter("");
  // }, [setFilterValue, setCurrentFilter]);
  // const handleFilterChanged = useCallback(
  //   (value: string) => {
  //     setCurrentFilter(value ?? "");
  //   },
  //   [setCurrentFilter]
  // );

  const filterValue = getFilterValue();

  const handleChange = useCallback(
    ({ get, set, store }: CallbackContext<FormStore>) => {
      const values = get(store.api.atom.values);
      const keys = Object.keys(values).filter(
        key => key !== SEARCH_FIELD_NAME && key !== SELECT_ALL_FIELD_NAME
      );

      const selectAll = keys.some(key => values[key] === false)
        ? keys.some(key => values[key] === true)
          ? "indeterminate"
          : false
        : true;
      set(store.api.atom.values, {
        ...values,
        [SELECT_ALL_FIELD_NAME]: selectAll
      });
    },
    []
  );

  const sortedUniqueValues = useMemo(
    () =>
      Array.from(column.getFacetedUniqueValues().keys()).sort().slice(0, 5000),
    [column.getFacetedUniqueValues()]
  );

  const defaultValues = useMemo(
    () =>
      sortedUniqueValues.reduce(
        (ret, key) => ({
          ...ret,
          [key]: true
        }),
        {
          [SEARCH_FIELD_NAME]: filterValue ?? null,
          [SELECT_ALL_FIELD_NAME]: true
        } as Record<string, any>
      ),
    [sortedUniqueValues]
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
          animation="normal"
          fontFamily="$label"
          color="$primary"
          size="$6"
          $group-header-hover={{ color: "$fg" }}>
          {titleCase(id)}
        </SizableText>
        {isSorted && !desc && (
          <XStack gap="$0.25" alignItems="center">
            <ArrowDownAZ size="$1" color="$primary" />
            <SizableText
              animation="normal"
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
              animation="normal"
              fontFamily="$label"
              fontWeight="$6"
              color="$primary"
              size="$2">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
      </XStack>

      {column.getCanFilter() && (
        <View
          animation="normal"
          opacity={!filterValue ? 0 : 1}
          $group-header-hover={{ opacity: 1 }}>
          <Popover allowFlip={true}>
            <Popover.Trigger asChild={true}>
              <Button
                variant="ghost"
                theme={ColorThemeName.BASE}
                circular={true}
                bordered={false}
                color="$primary"
                padding="$2"
                width="$3">
                <Button.Icon>
                  <Filter size="$1" />
                </Button.Icon>
              </Button>
            </Popover.Trigger>

            <Popover.Content width="$16">
              <View flex={1} minWidth="100%">
                <Form
                  name={`${id}_filter`}
                  defaultValues={defaultValues}
                  onChange={handleChange}>
                  <DataTableHeaderFilterFields {...column} />
                </Form>
              </View>
            </Popover.Content>
          </Popover>
        </View>
      )}
    </XStack>
  );
};

export type DataTablePaginationProps<TData extends RowData> = Pick<
  ReactTable<TData>,
  "setPageIndex" | "nextPage" | "previousPage" | "firstPage" | "lastPage"
> &
  Pick<PaginationState, "pageIndex" | "pageSize"> & {
    pageCount: number;
    rowCount: number;
  };

export function DataTablePagination<TData extends RowData>({
  setPageIndex,
  nextPage,
  previousPage,
  firstPage,
  lastPage,
  rowCount,
  pageIndex,
  pageSize,
  pageCount,
  ...props
}: DataTablePaginationProps<TData>) {
  const { setPagination, } = DataTableContext.useStyledContext();

  const handlePageSizeChange = useCallback(
    ({ get, store }: CallbackContext<FieldStore<any>>) => {
      setPagination(state => ({
        ...state,
        pageSize: get(store.api.atom.value)
      }));
    },
    [setPagination]
  );

  const pageSizes = useMemo(() => {
    const result = [] as SelectOption<number>[];
    if (rowCount >= 5) {
      result.push({
        index: result.length,
        name: "5",
        value: 5,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 10) {
      result.push({
        index: result.length,
        name: "10",
        value: 10,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 25) {
      result.push({
        index: result.length,
        name: "25",
        value: 25,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 50) {
      result.push({
        index: result.length,
        name: "50",
        value: 50,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 100) {
      result.push({
        index: result.length,
        name: "100",
        value: 100,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 500) {
      result.push({
        index: result.length,
        name: "500",
        value: 500,
        selected: false,
        disabled: false
      });
    }
    if (rowCount >= 1000) {
      result.push({
        index: result.length,
        name: "1000",
        value: 1000,
        selected: false,
        disabled: false
      });
    }

    result.push({
      index: result.length,
      name: String(rowCount),
      value: rowCount,
      selected: false,
      disabled: false
    });

    result.sort((a, b) => a.value - b.value);

    return result;
  }, []);

  return (
    <XStack
      group={"header" as any}
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="$2">
      <View flex={1}>
        <XStack alignItems="center" gap="$2">
          <Form
            name="pageSizing"
            defaultValues={{
              pageSize
            }}>
            <SelectField
              name="pageSize"
              items={pageSizes}
              size="$4"
              onChange={handlePageSizeChange}>
              <XStack alignItems="center" gap="$4">
                <SelectField.Label hideOptional={true}>
                  Per page:
                </SelectField.Label>
                <SelectField.Control placeholder="Size" flex={1} />
              </XStack>
            </SelectField>
          </Form>

          <LabelText size="$4">Total: {rowCount}</LabelText>
        </XStack>
      </View>

      <Pagination
        hideText={true}
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
