# Website Review — Shaye → Chyna

> ⚠️ **SUPERSEDED (historical).** This was an early review that pushed a *narrative-first* direction. The Chyna sync reversed that to **product-forward**. The current source of truth is **`HOMEPAGE-v3-architecture.md`** (structure), **`CHYNA-design-guidance.md`** (layout/design), and **`HOMEPAGE-copy.md`** (copy). Kept for history only.

**Re:** PrismaX V6 build ([live preview](https://chy-fox.github.io/prismax_website/))
**For:** our next sync · **Date:** 2026-06-16
**Status:** discussion doc — not a change order. Everything here is open to push back on.

---

## How to read this

The V6 build is strong: the hero, the VLA Foundry pinned deck, the Robotic Data scrollytell, and the pricing fold are all on-brand and genuinely good craft. This doc is about **one strategic decision** and then the specifics that follow from it. I've tagged each item **P1 / P2 / P3** so we can spend our time on what matters and not litigate hover states.

- **P1** — strategic / structural. Decide these first; everything else depends on them.
- **P2** — section-level changes that follow once P1 is settled.
- **P3** — visual / polish. Quick to align on, easy to defer.

---

## TL;DR — the one thing to decide

**The build and the new direction are aimed at two different jobs.**

- **V6 today** is a *product-first, single-page, conversion site*: nav is VLA Foundry · Robotic Data · Plans · Research, and the page drives toward the $9 / $89 / $899 subscription fold.
- **The direction I want to take to launch** is a *narrative-first, multi-page site* with **Protocol** and **Platform** as the spine, **Tier 4 (investors / VCs / press / analysts) as the primary audience**, and builders / data buyers / operators as clearly-routed secondary paths.

This isn't a tweak to V6 — it's a different homepage *purpose* and a different IA. **The single most important reason:** a VC or journalist landing cold does not know what a "VLA Foundry" is. We currently open by selling them a product they can't yet contextualize. We need to **tell the story first** (the missing layer → where we come in → the proof), and *then* show the products.

Everything below assumes we align on that. If we don't, most of the P2/P3 notes change.

> **Decision for the meeting:** Do we evolve V6 into the Protocol/Platform, Tier-4-primary, multi-page site for the Q3 launch — or keep it as a single-page subscription site and build the narrative pages around it? My strong rec is the former.

---

## P1 — Strategy & IA

### 1. Primary audience → Tier 4 (investors / press / analysts)
The homepage hero, primary CTAs, and main narrative should be built for Tier 4: clear category statement, traction in context, big-name credibility anchors, founders on record with a thesis, researcher validation, evidence of real deployment. Tier 1 (builders / data buyers) and Tier 3 (operators / validators) become **clearly-signposted secondary paths**, not the spine of the homepage.

- "For builders / data buyers" section → clear path to a sales conversation ("Buy our data" / "Get in touch").
- "For operators / validators / contributors" path → into the platform + membership ladder.

### 2. Lead with story, not the offering
Per my general feedback: **more storytelling before we jump into offerings.** Order should build *up* to the VLA Foundry, not open on it. The narrative arc: the missing layer → where PrismaX comes in → the stack (data, robots, models) → proof → products. VLA Foundry earns its place as the credibility engine *after* the thesis lands.

### 3. New navigation (replaces VLA Foundry · Robotic Data · Plans · Research)

```
Protocol
  · Overview   · Thesis   · Standards – data   · Standards – embodiments
Platform
  · Overview
  · VLA Foundry → Overview · Owner/Operators · Amplifiers/Innovators/Validators
  · Robotic Data → Overview · Pricing
Blog
  · Insights · Announcements · Product Updates · Articles (Bayley's research) · + categories & tags
Company
  · About (Overview · Mission/Vision · Team) · Careers · Events (Luma · Recaps) · Press & Contact
```

This is the biggest structural change: it turns the single page into a hub that routes four audiences, and it fixes the blog's lack of structure (categories + tags) — one of our original Framer pain points.

### 4. Shorten the homepage; push depth to dedicated pages
The homepage should be a **shortened narrative overview** with the deep content repurposed onto the new Protocol / Platform / VLA Foundry / Robotic Data pages. We keep the strong V6 sections but trim them to "glance-level" on the homepage, each linking to its full page.

---

## P2 — Homepage structure (what stays / moves / removes)

Proposed homepage order, narrative-first:

| Section | Action | Notes |
|---|---|---|
| **Hero** | **Keep, re-message** | Subtitle → brand messaging, not a VLA Foundry intro. CTA 1 → Protocol; CTA 2 → Platform. |
| **Backed by** | **Keep, make prominent** | Currently too easy to scroll past — it's our Tier-4 credibility anchor; it should not be a throwaway strip. |
| **Protocol (NEW)** | **Add** | High-level thesis + standards for data + standards for embodiments — essentially our Robots · Data · Intelligence frame. CTA → full Protocol page. |
| **Platform (NEW)** | **Add** | High-level overview containing two repurposed product blocks: **VLA Foundry** (→ Foundry page) and **Robotic Data** (→ Robotic Data page). CTA → full Platform page. |
| **Plans** | **Remove from homepage** | Keep a small pricing glance inside the Robotic Data block; full detail lives on the Pricing page. |
| **One control plane / Console** | **Remove** | Move to the Robotic Data full page. |
| **Field notes** | **Remove from homepage** | Replaced by the structured Blog. (Or keep a tight "Latest from us" card row — see open decisions.) |
| **Events** | **Move** | To the Events full page under Company. |
| **Final CTA** | **TBD** | With multiple audiences now, we may want more than one route here. See open decisions. |
| **Footer** | **Update** | Re-map to the new nav. |

**Net effect:** the homepage stops being a subscription funnel and becomes a narrative front door — Hero → Backed by → Protocol → Platform (Foundry + Robotic Data) → close. Everything heavy gets a real page.

---

## P2 — Section-level notes

**Hero**
- Subtitle is the priority fix. The build still opens with a VLA Foundry product intro ("VLA Foundry captures real robotic work…"). Worth knowing: `HOMEPAGE.md` already specs a stronger brand line — *"PrismaX empowers the robotics industry with usable, scalable data from real operation."* The build is behind its own spec here; easy win.
- CTAs change from `View plans` / `Browse the data` → **Protocol** / **Platform** to match the new narrative routing.

**Backed by** — promote it. Right now it reads as a passive logo strip mid-scroll; for a Tier-4 homepage it's load-bearing credibility and should be given real weight and placement.

**Platform → VLA Foundry** — make the in-video copy legible. The captions currently sit low-contrast white over busy footage and are hard to read (confirmed in the build). Needs a scrim, repositioning, or moving copy off the video.

**Platform → Robotic Data** — same layout family as the Foundry section but with inverse coloring. Today it's too busy and the dark-on-cream contrast is too stark; soften it so the two product blocks read as a matched pair, not two different designs.

---

## P3 — Visual / polish

- **Hero interaction** — the current mouse "trace the data" animation is too distracting. Swap for something quieter: e.g. operator-session photos shaded back that brighten / come forward on hover. Keeps motion on-brand without pulling the eye off the H1.
- Re-confirm event photos stay full-color (intentional B&W override) once they move to the Events page.
- Footer copyright year stays dynamic (the old Framer "©2025 in 2026" bug must not carry over).

---

## Open decisions for us to settle together

1. **Final CTA** — one unified CTA, or split by audience now that Tier 1 / 3 / 4 all have paths? Leaning: a primary Tier-4 CTA with secondary routes, not a single subscription CTA.
2. **Main CTA / nav button** — currently `View plans`. With Plans off the homepage, where does it point — Platform? Get in touch?
3. **"Latest from us" on homepage** — kill Field notes entirely, or keep a tight 4–6-card dated/categorized blog row as the homepage's one "we're active" signal?
4. **Build sequencing** — VLA Foundry Part 1 ships next week and the site goes live in Q3 once the Foundry (verify quality, data marketplace, owner-operator robot register) is out. Which pages must be real for launch vs. can ship as v1 stubs?

---

## What's already working (don't touch)

- Hero typography + the `Prisma(X)` lockup.
- VLA Foundry pinned-deck section — strong, keep the mechanic.
- Robotic Data scrollytell structure (just soften the contrast).
- Pricing fold craft — even though it leaves the homepage, it's the right design for the Pricing page.
- Overall B&W brand posture, Editorial New / Catalogue pairing, motion discipline.

---

*Source: my feedback in "PrismaX Website Update" + a pass over the live V6 build (Hero, VLA Foundry, Robotic Data, Backed by, Events).*
