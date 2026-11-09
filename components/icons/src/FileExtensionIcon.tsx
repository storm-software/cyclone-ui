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

import type {
  GetProps
} from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { File } from "./icons/File";
import type { IconProps } from "./types";
// import { FileText } from "./icons/FileText";
// import { FilePdf } from "./icons/FilePdf";
// import { FileExcel } from "./icons/FileExcel";



const FileExtensionIconFrame = styled(View, {
  transition: "200ms",
  alignItems: "center",
  opacity: "enter:0 exit:0",
  scale: "enter:0.5 exit:0.5"
});

interface FileExtensionIconExtraProps {
  extension: string;
}

export const getIconByFileExtension = ({
  extension,
  ...props
}: IconProps & FileExtensionIconExtraProps) => {
  // switch (extension) {
  //   case "txt":
  //     return <FileText {...props} />;
  //   case "pdf":
  //     return <FilePdf {...props} />;
  //   case "xlsx":
  //     return <FileExcel {...props} />;
  // }

  return <File {...props} />;
};



export const FileExtensionIcon = createStyledHOC(
  FileExtensionIconFrame,
  (
    {
      extension,
        color,
      size,
      variant = "regular",
      animated = false,
      mirrored = false,
      ...props
    }: IconProps & FileExtensionIconExtraProps,
    forwardedRef
  ) => {

    return (
      <FileExtensionIconFrame ref={forwardedRef} {...props}>
        {getIconByFileExtension({ extension, size, color, variant, animated, mirrored })}
      </FileExtensionIconFrame>
    );
  }
);

export type FileExtensionIconProps = GetProps<typeof FileExtensionIcon>;
