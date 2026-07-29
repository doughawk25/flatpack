# Working in this project

This is a design system, not just an app. The value of it is that every screen
is built from the same parts — so the rules below exist to keep that true as the
codebase grows. Read them before adding UI.

## Build from the kit

The full component library is already installed as source in
`src/components/ui/` (~60 components). Before writing any UI, check what's there
— it is almost always already there.

- **Use the installed component.** Don't hand-roll a button, modal, dropdown,
  table, or form control. A bespoke one drifts in styling, loses the keyboard
  and screen-reader behavior these have, and quietly forks the system.
- **Compose rather than fork.** Need a variant? Compose the existing component,
  or extend its `cva` variants in place — don't copy it to a new file.
- **Base UI, not Radix.** Components compose via the `render` prop
  (`<DialogTrigger render={<Button>Open</Button>} />`), never `asChild`.

## Style from tokens

Colors, spacing, radii, shadows, and motion are all tokenized. Hardcoded values
are the other way systems erode — they look right today and break the moment the
theme changes.

- **Colors:** use token classes (`bg-primary`, `text-muted-foreground`,
  `border-border`) or `var(--token)`. Never hex, and never a raw palette step
  like `bg-blue-500` in product UI — the primitive ramps exist to *define*
  tokens, not to be used directly.
- **Light and dark both matter.** Token classes handle this automatically;
  hardcoded colors don't. Check both themes before calling a screen done.
- **Spacing and radii:** Tailwind's scale and the `--radius`-derived
  `rounded-*` classes. No arbitrary `p-[13px]`.
- **Motion:** import duration/easing tokens and variants from `src/lib/motion.ts`
  rather than inventing timings, so animation feels like one system.
- **Type:** the system typeface is IBM Plex (Sans + Mono), loaded in
  `src/app/layout.tsx` and mapped through `--font-plex-*`. Don't add fonts ad
  hoc mid-feature — type is a token like any other. Swapping the typeface is a
  customization; see the recipes below.

## Stack facts that will save you a bad hour

- **Tailwind v4 is CSS-first.** There is no `tailwind.config.ts` — don't go
  looking for one. Tokens live in `src/app/globals.css` under `@theme`.
- **Forms:** react-hook-form + zod, resolved with `standardSchemaResolver` from
  `@hookform/resolvers/standard-schema`. Do NOT use `zodResolver` — it fails
  typecheck against zod v4.
- **Toasts:** call `toast()` from `"sonner"`; its `<Toaster />` is already
  mounted in the root layout. (`src/components/ui/toast.tsx` is a separate,
  self-contained Base UI toast system — don't mix the two.)
- **Animation imports** come from `"motion/react"` (the motion.dev package).
  framer-motion is its predecessor — don't install it.

## When something genuinely isn't in the system

This is the case that matters most. In order:

1. Check `src/components/ui/` — is there a component that composes into it?
2. Check the shadcn registry (`pnpm dlx shadcn@latest add <name>`) — the kit may
   already cover it upstream.
3. If neither, **stop and tell the user before building it.** Say what's
   missing, what you'd build, and where it would live. Adding a new primitive is
   a design-system decision, not an implementation detail — the user may already
   have a pattern in mind, or may want it designed rather than improvised.

The same applies to changing tokens: adjusting a color, radius, or type scale
changes every screen at once. Propose it, don't just do it.

**Scope check:** this escalation rule is about changes *you* would initiate
while building a feature. When the user explicitly asks to customize the system
— new brand color, different typeface, tighter radii — that's not a violation,
it's the product working as intended. Do it directly, using the recipes below.

## Customizing the system

Customization is phase two of this system's whole workflow — validate flows on
stock, then reshape the tokens once the flows have taught you what to change.
These are the standard asks and exactly where each one lands, so a one-line
request is enough:

- **"Change the brand color to ___"** → edit `--primary` and
  `--primary-foreground` in `src/app/globals.css`, in BOTH `:root` and `.dark`
  (values are oklch). Verify contrast in both themes.
- **"Make it rounder / sharper"** → change `--radius` in `:root`. Every
  `rounded-*` class derives from it, so one line reshapes the whole system.
- **"Swap the typeface"** → change the `next/font` imports in
  `src/app/layout.tsx`, then point the `@theme inline` font mapping in
  `globals.css` at the new variables. (Beware the circular-mapping trap:
  `--font-sans` must reference the *loaded font's* variable, never itself.)
- **"Add an accent / status color"** → define the variable in `:root` and
  `.dark`, map it as `--color-<name>` in the `@theme inline` block, then use it
  as `bg-<name>` / `text-<name>` like any built-in token.
- **"Make motion snappier / calmer"** → edit the durations and springs in
  `src/lib/motion.ts`; everything that animates from tokens updates at once.
- **"Restyle the buttons / cards / …"** → edit the component source in
  `src/components/ui/<name>.tsx` directly. It's copied-in source, yours to
  change — no library to fight.
- **"Tune dark mode only"** → touch just the `.dark` block in `globals.css`.

After any token change, sweep the showcase (`/foundations`, a few `/components`
pages) in both themes — it's the fastest way to see a token ripple everywhere.

## Keep the showcase honest

The site under `/components` and `/foundations` is the team's reference. If you
add a component to the system, register it in all three places — an undocumented
component is one the next person will rebuild from scratch:

1. `src/components/demos/<slug>-demo.tsx` — the demo itself (default export,
   `"use client"`).
2. `src/components/demos/index.tsx` — add the slug to the dynamic-import map,
   or the page renders "No demo registered".
3. `src/lib/registry.ts` — title + description; this drives the sidebar, the
   index grid, and the static routes.

## Before you call it done

```bash
pnpm typecheck && pnpm build
```

Both must pass. Then look at the actual screen in a browser, in both themes.
