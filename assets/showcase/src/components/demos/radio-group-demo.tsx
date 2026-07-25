"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="compact" id="r-compact" />
          <Label htmlFor="r-compact">Compact</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="comfortable" id="r-comfortable" />
          <Label htmlFor="r-comfortable">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="spacious" id="r-spacious" />
          <Label htmlFor="r-spacious">Spacious</Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="monthly" className="grid-flow-col justify-start">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="monthly" id="r-monthly" />
          <Label htmlFor="r-monthly">Monthly</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yearly" id="r-yearly" disabled />
          <Label htmlFor="r-yearly">Yearly (soon)</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
