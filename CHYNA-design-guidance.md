# Homepage — Layout & Design Guidance for Chyna

**From:** Shaye · **For:** the next homepage build
**Companion to:** `HOMEPAGE-v3-architecture.md` (the locked structure + the "why" behind every call). This doc is the **builder's view** — layout, visual treatment, motion, media, and references per section. Where this doc says "see architecture," the rationale lives there.

**Source of truth:** `~/Desktop/Homepage.md` (flow) + `~/Desktop/Nav.md` (navigation). Copy comes separately from Shaye (section by section); use placeholder copy until then.

---

## Locked flow (build in this order)

`Hero → Backed by → Overview → VLA Foundry → Robotic Data (incl. HEX + plans callout) → Blog ("Latest") → Events → Partners → Final CTA → Footer`

**Nav:** VLA Foundry · Robotic Data · Blog · Company. The two products ARE the nav — no Protocol/Platform top level. Thesis + Standards live under **Company › About**. **Events** (nav + homepage) links straight to **Luma** — no built Events page.

---

## Global design system

Brand tokens are unchanged from the build's `CLAUDE.md` — reaffirming the load-bearing ones:

- **Palette:** Black `#202020` · Cream `#DFD8D0` · White `#FFFFFF`. B&W only — no gradients, no shadows beyond the existing card-lift, no brand gold.
- **Type:** *Editorial New* (serif) for H1/H3/H5 only; *Catalogue* (sans) for everything else. Never mixed in one lockup. Serif italic is the emphasis device (as in the hero "*physical* AI").
- **Eyebrows:** uppercase, 35% letter-tracking.
- **Spacing scale only:** 4 · 8 · 16 · 20 · 24 · 48 · 92 · 112 · 124 · 248 · 512.
- **Buttons:** 8px radius; keep the hover skewed-square wipe.
- **Icons:** Material Symbols, Sharp, weight 200–300.
- **Motion:** animate `transform` / `opacity` (and `filter` for the hero hover) only. **Never `transition-all`.** Everything degrades under `prefers-reduced-motion`.

### Page color map (NEW — locked)
B&W by default. Color appears in **exactly three places**, as a signal of "real / live," never decoration:
1. **Hero** — interactive video grid (B&W → muted-warm on hover).
2. **Events** — full-color event photos.
3. **Blog / "Latest"** — real blog thumbnails (naturally color).
Everything else stays mono.

### Shared components (build once, reuse)
- **Logo marquee** — used by **Backed by** (§2) and **Partners** (§8). Slower scroll, all logos move (no static anchors), real monochrome logo marks, edges fade-masked, hover-pause, reduced-motion → static row.
- **Card language** — shared radius, hairline `#C9C1B5` borders, type. Density differs by tier (see Overview vs. Foundry) but the language is consistent.
- **Corner micro-labels** — the build's `01 / REAL DEMAND` style labels (cf. BitRobot). Reuse for Foundry cards and anywhere a small structural tag helps.

---

## Section-by-section build notes

### 1 · Hero
- **Layout:** centered serif H1 (`The service layer for physical AI.`), holistic eyebrow above, Foundry-led subhead below, two CTAs. Keep `Prisma(X)` lockup + current H1 type.
- **Interactive element:** a **grid of looping videos of real platform data** behind/around the H1, placed high. **B&W by default; on hover each tile blooms to a muted/warm color** (`filter` transition, low-contrast — never full saturation). Replaces the old mouse "trace the data" animation.
- **CTAs:** CTA 1 → scrolls to §4 VLA Foundry (Foundry-pointing label, e.g. `Explore the VLA Foundry`). CTA 2 → scrolls to §5 Robotic Data (`Browse the data`). **No "View plans" in the hero.**
- **Media to-do:** pull enough real episode clips from the catalog to fill the grid.

