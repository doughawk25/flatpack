"use client"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export default function ProgressDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Progress value={40} className="flex-col items-stretch gap-1.5">
        <div className="flex items-center justify-between">
          <ProgressLabel>Uploading</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>

      <Progress value={75} className="flex-col items-stretch gap-1.5">
        <div className="flex items-center justify-between">
          <ProgressLabel>Storage used</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>

      <Progress value={null} className="flex-col items-stretch gap-1.5">
        <ProgressLabel>Processing</ProgressLabel>
      </Progress>
    </div>
  )
}
