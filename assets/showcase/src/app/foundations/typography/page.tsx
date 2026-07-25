const scale = [
  { className: "text-xs", label: "text-xs" },
  { className: "text-sm", label: "text-sm" },
  { className: "text-base", label: "text-base" },
  { className: "text-lg", label: "text-lg" },
  { className: "text-xl", label: "text-xl" },
  { className: "text-2xl", label: "text-2xl" },
  { className: "text-3xl", label: "text-3xl" },
  { className: "text-4xl", label: "text-4xl" },
  { className: "text-5xl", label: "text-5xl" },
]

const weights = [
  { className: "font-normal", label: "font-normal (400)" },
  { className: "font-medium", label: "font-medium (500)" },
  { className: "font-semibold", label: "font-semibold (600)" },
  { className: "font-bold", label: "font-bold (700)" },
]

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Typography</h1>
        <p className="text-muted-foreground">
          Font families, the type scale, and weight examples.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Font families</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
            <span className="font-mono text-xs text-muted-foreground">
              font-sans (IBM Plex Sans)
            </span>
            <p className="font-sans text-xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
            <span className="font-mono text-xs text-muted-foreground">
              font-mono (IBM Plex Mono)
            </span>
            <p className="font-mono text-xl">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Type scale</h2>
        <div className="flex flex-col gap-3">
          {scale.map((step) => (
            <div
              key={step.label}
              className="flex items-baseline gap-4 border-b border-border pb-3 last:border-b-0"
            >
              <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                {step.label}
              </span>
              <span className={step.className}>Design system foundations</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Weights</h2>
        <div className="flex flex-col gap-3">
          {weights.map((weight) => (
            <div key={weight.label} className="flex items-baseline gap-4">
              <span className="w-40 shrink-0 font-mono text-xs text-muted-foreground">
                {weight.label}
              </span>
              <span className={`${weight.className} text-xl`}>
                Design system foundations
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
