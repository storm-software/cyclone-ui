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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { BytesText } from "@cyclone-ui/bytes-text";
import { ColorThemeName } from "@cyclone-ui/colors";
import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import { ClientFileResult } from "@cyclone-ui/state";
import { formatDateTime } from "@storm-stack/date-time/utilities/format-date-time";
import { useComposedRefs } from "@storm-stack/hooks";
import { FileStatus } from "@storm-stack/types/utility-types/file";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  FontSizeTokens,
  isWeb,
  styled,
  View,
  withStaticProperties,
  type ColorTokens
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Dot, Download, Trash2, Upload } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import { DocumentPickerResult } from "expo-document-picker";
import { PropsWithChildren, useCallback } from "react";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export type FilePickerContextProps = {
  size: FontSizeTokens;
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
  theme: string;
};

export const FilePickerContext = createStyledContext<FilePickerContextProps>({
  size: "$4",
  typeOfPicker: "file",
  mediaTypes: [MediaTypeOptions.All] as MediaTypeOptions[],
  max: 1,
  onPick: (props: PickFileProps) => {},
  onOpen: () => {},
  onChange: (files: ClientFileResult[]) => {},
  files: [] as ClientFileResult[],
  name: "",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorThemeName.BASE}_FilePicker`
});

const MAX_DISPLAYABLE_FILE_NAME_LENGTH = 150;

export const FILE_PICKER_NAME = "FilePicker";

const FilePickerGroupFrame = styled(View, {
  name: FILE_PICKER_NAME,
  context: FilePickerContext,

  animation: "slow",
  flexDirection: "column",
  width: "100%",
  minHeight: "$15",
  justifyContent: "center",
  alignItems: "center",
  gap: "$1",
  paddingVertical: "$4",
  borderStyle: "dashed",
  borderWidth: 2,
  borderRadius: "$4",
  borderColor: "$borderColor",
  backgroundColor: "transparent",
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  hoverStyle: {
    borderColor: "$accent10"
  },

  variants: {
    active: {
      true: {
        outlineColor: "$accent10",
        outlineWidth: 2,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderColorPress",

        hoverStyle: {
          borderColor: "$borderColorFocus"
        }
      }
    },

    disabled: {
      true: {
        opacity: 0.8,
        cursor: "not-allowed",
        borderColor: "$disabled",

        hoverStyle: {
          borderColor: "$disabled"
        }
      },
      false: {
        opacity: 1
      }
    }
  },

  defaultVariants: {
    active: false,
    disabled: false
  }
});

type PickFileProps = {
  webFiles?: File[] | null;
  nativeFiles?: DocumentPickerResult[] | null;
};

const FilePickerGroup = FilePickerGroupFrame.styleable<
  Partial<FilePickerContextProps>
>(
  (
    {
      children,
      files = [],
      onChange,
      disabled = false,
      typeOfPicker = "file",
      mediaTypes = [MediaTypeOptions.All],
      max = 1,
      name,
      ...props
    },
    forwardedRef
  ) => {
    const handlePick = useCallback(
      async ({ webFiles, nativeFiles }: PickFileProps) => {
        if (onChange) {
          if (webFiles && webFiles.length > 0) {
            await onChange(
              webFiles
                .reduce(
                  (ret, file, index) => {
                    ret.push({
                      ...file,
                      id: files.length + index,
                      status: FileStatus.INITIALIZED,
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
                          id: files.length + index + i,
                          status: FileStatus.INITIALIZED
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

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <FilePickerGroupFrame
        {...props}
        {...rootProps}
        ref={composedRef}
        group={true}
        active={Boolean(dragStatus?.isDragActive)}>
        <FilePickerContext.Provider
          name={name}
          files={files}
          onOpen={onOpen}
          onPick={handlePick}
          onChange={onChange}
          disabled={disabled}
          typeOfPicker={typeOfPicker}
          mediaTypes={mediaTypes}
          max={max}>
          {/* need an empty input div just have image drop feature in the web */}
          {/* @ts-ignore */}
          <View
            id={name}
            tag="input"
            width={0}
            height={0}
            {...getInputProps()}
          />

          {children}
        </FilePickerContext.Provider>
      </FilePickerGroupFrame>
    );
  }
);

const FilePickerTrigger = YStack.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { disabled, onOpen, files, max } =
      FilePickerContext.useStyledContext();

    if (files.length >= max) {
      return null;
    }

    return (
      <YStack
        ref={forwardedRef}
        justifyContent="center"
        alignItems="center"
        gap="$1"
        onPress={onOpen}
        width="100%"
        cursor={disabled ? "not-allowed" : "pointer"}
        {...props}>
        {files.length === 0 && (
          <Upload
            size="$5"
            color={disabled ? "$disabled" : "$color"}
            animation="100ms"
            opacity={1}
            scale={1}
            exitStyle={{
              opacity: 0,
              scale: 0.5
            }}
          />
        )}
        {children}
      </YStack>
    );
  }
);

const FilePickerTriggerButton = Button.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { disabled, files, max } = FilePickerContext.useStyledContext();

    if (disabled) {
      return null;
    }

    return (
      <Button
        ref={forwardedRef}
        variant="link"
        disabled={disabled}
        noPadding={true}
        $platform-native={{
          display: "none"
        }}
        {...props}>
        <Button.Text>
          {children ||
            (max > 1
              ? files.length === 0
                ? "Click or drop files to upload"
                : "Click or drop files to add more uploads"
              : "Click or drop a file to upload")}
        </Button.Text>
      </Button>
    );
  }
);

const FilePickerFiles = YStack.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { files } = FilePickerContext.useStyledContext();

    return (
      <AnimatePresence>
        {files?.length && (
          <YStack
            ref={forwardedRef}
            gap="$4"
            paddingHorizontal="$4"
            width="100%"
            {...props}>
            {children}
          </YStack>
        )}
      </AnimatePresence>
    );
  }
);

const FilePickerViewLink = ({
  uri,
  children,
  ...props
}: PropsWithChildren<{ uri?: string }>) => {
  if (uri) {
    return (
      <Link
        fontFamily="$label"
        fontSize="$7"
        fontWeight="$true"
        color="$fg"
        {...props}
        href={uri}
        target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <LabelText fontFamily="$label" fontSize="$7" color="$fg" {...props}>
      {children}
    </LabelText>
  );
};

export type FilePickerFileProps = PropsWithChildren<ClientFileResult>;

const FilePickerFile = ({
  id,
  uri,
  name,
  size,
  lastModified,
  mimeType
}: FilePickerFileProps) => {
  const { disabled, onChange, files } = FilePickerContext.useStyledContext();

  const handleRemove = useCallback(
    () => onChange(files.filter(file => file.id !== id)),
    [onChange, files, id]
  );

  return (
    <View
      group={"file" as any}
      flexDirection="column"
      animation="100ms"
      opacity={1}
      scale={1}
      height={100}
      width="100%"
      overflow="hidden"
      position="relative"
      borderColor="$base4"
      borderWidth={1}
      enterStyle={{
        opacity: 0,
        scale: 0.3
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.5
      }}
      hoverStyle={{
        outlineColor: "$accent10",
        outlineWidth: 2,
        outlineStyle: "solid",
        outlineOffset: 3
      }}>
      <View
        animation="100ms"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex={10}
        backgroundColor="$base2"
        opacity={0.6}
        $group-file-hover={{
          opacity: 0.8,
          style: {
            filter: "blur(1px)"
          }
        }}
      />
      <View
        animation="100ms"
        position="absolute"
        zIndex={20}
        left={16}
        top="30%"
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}>
        {uri && (
          <Link underline="none" href={uri} download={name}>
            <Button
              variant="ghost"
              theme="base"
              color="$primary"
              size="$6"
              padding="$2"
              circular={true}>
              <Button.Icon>
                <Download />
              </Button.Icon>
            </Button>
          </Link>
        )}
      </View>

      {!disabled && (
        <View
          animation="100ms"
          position="absolute"
          zIndex={20}
          right={16}
          top="30%"
          opacity={0}
          $group-file-hover={{
            opacity: 1
          }}>
          <Button
            variant="ghost"
            theme="base"
            color="$primary"
            onPress={handleRemove}
            size="$6"
            padding="$2"
            circular={true}>
            <Button.Icon>
              <Trash2 />
            </Button.Icon>
          </Button>
        </View>
      )}

      <View
        animation="100ms"
        position="absolute"
        zIndex={15}
        top={0}
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="center">
        <YStack width="75%" gap="$1.75">
          <View zIndex={25} justifyContent="center" alignItems="center">
            <FilePickerViewLink uri={uri}>
              {name
                ? name.length > MAX_DISPLAYABLE_FILE_NAME_LENGTH
                  ? `${name?.slice(0, MAX_DISPLAYABLE_FILE_NAME_LENGTH)}...`
                  : name
                : "Unnamed File"}
            </FilePickerViewLink>
          </View>
          <XStack gap="$1.5" justifyContent="center" alignItems="center">
            <BytesText zIndex={25} color="$base9" fontWeight="$5">
              {size}
            </BytesText>

            {lastModified && <Dot size="$1.25" color="$base9" />}

            {lastModified && (
              <BodyText zIndex={25} color="$base9" fontWeight="$5">
                {formatDateTime(new Date(lastModified), {
                  returnEmptyIfNotSet: true,
                  returnEmptyIfInvalid: true
                })}
              </BodyText>
            )}

            {mimeType && <Dot size="$1.25" color="$base9" />}

            {mimeType && (
              <BodyText zIndex={25} color="$base9" fontWeight="$5">
                {mimeType}
              </BodyText>
            )}
          </XStack>
        </YStack>
      </View>

      <LinearGradient
        animation="slow"
        fullscreen={true}
        zIndex={10}
        colors={["transparent", "$accent4"]}
        locations={[0, 1.1]}
        start={[0, 0]}
        end={[1, 1]}
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}
      />

      <View
        animation="slow"
        position="absolute"
        top={-240}
        left={0}
        right={0}
        zIndex={5}
        scale={1}
        $group-file-hover={{
          scale: 1.2
        }}>
        <Image key={id} height={500} source={{ height: 500, uri: uri }} />
      </View>
    </View>
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
