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
import { Button } from "@cyclone-ui/button";
import { Checkbox } from "@cyclone-ui/checkbox";
import { ContextMenu } from "@cyclone-ui/context-menu";
import { Field } from "@cyclone-ui/field";
import { Form } from "@cyclone-ui/form";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import {
  DotsThreeVertical,
  Funnel,
  SortAscending,
  SortDescending
} from "@cyclone-ui/icons";
import { LabelText } from "@cyclone-ui/label-text";
import { Pagination } from "@cyclone-ui/pagination";
import { Popover } from "@cyclone-ui/popover";
import { SearchInput } from "@cyclone-ui/search-input";
import { Select } from "@cyclone-ui/select";
import type { CallbackContext, FieldAtoms } from "@cyclone-ui/state/form";
import type { TableProps } from "@cyclone-ui/table";
import { Table } from "@cyclone-ui/table";
import { matchSorter } from "@stryke/helpers/match-sorter";
import { titleCase } from "@stryke/string-format/title-case";
import { isNumber } from "@stryke/type-checks/is-number";
import type { SelectOption } from "@stryke/types/form";
import {
  createStyledContext,
  getTokens,
  getVariableValue,
  styled,
  View
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type {
  CellContext,
  Column,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  HeaderContext,
  OnChangeFn,
  PaginationState,
  Table as ReactTable,
  Row,
  RowData,
  RowSelectionState,
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
import type { Dispatch, ReactNode, SetStateAction } from "react";
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

// Filter values are facet keys, so rows whose accessor values differ but
// share a facet (e.g. same `userName`) are filtered together.
const getFacetKey = <TData extends RowData>(
  value: any,
  facetFn?: (data: TData) => string
) => String(facetFn?.(value) ?? value);

const getDefaultFilterFn =
  <TData extends RowData>(facetFn?: (data: TData) => string) =>
  (row: Row<TData>, columnId: string, filterValues: string[] = []) =>
    !filterValues.includes(getFacetKey(row.getValue(columnId), facetFn));

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

export interface DataTableRowAction {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export type DataTableVariant = "standard" | "card";

export interface DataTableProps<TData extends RowData> extends TableProps {
  options: DataTableOptions<TData>;
  pageSize?: number | null | false;
  resizable?: boolean;

  /**
   * Lets columns be reordered by dragging their header onto another header.
   * The selection and actions columns stay pinned to the edges.
   */
  reorderable?: boolean;

  /**
   * `standard` divides rows with hairlines; `card` draws the header, each row
   * and the pagination footer as separate rounded cards.
   */
  variant?: DataTableVariant;

  /**
   * Adds a trailing column whose button opens a menu of these actions, or of
   * the actions returned for each row.
   */
  rowActions?:
    DataTableRowAction[] | ((row: Row<TData>) => DataTableRowAction[]);

  /**
   * Called with the selected action's `value` and its row.
   */
  onRowAction?: (value: string, row: Row<TData>) => void;
}

const SELECTION_COLUMN_ID = "__selection";
const ACTIONS_COLUMN_ID = "__actions";

const DataTableColumnHeading = styled(HeadingSmallText, {
  displayName: "DataTableColumnHeading",
  fontFamily: "title-md"
});

// Cards are drawn on the cells: a `tr` can't be rounded.
const getCardCellProps = (index: number, count: number) => ({
  backgroundColor: "surface",
  borderBottomWidth: 0,
  ...(index === 0
    ? { borderTopLeftRadius: "card", borderBottomLeftRadius: "card" }
    : {}),
  ...(index === count - 1
    ? { borderTopRightRadius: "card", borderBottomRightRadius: "card" }
    : {})
});

const getSelectionColumn = <TData extends RowData>(): ColumnDef<TData> => ({
  id: SELECTION_COLUMN_ID,
  size: 56,
  enableColumnFilter: false,
  enableResizing: false,
  enableSorting: false,
  header: ({ table }) => {
    const pageRows = table.getRowModel().rows;
    const hasSelectableRows = pageRows.some(row => row.getCanSelect());
    const checked = table.getIsAllPageRowsSelected()
      ? true
      : table.getIsSomePageRowsSelected()
        ? "indeterminate"
        : false;

    return (
      <View width="100%" alignItems="center" justifyContent="center">
        <Checkbox
          name="data-table-select-all"
          aria-label="Select all rows on this page"
          checked={checked}
          disabled={!hasSelectableRows}
          onCheckedChange={nextChecked =>
            table.toggleAllPageRowsSelected(nextChecked === true)
          }
        />
      </View>
    );
  },
  cell: ({ row }) => (
    <View width="100%" alignItems="center" justifyContent="center">
      <Checkbox
        name={`data-table-select-row-${row.id}`}
        aria-label={`Select row ${row.index + 1}`}
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={checked => row.toggleSelected(checked === true)}
      />
    </View>
  )
});

const DataTableRowActions = <TData extends RowData>({
  row,
  actions,
  onAction
}: {
  row: Row<TData>;
  actions: DataTableRowAction[];
  onAction?: (value: string, row: Row<TData>) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View width="100%" alignItems="flex-end" justifyContent="center">
      <ContextMenu
        open={open}
        onOpenChange={setOpen}
        placement="bottom-end"
        onValueChange={value => {
          setOpen(false);
          onAction?.(value, row);
        }}>
        <ContextMenu.Trigger asChild={true}>
          <Button
            theme="base"
            variant="ghost"
            ghostOpacity={0.4}
            circular={true}
            noPadding={true}
            color="primary"
            size="6xl"
            padding="lg"
            aria-label={`Actions for row ${row.index + 1}`}>
            <Button.Icon>
              <DotsThreeVertical size="2xl" weight="bold" />
            </Button.Icon>
          </Button>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          {actions.map(action => (
            <ContextMenu.Item
              key={action.value}
              aria-label={action.label}
              value={action.value}
              disabled={action.disabled}>
              {action.icon && (
                // Flex centers an SVG, which would otherwise sit on the baseline.
                <ContextMenu.Item.Icon display="flex" alignItems="center">
                  {action.icon}
                </ContextMenu.Item.Icon>
              )}
              <ContextMenu.Item.Label>{action.label}</ContextMenu.Item.Label>
            </ContextMenu.Item>
          ))}
        </ContextMenu.Content>
      </ContextMenu>
    </View>
  );
};

const getActionsColumn = <TData extends RowData>(
  rowActions: NonNullable<DataTableProps<TData>["rowActions"]>,
  onRowAction: DataTableProps<TData>["onRowAction"]
): ColumnDef<TData> => ({
  id: ACTIONS_COLUMN_ID,
  size: 56,
  enableColumnFilter: false,
  enableResizing: false,
  enableSorting: false,
  header: () => null,
  cell: ({ row }) => (
    <DataTableRowActions
      row={row}
      actions={typeof rowActions === "function" ? rowActions(row) : rowActions}
      onAction={onRowAction}
    />
  )
});

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

const useContentSizedColumns = (enabled: boolean) => {
  const tableRef = useRef<ContentSizedTableElement | null>(null);

  const measureColumns = useCallback(() => {
    if (!enabled) {
      return;
    }

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
  }, [enabled]);

  useLayoutEffect(measureColumns);

  useEffect(() => {
    if (!enabled) {
      return;
    }

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
  }, [enabled, measureColumns]);

  return tableRef;
};

const useInitialContentSizedColumns = <TData extends RowData>(
  tableRef: { current: ContentSizedTableElement | null },
  table: ReactTable<TData>,
  enabled: boolean
) => {
  const measuredColumnsRef = useRef<string | undefined>(undefined);
  const columnIds = table
    .getVisibleLeafColumns()
    .map(column => column.id)
    .join("\0");

  useLayoutEffect(() => {
    const tableElement = tableRef.current;

    if (
      !enabled ||
      measuredColumnsRef.current === columnIds ||
      !tableElement?.querySelectorAll
    ) {
      return;
    }

    measuredColumnsRef.current = columnIds;

    const columnWidthPadding = getVariableValue(getTokens().space.xl);

    const widths = Array.from(
      tableElement.querySelectorAll("[data-column-id]")
    ).reduce((result, cell) => {
      const columnId = cell.dataset.columnId;

      if (columnId) {
        result.set(
          columnId,
          Math.max(result.get(columnId) ?? 0, Math.ceil(cell.scrollWidth))
        );
      }

      return result;
    }, new Map<string, number>());

    table.setColumnSizing(current => {
      const next = { ...current };
      let changed = false;

      table.getVisibleLeafColumns().forEach(column => {
        const measuredWidth = widths.get(column.id);
        const initialWidth = measuredWidth
          ? measuredWidth + columnWidthPadding
          : undefined;

        if (
          initialWidth &&
          current[column.id] === undefined &&
          initialWidth > column.getSize()
        ) {
          next[column.id] = initialWidth;
          changed = true;
        }
      });

      return changed ? next : current;
    });
  }, [columnIds, enabled, table, tableRef]);
};

export function DataTable<TData extends RowData>({
  options,
  pageSize = 100,
  resizable = false,
  reorderable = false,
  variant = "standard",
  rowActions,
  onRowAction,
  ...rest
}: DataTableProps<TData>) {
  const card = variant === "card";
  const [data] = useState<TData[]>(() => [...options.data]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    () => options.initialState?.columnOrder ?? []
  );
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const [dropColumn, setDropColumn] = useState<string | null>(null);
  const [hoveredResizer, setHoveredResizer] = useState<string | null>(null);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize:
      isNumber(pageSize) && pageSize > 0
        ? Math.min(pageSize, data.length)
        : Math.min(100, data.length)
  });
  const tableRef = useContentSizedColumns(!resizable);
  const rowSelectionEnabled =
    options.enableRowSelection !== undefined &&
    options.enableRowSelection !== false;

  const columns = useMemo(
    () => [
      ...(rowSelectionEnabled ? [getSelectionColumn<TData>()] : []),
      ...options.columns.map(column => ({
        filterFn: getDefaultFilterFn<TData>(column.meta?.facetFn),
        ...column
      })),
      ...(rowActions ? [getActionsColumn(rowActions, onRowAction)] : [])
    ],
    [options.columns, rowSelectionEnabled, rowActions, onRowAction]
  );

  const handleRowSelectionChange = useCallback<OnChangeFn<RowSelectionState>>(
    updater => {
      setRowSelection(updater);
      options.onRowSelectionChange?.(updater);
    },
    [options.onRowSelectionChange]
  );

  // const columnHelper = useMemo(() => createColumnHelper<TData>(), []);

  const table = useReactTable<TData>({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    manualPagination: false,
    columnResizeMode: "onChange",
    ...options,
    state: {
      sorting,
      columnFilters,
      columnOrder,
      pagination,
      rowSelection,
      ...options.state
    },
    onRowSelectionChange: handleRowSelectionChange,
    enableRowSelection: rowSelectionEnabled
      ? options.enableRowSelection
      : false,
    enableColumnResizing: resizable,
    columns,
    data
  });

  useInitialContentSizedColumns(tableRef, table, resizable);

  const leafColumnIds = table.getVisibleLeafColumns().map(column => column.id);
  const isReorderable = (column: Column<TData>) =>
    reorderable &&
    column.columns.length === 0 &&
    column.id !== SELECTION_COLUMN_ID &&
    column.id !== ACTIONS_COLUMN_ID;

  const handleColumnDragEnd = () => {
    setDraggedColumn(null);
    setDropColumn(null);
  };

  const handleColumnDrop = (targetId: string) => {
    if (draggedColumn && draggedColumn !== targetId) {
      table.setColumnOrder(() => {
        const ids = table.getAllLeafColumns().map(column => column.id);
        const next = ids.filter(id => id !== draggedColumn);
        // Taking the target's old index lands the column past it in the
        // direction it was dragged.
        next.splice(ids.indexOf(targetId), 0, draggedColumn);

        return next;
      });
    }

    handleColumnDragEnd();
  };

  const headerGroups = table.getHeaderGroups();
  const tableRows = table.getRowModel().rows;
  const pageCount = table.getPageCount();
  const selectedCount = Object.keys(table.getState().rowSelection).length;

  return (
    <DataTableContext.Provider
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      pagination={pagination}
      setPagination={setPagination}>
      <YStack gap="3xl">
        <Table
          ref={tableRef as any}
          width={resizable ? table.getTotalSize() : "100%"}
          maxWidth="none"
          alignCells={{ x: "start", y: "center" }}
          alignHeaderCells={{ x: "start", y: "center" }}
          {...{ sizing: "content" }}
          {...rest}
          style={
            [
              rest.style,
              {
                borderCollapse: "separate",
                borderSpacing: card
                  ? `0 ${getVariableValue(getTokens().space["2xl"])}px`
                  : 0
              },
              resizable
                ? {
                    tableLayout: "fixed",
                    width: table.getTotalSize()
                  }
                : undefined
            ] as any
          }>
          <Table.Header>
            {headerGroups.map(headerGroup => {
              return (
                <Table.Row key={headerGroup.id} header={true}>
                  {headerGroup.headers.map((header, index) => (
                    <Table.HeaderCell
                      key={header.id}
                      position="relative"
                      edgePadding={
                        index === 0 && index === headerGroup.headers.length - 1
                          ? "both"
                          : index === 0
                            ? "start"
                            : index === headerGroup.headers.length - 1
                              ? "end"
                              : undefined
                      }
                      {...(card
                        ? getCardCellProps(index, headerGroup.headers.length)
                        : {})}
                      // Match the body cells so the checkboxes line up.
                      {...(header.column.id === SELECTION_COLUMN_ID
                        ? { paddingLeft: "xl", paddingRight: "xl" }
                        : {})}
                      {...(isReorderable(header.column)
                        ? ({
                            cursor: "grab",
                            ...(draggedColumn === header.column.id
                              ? { opacity: 0.5 }
                              : {}),
                            draggable: true,
                            onDragStart: (event: any) => {
                              event.dataTransfer.effectAllowed = "move";
                              // Firefox won't start a drag without data.
                              event.dataTransfer.setData(
                                "text/plain",
                                header.column.id
                              );
                              setDraggedColumn(header.column.id);
                            },
                            onDragOver: (event: any) => {
                              // Ignore drags that didn't start on a header.
                              if (draggedColumn) {
                                event.preventDefault();
                                setDropColumn(header.column.id);
                              }
                            },
                            onDrop: (event: any) => {
                              event.preventDefault();
                              handleColumnDrop(header.column.id);
                            },
                            onDragEnd: handleColumnDragEnd
                          } as any)
                        : {})}
                      style={
                        resizable
                          ? ({ width: header.getSize() } as any)
                          : undefined
                      }
                      {...({
                        colSpan: header.colSpan,
                        ...(header.colSpan === 1
                          ? { "data-column-id": header.column.id }
                          : {})
                      } as any)}
                      group="header">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {resizable && header.column.getCanResize() && (
                        <View
                          role="separator"
                          aria-label={`Resize ${header.column.id} column`}
                          aria-orientation="vertical"
                          position="absolute"
                          top={0}
                          right={0}
                          bottom={0}
                          width="2xl"
                          zIndex="20"
                          cursor="col-resize"
                          userSelect="none"
                          // Web-only CSS property that is not a Tamagui style prop.
                          style={{ touchAction: "none" } as any}
                          data-column-resizer={header.column.id}
                          onDoubleClick={() => header.column.resetSize()}
                          onMouseEnter={() => setHoveredResizer(header.id)}
                          onMouseLeave={() => setHoveredResizer(null)}
                          onMouseDown={(event: any) => {
                            // Keeps a draggable header from starting a drag.
                            event.preventDefault();
                            header.getResizeHandler()(event);
                          }}
                          onTouchStart={header.getResizeHandler()}>
                          <View
                            position="absolute"
                            top="xl"
                            left="50%"
                            marginLeft={-1}
                            bottom="xl"
                            borderWidth={0}
                            borderRightWidth={1}
                            borderStyle="dashed"
                            borderRightColor={
                              header.column.getIsResizing()
                                ? "subtle"
                                : hoveredResizer === header.id
                                  ? "subtle"
                                  : "transparent"
                            }
                          />
                        </View>
                      )}
                      {draggedColumn &&
                        dropColumn === header.column.id &&
                        dropColumn !== draggedColumn && (
                          <View
                            position="absolute"
                            top="xl"
                            bottom="xl"
                            {...(leafColumnIds.indexOf(draggedColumn) <
                            leafColumnIds.indexOf(dropColumn)
                              ? { right: 0 }
                              : { left: 0 })}
                            borderWidth={0}
                            borderLeftWidth={1}
                            borderStyle="dashed"
                            borderLeftColor="subtle"
                            pointerEvents="none"
                          />
                        )}
                    </Table.HeaderCell>
                  ))}
                </Table.Row>
              );
            })}
          </Table.Header>
          <Table.Body>
            {tableRows.map(row => {
              const cells = row.getVisibleCells();

              return (
                <Table.Row
                  key={row.id}
                  aria-selected={row.getIsSelected()}
                  // An explicit `undefined` would wipe the row's hover background.
                  // Cards paint the cells instead; a row background would show
                  // square behind their rounded corners.
                  {...(card
                    ? { backgroundColor: "transparent" }
                    : row.getIsSelected()
                      ? { backgroundColor: "surfaceActive" }
                      : {})}>
                  {cells.map((cell, index) => (
                    <Table.Cell
                      key={cell.id}
                      {...(card
                        ? {
                            ...getCardCellProps(index, cells.length),
                            transition: "200ms",
                            backgroundColor: row.getIsSelected()
                              ? "surfaceActive"
                              : "surface group-hover/row:surfaceHovered"
                          }
                        : {})}
                      style={
                        resizable
                          ? ({ width: cell.column.getSize() } as any)
                          : undefined
                      }
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
                  {...(card ? getCardCellProps(0, 1) : {})}
                  {...({
                    colSpan: table.getVisibleLeafColumns().length
                  } as any)}>
                  <View
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    padding="7xl">
                    <LabelText size="6xl">No data to display</LabelText>
                  </View>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          {pageSize && (
            <Table.Footer>
              <Table.Row header={true}>
                <Table.Cell
                  borderBottomWidth={0}
                  paddingTop="3xl"
                  {...(card
                    ? { ...getCardCellProps(0, 1), paddingVertical: "xl" }
                    : {})}
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
                    selectedCount={selectedCount}
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
    <BodyText transition="200ms" color="ink group-hover/row:inkActive">
      {value}
    </BodyText>
  );
};

const SEARCH_FIELD_NAME = "__search";
const SELECT_ALL_FIELD_NAME = "__selectAll";

const DataTableHeaderFilterFields = <_TData extends RowData, _TValue = any>({
  valuesMap = new Map(),
  onSearchChange,
  onFilterChange,
  filterValues,
  selectAll
}: {
  valuesMap: Map<string, { value: any; count: number }>;
  onSearchChange: (context: CallbackContext<FieldAtoms<string>>) => void;
  onFilterChange: (name: string, checked: boolean) => void;
  filterValues: any[];
  selectAll: boolean | "indeterminate";
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
    [onSearchChange, valuesMap]
  );

  const handleFilterChange = useCallback(
    (name: string, checked: boolean | "indeterminate") => {
      onFilterChange(name, checked === true);
    },
    [onFilterChange]
  );

  return (
    <View width="max-content" minWidth="100%" maxWidth="100%">
      <HeadingSmallText
        aria-hidden={true}
        height={0}
        overflow="hidden"
        opacity={0}
        pointerEvents="none"
        paddingRight="9xl"
        maxWidth="100%"
        whiteSpace="pre">
        {intrinsicFilterLabels}
      </HeadingSmallText>

      <YStack gap="xl">
        <Field name={SEARCH_FIELD_NAME} size="sm" onChange={handleSearchChange}>
          <SearchInput>
            <SearchInput.TextBox placeholder="Filter..." />
          </SearchInput>
        </Field>

        <Popover.Content.ScrollView size="lg" maxHeight="30xl">
          <YStack gap="xl" width="100%" minWidth="28xl" padding="xl">
            <Field name={SELECT_ALL_FIELD_NAME}>
              <XStack gap="xl" alignItems="center" justifyContent="flex-start">
                <Checkbox
                  size="sm"
                  checked={selectAll}
                  onCheckedChange={checked =>
                    handleFilterChange(SELECT_ALL_FIELD_NAME, checked)
                  }
                />
                <Field.Label>{"(Select All)"}</Field.Label>
              </XStack>
            </Field>

            {searchResults.map(searchResult => (
              <Field key={searchResult} name={searchResult}>
                <XStack
                  gap="xl"
                  alignItems="center"
                  justifyContent="flex-start">
                  <Checkbox
                    size="sm"
                    checked={!filterValues.includes(searchResult)}
                    onCheckedChange={checked =>
                      handleFilterChange(searchResult, checked)
                    }
                  />
                  <Field.Label>{`${searchResult} (${valuesMap.get(searchResult)?.count ?? 0})`}</Field.Label>
                </XStack>
              </Field>
            ))}
          </YStack>
        </Popover.Content.ScrollView>
      </YStack>
    </View>
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
        const key = getFacetKey(value, meta?.facetFn);
        ret.set(key, {
          value,
          count: (ret.get(key)?.count ?? 0) + facetedUniqueValues.get(value)
        });

        return ret;
      }, new Map());
  }, [column, meta]);

  const selectAll =
    filterValues.length === 0
      ? true
      : filterValues.length === valuesMap.size
        ? false
        : "indeterminate";

  const handleFilterChange = useCallback(
    (name: string, checked: boolean) => {
      if (name === SELECT_ALL_FIELD_NAME) {
        setFilterValue(checked ? [] : Array.from(valuesMap.keys()));
        return;
      }

      if (!valuesMap.has(name)) {
        return;
      }

      setFilterValue((current: unknown) => {
        const filterValues = (current ?? []) as string[];

        return checked
          ? filterValues.filter(filterValue => filterValue !== name)
          : filterValues.includes(name)
            ? filterValues
            : [...filterValues, name];
      });
    },
    [setFilterValue, valuesMap]
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
        [key]: !filterValues.includes(key)
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
  }, [currentSearch, filterValues, valuesMap]);

  return (
    <XStack
      group={"header"}
      flexGrow={1}
      gap="3xl"
      justifyContent="space-between"
      alignItems="center"
      paddingRight="3xl">
      <XStack gap="xl" flexShrink={0} cursor="pointer" onPress={handleSorting}>
        <DataTableColumnHeading
          transition="200ms"
          color="emphasis group-hover/header:emphasisHovered">
          {titleCase(id)}
        </DataTableColumnHeading>
        {isSorted && !desc && (
          <XStack gap="xxs" alignItems="center">
            <SortAscending size="4xl" color="emphasis" />
            <DataTableColumnHeading
              transition="200ms"
              fontWeight={600}
              color="emphasis">
              {sortIndex + 1}
            </DataTableColumnHeading>
          </XStack>
        )}
        {isSorted && desc && (
          <XStack gap="xxs" alignItems="center">
            <SortDescending size="4xl" color="emphasis" />
            <DataTableColumnHeading
              transition="200ms"
              fontWeight={600}
              color="emphasis">
              {sortIndex + 1}
            </DataTableColumnHeading>
          </XStack>
        )}
      </XStack>

      {column.getCanFilter() && (
        <View
          transition="200ms"
          flexShrink={0}
          paddingRight="3xl"
          opacity={`${filterValues.length > 0 ? 1 : 0} group-hover/header:1`}>
          <Popover allowFlip={true}>
            <Popover.Trigger asChild={true}>
              <Button
                theme="base"
                variant="ghost"
                circular={true}
                noPadding={true}
                size="6xl"
                padding="lg">
                <Button.Icon>
                  <Funnel size="2xl" />
                </Button.Icon>
              </Button>
            </Popover.Trigger>

            <Popover.Content
              width="max-content"
              minWidth="30xl"
              maxWidth="90vw"
              padding="xl">
              <Form name={`${id}_filter`} initialValues={initialValues}>
                <DataTableHeaderFilterFields
                  valuesMap={valuesMap}
                  onSearchChange={handleSearchChange}
                  onFilterChange={handleFilterChange}
                  filterValues={filterValues}
                  selectAll={selectAll}
                />
              </Form>
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
    selectedCount: number;
  };

export function DataTablePagination<TData extends RowData>({
  setPageIndex,
  nextPage,
  previousPage,
  firstPage,
  lastPage,
  totalCount,
  unfilteredCount,
  selectedCount,
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
      group="header"
      flexGrow={1}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="xl">
      <View flex={1}>
        <XStack alignItems="center" gap="xl">
          <View width="30xl" flexShrink={0}>
            <Form
              name="pageSizing"
              initialValues={{
                pageSize
              }}>
              <View width="30xl">
                <Field
                  name="pageSize"
                  items={pageSizes}
                  size="sm"
                  onChange={handlePageSizeChange}>
                  <XStack alignItems="center" gap="3xl">
                    <Field.Label variant="above" flexShrink={0}>
                      Per page:
                    </Field.Label>
                    <View width="18xl" flexShrink={0}>
                      <Select />
                    </View>
                  </XStack>
                </Field>
              </View>
            </Form>
          </View>

          <YStack gap="xs" justifyContent="center">
            <LabelText size="xs">
              {`${unfilteredCount > 0 ? pageIndex * pageSize + 1 : 0}-${Math.min((pageIndex + 1) * pageSize, unfilteredCount)} of ${unfilteredCount} ${unfilteredCount === 1 ? "row" : "rows"}${selectedCount > 0 ? ` (${selectedCount} Selected)` : ""}`}
            </LabelText>
            {unfilteredCount !== totalCount && (
              <XStack
                justifyContent="space-between"
                alignItems="center"
                gap="xl">
                <LabelText size="xs">Filtering:</LabelText>
                <LabelText size="xs">
                  {`${totalCount - unfilteredCount} ${totalCount - unfilteredCount === 1 ? "row" : "rows"}`}
                </LabelText>
              </XStack>
            )}
          </YStack>
        </XStack>
      </View>

      {pageCount > 1 && (
        <Pagination
          hideText={true}
          size="sm"
          buttonWidth="9xl"
          pageIndex={pageIndex}
          pageCount={pageCount}
          setPageIndex={setPageIndex}
          onNext={nextPage}
          onPrevious={previousPage}
          onFirst={firstPage}
          onLast={lastPage}
        />
      )}
    </XStack>
  );
}
