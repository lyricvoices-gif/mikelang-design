# Portfolio Redesign Brief — Michael Lang
> `mikelang.design` · Next.js + Tailwind · Vercel
> Reference this file as the single source of truth throughout the build.

---

## Owner

**Name:** Michael Lang  
**Title:** Multimodal AI Experience Designer  
**Location:** Atlanta, GA  
**Email:** mikelangdesign@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/mikeybucks  
**Domain:** mikelang.design  
**DNS:** Cloudflare (registrar: GoDaddy)  
**Hosting:** Vercel  

**Positioning statement:**  
Michael creates at the intersection of AI, voice, and human emotion. He is the co-founder of Lyric Voices and a Multimodal AI Experience Designer at AppFolio. His work spans multimodal design, conversational AI, product design, and creative direction — and he builds what he designs. He uses AI tools (Claude, Cursor, and others) to close the gap between design intent and working product, moving from spec to shipped artifact without a handoff.

---

## Portfolio Identity — Designer to Builder

This is the most important framing decision in the portfolio. **This is not a traditional UX portfolio.** It is a portfolio of a practitioner who designs and builds — someone who uses AI as an execution layer to ship real products, tools, and artifacts from design intent.

The evidence of this is everywhere:
- **Lyric Voices** — co-founded, designed, and built the product, the Composer, and the Edition system
- **AI Agent Skill Doc Generator** — identified a capability gap at AppFolio, designed the solution, and built a working Claude skill that any designer can use
- More builds to be added over time

The portfolio must make this through-line unmistakable without labeling it. The structure does the work: case studies show the design craft; the `/builds` section shows the build capability. Visitors draw the conclusion themselves.

**One line that can appear on the About page to make it explicit:**  
*"I design with AI and build with it too."*

Do not use: "designer who codes," "full-stack designer," "design engineer." Those frames are too developer-centric. This is a designer whose medium now includes working AI tools and shipped artifacts.

---

## Purpose

Create a custom portfolio site outside of Framer that feels editorial, confident, art-directed, and archival. The site should position Michael as a sharp creative and technical operator with a distinctive point of view — not a template-based freelancer.

Use **DixonBaxi** as the dominant aesthetic reference for energy, motion, and restraint: bold typographic hierarchy, stark contrast, cinematic project presentation, compressed copy, kinetic transitions, animated type, image reveals, and a confident agency-like tone.

Use **Pentagram** as an aesthetic reference for rigor and range: clear taxonomy, deep archives, project metadata, disciplined grids, editorial essays, sector/discipline filtering, and the sense that every project belongs to a larger body of work.

The resulting portfolio should feel like a personal design practice with DixonBaxi-level motion energy and Pentagram-level intellectual structure. Do not copy either site's layouts, brand marks, copy, imagery, or interaction patterns directly.

References:
- https://www.dixonbaxi.com/
- https://www.pentagram.com/

---

## Design Principles

1. **Lead with point of view.** The first viewport should make it immediately clear who Michael is, what he does, and why his work has taste, judgment, and momentum.
2. **Make the work feel big.** Case studies should use oversized imagery, large titles, strong pacing, and confident whitespace.
3. **Make the body of work feel organized.** Every project should have discipline, sector, year, role, and outcome metadata. The portfolio should reward browsing without becoming database-like.
4. **Keep the interface minimal but not empty.** Navigation, metadata, filters, and CTAs should feel useful and precise.
5. **Use type as the primary visual material.** Typography should carry the brand. Favor dramatic scale shifts, tight section headers, compact metadata, and direct language.
6. **Balance launch energy with long-view credibility.** DixonBaxi influences immediacy, motion, page transitions, scroll behavior, and kinetic type. Pentagram influences project taxonomy, archival depth, writing quality, and evidence of craft.
7. **Build for speed and ownership.** Maintainable in code, easy to update, performant, accessible, deployable to Vercel.

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Content:** `projects.json` for all project and build data; MDX for long-form case study content
- **Animation:** Framer Motion for page transitions, scroll-linked reveals, animated typography, and project hover states
- **Deployment:** Vercel
- **Fonts:** `next/font/google` or `next/font/local`

