# Select the visual grammar

Read the matching section, then draw only what answers the requested question. The same scene format supports these grammars; it does not calculate their layouts. This condensed routing and guidance adapts Diagram Design's type references, rather than bundling its upstream skin and large example gallery.

## Systems and structure

| Reader's question           | Type and layout                                                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What talks to what?         | **Architecture**: 3–9 named components, explicit boundaries, orthogonal routes, one focal service/path. Labels describe responsibilities; sublabels identify protocols.             |
| What changed?               | **Architecture delta**: before/after use synchronized positions and names; accompany changed nodes/edges with a short added/removed/changed ledger. Do not recolor every component. |
| Where does it run?          | **Deployment**: nest nodes inside deployment/environment boundaries; distinguish logical services from instances and label cross-boundary traffic.                                  |
| What exists today?          | **IT current-state**: group actual systems by phase/department; distinguish automated and manual handoffs without proposing an undocumented target state.                           |
| What are the layers?        | **Layers/high-level**: stacked bands with one responsibility each; dependencies have a consistent direction. Use a detail view for implementation internals.                        |
| How does data move?         | **Data flow/integration/medallion**: distinguish producers, transformation, stores, and consumers; label handoffs and Bronze/Silver/Gold semantics when applicable.                 |
| What depends on what?       | **Dependency**: rank dependencies in one direction; highlight one critical chain and distinguish cycles. **Git graph** uses commit nodes, branch tracks, and true merge ancestry.   |
| What contains or owns what? | **Nested/tree/org chart**: containment for scope; a tree for parent–child edges; an org chart for reporting. Avoid arrows that imply execution.                                     |

## Behavior over time

| Reader's question                   | Type and layout                                                                                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Which branch happens?               | **Flowchart**: decisions are diamonds with labeled exits; steps are rectangles; a loop returns to a named decision. Keep a primary reading direction.                                                            |
| Who sends what, when?               | **Sequence**: actors across the top, dashed vertical lifelines, messages ordered down the page. Dashed return arrows point back to the caller. Use activation bars only when duration matters.                   |
| Which states and transitions exist? | **State machine**: stable states with event/guard labels on directed transitions; explicit initial/final markers where known. A state is not a process step.                                                     |
| Who owns each handoff?              | **Swimlane**: lanes represent owners, steps progress in time across them. **Service blueprint** adds customer/frontstage/backstage/support rows and a visibility boundary.                                       |
| What repeats?                       | **Loop/flywheel**: 3–6 ordered stations around a cycle; the final feeds the first. Add a hub only if it genuinely accumulates shared state.                                                                      |
| What happens next?                  | **Steps/process**: an aligned rail or stage columns with a repeated information hierarchy. **Journey** adds user goal, action, friction, and outcome per stage.                                                  |
| When does it occur?                 | **Timeline**: real time on one axis, event labels alternate to avoid collisions. **Gantt** aligns duration bars to a shared date scale. **Schedule network** shows predecessor constraints, not a fake calendar. |
| What is planned?                    | **Kanban** groups work by workflow state; **story map** aligns activities above task slices; **event modeling** separates commands, events, and views while retaining chronological order.                       |

## Data and logic

**ER/data model**: entity compartments list only relevant fields, mark keys, and place crow's-foot or explicit 1/N cardinality at both endpoints. Do not invent nullable or uniqueness constraints. **Database schema** can be denser: align field baselines, connect actual PK/FK fields, and split domains before labels become too small. **UML class** separates attributes and operations; inheritance uses its own arrow convention. **Requirement traceability/security matrix** uses row/column alignment and explicit status glyphs, with scope and legend. **SBGN** requires its domain notation; use the person's source or authoritative notation reference instead of inventing biological symbols.

## Comparisons and decisions

**Quadrant**: name both axes and their polarity; plot positions from supplied evidence. **Venn** encodes intersections rather than a three-item list. **Pyramid** encodes hierarchy or prerequisites, not arbitrary importance. **Fishbone** separates cause groups on a spine toward a specific effect. **Wardley** requires user need, dependency chain, and evolution axis; do not replace it with a generic scatterplot. Keep before/after or option comparisons aligned by criterion so typography and position do the work.

## Quantitative charts

Select a chart for the measurement, not its silhouette. Include units, scale, source, and period when provided. Preserve uncertainty and missing values.

- **Bar**: compare magnitudes with a zero baseline. **Line**: ordered time/continuous x, never an arbitrary categorical trend. **Slopegraph/bump**: paired changes or rank trajectories, direct-label endpoints.
- **Scatter/bubble**: two measured dimensions; bubble area, not radius, encodes a third. **Beeswarm** shows observations without hiding their distribution. **Box plot/ridgeline** show distribution with the correct statistical definition and comparable scales.
- **Heatmap**: numeric or categorical cell encoding with an explicit legend; absence is distinct from zero. **Radar** compares 3–5 supplied criteria with common scales; **polar** uses angle for cyclic category and radius for magnitude.
- **Sankey**: ribbon widths preserve quantities at joins. **Waterfall**: signed contributions bridge a start and end total. **Treemap/Marimekko**: area and widths represent supplied quantities; labels must fit their actual cells.
- **Stacked/streamgraph/unit grid**: show part-to-whole with a disclosed baseline or unit. An **arc diagram** shows relationships on one ordered baseline, not quantitative flow unless widths explicitly encode it.

Use direct labels and line patterns for additional series before adding hues. If multiple colors are required to distinguish overlapping series, use named Cyclone theme tokens via palette overrides and a visible legend; keep the focal series clear. The default toolkit palette deliberately stays neutral plus one accent.

## Spatial and exploded diagrams

**Exploded axonometric** pulls the parts of one assembly along an axis; **axonometric plan** shows spaces within one floor/site. Use one 2:1 projection function for all coordinates, consistent depth ordering and equal layer gaps. Keep labels horizontal with leaders. Geometry is evidence of assembly or spatial relation; decorative isometric objects without an explanatory relationship belong to `cyclone-ui-illustration`.
