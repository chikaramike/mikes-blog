---
title: 'Building this site'
metadata:
  title: 'Building mikes.blog | Site-building notes and tools'
  ignoreTitleTemplate: true
publishDate: 2026-09-21T00:00:00Z
description: 'The decisions, tools, and writing behind mikes.blog, currently built with Astro and published through Cloudflare Workers.'
tags:
  - site-building
  - astro
links:
  - /log/starting-an-astro-site
  - /notes/astro-site-as-a-system
  - /articles/building-an-astro-site-as-a-small-system
  - /maps/site-building
---

This map connects the decisions, tools, and writing behind mikes.blog, currently built with Astro and published through Cloudflare Workers. It will grow with the site as the tools and approach change.

This map follows one idea through all four garden forms:

1. Start with the [log entry](../log/starting-an-astro-site.md), where the decision is captured while it is fresh.
2. Move to the [note](../notes/astro-site-as-a-system.md), where the structure gets a clearer shape.
3. Read the [article](../articles/building-an-astro-site-as-a-small-system.md), where the idea becomes a longer argument.
4. Return to this map when more related pieces are added.

The loop is intentional. A map is not only a directory; it is a way to show how a thought changes as it moves through the garden.

## How the tools fit together

[AstroWind](/tools/astrowind) supplied the starting template. [Astro](/tools/astro) turns the content and components into pages, with [Tailwind CSS](/tools/tailwind-css) for styling, [Vite](/tools/vite) underneath the build, and [Sharp](/tools/sharp) for local image processing.

[Node.js](/tools/node-js) runs the local tools. [npm](/tools/npm) installs the packages and runs the scripts. [TypeScript](/tools/typescript), [ESLint](/tools/eslint), and [Prettier](/tools/prettier) help keep the code and formatting consistent.

[Visual Studio Code](/tools/visual-studio-code), [Foam](/tools/foam), and [Obsidian](/tools/obsidian) support the writing workflow. [Git](/tools/git) records changes, and [GitHub](/tools/github) hosts the repository and runs the checks. After a successful build, [Wrangler](/tools/wrangler) publishes the static files to [Cloudflare](/tools/cloudflare).
