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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "base"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "base"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "base"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "base"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "base"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "base"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "base"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "base"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "base"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "base"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "base"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "base"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "base"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "base"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "base"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "base"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "base"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "base"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "base"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "base"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "base"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "base"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "base"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "base"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "base"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "base"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "base"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "base"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "base"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "base"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#36dec0",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "dark"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#003832",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "dark"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#0d0c07",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - warm near-ink page floor",
      theme: "dark"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#212121",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - ink elevated backgrounds (inputs, cards, etc.)",
      theme: "dark"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#2a2c33",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, dropdowns, etc.)",
      theme: "dark"
    },
    {
      path: "color.surface.4",
      type: "color",
      value: "#33363e",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
      theme: "dark"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-1",
      description: "A cool near-white ink - primary text on dark",
      theme: "dark"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#e8e9e9",
      cssVar: "--rw-color-base-2",
      description: "A muted-soft cool gray for body text on dark",
      theme: "dark"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#d1d2d3",
      cssVar: "--rw-color-base-3",
      description: "A muted cool gray color",
      theme: "dark"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#babcbd",
      cssVar: "--rw-color-base-4",
      description: "A soft cool gray color",
      theme: "dark"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#a3a5a7",
      cssVar: "--rw-color-base-5",
      description: "A mid cool ink-adjacent gray color",
      theme: "dark"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#8b8f92",
      cssVar: "--rw-color-base-6",
      description: "A medium cool ink gray color",
      theme: "dark"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#74787c",
      cssVar: "--rw-color-base-7",
      description: "A dark cool ink gray color",
      theme: "dark"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#5d6166",
      cssVar: "--rw-color-base-8",
      description: "A deep cool charcoal color",
      theme: "dark"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#464a50",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool ink color",
      theme: "dark"
    },
    {
      path: "color.base.10",
      type: "color",
      value: "#2f333a",
      cssVar: "--rw-color-base-10",
      description: "A deepest cool ink-adjacent gray color",
      theme: "dark"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#f75576",
      cssVar: "--rw-color-red-1",
      description: "A pale raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#da395e",
      cssVar: "--rw-color-red-2",
      description: "A light raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-red-3",
      description: "A soft raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b92647",
      cssVar: "--rw-color-red-4",
      description: "A muted raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#a21f39",
      cssVar: "--rw-color-red-5",
      description: "A medium raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#8a192d",
      cssVar: "--rw-color-red-6",
      description: "A vivid raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#731421",
      cssVar: "--rw-color-red-7",
      description: "A rich raspberry error color - danger on dark",
      theme: "dark"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#5a0f17",
      cssVar: "--rw-color-red-8",
      description: "A deep raspberry error color",
      theme: "dark"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#420a0f",
      cssVar: "--rw-color-red-9",
      description: "Semantic error (#cf2d56) - validation errors",
      theme: "dark"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#e3518e",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#e14777",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#e03c5e",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#de3143",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#dc2626",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#d92b20",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#d6301b",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#d23516",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color",
      theme: "dark"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#cd3a13",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color",
      theme: "dark"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffc5a8",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "dark"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#fcb998",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "dark"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#fcab83",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "dark"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#f69f73",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "dark"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#f9935f",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "dark"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#f3874e",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "dark"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#ec7a3b",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "dark"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#de743a",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "dark"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#b45b2b",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "dark"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#eccc95",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#e5c283",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#e2b667",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "dark"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#dfaf56",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#dba330",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#d79c05",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "dark"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#cd8e00",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#c08600",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "dark"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#9b6a00",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "dark"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#a8efa5",
      cssVar: "--rw-color-green-1",
      description: "A pale green success color",
      theme: "dark"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#8eea93",
      cssVar: "--rw-color-green-2",
      description: "A light green success color",
      theme: "dark"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#77e689",
      cssVar: "--rw-color-green-3",
      description: "A soft green success color",
      theme: "dark"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#61e282",
      cssVar: "--rw-color-green-4",
      description: "A muted green success color",
      theme: "dark"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#4ade80",
      cssVar: "--rw-color-green-5",
      description: "A medium green success color",
      theme: "dark"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#3fcb7a",
      cssVar: "--rw-color-green-6",
      description: "A vivid green success color - confirmation on dark",
      theme: "dark"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#35b873",
      cssVar: "--rw-color-green-7",
      description: "A rich green success color",
      theme: "dark"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#2ca36b",
      cssVar: "--rw-color-green-8",
      description: "A deep green success color",
      theme: "dark"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#268e62",
      cssVar: "--rw-color-green-9",
      description: "Semantic success - confirmation and success",
      theme: "dark"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#c2c261",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#b4be58",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#a4bb4e",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#93b744",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#81b33a",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#79b136",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#71ae33",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#69ac2f",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "dark"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#61a92c",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color",
      theme: "dark"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#91dbf2",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "dark"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#7ed2ed",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "dark"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#5ccbeb",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "dark"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#42c2e6",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "dark"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#00bee7",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "dark"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#00b5e2",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "dark"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#00a9d8",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "dark"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#009fca",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "dark"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#0081a5",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "dark"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#afd4ff",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "dark"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#a1caff",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "dark"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#8ec1ff",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "dark"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#80b7ff",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "dark"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#70b0ff",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "dark"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#61a6ff",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "dark"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#529cfc",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "dark"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#4f93ec",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "dark"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#3c75bf",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "dark"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#b5c6e0",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "dark"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#aabbdc",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "dark"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a0b0d7",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "dark"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#95a3d3",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "dark"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8b96ce",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "dark"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#8088ca",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#7679c5",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#6c6bc1",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "dark"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#7060bd",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "dark"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffbfd6",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "dark"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#fbb2cc",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "dark"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#faa3c3",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "dark"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#f899bd",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "dark"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#f98cb7",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "dark"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f37fae",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "dark"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#ed72a5",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "dark"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#de6d9b",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "dark"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#b4567d",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "dark"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.caption",
      type: "color",
      value: "var(--color-base-4)",
      cssVar: "--rw-color-foreground-caption",
      description: "The caption foreground color for the dark theme",
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
      value: "var(--color-base-2)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme - muted-soft text",
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
      value: "var(--color-red-6)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-5)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "Ink text on cream primary surfaces",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "Ink text on warning surfaces",
      theme: "dark"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#9b9c9c",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#676869",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#676869",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#d1d2d3",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.caption-hover",
      type: "color",
      value: "#898b8c",
      cssVar: "--rw-color-foreground-caption-hover",
      description: "The caption foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.caption-pressed",
      type: "color",
      value: "#5b5d5e",
      cssVar: "--rw-color-foreground-caption-pressed",
      description: "The caption foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.caption-focused",
      type: "color",
      value: "#5b5d5e",
      cssVar: "--rw-color-foreground-caption-focused",
      description: "The caption foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.caption-disabled",
      type: "color",
      value: "#bbbcbc",
      cssVar: "--rw-color-foreground-caption-disabled",
      description: "The caption foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#2571cd",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#00479f",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#00479f",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#739ed6",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#acadad",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the dark theme - muted-soft text (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#747575",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the dark theme - muted-soft text (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#747575",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the dark theme - muted-soft text (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#AAAAAA",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the dark theme - muted-soft text (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#00a98e",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#00775e",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#00775e",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#84d3c0",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#a63643",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#c2505a",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#c2505a",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#aa0000",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#820000",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#820000",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#aa7500",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#7c4800",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#7c4800",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#006b42",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#004a24",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#004a24",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#588700",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#315c00",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#315c00",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#008fb6",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#006288",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#006288",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#4d499c",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#312978",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#312978",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#797d83",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "Ink text on cream primary surfaces (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#969ba0",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "Ink text on cream primary surfaces (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#969ba0",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "Ink text on cream primary surfaces (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "Ink text on cream primary surfaces (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#5c6067",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#74787e",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#74787e",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#AAAAAA",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#ffffff99",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "Ink text on warning surfaces (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "Ink text on warning surfaces (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "Ink text on warning surfaces (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "Ink text on warning surfaces (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-6)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent",
      description: "The accent background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-3)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-4)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-3)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#14130d",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#1b1a14",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#1b1a14",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#0d0c09",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#2d2d2d",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#3a3a3a",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#3a3a3a",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#21212199",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the dark theme (disabled, 60% opacity)",
      theme: "dark"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#393b42",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#484a52",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#484a52",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#444750",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#565a62",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#565a62",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#34363b",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#65696c",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#424548",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#424548",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#8c8f91",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#797d83",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#969ba0",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#969ba0",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#5e6164",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#164842",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#285952",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#285952",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#1b3531",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#c6214f",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#96002b",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#96002b",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#d57783",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#b4003c",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#89001c",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#89001c",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#bf626d",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#b49660",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#7f632d",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#7f632d",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#e1ceae",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#19ac50",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#00791b",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#00791b",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#91d79e",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#778c11",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#4d5f00",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#4d5f00",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#a8b77b",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#1999b7",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#006986",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#006986",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#8ac5d8",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#4d499c",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#312978",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the dark theme (pressed, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#312978",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#6f71a4",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "Hairline-strong border against ink cards",
      theme: "dark"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "Hairline border against ink surfaces",
      theme: "dark"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-3)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-6)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-3)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-1)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-4)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#54575b",
      cssVar: "--rw-color-border-primary-hover",
      description: "Hairline-strong border against ink cards (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#35393c",
      cssVar: "--rw-color-border-primary-focused",
      description: "Hairline-strong border against ink cards (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#75787a",
      cssVar: "--rw-color-border-primary-disabled",
      description: "Hairline-strong border against ink cards (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#797d83",
      cssVar: "--rw-color-border-secondary-hover",
      description: "Hairline border against ink surfaces (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#969ba0",
      cssVar: "--rw-color-border-secondary-focused",
      description: "Hairline border against ink surfaces (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#5e6164",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "Hairline border against ink surfaces (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#00a98e",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#00775e",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#84d3c0",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#a70037",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#7f001a",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#b05663",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#b00000",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#870000",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#b7584b",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#ac7e1c",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#7c5100",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#d0b383",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#3daf55",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#007b21",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#9edba5",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#91902b",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#636100",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#bfc08a",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#5ba4ba",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#237186",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#acd6e4",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#6a77a5",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#434e78",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#9ba4c1",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the dark theme (disabled, 60% saturation)",
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
      value: "#0d0c0766",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the dark theme",
      theme: "dark"
    },
    {
      path: "color.overlay.background-hover",
      type: "color",
      value: "#393b42",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the dark theme (hover, 20% brighter)",
      theme: "dark"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#484a52",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the dark theme (pressed, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#484a52",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the dark theme (focused, 40% brighter)",
      theme: "dark"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the dark theme (disabled, 60% saturation)",
      theme: "dark"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#54575b",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the dark theme (hover, 20% darker)",
      theme: "dark"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#35393c",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the dark theme (focused, 40% darker)",
      theme: "dark"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#75787a",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the dark theme (disabled, 60% saturation)",
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
      value: "var(--color-base-4)",
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
      value: "var(--color-green-8)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "dark"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "dark"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "dark"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "dark"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "dark"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "dark"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "dark"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "dark"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "dark"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "dark"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "dark"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "dark"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "dark"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "dark"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "dark"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "dark"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "dark"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "dark"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "dark"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "dark"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "dark"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "dark"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "dark"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "dark"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "dark"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "dark"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "dark"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "dark"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "dark"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "dark"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#57b6a5",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "darkDimmed"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#1a5a53",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#353226",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - warm near-ink page floor",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#3d3d3d",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - ink elevated backgrounds (inputs, cards, etc.)",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#43454b",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, dropdowns, etc.)",
      theme: "darkDimmed"
    },
    {
      path: "color.surface.4",
      type: "color",
      value: "#4a4c52",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
      theme: "darkDimmed"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-base-1",
      description: "A cool near-white ink - primary text on dark",
      theme: "darkDimmed"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#c8caca",
      cssVar: "--rw-color-base-2",
      description: "A muted-soft cool gray for body text on dark",
      theme: "darkDimmed"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#b8b9ba",
      cssVar: "--rw-color-base-3",
      description: "A muted cool gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#a8aaab",
      cssVar: "--rw-color-base-4",
      description: "A soft cool gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#999a9b",
      cssVar: "--rw-color-base-5",
      description: "A mid cool ink-adjacent gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#888a8c",
      cssVar: "--rw-color-base-6",
      description: "A medium cool ink gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#787a7c",
      cssVar: "--rw-color-base-7",
      description: "A dark cool ink gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#686a6d",
      cssVar: "--rw-color-base-8",
      description: "A deep cool charcoal color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#575a5e",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool ink color",
      theme: "darkDimmed"
    },
    {
      path: "color.base.10",
      type: "color",
      value: "#474a4f",
      cssVar: "--rw-color-base-10",
      description: "A deepest cool ink-adjacent gray color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#cd687d",
      cssVar: "--rw-color-red-1",
      description: "A pale raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#b4596e",
      cssVar: "--rw-color-red-2",
      description: "A light raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-red-3",
      description: "A soft raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#9e4a5d",
      cssVar: "--rw-color-red-4",
      description: "A muted raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#914252",
      cssVar: "--rw-color-red-5",
      description: "A medium raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#843b48",
      cssVar: "--rw-color-red-6",
      description: "A vivid raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#77343d",
      cssVar: "--rw-color-red-7",
      description: "A rich raspberry error color - danger on dark",
      theme: "darkDimmed"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#682e34",
      cssVar: "--rw-color-red-8",
      description: "A deep raspberry error color",
      theme: "darkDimmed"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#5b272b",
      cssVar: "--rw-color-red-9",
      description: "Semantic error (#cf2d56) - validation errors",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#bd678b",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#bb617d",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#b85b6e",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#b6555f",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#b34e4e",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#b1504a",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#af5246",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#ad5442",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#aa563f",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#e0ae95",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#dba68d",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#d89e81",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#d09679",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#d08f6d",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#c98764",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#c17f5a",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#b77b5a",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#9c694d",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ccb58e",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#c5ae84",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#bfa473",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#bb9f6a",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#b39454",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#b08e37",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#ab8531",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a3802f",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#8f6f2a",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#99d197",
      cssVar: "--rw-color-green-1",
      description: "A pale green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#8aca8d",
      cssVar: "--rw-color-green-2",
      description: "A light green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7dc488",
      cssVar: "--rw-color-green-3",
      description: "A soft green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#70bf84",
      cssVar: "--rw-color-green-4",
      description: "A muted green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#63b982",
      cssVar: "--rw-color-green-5",
      description: "A medium green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#5caa7d",
      cssVar: "--rw-color-green-6",
      description: "A vivid green success color - confirmation on dark",
      theme: "darkDimmed"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#549e77",
      cssVar: "--rw-color-green-7",
      description: "A rich green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#4c9271",
      cssVar: "--rw-color-green-8",
      description: "A deep green success color",
      theme: "darkDimmed"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#45856a",
      cssVar: "--rw-color-green-9",
      description: "Semantic success - confirmation and success",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#a8a870",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#9fa46b",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#95a165",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#8a9e5e",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#7f9b57",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#7a9a54",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#759852",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#70974f",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#6b954c",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#8ac0d1",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#80b8cb",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#6db1c5",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#5ea9be",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#36a1b9",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#359cb6",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#3395b0",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#318fa9",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#2b7e95",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#98bae1",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#91b3df",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#86addc",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#7fa6da",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#76a2d7",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#6e9bd5",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#6694d0",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#658ec4",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#5a79a2",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#a3b0c5",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#9ca9c1",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#96a1bd",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9099b9",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8a91b4",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#8388b1",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#7d7fac",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#7776a8",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#796fa5",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#e4a1b9",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#dd9bb3",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#da93ad",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#d78eaa",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#d686a6",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#d080a0",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#c9799a",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#bd7794",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#9e697f",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.caption",
      type: "color",
      value: "var(--color-base-4)",
      cssVar: "--rw-color-foreground-caption",
      description: "The caption foreground color for the dark theme",
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
      value: "var(--color-base-2)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme - muted-soft text",
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
      value: "var(--color-red-6)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-5)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "Ink text on cream primary surfaces",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "Ink text on warning surfaces",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#939393",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#6e6f70",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#6e6f70",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#b8b9ba",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.caption-hover",
      type: "color",
      value: "#868788",
      cssVar: "--rw-color-foreground-caption-hover",
      description: "The caption foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.caption-pressed",
      type: "color",
      value: "#666768",
      cssVar: "--rw-color-foreground-caption-pressed",
      description: "The caption foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.caption-focused",
      type: "color",
      value: "#666768",
      cssVar: "--rw-color-foreground-caption-focused",
      description: "The caption foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.caption-disabled",
      type: "color",
      value: "#a9aaaa",
      cssVar: "--rw-color-foreground-caption-disabled",
      description: "The caption foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#4c76aa",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#2a5892",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#2a5892",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#7b95b8",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#9f9f9f",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the dark theme - muted-soft text (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the dark theme - muted-soft text (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the dark theme - muted-soft text (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#9d9d9d",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the dark theme - muted-soft text (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#2c9786",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#247c69",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#247c69",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#85b7ab",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#94535a",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#a6666c",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#a6666c",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#982c2c",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#822626",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#822626",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#98762c",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#7f5925",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#7f5925",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#227555",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#1d633f",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#1d633f",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#648526",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#496d20",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#496d20",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#2e869e",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#276b85",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#276b85",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#615f8e",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#4a4578",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#4a4578",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#7c7e81",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "Ink text on cream primary surfaces (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#909396",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "Ink text on cream primary surfaces (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#909396",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "Ink text on cream primary surfaces (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "Ink text on cream primary surfaces (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#676a6e",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#787a7e",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#787a7e",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#9d9d9d",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#d9d9d999",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "Ink text on warning surfaces (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "Ink text on warning surfaces (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "Ink text on warning surfaces (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "Ink text on warning surfaces (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-6)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent",
      description: "The accent background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-3)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-4)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-3)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#38362c",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#3b3a32",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#3b3a32",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#333029",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#464646",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#4f4f4f",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#4f4f4f",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#3d3d3d99",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the dark theme (disabled, 60% opacity)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#4e4f55",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#595a5f",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#595a5f",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#56585e",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#63656a",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#63656a",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#4a4c50",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#6d7071",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#545759",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#545759",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#898a8b",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#7c7e81",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#909396",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#909396",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#686a6c",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#325c57",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#426560",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#426560",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#364e4a",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#a64862",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#8d2945",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#8d2945",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#b87d85",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#9d2e53",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#86273a",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#86273a",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#a67177",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#9f8e6f",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#7c6b49",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#7c6b49",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#c5b79e",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#3f9760",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#247d38",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#247d38",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#8dbc96",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#788535",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#606f20",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#606f20",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#9aa380",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#418c9d",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#267084",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#267084",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#89afbc",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#615f8e",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#4a4578",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the dark theme (pressed, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#4a4578",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#787995",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "Hairline-strong border against ink cards",
      theme: "darkDimmed"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "Hairline border against ink surfaces",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-3)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-6)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-3)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-1)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-4)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#616366",
      cssVar: "--rw-color-border-primary-hover",
      description: "Hairline-strong border against ink cards (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#4b4e50",
      cssVar: "--rw-color-border-primary-focused",
      description: "Hairline-strong border against ink cards (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#787a7b",
      cssVar: "--rw-color-border-primary-disabled",
      description: "Hairline-strong border against ink cards (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#7c7e81",
      cssVar: "--rw-color-border-secondary-hover",
      description: "Hairline border against ink surfaces (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#909396",
      cssVar: "--rw-color-border-secondary-focused",
      description: "Hairline border against ink surfaces (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#686a6c",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "Hairline border against ink surfaces (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#2c9786",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#247c69",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#85b7ab",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#962c4f",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#802538",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#9b6970",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#9b2d2d",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#852626",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#9e6a63",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#977c41",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#7f5f25",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#b5a385",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#599966",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#257e3d",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#95c09a",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#878649",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#716f21",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#aaaa89",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#6c96a2",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#427381",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#9dbdc8",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#757c96",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#585e78",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#949aac",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the dark theme (disabled, 60% saturation)",
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
      value: "#35322666",
      cssVar: "--rw-color-overlay-backdrop",
      description: "The overlay backdrop background color for the dark theme",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.background-hover",
      type: "color",
      value: "#4e4f55",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the dark theme (hover, 20% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#595a5f",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the dark theme (pressed, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#595a5f",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the dark theme (focused, 40% brighter)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the dark theme (disabled, 60% saturation)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#616366",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the dark theme (hover, 20% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#4b4e50",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the dark theme (focused, 40% darker)",
      theme: "darkDimmed"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#787a7b",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the dark theme (disabled, 60% saturation)",
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
      value: "var(--color-base-4)",
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
      value: "var(--color-green-8)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "darkDimmed"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "darkDimmed"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "darkDimmed"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#1effd7",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "darkHighContrast"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-brand-2",
      description: "The Storm Software brand teal color",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.1",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-1",
      description: "The lowest level surface of the palette - warm near-ink page floor",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.2",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-2",
      description: "The second level surface of the palette - ink elevated backgrounds (inputs, cards, etc.)",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.3",
      type: "color",
      value: "#08090c",
      cssVar: "--rw-color-surface-3",
      description: "The third level surface of the palette - used for floating component backgrounds (tooltips, dropdowns, etc.)",
      theme: "darkHighContrast"
    },
    {
      path: "color.surface.4",
      type: "color",
      value: "#14171d",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-1",
      description: "A cool near-white ink - primary text on dark",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-base-2",
      description: "A muted-soft cool gray for body text on dark",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.3",
      type: "color",
      value: "#f6f7f8",
      cssVar: "--rw-color-base-3",
      description: "A muted cool gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.4",
      type: "color",
      value: "#d3d8da",
      cssVar: "--rw-color-base-4",
      description: "A soft cool gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.5",
      type: "color",
      value: "#b0b6bc",
      cssVar: "--rw-color-base-5",
      description: "A mid cool ink-adjacent gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.6",
      type: "color",
      value: "#8c979f",
      cssVar: "--rw-color-base-6",
      description: "A medium cool ink gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.7",
      type: "color",
      value: "#6a7580",
      cssVar: "--rw-color-base-7",
      description: "A dark cool ink gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.8",
      type: "color",
      value: "#4b535d",
      cssVar: "--rw-color-base-8",
      description: "A deep cool charcoal color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.9",
      type: "color",
      value: "#2c323b",
      cssVar: "--rw-color-base-9",
      description: "An almost-black cool ink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.base.10",
      type: "color",
      value: "#0f1216",
      cssVar: "--rw-color-base-10",
      description: "A deepest cool ink-adjacent gray color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#ff708d",
      cssVar: "--rw-color-red-1",
      description: "A pale raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#fc2052",
      cssVar: "--rw-color-red-2",
      description: "A light raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-red-3",
      description: "A soft raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#ca0632",
      cssVar: "--rw-color-red-4",
      description: "A muted raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#a20322",
      cssVar: "--rw-color-red-5",
      description: "A medium raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#790116",
      cssVar: "--rw-color-red-6",
      description: "A vivid raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#51000b",
      cssVar: "--rw-color-red-7",
      description: "A rich raspberry error color - danger on dark",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#260004",
      cssVar: "--rw-color-red-8",
      description: "A deep raspberry error color",
      theme: "darkHighContrast"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-red-9",
      description: "Semantic error (#cf2d56) - validation errors",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#ff4d97",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#ff3b78",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#ff2a56",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#ff172f",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#ff0404",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#f60f00",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#eb1a00",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#de2500",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#d22c00",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#fff7f4",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffe5d8",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffd1ba",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ffbc9a",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ffac81",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff9760",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#ff803a",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#ff7224",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#c44d0d",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffe6bd",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#fcd99c",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#fdc96e",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#fcc051",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ffb111",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#cc9300",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#b77e00",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a47200",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#6e4b00",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#daffd8",
      cssVar: "--rw-color-green-1",
      description: "A pale green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#b0feb5",
      cssVar: "--rw-color-green-2",
      description: "A light green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#89fe9c",
      cssVar: "--rw-color-green-3",
      description: "A soft green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#64fe8b",
      cssVar: "--rw-color-green-4",
      description: "A muted green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#3dfd83",
      cssVar: "--rw-color-green-5",
      description: "A medium green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#25ea78",
      cssVar: "--rw-color-green-6",
      description: "A vivid green success color - confirmation on dark",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#17ce6e",
      cssVar: "--rw-color-green-7",
      description: "A rich green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#10a961",
      cssVar: "--rw-color-green-8",
      description: "A deep green success color",
      theme: "darkHighContrast"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#0c8652",
      cssVar: "--rw-color-green-9",
      description: "Semantic success - confirmation and success",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#dbdb58",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#cad749",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#b4d539",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#9cd029",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#81c71e",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#76c319",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#6abd16",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#5fb912",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#55b30f",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#bff0ff",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#9de7ff",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#68ddff",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#3bd4ff",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#00b5dc",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#00abd5",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#009bc6",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#008cb2",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#00617d",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#fefeff",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#e9f3ff",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#cee4ff",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#bad8ff",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#a2ccff",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#8dbfff",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#73b0ff",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#57a0ff",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#1f70db",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#e1eaf8",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#cfdcf4",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#beccef",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#acbaeb",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#9ca8e6",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#8a93e2",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#797ddd",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#6867d9",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#6b55d6",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#fffcfd",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffe5ef",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ffd4e4",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#ffc2da",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#ffa7cb",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#ff8bbb",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#f875aa",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#cc437c",
      cssVar: "--rw-color-pink-9",
      description: "A dark plum pink color",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.caption",
      type: "color",
      value: "var(--color-base-4)",
      cssVar: "--rw-color-foreground-caption",
      description: "The caption foreground color for the dark theme",
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
      value: "var(--color-base-2)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the dark theme - muted-soft text",
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
      value: "var(--color-red-6)",
      cssVar: "--rw-color-foreground-danger",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning",
      type: "color",
      value: "var(--color-yellow-5)",
      cssVar: "--rw-color-foreground-warning",
      description: "The warning foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-foreground-success",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-5)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info",
      type: "color",
      value: "var(--color-sky-5)",
      cssVar: "--rw-color-foreground-info",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-foreground-discovery",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "Ink text on cream primary surfaces",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "Ink text on warning surfaces",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#a3adad",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#585d63",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#585d63",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#f6f7f8",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.caption-hover",
      type: "color",
      value: "#889297",
      cssVar: "--rw-color-foreground-caption-hover",
      description: "The caption foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.caption-pressed",
      type: "color",
      value: "#474f52",
      cssVar: "--rw-color-foreground-caption-pressed",
      description: "The caption foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.caption-focused",
      type: "color",
      value: "#474f52",
      cssVar: "--rw-color-foreground-caption-focused",
      description: "The caption foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.caption-disabled",
      type: "color",
      value: "#d4d9d9",
      cssVar: "--rw-color-foreground-caption-disabled",
      description: "The caption foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#026beb",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#003474",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#003474",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#7baeef",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#bdc4c4",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the dark theme - muted-soft text (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#697676",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the dark theme - muted-soft text (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#697676",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the dark theme - muted-soft text (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#bdbdbd",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the dark theme - muted-soft text (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#00826d",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#003a2e",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#003a2e",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#93ebd6",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#b11b2c",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#dd3d4b",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#dd3d4b",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#4a0000",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#4a0000",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#845b00",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#412600",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#412600",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#002819",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#355100",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#0a1300",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#0a1300",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#007595",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#003b52",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#003b52",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#3832a7",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#1a1166",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#1a1166",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#707b8a",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "Ink text on cream primary surfaces (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#9da7b2",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "Ink text on cream primary surfaces (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#9da7b2",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "Ink text on cream primary surfaces (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "Ink text on cream primary surfaces (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#49515f",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#6a7483",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#6a7483",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#bdbdbd",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#ffffff99",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "Ink text on warning surfaces (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "Ink text on warning surfaces (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "Ink text on warning surfaces (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "Ink text on warning surfaces (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the dark theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-6)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent",
      description: "The accent background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-1)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-3)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-1)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-4)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-3)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-8)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#080808",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#1b1b1b",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#1b1b1b",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#00000099",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the dark theme (disabled, 60% opacity)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#1b1d25",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#2f323e",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#2f323e",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#2a2e3a",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#424957",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#424957",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#14161a",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#555f67",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#262b2f",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#262b2f",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#8d979e",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#707b8a",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#9da7b2",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#9da7b2",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#4c535b",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#021311",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#103833",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#103833",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#000101",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#dc003d",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#67001d",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#67001d",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#ee818f",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#920031",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#540011",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#540011",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#d85968",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#cba053",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#725215",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#725215",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#f7ecd8",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#00ab40",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#003d0e",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#003d0e",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#a9efb6",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#5e7100",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#131700",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#131700",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#b9cd7c",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#0097bb",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#003e50",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#003e50",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#9fdcf0",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#3832a7",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#1a1166",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the dark theme (pressed, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#1a1166",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#6669b6",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "Hairline-strong border against ink cards",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-border-secondary",
      description: "Hairline border against ink surfaces",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-3)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-6)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-3)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-1)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-1)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-4)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the dark theme",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#3e444d",
      cssVar: "--rw-color-border-primary-hover",
      description: "Hairline-strong border against ink cards (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#15191c",
      cssVar: "--rw-color-border-primary-focused",
      description: "Hairline-strong border against ink cards (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#6b767d",
      cssVar: "--rw-color-border-primary-disabled",
      description: "Hairline-strong border against ink cards (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#707b8a",
      cssVar: "--rw-color-border-secondary-hover",
      description: "Hairline border against ink surfaces (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#9da7b2",
      cssVar: "--rw-color-border-secondary-focused",
      description: "Hairline border against ink surfaces (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#4c535b",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "Hairline border against ink surfaces (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#00826d",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#003a2e",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#93ebd6",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#7f002a",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#45000e",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#c74256",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#8c0000",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#510000",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#d04633",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#af7700",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#412a00",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#e8c791",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#22c243",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#004011",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#bef2c4",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#8d8b11",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#1d1c00",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#d6d795",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#4cb3d2",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#0a6178",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#d8f1f9",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#5f72b8",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#2c3a70",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#adb7d9",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the dark theme (disabled, 60% saturation)",
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
      path: "color.overlay.background-hover",
      type: "color",
      value: "#1b1d25",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the dark theme (hover, 20% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#2f323e",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the dark theme (pressed, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#2f323e",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the dark theme (focused, 40% brighter)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the dark theme (disabled, 60% saturation)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#3e444d",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the dark theme (hover, 20% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#15191c",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the dark theme (focused, 40% darker)",
      theme: "darkHighContrast"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#6b767d",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the dark theme (disabled, 60% saturation)",
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
      value: "var(--color-base-4)",
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
      value: "var(--color-green-8)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "darkHighContrast"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "darkHighContrast"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#1fb2a6",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "light"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#003832",
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
      path: "color.surface.4",
      type: "color",
      value: "#c3c4c4",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
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
      value: "#e791bb",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "light"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#e37ea8",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "light"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#df6c94",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "light"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#db597d",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "light"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#d74765",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "light"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#d3344a",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "light"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#cf222e",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "light"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#b51a17",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "light"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#9a1c0f",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "light"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#e3518e",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#e14777",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#e03c5e",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#de3143",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#dc2626",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#d92b20",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "light"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#d6301b",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color for light surfaces",
      theme: "light"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#d23516",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color for light surfaces",
      theme: "light"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#cd3a13",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color for light surfaces",
      theme: "light"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#faa276",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "light"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#fb9c6c",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "light"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#fa8d54",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "light"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#f38042",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "light"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#e97737",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "light"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#de743a",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "light"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#d36b2f",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "light"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#c2612b",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "light"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#a25226",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "light"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#e2b259",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "light"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#deab47",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "light"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#db9f10",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "light"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#d49400",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "light"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ca8b00",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "light"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#c08600",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "light"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#b77d00",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "light"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a77200",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "light"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#8f6300",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "light"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#67cc9a",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "light"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#57c791",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "light"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#2fc183",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "light"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#00b575",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "light"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#00af6f",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "light"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#00a469",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "light"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#009d63",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "light"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#008f5a",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "light"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#007a4d",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "light"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#c2c261",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "light"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#b4be58",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "light"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#a4bb4e",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "light"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#93b744",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "light"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#81b33a",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "light"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#79b136",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color for light surfaces",
      theme: "light"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#71ae33",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "light"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#69ac2f",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "light"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#61a92c",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color for light surfaces",
      theme: "light"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#47c5ea",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "light"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#2ec3eb",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "light"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#00b8e6",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "light"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#00afe0",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "light"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#00a6d6",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "light"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#009ecb",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "light"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#0095c2",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "light"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#008bb4",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "light"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#007496",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "light"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#83baff",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "light"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#7bb7ff",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "light"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#68acff",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "light"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#59a2ff",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "light"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#4f99f9",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "light"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4c90e8",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "light"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#468ae2",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "light"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#3f7ecf",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "light"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#3669ac",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "light"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#aeb1ff",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "light"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#a7a9ff",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "light"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a0a0ff",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "light"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9695ff",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "light"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8d8cfb",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "light"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#8584eb",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "light"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#7f7ee4",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "light"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#7473d1",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "light"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#6261af",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "light"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#fb9cc0",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "light"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#f993ba",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "light"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#f782b1",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "light"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#f075a8",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "light"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#e96fa2",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "light"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#db6a98",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "light"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#d1608f",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "light"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#c25b86",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "light"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#a34e71",
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
      value: "var(--color-base-5)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the light theme",
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
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the light theme",
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
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the light theme",
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
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "The primary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "The warning foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the light theme",
      theme: "light"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#676767",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#6d6d6d",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#484848",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#484848",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#94949499",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#00877c",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#005e55",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#005e55",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#a70006",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#800000",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#800000",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#ad0000",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#a66800",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#793e00",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#793e00",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#007d45",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#005722",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#005722",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#508500",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#295c00",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#295c00",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#008ab6",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#005e88",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#005e88",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#5b57b9",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#3b318f",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#3b318f",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#1d63b8",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#003d8f",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#003d8f",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#222222",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "The primary foreground color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#2c2c2c",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#2c2c2c",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "The primary foreground color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#222222",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "The warning foreground color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#2c2c2c",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#2c2c2c",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "The warning foreground color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#666666",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the light theme",
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
      description: "The accent background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-background-negative-subtle",
      description: "The negative background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-background-positive-subtle",
      description: "The positive background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery background color for the light theme",
      theme: "light"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#bebebe",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#ffffff99",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#b5b5b4",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#7a7a79",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#7a7a79",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#f4f4f3",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#acabaa",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#747372",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#747372",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#e8e7e6",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#909191",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#606161",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#606161",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#c3c4c4",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#b5b5b5",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#7a7a7a",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#f4f4f499",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#272727",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#323232",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#323232",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#1c1c1c99",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.background.link-hover",
      type: "color",
      value: "#1d63b8",
      cssVar: "--rw-color-background-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.link-pressed",
      type: "color",
      value: "#003d8f",
      cssVar: "--rw-color-background-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.link-focused",
      type: "color",
      value: "#003d8f",
      cssVar: "--rw-color-background-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.link-disabled",
      type: "color",
      value: "#658cc0",
      cssVar: "--rw-color-background-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#00877c",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#005e55",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#005e55",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#67aaa2",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#a70006",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#800000",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#800000",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#af514d",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#ad0000",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#b5594a",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#a66800",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#793e00",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#793e00",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#c19b60",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#007d45",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#005722",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#005722",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#589b77",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#508500",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#295c00",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#295c00",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#88aa69",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#008ab6",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#005e88",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#005e88",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#6ab2cd",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#5b57b9",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#3b318f",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#3b318f",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#8386c2",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle-hover",
      type: "color",
      value: "#164842",
      cssVar: "--rw-color-background-accent-subtle-hover",
      description: "The accent background color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle-pressed",
      type: "color",
      value: "#285952",
      cssVar: "--rw-color-background-accent-subtle-pressed",
      description: "The accent background color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle-focused",
      type: "color",
      value: "#285952",
      cssVar: "--rw-color-background-accent-subtle-focused",
      description: "The accent background color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.accent-subtle-disabled",
      type: "color",
      value: "#1b3531",
      cssVar: "--rw-color-background-accent-subtle-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle-hover",
      type: "color",
      value: "#b93c2d",
      cssVar: "--rw-color-background-danger-subtle-hover",
      description: "The danger background color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle-pressed",
      type: "color",
      value: "#d85947",
      cssVar: "--rw-color-background-danger-subtle-pressed",
      description: "The danger background color for the light theme (pressed, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle-focused",
      type: "color",
      value: "#d85947",
      cssVar: "--rw-color-background-danger-subtle-focused",
      description: "The danger background color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.background.danger-subtle-disabled",
      type: "color",
      value: "#813c32",
      cssVar: "--rw-color-background-danger-subtle-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.negative-subtle-hover",
      type: "color",
      value: "#aa0000",
      cssVar: "--rw-color-background-negative-subtle-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-subtle-pressed",
      type: "color",
      value: "#820000",
      cssVar: "--rw-color-background-negative-subtle-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-subtle-focused",
      type: "color",
      value: "#820000",
      cssVar: "--rw-color-background-negative-subtle-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.negative-subtle-disabled",
      type: "color",
      value: "#b25a48",
      cssVar: "--rw-color-background-negative-subtle-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle-hover",
      type: "color",
      value: "#6f4500",
      cssVar: "--rw-color-background-warning-subtle-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle-pressed",
      type: "color",
      value: "#502700",
      cssVar: "--rw-color-background-warning-subtle-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle-focused",
      type: "color",
      value: "#502700",
      cssVar: "--rw-color-background-warning-subtle-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.warning-subtle-disabled",
      type: "color",
      value: "#82683f",
      cssVar: "--rw-color-background-warning-subtle-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.success-subtle-hover",
      type: "color",
      value: "#005c31",
      cssVar: "--rw-color-background-success-subtle-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-subtle-pressed",
      type: "color",
      value: "#003f17",
      cssVar: "--rw-color-background-success-subtle-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-subtle-focused",
      type: "color",
      value: "#003f17",
      cssVar: "--rw-color-background-success-subtle-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.success-subtle-disabled",
      type: "color",
      value: "#407358",
      cssVar: "--rw-color-background-success-subtle-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.positive-subtle-hover",
      type: "color",
      value: "#398000",
      cssVar: "--rw-color-background-positive-subtle-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-subtle-pressed",
      type: "color",
      value: "#0c5800",
      cssVar: "--rw-color-background-positive-subtle-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-subtle-focused",
      type: "color",
      value: "#0c5800",
      cssVar: "--rw-color-background-positive-subtle-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.positive-subtle-disabled",
      type: "color",
      value: "#77a160",
      cssVar: "--rw-color-background-positive-subtle-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.info-subtle-hover",
      type: "color",
      value: "#005676",
      cssVar: "--rw-color-background-info-subtle-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-subtle-pressed",
      type: "color",
      value: "#003958",
      cssVar: "--rw-color-background-info-subtle-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-subtle-focused",
      type: "color",
      value: "#003958",
      cssVar: "--rw-color-background-info-subtle-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.info-subtle-disabled",
      type: "color",
      value: "#417184",
      cssVar: "--rw-color-background-info-subtle-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle-hover",
      type: "color",
      value: "#46428d",
      cssVar: "--rw-color-background-discovery-subtle-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle-pressed",
      type: "color",
      value: "#2c246c",
      cssVar: "--rw-color-background-discovery-subtle-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle-focused",
      type: "color",
      value: "#2c246c",
      cssVar: "--rw-color-background-discovery-subtle-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.background.discovery-subtle-disabled",
      type: "color",
      value: "#656795",
      cssVar: "--rw-color-background-discovery-subtle-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-border-negative-subtle",
      description: "The negative border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-border-positive-subtle",
      description: "The positive border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery border color for the light theme",
      theme: "light"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#333333",
      cssVar: "--rw-color-border-primary-hover",
      description: "The primary border color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#414141",
      cssVar: "--rw-color-border-primary-focused",
      description: "The primary border color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#26262699",
      cssVar: "--rw-color-border-primary-disabled",
      description: "The primary border color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#222222",
      cssVar: "--rw-color-border-secondary-hover",
      description: "The secondary border color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#2c2c2c",
      cssVar: "--rw-color-border-secondary-focused",
      description: "The secondary border color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#18181899",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "The secondary border color for the light theme (disabled, 60% opacity)",
      theme: "light"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#00877c",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#005e55",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#67aaa2",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#a70006",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#800000",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#af514d",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#ad0000",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#b5594a",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#a66800",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#793e00",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#c19b60",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#007d45",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#005722",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#589b77",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#508500",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#295c00",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#88aa69",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#008ab6",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#005e88",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#6ab2cd",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#5b57b9",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#3b318f",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#8386c2",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.accent-subtle-hover",
      type: "color",
      value: "#164842",
      cssVar: "--rw-color-border-accent-subtle-hover",
      description: "The accent border color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.border.accent-subtle-focused",
      type: "color",
      value: "#285952",
      cssVar: "--rw-color-border-accent-subtle-focused",
      description: "The accent border color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.border.accent-subtle-disabled",
      type: "color",
      value: "#1b3531",
      cssVar: "--rw-color-border-accent-subtle-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.danger-subtle-hover",
      type: "color",
      value: "#b93c2d",
      cssVar: "--rw-color-border-danger-subtle-hover",
      description: "The danger border color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.border.danger-subtle-focused",
      type: "color",
      value: "#d85947",
      cssVar: "--rw-color-border-danger-subtle-focused",
      description: "The danger border color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.border.danger-subtle-disabled",
      type: "color",
      value: "#813c32",
      cssVar: "--rw-color-border-danger-subtle-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.negative-subtle-hover",
      type: "color",
      value: "#aa0000",
      cssVar: "--rw-color-border-negative-subtle-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.negative-subtle-focused",
      type: "color",
      value: "#820000",
      cssVar: "--rw-color-border-negative-subtle-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.negative-subtle-disabled",
      type: "color",
      value: "#b25a48",
      cssVar: "--rw-color-border-negative-subtle-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.warning-subtle-hover",
      type: "color",
      value: "#6f4500",
      cssVar: "--rw-color-border-warning-subtle-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.warning-subtle-focused",
      type: "color",
      value: "#502700",
      cssVar: "--rw-color-border-warning-subtle-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.warning-subtle-disabled",
      type: "color",
      value: "#82683f",
      cssVar: "--rw-color-border-warning-subtle-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.success-subtle-hover",
      type: "color",
      value: "#005c31",
      cssVar: "--rw-color-border-success-subtle-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.success-subtle-focused",
      type: "color",
      value: "#003f17",
      cssVar: "--rw-color-border-success-subtle-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.success-subtle-disabled",
      type: "color",
      value: "#407358",
      cssVar: "--rw-color-border-success-subtle-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.positive-subtle-hover",
      type: "color",
      value: "#398000",
      cssVar: "--rw-color-border-positive-subtle-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.positive-subtle-focused",
      type: "color",
      value: "#0c5800",
      cssVar: "--rw-color-border-positive-subtle-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.positive-subtle-disabled",
      type: "color",
      value: "#77a160",
      cssVar: "--rw-color-border-positive-subtle-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.info-subtle-hover",
      type: "color",
      value: "#005676",
      cssVar: "--rw-color-border-info-subtle-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.info-subtle-focused",
      type: "color",
      value: "#003958",
      cssVar: "--rw-color-border-info-subtle-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.info-subtle-disabled",
      type: "color",
      value: "#417184",
      cssVar: "--rw-color-border-info-subtle-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.border.discovery-subtle-hover",
      type: "color",
      value: "#46428d",
      cssVar: "--rw-color-border-discovery-subtle-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.border.discovery-subtle-focused",
      type: "color",
      value: "#2c246c",
      cssVar: "--rw-color-border-discovery-subtle-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.border.discovery-subtle-disabled",
      type: "color",
      value: "#656795",
      cssVar: "--rw-color-border-discovery-subtle-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
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
      path: "color.overlay.background-hover",
      type: "color",
      value: "#acabaa",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the light theme (hover, 20% darker)",
      theme: "light"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#747372",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the light theme (pressed, 40% darker)",
      theme: "light"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#747372",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the light theme (focused, 40% darker)",
      theme: "light"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#e8e7e6",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the light theme (disabled, 60% saturation)",
      theme: "light"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#333333",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the light theme (hover, 20% brighter)",
      theme: "light"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#414141",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the light theme (focused, 40% brighter)",
      theme: "light"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#26262699",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the light theme (disabled, 60% opacity)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "light"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "light"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "light"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "light"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "light"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "light"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "light"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "light"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "light"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "light"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "light"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "light"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "light"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "light"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "light"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "light"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "light"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "light"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "light"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "light"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "light"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "light"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "light"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "light"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "light"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "light"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "light"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "light"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "light"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "light"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#449a93",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "lightDimmed"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#1a5a53",
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
      path: "color.surface.4",
      type: "color",
      value: "#afafaf",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
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
      value: "#c88ca9",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#c3819c",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#be768f",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b96b81",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#b46172",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#ae5662",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#ab4a51",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#9c413f",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "lightDimmed"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#8d3e35",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#bd678b",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#bb617d",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#b85b6e",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#b6555f",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#b34e4e",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#b1504a",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#af5246",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color for light surfaces",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#ad5442",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color for light surfaces",
      theme: "lightDimmed"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#aa563f",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color for light surfaces",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#d4987a",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#d39474",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#cf8b67",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#c7835e",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#be7d58",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#b77b5a",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#ae7453",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#a46d4f",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#916247",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#bea16b",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#b99b61",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#b2903f",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#ae8933",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#a98331",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#a3802f",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#9f7b2e",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#96742c",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#896b28",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#74b092",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#6aaa8b",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#51a380",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#2e9d76",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#2d9a72",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#2b946e",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#2a906b",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#288965",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "lightDimmed"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#247d5d",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#a8a870",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#9fa46b",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#95a165",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#8a9e5e",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#7f9b57",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#7a9a54",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color for light surfaces",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#759852",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#70974f",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "lightDimmed"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#6b954c",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color for light surfaces",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#61abc1",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#53a8be",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#359eb8",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#3499b5",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#3393af",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#318fa9",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#3089a5",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#2e849d",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#29768d",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#80a8da",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#7ca6d9",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#729fd6",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#6a98d4",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#6592cd",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#648cc0",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#6088bb",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#5c80ad",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#547197",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#989ae1",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#9496e0",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#9090df",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#8b8add",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8786d8",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#8484ca",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#8181c4",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#7c7bb4",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#70709b",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#da8fac",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#d78aa8",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#d381a2",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#cc7b9c",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#c67898",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#bb7592",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#b2708b",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#a76d85",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "lightDimmed"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#926376",
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
      value: "var(--color-base-5)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the light theme",
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
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the light theme",
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
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the light theme",
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
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "The primary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "The warning foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#737373",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#595959",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#595959",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#8e8e8e99",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#26857d",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#206e67",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#206e67",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#962c2f",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#812525",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#812525",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#992c2c",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#832626",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#832626",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#956e2b",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#7d5224",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#7d5224",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#257f57",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#1f6a3c",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#1f6a3c",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#5e8326",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#426d20",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#426d20",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#2e839e",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#276885",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#276885",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#6c6aa1",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#534d86",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#534d86",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#446c9e",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#285189",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#285189",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#3e3e3e",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "The primary foreground color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#454545",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#454545",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "The primary foreground color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#3e3e3e",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "The warning foreground color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#454545",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#454545",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "The warning foreground color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#6e6e6e",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the light theme",
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
      description: "The accent background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-background-negative-subtle",
      description: "The negative background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-background-positive-subtle",
      description: "The positive background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery background color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#d9d9d999",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#a5a5a4",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#7c7c7b",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#7c7c7b",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#d2d2d0",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#9f9e9d",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#777776",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#777776",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#c9c8c7",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#8b8c8c",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#696a6a",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#696a6a",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#afafaf",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#a5a5a5",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#7c7c7c",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#d1d1d199",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#424242",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#494949",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#494949",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#3a3a3a99",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.link-hover",
      type: "color",
      value: "#446c9e",
      cssVar: "--rw-color-background-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.link-pressed",
      type: "color",
      value: "#285189",
      cssVar: "--rw-color-background-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.link-focused",
      type: "color",
      value: "#285189",
      cssVar: "--rw-color-background-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.link-disabled",
      type: "color",
      value: "#7289a7",
      cssVar: "--rw-color-background-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#26857d",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#206e67",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#206e67",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#739994",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#962c2f",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#812525",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#812525",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#996663",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#992c2c",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#832626",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#832626",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#9d6a62",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#956e2b",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#7d5224",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#7d5224",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#a7916f",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#257f57",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#1f6a3c",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#1f6a3c",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#698e7a",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#5e8326",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#426d20",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#426d20",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#869974",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#2e839e",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#276885",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#276885",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#76a1b1",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#6c6aa1",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#534d86",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#534d86",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#8587ab",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle-hover",
      type: "color",
      value: "#325c57",
      cssVar: "--rw-color-background-accent-subtle-hover",
      description: "The accent background color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle-pressed",
      type: "color",
      value: "#426560",
      cssVar: "--rw-color-background-accent-subtle-pressed",
      description: "The accent background color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle-focused",
      type: "color",
      value: "#426560",
      cssVar: "--rw-color-background-accent-subtle-focused",
      description: "The accent background color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.accent-subtle-disabled",
      type: "color",
      value: "#364e4a",
      cssVar: "--rw-color-background-accent-subtle-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle-hover",
      type: "color",
      value: "#9f584f",
      cssVar: "--rw-color-background-danger-subtle-hover",
      description: "The danger background color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle-pressed",
      type: "color",
      value: "#b46b61",
      cssVar: "--rw-color-background-danger-subtle-pressed",
      description: "The danger background color for the light theme (pressed, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle-focused",
      type: "color",
      value: "#b46b61",
      cssVar: "--rw-color-background-danger-subtle-focused",
      description: "The danger background color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.danger-subtle-disabled",
      type: "color",
      value: "#7d534c",
      cssVar: "--rw-color-background-danger-subtle-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-subtle-hover",
      type: "color",
      value: "#982c2c",
      cssVar: "--rw-color-background-negative-subtle-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-subtle-pressed",
      type: "color",
      value: "#822626",
      cssVar: "--rw-color-background-negative-subtle-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-subtle-focused",
      type: "color",
      value: "#822626",
      cssVar: "--rw-color-background-negative-subtle-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.negative-subtle-disabled",
      type: "color",
      value: "#9b6a60",
      cssVar: "--rw-color-background-negative-subtle-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle-hover",
      type: "color",
      value: "#785723",
      cssVar: "--rw-color-background-warning-subtle-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle-pressed",
      type: "color",
      value: "#67411e",
      cssVar: "--rw-color-background-warning-subtle-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle-focused",
      type: "color",
      value: "#67411e",
      cssVar: "--rw-color-background-warning-subtle-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.warning-subtle-disabled",
      type: "color",
      value: "#7e6e56",
      cssVar: "--rw-color-background-warning-subtle-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle-hover",
      type: "color",
      value: "#206d49",
      cssVar: "--rw-color-background-success-subtle-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle-pressed",
      type: "color",
      value: "#1b5d33",
      cssVar: "--rw-color-background-success-subtle-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle-focused",
      type: "color",
      value: "#1b5d33",
      cssVar: "--rw-color-background-success-subtle-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.success-subtle-disabled",
      type: "color",
      value: "#557564",
      cssVar: "--rw-color-background-success-subtle-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-subtle-hover",
      type: "color",
      value: "#4e8125",
      cssVar: "--rw-color-background-positive-subtle-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-subtle-pressed",
      type: "color",
      value: "#296b1f",
      cssVar: "--rw-color-background-positive-subtle-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-subtle-focused",
      type: "color",
      value: "#296b1f",
      cssVar: "--rw-color-background-positive-subtle-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.positive-subtle-disabled",
      type: "color",
      value: "#7b926e",
      cssVar: "--rw-color-background-positive-subtle-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle-hover",
      type: "color",
      value: "#24647b",
      cssVar: "--rw-color-background-info-subtle-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle-pressed",
      type: "color",
      value: "#1f506b",
      cssVar: "--rw-color-background-info-subtle-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle-focused",
      type: "color",
      value: "#1f506b",
      cssVar: "--rw-color-background-info-subtle-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.info-subtle-disabled",
      type: "color",
      value: "#57747f",
      cssVar: "--rw-color-background-info-subtle-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle-hover",
      type: "color",
      value: "#5b5985",
      cssVar: "--rw-color-background-discovery-subtle-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle-pressed",
      type: "color",
      value: "#464071",
      cssVar: "--rw-color-background-discovery-subtle-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle-focused",
      type: "color",
      value: "#464071",
      cssVar: "--rw-color-background-discovery-subtle-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.background.discovery-subtle-disabled",
      type: "color",
      value: "#70728b",
      cssVar: "--rw-color-background-discovery-subtle-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-border-negative-subtle",
      description: "The negative border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-border-positive-subtle",
      description: "The positive border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery border color for the light theme",
      theme: "lightDimmed"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#4a4a4a",
      cssVar: "--rw-color-border-primary-hover",
      description: "The primary border color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#545454",
      cssVar: "--rw-color-border-primary-focused",
      description: "The primary border color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#41414199",
      cssVar: "--rw-color-border-primary-disabled",
      description: "The primary border color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#3e3e3e",
      cssVar: "--rw-color-border-secondary-hover",
      description: "The secondary border color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#454545",
      cssVar: "--rw-color-border-secondary-focused",
      description: "The secondary border color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#37373799",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "The secondary border color for the light theme (disabled, 60% opacity)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#26857d",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#206e67",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#739994",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#962c2f",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#812525",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#996663",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#992c2c",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#832626",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#9d6a62",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#956e2b",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#7d5224",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#a7916f",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#257f57",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#1f6a3c",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#698e7a",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#5e8326",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#426d20",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#869974",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#2e839e",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#276885",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#76a1b1",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#6c6aa1",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#534d86",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#8587ab",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-subtle-hover",
      type: "color",
      value: "#325c57",
      cssVar: "--rw-color-border-accent-subtle-hover",
      description: "The accent border color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-subtle-focused",
      type: "color",
      value: "#426560",
      cssVar: "--rw-color-border-accent-subtle-focused",
      description: "The accent border color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.accent-subtle-disabled",
      type: "color",
      value: "#364e4a",
      cssVar: "--rw-color-border-accent-subtle-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-subtle-hover",
      type: "color",
      value: "#9f584f",
      cssVar: "--rw-color-border-danger-subtle-hover",
      description: "The danger border color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-subtle-focused",
      type: "color",
      value: "#b46b61",
      cssVar: "--rw-color-border-danger-subtle-focused",
      description: "The danger border color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.danger-subtle-disabled",
      type: "color",
      value: "#7d534c",
      cssVar: "--rw-color-border-danger-subtle-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-subtle-hover",
      type: "color",
      value: "#982c2c",
      cssVar: "--rw-color-border-negative-subtle-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-subtle-focused",
      type: "color",
      value: "#822626",
      cssVar: "--rw-color-border-negative-subtle-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.negative-subtle-disabled",
      type: "color",
      value: "#9b6a60",
      cssVar: "--rw-color-border-negative-subtle-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-subtle-hover",
      type: "color",
      value: "#785723",
      cssVar: "--rw-color-border-warning-subtle-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-subtle-focused",
      type: "color",
      value: "#67411e",
      cssVar: "--rw-color-border-warning-subtle-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.warning-subtle-disabled",
      type: "color",
      value: "#7e6e56",
      cssVar: "--rw-color-border-warning-subtle-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-subtle-hover",
      type: "color",
      value: "#206d49",
      cssVar: "--rw-color-border-success-subtle-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-subtle-focused",
      type: "color",
      value: "#1b5d33",
      cssVar: "--rw-color-border-success-subtle-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.success-subtle-disabled",
      type: "color",
      value: "#557564",
      cssVar: "--rw-color-border-success-subtle-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-subtle-hover",
      type: "color",
      value: "#4e8125",
      cssVar: "--rw-color-border-positive-subtle-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-subtle-focused",
      type: "color",
      value: "#296b1f",
      cssVar: "--rw-color-border-positive-subtle-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.positive-subtle-disabled",
      type: "color",
      value: "#7b926e",
      cssVar: "--rw-color-border-positive-subtle-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-subtle-hover",
      type: "color",
      value: "#24647b",
      cssVar: "--rw-color-border-info-subtle-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-subtle-focused",
      type: "color",
      value: "#1f506b",
      cssVar: "--rw-color-border-info-subtle-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.info-subtle-disabled",
      type: "color",
      value: "#57747f",
      cssVar: "--rw-color-border-info-subtle-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-subtle-hover",
      type: "color",
      value: "#5b5985",
      cssVar: "--rw-color-border-discovery-subtle-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-subtle-focused",
      type: "color",
      value: "#464071",
      cssVar: "--rw-color-border-discovery-subtle-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.border.discovery-subtle-disabled",
      type: "color",
      value: "#70728b",
      cssVar: "--rw-color-border-discovery-subtle-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
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
      path: "color.overlay.background-hover",
      type: "color",
      value: "#9f9e9d",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the light theme (hover, 20% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#777776",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the light theme (pressed, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#777776",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the light theme (focused, 40% darker)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#c9c8c7",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the light theme (disabled, 60% saturation)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#4a4a4a",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the light theme (hover, 20% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#545454",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the light theme (focused, 40% brighter)",
      theme: "lightDimmed"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#41414199",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the light theme (disabled, 60% opacity)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "lightDimmed"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "lightDimmed"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "lightDimmed"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
      value: "#00bcad",
      cssVar: "--rw-color-brand-1",
      description: "The Storm Software brand teal color",
      theme: "lightHighContrast"
    },
    {
      path: "color.brand.2",
      type: "color",
      value: "#000000",
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
      path: "color.surface.4",
      type: "color",
      value: "#e0e4e4",
      cssVar: "--rw-color-surface-4",
      description: "The fourth level surface of the palette - used for the highest level of elevation (drawers, modals, etc.)",
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
      value: "#fcb3d6",
      cssVar: "--rw-color-red-1",
      description: "A pale warm coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#fa93be",
      cssVar: "--rw-color-red-2",
      description: "A light salmon red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f974a2",
      cssVar: "--rw-color-red-3",
      description: "A soft coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#f85481",
      cssVar: "--rw-color-red-4",
      description: "A muted warm coral color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#f6365e",
      cssVar: "--rw-color-red-5",
      description: "A medium salmon red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#f51534",
      cssVar: "--rw-color-red-6",
      description: "A vivid coral red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#eb0010",
      cssVar: "--rw-color-red-7",
      description: "A rich dusty red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#b50300",
      cssVar: "--rw-color-red-8",
      description: "A deep brick red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#820c00",
      cssVar: "--rw-color-red-9",
      description: "A dark brownish red color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.1",
      type: "color",
      value: "#ff4d97",
      cssVar: "--rw-color-apple-1",
      description: "A light apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.2",
      type: "color",
      value: "#ff3b78",
      cssVar: "--rw-color-apple-2",
      description: "A soft apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.3",
      type: "color",
      value: "#ff2a56",
      cssVar: "--rw-color-apple-3",
      description: "A subtle apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.4",
      type: "color",
      value: "#ff172f",
      cssVar: "--rw-color-apple-4",
      description: "A muted apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.5",
      type: "color",
      value: "#ff0404",
      cssVar: "--rw-color-apple-5",
      description: "A medium apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.6",
      type: "color",
      value: "#f60f00",
      cssVar: "--rw-color-apple-6",
      description: "A vivid apple negative color",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.7",
      type: "color",
      value: "#eb1a00",
      cssVar: "--rw-color-apple-7",
      description: "A rich apple negative color for light surfaces",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.8",
      type: "color",
      value: "#de2500",
      cssVar: "--rw-color-apple-8",
      description: "A dark apple negative color for light surfaces",
      theme: "lightHighContrast"
    },
    {
      path: "color.apple.9",
      type: "color",
      value: "#d22c00",
      cssVar: "--rw-color-apple-9",
      description: "A very dark apple negative color for light surfaces",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffc2a4",
      cssVar: "--rw-color-orange-1",
      description: "A pale peach orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffba97",
      cssVar: "--rw-color-orange-2",
      description: "A light apricot orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffa373",
      cssVar: "--rw-color-orange-3",
      description: "A soft sandy orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ff8c4e",
      cssVar: "--rw-color-orange-4",
      description: "A muted warm orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ff7a30",
      cssVar: "--rw-color-orange-5",
      description: "A medium tangerine orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff7224",
      cssVar: "--rw-color-orange-6",
      description: "A bright amber orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#f6620d",
      cssVar: "--rw-color-orange-7",
      description: "A rich burnt orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#db550a",
      cssVar: "--rw-color-orange-8",
      description: "A deep rust orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#a5410a",
      cssVar: "--rw-color-orange-9",
      description: "A dark brownish orange color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffc457",
      cssVar: "--rw-color-yellow-1",
      description: "A pale wheat gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#febb38",
      cssVar: "--rw-color-yellow-2",
      description: "A light sandy gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#e29f00",
      cssVar: "--rw-color-yellow-3",
      description: "A soft golden yellow color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#c18600",
      cssVar: "--rw-color-yellow-4",
      description: "A muted amber gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#b27b00",
      cssVar: "--rw-color-yellow-5",
      description: "A medium honey gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#a47200",
      cssVar: "--rw-color-yellow-6",
      description: "A vivid golden yellow color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#976700",
      cssVar: "--rw-color-yellow-7",
      description: "A rich ochre gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#7f5700",
      cssVar: "--rw-color-yellow-8",
      description: "A deep bronze gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#5d4000",
      cssVar: "--rw-color-yellow-9",
      description: "A dark brownish gold color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#64e6a6",
      cssVar: "--rw-color-green-1",
      description: "A pale mint green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#4ae299",
      cssVar: "--rw-color-green-2",
      description: "A light seafoam green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#0fda84",
      cssVar: "--rw-color-green-3",
      description: "A soft spring green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#00945f",
      cssVar: "--rw-color-green-4",
      description: "A muted jade green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#008b58",
      cssVar: "--rw-color-green-5",
      description: "A medium emerald green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#007b4f",
      cssVar: "--rw-color-green-6",
      description: "A vivid emerald green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#007147",
      cssVar: "--rw-color-green-7",
      description: "A rich forest green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#005d3a",
      cssVar: "--rw-color-green-8",
      description: "A deep pine green color",
      theme: "lightHighContrast"
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#003e27",
      cssVar: "--rw-color-green-9",
      description: "A dark evergreen color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.1",
      type: "color",
      value: "#dbdb58",
      cssVar: "--rw-color-avocado-1",
      description: "A light yellow-green positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.2",
      type: "color",
      value: "#cad749",
      cssVar: "--rw-color-avocado-2",
      description: "A soft yellow-green positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.3",
      type: "color",
      value: "#b4d539",
      cssVar: "--rw-color-avocado-3",
      description: "A subtle avocado positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.4",
      type: "color",
      value: "#9cd029",
      cssVar: "--rw-color-avocado-4",
      description: "A muted avocado positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.5",
      type: "color",
      value: "#81c71e",
      cssVar: "--rw-color-avocado-5",
      description: "A medium avocado positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.6",
      type: "color",
      value: "#76c319",
      cssVar: "--rw-color-avocado-6",
      description: "A vivid avocado positive color for light surfaces",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.7",
      type: "color",
      value: "#6abd16",
      cssVar: "--rw-color-avocado-7",
      description: "A rich avocado positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.8",
      type: "color",
      value: "#5fb912",
      cssVar: "--rw-color-avocado-8",
      description: "A deep avocado positive color",
      theme: "lightHighContrast"
    },
    {
      path: "color.avocado.9",
      type: "color",
      value: "#55b30f",
      cssVar: "--rw-color-avocado-9",
      description: "A dark avocado positive color for light surfaces",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.1",
      type: "color",
      value: "#48d6ff",
      cssVar: "--rw-color-sky-1",
      description: "A pale sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.2",
      type: "color",
      value: "#26d1ff",
      cssVar: "--rw-color-sky-2",
      description: "A light aqua sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.3",
      type: "color",
      value: "#00afdb",
      cssVar: "--rw-color-sky-3",
      description: "A soft bright sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.4",
      type: "color",
      value: "#00a4d2",
      cssVar: "--rw-color-sky-4",
      description: "A vivid sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.5",
      type: "color",
      value: "#0098c4",
      cssVar: "--rw-color-sky-5",
      description: "A medium electric sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.6",
      type: "color",
      value: "#008cb4",
      cssVar: "--rw-color-sky-6",
      description: "A bright azure sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.7",
      type: "color",
      value: "#0080a7",
      cssVar: "--rw-color-sky-7",
      description: "A rich ocean sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.8",
      type: "color",
      value: "#007192",
      cssVar: "--rw-color-sky-8",
      description: "A deep teal sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.sky.9",
      type: "color",
      value: "#004f67",
      cssVar: "--rw-color-sky-9",
      description: "A dark steel sky color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#bedbff",
      cssVar: "--rw-color-blue-1",
      description: "A pale periwinkle blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#b2d5ff",
      cssVar: "--rw-color-blue-2",
      description: "A light sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#97c6ff",
      cssVar: "--rw-color-blue-3",
      description: "A soft cornflower blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#81b8ff",
      cssVar: "--rw-color-blue-4",
      description: "A muted bright blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#6aabff",
      cssVar: "--rw-color-blue-5",
      description: "A medium azure blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4d9bff",
      cssVar: "--rw-color-blue-6",
      description: "A vivid sky blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#3b91ff",
      cssVar: "--rw-color-blue-7",
      description: "A rich cerulean blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#267eef",
      cssVar: "--rw-color-blue-8",
      description: "A deep navy blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#1a60bb",
      cssVar: "--rw-color-blue-9",
      description: "A dark midnight blue color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#fcfcff",
      cssVar: "--rw-color-purple-1",
      description: "A pale lavender purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#f2f2ff",
      cssVar: "--rw-color-purple-2",
      description: "A light periwinkle purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#e8e8ff",
      cssVar: "--rw-color-purple-3",
      description: "A soft violet purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#d8d8ff",
      cssVar: "--rw-color-purple-4",
      description: "A muted indigo purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#c6c5ff",
      cssVar: "--rw-color-purple-5",
      description: "A medium periwinkle purple color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#a3a2ff",
      cssVar: "--rw-color-purple-6",
      description: "A vivid soft indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#9493fb",
      cssVar: "--rw-color-purple-7",
      description: "A rich slate indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#7a79ea",
      cssVar: "--rw-color-purple-8",
      description: "A deep muted indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#5553c5",
      cssVar: "--rw-color-purple-9",
      description: "A dark navy indigo color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffdcea",
      cssVar: "--rw-color-pink-1",
      description: "A pale blush pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#ffcce0",
      cssVar: "--rw-color-pink-2",
      description: "A light rose pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffb1d0",
      cssVar: "--rw-color-pink-3",
      description: "A soft coral pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ff94c0",
      cssVar: "--rw-color-pink-4",
      description: "A muted bright pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#ff81b6",
      cssVar: "--rw-color-pink-5",
      description: "A medium hot pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f56fa6",
      cssVar: "--rw-color-pink-6",
      description: "A vivid magenta pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#ec5b98",
      cssVar: "--rw-color-pink-7",
      description: "A rich fuchsia pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#dc4f8a",
      cssVar: "--rw-color-pink-8",
      description: "A deep berry pink color",
      theme: "lightHighContrast"
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#b3386a",
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
      value: "var(--color-base-5)",
      cssVar: "--rw-color-foreground-secondary",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.body",
      type: "color",
      value: "var(--color-base-3)",
      cssVar: "--rw-color-foreground-body",
      description: "The body foreground color for the light theme",
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
      path: "color.foreground.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-foreground-negative",
      description: "The negative foreground color for the light theme",
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
      path: "color.foreground.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-foreground-positive",
      description: "The positive foreground color for the light theme",
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
      path: "color.foreground.primary-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-primary-inverse",
      description: "The primary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-secondary-inverse",
      description: "The secondary foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-accent-inverse",
      description: "The accent foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-danger-inverse",
      description: "The danger foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-negative-inverse",
      description: "The negative foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-inverse",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-foreground-warning-inverse",
      description: "The warning foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-success-inverse",
      description: "The success foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-positive-inverse",
      description: "The positive foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-info-inverse",
      description: "The info foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-foreground-discovery-inverse",
      description: "The discovery foreground color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-primary-hover",
      description: "The primary foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-primary-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-primary-focused",
      description: "The primary foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-primary-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-hover",
      type: "color",
      value: "#5c5c5c",
      cssVar: "--rw-color-foreground-secondary-hover",
      description: "The secondary foreground color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-foreground-secondary-focused",
      description: "The secondary foreground color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-secondary-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.body-hover",
      type: "color",
      value: "#656565",
      cssVar: "--rw-color-foreground-body-hover",
      description: "The body foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.body-pressed",
      type: "color",
      value: "#2f2f2f",
      cssVar: "--rw-color-foreground-body-pressed",
      description: "The body foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.body-focused",
      type: "color",
      value: "#2f2f2f",
      cssVar: "--rw-color-foreground-body-focused",
      description: "The body foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.body-disabled",
      type: "color",
      value: "#9d9d9d99",
      cssVar: "--rw-color-foreground-body-disabled",
      description: "The body foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-hover",
      type: "color",
      value: "#00514a",
      cssVar: "--rw-color-foreground-accent-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-pressed",
      type: "color",
      value: "#001613",
      cssVar: "--rw-color-foreground-accent-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-focused",
      type: "color",
      value: "#001613",
      cssVar: "--rw-color-foreground-accent-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-accent-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-hover",
      type: "color",
      value: "#7f0005",
      cssVar: "--rw-color-foreground-danger-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-pressed",
      type: "color",
      value: "#470000",
      cssVar: "--rw-color-foreground-danger-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-focused",
      type: "color",
      value: "#470000",
      cssVar: "--rw-color-foreground-danger-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-danger-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-hover",
      type: "color",
      value: "#880000",
      cssVar: "--rw-color-foreground-negative-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-pressed",
      type: "color",
      value: "#4d0000",
      cssVar: "--rw-color-foreground-negative-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-focused",
      type: "color",
      value: "#4d0000",
      cssVar: "--rw-color-foreground-negative-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-negative-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-hover",
      type: "color",
      value: "#7e4f00",
      cssVar: "--rw-color-foreground-warning-hover",
      description: "The warning foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-pressed",
      type: "color",
      value: "#3d1f00",
      cssVar: "--rw-color-foreground-warning-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-focused",
      type: "color",
      value: "#3d1f00",
      cssVar: "--rw-color-foreground-warning-focused",
      description: "The warning foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-warning-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-hover",
      type: "color",
      value: "#004325",
      cssVar: "--rw-color-foreground-success-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-pressed",
      type: "color",
      value: "#000b04",
      cssVar: "--rw-color-foreground-success-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-focused",
      type: "color",
      value: "#000b04",
      cssVar: "--rw-color-foreground-success-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-success-disabled",
      description: "The success foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-hover",
      type: "color",
      value: "#2f4e00",
      cssVar: "--rw-color-foreground-positive-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-pressed",
      type: "color",
      value: "#081300",
      cssVar: "--rw-color-foreground-positive-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-focused",
      type: "color",
      value: "#081300",
      cssVar: "--rw-color-foreground-positive-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-positive-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-hover",
      type: "color",
      value: "#007195",
      cssVar: "--rw-color-foreground-info-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-pressed",
      type: "color",
      value: "#003952",
      cssVar: "--rw-color-foreground-info-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-focused",
      type: "color",
      value: "#003952",
      cssVar: "--rw-color-foreground-info-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-info-disabled",
      description: "The info foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-hover",
      type: "color",
      value: "#4c46d2",
      cssVar: "--rw-color-foreground-discovery-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-pressed",
      type: "color",
      value: "#24188c",
      cssVar: "--rw-color-foreground-discovery-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-focused",
      type: "color",
      value: "#24188c",
      cssVar: "--rw-color-foreground-discovery-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-discovery-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.link-hover",
      type: "color",
      value: "#0058c2",
      cssVar: "--rw-color-foreground-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.link-pressed",
      type: "color",
      value: "#00285d",
      cssVar: "--rw-color-foreground-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.link-focused",
      type: "color",
      value: "#00285d",
      cssVar: "--rw-color-foreground-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.link-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-foreground-primary-inverse-hover",
      description: "The primary foreground color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-pressed",
      type: "color",
      value: "#060606",
      cssVar: "--rw-color-foreground-primary-inverse-pressed",
      description: "The primary foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-focused",
      type: "color",
      value: "#060606",
      cssVar: "--rw-color-foreground-primary-inverse-focused",
      description: "The primary foreground color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.primary-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-primary-inverse-disabled",
      description: "The primary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-secondary-inverse-hover",
      description: "The secondary foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-secondary-inverse-pressed",
      description: "The secondary foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-secondary-inverse-focused",
      description: "The secondary foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.secondary-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-secondary-inverse-disabled",
      description: "The secondary foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-accent-inverse-hover",
      description: "The accent foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-accent-inverse-pressed",
      description: "The accent foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-accent-inverse-focused",
      description: "The accent foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.accent-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-accent-inverse-disabled",
      description: "The accent foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-danger-inverse-hover",
      description: "The danger foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-danger-inverse-pressed",
      description: "The danger foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-danger-inverse-focused",
      description: "The danger foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.danger-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-danger-inverse-disabled",
      description: "The danger foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-negative-inverse-hover",
      description: "The negative foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-negative-inverse-pressed",
      description: "The negative foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-negative-inverse-focused",
      description: "The negative foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.negative-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-negative-inverse-disabled",
      description: "The negative foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-foreground-warning-inverse-hover",
      description: "The warning foreground color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-pressed",
      type: "color",
      value: "#060606",
      cssVar: "--rw-color-foreground-warning-inverse-pressed",
      description: "The warning foreground color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-focused",
      type: "color",
      value: "#060606",
      cssVar: "--rw-color-foreground-warning-inverse-focused",
      description: "The warning foreground color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.warning-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-warning-inverse-disabled",
      description: "The warning foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-success-inverse-hover",
      description: "The success foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-success-inverse-pressed",
      description: "The success foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-success-inverse-focused",
      description: "The success foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.success-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-success-inverse-disabled",
      description: "The success foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-positive-inverse-hover",
      description: "The positive foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-positive-inverse-pressed",
      description: "The positive foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-positive-inverse-focused",
      description: "The positive foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.positive-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-positive-inverse-disabled",
      description: "The positive foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-info-inverse-hover",
      description: "The info foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-info-inverse-pressed",
      description: "The info foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-info-inverse-focused",
      description: "The info foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.info-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-info-inverse-disabled",
      description: "The info foreground color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-foreground-discovery-inverse-hover",
      description: "The discovery foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-discovery-inverse-pressed",
      description: "The discovery foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-foreground-discovery-inverse-focused",
      description: "The discovery foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.foreground.discovery-inverse-disabled",
      type: "color",
      value: "#5b5b5b",
      cssVar: "--rw-color-foreground-discovery-inverse-disabled",
      description: "The discovery foreground color for the light theme (disabled, 60% opacity)",
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
      path: "color.background.highest",
      type: "color",
      value: "var(--color-surface-4)",
      cssVar: "--rw-color-background-highest",
      description: "The highest level of elevation background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary",
      type: "color",
      value: "var(--color-base-1)",
      cssVar: "--rw-color-background-primary",
      description: "The primary background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary",
      type: "color",
      value: "var(--color-base-8)",
      cssVar: "--rw-color-background-secondary",
      description: "The secondary background color for the light theme",
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
      description: "The accent background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-background-danger",
      description: "The danger background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-background-negative",
      description: "The negative background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-background-warning",
      description: "The warning background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-background-success",
      description: "The success background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-background-positive",
      description: "The positive background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-background-info",
      description: "The info background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-background-discovery",
      description: "The discovery background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-background-accent-subtle",
      description: "The accent background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-background-danger-subtle",
      description: "The danger background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-background-negative-subtle",
      description: "The negative background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-background-warning-subtle",
      description: "The warning background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-background-success-subtle",
      description: "The success background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-background-positive-subtle",
      description: "The positive background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-background-info-subtle",
      description: "The info background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-background-discovery-subtle",
      description: "The discovery background color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.page-hover",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-background-page-hover",
      description: "The page background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.page-pressed",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-pressed",
      description: "The page background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.page-focused",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-background-page-focused",
      description: "The page background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.page-disabled",
      type: "color",
      value: "#ffffff99",
      cssVar: "--rw-color-background-page-disabled",
      description: "The page background color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.elevated-hover",
      type: "color",
      value: "#cfcfc9",
      cssVar: "--rw-color-background-elevated-hover",
      description: "The elevated background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.elevated-pressed",
      type: "color",
      value: "#7d7d70",
      cssVar: "--rw-color-background-elevated-pressed",
      description: "The elevated background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.elevated-focused",
      type: "color",
      value: "#7d7d70",
      cssVar: "--rw-color-background-elevated-focused",
      description: "The elevated background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.elevated-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-background-elevated-disabled",
      description: "The elevated background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.floating-hover",
      type: "color",
      value: "#c3bfba",
      cssVar: "--rw-color-background-floating-hover",
      description: "The floating background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.floating-pressed",
      type: "color",
      value: "#746d67",
      cssVar: "--rw-color-background-floating-pressed",
      description: "The floating background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.floating-focused",
      type: "color",
      value: "#746d67",
      cssVar: "--rw-color-background-floating-focused",
      description: "The floating background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.floating-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-background-floating-disabled",
      description: "The floating background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.highest-hover",
      type: "color",
      value: "#929e9e",
      cssVar: "--rw-color-background-highest-hover",
      description: "The highest level of elevation background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.highest-pressed",
      type: "color",
      value: "#4e5757",
      cssVar: "--rw-color-background-highest-pressed",
      description: "The highest level of elevation background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.highest-focused",
      type: "color",
      value: "#4e5757",
      cssVar: "--rw-color-background-highest-focused",
      description: "The highest level of elevation background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.highest-disabled",
      type: "color",
      value: "#e0e4e4",
      cssVar: "--rw-color-background-highest-disabled",
      description: "The highest level of elevation background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary-hover",
      type: "color",
      value: "#cdcdcd",
      cssVar: "--rw-color-background-primary-hover",
      description: "The primary background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary-pressed",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-background-primary-pressed",
      description: "The primary background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary-focused",
      type: "color",
      value: "#787878",
      cssVar: "--rw-color-background-primary-focused",
      description: "The primary background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.primary-disabled",
      type: "color",
      value: "#ffffff99",
      cssVar: "--rw-color-background-primary-disabled",
      description: "The primary background color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-secondary-hover",
      description: "The secondary background color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary-pressed",
      type: "color",
      value: "#0f0f0f",
      cssVar: "--rw-color-background-secondary-pressed",
      description: "The secondary background color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary-focused",
      type: "color",
      value: "#0f0f0f",
      cssVar: "--rw-color-background-secondary-focused",
      description: "The secondary background color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.secondary-disabled",
      type: "color",
      value: "#00000099",
      cssVar: "--rw-color-background-secondary-disabled",
      description: "The secondary background color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.link-hover",
      type: "color",
      value: "#0058c2",
      cssVar: "--rw-color-background-link-hover",
      description: "The link foreground color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.link-pressed",
      type: "color",
      value: "#00285d",
      cssVar: "--rw-color-background-link-pressed",
      description: "The link foreground color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.link-focused",
      type: "color",
      value: "#00285d",
      cssVar: "--rw-color-background-link-focused",
      description: "The link foreground color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.link-disabled",
      type: "color",
      value: "#5d92d9",
      cssVar: "--rw-color-background-link-disabled",
      description: "The link foreground color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-hover",
      type: "color",
      value: "#00514a",
      cssVar: "--rw-color-background-accent-hover",
      description: "The accent background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-pressed",
      type: "color",
      value: "#001613",
      cssVar: "--rw-color-background-accent-pressed",
      description: "The accent background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-focused",
      type: "color",
      value: "#001613",
      cssVar: "--rw-color-background-accent-focused",
      description: "The accent background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-disabled",
      type: "color",
      value: "#5bbeb2",
      cssVar: "--rw-color-background-accent-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-hover",
      type: "color",
      value: "#7f0005",
      cssVar: "--rw-color-background-danger-hover",
      description: "The danger background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-pressed",
      type: "color",
      value: "#470000",
      cssVar: "--rw-color-background-danger-pressed",
      description: "The danger background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-focused",
      type: "color",
      value: "#470000",
      cssVar: "--rw-color-background-danger-focused",
      description: "The danger background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-disabled",
      type: "color",
      value: "#c53b35",
      cssVar: "--rw-color-background-danger-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-hover",
      type: "color",
      value: "#880000",
      cssVar: "--rw-color-background-negative-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-pressed",
      type: "color",
      value: "#4d0000",
      cssVar: "--rw-color-background-negative-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-focused",
      type: "color",
      value: "#4d0000",
      cssVar: "--rw-color-background-negative-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-disabled",
      type: "color",
      value: "#ce4731",
      cssVar: "--rw-color-background-negative-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-hover",
      type: "color",
      value: "#7e4f00",
      cssVar: "--rw-color-background-warning-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-pressed",
      type: "color",
      value: "#3d1f00",
      cssVar: "--rw-color-background-warning-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-focused",
      type: "color",
      value: "#3d1f00",
      cssVar: "--rw-color-background-warning-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-disabled",
      type: "color",
      value: "#daa656",
      cssVar: "--rw-color-background-warning-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-hover",
      type: "color",
      value: "#004325",
      cssVar: "--rw-color-background-success-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-pressed",
      type: "color",
      value: "#000b04",
      cssVar: "--rw-color-background-success-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-focused",
      type: "color",
      value: "#000b04",
      cssVar: "--rw-color-background-success-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-disabled",
      type: "color",
      value: "#45a973",
      cssVar: "--rw-color-background-success-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-hover",
      type: "color",
      value: "#2f4e00",
      cssVar: "--rw-color-background-positive-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-pressed",
      type: "color",
      value: "#081300",
      cssVar: "--rw-color-background-positive-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-focused",
      type: "color",
      value: "#081300",
      cssVar: "--rw-color-background-positive-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-disabled",
      type: "color",
      value: "#8cbe5e",
      cssVar: "--rw-color-background-positive-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-hover",
      type: "color",
      value: "#007195",
      cssVar: "--rw-color-background-info-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-pressed",
      type: "color",
      value: "#003952",
      cssVar: "--rw-color-background-info-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-focused",
      type: "color",
      value: "#003952",
      cssVar: "--rw-color-background-info-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-disabled",
      type: "color",
      value: "#69c5e7",
      cssVar: "--rw-color-background-info-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-hover",
      type: "color",
      value: "#4c46d2",
      cssVar: "--rw-color-background-discovery-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-pressed",
      type: "color",
      value: "#24188c",
      cssVar: "--rw-color-background-discovery-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-focused",
      type: "color",
      value: "#24188c",
      cssVar: "--rw-color-background-discovery-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-disabled",
      type: "color",
      value: "#8b8fd9",
      cssVar: "--rw-color-background-discovery-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle-hover",
      type: "color",
      value: "#021311",
      cssVar: "--rw-color-background-accent-subtle-hover",
      description: "The accent background color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle-pressed",
      type: "color",
      value: "#103833",
      cssVar: "--rw-color-background-accent-subtle-pressed",
      description: "The accent background color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle-focused",
      type: "color",
      value: "#103833",
      cssVar: "--rw-color-background-accent-subtle-focused",
      description: "The accent background color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.accent-subtle-disabled",
      type: "color",
      value: "#000101",
      cssVar: "--rw-color-background-accent-subtle-disabled",
      description: "The accent background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle-hover",
      type: "color",
      value: "#cd220e",
      cssVar: "--rw-color-background-danger-subtle-hover",
      description: "The danger background color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle-pressed",
      type: "color",
      value: "#f74e36",
      cssVar: "--rw-color-background-danger-subtle-pressed",
      description: "The danger background color for the light theme (pressed, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle-focused",
      type: "color",
      value: "#f74e36",
      cssVar: "--rw-color-background-danger-subtle-focused",
      description: "The danger background color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.danger-subtle-disabled",
      type: "color",
      value: "#77251a",
      cssVar: "--rw-color-background-danger-subtle-disabled",
      description: "The danger background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-subtle-hover",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-background-negative-subtle-hover",
      description: "The negative background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-subtle-pressed",
      type: "color",
      value: "#4a0000",
      cssVar: "--rw-color-background-negative-subtle-pressed",
      description: "The negative background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-subtle-focused",
      type: "color",
      value: "#4a0000",
      cssVar: "--rw-color-background-negative-subtle-focused",
      description: "The negative background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.negative-subtle-disabled",
      type: "color",
      value: "#c9492f",
      cssVar: "--rw-color-background-negative-subtle-disabled",
      description: "The negative background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle-hover",
      type: "color",
      value: "#2e1d00",
      cssVar: "--rw-color-background-warning-subtle-hover",
      description: "The warning background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle-pressed",
      type: "color",
      value: "#010100",
      cssVar: "--rw-color-background-warning-subtle-pressed",
      description: "The warning background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle-focused",
      type: "color",
      value: "#010100",
      cssVar: "--rw-color-background-warning-subtle-focused",
      description: "The warning background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.warning-subtle-disabled",
      type: "color",
      value: "#7d5c28",
      cssVar: "--rw-color-background-warning-subtle-disabled",
      description: "The warning background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle-hover",
      type: "color",
      value: "#00130a",
      cssVar: "--rw-color-background-success-subtle-hover",
      description: "The success background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle-pressed",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-success-subtle-pressed",
      description: "The success background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle-focused",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-background-success-subtle-focused",
      description: "The success background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.success-subtle-disabled",
      type: "color",
      value: "#296847",
      cssVar: "--rw-color-background-success-subtle-disabled",
      description: "The success background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-subtle-hover",
      type: "color",
      value: "#204700",
      cssVar: "--rw-color-background-positive-subtle-hover",
      description: "The positive background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-subtle-pressed",
      type: "color",
      value: "#020d00",
      cssVar: "--rw-color-background-positive-subtle-pressed",
      description: "The positive background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-subtle-focused",
      type: "color",
      value: "#020d00",
      cssVar: "--rw-color-background-positive-subtle-focused",
      description: "The positive background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.positive-subtle-disabled",
      type: "color",
      value: "#72b34f",
      cssVar: "--rw-color-background-positive-subtle-disabled",
      description: "The positive background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle-hover",
      type: "color",
      value: "#002938",
      cssVar: "--rw-color-background-info-subtle-hover",
      description: "The info background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle-pressed",
      type: "color",
      value: "#00080d",
      cssVar: "--rw-color-background-info-subtle-pressed",
      description: "The info background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle-focused",
      type: "color",
      value: "#00080d",
      cssVar: "--rw-color-background-info-subtle-focused",
      description: "The info background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.info-subtle-disabled",
      type: "color",
      value: "#2a6881",
      cssVar: "--rw-color-background-info-subtle-disabled",
      description: "The info background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle-hover",
      type: "color",
      value: "#302b8f",
      cssVar: "--rw-color-background-discovery-subtle-hover",
      description: "The discovery background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle-pressed",
      type: "color",
      value: "#150d51",
      cssVar: "--rw-color-background-discovery-subtle-pressed",
      description: "The discovery background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle-focused",
      type: "color",
      value: "#150d51",
      cssVar: "--rw-color-background-discovery-subtle-focused",
      description: "The discovery background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.background.discovery-subtle-disabled",
      type: "color",
      value: "#5659a2",
      cssVar: "--rw-color-background-discovery-subtle-disabled",
      description: "The discovery background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.primary",
      type: "color",
      value: "var(--color-base-7)",
      cssVar: "--rw-color-border-primary",
      description: "The primary border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.secondary",
      type: "color",
      value: "var(--color-base-9)",
      cssVar: "--rw-color-border-secondary",
      description: "The secondary border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent",
      type: "color",
      value: "var(--color-brand-1)",
      cssVar: "--rw-color-border-accent",
      description: "The accent border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger",
      type: "color",
      value: "var(--color-red-7)",
      cssVar: "--rw-color-border-danger",
      description: "The danger border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative",
      type: "color",
      value: "var(--color-apple-7)",
      cssVar: "--rw-color-border-negative",
      description: "The negative border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning",
      type: "color",
      value: "var(--color-yellow-4)",
      cssVar: "--rw-color-border-warning",
      description: "The warning border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success",
      type: "color",
      value: "var(--color-green-6)",
      cssVar: "--rw-color-border-success",
      description: "The success border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive",
      type: "color",
      value: "var(--color-avocado-6)",
      cssVar: "--rw-color-border-positive",
      description: "The positive border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info",
      type: "color",
      value: "var(--color-sky-3)",
      cssVar: "--rw-color-border-info",
      description: "The info border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery",
      type: "color",
      value: "var(--color-purple-7)",
      cssVar: "--rw-color-border-discovery",
      description: "The discovery border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-subtle",
      type: "color",
      value: "var(--color-brand-2)",
      cssVar: "--rw-color-border-accent-subtle",
      description: "The accent border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-subtle",
      type: "color",
      value: "var(--color-red-9)",
      cssVar: "--rw-color-border-danger-subtle",
      description: "The danger border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-subtle",
      type: "color",
      value: "var(--color-apple-8)",
      cssVar: "--rw-color-border-negative-subtle",
      description: "The negative border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-subtle",
      type: "color",
      value: "var(--color-yellow-9)",
      cssVar: "--rw-color-border-warning-subtle",
      description: "The warning border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-subtle",
      type: "color",
      value: "var(--color-green-9)",
      cssVar: "--rw-color-border-success-subtle",
      description: "The success border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-subtle",
      type: "color",
      value: "var(--color-avocado-9)",
      cssVar: "--rw-color-border-positive-subtle",
      description: "The positive border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-subtle",
      type: "color",
      value: "var(--color-sky-9)",
      cssVar: "--rw-color-border-info-subtle",
      description: "The info border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-subtle",
      type: "color",
      value: "var(--color-purple-9)",
      cssVar: "--rw-color-border-discovery-subtle",
      description: "The discovery border color for the light theme",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.primary-hover",
      type: "color",
      value: "#111111",
      cssVar: "--rw-color-border-primary-hover",
      description: "The primary border color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.primary-focused",
      type: "color",
      value: "#252525",
      cssVar: "--rw-color-border-primary-focused",
      description: "The primary border color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.primary-disabled",
      type: "color",
      value: "#00000099",
      cssVar: "--rw-color-border-primary-disabled",
      description: "The primary border color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.secondary-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-border-secondary-hover",
      description: "The secondary border color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.secondary-focused",
      type: "color",
      value: "#060606",
      cssVar: "--rw-color-border-secondary-focused",
      description: "The secondary border color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.secondary-disabled",
      type: "color",
      value: "#00000099",
      cssVar: "--rw-color-border-secondary-disabled",
      description: "The secondary border color for the light theme (disabled, 60% opacity)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-hover",
      type: "color",
      value: "#00514a",
      cssVar: "--rw-color-border-accent-hover",
      description: "The accent border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-focused",
      type: "color",
      value: "#001613",
      cssVar: "--rw-color-border-accent-focused",
      description: "The accent border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-disabled",
      type: "color",
      value: "#5bbeb2",
      cssVar: "--rw-color-border-accent-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-hover",
      type: "color",
      value: "#7f0005",
      cssVar: "--rw-color-border-danger-hover",
      description: "The danger border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-focused",
      type: "color",
      value: "#470000",
      cssVar: "--rw-color-border-danger-focused",
      description: "The danger border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-disabled",
      type: "color",
      value: "#c53b35",
      cssVar: "--rw-color-border-danger-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-hover",
      type: "color",
      value: "#880000",
      cssVar: "--rw-color-border-negative-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-focused",
      type: "color",
      value: "#4d0000",
      cssVar: "--rw-color-border-negative-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-disabled",
      type: "color",
      value: "#ce4731",
      cssVar: "--rw-color-border-negative-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-hover",
      type: "color",
      value: "#7e4f00",
      cssVar: "--rw-color-border-warning-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-focused",
      type: "color",
      value: "#3d1f00",
      cssVar: "--rw-color-border-warning-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-disabled",
      type: "color",
      value: "#daa656",
      cssVar: "--rw-color-border-warning-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-hover",
      type: "color",
      value: "#004325",
      cssVar: "--rw-color-border-success-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-focused",
      type: "color",
      value: "#000b04",
      cssVar: "--rw-color-border-success-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-disabled",
      type: "color",
      value: "#45a973",
      cssVar: "--rw-color-border-success-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-hover",
      type: "color",
      value: "#2f4e00",
      cssVar: "--rw-color-border-positive-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-focused",
      type: "color",
      value: "#081300",
      cssVar: "--rw-color-border-positive-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-disabled",
      type: "color",
      value: "#8cbe5e",
      cssVar: "--rw-color-border-positive-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-hover",
      type: "color",
      value: "#007195",
      cssVar: "--rw-color-border-info-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-focused",
      type: "color",
      value: "#003952",
      cssVar: "--rw-color-border-info-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-disabled",
      type: "color",
      value: "#69c5e7",
      cssVar: "--rw-color-border-info-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-hover",
      type: "color",
      value: "#4c46d2",
      cssVar: "--rw-color-border-discovery-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-focused",
      type: "color",
      value: "#24188c",
      cssVar: "--rw-color-border-discovery-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-disabled",
      type: "color",
      value: "#8b8fd9",
      cssVar: "--rw-color-border-discovery-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-subtle-hover",
      type: "color",
      value: "#021311",
      cssVar: "--rw-color-border-accent-subtle-hover",
      description: "The accent border color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-subtle-focused",
      type: "color",
      value: "#103833",
      cssVar: "--rw-color-border-accent-subtle-focused",
      description: "The accent border color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.accent-subtle-disabled",
      type: "color",
      value: "#000101",
      cssVar: "--rw-color-border-accent-subtle-disabled",
      description: "The accent border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-subtle-hover",
      type: "color",
      value: "#cd220e",
      cssVar: "--rw-color-border-danger-subtle-hover",
      description: "The danger border color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-subtle-focused",
      type: "color",
      value: "#f74e36",
      cssVar: "--rw-color-border-danger-subtle-focused",
      description: "The danger border color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.danger-subtle-disabled",
      type: "color",
      value: "#77251a",
      cssVar: "--rw-color-border-danger-subtle-disabled",
      description: "The danger border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-subtle-hover",
      type: "color",
      value: "#840000",
      cssVar: "--rw-color-border-negative-subtle-hover",
      description: "The negative border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-subtle-focused",
      type: "color",
      value: "#4a0000",
      cssVar: "--rw-color-border-negative-subtle-focused",
      description: "The negative border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.negative-subtle-disabled",
      type: "color",
      value: "#c9492f",
      cssVar: "--rw-color-border-negative-subtle-disabled",
      description: "The negative border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-subtle-hover",
      type: "color",
      value: "#2e1d00",
      cssVar: "--rw-color-border-warning-subtle-hover",
      description: "The warning border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-subtle-focused",
      type: "color",
      value: "#010100",
      cssVar: "--rw-color-border-warning-subtle-focused",
      description: "The warning border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.warning-subtle-disabled",
      type: "color",
      value: "#7d5c28",
      cssVar: "--rw-color-border-warning-subtle-disabled",
      description: "The warning border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-subtle-hover",
      type: "color",
      value: "#00130a",
      cssVar: "--rw-color-border-success-subtle-hover",
      description: "The success border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-subtle-focused",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-border-success-subtle-focused",
      description: "The success border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.success-subtle-disabled",
      type: "color",
      value: "#296847",
      cssVar: "--rw-color-border-success-subtle-disabled",
      description: "The success border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-subtle-hover",
      type: "color",
      value: "#204700",
      cssVar: "--rw-color-border-positive-subtle-hover",
      description: "The positive border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-subtle-focused",
      type: "color",
      value: "#020d00",
      cssVar: "--rw-color-border-positive-subtle-focused",
      description: "The positive border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.positive-subtle-disabled",
      type: "color",
      value: "#72b34f",
      cssVar: "--rw-color-border-positive-subtle-disabled",
      description: "The positive border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-subtle-hover",
      type: "color",
      value: "#002938",
      cssVar: "--rw-color-border-info-subtle-hover",
      description: "The info border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-subtle-focused",
      type: "color",
      value: "#00080d",
      cssVar: "--rw-color-border-info-subtle-focused",
      description: "The info border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.info-subtle-disabled",
      type: "color",
      value: "#2a6881",
      cssVar: "--rw-color-border-info-subtle-disabled",
      description: "The info border color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-subtle-hover",
      type: "color",
      value: "#302b8f",
      cssVar: "--rw-color-border-discovery-subtle-hover",
      description: "The discovery border color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-subtle-focused",
      type: "color",
      value: "#150d51",
      cssVar: "--rw-color-border-discovery-subtle-focused",
      description: "The discovery border color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.border.discovery-subtle-disabled",
      type: "color",
      value: "#5659a2",
      cssVar: "--rw-color-border-discovery-subtle-disabled",
      description: "The discovery border color for the light theme (disabled, 60% saturation)",
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
      path: "color.overlay.background-hover",
      type: "color",
      value: "#c3bfba",
      cssVar: "--rw-color-overlay-background-hover",
      description: "The overlay background color for the light theme (hover, 20% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.background-pressed",
      type: "color",
      value: "#746d67",
      cssVar: "--rw-color-overlay-background-pressed",
      description: "The overlay background color for the light theme (pressed, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.background-focused",
      type: "color",
      value: "#746d67",
      cssVar: "--rw-color-overlay-background-focused",
      description: "The overlay background color for the light theme (focused, 40% darker)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.background-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-overlay-background-disabled",
      description: "The overlay background color for the light theme (disabled, 60% saturation)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.border-hover",
      type: "color",
      value: "#111111",
      cssVar: "--rw-color-overlay-border-hover",
      description: "The overlay border color for the light theme (hover, 20% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.border-focused",
      type: "color",
      value: "#252525",
      cssVar: "--rw-color-overlay-border-focused",
      description: "The overlay border color for the light theme (focused, 40% brighter)",
      theme: "lightHighContrast"
    },
    {
      path: "color.overlay.border-disabled",
      type: "color",
      value: "#00000099",
      cssVar: "--rw-color-overlay-border-disabled",
      description: "The overlay border color for the light theme (disabled, 60% opacity)",
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
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: "lightHighContrast"
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.primary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-primary)",
      cssVar: "--rw-ring-primary",
      description: "The primary ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.primary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-primary)",
      cssVar: "--rw-ring-primary-subtle",
      description: "The primary subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.secondary",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary",
      description: "The secondary ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.secondary-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-secondary)",
      cssVar: "--rw-ring-secondary-subtle",
      description: "The secondary subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.accent",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-accent)",
      cssVar: "--rw-ring-accent",
      description: "The accent ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.accent-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-accent)",
      cssVar: "--rw-ring-accent-subtle",
      description: "The accent subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-danger)",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-danger)",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-warning)",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-warning)",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-success)",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-success)",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-info)",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-info)",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-discovery)",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-positive)",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-positive)",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-border-negative)",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px var(--color-border-negative)",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.5xl}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display large typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display medium typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Permanent Marker\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display small typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.heading-2xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.3xl}\"}",
      cssVar: "--rw-typography-heading-2xl",
      description: "The heading extra large typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.heading-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.2xl}\",\"lineHeight\":\"{line-height.2xl}\"}",
      cssVar: "--rw-typography-heading-xl",
      description: "The heading extra large typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.heading-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.xl}\"}",
      cssVar: "--rw-typography-heading-lg",
      description: "The heading large typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.heading-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-heading-md",
      description: "The heading medium typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.heading-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-heading-sm",
      description: "The heading small typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.eyebrows",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-eyebrows",
      description: "The eyebrows typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.label",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.lg}\"}",
      cssVar: "--rw-typography-label",
      description: "The label typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-body",
      description: "The body typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.light}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.sm}\",\"fontStyle\":\"italic\"}",
      cssVar: "--rw-typography-caption",
      description: "The caption typography variant",
      theme: "lightHighContrast"
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Space Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.md}\"}",
      cssVar: "--rw-typography-code",
      description: "The code typography variant",
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
