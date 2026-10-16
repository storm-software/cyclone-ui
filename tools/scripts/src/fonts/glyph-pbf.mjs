/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

/* eslint-disable unused-imports/no-unused-vars */

// The MapLibre glyph protobuf schema uses varint and length-delimited fields.
// Keep this reader local to the build validator; no runtime renderer dependency.
function fields(bytes) {
  let offset = 0;
  const varint = () => {
    let result = 0;
    for (let shift = 0; shift <= 49; shift += 7) {
      if (offset >= bytes.length) throw new Error("Truncated glyph protobuf");
      const byte = bytes[offset++];
      result += (byte & 127) * 2 ** shift;
      if (byte < 128) {
        if (!Number.isSafeInteger(result))
          throw new Error("Oversized glyph varint");
        return result;
      }
    }
    throw new Error("Oversized glyph varint");
  };

  const result = [];
  while (offset < bytes.length) {
    const key = varint();
    const tag = Math.floor(key / 8);
    const wire = key % 8;
    if (!tag) throw new Error("Invalid glyph protobuf tag");
    if (wire === 0) result.push([tag, varint()]);
    else if (wire === 2) {
      const length = varint();
      if (length > bytes.length - offset)
        throw new Error("Truncated glyph protobuf field");
      result.push([tag, bytes.subarray(offset, offset + length)]);
      offset += length;
    } else throw new Error(`Unexpected glyph protobuf wire type ${wire}`);
  }

  return result;
}

export function decodeGlyphRange(bytes) {
  const stacks = fields(bytes);
  if (
    stacks.length !== 1 ||
    stacks[0][0] !== 1 ||
    typeof stacks[0][1] === "number"
  ) {
    throw new Error("Expected one glyph font stack");
  }

  const result = { name: "", range: "", glyphs: [] };
  for (const [tag, value] of fields(stacks[0][1])) {
    if (tag === 1 || tag === 2) {
      if (typeof value === "number") {
        throw new TypeError("Invalid glyph metadata");
      }

      result[tag === 1 ? "name" : "range"] = new TextDecoder("utf-8", {
        fatal: true
      }).decode(value);
    } else if (tag === 3) {
      if (typeof value === "number") {
        throw new TypeError("Invalid glyph message");
      }

      const glyph = { bitmap: new Uint8Array() };
      const names = {
        1: "id",
        2: "bitmap",
        3: "width",
        4: "height",
        5: "left",
        6: "top",
        7: "advance"
      };

      for (const [field, data] of fields(value)) {
        if (!names[field]) continue;
        if ((field === 2) === (typeof data === "number")) {
          throw new TypeError("Invalid glyph field");
        }

        glyph[names[field]] =
          field === 5 || field === 6
            ? data % 2
              ? -(data + 1) / 2
              : data / 2
            : data;
      }

      result.glyphs.push(glyph);
    }
  }

  return result;
}

export function validateGlyphRange(range, name, start) {
  if (!Number.isInteger(start) || start < 0 || start > 65280 || start % 256) {
    throw new Error("Invalid glyph range boundary");
  }

  if (range.name !== name || range.range !== `${start}-${start + 255}`) {
    throw new Error(`Glyph metadata mismatch for ${name}/${start}`);
  }

  const seen = new Set();
  for (const glyph of range.glyphs) {
    for (const field of ["id", "width", "height", "left", "top", "advance"]) {
      if (
        !Number.isInteger(glyph[field]) ||
        Math.abs(glyph[field]) > 0x7fffffff
      ) {
        throw new Error(`Invalid glyph ${field}`);
      }
    }

    if (glyph.id < start || glyph.id > start + 255 || seen.has(glyph.id)) {
      throw new Error(`Duplicate or out-of-range glyph ${glyph.id}`);
    }

    seen.add(glyph.id);
    if (glyph.width < 0 || glyph.height < 0 || glyph.advance < 0)
      throw new Error("Negative glyph metrics");

    // font-maker omits the bitmap for an empty outline, retaining its advance.
    const size =
      glyph.width === 0 || glyph.height === 0
        ? 0
        : (glyph.width + 6) * (glyph.height + 6);

    if (!(glyph.bitmap instanceof Uint8Array) || glyph.bitmap.length !== size) {
      throw new Error(`Invalid bitmap length for glyph ${glyph.id}`);
    }
  }
  return range.glyphs.length;
}
