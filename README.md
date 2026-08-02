<img width="1920" height="1080" alt="Slide 16_9 - 2" src="https://github.com/user-attachments/assets/10357f41-d3ea-485d-8ceb-bd9316bbb86e" />


# Monad

**A Claude Code skill that scaffolds a complete, product-ready design-system foundation in minutes — full component kit, forms, charts, theming, motion, and a built-in system browser, all stock, all verified working.**

Everything arrives in one box, assembles itself, and you customize it *after* it's standing.

**[Live demo →](https://monad-demo-two.vercel.app)** — click through every component and foundation yourself. The demo's source is in [`demo/`](demo/).

## Why

Product teams lose weeks at the start of a project wiring up the same foundation — and then lose more time validating UX on a half-stocked starter where every missing component stalls a flow. Monad inverts that: you get the **entire** stock kit on day one, build and validate your real user flows immediately, and only then invest in customizing tokens and components — as deliberate decisions informed by what the flows revealed.

Stock is the point. The default kit is coherent, accessible, and theme-ready, so nothing blocks flow-building and nothing you'd later undo gets baked in.

## What you get

Run the skill in an empty directory, and a few minutes later:

| Layer | What ships |
|---|---|
| Framework | **Next.js** (App Router) + TypeScript + ESLint |
| Styling | **Tailwind v4** (CSS-first config) |
| Type | **IBM Plex Sans + Mono** via next/font |
| Components | The **full shadcn/ui kit** (~60 components: tables, charts, sidebar, calendar, dialogs, command menu, …) built on **Base UI** primitives — copied in as source you own |
| Forms | **react-hook-form + zod**, working with validation day one |
| Motion | **motion** (motion.dev), plus duration/easing tokens and reusable variants in `src/lib/motion.ts` |
| Theming | **next-themes** — light/dark wired into the layout with a working toggle |
| **Showcase** | A built-in system browser: left-nav over every component (live demo + Preview/Code tabs + copy button + image-background toggle) and foundations pages — logo, colors with the 22 primitive Tailwind ramps, typography, spacing, radius, shadows, motion, icons |
| **Guardrails** | A `CLAUDE.md` in the project root that keeps the system a system long after the scaffold — [see below](#the-rules-ship-with-it) |
| Proof | `typecheck` + production build verified green before handoff |

Everything at latest majors, everything stock defaults, plus an initial git commit.

The skill also encodes the drift gotchas that break naive setups right now: the registry's Radix→Base UI shift, the zod v4 resolver typing conflict, pnpm v11's blocked postinstall scripts, and shadcn's circular `--font-sans` mapping that silently renders your app in serif.

## The rules ship with it

Scaffolding a system is the easy half. Keeping it *one* system — six months and four contributors later — is the hard half. That's usually where design systems quietly die: someone hand-rolls a one-off button, hardcodes a hex, invents a 300ms timing, and the shared language stops being shared.

So the scaffold writes a **`CLAUDE.md` into the project root**. Claude Code loads it automatically in every future session in that repo, which means the constraints outlive the setup:

- **Build from the kit** — check the ~60 installed components before writing UI; compose them or extend their variants instead of forking.
- **Style from tokens** — token classes or `var(--token)`, never a hex, and never a raw palette step like `bg-blue-500` in product UI. The primitive ramps exist to *define* tokens, not to be used directly. Both themes get checked before a screen is called done.
- **Animate from the motion tokens** in `src/lib/motion.ts`, so timing feels like one system rather than a dozen opinions.
- **Escalate design-system decisions.** If a needed primitive genuinely doesn't exist, or a token would have to change, Claude stops and tells you what's missing and what it would build — *before* building it. Changing a token changes every screen at once; that's a call for you to make, not an implementation detail to improvise.
- **Keep the showcase honest** — a new component ships with its demo page, or the next person rebuilds it from scratch.

Each rule ships with its reasoning rather than as a bare prohibition, because an agent that understands *why* a constraint exists applies it sensibly to cases the rules never anticipated. The escalation rule is deliberately scoped to system-level decisions, so it surfaces the choices worth your attention instead of interrupting on routine feature work.

It's a plain markdown file — edit it to encode your own house rules, or delete it if you'd rather work without guardrails.

## Install

Clone this repo into your Claude Code skills directory:

```bash
git clone https://github.com/doughawk25/monad.git ~/.claude/skills/monad
```

That's it — Claude Code picks it up automatically.

## Use

In any Claude Code session:

```
/monad
```

…or just say what you want: *"spin up a new system called acme-app in ~/projects"*. Claude scaffolds, wires, installs the showcase, verifies (typecheck + build + a running dev server), and hands you the report. Ask for a shareable link and — if your Vercel CLI is logged in — it deploys and hands you a public URL for stakeholders too.

Three shapes are supported — the skill auto-detects which one fits from the directory it's pointed at, and what you say always overrides:

- **Single app** (default) — one Next.js app, fastest path to building screens.
- **Existing app** — *"add the design system to my app."* Installs additively into a Next.js App Router + Tailwind v4 project: the showcase mounts as a `/system` wing, only *missing* components get added (your customized ones are never overwritten), providers are merged into your layout rather than replacing it, and your brand — colors, fonts, radius — is detected and mapped into the system tokens (it asks, with concrete options, when the signal is ambiguous). Requires a clean git tree; every step lands as its own revertable commit.
- **Monorepo** — pnpm workspaces + Turborepo (`apps/site` + `packages/ui|tokens|config`) for teams that plan to publish or share the system across apps. Ask for "the monorepo shape."

## Requirements

- [Claude Code](https://claude.com/claude-code)
- Node.js 18+

pnpm is optional — the skill falls back to `npx pnpm` on machines without it.

## The workflow it's built for

1. **Scaffold** a fresh project (minutes).
2. **Build your real user flows** on the stock kit — signup, checkout, dashboards, settings — with zero component gaps, using the built-in showcase as your team's component reference.
3. **Validate the UX** with users and stakeholders while the design is neutral and nobody's attached to pixels.
4. **Then customize** — tokens first (colors, radii, fonts in `globals.css`), component source second. You own all of it; there's no library to fork or fight.

## Status

- ✅ React / Next.js greenfield — execution-tested end to end (scaffold → showcase install → typecheck → production build → visual check)
- ✅ Existing-app install — adversarially tested: host pages verified byte-identical after install, customized components survive collisions, brand adoption maps real colors with WCAG-checked dark variants, and non-Next / Tailwind v3 projects get a clean refusal with zero files touched
- 🔜 Vue (Nuxt + shadcn-vue) and Svelte (SvelteKit + shadcn-svelte) variants

---

Built by [@doughawk25](https://github.com/doughawk25). The web ecosystem moves fast — if a scaffold step breaks against a newer registry, open an issue.
