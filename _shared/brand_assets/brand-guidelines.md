# PrismaX Brand Guidelines

The single source of truth for visual and verbal brand expression at PrismaX. Synthesized from the PrismaX Design System (2025), the Design Thought Process document, and the canonical reference images.

If a brand decision isn't covered here, check [colors.md](colors.md) (V1 site posture), the [Design System PNGs](../PrismaX%20brand%20guide/design-system/), the [Brand Guidelines PNGs](../PrismaX%20brand%20guide/brand-guidelines/), [PrismaX_Design_Thought_Process.docx](../PrismaX_Design_Thought_Process.docx), or [Reference Image/](../Reference%20Image/). If still unsure, ask the founding team. Don't invent.

---

## 1. The Idea Behind the Brand

PrismaX is the **portal** — the transformation layer between the fragmented robotics industry of today and the capable, autonomous future it is becoming. Every design decision should honor that metaphor.

The origin: the album cover of *Enter* by Cybotron — a figure mid-motion, split by a mirror. Left of the mirror: pixelated, scattered, undefined. Right of the mirror: solid, concrete, real. **PrismaX lives in the mirror.** Every service we offer — data collection, teleoperation, model training — moves the industry from left to right.

### Three principles all design must serve

1. **Transformation over decoration.** Every element means something. The portal is functional and philosophical, not ornamental.
2. **Concrete ambition.** Counter the abstraction and speculation of the AI space with warmth, weight, and editorial precision. Real, grounded — not floating.
3. **Infrastructure without invisibility.** PrismaX is the invisible layer of robotics. The brand makes the unseeable legible: the data pipeline, the training loop, the teleoperator's intent.

---

## 2. Brand Posture

| Trait | Yes | No |
|---|---|---|
| Tone | Cinematic, minimal, high-contrast | Clinical, cold, generic startup |
| Voice | Quiet confidence, builder-led | Hype, "LFG / gm / wagmi", crypto-bro |
| Posture | Demonstrate, then explain | Pitch, then announce |
| Aesthetic | Luxury technology, editorial | SaaS dashboard, fintech, web3 |
| Proof | Visual proof — robots, signals, operators | Stat-bar walls, badge-soup credibility |

The brand **does not shout. It demonstrates.** A robot mid-motion, a data signal mid-capture, an operator at a control station — these do more work than any headline.

---

## 3. Logo & Wordmark

### The mark
The wordmark is **Prisma(X)** — the parenthetical X is part of the lockup, not optional. The "i" in "Prisma" is replaced by a geometric shard — a triangular portal cutting through the letterform. This shard is the portal made literal.

### Files
- **Wordmark (SVG)** — [logos/PrismaX black logo.svg](logos/PrismaX%20black%20logo.svg) (black, for light surfaces), [logos/PrismaX light logo.svg](logos/PrismaX%20light%20logo.svg) (cream, transparent — for dark / non-white surfaces)
- **Wordmark (raster)** — [logos/wordmark.jpg](logos/wordmark.jpg) (black on white), [logos/wordmark-alt.jpg](logos/wordmark-alt.jpg)
- **Mark only** — [logos/mark-x.png](logos/mark-x.png), [logos/mark-x-square.png](logos/mark-x-square.png) — for favicon, compact contexts (raster only)
- **Monogram** — [logos/monogram-px.svg](logos/monogram-px.svg) (vector), [logos/monogram-px.png](logos/monogram-px.png) — alternate compact mark
- **Lockups** — [logos/lockups/](logos/lockups/) — combination marks in AI/PDF/PNG/JPEG formats

### Usage rules
- **Do not recolor.** The wordmark is black on white surfaces, cream on dark surfaces. Never tinted.
- **Clear space** = the height of the "P" in the wordmark, on all four sides.
- **Minimum size** = 24px tall for digital, 0.5in for print. Below that, use the mark or monogram.
- The tagline `The bridge between raw data and applied intelligence.` pairs with the logo in formal contexts. It is not a UI element — do not place inside buttons or nav.

---

## 4. Color System

The PrismaX palette was deliberately chosen to represent the *golden age of robotics*. Warm gold and cream tones counterbalance what could otherwise feel like a cold, clinical technology brand. The palette signals that PrismaX is not just infrastructure — it is pioneering something historic.

### Primary

| Token | Hex | Use |
|---|---|---|
| `black` | `#202020` | Primary text, primary dark surface |
| `cream` | `#DFD8D0` | Primary light background |
| `white` | `#FFFFFF` | Pure white, light mode |

### Secondary

