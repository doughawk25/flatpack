# Monorepo shape

Use this layout when the new system needs a site app plus publishable packages — teams sharing the system across multiple apps or planning a component registry. Same base stack, same "stock defaults" rule — only the layout changes.

## Layout

```
<name>/
├── package.json            # private, packageManager: pnpm, turbo scripts
├── pnpm-workspace.yaml     # packages: [apps/*, packages/*]
├── turbo.json              # build/lint/typecheck pipeline
├── apps/
│   └── site/               # Next.js app (create-next-app output moved here)
└── packages/
    ├── ui/                 # components — shadcn output lives here
    ├── tokens/             # empty shell for future design tokens
    └── config/             # shared tsconfig + eslint config
```

## Steps

1. Create the root:

```bash
mkdir <name> && cd <name> && pnpm init
```

Root `package.json`: set `"private": true`, add `"packageManager": "pnpm@latest"` (pin the actual version pnpm reports), and scripts:

```json
{
  "scripts": {
    "dev": "pnpm --filter @<name>/site dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "typecheck": "turbo typecheck"
  },
  "devDependencies": { "turbo": "^2" }
}
```

`pnpm-workspace.yaml`:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Minimal `turbo.json`:

```json
{
  "$schema": "https://turborepo.dev/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "!.next/cache/**", "dist/**"] },
    "lint": {},
    "typecheck": {}
  }
}
```

2. Scaffold the app into `apps/site` (run create-next-app from `apps/`, per SKILL.md Step 1), rename its package to `@<name>/site`.

3. Create `packages/ui` with a `package.json` exporting source directly (no build step — the consuming app compiles it):

```json
{
  "name": "@<name>/ui",
  "version": "0.1.0",
  "private": true,
  "exports": {
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./hooks/*": "./src/hooks/*.ts"
  },
  "peerDependencies": { "react": "^19", "react-dom": "^19" }
}
```

4. Run `shadcn init` from `apps/site`, then edit `components.json` aliases so generated components land in `packages/ui/src` (aliases like `@<name>/ui/components`). Add `@<name>/ui: workspace:*` to the site's dependencies. Component deps (cva, clsx, tailwind-merge, lucide-react, etc.) go in `packages/ui/package.json`.

5. `packages/tokens`: just a `package.json` (`@<name>/tokens`) and an empty `src/index.ts` — a placeholder for when the system grows real tokens. `packages/config`: shared `tsconfig.base.json` the other packages extend.

6. Tailwind v4 must see the ui package's classes: in the site's `globals.css` add `@source "../../packages/ui/src";` (path relative to the CSS file — verify it resolves).

7. Continue from SKILL.md Step 3 (motion + next-themes go in the site app; ui package gets them as peers if components need them). Smoke-test imports a Button from `@<name>/ui/components/button` to prove cross-package resolution works.
