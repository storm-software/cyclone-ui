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

import { getVariableValue, styled, useTheme, View } from "@tamagui/core";
import { Path, Svg } from "react-native-svg";

const TerrainFrame = styled(View, {
  name: "FooterTerrain",
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: "$20"
});

// Project a fixed height field once. Shared vertices keep the triangular mesh
// seamless and deterministic across server rendering and hydration.
const columns = 80;
const rows = 36;
const points = Array.from({ length: rows + 1 }, (_, row) => {
  const depth = row / rows;
  const perspective = 0.7 + depth * 0.7;

  return Array.from({ length: columns + 1 }, (_, column) => {
    const x = (column / columns - 0.5) * 2400;
    const ridge =
      155 * Math.exp(-(((x + 600) / 470) ** 2)) +
      190 * Math.exp(-(((x + 100) / 220) ** 2)) +
      105 * Math.exp(-(((x - 420) / 280) ** 2));
    const height =
      ridge * (0.6 + 0.4 * Math.cos(depth * 6)) +
      30 * Math.sin(x / 140 + depth * 8) +
      12 * Math.sin(x / 43 + depth * 13);

    return `${(800 + x * perspective).toFixed(1)},${(480 + depth ** 1.5 * 510 - height * perspective).toFixed(1)}`;
  });
});

const terrainPath = points
  .flatMap((row, rowIndex) =>
    row.map((point, columnIndex) => {
      const right = row[columnIndex + 1];
      const below = points[rowIndex + 1]?.[columnIndex];
      const diagonal = points[rowIndex + 1]?.[columnIndex + 1];

      return [
        right ? `M${point}L${right}` : "",
        below ? `M${point}L${below}` : "",
        diagonal ? `M${point}L${diagonal}` : ""
      ].join("");
    })
  )
  .join("");

export const FooterTerrain = () => {
  const theme = useTheme();

  return (
    <TerrainFrame
      aria-hidden={true}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants">
      <Svg
        style={{ minWidth: 800 }}
        width="100%"
        height="100%"
        viewBox="0 0 1600 780"
        preserveAspectRatio="none">
        <Path
          d={terrainPath}
          fill="none"
          stroke={getVariableValue(theme.foreground, "color")}
          strokeWidth={0.7}
          strokeOpacity={0.1}
        />
      </Svg>
    </TerrainFrame>
  );
};