| Token | Hex | Use |
|---|---|---|
| `black-dark` | `#7A6B5A` | Dark mode background variant, dividers on dark |
| `black-light` | `#4B4B4B` | Button active state on dark |
| `black-60` | `#202020 @ 60%` | Dark mode overlays |
| `cream-dark` | `#7A6B5A` | Dividers on light surfaces |
| `cream-accent` | `#B9986A` | **Gold accent** — icons in dark mode, key highlights |
| `cream-medium` | `#BBB2A8` | Social icons, muted accents |
| `cream-light` | `#DFD8D0` | Button active state on light |
| `grey-80 / 60 / 40` | `#D9D9D9 @ 80% / 60% / 40%` | UI greys |

### Tertiary — functional & character

| Token | Hex | Use |
|---|---|---|
| `success-green` | `#4ED064` | Success states |
| `alert-red` | `#FF6B60` | Alert / destructive states |
| `robot-blue` | `#6AB2D6` | Avatar variant 01 |
| `robot-orange` | `#DE8561` | Avatar variant 03 |
| `robot-pink` | `#C765B0` | Avatar variant 02 |
| `silver` | `#A0A0A0` | Neutral metallic — leaderboard silver badge |
| `bronze` | `#B56654` | Warm metallic — leaderboard bronze badge |

