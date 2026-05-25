+++
title = "How we cut 380kb from the homepage without losing a feature"
date = 2026-05-14
authors = ["Maya Okafor"]
categories = ["Release"]
tags = ["performance", "v3"]
+++

The original Universal theme shipped 11 stylesheets, three JavaScript libraries, and a webfont weight nobody used. Here's what stayed, what got cut, and why your readers will notice.

## What we dropped

- Owl Carousel (~28kb) — replaced with a 90-line vanilla slider
- Bootstrap 3 grid (~120kb) — replaced with CSS grid + a 12-column layout
- jQuery (~85kb) — vendored only for the original carousel; gone with it
- animate.css (~58kb) — handful of keyframes now live in `front.js`
- 3 unused Roboto weights (~76kb)

## What we kept

- Roboto (with display swap)
- Font Awesome 6 — same icons your data files already reference
- The full Site.Params schema — your `config.toml` doesn't change

The result: one stylesheet, one tiny script, no framework lock-in.
