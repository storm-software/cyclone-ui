import {
  paintColorCompositionsPanels,
  swapColorCompositionsPanels
} from "./ColorCompositions";

describe("paintColorCompositionsPanels", () => {
  it("tiles the painting past its 8 x 7 panels", () => {
    const panels = paintColorCompositionsPanels(10, 9);

    expect(panels).toHaveLength(90);
    // The first row repeats from column 8, and row 7 repeats row 0.
    expect(panels.slice(8, 10)).toEqual(panels.slice(0, 2));
    expect(panels.slice(70, 80)).toEqual(panels.slice(0, 10));
  });
});


describe("swapColorCompositionsPanels", () => {
  it("swaps exactly two differently colored panels", () => {
    const panels = ["white", "white", "black", "red"] as const;

    for (let i = 0; i < 50; i++) {
      const next = swapColorCompositionsPanels([...panels]);
      const changed = next.flatMap((panel, index) =>
        panel === panels[index] ? [] : [index]
      );

      expect(changed).toHaveLength(2);
      expect([...next].sort()).toEqual([...panels].sort());
    }
  });

  it("leaves a single-color grid alone", () => {
    const panels = ["white", "white"] as const;

    expect(swapColorCompositionsPanels([...panels])).toEqual(panels);
  });
});
