"use client"

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Default</span>
        <NativeSelect defaultValue="apple">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Small</span>
        <NativeSelect size="sm" defaultValue="us">
          <NativeSelectOption value="us">United States</NativeSelectOption>
          <NativeSelectOption value="ca">Canada</NativeSelectOption>
          <NativeSelectOption value="mx">Mexico</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Grouped options</span>
        <NativeSelect defaultValue="orange">
          <NativeSelectOptGroup label="Citrus">
            <NativeSelectOption value="orange">Orange</NativeSelectOption>
            <NativeSelectOption value="lemon">Lemon</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Stone fruit">
            <NativeSelectOption value="peach">Peach</NativeSelectOption>
            <NativeSelectOption value="plum">Plum</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Disabled</span>
        <NativeSelect disabled defaultValue="locked">
          <NativeSelectOption value="locked">Locked value</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}
