"use client"

import { ChevronsUpDownIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export default function CollapsibleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Collapsible className="w-full max-w-sm rounded-lg border p-3" defaultOpen>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Release notes</p>
          <CollapsibleTrigger
            render={<Button variant="ghost" size="icon-sm" />}
          >
            <ChevronsUpDownIcon />
            <span className="sr-only">Toggle</span>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
          <p>v1.4.0 — Added the combobox component.</p>
          <p>v1.3.2 — Fixed drawer swipe gestures.</p>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="w-full max-w-sm rounded-lg border p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Advanced settings</p>
          <CollapsibleTrigger
            render={<Button variant="outline" size="sm" />}
          >
            Toggle
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-2 text-sm text-muted-foreground">
          Enable experimental features and debug logging.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
