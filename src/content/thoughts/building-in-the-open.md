---
title: Building this site in the open
date: 2026-08-02
description: Why this website lives in a public repository, and how it works.
---

This site is a public Git repository. Every post, every page, every line of CSS — anyone can read it, fork it, or point out that I misspelled something.

That is intentional. A personal site is a small piece of software, and I believe small software is best kept honest by daylight: no build secrets, no hidden CMS database, no mystery. The whole thing is markdown files rendered by [Astro](https://astro.build) and served as static files from Cloudflare Pages.

## How writing works

I write from an admin panel powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms). It looks like any modern editor, but when I hit publish it simply commits a markdown file to this repository. The deploy pipeline notices, rebuilds, and the post is live in about a minute.

No servers to patch. No database to back up. The Git history *is* the archive.

## What lives here

- **Thoughts** — essays and notes, mostly on software.
- **CV** — what I've worked on, kept current.

If you're curious how any of it is put together, the answer is always the same: read the source.
