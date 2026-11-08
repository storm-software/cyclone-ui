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

import { Theme, useTheme } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { memo } from "react";
import type { SvgProps } from "react-native-svg";
import { G, Path, Svg } from "react-native-svg";

export type StormLogoTextProps = IconProps & {
  theme?: string;

  /**
   * The stroke weight of the lettering.
   *
   * @defaultValue "thin"
   */
  weight?: "thin" | "thick";

  /**
   * Draw only the outlines of the lettering instead of filling it.
   *
   * @defaultValue false
   */
  outlined?: boolean;
};

type ThemedIconProps = Omit<StormLogoTextProps, "theme">;

const OUTLINE_WIDTH = 6;

const THICK_PATHS = [
  `
      M 440 203
      H 175
      C 146 203, 123 226, 123 255
      V 309
      C 123 338, 146 361, 175 361
      H 355
      C 362 361, 366 366, 366 372
      C 366 378, 361 383, 355 383
      H 123
      V 446
      H 392
      C 423 446, 448 421, 448 390
      V 349
      C 448 318, 423 293, 392 293
      H 216
      C 210 293, 205 288, 205 282
      C 205 276, 210 271, 216 271
      H 440
      Z`,
  `
      M 469 203 H 785 V 271 H 469 Z
      M 579 293 H 661 V 446 H 579 Z`,
  `
      M 875 203
      H 1088
      C 1124 203, 1153 232, 1153 268
      V 382
      C 1153 418, 1124 447, 1088 447
      H 875
      C 839 447, 810 418, 810 382
      V 268
      C 810 232, 839 203, 875 203
      Z

      M 912 271
      H 1051
      C 1062 271, 1071 280, 1071 291
      V 359
      C 1071 370, 1062 379, 1051 379
      H 912
      C 901 379, 892 370, 892 359
      V 291
      C 892 280, 901 271, 912 271
      Z`,
  `
      M 1186 203
      H 1440
      C 1479 203, 1512 236, 1512 275
      V 289
      C 1512 329, 1480 361, 1440 361
      H 1420
      L 1512 446
      H 1402
      L 1310 361
      H 1268
      V 446
      H 1186
      V 293
      H 1419
      C 1425 293, 1430 288, 1430 282
      C 1430 276, 1425 271, 1419 271
      H 1186
      Z`,
  `
      M 1545 203
      H 1620
      L 1735 318
      L 1850 203
      H 1925
      V 446
      H 1843
      V 326
      L 1735 434
      L 1627 326
      V 446
      H 1545
      Z`
];

const ThemedIcon = ({
  color: colorProp,
  weight = "thin",
  outlined = false,
  ...rest
}: ThemedIconProps) => {
  const theme = useTheme();
  const explicitColor = useCurrentColor((colorProp ?? "primary") as any);
  const color = colorProp
    ? explicitColor
    : (theme.primary?.get() ?? theme.color?.get());

  return (
    <Svg
      viewBox={
        // Pad the view box so the outline stroke isn't clipped at the edges
        outlined
          ? `${123 - OUTLINE_WIDTH / 2} ${203 - OUTLINE_WIDTH / 2} ${1802 + OUTLINE_WIDTH} ${244 + OUTLINE_WIDTH}`
          : "123 203 1802 244"
      }
      role="img"
      {...(rest as SvgProps)}>
      <G
        fill={outlined ? "none" : color}
        stroke={outlined ? color : undefined}
        strokeWidth={outlined ? OUTLINE_WIDTH : undefined}
        strokeLinejoin="round">
        {weight === "thick" ? (
          THICK_PATHS.map(d => <Path key={d} fillRule="evenodd" d={d} />)
        ) : (
          <>
            <Path
              d="
      M 440 203
      H 171
      C 144 203, 123 224, 123 251
      V 299
      C 123 329, 146 352, 175 352
      H 371
      C 380 352, 387 359, 387 368
      V 376
      C 387 384, 381 390, 373 390
      H 123
      V 446
      H 396
      C 425 446, 448 423, 448 394
      V 352
      C 448 323, 426 299, 395 299
      H 198
      C 190 299, 183 292, 183 284
      V 275
      C 183 266, 189 259, 198 259
      H 440
      Z"
            />

            <Path
              d="
      M 469 203 H 785 V 260 H 469 Z
      M 584 284 H 656 V 446 H 584 Z"
            />

            <Path
              fillRule="evenodd"
              d="
      M 875 203
      H 1088
      C 1124 203, 1153 232, 1153 268
      V 382
      C 1153 418, 1124 447, 1088 447
      H 875
      C 839 447, 810 418, 810 382
      V 268
      C 810 232, 839 203, 875 203
      Z

      M 897 262
      H 1067
      C 1081 262, 1092 273, 1092 287
      V 367
      C 1092 381, 1081 392, 1067 392
      H 897
      C 883 392, 872 381, 872 367
      V 287
      C 872 273, 883 262, 897 262
      Z"
            />

            <Path
              d="
      M 1186 203
      H 1444
      C 1482 203, 1512 233, 1512 271
      V 289
      C 1512 327, 1482 357, 1444 357
      H 1417
      L 1513 446
      H 1424
      L 1328 357
      H 1253
      V 446
      H 1186
      V 305
      H 1433
      C 1442 305, 1449 298, 1449 289
      V 279
      C 1449 270, 1442 263, 1433 263
      H 1186
      Z"
            />

            <Path
              d="
      M 1545 203
      H 1608
      L 1732 326
      L 1858 203
      H 1925
      V 446
      H 1858
      V 298
      L 1732 416
      L 1609 299
      V 446
      H 1545
      Z"
            />
          </>
        )}
      </G>
    </Svg>
  );
};

const Icon = ({ theme, ...rest }: StormLogoTextProps) => (
  <Theme name={theme}>
    <ThemedIcon {...rest} />
  </Theme>
);

Icon.displayName = "StormLogoText";

export const StormLogoText = memo<StormLogoTextProps>(Icon);
