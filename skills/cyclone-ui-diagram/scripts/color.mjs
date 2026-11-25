// Resolve Cyclone's OKLCH colors to the sRGB syntax accepted by native SVG.
// Kept self-contained so the generated component does not need a color library.
export function portableColor(value) {
  const match =
    /^oklch\(\s*([\d.]+)(%)?\s+([\d.]+)(%)?\s+([-\d.]+)(?:deg)?(?:\s*\/\s*([\d.]+)(%)?)?\s*\)$/i.exec(
      value
    );
  if (!match) return value;
  const L = Number(match[1]) / (match[2] ? 100 : 1);
  const C = Number(match[3]) * (match[4] ? 0.004 : 1);
  const hue = (Number(match[5]) * Math.PI) / 180;
  const a = C * Math.cos(hue),
    b = C * Math.sin(hue);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const channels = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
  ].map(channel =>
    Math.round(
      255 *
        Math.min(
          1,
          Math.max(
            0,
            channel <= 0.0031308
              ? 12.92 * channel
              : 1.055 * channel ** (1 / 2.4) - 0.055
          )
        )
    )
  );
  const alpha = match[6] == null ? 1 : Number(match[6]) / (match[7] ? 100 : 1);
  return `rgba(${channels.join(", ")}, ${Math.min(1, Math.max(0, alpha))})`;
}
