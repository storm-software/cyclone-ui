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

import type * as DocumentPicker from "expo-document-picker";
import type * as ImagePicker from "expo-image-picker/src/ImagePicker";
import { useCallback } from "react";
import type { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";
import { MediaTypeOptions } from "./file-picker-types";
import { useDropZone } from "./useDropZone";

export type UseFilePickerControl = {
  open: () => void;
  getInputProps: <TProps extends DropzoneInputProps>(props?: TProps) => TProps;
  getRootProps: <TProps extends DropzoneRootProps>(props?: TProps) => TProps;
  dragStatus?: {
    isDragAccept: boolean;
    isDragActive: boolean;
    isDragReject: boolean;
  };
};

export type NativeFiles<TMediaTypeOptions extends MediaTypeOptions[]> =
  TMediaTypeOptions[number] extends "Images"
    ? ImagePicker.ImagePickerResult["assets"]
    : DocumentPicker.DocumentPickerResult[];

export type OnPickType<TMediaTypeOptions extends MediaTypeOptions[]> = (param: {
  webFiles: File[] | null;
  nativeFiles: NativeFiles<TMediaTypeOptions> | null;
}) => void | Promise<void>;

type UseFilePickerProps<TMediaTypeOptions extends MediaTypeOptions[]> = {
  mediaTypes: TMediaTypeOptions;
  onPick: OnPickType<TMediaTypeOptions>;
  /** multiple only works for image only types on native, but on web it works regarding the media types */
  multiple: boolean;
  typeOfPicker: "file" | "image";
};

export function useFilePicker<TMediaTypeOptions extends MediaTypeOptions[]>(
  props: UseFilePickerProps<TMediaTypeOptions>
) {
  const { mediaTypes, onPick, ...rest } = props;

  const onDrop = useCallback(
    (webFiles: any) => {
      if (onPick) {
        onPick({ webFiles, nativeFiles: null });
      }
    },
    [onPick]
  );

  const onOpen = useCallback(
    (nativeFiles: any) => {
      if (onPick) {
        onPick({ webFiles: null, nativeFiles });
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
    open,
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
