import Link from "next/link"

import { components } from "@/lib/registry"

export default function ComponentsIndex() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Components</h1>
        <p className="text-muted-foreground">
          {components.length} components, installed as source. Every one below
          is live — click through for a working demo.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="group rounded-lg border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
          >
            <h2 className="text-sm font-medium group-hover:underline">
              {c.title}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {c.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
