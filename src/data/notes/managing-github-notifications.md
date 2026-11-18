---
title: 'Managing GitHub notifications'
publishDate: 2026-11-18T00:00:00Z
kind: permanent
stage: seedling
---

The GitHub inbox is a queue of threads you follow. It is not a todo list. I started treating it as one, and the count stopped meaning anything.

Two things surprised me. Commenting on an issue in someone else's repo subscribes you, so their replies come back to your inbox. That is useful. Merging my own pull request also lands in my inbox, because I authored the thread and a merge is a change to it. That is by design, and the Watch setting does not change it.

What I do now.

- Triage once. Open, act, mark done.
- Keep the real backlog in three saved searches, `is:open assignee:@me`, `is:open review-requested:@me` and `is:open involves:@me`.
- Leave Watch on Participating and @mentions. It does not hide my own merges, because I am a participant in threads I opened.
- Save an inbox filter that excludes threads where I am the author, `-reason:author`, or mark merged threads Done in bulk.
- Mute a thread freely. Unsubscribe from a repo when it stops mattering.

One limit for anyone automating this. A fine-grained personal access token cannot read notifications. The API needs a classic token with the notifications scope, so I am keeping the digest manual for now.

Next I will save the author filter and see whether the inbox gets quiet enough to read daily.
