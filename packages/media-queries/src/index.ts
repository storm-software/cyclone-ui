/**
 * The media-queries library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the media queries used in Storm Software applications
 *
 * @packageDocumentation
 */

import { createMedia } from "@tamagui/react-native-media-driver";
import { mediaQueries } from "./media-queries";

export * from "./default-active";
export * from "./media-queries";

export const media = createMedia(mediaQueries);
