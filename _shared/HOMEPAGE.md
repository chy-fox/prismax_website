# Homepage Structure — V2 (Subscription-led)

The locked section order for the prismax.ai V2 homepage rebuild. Reworked 2026-05-22 with Chyna to pivot the page from research-led positioning to **subscription conversion** for Robotic Data, with VLA Foundry as the credibility engine.

V2 supersedes the V1 "Deploy / Operate" split. **Live Control is removed from the homepage entirely** — it remains a community/funnel product, not a homepage surface. V2 launches under the same no-numbers brand posture as V1 (no proof bar, no leading with stats) — except where numbers are load-bearing (pricing, episode counts in plan cards).

Pull all copy through the [narrative/](narrative/) files and the canonical product framing in [Prismax-marketing/brand/products.md](../Prismax-marketing/brand/products.md).

## Strategic shift from V1 → V2

| | V1 (May 13) | V2 (May 22) |
|---|---|---|
| **Page purpose** | Position the category | Drive Robotic Data subscriptions |
| **Hero CTAs** | Deploy / Operate (audience split) | View plans / Browse data |
| **Products surfaced** | VLA Foundry + Teleop Platform | VLA Foundry + Robotic Data |
| **Live Control / teleop** | Featured as "Teleop Platform" | Removed from homepage |
| **Conversion fold** | None — research-led | Plans section with three tiers |
| **Primary audiences served** | Tier 1 buyers + Tier 3 operators | Tier 1 (Enterprise) + Tier 2 (Researcher) + Tier 3 (Discover) — all via subscription tiers |

## Posture

Research-led aesthetic. **Subscription-led intent.** Closest aesthetic + voice match remains Anthropic + Physical Intelligence. The voice does not become SaaS-marketing — pricing is presented operationally (episodes / month, library access), not with growth-hacking tactics. No hype, no urgency timers, no "talk to sales" gates.

Credibility carried by: clarity of positioning, the Operator Intent claim inside VLA Foundry, the investor strip, and the self-serve nature of the offer — **not** by metrics.

## Section order

| # | Section | Purpose |
|---|---|---|
| 1 | Hero | Value claim + subscription-routing CTAs |
| 2 | Backed by | Investor + program logos |
| 3 | Pillars intro | Robots · Data · Intelligence — brand frame, kept tight |
| 4 | Product 1 — VLA Foundry | How the data is made (credibility engine) |
| 5 | Product 2 — Robotic Data | What you subscribe to (the offer) |
| 6 | Plans | Discover · Researcher · Enterprise — primary conversion fold |
| 7 | Field notes | 2–3 recent posts from the blog (CMS feed) |
| 8 | Events | Past + upcoming events — compact band of two counter-rolling photo strips (recent / upcoming) + a single CTA |
| 9 | Final CTA | Single subscription-focused CTA |
| 10 | Footer | Multi-column |

Logic: Claim → Trust → Frame → How data is made → How you access it → Pick a plan → Recent thinking → Show up in person → Convert → Deep nav.

---

## 1. Hero

- **H1:** `The service layer for physical AI.`
- **Subhead:** `PrismaX empowers the robotics industry with usable, scalable data from real operation.`
- **CTAs (two, side-by-side):**
  - `View plans` → anchors to §6 Plans (primary)
  - `Browse the data` → Robotic Data product page or marketplace surface (secondary)
- **Background:** Still frame from an operator session, B&W. Production decision deferred — same open item as V1.

**Why this hero:** The H1 holds the brand positioning verbatim from [narrative/foundation.md](narrative/foundation.md) — and is the direct contrast to the "data layer for physical AI" framing competitors now claim in press (see [Prismax-marketing/research/competitors/encord-2026-05.md](../../Prismax-marketing/research/competitors/encord-2026-05.md)): PrismaX is the *service* layer, not a data platform. The subhead is a single definitional line that says what PrismaX *does*: it leads with the base-layer/empowerment thesis (`empowers the robotics industry` — the industry builds on PrismaX), then names the value as `usable, scalable` data. `From real operation` carries the operation-first Encord wedge positively — no competitor named, no first-person negation — and is also *why* the data is usable and scalable in the first place (captured at the source, not assembled or annotated after the fact). Products and audiences are introduced by the sections that follow (§4 VLA Foundry, §5 Robotic Data, §6 Plans), not crammed into the subhead. CTAs are unchanged: the primary routes into the conversion fold; the secondary lets buyers preview the catalog before committing.

