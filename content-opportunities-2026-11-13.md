# Content opportunities from the workspaces, 2026-11-13 (Fri)

Planning document. Not a published page, and not routed by `src/pages`. It records what in the private workspaces could become site content, what each piece should be, and what has to be scrubbed before it goes public.

Surveyed on 2026-11-13 (Fri): `shakti-workspace` (`_AREAS/tech`, `_AREAS/agent`, `_AREAS/writing`, `backlog/tasks`, `daily-plan`), `_meta/docs`, `chikara-content`, `m-w`, and the existing `mikes-blog` collections (`articles`, `notes`, `log`, `tools`, `maps`, `people`).

Rule applied throughout. The private note is the source of the claim. The published piece restates the general lesson and drops every identifier that belongs to Mike's life, employer, machines or accounts.

---

## 1. The two asked for

### 1.1 Every AI window looks the same

**Form.** Note in `src/data/notes/`, then an article once the argument holds.
**Sources.** `_AREAS/tech/mac-window-management.md`, `_AREAS/agent/agent-platforms-landscape.md`, `_AREAS/agent/desktop-terminal-remote-shell.md`, `_AREAS/tech/herdr-pi-setup.md`, `_AREAS/tech/vscode-workspace-setup.md`.
**Working title.** Why every AI app looks like the same window, and what that costs you.

The argument, in the order the notes support it.

- For thirty years software told you where you were. A document window had a title, a project window had a tree, a terminal had a prompt with a hostname. Place was encoded in the frame.
- The current wave of AI clients broke that. Chat, sidebar, model picker. Same three panes in the browser, in the desktop app, in the editor extension. Recolour it and you cannot tell which is which, and worse, you cannot tell what it is pointed at.
- The frame carries less information at exactly the moment the work involves several agents, several folders and several plans at once. The tool with the most state on screen is the one that shows the least.
- What actually restores place, in order of cost. A name you set yourself. A window per project. A visible boundary (the border job, see 1.2). A terminal that prints where you are. A pane manager that keeps the tree visible while the agent works.
- The honest limit. Cosmetics fix recognition, not comprehension. If two sessions are indistinguishable, the problem is the folder layout and the naming, not the theme.

**Not in it.** Provider and model routing, bot names, subscription costs, hostnames, ports, repository names, anything about how the workspace is actually organised by name.

### 1.2 One colour per app, and why I forked a 298-line app

**Form.** `log` entry, plus a `tools/window-border.md` entry. Candidate for an article once the essay at 1.1 exists to link to.
**Sources.** `github.com/chikaramike/window-border` (fork of `crazyathlete220-stack/window-border`), inspected 2026-11-13 (Fri) at `e1e8b6e` plus three unmerged feature branches. Background in `_AREAS/tech/mac-window-management.md`.
**Angle.** Not a tool recommendation. A story about the difference between one coloured outline for the focused window and one stable colour per app, and how small that difference is to describe and how large it is to use.

What actually happened, from the repo.

- The app is 298 lines of Objective-C in a single `main.m`, a `Makefile`, an `Info.plist` and an icon. MIT. Built with `make app`, installed with `make install`.
- The insight is what it does not ask for. `CGWindowList` reports window bounds and the owning app, so it needs no screen recording permission, which is the usual toll for anything that draws over other windows.
- Each outlined window gets a transparent click-through overlay of its own, ordered just above its target, so borders stack with the windows instead of floating above everything. One override matters more than it looks. `constrainFrameRect:toScreen:` is stubbed out to return the frame unchanged, because AppKit otherwise nudges a titlebar-less window to keep it on screen and the border lands a few points off.
- Colours come from a system palette in order, then a per-app map at `~/.config/window-border/colors.json`, reloaded from the menu.
- Two forks' worth of work sits on unmerged branches, all dated 2026-11-12, all from Mike. Configurable `width`, a thicker outline on the frontmost window (`activeWidth`), a per-app `glow` radius where the glow grows outward so it never covers content, and a `"*"` fallback key so unlisted apps stop getting palette colours. That is the actual finding. One point of outline is not enough to find the active window at a glance, so the honest version of "it works" was "it works better at four".
- A detail worth a line in any write-up. The README says the timer runs at about 20 Hz. The code says `1.0 / 60.0` with a 60 Hz comment. Nobody is wrong on purpose, and it is the sort of thing that only surfaces when you read the source you installed.

