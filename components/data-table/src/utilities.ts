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

import {
  getFacetedRowModel as getFacetedRowModelBase,
  getMemoOptions,
  memo,
  type Row,
  type RowData,
  type RowModel,
  type Table
} from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    facetFn?: (table: Table<TData>, columnId: string) => Map<string, number>;
  }
}

// export function filterRows<TData extends RowData>(
//   rows: Row<TData>[],
//   filterRowImpl: (row: Row<TData>) => any,
//   table: Table<TData>
// ) {
//   if (table.options.filterFromLeafRows) {
//     return filterRowModelFromLeafs(rows, filterRowImpl, table)
//   }

//   return filterRowModelFromRoot(rows, filterRowImpl, table)
// }

// function filterRowModelFromLeafs<TData extends RowData>(
//   rowsToFilter: Row<TData>[],
//   filterRow: (row: Row<TData>) => Row<TData>[],
//   table: Table<TData>
// ): RowModel<TData> {
//   const newFilteredFlatRows: Row<TData>[] = []
//   const newFilteredRowsById: Record<string, Row<TData>> = {}
//   const maxDepth = table.options.maxLeafRowFilterDepth ?? 100

//   const recurseFilterRows = (rowsToFilter: Row<TData>[], depth = 0) => {
//     const rows: Row<TData>[] = []

//     // Filter from children up first
//     for (let i = 0; i < rowsToFilter.length; i++) {
//       let row = rowsToFilter[i]!

//       const newRow = createRow(
//         table,
//         row.id,
//         row.original,
//         row.index,
//         row.depth,
//         undefined,
//         row.parentId
//       )
//       newRow.columnFilters = row.columnFilters

//       if (row.subRows?.length && depth < maxDepth) {
//         newRow.subRows = recurseFilterRows(row.subRows, depth + 1)
//         row = newRow

//         if (filterRow(row) && !newRow.subRows.length) {
//           rows.push(row)
//           newFilteredRowsById[row.id] = row
//           newFilteredFlatRows.push(row)
//           continue
//         }

//         if (filterRow(row) || newRow.subRows.length) {
//           rows.push(row)
//           newFilteredRowsById[row.id] = row
//           newFilteredFlatRows.push(row)
//           continue
//         }
//       } else {
//         row = newRow
//         if (filterRow(row)) {
//           rows.push(row)
//           newFilteredRowsById[row.id] = row
//           newFilteredFlatRows.push(row)
//         }
//       }
//     }

//     return rows
//   }

//   return {
//     rows: recurseFilterRows(rowsToFilter),
//     flatRows: newFilteredFlatRows,
//     rowsById: newFilteredRowsById,
//   }
// }

// function filterRowModelFromRoot<TData extends RowData>(
//   rowsToFilter: Row<TData>[],
//   filterRow: (row: Row<TData>) => any,
//   table: Table<TData>
// ): RowModel<TData> {
//   const newFilteredFlatRows: Row<TData>[] = []
//   const newFilteredRowsById: Record<string, Row<TData>> = {}
//   const maxDepth = table.options.maxLeafRowFilterDepth ?? 100

//   // Filters top level and nested rows
//   const recurseFilterRows = (rowsToFilter: Row<TData>[], depth = 0) => {
//     // Filter from parents downward first

//     const rows: Row<TData>[] = []

//     // Apply the filter to any subRows
//     for (let i = 0; i < rowsToFilter.length; i++) {
//       let row = rowsToFilter[i]!

//       const pass = filterRow(row)

//       if (pass) {
//         if (row.subRows?.length && depth < maxDepth) {
//           const newRow = createRow(
//             table,
//             row.id,
//             row.original,
//             row.index,
//             row.depth,
//             undefined,
//             row.parentId
//           )
//           newRow.subRows = recurseFilterRows(row.subRows, depth + 1)
//           row = newRow
//         }

//         rows.push(row)
//         newFilteredFlatRows.push(row)
//         newFilteredRowsById[row.id] = row
//       }
//     }

//     return rows
//   }

//   return {
//     rows: recurseFilterRows(rowsToFilter),
//     flatRows: newFilteredFlatRows,
//     rowsById: newFilteredRowsById,
//   }
// }

export function getFacetedRowModel<TData extends RowData>(): (
  table: Table<TData>,
  columnId: string
) => () => RowModel<TData> {
  return (table, columnId) =>
    memo(
      () => [
        table.getPreFilteredRowModel(),
        table.getState().columnFilters,
        table.getState().globalFilter,
        table.getFilteredRowModel()
      ],
      (preRowModel, columnFilters, globalFilter) => {
        if (
          !preRowModel.rows.length ||
          (!columnFilters?.length && !globalFilter)
        ) {
          return preRowModel;
        }

        const filterableIds = [
          ...columnFilters.map(d => d.id).filter(d => d !== columnId),
          globalFilter ? "__global__" : undefined
        ].filter(Boolean) as string[];

        const filterRowsImpl = (row: Row<TData>) => {
          // Horizontally filter rows through each column
          for (let i = 0; i < filterableIds.length; i++) {
            if (row.columnFilters[filterableIds[i]!] === false) {
              return false;
            }
          }
          return true;
        };

        return filterRows(preRowModel.rows, filterRowsImpl, table);
      },
      getMemoOptions(table.options, "debugTable", "getFacetedRowModel")
    );
}

const getFacetedRowModelBaseFn = <TData extends RowData>(
  table: ReactTable<TData>,
  columnId: string
) => getFacetedRowModelBase<TData>();

const getFacetedUniqueValues = <TData extends RowData>(
  table: ReactTable<TData>,
  columnId: string
) => {
  const uniqueValueMap = new Map<string, number>();

  const column = table.getColumn(columnId)!;
  const { facetFn } = column.columnDef.meta ?? {};

  facetFn?.(table, columnId);

  rows.forEach(row => {
    const value = row.values[columnId];
    if (uniqueValueMap.has(value)) {
      uniqueValueMap.set(value, uniqueValueMap.get(value) + 1);
    } else {
      uniqueValueMap.set(value, 1);
    }
  });

  return getFacetedRowModelBaseFn<TData>(table, columnId);
};