## 2. Backed by

- Single row of monochrome logos: **a16z · NVIDIA Inception · Stanford Blockchain Builder Fund · Symbolic · Volt Capital · Virtuals Protocol · No Limit Holdings**
- No section heading text beyond "Backed by."
- Logos are not stats — they remain green under the no-numbers posture.
- **Backed by section should always move** — the logo row scrolls continuously as a marquee (left-to-right loop, paused on hover, edges masked with a fade). The "Backed by" label stays static on the left; only the logos translate. This and the §8 Events photo strips are the two places on the homepage that carry continuous motion in V2 — both use the same marquee treatment (loop, hover-pause, edge fade); §8 runs two such strips, counter-rolling. The previous Robots · Data · Intelligence pillars marquee has been removed.

## 3. Pillars intro — Robots · Data · Intelligence

Brand frame. Kept from V1 because it carries category identity, but trimmed to a tight three-card row that does not slow the user before they reach the products and plans.

- **Section eyebrow:** `What PrismaX sets standards for`
- **Section lede:** `Three pillars. Each pillar pairs an asset with the system that produces or uses it.`

### Cards (verbatim from [narrative/pillars.md](narrative/pillars.md))

**Robots — Asset · Deployment**
> PrismaX defines the embodiments physical AI should take for specific goals and environments, ensuring capability matches context from the start.

**Data — Asset · Data Generation**
> PrismaX specifies the characteristics of high-quality robotics data, including how it should be captured and what makes it useful for learning.

**Intelligence — Asset · Learning**
> PrismaX connects real operation and structured data generation directly to model training, allowing intelligence to improve across tasks, environments, and robots.

*V1 vs V2 note: replaced "human-in-the-loop operation" in the Intelligence card with "real operation" — the page no longer leads with the teleop framing.*

## 4. Product 1 — VLA Foundry

The credibility engine. This section answers "where does the data come from" before the user is asked to subscribe.

**Card header**
- Eyebrow: `Product · VLA Foundry`
- H2: `Built for robotics and VLA models.`
- Lede: `VLA Foundry is PrismaX's end-to-end software for robotics data collection — from owner-operators at the robot, through community quality review, to delivery as marketplace-ready data.`
- CTA: `Explore VLA Foundry →` (product page)



**Key features (feature → image rows, alternating image-left / image-right):**

1. **Tasks backed by real industry demand.**
   Every task in VLA Foundry is sourced from real robotics demand — not synthetic prompts. Examples currently live: arranging flowers, sorting medicine bottles by pill shape, tightening loose pipes, folding clothes, packing first aid kits, pick-and-place packaged food.
   *Image: task folder UI showing Industrial / Kitchen / Logistics / Office categories.*

2. **Owner-operators upload the data they collect.**
   Vetted robotics manufacturers run real sessions on real hardware and upload the resulting interaction data into VLA Foundry. Owner-operator is canonical — this is real operation, not labeling.
   *Image: upload action / dataset preview card.*

3. **Community QA against co-defined criteria.**
   Community reviewers score submissions against the **Operator Intent** standard — **smoothness, diversity, and format** — and earn for valid contributions. Each submission shows three camera views of the session.
   *Image: QA interface, annotated trajectory or three-camera review layout.*

4. **A standards feedback loop.**
   PrismaX trains internal research models on what comes out of VLA Foundry. Lessons from that training feed back into the QA criteria. Data → training → standards → better data.
   *Image: loop diagram (operator → QA → dataset → training → criteria → operator).*

