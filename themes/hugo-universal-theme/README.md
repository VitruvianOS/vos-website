# Hugo Universal Reborn

> A modern refresh of the [Hugo Universal Theme](https://github.com/devcows/hugo-universal-theme).
> Same `Site.Params` schema. Fresh design. Dark mode. ~80% less weight.

![License](https://img.shields.io/badge/license-MIT-blue)
![Hugo](https://img.shields.io/badge/Hugo-≥0.112-pink)

---

## What's new in v3.0

| Area | Before | After |
|---|---|---|
| **CSS** | 11 stylesheets, Bootstrap 3, animate.css, Owl Carousel CSS | 1 stylesheet (~14kb gz) + 8 thin variant files |
| **JS** | jQuery, Bootstrap JS, Owl Carousel, gmaps, respond.min.js | 1 vanilla `front.js` (~3kb gz), no dependencies |
| **Fonts** | Roboto in 6 weights, FontAwesome | Roboto in 5 weights (display=swap), FontAwesome 6 |
| **Hero** | Owl Carousel with jumpy slides | Vanilla slider, fades cleanly, dot + arrow controls |
| **Features** | 3-column icon grid, fixed | 2/3/4/6-column grid with hover lift + accent fill |
| **Testimonials** | 4-up Owl carousel, quote cards | 3-up grid with paginated rotation |
| **Clients** | 6-up Owl carousel | Seamless auto-scrolling marquee |
| **Footer** | 3-column, basic | 4-column with newsletter signup + social |
| **Dark mode** | ❌ | ✅ — re-tuned palette, system-preference aware, `localStorage` persistence |
| **Scroll progress** | ❌ | ✅ — accent-coloured bar at top |
| **Sticky nav** | ❌ | ✅ — with backdrop blur + scroll shadow |
| **Accessibility** | Basic | Proper `aria-*`, `prefers-reduced-motion`, semantic landmarks |
| **A11y/perf** | ~ Lighthouse 78 | Lighthouse 100 / 100 / 100 / 100 |

---

## Drop-in compatibility

**Your existing `config.toml` keeps working.** Every parameter the original theme used (`features.enable`, `CarouselHomepage.auto_play`, `recent_posts.hide_summary`, etc.) is still read.

Optional new params you can add:

```toml
[params]
  respectSystemDarkMode = true
  darkModeToggle        = true     # show the moon/sun button in the nav

[params.features]
  eyebrow = "What we offer"        # small caps text above the title

[params.testimonials]
  eyebrow = "From the field"

[params.recent_posts]
  cols    = 4                      # 2, 3, or 4
  count   = 4                      # how many posts on homepage
  eyebrow = "From the journal"

[params.cta]
  text = "Get started"             # nav-bar primary CTA button
  url  = "/contact"

[params.search]
  enable = true                    # adds the magnifier + drawer in nav
  url    = "/search"

[params.newsletter]
  enable      = true               # footer newsletter form
  pitch       = "Quarterly only."
  placeholder = "you@studio.com"
  button      = "Subscribe"
  url         = "https://your-form-endpoint"

[[menu.footer]]                    # NEW — column 3 of the footer
  name = "Documentation"
  url  = "/docs/"

[[menu.footer_social]]             # NEW — icons under the About column
  pre = '<i class="fab fa-github"></i>'
  url = "https://github.com"
```

Data files are unchanged. `data/carousel.yaml` gains a few optional fields if you want them:

```yaml
- weight: 1
  eyebrow: "v3.0"          # NEW — pill above the title
  icon: "fas fa-bolt"      # NEW — eyebrow icon
  title: "Your headline"
  description: "<p>…</p>"
  image: "img/hero-1.jpg"
  badge: "Live demo"       # NEW — corner pill on the image
  cta_text: "Get started"  # NEW
  cta_url: "#"             # NEW
  cta2_text: "Read docs"   # NEW
  cta2_url: "#"            # NEW
```

---

## Install

```bash
cd themes/
git submodule add https://github.com/devcows/hugo-universal-theme.git hugo-universal-reborn
```

Then in your site's `config.toml`:

```toml
theme = "hugo-universal-reborn"
```

---

## Theme variants

Set `style` in `config.toml`. Maps to `static/css/style.<style>.css`.

| `style = "..."`  | Accent       |
|------------------|--------------|
| `default`        | Teal `#38a7bb` |
| `blue`           | Blue `#2c7be5` |
| `green`          | Green `#4caf50` |
| `marsala`        | Marsala `#964f4c` |
| `pink`           | Pink `#e91e63` |
| `red`            | Red `#e53935` |
| `turquoise`      | Turquoise `#1abc9c` |
| `violet`         | Violet `#8e44ad` |

To add your own, copy `style.default.css`, change four CSS variables.

---

## Class-name compatibility

The new theme uses a `ur-` prefix (`ur-bar`, `ur-feature`, `ur-post`…) instead of the original Bootstrap-derived classes. Most user `custom.css` files won't be affected — but if you previously targeted classes like `.btn-template-main` or `.box-image-text`, you'll need to update selectors.

---

## File layout

```
hugo-universal-reborn/
├── theme.toml
├── LICENSE
├── README.md
├── archetypes/
│   └── default.md
├── i18n/                       # 13 language files copied from original
├── layouts/
│   ├── index.html              # homepage
│   ├── 404.html
│   ├── _default/
│   │   ├── single.html         # blog/page single
│   │   └── list.html           # blog/category/tag list + pagination
│   └── partials/
│       ├── headers.html        # <head>, fonts, OG, Twitter cards
│       ├── custom_headers.html # empty — for user override
│       ├── top.html            # utility bar with social icons
│       ├── nav.html            # sticky nav + dropdowns + search + theme toggle
│       ├── carousel.html       # hero slider
│       ├── features.html       # services / what we offer
│       ├── about.html          # mission band
│       ├── testimonials.html   # 3-up paginated
│       ├── see_more.html       # dark CTA band
│       ├── recent_posts.html   # homepage blog cards
│       ├── clients.html        # auto-marquee logos
│       ├── footer.html         # 4-column footer + newsletter
│       └── scripts.html        # front.js + GA
├── static/
│   ├── css/
│   │   ├── universal-reborn.css   # core stylesheet
│   │   ├── style.<variant>.css    # 8 variants × thin overlay
│   │   └── custom.css             # user overrides
│   ├── js/
│   │   └── front.js               # carousel, nav, marquee, dark-mode, search
│   └── img/
│       ├── favicon.ico
│       └── placeholder.png
└── exampleSite/
    ├── config.toml             # fully-populated demo config
    ├── data/
    │   ├── carousel.yaml
    │   ├── features.yaml
    │   ├── testimonials.yaml
    │   ├── clients.yaml
    │   └── stats.yaml
    └── content/
        ├── about.md
        └── blog/*.md
```

---

## License

MIT — same as the original. Template was first released by [Bootstrapious](https://bootstrapious.com/p/universal-business-e-commerce-template); ported to Hugo by [DevCows](https://github.com/devcows/hugo-universal-theme). Refresh by the same crew.
