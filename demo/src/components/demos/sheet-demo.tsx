"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Open from right
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Update your account details below.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger render={<Button variant="secondary" />}>
          Open from bottom
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Quick actions</SheetTitle>
            <SheetDescription>Choose what to do next.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
