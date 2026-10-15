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
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import type { FormControlSize, StyleEnv } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldIconColor,
  useFormControl
} from "@cyclone-ui/helpers";
import { DownloadSimple, Lock, Trash, Upload, X } from "@cyclone-ui/icons";
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
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import type { DocumentPickerResult } from "expo-document-picker";
import type { PropsWithChildren } from "react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { MediaTypeOptions } from "./file-picker-types";
import { FilePickerPdfPreview } from "./FilePickerPdfPreview";
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
  borderColor: "outline hover:outlineHovered",
  backgroundColor: "surface hover:surfaceHovered",
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
        borderColor: "outlineActive hover:outlineActive",
        backgroundColor: "surfaceActive hover:surfaceActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary hover:primaryHovered"
      }
    },

    disabled: {
      true: {
        borderColor: "primaryDisabled hover:primaryDisabled",
        backgroundColor: "surfaceDisabled hover:surfaceDisabled",
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
          <FilePickerMetadataText
            controlSize={size}
            flex={1}
            alignSelf="center"
            paddingHorizontal={getSpaced(getFormSizeToken(size))}
            numberOfLines={1}
            color={disabled ? "inkDisabled" : "ink"}>
            {files.length === 0
              ? max > 1
                ? "No files chosen"
                : "No file chosen"
              : files.length === 1
                ? files[0]?.name || "Unnamed File"
                : `${files.length} files`}
          </FilePickerMetadataText>
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
                onPress={() => onChange([])}>
                <Button.Icon>
                  <X />
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
    const { disabled, files, max, onOpen, size, variant } =
      FilePickerContext.useStyledContext();

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
              ? "outlineDisabled"
              : "outline group-hover/file-picker:outlineHovered"
          }
          backgroundColor={
            disabled
              ? "elevatedDisabled"
              : "elevated group-hover/file-picker:elevatedHovered"
          }
          transition="200ms">
          <FilePickerMetadataText
            controlSize={size}
            fontWeight="500"
            color={disabled ? "emphasisDisabled" : "emphasis"}>
            {children || (max > 1 ? "Choose Files" : "Choose File")}
          </FilePickerMetadataText>
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
const FilePickerMetadataSeparator = styled(FilePickerMetadataText, {
  render: "span",
  display: "inline max-md:none",
  "aria-hidden": true
});
const FILE_METADATA_SEPARATOR = "\u2002\u2022\u2002";
const FilePickerBytesText = styled(BytesText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

/**
 * One line cut short with an ellipsis when it doesn't fit, except on small
 * screens, where the text wraps (breaking inside long names) so none of it is
 * hidden.
 */
const fileTextOverflowStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap max-md:normal",
  overflowWrap: "anywhere"
} as const;

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
        display="block"
        width="100%"
        textAlign="center"
        {...fileTextOverflowStyle}
        {...props}
        href={uri}
        target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <LabelText
      color="onPrimary"
      display="block"
      width="100%"
      textAlign="center"
      {...fileTextOverflowStyle}
      {...props}>
      <FilePickerNameText controlSize={size} color="onPrimary">
        {children}
      </FilePickerNameText>
    </LabelText>
  );
};

// Browsers often report source files as `video/mp2t` (`.ts`) or with no MIME
// type at all, so the extension is checked too.
const TEXT_MIME_TYPE =
  /^text\/|json|xml|yaml|javascript|typescript|toml|x-sh|sql|graphql/i;
const TEXT_EXTENSION =
  /\.(?:txt|log|md|mdx|csv|tsv|json5?|jsonc|ya?ml|toml|ini|cfg|conf|env|xml|html?|css|scss|sass|less|[cm]?[jt]sx?|vue|svelte|astro|py|rb|go|rs|java|kts?|swift|c|h|cc|cpp|hpp|cs|php|lua|sh|bash|zsh|fish|ps1|sql|graphql|gql|proto|tf|nix|lock|gitignore|dockerfile)$/i;

// ponytail: reads the whole file to show ~2 kB, so large files are skipped;
// stream the first chunk instead if bigger text previews are ever needed.
const MAX_TEXT_PREVIEW_FILE_SIZE = 1024 * 1024;
const MAX_TEXT_PREVIEW_LENGTH = 2048;

type FilePreviewKind = "image" | "text" | "pdf";

const getFilePreviewKind = (
  name?: string,
  mimeType?: string
): FilePreviewKind => {
  if (mimeType?.startsWith("image/")) {
    return "image";
  }
  if (mimeType === "application/pdf" || /\.pdf$/i.test(name ?? "")) {
    return "pdf";
  }
  if (TEXT_MIME_TYPE.test(mimeType ?? "") || TEXT_EXTENSION.test(name ?? "")) {
    return "text";
  }

  return "image";
};

const FilePickerTextPreview = ({
  uri,
  size
}: {
  uri: string;
  size?: number;
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (size && size > MAX_TEXT_PREVIEW_FILE_SIZE) {
      return;
    }

    let cancelled = false;
    fetch(uri)
      .then(async response => response.text())
      .then(value => {
        if (!cancelled) {
          setText(value.slice(0, MAX_TEXT_PREVIEW_LENGTH));
        }
      })
      // The preview is decorative, so an unreadable file just shows nothing.
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [uri, size]);

  return (
    <Text
      fontFamily="code"
      fontSize={12}
      lineHeight="18px"
      color="ink"
      padding="md"
      whiteSpace="pre"
      aria-hidden={true}>
      {text}
    </Text>
  );
};

