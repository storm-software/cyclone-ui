import { useGlobals, useMemo } from "storybook/preview-api";

/**
 * Select a generated token variant. By default this follows Storybook's
 * `theme` global; callers may pass `theme` to override it.
 */
export function useThemeVariant<T extends Record<string, unknown>>(
  variants: T,
  fallback: keyof T & string,
  theme?: string
): keyof T & string {
  const [globals] = useGlobals();

  return useMemo(() => {
    const candidate = theme ?? globals.theme;

    return typeof candidate === "string" && candidate in variants
      ? (candidate as keyof T & string)
      : fallback;
  }, [fallback, globals.theme, theme, variants]);
}
