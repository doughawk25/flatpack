"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const frameworks = ["Next.js", "Remix", "Astro", "SvelteKit", "Nuxt"]
const tags = ["design", "engineering", "product", "marketing", "research"]

export default function ComboboxDemo() {
  const [selected, setSelected] = React.useState<string[]>(["design", "product"])
  const anchor = useComboboxAnchor()

  return (
    <div className="flex flex-col gap-6">
      <Combobox items={frameworks} defaultValue="Next.js">
        <ComboboxInput placeholder="Select a framework..." />
        <ComboboxContent>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <Combobox
        items={tags}
        multiple
        value={selected}
        onValueChange={setSelected}
      >
        <ComboboxChips ref={anchor} className="max-w-sm">
          {selected.map((tag) => (
            <ComboboxChip key={tag}>{tag}</ComboboxChip>
          ))}
          <ComboboxChipsInput placeholder="Add a tag..." />
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
