"use client"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Save</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Command palette</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Undo</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  )
}
