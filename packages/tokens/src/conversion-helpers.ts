/**
 * Convert a size value to a space value.
 *
 * @param size - The size value to convert.
 * @returns The converted space value.
 */
export const sizeToSpace = (size: number): number => {
  if (size === 0) {
    return 0;
  } else if (size === 2) {
    return 0.5;
  } else if (size === 4) {
    return 1;
  } else if (size === 8) {
    return 1.5;
  } else if (size <= 16) {
    return Math.round(size * 0.333);
  }

  return Math.floor(size * 0.7 - 12);
};

/**
 * Convert a size value to a space value.
 *
 * @param size - The size value to convert.
 * @returns The converted space value.
 */
export const sizeToFontSize = (size: number): number => {
  if (size === 0) {
    return 0;
  } else if (size <= 20) {
    return Math.round(size / 2);
  } else if (size <= 30) {
    return Math.round(size / 2.5);
  } else if (size <= 40) {
    return Math.round(size / 3);
  } else if (size <= 50) {
    return Math.round(size / 3.5);
  }

  return Math.floor(size / 4);
};

/**
 * Convert a font size value to a size value.
 *
 * @param fontSize - The font size value to convert.
 * @returns The converted size value.
 */
export const fontSizeToSize = (fontSize: number): number => {
  if (fontSize === 0) {
    return 0;
  } else if (fontSize <= 10) {
    return Math.round(fontSize * 2);
  } else if (fontSize <= 12) {
    return Math.round(fontSize * 2.5);
  } else if (fontSize <= 14) {
    return Math.round(fontSize * 3);
  } else if (fontSize <= 16) {
    return Math.round(fontSize * 3.5);
  } else if (fontSize <= 20) {
    return Math.round(fontSize * 4);
  } else if (fontSize <= 30) {
    return Math.round(fontSize * 5);
  }

  return Math.floor(fontSize * 6);
};
