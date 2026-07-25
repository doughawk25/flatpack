"use client"

import { PlusIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function TooltipDemo() {
  return (
    <div className="flex flex-col gap-6">
      <TooltipProvider>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
            <TooltipContent>Add to favorites</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline" size="icon" aria-label="Add item" />}
            >
              <PlusIcon />
            </TooltipTrigger>
            <TooltipContent side="right">New item</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}
