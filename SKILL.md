---
name: monad
description: Scaffold a complete, product-ready design-system foundation from scratch — Next.js (App Router) + Tailwind v4 + the FULL shadcn/ui component kit + motion.dev + next-themes — all stock defaults, verified working. Use this whenever someone wants to start a new product or web project, spin up a design system, prototype and validate user flows or UX before customizing components, bootstrap a UI foundation, or says anything like "monad", "new system", "fresh project", "scaffold the base", "set up shadcn from scratch". Do NOT use for adding features or components to an existing project.
---

# Monad

Scaffold a complete design-system foundation a team can build real product screens on the same day. The target user is a product team that wants to design and validate user flows and UX *first* — using a full, coherent, stock component kit — and only then invest in customizing tokens and components. Everything ships at stock defaults on purpose: stock is coherent, accessible, and theme-ready, so nothing blocks flow-building, and every later customization is a deliberate decision instead of scaffold debris.

## Step 0: Decide the shape

Two shapes are supported:

- **Single app** (default) — one Next.js app. Fastest path to building screens. Use unless told otherwise.
- **Monorepo** — pnpm workspaces + Turborepo with `apps/site` + `packages/ui|tokens|config`, for teams that plan to publish or share the system across apps. Use when the user mentions packages, a registry, multiple apps, or publishing components. Read [references/monorepo.md](references/monorepo.md) and follow it instead of the steps below.

Ask for the project name if not given. Scaffold in the directory the user specifies — confirm the location before creating it.

## Step 1: Create the Next.js app

```bash
pnpm dlx create-next-app@latest <name> --ts --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-pnpm --yes
```

This gives Next.js (App Router) + TypeScript + Tailwind v4 (CSS-first config via `@tailwindcss/postcss` — there is no `tailwind.config.ts` in v4; theme lives in `globals.css` under `@theme`). Leave it that way.

Two environment gotchas to expect:

- **No pnpm on the machine?** Run every `pnpm`/`pnpm dlx` command as `npx -y pnpm@latest <args>` (or `corepack enable` first if corepack exists).
- **pnpm v11 blocks postinstall scripts** and may report "pnpm install has failed" with `ERR_PNPM_IGNORED_BUILDS` for `sharp`/`unrs-resolver` even though the scaffold is fine. Non-interactive fix (`pnpm approve-builds` prompts): replace the auto-generated `pnpm-workspace.yaml` contents with just the block below (pnpm also writes an `ignoredBuiltDependencies` list and placeholder `allowBuilds` values — remove them, or they re-suppress the builds), then `pnpm install` again:

```yaml
allowBuilds:
  sharp: true
  unrs-resolver: true
```

## Step 2: Initialize shadcn/ui

```bash
cd <name>
pnpm dlx shadcn@latest init -d
```

`-d` accepts the defaults without prompting. This wires up `components.json`, the `cn()` helper in `src/lib/utils.ts`, and CSS variables in `globals.css`.

**Fix the font mapping after init** — two things at once. First, the system's typeface is **IBM Plex** (not create-next-app's Geist); the bundled showcase layout (Step 4) already loads `IBM_Plex_Sans`/`IBM_Plex_Mono` via `next/font/google` under the variables `--font-plex-sans`/`--font-plex-mono`, so don't keep any Geist imports. Second, shadcn's rewritten `globals.css` maps `--font-sans: var(--font-sans)` (circular) — it compiles fine yet silently renders in serif fallback. Fix the `@theme inline` block to point at the Plex variables:

```css
--font-sans: var(--font-plex-sans);
--font-mono: var(--font-plex-mono);
--font-heading: var(--font-plex-sans);
``` The current default style is **base-nova, built on `@base-ui/react`** — not Radix. That means: triggers compose via Base UI's `render` prop (not `asChild`), there is no `form` component (form patterns use `field.tsx`; `shadcn add form` silently installs nothing), and `vaul`/Radix primitives are absent. Don't fight this; it's the stock kit.

Then pull in the **entire** component library — the result should be product-ready, not a starter kit:

```bash
pnpm dlx shadcn@latest add --all --yes
pnpm dlx shadcn@latest add sonner --yes   # sonner is not included in --all
```

This installs ~60 components (button, card, field, dialog, table, chart, sidebar, calendar, …) plus their runtime deps (`@base-ui/react`, `class-variance-authority`, `lucide-react`, `recharts`, `react-day-picker`, `cmdk`, `embla-carousel-react`, etc.).

The registry no longer pulls in form handling — add it so real product forms work day one:

```bash
pnpm add react-hook-form zod @hookform/resolvers
```

