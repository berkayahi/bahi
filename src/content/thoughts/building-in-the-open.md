---
title: Building this site in the open
date: 2026-08-02
description: How this website works, and why the whole thing is a public repository.
---

This site is a public Git repository. Every post, every page, every line of CSS — anyone can read it, fork it, or point out that I misspelled something.

There's no database and no server. Everything is markdown files rendered to static HTML by [Astro](https://astro.build) and served from Cloudflare. The Git history doubles as the archive.

## How writing works

I write from an admin panel powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms). It looks like any modern editor, but when I hit publish it simply commits a markdown file to the repository. The deploy pipeline notices, rebuilds, and the post is live in about a minute.

Nothing to patch, nothing to back up.

## What lives here

- **Thoughts** — essays and notes, mostly on software.
- **Projects** — things I've made.

If you're curious how any of it is put together: read the source.
