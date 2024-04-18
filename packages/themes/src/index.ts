/**
 * The tokens library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the design tokens used by Storm Stack user interfaces
 *
 * @packageDocumentation
 */

import darkThemeJson from "../../../.storm/themes/default-dark.json";
import lightThemeJson from "../../../.storm/themes/default-light.json";

export * from "./theme-state";
export * from "./build-themes";
export * from "./types";
export * from "./themes";

export const darkTheme = darkThemeJson;
export const lightTheme = lightThemeJson;
