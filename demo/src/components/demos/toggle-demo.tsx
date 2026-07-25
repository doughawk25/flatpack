"use client"

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle bold" defaultPressed>
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle>
        <Toggle aria-label="Toggle underline" disabled>
          <UnderlineIcon />
        </Toggle>
      </div>

      <div className="flex items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
        <Toggle variant="outline" size="sm" aria-label="Toggle italic">
          Italic
        </Toggle>
      </div>
    </div>
  )
}
