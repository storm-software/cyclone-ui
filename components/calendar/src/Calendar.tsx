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

import { Suspense } from "react";
import { CalendarImpl } from "./CalendarImpl";
import { CalendarSkeleton } from "./CalendarSkeleton";
import type { CalendarProps } from "./types";

export { CalendarSkeleton } from "./CalendarSkeleton";
export type {
  CalendarChangeEventHandler,
  CalendarDatesChangeEventHandler,
  CalendarMode,
  CalendarProps
} from "./types";

/**
 * A calendar with day, month and year views that selects a single date or a
 * start and end date range. Its date-dependent content streams beneath a
 * sized placeholder when the surrounding page is prerendered.
 */
export const Calendar = (props: CalendarProps) => (
  <Suspense fallback={<CalendarSkeleton size={props.size} />}>
    <CalendarImpl {...props} />
  </Suspense>
);
