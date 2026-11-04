/**
 * Select a generated token variant. Callers may pass `theme` to override
 * the generated fallback without requiring Storybook preview-hook context.
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
