"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full max-w-sm">
        <p className="mb-2 text-sm text-muted-foreground">16 / 9</p>
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            16:9 media placeholder
          </div>
        </AspectRatio>
      </div>

      <div className="w-full max-w-sm">
        <p className="mb-2 text-sm text-muted-foreground">1 / 1</p>
        <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            Square placeholder
          </div>
        </AspectRatio>
      </div>

      <div className="w-full max-w-sm">
        <p className="mb-2 text-sm text-muted-foreground">21 / 9</p>
        <AspectRatio ratio={21 / 9} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            Ultrawide banner
          </div>
        </AspectRatio>
      </div>
    </div>
  )
}
