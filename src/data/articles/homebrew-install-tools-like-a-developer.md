---
title: 'Homebrew: install tools like a developer'
publishDate: 2026-12-11T10:00:00Z
draft: true
excerpt: 'Most developer tools are not in the App Store. A package manager installs them, tracks what they need, and keeps them updated.'
tags:
  - mikes-io
  - fundamentals
  - terminal
  - macos
sources:
  - https://brew.sh/
  - https://docs.brew.sh/FAQ
  - ../articles/terminal-shell-cli-first-ten-minutes
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 3. Video link: (add on release day)._

Most of the tools developers use are not in the App Store. Git, Python, Node, and hundreds of small command-line utilities come from a **package manager** instead. On a Mac, the one most people start with is Homebrew.

## What a package manager does

Tools depend on other tools. Install them by hand and you end up with files in places you cannot remember and versions you cannot update. A package manager solves that. In one sentence: it is an app store for command-line tools that also tracks what each tool needs.

## Step 1: Apple's developer tools

Before Homebrew, install Apple's Command Line Tools. They include Git and the compilers that other tools need to build.

```sh
xcode-select --install
```

A window opens and asks to install. Accept it and wait. If it says the tools are already installed, you are done with this step.

## Step 2: install Homebrew

Go to [brew.sh](https://brew.sh/) and copy the install command from the front page. Paste it into the terminal and press Enter.

Before you paste, read it. It downloads a script from Homebrew's GitHub and runs it. That is a habit worth building now: do not paste a command you cannot explain at least in general terms.

At the end, Homebrew prints a **Next steps** section. On Apple Silicon Macs it asks you to run two commands that add Homebrew to your shell's settings file. Run them. They add a line to `~/.zprofile`, which is one of the hidden settings files from [Episode 1](../articles/where-your-files-actually-live.md). This is what lets your shell find programs installed in `/opt/homebrew`.

Close the terminal window and open a new one so the change takes effect.

## Step 3: install your first tool

```sh
brew install tree
tree ~/Developer/mikes-io-practice
```

`tree` draws a folder and everything inside it as a tree. After two episodes of talking about folder trees, now you can see one.

## The commands you will use most

```sh
brew install <name>     # install a tool
brew list               # what is installed
brew upgrade            # update everything
brew uninstall <name>   # remove a tool
brew doctor             # check for problems
```

## Formula or cask

Homebrew has two kinds of packages. A **formula** is a command-line tool, like `tree` or `git`. A **cask** is a regular Mac app with a window, like a browser or an editor. Casks use one extra word:

```sh
brew install --cask visual-studio-code
```

That is how we will install our editor in Episode 4.

## Check your work

```sh
brew doctor
```

You want to see `Your system is ready to brew.` If you see warnings instead, read the first one. Most of them include the exact command that fixes the problem. If `brew` is "command not found," the Next steps commands did not run. Go back to the end of Step 2.

Next week: VS Code, the workbench where we will spend most of our time from here on.
