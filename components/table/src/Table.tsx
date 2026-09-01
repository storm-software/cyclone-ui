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
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { ThemeableStack } from "@tamagui/stacks";

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

const TableContext = createStyledContext<TableContextProps>({
  cellWidth: "$10xl",
  cellHeight: "$10xl",
  sizing: "fixed",
  alignHeaderCells: { x: "start", y: "center" },
  alignCells: { x: "center", y: "center" },
  borderColor: "$border"
});

export const TABLE_NAME = "Table";
export const TABLE_HEADER_NAME = "TableHeader";

const TableRow = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "tr",

  flexDirection: "row",
  borderWidth: 0,
  borderColor: "$border",
  borderStyle: "solid",
  justifyContent: "flex-start",
  position: "relative",
  backgroundColor: "transparent",
  paddingHorizontal: "$xl",
  boxShadow: "none",

  hoverStyle: {
    backgroundColor: "transparent"
  },

  focusVisibleStyle: {
    boxShadow: "$ring",
    borderColor: "$borderFocused"
  },

  variants: {
    header: {
      false: {
        borderBottomWidth: 1
      }
    },

    sizing: {
      content: {
        "$platform-web": {
          display: "table-row" as any
        },
        hoverStyle: {
          backgroundColor: "$backgroundPageHover"
        }
      }
    }
  },

  defaultVariants: {
    header: false
  }
});

const TableRowImpl = TableRow.styleable(
  ({ children, header = false, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();

    return (
      <TableRow
        ref={forwardRef}
        group={"row" as any}
        header={header}
        position="relative"
        {...props}>
        {sizing === "fixed" && (
          <ThemeableStack
            fullscreen={true}
            pointerEvents="none"
            transition="200ms"
            opacity={0}
            backgroundColor="$backgroundPageHover"
            $group-row-hover={{
              opacity: header ? 0 : 1
            }}
            style={{
              filter: "blur(1px)"
            }}
          />
        )}
        {children}
      </TableRow>
    );
  },
  {
    staticConfig: { componentName: TABLE_NAME }
  }
);

const TableCell = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "td",

  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "$border",
  justifyContent: "flex-start",
  paddingHorizontal: "$xl",
  boxShadow: "none",

  focusVisibleStyle: {
    borderColor: "$borderFocused",
    boxShadow: "$ring"
  },

  variants: {
    cellWidth: {
      "...size": (name, { tokens }) => {
        return {
          width: tokens.size[name]
        };
      }
    },

    cellHeight: {
      "...size": (name, { tokens }) => {
        return {
          minHeight: tokens.size[name]
        };
      }
    },

    alignCells: (val: AlignCells) => {
      return {
        alignItems: val.y === "center" ? "center" : `flex-${val.y}`,
        justifyContent: val.x === "center" ? "center" : `flex-${val.x}`
      };
    },

    sizing: {
      content: {
        "$platform-web": {
          display: "table-cell" as any,
          minHeight: "auto",
          paddingVertical: "$xl",
          paddingHorizontal: "$xl",
          width: "auto"
        }
      }
    }
  } as const
});

const TableHeaderCell = styled(ThemeableStack, {
  name: TABLE_HEADER_NAME,
  context: TableContext,

  render: "th",

  zIndex: "$10",
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "$border",
  justifyContent: "flex-start",
  padding: "$4xl",

  variants: {
    cellWidth: {
      "...size": (name, { tokens }) => {
        return {
          width: tokens.size[name]
        };
      }
    },

    alignHeaderCells: (val: AlignHeaderCells) => {
      return {
        alignItems: val.y === "center" ? "center" : `flex-${val.y}`,
        justifyContent: val.x === "center" ? "center" : `flex-${val.x}`
      };
    },

    sizing: {
      content: {
        "$platform-web": {
          display: "table-cell" as any,
          padding: "$4xl",
          width: "auto"
        }
      }
    }
  } as const
});

const TableBody = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "tbody",

  flexDirection: "column",
  flexShrink: 1,

  variants: {
    sizing: {
      content: {
        "$platform-web": {
          display: "table-row-group" as any
        }
      }
    }
  } as const
});

const TableHeader = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "thead",

  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "$border",
  borderTopLeftRadius: "$container",
  borderTopRightRadius: "$container",
  overflow: "hidden",
  backgroundColor: "$backgroundElevated",

  variants: {
    sizing: {
      content: {
        "$platform-web": {
          display: "table-header-group" as any
        }
      }
    }
  } as const
});

const TableHeaderImpl = TableHeader.styleable(
  ({ children, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();

    return (
      <TableHeader ref={forwardRef} position="relative" {...props}>
        {sizing === "content" ? (
          children
        ) : (
          <View paddingVertical="$2xl">{children}</View>
        )}
      </TableHeader>
    );
  },
  {
    staticConfig: { componentName: TABLE_NAME }
  }
);

const TableFooter = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "tfoot",

  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 0,
  borderBottomLeftRadius: "$container",
  borderBottomRightRadius: "$container",
  overflow: "hidden",
  backgroundColor: "$backgroundElevated",

  variants: {
    sizing: {
      content: {
        "$platform-web": {
          display: "table-footer-group" as any
        }
      }
    }
  } as const
});

const TableFooterImpl = TableFooter.styleable(
  ({ children, ...props }, forwardRef) => {
    const { sizing } = TableContext.useStyledContext();

    return (
      <TableFooter ref={forwardRef} position="relative" {...props}>
        {sizing === "content" ? (
          children
        ) : (
          <View paddingVertical="$2xl">{children}</View>
        )}
      </TableFooter>
    );
  },
  {
    staticConfig: { componentName: TABLE_NAME }
  }
);

const TableFrame = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  render: "table",

  borderWidth: 1,
  borderColor: "$border",
  borderRadius: "$container",
  borderStyle: "solid",
  maxWidth: "100%",
  overflow: "hidden",
  style: {
    borderCollapse: "separate",
    borderSpacing: 0
  },

  variants: {
    cellWidth: {
      "...size": () => {
        return {};
      }
    },

    cellHeight: {
      "...size": () => {
        return {};
      }
    },

    alignHeaderCells: _val => ({}),
    alignCells: _val => ({}),

    sizing: {
      fixed: {},
      content: {
        width: "max-content",
        "$platform-web": {
          display: "table" as any
        }
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
