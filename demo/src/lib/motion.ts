// Reusable motion variants — animation presets for the design system.
import type { Variants, Transition } from "motion/react"

// Transition presets
export const transitions = {
  fast: { duration: 0.15, ease: [0, 0, 0.2, 1] } satisfies Transition,
  normal: { duration: 0.25, ease: [0, 0, 0.2, 1] } satisfies Transition,
  slow: { duration: 0.4, ease: [0, 0, 0.2, 1] } satisfies Transition,
  slower: { duration: 0.6, ease: [0, 0, 0.2, 1] } satisfies Transition,
  spring: { type: "spring", stiffness: 400, damping: 25 } satisfies Transition,
  springBouncy: { type: "spring", stiffness: 300, damping: 15 } satisfies Transition,
} as const

// Fade
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.normal },
  exit: { opacity: 0, transition: transitions.fast },
}

// Slide
export const slideUp: Variants = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: transitions.normal },
  exit: { y: -16, opacity: 0, transition: transitions.fast },
}

export const slideDown: Variants = {
  initial: { y: -24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: transitions.normal },
  exit: { y: 16, opacity: 0, transition: transitions.fast },
}

export const slideLeft: Variants = {
  initial: { x: 24, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: transitions.normal },
  exit: { x: -16, opacity: 0, transition: transitions.fast },
}

export const slideRight: Variants = {
  initial: { x: -24, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: transitions.normal },
  exit: { x: 16, opacity: 0, transition: transitions.fast },
}

// Scale
export const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: transitions.spring },
  exit: { scale: 0.95, opacity: 0, transition: transitions.fast },
}

// Stagger container — wrap children that use staggerItem
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: transitions.normal },
}

// All variants bundled for the motion docs page
export const allVariants = {
  fadeIn: { label: "Fade In", variants: fadeIn, description: "Simple opacity entrance" },
  slideUp: { label: "Slide Up", variants: slideUp, description: "Slide up from below with fade" },
  slideDown: { label: "Slide Down", variants: slideDown, description: "Slide down from above with fade" },
  slideLeft: { label: "Slide Left", variants: slideLeft, description: "Slide in from the right" },
  slideRight: { label: "Slide Right", variants: slideRight, description: "Slide in from the left" },
  scaleIn: { label: "Scale In", variants: scaleIn, description: "Scale up with spring physics" },
  staggerItem: { label: "Stagger Item", variants: staggerItem, description: "Used inside a stagger container" },
} as const
