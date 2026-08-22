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

import { Button } from "@cyclone-ui/button";
import { CheckboxField } from "@cyclone-ui/checkbox-field";
import { Form } from "@cyclone-ui/form";
import { LabelText } from "@cyclone-ui/label-text";
import { Pagination } from "@cyclone-ui/pagination";
import { Popover } from "@cyclone-ui/popover";
import { SearchInputField } from "@cyclone-ui/search-input-field";
import { SelectField } from "@cyclone-ui/select-field";
import type {
  CallbackContext,
  FieldAtoms,
  FormAtoms
} from "@cyclone-ui/state/form";
import type { TableProps } from "@cyclone-ui/table";
import { Table } from "@cyclone-ui/table";
import { deepClone } from "@stryke/helpers/deep-clone";
import { isEqual } from "@stryke/helpers/is-equal";
import { matchSorter } from "@stryke/helpers/match-sorter";
import { titleCase } from "@stryke/string-format/title-case";
import { isNumber } from "@stryke/type-checks/is-number";
import type { SelectOption } from "@stryke/types/form";
import { createStyledContext, View } from "@tamagui/core";
import { ArrowDownAZ, ArrowUpZA, Filter } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type {
  CellContext,
  ColumnFiltersState,
  HeaderContext,
  PaginationState,
  Table as ReactTable,
  Row,
  RowData,
  SortingState,
  TableOptions
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, _TValue> {
    facetFn?: (data: TData) => string;
  }
}

const defaultFilterFn = <TData extends RowData>(
  row: Row<TData>,
  columnId: string,
  filterValues: any[] = []
) => {
  return !filterValues.some(filterValue =>
    isEqual(row.getValue(columnId), filterValue)
  );
};

export interface DataTableContextProps {
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

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
  const [data] = useState<TData[]>(() => [...options.data]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: isNumber(pageSize) && pageSize > 0 ? pageSize : 100
  });

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
  const pageCount = table.getPageCount();

  return (
    <DataTableContext.Provider
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      pagination={pagination}
      setPagination={setPagination}>
      <YStack gap="$3xl">
        <Table
          alignCells={{ x: "start", y: "center" }}
          alignHeaderCells={{ x: "start", y: "center" }}
          cellWidth="$20xl"
          cellHeight="$9xl"
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
                  padding="$7xl">
                  <LabelText size="$lg">No data to display</LabelText>
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
                  totalCount={data.length}
                  unfilteredCount={table.getFilteredRowModel().rows.length}
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

export interface DataTableCellProps<
  TData extends RowData,
  TValue = any
> extends CellContext<TData, TValue> {
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
      transition="medium"
      fontFamily="$body"
      color="$foregroundOnPrimary"
      $group-row-hover={{ color: "$foregroundOnPrimaryHover" }}>
      {value}
    </SizableText>
  );
};

const SEARCH_FIELD_NAME = "__search";
const SELECT_ALL_FIELD_NAME = "__selectAll";

const DataTableHeaderFilterFields = <_TData extends RowData, _TValue = any>({
  valuesMap = new Map(),
  onSearchChange
}: {
  valuesMap: Map<string, { value: any; count: number }>;
  onSearchChange: (context: CallbackContext<FieldAtoms<string>>) => void;
}) => {
  const [searchResults, setSearchResults] = useState(
    useMemo(() => Array.from(valuesMap.keys()), [valuesMap])
  );

  const handleSearchChange = useCallback(
    (context: CallbackContext<FieldAtoms<string>>) => {
      const { get, atoms } = context;
      onSearchChange(context);

      const keys = Array.from(valuesMap.keys());
      const value = get(atoms.value);

      setSearchResults(!value ? keys : matchSorter(keys, value));
    },
    [valuesMap]
  );

  return (
    <YStack gap="$3xl" width="100%">
      <SearchInputField
        name={SEARCH_FIELD_NAME}
        size="$3xl"
        width="$17xl"
        onChange={handleSearchChange}>
        <SearchInputField.Control>
          <SearchInputField.Control.TextBox placeholder="Filter..." />
        </SearchInputField.Control>
      </SearchInputField>

      <Popover.Content.ScrollView maxHeight="$18xl" padding={5}>
        <YStack gap="$xl">
          <CheckboxField name={SELECT_ALL_FIELD_NAME} size="$3xl">
            <XStack gap="$3xl">
              <CheckboxField.Control />
              <CheckboxField.Label>{"(Select All)"}</CheckboxField.Label>
            </XStack>
          </CheckboxField>

          {searchResults.map(searchResult => (
            <CheckboxField key={searchResult} name={searchResult} size="$3xl">
              <XStack gap="$3xl">
                <CheckboxField.Control />
                <CheckboxField.Label>{`${searchResult} (${valuesMap.get(searchResult)?.count ?? 0})`}</CheckboxField.Label>
              </XStack>
            </CheckboxField>
          ))}
        </YStack>
      </Popover.Content.ScrollView>
    </YStack>
  );
};

