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
import { ColorRole } from "@cyclone-ui/colors";
import { Link } from "@cyclone-ui/link";
import { ClientFileResult } from "@cyclone-ui/state";
import { formatDateTime } from "@storm-stack/date-time/utilities/format-date-time";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { FileStatus } from "@storm-stack/types/utility-types/file";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  FontSizeTokens,
  isWeb,
  styled,
  Text,
  View,
  withStaticProperties,
  type ColorTokens
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Download, Trash2, Upload } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import { DocumentPickerResult } from "expo-document-picker";
import { PropsWithChildren, useCallback } from "react";
import { Linking } from "react-native";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export type FilePickerContextProps = {
  size: FontSizeTokens;
  typeOfPicker: "image" | "file";
  max: number;
  mediaTypes: MediaTypeOptions[];
  pick: ({ webFiles, nativeFiles }: PickFileProps) => any;
  open: () => void;
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
  pick: (props: PickFileProps) => {},
  open: () => {},
  files: [] as ClientFileResult[],
  name: "",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_FilePicker`
});

const MAX_DISPLAYABLE_FILE_NAME_LENGTH = 150;

export const FILE_PICKER_NAME = "FilePicker";

const DownloadLink = Link.styleable(
  ({ href, target, ...props }, forwardedRef) => {
    return (
      <Link
        {...props}
        {...(isWeb
          ? {
              href,
              target
            }
          : {
              href: "#",
              onPress: event => {
                props.onPress?.(event);
                if (isSet(href)) {
                  Linking.openURL(isString(href) ? href : href.toString());
                }
              }
            })}
        ref={forwardedRef}
      />
    );
  }
);

const FilePickerGroupFrame = styled(View, {
  name: FILE_PICKER_NAME,
  context: FilePickerContext,

  // animation: "slow",
  flexDirection: "column",
  width: "100%",
  minHeight: "$15",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "dashed",
  gap: "$1",
  borderRadius: "$4",
  padding: "$2",
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
        opacity: 1,
        cursor: "pointer"
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
  Partial<FilePickerContextProps> & {
    onChange?: (files: ClientFileResult[]) => any;
  }
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
                .map((file, index) => ({
                  ...file,
                  id: files.length + index,
                  status: FileStatus.INITIALIZED,
                  mimeType: file.type,
                  name: file.name,
                  size: file.size > 0 ? file.size : 0,
                  lastModified: file.lastModified ? file.lastModified : 0,
                  uri: URL.createObjectURL(file)
                }))
                .slice(max * -1)
            );
          }

          if (nativeFiles && nativeFiles.length > 0) {
            await onChange(
              nativeFiles
                .reduce((ret, file, index) => {
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
                }, files as ClientFileResult[])
                .slice(max * -1)
            );
          }
        }
      },
      [onChange, files, max]
    );

    const { open, getInputProps, getRootProps, dragStatus } = useFilePicker({
      typeOfPicker,
      mediaTypes,
      multiple: max > 1,
      onPick: handlePick
    });

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <FilePickerGroupFrame
        ref={forwardedRef}
        {...getRootProps()}
        {...props}
        group={true}
        onPress={open}
        active={Boolean(dragStatus?.isDragActive)}>
        <FilePickerContext.Provider
          name={name}
          files={files}
          open={open}
          pick={handlePick}
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
    const { disabled, files } = FilePickerContext.useStyledContext();

    if (files?.length) {
      return null;
    }

    return (
      <YStack
        ref={forwardedRef}
        justifyContent="center"
        alignItems="center"
        gap="$1"
        {...props}>
        {!files?.length && (
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
    const { disabled, files, max, open } = FilePickerContext.useStyledContext();

    if (disabled || files?.length) {
      return null;
    }

    return (
      <Button
        ref={forwardedRef}
        variant="link"
        disabled={disabled}
        onPress={open}
        $platform-native={{
          display: "none"
        }}
        {...props}>
        <Button.Text>
          {children ||
            (max > 1
              ? "Click or drop files to upload"
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

export type FilePickerFileProps = PropsWithChildren<
  ClientFileResult & {
    onRemove?: (id: number) => any;
  }
>;

const FilePickerFile = ({
  id,
  uri,
  name,
  size,
  lastModified,
  onRemove
}: FilePickerFileProps) => {
  const { disabled } = FilePickerContext.useStyledContext();

  const handleRemove = useCallback(() => {
    onRemove?.(id);
  }, [onRemove, id]);

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
        left={12}
        top="30%"
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}>
        {uri && (
          <DownloadLink href={uri} download={name}>
            <Button variant="ghost" theme="base" padding="$2" circular={true}>
              <Button.Icon>
                <Download color="$primary" size="$2" />
              </Button.Icon>
            </Button>
          </DownloadLink>
        )}
      </View>

      {!disabled && (
        <View
          animation="100ms"
          position="absolute"
          zIndex={20}
          right={12}
          top="30%"
          opacity={0}
          $group-file-hover={{
            opacity: 1
          }}>
          <Button
            variant="ghost"
            theme="base"
            onPress={handleRemove}
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
        <YStack width="75%" gap="$1.5">
          <Text
            zIndex={25}
            textAlign="center"
            color="$base10"
            fontSize="$6"
            fontWeight="$5">
            {name
              ? name.length > MAX_DISPLAYABLE_FILE_NAME_LENGTH
                ? `${name?.slice(0, MAX_DISPLAYABLE_FILE_NAME_LENGTH)}...`
                : name
              : "Unnamed File"}
          </Text>
          <XStack gap="$4" justifyContent="center">
            <BodyText zIndex={25} color="$base9">
              {(size ?? 0) / 1000} KB
            </BodyText>

            {lastModified && (
              <BodyText zIndex={25} color="$base9">
                {formatDateTime(new Date(lastModified), {
                  returnEmptyIfNotSet: true,
                  returnEmptyIfInvalid: true
                })}
              </BodyText>
            )}
          </XStack>
        </YStack>
      </View>

      <LinearGradient
        animation="slow"
        fullscreen={true}
        zIndex={10}
        colors={["transparent", "$accent8"]}
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
