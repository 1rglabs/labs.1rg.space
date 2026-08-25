---
title: "Hello, world"
date: 2026-08-25
tag: "Meta"
excerpt: "A sample post demonstrating the blog pipeline. Posts are markdown files in src/content/blog — delete this one before shipping, or set draft: true to hide it."
draft: true
---

This is a sample post. It exists to demonstrate the blog pipeline: drop a
markdown file in `src/content/blog/`, give it the frontmatter above, and it
shows up in the "Latest Insights" section on the homepage with its own page
at `/blog/<filename>/`.

## What you get

- Markdown with full formatting: headings, lists, links, code blocks
- Frontmatter validated at build time (a missing title fails the build, not production)
- Posts sorted by date automatically
- `draft: true` hides a post everywhere

```bash
# a new post is just:
touch src/content/blog/why-we-chose-boring-technology.md
```

Delete this file (or set `draft: true`) before the first real deploy.
