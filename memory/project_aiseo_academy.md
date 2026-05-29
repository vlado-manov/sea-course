---
name: project-aiseo-academy
description: AI SEO Academy — premium Bulgarian educational platform about AI SEO, GEO, Google AI Overviews, Merchant Center, Structured Data, LLM optimization
metadata:
  type: project
---

Full production-ready Next.js 16 + Tailwind v4 educational platform built at /Users/vladimirmanov/Projects/seo-tutorial.

**Why:** User requested a $100k-grade Bulgarian AI SEO academy with full multilingual support (bg/en), MDX content, dark mode, and all major SEO/GEO topics covered.

**How to apply:** Use this project context when the user asks about the AI SEO Academy project, wants to add pages, content, or features.

## Stack
- Next.js 16.2.6 (Turbopack), App Router
- Tailwind CSS v4 (CSS @theme blocks, not tailwind.config.ts)
- next-intl for i18n (bg default, en secondary)
- Framer Motion, Lucide React
- react-markdown + react-syntax-highlighter for content
- TypeScript strict, clean build

## Key architecture
- `app/[locale]/` — all pages under locale segment
- `proxy.ts` — next-intl routing proxy (NOT middleware.ts — renamed for Next 16)
- `lib/i18n/routing.ts` + `lib/i18n/request.ts` — i18n config
- `lib/content/tutorials.ts` — tutorial data (12 tutorials)
- `lib/content/tools.ts` — tools data (15 tools)
- `lib/content/glossary.ts` — glossary (16 terms)
- `lib/content/tutorialContent.ts` — full MDX content for tutorial detail pages
- `lib/seo/schemas.ts` — JSON-LD schema generators

## Pages built
Homepage, /tutorials, /tutorials/[slug], /tools, /tools/[slug], /glossary, /guides, /guides/[slug], /prompts, /templates, /case-studies, /resources, sitemap.xml, robots.txt

## Tailwind v4 note
CSS lives in `app/globals.css` with `@import "tailwindcss"` and `@theme {}` block. `tailwind.config.ts` is minimal (just content paths). Colors are CSS variables via `--color-*` tokens.
