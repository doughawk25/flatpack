"use client"

import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

export default function BubbleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <BubbleGroup>
        <Bubble align="start" variant="muted">
          <BubbleContent>Hey, did you see the new release notes?</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="default">
          <BubbleContent>Not yet — link me when you get a chance.</BubbleContent>
        </Bubble>
        <Bubble align="start" variant="tinted">
          <BubbleContent>Sure, sending it over now.</BubbleContent>
        </Bubble>
      </BubbleGroup>

      <BubbleGroup>
        <Bubble align="end" variant="outline">
          <BubbleContent>Outline style for a lighter look.</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="destructive">
          <BubbleContent>This message failed to send.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
