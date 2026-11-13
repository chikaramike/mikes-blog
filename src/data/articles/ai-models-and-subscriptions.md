---
title: 'Which model, which plan: getting the most from AI subscriptions'
publishDate: 2027-02-05T10:00:00Z
draft: true
excerpt: 'Which model to use in each AI harness, how to see your usage, and why I split about $80 across five small plans instead of one $200 plan.'
tags:
  - mikes-io
  - ai
  - tools
sources:
  - https://learn.chatgpt.com/docs/pricing
  - https://benchlm.ai/claude/pricing-plans
  - https://aicatchup.com/news/claude-agent-sdk-monthly-credit-paid-plans
  - https://opencode.ai/docs/go/
  - https://hostinger.com/tutorials/hermes-agent-cost
  - https://dev.to/pederaa/how-to-track-claude-code-usage-in-2026-built-in-commands-ccusage-and-desktop-dashboards-compared-1kk1
  - ../articles/ai-harnesses-explained
  - ../maps/mikes-io-season-1
---

_This is the written companion to Mikes I/O Episode 12. Video link: (add on release day). **Prices, model names, and limits were checked on 2026-11-13.** They change often, so check the linked sources before you buy anything._

In the [companion article on harnesses](../articles/ai-harnesses-explained.md) I split AI tools into three layers: model, harness, and plan. This article is about the last two decisions: which model to run in each harness, and how to pay for it.

## Most plans are metered

"Unlimited" is rare. Most AI plans give you a set amount of work, measured in two ways:

- **A short window**, often 5 hours. Use it up and you wait for the reset.
- **A weekly or monthly cap.** Use that up and you wait days, or pay extra.

Knowing both numbers for each plan is most of the skill.

## Which model in which harness

My defaults as of November 2026:

| Harness                       | Daily default                         | When it needs to think harder | Notes                                                                                                                                                                                                                               |
| ----------------------------- | ------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude Code                   | Sonnet 5.5                            | Opus 5.5                      | Sonnet 5.5 has the higher score on Anthropic's own terminal coding benchmark. I keep Opus for long planning and the hardest 20% of the work. Haiku 5.5 handles quick small jobs.                                                    |
| Codex                         | GPT-6 Luna                            | GPT-6.1 Sol                   | On ChatGPT Plus, the estimate is 350 to 3,000 Luna messages per 5 hours vs 15 to 160 for Sol. I skip GPT-6 Astra for agent work: in Nous Research's HermesIndex it scored lower than Opus 5.5 at more than twice the cost per task. |
| OpenCode or Pi on OpenCode Go | DeepSeek V4.1 Flash                   | GLM-5.3 or Kimi K3            | DeepSeek V4.1 Flash has the largest monthly allowance on Go ($100 of usage) and sits on the cost frontier in HermesIndex.                                                                                                           |
| Hermes                        | A cheap open model                    | Sonnet 5.5 as the critic      | Run routine and scheduled work cheap. Send one hard step, or a review, to a strong model, then switch back.                                                                                                                         |
| Copilot                       | Inline completions                    | n/a                           | For code I am writing myself.                                                                                                                                                                                                       |
| T3 Code, herdr                | Whatever the harness behind them uses |                               | They do not choose models.                                                                                                                                                                                                          |

The pattern is the same everywhere: a cheap model does the volume, and a strong model does the few steps where quality decides the result.

## How to see your usage

| Plan                | Where to look                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude              | `/usage` inside Claude Code (5-hour and weekly bars with reset times), or Settings > Usage on claude.ai                                       |
| ChatGPT / Codex     | `/status` inside the Codex CLI, or the Codex usage page in ChatGPT settings                                                                   |
| OpenCode Go         | The usage view in the OpenCode console. Each model has its own 5-hour, weekly, and monthly limit.                                             |
| Nous Portal         | Your credit balance in the portal. In Hermes, turn on the cost display so each reply shows what it spent.                                     |
| Several coding CLIs | `npx ccusage@latest` reads the logs that Claude Code, Codex, and other CLIs save on your machine and reports cost by day, model, and session. |

Then turn off surprise billing. Anthropic lets you buy extra usage at API rates after your limit, and OpenCode Zen can auto-reload a balance. Both are useful on purpose and expensive by accident. Turn them on only when you decide to.

## One big plan or several small ones

Here is the split stack I run, at the prices listed on 2026-11-13:

| Plan               | Price per month | What it adds                                                                       |
| ------------------ | --------------- | ---------------------------------------------------------------------------------- |
| Claude Pro         | $20             | Claude apps, Claude Code, Opus and Sonnet                                          |
| ChatGPT Plus       | $20             | ChatGPT apps, Codex, GPT-6.x models, Deep Research                                 |
| Nous Portal Plus   | $20             | $22 of credits for 300+ models, plus web search, image, and voice tools for Hermes |
| OpenCode Go        | $10             | Open models for high-volume coding in OpenCode and Pi                              |
| GitHub Copilot Pro | $10             | Completions and chat in VS Code                                                    |
| **Total**          | **about $80**   |                                                                                    |

The single-plan options at the top end:

| Plan         | Price per month | Notes                                                                           |
| ------------ | --------------- | ------------------------------------------------------------------------------- |
| Claude Max   | $100            | 5x Pro usage, plus $100 a month of API credit for the Agent SDK and `claude -p` |
| Claude Ultra | $200            | The plan formerly called Max 20x, with $200 of API credit                       |
| ChatGPT Pro  | from $100       | No 5-hour limit in Codex                                                        |

**Why the split works for me:**

- I get the best model from three labs, plus open models, for less than half of one $200 plan.
- Each plan has its own limit windows on its own clock. When Claude Code hits its 5-hour limit, Codex and OpenCode still have room.
- Routine work runs on cheap open models, so the frontier allowances last longer.

**What it costs in other ways:**

- Five logins, five dashboards, and five bills.
- No single tool at full depth. If you live in one harness all day, you will hit the small plan's ceiling.
- Claude Pro has no separate API credit. Anthropic announced a monthly Agent SDK credit for paid plans in May 2026, then paused it on June 15. As of November 2026, Max and Ultra include API credit and Pro does not, so using Pro inside another harness draws from the same limits as the Claude app.

## My rule for upgrading

Run the split for a month. Every time a limit stops your work, write down the date and the plan. If one plan stops you more than twice a week, upgrade that one plan. Paying for a $100 or $200 plan before you have that list means paying to solve a problem you have not measured.

## Try it

Add two columns to `notes/ai-stack.md` from the [harness article](../articles/ai-harnesses-explained.md): what you pay, and where you check usage. Then find the reset time for the plan you use most.
