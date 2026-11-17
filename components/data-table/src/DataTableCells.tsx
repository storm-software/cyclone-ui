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

"use client";

import type { AvatarProps } from "@cyclone-ui/avatar";
import { Avatar } from "@cyclone-ui/avatar";
import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { CopyButton } from "@cyclone-ui/copy-button";
import { Watch } from "@cyclone-ui/icons";
import { TableCellText, TableEmptyCell } from "@cyclone-ui/table";
import { XStack, YStack } from "@tamagui/stacks";
import type { ColumnDef, Row, RowData } from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface DataTableAvatarCellProps extends AvatarProps {
  /**
   * The person's (or item's) name, shown beside the avatar and used for its
   * fallback initials
   */
  name: string;

  /**
   * A second, muted line under the name, such as an email or a username
   */
  description?: ReactNode;
}

/**
 * An avatar beside a name and an optional second line. Other props (such as
 * `src`, `size` and `status`) go to the `Avatar`.
 */
export const DataTableAvatarCell = ({
  name,
  description,
  ...props
}: DataTableAvatarCellProps) => (
  <XStack alignItems="center" gap="2xl">
    {/* Hidden from screen readers, which read the name beside it. */}
    <Avatar size="sm" name={name} aria-hidden={true} {...props} />
    <YStack>
      <TableCellText>{name}</TableCellText>
      {description != null && (
        <TableCellText size="sm" color="subtle">
          {description}
        </TableCellText>
      )}
    </YStack>
  </XStack>
);

export interface DataTableCopyCellProps {
  /**
   * The text copied. A missing value shows a `TableEmptyCell`.
   */
  value?: string | number | null;

  /**
   * What the cell shows, instead of `value`
   */
  children?: ReactNode;
}

/**
 * A value with a button that copies it, such as an ID or an email address.
 */
export const DataTableCopyCell = ({
  value,
  children
}: DataTableCopyCellProps) => {
  if (value == null || value === "") {
    return <TableEmptyCell />;
  }

  return (
    <XStack alignItems="center" gap="md">
      <TableCellText>{children ?? value}</TableCellText>
      <CopyButton
        value={String(value)}
        theme="base"
        ghostOpacity={0.4}
        tight={true}
        size="6xl"
        padding="lg"
        color="subtle"
        aria-label={`Copy ${value}`}
      />
    </XStack>
  );
};

export interface DataTableViewButtonProps<TData extends RowData> extends Omit<
  ButtonProps,
  "children" | "href" | "onPress"
> {
  /**
   * The row the button opens
   */
  row: Row<TData>;

  /**
   * Called with the row's data (and the row) when pressed, for example to
   * open a drawer or a modal with its details
   */
  onView?: (data: TData, row: Row<TData>) => void;

  /**
   * The row's detail page, which renders the button as a link
   */
  href?: string | ((data: TData, row: Row<TData>) => string);

  /**
   * The button's text, or its tooltip when `iconOnly`. Screen readers hear it
   * with the row number, such as "View row 2".
   *
   * @defaultValue "View"
   */
  label?: string;

  /**
   * @defaultValue an eye icon
   */
  icon?: ReactNode;

  /**
   * Show only the icon, as a round button
   *
   * @defaultValue false
   */
  iconOnly?: boolean;
}

const DEFAULT_VIEW_ICON = <Watch size="2xl" animated={false} />;

/**
 * A button that opens a row's detail view, by calling `onView` with the row's
 * data or by linking to its `href`. Change `label` and `icon` for other row
 * buttons, such as Edit.
 */
export function DataTableViewButton<TData extends RowData>({
  row,
  onView,
  href,
  label = "View",
  icon = DEFAULT_VIEW_ICON,
  iconOnly = false,
  ...props
}: DataTableViewButtonProps<TData>) {
  const url = typeof href === "function" ? href(row.original, row) : href;

  return (
    <Button
      theme="base"
      variant="ghost"
      ghostOpacity={0.4}
      color="primary"
      flexGrow={0}
      {...(iconOnly
        ? { circular: true, tight: true, size: "6xl", padding: "lg" }
        : { size: "sm" })}
      {...(url ? { render: "a", href: url } : {})}
      aria-label={`${label} row ${row.index + 1}`}
      tooltip={iconOnly ? label : undefined}
      onPress={() => onView?.(row.original, row)}
      {...props}>
      <Button.Icon>{icon}</Button.Icon>
      {!iconOnly && <Button.Text>{label}</Button.Text>}
    </Button>
  );
}

export interface DataTableViewColumnOptions<TData extends RowData> extends Omit<
  DataTableViewButtonProps<TData>,
  "row"
> {
  /**
   * The column's id
   *
   * @defaultValue "view"
   */
  id?: string;
}

/**
 * A column of `DataTableViewButton`s, one per row, with no header, sorting,
 * filtering or resizing.
 *
 * @example
 * ```tsx
 * const columns = [
 *   ...otherColumns,
 *   createDataTableViewColumn<User>({ onView: user => setSelected(user) })
 * ];
 * ```
 */
export const createDataTableViewColumn = <TData extends RowData>({
  id = "view",
  ...props
}: DataTableViewColumnOptions<TData>): ColumnDef<TData> => ({
  id,
  enableColumnFilter: false,
  enableResizing: false,
  enableSorting: false,
  header: () => null,
  cell: ({ row }) => <DataTableViewButton<TData> row={row} {...props} />
});
