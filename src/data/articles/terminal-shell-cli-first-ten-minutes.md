---
title: 'Terminal, shell, CLI: your first ten minutes'
publishDate: 2026-12-04T10:00:00Z
draft: true
excerpt: 'Three words people mix up, and six commands that let you move around your Mac without the mouse.'
tags:
  - mikes-io
  - fundamentals
  - terminal
  - macos
sources:
  - https://support.apple.com/guide/terminal/welcome/mac
  - ../articles/where-your-files-actually-live
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 2. Video link: (add on release day)._

The first time I opened a terminal, I did not know what I was looking at. A dark window, a line of text I could not read, and a blinking cursor waiting for me to do something. That is a normal first reaction. Ten minutes of the right practice fixes it.

## Three words, three layers

People use these three words as if they mean the same thing. They do not.

- **Terminal:** the window. On a Mac it is the Terminal app (or another one like iTerm2 or Ghostty). It draws text and passes your typing along. It does not run your commands.
- **Shell:** the program inside the window that reads your commands and runs them. On a Mac the default shell is **zsh**. On most Linux servers it is **bash**. For everything in this article they behave the same.
- **CLI (command-line interface):** the general idea of talking to a program with text. The shell is a CLI. So are `git`, `npm`, and `python3`.

In one line: the terminal is the window, the shell is the interpreter running in it, and CLI is the name for this whole style of working.

## Read the prompt

Open Terminal (Command + Space, type "Terminal"). The line before the cursor is the **prompt**. It usually shows your user name, your computer's name, and the folder you are in. When it shows `~`, you are in your home folder. That is the same `~` from [Episode 1](../articles/where-your-files-actually-live.md).

## Six commands

```sh
pwd                 # print working directory: where am I?
ls                  # list what is here
ls -la              # list everything, including hidden files, with details
cd Developer        # change directory: go into a folder
cd ..               # go up one folder
cd ~                # go home from anywhere
```

Then two commands that make things:

```sh
mkdir notes         # make a folder
touch notes/day-01.md   # make an empty file
```

And one that connects the terminal back to what you already know:

```sh
open .              # open the current folder in Finder
```

The `.` means "the folder I am in now." Finder and the terminal show the same folder. They are two views of the same tree.

## Two habits that save the most typing

**Tab completion.** Type the first few letters of a folder name and press Tab. The shell finishes it for you. If it does not, there is either no match or more than one. Press Tab twice to see the options.

**The up arrow.** It brings back your last command. Press it again to go further back. Most of the time, the command you need next is one you already typed.

## The mistake everyone makes once

Try this with a folder that has a space in its name:

```sh
cd My Folder
```

It fails. The shell reads the space as the end of one thing and the start of the next, so it looks for a folder called `My`. You can fix it with quotes (`cd "My Folder"`) or let Tab completion add a backslash for you. The better fix is the one from Episode 1: name folders with hyphens.

## Try it

```sh
cd ~/Developer/mikes-io-practice
mkdir notes
touch notes/day-01.md
ls notes
open .
```

## Check your work

`ls notes` should print `day-01.md`, and the Finder window that opens should show the `notes` folder with the same file inside. If `cd` says "no such file or directory," run `pwd`, read the path, and compare it to where you expected to be.

Next week we install Homebrew, the tool most Mac developers use to install every other tool.
