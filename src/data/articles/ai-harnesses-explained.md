---
title: 'AI harnesses explained: model, harness, plan'
publishDate: 2027-02-05T10:00:00Z
draft: true
excerpt: 'Claude Code, Codex, OpenCode, Pi, Hermes, T3 Code, and herdr sound like the same kind of tool. They sit in three different layers.'
tags:
  - mikes-io
  - ai
  - tools
sources:
  - https://www.developersdigest.tech/blog/t3-code-open-source-gui-claude-code-codex-opencode-2026
  - https://betterstack.com/community/guides/ai/herdr-ai-agent/
  - https://earendil.com/posts/pi-1-0/
  - https://hostinger.com/tutorials/hermes-agent-cost
  - https://opencode.ai/docs/go/
  - ../articles/ai-models-and-subscriptions
  - ../articles/terminal-shell-cli-first-ten-minutes
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 11. Video link: (add on release day). Tool details checked 2026-11-13._

This year I set up Claude Code, Codex, OpenCode, Pi, Hermes, T3 Code, and herdr. The names make them sound like seven versions of the same thing. They are not. Once I sorted them into layers, choosing between them got much easier.

In [Episode 2](../articles/terminal-shell-cli-first-ten-minutes.md) we split "the terminal" into three layers: the window, the shell, and the general idea of a command-line interface. AI tools need the same treatment.

## Three layers

- **Model:** the part that reads your words and predicts a response. Claude Sonnet 5.5, GPT-6.1 Sol, and DeepSeek V4.1 Flash are models. A model on its own cannot open a file or run a command.
- **Harness:** the program around the model. It gives the model tools (read files, run the terminal, search the web) and runs the loop: think, act, check the result, repeat. Claude Code and OpenCode are harnesses.
- **Plan (or provider):** who you pay for the model's work, and how much work you get. Claude Pro, ChatGPT Plus, and OpenCode Go are plans.

Most confusion comes from tools that bundle two or three layers under one name.

## Box 1: the labs' own apps

| Tool | Models | You pay through |
|---|---|---|
| Claude (chat, Cowork, Claude Code) | Claude models only | A Claude plan or the Anthropic API |
| ChatGPT (chat, Codex) | OpenAI models only | A ChatGPT plan or the OpenAI API |

These are the most polished. Each is built by the company that makes the model, so new features show up here first. The trade-off is that you get one company's models, and your limits come from one company's plan.

## Box 2: open harnesses that take any model

| Tool | What it is good at | License |
|---|---|---|
| OpenCode | A coding agent in the terminal. Works with many providers, including its own low-cost OpenCode Go plan. | Open source (MIT) |
| Pi | A small, extensible agent harness from Earendil. Easy to shape with extensions. | MIT |
| Hermes Agent | An always-on assistant from Nous Research: memory, skills that improve, scheduled jobs, and messaging apps like Telegram as front doors. | MIT |

These bring the harness and let you choose the model. That is the reason to use them: you can run a cheap open model for routine work and switch to a frontier model for the hard step, inside the same tool.

## Box 3: tools that run other harnesses

| Tool | What it does |
|---|---|
| T3 Code | A desktop, web, and mobile app that drives Claude Code, Codex, OpenCode, and others. It uses the logins you already have and brings no models of its own. |
| herdr | A terminal multiplexer built for agents. It runs each agent in a pane and shows which one is working, blocked, or idle. |

The question that sorts these out is: if I remove every agent behind it, does it still do anything with AI? For T3 Code and herdr the answer is no. They make several agents easier to run and watch. They are not agents themselves.

GitHub Copilot sits a little apart. It is a harness built into the editor, and I use it while I write code myself.

## How I use them

This is a picture of my setup, not a recommendation:

- **Hermes** runs on a small server for planning, research, and scheduled jobs. I talk to it from my phone.
- **OpenCode** and **Pi** run inside **herdr** for coding sessions, often more than one at a time.
- **T3 Code** lets me check on a Codex session from my phone.
- **Claude** is my writing desk.
- **Copilot** is on in VS Code while I practice, so I still write the code.

It took me months to get here, and I changed tools more often than I needed to. You do not need all of this.

## Where to start

1. Start in Box 1 with the app for a plan you already pay for.
2. Move to Box 2 when you want a different model or a lower cost.
3. Add Box 3 only when you run more than one agent at a time and lose track of them.

## Try it

Make `notes/ai-stack.md` in your practice folder with three columns: model, harness, plan. Put every AI tool you use into one row. If a tool does not fit in the harness column, it probably belongs in Box 3.

The other half of this topic is which model to use in each harness and how to pay for it without waste. That is in the companion article, [Which model, which plan](../articles/ai-models-and-subscriptions.md).