### 2 · Backed by
- **Treatment:** elevate from a thin line to a **statement-level band** — real vertical space, short credibility eyebrow OK.
- **Logos:** **real monochrome logo marks** (not typeset names — this is the key fix). Uses the shared marquee, slower, all scrolling.
- **Asset to-do:** mono logo files for every investor/program.

### 3 · Overview (Robots · Data · Intelligence)
- **Layout:** slim **3-up**, text-led, one line each. No animation, no deck, **no CTA** (encourage scroll). Lighter weight than Foundry so the two don't clash.
- **Reference:** BitRobot's centered-eyebrow + big-headline framing; keep it a quick glance that previews **Company › About**.

### 4 · VLA Foundry  *(flagship = visual centerpiece)*
- **Layout:** keep the **4-card bento** — `01 Real Demand` · `02 Owner-operators upload` · `03 QA / Operator Intent` · `04 Standards loop`. Keep corner labels + header (eyebrow, H2, lede, `Explore VLA Foundry →` to the full page).
- **Media — DROP all video.** Replace with **matched product-UI images** per card: task-folder UI (Real Demand), upload/dataset card (Owner-operators), QA review interface (Operator Intent), **loop diagram** (Standards loop). Each image MUST match its claim (the current video mismatch is what we're fixing).
- **References:** Encord's numbered "Phase 1 / Phase 2" feature layout for the card rhythm; **Figure HELIX** for the standards-loop diagram (card 04) and any Foundry system animation.
- **Asset to-do:** real platform UI screenshots — VLA Foundry Part 1 ships next week → fresh UI available.

### 5 · Robotic Data  *(light/clean counterpart)*
- **Layout:** **white/airy**, the inverse of Foundry's weight. **Strip the Discover/Researcher/Enterprise tier split** — this becomes ONE clean section about the marketplace (real-operation data, diversity, QA'd quality, self-serve, the crawler). No prices here. Header keeps `Explore Robotic Data →` (full page).
- **Embeds HEX** (below) as the interactive demo.
- **Plans callout (not a section):** a small three-tier glance (no full table) → links to **Robotic Data › Pricing** (ref [encord.com/pricing](https://encord.com/pricing)).
- **Media:** light product-UI (marketplace/library/catalog, the crawler) — not Foundry's dark tiles.

#### 5b · HEX (embedded data chat)
- **Inline chat** (not a floating bubble like Encord's "Ask AI" — embed it in the section). User asks in plain language → **preview cards** (task category, robot type, sample frames). Should feel like using the real product.
- **Guided prompt chips** ("Try: folding clothes · pipe tightening · sorting medicine").
- **Gate:** after **3** free queries → soft gate → `Subscribe to keep exploring` → Robotic Data pricing. Persist count via localStorage. *(Product owns final number + gate behavior.)*
- **Visual:** B&W; preview tiles can reuse the hero's muted-warm-on-hover.
- **Dependency:** **product is building the engine** — Chyna designs the surface; product wires it.

### 6 · Blog ("Latest")
- **Layout:** **6-card** mixed feed across categories (Insights / Announcements / Product Updates / Articles). Card anatomy: **color thumbnail · category tag · date · title · short excerpt**. Tail `See all →` to the Blog page.
- **Reference:** **Anthropic "Latest releases"** (`~/Desktop/Website/Anthropic Latest Relases.png`) — DATE / CATEGORY metadata rows, "Read →" CTA, serif headline. Adapt to 6 cards.
- Filtering/sorting/tags live on the Blog page, not here.

### 7 · Events
- **Layout:** keep the **two counter-rolling photo strips** (Recent + Upcoming), compact band. **Full color** (one of the 3 color moments).
- **CTA → Luma calendar — LOCKED: Option 2.** `See the calendar` opens the Luma embed in a **lightweight modal/overlay** (stays on-site). No Events page; recaps fold into the Blog (Announcements). Nav "Events" can open the same modal or link out.
- **Single Recent strip for launch** (no upcoming events yet); re-enable the second Upcoming strip when events exist.
- **Luma embed** (restyle to brand if shown — cream hairline border, 8px radius, responsive sizing, not the default `#bfcbda88` / 4px):
  ```html
  <iframe src="https://luma.com/embed/calendar/cal-0116s8fdbLj3Uqg/events" width="600" height="450" frameborder="0" allowfullscreen aria-hidden="false" tabindex="0"></iframe>
  ```
- **Asset to-do:** **Upcoming** events with dates (Shaye has past events; Upcoming row still needs a confirmed future list). Past events confirmed: Robots & Roll Ups (NY Tech Week), Physical AI & Robotics Salon (NVIDIA GTC Week), RoboHacks (Y Combinator), Robocon (Denver / Chainlink SmartCon / SBC / ETH House mixer), Beta 2026 Hackathon.

### 8 · Partners
- **Same marquee component as Backed by**, lower on the page (after Events, before Final CTA). Co-marketing / product-integration logos, real mono marks.
- **Asset to-do:** confirmed partner list + logo files.
- **Reference:** Encord / OpenMind customer-logo strips for weight + spacing.

### 9 · Final CTA (Robotic Data)
- **Single close:** short H3 + **primary CTA → Robotic Data pricing**, optional quiet secondary → `Browse the data`. No audience split, no urgency/countdown.

### 10 · Footer
- **Multi-column, mapped to Nav.md:** Product (VLA Foundry · Robotic Data) · Blog · Company (About · Careers · Events→Luma · Press & Contact) · Social · Legal.
- Include **"Become an owner-operator"** (→ VLA Foundry › Owner/Operators register CTA).
- **Dynamic copyright year** (fix the old ©2025 bug).

---

## Reference map (`~/Desktop/Website/`)

| Reference | Borrow for |
|---|---|
| **Anthropic Latest Releases** (png) | §6 Blog card anatomy (date/category rows, Read → CTA) |
| **Figure HELIX** (png) | §4 Foundry standards-loop diagram + Foundry system animation |
| **Encord – Physical AI Data Services** (pdf) | §4 numbered-phase feature layout; hero logo strip; subtle dotted data-texture; HEX-as-inline-AI |
| **Encord – pricing** (Nav ref) | Robotic Data pricing page |
| **BitRobot Home** (pdf) | §3 Overview centered framing + corner micro-labels; `/network` → memberships page |
| **OpenMind Home** (pdf) | Logo strips; line-art product visuals as a B&W photo alternative |
| **OpenAI GPT-5.5** (pdf) | Hyperminimal product-launch layout reference |

---

## Asset to-dos (consolidated)
- [ ] Real episode clips for the hero video grid (catalog).
- [ ] Monochrome logo files for the two credibility strips (Chyna pulls logos + adds any missing). Lists below.

### §2 Backed by — logo list (Chyna finalizes + pulls logos)
- a16z / a16z crypto *(pick which)*
- Volt Capital
- Stanford Blockchain Association / Blockchain Builders Fund / Stanford University *(pick which)*
- MIT
- NVIDIA *(label as "NVIDIA Inception")*
- *(Other listed investors to consider adding: Symbolic, No Limit Holdings, Virtuals Protocol.)*

### §8 Partners — logo list (Chyna finalizes + pulls logos)
- Monad, Ethereum, Solana *(pick which)*
- Coinbase / Base *(pick which)*
- Sentient
- Virtuals Protocol *(may move to Backed by — it's a listed investor)*
- OpenMind
- Peaq
- Perle Labs
- [ ] VLA Foundry product-UI screenshots, one matched per card (Foundry Part 1, next week).
- [ ] Real events list — past + upcoming, with dates.
- [ ] Confirmed partner list.

## Open product dependencies
- [ ] **HEX engine** — product is building. Chyna designs the surface against placeholder responses until it's wired.
