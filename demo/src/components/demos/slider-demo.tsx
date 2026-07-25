"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function SliderDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label>Volume</Label>
        <Slider defaultValue={[60]} />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Price range</Label>
        <Slider defaultValue={[25, 75]} />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Step of 10</Label>
        <Slider defaultValue={[30]} step={10} />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Disabled</Label>
        <Slider defaultValue={[40]} disabled />
      </div>
    </div>
  )
}
