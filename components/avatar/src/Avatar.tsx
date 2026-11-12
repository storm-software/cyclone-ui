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

import type { BadgeColor } from "@cyclone-ui/badge";
import { Badge } from "@cyclone-ui/badge";
import { BodyText } from "@cyclone-ui/body-text";
import { Account, Camera } from "@cyclone-ui/icons";
import { Spinner } from "@cyclone-ui/spinner";
import { Avatar as TamaguiAvatar } from "@tamagui/avatar";
import type { GetProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { AvatarCropModal } from "./AvatarCropModal";
import { getAvatarInitials } from "./utilities";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Per size: the frame's `size` token (24, 32, 42, 62, 92 and 132px), its
// corner radius when not circular, the initials' font size, the fallback and
// upload icons' `size` tokens, the status dot's `size` token (8, 10, 12, 16,
// 20 and 26px), and the transparent ring around the dot, in pixels.
const AVATAR_SIZES = {
  xs: {
    frame: "6xl",
    radius: "sm",
    text: "xxxs",
    icon: "2xl",
    upload: "lg",
    dot: "sm",
    ring: 2
  },
  sm: {
    frame: "8xl",
    radius: "md",
    text: "xxs",
    icon: "4xl",
    upload: "2xl",
    dot: "md",
    ring: 2
  },
  md: {
    frame: "10xl",
    radius: "lg",
    text: "sm",
    icon: "7xl",
    upload: "4xl",
    dot: "lg",
    ring: 2
  },
  lg: {
    frame: "13xl",
    radius: "xl",
    text: "xl",
    icon: "9xl",
    upload: "6xl",
    dot: "2xl",
    ring: 3
  },
  xl: {
    frame: "16xl",
    radius: "2xl",
    text: "3xl",
    icon: "12xl",
    upload: "8xl",
    dot: "4xl",
    ring: 4
  },
  "2xl": {
    frame: "20xl",
    radius: "3xl",
    text: "4xl",
    icon: "14xl",
    upload: "10xl",
    dot: "7xl",
    ring: 5
  }
} as const;

const STATUS_ORIGIN = { vertical: "bottom", horizontal: "right" } as const;

/**
 * Cuts the status dot and a transparent ring out of an avatar layer. The
 * `Badge`'s circular overlap insets the dot's center 14% from the corner.
 *
 * @param dot - The dot's `size` token.
 * @param ring - The ring's width, in pixels.
 * @returns A CSS `mask-image`.
 */
const getStatusMask = (dot: string, ring: number) => {
  const radius = `calc(var(--t-size-${dot}) / 2 + ${ring}px)`;

  return `radial-gradient(circle at 86% 86%, transparent ${radius}, #000 calc(${radius} + 0.5px))`;
};

const AvatarUploadButton = styled(View, {
  displayName: "AvatarUploadButton",
  render: "button",
  position: "absolute",
  inset: 0,
  zIndex: 2,
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  borderWidth: 0,
  backgroundColor: "black/50",
  cursor: "pointer",
  // Shown on hover and keyboard focus.
  opacity: "0 hover:1 focus-visible:1",
  outlineStyle: "focus-visible:none",
  transition: "200ms",

  variants: {
    uploading: {
      true: {
        opacity: 1,
        cursor: "progress"
      }
    }
  } as const
});

export interface AvatarProps extends Omit<
  GetProps<typeof TamaguiAvatar>,
  "size" | "children"
> {
  /** The image URL. The fallback shows while it loads, and when it is missing or fails. */
  src?: string | null;

  /** The person's name: the image's alt text, and the source of the fallback initials. */
  name?: string;

  /**
   * The avatar's size.
   *
   * @defaultValue "md"
   */
  size?: AvatarSize;

  /**
   * Round the avatar (and its crop window). `false` gives rounded corners.
   *
   * @defaultValue true
   */
  circular?: boolean;

  /** Replaces the default fallback (the `name` initials, or a person icon). */
  fallback?: ReactNode;

  /**
   * Shows a status dot (a `Badge` in this color, such as `"success"` for online) on the bottom-right edge, cut out of the avatar by a transparent ring.
   */
  status?: BadgeColor;

  /** Describes the status to screen readers (such as "Online"), since the dot itself is hidden from them. */
  statusLabel?: string;

  /**
   * Show an upload button on hover that picks an image, crops it, and passes the result to `onUpload`. Web only.
   *
   * @defaultValue false
   */
  editable?: boolean;

  /**
   * Called with the cropped, square image (at most 512px). The avatar shows it right away, and while a returned promise is pending it shows a spinner. A rejected promise restores the previous image.
   */
  onUpload?: (file: File) => void | Promise<void>;
}

/**
 * An image at a fixed size and shape, with a fallback of initials or an icon while it loads or when it is missing. An `editable` avatar uploads a new, cropped image.
 */
export const Avatar = ({
  src,
  name,
  size = "md",
  circular = true,
  fallback,
  status,
  statusLabel,
  editable = false,
  onUpload,
  ...props
}: AvatarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>();
  const [previewSrc, setPreviewSrc] = useState(src);
  const [failedSrc, setFailedSrc] = useState<string>();

  // A new `src` (such as the uploaded image's URL) replaces the preview.
  if (previewSrc !== src) {
    setPreviewSrc(src);
    setPreview(undefined);
  }

  useEffect(
    () => (preview ? () => URL.revokeObjectURL(preview) : undefined),
    [preview]
  );

  const handleCrop = async (cropped: File) => {
    setFile(null);
    setPreview(URL.createObjectURL(cropped));
    setUploading(true);
    try {
      await onUpload?.(cropped);
    } catch (error) {
      setPreview(undefined);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const imageSrc = preview ?? src ?? undefined;
  const sizes = AVATAR_SIZES[size];
  const initials = name ? getAvatarInitials(name) : "";
  const label = [name, status && statusLabel].filter(Boolean).join(", ");
  // The layers clip themselves (and cut out the status ring), instead of the
  // frame, so the status dot can sit over the frame's edge.
  const layer = {
    borderRadius: circular ? "full" : sizes.radius,
    overflow: "hidden",
    ...(status ? { maskImage: getStatusMask(sizes.dot, sizes.ring) } : {})
  } as const;

  return (
    <TamaguiAvatar
      size={sizes.frame}
      circular={circular}
      // Spread, not `borderRadius={undefined}`, which would replace the
      // `circular` variant's radius.
      {...(circular ? {} : { borderRadius: sizes.radius })}
      overflow="visible"
      {...props}>
      <TamaguiAvatar.Image
        {...layer}
        src={imageSrc}
        alt={label}
        // Tamagui leaves a failed image showing the browser's broken-image
        // icon and alt text over the fallback.
        {...(imageSrc === failedSrc ? { display: "none" } : {})}
        onLoadingStatusChange={status => {
          if (status === "error") {
            setFailedSrc(imageSrc);
          }
        }}
      />
      <TamaguiAvatar.Fallback
        {...layer}
        alignItems="center"
        justifyContent="center"
        backgroundColor="sunken"
        {...(label
          ? { role: "img", "aria-label": label }
          : { "aria-hidden": true })}>
        {fallback ??
          (initials ? (
            <BodyText
              render="span"
              size={sizes.text}
              color="ink"
              fontWeight="semibold"
              aria-hidden={true}>
              {initials}
            </BodyText>
          ) : (
            <Account size={sizes.icon} color="subtle" animated={false} />
          ))}
      </TamaguiAvatar.Fallback>
      {editable && (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            // Not the `hidden` attribute: global `input` styles can override it,
            // leaving the input in the tab order.
            style={{ display: "none" }}
            onChange={event => {
              const picked = event.target.files?.[0];
              // Lets the same file be picked again.
              event.target.value = "";
              if (picked) {
                setFile(picked);
              }
            }}
          />
          <AvatarUploadButton
            {...layer}
            // Not a form's submit button. `type` is missing from View's props.
            {...{ type: "button" }}
            aria-label="Upload image"
            aria-busy={uploading}
            disabled={uploading}
            uploading={uploading}
            onPress={() => inputRef.current?.click()}>
            {uploading ? (
              <Spinner size="small" color="white" />
            ) : (
              <Camera size={sizes.upload} color="white" animated={false} />
            )}
          </AvatarUploadButton>
          <AvatarCropModal
            file={file}
            circular={circular}
            onCancel={() => setFile(null)}
            onCrop={cropped => void handleCrop(cropped)}
          />
        </>
      )}
      {status && (
        // Fills the frame, so the dot is placed on the frame's corner.
        <Badge
          variant="dot"
          color={status}
          overlap="circular"
          anchorOrigin={STATUS_ORIGIN}
          position="absolute"
          inset={0}
          width="100%"
          height="100%"
          zIndex={3}
          pointerEvents="none"
          slotProps={{ badge: { height: sizes.dot, minWidth: sizes.dot } }}
        />
      )}
    </TamaguiAvatar>
  );
};
