"use client"

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function DrawerDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Drawer>
        <DrawerTrigger render={<Button variant="outline">Open bottom sheet</Button>} />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription>
              Set your daily activity goal for this week.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 text-sm text-muted-foreground">
            350 calories/day
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline">Open side panel</Button>} />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              You have 3 unread messages.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4 text-sm text-muted-foreground">
            <p>New comment on your design file.</p>
            <p>Weekly usage report is ready.</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
