"use client"

import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"

export default function SpinnerDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Spinner className="size-3" />
        <Spinner />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>

      <Button size="sm" disabled>
        <Spinner />
        Loading
      </Button>
    </div>
  )
}
