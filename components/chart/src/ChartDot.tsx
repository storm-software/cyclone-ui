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

import { memo, useId } from "react";

export type DotVariant = "default" | "border" | "colored-border";

// The ring around bordered dots matches the surface charts usually sit on.
const RING_COLOR = "var(--elevated)";

export interface ChartDotProps {
  cx?: number;
  cy?: number;
  dataKey: string;
  /** Id prefix of the series' `${chartId}-colors-${dataKey}` gradient. */
  chartId: string;
  className?: string;
  fillOpacity?: number;
  type?: DotVariant;
  /** Optional SVG `<mask>` id, so the dot shares a series' reveal wipe. */
  maskId?: string;
}

interface DotVariantProps {
  cx: number;
  cy: number;
  dotId: string;
  fillOpacity: number;
  gradientUrl: string;
  className?: string;
  maskId?: string;
}

export const ChartDot = memo(function ChartDot({
  cx,
  cy,
  dataKey,
  chartId,
  className,
  fillOpacity = 1,
  type = "default",
  maskId
}: ChartDotProps) {
  const dotId = useId().replace(/:/g, "");
  const gradientUrl = `url(#${chartId}-colors-${String(dataKey)})`;

  if (cx === undefined || cy === undefined) return null;

  const props = {
    cx,
    cy,
    dotId,
    fillOpacity,
    gradientUrl,
    className,
    maskId
  };

  switch (type) {
    case "border":
      return <BorderDot {...props} />;
    case "colored-border":
      return <ColoredBorderDot {...props} />;
    case "default":
      return <DefaultDot {...props} />;
  }
});

// The series gradient spans the plot, so each dot is a full-width gradient
// strip clipped to a circle: it shows the color at its own x position.
const DefaultDot = memo(
  ({
    cx,
    cy,
    dotId,
    fillOpacity,
    gradientUrl,
    className,
    maskId
  }: DotVariantProps) => {
    const r = 3;

    return (
      <g className={className} mask={maskId ? `url(#${maskId})` : undefined}>
        <defs>
          <clipPath id={`dot-clip-${dotId}`}>
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>
        <rect
          x="0"
          y={cy - r}
          width="100%"
          height={r * 2}
          fill={gradientUrl}
          fillOpacity={fillOpacity}
          clipPath={`url(#dot-clip-${dotId})`}
        />
      </g>
    );
  }
);

const BorderDot = memo(
  ({
    cx,
    cy,
    dotId,
    fillOpacity,
    gradientUrl,
    className,
    maskId
  }: DotVariantProps) => {
    const r = 6;
    const inner = r - 5 / 2;

    return (
      <g className={className} mask={maskId ? `url(#${maskId})` : undefined}>
        <defs>
          <clipPath id={`dot-clip-inner-${dotId}`}>
            <circle cx={cx} cy={cy} r={inner} />
          </clipPath>
        </defs>
        <circle cx={cx} cy={cy} r={r} fill={RING_COLOR} />
        <rect
          x="0"
          y={cy - inner}
          width="100%"
          height={inner * 2}
          fill={gradientUrl}
          fillOpacity={fillOpacity}
          clipPath={`url(#dot-clip-inner-${dotId})`}
        />
      </g>
    );
  }
);

const ColoredBorderDot = memo(
  ({
    cx,
    cy,
    dotId,
    fillOpacity,
    gradientUrl,
    className,
    maskId
  }: DotVariantProps) => {
    const r = 3;
    const strokeWidth = 1;

    return (
      <g className={className} mask={maskId ? `url(#${maskId})` : undefined}>
        <defs>
          <clipPath id={`dot-clip-${dotId}`}>
            <circle cx={cx} cy={cy} r={r + strokeWidth / 2} />
          </clipPath>
        </defs>
        <rect
          x="0"
          y={cy - r - strokeWidth / 2}
          width="100%"
          height={(r + strokeWidth / 2) * 2}
          fill={gradientUrl}
          fillOpacity={fillOpacity}
          clipPath={`url(#dot-clip-${dotId})`}
        />
        <circle cx={cx} cy={cy} r={r - strokeWidth / 2} fill={RING_COLOR} />
      </g>
    );
  }
);
