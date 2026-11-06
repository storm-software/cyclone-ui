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
import type { FileProps } from "@cyclone-ui/file";
import { File as FileCard, FileMetadataText } from "@cyclone-ui/file";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormFontScale,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldIconColor,
  useFormControl
} from "@cyclone-ui/helpers";
import { Close, Lock, Upload } from "@cyclone-ui/icons";
import type { ClientFileResult } from "@cyclone-ui/state";
import { useComposedRefs } from "@stryke/hooks";
import type { FileStatus } from "@stryke/types/file";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { ColorTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { DocumentPickerResult } from "expo-document-picker";
import { useCallback } from "react";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export type FilePickerVariant = "dropzone" | "simple";

export interface FilePickerContextProps {
  size: FormControlSize;
  variant: FilePickerVariant;
  typeOfPicker: "image" | "file";
  max: number;
  mediaTypes: MediaTypeOptions[];
  onPick: ({ webFiles, nativeFiles }: PickFileProps) => any;
  onOpen: () => void;
  onChange: (files: ClientFileResult[]) => any;
  files: ClientFileResult[];
  name: string;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  active: boolean;
  hasValidationMessage: boolean;
}

export const FilePickerContext = createStyledContext<
  FilePickerContextProps,
  | "size"
  | "variant"
  | "typeOfPicker"
  | "mediaTypes"
  | "max"
  | "onPick"
  | "onOpen"
  | "onChange"
  | "files"
  | "name"
  | "scaleIcon"
  | "color"
  | "required"
  | "disabled"
  | "active"
  | "hasValidationMessage"
>(
  {
    size: "md",
    variant: "dropzone",
    typeOfPicker: "file",
    mediaTypes: [MediaTypeOptions.All] as MediaTypeOptions[],
    max: 1,
    onPick: (_props: PickFileProps) => {},
    onOpen: () => {},
    onChange: (_files: ClientFileResult[]) => {},
    files: [] as ClientFileResult[],
    name: "",
    scaleIcon: 1.3,
    color: undefined,
    required: false,
    disabled: false,
    active: false,
    hasValidationMessage: false
  } as FilePickerContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["size", "active", "disabled", "hasValidationMessage"]
  }
);

export const FILE_PICKER_NAME = "FilePicker";

const FilePickerGroupFrame = styled(View, {
  displayName: FILE_PICKER_NAME,
  context: FilePickerContext,
  transition: "200ms",
  flexDirection: "column",
  width: "100%",
  minHeight: "17xl",
  justifyContent: "center",
  alignItems: "center",
  gap: "md",
  paddingVertical: "5xl",
  borderStyle: "dashed",
  borderWidth: 2,
  borderRadius: "container",
  borderColor: "outline hover:outline-hovered",
  backgroundColor: "surface hover:surface-hovered",
  tabIndex: 0,
  variants: {
    // Styled by the `.resolve` below because the geometry depends on
    // `variant`.
    size: styled.dynamic<FormControlSize>(),

    variant: {
      dropzone: {},
      // A single-line control styled like `Input`.
      simple: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        gap: "zero",
        paddingVertical: 0,
        borderWidth: 1,
        borderRadius: "control",
        overflow: "hidden"
      }
    },

    active: {
      true: {
        borderColor: "outline-active hover:outline-active",
        backgroundColor: "surface-active hover:surface-active"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary hover:primary-hovered"
      }
    },

    disabled: {
      true: {
        borderColor: "primary-disabled hover:primary-disabled",
        backgroundColor: "surface-disabled hover:surface-disabled",
        cursor: "not-allowed"
      },
      false: {
        opacity: 1
      }
    }
  },
  defaultVariants: {
    variant: "dropzone",
    active: false,
    disabled: false
  }
}).resolve(props => {
  const size: FormControlSize =
    props.size === "sm" ? "sm" : props.size === "lg" ? "lg" : "md";

  if (props.variant === "simple") {
    const height = getSized(getFormSizeToken(size));

    return { height, minHeight: height, paddingVertical: 0 };
  }

  return {
    minHeight: getSized("17xl") * getFormSizeScale(size),
    paddingVertical: getSpaced("5xl") * getFormSizeScale(size)
  };
});

export interface PickFileProps {
  webFiles?: File[] | null;
  nativeFiles?: DocumentPickerResult[] | null;
}

