import type { CSSProperties, ReactElement } from "react";

export interface FontSpecimenBlockProps {
  /** Font entry name. Defaults to the first font. */
  name?: string;
  /** Override the rendered sample text. */
  sampleText?: string;
  /** Override the previewed sizes. */
  sizes?: number[];
  /** Override the previewed font weights. Defaults to the weights the font provides. */
  weights?: number[];
}

const FONT_FAMILIES: Record<
  string,
  { family: string; title: string; weights: number[] }
> = {
  "storm-sans": {
    family: "\"Storm Sans\"",
    title: "Storm Sans",
    weights: [100, 200, 300, 400, 450, 500, 600, 700]
  },
  "storm-serif": {
    family: "\"Storm Serif\"",
    title: "Storm Serif",
    weights: [200, 300, 400, 500, 600, 700, 800]
  }
};

const WEIGHT_NAMES: Record<number, string> = {
  100: "Thin",
  200: "Extra Light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi Bold",
  700: "Bold",
  800: "Extra Bold",
  900: "Black"
};

const DEFAULT_FONT = "storm-sans";
const DEFAULT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const DEFAULT_SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";
const WEIGHT_SAMPLE_SIZE = 64;

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.4,
  fontFamily: "system-ui, sans-serif",
  color: "rgba(128, 128, 128, 0.9)"
};

function weightLabel(weight: number): string {
  const weightName = WEIGHT_NAMES[weight];

  return weightName ? `${weight} · ${weightName}` : String(weight);
}

/**
 * Font specimen previews for Storybook MDX docs.
 */
export function FontSpecimenBlock({
  name,
  sampleText = DEFAULT_SAMPLE_TEXT,
  sizes = DEFAULT_SIZES,
  weights
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
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
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
      {(weights ?? entry.weights).map(weight => (
        <div
          key={`weight-${weight}`}
          style={{
            fontFamily: entry.family,
            fontSize: `${WEIGHT_SAMPLE_SIZE}px`,
            fontWeight: weight,
            lineHeight: 1.45,
            margin: "0 0 0.4em"
          }}>
          <span style={labelStyle}>{weightLabel(weight)}</span>
          {sampleText}
        </div>
      ))}
    </div>
  );
}
