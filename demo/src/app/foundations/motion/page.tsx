"use client"

import { motion } from "motion/react"

import { MotionDemo } from "@/components/motion-demo"
import { Card } from "@/components/ui/card"
import { allVariants, staggerContainer, staggerItem } from "@/lib/motion"

export default function MotionPage() {
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
        <h2 className="text-lg font-semibold">Stagger Container</h2>
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
            className="grid grid-cols-4 gap-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