Do not use Framer. Do not depend on a proprietary visual site builder.

---

## Content Model — Two Types

The portfolio has two distinct content types. Both live in `projects.json` and are distinguished by the `"type"` field.

### Type: `"case-study"`
Traditional project work. Has a full narrative arc: challenge, approach, outcome, reflection. Gets its own page at `/work/[slug]`. Has a `tier` (1, 2, or 3) that determines home page visibility.

### Type: `"build"`
A working artifact Michael designed and built using AI tools. Does **not** require a full case study narrative. Has a lighter schema: problem, what was built, tools used, outcome, and an optional live link. Lives at `/builds/[slug]`. Featured builds appear in a dedicated strip on the home page.

**Key distinction for content voice:** Case studies say *"I designed..."* Builds say *"I built..."* The build entries should feel tighter and more technical — problem → solution → artifact. No fluff.

---

## Project Hierarchy

### Case Studies

**Tier 1 — Flagship**
**Lyric Voices — Composer & Edition System**
Michael is co-founder. Designed and built the product. Gets the full cinematic treatment: full-width hero, deep case study, product detail, ethical positioning, live link. Also belongs in `/builds` because he built it — cross-reference both.

**Tier 2 — Secondary (featured on home)**
- Alexa+ Enterprise — Hospitality AI Agent (Amazon, 2025)
- BMW Concierge — AI Powered App (BMW Group, 2021)

**Tier 3 — Archive**
Virgin Atlantic Concierge, JBL Authentics, Alexa+ Vignettes, and anything added later.

### Builds

**Featured (appears on home page builds strip)**
- AI Agent Skill Doc Generator (AppFolio, 2025) — see full entry in `projects.json`

**More builds to be added over time.** The `/builds` page and content model should make it trivially easy to add new entries — just a new JSON object.

---

## Color System

The palette is **light/warm with cinematic moments** — primary surfaces use warm off-white and ink; accent is a sharp red-orange; cinematic full-bleed sections use near-black.

```css
:root {
  --color-ink:          #050505;   /* Near-black, primary text and dark backgrounds */
  --color-paper:        #f4f1ea;   /* Warm off-white, primary background */
  --color-white:        #ffffff;   /* Pure white for maximum contrast */
  --color-muted:        #8b877f;   /* Secondary / metadata text */
  --color-line:         #d8d1c6;   /* Borders, dividers */
  --color-accent:       #f03a20;   /* Red-orange — active states, labels, graphic marks */
  --color-accent-dark:  #a81f12;   /* Accent hover/pressed state */
  --color-blue:         #1e5eff;   /* Utility / secondary link accent */
}
```

Usage:
- Primary backgrounds alternate between `--color-paper` and `--color-ink` cinematic sections.
- Text is ink or white first, accent second.
- Use the accent for active states, labels, cursor moments, section markers, and small graphic interventions only.
- Case study hero sections and the Lyric flagship use full `--color-ink` backgrounds.
- The `/builds` section and build entries should feel slightly more technical — consider `--color-ink` backgrounds with `--color-accent` code-like labels to signal a different register from case studies.

---

## Typography

Use a strong grotesk or neo-grotesk type system.

**Recommended pairings:**
- Primary: `Inter Tight` (free, Google Fonts)
- Body fallback: `Inter`
- Mono/metadata/build labels: `IBM Plex Mono`

**Type scale (fluid, clamp-based):**
```css
--text-meta:    clamp(0.72rem, 0.7rem + 0.1vw, 0.82rem);
--text-body:    clamp(1rem, 0.95rem + 0.25vw, 1.18rem);
--text-lead:    clamp(1.35rem, 1rem + 1.8vw, 2.5rem);
--text-section: clamp(2.5rem, 1.2rem + 7vw, 8rem);
--text-hero:    clamp(4rem, 1.5rem + 14vw, 15rem);
```