### Rules
- **Do not introduce new hues.** No Tailwind defaults (indigo, blue-500, etc.). No invented brand colors.
- **Robot/character colors are character-only** — used for avatars, badges, character-driven UI. Never as primary surface or button colors.
- **Gold (`cream-accent` #B9986A) is the only "brand hue"** — use it sparingly, for icon highlights in dark mode and key accents. Treat it like an heirloom; not every screen earns it.
- **Dark mode is the prestige mode.** The near-black `#202020` background is what allows gold to glow. Light mode should feel warm-paper, not bleached.

### V1 Website Constraint
The current website rebuild ([HOMEPAGE.md](../HOMEPAGE.md), [colors.md](colors.md)) operates under a **deliberately restrained subset**: B&W only, no gradients, no shadows, no brand hue. This is a *V1 posture decision*, not a brand simplification. Once V1 ships, the full palette unlocks for marketing surfaces, product UI, and campaign work. See [colors.md](colors.md) for the V1 token set.

---

## 5. Typography

Two families, paired by tension.

| Family | Role | Why |
|---|---|---|
| **Editorial New** (serif) | Display / brand voice | Premium, weighted, editorial. Carries authority. Not a startup typeface. |
| **Catalogue** (sans-serif) | Body, UI, navigation | Strong, rational, versatile. Editorial details. Operational layer. |

The contrast between serif identity and sans operational layer mirrors the brand's core tension: warmth and precision, ambition and pragmatism.

### Type scale (from Design System v1)

| Role | Family | Weight | Size | Line height | Tracking |
|---|---|---|---|---|---|
| H1 | Editorial New | Light | 120 | 110% | 0% |
| H2 | Catalogue | Light | 72 | 110% | 0% |
| H3 | Editorial New | Light | 72 | 110% | 0% |
| H4 | Catalogue | Light | 48 | 110% | 0% |
| H5 | Editorial New | Light | 48 | 110% | 0% |
| H6 | Catalogue | Regular | 36 | 110% | 0% |
| Subtitle | Catalogue | Book | 28 | 110% | 0% |
| Subtitle Medium | Catalogue | Book | 24 | 110% | 0% |
| Body / Button / Link Large | Catalogue | Book | 16 | 120% | 0% |
| Body / Button / Link Medium | Catalogue | Book | 14 | 120% | 0% |
| Body / Button / Link Small | Catalogue | Book | 12 | 120% | 0% |
| Action (eyebrow / label) | Catalogue | Book | 12 | 120% | **35%** (uppercase) |

### Rules
- **Editorial New = brand voice.** Use for H1, H3, H5 — moments that carry brand identity.
- **Catalogue = operational layer.** Use for nav, body, buttons, UI labels, H2/H4/H6/etc.
- **Never use the same family for headline and body.** The whole point is the pairing.
- **Tight tracking on large headings** (`-0.02em` to `-0.03em`) — already specified above as 0% but the brand guide allows tighter for hero moments.
- **Generous body line-height** (`1.6` to `1.7` for long-form).
- **Eyebrows / action labels are uppercase, 35% tracking** — this is the brand's signature label treatment.

### Files
- Editorial New: [fonts/editorial/](fonts/editorial/) — Bold, Regular, Thin, Ultrabold, Ultralight, Variable
- Catalogue: [fonts/catalogue/](fonts/catalogue/) — full italic + roman family, Light through Bold

Convert to `.woff2` for production. `.otf` is acceptable for development.

---

## 6. Grid & Spacing

### Grid system
| Breakpoint | Columns | Container | Gutter |
|---|---|---|---|
| Wide / Desktop | 12 | max-width 1270px, content sits in 8 columns | 24px |
| Tablet | — | 90% width | 24px |
| Mobile | — | 85% width | 16px |

### Spacing scale
Use only these values: **4 · 8 · 16 · 20 · 24 · 48 · 92 · 112 · 124 · 248 · 512** (px).

Do not invent in-between values. Do not use random Tailwind steps (`gap-7`, `mt-11`). Intentional spacing tokens only.

---

## 7. Buttons

Three sizes, two hierarchies, three states.

### Sizing

| Size | Font size | Vertical pad | Horizontal pad | Text-box height |
|---|---|---|---|---|
| Large | 16 | 12 | 20 | — |
| Medium | 14 | 12 | 16 | 20 |
| Small | 12 | 12 | 16 | 16 |
| Corner radius | 8 | 8 | 8 | — |

### Hierarchy

- **Primary** — filled surface (black on light, cream on dark). The action you want taken.
- **Secondary** — text link with underline (e.g. "View more", "All posts"). Lower commitment.

### States — required, no exceptions

Every button must implement:
- **Default** — base color
- **Hover** — wipe / shift effect (the brand uses a skewed-square wipe animation, see brand guide page 7)
- **Active** — pressed/depressed surface (`black-light #4B4B4B` for dark, `cream-light #DFD8D0` for light)
- **Focus-visible** — keyboard focus ring (accessibility, non-negotiable)
- **Disabled** — reduced opacity, not interactive

### Signature: the wipe animation
On hover, a skewed transparent square slides across the button face, then expands to 100% width. This is the PrismaX motion signature — use it consistently for primary CTAs.

---

## 8. Iconography

### System
- **Google Material Symbols — Sharp variant**
- Weight: **200–300** (thin, never heavy)
- Optical sizes: **20dp · 24dp · 40dp · 48dp**
- Light mode color: `black` `#202020`
- Dark mode color: `cream-accent` `#B9986A` (the gold)

### Custom icon families
- **Robot avatars** — three variants (blue, pink, orange) for tier/community UI. Sizes 24px (small) and 48px (big).
- **Arm instruction icons** — sequence diagrams for teleoperation UX. Cream on dark, black on light; success-green for the active joint.
- **Leaderboard badges** — gold (`cream-accent`), silver, bronze hexagon-shield shapes for ranking UI.

### Rules
- **Sharp variant only** — never Outlined, Rounded, or Filled. Sharp matches the editorial-precision principle.
- **One weight per surface.** Don't mix 200 and 300 in the same view.
- **Don't introduce icons from other libraries** (Lucide, Phosphor, Feather). Material Sharp 200–300 only.

---

## 9. Motion

- **Animate `transform` and `opacity` only.** Never `transition-all`. Never animate `width`, `height`, or `top/left`.
- **Easing:** spring-style, restrained. The wipe animation on buttons is the signature.
- **Duration:** 200–400ms for micro-interactions, 600–1200ms for entrance. Nothing slower without reason.
- **Hover states are required and must animate** — never a hard state change.
- Respect `prefers-reduced-motion` — disable non-essential motion.

---

## 10. Imagery & Illustration

### Photography — what counts as on-brand
The brand demonstrates with visual proof. On-brand imagery shows:
- **Real robots in real environments** — humanoids, arms, mobile platforms mid-action, not staged renders
- **Operators at control stations** — human-in-the-loop is core to the story; show the operator
- **Capture moments** — a hand reaching, a manipulation, a teleop session
- **Data made visible** — signal waveforms, trajectories, intent labels surfaced as graphics

Reference: [Reference Image/35.png](../Reference%20Image/35.png) — humanoid leaping through the diagonal portal beam, warm brown gradient. This is the brand at full expression.

### What is NOT on-brand
- Stock photography of generic "tech people"
- Floating product shots on infinite white
- Robotic-arm clipart, AI brain illustrations, neural-net hairballs
- Anything with a gradient sky / sci-fi sunset / metallic chrome aesthetic
- Renders that look like they could appear on any AI startup site

### Illustration style
From the brand guide ([Reference Image/20.png](../Reference%20Image/20.png)):

> The PrismaX illustration style is defined by precise, modular linework. Each stroke is intentional — clean, sharp, and restrained — reflecting a logic of control and synthesis. The compositions avoid excess and favor abstraction, using geometry, repetition, and spatial rhythm to build visual narratives.

Practical rules:
- Linework: thin, even-weight, no organic strokes
- Composition: geometric, repeating, rhythmic
- Color: monochrome or single accent (often `cream-accent` gold or `bronze`)
- Negative space: generous — sparse is on-brand, dense is not

### The portal motif
The diagonal portal beam is the brand's organizing visual element. It should appear in:
- Hero compositions (a beam dividing left "fragmented" / right "realized")
- Pitch decks, campaign visuals, major brand expressions
- The "i" of the wordmark (already implemented in logo)
- Data viz: signal/noise on the left, structured data on the right

Do not overuse — it loses meaning if it appears on every screen. Use it for **moments of brand voice**, not on routine UI.

### Image treatment for web
- Layer a gradient overlay (`from-black/60` to transparent) for legibility over text
- Apply a `mix-blend-multiply` color treatment layer to unify mixed source photography
- Never place raw, unprocessed photos on the page

---

## 11. Voice & Writing

### Voice principles
- **Quiet confidence.** Demonstrate, don't announce.
- **Builder's language.** Specific, concrete, technical when warranted. No marketing fluff.
- **Editorial precision.** Sentences earn their length. Read it aloud — if it sounds like a press release, rewrite.
- **No hype vocabulary.** Avoid: "revolutionary," "game-changing," "unlock," "leverage," "synergy," "transform" (as a verb), "AI-powered."
- **No crypto-bro.** Avoid: "LFG," "gm," "wagmi," "ser," token-narrative framing, "to the moon," rocket emoji.

### Good vs. avoid

| Good | Avoid |
|---|---|
| "We operate live human-in-the-loop systems where real robotic work generates the data." | "PrismaX is revolutionizing robotics with AI-powered data solutions." |
| "Operator Intent: the missing layer in physical AI training." | "Unlock the next generation of embodied intelligence." |
| "Backed by a16z, NVIDIA Inception, Stanford BBF." | "Trusted by industry leaders." |

Canonical narrative copy lives in [../narrative/](../narrative/). Pull verbatim — do not paraphrase.

---

## 12. Audience Tiers — Who You're Designing For

PrismaX designs for four audience tiers. Every piece of content has a primary tier; design decisions follow from that. Full breakdown in the Design Thought Process doc, summary here:

| Tier | Who | What moves them | What to avoid |
|---|---|---|---|
| **1. Buyers** | CTOs, VPs Eng at Series A–C robotics cos | Numbers, benchmarks, integration detail, reference customers | Marketing language, vague claims, hype |
| **2. Researchers** | PhDs, postdocs, research engineers at top labs | Technical reports, open data, honest limitations, peer-reviewed work | Unsupported claims, "research-backed" without citations |
| **3. Community** | 1.3M+ crypto/AI/robotics-curious, 80%+ aged 18–34, mobile-heavy | Visual progress (video > text), founder posting, specific numbers, quiet confidence | Crypto-bro vocabulary, hype, token narrative framing |
| **4. Amplifiers** | VCs, journalists, analysts, ecosystem partners | Category clarity, positioning, founder credibility, "why now" | Generic press releases, mass-blast announcements |

Pick the tier before you design. Tier 1 ≠ Tier 3 — buyer surfaces should look like a research lab, not a Twitter thread.

---

## 13. Quick Reference — On-Brand Checklist

Before shipping any visual artifact, run through this:

- [ ] Color is from the documented palette. No invented hues. No Tailwind defaults.
- [ ] Type pairs Editorial New (display) with Catalogue (body) — never one family for both.
- [ ] Eyebrows / labels are uppercase with 35% tracking.
- [ ] Spacing uses the documented scale (4 · 8 · 16 · 20 · 24 · 48 · 92 · 112 · 124 · 248 · 512).
- [ ] Icons are Material Symbols Sharp, weight 200–300.
- [ ] Every button has hover, focus-visible, and active states.
- [ ] Motion is `transform` + `opacity` only. No `transition-all`.
- [ ] Imagery is real (robots, operators, capture moments) — not stock, not generic AI art.
- [ ] If the portal motif is used, it's earned — not decorative filler.
- [ ] Voice is quiet, specific, builder-led. No hype, no crypto-bro.
- [ ] V1 website work additionally honors the B&W posture from [colors.md](colors.md).

---

## 14. Open Items & Living Document

This document is a living reference. Known gaps:
- SVG versions of the X-mark (`mark-x`, `mark-x-square`) and `wordmark-alt` — currently raster only
- `.woff2` font conversions for production performance
- A formal product UX principles section (for the app surface, not just marketing)
- An expanded visual asset library reference
- Real component code snippets (button, card, section header) showing the rules in HTML/CSS

Any team member or external collaborator with questions should reach out to the founding team **before** making design or branding decisions that fall outside the parameters above.

> PrismaX is the portal. Every design decision should honor the transformation it represents.

---

*Source documents: [PrismaX Design System v1](../PrismaX%20brand%20guide/design-system/) (PNGs), [PrismaX Brand Guidelines](../PrismaX%20brand%20guide/brand-guidelines/) (PNGs), [PrismaX Design Thought Process v1.0](../PrismaX_Design_Thought_Process.docx) (May 2026, CONFIDENTIAL), [Reference Image library](../Reference%20Image/).*
