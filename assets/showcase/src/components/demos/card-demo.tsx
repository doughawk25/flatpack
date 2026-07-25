"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CardDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Team plan</CardTitle>
          <CardDescription>Billed monthly for up to 10 seats.</CardDescription>
          <CardAction>
            <Badge variant="secondary">Active</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Includes unlimited projects, priority support, and shared
            component libraries.
          </p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" size="sm">
            Manage
          </Button>
          <Button size="sm">Upgrade</Button>
        </CardFooter>
      </Card>

      <Card size="sm" className="max-w-sm">
        <CardHeader>
          <CardTitle>Compact card</CardTitle>
          <CardDescription>Uses the sm density variant.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Tighter padding for dense lists and sidebars.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
