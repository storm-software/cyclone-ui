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
import { NumberText } from "@cyclone-ui/number-text";
import { getTokens, getVariable, View } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { ComponentProps, CSSProperties } from "react";
import { useMemo } from "react";
import type { DefaultTooltipContentProps } from "recharts";
import { Tooltip as RechartsTooltip } from "recharts";
import type {
  NameType,
  ValueType
} from "recharts/types/component/DefaultTooltipContent";
import { getColorsCount, getPayloadConfigFromPayload, useChart } from "./Chart";

export type TooltipRoundness = "sm" | "md" | "lg" | "xl";
export type TooltipVariant = "default" | "frosted-glass";

export type ChartTooltipContentProps = ComponentProps<
  typeof RechartsTooltip
> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  selected?: string | null;
  /** Corner radius; defaults to the `tooltip` radius token. */
  roundness?: TooltipRoundness;
  variant?: TooltipVariant;
} & Omit<DefaultTooltipContentProps<ValueType, NameType>, "accessibilityLayer">;

// `background`, not `backgroundColor`: Tamagui would parse the color-mix()
// words as tokens.
const FROSTED_GLASS_STYLE: CSSProperties = {
  background: "color-mix(in oklab, var(--elevated) 70%, transparent)",
  backdropFilter: "blur(4px)"
};

export function ChartTooltipContent({
  active,
  payload,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  formatter,
  nameKey,
  labelKey,
  selected,
  roundness,
  variant = "default"
}: ChartTooltipContentProps) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = String(labelKey ?? item?.dataKey ?? item?.name ?? "value");
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <BodyText size="xxs" fontWeight="medium" color="ink">
          {labelFormatter(value, payload)}
        </BodyText>
      );
    }

    if (!value) {
      return null;
    }

    return (
      <BodyText size="xxs" fontWeight="medium" color="ink">
        {value}
      </BodyText>
    );
  }, [label, labelFormatter, payload, hideLabel, config, labelKey]);

  if (!active || !payload?.length) {
    // Keeps a non-zero box so the tooltip doesn't animate in from 0,0
    return <View padding="4xl" />;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <YStack
      minWidth={128}
      gap="xl"
      paddingHorizontal="2xl"
      paddingVertical="xl"
      borderWidth={1}
      borderColor="outline"
      borderRadius={roundness ?? "tooltip"}
      boxShadow={getVariable(getTokens().shadow?.xl)}
      {...(variant === "frosted-glass"
        ? { style: FROSTED_GLASS_STYLE }
        : { backgroundColor: "elevated" })}>
      {!nestLabel ? tooltipLabel : null}
      <YStack gap="xl">
        {payload
          .filter(item => item.type !== "none")
          .map((item, index) => {
            // Pie and radial charts name the series through `nameKey`
            const payloadName =
              nameKey && item.payload
                ? (item.payload as Record<string, unknown>)[nameKey]
                : undefined;
            const key = String(
              payloadName ?? item.name ?? item.dataKey ?? "value"
            );
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const colorsCount = getColorsCount(itemConfig);

            return (
              <XStack
                key={index}
                width="100%"
                flexWrap="wrap"
                gap="xl"
                alignItems={indicator === "dot" ? "center" : "stretch"}
                opacity={
                  selected != null && selected !== item.dataKey ? 0.3 : 1
                }>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <View
                        className="cyclone-chart-icon"
                        width={10}
                        height={10}
                        style={{ color: "var(--subtle)" }}>
                        <itemConfig.icon />
                      </View>
                    ) : (
                      !hideIndicator && (
                        <TooltipIndicator
                          indicator={indicator}
                          dataKey={key}
                          colorsCount={colorsCount}
                          nestLabel={nestLabel}
                        />
                      )
                    )}
                    <XStack
                      flex={1}
                      justifyContent="space-between"
                      gap="4xl"
                      alignItems={nestLabel ? "flex-end" : "center"}>
                      <YStack gap="xl">
                        {nestLabel ? tooltipLabel : null}
                        <BodyText size="xxs" color="subtle">
                          {itemConfig?.label ?? item.name}
                        </BodyText>
                      </YStack>
                      {item.value != null &&
                        (typeof item.value === "number" ? (
                          <NumberText
                            size="xxs"
                            fontFamily="code"
                            fontWeight="medium"
                            color="ink">
                            {item.value}
                          </NumberText>
                        ) : (
                          <BodyText
                            size="xxs"
                            fontFamily="code"
                            fontWeight="medium"
                            color="ink">
                            {String(item.value)}
                          </BodyText>
                        ))}
                    </XStack>
                  </>
                )}
              </XStack>
            );
          })}
      </YStack>
    </YStack>
  );
}

function TooltipIndicator({
  indicator,
  dataKey,
  colorsCount,
  nestLabel
}: {
  indicator: "line" | "dot" | "dashed";
  dataKey: string;
  colorsCount: number;
  nestLabel: boolean;
}) {
  if (indicator === "dashed") {
    return (
      <View
        width={0}
        borderWidth={1.5}
        borderStyle="dashed"
        style={{ borderColor: `var(--color-${dataKey}-0)` }}
        {...(nestLabel && { marginVertical: "md" })}
      />
    );
  }

  return (
    <View
      flexShrink={0}
      borderRadius="xs"
      width={indicator === "dot" ? 10 : 4}
      {...(indicator === "dot" && { height: 10 })}
      style={getSeriesBackground(dataKey, colorsCount)}
    />
  );
}

/** A solid or left-to-right gradient background in a series' colors. */
export function getSeriesBackground(
  dataKey: string,
  colorsCount: number
): CSSProperties {
  if (colorsCount <= 1) {
    return { background: `var(--color-${dataKey}-0)` };
  }

  const stops = Array.from({ length: colorsCount }, (_, index) => {
    const offset = (index / (colorsCount - 1)) * 100;

    return `var(--color-${dataKey}-${index}) ${offset}%`;
  }).join(", ");

  return { background: `linear-gradient(to right, ${stops})` };
}

export const ChartTooltip = ({
  animationDuration = 200,
  ...props
}: ComponentProps<typeof RechartsTooltip>) => (
  <RechartsTooltip animationDuration={animationDuration} {...props} />
);
