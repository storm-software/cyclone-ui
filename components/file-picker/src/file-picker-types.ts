/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

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
