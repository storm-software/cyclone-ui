---
title: Confetti burst
description: Reference for the ConfettiBurst component, a web-only anchor that fires a ring of confetti when you call burst.
documentType: reference
tags: [component, motion]
---

# Confetti burst

`ConfettiBurst` is an invisible anchor. Call `burst()` on its handle to fire a ring of accent-colored squares from its center.

The effect uses the Web Animations API. On native, and when the user prefers reduced motion, `burst()` does nothing.

Source: [`components/confetti-burst`](https://github.com/storm-software/cyclone-ui/tree/main/components/confetti-burst)

## Import

```tsx
import { ConfettiBurst } from "@cyclone-ui/confetti-burst";
import { useRef } from "react";

const burstRef = useRef<ConfettiBurstHandle>(null);

<ConfettiBurst ref={burstRef} spread={24} count={16} />
<button onClick={() => burstRef.current?.burst()}>Celebrate</button>
```

Import the handle type from the same package: `import type { ConfettiBurstHandle } from "@cyclone-ui/confetti-burst"`.

## Props

`ConfettiBurst` also accepts `View` props except `children`.

| Prop | Default | Purpose |
| --- | --- | --- |
| `spread` | `24` | Base distance, in pixels, that each square flies from the center. |
| `count` | `16` | Number of squares in one burst. |

## Handle

| Method | Purpose |
| --- | --- |
| `burst()` | Starts one burst. It does nothing on native or when `prefers-reduced-motion: reduce` matches. |

Each square removes itself when its animation finishes. The animation lasts 900 milliseconds.

## Related pages

- [Ripple animation](./ripple-animation.md)
