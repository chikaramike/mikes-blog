---
title: 'How I built this site'
publishDate: 2026-09-21T00:00:00Z
excerpt: 'From an open-source Astro template to a working site: the stack, the content model, the edits, and the Cloudflare pipeline.'
image: '~/assets/images/how-i-built-this-site.png'
imageAlt: 'A glowing neon sine wave over a dark circuit-board grid, Tokyo midnight style'
tags:
  - astro
  - cloudflare
  - meta
sources:
  - ../log/starting-an-astro-site
  - ../notes/astro-site-as-a-system
---

This site exists because I wanted a place for thoughts that are still becoming clear. A web log for ideas in motion, as the homepage now says. The title is deliberate: I spend a lot of my life thinking about movement, in the gym and in organizations, and an idea is only useful if it keeps moving toward a result.

This is the build log. The framework, the template, the content architecture, the edits that made it mine, and the pipeline that puts it online.

## Why Astro

Astro is a static site generator. There is no server process answering requests and no database running behind the pages. You write Markdown and components, and at build time Astro compiles everything into a folder of plain HTML, CSS, and a small amount of JavaScript.

For a personal site that is the right trade. There are no accounts to manage and no dynamic data, so a running server would be overhead I pay for and then babysit. Astro lets the build pipeline act as the backend: Git holds the history, the filesystem holds the structure, and a build turns both into a fast static site.

The commands I use day to day:

```bash
npm run dev      # local dev server at localhost:4321
npm run build    # static output into dist/
npm run check    # astro check + ESLint + Prettier
```

## Starting from an open-source template

I did not build the scaffolding by hand. I started from [AstroWind](https://github.com/arthelokyo/astrowind), a free, open-source template (MIT license) built on Astro v7 and Tailwind CSS v4.

Templates get a bad name in some circles, as if starting from one means skipping the real work. On a site like this the real work is never the responsive grid or the SEO tags. A good template hands you that infrastructure — dark mode, RSS, sitemaps, image optimization, accessibility — so the hours go to the part that is actually yours: the content and its structure.

```bash
npm create astro@latest -- --template arthelokyo/astrowind
npm install
npm run dev
```

AstroWind also centralizes site settings in `src/config.yaml` and exposes them to components as a virtual module. Changing the site name, the metadata, or the theme happens in one file instead of a trail of edits.

## The content model

The first decision I made was not the homepage. It was the vocabulary of the site.

I use four content types, each with a distinct job:

- **Log** — short, chronological observations.
- **Notes** — developing ideas, tagged with a kind and a stage.
- **Articles** — long-form arguments that cite their sources.
- **Maps** — indexes that connect related ideas.

Each type has its own folder under `src/data/` and a typed schema in `src/content.config.ts`:

```ts
const articleCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/articles' }),
  schema: gardenDocumentDefinition().extend({
    excerpt: z.string().optional(),
    image: z.string().optional(),
    sources: z.array(z.string()),
  }),
});
```

The `sources` field matters most to me. Every article points back to the logs and notes that fed it, so the history of an idea stays visible. That turns the site from a stack of pages into a connected system.

I wrote about the reasoning in [Building an Astro site as a small system](/articles/building-an-astro-site-as-a-small-system). That post is the philosophy; this one is the log of the work.

## What I changed to make it mine

The template ships looking like a product demo. A thin bar at the top announced "Astro v7 is now available" with a GitHub star counter. The header carried a "Start here" button. The homepage introduced me as "an ITM MBA and leader." None of that felt like me, so I removed or rewrote it:

- Removed the announcement bar and the "Start here" button.
- Rewrote the headline to "A web log for ideas in motion" and dropped the credential from the subtitle. The ideas should introduce themselves.
- Gave the Log, Notes, Articles, and Maps cards neon icons in a Tokyo-midnight palette — cyan, pink, violet, lime. I live in Tokyo, and neon against dark is the mood I want the site to carry.
- Swapped the favicon from the template's logo to the same sine-wave icon used in the header.

Most of these were single-file changes. That is the argument for a template: identity is a thin layer you paint over solid infrastructure, not something you rebuild from the ground up.

## Publishing to Cloudflare

The site ships to Cloudflare Workers as static assets. The pipeline is short:

1. **Build** — `npm run build` compiles the site into `dist/`.
2. **Validate** — GitHub Actions runs `npm run check` and `npm run build` on every push to `main`. It validates and builds; it does not deploy.
3. **Deploy** — Wrangler uploads `dist/` to a Worker.

The Worker is declared in `wrangler.jsonc`:

```jsonc
{
  "name": "mikes-blog",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page",
  },
}
```

```bash
npm run build
npx wrangler deploy
```

`wrangler deploy` publishes the site to `https://mikes-blog.chikaradev.workers.dev`. A custom domain (`mikes.blog`) will point at it once the content is ready; the domain is parked at Porkbun for now.

## Where it goes from here

The structure can hold more than it currently shows. More logs, deeper notes, and maps that connect threads across months. Building in public is the point: the site is small on purpose, so the system can grow without a rewrite.
