"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "motion/react"
import { RotateCcw } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MotionDemo({
  name,
  description,
  variants,
}: {
  name: string
  description: string
  variants: Variants
}) {
  const [key, setKey] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const replay = () => {
    setIsPlaying(false)
    setTimeout(() => {
      setKey((k) => k + 1)
      setIsPlaying(true)
    }, 50)
  }

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" size="sm" onClick={replay}>
          <RotateCcw className="mr-1.5 size-3.5" />
          Replay
        </Button>
      </div>
      <div className="flex h-32 items-center justify-center rounded-md bg-muted/50">
        <AnimatePresence mode="wait">
          {isPlaying && (
            <motion.div
              key={key}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="size-16 rounded-lg bg-primary"
            />
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
}
