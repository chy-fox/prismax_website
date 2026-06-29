# Homepage — V3 Architecture (Product-Forward)

**Supersedes:** the narrative-first direction in `SHAYE-REVIEW-for-chyna.md`.
**Source:** Chyna sync (week of 2026-06-08) — keep the site **product-forward**, Web2 robotic-data marketplace is the focus and largest revenue driver.
**Purpose of this doc:** lock the section map so (a) Shaye can fill section-by-section copy and (b) Chyna can build format/layout/structure against a fixed spine.

---

## What changed from V6 (the meeting deltas)

1. **Stay product-forward, trim the narrative.** Do NOT add a heavy Protocol/Thesis spine to the homepage. Get to the products fast. (Protocol/Thesis live on their own pages, linked from nav — not the homepage backbone.)
2. **Field notes → Blog.** The "Field notes" section becomes the Blog surface and pulls in **Announcements** alongside insights.
3. **Add HEX — embedded AI data-chat** on the landing page. User queries the catalog in plain language ("show me kitchen manipulation data"), previews results, and **after N free tries a soft gate routes them to a subscription CTA.** This is a product demo *and* a conversion mechanic.
4. **Web2 marketplace is the spine; Web3 is secondary.** Robotic Data + Plans carry the page. The Web3 front (memberships, owner-operators) stays present but routed as a secondary path, not the homepage focus.

---

## Proposed section order (V3)

| # | Section | Status | Job |
|---|---|---|---|
| 1 | **Hero** | Keep, re-message | Category claim + route into the marketplace |
| 2 | **Backed by** | Keep, make prominent | Investor/program credibility strip (top of page) |
| 3 | **Overview** (Robots · Data · Intelligence) | folds Pillars in | Glance into the About page: overview + thesis + standards (data/embodiments). **No CTA** (encourage scroll). Slim 3-up. |
| 4 | **VLA Foundry** | Keep 4-card bento, **drop videos** | Flagship product + homepage visual centerpiece. CTA → Foundry page. |
| 5 | **Robotic Data** | strip tiers · **embed HEX** · **plans callout** | Light/clean counterpart. Marketplace overview, the HEX chat, a small plans callout. CTA → Robotic Data page. |
| 6 | **Blog** (label "Latest"; was Field notes) | Re-scope | Mixed 6-card cross-category feed (Insights/Announcements/Product Updates/Articles) |
| 7 | **Events** | Keep two-strip; **CTA → Luma** | Momentum teaser → external Luma calendar (no dedicated page) |
| 8 | **Partners** | **NEW (lower strip)** | Co-marketing / product-integration logos — scrolling strip, mirror of §2 |
| 9 | **Final CTA — Robotic Data** | Keep | Close on Robotic Data |
| 10 | **Footer** | Update | Re-map to Nav.md |

**Source of truth:** `~/Desktop/Homepage.md` (flow) + `~/Desktop/Nav.md` (navigation). This table is reconciled to them.

**Arc:** Claim → Trust → Overview → How the data is made → What you get (+ try it via HEX, + plans callout) → What we're publishing → Where to find us → Partners → Convert on Robotic Data.

