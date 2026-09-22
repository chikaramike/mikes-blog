---
title: 'Configuring workspace Prettier'
publishDate: 2026-09-22T00:00:00Z
summary: "VS Code now uses the AstroWind project's local Prettier and its Astro plugin instead of the extension's bundled formatter."
tags:
  - astro
  - tooling
  - vscode
---

Today I configured VS Code to use the Prettier installation that belongs to this AstroWind project. The workspace setting points the Prettier extension at `./node_modules/prettier`, and Astro and Markdown files now use that extension as their default formatter.

The project already had the right Astro formatter setup: `prettier` and `prettier-plugin-astro` are development dependencies, and `.prettierrc.mjs` explicitly registers the Astro plugin and parser. The change was needed because the editor was loading its bundled Prettier, which could not resolve the project plugin from `/noop.js`.

The site can now format from VS Code and from the command line with the same project-local formatter. Markdown uses Prettier's built-in Markdown parser; `.astro` files use the Astro plugin.
