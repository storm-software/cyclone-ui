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
import { Modal } from "@cyclone-ui/modal";
import { Slider } from "@cyclone-ui/slider";
import { View } from "@tamagui/core";
import type { KeyboardEvent, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import type { AvatarCrop } from "./utilities";
import {
  AVATAR_CROP_MAX_ZOOM,
  clampAvatarCrop,
  cropAvatarImage,
  getAvatarCropScale
} from "./utilities";

/** The crop window's side, as a fraction of the crop area. */
const WINDOW_SIZE = 0.8;
const WINDOW_INSET = `${((1 - WINDOW_SIZE) / 2) * 100}%`;
// Dims the image around the crop window.
const WINDOW_SHADOW = "0 0 0 9999px rgba(0, 0, 0, 0.55)";

/** A line of `width` pixels across the middle of a gradient tile. */
const gridLine = (
  direction: "right" | "bottom",
  color: string,
  width: number
) =>
  `linear-gradient(to ${direction}, transparent calc(50% - ${width / 2}px), ${color} calc(50% - ${width / 2}px) calc(50% + ${width / 2}px), transparent calc(50% + ${width / 2}px))`;

// Stronger center lines over a 10% grid. Centered tiles put grid lines on the
// center lines and on the crop window's edges (10% and 90%).
const GRID_IMAGE = [
  gridLine("right", "rgba(255, 255, 255, 0.7)", 2),
  gridLine("bottom", "rgba(255, 255, 255, 0.7)", 2),
  gridLine("right", "rgba(255, 255, 255, 0.25)", 1),
  gridLine("bottom", "rgba(255, 255, 255, 0.25)", 1)
].join(", ");
const GRID_SIZE = "100% 100%, 100% 100%, 10% 100%, 100% 10%";
/** How far an arrow key pans the image, in crop window widths. */
const KEY_STEP = 0.02;
const ARROW_KEYS: Record<string, [number, number]> = {
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  ArrowUp: [0, -1],
  ArrowDown: [0, 1]
};

interface AvatarCropperProps {
  file: File;
  circular: boolean;
  onCancel: () => void;
  onCrop: (file: File) => void;
}

const AvatarCropper = ({
  file,
  circular,
  onCancel,
  onCrop
}: AvatarCropperProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const dragRef = useRef<{ x: number; y: number; size: number } | null>(null);
  const savingRef = useRef(false);
  const [url, setUrl] = useState<string>();
  const [natural, setNatural] = useState<{ width: number; height: number }>();
  const [failed, setFailed] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [crop, setCrop] = useState<AvatarCrop>({ x: 0, y: 0, zoom: 1 });

  useEffect(() => {
    // A data URL, unlike an object URL, needs no revoking.
    const reader = new FileReader();
    reader.onload = () => setUrl(reader.result as string);
    reader.onerror = () => setFailed(true);
    reader.readAsDataURL(file);

    return () => reader.abort();
  }, [file]);

  const update = (change: (current: AvatarCrop) => Partial<AvatarCrop>) => {
    if (natural) {
      setCrop(current =>
        clampAvatarCrop(natural.width, natural.height, {
          ...current,
          ...change(current)
        })
      );
    }
  };

  const pan = (dx: number, dy: number) =>
    update(current => ({ x: current.x + dx, y: current.y + dy }));

  const handleSave = async () => {
    if (!imageRef.current || savingRef.current) {
      return;
    }

    savingRef.current = true;
    try {
      onCrop(await cropAvatarImage(imageRef.current, crop, file));
    } catch {
      setFailed(true);
    } finally {
      savingRef.current = false;
    }
  };

  const scale =
    natural && getAvatarCropScale(natural.width, natural.height, crop.zoom);

  return (
    <>
      <Modal.Content>
        <Modal.Header closable={true}>
          <Modal.Title>Crop image</Modal.Title>
          <Modal.Description>
            Drag the image (or use the arrow keys) to position it, and use the
            slider to zoom.
          </Modal.Description>
        </Modal.Header>
        {failed ? (
          <Modal.Body>This image can't be opened. Try another one.</Modal.Body>
        ) : (
          <View gap="4xl" alignItems="center">
            <View
              position="relative"
              width="100%"
              maxWidth={320}
              aspectRatio={1}
              overflow="hidden"
              borderRadius="container"
              backgroundColor="black"
              cursor={dragging ? "grabbing" : "grab"}
              userSelect="none"
              touchAction="none"
              boxShadow="focus-visible:ring-offset"
              outlineStyle="focus-visible:none"
              tabIndex={0}
              role="group"
              aria-label="Image position"
              onPointerDown={(event: PointerEvent<HTMLElement>) => {
                if (event.button !== 0) {
                  return;
                }

                event.currentTarget.setPointerCapture(event.pointerId);
                dragRef.current = {
                  x: event.clientX,
                  y: event.clientY,
                  size:
                    event.currentTarget.getBoundingClientRect().width *
                    WINDOW_SIZE
                };
                setDragging(true);
              }}
              onPointerMove={(event: PointerEvent<HTMLElement>) => {
                const drag = dragRef.current;
                if (drag) {
                  pan(
                    (event.clientX - drag.x) / drag.size,
                    (event.clientY - drag.y) / drag.size
                  );
                  drag.x = event.clientX;
                  drag.y = event.clientY;
                }
              }}
              onPointerUp={() => {
                dragRef.current = null;
                setDragging(false);
              }}
              onPointerCancel={() => {
                dragRef.current = null;
                setDragging(false);
              }}
              onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                const direction = ARROW_KEYS[event.key];
                if (direction) {
                  event.preventDefault();
                  const step = event.shiftKey ? KEY_STEP * 5 : KEY_STEP;
                  pan(direction[0] * step, direction[1] * step);
                }
              }}>
              {/* The image is positioned in crop window units, so the area
                  can be any size. */}
              <View position="absolute" inset={WINDOW_INSET}>
                {url && (
                  <img
                    ref={imageRef}
                    src={url}
                    alt=""
                    draggable={false}
                    onLoad={event =>
                      setNatural({
                        width: event.currentTarget.naturalWidth,
                        height: event.currentTarget.naturalHeight
                      })
                    }
                    onError={() => setFailed(true)}
                    style={
                      scale
                        ? {
                            position: "absolute",
                            maxWidth: "none",
                            width: `${scale.width * 100}%`,
                            height: `${scale.height * 100}%`,
                            left: `${(0.5 - scale.width / 2 + crop.x) * 100}%`,
                            top: `${(0.5 - scale.height / 2 + crop.y) * 100}%`
                          }
                        : { position: "absolute", visibility: "hidden" }
                    }
                  />
                )}
              </View>
              {/* Under the window mask, so the grid is dimmed outside it. */}
              <View
                position="absolute"
                inset={0}
                pointerEvents="none"
                backgroundImage={GRID_IMAGE}
                backgroundSize={GRID_SIZE}
                backgroundPosition="center"
              />
              <View
                position="absolute"
                inset={WINDOW_INSET}
                pointerEvents="none"
                borderRadius={circular ? "full" : "container"}
                borderWidth={2}
                borderColor="white"
                boxShadow={WINDOW_SHADOW}
              />
            </View>
            <Slider
              width="100%"
              maxWidth={320}
              size="sm"
              min={1}
              max={AVATAR_CROP_MAX_ZOOM}
              step={0.01}
              value={crop.zoom}
              disabled={!natural}
              aria-label="Zoom"
              onChange={value => update(() => ({ zoom: value as number }))}
            />
          </View>
        )}
      </Modal.Content>
      <Modal.Footer>
        <Button variant="outlined" size="sm" flexGrow={0} onPress={onCancel}>
          <Button.Text>Cancel</Button.Text>
        </Button>
        <Button
          variant="primary"
          size="sm"
          flexGrow={0}
          disabled={!natural || failed}
          onPress={() => void handleSave()}>
          <Button.Text>Save</Button.Text>
        </Button>
      </Modal.Footer>
    </>
  );
};

export interface AvatarCropModalProps {
  /** The picked image. The modal is open while it is set. */
  file: File | null;
  /** Shows a round crop window instead of a square one. */
  circular: boolean;
  onCancel: () => void;
  /** Called with the cropped, square image. */
  onCrop: (file: File) => void;
}

/**
 * A modal for panning and zooming a picked image inside a square (or round) crop window. Web only.
 */
export const AvatarCropModal = ({
  file,
  circular,
  onCancel,
  onCrop
}: AvatarCropModalProps) => {
  // Keeps the last file while the modal animates closed.
  const [shown, setShown] = useState(file);
  if (file && file !== shown) {
    setShown(file);
  }

  return (
    <Modal
      open={file !== null}
      onOpenChange={open => {
        if (!open) {
          onCancel();
        }
      }}>
      <Modal.Frame maxWidth={400}>
        {shown && (
          <AvatarCropper
            key={`${shown.name}-${shown.lastModified}-${shown.size}`}
            file={shown}
            circular={circular}
            onCancel={onCancel}
            onCrop={onCrop}
          />
        )}
      </Modal.Frame>
    </Modal>
  );
};
