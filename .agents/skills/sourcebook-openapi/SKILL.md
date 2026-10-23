---
name: sourcebook-openapi
description: Use when adding or updating summaries, descriptions, tags, and other documentation fields in an existing OpenAPI or Swagger specification from what the workspace implements. Use when the user asks to document an API spec, fill in OpenAPI operation summaries or descriptions, or tag endpoints from the code. Not for changing paths, schemas, security, or generating a new specification.
argument-hint: "[spec file or directory]"
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook OpenAPI

Fill in the documentation fields of OpenAPI and Swagger files that are already in the workspace. The wording comes from the implementation and the docs that describe it. This skill owns that prose. Use `sourcebook-docs` for Markdown API docs and `sourcebook-readme` for a README. Do not require `sourcebook.config.*`.

1. **Choose the specs.** If the user names a file or directory, use only those. Otherwise find every maintained spec in the workspace: a YAML or JSON document whose root is `openapi` (3.x) or `swagger` (`2.0`), including files named `openapi` or `swagger`. Skip `node_modules`, `dist`, `build`, `out`, `coverage`, `vendor`, `.git`, and other dependency or build output. Follow `$ref` targets inside the workspace and document those files too. Do not edit a remote ref. If none exist, say so and stop. Do not create a specification.
2. **Skip generated copies.** Do not hand-edit a spec under a generated path, or one whose header says it is generated or not to be edited, or one a script emits. Put the prose in the source the generator reads (the hand-written spec, or the annotation, decorator, or schema description that tool copies). If you cannot find that source, report the generated file and leave it.
3. **Ground each spec in its own project.** Read the spec before editing. Prefer the package that contains it, then libraries that package imports, then docs that name that API: route handlers, comments, request and response types, validators, tests, fixtures, READMEs, and ADRs. Document an operation only when that method and path match code or a doc. Match `{id}`, `:id`, and framework path syntax to the spec template. If nothing in the workspace corresponds to the spec, stop and say so. Do not borrow another service's behavior, and do not turn an unmodified sample (for example Swagger Petstore boilerplate in a different product) into this API.
4. **Edit documentation fields in place.** Change a field only when it is missing, a placeholder, or contradicted by the code. Placeholders include empty text, TODO, TBD, FIXME, lorem ipsum, and a summary that only repeats the path or operation id. Keep accurate text, including its vocabulary. Preserve format, comments, key order, `$ref`s, and `x-` extensions. Do not re-serialize the file. Do not change the `openapi` or `swagger` version.

   Write a `summary` as one plain-text line in the file's existing voice. Write a `description` in CommonMark, only for what the summary and the schema do not already say (side effects, idempotency, units, auth the spec already requires, errors the operation already lists). Keep it caller-facing. Name internal symbols only when the spec is marked internal. Use short sentences and the same term the code and the spec already use for each concept.

   On a `$ref`, OpenAPI 3.0 and Swagger 2.0 ignore sibling fields: describe the target. OpenAPI 3.1 and later allow `summary` and `description` beside `$ref`, and those override the target for that use. Use a sibling only when this use differs from the shared component.

   Set fields only when that spec version defines them:

   | Location | You may set | Only on |
   | --- | --- | --- |
   | `info` | `description` | `summary` on OpenAPI 3.1+ |
   | root `tags` | `description` | `summary`, `parent`, and `kind` on OpenAPI 3.2+ |
   | path item, operation, callback, webhook | `summary`, `description`, `tags`, `externalDocs` | path-item prose and callbacks on OpenAPI 3+; webhooks on 3.1+. Swagger 2 operations still have `summary`, `description`, `tags`, and `externalDocs` |
   | parameter, header, request body, response, link, example, server, server variable, security scheme | `description` (example objects also have `summary`) | — |
   | schema | `title`, `description` | — |

   `externalDocs.url` only when that URL is already in the workspace. `info` contact, license, and terms of service only when the workspace states them. Replace a placeholder `info.title` or schema `title` only when the workspace has the real name.

   Tags name a resource or module the code already uses. Reuse tag strings already in the spec. Add a root `tags` entry, with a description, for a tag you add that has none. Do not add a tag per operation, rename a tag, or remove one. `parent` and `kind` only when the workspace already groups tags that way.

   Examples only from a fixture, test, or doc, and only in the example field the file already uses (`example` or `examples`). Do not invent payloads.

   `deprecated: true` only when the code or an existing doc marks that operation, parameter, header, or schema deprecated. Do not clear a deprecation without the same kind of evidence.

5. **Leave the contract alone.** Do not add or edit paths, methods, `operationId`, parameters, request bodies, responses, status codes, schemas, security requirements, or server URLs. If the code disagrees with the spec, correct the prose of fields that already exist and list the contract gap in the report. Do not "fix" it inside the spec.
6. **Report** each spec you changed and each generated file you left. For each change, say whether the field was added or corrected, and name the file that supports the wording. List operations you skipped because nothing in the workspace explains them, plus any contract gap you did not edit.

When a YAML and a JSON document describe the same API, update the one the project authors by hand (the one a script reads, or the one with comments). Leave the generated twin. If both are hand-written, update the one the user named; if they named neither, update both only where each has its own prose, and say that they can drift.
