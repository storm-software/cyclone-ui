import * as React from 'react';
import * as S from "@ds-stories/components/file-tree/src/FileTree.stories";
import { File, FileTree, Folder } from "@ds-stories/components/file-tree/src/index";

function compose(S: any, key: string) {
  const meta: any = S.default ?? {};
  const st: any = S[key];
  const args: any = { ...(meta.args ?? {}), ...(st && st.args ? st.args : {}) };
  // Storybook resolves argTypes.mapping (control value -> real arg) before
  // rendering; mirror that so mapped args don't render raw.
  const at: any = { ...(meta.argTypes ?? {}), ...(st && st.argTypes ? st.argTypes : {}) };
  for (const k of Object.keys(args)) {
    const m = at[k] && at[k].mapping;
    if (m && typeof m === 'object' && args[k] in m) args[k] = m[args[k]];
  }
  const title: string = typeof meta.title === 'string' ? meta.title : '';
  const ctx: any = {
    args, name: key, title, kind: title, id: title + '--' + key, componentId: title, // cyclone-ui fork: unique per story - Field stories key their form store as formName-<id>
    globals: {}, viewMode: 'story',
    parameters: (st && st.parameters) ?? meta.parameters ?? {},
  };
  let render: (() => any) | null = null;
  if (st && typeof st.render === 'function') render = () => st.render(args, ctx);
  else if (typeof st === 'function') render = () => st(args, ctx);
  else if (typeof meta.render === 'function') render = () => meta.render(args, ctx);
  else {
    const C = (st && st.component) || meta.component;
    if (C) render = () => React.createElement(C, args);
  }
  if (!render) return () => null;
  // [].concat: a single function is legal CSF decorator shorthand. A
  // decorator returning undefined (stubbed addon) falls through to the inner
  // render — otherwise one unrecognized addon blanks the cell silently.
  const decorators: any[] = ([] as any[]).concat((st && st.decorators) ?? []).concat(meta.decorators ?? []);
  return decorators.reduce((inner: any, dec: any) => () => {
    const out = dec(inner, ctx);
    return out === undefined ? inner() : out;
  }, render);
}

export const Base = /* Base */ compose(S, "Base");
// Storybook's TogglesFolder differs from Base only via its play function
// (clicks "components" open). Previews never run play, so render the
// post-play state directly: same tree, "components" expanded.
export const TogglesFolder = /* Toggles Folder */ () => (
  <div style={{ minWidth: 360 }}>
    <FileTree>
      <Folder name="app" defaultOpen>
        <File name="layout.tsx" />
        <File name="page.tsx" />
        <File name="globals.css" />
      </Folder>
      <Folder name="components" defaultOpen>
        <File name="button.tsx" />
        <File name="dialog.tsx" />
      </Folder>
      <File name="package.json" />
    </FileTree>
  </div>
);
