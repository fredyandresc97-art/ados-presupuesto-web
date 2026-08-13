# ADOS — Design System

Design system for **ADOS Ingeniería y Arquitectura SAS**, a BIM consulting, architectural design and engineering firm in Colombia serving public- and private-sector clients. ADOS delivers federated BIM models, structural and hydro-sanitary engineering, architecture, MEP coordination and photorealistic project renders. The firm has an Instagram presence and a company website in development.

The brand is **dark-first and technically precise**: deep navy surfaces, disciplined amber accents, and photoreal BIM renders treated as editorial hero imagery. The visual anchor is the isometric **cube** logo — axonometric geometry is the brand's language.

> Headline voice: *"Diseñamos lo que otros solo imaginan" · "BIM desde el primer día"*

## Sources provided
No codebase or Figma was supplied — this system is built from a written brand brief plus a set of real project assets:

- `uploads/2.png` — structural BIM frame render **with the ADOS logo lockup** (logo source).
- `uploads/Image7_000.png`, `uploads/Enscape_2026-02-18-*.png` — Enscape water-treatment-plant renders.
- `uploads/Image1_001.png` — tall PTAR storage-tank render.
- `uploads/MASTER-MASTER .jpg` — MEP plumbing isometric (editorial diagram).
- `uploads/EST_EDIF_MIXTO3.jpg` — steel beam–column connection detail (teal plates).
- `uploads/ARQ_EDIF_MIXTO8.jpg` — volumetric building section cut.
- `uploads/Reel.mp4`, `uploads/Video2.mp4` — project walkthrough videos (not embedded).

Curated stills are copied into `assets/img/`. The logo was reconstructed as crisp SVG (`assets/logo/`) from the baked-in lockup in `2.png`.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish primary across every touchpoint. No auto-language switching.

**Personality.** Creative, innovative, technically precise. NOT generic-corporate, NOT bureaucratic, NOT over-formal or cold.

**Voice — confident and direct.** Technical authority without jargon overload. Lead with the claim, then back it with the project, the method, the result.

**Headlines.** Short, declarative, often a statement of intent or capability:
- "Diseñamos lo que otros solo imaginan"
- "BIM desde el primer día"
- "Modelos que se construyen"
- "Un modelo, todas las disciplinas"

**Body copy.** Concise, specific, evidence-based. Cite the discipline, the LOD, the software, the deliverable. Example: *"Modelamos cada disciplina antes de construir. Coordinación BIM, ingeniería estructural y arquitectura para el sector público y privado en Colombia."*

**CTAs.** Action-forward and specific — never generic:
- ✅ "Ver proyecto", "Solicitar consultoría", "Conoce el proceso", "Ver proyectos"
- ❌ "Contáctenos", "Más información", "Saber más"

**Casing.** Sentence case for headlines and body. UPPERCASE only for technical labels / eyebrows / captions (with `+0.1em` tracking) — e.g. "ESTRUCTURAL", "LOD 350", "IFC 4 · MODELO FEDERADO".

**Person.** Addresses the client as *usted* ("Cuéntenos qué quiere construir"), speaks of the firm as *nosotros* ("Modelamos", "Coordinamos", "Entregamos").

**Emoji.** None. The brand expresses warmth through craft and imagery, not emoji.

**Avoid these words/phrases:** "soluciones integrales", "innovación" alone without context, "comprometidos con la calidad", and other empty corporate filler.

---

## VISUAL FOUNDATIONS

**Color.** 60% deep navy `#222B35` · 30% white / light `#F5F5F3` · 10% amber `#F9B233`. Amber is the **only** warm color — never diluted into beige, tan or gold. A small teal `#2F8A8A` (from the steel-connection renders) is allowed as a rare technical accent (`Tag tone="steel"`, `Callout tone="steel"`). Navy carries a 5-step scale (950→600) for backgrounds, elevated surfaces and borders. See `tokens/colors.css`.

**Typography.** Display = **Space Grotesk** (500/700), geometric, tracked tight (`-0.03em`) on large sizes. Body = **Inter** (400/500), neutral and technical. The pairing — geometric display over neutral body — mirrors BIM precision. Technical labels: uppercase, `0.7rem`, `+0.1em` tracking. See `tokens/typography.css`.

**Spacing & geometry.** 8pt base (4/8/16/24/32/48/64/96/128). 12-column grid, 24px gutter, 1280px max width. Radius is intentionally **sharp**: `6px` on cards/inputs/buttons, `0px` on images & technical diagrams, `999px` on tags/chips only, `12px` reserved for the logo mark. See `tokens/spacing.css`.

