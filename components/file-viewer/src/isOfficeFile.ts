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

// What `FileViewer`'s Word, spreadsheet and PPTX renderers open. Not binary
// `.ppt` (`application/vnd.ms-powerpoint`), which needs File Viewer's
// separate PPT renderer and assets, and not CSV/TSV, which read fine as text.
const OFFICE_EXTENSION =
  /\.(?:doc[mx]?|dot[mx]?|odt|odp|xls[bmx]?|xlt[mx]?|xlam?|ods|fods|ppt[mx]|pot[mx]|pps[mx])$/i;
const OFFICE_MIME_TYPE =
  /officedocument|msword|ms-excel|ms-powerpoint\.|opendocument\.(?:text|spreadsheet|presentation)/i;

/**
 * Whether `FileViewer` can open a file, judged by its name's extension or its
 * MIME type.
 *
 * @remarks
 * Kept apart from `FileViewer` so it can be imported (from
 * `@cyclone-ui/file-viewer/isOfficeFile`) without loading the viewer.
 */
export const isOfficeFile = (name?: string, mimeType?: string) =>
  OFFICE_EXTENSION.test(name ?? "") || OFFICE_MIME_TYPE.test(mimeType ?? "");
