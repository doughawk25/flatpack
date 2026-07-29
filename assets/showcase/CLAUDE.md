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

## Keep the showcase honest

The site under `/components` and `/foundations` is the team's reference. If you
add a component to the system, add its demo page too (`src/components/demos/`
plus an entry in `src/lib/registry.ts`) — an undocumented component is one the
next person will rebuild from scratch.

## Before you call it done

```bash
pnpm typecheck && pnpm build
```

Both must pass. Then look at the actual screen in a browser, in both themes.
