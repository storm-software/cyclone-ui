"""Report the compiled font's coverage and notices without modifying it."""

import json
import sys
from fontTools.ttLib import TTFont
from fontTools import unicodedata

with TTFont(sys.argv[1]) as font:
    cmap = font.getBestCmap()
    codepoints = sorted(cp for cp, name in cmap.items() if name != ".notdef")
    scripts = {}
    for cp in codepoints:
        script = unicodedata.script(chr(cp))
        scripts[script] = scripts.get(script, 0) + 1
    print(json.dumps({
        "codepoints": codepoints,
        "scripts": dict(sorted(scripts.items())),
        "version": font["name"].getDebugName(5),
        "copyright": font["name"].getDebugName(0),
        "license": font["name"].getDebugName(13),
        "licenseURL": font["name"].getDebugName(14),
    }))
