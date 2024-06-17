import type { GetProps, SizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
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
  tag: "tr",
  context: TableContext,

  flexDirection: "row",
  borderWidth: 0,
  borderColor: "$color4",
  borderBottomWidth: 0.5,
  borderStyle: "solid",
  justifyContent: "flex-start",
  position: "relative",

  variants: {
    header: {
      true: {
        backgroundColor: "$background"
      }
    }
  },

  defaultVariants: {
    header: false
  }
});

const TableRowSelected = styled(LinearGradient, {
  name: TABLE_NAME,
  context: TableContext,

  fullscreen: true,
  opacity: 0,
  zIndex: 5,
  colors: ["transparent", "$color8"],
  start: [0, 0],
  end: [1.0, 1.0]
});

const TableRowImpl = TableRow.styleable(
  ({ children, header, ...rest }, forwardedRef) => {
    return (
      <TableRow
        {...rest}
        header={header}
        ref={forwardedRef}
        group={"row" as any}>
        <TableRowSelected
          animation="medium"
          $group-row-hover={{ opacity: header ? 0 : 0.1 }}
        />
        {children}
      </TableRow>
    );
  }
);

const TableCell = styled(ThemeableStack, {
  name: TABLE_NAME,
  tag: "td",
  context: TableContext,

  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  borderWidth: 0,
  justifyContent: "flex-start",

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
  tag: "th",
  context: TableContext,

  zIndex: 10,
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 1,
  paddingVertical: "$2",
  borderWidth: 0,
  justifyContent: "flex-start",
  backgroundColor: "$background",

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
  tag: "tbody",
  flexDirection: "column",
  context: TableContext,

  flexShrink: 1
});

const TableHead = styled(ThemeableStack, {
  name: TABLE_NAME,
  tag: "thead",
  context: TableContext,

  flexDirection: "column",
  flexShrink: 1
});

const TableFoot = styled(ThemeableStack, {
  name: TABLE_NAME,
  tag: "tfoot",
  flexDirection: "column",
  context: TableContext,

  flexShrink: 1
});

const TableComp = styled(ThemeableStack, {
  name: TABLE_NAME,
  tag: "table",
  context: TableContext,
  borderWidth: 0,
  backgrounded: true,
  maxWidth: "100%",

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

export type TableProps = GetProps<typeof TableComp>;

export const Table = withStaticProperties(TableComp, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRowImpl,
  Cell: TableCell,
  HeaderCell: TableHeaderCell,
  Foot: TableFoot
});
