"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function HoverCardDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <HoverCard>
        <HoverCardTrigger className="text-sm font-medium text-primary underline underline-offset-4">
          @monad-design
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium">Monad Design</p>
              <p className="text-sm text-muted-foreground">
                Building a component library on Base UI and Tailwind v4.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger
          delay={150}
          className="text-sm font-medium text-primary underline underline-offset-4"
        >
          Fast preview
        </HoverCardTrigger>
        <HoverCardContent side="top" align="start">
          <p className="text-sm text-muted-foreground">
            This card opens after a shorter hover delay.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
