import { promises as fs } from "fs"
import path from "path"
import { notFound } from "next/navigation"

import { components } from "@/lib/registry"
import { ComponentPreview } from "@/components/component-preview"
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

  const code = await fs.readFile(
    path.join(process.cwd(), "src", "components", "demos", `${entry.slug}-demo.tsx`),
    "utf-8"
  )

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Components
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{entry.title}</h1>
        <p className="text-muted-foreground">{entry.description}</p>
      </header>
      <ComponentPreview code={code}>
        <DemoHost slug={entry.slug} />
      </ComponentPreview>
      <p className="text-xs text-muted-foreground">
        Source: <code className="font-mono">src/components/ui/{entry.slug}.tsx</code> — copied
        into the project by shadcn, yours to customize. The code tab shows the
        demo page&apos;s source.
      </p>
    </div>
  )
}
