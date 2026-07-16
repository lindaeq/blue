# linda qi — portfolio site

A single-page, fully scrollable Next.js (App Router) site built from the Figma mockup. TypeScript + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where everything lives

```
src/
  app/
    layout.tsx      → loads fonts (Hind Madurai + Inter), sets global <html>/<body>
    page.tsx         → assembles the page: Hero, About, Misc, Projects, Design, Footer
    globals.css       → Tailwind directives + background gradient + smooth scroll
  components/
    Nav.tsx           → "about me / projects / design" pill buttons + github/linkedin/resume
    Hero.tsx           → "linda qi" name block + the dark info callout box
    About.tsx           → "about me" section (id="about") — lorem text + photo placeholder
    Misc.tsx             → "miscellaneous" section — duolingo streak + music player bar
    Projects.tsx          → "projects" section (id="projects") — 2x2 tile grid
    Design.tsx             → "design" section (id="design") — 2x2 tile grid
    Footer.tsx               → bottom "Linda Qi • 2026" bar
tailwind.config.ts    → all custom colors + font family tokens (see below)
```

## How the scroll-to-section nav works

Each nav button in `Nav.tsx` is an `<a href="#about">` etc. The matching section
(`About.tsx`, `Projects.tsx`, `Design.tsx`) has a matching `id` prop on its
`<section>`. `globals.css` sets `scroll-behavior: smooth` on `<html>`, and the
click handler in `Nav.tsx` calls `scrollIntoView({ behavior: "smooth" })` so it
works even if the anchor jump would otherwise be instant. No extra libraries
needed — this is pure browser scroll behavior.

If you want "about me" to link somewhere other than the About section (since
"miscellaneous" doesn't have its own nav button in your mockup), just change
the `href` in the `links` array at the top of `Nav.tsx`.

## Colors (tailwind.config.ts)

| Token          | Hex       | Used for                                      |
|----------------|-----------|------------------------------------------------|
| `navy`         | `#1C265B` | hero info box, nav buttons, photo box, footer   |
| `navy-muted`   | `#2B325C` | project/design tile boxes                       |
| `navy-light`   | `#8898C8` | text inside the hero nav buttons                |
| `pink-accent`  | `#FFCAD3` | "cs @ uwaterloo", "entj • ravenclaw", obsession link |
| `grad-top`     | `#F37689` | page background gradient (top) + streak number  |
| `grad-bottom`  | `#FF7E80` | page background gradient (bottom)               |

The gradient itself is applied directly on `<body>` in `globals.css` as a
fixed background so it doesn't repeat/tile as you scroll.

## Fonts

- **Hind Madurai** (`font-display` in Tailwind) — used for the large headings:
  "linda qi", "about me", "miscellaneous", "689", "projects", "design", and
  the pink subtitles.
- **Inter, bold** (`font-sans`, the default body font) — used everywhere else
  (nav buttons, body copy, footer, labels).

Both are loaded via `next/font/google` in `src/app/layout.tsx`, so there's no
manual `<link>` tag needed and no layout shift.

## Things to fill in yourself

- **Resume**: drop your PDF at `public/resume.pdf` — the "resume" link in
  `Nav.tsx` already points to `/resume.pdf`.
- **GitHub / LinkedIn links**: update the `href`s in `Nav.tsx`.
- **Photo**: swap the `photo` placeholder `<div>` in `About.tsx` for a
  Next.js `<Image />` once you have the actual image file (drop it in
  `public/` and import it).
- **Project & design tiles**: `Projects.tsx` and `Design.tsx` currently
  render empty navy-muted boxes matching the mockup's placeholder state.
  Add titles, links, and thumbnail images to the `projects` / `designs`
  arrays as you fill in real content.
- **Duolingo streak number**: currently hardcoded as `689` in `Misc.tsx`.
- **Currently playing**: the music player bar is currently static UI (no
  playback wired up) — hook up real audio or an embed (e.g. Spotify) if you
  want it functional.
