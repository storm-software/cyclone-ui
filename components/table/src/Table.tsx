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

import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { ThemeableStack } from "@tamagui/stacks";

export type AlignCells = {
  y: "center" | "start" | "end";
  x: "center" | "start" | "end";
};

export type AlignHeaderCells = AlignCells;

const TableContext = createStyledContext<{
  cellWidth: SizeTokens | number;
  cellHeight: SizeTokens | number;
  alignHeaderCells: {
    y: "center" | "start" | "end";
    x: "center" | "start" | "end";
  };
  alignCells: {
    y: "center" | "start" | "end";
    x: "center" | "start" | "end";
  };
  borderColor: string;
}>({
  cellWidth: "$8",
  cellHeight: "$8",
  alignHeaderCells: { x: "start", y: "center" },
  alignCells: { x: "center", y: "center" },
  borderColor: "$borderColor"
});

export const TABLE_NAME = "Table";
export const TABLE_HEADER_NAME = "TableHeader";

const TableRow = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  tag: "tr",

  flexDirection: "row",
  borderWidth: 0,
  borderColor: "$borderColor",
  borderStyle: "solid",
  justifyContent: "flex-start",
  position: "relative",
  backgroundColor: "transparent",
  paddingHorizontal: "$2",

  hoverStyle: {
    backgroundColor: "transparent"
  },

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  variants: {
    header: {
      false: {
        borderBottomWidth: 1
      }
    }
  },

  defaultVariants: {
    header: false
  }
});

const TableRowImpl = TableRow.styleable(
  ({ children, header = false, ...props }, forwardRef) => {
    return (
      <TableRow
        ref={forwardRef}
        group={"row" as any}
        header={header}
        position="relative"
        {...props}>
        <ThemeableStack
          fullscreen={true}
          animation="normal"
          opacity={0}
          backgroundColor="$primary"
          $group-row-hover={{
            opacity: header ? 0 : 0.1
          }}
          style={{
            filter: "blur(1px)"
          }}
        />
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

  tag: "td",

  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  justifyContent: "flex-start",
  paddingHorizontal: "$2",

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
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
    }
  } as const
});

const TableHeaderCell = styled(ThemeableStack, {
  name: TABLE_HEADER_NAME,
  context: TableContext,

  tag: "th",

  zIndex: 10,
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  justifyContent: "flex-start",
  paddingHorizontal: "$2",

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
    }
  } as const
});

const TableBody = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  tag: "tbody",

  flexDirection: "column",
  flexShrink: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1
});

const TableHeader = styled(ThemeableStack, {
  name: TABLE_NAME,
  context: TableContext,

  tag: "thead",

  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 1,
  borderTopLeftRadius: "$true",
  borderTopRightRadius: "$true",
  overflow: "hidden"
});

const TableHeaderImpl = TableHeader.styleable(
  ({ children, ...props }, forwardRef) => {
    return (
      <TableHeader ref={forwardRef} position="relative" {...props}>
        <ThemeableStack
          fullscreen={true}
          animation="fast"
          opacity={0.05}
          backgroundColor="$primary"
          style={{
            filter: "blur(1px)"
          }}
        />
        <View paddingVertical="$2.5">{children}</View>
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

  tag: "tfoot",

  flexDirection: "column",
  flexShrink: 1,
  borderWidth: 1,
  borderTopWidth: 0,
  borderBottomLeftRadius: "$true",
  borderBottomRightRadius: "$true",
  overflow: "hidden"
});

const TableFooterImpl = TableFooter.styleable(
  ({ children, ...props }, forwardRef) => {
    return (
      <TableFooter ref={forwardRef} position="relative" {...props}>
        <ThemeableStack
          fullscreen={true}
          animation="fast"
          opacity={0.05}
          backgroundColor="$primary"
          style={{
            filter: "blur(1px)"
          }}
        />
        <View paddingVertical="$2.5">{children}</View>
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

  tag: "table",
  backgrounded: false,

  borderWidth: 0,
  maxWidth: "100%",
  overflow: "hidden",

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

    alignHeaderCells: val => ({}),
    alignCells: val => ({})
  }
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