const FilePickerGroup = createStyledHOC(
  FilePickerGroupFrame,
  (
    props: GetProps<typeof FilePickerGroupFrame> &
      Partial<FilePickerContextProps>,
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the picker to the form.
    const formControl = useFormControl();
    const {
      children,
      size = formControl?.size ?? "md",
      variant = "dropzone",
      files = formControl?.value ?? [],
      onChange = formControl?.onChange,
      disabled = formControl?.disabled ?? false,
      typeOfPicker = "file",
      mediaTypes = [MediaTypeOptions.All],
      max = 1,
      name,
      ...rest
    } = props;
    const hasValidationMessage = useFieldHasValidationMessage();
    const handlePick = useCallback(
      async ({ webFiles, nativeFiles }: PickFileProps) => {
        // Ids continue past the highest one in use: `files.length` repeats an
        // id still in the list once a file has been removed.
        const nextId = files.reduce(
          (id: number, file: ClientFileResult) => Math.max(id, file.id + 1),
          0
        );

        if (onChange) {
          if (webFiles && webFiles.length > 0) {
            await onChange(
              webFiles
                .reduce(
                  (ret, file, index) => {
                    ret.push({
                      ...file,
                      id: nextId + index,
                      status: "initialized" satisfies FileStatus,
                      mimeType: file.type,
                      name: file.name,
                      size: file.size > 0 ? file.size : 0,
                      lastModified: file.lastModified ? file.lastModified : 0,
                      uri: URL.createObjectURL(file)
                    });

                    return ret;
                  },
                  [...files]
                )
                .slice(max * -1)
            );
          }

          if (nativeFiles && nativeFiles.length > 0) {
            await onChange(
              nativeFiles
                .reduce(
                  (ret, file, index) => {
                    if (file.assets && file.assets.length > 0) {
                      ret.push(
                        ...file.assets.map((asset, i) => ({
                          ...asset,
                          id: nextId + index + i,
                          status: "initialized" as const satisfies FileStatus
                        }))
                      );
                    }

                    return ret;
                  },
                  [...files]
                )
                .slice(max * -1)
            );
          }
        }
      },
      [onChange, files, max]
    );

    const { onOpen, getInputProps, getRootProps, dragStatus } = useFilePicker({
      typeOfPicker,
      mediaTypes,
      multiple: max > 1,
      onPick: handlePick
    });

    const { ref, ...rootProps } = getRootProps();
    const composedRef = useComposedRefs(forwardedRef, ref);
    const handleOpen = useCallback(() => {
      // Once `max` files are attached, picking again replaces the oldest
      // (`handlePick` keeps the last `max`).
      if (!disabled) {
        onOpen();
      }
    }, [disabled, onOpen]);

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <FilePickerGroupFrame
        {...rest}
        {...rootProps}
        size={size}
        variant={variant}
        ref={composedRef}
        group="file-picker"
        disabled={disabled}
        active={Boolean(dragStatus?.isDragActive)}
        hasValidationMessage={hasValidationMessage}
        // The animated frame writes Tamagui's implicit `solid` border default
        // inline, which beats the `dashed` class from the styled config.
        style={[
          rest.style,
          { borderStyle: variant === "simple" ? "solid" : "dashed" }
        ]}
        // `onPress` handles web clicks too; adding `onClick` opened the
        // dialog twice per click.
        onPress={handleOpen}>
        <FilePickerContext.Provider
          size={size}
          variant={variant}
          name={name}
          files={files}
          onOpen={onOpen}
          onPick={handlePick}
          onChange={onChange}
          disabled={disabled}
          active={Boolean(dragStatus?.isDragActive)}
          hasValidationMessage={hasValidationMessage}
          typeOfPicker={typeOfPicker}
          mediaTypes={mediaTypes}
          max={max}>
          {/* need an empty input div just have image drop feature in the web */}
          {/* @ts-ignore */}
          <View
            id={name}
            render="input"
            width={0}
            height={0}
            {...getInputProps()}
          />

          {children ??
            (formControl && (
              <>
                <FilePickerFiles />
                <FilePickerTrigger>
                  <FilePickerTriggerButton />
                </FilePickerTrigger>
              </>
            ))}
        </FilePickerContext.Provider>
      </FilePickerGroupFrame>
    );
  }
);

const FilePickerTrigger = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    const { disabled, files, max, size, variant, onChange } =
      FilePickerContext.useStyledContext();
    const { iconColor, hoverIconColor } = useFieldIconColor();

    if (variant === "simple") {
      const clearSize = getSized(getFormSizeToken(size), { shift: -2 });

      return (
        <XStack
          ref={forwardedRef}
          flex={1}
          minWidth={0}
          alignItems="stretch"
          cursor={disabled ? "not-allowed" : "pointer"}
          {...props}>
          {children}
          <FileMetadataText
            controlSize={size}
            flex={1}
            alignSelf="center"
            paddingHorizontal={getSpaced(getFormSizeToken(size))}
            numberOfLines={1}
            color={disabled ? "ink-disabled" : "ink"}>
            {files.length === 0
              ? max > 1
                ? "No files chosen"
                : "No file chosen"
              : files.length === 1
                ? files[0]?.name || "Unnamed File"
                : `${files.length} files`}
          </FileMetadataText>
          {!disabled && files.length > 0 && (
            // Keep the press from bubbling to the frame, which opens the picker.
            <View
              flexShrink={0}
              justifyContent="center"
              paddingRight="md"
              onClick={event => event.stopPropagation()}
              onPress={event => event.stopPropagation()}>
              <Button
                variant="ghost"
                circular={true}
                noPadding={true}
                size={clearSize}
                aria-label={max > 1 ? "Remove files" : "Remove file"}
                tooltip={max > 1 ? "Remove all files" : "Remove file"}
                onPress={() => onChange([])}>
                <Button.Icon>
                  <Close />
                </Button.Icon>
              </Button>
            </View>
          )}
        </XStack>
      );
    }

    return (
      <YStack
        ref={forwardedRef}
        justifyContent="center"
        alignItems="center"
        gap="md"
        width="100%"
        cursor={disabled ? "not-allowed" : "pointer"}
        {...props}>
        {files.length === 0 && (
          // Icons only resolve a plain theme key, so the hover color is set
          // on a wrapper whose CSS color the icon inherits.
          <Text
            display="flex"
            transition="200ms"
            color={`${iconColor} group-hover/file-picker:${hoverIconColor}`}
            opacity="1 exit:0"
            scale="1 exit:0.5">
            {disabled ? (
              <Lock
                size={getSized("9xl") * getFormSizeScale(size) * 0.75}
                color="currentColor"
              />
            ) : (
              <Upload
                size={getSized("9xl") * getFormSizeScale(size)}
                color="currentColor"
              />
            )}
          </Text>
        )}
        {children}
      </YStack>
    );
  }
);

