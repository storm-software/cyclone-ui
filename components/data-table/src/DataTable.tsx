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
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData> {
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

interface ContentSizedCell {
  dataset: { columnId?: string };
  scrollWidth: number;
  style: { width: string };
}

interface ContentSizedTableElement {
  querySelectorAll: (selector: string) => ArrayLike<ContentSizedCell>;
  style: {
    maxWidth: string;
    minWidth: string;
    tableLayout: string;
    width: string;
  };
}

interface ContentResizeObserver {
  disconnect: () => void;
  observe: (element: ContentSizedCell) => void;
}

type ContentResizeObserverConstructor = new (
  callback: () => void
) => ContentResizeObserver;

const useContentSizedColumns = () => {
  const tableRef = useRef<ContentSizedTableElement | null>(null);

  const measureColumns = useCallback(() => {
    const tableElement = tableRef.current;

    if (!tableElement?.querySelectorAll) {
      return;
    }

    const cells = Array.from(tableElement.querySelectorAll("[data-column-id]"));
    const headerCells = Array.from(
      tableElement.querySelectorAll("thead [data-column-id]")
    );

    tableElement.style.width = "max-content";
    tableElement.style.minWidth = "0px";
    tableElement.style.maxWidth = "none";
    tableElement.style.tableLayout = "auto";

    cells.forEach(cell => {
      cell.style.width = "auto";
    });

    const widths = cells.reduce((result, cell) => {
      const columnId = cell.dataset.columnId;

      if (columnId) {
        result.set(
          columnId,
          Math.max(result.get(columnId) ?? 0, Math.ceil(cell.scrollWidth))
        );
      }

      return result;
    }, new Map<string, number>());

    const lastColumnId = headerCells.at(-1)?.dataset.columnId;
    const intrinsicTableWidth = headerCells.reduce((width, cell) => {
      const columnId = cell.dataset.columnId;

      return width + (columnId ? (widths.get(columnId) ?? 0) : 0);
    }, 0);

    cells.forEach(cell => {
      const columnId = cell.dataset.columnId;
      const width = columnId ? widths.get(columnId) : undefined;

      if (width && columnId !== lastColumnId) {
        cell.style.width = `${width}px`;
      }
    });

    tableElement.style.width = "100%";
    tableElement.style.minWidth = `${intrinsicTableWidth}px`;
    tableElement.style.tableLayout = "fixed";
  }, []);

  useLayoutEffect(measureColumns);

  useEffect(() => {
    const tableElement = tableRef.current;
    const ResizeObserverImpl = (
      globalThis as typeof globalThis & {
        ResizeObserver?: ContentResizeObserverConstructor;
      }
    ).ResizeObserver;

    if (!tableElement?.querySelectorAll || !ResizeObserverImpl) {
      return;
    }

    let animationFrame: number | undefined;
    const observer = new ResizeObserverImpl(() => {
      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(measureColumns);
    });

    animationFrame = requestAnimationFrame(measureColumns);

    Array.from(tableElement.querySelectorAll("[data-column-id] *")).forEach(
      element => observer.observe(element)
    );

    return () => {
      observer.disconnect();

      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }
    };
  });

  return tableRef;
};

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
  const tableRef = useContentSizedColumns();

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
          ref={tableRef as any}
          width="100%"
          maxWidth="none"
          alignCells={{ x: "start", y: "center" }}
          alignHeaderCells={{ x: "start", y: "center" }}
          {...({ sizing: "content" } as any)}
          {...rest}>
          <Table.Header>
            {headerGroups.map(headerGroup => {
              return (
                <Table.Row key={headerGroup.id} header={true}>
                  {headerGroup.headers.map(header => (
                    <Table.HeaderCell
                      key={header.id}
                      borderRightColor="$border"
                      borderRightWidth={
                        header.index === headerGroup.headers.length - 1 ? 0 : 1
                      }
                      {...({
                        colSpan: header.colSpan,
                        ...(header.colSpan === 1
                          ? { "data-column-id": header.column.id }
                          : {})
                      } as any)}
                      group={"header" as any}>
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
                    <Table.Cell
                      key={cell.id}
                      {...({ "data-column-id": cell.column.id } as any)}>
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
                <Table.Cell
                  {...({
                    colSpan: table.getVisibleLeafColumns().length
                  } as any)}>
                  <View
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    padding="$7xl">
                    <LabelText size="$6xl">No data to display</LabelText>
                  </View>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          {pageCount > 1 && (
            <Table.Footer>
              <Table.Row header={true}>
                <Table.Cell
                  borderBottomWidth={0}
                  {...({
                    colSpan: table.getVisibleLeafColumns().length
                  } as any)}>
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
                </Table.Cell>
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
      transition="200ms"
      fontFamily="$body"
      color="$foregroundInverse"
      $group-row-hover={{ color: "$foregroundInverseHover" }}>
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
  const intrinsicFilterLabels = useMemo(
    () =>
      Array.from(valuesMap.entries())
        .map(([value, { count }]) => `${value} (${count})`)
        .join("\n"),
    [valuesMap]
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
    <YStack gap="$3xl" width="max-content" minWidth="100%">
      <SizableText
        aria-hidden={true}
        height={0}
        overflow="hidden"
        opacity={0}
        pointerEvents="none"
        paddingRight="$9xl"
        maxWidth="100%"
        whiteSpace="pre"
        fontFamily="$heading-sm">
        {intrinsicFilterLabels}
      </SizableText>

      <SearchInputField
        name={SEARCH_FIELD_NAME}
        size="$9xl"
        width="100%"
        onChange={handleSearchChange}>
        <SearchInputField.Control>
          <SearchInputField.Control.TextBox placeholder="Filter..." />
        </SearchInputField.Control>
      </SearchInputField>

      <Popover.Content.ScrollView maxHeight="$18xl" padding={5}>
        <YStack gap="$xl">
          <CheckboxField name={SELECT_ALL_FIELD_NAME} size="$9xl">
            <XStack gap="$3xl">
              <CheckboxField.Control />
              <CheckboxField.Label>{"(Select All)"}</CheckboxField.Label>
            </XStack>
          </CheckboxField>

          {searchResults.map(searchResult => (
            <CheckboxField key={searchResult} name={searchResult} size="$9xl">
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
          keys.reduce(
            (ret, key) => {
              ret[key] = true;

              return ret;
            },
            {
              ...deepClone(prev),
              [SELECT_ALL_FIELD_NAME]: true
            }
          )
        );
        setFilterValue([]);
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
      gap="$3xl"
      justifyContent="space-between"
      alignItems="center"
      paddingRight="$3xl">
      <XStack gap="$xl" onPress={handleSorting} flexShrink={0} cursor="pointer">
        <SizableText
          transition="200ms"
          fontFamily="$heading-sm"
          color="$foreground"
          size="$6xl"
          $group-header-hover={{ color: "$foregroundHover" }}>
          {titleCase(id)}
        </SizableText>
        {isSorted && !desc && (
          <XStack gap="$xxs" alignItems="center">
            <ArrowDownAZ size="$4xl" color="$foreground" />
            <SizableText
              transition="200ms"
              fontFamily="$heading-sm"
              fontWeight="$semibold"
              color="$foreground"
              size="$xs">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
        {isSorted && desc && (
          <XStack gap="$xxs" alignItems="center">
            <ArrowUpZA size="$4xl" color="$foreground" />
            <SizableText
              transition="200ms"
              fontFamily="$heading-sm"
              fontWeight="$semibold"
              color="$foreground"
              size="$xs">
              {sortIndex + 1}
            </SizableText>
          </XStack>
        )}
      </XStack>

      {column.getCanFilter() && (
        <View
          transition="200ms"
          flexShrink={0}
          paddingRight="$3xl"
          opacity={filterValues.length > 0 ? 1 : 0}
          $group-header-hover={{ opacity: 1 }}>
          <Popover allowFlip={true}>
            <Popover.Trigger asChild={true}>
              <Button
                variant="ghost"
                theme="primary"
                circular={true}
                bordered={false}
                color="$foreground"
                padding="$xl"
                width="$3xl">
                <Button.Icon>
                  <Filter size="$4xl" />
                </Button.Icon>
              </Button>
            </Popover.Trigger>

            <Popover.Content
              width="max-content"
              minWidth="$30xl"
              maxWidth="90vw"
              padding="$5xl">
              <View
                width="max-content"
                minWidth="100%"
                maxWidth="100%"
                overflow="hidden">
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
          <View width="$30xl" flexShrink={0}>
            <Form
              name="pageSizing"
              initialValues={{
                pageSize
              }}>
              <View width="$30xl">
                <SelectField
                  name="pageSize"
                  items={pageSizes}
                  size="$9xl"
                  onChange={handlePageSizeChange}>
                  <XStack alignItems="center" gap="$3xl">
                    <SelectField.Label hideOptional={true} flexShrink={0}>
                      Per page:
                    </SelectField.Label>
                    <View width="$18xl" flexShrink={0}>
                      <SelectField.Control placeholder="Size" />
                    </View>
                  </XStack>
                </SelectField>
              </View>
            </Form>
          </View>

          <YStack gap="$xl">
            <XStack
              justifyContent="space-between"
              alignItems="center"
              gap="$5xl">
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
