import { Typeset } from "@storybook/addon-docs/blocks";
import { useThemeVariant } from "./ThemeVariant";


/**
 * Typography tokens rendered with Storybook's Typeset doc block.
 *
 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-typeset
 */
const TYPESET_VARIANTS = {
  "dark": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />),
  "darkDimmed": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />),
  "darkHighContrast": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />),
  "light": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />),
  "lightDimmed": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />),
  "lightHighContrast": (<Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />)
};

export interface TypesetBlockProps {
  /** Generated token-set name. Defaults to Storybook's `theme` global. */
  theme?: string;
}

export function TypesetBlock({ theme }: TypesetBlockProps = {}) {
  const activeTheme = useThemeVariant(TYPESET_VARIANTS, "dark", theme);

  return TYPESET_VARIANTS[activeTheme];
}