const FilePickerTriggerButton = createStyledHOC(
  Button,
  ({ children, ...props }, forwardedRef) => {
    const {
      disabled,
      files,
      max,
      onOpen,
      size,
      variant,
      hasValidationMessage
    } = FilePickerContext.useStyledContext();

    if (variant === "simple") {
      // The frame opens the picker on press, so this segment is presentational.
      return (
        <View
          flexShrink={0}
          justifyContent="center"
          paddingHorizontal={getSpaced(getFormSizeToken(size))}
          borderRightWidth={1}
          borderColor={
            disabled
              ? "outline-disabled"
              : hasValidationMessage
                ? "primary group-hover/file-picker:primary-hovered"
                : "outline group-hover/file-picker:outline-hovered"
          }
          backgroundColor={
            disabled
              ? "elevated-disabled"
              : "elevated group-hover/file-picker:elevated-hovered"
          }
          transition="200ms">
          <FileMetadataText
            controlSize={size}
            fontWeight="500"
            color={disabled ? "emphasis-disabled" : "emphasis"}>
            {children || (max > 1 ? "Choose Files" : "Choose File")}
          </FileMetadataText>
        </View>
      );
    }

    if (disabled) {
      return null;
    }

    return (
      <Button
        ref={forwardedRef}
        size={getFormSizeToken(size)}
        group="link"
        width="100%"
        variant="link"
        disabled={disabled}
        onPress={onOpen}
        display="native:none"
        marginHorizontal="5xl"
        {...props}>
        <Button.Text fontSize={16 * getFormFontScale(size)}>
          {children ||
            (files.length === 0 ? (
              max > 1 ? (
                "Click or drop files to upload"
              ) : (
                "Click or drop a file to upload"
              )
            ) : files.length < max ? (
              // The short label fits on one line on small screens. Plain
              // `Text` spans: the animated `Button.Text` resolves media in JS
              // and drops the `max-md:` clause.
              <>
                <Text display="inline max-md:none">
                  Click or drop files to add more uploads
                </Text>
                <Text display="none max-md:inline">Click to add uploads</Text>
              </>
            ) : max > 1 ? (
              "Click or drop files to replace the oldest"
            ) : (
              "Click or drop a file to replace it"
            ))}
        </Button.Text>
      </Button>
    );
  }
);

const FilePickerFiles = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    const { files, variant } = FilePickerContext.useStyledContext();

    if (variant === "simple") {
      return null;
    }

    return (
      <AnimatePresence>
        {files && files.length > 0 && (
          <YStack
            ref={forwardedRef}
            gap="5xl"
            paddingHorizontal="5xl"
            width="100%"
            {...props}>
            {/* Without children, the picker's own files are listed. */}
            {children ??
              files.map(file => <FilePickerFile key={file.id} {...file} />)}
          </YStack>
        )}
      </AnimatePresence>
    );
  }
);

export type FilePickerFileProps = FileProps;

/** A `File` card wired to the picker: removing it updates the picked files. */
const FilePickerFile = (props: FilePickerFileProps) => {
  const { disabled, onChange, files, size } =
    FilePickerContext.useStyledContext();
  const { id } = props;

  const handleRemove = useCallback(
    () => onChange(files.filter(file => file.id !== id)),
    [onChange, files, id]
  );

  return (
    <FileCard
      controlSize={size}
      disabled={disabled}
      onRemove={handleRemove}
      {...props}
    />
  );
};

export const FilePicker = withStaticProperties(FilePickerGroup, {
  Trigger: withStaticProperties(FilePickerTrigger, {
    Button: FilePickerTriggerButton
  }),
  Files: withStaticProperties(FilePickerFiles, {
    File: FilePickerFile
  })
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`FilePicker.TriggerButton` is undefined on the server).
 */
export {
  FilePickerFile,
  FilePickerFiles,
  FilePickerTrigger,
  FilePickerTriggerButton
};
