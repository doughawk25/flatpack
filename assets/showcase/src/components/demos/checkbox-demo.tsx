"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="terms-unchecked" />
          <Label htmlFor="terms-unchecked">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms-checked" defaultChecked />
          <Label htmlFor="terms-checked">Subscribe to the newsletter</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms-disabled" disabled />
          <Label htmlFor="terms-disabled">Requires admin access</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms-disabled-checked" disabled defaultChecked />
          <Label htmlFor="terms-disabled-checked">Two-factor enabled</Label>
        </div>
      </div>
    </div>
  )
}
