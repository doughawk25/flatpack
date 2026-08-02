# Installing Monad into an existing Next.js app

This mode adds the design system to an app someone already built. The golden
rule inverts from greenfield: **additive only**. Their layout, their homepage,
their fonts, their providers — all stay theirs. The showcase gets a wing at
`/system`; it does not take over the site.

## Preflight — all must pass, or stop and explain

Run these checks before touching anything. Failing one is not an error to work
around; it's the answer. Tell the user what's missing and stop.

1. **Clean git tree.** `git status --porcelain` must be empty. If dirty, ask
   the user to commit or stash first. If the directory isn't a git repo,
   `git init` and make an initial commit before anything else. Every install
   step below lands as its own commit, so the whole thing is revertable —
   that guarantee is the point of this check.
2. **Next.js App Router.** `next` in dependencies and an `src/app/` directory.
   Pages Router (`src/pages/`) is unsupported — say so plainly.
3. **Tailwind v4.** `tailwindcss` ^4 in devDependencies (or `@import "tailwindcss"`
   in their CSS). v3 is a hard stop: the kit's tokens are CSS-first and won't
   work. Point them at the Tailwind v4 upgrade guide; offer to help upgrade as
   a separate task, but don't fold it into this install.
4. **TypeScript with the `@/*` alias** pointing at `src/`. If their alias
   differs (e.g. `~/*`), either adapt every import during the copy or stop and
   ask — do not leave broken imports.
5. **Record the baseline.** Run `npx tsc --noEmit` and `pnpm build` (npx fallback
   as usual) BEFORE installing and note any pre-existing failures — don't assume
   a `typecheck` script exists; host apps usually don't have one. Add
   `"typecheck": "tsc --noEmit"` to their scripts as part of the install (it's
   additive and the verify step needs it). The install must leave the project
   *no worse than baseline* — but pre-existing errors are theirs, not yours to
   fix uninvited.

## Install — commit after each numbered step

