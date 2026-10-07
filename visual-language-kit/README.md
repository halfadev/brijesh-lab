# Brijesh Ramakrishnan Visual Language Kit

A portable, AI-agnostic guide for creating diagrams, illustrations, video frames, thumbnails, and visual explainers in the design language of **Making sense of complex systems**.

You can copy this entire folder into another project or attach it to an AI conversation. It has no dependency on the website code.

## Fastest way to use it

1. Give the AI `AI-HANDOFF.md`.
2. Attach one or two relevant files from `references/`.
3. Fill in `visual-brief-template.md`.
4. Use or adapt a prompt from `prompts/`.

For a one-message workflow, paste `COPY-PASTE-MASTER-PROMPT.md`, replace the bracketed fields, and attach the most relevant reference image.

## Folder map

```text
visual-language-kit/
  README.md
  AI-HANDOFF.md
  COPY-PASTE-MASTER-PROMPT.md
  DESIGN-LANGUAGE.md
  VIDEO-VISUAL-SPEC.md
  visual-brief-template.md
  tokens.json
  prompts/
    system-map.md
    process-flow.md
    concept-illustration.md
    video-thumbnail.md
    notebook-explainer.md
    motion-keyframe.md
  references/
    README.md
    pharmaceutical-lifecycle.svg
    editorial-ecosystem-map.png
    editorial-mental-model.png
    notebook-system-map.png
    palette.svg
```

## Core idea

The visual language makes hidden systems understandable. Every visual should help the viewer identify at least one of these:

- the actors
- the flows
- the rules or constraints
- the decisions
- the feedback loops

The result should feel editorial, calm, intelligent, and teachable. It should never feel like generic corporate presentation art, futuristic AI imagery, or a dense software dashboard.

## Recommended workflow

Generate the conceptual image first, then add exact titles and labels in a layout tool. Image models are unreliable at paragraphs and technical terminology. If text must be generated inside the image, keep labels to one to three words and verify every word before publication.

The original website design system remains the source of truth. This kit translates it into portable visual-generation guidance.
