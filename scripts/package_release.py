#!/usr/bin/env python3
"""Build checked skill/source ZIPs and SHA256SUMS with Python's standard library."""

import argparse
import hashlib
from pathlib import Path
import re
import sys
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

from check_repository import check
from repository_files import ROOT, source_files


def archive(path, entries):
    with ZipFile(path, "w", ZIP_DEFLATED, compresslevel=9) as output:
        for source, destination in sorted(entries, key=lambda entry: entry[1]):
            # Fixed metadata makes the same source produce identical archives.
            info = ZipInfo(destination, date_time=(2026, 1, 1, 0, 0, 0))
            info.create_system = 3
            info.external_attr = 0o100644 << 16
            info.compress_type = ZIP_DEFLATED
            output.writestr(info, source.read_bytes())
    with ZipFile(path) as output:
        corrupt = output.testzip()
        if corrupt:
            raise ValueError(f"Corrupt archive entry: {corrupt}")
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--version", required=True, help="Release version, e.g. 0.1.0")
    parser.add_argument("--output-dir", type=Path, required=True, help="Directory outside the repository")
    args = parser.parse_args()
    if not re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+(?:-[A-Za-z0-9.-]+)?", args.version):
        parser.error("Version must use major.minor.patch, optionally with a prerelease suffix")
    output = args.output_dir.resolve()
    if output.is_relative_to(ROOT):
        parser.error("Keep release archives outside the source repository")
    errors, _, _ = check()
    if errors:
        raise ValueError("Repository check failed:\n- " + "\n- ".join(errors))
    output.mkdir(parents=True, exist_ok=True)
    files = list(source_files())
    skill = ROOT / "skills/cafe-com-leite-ui"
    packages = {
        f"cafe-com-leite-ui-{args.version}-skill.zip": [
            (path, "cafe-com-leite-ui/" + path.relative_to(skill).as_posix())
            for path in files if path.is_relative_to(skill)
        ],
        f"cafe-com-leite-ui-{args.version}-source.zip": [
            (path, f"cafe-com-leite-ui-{args.version}/" + path.relative_to(ROOT).as_posix())
            for path in files
        ],
    }
    sums = []
    for name, entries in packages.items():
        digest = archive(output / name, entries)
        sums.append(f"{digest}  {name}\n")
        print(f"{name}: {len(entries)} files")
    (output / "SHA256SUMS").write_text("".join(sums))
    print(f"Release archives and SHA256SUMS ready in {output}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError) as exc:
        print(f"Release packaging failed: {exc}", file=sys.stderr)
        sys.exit(1)
