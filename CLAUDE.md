# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).


## Local Server
- **Do not compile, deploy, or upload to the local host during active exploration iterations.**
- Keep development localized to raw text and code snippets while a section is fluid.
- **Exceptions:** ONLY serve to localhost and execute a screenshot when:
  1. A section is officially locked in by the user.
  2. The user explicitly requests a deployment check.
  3. The user announces they are wrapping up work for the day.
- When serving, always use localhost — never screenshot a `file:///` URL. Start dev server via `node serve.mjs` (port 3000) in the background if it is not already running.


## Section-Based Screenshot Naming Workflow
All screenshots must be processed via `node screenshot.mjs http://localhost:3000 [label]` and must strictly adhere to the current lifecycle phase:

### 1. Active Revision Phase
- When the user announces they are revising a specific section, screenshots are restricted *strictly* to that section.
- **Naming Convention:** Name the file suffix as `"Section Name" + "Revision Version"`
  - *Example prompt:* `node screenshot.mjs http://localhost:3000 "Hero Section V1"`
- Use these explicit versioned checkpoints as references if the user requests to roll back to a previous option.

### 2. Lock-In Phase
- When the user states that a section is "locked in," instantly execute a final screenshot.
- **Naming Convention:** Rename or save this final capture as `"Section Name" + "Final"`
  - *Example prompt:* `node screenshot.mjs http://localhost:3000 "Hero Section Final"`
- **Immediate Purge:** Immediately delete or clear out all previous intermediate revision screenshots (e.g., V1, V2) belonging to that specific section. Only the "Final" image remains.

## PrismaX Brand Rules (Tokens & Restrictions)
- **Text Lockup:** Must read exactly `Prisma(X)` (parenthetical X is mandatory).
- **Logos:** Wordmark is black on white surfaces, cream on dark surfaces. Clear space = height of "P". Min-size = 24px. Never place the tagline inside buttons/nav.
- **CRITICAL V1 Posture:** Current build is strictly B&W only. No gradients. No shadows. No brand gold hue. (See `colors.md` for overrides).
- **Core Hex Codes:** Black (`#202020`), Cream (`#DFD8D0`), White (`#FFFFFF`).
- **Typography Pairing:** *Editorial New* (Serif) for H1, H3, H5 only. *Catalogue* (Sans-Serif) for H2, H4, H6, body, nav, and buttons. Never mix them.
- **Signature Eyebrow:** Labels must be uppercase with precisely 35% tracking.
- **Strict Spacing Scale:** Only use **4 · 8 · 16 · 20 · 24 · 48 · 92 · 112 · 124 · 248 · 512** (px). No variations.
- **Button Geometry:** Radius is fixed at `8px`. States must include default, focus-visible, active (`#4B4B4B` dark / `#DFD8D0` light), and a hover skewed-square wipe animation.
- **Iconography:** Google Material Symbols — **Sharp variant only**. Weight: **200–300** thin. No outside icon libraries.
- **Motion Constraints:** Animate `transform` and `opacity` only. **Never use `transition-all`.**


## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.


## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

