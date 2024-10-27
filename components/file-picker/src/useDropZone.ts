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

import * as DropZone from "react-dropzone";
import type {
  DropZoneOptionsCustom,
  MediaTypeOptions
} from "./file-picker-types";

export function useDropZone<TMediaTypeOptions extends MediaTypeOptions[]>(
  options: DropZoneOptionsCustom<TMediaTypeOptions>
) {
  const accept = options.mediaTypes
    ?.map(mediaType => mimTypes[mediaType])
    .reduce((a, b) => ({ ...a, ...b }));

  return DropZone.useDropzone({ ...options, accept: accept ?? { "*/*": [] } });
}

const mimTypes = {
  Images: {
    "image/*": []
  },
  Videos: {
    "video/*": []
  },
  Audios: {
    "audio/*": []
  },
  All: {
    "*/*": []
  }
};