**Backgrounds.** Primary surfaces are deep navy (`--bg`, `--bg-deep`); content sections occasionally break to light. **No decorative gradients** — flat fields only. Full-bleed BIM renders are the hero device, framed with a 1px border at 0px radius. The isometric cube appears as a small repeating motif (capability icons).

**Imagery.** Photoreal Enscape renders, MEP isometrics and structural details ARE the brand — used as editorial hero content, not documentation. Color vibe: cool/neutral concrete grays and steel, lush Colombian green context, warm amber only from the brand layer. Rendered at 0px radius, framed by hairline borders. **Never** generic construction stock, hard-hat clichés, or abstract tech blobs.

**Cards.** Navy surface (`--surface`), 6px radius, **1px hairline border** (`rgba(255,255,255,0.10)`) — never a soft Material drop shadow. Optional full-bleed image header at 0px radius. Hover: border turns amber (interactive cards only). The one allowed drop shadow is a single hard overlay shadow for modals.

**Borders & elevation.** Depth comes from hairlines, not shadows. `--border` (0.10 white) default; `--border-strong` (0.18) for emphasis; on light, `--border-light` (0.12 navy).

**Animation.** Restrained and precise — short fades and slides, **no bounce**. Easing `cubic-bezier(0.2,0,0,1)` standard / `cubic-bezier(0.16,1,0.3,1)` for decisive moves. Durations 120/200/320ms. Tab/switch indicators slide; reduced-motion is respected globally.

**Hover / press.** Hover = subtle lift (amber primary → lighter amber `#FBC766`; ghost → 6% white wash; card/icon outline → amber border). Press = darker amber `#E7A11E` + 1px downward nudge. No scale-bounce.

**Focus.** Amber 2px outline on dark surfaces; navy 2px outline on light. `box-shadow` amber glow on focused inputs.

**Transparency & blur.** Used sparingly — the sticky header uses `rgba(26,33,41,0.82)` + `blur(14px)`. Tints (8–18% alpha) back callouts and steel tags. No frosted-glass everywhere.

---

## ICONOGRAPHY

ADOS has **no proprietary icon font**. The system uses **minimal line icons drawn inline as SVG** at a consistent technical stroke weight (~1.6–2px, round caps/joins), matching the engineering-precision tone. They are passed to components as React nodes (`iconLeft`, `icon`, `children` of `IconButton`).

- **Style:** thin stroke, geometric, monochrome (inherits `currentColor`, usually amber or muted white). Aligns with the **Lucide** / **Feather** family in weight and feel.
- **Substitution flag:** for production with a larger icon need, adopt **Lucide** (`https://unpkg.com/lucide`) — it matches the stroke style used here. This is a recommended substitute, not an existing ADOS asset.
- **The cube** (`assets/logo/ados-cube.svg`) doubles as a brand glyph/bullet (e.g. capability icons on the homepage). Use the `-dark` variant on navy.
- **Emoji / unicode as icons:** never.

Logo assets live in `assets/logo/`: `ados-cube.svg` / `ados-cube-dark.svg` (mark) and `ados-logo-dark.svg` (navy wordmark, for light) / `ados-logo-light.svg` (white wordmark, for dark).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (import list only; consumers link this).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.

**`components/`** (namespace `window.ADOSDesignSystem_5aafbb`; interaction states in `components/interactions.css`)
- `core/` — **Button**, **IconButton**, **Tag**, **Badge**, **Card**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `navigation/` — **Tabs**
- `feedback/` — **Callout**

**`ui_kits/website/`** — click-through marketing site (`index.html` + Home / Projects / Detail / Services / Contact screens). See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/`** — `logo/` (SVG marks & lockups) and `img/` (curated BIM renders).

**Starting points:** `Button` and `Card` (components), and the website screen (`ui_kits/website/index.html`).

---

## CAVEATS
- **Fonts** load from the Google Fonts CDN (Space Grotesk + Inter are the real brand fonts). For offline/production use, self-host woff2 files and replace the `@import` in `tokens/fonts.css` with `@font-face` rules — provide the files and I'll wire them up.
- **Logo** is an SVG reconstruction of the lockup baked into `2.png` (the only logo source available). If you have the original vector/PNG, share it and I'll swap it in.
- **Icons** are inline SVGs in the Lucide/Feather style — flagged as a substitution since ADOS has no icon set of its own.