1. **shadcn.** If `components.json` exists, respect it entirely. If not, run
   `shadcn init -d`, then check `globals.css` for the circular `--font-sans`
   mapping — but point the fix at *their existing font variable* (or leave the
   sans stack alone if they don't use `next/font`). Do NOT introduce IBM Plex;
   type identity belongs to the host app in this mode.
2. **Components, missing ones only.** List `src/components/ui/*.tsx`, diff
   against the kit (~60 components + sonner), and `shadcn add` only what's
   absent. To get the full kit list to diff against, run
   `shadcn add --all --dry-run` — there is no `shadcn list` command, and
   guessing the list means missing components. **Never `--all`, never
   `--overwrite`** — an existing file means they may have customized it, and
   their version wins. Critical non-interactive gotcha: `--yes` does NOT
   suppress shadcn's per-file overwrite prompts, and composite components
   (calendar, command, sidebar, dialog, sheet, and ~8 more) transitively bundle
   button/card/etc. — so adding even just the missing components WILL prompt
   "already exists. Overwrite? (y/N)" for files you never asked for, and a
   non-interactive run hangs forever. Two rules for the actual invocation:
   (a) add components ONE PER COMMAND in a loop — passing a space-joined list
   through `pnpm dlx` gets mangled into a single string and the registry
   404s on `"accordion alert alert-dialog...".json`; (b) pipe `yes n |` into
   each call so every overwrite prompt is answered No — which is exactly
   what the collision policy wants: `for c in $MISSING; do yes n | pnpm dlx
   shadcn@latest add "$c" --yes; done`. Report which components were skipped
   as already present.
3. **Dependencies, missing ones only:** `motion`, `next-themes`,
   `react-hook-form`, `zod`, `@hookform/resolvers`.
4. **The showcase wing.** From the skill's `assets/showcase/`:
   - Copy `src/components/demos/`, the shell components (`system-shell`,
     `app-sidebar`, `site-breadcrumb`, `sidebar-chevron-trigger`,
     `component-preview`, `demo-host`, `easing-curve`, `motion-demo`,
     `monad-logo`, `theme-toggle`, and `theme-provider` if absent), and
     `src/lib/{registry,motion,color-ramps,system-config}.ts`.
   - **Collision policy:** if any target file already exists with different
     content, do not overwrite — write ours alongside as `monad-<name>` and
     update the showcase's imports, or skip and report. Their files win.
   - Create `src/app/system/` and move the route folders into it:
     `components/` and `foundations/` from the assets, plus the assets' root
     `page.tsx` as `src/app/system/page.tsx` (the overview).
   - Write `src/app/system/layout.tsx`:

     ```tsx
     import type { Metadata } from "next"
     import { SystemShell } from "@/components/system-shell"

     export const metadata: Metadata = {
       title: "Design system",
     }

     export default function SystemLayout({
       children,
     }: {
       children: React.ReactNode
     }) {
       return <SystemShell>{children}</SystemShell>
     }
     ```

   - Set the mount point in `src/lib/system-config.ts`:
     `export const SYSTEM_BASE: string = "/system"` — this one line points
     every sidebar link, breadcrumb, and index card at the wing.
   - Copy `public/example-bg.jpg` and `public/avatar.jpg` unless files by those names exist.
   - Fix the code-tab path: `src/app/system/components/[slug]/page.tsx` reads
     demo source with `fs.readFile` — its path already resolves from
     `process.cwd()`/src/components/demos, which is unchanged. Verify one page
     renders code.
5. **Adopt the host's brand — map their styles into the tokens.** The system
   should look like *their* product on day one, not like stock gray. Detect,
   then map — and when detection is ambiguous, ask instead of guessing.

   **Detect, in priority order:**
   - Existing shadcn/CSS tokens (`--primary`, `--brand`, `--accent`, a theme
     block in their CSS): they already have a token layer — adopt their values
     wholesale into the system tokens and skip the rest of detection.
   - `next/font` imports in their layout → their type identity. Point the
     `@theme` font mapping (`--font-sans`, `--font-mono`, `--font-heading`) at
     their font variables.
   - Their CSS + component classes: grep for repeated brand signals — hex/oklch
     literals, `bg-[#...]` arbitraries, or a dominant Tailwind accent family
     (`bg-indigo-600` everywhere is a brand statement). Buttons and links are
     the strongest signal for `--primary`.
   - Radius habits: if their containers (cards, inputs, dialogs) consistently
     use one `rounded-*` scale step (sm–3xl), set `--radius` to match.
     EXCLUDE `rounded-full` from this signal — it's a shape choice for pills
     and avatars, not a corner-radius scale, and mapping `--radius` to it
     would balloon every corner in the system.
   - If the only tokens present are shadcn's own stock neutrals (zero-chroma
     oklch values from a plain `init`), there is no brand to adopt — "keep
     stock, nothing to map" is the correct outcome, not a detection failure.
     This step earns its keep when the host has pre-shadcn brand CSS or
     hardcoded brand colors, not when they started from stock.

   **The confidence rule:** map automatically only when the signal is
   unambiguous — one clear accent color, one font family, an existing token
   layer. Anything less, stop and ask, presenting what you actually found:

   > Found three candidate brand colors: `#4F46E5` (buttons, 23 uses),
   > `#0EA5E9` (links, 9 uses), `#F97316` (banner, 2 uses). Which should map
   > to `--primary`? Options: indigo / sky / orange / keep the neutral stock
   > theme and decide later.

   "Keep stock and decide later" is always one of the options — it's a valid
   choice, not a failure.

   **When you map a color:** set it in both `:root` and `.dark`. If they only
   have a light value, derive the dark variant by keeping the hue and raising
   lightness roughly to the color's 400-step equivalent (e.g. #4F46E5/indigo-600
   → #818CF8/indigo-400), then VERIFY: the dark variant must hit ≥4.5:1
   contrast against the dark background, and `--primary-foreground` must hit
   ≥4.5:1 against the primary in BOTH themes — recompute it if not, and leave
   every color you didn't map at stock values. This step is its own commit
   ("adopt host brand") so it can be reverted independently of the install.

   **Report the mapping as a table** — token → value → where it came from
   (file/selector) — including the ones left stock and why.

6. **Providers, merged not replaced.** Read their root layout:
   - No next-themes `ThemeProvider`? Wrap `{children}` with one
     (`attribute="class" defaultTheme="system" enableSystem
     disableTransitionOnChange`) and add `suppressHydrationWarning` to `<html>`.
   - They already have their own theming? Leave it — the showcase reads token
     classes and inherits whatever theme mechanism exists. Note it in the report.
   - No sonner `<Toaster />`? Add it. Already toasting with something else?
     Leave theirs; the sonner demo page will still mount its own.
   State exactly which lines you inserted.
7. **CLAUDE.md, merged AND corrected — never copied blind.** The bundled
   CLAUDE.md describes the greenfield world and is guaranteed partially wrong
   here. Before landing it, patch it to match the decisions made above: the
   typeface line (the host kept THEIR font, not IBM Plex — name their actual
   font), the motion-tokens path (if the collision policy renamed it, e.g.
   `src/lib/monad-motion.ts`, every mention must follow), and the showcase
   routes (`/system/components`, `/system/foundations`, not root-mounted).
   Then: no CLAUDE.md in the host? Land the patched copy. One exists? Append
   the patched content under a `## Design system (Monad)` heading at the end —
   never delete or reorder their rules.

## Verify

- `pnpm typecheck && pnpm build` (the typecheck script you added in preflight)
  — clean, or identical to the recorded baseline.
- Dev server: `/system` renders the overview with sidebar; a component page's
  demo interacts; a foundations page renders; **and at least one of THEIR
  original pages still renders exactly as before.**
- `git log --oneline` shows one commit per step, so any step can be reverted
  in isolation.

## Report back

What was installed, what was skipped (already present / collision), the exact
provider lines inserted, the wing URL (`/system`), and the revert story
("each step is its own commit; `git revert` any of them"). If anything was
ambiguous enough to guess on, say what you guessed.
