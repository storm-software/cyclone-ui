# Diagrams in documentation

Use a diagram when it answers a reader's question faster or more accurately than
a short paragraph, list, or table. Good candidates include a request path,
lifecycle, dependency, trust boundary, component relationship, or meaningful
change in structure. A list of features, an API parameter set, and a simple
before/after value comparison usually read better as text or a table. Do not add
a diagram just to decorate a page.

## Choose the story

State the one question the diagram will answer, the intended reader, and the
facts its labels and connections must convey. Trace those facts through the
configured project paths, exports, handlers, schemas, tests, or existing
authoritative docs. Show only the level the evidence supports. If a connection
or direction is uncertain, investigate it or leave it out; do not make a
plausible flow look confirmed.

| Reader needs to see     | Useful form           |
| ----------------------- | --------------------- |
| Parts and boundaries    | Architecture map      |
| Data moving or changing | Data-flow map         |
| Decisions and outcomes  | Flowchart             |
| Messages between actors | Sequence diagram      |
| Handoffs across roles   | Swimlane              |
| States and transitions  | State machine         |
| Dependencies            | Dependency graph      |
| Entities and relations  | Entity relationship   |
| Events in time          | Timeline              |
| Measured comparisons    | Bar or line chart     |
| Structural change       | Before/after diagrams |

Choose one dominant relationship per figure. For a dense system, use a small
overview and a linked detail diagram. Do not force all source details into one
canvas. As a starting point, try fewer than ten major nodes and about a dozen
connections; use more only when legibility and purpose justify it.

## Draw for comprehension

- Follow the project's existing documentation and design tokens when available.
  Otherwise use a restrained, high-contrast palette with one accent for the
  focal path. Color supplements labels and shape; it must not be the only way to
  distinguish meanings.
- Give the main path a consistent direction, usually left to right or top to
  bottom. Group related nodes in clearly named regions. Use different shapes or
  treatments only when they encode a real distinction, such as a decision,
  store, or external system.
- Make every node represent a distinct idea. Merge duplicates, remove edges
  implied by grouping, and move detail into nearby prose or a second figure.
  Label decision branches, important messages, units, and boundaries; omit
  labels that repeat a node name.
- Route connectors so the reader can follow them without guessing. Keep lines
  off labels and unrelated nodes, avoid crossings where possible, and use
  distinct connection points when several arrows meet a node. Use whitespace and
  alignment to establish hierarchy before adding ornament.
- Use short, consistent terms that match the prose and source. Keep type
  readable at the size the documentation actually displays. Provide a title or
  caption that says what the reader should learn, not just “Architecture
  diagram.”
- For charts, show the units, scale, source, and time range of the underlying
  data. Choose a visual encoding that preserves the measured differences.

## Place it in Markdown

Inspect the destination's existing Markdown, MDX, and asset conventions before
choosing a format. For a portable diagram, write a local SVG next to or below
the documentation page and embed it with a relative Markdown image path. Keep
the SVG as the editable source. Use Mermaid in a fenced block when the
destination is confirmed to render Mermaid and its automatic layout remains
clear at the page width. If the requested output has another established diagram
format, follow that convention.

For example, a page at `docs/architecture.md` can embed
`docs/assets/request-path.svg`:

```markdown
![A request moves from the client through the API to the data store.](./assets/request-path.svg)
```

Use a concise alt description that conveys the figure's main relationship. Put
details, caveats, and source links in nearby prose so the content remains usable
without the image. For SVG, include a meaningful `<title>` and `<desc>`, with
unique IDs referenced by `aria-labelledby`; use `role="img"` and a `viewBox`.
Keep assets self-contained, without scripts or remote fonts. When a narrow
viewport would make labels unreadable, simplify the figure, split it, or use the
destination's supported scrollable figure wrapper.

## Review the result

Compare each label, arrow, direction, boundary, and number with its source.
Check the Markdown image path or Mermaid rendering in the destination renderer.
View SVG or rendered Mermaid at normal page width and a narrow viewport; fix
clipped text, tiny labels, collisions, and ambiguous routes. Check contrast in
the supported themes and confirm the figure still makes sense without color. If
rendered inspection is unavailable, say which visual checks remain unverified.
Report the diagram asset and the page that embeds it along with other files
written.

This guidance adapts the diagram selection, complexity, visual hierarchy, and
review principles from
[diagram-design](https://github.com/cathrynlavery/diagram-design/tree/d1376371965f513d99cc9ec388835d255c5c88d5/skills/diagram-design)
(MIT license) to Sourcebook's Markdown output. Its HTML templates, brand
palette, and fixed SVG rules are not required by this skill.
