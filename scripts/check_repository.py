#!/usr/bin/env python3
"""Check the distributable repository using only the Python standard library.

This is a focused integrity/privacy smoke check, not a security certification.
Remote links are deliberately not fetched: contributors can run it offline.
"""

import json
import re
import sys
from urllib.parse import unquote, urlsplit

from repository_files import ROOT, source_files

REQUIRED = (
    "README.md", "README.pt-BR.md", "AGENTS.md", "LICENSE", "CONTRIBUTING.md",
    "CHANGELOG.md", "SECURITY.md", "THIRD_PARTY_NOTICES.md",
    "docs/AI-INTEGRATION.md", "docs/VALIDATION.md",
    "skills/cafe-com-leite-ui/SKILL.md", "skills/cafe-com-leite-ui/LICENSE",
    "skills/cafe-com-leite-ui/agents/openai.yaml",
    "skills/cafe-com-leite-ui/references/design-system.md",
    "skills/cafe-com-leite-ui/references/shadcn-recipes.md",
    "skills/cafe-com-leite-ui/references/validation.md",
    "skills/cafe-com-leite-ui/assets/soft-ui.css",
    "examples/gallery/index.html", "examples/gallery/gallery.css",
    "examples/gallery/gallery.js", "examples/react-shadcn/package.json",
    "examples/react-shadcn/package-lock.json", "examples/react-shadcn/SHADCN_LICENSE",
)


def check():
    errors = []
    for name in REQUIRED:
        if not (ROOT / name).is_file():
            errors.append(f"Missing required file: {name}")
    if errors:
        return errors, 0, 0

    files = list(source_files())
    skill = (ROOT / "skills/cafe-com-leite-ui/SKILL.md").read_text()
    frontmatter = re.match(r"\A---\n(.*?)\n---(?:\n|$)", skill, re.S)
    if not frontmatter:
        errors.append("SKILL.md must start with YAML frontmatter")
    else:
        fields = dict(re.findall(r"^(name|description):\s*(.+)$", frontmatter[1], re.M))
        if fields.get("name") != "cafe-com-leite-ui":
            errors.append("Skill name must match the installable directory")
        if not fields.get("description", "").strip(' \"\''):
            errors.append("Skill description is required")

    license_text = (ROOT / "LICENSE").read_text()
    if "MIT License" not in license_text or "Permission is hereby granted" not in license_text:
        errors.append("Root MIT license is incomplete")
    if (ROOT / "skills/cafe-com-leite-ui/LICENSE").read_text() != license_text:
        errors.append("The installable skill must carry the same license")
    if "Permission is hereby granted" not in (ROOT / "examples/react-shadcn/SHADCN_LICENSE").read_text():
        errors.append("Copied shadcn components must retain their MIT license")

    manifest = json.loads((ROOT / "examples/react-shadcn/package.json").read_text())
    lock = json.loads((ROOT / "examples/react-shadcn/package-lock.json").read_text())
    locked_root = lock.get("packages", {}).get("", {})
    for field in ("name", "version", "dependencies", "devDependencies"):
        if manifest.get(field) != locked_root.get(field):
            errors.append(f"React lockfile does not match package.json: {field}")

    # Deliberately narrow patterns: do not pretend to replace a secret scanner.
    private_key = re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")
    token = re.compile(r"(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{50,}|sk_live_[A-Za-z0-9]{20,})")
    personal_path = re.compile(r"/(?:Users|home)/[A-Za-z0-9_.-]+/")
    link_count = 0
    for path in files:
        relative = path.relative_to(ROOT).as_posix()
        if ((path.name.startswith(".env") and path.name != ".env.example")
                or path.suffix.lower() in {".pem", ".p12", ".pfx", ".key", ".sqlite", ".db", ".sql"}
                or path.name in {"id_rsa", "id_ed25519", ".npmrc", ".netrc"}):
            errors.append(f"Private/configuration file must not be distributed: {relative}")
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        if private_key.search(content) or token.search(content):
            errors.append(f"Possible credential in {relative}; inspect before sharing")
        if personal_path.search(content):
            errors.append(f"Personal filesystem path in {relative}")
        if path.suffix.lower() != ".md":
            continue
        # Fenced examples are prose/code samples, not rendered Markdown links.
        markdown = re.sub(r"^(`{3,}|~{3,}).*?^\1\s*$", "", content, flags=re.M | re.S)
        targets = re.findall(r"!?\[[^\]\n]*\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)", markdown)
        targets += re.findall(r"^\s*\[[^\]]+\]:\s*(<[^>]+>|\S+)", markdown, re.M)
        for target in targets:
            target = target.strip("<>")
            url = urlsplit(target)
            if url.scheme or url.netloc or not url.path:
                continue
            resolved = (path.parent / unquote(url.path)).resolve()
            link_count += 1
            if not resolved.is_relative_to(ROOT) or not resolved.exists():
                errors.append(f"Broken/outside relative link: {relative} → {target}")

    return errors, len(files), link_count


if __name__ == "__main__":
    try:
        errors, file_count, link_count = check()
    except (OSError, ValueError, KeyError) as exc:
        print(f"Repository check failed: {exc}", file=sys.stderr)
        sys.exit(1)
    if errors:
        print("Repository check failed:\n- " + "\n- ".join(errors), file=sys.stderr)
        sys.exit(1)
    print(f"Repository OK: {file_count} source files, {link_count} relative Markdown links, metadata, licenses and privacy smoke checks.")
