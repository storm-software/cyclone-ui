/**
 * Select a generated token variant. Doc blocks can pass `theme` explicitly;
 * Storybook preview hooks are not available while MDX renders a React block.
 */
export function resolveThemeVariant<T extends Record<string, unknown>>(
  variants: T,
  fallback: keyof T & string,
  theme?: string
): keyof T & string {
  return typeof theme === "string" && theme in variants
    ? (theme as keyof T & string)
    : fallback;
}
