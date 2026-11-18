"""Read UFO version metadata with FontTools and edit only its two value nodes."""

import json
import re
import sys

from fontTools.misc import plistlib


def read_version(path: str, content: str) -> dict[str, int]:
    try:
        info = plistlib.loads(content.encode("utf-8"))
    except Exception as error:
        raise ValueError(f"Invalid fontinfo.plist at {path}: {error}") from error

    if not isinstance(info, dict):
        raise ValueError(f"Invalid fontinfo.plist at {path}: expected a dictionary")

    version = {}
    for key, field in (("versionMajor", "major"), ("versionMinor", "minor")):
        value = info.get(key)
        if type(value) is not int or value < 0:
            raise ValueError(f"Invalid {key} in fontinfo.plist at {path}")
        version[field] = value
    return version


def replace_version(content: str, path: str, version: dict[str, int]) -> str:
    for key, field in (("versionMajor", "major"), ("versionMinor", "minor")):
        pattern = rf"(<key>\s*{key}\s*</key>\s*<integer>\s*)(\d+)(\s*</integer>)"
        matches = list(re.finditer(pattern, content))
        if len(matches) != 1:
            raise ValueError(f"Expected one {key} integer in fontinfo.plist at {path}")
        content = re.sub(
            pattern,
            lambda match: f"{match[1]}{version[field]}{match[3]}",
            content,
            count=1,
        )
    return content


def main() -> None:
    request = json.load(sys.stdin)
    new_version = request.get("newVersion")
    result = []
    for manifest in request["manifests"]:
        path, content = manifest["path"], manifest["content"]
        entry = {"path": path, "version": read_version(path, content)}
        if new_version is not None:
            entry["content"] = replace_version(content, path, new_version)
            if read_version(path, entry["content"]) != new_version:
                raise ValueError(f"Failed to update fontinfo.plist at {path}")
        result.append(entry)
    json.dump(result, sys.stdout)


if __name__ == "__main__":
    try:
        main()
    except (KeyError, TypeError, ValueError) as error:
        print(error, file=sys.stderr)
        sys.exit(1)
