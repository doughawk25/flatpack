"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="account" className="max-w-sm">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-muted-foreground">
            Update your name and profile details.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-muted-foreground">
            Change your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="team">
          <p className="text-sm text-muted-foreground">
            Manage members and pending invites.
          </p>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="overview" className="max-w-sm">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="text-sm text-muted-foreground">
            A summary of recent project activity.
          </p>
        </TabsContent>
        <TabsContent value="activity">
          <p className="text-sm text-muted-foreground">
            A detailed log of every change made.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
