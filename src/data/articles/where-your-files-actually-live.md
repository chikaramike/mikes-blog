---
title: 'Where your files actually live'
publishDate: 2026-11-27T10:00:00Z
draft: true
excerpt: 'Every tech tutorial assumes you can answer one question: where is this file? Here is how to answer it in one line on a Mac.'
tags:
  - mikes-io
  - fundamentals
  - macos
sources:
  - https://support.apple.com/guide/mac-help/welcome/mac
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 1. Video link: (add on release day)._

When I started learning to code as an adult, the hard parts were not what slowed me down. The basics were. A tutorial would say "open your project folder" or "run this from the root of the repo," and I would stop and wonder which folder it meant. The instructions assumed a skill nobody had taught me.

That skill is reading a file path. It is the first lesson on Mikes I/O because every tool after it (the terminal, Git, Python, even AI coding assistants) expects you to have it.

## A file is named data

A file is a piece of data with a name. The part of the name after the dot is the extension: `.png` for an image, `.txt` for plain text, `.md` for Markdown, `.py` for Python. The extension tells the computer, and every app, what kind of data is inside.

Finder hides extensions by default. Turn them on: **Finder > Settings > Advanced > Show all filename extensions**. Developers want to see the full name, every time.

## Folders make a tree

A folder holds files, and it can hold other folders. Put folders inside folders and you get a tree: one folder at the top, branches below it, files at the ends.

Desktop, Documents, and Downloads feel like separate places. They are not. They are three folders inside one folder, your home folder.

## A path is an address

A path is the address of a file in that tree. Read it left to right, like directions:

```text
/Users/mike/Documents/report.pdf
```

Start at the top of the tree (the first `/`). Go into `Users`, then `mike`, then `Documents`. The file is `report.pdf`. Every slash means "one folder deeper."

The home folder has a shortcut, the tilde. On my Mac, `~/Documents` and `/Users/mike/Documents` are the same place. You will see `~` in almost every tutorial from here on.

This works the same way on Linux and on web servers. Windows uses backslashes, but the idea does not change.

## Four Finder shortcuts that make paths visible

| Action                  | How                                             |
| ----------------------- | ----------------------------------------------- |
| Show where you are      | View > Show Path Bar                            |
| Copy a file's full path | Select it, then Option + Command + C            |
| Jump to a path          | Command + Shift + G, type the path, press Enter |
| Show hidden files       | Command + Shift + . (period)                    |

Hidden files start with a dot, like `.zshrc`. They are mostly settings. Tools keep their configuration there so it does not get deleted by accident. Look, but do not delete anything yet.

## Try it: make the practice folder

Every episode in Season 1 adds to one folder. Create it now:

1. In Finder, press Command + Shift + H to open your home folder.
2. Press Command + Shift + N and name the new folder `Developer`.
3. Inside `Developer`, create `mikes-io-practice`.

Use lowercase letters and hyphens, not spaces. In Episode 2 we will type paths in the terminal, and spaces cause problems there.

## Check your work

Select `mikes-io-practice`, press Option + Command + C, and paste the result anywhere. You should see:

```text
/Users/your-name/Developer/mikes-io-practice
```

If you see that, you have done the whole lesson: you made a folder and proved exactly where it lives. If the path looks different, read it left to right and find the step that went into the wrong folder.

Next week: the terminal. The first thing it shows you is a path, and now you can read one.
