"use client"

import { InboxIcon, SearchXIcon } from "lucide-react"

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

export default function EmptyDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription>
            When someone sends you a message, it will show up here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Compose message</Button>
        </EmptyContent>
      </Empty>

      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchXIcon />
          </EmptyMedia>
          <EmptyTitle>No results found</EmptyTitle>
          <EmptyDescription>
            Try adjusting your filters or search terms.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" variant="outline">
            Clear filters
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