**Note on builds:** `IBM Plex Mono` should be used more prominently in build entries — for the tools list, the problem statement label, and the artifact type tag. The mono treatment signals "this is a technical artifact" without over-engineering the visual language.

---

## Layout System

**Desktop:** 12-column grid · Gutters: `clamp(1rem, 3vw, 3rem)` · Section spacing: `clamp(4rem, 10vw, 10rem)` · Max text measure: 62ch

**Mobile:** Single column · Gutters: `clamp(1rem, 5vw, 2rem)` · Section spacing: `clamp(2.5rem, 8vw, 5rem)`

---

## Site Map

```
/                        → Home
/work                    → Work index (all case studies, filterable)
/work/lyric              → Lyric Voices — Composer (Flagship)
/work/alexa-hospitality  → Alexa+ Enterprise — Hospitality AI Agent
/work/bmw-concierge      → BMW Concierge — AI Powered App
/work/alexa-vignettes    → Alexa+ Enterprise — AI Agent Vignettes (archive)
/work/va-concierge       → Virgin Atlantic Concierge (archive)
/work/jbl-authentics     → JBL Authentics (archive)
/builds                  → All builds (filterable, lightweight)
/builds/ai-skill-doc     → AI Agent Skill Doc Generator
/archive                 → Dense browse surface, older work
/about                   → About Michael
/notes                   → Optional: process notes, field notebook
```

---

## Home Page

### Hero
- Full-viewport or near-full opening on `--color-paper`
- Name + descriptor: **"Multimodal AI Experience Designer"**
- Sub-statement: *"Creating at the intersection of AI, voice, and human emotion."*
- Hero type animates in with staggered line reveals on load
- No hero image — let typography carry it
- Subtle grain texture or slow ambient gradient shift acceptable

### Featured Work
Three case studies in tier order:
1. **Lyric Voices — Composer** *(Tier 1)* — full-width, `--color-ink` background, cinematic
2. **Alexa+ Enterprise** *(Tier 2)* — secondary card
3. **BMW Concierge** *(Tier 2)* — secondary card

Featured project hover: title shift + metadata slide.

### Builds Strip
Sits between Featured Work and Capabilities. Section label: `"Built"` in `IBM Plex Mono` uppercase.

Three featured build entries in a compact horizontal or list layout. Each shows:
- Build title
- One-line problem statement
- Tools used (e.g. `Claude · Claude Code`)
- A `→ View build` link

Ends with a `"View all builds →"` link to `/builds`.

The visual register here should shift slightly from the case study cards — tighter, more technical, monospace-forward. Think: a minimal terminal aesthetic within the warm editorial system.

### Capabilities Strip
`Multimodal Design · Conversational AI · Product Design · Creative Direction`

### Brief Bio
One to two sentences. Reference Lyric, Amazon, AppFolio, and the designer-to-builder approach. Example direction: *"Co-founder of Lyric Voices. Multimodal AI Experience Designer at AppFolio. I design with AI and build with it too."*

### Credibility Markers — `LogoMarquee` component
Two horizontal rows of employer/client names as styled text in `IBM Plex Mono` uppercase, scrolling continuously — top row left, bottom row right — at a slow constant speed. Seamless loop (duplicate the list). Separator: `·` in `--color-accent`.

- **Row 1:** Amazon Alexa · United Airlines · BMW Group · Motorola Mobility · Nokia · Sapient Razorfish · Hearst · Avalere Health
- **Row 2:** (same list, offset start position for visual rhythm)

Section label above: `"Experience"` in `IBM Plex Mono` uppercase, `--color-muted`.
Full viewport width, `overflow: hidden`. Pure CSS `@keyframes translateX` — no Framer Motion here.
`prefers-reduced-motion`: stop animation, display logos in static wrapped flex row.