**Key reconciliations (Homepage.md / Nav.md):**
- **No dedicated Plans section.** Full pricing lives on the **Robotic Data page** (Nav: Robotic Data › Pricing, ref [encord.com/pricing](https://encord.com/pricing)). Homepage carries only a **small plans callout** inside §5 (plans are a main feature, so a glance stays) → links to that page. The page closes on a **Robotic Data Final CTA**.
- **Subhead = Foundry-led** (flagship/product focus). Overrides Homepage.md's older "brand-messaging, not Foundry" note — confirmed with Shaye.
- **HEX is embedded inside Robotic Data (§5)**, not its own section. Gate routes to the Robotic Data pricing page.
- **Nav = VLA Foundry · Robotic Data · Blog · Company** — the two products ARE the nav. No Protocol/Platform top-level. Thesis + Standards (data/embodiments) live under **Company › About**. Memberships ref [bitrobot.ai/network](https://bitrobot.ai/network).
- **Events: no dedicated page.** Both the homepage Events CTA and the nav "Events" item link **directly to the Luma calendar** (not events-heavy enough to warrant a built page). Recaps fold into the **Blog** (Announcements category) rather than an Events recaps page.
- Visual/structure references to mine for the design-guidance doc: `~/Desktop/Website/` (Encord, BitRobot, OpenMind, OpenAI, Anthropic, Figure HELIX).

## Page color map (LOCKED)

The page is **B&W by default**, with color used deliberately in exactly three places:
1. **Hero** — the interactive video grid (B&W → muted-warm on hover).
2. **Events** — full-color event photos (the one warm photo band).
3. **Blog / "Latest"** — the real blog hero thumbnails pulled into the feed are in color.

Everything else stays mono. Color = a signal of "real / live," not decoration.

---

## §1 Hero — LOCKED direction (copy TBD)

- **Eyebrow:** **holistic, not marketplace-only.** The marketplace is one aspect of what PrismaX does; the eyebrow should capture the broader scope (service layer / standards for robots, data, intelligence). Marketplace framing emerges later, in the product sections. *(copy options at draft stage)*
- **H1:** `The service layer for physical AI.` *(unchanged — verbatim brand positioning; keep V6 typography + `Prisma(X)` lockup)*
- **Subhead — introduces the VLA Foundry (flagship).** Mental model: **VLA Foundry is the main product; Robotic Data, owner-operators, QA, marketplace are components/outputs of it.** So the subhead leads with the Foundry as the platform and names what it produces (the data people subscribe to). Pairs with the holistic eyebrow: eyebrow = scope, H1 = positioning, subhead = flagship product that delivers it. The build's current subhead is close — sharpen the language at copy stage, don't strip the Foundry out. *(Reverses earlier "no Foundry intro" note, which came from the dropped narrative-first framing.)*
  - Positioning relationship for copy consistency: **Foundry = the system/platform; Robotic Data = its monetized output (the subscription).** Compatible with "Robotic Data is the revenue driver."
- **CTAs — routing locked, labels need changing:**
  - **CTA 1 → §4 VLA Foundry section.** Label must point at the Foundry, e.g. `Explore the VLA Foundry →` / `See how the data is made →`. **Retire "View plans"** — nothing in the hero jumps to Plans anymore.
  - **CTA 2 → §5 Robotic Data section.** `Browse the data →` stays — accurate to its destination.
  - Each product section then carries its own CTA out to its full page (from nav). Pattern: hero → two product sections → full pages = guided tour.
  - Consequence (intentional): no direct-to-Plans CTA in the hero; first "buy" moment moves down to Robotic Data / Plans.
- **Background / interactive element — LOCKED:** **grid of looping videos of actual platform data** (real-operation episodes, showing task diversity), placed **high in the hero** since the data is a core part of the product. **B&W by default**; on **hover, each tile blooms into a muted / warm color** (not full saturation — kept low-contrast so it never gets "too much"). Replaces the V6 "move to trace the data" mouse animation (flagged as distracting).
  - For Chyna: pull real episode clips from the catalog to fill the grid. Autoplay muted loops; hover = B&W→muted-warm transition on `filter`/`opacity` only (no `transition-all`); respect `prefers-reduced-motion` (static B&W grid fallback).

> Note: the live build still ships the old `View plans` / `Browse the data` CTAs and the mouse animation. Subhead stays Foundry-led (sharpened); CTA 1 relabels to the Foundry; hero gains the hover-color video grid.

*(§2–§11: structure/look locked section by section in this doc; copy drafted after the walkthrough, with Shaye's resources.)*

## §2 Backed by — LOCKED direction (copy TBD)

- **Two separate strips, different places on the page** (they can't be joined — different proof):
  - **§2 Backed by** — investors / programs, kept **up top**, directly under the hero.
  - **§9.5 Partners** — co-marketing / product-integration logos, a **mirrored scrolling strip lower down**. Same template.
- **Real logo marks, not text.** Current build sets the names in body type, which reads as fine print. Swap in **actual monochrome logo lockups** (a16z, NVIDIA Inception, etc.). *Asset to gather: launch-ready mono logo files for every investor + partner.*
- **Treatment: a statement, not a whisper.** Give it real vertical space (a band, not a thin line) so it lands. Short credibility eyebrow OK.
- **Motion: slower marquee, all logos scroll** (no static anchor names). Keep `transform`/`opacity` only; `prefers-reduced-motion` → static row.
- Logos stay clean under the no-numbers posture (no "$11M", no counts in the strip).

## §3 Overview — LOCKED (folds Pillars in)

- Per Homepage.md: a **glance into the About page** — high-level overview + thesis + standards (data + embodiments), essentially the **Robots · Data · Intelligence** frame.
- **NOT currently in the build** — this is an add.
- **Slim 3-up**, text-led, one line each, **no animation, no deck**. Sits between Backed by (§2) and VLA Foundry (§4).
- **No CTA** — deliberately, to encourage continued scroll into the products.
- Job: pay off the holistic eyebrow (the whole picture / category identity) before the page narrows into the two products; previews **Company › About** where thesis + standards live in full.
- Pillar copy exists verbatim in `content.json` → cheap to stand up.

## §4 VLA Foundry — LOCKED direction (copy TBD)

- **Flagship product = homepage visual centerpiece.** Most weight on the page. Robotic Data (§5) is deliberately designed as the lighter, cleaner commercial counterpart.
- **Keep the 4-card bento** structure: `01 Real Demand` → `02 Owner-operators upload` → `03 QA / Operator Intent` → `04 Standards feedback loop`. Keep the corner labels. Header = eyebrow + H2 + lede + `Explore VLA Foundry →` (routes to full Foundry page).
- **DROP the videos.** Reasons: current footage doesn't match the captions; the hero already carries the video load; and the captions-over-video legibility problem disappears once video is gone.
- **Card media — LOCKED: (a) matched product-UI images.** Replace video with real platform UI per claim — task-folder UI (Real Demand), upload/dataset card (Owner-operators), QA review interface (Operator Intent), loop diagram (Standards loop). Most product-forward option; shows the real software.
  - **QA rule:** whatever media we use, each card's image MUST match its claim (the current video mismatch is the thing we're fixing).
  - Asset to-do: real platform UI screenshots — VLA Foundry Part 1 ships next week → fresh UI available.
- **Pillars (§3) vs. Foundry (§4) — no clash:** keep them as different tiers. Pillars = lightweight **text-only 3-up** (quick frame, no media). Foundry = heavier **feature bento** (image + headline + description per card). Shared card language (radius, hairline borders, type), clearly different density → 3 vs. 4 reads as intentional hierarchy.

## §5 Robotic Data — LOCKED direction (copy TBD)

- **Light, clean, airy** — the visual counterpart to the dark/heavy Foundry (§4). Resolves the old "too busy / too stark" note. Inverse coloring: Foundry weighty, Robotic Data white/open.
- **Strip the tier split.** Remove Discover / Researcher / Enterprise from this section — **§7 Plans owns the tiers + pricing.** §5 becomes ONE clean section about *what the marketplace is*: real-operation data, diversity across tasks + embodiments, QA'd quality, self-serve, and the plain-language data crawler. No prices here.
- **Card media — product-UI, light treatment:** marketplace/library UI, catalog preview, the data-crawler chat. Not the dark heavy tiles of §4.
- Header keeps eyebrow + H2 + `Explore Robotic Data →` (routes to full Robotic Data page).
- **Embeds HEX** (the data chat — see below) as the section's interactive demo. The "find data in plain language" crawler described here IS HEX. Ladder inside the section: describe marketplace → try the crawler (HEX) → plans callout → CTA to Robotic Data page.
- **Plans callout (not a section).** Plans are a main feature, so keep a **small glance** here — the three tiers at a glance (no full pricing table) → links to **Robotic Data › Pricing**. Full pricing lives on that page.

## §5b HEX (embedded data chat, inside Robotic Data) — LOCKED direction

- **What it is:** an embedded AI chat. User queries the catalog in plain language → gets back **preview cards** (task category, robot type, sample frames). Must feel like trying the real product, not a support widget. **Most product-forward moment on the page.**
- **Guided prompt chips — YES.** Seed with clickable examples ("Try: folding clothes · pipe tightening · sorting medicine") so users know what to ask. Delivers the "prompt the user to view different data types" goal.
- **Gate — N=3, persist (localStorage), for now.** After 3 free queries → soft gate → `Subscribe to keep exploring` → **Robotic Data pricing page**. **Product will refine** the count + define the gate behavior; this is the launch placeholder.
- **What HEX is technically: product is building it** (product-owned, live). Treat as a **product/eng dependency** — Chyna designs the surface; product wires the engine.
- **Visual:** B&W brand posture; preview tiles reuse the hero's muted-warm-on-hover treatment for consistency.
- **Placement: embedded inside Robotic Data (§5)** — confirmed, not its own section.

## §6 Blog (was Field notes) — LOCKED direction (copy TBD)

- **Section label: "Latest"** (homepage); **nav item: "Blog."** Retires "Field notes" — too research-only now that it carries announcements.
- **Mixed latest feed across categories** — most recent **6** posts spanning Insights / Announcements / Product Updates / Articles. Proves momentum on both thinking AND shipping; the category tags also show the blog is now structured (fixes the old no-categorization pain point).
- **Card anatomy:** hero image + **category tag** + date + title + short excerpt. (Category tag is the key add vs. today's untagged cards.)
- **Tail CTA:** `See all →` → Blog page. Filtering / sorting / tags live on the Blog page (Nav.md), not the homepage.

## §7 Events — LOCKED direction (copy TBD)

- **Keep the two counter-rolling photo strips** — Recent + Upcoming. Compact momentum band; "we show up and ship in the open."
- **Full color** — one of the three sanctioned color moments (see Page color map). The section's warmth.
- **CTA → Luma calendar (external).** No dedicated Events page. The nav "Events" item also links straight to Luma. Recaps fold into the Blog (Announcements).
- **Real event data — asset to-do (Shaye/Chyna will get the list):** confirmed past + upcoming events *with dates*. Current captions (NVIDIA GTC, ICRA, Operator Meetup) are placeholders; brand rule = don't ship invented events.

## §8 Partners — LOCKED direction

- **Second logo strip, mirror of §2 Backed by:** same template (slower marquee, real monochrome logo marks, statement-level treatment). Difference is the proof — §8 = **co-marketing + product-integration** partners (vs. §2 investors/programs).
- **Placement:** lower page, **after Events, before Final CTA** — clusters credibility (Blog → Events → Partners) ahead of the close.
- **Asset to-do:** confirmed partner list + logo files.

## §9 Final CTA (Robotic Data) — LOCKED direction (copy TBD)

- **Single, Robotic-Data-focused close** (Homepage.md). No audience split, no urgency/countdown.
- **Shape:** short H3 + **primary CTA → Robotic Data pricing** (e.g. "View plans" / "Start training") + a **quiet secondary → "Browse the data"** (Robotic Data page). Secondary is optional — can drop to a single CTA.

## §10 Footer — LOCKED direction

- **Multi-column, remapped to Nav.md:** **Product** (VLA Foundry · Robotic Data) · **Blog** · **Company** (About · Careers · Events→Luma · Press & Contact) · **Social** · **Legal**.
- Include **"Become an owner-operator"** (→ VLA Foundry › Owner/Operators register-robots CTA) — the one operator/Web3 path on the homepage.
- **Dynamic copyright year** (fixes the old Framer "©2025 in 2026" bug).

---

## Decisions to lock before I draft the rest of the copy

1. **Pillars (§3) — trim or cut?** Product-forward argues for cutting it to reach VLA Foundry faster. My rec: **keep one tight band** (category identity is cheap insurance for cold Tier-4 visitors) but it's the first thing to cut if we want a leaner page. Full version moves to the Protocol page.
2. **HEX (§6) placement — dedicated section vs. hero-integrated?** My rec: **dedicated section before Plans** (cleanest funnel), with an optional small teaser in the hero. Alternative: make HEX *the* hero interactive element.
3. **Nav — does Protocol stay in the top nav?** Product-forward suggests a Platform-first nav. Homepage doesn't depend on this, but Chyna needs it for the header. Flag for the layout-guidance doc.
4. **Web3 visibility — where do memberships / owner-operators surface on the homepage?** My rec: inside VLA Foundry (owner-operators register robots) + footer, not as a standalone homepage section.

---

## Open functional spec for Chyna — §6 HEX

- Embedded chat input on the page; user asks for data types in plain language.
- Returns catalog previews (task category, robot type, sample frames).
- **Free-try counter:** after **N** queries (suggest 3), a soft gate replaces results with a `Subscribe to keep exploring → View plans` CTA.
- Visual: matches B&W brand posture; no SaaS-chat clutter. Treat as a product surface, not a support widget.
- Decide: does the counter persist (session/local storage) or reset on reload for launch v1?
