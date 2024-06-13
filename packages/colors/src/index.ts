/**
 * The colors library used by Storm Software for building TypeScript applications.
 *
 * @remarks
 * A package containing the Cyclone UI default color scheme
 *
 * @packageDocumentation
 */

import { theme as defaultDark } from "./schemes/brand-dark";
import { theme as defaultLight } from "./schemes/brand-light";

export const colorSchemes = {
  default: {
    light: defaultDark,
    dark: defaultLight
  }
};

export * from "./colors";
