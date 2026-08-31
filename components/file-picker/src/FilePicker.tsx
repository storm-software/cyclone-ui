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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { BytesText } from "@cyclone-ui/bytes-text";
import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import type { ClientFileResult } from "@cyclone-ui/state";
import { formatDate } from "@stryke/date/format";
import { useComposedRefs } from "@stryke/hooks";
import type { FileStatus } from "@stryke/types/file";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Dot, Download, Trash2, Upload } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import type { DocumentPickerResult } from "expo-document-picker";
import type { PropsWithChildren } from "react";
import { useCallback } from "react";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export interface FilePickerContextProps {
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
  active: boolean;
  theme: string;
}

export const FilePickerContext = createStyledContext<FilePickerContextProps>({
  size: "$10xl",
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
  theme: `${"primary"}_FilePicker`
});

const MAX_DISPLAYABLE_FILE_NAME_LENGTH = 150;

export const FILE_PICKER_NAME = "FilePicker";

const FilePickerGroupFrame = styled(View, {
  name: FILE_PICKER_NAME,
  context: FilePickerContext,

  transition: "400ms",
  flexDirection: "column",
  width: "100%",
  minHeight: "$17xl",
  justifyContent: "center",
  alignItems: "center",
  gap: "$md",
  paddingVertical: "$5xl",
  borderStyle: "dashed",
  borderWidth: 2,
  borderRadius: "$container",
  borderColor: "$border",
  backgroundColor: "$backgroundElevated",
  tabIndex: 0,

  hoverStyle: {
    borderColor: "$borderHover",
    backgroundColor: "$backgroundElevatedHover"
  },

  variants: {
    active: {
      true: {
        borderColor: "$borderSubtle",
        backgroundColor: "$backgroundElevatedFocused",

        hoverStyle: {
          borderColor: "$borderSubtleHover",
          backgroundColor: "$backgroundElevatedHover"
        }
      }
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",
        backgroundColor: "$backgroundElevatedDisabled",

        hoverStyle: {
          borderColor: "$borderDisabled",
          backgroundColor: "$backgroundElevatedDisabled"
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

interface PickFileProps {
  webFiles?: File[] | null;
  nativeFiles?: DocumentPickerResult[] | null;
}

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
                          id: files.length + index + i,
                          status: "initialized" satisfies FileStatus
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
      if (!disabled && files.length < max) {
        onOpen();
      }
    }, [disabled, files.length, max, onOpen]);

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <FilePickerGroupFrame
        {...props}
        {...rootProps}
        ref={composedRef}
        group={"file-picker" as any}
        active={Boolean(dragStatus?.isDragActive)}
        onClick={handleOpen}
        onPress={handleOpen}>
        <FilePickerContext.Provider
          name={name}
          files={files}
          onOpen={onOpen}
          onPick={handlePick}
          onChange={onChange}
          disabled={disabled}
          active={Boolean(dragStatus?.isDragActive)}
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

          {children}
        </FilePickerContext.Provider>
      </FilePickerGroupFrame>
    );
  }
);

