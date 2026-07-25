"use client"

import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function MessageDemo() {
  return (
    <div className="flex flex-col gap-6">
      <MessageGroup>
        <Message align="start">
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Assistant</MessageHeader>
            <div className="rounded-lg bg-muted px-3 py-2 text-sm">
              Here&apos;s a summary of the component you asked about.
            </div>
          </MessageContent>
        </Message>

        <Message align="end">
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <div className="rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
              Thanks, that&apos;s exactly what I needed.
            </div>
            <MessageFooter>Sent 2:41 PM</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}
