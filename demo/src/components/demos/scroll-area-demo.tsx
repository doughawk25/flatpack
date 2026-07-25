"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 20 }, (_, i) => `Tag ${i + 1}`)
const teams = ["Design", "Engineering", "Product", "Marketing", "Sales", "Support"]

export default function ScrollAreaDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ScrollArea className="h-48 w-64 rounded-lg border">
        <div className="p-4">
          <h4 className="mb-2 text-sm font-medium">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="py-1.5 text-sm">{tag}</div>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>

      <ScrollArea className="w-full max-w-md rounded-lg border whitespace-nowrap">
        <div className="flex w-max gap-3 p-4">
          {teams.map((team) => (
            <div
              key={team}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md bg-muted text-sm"
            >
              {team}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