**Why this section sits before Robotic Data:** Subscribers are buying access to data captured here. Showing the engine first makes the subscription credible. The Operator Intent claim (feature #3) is the most defensible technical anchor for Tier 1 buyers and the bridge into the subscription fold.

**Language guardrails (from products.md):**
- Say "owner-operator" — never "ecosystem embodiment" externally.
- Say "co-defined criteria" / "smoothness, diversity, format" — never "labeling" or "annotation."
- Say "tasks backed by real demand" — never "crowdsourced."

**Visual treatment (V2 — pinned deck, single viewport):**

The entire section occupies **one screen-height of visible content**. Header and card stage live inside a `position: sticky` pin that stays glued to the viewport while the outer scroll track (`220vh`) advances. Scrolling does not reveal more of the section — it advances the **deck** of cards underneath the (always-visible) header. Reading all four features takes ~2.2 viewports of scroll, but the user never sees the section grow taller.

- **Surface:** `var(--paper-soft) #F7F6F4` background, with rounded top corners `clamp(40px, 4vw, 60px)` pulled up over the preceding section by a small negative margin.
- **Header (pinned, always visible):** eyebrow `Product · VLA Foundry`, H2 `Built for robotics and VLA models.` (Editorial New), and the canonical lede. Sits at the top of the pin and stays there for every card; the cards beneath are the only thing that changes as you scroll. No Kanit, no gradient text.
- **Card stage:** the area below the header. All four cards (`.vla-deck-card`) are absolutely positioned at the same `inset: 0` inside this stage; they overlap rather than stack vertically. Z-index ascends with card index (Card 04 on top of Card 03 on top of Card 02 on top of Card 01) so later cards visually cover earlier ones.
- **Card surface:** `var(--paper) #FFFFFF` with a `1.5px solid var(--rule) #C9C1B5` border, `border-radius: clamp(28, 2.6vw, 40)px`, padding `clamp(18, 2vw, 32)px`, and a top-edge shadow (`0 -20px 50px -22px rgba(32,32,32,0.18)`) so each covering card reads as physically *landing on top* of the one below.
- **Card top row:** Editorial-New numeral, Catalogue category label, feature name in Editorial New, and the `Explore VLA Foundry →` CTA pinned to the top-right of every card (per-card, not section-level — the CTA travels with whichever card is on top). 1px hairline rule under the row.
- **Card body:** two-column grid (1.15fr / 1fr) filling the remaining card height. LEFT column carries the feature description plus a structural element — tag row (`Industrial · Kitchen · Logistics · Office` for Demand, `Smoothness · Diversity · Format` for Operator Intent) or italic serif blockquote (`Owner-operator is canonical — this is real operation, not labeling.` for Contribution, `Data → training → standards → better data.` for Standards loop). RIGHT column is one looping local video that fills the remaining height (no fixed min — sizes to the card).
- **Progress indicator:** a row of four 2px dots in the bottom-right corner of the stage. The dot for the currently-dominant card grows to 44px wide and inks to full opacity; others sit at 28px wide and `rgba(32,32,32,0.18)`. Lets the user feel where they are in the deck without having to scroll back.
- **Scroll effect — pinned deck:** the outer `.vla-scroll-track` is `220vh` tall. Inside it `.vla-pin` is `position: sticky; top: 0; height: 100vh`. As the track scrolls past, the pin stays put and a `requestAnimationFrame` scroll handler reads `track.getBoundingClientRect().top` to compute overall progress 0→1. That progress is split into `totalCards − 1 = 3` segments. For each card (except the first, which starts fully visible), its `translateY` interpolates from `100%` (below the stage) to `0%` (fully on top) across its segment, eased with `1 − (1 − t)^2.4`. At progress 100% the deck is fully advanced (Card 04 on top, Cards 01–03 directly beneath, in order). Disabled under `prefers-reduced-motion` — that branch just snaps the deck to the final card.

## 5. Product 2 — Robotic Data

The offer. This is the conversion-bearing product section.

**Card header**
- Eyebrow: `Product · Robotic Data`
- H2: `Built for VLAs & Robotics`
- Lede: `Robotic Data delivers finished, QA'd interaction data from VLA Foundry to anyone training physical AI — on subscription, priced by episode volume, with self-serve access at every tier.`
- CTA: `View plans →` (anchors to §6)

**Why subscribe (selling point → image rows):**

Three selling points, one per subscription tier — so the section ladders into §6 Plans (Discover → Researcher → Enterprise). Each is written to speak to the buyer at that tier *without naming the persona in the copy*; the tier tags below are internal mapping notes, not shown on the page. Mechanics (pricing, self-serve, the chat crawler) sit in the supporting strip below and in §6.

1. **A library that scales with you.** *(internal map: Discover · Tier 3)*
   Start with real robotics data at the most accessible tier and grow into more of the library as your work does — a subscription that scales with you, not a contract you negotiate.
   *Image: recent-releases shelf / episodes-per-month meter.*

2. **Diversity that generalizes.** *(internal map: Researcher · Tier 2)*
   Tasks across Industrial, Kitchen, Logistics, and Office, across multiple robot arm types and camera views, with API access — the variety and reproducibility needed to generalize beyond a single setup.
   *Image: task-category grid / multi-embodiment montage.*

3. **High-quality data at full scale.** *(internal map: Enterprise · Tier 1)*
   The full library at full resolution, with new episodes day one — real-operation data QA'd to the Operator Intent standard (smoothness, diversity, format), at the volume production training demands.
   *Image: full-library view / day-one releases.*

**Access (supporting strip — below the selling points, not headline claims):**
Self-serve at every tier · episode-based pricing · an AI-chat data crawler that finds the data you need in plain language (replaces the script-based crawl workflow). Pricing and tier detail live in §6 Plans; the crawler and self-serve flow are detailed on the Robotic Data product page.

**Critical framing rules (from products.md — do not violate in copy or UI):**
- "Episodes" everywhere user-facing. "Hours" is an internal capacity-planning unit only and must not appear on the homepage.
- "Subscription" everywhere. The Enterprise tier is **not** an enterprise sales contract — it is the top self-serve subscription tier.

## 6. Plans — Discover · Researcher · Enterprise

The primary conversion fold. Three cards, side-by-side on desktop, stacked on mobile. Each card maps to one audience tier from [Prismax-marketing/brand/audience-personas.md](../Prismax-marketing/brand/audience-personas.md):

- **Discover → Tier 3** (builders, hobbyists, indie hackers, AI-curious)
- **Researcher → Tier 2** (academic researchers, lab grad students, ML engineers)
- **Enterprise → Tier 1** (startups and companies training physical AI models)

- **Section eyebrow:** `Plans`
- **Section heading:** `Subscribe at the tier that matches the work.`
- **Section subhead:** `Self-serve at every level. Episode-based pricing. Annual saves on every plan.`

### Card 1 — Discover

- **Tier name:** `Discover`
- **Audience line:** `For builders, hobbyists, and the AI-curious.`
- **Price:** `$9 / month` · `$7 / month billed annually`
- **What's included:**
  - 100 episodes / month
  - 30-minute daily download cap
  - 20% of the library
  - Up to 640×480 @ 30fps · tasks up to 2 minutes
  - 4 robot arm types
  - Browser download
  - New releases on a T+60-day window
- **CTA:** `Start with Discover →`

### Card 2 — Researcher

- **Tier name:** `Researcher`
- **Audience line:** `For academic researchers and ML engineers exploring physical AI.`
- **Price:** `$89 / month` · `$71 / month billed annually`
- **What's included:**
  - 1,500 episodes / month
  - 3-hour daily download cap
  - 60% of the library
  - Up to 1080p @ 60fps · tasks up to 3 minutes
  - 8 robot arm types
  - Browser download + API access
  - New releases on a T+30-day window
- **CTA:** `Start with Researcher →`
- **Optional badge:** `Most popular` (only if data supports it post-launch — leave off for V2 launch).

### Card 3 — Enterprise

- **Tier name:** `Enterprise`
- **Audience line:** `For startups and companies training physical AI models.`
- **Price:** `$899 / month` · `$719 / month billed annually`
- **What's included:**
  - 18,000 episodes / month (20-hour soft daily cap)
  - 100% of the library — full raw access
  - Full resolution · all task lengths
  - 12+ robot arm types — all supported
  - Browser download + API access + JSON download
  - New releases day one (T+0)
- **CTA:** `Start with Enterprise →`

**Plans-section copy rules:**
- "Self-serve" appears on the section subhead and on the Enterprise card. No "Contact us" CTA anywhere in this fold.
- Pricing numbers are load-bearing under the no-numbers posture — they are required for the user to make a buying decision and pass the "removing the number would gut the sentence" test.
- Episode counts and tier-cap numbers are also load-bearing — same justification.
- No urgency framing, no countdown timers, no scarcity language.

### Plan-table footnote (small, below the cards)
> `Daily caps reset at 00:00 UTC. Annual billing is charged once per year at the discounted monthly rate × 12. Robot arm types and library coverage are listed on the Robotic Data product page.`

## 7. Field notes

Latest writing pulled from the blog (Payload CMS feed). Same feed as V1; the eyebrow is relabeled so the section reads as substantive thinking without using the word "Research" as a label.

- **Section eyebrow:** `Field notes`
- **Section heading:** `What we're learning from real operation.`
- 2–3 most recent posts.
- **Required for V2:** author byline + hero image on every post. Text-only posts without bylines do not ship.
- Card layout: hero image · title · author byline · date · short excerpt.
- Tail CTA: `See all writing →`

*V1 vs V2 note: heading changed from "real-world operation" → "real operation" to align with the rest of the page now that the teleop framing has been removed.*

## 8. Events

A compact credibility + momentum band between Field notes and the Final CTA. Built as **two stacked, counter-rolling photo strips** — Recent on top, Upcoming below — with a single CTA in the Upcoming row. Past events prove PrismaX shows up and ships in the open; upcoming events invite people to come find us. Event names + dates are load-bearing here (an event without a date is useless), so they're allowed under the no-numbers posture — same justification as pricing in §6. They are surfaced as **photo captions on the strips**, not as a separate written list.

**Header (asymmetric):**
- **Section eyebrow:** `Events`
- **Section heading (Editorial New, left column):** `Find us in the real world.`
- **Section lede (right column, baseline-aligned to the heading):** `We build physical AI in the open — at conferences, live demos, and operator meetups. Come see the work in person.`
- The two-column head (`1.15fr / 0.85fr`, lede pulled into the right column) fills the width and removes the dead right-hand whitespace a single narrow serif block leaves. Stacks to one column on mobile.

**Two rolling photo strips (the animation):**
- Both strips use the **same marquee treatment as the §2 Backed-by row** — loop, paused on hover, edges masked with a fade. Animate `transform`/`opacity` only, never `transition-all`; under `prefers-reduced-motion` they collapse to static rows. Kept compact at a clamped height (`clamp(132px, 16vw, 208px)`) so the section reads as one short band even with two rows.
- **Recent (top strip):** opens with a `Recent` label + trailing hairline rule + a `2026` year marker; scrolls **left**. Captions name past events.
- **Upcoming (bottom strip):** opens with an `Upcoming` label + hairline rule + the CTA button pinned right; scrolls **right** — the opposite direction, so the pair reads as deliberate counter-rolling motion. Captions name upcoming events + dates.
- Photos are landscape `4:3`, 8px radius, hairline border, each with a small mono caption (`mix-blend-mode: difference` so it stays legible over any frame).

**Photos — color, not B&W:** per Chyna's direction the event photos run in **full color** (the grayscale filter was removed) — an intentional override of the V1 B&W posture for this section only; the photos are the section's warmth and credibility. Placeholder is the operator-session stills already in the build; swap for real event photography before launch. 6–10 landscape photos per strip.

**Recent — past events (caption text, max 3, cycled across the strip):**
- Format: `Event · City` — *placeholders, confirm real events + dates with the team; do not ship invented events:*
  - `NVIDIA GTC · San Jose`
  - `ICRA · Atlanta`
  - `PrismaX Operator Meetup · Online`

**Upcoming — future events (caption text, max 3, cycled across the strip):**
- Format: `Event · City · Date` — *placeholders, confirm with the team; every date must be after the launch date:*
  - `PrismaX Operator Meetup · Jun 2026`
  - `CoRL · Seoul · Sep 2026`
  - `Humanoids Summit · Oct 2026`

**CTA (button, in the Upcoming label row):** `Join us at the next event →` — links to the events / RSVP surface (e.g. a Luma page or an `/events` route). On mobile it drops to a full-width button beneath the Upcoming label. Alt wording if preferred: `Come meet us in person →`.

**Layout (compact, single band):**
- Asymmetric header sits in the content margin; both photo strips run full-bleed (outside the margin) directly beneath their labels.
- No deck, no pin, no full-height treatment — the whole section reads in roughly one short band. Catalogue + Editorial New, 8px radius, on-scale spacing, no gradients or shadows. Full-color photos are the only departure from the B&W posture.

**Why here:** events are credibility + momentum content — the same job as Field notes — so clustering them lets §6 Plans stay clean for conversion while the page builds proof (what we're learning → where we show up) before the Final CTA closes on that momentum.



## 9. Final CTA

Single fold replacing V1's split For Teams / For Operators block. The Plans section already segments by audience, so the closing CTA is unified.

- **Section eyebrow:** `Get started`
- **H3:** `Subscribe and start training.`
- **Supporting line:** `Three tiers, self-serve, episode-priced. The same QA'd data, from the same operator network — at the scale that matches the work.`
- **Primary CTA:** `View plans →` (anchors to §6)
- **Secondary CTA:** `Read the field notes →` (anchors to §7 / blog)

## 10. Footer

Multi-column. Updated to reflect V2 product surfaces and remove the Teleop Platform link.

Columns:

- **Product** — VLA Foundry · Robotic Data · Plans
- **Company** — About · Careers · Brand Kit · Become an owner-operator
- **Writing** — Publications · Blog
- **Legal** — Privacy · Terms · Subscription terms
- **Social** — X · LinkedIn · Discord · GitHub

Dynamic copyright year (fixes the V1 Framer "©2025 in 2026" bug — carries forward as a V2 requirement).





## Source files

- [narrative/foundation.md](narrative/foundation.md) — positioning, category, core problem, why now
- [narrative/strategic-narrative.md](narrative/strategic-narrative.md) — strategic narrative, how PrismaX works, community role
- [narrative/pillars.md](narrative/pillars.md) — Robots · Data · Intelligence pillar definitions
- [narrative/key-messages.md](narrative/key-messages.md) — core messages by audience tier
- [narrative/elevator-pitch.md](narrative/elevator-pitch.md) — pitch + audience-specific CTAs
- [narrative/descriptions.md](narrative/descriptions.md) — verbatim boilerplates
- [narrative/mission-vision.md](narrative/mission-vision.md) — mission + vision statements
- [Prismax-marketing/brand/products.md](../Prismax-marketing/brand/products.md) — canonical product framing for VLA Foundry, Robotic Data, Live Control (the source of the subscription tiers, episode rule, and naming collision flag)
- [Prismax-marketing/brand/audience-personas.md](../Prismax-marketing/brand/audience-personas.md) — Tier 1 / 2 / 3 / 4 mapping driving the plan-card audience lines
- [2026-05-12-prismax-site-analysis-and-benchmark.html](2026-05-12-prismax-site-analysis-and-benchmark.html) — site audit + competitive benchmark
