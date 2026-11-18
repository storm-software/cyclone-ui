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

import { BodyText } from "@cyclone-ui/body-text";
import { Close, Confirm } from "@cyclone-ui/icons";
import type { ProgressProps } from "@cyclone-ui/progress";
import { Progress } from "@cyclone-ui/progress";
import type { GetProps, ThemeName } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { ReactNode } from "react";
import { formatRelativeTime } from "./utilities";

/**
 * Text for a custom cell: the body font, darkening with its row on hover
 * (like `DataTableCell`), on one line.
 */
export const TableCellText = styled(BodyText, {
  displayName: "TableCellText",
  render: "span",
  color: "ink group-hover/row:ink-active",
  whiteSpace: "nowrap"
});

export type TableCellTextProps = GetProps<typeof TableCellText>;

/**
 * The placeholder for a missing value: a muted dash, or the given text.
 */
export const TableEmptyCell = ({
  children = "—",
  ...props
}: TableCellTextProps) => (
  <TableCellText color="subtle" {...props}>
    {children}
  </TableCellText>
);

// A small rounded label, tinted with its theme's color. The text stays `ink`,
// which reads on the tint in every theme and mode.
const TablePill = styled(XStack, {
  displayName: "TablePill",
  render: "span",
  alignItems: "center",
  gap: "lg",
  width: "fit-content",
  paddingHorizontal: "2xl",
  paddingVertical: "md",
  borderRadius: 1000_000_000,
  borderWidth: 1,
  borderColor: "primary/30",
  backgroundColor: "primary/15"
});

const TablePillText = styled(BodyText, {
  displayName: "TablePill",
  render: "span",
  size: "sm",
  fontWeight: "medium",
  color: "ink",
  whiteSpace: "nowrap"
});

// Common statuses; unlisted ones keep the surrounding theme.
const STATUS_THEMES: Record<string, ThemeName> = {
  active: "success",
  approved: "success",
  complete: "success",
  completed: "success",
  online: "success",
  paid: "success",
  success: "success",
  info: "info",
  new: "info",
  processing: "info",
  paused: "warning",
  pending: "warning",
  warning: "warning",
  canceled: "danger",
  cancelled: "danger",
  declined: "danger",
  error: "danger",
  failed: "danger",
  overdue: "danger",
  rejected: "danger"
};

export interface TableStatusCellProps extends Omit<
  GetProps<typeof TablePill>,
  "children"
> {
  /**
   * The status, which picks the pill's color theme. A missing status shows a
   * `TableEmptyCell`.
   */
  status?: string | null;

  /**
   * The text shown, instead of the status itself
   */
  children?: ReactNode;

  /**
   * Color themes by status, checked before the defaults (such as `active` →
   * `success`, `pending` → `warning` and `failed` → `danger`, ignoring case).
   * Other statuses keep the surrounding theme.
   */
  themes?: Record<string, ThemeName>;
}

/**
 * A status pill: a dot and a label in the status's color theme.
 */
export const TableStatusCell = ({
  status,
  children,
  themes,
  theme,
  ...props
}: TableStatusCellProps) => {
  if (status == null || status === "") {
    return <TableEmptyCell />;
  }

  const key = status.toLowerCase();

  return (
    <TablePill
      theme={theme ?? themes?.[status] ?? themes?.[key] ?? STATUS_THEMES[key]}
      {...props}>
      <View
        render="span"
        width="sm"
        height="sm"
        borderRadius={1000_000_000}
        backgroundColor="primary"
      />
      <TablePillText>{children ?? status}</TablePillText>
    </TablePill>
  );
};

export interface TableBooleanCellProps {
  /**
   * The value. A missing value shows a `TableEmptyCell`.
   */
  value?: boolean | null;

  /**
   * `icon` draws a check or a cross (labelled for screen readers), `text`
   * writes the label
   *
   * @defaultValue "icon"
   */
  variant?: "icon" | "text";

  /**
   * @defaultValue "Yes"
   */
  trueLabel?: string;

  /**
   * @defaultValue "No"
   */
  falseLabel?: string;

  /**
   * Color both values, in the icon or the text: `true` in the `success`
   * theme and `false` in the `danger` theme. Otherwise only the check is
   * green, the cross is muted and the text keeps the cell color.
   *
   * @defaultValue false
   */
  colored?: boolean;
}

/**
 * A yes/no value: a check or a cross, or the matching label.
 */
export const TableBooleanCell = ({
  value,
  variant = "icon",
  trueLabel = "Yes",
  falseLabel = "No",
  colored = false
}: TableBooleanCellProps) => {
  if (value == null) {
    return <TableEmptyCell />;
  }

  const label = value ? trueLabel : falseLabel;
  const theme = value ? "success" : "danger";

  return variant === "text" ? (
    // Spread: an undefined `color` would drop the text's own color.
    <TableCellText {...(colored ? { theme, color: "primary" } : {})}>
      {label}
    </TableCellText>
  ) : (
    <View
      role="img"
      aria-label={label}
      theme={colored || value ? theme : undefined}>
      {value ? (
        <Confirm size="2xl" variant="bold" color="primary" animated={false} />
      ) : (
        <Close
          size="2xl"
          variant="bold"
          color={colored ? "primary" : "subtle"}
          animated={false}
        />
      )}
    </View>
  );
};

