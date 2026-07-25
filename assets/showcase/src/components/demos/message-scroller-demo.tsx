"use client"

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const thread = [
  { id: "m1", from: "Assistant", text: "Welcome! Ask me anything about Monad." },
  { id: "m2", from: "You", text: "How do I compose an input group?" },
  { id: "m3", from: "Assistant", text: "Wrap InputGroupInput with InputGroupAddon parts." },
  { id: "m4", from: "You", text: "Does it support textareas?" },
  { id: "m5", from: "Assistant", text: "Yes — swap in InputGroupTextarea." },
  { id: "m6", from: "You", text: "Great, thanks for the quick answer." },
]

export default function MessageScrollerDemo() {
  return (
    <div className="flex flex-col gap-6">
      <MessageScrollerProvider defaultScrollPosition="end">
        <MessageScroller className="h-64 rounded-lg border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="px-4 py-3">
              {thread.map((message) => (
                <MessageScrollerItem key={message.id} messageId={message.id}>
                  <p className="text-xs font-medium text-muted-foreground">
                    {message.from}
                  </p>
                  <p className="text-sm">{message.text}</p>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="end" />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
