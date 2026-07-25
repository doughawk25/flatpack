import { notFound } from "next/navigation"

import { components } from "@/lib/registry"
import { DemoHost } from "@/components/demo-host"

export const dynamicParams = false

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }))
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = components.find((c) => c.slug === slug)
  if (!entry) notFound()

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Components
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{entry.title}</h1>
        <p className="text-muted-foreground">{entry.description}</p>
      </header>
      <section className="rounded-lg border bg-card p-6 md:p-8">
        <DemoHost slug={entry.slug} />
      </section>
      <p className="text-xs text-muted-foreground">
        Source: <code className="font-mono">src/components/ui/{entry.slug}.tsx</code> — copied
        into the project by shadcn, yours to customize.
      </p>
    </div>
  )
}
