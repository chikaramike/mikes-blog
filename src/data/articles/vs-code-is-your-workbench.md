---
title: 'VS Code is your workbench'
publishDate: 2026-12-18T10:00:00Z
draft: true
excerpt: 'Open a folder, not a file. Use the built-in terminal. Install one extension. That is the whole setup for now.'
tags:
  - mikes-io
  - fundamentals
  - vscode
sources:
  - https://code.visualstudio.com/docs/setup/mac
  - ../tools/visual-studio-code
  - ../articles/homebrew-install-tools-like-a-developer
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 4. Video link: (add on release day)._

A text editor is where you will spend most of your time from here on. Visual Studio Code (VS Code) is free, runs on every major system, and is what I use for this site, my notes, and my code. Set it up once with a few good habits and every later lesson gets easier.

## Why not Word or Pages

Word processors save hidden formatting with your text: fonts, sizes, layout. Code and Markdown need plain text, exactly the characters you typed and nothing else. An editor gives you that.

## Install

With Homebrew from [Episode 3](../articles/homebrew-install-tools-like-a-developer.md):

```sh
brew install --cask visual-studio-code
```

Or download it from [code.visualstudio.com](https://code.visualstudio.com/).

## Open a folder, not a file

This is the habit that matters most. Use **File > Open Folder** and choose `~/Developer/mikes-io-practice`. The Explorer panel on the left now shows the same tree you saw in Finder and with the `tree` command. A project is a folder, so the editor should open the folder.

## The Command Palette

If you remember one shortcut, make it this one: **Command + Shift + P**. It opens a search box for every command VS Code has. You do not need to memorize menus. Type what you want to do.

Use it now to set up the `code` command. Open the palette, type `shell command`, and choose **Shell Command: Install 'code' command in PATH**. After that, from any folder in the terminal:

```sh
code .
```

opens that folder in VS Code. The `.` means "this folder," the same as `open .` in Episode 2.

## The built-in terminal

Press **Control + `** (the backtick key, above Tab). A terminal opens at the bottom of the window, already in your project folder. It is the same shell with the same commands. You no longer need to switch windows to run something.

## Two settings

- **Auto Save:** File > Auto Save. One less thing to forget.
- **Font size:** Command + = to zoom in. Make it large enough that you are not leaning forward.

## One extension

Open the Extensions panel (Command + Shift + X), search for **Python**, and install the one published by Microsoft. That is all for today. Extensions are useful, and it is easy to install twenty in an afternoon and then not know which one is causing a problem. Add them one at a time, when you have a reason.

## Try it

1. In the built-in terminal, run `touch README.md`.
2. Click `README.md` in the Explorer and type one line: `# Mikes I/O practice`.

## Check your work

The file should appear in three places: the VS Code Explorer, the output of `ls` in the terminal, and Finder. Three views, one folder. If it only shows up in one place, check the path in the terminal with `pwd`.

Next week we fill that README with Markdown, the plain text format the rest of the season is written in.
