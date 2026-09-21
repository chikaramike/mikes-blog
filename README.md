# mikes.blog

`mikes.blog` is my personal digital garden: a web log and digital dumping ground for thoughts, working notes, observations, and ideas that are still taking shape.

It is also a public record of how I think and work. Alongside the personal material, the site is intended to show the range behind my work as a leader with an MBA in Information Technology Management: connecting strategy to delivery, improving operations, and helping organizations make meaningful digital transformations.

This site favors useful thinking over polished certainty. Some entries will be small and immediate; others will grow through linking, revisiting, and revision.

Read [How I built this site](./src/data/articles/how-i-built-this-site.md) for the build log: the stack, the content model, and the Cloudflare publishing pipeline.

## Stack

- [Astro](https://astro.build/) 7 for the static site and content routing
- [Tailwind CSS](https://tailwindcss.com/) 4 for styling
- Markdown and MDX for writing
- TypeScript for configuration and application code
- Astro Assets and Sharp for image processing

The project uses Astro's static output, so the generated site can be hosted on a static platform such as Cloudflare Pages.

## Getting started

The project requires Node.js `>=22.22.3`, as specified in `.nvmrc`.

```shell
npm install
npm run dev
```

The development server will print the local URL, normally `http://localhost:4321`.

Create a production build with:

```shell
npm run build
```

The output is written to `dist/`. To inspect that build locally:

```shell
npm run preview
```

Before publishing changes, the full project checks can be run with:

```shell
npm run check
```

## Content model

The garden is organized around four kinds of writing. The word counts are guides, not gates; they help each form stay intentionally shaped.

### Log: `log/`

Chronological micro-posts, usually **50–300 words**. Logs capture a thought while it is fresh: an observation, decision, question, lesson, or small update. They use minimal frontmatter and do not need a summary or a stage.

### Notes: `notes/`

Developing ideas, usually **100–800 words**. Each note has a `kind` and a `stage`:

- `kind`: `review`, `literature`, `permanent`, or `fleeting`
- `stage`: `seedling`, `budding`, or `evergreen`

Notes are the working material of the garden. They can remain unfinished, become more precise over time, or feed a longer article.

### Articles: `articles/`

Longer, more considered pieces, usually **800–5,000 words**. Articles carry a `sources` array containing relative links to the notes that informed them, for example:

```yaml
sources:
  - ./some-note-slug
```

This keeps the path from an early idea to a published argument visible.

### Maps: `maps/`

Link collections and topic indexes. Maps have variable length and are used to make relationships between ideas easier to navigate. A map may point to notes, articles, logs, external resources, or another map.

The original AstroWind blog posts and the first garden examples are preserved under `src/data/archive/`. The live folders under `src/data/` are intentionally empty while the site is reset for original writing. The garden schemas live in `src/content.config.ts`; new public content belongs in the matching live folder.

## Project structure

```text
/
├── public/                 # Static files, robots.txt, headers, and CMS assets
├── src/
│   ├── assets/             # Images, icons, and styles
│   ├── components/         # Shared UI, layout, and page sections
│   ├── data/               # Live Markdown/MDX content and archived material
│   ├── layouts/            # Shared Astro page layouts
│   ├── pages/              # File-based routes
│   ├── config.yaml         # Site, metadata, blog, and UI configuration
│   └── content.config.ts   # Astro content collection schemas
├── astro.config.ts         # Astro integrations and build configuration
└── package.json            # Scripts and dependencies
```

## Deployment

The site is intended for deployment to Cloudflare Pages as a static Astro site.

The expected build settings are:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: `22.22.3` or newer

Cloudflare configuration may be refined as deployment moves from local development to production.

## Acknowledgement

This project began as a clone and adaptation of [AstroWind](https://github.com/arthelokyo/astrowind), an open-source Astro and Tailwind starter by [Arthelokyo](https://arthelokyo.com). Thanks to its authors and contributors for the strong foundation, thoughtful components, and practical project structure. The original template documentation remains available in [ASTROWIND-README.md](./ASTROWIND-README.md).

The content, direction, and future identity of `mikes.blog` are my own.
