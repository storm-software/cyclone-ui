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

import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { YStack } from "@tamagui/stacks";
import { Children, cloneElement, isValidElement } from "react";

export interface AlignCells {
  y: "center" | "start" | "end";
  x: "center" | "start" | "end";
}

export type AlignHeaderCells = AlignCells;

export type TableSizing = "fixed" | "content";

export interface TableContextProps {
  cellWidth: SizeTokens | number;
  cellHeight: SizeTokens | number;
  sizing: TableSizing;
  alignHeaderCells: {
    y: "center" | "start" | "end";
    x: "center" | "start" | "end";
  };
  alignCells: {
    y: "center" | "start" | "end";
    x: "center" | "start" | "end";
  };
  borderColor: string;
}

const TableContext = createStyledContext<
  TableContextProps,
  | "cellWidth"
  | "cellHeight"
  | "sizing"
  | "alignHeaderCells"
  | "alignCells"
  | "borderColor"
>(
  {
    cellWidth: "10xl",
    cellHeight: "10xl",
    sizing: "fixed",
    alignHeaderCells: { x: "start", y: "center" },
    alignCells: { x: "center", y: "center" },
    borderColor: "hairline"
  } as TableContextProps,
  {
    keys: [
      "cellWidth",
      "cellHeight",
      "sizing",
      "alignHeaderCells",
      "alignCells",
      "borderColor"
    ]
  }
);

export const TABLE_NAME = "Table";
export const TABLE_HEADER_NAME = "TableHeader";

const TableRow = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,
  render: "tr",
  flexDirection: "row",
  borderWidth: 0,
  borderColor: "hairline focus-visible:hairlineActive",
  borderStyle: "solid",
  justifyContent: "flex-start",
  position: "relative",
  backgroundColor: "transparent hover:transparent",
  paddingHorizontal: "xl",
  boxShadow: "none focus-visible:ringOffset",
  variants: {
    header: {
      false: {}
    },

    sizing: {
      content: {
        display: "web:table-row"
      }
    }
  },
  defaultVariants: {
    header: false
  }
});

const TableRowImpl = createStyledHOC(
  TableRow,
  ({ children, header = false, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();
    const rowChildren = header
      ? Children.toArray(children).map((child, index, childrenArray) => {
          if (
            !isValidElement<GetProps<typeof TableHeaderCell>>(child) ||
            child.type !== TableHeaderCell
          ) {
            return child;
          }

          // eslint-disable-next-line react/no-clone-element
          return cloneElement(child, {
            edgePadding:
              index === 0 && index === childrenArray.length - 1
                ? "both"
                : index === 0
                  ? "start"
                  : index === childrenArray.length - 1
                    ? "end"
                    : undefined
          });
        })
      : children;

    return (
      <TableRow
        ref={forwardRef}
        group={"row"}
        header={header}
        position="relative"
        // Variant/context hover clauses don't reach the row, so set it here.
        backgroundColor={
          header || sizing === "fixed"
            ? "transparent"
            : "transparent hover:surfaceElevated"
        }
        {...props}>
        {sizing === "fixed" && (
          <YStack
            position="absolute"
            inset={0}
            pointerEvents="none"
            transition="200ms"
            opacity={`0 group-hover/row:${header ? 0 : 1}`}
            backgroundColor="surfaceElevated"
            style={{
              filter: "blur(1px)"
            }}
          />
        )}
        {rowChildren}
      </TableRow>
    );
  },
  {
    displayName: TABLE_NAME
  }
);

const TableCell = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,
  render: "td",
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "hairline focus-visible:hairlineActive",
  justifyContent: "flex-start",
  paddingHorizontal: "xl",
  boxShadow: "none focus-visible:ringOffset",
  variants: {
    cellWidth: styled.dynamic<SizeTokens | number>((name, { tokens }) => {
      return {
        width: typeof name === "string" ? tokens.size[name] : undefined
      };
    }),

    cellHeight: styled.dynamic<SizeTokens | number>((name, { tokens }) => {
      return {
        minHeight: typeof name === "string" ? tokens.size[name] : undefined
      };
    }),

    alignCells: styled.dynamic<AlignCells>(val => {
      return {
        alignItems: val.y === "center" ? "center" : (`flex-${val.y}` as const),
        justifyContent:
          val.x === "center" ? "center" : (`flex-${val.x}` as const)
      };
    }),

    sizing: {
      content: {
        display: "web:table-cell",
        minHeight: "web:auto",
        paddingVertical: "web:xl",
        paddingHorizontal: "web:xl",
        width: "web:auto"
      }
    }
  } as const
});

