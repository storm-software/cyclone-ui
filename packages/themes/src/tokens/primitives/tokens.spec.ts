import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

type Token = { $value: string };
type Palette = Record<string, Token | boolean | string>;
type TokenDocument = { color: Record<string, Palette | Token> };

const tokenDirectory = new URL("./", import.meta.url);
const readTokens = (name: string) =>
  JSON.parse(
    readFileSync(new URL(name, tokenDirectory), "utf8")
  ) as TokenDocument;

const numberedValues = (palette: Palette) =>
  Object.entries(palette)
    .filter(([key]) => /^\d+$/.test(key))
    .sort(([left], [right]) => Number(left) - Number(right))
    .map(([, token]) => (token as Token).$value);

const lightness = (value: string) => {
  const oklch = /^oklch\(([^ ]+)/.exec(value);
  return oklch
    ? Number(oklch[1])
    : Number.parseInt(value.slice(1, 3), 16) / 255;
};

const valueAtReference = (tokens: TokenDocument, reference: string) => {
  const [group, palette, step] = reference.slice(1, -1).split(".");
  return (
    (tokens[group] as unknown as Record<string, Palette>)[palette]![
      step!
    ] as Token
  ).$value;
};

describe("primitive color tokens", () => {
  it("uses one shared primitive file with twelve-step color palettes", () => {
    const tokens = readTokens("tokens.json");
    const palettes = Object.entries(tokens.color).filter(
      ([name, token]) => name !== "neutral" && "palette" in token
    );

    expect(existsSync(new URL("dark.tokens.json", tokenDirectory))).toBe(false);
    expect(existsSync(new URL("light.tokens.json", tokenDirectory))).toBe(
      false
    );
    expect(tokens.color).not.toHaveProperty("surface");
    expect(palettes).toHaveLength(11);
    const expectedPaletteHashes: Record<string, string> = {
      brand: "d088483f3d6b00ec45f91bf095235a2c029df9687e7fd5ff5b84f0af7dbd9523",
      red: "af9f4ceb5bfe8b62851bef3add40bb9099ca9cb4924f3292ffce694c8c68bc4e",
      apple: "b8ff975cfddbf3322226fbb7eb71972a349c63ef81f354bac939c60d7b6994ca",
      orange:
        "ae7e92dee3a0aafb8d4aea1141cb0e0defb504109b2012464c1776b1d633c747",
      yellow:
        "9ad647b5b91e42a8aba25cb875eb91180bfd523c488ddbe9c72969af125fe539",
      green: "c9b5f08f2ca1703ad86eb5515faa87f28be47b881cc9002f339b5e896bdb85e3",
      avocado:
        "4eba6798f974f544539ec86e407d4a6e5ed1ec214b9484976ca0de1cd0e3ae6a",
      sky: "bda4a79f786db5bcbf684f94ca4c908f6d0ce5d1a5eb97bf09e209923b8e453e",
      blue: "e630503ac1360112b34b799776ee1be79cfe9debf43db6664c92dde7300c2d98",
      purple:
        "438132397821f2cb8b69e40945a76accf7f916a4325252b8415e860ae263d014",
      pink: "9f61bb6ee6b6234284ddb3069885908e53b35e4baa385bfc5b323b629ffc49dc"
    };
    for (const [name, palette] of palettes) {
      const values = numberedValues(palette as Palette);
      expect(values).toHaveLength(12);
      expect(values.map(lightness)).toEqual(
        [...values].map(lightness).sort((left, right) => right - left)
      );
      expect(createHash("sha256").update(values.join("\n")).digest("hex")).toBe(
        expectedPaletteHashes[name]
      );
    }
  });

  it("combines both surface schemes into a fourteen-step neutral palette", () => {
    const values = numberedValues(
      readTokens("tokens.json").color.neutral as Palette
    );

    expect(values).toHaveLength(14);
    expect(values).toEqual([
      "#FAFAFA",
      "#F1F1F1",
      "#EAEAEA",
      "#E1E1E1",
      "#DCDCDC",
      "#BEBEBE",
      "#9F9F9F",
      "#616161",
      "#484848",
      "#3A3A3A",
      "#2B2C30",
      "#242528",
      "#1F1F21",
      "#1A1C1F"
    ]);
  });

  it("preserves the selected color for every dark semantic path", () => {
    const primitives = readTokens("tokens.json");
    const semantics = readTokens("../semantic/dark.tokens.json");
    const expected = new Map<string, string>([
      ["color.foreground.body", "#BEBEBE"],
      ["color.foreground.eyebrow", "#616161"],
      ["color.foreground.caption", "#9F9F9F"],
      ["color.foreground.link", "oklch(0.668496 0.175815 260.701)"],
      ["color.foreground.required", "oklch(0.628749 0.256870 29.135)"],
      ["color.foreground.base", "#FAFAFA"],
      ["color.foreground.brand", "oklch(0.714264 0.126157 173.495)"],
      ["color.foreground.danger", "oklch(0.565931 0.196727 12.263)"],
      ["color.foreground.negative", "oklch(0.628749 0.256870 29.135)"],
      ["color.foreground.warning", "oklch(0.712113 0.137539 76.679)"],
      ["color.foreground.success", "oklch(0.744645 0.138678 161.979)"],
      ["color.foreground.positive", "oklch(0.738525 0.200439 132.644)"],
      ["color.foreground.info", "oklch(0.748693 0.093508 222.051)"],
      ["color.foreground.discovery", "oklch(0.673828 0.163452 293.782)"],
      ["color.foreground.brand-inverse", "#FAFAFA"],
      ["color.foreground.danger-inverse", "#FAFAFA"],
      ["color.foreground.negative-inverse", "#FAFAFA"],
      ["color.foreground.warning-inverse", "#FAFAFA"],
      ["color.foreground.success-inverse", "#FAFAFA"],
      ["color.foreground.positive-inverse", "#FAFAFA"],
      ["color.foreground.info-inverse", "#FAFAFA"],
      ["color.foreground.discovery-inverse", "#FAFAFA"],
      ["color.background.page", "#1F1F21"],
      ["color.background.elevated", "#242528"],
      ["color.background.floating", "#2B2C30"],
      ["color.background.highest", "#484848"],
      ["color.background.base", "#3A3A3A"],
      ["color.background.brand", "oklch(0.321286 0.053996 174.005)"],
      ["color.background.danger", "oklch(0.232 0.0844 21.22)"],
      ["color.background.negative", "oklch(0.361765 0.148451 29.234)"],
      ["color.background.warning", "oklch(0.353144 0.065474 80.261)"],
      ["color.background.success", "oklch(0.338268 0.059899 162.295)"],
      ["color.background.positive", "oklch(0.330233 0.087099 131.695)"],
      ["color.background.info", "oklch(0.334087 0.040684 224.033)"],
      ["color.background.discovery", "oklch(0.300450 0.069225 293.612)"],
      ["color.border.base", "#616161"],
      ["color.border.brand", "oklch(0.714264 0.126157 173.495)"],
      ["color.border.danger", "oklch(0.565931 0.196727 12.263)"],
      ["color.border.negative", "oklch(0.628749 0.256870 29.135)"],
      ["color.border.warning", "oklch(0.712113 0.137539 76.679)"],
      ["color.border.success", "oklch(0.744645 0.138678 161.979)"],
      ["color.border.positive", "oklch(0.738525 0.200439 132.644)"],
      ["color.border.info", "oklch(0.748693 0.093508 222.051)"],
      ["color.border.discovery", "oklch(0.673828 0.163452 293.782)"],
      ["color.border.base-subtle", "#484848"],
      ["color.border.brand-subtle", "oklch(0.464864 0.081711 173.059)"],
      ["color.border.danger-subtle", "oklch(0.308535 0.106323 20.846)"],
      ["color.border.negative-subtle", "oklch(0.361765 0.148451 29.234)"],
      ["color.border.warning-subtle", "oklch(0.599837 0.115846 77.629)"],
      ["color.border.success-subtle", "oklch(0.541023 0.101835 161.604)"],
      ["color.border.positive-subtle", "oklch(0.888874 0.095298 128.119)"],
      ["color.border.info-subtle", "oklch(0.541160 0.068777 222.520)"],
      ["color.border.discovery-subtle", "oklch(0.481336 0.120803 293.295)"],
      ["color.data.neutral.emphasis", "#FAFAFA"],
      ["color.data.neutral.subtle", "#1A1C1F"],
      ["color.data.brand.emphasis", "oklch(0.928628 0.063415 178.870)"],
      ["color.data.brand.subtle", "oklch(0.898086 0.087730 178.642)"],
      ["color.data.red.emphasis", "oklch(0.468286 0.165129 16.140)"],
      ["color.data.red.subtle", "oklch(0.232 0.0844 21.22)"],
      ["color.data.orange.emphasis", "oklch(0.76 0.14 47)"],
      ["color.data.orange.subtle", "oklch(0.57 0.13 47)"],
      ["color.data.yellow.emphasis", "oklch(0.821277 0.158525 75.540)"],
      ["color.data.yellow.subtle", "oklch(0.353144 0.065474 80.261)"],
      ["color.data.green.emphasis", "oklch(0.765237 0.140252 161.986)"],
      ["color.data.green.subtle", "oklch(0.541023 0.101835 161.604)"],
      ["color.data.sky.emphasis", "oklch(0.770742 0.094118 222.672)"],
      ["color.data.sky.subtle", "oklch(0.334087 0.040684 224.033)"],
      ["color.data.blue.emphasis", "oklch(0.668496 0.175815 260.701)"],
      ["color.data.blue.subtle", "oklch(0.575628 0.210277 259.889)"],
      ["color.data.purple.emphasis", "oklch(0.699730 0.163722 293.865)"],
      ["color.data.purple.subtle", "oklch(0.300450 0.069225 293.612)"],
      ["color.data.pink.emphasis", "oklch(0.712797 0.163625 344.149)"],
      ["color.data.pink.subtle", "oklch(0.309382 0.070439 343.700)"]
    ]);
    const selected = new Map<string, string>();

    const visit = (value: unknown, path: string[] = []) => {
      if (!value || typeof value !== "object") return;

      const record = value as Record<string, unknown>;
      if (
        typeof record.$value === "string" &&
        /^\{color\.[^.]+\.\d+\}$/.test(record.$value)
      ) {
        selected.set(
          path.join("."),
          valueAtReference(primitives, record.$value)
        );
      }

      for (const [key, child] of Object.entries(record)) {
        if (key !== "$value") visit(child, [...path, key]);
      }
    };

    visit(semantics);
    expect(selected).toEqual(expected);
  });
});
