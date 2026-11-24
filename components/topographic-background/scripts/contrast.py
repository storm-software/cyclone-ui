"""Derive high/low contrast topography maps from topography-dark.svg.

Each grey level keeps its OKLab a/b (hue and chroma); only its lightness
moves, away from (high) or towards (low) the map's area-weighted mean
lightness. Light maps are the sRGB inversion of the dark ones, like the
original topography-light.svg, which the interactive shader relies on.

usage: python3 contrast.py <assets dir> [out dir]
"""
import re, sys

def to_lin(c):
    c /= 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

def to_srgb(c):
    c = min(max(c, 0.0), 1.0)
    c = 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055
    return round(c * 255)

def oklab(h):
    r, g, b = (to_lin(int(h[i:i + 2], 16)) for i in (0, 2, 4))
    l = (0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b) ** (1 / 3)
    m = (0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b) ** (1 / 3)
    s = (0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b) ** (1 / 3)
    return (0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s)

def hex_(L, a, b):
    l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3
    rgb = (4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
           -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
           -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)
    return "%02X%02X%02X" % tuple(to_srgb(c) for c in rgb)

def invert(h):
    return "%02X%02X%02X" % tuple(255 - int(h[i:i + 2], 16) for i in (0, 2, 4))

# Area of each level in a 960px raster of topography-dark.svg (rsvg-convert +
# magick histogram), so the page's overall tone stays put.
AREA = {"0C0C0E": 64890, "111113": 60225, "151517": 36286, "171719": 32574,
        "030304": 32511, "060607": 31060, "131315": 31028, "232325": 30929,
        "0F0F10": 30454, "1B1B1D": 30354, "212123": 28690, "1D1D1F": 26261,
        "0A0A0B": 24861, "19191B": 24393, "09090B": 7221, "1F1F21": 6646}
PIVOT = sum(oklab(h)[0] * n for h, n in AREA.items()) / sum(AREA.values())
FACTORS = {"high-contrast": 1.8, "low-contrast": 0.5}

if __name__ == "__main__":
    assets = sys.argv[1]
    out_dir = sys.argv[2] if len(sys.argv) > 2 else assets
    dark = open(f"{assets}/topography-dark.svg").read()
    levels = sorted(set(re.findall(r'fill="#([0-9A-F]{6})"', dark)))
    for name, k in FACTORS.items():
        mapping = {}
        for h in levels:
            L, a, b = oklab(h)
            mapping[h] = hex_(PIVOT + (L - PIVOT) * k, a, b)
        print(name, " ".join(f"{h}>{mapping[h]}" for h in levels))
        for mode, fn in (("dark", lambda h: h), ("light", invert)):
            out = re.sub(r'fill="#([0-9A-F]{6})"',
                         lambda m: f'fill="#{fn(mapping[m[1]])}"', dark)
            open(f"{out_dir}/topography-{mode}-{name}.svg", "w").write(out)