export interface TableNumberCellProps extends Omit<
  TableCellTextProps,
  "children"
> {
  /**
   * The number. A missing value (or `NaN`) shows a `TableEmptyCell`.
   */
  value?: number | bigint | null;

  /**
   * How to format it, such as `{ style: "currency", currency: "USD" }`,
   * `{ style: "percent" }` or `{ notation: "compact" }`
   */
  format?: Intl.NumberFormatOptions;

  /**
   * The locale to format in; the runtime's by default. Set it when rendering
   * on a server, so the client's first render matches.
   */
  locale?: string;
}

/**
 * A number formatted with `Intl.NumberFormat`, in tabular figures so the
 * digits line up down the column.
 */
export const TableNumberCell = ({
  value,
  format,
  locale,
  ...props
}: TableNumberCellProps) =>
  value == null || Number.isNaN(value) ? (
    <TableEmptyCell />
  ) : (
    <TableCellText fontVariant={["tabular-nums"]} {...props}>
      {new Intl.NumberFormat(locale, format).format(value)}
    </TableCellText>
  );

export interface TableDateCellProps extends Omit<
  TableCellTextProps,
  "children"
> {
  /**
   * The date, or a string or timestamp `Date` can parse. A missing or invalid
   * date shows a `TableEmptyCell`.
   */
  value?: Date | string | number | null;

  /**
   * How to format it
   *
   * @defaultValue \{ dateStyle: "medium" \}
   */
  format?: Intl.DateTimeFormatOptions;

  /**
   * Show the date relative to now instead, such as "3 days ago" or "in 2
   * hours" (`format` is ignored)
   *
   * @defaultValue false
   */
  relative?: boolean;

  /**
   * The locale to format in; the runtime's by default. Set it when rendering
   * on a server, so the client's first render matches.
   */
  locale?: string;
}

const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = { dateStyle: "medium" };

/**
 * A date (or date and time) formatted with `Intl`, absolute or relative.
 */
export const TableDateCell = ({
  value,
  format = DEFAULT_DATE_FORMAT,
  relative = false,
  locale,
  ...props
}: TableDateCellProps) => {
  const date = value == null ? undefined : new Date(value);

  if (!date || Number.isNaN(date.getTime())) {
    return <TableEmptyCell />;
  }

  return (
    <TableCellText fontVariant={["tabular-nums"]} {...props}>
      {relative
        ? formatRelativeTime(date, undefined, locale)
        : date.toLocaleString(locale, format)}
    </TableCellText>
  );
};

export interface TableProgressCellProps extends Omit<ProgressProps, "value"> {
  /**
   * The progress, from 0 to `max`. A missing value shows a `TableEmptyCell`.
   */
  value?: number | null;

  /**
   * Show the percentage after the bar
   *
   * @defaultValue true
   */
  showValue?: boolean;
}

/**
 * A progress bar with its percentage, such as a task's completion or a quota's
 * usage.
 */
export const TableProgressCell = ({
  value,
  max = 100,
  showValue = true,
  ...props
}: TableProgressCellProps) => {
  if (value == null || Number.isNaN(value)) {
    return <TableEmptyCell />;
  }

  // An out-of-range value would make the bar indeterminate.
  const clamped = Math.min(Math.max(value, 0), max);

  return (
    <XStack alignItems="center" gap="2xl" flexGrow={1}>
      <Progress
        size="sm"
        // Grows from its minimum width instead of taking the whole row (its
        // default), which pushed the percentage out of the cell.
        width={0}
        flexGrow={1}
        borderRadius={1000_000_000}
        {...props}
        value={clamped}
        max={max}
      />
      {showValue && (
        // Wide enough for "100%", so the bars line up down the column.
        <TableCellText
          size="sm"
          fontVariant={["tabular-nums"]}
          minWidth="9xl"
          textAlign="right">
          {`${Math.round((clamped / max) * 100) || 0}%`}
        </TableCellText>
      )}
    </XStack>
  );
};

export interface TableTagsCellProps {
  /**
   * The tags. None shows a `TableEmptyCell`.
   */
  tags?: readonly string[] | null;

  /**
   * The most tags shown; the rest collapse into a `+N` tag
   *
   * @defaultValue 3
   */
  max?: number;

  /**
   * Color themes by tag; tags keep the surrounding theme by default
   */
  themes?: Record<string, ThemeName>;
}

/**
 * A row of tags, such as roles or categories.
 */
export const TableTagsCell = ({
  tags,
  max = 3,
  themes
}: TableTagsCellProps) => {
  if (!tags?.length) {
    return <TableEmptyCell />;
  }

  const hidden = tags.length - max;

  return (
    <XStack alignItems="center" gap="lg">
      {tags.slice(0, max).map(tag => (
        <TablePill key={tag} theme={themes?.[tag]}>
          <TablePillText>{tag}</TablePillText>
        </TablePill>
      ))}
      {hidden > 0 && (
        <TablePill>
          <TablePillText>{`+${hidden}`}</TablePillText>
        </TablePill>
      )}
    </XStack>
  );
};
