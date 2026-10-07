# Video visual specification

## Canvas

- Standard horizontal frame: 1920 × 1080
- High-resolution frame for pans and zooms: 3840 × 2160
- Vertical short: 1080 × 1920
- Square social excerpt: 1080 × 1080
- Default frame rate for later animation: 30 fps

## Safe areas

Keep essential content at least 7.5% from every edge.

For 1920 × 1080:

- horizontal safe margin: approximately 144 px
- vertical safe margin: approximately 81 px
- reserve the lower 15% when captions will be burned into the video

## Visual sequence roles

### Establishing frame

Introduce the full system with limited detail. One title, one structure, and one clear route through the image.

### Explanation frame

Focus on one mechanism. Use a crop, highlight, or simplified redraw rather than repeating the full map.

### Transition frame

Use notebook mode, one short question, or a single icon-to-icon relationship. Keep it visually quiet.

### Summary frame

Show the mental model to retain. Use one strong phrase and a compact diagram.

## Animation behavior

Build visuals so they can be revealed progressively:

- background first
- focal node second
- actors or stages one at a time
- connectors after both endpoints exist
- highlight only after the whole relationship is visible

Prefer slow, deliberate reveals, line draws, gentle fades, and restrained camera moves. Avoid bouncing icons, constant motion, dramatic zooms, or particle effects.

## Text workflow

Generate the underlying composition without long text. Add titles, labels, citations, and numbers in editing software. This produces cleaner spelling, better hierarchy, and easier revisions.

When an AI-generated image must include text:

- use no more than six labels
- keep each label under three words
- provide the exact labels in quotation marks
- request empty title space rather than a generated title
- inspect all text at full resolution

## Export guidance

- PNG for finished frames and transparent overlays
- SVG for diagrams assembled in a vector tool
- WebP for lightweight web previews
- avoid JPEG for text-heavy diagrams
- keep editable source files whenever a frame contains important labels
