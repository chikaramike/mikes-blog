---
title: window-border
publishDate: 2026-11-13
category: Mac setup
description: A macOS menu-bar app that draws a coloured outline around every window, one stable colour per app, so a screen full of windows can be read at a glance.
website: https://github.com/chikaramike/window-border
actionLabel: View the fork
draft: false
tags:
  - mac
  - window-management
resources:
  - title: Upstream project
    url: https://github.com/crazyathlete220-stack/window-border
    type: documentation
  - title: One colour per app
    url: https://mikes.blog/log/one-colour-per-app
    type: article
---

298 lines of Objective-C in a single source file, no dependencies, MIT licensed. It draws one coloured outline per window, with the colour assigned per app and kept stable, so hue does the work a title bar used to.

It reads window bounds and the owning app from `CGWindowList` and nothing else, so it needs no screen recording permission. Each outline is a transparent click-through overlay ordered just above its own window, which keeps the layering honest.

Colours come from a twelve-entry system palette, or from `~/.config/window-border/colors.json` when you want to pin an app, reloadable from the menu without a restart. Open at Login is a menu item, so the terminal is only involved for `make install`.

My fork adds configurable border width, a thicker outline on the frontmost window, a per-app glow radius, and a `"*"` fallback colour for apps that are not listed.
