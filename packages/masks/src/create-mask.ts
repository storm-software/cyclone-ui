/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone Ui

 This code was released as part of the Cyclone Ui project. Cyclone Ui
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs

 Contact:         https://stormsoftware.com/contact
 Licensing:       https://stormsoftware.com/projects/cyclone-ui/licensing

 -------------------------------------------------------------------*/

/* eslint-disable no-console */

import {
  applyMaskStateless,
  getThemeInfo,
  isMinusZero,
  objectEntries,
  objectFromEntries
} from "./helpers";
import type { CreateMask, MaskFunction, MaskOptions } from "./types";

export const combineMasks = (...masks: CreateMask[]) => {
  const mask: CreateMask = {
    name: "combine-mask",
    mask: ((template, opts) => {
      let current = getThemeInfo(template, opts.parentName);

      console.log(
        "*******************************************************************"
      );
      console.log(template);
      console.log(
        "*******************************************************************"
      );
      console.log(
        "*******************************************************************"
      );
      console.log(opts.parentName);
      console.log(
        "*******************************************************************"
      );

      return masks.reduce((_, mask) => {
        if (!current) {
          throw new Error(
            `Nothing returned from mask: ${current}, for template: ${template} and mask: ${mask.toString()}, given opts ${JSON.stringify(
              opts,
              null,
              2
            )}`
          );
        }

        const next = applyMaskStateless(current, mask, opts);
        current = next;

        return next.theme;
      }, {});
    }) as MaskFunction
  };

  return mask;
};

export const createMask = <C extends CreateMask | MaskFunction>(
  createMask: C
): CreateMask => {
  if (typeof createMask === "function") {
    return {
      name: createMask.name || "unnamed",
      mask: createMask
    };
  }

  return createMask as CreateMask;
};

export const skipMask: CreateMask = {
  name: "skip-mask",
  mask: (template, opts) => {
    const { skip } = opts;
    const result = Object.fromEntries(
      Object.entries(template)
        .filter(([k]) => !skip || !(k in skip))
        .map(([k, v]) => [k, applyOverrides(k, v, opts)])
    ) as typeof template;

    return result;
  }
};

function applyOverrides(
  key: string,
  value: number | string,
  opts: MaskOptions
) {
  let override: string | number | undefined;
  let strategy = opts.overrideStrategy;

  const overrideSwap = opts.overrideSwap?.[key];
  if (overrideSwap === undefined) {
    const overrideShift = opts.overrideShift?.[key];
    if (overrideShift === undefined) {
      const overrideDefault = opts.override?.[key];
      if (overrideDefault !== undefined) {
        override = overrideDefault;
        strategy = opts.overrideStrategy;
      }
    } else {
      override = overrideShift;
      strategy = "shift";
    }
  } else {
    override = overrideSwap;
    strategy = "swap";
  }

  if (override === undefined) return value;
  if (typeof override === "string") return value;

  if (strategy === "swap") {
    return override;
  }

  return value;
}

export const createIdentityMask = (): CreateMask => ({
  name: "identity-mask",
  mask: (template, opts) => skipMask.mask(template, opts)
});

export const createInverseMask = () => {
  const mask: CreateMask = {
    name: "inverse-mask",
    mask: (template, opts) => {
      const inversed = objectFromEntries(
        objectEntries(template).map(([k, v]) => [k, -v])
      ) as any;
      return skipMask.mask(inversed, opts);
    }
  };
  return mask;
};

interface ShiftMaskOptions {
  inverse?: boolean;
}

export const createShiftMask = (
  { inverse }: ShiftMaskOptions = {},
  defaultOptions?: MaskOptions
) => {
  const mask: CreateMask = {
    name: "shift-mask",
    mask: (template, opts) => {
      const {
        override,
        overrideStrategy = "shift",
        max: maxIn,
        palette,
        min = 0,
        strength = 1
      } = { ...defaultOptions, ...opts };
      const values = Object.entries(template);
      const max =
        maxIn ?? (palette ? Object.values(palette).length - 1 : Infinity);
      const out = {};
      for (const [key, value] of values) {
        if (typeof value === "string") continue;
        if (typeof override?.[key] === "number") {
          const overrideVal = override[key] as number;
          out[key] =
            overrideStrategy === "shift" ? value + overrideVal : overrideVal;
          continue;
        }
        if (typeof override?.[key] === "string") {
          out[key] = override[key];
          continue;
        }
        const isPositive = value === 0 ? !isMinusZero(value) : value >= 0;
        const direction = isPositive ? 1 : -1;
        const invert = inverse ? -1 : 1;
        const next = value + strength * direction * invert;
        const clamped = isPositive
          ? Math.max(min, Math.min(max, next))
          : Math.min(-min, Math.max(-max, next));

        out[key] = clamped;
      }

      const skipped = skipMask.mask(out, opts) as typeof template;
      return skipped;
    }
  };
  return mask;
};

export const createWeakenMask = (defaultOptions?: MaskOptions): CreateMask => ({
  name: "soften-mask",
  mask: createShiftMask({}, defaultOptions).mask
});

export const createSoftenMask = createWeakenMask;

export const createStrengthenMask = (
  defaultOptions?: MaskOptions
): CreateMask => ({
  name: "strengthen-mask",
  mask: createShiftMask({ inverse: true }, defaultOptions).mask
});
