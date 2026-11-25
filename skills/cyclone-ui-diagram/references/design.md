# Editorial design contract

Adapted from Diagram Design's philosophy, style guide, and connector primitives (MIT; see the license in this skill).

The diagram should explain a sentence. Write that sentence as its description; choose one focal element that helps the reader find it. Deleting redundant nodes and edges usually helps more than decoration. Aim for moderate density: up to nine conceptual nodes, twelve connectors, two focal elements, and two callouts in an overview. These are composition budgets, not limits on SVG primitives. Split a dense subject into overview and detail instead of silently dropping relationships. A faithful source redraw may need more space and zones; keep its stated scope explicit.

## Visual language

- Neutral paper and surfaces; one theme `primary` accent. A focal outline, short rule, or small tag is enough. Use labels, shape, and line patterns so color carries no meaning alone.
- Human names in Storm Sans, technical metadata in Google Sans Code, editorial headings/callouts in Storm Serif. Keep mono for protocols, field types, quantities, or short tags. A title should feel like an editorial headline, not a dashboard card label.
- Thin rules, restrained 4px corner radii, generous negative space, no decorative shadows or gradients. Not every node needs an enclosing box: labels on a rail, compartments, cylinders, and open zones have distinct jobs.
- Use a 4px alignment grid and the token spacing scale for margins and padding. Begin with 32px outer margins, 16px internal padding, and 24–32px gutters. A 960px-wide overview uses 14px node labels and 12px details; retain readable labels at the actual destination. Recompose or provide a controlled horizontal viewport for a dense narrow diagram instead of shrinking it until text is illegible.
- Put a figure number/type eyebrow and a short explanatory title in the composition when useful. Add a small legend only for encodings the reader cannot infer.

## Connectors

Draw connections before foreground nodes. A horizontal or vertical connection may be a line; off-axis routes use orthogonal elbows, rounded where practical. A sequence's time axis and a chart's data curves follow their own grammar.

Give every connector a deliberate source and target port. Distribute multiple ports across an edge, with at least 12px between routes. Arrowheads end at a boundary, not inside its text. Use solid lines for the main path and a labeled dashed line for return, optional, or async paths; state what the dash means. Do not draw a return path as if it were another forward request.

Keep lines out of non-endpoint nodes. Avoid crossings; if a crossing is unavoidable, distinguish it from a junction. A branch junction needs a visible dot. Labels sit beside a route with 6–10px clearance; if crossing the stroke, give the label an opaque paper mask. Keep labels away from elbows, arrowheads, and node edges. Shorten protocol labels; use a caption for prose.

## Truth and accessibility

Keep source direction, branching, cardinality, ordering, units, and measured magnitudes. A chart's scale and zero baseline are part of its claim. Identify illustrative values as such only when the person requested an illustrative example.

Every diagram has a meaningful title and a description of its conclusion. Static SVGs include `title`, `desc`, and unique naming IDs; React instances prefix their definitions independently. Text stays text. Do not convert labels to paths by default.

Measure contrast on the actual fill in each scheme: ordinary text 4.5:1, large text and essential non-text marks 3:1. `@rule` is decorative, so essential connectors use `@line`; `@soft` maps to readable ink rather than the low-contrast `subtle` token. A colored theme accent may need a neutral text label beside it. Do not change design-system tokens to repair one diagram.