In form code, use `standardSchemaResolver` from `@hookform/resolvers/standard-schema` — the classic `zodResolver` has a typing conflict with zod v4 and fails typecheck.

Whoever runs this should be able to open the project and immediately build real product screens with the full kit available.

## Step 3: Motion + theming

```bash
pnpm add motion next-themes
```

- **motion** is the motion.dev package (`import { motion } from "motion/react"`). Use it for animation — not framer-motion (motion is its successor).
- **next-themes**: wrap the root layout in a ThemeProvider:

```tsx
// src/components/theme-provider.tsx
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
export function ThemeProvider(props: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />
}
```

```tsx
// in src/app/layout.tsx — add suppressHydrationWarning to <html>, then:
<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
  {children}
</ThemeProvider>
```

Also mount `<Toaster />` (from `@/components/ui/sonner`) in the root layout — toasts silently no-op without it.

Also add a `typecheck` script to `package.json` (`"typecheck": "tsc --noEmit"`) so the project has the standard dev/build/lint/typecheck quartet from day one.

## Step 4: Install the showcase

This skill bundles a complete, pre-built showcase site in `assets/showcase/` (resolve it relative to this SKILL.md's own directory). It turns the scaffold into a browsable system: a left sidebar listing **Foundations** (Colors with semantic tokens + the 22 primitive Tailwind ramps, Typography, Spacing, Radius, Shadows, Motion with duration/easing tokens and replayable variants, Icons) and **Components** (a live demo page for every one of the ~60 installed components), plus a kitchen-sink Overview home page. Copy it in wholesale — do NOT rebuild any of it by hand:

```bash
cp -R <skill-dir>/assets/showcase/src/. <project>/src/
```

The copy intentionally overwrites `src/app/page.tsx` and `src/app/layout.tsx` (the layout wires ThemeProvider, Toaster, and the sidebar shell — everything Step 3 describes is already done in it; treat Step 3's snippets as documentation of what you're getting, not work to redo). It never touches `src/components/ui/` or `globals.css`, so the shadcn install and your font fix stay as-is. The demo files are also a working reference for the stack's idioms (Base UI `render` prop, field composition, `standardSchemaResolver` forms, motion imports).

Then verify in this order:

```bash
pnpm typecheck && pnpm build
```

Both must pass clean — a successful production build proves the whole stack compiles together. Then:

```bash
pnpm dev
```

Open the preview and verify: the sidebar lists Overview + Foundations + all components, a component page's demo renders and interacts (open the Dialog page and click its trigger), the Motion page's Replay buttons animate, the Colors page shows semantic tokens with the primitive ramps below, and the theme toggles. Fix anything broken before handing off.

## Step 5: Git + handoff

```bash
git init && git add -A && git commit -m "Scaffold base system: Next.js + Tailwind v4 + shadcn + motion"
```

Report back: what was created, where, the dev command, the showcase routes (`/`, `/components`, `/foundations`), and a one-line "what's stock" note (Tailwind theme untouched, shadcn defaults, no custom tokens yet). Point out the intended workflow: build and validate flows on the stock kit now — the showcase doubles as the team's component reference — then customize tokens and components later, as deliberate decisions.

## Step 6 (optional): Share it

The point of this foundation is validating flows with users and stakeholders — and stakeholders don't run `pnpm dev`. If the user wants a shareable link, and only then, check whether the Vercel CLI is already authenticated:

```bash
npx -y vercel whoami
```

- **Authenticated** → offer to deploy and, if the user agrees, run `npx -y vercel deploy --prod --yes` from the project directory and hand back the URL. Use `--prod` deliberately: *preview* deployments sit behind Vercel's deployment protection by default, so anonymous stakeholders get an SSO wall instead of the app; production deploys are public, which is what a validation link needs.
- **Not authenticated** → don't stall the scaffold on a login flow, and never create an account or log in on the user's behalf. Just note that `npx vercel` (after they log in) or any other host gets it live in one command, and finish.

This step must never cause the scaffold to fail — it's a bonus mile when the road is already paved.

## Principles

- **Complete over minimal.** The deliverable is a foundation someone can build a real product on the same day — full component kit, forms, charts, theming, motion all wired and verified. Never hand off a half-stocked starter.
- **Stock over custom.** Don't customize tokens, colors, fonts, or components during scaffolding, and don't import customizations from other projects. The whole point is a neutral baseline for validating UX — customization is the phase that comes after, informed by what the flows revealed.
- **Latest majors.** Use `@latest` for scaffolding tools; don't pin versions from other projects.
- **Verify, don't assume.** Typecheck, build, and look at the smoke-test page in a running dev server before declaring done.
