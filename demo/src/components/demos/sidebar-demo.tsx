"use client"

import { Folder, Home, Inbox, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", icon: Home, active: true },
  { title: "Inbox", icon: Inbox, badge: "12" },
  { title: "Projects", icon: Folder },
  { title: "Team", icon: Users },
  { title: "Settings", icon: Settings },
]

export default function SidebarDemo() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">
        The navigation rail on the left of this site is the sidebar component
        doing its day job. Here it is again as a self-contained instance:
      </p>
      <div className="overflow-hidden rounded-lg border">
        <SidebarProvider className="min-h-[320px]">
          <Sidebar collapsible="none" className="border-r">
            <SidebarHeader className="px-4 py-3">
              <span className="text-sm font-semibold">Acme Inc</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.active}>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="flex flex-1 items-center justify-center bg-muted/30 text-sm text-muted-foreground">
            Content area
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