const TableHeaderCell = styled(YStack, {
  displayName: TABLE_HEADER_NAME,
  context: TableContext,
  render: "th",
  zIndex: "10",
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "hairline",
  justifyContent: "flex-start",
  paddingVertical: "xl",
  paddingHorizontal: "sm",
  variants: {
    cellWidth: styled.dynamic<SizeTokens | number>((name, { tokens }) => {
      return {
        width: typeof name === "string" ? tokens.size[name] : undefined
      };
    }),

    alignHeaderCells: styled.dynamic<AlignHeaderCells>(val => {
      return {
        alignItems: val.y === "center" ? "center" : (`flex-${val.y}` as const),
        justifyContent:
          val.x === "center" ? "center" : (`flex-${val.x}` as const)
      };
    }),

    sizing: {
      content: {
        display: "web:table-cell",
        paddingVertical: "web:xl",
        paddingHorizontal: "web:2xl",
        width: "web:auto"
      }
    },

    edgePadding: {
      start: {
        paddingLeft: "web:4xl"
      },
      end: {
        paddingRight: "web:4xl"
      },
      both: {
        paddingHorizontal: "web:2xl"
      }
    }
  } as const
});

const TableBody = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,

  render: "tbody",

  flexDirection: "column",
  flexShrink: 1,

  variants: {
    sizing: {
      content: {
        display: "web:table-row-group"
      }
    }
  } as const
});

const TableHeader = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,
  render: "thead",
  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 0,
  variants: {
    sizing: {
      content: {
        display: "web:table-header-group"
      }
    }
  } as const
});

const TableHeaderImpl = createStyledHOC(
  TableHeader,
  ({ children, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();

    return (
      <TableHeader ref={forwardRef} position="relative" {...props}>
        {sizing === "content" ? (
          children
        ) : (
          <View paddingVertical="2xl">{children}</View>
        )}
      </TableHeader>
    );
  },
  {
    displayName: TABLE_NAME
  }
);

const TableFooter = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,
  render: "tfoot",
  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 0,
  variants: {
    sizing: {
      content: {
        display: "web:table-footer-group"
      }
    }
  } as const
});

const TableFooterImpl = createStyledHOC(
  TableFooter,
  ({ children, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();

    return (
      <TableFooter ref={forwardRef} position="relative" {...props}>
        {sizing === "content" ? (
          children
        ) : (
          <View paddingVertical="2xl">{children}</View>
        )}
      </TableFooter>
    );
  },
  {
    displayName: TABLE_NAME
  }
);

const TableFrame = styled(YStack, {
  displayName: TABLE_NAME,
  context: TableContext,
  render: "table",
  borderWidth: 0,
  maxWidth: "100%",
  overflow: "hidden",
  style: {
    borderCollapse: "separate",
    borderSpacing: 0
  },
  variants: {
    // Consumed only to feed `TableContext`; the cells style from it.
    cellWidth: styled.dynamic<SizeTokens | number>(),
    cellHeight: styled.dynamic<SizeTokens | number>(),
    alignHeaderCells: styled.dynamic<AlignHeaderCells>(),
    alignCells: styled.dynamic<AlignCells>(),

    sizing: {
      fixed: {},
      content: {
        width: "max-content",
        display: "web:table"
      }
    }
  } as const
});

export type TableProps = GetProps<typeof TableFrame>;

export const Table = withStaticProperties(TableFrame, {
  Header: TableHeaderImpl,
  Body: TableBody,
  Row: TableRowImpl,
  Cell: TableCell,
  HeaderCell: TableHeaderCell,
  Footer: TableFooterImpl
});
