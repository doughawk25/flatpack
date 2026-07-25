"use client"

import { CheckCircle2Icon, AlertCircleIcon, TerminalIcon } from "lucide-react"

import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Alert>
        <TerminalIcon />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Deployment successful</AlertTitle>
        <AlertDescription>Your changes are now live in production.</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            View
          </Button>
        </AlertAction>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          Your session has expired. Please sign in again to continue.
        </AlertDescription>
      </Alert>
    </div>
  )
}
