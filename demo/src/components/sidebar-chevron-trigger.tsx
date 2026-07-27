"use client"

import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { transitions } from "@/lib/motion"

// Same geometry as lucide's chevrons (24 viewBox, stroke 2, round caps):
// the apex slides horizontally through vertical to flip point direction.
const CHEVRON_LEFT = "M15 6L9 12L15 18"
const CHEVRON_RIGHT = "M9 6L15 12L9 18"

export function SidebarChevronTrigger({ className }: { className?: string }) {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar()
  const isOpen = isMobile ? openMobile : open

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      aria-expanded={isOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
        aria-hidden="true"
      >
        <motion.path
          initial={false}
          animate={{ d: isOpen ? CHEVRON_LEFT : CHEVRON_RIGHT }}
          transition={transitions.spring}
        />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
