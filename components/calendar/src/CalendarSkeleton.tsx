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

import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { Theme, View } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";

const DAYS = Array.from({ length: 7 }, (_, index) => index);
const WEEKS = Array.from({ length: 6 }, (_, index) => index);

/** Reserves the calendar's day grid while its current date is resolved. */
export const CalendarSkeleton = ({
  size = "md"
}: {
  size?: FormControlSize;
}) => {
  const cell = getSized(getFormSizeToken(size));
  const scale = getFormSizeScale(size);

  return (
    <Theme name="base">
      <XStack
        justifyContent="center"
        role="status"
        aria-label="Loading calendar">
        <YStack
          width={cell * 7 + getSpaced("md") * 6}
          gap="2xl"
          aria-hidden={true}>
          <XStack
            height={40 * scale}
            alignItems="center"
            justifyContent="space-between">
            <View
              width={cell}
              height={cell}
              borderRadius="button"
              backgroundColor="hairline"
            />
            <View
              width={cell * 2.5}
              height={24 * scale}
              borderRadius="sm"
              backgroundColor="hairline"
            />
            <View
              width={cell}
              height={cell}
              borderRadius="button"
              backgroundColor="hairline"
            />
          </XStack>
          <YStack gap="xl">
            <XStack gap="md" justifyContent="space-between">
              {DAYS.map(day => (
                <View
                  key={day}
                  width={cell}
                  height={12 * scale}
                  borderRadius="sm"
                  backgroundColor="hairline"
                />
              ))}
            </XStack>
            <YStack gap="md">
              {WEEKS.map(week => (
                <XStack key={week} justifyContent="space-between">
                  {DAYS.map(day => (
                    <View
                      key={day}
                      width={cell}
                      height={cell}
                      borderRadius="button"
                      backgroundColor="hairline"
                      opacity={0.5}
                    />
                  ))}
                </XStack>
              ))}
            </YStack>
          </YStack>
        </YStack>
      </XStack>
    </Theme>
  );
};
