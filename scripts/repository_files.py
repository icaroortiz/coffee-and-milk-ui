"""Shared source-file selection for local checks and release archives."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GENERATED_DIRS = {
    ".git", "node_modules", "dist", "_site", "__pycache__", ".venv",
    "test-results", "playwright-report", ".pytest_cache", ".vite",
}


def source_files(root: Path = ROOT):
    """Yield public-source candidates without following directory symlinks."""
    import os

    for directory, directories, filenames in os.walk(root, followlinks=False):
        directories[:] = sorted(name for name in directories if name not in GENERATED_DIRS)
        for name in directories:
            path = Path(directory) / name
            if path.is_symlink():
                raise ValueError(f"Source directory is a symlink: {path.relative_to(root)}")
        for name in sorted(filenames):
            path = Path(directory) / name
            if name == ".DS_Store" or path.suffix in {".pyc", ".log", ".zip"}:
                continue
            if path.is_symlink():
                raise ValueError(f"Source file is a symlink: {path.relative_to(root)}")
            yield path
