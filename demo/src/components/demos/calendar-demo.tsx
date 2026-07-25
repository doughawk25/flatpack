"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [single, setSingle] = React.useState<Date | undefined>(
    new Date(2026, 5, 12)
  )
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 5, 10),
    to: new Date(2026, 5, 16),
  })

  return (
    <div className="flex flex-col gap-6">
      <Calendar
        mode="single"
        selected={single}
        onSelect={setSingle}
        defaultMonth={new Date(2026, 5, 12)}
        className="rounded-lg border"
      />

      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={new Date(2026, 5, 1)}
        className="rounded-lg border"
      />
    </div>
  )
}