export const DataTableHeader = <TData extends RowData, TValue = any>({
  column,
  ..._props
}: DataTableHeaderProps<TData, TValue>) => {
  const [currentSearch, setCurrentSearch] = useState("");

  const { sorting } = DataTableContext.useStyledContext();
  const {
    toggleSorting,
    clearSorting,
    setFilterValue,
    getFilterValue,
    id,
    columnDef: { meta }
  } = column;

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

  const filterValues = (getFilterValue() ?? []) as any[];

  const valuesMap = useMemo<Map<string, { value: any; count: number }>>(() => {
    const facetedUniqueValues = column.getFacetedUniqueValues();

    return Array.from(facetedUniqueValues.keys())
      .slice(0, 5000)
      .reduce((ret, value) => {
        ret.set(String(meta?.facetFn?.(value) ?? value), {
          value,
          count: facetedUniqueValues.get(value)
        });

        return ret;
      }, new Map());
  }, [filterValues, meta]);

  const handleChange = useCallback(
    ({ get, set, atoms }: CallbackContext<FormAtoms>) => {
      const values = get(atoms.values);
      const previousValues = get(atoms.previousValues);

      const keys = Object.keys(values).filter(
        key => key !== SEARCH_FIELD_NAME && key !== SELECT_ALL_FIELD_NAME
      );

      if (
        values[SELECT_ALL_FIELD_NAME] !== "indeterminate" &&
        values[SELECT_ALL_FIELD_NAME] !== previousValues[SELECT_ALL_FIELD_NAME]
      ) {
        set(atoms.values, prev =>
          keys.reduce((ret, key) => {
            ret[key] = values[SELECT_ALL_FIELD_NAME];

            return ret;
          }, deepClone(prev))
        );

        setFilterValue(
          values[SELECT_ALL_FIELD_NAME]
            ? []
            : Array.from(valuesMap.values()).map(item => item.value)
        );
      } else {
        const selectAll = keys.some(key => values[key] === false)
          ? keys.some(key => values[key] === true)
            ? "indeterminate"
            : false
          : true;
        set(atoms.values, prev => ({
          ...prev,
          [SELECT_ALL_FIELD_NAME]: selectAll
        }));

        setFilterValue(
          keys
            .filter(key => values[key] === false && valuesMap.has(key))
            .map(key => valuesMap.get(key)!.value)
        );
      }
    },
    [valuesMap]
  );

  const handleSearchChange = useCallback(
    ({ get, set: _set, atoms }: CallbackContext<FieldAtoms<string>>) => {
      setCurrentSearch(get(atoms.value));
    },
    []
  );

  const initialValues = useMemo(() => {
    const keys = Array.from(valuesMap.keys());

    return keys.reduce(
      (ret, key) => ({
        ...ret,
        [key]: !filterValues.some(filterValue =>
          isEqual(filterValue, valuesMap.get(key)!.value)
        )
      }),
      {
        [SEARCH_FIELD_NAME]: currentSearch,
        [SELECT_ALL_FIELD_NAME]:
          filterValues.length === 0
            ? true
            : filterValues.length === keys.length
              ? false
              : "indeterminate"
      } as Record<string, any>
    );
  }, [valuesMap]);

  return (
    <XStack
      group={"header" as any}
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center"
      paddingRight="$3xl"
      borderRightColor="$borderPrimary"
      borderRightWidth={1}>
      <XStack gap="$xl" onPress={handleSorting} flex={1} cursor="pointer">
        <SizableText
          transition="medium"
          fontFamily="$label"
          color="$foregroundPrimary"
          size="$lg"
          $group-header-hover={{ color: "$foregroundPrimaryHover" }}>
          {titleCase(id)}
        </SizableText>
        {isSorted && !desc && (
          <XStack gap="$xxs" alignItems="center">
            <ArrowDownAZ size="$md" color="$foregroundPrimary" />
            <SizableText
              transition="medium"
              fontFamily="$label"
              fontWeight="$semibold"
              color="$foregroundPrimary"
              size="$xs">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
        {isSorted && desc && (
          <XStack gap="$xxs" alignItems="center">
            <ArrowUpZA size="$md" color="$foregroundPrimary" />
            <SizableText
              transition="medium"
              fontFamily="$label"
              fontWeight="$semibold"
              color="$foregroundPrimary"
              size="$xs">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
      </XStack>

      {column.getCanFilter() && (
        <View
          transition="medium"
          opacity={filterValues.length > 0 ? 1 : 0}
          $group-header-hover={{ opacity: 1 }}>
          <Popover allowFlip={true}>
            <Popover.Trigger asChild={true}>
              <Button
                variant="ghost"
                theme={"base"}
                circular={true}
                bordered={false}
                color="$foregroundPrimary"
                padding="$xl"
                width="$3xl">
                <Button.Icon>
                  <Filter size="$md" />
                </Button.Icon>
              </Button>
            </Popover.Trigger>

            <Popover.Content width="$18xl">
              <View flex={1} minWidth="100%">
                <Form
                  name={`${id}_filter`}
                  initialValues={initialValues}
                  onChange={handleChange}>
                  <DataTableHeaderFilterFields
                    valuesMap={valuesMap}
                    onSearchChange={handleSearchChange}
                  />
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
    totalCount: number;
    unfilteredCount: number;
  };

export function DataTablePagination<TData extends RowData>({
  setPageIndex,
  nextPage,
  previousPage,
  firstPage,
  lastPage,
  totalCount,
  unfilteredCount,
  pageIndex,
  pageSize,
  pageCount,
  ..._props
}: DataTablePaginationProps<TData>) {
  const { setPagination } = DataTableContext.useStyledContext();

  const handlePageSizeChange = useCallback(
    ({ get, atoms }: CallbackContext<FieldAtoms<number>>) => {
      setPagination(state => ({
        ...state,
        pageSize: get(atoms.value)
      }));
    },
    [setPagination]
  );

  const pageSizes = useMemo(() => {
    const result = [] as SelectOption<number>[];
    if (unfilteredCount >= 5) {
      result.push({
        index: result.length,
        name: "5",
        value: 5,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 10) {
      result.push({
        index: result.length,
        name: "10",
        value: 10,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 25) {
      result.push({
        index: result.length,
        name: "25",
        value: 25,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 50) {
      result.push({
        index: result.length,
        name: "50",
        value: 50,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 100) {
      result.push({
        index: result.length,
        name: "100",
        value: 100,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 500) {
      result.push({
        index: result.length,
        name: "500",
        value: 500,
        selected: false,
        disabled: false
      });
    }
    if (unfilteredCount >= 1000) {
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
      name: String(unfilteredCount),
      value: unfilteredCount,
      selected: false,
      disabled: false
    });

    result.sort((a, b) => a.value - b.value);

    return result;
  }, [unfilteredCount]);

  return (
    <XStack
      group={"header" as any}
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="$xl">
      <View flex={1}>
        <XStack alignItems="center" gap="$xl">
          <Form
            name="pageSizing"
            initialValues={{
              pageSize
            }}>
            <SelectField
              name="pageSize"
              items={pageSizes}
              size="$5xl"
              onChange={handlePageSizeChange}>
              <XStack alignItems="center" gap="$5xl">
                <SelectField.Label hideOptional={true}>
                  Per page:
                </SelectField.Label>
                <SelectField.Control placeholder="Size" flex={1} />
              </XStack>
            </SelectField>
          </Form>

          <YStack gap="$xl">
            <XStack justifyContent="space-between" alignItems="center" gap="$5xl">
              <LabelText size="$sm">Total:</LabelText>
              <LabelText size="$sm">{`${totalCount} ${totalCount === 1 ? "row" : "rows"}`}</LabelText>
            </XStack>
            {unfilteredCount !== totalCount && (
              <XStack
                justifyContent="space-between"
                alignItems="center"
                gap="$5xl">
                <LabelText size="$sm">Filtering:</LabelText>
                <LabelText size="$sm">
                  {`${totalCount - unfilteredCount} ${totalCount - unfilteredCount === 1 ? "row" : "rows"}`}
                </LabelText>
              </XStack>
            )}
          </YStack>
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
