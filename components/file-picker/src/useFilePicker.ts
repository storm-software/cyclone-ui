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

import type * as DocumentPicker from "expo-document-picker";
import type * as ImagePicker from "expo-image-picker/src/ImagePicker";
import { useCallback } from "react";
import type { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";
import type { MediaTypeOptions } from "./file-picker-types";
import { useDropZone } from "./useDropZone";

export interface UseFilePickerControl {
  onOpen: () => void;
  getInputProps: <TProps extends DropzoneInputProps>(props?: TProps) => TProps;
  getRootProps: <TProps extends DropzoneRootProps>(props?: TProps) => TProps;
  dragStatus?: {
    isDragAccept: boolean;
    isDragActive: boolean;
    isDragReject: boolean;
  };
}

export type NativeFiles<TMediaTypeOptions extends MediaTypeOptions[]> =
  TMediaTypeOptions[number] extends "Images"
    ? ImagePicker.ImagePickerResult["assets"]
    : DocumentPicker.DocumentPickerResult[];

export type OnPickType<TMediaTypeOptions extends MediaTypeOptions[]> = (param: {
  webFiles: File[] | null;
  nativeFiles: NativeFiles<TMediaTypeOptions> | null;
}) => void | Promise<void>;

interface UseFilePickerProps<TMediaTypeOptions extends MediaTypeOptions[]> {
  mediaTypes: TMediaTypeOptions;
  onPick: OnPickType<TMediaTypeOptions>;
  /** multiple only works for image only types on native, but on web it works regarding the media types */
  multiple: boolean;
  typeOfPicker: "file" | "image";
}

export function useFilePicker<TMediaTypeOptions extends MediaTypeOptions[]>(
  props: UseFilePickerProps<TMediaTypeOptions>
) {
  const { mediaTypes, onPick, ...rest } = props;

  const onDrop = useCallback(
    (webFiles: any) => {
      if (onPick) {
        void onPick({ webFiles, nativeFiles: null });
      }
    },
    [onPick]
  );

  const onOpen = useCallback(
    (nativeFiles: any) => {
      if (onPick) {
        void onPick({ webFiles: null, nativeFiles });
      }
    },
    [onPick]
  );

  const {
    open,
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject
  } = useDropZone<TMediaTypeOptions>({
    // this is web only, it triggers both on drop and open
    onDrop,
    // this is native only
    onOpen,
    mediaTypes,
    noClick: true,
    ...rest
  });

  const control = {
    onOpen: open,
    getInputProps,
    getRootProps,
    dragStatus: {
      isDragAccept,
      isDragActive,
      isDragReject
    }
  };

  return { control, ...control };
}
