"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="label-demo-name">Full name</Label>
        <Input id="label-demo-name" placeholder="Grace Hopper" />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="label-demo-terms" />
        <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
      </div>

      <div className="group flex flex-col gap-1.5" data-disabled="true">
        <Label htmlFor="label-demo-disabled">Disabled field</Label>
        <Input id="label-demo-disabled" disabled placeholder="Not editable" />
      </div>
    </div>
  )
}