const FilePickerTrigger = YStack.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { disabled, active, files, max } =
      FilePickerContext.useStyledContext();

    if (files.length >= max) {
      return null;
    }

    return (
      <YStack
        ref={forwardedRef}
        justifyContent="center"
        alignItems="center"
        gap="$md"
        width="100%"
        cursor={disabled ? "not-allowed" : "pointer"}
        {...props}>
        {files.length === 0 && (
          <Upload
            size="$9xl"
            color={
              disabled
                ? "$borderDisabled"
                : active
                  ? "$borderSubtle"
                  : "$border"
            }
            $group-file-picker-hover={{
              color: disabled
                ? "$borderDisabled"
                : active
                  ? "$borderSubtleHover"
                  : "$borderHover"
            }}
            transition="100ms"
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
    const { disabled, files, max, onOpen } =
      FilePickerContext.useStyledContext();

    if (disabled) {
      return null;
    }

    return (
      <Button
        ref={forwardedRef}
        width="100%"
        variant="link"
        disabled={disabled}
        onPress={onOpen}
        $platform-native={{
          display: "none"
        }}
        {...props}>
        <Button.Text
          color="$foregroundLink"
          textDecorationColor="$foregroundLink">
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
        {files && files.length > 0 && (
          <YStack
            ref={forwardedRef}
            gap="$5xl"
            paddingHorizontal="$5xl"
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
        fontFamily="$heading-sm"
        fontSize="$xl"
        fontWeight="$true"
        color="$foregroundInverse"
        width="100%"
        textAlign="center"
        {...props}
        href={uri}
        target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <LabelText
      fontFamily="$heading-sm"
      fontSize="$xl"
      color="$foregroundInverse"
      width="100%"
      textAlign="center"
      {...props}>
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
      transition="100ms"
      opacity={1}
      scale={1}
      height={100}
      width="100%"
      overflow="hidden"
      position="relative"
      borderRadius="$card"
      borderColor="$border"
      borderWidth={1}
      boxShadow="none"
      enterStyle={{
        opacity: 0,
        scale: 0.3
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.5
      }}
      hoverStyle={{
        borderColor: "$borderHover",
        boxShadow: "$ring"
      }}
      onClick={event => event.stopPropagation()}
      onPress={event => event.stopPropagation()}>
      <View
        transition="100ms"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex="$10"
        backgroundColor="$black"
        opacity={0.6}
        $group-file-hover={{
          opacity: 0.8,
          style: {
            filter: "blur(1px)"
          }
        }}
      />
      <View
        transition="100ms"
        position="absolute"
        zIndex="$30"
        left={16}
        top="50%"
        y="-50%"
        opacity={0}
        $group-file-hover={{
          opacity: 1
        }}>
        {uri && (
          <Button
            render="a"
            href={uri}
            download={name}
            variant="ghost"
            size="$13xl"
            padding="$xl"
            circular={true}>
            <Button.Icon $group-button-hover={{ color: "$foregroundHover" }}>
              <Download />
            </Button.Icon>
          </Button>
        )}
      </View>

      {!disabled && (
        <View
          transition="100ms"
          position="absolute"
          zIndex="$30"
          right={16}
          top="50%"
          y="-50%"
          opacity={0}
          $group-file-hover={{
            opacity: 1
          }}>
          <Button
            variant="ghost"
            onPress={handleRemove}
            size="$13xl"
            padding="$xl"
            circular={true}>
            <Button.Icon $group-button-hover={{ color: "$foregroundHover" }}>
              <Trash2 />
            </Button.Icon>
          </Button>
        </View>
      )}

      <View
        transition="100ms"
        position="absolute"
        zIndex="$20"
        top={0}
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="center">
        <YStack width="75%" gap="$xl">
          <View zIndex="$30" justifyContent="center" alignItems="center">
            <FilePickerViewLink uri={uri}>
              {name
                ? name.length > MAX_DISPLAYABLE_FILE_NAME_LENGTH
                  ? `${name?.slice(0, MAX_DISPLAYABLE_FILE_NAME_LENGTH)}...`
                  : name
                : "Unnamed File"}
            </FilePickerViewLink>
          </View>
          <XStack gap="$lg" justifyContent="center" alignItems="center">
            <BytesText zIndex="$30">{size}</BytesText>

            {lastModified && <Dot size="$6xl" color="$foregroundBody" />}

            {lastModified && (
              <BodyText zIndex="$30">
                {formatDate(new Date(lastModified), "MM-DD-YYYY HH:mm:ss")}
              </BodyText>
            )}

            {mimeType && <Dot size="$6xl" color="$foregroundBody" />}

            {mimeType && <BodyText zIndex="$30">{mimeType}</BodyText>}
          </XStack>
        </YStack>
      </View>

      <LinearGradient
        transition="200ms"
        fullscreen={true}
        zIndex="$10"
        colors={["transparent", "$backgroundPage"]}
        locations={[0, 1.1]}
        start={[0, 0]}
        end={[1, 1]}
        opacity={0}
        $group-file-hover={{
          opacity: 0.25
        }}
      />

      <View
        transition="200ms"
        position="absolute"
        top={-240}
        left={0}
        right={0}
        zIndex="$0"
        scale={1}
        $group-file-hover={{
          scale: 1.2
        }}>
        <Image key={id} height={500} src={uri} />
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
