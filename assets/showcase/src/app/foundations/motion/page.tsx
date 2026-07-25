"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { RotateCcw } from "lucide-react"

import { EasingCurveGraph } from "@/components/easing-curve"
import { MotionDemo } from "@/components/motion-demo"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  allVariants,
  motionTokens,
  staggerContainer,
  staggerItem,
} from "@/lib/motion"

export default function MotionPage() {
  const [staggerKey, setStaggerKey] = useState(0)

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Foundations
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Motion</h1>
        <p className="text-muted-foreground">
          Reusable animation variants built on motion.dev, defined once in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            src/lib/motion.ts
          </code>
          . Click Replay to see each animation.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Duration</h2>
        <p className="text-sm text-muted-foreground">
          Timing tokens for consistent animation speed. Hover a card to preview
          its duration.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(motionTokens.duration).map(([key, token]) => (
            <Card key={key} className="group cursor-pointer p-6">
              <div className="mb-3 flex items-baseline justify-between">
                <p className="text-base font-medium">{token.label}</p>
                <p className="font-mono text-sm text-muted-foreground">
                  {token.value}
                </p>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full w-0 rounded-full bg-primary group-hover:w-full"
                  style={{ transition: `width ${token.value} ease-out` }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {token.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Easing</h2>
        <p className="text-sm text-muted-foreground">
          Easing curves with their progress and speed profiles.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(motionTokens.easing).map(([key, token]) => (
            <Card key={key} className="p-6">
              <p className="text-base font-medium">{token.label}</p>
              <p className="mb-3 mt-1 break-all font-mono text-xs text-muted-foreground">
                {token.value}
              </p>
              <EasingCurveGraph value={token.value} />
              <p className="mt-3 text-sm text-muted-foreground">
                {token.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Animation Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(allVariants).map(([key, variant]) => (
            <MotionDemo
              key={key}
              name={variant.label}
              description={variant.description}
              variants={variant.variants}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Stagger Container</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStaggerKey((k) => k + 1)}
          >
            <RotateCcw className="mr-1.5 size-3.5" />
            Replay
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Wrap child elements with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            staggerContainer
          </code>{" "}
          and apply{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            staggerItem
          </code>{" "}
          to each child for sequenced entrance animations.
        </p>
        <Card className="p-6">
          <motion.div
            key={staggerKey}
            className="grid grid-cols-4 gap-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="h-16 rounded-lg bg-primary/80"
              />
            ))}
          </motion.div>
        </Card>
      </section>
    </div>
  )
}
