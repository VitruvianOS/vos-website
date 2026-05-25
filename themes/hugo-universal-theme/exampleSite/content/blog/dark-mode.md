+++
title = "Designing a content-first dark mode (it's not just inverting hex codes)"
date = 2026-05-02
authors = ["Daniel Reyes"]
categories = ["Design"]
tags = ["dark-mode", "design"]
+++

Most "dark mode" implementations are CSS filters in disguise: take the light palette, invert it, ship. The result is grey-blue contrast soup that nobody enjoys reading at night.

Universal Reborn does it differently:

1. **Warm neutrals**, not blue-greys. Backgrounds sit at `#0f1318` and `#161b22`, slightly warmer than your average dark theme.
2. **The accent colour survives the switch**. Teal at `#38a7bb` works on both backgrounds without retinting.
3. **Cards still have hierarchy**. Borders, soft shadows, and accent-tinted hover states do the same job as in light mode.

The toggle persists to `localStorage` and respects `prefers-color-scheme` on first visit.
