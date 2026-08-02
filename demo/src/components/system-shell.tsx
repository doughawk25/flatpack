import { AppSidebar } from "@/components/app-sidebar"
import { SidebarChevronTrigger } from "@/components/sidebar-chevron-trigger"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

/**
 * The showcase chrome: sidebar nav + header. In a greenfield scaffold the root
 * layout wraps everything in this. Installed into an existing app, only the
 * /system segment's nested layout uses it — the host app's shell stays theirs.
 */
export function SystemShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
          <SidebarChevronTrigger className="-ml-1 mr-1" />
          <SiteBreadcrumb />
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex-1 p-6 md:p-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