### Contact CTA
Email: mikelangdesign@gmail.com  
LinkedIn: https://www.linkedin.com/in/mikeybucks

---

## Navigation

- Minimal top nav: name/logo left — `Work`, `Builds`, `About`, `mikelangdesign@gmail.com` right
- No hamburger on desktop
- Mobile: clean slide or fade collapse
- Sticky on scroll with subtle backdrop blur
- Active state: accent underline, not bold or fill

---

## Footer

```
Michael Lang · mikelang.design
mikelangdesign@gmail.com · LinkedIn

Atlanta · © 2026
```

---

## `/builds` Page

A dedicated page for working artifacts Michael built using AI tools. Lighter than case studies — no full narrative arc required.

**Layout:** Filterable list or grid. Each entry shows title, problem statement, tools, year, artifact type tag, and a live link if available.

**Filters:** Tools used (Claude, Cursor, etc.) · Context (Independent, AppFolio, Amazon) · Artifact type (Claude Skill, Prototype, Template, Tool)

**Design tone:** More Pentagram than DixonBaxi here — systematic, browsable, precise. The mono type treatment and technical labels should distinguish this page from the `/work` index without making it feel like a separate site.

**Empty state copy for future entries:** *"More builds added as they ship."*

---

## Build Entry: AI Agent Skill Doc Generator

**Slug:** `/builds/ai-skill-doc`  
**Year:** 2025  
**Context:** AppFolio  
**Artifact type:** Claude Skill  
**Tools:** Claude · Claude Code  
**Status:** Shareable — not proprietary to AppFolio; applicable anywhere a designer is contributing to an AI agent's orchestration layer

**Problem:**  
AppFolio designers were building AI agents that required a skill — an orchestration and execution layer that activates when the agent is triggered for a specific domain task. To ship the skill, Engineering needed a design exemplar doc: a structured artifact specifying the agent's intent, behavior, and interaction patterns precise enough to incorporate into the master system prompt and orchestration layer.

None of the designers had experience writing this artifact. It was being written by Engineering instead — a gap that removed design intent from the thing that most directly shapes how the agent behaves.

**What was built:**  
A Claude skill that designers open in Claude Code. It walks them through a guided conversation, asking the questions necessary to produce a complete exemplar doc ready for engineering handoff. The skill educates along the way — explaining what the orchestration layer is, why each piece of the document matters, and how their design decisions will directly influence agent behavior. The output is a structured doc the designer owns and the engineering team can use directly.

**Why it matters:**  
This isn't an AppFolio-specific tool. Any designer contributing the UX layer to an AI agent's orchestration skill faces this same gap. The skill is domain-agnostic and reusable. It represents a broader pattern in Michael's work: identifying where design intent is being lost in the AI build process and building the tool that puts it back.

**Outcome:**  
Designers at AppFolio can now produce the exemplar doc themselves — with understanding, not just a filled-in template. Engineering receives a design-authored artifact. The handoff is cleaner and the agent behavior is more intentional.

**Live link:** [TODO — add link if/when the skill is published publicly]

---

## Lyric Voices — Flagship Case Study

### What Lyric Is
Lyric Voices is an ethical AI voice platform built on real artist partnerships. The core product is the **Composer** — a tool that lets creators, brands, and product teams direct AI voices with intent, emotion, and pacing *before* they write a single word.

**The central design principle:** Output is not the same as performance. Direction happens before you write — not after.

Live product: https://composer.lyricvoices.ai  
Marketing site: https://www.lyricvoices.ai/composer  
Editions: https://www.lyricvoices.ai/editions

### Michael's Role
Co-founder. Led product design, UX, creative direction, and the overall design system. Also built significant portions of the product directly using AI tools — Lyric is the clearest proof of the designer-to-builder identity.

### The Edition Model
Curated, finite releases — not an overwhelming catalog.

**Edition 01 — 5 voices:**

