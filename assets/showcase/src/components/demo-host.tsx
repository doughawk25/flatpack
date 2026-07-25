"use client"

import { demos } from "@/components/demos"

export function DemoHost({ slug }: { slug: string }) {
  const Demo = demos[slug]
  if (!Demo) {
    return (
      <p className="text-sm text-muted-foreground">
        No demo registered for “{slug}” yet.
      </p>
    )
  }
  return <Demo />
}
