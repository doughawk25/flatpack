"use client"

import { MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button>
          <MailIcon />
          Send email
        </Button>
        <Button size="icon" variant="outline" aria-label="Send email">
          <MailIcon />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  )
}
