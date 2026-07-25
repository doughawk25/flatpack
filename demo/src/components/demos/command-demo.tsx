"use client"

import { CalendarIcon, SmileIcon, CalculatorIcon, UserIcon, SettingsIcon } from "lucide-react"

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function CommandDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Command className="max-w-sm border shadow-sm">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon />
              Calendar
            </CommandItem>
            <CommandItem>
              <SmileIcon />
              Search emoji
            </CommandItem>
            <CommandItem>
              <CalculatorIcon />
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon />
              Profile
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              Preferences
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
