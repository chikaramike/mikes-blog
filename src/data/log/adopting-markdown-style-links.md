---
title: 'Adopting markdown-style links over wikilinks'
publishDate: 2026-09-22T00:00:00Z
summary: 'Foam and Obsidian are set to write standard relative markdown links instead of [[wikilinks]], so a remark plugin now rewrites them into site routes at build time.'
tags:
  - astro
  - garden
---

Clicking the log link in [an earlier note](../notes/astro-site-as-a-system.md) failed in the editor: it used a root-relative site route like `/log/starting-an-astro-site`, which Astro's router resolves but VS Code and Foam try to resolve as a file path.

I write this garden in Foam and Obsidian as well as in the site itself, and both are configured to use plain markdown links (`[text](../log/entry.md)`) rather than `[[wikilinks]]`, so the same files stay readable on GitHub. That meant the site needed to meet the editors halfway instead of the other way around.

The fix is a remark plugin, `gardenLinksRemarkPlugin` in [frontmatter.ts](../../utils/frontmatter.ts), wired into the markdown processor in [astro.config.ts](../../../astro.config.ts). It walks each file's links during the build and rewrites any relative `.md`/`.mdx` link that points inside `src/data/<collection>` into that collection's route, e.g. `../log/starting-an-astro-site.md` becomes `/log/starting-an-astro-site`. Links that are already absolute, external, or root-relative are left alone.

Now the convention is simple: write relative file links everywhere. They work as file links in Foam, Obsidian, and GitHub, and the build turns them into working site routes.
