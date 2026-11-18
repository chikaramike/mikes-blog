---
title: 'Managing GitHub notifications'
publishDate: 2026-11-18T00:00:00Z
kind: permanent
stage: seedling
---

The GitHub inbox is a queue of threads you follow. It is not a todo list. I started treating it as one, and the count stopped meaning anything.

Two things surprised me. Commenting on an issue in someone else's repo subscribes you, so their replies come back to your inbox. That is useful. Merging my own pull request also lands in my inbox, because I authored the thread and a merge is a change to it. That is by design, and it is noise when I am the only person on the repo.

What I do now.

- Triage once. Open, act, mark done.
- Keep the real backlog in three saved searches, `is:open assignee:@me`, `is:open review-requested:@me` and `is:open involves:@me`.
- On repos where I am the only human, set Watch to Custom and Participating only. Replies and review requests still arrive, my own merges do not.
- On busy upstream repos, use Participating and @mentions.
- Mute a thread freely. Unsubscribe from a repo when it stops mattering.

One limit for anyone automating this. A fine-grained personal access token cannot read notifications. The API needs a classic token with the notifications scope, so I am keeping the digest manual for now.

Next I will set Participating only on my own repos and see whether the inbox gets quiet enough to read daily.
