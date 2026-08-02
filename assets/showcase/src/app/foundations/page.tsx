import Link from "next/link"

import { foundations } from "@/lib/registry"
import { sys } from "@/lib/system-config"

export default function FoundationsIndex() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Foundations</h1>
        <p className="text-muted-foreground">
          The token layer every component reads from — and the first place you
          customize when flow validation is done.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {foundations.map((f) => (
          <Link
            key={f.slug}
            href={sys(`/foundations/${f.slug}`)}
            className="group rounded-lg border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
          >
            <h2 className="text-sm font-medium group-hover:underline">
              {f.title}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {f.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
