"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Monad?</AccordionTrigger>
          <AccordionContent>
            Monad is a design system built on Tailwind v4 and Base UI
            primitives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Every component follows WAI-ARIA authoring practices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize the styling?</AccordionTrigger>
          <AccordionContent>
            Absolutely — every part is a plain Tailwind class you can override.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion multiple defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Multiple open at once</AccordionTrigger>
          <AccordionContent>
            This accordion allows more than one panel to stay expanded.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second panel</AccordionTrigger>
          <AccordionContent>
            Both panels can be open simultaneously without closing the other.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
