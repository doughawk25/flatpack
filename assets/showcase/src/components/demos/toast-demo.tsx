"use client"

import { Toaster, toast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

export default function ToastDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.add({
              title: "Draft saved",
              description: "Your changes were saved locally.",
            })
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.add({
              title: "Changes published",
              type: "success",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.add({
              title: "Failed to save changes",
              type: "error",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.add({
              title: "Invite sent",
              description: "They'll receive an email shortly.",
              actionProps: {
                children: "Undo",
                onClick: () => toast.add({ title: "Invite cancelled" }),
              },
            })
          }
        >
          With action
        </Button>
      </div>

      <Toaster />
    </div>
  )
}
