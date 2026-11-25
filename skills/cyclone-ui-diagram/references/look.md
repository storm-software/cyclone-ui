# Look before delivery

Inspect the generated light/dark pictures at full size and at the requested destination width. For a narrow screen the preview provides a horizontal viewport that preserves label size; check the entire width and ensure the page itself does not overflow. A requested mobile-first diagram may instead need a portrait composition and a new build.

Check the diagram's claim: can a reader state the important relationship before reading the description? Is the focal element clear in monochrome? Are names, hierarchy, direction, branch conditions, and return paths correct? Does each visual type still have its own grammar?

Check labels and routes: no clipped text, no tiny fallback glyphs, no label on an elbow or arrowhead, no connector through an unrelated node, no ambiguous crossing, no overlapping ports, and sufficient contrast. Light and dark should have the same geometry and meaning. Static images should match the component and preview.

`look.mjs` rebuilds first and checks the preview at 1200px and 390px in both schemes, then opens both pinned SVGs. It checks text against the viewBox, console/page errors, requests, and page overflow. It cannot prove that two labels do not overlap or a route is semantically correct. Open every screenshot, including the pinned SVG pictures.

If its browser dependency is missing, use an available Playwright/Chrome MCP browser: serve the output directory locally, inspect both preview scheme selections and both pinned SVGs, resize to the requested widths, and check console/network errors. Bind a temporary server to loopback and stop it when finished. Do not install tooling automatically into the person's app or mutate their dependency lockfile just to render a diagram.

Without any browser, run the source validator and report that visual validation is unavailable. Do not call a diagram visually verified on that evidence. For changes delivered inside the Cyclone UI repository, its Storybook rendering/build requirement still applies as described in SKILL.md. A web render does not establish native-device behavior.
