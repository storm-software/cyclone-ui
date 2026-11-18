---
name: sourcebook-blog
description: Use when generating or updating Markdown content for blog articles.
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook Blog Articles

Enhance the blog articles described by the target workspace's `sourcebook.config.*`.

1. Identify the workspace root from the request or current workspace. Run `node <path-to-this-skill>/scripts/read-config.mjs <workspace-root> blog` and parse its JSON stdout. The reader loads the config with c12, validates blog values, and omits unrelated options. Stop and report an error if it fails.
2. Process each root config object when `config` is an array. Inspect the Markdown articles in its `blog.articles` paths. If `articles` is absent, locate the workspace's existing blog articles before editing; do not invent a source path or create an unrelated blog structure.
3. Use `displayName`, `homepage`, and `description` as project context. Apply the root `instructions` to all blog work, then apply `blog.instructions` specifically to the articles. Ground factual changes in the workspace and preserve each author's meaning, voice, front matter, and unrelated edits. When an article needs substantial writing or restructuring, use the [article structure guide](references/article-structure.md) to choose a shape that serves its reader.
4. When `blog.generateHeroImages` is `true`, create a relevant hero image for each processed article and update the article through its existing image or front-matter convention. When it is absent or `false`, do not generate hero images.
5. Use only the scoped JSON returned by the reader. Do not read or apply `docs`, `useLocalOutput`, documentation `outputPath`, project `type`, or documentation source paths; `sourcebook-docs` owns them.
6. Review every updated article with the [article quality check](references/article-quality.md) and the applicable instructions. Check generated images in context, then report the files written and any claims or examples that could not be verified.

## Front matter

`@sourcebook/core` compiles an article only when YAML front matter at the top of the file includes `title`, `description`, and `summary`. `summary` is the TLDR shown at the top of the article. Write it yourself; the compiler does not invent one from the description. The compiler can fall back to the first level-1 heading for `title` and the first paragraph for `description`, but generated articles must set all three explicitly.

`tags` is optional. Use a YAML list or a comma-separated string. Add tags only when the article supports accurate values, and do not invent a tag to fill the field. Preserve an existing tag format.

```markdown
---
title: This is a custom title
description: This is a custom description
summary: This is a custom summary
tags: [api, graphql]
---
```

## Figures

Figures are used to add visual content to your Markdown file. They are typically included using the `![alt text](image-url)` syntax. Give informative figures descriptive `alt text` and use valid image URLs.

```markdown
![Descriptive alt text](path/to/image.jpg)
```

Add a supporting figure when it explains a relationship, process, comparison, or result more clearly than the surrounding prose. Use descriptive alt text and follow the article's existing asset conventions.

## Links

Links are used to reference other content within your Markdown file. They are typically included using the `[link text](URL)` syntax. Ensure that each link has descriptive text and a valid URL.

```markdown
[Descriptive link text](https://example.com)
```