| Voice | Archetype | Tonal Variants | Use Cases |
|---|---|---|---|
| Morgan | The Anchor | Authoritative · Warm · Composed | Enterprise narration, brand storytelling, hospitality |
| Nova | The Intimist | Compassionate · Encouraging · Calm | Wellness, meditation, personal brand |
| Atlas | The Guide | Patient · Clear · Supportive | E-learning, tutorials, product walkthroughs |
| Riven | The Narrator | Intrigue · Tension · Wonder | Fiction, documentary, audiobooks |
| Hex | The Wildcard | Playful · Ironic · Bold | Creator content, gaming, commentary |

**Edition 02 — In development:** Sage (The Wise), Echo (The Bright), and more.

### The Composer Product
- Choose a voice → set emotional intent → write and direct inline
- Inline emotion marks shift tone mid-script without switching voices
- Broadcast-ready audio in seconds
- Creator ($29/mo): 25 generations/day, 500 char scripts, commercial rights
- Studio ($99/mo): 100 generations/day, 2,000 char scripts, premium rendering
- Enterprise: unlimited, custom voices, API access

### Ethics Positioning
"Composed, not cloned." Every voice is fully licensed from real professional artists — credited, paid, revenue-sharing. No scraping. Scripts and audio never used to train third-party models.

### Case Study Narrative Arc
1. The problem — AI voice is either robotic or ethically compromised
2. The insight — output ≠ performance; direction happens before you write
3. The product — Composer: choose, direct, write
4. The Edition model — curated, finite, artist-built
5. The ethics — real contracts, revenue sharing, no data extraction
6. The outcome — live product, paying subscribers, co-founded and built by Michael

### Visual Treatment
- Full-width `--color-ink` opening — cinematic
- Voice archetype cards as editorial designed elements
- Pull quotes as typographic moments
- Prominent link to https://composer.lyricvoices.ai

---

## Alexa+ Enterprise — Case Study

**Slug:** `/work/alexa-hospitality` · **Year:** 2025 · **Client:** Amazon  
**Services:** Multimodal Design, Conversational AI, Exemplar Writing, Visual Design, Rapid Prototyping

For Alexa+ Enterprise Hospitality Agent, Michael led the design of how GenAI could make hotel and cruise stays feel more personal and human. He created guest scenarios that train the LLM to understand customer intent, respond with warmth, and handle real moments — booking a table, planning an excursion, helping someone unwind. He designed the multimodal experiences guiding guests through each moment with voice and touch, then created story-led demonstrations helping partners see what their brand feels like through Alexa+.

⚠️ NDA: High-level and process-focused only. Flag all asset slots.

---

## BMW Concierge — Case Study

**Slug:** `/work/bmw-concierge` · **Year:** 2021 · **Client:** BMW Group  
**Services:** Multimodal Design, App Design, Conversational AI, Visual Design, Rapid Prototyping  
**External link:** https://pub-a2f7fa8079ba454da09eff972db276aa.r2.dev/IPA_Case_Study.pdf

As lead designer, Michael defined how the BMW Intelligent Personal Assistant should live inside the BMW Connected app. He shaped how the assistant speaks, responds, and guides drivers — writing example dialogs, defining interaction patterns, designing the conversational model, and translating that into high-fidelity mobile prototypes. Partnered with teams in Munich and the U.S. to refine behavior and align on the mental model.

⚠️ NDA: High-level only. Flag all asset slots.

---

## About Page

**Positioning statement:**  
Michael Lang is a Multimodal AI Experience Designer who creates at the intersection of AI, voice, and human emotion. Co-founder of Lyric Voices. Currently at AppFolio. He designs with AI and builds with it too.

**Career:**

