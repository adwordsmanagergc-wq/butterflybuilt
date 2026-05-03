#!/usr/bin/env python3
"""
Regenerate src/lib/gallery.ts from the contents of public/images/gallery.

Run after adding new photos:
    python3 scripts/gen-gallery.py

The manifest contains each image's natural width and height so the
PhotoMarquee and gallery grids can reserve space and avoid layout shift.
"""
import os, json
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GALLERY_DIR = os.path.join(ROOT, "public", "images", "gallery")
OUT = os.path.join(ROOT, "src", "lib", "gallery.ts")

files = sorted(
    f for f in os.listdir(GALLERY_DIR)
    if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))
)
entries = []
for f in files:
    with Image.open(os.path.join(GALLERY_DIR, f)) as img:
        entries.append({"file": f, "w": img.size[0], "h": img.size[1]})

with open(OUT, "w") as fh:
    fh.write("// Auto-generated from public/images/gallery — see scripts/gen-gallery.py.\n")
    fh.write("// Re-generate by running: python3 scripts/gen-gallery.py\n\n")
    fh.write("export type GalleryImage = { file: string; w: number; h: number };\n\n")
    fh.write("export const galleryImages: GalleryImage[] = ")
    fh.write(json.dumps(entries, indent=2))
    fh.write(";\n")
print(f"wrote {len(entries)} entries -> {OUT}")
