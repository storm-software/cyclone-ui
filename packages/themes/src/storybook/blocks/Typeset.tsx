import { Typeset } from "@storybook/addon-docs/blocks";

/**
 * Typography tokens rendered with Storybook's Typeset doc block.
 *
 * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-typeset
 */
export function TypesetBlock() {
  return (
    <Typeset
      fontFamily={"system-ui, sans-serif"}
      fontSizes={[0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5, 6, 8]}
      fontWeight={100}
      sampleText={"The quick brown fox jumps over the lazy dog"}
    />
  );
}
