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
import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  type FormControlSize,
  type StyleEnv
} from "@cyclone-ui/helpers";
import { Dot, DownloadSimple, Trash, UploadSimple } from "@cyclone-ui/icons";
import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import type { ClientFileResult } from "@cyclone-ui/state";
import { formatDate } from "@stryke/date/format";
import { useComposedRefs } from "@stryke/hooks";
import type { FileStatus } from "@stryke/types/file";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { ColorTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { DocumentPickerResult } from "expo-document-picker";
import type { PropsWithChildren } from "react";
import { useCallback } from "react";
import { MediaTypeOptions } from "./file-picker-types";
import { useFilePicker } from "./useFilePicker";

export interface FilePickerContextProps {
  size: FormControlSize;
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

const MAX_DISPLAYABLE_FILE_NAME_LENGTH = 150;

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
  borderColor: "hairline hover:accentHover",
  backgroundColor: "surfaceElevated hover:surfaceElevatedHover",
  tabIndex: 0,
  variants: {
    // A local `styled.dynamic`: the helpers' `formSizeVariants` carrier is
    // branded by another `@tamagui/core` copy and would not type here.
    size: styled.dynamic<FormControlSize>(size =>
      size === "sm" || size === "md" || size === "lg"
        ? {
            minHeight: getSized("17xl") * getFormSizeScale(size),
            paddingVertical: getSpaced("5xl") * getFormSizeScale(size)
          }
        : undefined
    ),
    active: {
      true: {
        borderColor: "hairline hover:hairlineHover",
        backgroundColor: "surfaceElevatedActive hover:surfaceElevatedHover"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:accentHover"
      }
    },

    disabled: {
      true: {
        borderColor: "accentDisabled hover:accentDisabled",
        backgroundColor: "surfaceElevatedDisabled hover:surfaceElevatedDisabled"
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

export interface PickFileProps {
  webFiles?: File[] | null;
  nativeFiles?: DocumentPickerResult[] | null;
}

const FilePickerGroup = createStyledHOC(
  FilePickerGroupFrame,
  (
    {
      children,
      size = "md",
      files = [],
      onChange,
      disabled = false,
      typeOfPicker = "file",
      mediaTypes = [MediaTypeOptions.All],
      max = 1,
      name,
      ...props
    }: GetProps<typeof FilePickerGroupFrame> & Partial<FilePickerContextProps>,
    forwardedRef
  ) => {
    const hasValidationMessage = useFieldHasValidationMessage();
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
      if (!disabled && files.length < max) {
        onOpen();
      }
    }, [disabled, files.length, max, onOpen]);

    return (
      // @ts-ignore reason: getRootProps() which is web specific return some react-native incompatible props, but it's fine
      <FilePickerGroupFrame
        {...props}
        {...rootProps}
        size={size}
        ref={composedRef}
        group={"file-picker" as any}
        active={Boolean(dragStatus?.isDragActive)}
        hasValidationMessage={hasValidationMessage}
        // The animated frame writes Tamagui's implicit `solid` border default
        // inline, which beats the `dashed` class from the styled config.
        style={[props.style, { borderStyle: "dashed" }]}
        onClick={handleOpen}
        onPress={handleOpen}>
        <FilePickerContext.Provider
          size={size}
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

          {children}
        </FilePickerContext.Provider>
      </FilePickerGroupFrame>
    );
  }
);

const FilePickerTrigger = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    const { disabled, active, files, max, size } =
      FilePickerContext.useStyledContext();

    if (files.length >= max) {
      return null;
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
          <UploadSimple
            size={getSized("9xl") * getFormSizeScale(size)}
            color={`${disabled ? "inkSubtleDisabled" : "inkSubtle"} group-hover/file-picker:${disabled ? "inkSubtleDisabled" : active ? "hairlineHover" : "accentHover"}`}
            transition="100ms"
            opacity="1 exit:0"
            scale="1 exit:0.5"
          />
        )}
        {children}
      </YStack>
    );
  }
);

