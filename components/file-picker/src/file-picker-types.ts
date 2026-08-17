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

import type { DropzoneOptions } from "react-dropzone";

export type MediaTypeOptions = "All" | "Videos" | "Images" | "Audios";
export const MediaTypeOptions = {
  All: "All" as MediaTypeOptions,
  Videos: "Videos" as MediaTypeOptions,
  Images: "Images" as MediaTypeOptions,
  Audios: "Audios" as MediaTypeOptions
};

export type DropZoneOptionsCustom<
  TMediaTypeOptions extends MediaTypeOptions[]
> = Omit<DropzoneOptions, "accept"> & {
  // native only
  onOpen: DropzoneOptions["onDrop"];
  // native only
  allowsEditing?: boolean;
  mediaTypes?: TMediaTypeOptions;
};