const FilePickerFilePreview = ({
  kind,
  uri,
  size
}: {
  kind: FilePreviewKind;
  uri?: string;
  size?: number;
}) => {
  if (!uri) {
    return null;
  }
  if (kind === "pdf") {
    return <FilePickerPdfPreview uri={uri} />;
  }
  if (kind === "text") {
    return <FilePickerTextPreview uri={uri} size={size} />;
  }

  return <Image height={500} src={uri} />;
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
  const buttonSize = getSized("10xl") * scale;
  const buttonInset = 6 * scale;
  const previewKind = getFilePreviewKind(name, mimeType);

  const handleRemove = useCallback(
    () => onChange(files.filter(file => file.id !== id)),
    [onChange, files, id]
  );

  return (
    <View
      group="file"
      flexDirection="column"
      transition="200ms"
      opacity="1 enter:0 exit:0"
      scale="1 enter:0.3 exit:0.5"
      minHeight={100 * scale}
      width="100%"
      overflow="hidden"
      position="relative"
      borderRadius="card"
      borderColor="outline hover:outlineHovered"
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
      />

      <View
        transition="100ms"
        position="absolute"
        zIndex="30"
        left={buttonInset}
        top="50%"
        y="-50%"
        opacity="0 group-hover/file:1 touchable:1">
        {uri && (
          <Button
            render="a"
            href={uri}
            // Button types `download` as a boolean; the `<a>` attribute also
            // accepts the suggested file name.
            {...{ download: name }}
            variant="ghost"
            ghostOpacity={0.75}
            size={buttonSize}
            noPadding={true}
            circular={true}>
            <Button.Icon>
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
          right={buttonInset}
          top="50%"
          y="-50%"
          opacity="0 group-hover/file:1 touchable:1">
          <Button
            variant="ghost"
            theme="danger"
            ghostOpacity={0.25}
            aria-label={`Remove ${name || "file"}`}
            onPress={handleRemove}
            size={buttonSize}
            noPadding={true}
            circular={true}>
            <Button.Icon>
              <Trash />
            </Button.Icon>
          </Button>
        </View>
      )}

      {/* In the flow (unlike the layers around it), so the card grows when
          the text wraps on small screens. */}
      <View
        transition="200ms"
        position="relative"
        zIndex="20"
        flexGrow={1}
        paddingVertical="2xl"
        // Reserve the buttons' footprint so narrow cards never overlap them.
        paddingHorizontal={buttonInset * 2 + buttonSize}
        alignItems="center"
        justifyContent="center">
        <YStack width="100%" gap="xl">
          <View zIndex="30" justifyContent="center" alignItems="center">
            <FilePickerViewLink uri={uri}>
              {name || "Unnamed File"}
            </FilePickerViewLink>
          </View>
          {/* On wider screens one line: the size and modified time are cut
              short with an ellipsis, and the MIME type wraps onto the clipped
              second line (hidden) when it doesn't fit. On small screens each
              item takes its own line and the separators are hidden. */}
          <FilePickerMetadataText
            controlSize={controlSize}
            zIndex="30"
            display="flex max-md:block"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="baseline"
            maxHeight="1lh max-md:none"
            overflow="hidden"
            width="100%"
            textAlign="center">
            <FilePickerMetadataText
              controlSize={controlSize}
              render="span"
              flexShrink={1}
              minWidth={0}
              {...fileTextOverflowStyle}>
              {[
                {
                  key: "size",
                  value: (
                    <FilePickerBytesText
                      controlSize={controlSize}
                      render="span">
                      {size}
                    </FilePickerBytesText>
                  )
                },
                ...(lastModified
                  ? formatDate(new Date(lastModified), "MM-DD-YYYY HH:mm:ss")
                      .split(" ")
                      .map((value, i) => ({ key: i ? "time" : "date", value }))
                  : [])
              ].map(({ key, value }, i) => (
                <Fragment key={key}>
                  {i > 0 && (
                    <FilePickerMetadataSeparator controlSize={controlSize}>
                      {key === "time" ? " " : FILE_METADATA_SEPARATOR}
                    </FilePickerMetadataSeparator>
                  )}
                  <FilePickerMetadataText
                    controlSize={controlSize}
                    render="span"
                    display="inline max-md:block">
                    {value}
                  </FilePickerMetadataText>
                </Fragment>
              ))}
            </FilePickerMetadataText>
            {mimeType && (
              <FilePickerMetadataText
                controlSize={controlSize}
                render="span"
                whiteSpace="nowrap max-md:normal"
                overflowWrap="anywhere"
                display="inline max-md:block">
                <FilePickerMetadataSeparator controlSize={controlSize}>
                  {FILE_METADATA_SEPARATOR}
                </FilePickerMetadataSeparator>
                {mimeType}
              </FilePickerMetadataText>
            )}
          </FilePickerMetadataText>
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
        colors={["transparent", "canvas"]}
        locations={[0, 1.1]}
      />

      <View
        transition="200ms"
        position="absolute"
        // Images are offset so the card shows a band from their middle;
        // documents show their first lines.
        top={previewKind === "image" ? -240 : 0}
        left={0}
        right={0}
        zIndex="0"
        // No `backdropFilter` here: it only blurred the plain card behind the
        // preview, and with GPU compositing it let the preview paint square
        // over the card's rounded corners.
        scale="1 group-hover/file:1.2">
        <FilePickerFilePreview
          key={id}
          kind={previewKind}
          uri={uri}
          size={size}
        />
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