const FilePickerTriggerButton = createStyledHOC(
  Button,
  ({ children, ...props }, forwardedRef) => {
    const { disabled, files, max, onOpen, size } =
      FilePickerContext.useStyledContext();

    if (disabled) {
      return null;
    }

    return (
      <Button
        ref={forwardedRef}
        size={getFormSizeToken(size)}
        group={"link" as any}
        width="100%"
        variant="link"
        disabled={disabled}
        onPress={onOpen}
        display="native:none"
        {...props}>
        <Button.Text
          fontSize={16 * getFormFontScale(size)}
          color="link group-hover/link:linkHover"
          textDecorationColor="link group-hover/link:linkHover">
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

const FilePickerFiles = createStyledHOC(
  YStack,
  ({ children, ...props }, forwardedRef) => {
    const { files } = FilePickerContext.useStyledContext();

    return (
      <AnimatePresence>
        {files && files.length > 0 && (
          <YStack
            ref={forwardedRef}
            gap="5xl"
            paddingHorizontal="5xl"
            width="100%"
            {...props}>
            {children}
          </YStack>
        )}
      </AnimatePresence>
    );
  }
);

/**
 * The form font for a control size.
 *
 * @remarks
 * Tamagui v3 reads a unitless `lineHeight` as a ratio, so the scaled pixel
 * leading `getFormFontSize` returns for `sm`/`lg` is pinned in `px`.
 */
const getFormFontStyle = (size: FormControlSize, env: StyleEnv) => {
  const style = getFormFontSize(size, env);

  return {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
    fontStyle: style.fontStyle,
    letterSpacing: style.letterSpacing,
    textTransform: style.textTransform,
    color: style.color,
    fontSize: style.fontSize,
    lineHeight:
      typeof style.lineHeight === "number"
        ? `${style.lineHeight}px`
        : style.lineHeight
  };
};

const FilePickerNameText = styled(HeadingSmallText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});
const FilePickerMetadataText = styled(BodyText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});
const FilePickerBytesText = styled(BytesText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

const FilePickerViewLink = ({
  uri,
  children,
  ...props
}: PropsWithChildren<{ uri?: string }>) => {
  const { size } = FilePickerContext.useStyledContext();
  if (uri) {
    return (
      <Link
        fontSize={18 * getFormFontScale(size)}
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
    <LabelText color="onAccent" width="100%" textAlign="center" {...props}>
      <FilePickerNameText controlSize={size} color="onAccent">
        {children}
      </FilePickerNameText>
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
  const {
    disabled,
    onChange,
    files,
    size: controlSize
  } = FilePickerContext.useStyledContext();
  const scale = getFormSizeScale(controlSize);

  const handleRemove = useCallback(
    () => onChange(files.filter(file => file.id !== id)),
    [onChange, files, id]
  );

  return (
    <View
      group={"file" as any}
      flexDirection="column"
      transition="200ms"
      opacity="1 enter:0 exit:0"
      scale="1 enter:0.3 exit:0.5"
      height={100 * scale}
      width="100%"
      overflow="hidden"
      position="relative"
      borderRadius="card"
      borderColor="accent hover:accentHover"
      borderWidth={1}
      boxShadow="none hover:ringOffset"
      onClick={event => event.stopPropagation()}
      onPress={event => event.stopPropagation()}>
      <View
        transition="200ms"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        zIndex="10"
        backgroundColor="black"
        opacity="0.6 group-hover/file:0.8"
        filter="group-hover/file:blur(1px)"
      />
      <View
        transition="100ms"
        position="absolute"
        zIndex="30"
        left={16 * scale}
        top="50%"
        y="-50%"
        opacity="0 group-hover/file:1">
        {uri && (
          <Button
            render="a"
            href={uri}
            // Button types `download` as a boolean; the `<a>` attribute also
            // accepts the suggested file name.
            {...({ download: name } as object)}
            variant="ghost"
            ghostOpacity={0.75}
            size={getSized("13xl") * scale}
            padding="xl"
            circular={true}>
            <Button.Icon color="group-hover/button:accentHover">
              <DownloadSimple />
            </Button.Icon>
          </Button>
        )}
      </View>

      {!disabled && (
        <View
          transition="200ms"
          position="absolute"
          zIndex="30"
          right={16 * scale}
          top="50%"
          y="-50%"
          opacity="0 group-hover/file:1">
          <Button
            variant="ghost"
            ghostOpacity={0.75}
            onPress={handleRemove}
            size={getSized("13xl") * scale}
            padding="xl"
            circular={true}>
            <Button.Icon color="group-hover/button:accentHover">
              <Trash />
            </Button.Icon>
          </Button>
        </View>
      )}

      <View
        transition="200ms"
        position="absolute"
        zIndex="20"
        top={0}
        bottom={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="center">
        <YStack width="75%" gap="xl">
          <View zIndex="30" justifyContent="center" alignItems="center">
            <FilePickerViewLink uri={uri}>
              {name
                ? name.length > MAX_DISPLAYABLE_FILE_NAME_LENGTH
                  ? `${name?.slice(0, MAX_DISPLAYABLE_FILE_NAME_LENGTH)}...`
                  : name
                : "Unnamed File"}
            </FilePickerViewLink>
          </View>
          <XStack gap="lg" justifyContent="center" alignItems="center">
            <FilePickerBytesText controlSize={controlSize} zIndex="30">
              {size}
            </FilePickerBytesText>

            {lastModified && (
              <Dot size={getSized("6xl") * scale} color="inkBody" />
            )}

            {lastModified && (
              <FilePickerMetadataText controlSize={controlSize} zIndex="30">
                {formatDate(new Date(lastModified), "MM-DD-YYYY HH:mm:ss")}
              </FilePickerMetadataText>
            )}

            {mimeType && <Dot size={getSized("6xl") * scale} color="inkBody" />}

            {mimeType && (
              <FilePickerMetadataText controlSize={controlSize} zIndex="30">
                {mimeType}
              </FilePickerMetadataText>
            )}
          </XStack>
        </YStack>
      </View>

      <LinearGradient
        transition="200ms"
        zIndex="10"
        start={[0, 0]}
        end={[1, 1]}
        opacity="0 group-hover/file:0.25"
        position="absolute"
        inset={0}
        colors={["transparent", "surfaceCanvas"]}
        locations={[0, 1.1]}
      />

      <View
        transition="200ms"
        position="absolute"
        top={-240}
        left={0}
        right={0}
        zIndex="0"
        scale="1 group-hover/file:1.2">
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
