---
name: sourcebook-guide
description: Use when the user asks for a guided walk-through of some functionality — a step-by-step tour that traces a feature, flow, command, or module through the real code or through real usage, for a stated audience. Invoked by the user (for example `/sourcebook-guide <topic>`); asks for any missing details before starting.
argument-hint: "[functionality to walk through]"
disable-model-invocation: true
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook Guide

Produce a guided walk-through: an ordered tour that takes one reader through one piece of functionality, stop by stop, so they finish able to explain or use it. A guide differs from reference docs (which list everything) and from a README (which gets someone started). It follows one path from a trigger to an outcome and explains each step along the way. Use `sourcebook-docs` for broad project documentation, `sourcebook-readme` for a README, and `sourcebook-editor` to polish an existing guide.

## 1. Collect the required details first

A walk-through aimed at the wrong subject, perspective, or reader is wasted effort, and the right answers usually cannot be inferred from the code. Before you explore the codebase, check the request (and any arguments) for these details:

| Detail | What it decides | Default if the user says "you pick" |
| --- | --- | --- |
| **Functionality** | The feature, flow, command, endpoint, or module to walk through, and where the tour starts and ends (for example, "from `sourcebook docs` being run to the Markdown file being written"). | None — this is always required. |
| **Perspective** | *Under the hood* (how the code works, for contributors) or *hands-on* (how to use it, for users). | Under the hood. |
| **Audience** | Who reads it and what they already know: new contributor, experienced maintainer, end user, integrator. | New contributor familiar with the language but not this codebase. |
| **Output** | Answer in chat, or write a Markdown file (and where). | Answer in chat. |

If any detail is missing or ambiguous, ask for all the missing ones in **one** message before doing anything else — use a structured question tool when one is available, otherwise a short numbered list. Offer concrete options and the default for each so the user can answer quickly. When the functionality is vague ("walk me through auth"), a quick look at the workspace is acceptable so you can offer specific candidates (for example, "login form → session cookie" or "API token validation"). Do not start the walk-through until the functionality is settled; fill other gaps with the defaults only when the user tells you to.

Skip the questions entirely when the request already answers them.

## 2. Trace the real path

Ground every stop in what the project actually does.

- **Under the hood:** find the entry point (CLI command, route, event handler, exported function, UI action) and follow the call chain to the outcome. Read each function you include; note the file and line. Note the branches that matter to the audience (error paths, config switches) and skip incidental helpers.
- **Hands-on:** find the real commands, configuration, inputs, and outputs from manifests, source, tests, and examples. Run inexpensive commands when practical to confirm output; otherwise mark the output as illustrative.

If the path forks or depends on configuration, pick the most common route and mention the others in one line each. If you cannot confirm a step, say so in the guide rather than filling the gap with plausible prose.

## 3. Write the walk-through

Use this shape, adapted to the length the subject needs:

```markdown
# Walk-through: <functionality>

**Audience:** <who> · **Perspective:** <under the hood | hands-on> · **Time:** ~<n> min

## What you will learn
<two or three sentences: the trigger, the outcome, and why it matters>

## Before you start
<prerequisites: knowledge, setup, files to have open>

## The path at a glance
<numbered one-line summary of every stop, or a small diagram when the flow branches>

## Step 1 — <name of stop>
<file_path:line or command> — what happens here, why it is designed this way, and what to notice.
<a short excerpt or command with its output, only when it helps>

## Step 2 — …

## Recap
<the whole path in a few sentences, tying the steps together>

## Where to go next
<related code, docs, or exercises: "try changing X and watch Y">
```

Guidelines:

- Keep each step to one idea. Move forward in the order the reader experiences or the code executes; do not jump ahead.
- Explain *why* as well as *what*. The reader can read the code; the guide adds the reasoning, the conventions, and the traps.
- Match depth to the audience: define project terms for newcomers and skip basics for maintainers.
- Quote only short, relevant code excerpts and point to the location for the rest. Use clickable `path:line` references in chat output and relative links in files.
- Write in short sentences with consistent terms and direct verbs.

## 4. Deliver

- **Chat:** give the walk-through as the response.
- **File:** write the Markdown to the requested path (if only a folder is given, use `<folder>/<functionality-slug>.md`). `@sourcebook/core` compiles that file as a guide, so start it with YAML front matter: `title`, `description`, `audience`, and `perspective` (`under-the-hood` or `hands-on`). Add `tags` only when they are accurate. Chat output does not need front matter. Do not overwrite an existing file without confirming. Report the path written.

```markdown
---
title: Walk-through: <functionality>
description: <one or two sentences on the trigger and the outcome>
audience: <who>
perspective: under-the-hood
---
```

End with a short note on anything you could not verify and any parts of the path you left out.
