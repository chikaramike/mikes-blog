---
title: npm
publishDate: 2026-11-13
category: Development tooling
description: The package manager and script runner used to install dependencies, check the project, and build the site.
website: https://docs.npmjs.com/
tags:
  - astro
  - web-development
---

I use npm to install the packages listed in `package.json` and run the project's scripts. `npm run check` runs the Astro, ESLint, and Prettier checks. `npm run build` produces the static site.

GitHub Actions uses `npm ci` to install dependencies from the lockfile before checking and building. Publishing remains a separate step through [Wrangler](/tools/wrangler).

Return to [Building this site](../maps/site-building.md) for the connected writing and tools.
