# PrismaX V1 — Color & Type Spec

V1 brand posture per [HOMEPAGE.md](../HOMEPAGE.md): **B&W only. No gradients. No shadows.**
Closest aesthetic match: Anthropic + Physical Intelligence.

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0A0A0A` | Body text, primary surfaces in inverted blocks |
| `--paper` | `#FFFFFF` | Page background |
| `--paper-soft` | `#F7F6F4` | Optional section break / footer base (warm-white, very subtle — only if needed) |
| `--rule` | `#E5E5E2` | Hairlines, dividers, card borders |
| `--muted` | `#6B6B6B` | Secondary text, eyebrows, captions |

Do **not** introduce a brand hue. Do **not** use a Tailwind default blue/indigo. Do **not** layer gradients.

If a B&W-only spec needs visual depth, get it from: typography contrast (display serif vs sans), generous negative space, hairline rules, image color treatment (desaturated / b&w photography).

## Typography

| Role | Family | Notes |
|---|---|---|
| Display / headings | **Editorial New** | Serif. H1 / H2 use Editorial New Regular or Thin at very large sizes with tight tracking (`letter-spacing: -0.02em` to `-0.03em`). |
| Body / nav / UI | **Catalogue** | Sans-style display family with serif details. Use Catalogue Regular for body, Medium for nav/CTAs, Light for long-form. Body line-height 1.6–1.7. |

@font-face declarations should reference files under `brand_assets/fonts/` directly. Convert to `.woff2` later for production; `.otf` is acceptable for development.

## Logo usage

- **Primary wordmark** for nav + footer: `brand_assets/logos/wordmark.jpg` (black on white — works on white surfaces only).
- **Mark only** (compact spaces, favicon, small contexts): `brand_assets/logos/mark-x.png` or `monogram-px.png` (PNG with transparency).
- Do not recolor. Do not place on tinted backgrounds in V1 (would require transparent versions we don't have).

## Open

- Need transparent SVG wordmark export for footer use on any non-white surface — until then, keep wordmark on pure white.
- Need `.woff2` font conversion for production performance.
