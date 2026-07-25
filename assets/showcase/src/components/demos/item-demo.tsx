"use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FileTextIcon, MoreHorizontalIcon } from "lucide-react"

export default function ItemDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ItemGroup>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <FileTextIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Design brief.pdf</ItemTitle>
            <ItemDescription>Updated 2 hours ago · 1.4 MB</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon-sm" aria-label="More actions">
              <MoreHorizontalIcon />
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item variant="outline">
          <ItemMedia variant="image">
            <Avatar>
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Jamie Lee</ItemTitle>
            <ItemDescription>Requested access to Monad UI</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">Pending</Badge>
          </ItemActions>
        </Item>
      </ItemGroup>

      <ItemGroup>
        <Item size="sm" variant="muted">
          <ItemContent>
            <ItemTitle>Compact row</ItemTitle>
            <ItemDescription>Smaller padding for dense lists.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  )
}
