# Design language

## 1. Purpose

The project explains complicated systems without making them feel simplistic. Visuals should reveal structure, not merely make a page or video attractive.

The most useful recurring questions are:

- Who participates?
- What moves?
- What information is required?
- Which rules or constraints shape the outcome?
- Where are decisions made?
- What returns as feedback?

## 2. Personality

The visual voice is:

- clear, not clinical
- intelligent, not academic
- calm, not sterile
- approachable, not childish
- structured, not rigid
- handmade when useful, not messy

## 3. Visual modes

### Editorial system map

Use for ecosystem maps, process flows, comparison frames, taxonomies, course diagrams, and chapter summaries.

Characteristics:

- off-white or pale blue-white background
- deep navy title and focal object
- white or very pale blue panels
- fine blue-gray rules and connectors
- rounded rectangles with modest radii
- simple single-color line icons in soft circular fields
- low-contrast shadows only when separation is necessary
- strong grid and consistent alignment

### Notebook explainer

Use when the image should feel like a thought being worked out live, especially for narration, transitions, and intuitive mental models.

Characteristics:

- white ruled paper with a light blue horizontal grid
- optional single pink notebook margin
- black hand-drawn lettering and arrows
- imperfect but deliberate spacing
- pastel highlight shapes behind key icons
- visible loops and causal arrows
- one short handwritten conclusion

The notebook mode should feel human and explanatory, not like children's clip art.

## 4. Color system

| Role | Color | Usage |
|---|---|---|
| Primary heading | `#0A2D5B` | Titles, focal nodes, strongest icons |
| Body | `#304B69` | Supporting labels and descriptions |
| Muted | `#465D79` | Secondary information |
| Primary accent | `#1779CF` | Emphasis, numbered stages, active paths |
| Section tint | `#E4F3FF` | Bands, grouped areas, callouts |
| Border | `#B5D7F2` | Rules, panel outlines, connectors |
| Page background | `#F7FAFC` | Cool editorial canvas |
| Surface | `#FFFEFA` | Warm cards and clean content areas |

Supporting category colors must be light and desaturated. Suggested starting values:

- Lavender: `#E2C8F2`
- Mint: `#CDEFD8`
- Yellow: `#FAEAA8`
- Peach: `#FADCC8`
- Rose: `#F2D5DF`
- Pale blue: `#D9ECFF`

Use supporting colors to distinguish categories, not as decoration.

## 5. Type and labels

Use a modern grotesk or humanist sans serif similar to Inter, Arial, or Helvetica. Titles are heavy and compact. Body labels are regular or medium weight.

For generated visuals:

- prefer no text when the image model is responsible for rendering
- keep required labels to one to three words
- use sentence case unless a small category label needs uppercase
- avoid paragraphs, citations, or fine print inside generated imagery
- add exact typography in post-production whenever possible

## 6. Shape and line language

- Corners: 6 to 12 px at website scale, roughly 12 to 24 px at 1920 × 1080
- Connectors: thin navy or blue lines, 2 to 4 px at 1920 × 1080
- Icons: outlined, rounded, and visually consistent
- Arrows: simple, direct, and used only when direction matters
- Shadows: subtle blue-tinted separation, never floating glossy cards
- Focal nodes: dark navy fill with white text or icon

## 7. Composition patterns

### Linear process

Stages move left to right. Use consistent spacing and one directional path. Show phase groupings underneath if useful.

### Central ecosystem

One focal system sits in the center. Surround it with four to six actor groups. Connectors should show meaningful relationships rather than decorate the frame.

### Layered model

Stack two to four conceptual layers. Use pale background bands and a shared alignment to reveal how the layers relate.

### Comparison

Use two balanced fields with the same structure. Highlight the precise difference rather than adding more detail to one side.

### Feedback loop

Use a circular or returning connector only when the return path carries meaning. Label the returning signal, evidence, or decision.

## 8. Density rules

- One frame should communicate one teaching point.
- Use four to eight major objects.
- Use at most two hierarchy levels inside each object.
- If the frame needs more than roughly 35 words, separate image generation from typography.
- If more than eight relationships matter, make a sequence or progressive reveal.

## 9. Things that break the language

- dark technology backgrounds
- glowing blue circuitry
- photorealistic corporate teams
- robots used as shorthand for AI
- unrelated floating icons
- isometric cities or factories without explanatory purpose
- thick gradients and heavy shadows
- very round pill-shaped UI controls
- dense dashboards
- saturated rainbow palettes
- visual metaphors that obscure the actual mechanism
