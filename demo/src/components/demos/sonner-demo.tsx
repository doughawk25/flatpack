"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast("Draft saved")}
        >
          Default
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast.success("Changes published")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast.error("Failed to save changes")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast("Invite sent", {
              description: "They'll receive an email shortly.",
              action: {
                label: "Undo",
                onClick: () => toast("Invite cancelled"),
              },
            })
          }
        >
          With action
        </Button>
      </div>
    </div>
  )
}