**Sensitivity.** Low. The repo is public, MIT, and the upstream is someone else's. Three things to keep straight. Name the upstream author and link the original rather than implying authorship of the whole app. Do not claim the improvements landed upstream, because they are on Mike's branches and the fork's `main` is identical to upstream at `e1e8b6e`. Keep the config path generic and drop nothing else. If the post says why the border was wanted, it should point at the AI window problem and not at specific agents or machines.

---

## 2. Setups and workflows worth publishing

| #    | Working title                                         | Form    | Source                                                                                             | Angle and what is missing                                                                                                                                                                                      |
| ---- | ----------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1  | One folder, three apps                                | log     | `_AREAS/tech/obsidian-git-sync-workflow.md`                                                        | The vault is the repo is the editor folder. One directory, three views, no sync tool. Already written; needs the private absolute path replaced with `~/Developer`.                                            |
| 2.2  | Workspaces, branches, worktrees, repos                | note    | `_AREAS/tech/workspaces-and-git-worktrees.md`                                                      | Four words used as one. Strongest evergreen item found. The "organises your attention versus organises your code" line is already the thesis.                                                                  |
| 2.3  | A terminal setup that reads well                      | log     | `_AREAS/tech/mac-terminal-setup.md`, `dev/vscode/vscode-tokyo-night-setup.md`                      | Ghostty, Starship, Catppuccin, the six modern replacements (`eza`, `bat`, `zoxide`, `fzf`). Almost entirely publishable as is. Judge call: is a theme post useful, or filler.                                  |
| 2.4  | Reading a dependency before you install it            | article | `_AREAS/tech/backlog-md-security-review-2026-11-10.md`, `backlog-md.md`                            | The method, not the verdict. What was checked, what a browser-mode request validation gap actually means, and why a CLI with a local files are a different risk from a server on a port. Publishable and rare. |
| 2.5  | Dates that sort themselves                            | note    | `_AREAS/tech/ISO 8601.md`, `_AREAS/tech/Tag Taxonomy.md`                                           | Small, useful. `YYYY-MM-DD`, why a date inside a filename should never be `Nov 13`. The note is currently markup experiments rather than prose, so it needs rewriting, not lifting.                            |
| 2.6  | Commit messages that say why                          | note    | `_AREAS/tech/git-best-practices.md`                                                                | Two halves. The no-reply email and signed commits for privacy, then `type(scope): subject` and why `note` is not `feat`.                                                                                       |
| 2.7  | Your files are on a server, your app is just a window | article | `_AREAS/agent/desktop-terminal-remote-shell.md`, `_AREAS/tech/hermes-vps-tailscale-guide.md`       | The best concept-level piece in the agent folder. The pane is a plain shell, it runs where the app runs, and an SSH connection changes the answer. Teaches architecture without teaching Mike's architecture.  |
| 2.8  | One writer per file                                   | note    | `_AREAS/agent/multi-agent-coordination.md`, `_AREAS/agent/bot-audit-2026-11-11.md`                 | Runs several agents against one repo without collisions. The rules are portable and already written. The bot roster is not.                                                                                    |
| 2.9  | Deterministic or agentic                              | article | `_AREAS/agent/agent-platforms-landscape.md`                                                        | When to reach for a workflow runner and when to reach for an agent, with the platform classes named and the pricing shapes described. Follows on from the existing harnesses article without repeating it.     |
| 2.10 | Panes instead of windows                              | log     | `_AREAS/tech/herdr-pi-setup.md`, `viewing-files-in-herdr.md`                                       | One narrow idea, that a file open beside the agent beats a file in another window. Judge call, since the tool is obscure and the post argues for a specific shell.                                             |
| 2.11 | Colour is a decision, not a decoration                | note    | `_AREAS/tech/vscode-tokyo-night-setup.md`, `src/data/notes/design-tokens-are-the-styling-layer.md` | Border colours per pane, active versus inactive, and why the same reasoning is the design token note one level up. Pairs with 1.2.                                                                             |
| 2.12 | Learning to code without scattering                   | article | `_AREAS/tech/coding-path.md`                                                                       | Already promised in the season map as a coming episode. The note exists and says the hard part out loud, one spine course at a time. Write it when the episode is scheduled.                                   |

