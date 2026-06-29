# Homepage Rebuild — Next Steps

**Status:** homepage **structure**, **design guidance**, and **copy** are locked and in this PR. This doc splits the work to take it from plan → built.

**Docs:** `HOMEPAGE-v3-architecture.md` (structure) · `CHYNA-design-guidance.md` (layout/design) · `HOMEPAGE-copy.md` (copy).

---

## Shaye

- [ ] Confirm plan **prices** with product ($9 / $89 / $899) — not from proof-points.
- [ ] Gather footer **social URLs** — X · LinkedIn · Discord · YouTube · Telegram · Substack.
- [ ] Provide **hero episode clips** (real platform data for the B&W → warm-hover grid).
- [ ] Provide **VLA Foundry product-UI screenshots**, one matched per card (Foundry Part 1 ships next week).
- [ ] Pull the **upcoming events** list (to re-enable the second Events strip; launch runs a single Recent strip).
- [ ] Route the **partner logo list** through legal (announced relationships only).
- [ ] Resolve **MIT** + **NVIDIA** framing in Backed by (MIT → bio context, not a backer logo; NVIDIA → "NVIDIA Inception").
- [ ] **Sketch the subpages** with Claude (order below).

## Chyna

- [ ] Build homepage **format / layout / structure** from `CHYNA-design-guidance.md`.
- [ ] **Pull logos** for Backed by + Partners (lists in the design-guidance doc).
- [ ] Implement the section changes:
  - [ ] Hero: B&W video grid, muted-warm-on-hover; retire the mouse animation; relabel CTAs.
  - [ ] VLA Foundry: keep the 4-card bento, **drop video**, swap in matched product-UI images.
  - [ ] Robotic Data: light treatment, **strip the tier split**, embed the **HEX** chat surface, add the plans callout.
  - [ ] Blog: rename to "Latest," **6-card** mixed cross-category feed with category tags.
  - [ ] Events: **single Recent strip** for launch; `See the calendar` opens the **Luma embed in a brand-styled modal**.
  - [ ] Footer: remap to Nav.md, add "Become an owner-operator," dynamic copyright year.
- [ ] Apply the **color map** (B&W except hero / Events / blog thumbnails) and shared components (marquee, card language).

## Together / dependencies

- [ ] **HEX engine** — product is building it; Chyna designs the surface against placeholder responses until it's wired.
- [ ] Sync this week to walk the design-guidance doc and confirm the split.

---

## Subpage sketching order (Shaye + Claude, same process as the homepage)

1. **VLA Foundry** — Overview · system animation · Owner/Operators (robot fleet + register CTA) · Amplifiers/Innovators/Validators (membership tiers, ref [bitrobot.ai/network](https://bitrobot.ai/network)). *Flagship, launch-critical.*
2. **Robotic Data** — Overview · Pricing (ref [encord.com/pricing](https://encord.com/pricing)). *The offer; where Plans + the HEX gate route.*
3. **Company › About** — Overview · Thesis · Standards-data · Standards-embodiments. *Where the narrative pulled off the homepage lives.*
4. **Blog** structure (categories + tags), then **Careers** and **Press & Contact**.
