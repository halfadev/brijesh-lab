# Brijesh Ramakrishnan

A lean site for structured pharmaceutical learning and selected Lab projects. It uses Next.js, local Markdown/MDX, Git, and Vercel. There is no database or CMS.

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

1. Add the new Markdown or MDX file beneath `content/learn/` or `content/lab/` and keep `status: draft` while working.
2. Preview locally with `npm run dev`.
3. Change the frontmatter to `status: published`.
4. Run `npm run typecheck` and `npm run build`.
5. Commit and push. Vercel deploys the connected GitHub branch.

Published entries automatically appear in their section, the sitemap, and RSS. Entries with `featured: true` can appear on the homepage.

## Content locations

- Course lessons: `content/learn/<course-slug>/`
- Lab projects: `content/lab/`
- Retired content and templates: `archive/content/`

The private `Knowledge Base` folder is a separate source corpus. Nothing in it is imported or exposed by this website.

## Frontmatter schema

Required fields:

```yaml
title: "Readable title"
slug: readable-slug
type: lesson # course | lesson | lab
dek: "A concise description."
date: 2026-10-04
status: draft # draft | published
tags: [systems]
featured: false
```

Optional fields: `category`, `course`, `module`, `youtubeId`, `duration`, `previous`, `next`, and `objective`.

MDX entries can use the supported embedded components documented in the existing Learn content.

The human-readable public route reference is maintained in `SITE_MAP.md`. Retired routes and source material are preserved under `archive/`.

## Deployment

Vercel deploys from GitHub using the standard Next.js build. Set `NEXT_PUBLIC_SITE_URL` to the production origin. Optional public link settings are documented in `lib/site-config.ts`.