Tool entries that the site does not have yet and that the notes already justify: `window-border`, `ghostty`, `starship`, `backlog-md`, `herdr`. Lower value but cheap, and they keep the Toolkit matching what the posts mention.

---

## 3. Sensitivity triage

**Publish as is after the scrub below.** The window-border piece, the worktree note, the ISO date note, the commit message note, the dependency review, the terminal setup, the "one folder three apps" log.

**Publish the lesson, drop the instance.** The AI windows essay, the remote shell architecture piece, the one-writer-one-file note, the deterministic-or-agentic piece. These are the valuable ones and the ones that leak by accident.

**Never publish.** Chikara financials, member counts, staff names, contracts, the staff tracker, the rent dispute outcome, the family and financing material (pregnancy, birth plans, tax residence, the property decision), residence status, the private bot roster and model routing, home network and NAS topology, VPS provider, IPs, ports, tailnet names, dashboard URLs, workspace and Drive account names, private repository and org names, and any path containing a real username.

**Mechanical scrub list before any of this is copied into `src/data`.**

1. `/Users/<name>/...`, `/opt/data/...`, `/Developer/...` become `~/Developer/...` or a generic placeholder.
2. Hostnames, IP addresses, ports, SSH aliases and tunnel names all go. Say "a small server", not which one.
3. Bot, profile and agent names go. Say "a second agent" or "an orchestrator".
4. Provider and model names stay only where the existing published article already carries them, and only if the claim is about the tool, not about what is being run.
5. Prices stay if they are public list prices and are dated. Anything describing what Mike personally pays gets a "checked on this date" line or gets cut.
6. Gym material of any kind does not enter the agent or tech pieces. Different audience, different workspace.
7. No screenshots of a real desktop. Redo them on a clean desktop or crop to a generic window.

---

## 4. Recommended order

1. **The window-border log plus tool entry.** The repo supplies the detail, the post has no rival on the site, and it carries the concrete case for the essay that follows. Add a line about the README-versus-code timer mismatch because it is the kind of detail that proves someone read the source.
2. **Every AI window looks the same.** Short note first, four paragraphs, with the border post as the concrete fix. Promote to an article during the season.
3. **Reading a dependency before you install it.** Highest credibility per word, and it is the one piece here that a reader cannot get from a vendor blog.
4. **Workspaces, branches, worktrees.** Evergreen, feeds the Git episode later in the season.

Everything else waits. Twelve topics attempted at once is the scattering the coding-path note warns about.

---

## 5. State of the tree when this was written

`mikes-blog` on `main`. One unrelated local change (`src/data/notes/writing-waterway.md`) was already present and is untouched by this work, and it is deliberately not in the commit.

Shipped in the same pass. `src/data/log/one-colour-per-app.md` (the window-border log entry) and `src/data/tools/window-border.md` (the Toolkit entry) both build clean and render. They are not marked `draft`, matching the other log and tool entries, and the site still carries the launch gate that keeps it out of search results until the domain and TASK-0037 are settled.

---

## 6. The knowledge base was wrong about this

Corrected in `shakti-workspace` on 2026-11-13 (Fri), commit alongside this document.

- `_AREAS/tech/mac-window-management.md` opened with "Decision, 2026-11-08: outlines belong to JankyBorders (`borders`). Hammerspoon stays on the shelf." That decision never took effect. It now leads with `window-border`, keeps JankyBorders as the documented alternative that lost, and records the three unmerged branches and the README timer mismatch.
- `backlog/tasks/task-0034` was retitled from the JankyBorders plan to the window-border work, moved to `In Progress`, and given acceptance criteria that describe the real open loop. Four of eight are already met.
- `DECISIONS.md` carries a 2026-11-13 (Fri) entry withdrawing the 2026-11-08 tool choice and explaining why.

