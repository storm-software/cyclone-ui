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
  getSized
} from "@cyclone-ui/helpers";
import { AlertCircle, Close, Download, Trash } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import { NumberText } from "@cyclone-ui/number-text";
import { Progress } from "@cyclone-ui/progress";
import type { ClientFileResult } from "@cyclone-ui/state";
import { getIconByTheme, ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { formatDate } from "@stryke/date/format";
import type { TamaguiWebElement } from "@tamagui/core";
import { styled, Text, Theme, View } from "@tamagui/core";
import { Image } from "@tamagui/image";
import { LinearGradient } from "@tamagui/linear-gradient";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type { PropsWithChildren } from "react";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FilePdfPreview } from "./FilePdfPreview";

/**
 * The form font for a control size.
 *
 * @remarks
 * Tamagui v3 reads a unitless `lineHeight` as a ratio, so the scaled pixel
 * leading `getFormFontSize` returns for `sm`/`lg` is pinned in `px`.
 */
const getFormFontStyle = (
  size: FormControlSize,
  env: StyleEnv,
  token: string
) => {
  const style = getFormFontSize(size, env, token);

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

const FileNameText = styled(HeadingSmallText, {
  variants: {
    controlSize: formSizeVariants((size, env) =>
      getFormFontStyle(size, env, "sm")
    )
  }
});
export const FileMetadataText = styled(BodyText, {
  variants: {
    controlSize: formSizeVariants((size, env) =>
      getFormFontStyle(size, env, "md")
    )
  }
});

const FileMetadataSeparator = styled(FileMetadataText, {
  render: "span",
  display: "inline max-md:none",
  "aria-hidden": true
});
const FILE_METADATA_SEPARATOR = "\u2002\u2022\u2002";
const FileBytesText = styled(BytesText, {
  variants: {
    controlSize: formSizeVariants((size, env) =>
      getFormFontStyle(size, env, "md")
    )
  }
});
const FileNumberText = styled(NumberText, {
  render: "span",
  variants: {
    controlSize: formSizeVariants((size, env) =>
      getFormFontStyle(size, env, "md")
    )
  }
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

const FileViewLink = ({
  uri,
  size,
  children,
  ...props
}: PropsWithChildren<{ uri?: string; size: FormControlSize }>) => {
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
    <SizableText
      color="on-primary"
      display="block"
      width="100%"
      textAlign="center"
      fontFamily="body"
      fontWeight="medium"
      {...fileTextOverflowStyle}
      {...props}>
      <FileNameText controlSize={size} color="on-primary">
        {children}
      </FileNameText>
    </SizableText>
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

/** How long the success state shows after an upload completes. */
const UPLOAD_SUCCESS_DURATION = 3000;

/** How long the upload status takes to fade and resize. */
const UPLOAD_STATUS_TRANSITION_DURATION = 200;

type FileUploadStatus = "uploading" | "success" | "failed";

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

const FileTextPreview = ({ uri, size }: { uri: string; size?: number }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (size && size > MAX_TEXT_PREVIEW_FILE_SIZE) {
      return;
    }

    const controller = new AbortController();
    fetch(uri, { signal: controller.signal })
      .then(async response => response.text())
      .then(value => {
        if (!controller.signal.aborted) {
          setText(value.slice(0, MAX_TEXT_PREVIEW_LENGTH));
        }
      })
      // The preview is decorative, so an unreadable file just shows nothing.
      .catch(() => {});

    return () => {
      controller.abort();
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

const FileFilePreview = ({
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
    return <FilePdfPreview uri={uri} />;
  }
  if (kind === "text") {
    return <FileTextPreview uri={uri} size={size} />;
  }

  return <Image height={500} src={uri} />;
};

export type FileProps = PropsWithChildren<ClientFileResult> & {
  /** The form control size the card is scaled to. */
  controlSize?: FormControlSize;
  /** Hides the remove button. */
  disabled?: boolean;
  /** Called by the remove button; without it, no remove button is shown. */
  onRemove?: () => void;
  /**
   * Called by the cancel button that replaces the remove button while the
   * file uploads. Falls back to `onRemove`.
   */
  onCancel?: () => void;
};

/**
 * A card showing a file's name, size, modified time and MIME type over an
 * image, text or PDF preview, with download and remove buttons.
 *
 * @remarks
 * While `progress` is between 0 and 100, an inline progress bar shows how
 * much of the file has been uploaded, and the remove button cancels the
 * upload instead. When the upload completes, the card briefly shows a success
 * state. A `failed` status outlines the card in the danger color and shows the
 * first danger issue's message.
 */
export const File = ({
  id,
  uri,
  name,
  size,
  lastModified,
  mimeType,
  progress,
  controlSize = "md",
  status,
  issues,
  disabled = false,
  onRemove,
  onCancel
}: FileProps) => {
  const scale = getFormSizeScale(controlSize);
  const buttonSize = getSized("10xl") * scale;
  const buttonInset = 6 * scale;
  const previewKind = getFilePreviewKind(name, mimeType);

  const failed = status === "failed";
  const uploading = !failed && progress !== undefined && progress < 100;
  const handleRemove = uploading ? (onCancel ?? onRemove) : onRemove;
  const failedMessage =
    issues?.find(issue => issue.type === "danger")?.message || "Upload failed";

  // Set while rendering (not in an effect) so the success state replaces the
  // progress bar in the same frame.
  const [wasUploading, setWasUploading] = useState(uploading);
  const [succeeded, setSucceeded] = useState(false);
  if (uploading !== wasUploading) {
    setWasUploading(uploading);
    setSucceeded(!uploading && !failed);
  }
  useEffect(() => {
    if (!succeeded) {
      return;
    }

    const timeout = setTimeout(() => {
      setSucceeded(false);
    }, UPLOAD_SUCCESS_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [succeeded]);
  const showSuccess = succeeded && !failed && !uploading;

  // The status shown under the metadata. It lags behind `uploadStatus` so the
  // previous status can fade out before the next one fades in.
  const uploadStatus: FileUploadStatus | null = failed
    ? "failed"
    : uploading
      ? "uploading"
      : showSuccess
        ? "success"
        : null;
  const [shownStatus, setShownStatus] = useState(uploadStatus);

  useEffect(() => {
    if (uploadStatus === shownStatus) {
      return;
    }

    if (!shownStatus) {
      // eslint-disable-next-line react-hooks/set-state-in-effect, react/set-state-in-effect
      setShownStatus(uploadStatus);
      return;
    }

    const timeout = setTimeout(() => {
      setShownStatus(uploadStatus);
    }, UPLOAD_STATUS_TRANSITION_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [uploadStatus, shownStatus]);

  const statusVisible = Boolean(shownStatus) && shownStatus === uploadStatus;

  // Resizes the status slot to fit its content, so the text around it glides
  // instead of snapping. Written straight to the DOM in the observer callback
  // (after layout, before paint): `onLayout` reports too late to follow the
  // fades, and the slot is not a Tamagui transition, so it never chases a
  // tween.
  const statusSlotRef = useRef<TamaguiWebElement>(null);
  const statusContentRef = useRef<TamaguiWebElement>(null);

  useLayoutEffect(() => {
    const slot = statusSlotRef.current;
    const content = statusContentRef.current;
    if (!slot || !content || typeof ResizeObserver === "undefined") {
      return;
    }

    const updateHeight = () => {
      slot.style.height = uploadStatus ? `${content.offsetHeight}px` : "0px";
    };
    updateHeight();
    // Set after the first height, so the slot never animates in on mount.
    slot.style.transition = `height ${UPLOAD_STATUS_TRANSITION_DURATION}ms ease-out`;

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, [uploadStatus]);

  // The upload can finish (and `progress` be cleared) while the progress bar
  // is still fading out.
  const shownProgress = Math.max(progress ?? 100, 0);

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
      // The status outline overlays below stand in for the border.
      borderColor={
        failed || showSuccess ? "transparent" : "outline hover:outline-hovered"
      }
      borderWidth={1}
      boxShadow="none hover:ring-offset"
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
            tooltip="Download"
            variant="ghost"
            ghostOpacity={0.75}
            size={buttonSize}
            noPadding={true}
            circular={true}>
            <Button.Icon>
              <Download />
            </Button.Icon>
          </Button>
        )}
      </View>

      {/* Overlays, so the card itself never switches theme (which would
          remount its preview). */}
      <Theme name="danger">
        <View
          transition="200ms"
          opacity={failed ? 1 : 0}
          position="absolute"
          inset={0}
          zIndex="40"
          borderRadius="card"
          borderWidth={1}
          borderColor="primary"
          pointerEvents="none"
        />
      </Theme>
      <Theme name="success">
        <View
          transition="200ms"
          opacity={showSuccess ? 1 : 0}
          position="absolute"
          inset={0}
          zIndex="40"
          borderRadius="card"
          borderWidth={1}
          borderColor="primary"
          pointerEvents="none"
        />
      </Theme>

      {!disabled && handleRemove && (
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
            aria-label={`${uploading ? "Cancel uploading" : "Remove"} ${name || "file"}`}
            tooltip={`${uploading ? "Cancel uploading" : "Remove"} ${name || "file"}`}
            onPress={handleRemove}
            size={buttonSize}
            noPadding={true}
            circular={true}>
            <Button.Icon>{uploading ? <Close /> : <Trash />}</Button.Icon>
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
            <FileViewLink uri={uri} size={controlSize}>
              {name || "Unnamed File"}
            </FileViewLink>
          </View>
          {/* On wider screens one line: the size and modified time are cut
              short with an ellipsis, and the MIME type wraps onto the clipped
              second line (hidden) when it doesn't fit. On small screens each
              item takes its own line and the separators are hidden. */}
          <FileMetadataText
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
            <FileMetadataText
              controlSize={controlSize}
              render="span"
              flexShrink={1}
              minWidth={0}
              {...fileTextOverflowStyle}>
              {[
                {
                  key: "size",
                  value: (
                    <FileBytesText controlSize={controlSize} render="span">
                      {size}
                    </FileBytesText>
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
                    <FileMetadataSeparator controlSize={controlSize}>
                      {key === "time" ? " " : FILE_METADATA_SEPARATOR}
                    </FileMetadataSeparator>
                  )}
                  <FileMetadataText
                    controlSize={controlSize}
                    render="span"
                    display="inline max-md:block">
                    {value}
                  </FileMetadataText>
                </Fragment>
              ))}
            </FileMetadataText>
            {mimeType && (
              <FileMetadataText
                controlSize={controlSize}
                render="span"
                whiteSpace="nowrap max-md:normal"
                overflowWrap="anywhere"
                display="inline max-md:block">
                <FileMetadataSeparator controlSize={controlSize}>
                  {FILE_METADATA_SEPARATOR}
                </FileMetadataSeparator>
                {mimeType}
              </FileMetadataText>
            )}
          </FileMetadataText>
          {/* The previous status fades out before the next fades in, while
              the slot resizes to fit (see `statusSlotRef`). */}
          <View ref={statusSlotRef} zIndex="30" width="100%" overflow="hidden">
            <View
              ref={statusContentRef}
              transition="200ms"
              width="100%"
              // Stands in for the stack's gap, which would not collapse.
              paddingTop="xl"
              opacity={statusVisible ? "1 enter:0" : 0}
              aria-hidden={!statusVisible}>
              {shownStatus === "uploading" && (
                <YStack zIndex="30" width="100%" gap="xl">
                  <Progress
                    variant="dashed"
                    value={shownProgress}
                    minWidth={0}
                    aria-label={`Uploading ${name || "file"}`}
                  />
                  <FileMetadataText
                    controlSize={controlSize}
                    textAlign="center"
                    aria-live="polite"
                    color="subtle"
                    size="sm">
                    {"Uploading\u2026 "}
                    <FileNumberText controlSize={controlSize} color="inherit">
                      {Math.round(shownProgress)}
                    </FileNumberText>
                    %
                  </FileMetadataText>
                </YStack>
              )}
              {shownStatus === "failed" && (
                <Theme name="danger">
                  <XStack
                    zIndex="30"
                    gap="xl"
                    justifyContent="center"
                    alignItems="center"
                    role="alert">
                    {/* Icons only resolve a plain theme key, so the color is
                        set on a wrapper whose CSS color the icon inherits. */}
                    <Text display="flex" color="primary" flexShrink={0}>
                      <AlertCircle
                        size={getSized("4xl") * scale}
                        color="currentColor"
                        animated={false}
                      />
                    </Text>
                    <FileMetadataText
                      controlSize={controlSize}
                      color="primary"
                      textAlign="center">
                      {failedMessage}
                    </FileMetadataText>
                  </XStack>
                </Theme>
              )}
              {shownStatus === "success" && (
                <Theme name="success">
                  <XStack
                    zIndex="30"
                    gap="xl"
                    justifyContent="center"
                    alignItems="center"
                    role="status">
                    <ThemeableIcon
                      theme="success"
                      size={getSized("4xl") * scale}
                      color="primary"
                      flexShrink={0}>
                      {getIconByTheme({ theme: "success" })}
                    </ThemeableIcon>
                    <FileMetadataText
                      controlSize={controlSize}
                      color="primary"
                      textAlign="center">
                      Upload complete
                    </FileMetadataText>
                  </XStack>
                </Theme>
              )}
            </View>
          </View>
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
        <FileFilePreview key={id} kind={previewKind} uri={uri} size={size} />
      </View>
    </View>
  );
};
