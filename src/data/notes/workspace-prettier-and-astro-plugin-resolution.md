---
title: 'Workspace Prettier and Astro plugin resolution'
publishDate: 2026-09-22T00:00:00Z
kind: permanent
stage: budding
tags:
  - astro
  - prettier
  - vscode
  - tooling
---

The red formatter indicator in VS Code was not reporting a formatting problem in the note. The project-local CLI passed the file with `npx prettier --check`, but the Prettier extension logged this error:

`Cannot find package 'prettier-plugin-astro' imported from /noop.js`

The important distinction was between two Prettier installations. AstroWind includes `prettier` and `prettier-plugin-astro` as development dependencies so the command line, CI, and every developer can use the same versions. VS Code also bundles its own Prettier as part of the `esbenp.prettier-vscode` extension. In this case the extension was loading the bundled copy while reading the project configuration, so the plugin could not be resolved from the project dependency tree.

Prettier 3 also removed automatic plugin searching. That is why `.prettierrc.mjs` explicitly lists `prettier-plugin-astro` and manually assigns the `astro` parser for `.astro` files. Removing the plugin would hide the error for some files but would make the project formatter unable to understand Astro syntax.

The durable fix is to point VS Code at `./node_modules/prettier` and use the Prettier extension for both Astro and Markdown files. Markdown does not need the Astro plugin because Prettier supports Markdown natively. It still uses the project's shared options, while `.astro` files additionally use the Astro parser and plugin.

This keeps editor formatting aligned with `npm run check:prettier` and avoids relying on whatever Prettier version happens to be bundled with the editor extension.
