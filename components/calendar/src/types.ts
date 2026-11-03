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

import type { FormControlSize } from "@cyclone-ui/helpers";

export type CalendarMode = "single" | "range";

export type CalendarChangeEventHandler = (
  event: CustomEvent<Date | null>
) => any;

export type CalendarDatesChangeEventHandler = (
  event: CustomEvent<Date[]>
) => any;

export interface CalendarProps {
  /**
   * Determines whether one date or a start and end date can be selected.
   */
  mode?: CalendarMode;

  /**
   * The form control size the calendar's cells and text are scaled to.
   */
  size?: FormControlSize;

  /**
   * Date shown and selected in the calendar.
   */
  selectedDate?: Date | null;

  /**
   * Dates shown and selected when `mode` is `range`.
   */
  selectedDates?: Date[];

  /**
   * Callback that is called when the selected date changes.
   */
  onChange?: CalendarChangeEventHandler;

  /**
   * Callback that is called when the selected range changes.
   */
  onDatesChange?: CalendarDatesChangeEventHandler;
}
