---
title: 'Design tokens are the styling layer'
publishDate: 2026-10-30T00:00:00Z
kind: permanent
stage: budding
tags:
  - design
  - css
  - astro
---

The old default was to choose a colour while building a component. It felt efficient on the first screen and became expensive by the twentieth, because the choices scattered. Six slightly different greys appear, nobody can say which one is correct, and a rebrand turns into a hunt through every file that ever touched a shade.

Design tokens fix that by moving the decision out of the component and into a named layer. A token is a value with a job. Ground, surface, text, muted text, heading, link, border, accent. The component asks for a role and never learns the hex.

## Three layers, one direction

The pattern that holds up is three layers with a strict direction of travel.

The bottom layer is the raw palette. Petrol is `#093558`, mist is `#DCE5F5`, graphite runs from `#0B0C0F` to `#F5F6F7`. These are facts about the brand and they almost never change.

The middle layer is semantic. `--ground` points at a graphite step. `--heading` points at petrol. `--link` points at the action indigo. This is where the site's intent lives.

The top layer is usage. Components and utilities read the semantic names. Nothing above layer two is allowed to contain a raw value.

The discipline is that changes travel upward only. A rebrand edits the palette. A redesign edits the semantics. A component edit never touches either, which is what keeps a component honest about what it needs.

## Custom properties are the delivery mechanism

CSS custom properties are what make the middle layer switchable at runtime. They inherit, they can be overridden on a subtree, and a single class on the root can swap every value underneath it.

That is what a dark mode should be. Same token names, different values, one class on the `html` element. A second set of names for night mode, like `--color-text-dark`, is the tell that a system is about to fork.

## Tailwind v4 makes it native

The version of this site's stylesheet runs Tailwind v4, where configuration is CSS and the `@theme` block turns tokens into utilities. `--color-link` becomes `text-link`. `--color-hairline` becomes `border-hairline`. The design system and the utility names are the same object, which removes the usual mapping file nobody updates.

There is a second trick worth keeping. Tailwind ships palettes named `gray`, `slate`, `blue`, `indigo`. Re-pointing those names at brand ramps inside `@theme` changes every existing utility at once. The lightest step stays lightest, the darkest stays darkest, so `text-gray-900` and its `dark:bg-slate-800` neighbour both keep their meaning while wearing brand colour. That is how I moved forty components onto a new palette in one afternoon without opening forty files.

Use that trick deliberately. Re-pointing a stock palette is a migration tool, and the semantic names are where the design should end up living.

## What a token system buys you

A rebrand touches one file. A reviewer can answer why a heading is that colour without opening a component. A new page inherits the current design instead of approximating it. And the whole layer becomes checkable, because the values resolve to something a machine can read. I ran a contrast sweep over every text element after the reskin and it found two real problems a visual pass had missed.

## Where tokens do not help

Tokens cannot invent a palette that is not there. The brand blue ramp carries three usable blues, and four homepage cards wanted four hues. Forcing four produced a grey that read as disabled and a petrol that looked wrong beside its neighbours. The fix was a design decision, one chip treatment for all four, not a token.

Names also decay. `--color-blue-500` describes a value and will lie after the next rebrand. `--color-link` describes a job and stays true. If a token's name mentions a colour, it belongs in the palette layer and nowhere above it.

## The test

A practical way to judge any styling setup, tokens or otherwise. Try to change the look of one thing across the whole site. If that means one edit, the system works. If it means a search, the system is still a collection of components that happen to share a file.
