import type { CSSProperties, ReactElement } from "react";

export interface FontSpecimenBlockProps {
  /** Font entry name. Defaults to the first font. */
  name?: string;
  /** Override the rendered sample text. */
  sampleText?: string;
  /** Override the previewed sizes. */
  sizes?: number[];
}

const FONT_FAMILIES: Record<string, { family: string; title: string }> = {
  "fonts": {
    family: "Fonts",
    title: "Fonts"
  }
};

const DEFAULT_FONT = "fonts";
const DEFAULT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const DEFAULT_SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "12px",
  lineHeight: 1.4,
  fontFamily: "system-ui, sans-serif",
  color: "rgba(128, 128, 128, 0.9)"
};

/**
 * Font specimen previews for Storybook MDX docs.
 */
export function FontSpecimenBlock({
  name,
  sampleText = DEFAULT_SAMPLE_TEXT,
  sizes = DEFAULT_SIZES
}: FontSpecimenBlockProps = {}): ReactElement {
  const entry = (name && FONT_FAMILIES[name]) || FONT_FAMILIES[DEFAULT_FONT];

  if (!entry) {
    return <p>No fonts found.</p>;
  }

  return (
    <div>
      <div
        style={{
          fontFamily: entry.family,
          fontSize: "32px",
          lineHeight: 1.25,
          margin: "0 0 0.5em"
        }}>
        AaBbCcDdEeFfGgHh 0123456789
      </div>
      {sizes.map(size => (
        <div
          key={size}
          style={{
            fontFamily: entry.family,
            fontSize: `${size}px`,
            lineHeight: 1.45,
            margin: "0 0 0.4em"
          }}>
          <span style={labelStyle}>{size}px</span>
          {sampleText}
        </div>
      ))}
    </div>
  );
}
