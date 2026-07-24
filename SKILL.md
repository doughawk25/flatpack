---
name: flatpack
description: Scaffold a complete, product-ready design-system foundation from scratch — Next.js (App Router) + Tailwind v4 + the FULL shadcn/ui component kit + motion.dev + next-themes — all stock defaults, verified working. Use this whenever someone wants to start a new product or web project, spin up a design system, prototype and validate user flows or UX before customizing components, bootstrap a UI foundation, or says anything like "flatpack", "new system", "fresh project", "scaffold the base", "set up shadcn from scratch". Do NOT use for adding features or components to an existing project.
---

# Flatpack

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
- **pnpm v11 blocks postinstall scripts** and may report "pnpm install has failed" with `ERR_PNPM_IGNORED_BUILDS` for `sharp`/`unrs-resolver` even though the scaffold is fine. Non-interactive fix (`pnpm approve-builds` prompts): edit the auto-generated `pnpm-workspace.yaml` to allow those builds, then `pnpm install` again:

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

**Check the font mapping after init** — shadcn's rewritten `globals.css` maps `--font-sans: var(--font-sans)` (circular), but create-next-app names its font variable `--font-geist-sans`. The result compiles fine yet silently renders in serif fallback. Fix the `@theme inline` block to point at the real variables:

```css
--font-sans: var(--font-geist-sans);
--font-heading: var(--font-geist-sans);
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

## Step 4: Smoke-test page

Replace `src/app/page.tsx` with a kitchen-sink page proving the whole stack in one screen: a shadcn `Button`, `Card`, a `Dialog`, an `Input` composed with `Field` components + react-hook-form via `standardSchemaResolver` (exercises forms + zod), one `motion.div` fade-in, a sonner toast trigger, and a light/dark toggle via `useTheme`. This doubles as the team's first playground page and a working reference for the stack's idioms (Base UI `render` prop, field composition, motion imports).

Then verify in this order:

```bash
pnpm typecheck && pnpm build
```

Both must pass clean — a successful production build proves the whole stack compiles together. Then:

```bash
pnpm dev
```

Open the preview and verify: page renders, button styled, dialog opens, form validates, toast fires, animation plays, theme toggles. Fix anything broken before handing off.

## Step 5: Git + handoff

```bash
git init && git add -A && git commit -m "Scaffold base system: Next.js + Tailwind v4 + shadcn + motion"
```

Report back: what was created, where, the dev command, the full component inventory now available, and a one-line "what's stock" note (Tailwind theme untouched, shadcn defaults, no custom tokens yet). Point out the intended workflow: build and validate flows on the stock kit now; customize tokens and components later, as deliberate decisions.

## Principles

- **Complete over minimal.** The deliverable is a foundation someone can build a real product on the same day — full component kit, forms, charts, theming, motion all wired and verified. Never hand off a half-stocked starter.
- **Stock over custom.** Don't customize tokens, colors, fonts, or components during scaffolding, and don't import customizations from other projects. The whole point is a neutral baseline for validating UX — customization is the phase that comes after, informed by what the flows revealed.
- **Latest majors.** Use `@latest` for scaffolding tools; don't pin versions from other projects.
- **Verify, don't assume.** Typecheck, build, and look at the smoke-test page in a running dev server before declaring done.
