import type { ColorChannel } from "./ColorArea";
import { getColorAreaLayers, parseColor } from "./ColorArea";

const channels = (
  xChannel: ColorChannel,
  yChannel: ColorChannel,
  zChannel: ColorChannel
) => ({ xChannel, yChannel, zChannel });

describe("getColorAreaLayers", () => {
  it("paints an HSB saturation/brightness area over the fixed hue", () => {
    expect(
      getColorAreaLayers(
        parseColor("hsb(219, 58%, 93%)"),
        channels("saturation", "brightness", "hue")
      )
    ).toEqual([
      { backgroundColor: "hsl(219, 100%, 50%)" },
      {
        backgroundImage:
          "linear-gradient(to right, white, rgba(255, 255, 255, 0))"
      },
      { backgroundImage: "linear-gradient(to top, black, rgba(0, 0, 0, 0))" }
    ]);
  });

  it("follows the axes when they are swapped", () => {
    const [, saturation, brightness] = getColorAreaLayers(
      parseColor("hsb(0, 100%, 100%)"),
      channels("brightness", "saturation", "hue")
    );
    expect(saturation?.backgroundImage).toContain("to top");
    expect(brightness?.backgroundImage).toContain("to right");
  });

  it("dims a hue/saturation area by the fixed brightness", () => {
    expect(
      getColorAreaLayers(
        parseColor("hsb(0, 100%, 25%)"),
        channels("hue", "saturation", "brightness")
      ).at(-1)
    ).toEqual({ backgroundColor: "rgba(0, 0, 0, 0.75)" });
  });

  it("interpolates an RGB area between its four corners", () => {
    const [bottom, top] = getColorAreaLayers(
      parseColor("rgb(10, 20, 30)"),
      channels("red", "green", "blue")
    );
    expect(bottom?.backgroundImage).toBe(
      "linear-gradient(to right, rgb(0, 0, 30), rgb(255, 0, 30))"
    );
    expect(top?.backgroundImage).toBe(
      "linear-gradient(to right, rgb(0, 255, 30), rgb(255, 255, 30))"
    );
    expect(top?.maskImage).toBe("linear-gradient(to top, transparent, black)");
  });
});
