"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="input-demo-name">Name</Label>
        <Input id="input-demo-name" placeholder="Ada Lovelace" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="input-demo-email">Email</Label>
        <Input
          id="input-demo-email"
          type="email"
          aria-invalid
          defaultValue="not-an-email"
        />
        <p className="text-sm text-destructive">Enter a valid email address.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="input-demo-disabled">Workspace</Label>
        <Input id="input-demo-disabled" disabled defaultValue="acme-inc" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="input-demo-file">Resume</Label>
        <Input id="input-demo-file" type="file" />
      </div>
    </div>
  )
}
