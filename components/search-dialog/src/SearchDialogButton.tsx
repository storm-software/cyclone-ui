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

import { Button } from "@cyclone-ui/button";
import { SearchTrigger } from "@cyclone-ui/icons/vectors";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC } from "@tamagui/core";
import type { SearchDialogProps } from "./SearchDialog";

export type SearchDialogButtonProps = GetProps<typeof Button> & {
  /**
   * The accessible name and tooltip.
   *
   * @defaultValue "Search"
   */
  label?: string;
};

/**
 * The search dialog's trigger: a round ghost button with the search glyph.
 * Kept apart from `SearchDialog` so it can render (for example as a
 * `Suspense` fallback) before the dialog's own code has loaded.
 */
export const SearchDialogButton = createStyledHOC(
  Button,
  (
    { label = "Search", size = "9xl", ...props }: SearchDialogButtonProps,
    forwardedRef
  ) => (
    <Button
      ref={forwardedRef}
      aria-label={label}
      tooltip={label}
      aria-keyshortcuts="Meta+K Control+K"
      variant="ghost"
      circular={true}
      flexGrow={0}
      size={size}
      {...props}>
      {/* Sized like the button, or the glyph shrinks to a few px. */}
      <Button.Icon size={size}>
        <SearchTrigger />
      </Button.Icon>
    </Button>
  ),
  { displayName: "SearchDialogButton" }
);

/**
 * `SearchDialogButton` given a `SearchDialog`'s props: the button the dialog
 * would render, without its search options. Inert until the dialog loads.
 */
export const SearchDialogPlaceholder = ({
  search: _search,
  filters: _filters,
  defaultResults: _defaultResults,
  onSelect: _onSelect,
  placeholder: _placeholder,
  historyKey: _historyKey,
  onSettingsPress: _onSettingsPress,
  ...props
}: SearchDialogProps) => <SearchDialogButton {...props} />;
