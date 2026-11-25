# Diagram source

The source is JSON, not executable code. It has `name` (lowercase kebab case), `title`, `description`, positive numeric `width` and `height`, and `children`, a list of SVG scene nodes. Coordinates use the source viewBox; text sizes are viewBox units. Start from the bundled examples for complete input.

Each node has `tag`, optional `attrs`, optional `children`, and text nodes may have `text` and `font`. Supported tags: `g`, `rect`, `path`, `line`, `circle`, `ellipse`, `polygon`, `polyline`, `text`, `tspan`, `defs`, `marker`, `clipPath`. The validator rejects other elements and unrecognized attributes instead of silently dropping them.

Attributes use React/SVG camelCase (`strokeWidth`, `textAnchor`, `markerEnd`, `clipPath`, `fillOpacity`, `strokeDasharray`). They become XML attributes in static output. Use `fill`/`stroke` roles such as `@ink` or `none`; all actual colors live in the palette, not geometry. Set paints explicitly on geometry; the root defaults to `fill="none"`, with text defaulting to `@ink`.

Use `font: "label"` (14px sans semibold), `"detail"` (12px mono), `"eyebrow"` (10px mono medium), `"title"` (30px serif), or `"callout"` (16px italic serif). The builder expands these from the token snapshot. `fontSize`, `fontWeight`, `fontFamily`, and `letterSpacing` may override them where the destination demands it. Inline fonts are never fetched. Multiple lines use separate text nodes or `tspan` with explicit `x` and `dy`; SVG does not wrap text automatically.

Definitions use short local IDs (`arrow`); references use `url(#arrow)`. The builder prefixes both with the diagram name and static variant. React uses `useId` for each mounted instance. Keep the IDs local to the source and define every reference once. Do not use external image, font, URL, or script references in the scene.

The toolkit deliberately makes no graph-inference promise: a path is geometry, not an edge model. Judge direction, cardinality, routing, and label collisions from the rendered diagram. To support an unsupported SVG primitive, extend the toolkit deliberately and validate its web/native output; do not disguise it as a path merely to bypass a format check.
