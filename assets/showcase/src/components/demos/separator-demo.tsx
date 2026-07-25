"use client"

import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="text-sm font-medium">Monad</div>
        <div className="text-sm text-muted-foreground">Design system</div>
        <Separator className="my-4" />
        <div className="text-sm text-muted-foreground">
          Built on Base UI and Tailwind v4.
        </div>
      </div>

      <div className="flex h-8 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Changelog</span>
      </div>
    </div>
  )
}
