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
import { View } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { CSSProperties } from "react";
import type { DefaultLegendContentProps } from "recharts";
import { Legend as RechartsLegend } from "recharts";
import { getColorsCount, getPayloadConfigFromPayload, useChart } from "./Chart";
import { getSeriesBackground } from "./ChartTooltip";

export type ChartLegendVariant =
  | "square"
  | "circle"
  | "circle-outline"
  | "rounded-square"
  | "rounded-square-outline"
  | "vertical-bar"
  | "horizontal-bar";

export type ChartLegendContentProps = Partial<DefaultLegendContentProps> & {
  hideIcon?: boolean;
  nameKey?: string;
  selected?: string | null;
  isClickable?: boolean;
  onSelectChange?: (selected: string | null) => void;
  variant?: ChartLegendVariant;
};

const JUSTIFY = {
  left: "flex-start",
  center: "center",
  right: "flex-end"
} as const;

export function ChartLegendContent({
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign,
  align = "right",
  selected,
  onSelectChange,
  isClickable,
  variant = "rounded-square"
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <XStack
      alignItems="center"
      flexWrap="wrap"
      gap="4xl"
      userSelect="none"
      justifyContent={JUSTIFY[align]}
      {...(verticalAlign === "top"
        ? { paddingBottom: "4xl" }
        : { paddingTop: "4xl" })}>
      {payload
        .filter(item => item.type !== "none")
        .map(item => {
          // Pie charts name sectors through `value`, radial charts through
          // `nameKey`, and cartesian charts through `dataKey`
          const payloadName =
            nameKey && item.payload
              ? (item.payload as Record<string, unknown>)[nameKey]
              : undefined;
          const key = String(
            payloadName ?? item.value ?? item.dataKey ?? "value"
          );
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const isSelected = selected == null || selected === key;

          return (
            <XStack
              key={key}
              className="cyclone-chart-legend-item"
              alignItems="center"
              gap="xl"
              opacity={isSelected ? 1 : 0.3}
              {...(isClickable && {
                render: "button",
                "aria-pressed": selected === key,
                cursor: "pointer",
                backgroundColor: "transparent",
                borderWidth: 0,
                padding: 0,
                onPress: () => onSelectChange?.(selected === key ? null : key)
              })}>
              {itemConfig?.icon && !hideIcon ? (
                <View
                  className="cyclone-chart-icon"
                  width={12}
                  height={12}
                  style={{ color: "var(--subtle)" }}>
                  <itemConfig.icon />
                </View>
              ) : (
                <LegendIndicator
                  variant={variant}
                  dataKey={key}
                  colorsCount={getColorsCount(itemConfig)}
                />
              )}
              <BodyText size="xxs" color="ink">
                {itemConfig?.label}
              </BodyText>
            </XStack>
          );
        })}
    </XStack>
  );
}

// Each variant keeps its own branch so variants can diverge in markup.
function LegendIndicator({
  variant,
  dataKey,
  colorsCount
}: {
  variant: ChartLegendVariant;
  dataKey: string;
  colorsCount: number;
}) {
  const fill = getSeriesBackground(dataKey, colorsCount);

  switch (variant) {
    case "square":
      return <View flexShrink={0} width={8} height={8} style={fill} />;

    case "circle":
      return (
        <View
          flexShrink={0}
          width={8}
          height={8}
          borderRadius="full"
          style={fill}
        />
      );

    case "circle-outline":
      return (
        <View
          flexShrink={0}
          width={10}
          height={10}
          padding={1.5}
          borderRadius="full"
          style={{ ...fill, ...OUTLINE_MASK }}
        />
      );

    case "vertical-bar":
      return (
        <View
          flexShrink={0}
          width={4}
          height={12}
          borderRadius="xs"
          style={fill}
        />
      );

    case "horizontal-bar":
      return (
        <View
          flexShrink={0}
          width={12}
          height={4}
          borderRadius="xs"
          style={fill}
        />
      );

    case "rounded-square-outline":
      return (
        <View
          flexShrink={0}
          width={10}
          height={10}
          padding={1.5}
          borderRadius={3}
          style={{ ...fill, ...OUTLINE_MASK }}
        />
      );

    case "rounded-square":
    default:
      return (
        <View
          flexShrink={0}
          width={8}
          height={8}
          borderRadius="xs"
          style={fill}
        />
      );
  }
}

// Punches out the content box so only a "border" of the background shows.
// Works with gradients and border-radius, unlike `border-color`.
const OUTLINE_MASK: CSSProperties = {
  WebkitMask:
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  maskComposite: "exclude"
};

export const ChartLegend = RechartsLegend;
