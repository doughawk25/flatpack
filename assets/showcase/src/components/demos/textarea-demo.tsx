"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TextareaDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" defaultValue="Product designer based in Chicago." />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="disabled-note">Disabled</Label>
        <Textarea
          id="disabled-note"
          defaultValue="This field can't be edited."
          disabled
        />
      </div>
    </div>
  )
}
