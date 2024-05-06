/**
 * The media-queries library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the media queries used in Storm Software applications
 *
 * @packageDocumentation
 */

import { mediaQueries } from "./media-queries";
import { createMedia } from "@tamagui/react-native-media-driver";

export * from "./default-active";
export * from "./media-queries";

export const media = createMedia(mediaQueries);
