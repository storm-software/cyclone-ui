import type { CSSProperties, ReactElement } from "react";

export interface TokenTableRow {
  path: string;
  type?: string;
  value: string;
  cssVar: string;
  description?: string;
  theme?: string;
}

const TOKENS: TokenTableRow[] = [
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "base"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "base"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "base"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "base"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "base"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "base"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "base"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "base"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "base"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "base"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "base"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "base"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "base"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "base"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "base"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "base"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "base"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "base"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "base"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "base"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "base"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "base"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "base"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "base"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "base"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "base"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "base"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "base"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "base"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "base"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "base"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "base"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "base"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "base"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "base"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "base"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "base"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "base"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "base"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "base"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "base"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "base"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "base"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "base"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "base"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "base"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "base"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "base"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "base"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "base"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "base"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "base"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "base"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "base"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "base"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "base"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "base"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "base"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "base"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "base"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "base"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "base"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "base"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "base"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "base"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "base"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "base"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "base"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "base"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "base"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "base"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "base"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "base"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "base"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "base"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "base"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "base"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "base"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "base"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "base"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "base"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "base"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "base"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "base"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "base"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "base"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "base"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "base"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "base"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "base"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "base"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "base"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "base"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "base"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "base"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "base"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "base"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "base"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "base"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "base"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "base"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "base"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "base"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "base"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "base"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "base"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "base"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "base"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "base"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "base"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "base"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "base"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "base"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "base"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "base"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "base"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "base"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "base"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "base"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "base"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "base"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "base"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "base"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "base"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "base"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "base"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "base"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "dark"
    },
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-black",
      description: "A almost black color",
      theme: "dark"
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "dark"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.8108 0.139 177.33)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "dark"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "dark"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#1a1c1f",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "dark"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#1e2023",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "dark"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#242629",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "dark"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-base-1",
      description: "A near-white base gray color",
      theme: "dark"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#f6f6f6",
      cssVar: "--rw-color-base-2",
      description: "A very light base gray color",
      theme: "dark"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-base-3",
      description: "A light base gray color",
      theme: "dark"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#d5d6d6",
      cssVar: "--rw-color-base-4",
      description: "A soft base gray color",
      theme: "dark"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#babbbb",
      cssVar: "--rw-color-base-5",
      description: "A mid base gray color",
      theme: "dark"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#999a9b",
      cssVar: "--rw-color-base-6",
      description: "A medium base gray color",
      theme: "dark"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#727476",
      cssVar: "--rw-color-base-7",
      description: "A dark base gray color",
      theme: "dark"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#494b4d",
      cssVar: "--rw-color-base-8",
      description: "A deep charcoal gray color",
      theme: "dark"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#1e2023",
      cssVar: "--rw-color-base-9",
      description: "An almost-black base gray color",
      theme: "dark"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.87 0.08 20)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "dark"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.84 0.09 20)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "dark"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.81 0.11 20)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "dark"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.79 0.12 20)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "dark"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.77 0.14 20)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "dark"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.74 0.15 20)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "dark"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.71 0.16 20)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "dark"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.68 0.15 20)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "dark"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.57 0.13 20)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "dark"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.87 0.08 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "dark"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.84 0.09 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "dark"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.81 0.11 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "dark"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.78 0.12 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "dark"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.76 0.14 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "dark"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.73 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "dark"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.7 0.16 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "dark"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "dark"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.57 0.13 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "dark"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.86 0.08 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.83 0.09 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.8 0.11 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "dark"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.78 0.12 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.75 0.14 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.73 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "dark"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.69 0.16 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.56 0.13 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "dark"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.85 0.08 155)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "dark"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.82 0.09 155)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "dark"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.78 0.11 155)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "dark"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.76 0.12 155)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "dark"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.73 0.14 155)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "dark"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.7 0.15 155)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "dark"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.67 0.16 155)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "dark"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.64 0.15 155)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "dark"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.55 0.13 155)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "dark"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.85 0.08 220)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "dark"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.82 0.09 220)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "dark"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.79 0.11 220)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "dark"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.76 0.12 220)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "dark"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.74 0.14 220)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "dark"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.71 0.15 220)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "dark"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.67 0.16 220)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "dark"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.64 0.15 220)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "dark"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.55 0.13 220)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "dark"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.86 0.08 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "dark"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.83 0.09 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "dark"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.8 0.11 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "dark"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.77 0.12 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "dark"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.75 0.14 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "dark"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.72 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "dark"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.69 0.16 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "dark"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.66 0.15 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "dark"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.56 0.13 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "dark"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.86 0.08 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "dark"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.83 0.09 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "dark"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.8 0.11 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "dark"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.78 0.12 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "dark"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.76 0.14 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "dark"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.73 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.7 0.16 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.67 0.15 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.57 0.13 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "dark"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.87 0.08 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "dark"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.84 0.09 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "dark"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.81 0.11 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "dark"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.79 0.12 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "dark"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.77 0.14 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "dark"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.74 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "dark"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.71 0.16 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "dark"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.68 0.15 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "dark"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.58 0.13 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "dark"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#0c0c0d66",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-5)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-5)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-9)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-5)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-5)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-9)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-5)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-5)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-9)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the dark theme",
      theme: "dark"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "dark"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "dark"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "dark"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "dark"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "dark"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "dark"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "dark"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "dark"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "dark"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "dark"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "dark"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "dark"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "dark"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "dark"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "dark"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "dark"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "dark"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "dark"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "dark"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "dark"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "dark"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "dark"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "dark"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "dark"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "dark"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "dark"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "dark"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "dark"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "dark"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "dark"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "dark"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "dark"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "dark"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "dark"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "dark"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "dark"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "dark"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "dark"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "dark"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "dark"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "dark"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "dark"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "dark"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "dark"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "dark"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "dark"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "dark"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "dark"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "dark"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "dark"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "dark"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "dark"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "dark"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "dark"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "dark"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "dark"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "dark"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "dark"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "dark"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "dark"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "dark"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "dark"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "dark"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "dark"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "dark"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "dark"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "dark"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "dark"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "dark"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "dark"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "dark"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "dark"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "dark"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "dark"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "dark"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "dark"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "dark"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "dark"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "dark"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "dark"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "dark"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "dark"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "dark"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "dark"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "dark"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "dark"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "dark"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "dark"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "dark"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "dark"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "dark"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "dark"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "dark"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "dark"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "dark"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "dark"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "dark"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "dark"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "dark"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "dark"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "dark"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "dark"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "dark"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "dark"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "dark"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "dark"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "dark"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "dark"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "dark"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "dark"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "dark"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "dark"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "dark"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "dark"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "dark"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "dark"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "dark"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "dark"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "dark"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "dark"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "dark"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "dark"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "dark"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "dark"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "dark"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "dark"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "dark"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#d9d9d900",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "darkDimmed"
    },
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-black",
      description: "A almost black color",
      theme: "darkDimmed"
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "darkDimmed"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.8108 0.139 177.33)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "darkDimmed"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#373a3d",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#3a3c40",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#3f4144",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "darkDimmed"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#d6d6d6",
      cssVar: "--rw-color-base-1",
      description: "A near-white base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#d2d2d2",
      cssVar: "--rw-color-base-2",
      description: "A very light base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-base-3",
      description: "A light base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#bbbcbc",
      cssVar: "--rw-color-base-4",
      description: "A soft base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#a8a9a9",
      cssVar: "--rw-color-base-5",
      description: "A mid base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#919293",
      cssVar: "--rw-color-base-6",
      description: "A medium base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#767779",
      cssVar: "--rw-color-base-7",
      description: "A dark base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#595b5c",
      cssVar: "--rw-color-base-8",
      description: "A deep charcoal gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#3a3c40",
      cssVar: "--rw-color-base-9",
      description: "An almost-black base gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.87 0.08 20)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.84 0.09 20)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.81 0.11 20)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.79 0.12 20)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.77 0.14 20)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.74 0.15 20)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.71 0.16 20)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.68 0.15 20)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.57 0.13 20)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.87 0.08 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.84 0.09 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.81 0.11 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.78 0.12 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.76 0.14 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.73 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.7 0.16 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.57 0.13 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.86 0.08 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.83 0.09 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.8 0.11 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.78 0.12 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.75 0.14 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.73 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.69 0.16 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.56 0.13 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.85 0.08 155)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.82 0.09 155)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.78 0.11 155)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.76 0.12 155)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.73 0.14 155)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.7 0.15 155)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.67 0.16 155)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.64 0.15 155)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.55 0.13 155)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.85 0.08 220)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.82 0.09 220)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.79 0.11 220)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.76 0.12 220)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.74 0.14 220)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.71 0.15 220)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.67 0.16 220)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.64 0.15 220)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.55 0.13 220)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.86 0.08 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.83 0.09 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.8 0.11 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.77 0.12 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.75 0.14 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.72 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.69 0.16 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.66 0.15 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.56 0.13 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.86 0.08 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.83 0.09 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.8 0.11 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.78 0.12 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.76 0.14 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.73 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.7 0.16 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.67 0.15 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.57 0.13 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.87 0.08 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.84 0.09 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.81 0.11 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.79 0.12 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.77 0.14 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.74 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.71 0.16 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.68 0.15 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.58 0.13 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#2e2e3066",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-5)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-5)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-9)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-5)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-5)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-9)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-5)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-5)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-9)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "darkDimmed"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "darkDimmed"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "darkDimmed"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "darkDimmed"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "darkDimmed"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "darkDimmed"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "darkDimmed"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "darkDimmed"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "darkDimmed"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "darkDimmed"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "darkDimmed"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "darkDimmed"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "darkDimmed"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "darkDimmed"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "darkDimmed"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "darkDimmed"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "darkDimmed"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "darkDimmed"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "darkDimmed"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "darkDimmed"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "darkDimmed"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "darkDimmed"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "darkDimmed"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "darkDimmed"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "darkDimmed"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "darkDimmed"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "darkDimmed"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "darkDimmed"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "darkDimmed"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "darkDimmed"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "darkDimmed"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "darkDimmed"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "darkDimmed"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "darkDimmed"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "darkDimmed"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "darkDimmed"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "darkDimmed"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "darkDimmed"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "darkDimmed"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "darkHighContrast"
    },
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-black",
      description: "A almost black color",
      theme: "darkHighContrast"
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "darkHighContrast"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.8108 0.139 177.33)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "darkHighContrast"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-1",
      description: "A near-white base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-2",
      description: "A very light base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-3",
      description: "A light base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#fcfcfc",
      cssVar: "--rw-color-base-4",
      description: "A soft base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#d3d8d8",
      cssVar: "--rw-color-base-5",
      description: "A mid base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#a0a6ac",
      cssVar: "--rw-color-base-6",
      description: "A medium base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#676f77",
      cssVar: "--rw-color-base-7",
      description: "A dark base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#2f3338",
      cssVar: "--rw-color-base-8",
      description: "A deep charcoal gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-base-9",
      description: "An almost-black base gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.87 0.08 20)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.84 0.09 20)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.81 0.11 20)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.79 0.12 20)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.77 0.14 20)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.74 0.15 20)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.71 0.16 20)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.68 0.15 20)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.57 0.13 20)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.87 0.08 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.84 0.09 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.81 0.11 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.78 0.12 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.76 0.14 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.73 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.7 0.16 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.57 0.13 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.86 0.08 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.83 0.09 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.8 0.11 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.78 0.12 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.75 0.14 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.73 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.69 0.16 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.56 0.13 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.85 0.08 155)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.82 0.09 155)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.78 0.11 155)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.76 0.12 155)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.73 0.14 155)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.7 0.15 155)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.67 0.16 155)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.64 0.15 155)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.55 0.13 155)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.85 0.08 220)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.82 0.09 220)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.79 0.11 220)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.76 0.12 220)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.74 0.14 220)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.71 0.15 220)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.67 0.16 220)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.64 0.15 220)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.55 0.13 220)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.86 0.08 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.83 0.09 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.8 0.11 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.77 0.12 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.75 0.14 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.72 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.69 0.16 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.66 0.15 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.56 0.13 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.86 0.08 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.83 0.09 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.8 0.11 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.78 0.12 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.76 0.14 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.73 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.7 0.16 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.67 0.15 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.57 0.13 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.87 0.08 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.84 0.09 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.81 0.11 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.79 0.12 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.77 0.14 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.74 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.71 0.16 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.68 0.15 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.58 0.13 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-5)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-5)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-9)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-5)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-5)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-9)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-5)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-5)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-9)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "darkHighContrast"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "darkHighContrast"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "darkHighContrast"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "darkHighContrast"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "darkHighContrast"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "darkHighContrast"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "darkHighContrast"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "darkHighContrast"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "darkHighContrast"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "darkHighContrast"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "darkHighContrast"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "darkHighContrast"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "darkHighContrast"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "darkHighContrast"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "darkHighContrast"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "darkHighContrast"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "darkHighContrast"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "darkHighContrast"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "darkHighContrast"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "darkHighContrast"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "darkHighContrast"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "darkHighContrast"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "darkHighContrast"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "light"
    },
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-black",
      description: "A near black color",
      theme: "light"
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "light"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.6897 0.1156 186.1)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "light"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "light"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "light"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#f4f4f3",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "light"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#e8e7e6",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "light"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#f4f4f4",
      cssVar: "--rw-color-base-1",
      description: "A warm near-white gray color",
      theme: "light"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#c1c1c1",
      cssVar: "--rw-color-base-2",
      description: "A soft warm gray color",
      theme: "light"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#949494",
      cssVar: "--rw-color-base-3",
      description: "A light warm gray color",
      theme: "light"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-base-4",
      description: "A muted warm gray color",
      theme: "light"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#4f4f4f",
      cssVar: "--rw-color-base-5",
      description: "A mid cool gray color",
      theme: "light"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#373737",
      cssVar: "--rw-color-base-6",
      description: "A slate cool gray color",
      theme: "light"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#262626",
      cssVar: "--rw-color-base-7",
      description: "A deep slate gray color",
      theme: "light"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#1c1c1c",
      cssVar: "--rw-color-base-8",
      description: "A very dark slate gray color",
      theme: "light"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#181818",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool gray color",
      theme: "light"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.8 0.12 21)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "light"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.78 0.13 21)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "light"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.75 0.15 21)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "light"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.72 0.16 21)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "light"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.7 0.16 21)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "light"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.67 0.15 21)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "light"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.64 0.15 21)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "light"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.61 0.14 21)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "light"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.54 0.12 21)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "light"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.79 0.12 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "light"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.78 0.13 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "light"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.75 0.15 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "light"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.72 0.16 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "light"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.69 0.16 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "light"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "light"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.64 0.15 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "light"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.6 0.14 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "light"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.53 0.12 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "light"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.79 0.12 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "light"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.77 0.13 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "light"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.74 0.15 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "light"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.71 0.16 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "light"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.68 0.16 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "light"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "light"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.63 0.15 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "light"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.59 0.14 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "light"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.53 0.12 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "light"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.77 0.12 160)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "light"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.75 0.13 160)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "light"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.72 0.15 160)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "light"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.68 0.16 160)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "light"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.66 0.16 160)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "light"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.63 0.15 160)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "light"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.61 0.15 160)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "light"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.57 0.14 160)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "light"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.51 0.12 160)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "light"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.77 0.12 221)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "light"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.76 0.13 221)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "light"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.72 0.15 221)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "light"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.69 0.16 221)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "light"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.66 0.16 221)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "light"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.64 0.15 221)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "light"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.61 0.15 221)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "light"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.58 0.14 221)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "light"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.51 0.12 221)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "light"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.78 0.12 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "light"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.77 0.13 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "light"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.74 0.15 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "light"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.71 0.16 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "light"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.68 0.16 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "light"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.65 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "light"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.63 0.15 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "light"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.59 0.14 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "light"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.52 0.12 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "light"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.79 0.12 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "light"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.77 0.13 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "light"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.75 0.15 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "light"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.72 0.16 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "light"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.69 0.16 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "light"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.66 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "light"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.64 0.15 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "light"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.6 0.14 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "light"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.53 0.12 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "light"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.8 0.12 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "light"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.78 0.13 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "light"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.75 0.15 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "light"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.72 0.16 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "light"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.7 0.16 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "light"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.67 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "light"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.64 0.15 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "light"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.61 0.14 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "light"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.54 0.12 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "light"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the light theme",
      theme: "light"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the light theme",
      theme: "light"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#1a1c1f66",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the light theme",
      theme: "light"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-5)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-6)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-6)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-1)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-6)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-1)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-6)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-6)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-1)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-6)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-1)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-6)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the light theme",
      theme: "light"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-1)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the light theme",
      theme: "light"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "light"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "light"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "light"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "light"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "light"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "light"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "light"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "light"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "light"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "light"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "light"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "light"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "light"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "light"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "light"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "light"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "light"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "light"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "light"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "light"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "light"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "light"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "light"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "light"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "light"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "light"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "light"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "light"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "light"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "light"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "light"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "light"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "light"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "light"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "light"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "light"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "light"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "light"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "light"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "light"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "light"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "light"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "light"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "light"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "light"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "light"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "light"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "light"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "light"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "light"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "light"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "light"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "light"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "light"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "light"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "light"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "light"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "light"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "light"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "light"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "light"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "light"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "light"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "light"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "light"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "light"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "light"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "light"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "light"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "light"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "light"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "light"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "light"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "light"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "light"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "light"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "light"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "light"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "light"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "light"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "light"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "light"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "light"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "light"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "light"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "light"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "light"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "light"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "light"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "light"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "light"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "light"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "light"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "light"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "light"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "light"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "light"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "light"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "light"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "light"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "light"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "light"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "light"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "light"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "light"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "light"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "light"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "light"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "light"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "light"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "light"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "light"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "light"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "light"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "light"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "light"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "light"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "light"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "light"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "light"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "light"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "light"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "light"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "light"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "light"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "light"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the light theme",
      theme: "light"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 2px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the light theme",
      theme: "light"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the light theme",
      theme: "light"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "light"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#d9d9d900",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "lightDimmed"
    },
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-black",
      description: "A near black color",
      theme: "lightDimmed"
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "lightDimmed"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.6897 0.1156 186.1)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "lightDimmed"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "lightDimmed"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "lightDimmed"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#d2d2d0",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "lightDimmed"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#c9c8c7",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "lightDimmed"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#d1d1d1",
      cssVar: "--rw-color-base-1",
      description: "A warm near-white gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#adadad",
      cssVar: "--rw-color-base-2",
      description: "A soft warm gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#8e8e8e",
      cssVar: "--rw-color-base-3",
      description: "A light warm gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#737373",
      cssVar: "--rw-color-base-4",
      description: "A muted warm gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#5e5e5e",
      cssVar: "--rw-color-base-5",
      description: "A mid cool gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#4d4d4d",
      cssVar: "--rw-color-base-6",
      description: "A slate cool gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#414141",
      cssVar: "--rw-color-base-7",
      description: "A deep slate gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#3a3a3a",
      cssVar: "--rw-color-base-8",
      description: "A very dark slate gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#373737",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool gray color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.8 0.12 21)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.78 0.13 21)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.75 0.15 21)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.72 0.16 21)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.7 0.16 21)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.67 0.15 21)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.64 0.15 21)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.61 0.14 21)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.54 0.12 21)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.79 0.12 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.78 0.13 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.75 0.15 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.72 0.16 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.69 0.16 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.64 0.15 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.6 0.14 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.53 0.12 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.79 0.12 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.77 0.13 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.74 0.15 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.71 0.16 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.68 0.16 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.63 0.15 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.59 0.14 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.53 0.12 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.77 0.12 160)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.75 0.13 160)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.72 0.15 160)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.68 0.16 160)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.66 0.16 160)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.63 0.15 160)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.61 0.15 160)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.57 0.14 160)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.51 0.12 160)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.77 0.12 221)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.76 0.13 221)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.72 0.15 221)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.69 0.16 221)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.66 0.16 221)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.64 0.15 221)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.61 0.15 221)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.58 0.14 221)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.51 0.12 221)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.78 0.12 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.77 0.13 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.74 0.15 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.71 0.16 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.68 0.16 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.65 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.63 0.15 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.59 0.14 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.52 0.12 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.79 0.12 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.77 0.13 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.75 0.15 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.72 0.16 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.69 0.16 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.66 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.64 0.15 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.6 0.14 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.53 0.12 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.8 0.12 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.78 0.13 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.75 0.15 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.72 0.16 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.7 0.16 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.67 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.64 0.15 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.61 0.14 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.54 0.12 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#373a3d66",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-5)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-6)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-6)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-1)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-6)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-1)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-6)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-6)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-1)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-6)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-1)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-6)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-1)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "lightDimmed"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "lightDimmed"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "lightDimmed"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "lightDimmed"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "lightDimmed"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "lightDimmed"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "lightDimmed"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "lightDimmed"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "lightDimmed"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "lightDimmed"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "lightDimmed"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "lightDimmed"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "lightDimmed"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "lightDimmed"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "lightDimmed"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "lightDimmed"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "lightDimmed"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "lightDimmed"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "lightDimmed"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "lightDimmed"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "lightDimmed"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "lightDimmed"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "lightDimmed"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "lightDimmed"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "lightDimmed"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "lightDimmed"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "lightDimmed"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "lightDimmed"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "lightDimmed"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "lightDimmed"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "lightDimmed"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "lightDimmed"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "lightDimmed"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "lightDimmed"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "lightDimmed"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "lightDimmed"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "lightDimmed"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "lightDimmed"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "lightDimmed"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 2px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "lightDimmed"
    },
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--rw-color-transparent",
      description: "A transparent color",
      theme: "lightHighContrast"
    },
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-black",
      description: "A near black color",
      theme: "lightHighContrast"
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "A completely white color",
      theme: "lightHighContrast"
    },
    {
      path: "color.brand.1",
      type: "color",
      value: "oklch(0.6897 0.1156 186.1)",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "lightHighContrast"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "oklch(0.301 0.066 184.397587)",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "lightHighContrast"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - used for the background of the page",
      theme: "lightHighContrast"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - used for elevated component backgrounds (inputs, cards, etc.)",
      theme: "lightHighContrast"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, modals, etc.)",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-1",
      description: "A warm near-white gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#dedede",
      cssVar: "--rw-color-base-2",
      description: "A soft warm gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#9d9d9d",
      cssVar: "--rw-color-base-3",
      description: "A light warm gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-base-4",
      description: "A muted warm gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#393939",
      cssVar: "--rw-color-base-5",
      description: "A mid cool gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#161616",
      cssVar: "--rw-color-base-6",
      description: "A slate cool gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-base-7",
      description: "A deep slate gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-base-8",
      description: "A very dark slate gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool gray color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "oklch(0.8 0.12 21)",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "oklch(0.78 0.13 21)",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "oklch(0.75 0.15 21)",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "oklch(0.72 0.16 21)",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "oklch(0.7 0.16 21)",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "oklch(0.67 0.15 21)",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "oklch(0.64 0.15 21)",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "oklch(0.61 0.14 21)",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "oklch(0.54 0.12 21)",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "oklch(0.79 0.12 47)",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "oklch(0.78 0.13 47)",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "oklch(0.75 0.15 47)",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "oklch(0.72 0.16 47)",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "oklch(0.69 0.16 47)",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "oklch(0.67 0.15 47)",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "oklch(0.64 0.15 47)",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "oklch(0.6 0.14 47)",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "oklch(0.53 0.12 47)",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "oklch(0.79 0.12 81)",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "oklch(0.77 0.13 81)",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "oklch(0.74 0.15 81)",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "oklch(0.71 0.16 81)",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "oklch(0.68 0.16 81)",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "oklch(0.66 0.15 81)",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "oklch(0.63 0.15 81)",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "oklch(0.59 0.14 81)",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "oklch(0.53 0.12 81)",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "oklch(0.77 0.12 160)",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "oklch(0.75 0.13 160)",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "oklch(0.72 0.15 160)",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "oklch(0.68 0.16 160)",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "oklch(0.66 0.16 160)",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "oklch(0.63 0.15 160)",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "oklch(0.61 0.15 160)",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "oklch(0.57 0.14 160)",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "oklch(0.51 0.12 160)",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "oklch(0.77 0.12 221)",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "oklch(0.76 0.13 221)",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "oklch(0.72 0.15 221)",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "oklch(0.69 0.16 221)",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "oklch(0.66 0.16 221)",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "oklch(0.64 0.15 221)",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "oklch(0.61 0.15 221)",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "oklch(0.58 0.14 221)",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "oklch(0.51 0.12 221)",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "oklch(0.78 0.12 256)",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "oklch(0.77 0.13 256)",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "oklch(0.74 0.15 256)",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "oklch(0.71 0.16 256)",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "oklch(0.68 0.16 256)",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "oklch(0.65 0.15 256)",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "oklch(0.63 0.15 256)",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "oklch(0.59 0.14 256)",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "oklch(0.52 0.12 256)",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "oklch(0.79 0.12 282)",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "oklch(0.77 0.13 282)",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "oklch(0.75 0.15 282)",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "oklch(0.72 0.16 282)",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "oklch(0.69 0.16 282)",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "oklch(0.66 0.15 282)",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "oklch(0.64 0.15 282)",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "oklch(0.6 0.14 282)",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "oklch(0.53 0.12 282)",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "oklch(0.8 0.12 356)",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "oklch(0.78 0.13 356)",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "oklch(0.75 0.15 356)",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "oklch(0.72 0.16 356)",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "oklch(0.7 0.16 356)",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "oklch(0.67 0.15 356)",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "oklch(0.64 0.15 356)",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "oklch(0.61 0.14 356)",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "oklch(0.54 0.12 356)",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-foreground-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-foreground-link",
      description: "The link foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-primary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-secondary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-tertiary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-accent",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-danger",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-warning",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-on-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-success",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-success",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-info",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-info",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.on-discovery",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-on-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.page",
      type: "color",
      value: "var(--color-surface-1)",
      cssVar: "--rw-color-background-page",
      description: "The page background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.elevated",
      type: "color",
      value: "var(--color-surface-2)",
      cssVar: "--rw-color-background-elevated",
      description: "The elevated background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.floating",
      type: "color",
      value: "var(--color-surface-3)",
      cssVar: "--rw-color-background-floating",
      description: "The floating background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-background-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.link",
      type: "color",
      value: "var(--color-blue-7)",
      cssVar: "--rw-color-background-link",
      description: "The link foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-background-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.tertiary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-tertiary",
      description: "The tertiary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "var(--color-background-floating)",
      cssVar: "--rw-color-overlay-background",
      description: "The overlay background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "var(--color-border-primary)",
      cssVar: "--rw-color-overlay-border",
      description: "The overlay border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "The xsmall resting shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "The small resting shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "The medium resting shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "The small floating shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "The medium floating shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "The large floating shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "The xlarge floating shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "The inset shadow for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.base.emphasis",
      type: "color",
      value: "var(--color-base-5)",
      cssVar: "--rw-color-data-base-emphasis",
      description: "The base data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.base.subtle",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-data-base-subtle",
      description: "The base data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "The brand data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-data-brand-subtle",
      description: "The brand data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "var(--color-red-6)",
      cssVar: "--rw-color-data-red-emphasis",
      description: "The red data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-data-red-subtle",
      description: "The red data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "var(--color-orange-6)",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "The orange data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "var(--color-orange-1)",
      cssVar: "--rw-color-data-orange-subtle",
      description: "The orange data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "var(--color-yellow-6)",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "The yellow data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "The yellow data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-data-green-emphasis",
      description: "The green data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "var(--color-green-1)",
      cssVar: "--rw-color-data-green-subtle",
      description: "The green data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.sky.emphasis",
      type: "color",
      value: "var(--color-sky-6)",
      cssVar: "--rw-color-data-sky-emphasis",
      description: "The sky blue data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.sky.subtle",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-data-sky-subtle",
      description: "The sky blue data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "var(--color-blue-6)",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "The blue data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "var(--color-blue-1)",
      cssVar: "--rw-color-data-blue-subtle",
      description: "The blue data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "var(--color-purple-6)",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "The purple data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "var(--color-purple-1)",
      cssVar: "--rw-color-data-purple-subtle",
      description: "The purple data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "var(--color-pink-6)",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "The pink data visualization emphasis color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "var(--color-pink-1)",
      cssVar: "--rw-color-data-pink-subtle",
      description: "The pink data visualization subtle color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: "lightHighContrast"
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.md",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-md",
      description: "A 20px md size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-lg",
      description: "A 24px lg size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "28px",
      cssVar: "--rw-size-xl",
      description: "A 28px xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-2xl",
      description: "A 32px 2xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "36px",
      cssVar: "--rw-size-3xl",
      description: "A 36px 3xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-size-4xl",
      description: "A 40px 4xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "44px",
      cssVar: "--rw-size-5xl",
      description: "A 44px 5xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "48px",
      cssVar: "--rw-size-6xl",
      description: "A 48px 6xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-7xl",
      description: "A 52px 7xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-size-8xl",
      description: "A 64px 8xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-size-9xl",
      description: "A 74px 9xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "84px",
      cssVar: "--rw-size-10xl",
      description: "A 84px 10xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "94px",
      cssVar: "--rw-size-11xl",
      description: "A 94px 11xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "104px",
      cssVar: "--rw-size-12xl",
      description: "A 104px 12xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "124px",
      cssVar: "--rw-size-13xl",
      description: "A 124px 13xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-size-14xl",
      description: "A 144px 14xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "164px",
      cssVar: "--rw-size-15xl",
      description: "A 164px 15xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "184px",
      cssVar: "--rw-size-16xl",
      description: "A 184px 16xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "204px",
      cssVar: "--rw-size-17xl",
      description: "A 204px 17xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-18xl",
      description: "A 224px 18xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "224px",
      cssVar: "--rw-size-19xl",
      description: "A 224px 19xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "244px",
      cssVar: "--rw-size-20xl",
      description: "A 244px 20xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "264px",
      cssVar: "--rw-size-21xl",
      description: "A 264px 21xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-22xl",
      description: "A 284px 22xl size step",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.75rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (0.875rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.125rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.25rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.5rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (1.875rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (2.25rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (3.75rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (4.5rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (6rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (8rem)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: "lightHighContrast"
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: "lightHighContrast"
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.25",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.375",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.625",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "2",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: "lightHighContrast"
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: "lightHighContrast"
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: "lightHighContrast"
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: "lightHighContrast"
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: "lightHighContrast"
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: "lightHighContrast"
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: "lightHighContrast"
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: "lightHighContrast"
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: "lightHighContrast"
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: "lightHighContrast"
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: "lightHighContrast"
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: "lightHighContrast"
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: "lightHighContrast"
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: "lightHighContrast"
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: "lightHighContrast"
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: "lightHighContrast"
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: "lightHighContrast"
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: "lightHighContrast"
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: "lightHighContrast"
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: "lightHighContrast"
    },
    {
      path: "border.primary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary",
      description: "The primary border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.primary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.primary}\"}",
      cssVar: "--rw-border-primary-subtle",
      description: "The primary subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.secondary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary",
      description: "The secondary border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.secondary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.secondary}\"}",
      cssVar: "--rw-border-secondary-subtle",
      description: "The secondary subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.tertiary",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary",
      description: "The tertiary border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.tertiary-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.tertiary}\"}",
      cssVar: "--rw-border-tertiary-subtle",
      description: "The tertiary subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.accent",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent",
      description: "The accent border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.accent-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.accent}\"}",
      cssVar: "--rw-border-accent-subtle",
      description: "The accent subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.danger",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger",
      description: "The danger border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.danger-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.danger}\"}",
      cssVar: "--rw-border-danger-subtle",
      description: "The danger subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.warning",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning",
      description: "The warning border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.warning-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.warning}\"}",
      cssVar: "--rw-border-warning-subtle",
      description: "The warning subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.success",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success",
      description: "The success border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.success-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.success}\"}",
      cssVar: "--rw-border-success-subtle",
      description: "The success subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.info",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info",
      description: "The info border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.info-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.info}\"}",
      cssVar: "--rw-border-info-subtle",
      description: "The info subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.discovery",
      type: "border",
      value: "{\"width\":{\"value\":2,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery",
      description: "The discovery border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "border.discovery-subtle",
      type: "border",
      value: "{\"width\":{\"value\":1,\"unit\":\"px\"},\"style\":\"solid\",\"color\":\"{color.border.discovery}\"}",
      cssVar: "--rw-border-discovery-subtle",
      description: "The discovery subtle border variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.tertiary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary",
      description: "The tertiary ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.tertiary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-tertiary)",
      cssVar: "--rw-ring-tertiary-subtle",
      description: "The tertiary subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 2px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-lg",
      description: "The title large typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-md",
      description: "The title medium typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-title-sm",
      description: "The title small typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.xs}\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant for the dark theme",
      theme: "lightHighContrast"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant for the dark theme",
      theme: "lightHighContrast"
    }
];

const tableStyle: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "13px"
};

const cellStyle: CSSProperties = {
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  padding: "8px 10px",
  textAlign: "left",
  verticalAlign: "top"
};

const swatchStyle = (value: string): CSSProperties => ({
  display: "inline-block",
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginRight: "8px",
  verticalAlign: "middle",
  border: "1px solid rgba(0,0,0,0.15)",
  background: value
});

export interface TokenTableBlockProps {
  /** Optional path prefix filter (e.g. `color`). */
  filter?: string;
  /** Optional DTCG `$type` filter. */
  type?: string;
}

/**
 * Token reference table for Storybook MDX docs.
 */
export function TokenTableBlock({
  filter,
  type
}: TokenTableBlockProps = {}): ReactElement {
  const rows = TOKENS.filter(token => {
    if (filter && !token.path.startsWith(filter)) {
      return false;
    }
    if (type && token.type !== type) {
      return false;
    }
    return true;
  });

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Path</th>
          <th style={cellStyle}>Type</th>
          <th style={cellStyle}>Value</th>
          <th style={cellStyle}>CSS variable</th>
          <th style={cellStyle}>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(token => (
          <tr key={token.theme ? `${token.theme}:${token.path}` : token.path}>
            <td style={cellStyle}>
              <code>{token.path}</code>
              {token.theme ? ` (${token.theme})` : null}
            </td>
            <td style={cellStyle}>{token.type ?? "—"}</td>
            <td style={cellStyle}>
              {token.type === "color" ? <span style={swatchStyle(token.value)} /> : null}
              <code>{token.value}</code>
            </td>
            <td style={cellStyle}>
              <code>{token.cssVar}</code>
            </td>
            <td style={cellStyle}>{token.description ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
