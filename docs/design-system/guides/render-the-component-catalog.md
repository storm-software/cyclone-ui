---
title: "Walk-through: render the component catalog with Fumadocs and Fumadocs Story"
description: Turn the Markdown component pages in docs/design-system into a catalog site where each component shows a live preview with controls, using Fumadocs MDX and Fumadocs Story.
audience: Integrator who builds a documentation site with Next.js and Fumadocs, and knows React and Tamagui
perspective: hands-on
tags: [components, fumadocs, storybook, nextjs]
---

# Walk-through: render the component catalog with Fumadocs and Fumadocs Story

**Audience:** integrator who builds a docs site with Next.js and Fumadocs · **Perspective:** hands-on · **Time:** ~30 min

## What you will learn

Each page in [`docs/design-system/components`](../components/index.md) is plain Markdown that also carries the data a catalog site needs: the package name, the CLI install name, and the Storybook story files. This walk-through starts at one of those pages and ends at a Fumadocs page that shows the Markdown body and a live preview of the component with controls, like the [shadcn/ui component pages](https://ui.shadcn.com/docs/components).

> [!IMPORTANT]
> This repository has no docs site app. The page contract in Step 1 is checked: every component page compiles with `@sourcebook/core`, and the front matter matches the stories files. The site code in Steps 2 to 5 is illustrative. It follows the APIs of Fumadocs MDX and `@fumadocs/story` 1.5.3, but nobody has run it against this repository.

## Before you start

- A Next.js app with [Fumadocs](https://www.fumadocs.dev) and Fumadocs MDX, inside this monorepo (for example `apps/docs`), so that it can import the component sources.
- Cyclone UI set up in that app with [`@cyclone-ui/nextjs`](../../packages/nextjs.md): `withCycloneUI` in `next.config.ts` and `CycloneUIProvider` in the root layout. The components need the provider for their tokens and themes.
- Open [`button.md`](../components/button.md) and [`Button.stories.tsx`](../../../components/button/src/Button.stories.tsx). The steps use Button as the example.

## The path at a glance

1. **The page contract.** A component page has `component` front matter and a fixed section order.
2. **Load the pages.** Fumadocs MDX reads `docs/design-system` and keeps the `component` front matter.
3. **Add Fumadocs Story.** Install the package and wrap the Next.js config.
4. **Write a story for the component.** One `*.story.tsx` file for each component, with a preset for each Storybook story you want to show.
5. **Render the preview.** The page layout renders `<story.WithControl />` above the Markdown body.

## Step 1 — The page contract

Every component page in `docs/design-system/components` has this front matter. The `component` block is the part the catalog site reads:

```yaml
---
title: Button
description: Reference for the Button component, a pressable control with variants, sizes, cascade hover effects, and a ripple.
documentType: reference
tags: [component, triggers, button, action]
component:
  name: button                  # the name for `cyclone-ui add`
  package: "@cyclone-ui/button" # the workspace package
  stories:
    - title: Triggers/Button    # the Storybook title (meta.title)
      file: components/button/src/Button.stories.tsx
---
```

| Key                         | Meaning                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `component.name`            | The registry name. `pnpm exec cyclone-ui add <name>` installs the component.                               |
| `component.package`         | The package in this workspace, for example `@cyclone-ui/button`.                                          |
| `component.stories[].title` | The `title` of the Storybook `meta`. Storybook builds story ids from it.                                  |
| `component.stories[].file`  | The stories file, relative to the repository root.                                                        |
| `component.stories[].style` | `tailwind` for a `*.tailwind.stories.tsx` file, which shows the Tailwind CSS version of the component.     |

`chart` has no stories file, so its page has no `stories` list. The icon pages ([Icons](../icons/index.md), [Themeable icon](../icons/themeable-icon.md), [Vectors](../icons/vectors.md)) and the [Illustrations](../illustrations/index.md) page have the same block.

The body of each page has its sections in this order: an introduction, **Installation**, **Import**, **Usage**, **Anatomy**, **Examples**, **Props**, then the variants, states, behavior, and accessibility sections that the component needs, then **Related** and **Source**.

- **Anatomy** has a `tsx` block that shows how the parts nest, and a table with a **Renders** column: the primitive each part is built on and the web element or role it renders.
- **Examples** has a table of the stories. The names in it are the export names in the stories file, so the site and Storybook use the same names.

The Sourcebook compiler ignores the `component` key, so the pages stay valid Markdown for any other renderer.

## Step 2 — Load the pages with Fumadocs MDX

Point a docs collection at the design system folder and extend the page schema with the `component` block, so `page.data.component` is typed:

```ts
// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { z } from "zod";

export const designSystem = defineDocs({
  dir: "../../docs/design-system",
  docs: {
    schema: pageSchema.extend({
      documentType: z.enum(["getting-started", "tutorial", "concept", "recipe", "reference"]).optional(),
      component: z
        .object({
          name: z.string(),
          package: z.string(),
          stories: z
            .array(
              z.object({
                title: z.string(),
                file: z.string(),
                style: z.literal("tailwind").optional()
              })
            )
            .optional()
        })
        .optional()
    })
  },
  meta: { schema: metaSchema }
});

export default defineConfig();
```

The pages are `.md` files, so Fumadocs MDX compiles them as Markdown, not MDX. They have no JSX. The guide pages in `guides/` use `audience` and `perspective` instead of `documentType`, so keep `documentType` optional.

## Step 3 — Add Fumadocs Story

Install the package and import its CSS preset in the stylesheet that imports Tailwind CSS:

```bash
pnpm add @fumadocs/story
```

```css
@import "@fumadocs/story/css/preset.css";
```

Wrap the Next.js config. `createNextStory()` adds a build-time step that reads `*.story.{js,jsx,ts,tsx}` files and generates their controls from the component's TypeScript props:

```ts
// next.config.ts
import { withCycloneUI } from "@cyclone-ui/nextjs";
import { createNextStory } from "@fumadocs/story/next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const withStory = createNextStory();

export default withStory(withMDX(withCycloneUI({ reactStrictMode: true })));
```

Create the story factory once:

```ts
// lib/story.ts
import { defineStoryFactory } from "@fumadocs/story/next/client";

export const { defineStory } = defineStoryFactory();
```

## Step 4 — Write a story for the component

Fumadocs Story makes one control for each prop of the component it renders. A Cyclone UI component accepts every Tamagui style prop, so a story for `Button` itself would have hundreds of controls. Give each story a small demo component with only the props a reader should change.

The demo component must be a client component. Put it in its own file, because a server component cannot read `story.WithControl` from a module marked `"use client"`:

```tsx
// stories/button.demo.tsx
"use client";

import { Button } from "@cyclone-ui/button";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

export interface ButtonDemoProps {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: "sm" | "md" | "lg";
  theme?: "brand" | "danger" | "warning" | "success" | "info" | "discovery";
  disabled?: boolean;
  circular?: boolean;
  rounded?: boolean;
}

export function ButtonDemo({ label = "Button Text", ...props }: ButtonDemoProps) {
  return (
    <Button {...props}>
      <Button.Text>{label}</Button.Text>
    </Button>
  );
}
```

Then define the story. Make one preset for each story that you want to show. Use the story's export name as `variant` and copy its `args`. The **Examples** table on the component page lists the names:

```tsx
// stories/button.story.tsx
import { defineStory } from "@/lib/story";
import { ButtonDemo } from "./button.demo";

export const story = defineStory({
  Component: ButtonDemo,
  args: [
    { variant: "Default", initial: {} },
    { variant: "Brand", initial: { theme: "brand" } },
    { variant: "Primary", initial: { variant: "primary" } },
    { variant: "Disabled", initial: { variant: "primary", disabled: true } }
  ]
});
```

Do not import the `*.stories.tsx` module into the site to read its `args`. 57 of the 145 stories files import `storybook/test` at runtime for their play functions, and that code then goes into the site bundle.

## Step 5 — Render the preview on the page

Render the story above the Markdown body when the page has a `component` block. Map the page to its story module by `component.name`:

```tsx
// app/components/[slug]/page.tsx (excerpt)
import { story as button } from "@/stories/button.story";

const stories = { button };

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const page = designSystemSource.getPage(["components", slug]);
  if (!page) notFound();

  const Story = page.data.component ? stories[page.data.component.name]?.WithControl : undefined;
  const Body = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {Story ? <Story /> : null}
      <DocsBody>
        <Body />
      </DocsBody>
    </DocsPage>
  );
}
```

`designSystemSource` is the Fumadocs `loader()` for the `designSystem` collection from Step 2. The preview shows a variant picker with the presets from Step 4, and the controls panel shows the props of the demo component.

## Recap

The component pages carry what a catalog site needs. The `component` front matter names the package, the install command, and the stories. The Anatomy and Examples sections give a fixed place for structure and story names. Fumadocs MDX loads the pages with that front matter. A small demo component and one `*.story.tsx` file for each component give Fumadocs Story a narrow set of props for the controls, and presets named after the Storybook stories. The page layout puts `<story.WithControl />` above the Markdown body.

## Where to go next

- Add a story file for each component, starting with the pages in the [component catalog](../components/index.md). Use `component.stories[].style: tailwind` to add a Tailwind CSS tab for the components that have one.
- For a layout component that fills the viewport, such as [Page](../components/page.md), pass `frame: { src }` to `defineStory` to render the preview in an iframe.
- Read the Fumadocs Story documentation for [Next.js](https://www.fumadocs.dev/docs/integrations/story/next) and for [custom controls](https://www.fumadocs.dev/docs/integrations/story) (`args.controls`).
- Set up Cyclone UI in Next.js with the [`@cyclone-ui/nextjs` reference](../../packages/nextjs.md).
