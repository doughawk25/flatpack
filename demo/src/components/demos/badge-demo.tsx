"use client"

import { BadgeCheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          <BadgeCheckIcon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="secondary" render={<a href="#" />}>
          Clickable badge
        </Badge>
      </div>
    </div>
  )
}
