# Brijesh Ramakrishnan

A lean editorial site for making sense of complex systems. It uses Next.js, local Markdown/MDX, Git, and Vercel. There is no database or CMS.

## Local preview

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Draft entries are visible locally and carry a **Draft preview** label.

Before publishing, run:

```bash
npm run typecheck
npm run build
```

## Publishing

1. Copy the appropriate file from `content/templates/` into its destination folder.
2. Rename it to the final slug, add the copy and media, and keep `status: draft`.
3. Preview locally with `npm run dev`.
4. Change the frontmatter to `status: published`.
5. Run `npm run typecheck` and `npm run build`.
6. Commit and push. Vercel deploys the connected GitHub branch.

Published entries automatically appear in their section, the sitemap, and RSS. Entries with `featured: true` can appear on the homepage. A new entry should not require a React route or CSS change.

## Content locations

- Essays: `content/writing/`
- Video essays: `content/videos/`
- Course lessons: `content/learn/<course-slug>/`
- Lab notes: `content/lab/`
- Reusable authoring templates: `content/templates/`

The private `Knowledge Base` folder is a separate source corpus. Nothing in it is imported or exposed by this website.

## Frontmatter schema

Required fields:

```yaml
title: "Readable title"
slug: readable-slug
type: article # article | video | course | lesson | lab
dek: "A concise description."
date: 2026-10-04
status: draft # draft | published
tags: [systems]
featured: false
```

Optional fields: `category`, `course`, `module`, `youtubeId`, `duration`, `previous`, `next`, and `objective`.

MDX entries can use these shared components directly: `KeyConcept`, `Callout`, `ImageBlock`, `InfographicBlock`, `VideoEmbed`, and `Sources`.

## Internal visual reference

The component catalog is at `/design-system`. It is excluded from the sitemap, public navigation, and search indexing.

## Deployment

Vercel deploys from GitHub using the standard Next.js build. Set `NEXT_PUBLIC_SITE_URL` to the production origin. Optional public link settings are documented in `lib/site-config.ts`.
