"use client"

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Bold">
          <BoldIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Italic">
          <ItalicIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Underline">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonGroupText>Page 1 of 10</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button variant="outline">Prev</Button>
        <Button variant="outline">Next</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" className="w-fit">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}
