---
title: 'One colour per app'
publishDate: 2026-11-13T00:00:00Z
summary: 'I wanted to tell a dozen windows apart at a glance, so I ended up forking a small menu-bar app and giving every app its own outline colour.'
draft: false
tags:
  - mac
  - tools
  - setup
---

Half the windows on my screen are now the same window. Same sidebar, same composer, same empty space where a document would be. Three of them are different tools pointed at different folders, and at a glance they are interchangeable.

The cheap fix is a border. Not the kind a window manager draws, where the outline marks which window has focus. I wanted the other thing. Every window wearing a colour that belongs to its app, so position and hue together tell me what I am looking at before I read a single word.

I found a small app that already worked that way and then spent an evening making it work better, which is a fair description of most of my setup notes.

## What the app gets right

`window-border` is a macOS menu-bar app, MIT licensed, 298 lines of Objective-C in one file. It is a fork of a fork's worth of small decisions that all line up.

The first is what it refuses to ask for. It reads window bounds and the owning app from `CGWindowList`, which needs no screen recording permission. Anything that draws over other windows usually pays that toll, and I would rather have a coloured rectangle than a permanent screen capture entitlement.

The second is how it draws. Each target window gets a transparent, click-through overlay of its own, ordered just above that window. The borders stack with the windows instead of floating in a layer above everything, so a full-screen app still covers its neighbours properly.

The third is the boring one that made me trust the code. The overlay window class overrides `constrainFrameRect:toScreen:` and returns the frame untouched. AppKit's default behaviour is to nudge a window with no title bar back onto the screen, which would put every outline a few points off the thing it is supposed to outline. Somebody hit that bug, understood it, and wrote one method to stop it.

## One point of outline is not enough

The stock border is one point wide, which is enough to know a window exists and not enough to find the active one. So the fork has a `settings.json` with a `width` and an `activeWidth`, the second one applying only to the frontmost window.

Two details in that are worth copying. Both are capped, at 20 points, because a config file is not a promise that a value makes sense. And extra thickness grows outward from the window edge rather than centring on it, so a thick border never creeps over the content. The inner point stays exactly where it was, and the rest of the width pays for itself in desk space.

The same reasoning gave the other two branches. A per-app `glow` radius for terminal panes that sit side by side and need a softer cue than a hard line, and a `"*"` key in the colour map so unlisted apps get a colour I chose instead of the next one in an arbitrary palette.

None of this is glamorous. All of it came from using the thing for a week and noticing what was still hard.

## The detail that proves someone read the source

The README says the geometry timer runs at about 20 Hz. The source says `kTick = 1.0 / 60.0`, with a comment reading 60 Hz. Nobody is lying. Someone changed the constant and did not update the sentence, which is how nearly every stale document happens.

I only found it because I wanted to know what the polling cost was before I installed something with a timer in it. Reading the 298 lines took less time than reading a vendor's feature page.

## Where a border stops helping

A colour tells you which window, not what is in it. If two sessions of the same tool are open on two different projects, they get the same colour, and the border is useless. That is a folder and naming problem, and the fix is a window title I set myself or one window per project.

The border solves recognition. Comprehension still comes from how the work is organised, and no amount of outline solves that.

The app itself is in the Toolkit, with the fork and the upstream both linked, so the credit lands where it belongs.
