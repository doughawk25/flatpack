"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Select defaultValue="apple">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="us">
        <SelectTrigger size="sm" className="w-48">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select disabled defaultValue="locked">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Unavailable" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="locked">Locked value</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
