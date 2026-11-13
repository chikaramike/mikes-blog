---
title: 'Markdown: plain text that outlives your apps'
publishDate: 2026-12-25T10:00:00Z
draft: true
excerpt: 'Apps come and go. Plain text files open everywhere. Markdown adds just enough structure to make them useful.'
tags:
  - mikes-io
  - fundamentals
  - markdown
sources:
  - https://commonmark.org/help/
  - https://www.markdownguide.org/basic-syntax/
  - ../notes/markdown-links-vs-wikilinks-vs-router-links
  - ../articles/vs-code-is-your-workbench
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 5. Video link: (add on release day)._

I have changed my tools more often than I should have. Each change has a cost: export, import, fix what broke. The files that came through every change without a problem were plain text. That is the case for Markdown.

## Plain text, plus a few symbols

A plain text file contains only the characters you typed. Any editor on any computer can open it, today or in 20 years. Markdown keeps that, and adds a few symbols that mean something. This article is Markdown. So are the README files on GitHub, my notes, and every page on this site.

## The syntax you need this week

```markdown
# Heading 1

## Heading 2

Plain paragraph. **Bold** and _italic_.

- A bullet
- Another bullet

1. A numbered step
2. The next step

[Link text](https://example.com)
[Link to another file](notes/day-01.md)

Inline `code` uses backticks.
```

For a block of code, put three backticks on the line before and the line after. Add the language name after the first three to get colors:

````markdown
```sh
ls -la
```
````

You will use code blocks in every lesson from here on, because commands belong in them.

## Links are paths

The second link above, `notes/day-01.md`, is a **relative path**. It means "from the folder this file is in, go into `notes`, then open `day-01.md`." It is the same address-reading skill from [Episode 1](../articles/where-your-files-actually-live.md), used inside a document.

## Preview it in VS Code

Open a `.md` file in [VS Code](../articles/vs-code-is-your-workbench.md) and press **Command + Shift + V** for a preview. Press **Command + K**, then **V**, to see the preview side by side with the text.

## The confusing part: two kinds of links

Some note apps, like Obsidian, use **wikilinks**: `[[day-01]]`. They are quick to type, and they work well inside that app. GitHub and most other tools do not understand them. If your notes might leave the app (to GitHub, to a website, to a different editor later), use standard Markdown links. I wrote more about this in a [note on link formats](../notes/markdown-links-vs-wikilinks-vs-router-links.md). It confused me for longer than I would like to admit.

## Frontmatter, briefly

Many tools read a small block at the very top of a Markdown file, between two lines of `---`. It holds information about the file, like a title and a date:

```markdown
---
title: Day 1
created: 2026-12-25
---
```

You do not need it yet. When you see it, now you know what it is.

## Try it

Open `README.md` in your practice folder and write:

1. A heading with the folder's name.
2. A bullet list of what you have learned in Episodes 1 to 5.
3. A link to `notes/day-01.md`.

## Check your work

Open the preview (Command + Shift + V) and click your link. If `day-01.md` opens, the path is correct. If nothing happens, compare the link with the output of `tree` from Episode 3 and look for a typo or a missing folder.

Next: Git, so every change to this folder has a save point you can go back to.
