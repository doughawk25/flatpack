"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon, Image as ImageIcon, Square } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// A photo-like gradient so components can be judged over imagery without
// shipping a binary asset.
const imageBackground = {
  backgroundImage:
    "linear-gradient(135deg, oklch(0.65 0.18 250) 0%, oklch(0.6 0.2 300) 35%, oklch(0.7 0.17 20) 70%, oklch(0.8 0.15 80) 100%)",
}

export function ComponentPreview({
  code,
  children,
}: {
  code: string
  children: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState("preview")
  const [showBgImage, setShowBgImage] = useState(false)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        {activeTab === "preview" && (
          <Tabs
            value={showBgImage ? "image" : "plain"}
            onValueChange={(v) => setShowBgImage(v === "image")}
          >
            <TabsList>
              <TabsTrigger value="plain" aria-label="Plain background">
                <Square className="size-4" />
              </TabsTrigger>
              <TabsTrigger value="image" aria-label="Image background">
                <ImageIcon className="size-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>
      <TabsContent value="preview">
        <div
          className={`overflow-auto rounded-lg border ${showBgImage ? "" : "bg-card"}`}
          style={showBgImage ? imageBackground : undefined}
        >
          <div className="flex min-w-0 items-center justify-center p-6 md:p-8">
            <div className="w-full max-w-2xl">{children}</div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="relative">
          <button
            onClick={copy}
            aria-label="Copy code"
            className="absolute right-3 top-3 rounded-md p-2 transition-colors hover:bg-muted"
          >
            {copied ? (
              <CheckIcon className="size-4 text-green-600" />
            ) : (
              <CopyIcon className="size-4 text-muted-foreground" />
            )}
          </button>
          <pre className="max-h-[32rem] overflow-auto rounded-lg border bg-muted/50 p-4">
            <code className="font-mono text-sm">{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
