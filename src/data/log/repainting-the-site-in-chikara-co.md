---
title: 'Repainting the site in Chikara.Co'
publishDate: 2026-10-30T00:00:00Z
summary: 'The blog now wears the Chikara.Co brand guide in its cool graphite mode, with a dark theme built from the same ramps and a rollback that takes one command.'
tags:
  - astro
  - design
  - garden
---

I moved the blog onto the Chikara.Co brand guide today. Mode B, cool graphite. The guide already existed for client work, so the job was making a personal site wear it without losing what a blog needs.

The light theme is the guide applied directly. A graphite ground at `#F5F6F7`, white surfaces, `#C6CBD1` hairlines, petrol `#093558` headings, Indigo Action `#3548A8` for links, and red held in reserve. Nothing glows and nothing gradients.

## Where the decisions live

Two files carry the theme. `CustomStyles.astro` holds the full token set, copied from the brand repo so the blog and the guide move together, plus the handful of aliases the AstroWind template reads.

The second file does the heavier work. The template ships hundreds of `text-gray-900` and `dark:bg-slate-900` classes across about forty components, and editing each one would have been a week of churn with no design benefit. Instead `tailwind.css` re-points the stock Tailwind palettes at the brand ramps. Lightest stays lightest, darkest stays darkest, so every existing utility lands on a brand colour and the dark variants keep their meaning.

## Dark mode is an extension, not a copy

The guide defines a light mode only. It says a dark surface is a petrol navy panel inside a light page, which is right for documents and wrong for a site that people read at night.

The dark theme here is graphite night, an inversion built from the same ramps. `#0B0C0F` ground, `#14161A` panels, `#2C3036` hairlines, Pale Mist headings, Sky links. Same palette, opposite ends. That keeps one brand with two lighting conditions instead of two brands.

## Type

Headings use M PLUS Rounded 1c at weight 800, body uses Noto Sans, and Noto Sans JP sits in the stack behind it. Astro's Fonts API self-hosts and subsets all three, which comes to five woff2 files, and the Japanese ranges are never fetched on an English page.

The rounded terminals change the tone more than I expected. The old Inter made everything look like software documentation. This reads warmer without going soft.

## Red stays rare

The guide caps red at five percent of any surface. On the blog that means one element, the filled button, and nothing else. The header has no call to action right now, so the red is wired up and currently invisible. Adding a single entry to the navigation actions would paint it. That is a content decision waiting, not a missing style.

## A build is not a screenshot

A passing build says nothing about what a page looks like. Two commands confirmed the code compiled. Neither confirmed the colour.

So I drove the built site in a real browser and read computed styles in both modes, then swept every text element, walked up to the nearest opaque background, and computed the contrast ratio for each pair. Two real problems surfaced.

Article headings were inheriting the body face, so the display font only reached the homepage. A base rule fixed it for every page at once.

Dark code comments sat at three to one against their panel, which is thin for monospace text. Switching the dark syntax theme to the high contrast palette fixed it without touching a single token.

Everything else passed, in both modes, across six page types.

## Rolling it back

The theme landed as one commit with a tag on the commit before it. Ten files changed and none of them are content. If the direction turns out wrong, reset to the tag, rebuild, deploy, and the blog is exactly as it was an hour earlier.

That is the part I care about most. A redesign you cannot undo is a redesign you hesitate to start, and hesitating is how a site ends up three years out of date.
