---
title: Sharp
publishDate: 2026-11-13
category: Development tooling
description: The image-processing library used to resize and optimize local site images during the build.
website: https://sharp.pixelplumbing.com/
tags:
  - astro
  - web-development
---

This site uses Astro's Sharp image service to process local images at build time. It turns source images into the sizes and formats used by the generated pages.

The favicon generator also uses Sharp to render the site's SVG mark into raster icons. This work happens before deployment, alongside the rest of the [Astro](/tools/astro) build.

Return to [Building this site](../maps/site-building.md) for the connected writing and tools.
