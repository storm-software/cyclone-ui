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

  /**
   * Draw the lettering taller without changing its width: `medium` is 20%
   * taller and `tall` is 50% taller than `normal`. Strokes keep the
   * thickness of the selected `weight`.
   *
   * @defaultValue "normal"
   */
  stretch?: "normal" | "medium" | "tall";
};

type ThemedIconProps = Omit<StormLogoTextProps, "theme">;

const OUTLINE_WIDTH = 6;

const WIDTH = 1802;

// Stretched glyphs are redrawn rather than scaled, so bar and stem thickness
// (the "weight") stays the same - only counters, stems and legs get longer.
const HEIGHTS = {
  normal: 244,
  medium: 293, // 1.2x - 20% shorter than tall
  tall: 366 // 1.5x
};

const PATHS = {
  thin: {
    normal: [
      `
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
        Z`,
      `
        M 469 203 H 785 V 260 H 469 Z
        M 584 284 H 656 V 446 H 584 Z`,
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

        M 897 262
        H 1067
        C 1081 262, 1092 273, 1092 287
        V 367
        C 1092 381, 1081 392, 1067 392
        H 897
        C 883 392, 872 381, 872 367
        V 287
        C 872 273, 883 262, 897 262
        Z`,
      `
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
        Z`,
      `
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
        Z`
    ],
    medium: [
      `
        M 440 203
        H 171
        C 144 203, 123 224, 123 251
        V 323
        C 123 353, 146 376, 175 376
        H 371
        C 380 376, 387 383, 387 392
        V 425
        C 387 433, 381 439, 373 439
        H 123
        V 495
        H 396
        C 425 495, 448 472, 448 443
        V 376
        C 448 347, 426 323, 395 323
        H 198
        C 190 323, 183 316, 183 308
        V 275
        C 183 266, 189 259, 198 259
        H 440
        Z`,
      `
        M 469 203
        H 785
        V 260
        H 469
        Z
        M 584 284
        H 656
        V 495
        H 584
        Z`,
      `
        M 875 203
        H 1088
        C 1124 203, 1153 232, 1153 268
        V 431
        C 1153 467, 1124 496, 1088 496
        H 875
        C 839 496, 810 467, 810 431
        V 268
        C 810 232, 839 203, 875 203
        Z
        M 897 262
        H 1067
        C 1081 262, 1092 273, 1092 287
        V 416
        C 1092 430, 1081 441, 1067 441
        H 897
        C 883 441, 872 430, 872 416
        V 287
        C 872 273, 883 262, 897 262
        Z`,
      `
        M 1186 203
        H 1444
        C 1482 203, 1512 233, 1512 271
        V 313
        C 1512 351, 1482 381, 1444 381
        H 1417
        L 1513 495
        H 1434
        L 1338 381
        H 1253
        V 495
        H 1186
        V 329
        H 1433
        C 1442 329, 1449 322, 1449 313
        V 279
        C 1449 270, 1442 263, 1433 263
        H 1186
        Z`,
      `
        M 1545 203
        H 1608
        L 1732 361
        L 1858 203
        H 1925
        V 495
        H 1858
        V 307
        L 1732 465
        L 1609 308
        V 495
        H 1545
        Z`
    ],
    tall: [
      `
        M 440 203
        H 171
        C 144 203, 123 224, 123 251
        V 360
        C 123 390, 146 413, 175 413
        H 371
        C 380 413, 387 420, 387 429
        V 498
        C 387 506, 381 512, 373 512
        H 123
        V 568
        H 396
        C 425 568, 448 545, 448 516
        V 413
        C 448 384, 426 360, 395 360
        H 198
        C 190 360, 183 353, 183 345
        V 275
        C 183 266, 189 259, 198 259
        H 440
        Z`,
      `
        M 469 203 H 785 V 260 H 469 Z
        M 584 284 H 656 V 568 H 584 Z`,
      `
        M 875 203
        H 1088
        C 1124 203, 1153 232, 1153 268
        V 504
        C 1153 540, 1124 569, 1088 569
        H 875
        C 839 569, 810 540, 810 504
        V 268
        C 810 232, 839 203, 875 203
        Z

        M 897 262
        H 1067
        C 1081 262, 1092 273, 1092 287
        V 489
        C 1092 503, 1081 514, 1067 514
        H 897
        C 883 514, 872 503, 872 489
        V 287
        C 872 273, 883 262, 897 262
        Z`,
      `
        M 1186 203
        H 1444
        C 1482 203, 1512 233, 1512 271
        V 350
        C 1512 388, 1482 418, 1444 418
        H 1417
        L 1513 568
        H 1441
        L 1345 418
        H 1253
        V 568
        H 1186
        V 366
        H 1433
        C 1442 366, 1449 359, 1449 350
        V 279
        C 1449 270, 1442 263, 1433 263
        H 1186
        Z`,
      `
        M 1545 203
        H 1608
        L 1732 413
        L 1858 203
        H 1925
        V 568
        H 1858
        V 328
        L 1732 538
        L 1609 330
        V 568
        H 1545
        Z`
    ]
  },
  thick: {
    normal: [
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
    ],
    medium: [
      `
        M 440 203
        H 175
        C 146 203, 123 226, 123 255
        V 333
        C 123 362, 146 385, 175 385
        H 355
        C 362 385, 366 390, 366 396
        V 421
        C 366 427, 361 432, 355 432
        H 123
        V 495
        H 392
        C 423 495, 448 470, 448 439
        V 373
        C 448 342, 423 317, 392 317
        H 216
        C 210 317, 205 312, 205 306
        V 282
        C 205 276, 210 271, 216 271
        H 440
        Z`,
      `
        M 469 203
        H 785
        V 271
        H 469
        Z
        M 579 293
        H 661
        V 495
        H 579
        Z`,
      `
        M 875 203
        H 1088
        C 1124 203, 1153 232, 1153 268
        V 431
        C 1153 467, 1124 496, 1088 496
        H 875
        C 839 496, 810 467, 810 431
        V 268
        C 810 232, 839 203, 875 203
        Z
        M 912 271
        H 1051
        C 1062 271, 1071 280, 1071 291
        V 408
        C 1071 419, 1062 428, 1051 428
        H 912
        C 901 428, 892 419, 892 408
        V 291
        C 892 280, 901 271, 912 271
        Z`,
      `
        M 1186 203
        H 1440
        C 1479 203, 1512 236, 1512 275
        V 313
        C 1512 353, 1480 385, 1440 385
        H 1420
        L 1512 495
        H 1415
        L 1323 385
        H 1268
        V 495
        H 1186
        V 317
        H 1419
        C 1425 317, 1430 312, 1430 306
        V 282
        C 1430 276, 1425 271, 1419 271
        H 1186
        Z`,
      `
        M 1545 203
        H 1620
        L 1735 350
        L 1850 203
        H 1925
        V 495
        H 1843
        V 345
        L 1735 483
        L 1627 345
        V 495
        H 1545
        Z`
    ],
    tall: [
      `
        M 440 203
        H 175
        C 146 203, 123 226, 123 255
        V 370
        C 123 399, 146 422, 175 422
        H 355
        C 362 422, 366 427, 366 433
        V 494
        C 366 500, 361 505, 355 505
        H 123
        V 568
        H 392
        C 423 568, 448 543, 448 512
        V 410
        C 448 379, 423 354, 392 354
        H 216
        C 210 354, 205 349, 205 343
        V 282
        C 205 276, 210 271, 216 271
        H 440
        Z`,
      `
        M 469 203 H 785 V 271 H 469 Z
        M 579 293 H 661 V 568 H 579 Z`,
      `
        M 875 203
        H 1088
        C 1124 203, 1153 232, 1153 268
        V 504
        C 1153 540, 1124 569, 1088 569
        H 875
        C 839 569, 810 540, 810 504
        V 268
        C 810 232, 839 203, 875 203
        Z

        M 912 271
        H 1051
        C 1062 271, 1071 280, 1071 291
        V 481
        C 1071 492, 1062 501, 1051 501
        H 912
        C 901 501, 892 492, 892 481
        V 291
        C 892 280, 901 271, 912 271
        Z`,
      `
        M 1186 203
        H 1440
        C 1479 203, 1512 236, 1512 275
        V 350
        C 1512 390, 1480 422, 1440 422
        H 1420
        L 1512 568
        H 1424
        L 1332 422
        H 1268
        V 568
        H 1186
        V 354
        H 1419
        C 1425 354, 1430 349, 1430 343
        V 282
        C 1430 276, 1425 271, 1419 271
        H 1186
        Z`,
      `
        M 1545 203
        H 1620
        L 1735 396
        L 1850 203
        H 1925
        V 568
        H 1843
        V 375
        L 1735 556
        L 1627 375
        V 568
        H 1545
        Z`
    ]
  }
};

const ThemedIcon = ({
  color: colorProp,
  weight = "thin",
  outlined = false,
  stretch = "normal",
  ...rest
}: ThemedIconProps) => {
  const theme = useTheme();
  const explicitColor = useCurrentColor((colorProp ?? "primary") as any);
  const color = colorProp
    ? explicitColor
    : (theme.primary?.get() ?? theme.color?.get());

  // These props arrive as `any` through IconProps. Annotate the locals so
  // the maps are indexed with their own keys.
  const logoWeight: keyof typeof PATHS =
    weight === "thick" ? "thick" : "thin";
  const logoStretch: keyof typeof HEIGHTS =
    stretch === "medium" || stretch === "tall" ? stretch : "normal";

  // Pad the view box so the outline stroke isn't clipped at the edges
  const pad = outlined ? OUTLINE_WIDTH / 2 : 0;
  const height = HEIGHTS[logoStretch];

  return (
    <Svg
      viewBox={`${123 - pad} ${203 - pad} ${WIDTH + pad * 2} ${height + pad * 2}`}
      role="img"
      {...(rest as SvgProps)}>
      <G
        fill={outlined ? "none" : color}
        stroke={outlined ? color : undefined}
        strokeWidth={outlined ? OUTLINE_WIDTH : undefined}
        strokeLinejoin="round">
        {PATHS[logoWeight][logoStretch].map(d => (
          <Path key={d} fillRule="evenodd" d={d} />
        ))}
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
