# Design system documentation

Use for `type: "design-system"`.

Inspect every configured category: `tokens`, `fonts`, `icons`, `illustrations`, `components`, `blocks`, and `layouts`. Each value may be one workspace-relative path or an array. Follow exports, metadata, examples, and relevant token or theme files to learn what consumers can actually use. Ground names, variants, states, and design rules in those sources; do not infer appearance or behavior from filenames.

Organize pages so readers can find an asset, decide when to use it, and apply it correctly. Start with a short overview and navigation to the available categories. Use a catalog for discovery and a dedicated page for an item or pattern when its usage needs more detail. Distinguish standalone components, composed blocks, and page layouts, and link between them rather than repeating shared guidance.

For each documented item, include what the source supports:

- **Identity and purpose:** Public name, what it is for, and when to choose it. Note supported alternatives when the distinction helps readers decide.
- **How to use it:** A working example using the public API or asset path, required inputs, and meaningful variants. Show the rendered result when practical.
- **Behavior and constraints:** Relevant states, responsive behavior, accessibility requirements, and rules such as spacing or color roles. Explain only behavior confirmed by source or examples.
- **Source and relationships:** Link to the owning file or export, related tokens, and any composed pieces. Mark gaps in source evidence instead of presenting guesses as rules.

When tokens or themes exist, document their semantic roles and how consumers apply them. Show useful mappings such as text color, surface color, spacing, and typography, with examples across themes or modes where supported. Prefer token names in usage guidance so it stays useful when values change.

Tailor the detail to each category:

## Tokens

Read every configured `tokens` path, whether it points to a file, directory, or one of several token sources. Trace imports, aliases, theme overrides, generated outputs, and consumer examples to identify the authoritative names and values. Distinguish primitive scales from semantic tokens and explain how consumers select the appropriate token. Document only categories present in the source; do not assume a standard scale or invent a value between defined steps.

Provide a navigable token catalog with the public name, resolved value and unit where available, intended role, theme or mode, and a visual sample when it helps readers compare tokens. Explain references or aliases rather than listing the same value as unrelated definitions. Link each group to its source and show a short example using the token through the supported API, such as a CSS variable, theme key, or component prop.

Possible token sections include:

- **Colors:** List each available palette and its ordered shade or color scale with swatches, names, and source values. Separate raw colors from semantic roles such as text, surface, border, accent, and status. Show how semantic colors resolve across light, dark, or other supported themes, including interaction states when defined.
- **Spacing:** List the named spacing scale with actual distances and units, using comparable visual samples. Explain supported uses such as padding, gaps, and margins, and distinguish spacing tokens from layout-specific measurements when the source does.
- **Sizes and dimensions:** List size scales for controls, icons, containers, widths, heights, or breakpoints where defined. State each token's unit and intended use, and distinguish fixed dimensions from responsive constraints.
- **Typography:** List font families, sizes, line heights, letter spacing, and weights when tokenized. Show which text roles or components use them and link to font documentation rather than duplicating font asset details.
- **Shape and effects:** Cover radius, border width, opacity, elevation, shadows, and other effect scales when present. Show representative samples and note any semantic mappings or theme changes.
- **Motion:** List duration, easing, and animation tokens when present, with units and usage constraints supported by the source.

If tokens are generated from another source, identify the source of truth and distinguish it from the consumed output. Keep catalogs complete for each documented scale, but omit unsupported sections and avoid claiming accessibility properties such as contrast compliance without evidence.

## Fonts

List families, available weights and styles, font files, and intended roles. Show a representative character sample and a few sizes using the actual font when rendering is available. Explain how typography tokens or text components select fonts; include character coverage only when verified by font metadata or a rendered sample.

### Font Documentation Sections

We should at minimum document the following sections for each font:

1. Summary - provides a brief overview of the font, including its intended use, it's general feel/style, and any notable characteristics.
2. Character Sets - display "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 .!@#$%^&*()" in the font.
3. Sizes - displays sample text at various font sizes.
4. Weights - displays sample text in different font weights.
5. Styles - displays sample text in different font styles (e.g., italic, oblique).

### Font Cover Image

Include a representative image of the font in use, showing its overall appearance and style. This helps readers quickly grasp the visual characteristics of the font.

## Icons and illustrations

Provide a gallery with visible previews, public names, and links to source assets. Explain supported sizes, variants, color behavior, and intended use where available. For icons, cover accessible names versus decorative use and any sizing or stroke rules. For illustrations, note aspect ratio, cropping, and background constraints when the assets or guidance establish them.

## Components

Describe purpose, anatomy, public props or inputs, variants, and interaction states. Show realistic examples, including disabled, loading, error, or focus states when supported. Record keyboard and screen-reader behavior from the implementation or tests, and link to the tokens that control its appearance.

## Blocks and layouts

Explain the composition, required content, and where the pattern fits. Show how it adapts to different content lengths and viewport sizes when supported. Link to constituent components and document only block- or layout-specific variants and states; keep shared component details on their own pages.

Prefer concise examples that a reader can copy. Keep galleries and examples aligned with the current public API, and omit sections that have no supporting source rather than filling a template with speculation.
