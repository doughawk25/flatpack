"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const barData = [
  { month: "Jan", visits: 186, signups: 80 },
  { month: "Feb", visits: 305, signups: 200 },
  { month: "Mar", visits: 237, signups: 120 },
  { month: "Apr", visits: 273, signups: 190 },
  { month: "May", visits: 209, signups: 130 },
]

const barConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
  signups: { label: "Signups", color: "var(--chart-2)" },
} satisfies ChartConfig

const lineData = [
  { day: "Mon", uptime: 99.9 },
  { day: "Tue", uptime: 99.7 },
  { day: "Wed", uptime: 99.95 },
  { day: "Thu", uptime: 99.8 },
  { day: "Fri", uptime: 99.99 },
]

const lineConfig = {
  uptime: { label: "Uptime", color: "var(--chart-3)" },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ChartContainer config={barConfig} className="max-h-64 w-full">
        <BarChart data={barData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="visits" fill="var(--color-visits)" radius={4} isAnimationActive={false} />
          <Bar dataKey="signups" fill="var(--color-signups)" radius={4} isAnimationActive={false} />
        </BarChart>
      </ChartContainer>

      <ChartContainer config={lineConfig} className="max-h-64 w-full">
        <LineChart data={lineData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="uptime"
            stroke="var(--color-uptime)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}
