---
title: Node.js
publishDate: 2026-11-13
category: Development tooling
description: The JavaScript runtime used to run the local site tools and production build.
website: https://nodejs.org/
tags:
  - astro
  - web-development
---

Node.js runs JavaScript outside the browser. In this project it runs the development and build tools behind commands such as `npm run dev` and `npm run build`.

The site is built as static files. Node.js is needed for that build workflow, while [Cloudflare](/tools/cloudflare) serves the finished output. [npm](/tools/npm) manages the project packages and scripts.

Return to [Building this Astro site](../maps/astro-site-building.md) for the connected writing and tools.
