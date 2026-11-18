// Owned: inlined copy of components/redacted-animation/src/RedactedAnimation.stories.tsx
// (keep in sync). The story imports `Image` from bare "react-native", which the
// preview compile bundles raw (Flow syntax); Storybook aliases it to react-native-web.
import * as React from 'react';
import { HeadingLargeText } from "@ds-stories/components/heading-text/src/index";
import { View } from "@tamagui/core";
import { Image } from "react-native-web";
import { RedactedAnimation } from "@ds-stories/components/redacted-animation/src/index";

const imageSource = {
  uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 128'%3E%3Crect width='192' height='128' fill='%23191a1c'/%3E%3Ccircle cx='96' cy='64' r='44' fill='%236bf1e7'/%3E%3Cpath d='M105 28 67 70h25l-5 30 38-46h-25z' fill='%23191a1c'/%3E%3C/svg%3E"
};

const S: any = {
  default: {
    title: "Display/RedactedAnimation",
    component: RedactedAnimation,
    decorators: [
      (Story: any) => (
        <View backgroundColor="surfaceCanvas" padding="6xl">
          <Story />
        </View>
      )
    ],
    args: {
      children: (
        <HeadingLargeText color="accent">
          Presence-aware identity management
        </HeadingLargeText>
      )
    }
  },
  SlideLeft: {},
  SlideRight: { args: { direction: "right" } },
  ImageContent: {
    args: {
      children: (
        <Image
          accessibilityLabel="Cyclone UI lightning bolt"
          resizeMode="contain"
          source={imageSource}
          style={{ width: 288, height: 192 }}
        />
      )
    }
  }
};


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
    args, name: key, title, kind: title, id: title + '--' + key, componentId: title,
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

export const SlideLeft = /* Slide Left */ compose(S, "SlideLeft");
export const SlideRight = /* Slide Right */ compose(S, "SlideRight");
export const ImageContent = /* Image Content */ compose(S, "ImageContent");
