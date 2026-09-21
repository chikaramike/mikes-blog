---
title: 'Building an Astro site as a small system'
publishDate: 2026-09-21T00:00:00Z
excerpt: 'A practical way to build an Astro site around content types, clear routes, and a publishing system that stays understandable.'
image: '~/assets/images/default.png'
imageAlt: 'Placeholder image for an Astro site article'
tags:
  - astro
sources:
  - ../log/starting-an-astro-site
  - ../notes/astro-site-as-a-system
---

A new website often begins as a visual exercise. There is a homepage to design, a color palette to choose, and a set of components that make the first screen feel finished. That work is satisfying, but it is not the part that determines whether the site will still be useful six months later.

The more important question is what kind of work the site is meant to support.

For mikes.blog, the answer is a digital garden: a place where small observations can become notes, notes can inform articles, and maps can help a reader see the relationships between them. Astro is a natural fit for that approach because it keeps the publishing model close to the filesystem and turns Markdown into fast, static pages without requiring a large runtime system.

## Start with the content model

The first design decision is not the homepage. It is the vocabulary of the site.

I am using four content types. A log is chronological and small. It captures a thought while it is fresh, usually in 50 to 300 words. A note is a developing idea, longer than a log but not necessarily finished. Notes carry a kind and a stage so I can distinguish a literature review from a permanent reference, or a seedling from an evergreen idea.

An article is the long-form layer. It has room for an argument, an explanation, or a synthesis, and it carries a `sources` array that points back to the logs and notes that fed it. That field is more than metadata. It makes the history of an idea visible and gives a reader somewhere to continue exploring.

A map is an index. It can be short or extensive, but its job is orientation. A map should answer the question, “Where should I go next?” rather than repeat the content of every page it links to.

These distinctions prevent one of the common problems with personal sites: every thought being forced into the same publishing shape. A small observation does not need a title, excerpt, hero image, and elaborate taxonomy. A considered article deserves more room. The model should make those differences easy rather than asking the writer to remember them every time.

## Let the filesystem explain the project

Each collection has its own directory under `src/data`: `log/`, `notes/`, `articles/`, and `maps/`. The folder names are ordinary enough that a new contributor can understand them without reading a framework manual. The schemas in `src/content.config.ts` add the rules that the folders alone cannot express.

This is one of Astro's strengths. Content can remain portable Markdown while the site still gets typed frontmatter, build-time validation, and rendered pages. The system does not need a database to be useful. Git provides history, the filesystem provides organization, and Astro provides the build pipeline.

That simplicity is valuable for a personal site. I want to spend my time thinking and writing, not maintaining a publishing platform. When the site does need more capability, the content model gives me a stable place to add it. Search, related content, RSS, or a future editor can build on the collections instead of inventing a second structure beside them.

## Routes should mirror the reader's questions

The public routes follow the same vocabulary: `/log`, `/notes`, `/articles`, and `/maps`. Each collection has an index page that explains its purpose and lists its entries. Each entry has a detail page with a stable, readable URL.

This gives the reader two ways in. Someone can arrive through a specific link and read one piece without knowing anything about the site. Someone else can enter through a collection page and browse by form. The homepage provides a third path by explaining the relationship between the collections without turning the site into a product tour.

That relationship matters. A garden is not just four folders with four menus. It is a set of transitions. A log can point to a note. A note can become a source for an article. A map can gather the whole thread. Those links create context, and context is what makes a small site feel larger than its page count.

## Build for revision

A personal knowledge system should expect change. The first version of a schema will not be perfect. A note may need a new kind. An article may need more than a list of source slugs. A map may become a guide with its own sections and explanation.

The answer is not to design every future feature now. It is to make today's structure legible and easy to revise. Small schemas, clear routes, and content in version control give the project room to grow without requiring a rewrite at every turn.

This is also where the professional purpose of the site enters. Digital transformation and operational improvement are often described through large systems, but the same principle applies at a smaller scale: make the work visible, make the decisions inspectable, and create feedback loops that help the system improve.

The website is both the subject and the experiment. I am building a tool for thinking while paying attention to how the tool shapes the thinking. If the publishing process becomes cumbersome, that is useful evidence. If the links help an old idea become useful in a new context, that is evidence too.

## A modest starting point

The first version does not need a complete identity, a sophisticated search engine, or a perfect taxonomy. It needs a clear reason to exist and a path for the next piece of writing.

For now, that path is simple: capture the moment in a log, develop the idea in a note, make the argument in an article, and draw the connections on a map. The structure is small enough to understand and flexible enough to grow.

That feels like the right kind of beginning for mikes.blog: not a finished publication, but a useful system already in motion.
