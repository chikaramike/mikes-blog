---
title: 'Wikilinks, markdown links, and router links are three different things'
publishDate: 2026-09-22T00:00:00Z
kind: permanent
stage: budding
tags:
  - astro
  - garden
---

Writing a digital garden across an Astro site, Foam, and Obsidian means living with three link systems that look similar but resolve differently.

A **wikilink**, `[[like-this]]`, is resolved by name against a whole vault. Obsidian and Foam both support it, but it has no meaning to a plain Markdown renderer or to GitHub, so a file full of wikilinks stops being readable outside those two tools.

A **relative markdown link**, `[text](../log/entry.md)`, is resolved as a file path from the current file's location. This is what a standard Markdown renderer, GitHub, VS Code, Foam, and Obsidian (when wikilinks are turned off) all agree on. It is the most portable option, which is why this garden uses it in the source files.

A **router link**, `/log/entry`, is resolved by Astro against the site's routes, not against the filesystem. It is what the rendered HTML needs, but it means nothing to an editor trying to "go to file," because no file exists at that literal path.

The remark plugin described in [the log entry about this decision](../log/adopting-markdown-style-links.md) exists to convert the middle form into the last one: write relative markdown links for the sake of the editors, and let the build produce router links for the sake of the site. The source stays portable; only the compiled output is Astro-specific.

One consequence worth remembering: this conversion only understands links that point inside `src/data/<collection>`. A link to something outside the content collections, or a genuine external URL, should stay exactly as written.
