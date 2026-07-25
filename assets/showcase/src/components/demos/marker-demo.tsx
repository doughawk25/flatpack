"use client"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { CircleCheckIcon } from "lucide-react"

export default function MarkerDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Marker>
        <MarkerIcon>
          <CircleCheckIcon />
        </MarkerIcon>
        <MarkerContent>Order confirmed</MarkerContent>
      </Marker>

      <Marker variant="separator">
        <MarkerContent>or continue with</MarkerContent>
      </Marker>

      <Marker variant="border">
        <MarkerContent>Section divider with a bottom border</MarkerContent>
      </Marker>
    </div>
  )
}
