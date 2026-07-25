"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Label className="gap-2">
        <Switch defaultChecked />
        Enable notifications
      </Label>

      <Label className="gap-2">
        <Switch size="sm" defaultChecked />
        Compact size
      </Label>

      <Label className="gap-2">
        <Switch />
        Auto-renew subscription
      </Label>

      <Label className="gap-2 opacity-50">
        <Switch disabled />
        Disabled option
      </Label>
    </div>
  )
}
