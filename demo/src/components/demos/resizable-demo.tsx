"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-48 rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6 text-sm">
            Sidebar
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6 text-sm">
            Content
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup
        orientation="vertical"
        className="h-48 rounded-lg border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6 text-sm">
            Header
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6 text-sm">
            Body
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