| Company | Role | Type |
|---|---|---|
| Lyric Voices | Co-founder | Independent |
| AppFolio | Multimodal AI Experience Designer | In-house |
| Amazon Alexa | Multimodal AI Experience Designer | In-house |
| United Airlines | [Role TBD] | In-house |
| BMW Group | Lead Designer | In-house |
| Motorola Mobility | [Role TBD] | In-house |
| Nokia | [Role TBD] | In-house |
| Sapient Razorfish | Designer | Agency |
| Hearst | Designer | Agency |
| Avalere Health (formerly CloserLook) | Designer | Agency |

**Skills:** Multimodal Design · Conversational AI · Product Design · Creative Direction  
**Build tools:** Claude · Claude Code · Cursor

**Contact:** mikelangdesign@gmail.com · https://www.linkedin.com/in/mikeybucks

---

## Work Index (`/work`) and Builds Index (`/builds`)

Both pages are filterable lists. `/work` uses the case study filters (discipline, sector, year, type). `/builds` uses build-specific filters (tools, context, artifact type).

Both should degrade gracefully without JavaScript. URL state shareable where practical.

---

## Motion Direction

Motion leans hard toward DixonBaxi. Bold not bouncy. Fast not frantic. Cinematic not decorative.

**Required moments:**
1. Initial load — staggered hero type reveal, metadata locks into place
2. Page transitions — fast wipe under 1 second
3. Featured project hover — title shift + metadata slide
4. Case study entry — title, metadata, hero choreograph in separately
5. Archive/builds interaction — rows compress or crossfade deliberately

**Timing tokens:**
```css
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:   cubic-bezier(0.83, 0, 0.17, 1);
--ease-snap:     cubic-bezier(0.76, 0, 0.24, 1);
--duration-fast:   160ms;
--duration-base:   280ms;
--duration-reveal: 520ms;
--duration-slow:   650ms;
--duration-route:  760ms;
```

Always respect `prefers-reduced-motion`.

---

## Component Inventory

- `SiteHeader`
- `SiteFooter`
- `MobileMenu`
- `HeroStatement`
- `ProjectFeature` (Tier 1 and Tier 2 variants)
- `BuildFeature` (compact, monospace-forward)
- `BuildIndex`
- `ProjectIndex`
- `ArchiveIndex`
- `FilterBar`
- `SearchInput`
- `TagList`
- `ProjectMeta`
- `BuildMeta` (tools, artifact type, context)
- `CaseStudyHero`
- `MediaBlock`
- `TextBlock`
- `CapabilityList`
- `LogoMarquee`
- `ContactCTA`
- `PageTransition`
- `RelatedProjects`
- `NotePreview`

---

## Accessibility & Performance

- Semantic HTML landmarks, visible focus states, correct heading hierarchy
- Alt text for meaningful images; decorative images marked appropriately
- Minimum contrast 4.5:1 for body text; 44px mobile tap targets
- `prefers-reduced-motion` support throughout
- Lighthouse target: 90+ · `next/image` everywhere · lazy-load below fold · static generation where possible

---

## DNS / Deployment

**Domain:** mikelang.design (GoDaddy, Cloudflare DNS) · **Host:** Vercel

1. Deploy → get `.vercel.app` URL
2. Vercel → Domains → add `mikelang.design`
3. Add Vercel's A record / CNAME in Cloudflare
4. **Critical:** Set Cloudflare proxy to DNS only (grey cloud) — Vercel handles SSL; orange cloud breaks certificate provisioning
5. Retire Framer site by removing its custom domain

---

## Content TODOs

- [ ] Approved copy and imagery for Alexa+ case studies
- [ ] Approved copy and imagery for BMW case study
- [ ] Roles for United Airlines, Motorola, Nokia
- [ ] Reel 2025 embed URL (move off Framer CDN → Cloudflare R2 or Vimeo)
- [ ] Lyric Composer UI screenshots or screen recordings
- [ ] Confirm if Virgin Atlantic and JBL become full case studies or archive-only
- [ ] Publish AI Agent Skill Doc Generator publicly and add live link to builds entry
- [ ] Headshot or brand photography (optional)
