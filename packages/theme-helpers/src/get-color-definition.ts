/**
 * Get color definition
 *
 * @param colorName - The color name
 * @returns The color definition
 */
export const getColorDefinition = (colorName: string) => [
  {
    parent: "light",
    palette: colorName,
    template: "colorLight"
  },
  {
    parent: "dark",
    palette: colorName,
    template: "base"
  }
];
