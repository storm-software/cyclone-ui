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

import type { ReactNode } from "react";

/** The height of image previews (native has no `vh`). */
export const FILE_PREVIEW_HEIGHT = 400;

// The PDF, Office and media previews are web only, so native shows the
// download message.
export const FileViewerDialogWebPreview = ({
  fallback
}: {
  fallback: ReactNode;
  [prop: string]: unknown;
}) => fallback;
