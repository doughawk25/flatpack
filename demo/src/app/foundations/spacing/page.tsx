const steps = [
  { className: "w-0.5", label: "0.5", rem: "0.125rem" },
  { className: "w-1", label: "1", rem: "0.25rem" },
  { className: "w-2", label: "2", rem: "0.5rem" },
  { className: "w-3", label: "3", rem: "0.75rem" },
  { className: "w-4", label: "4", rem: "1rem" },
  { className: "w-6", label: "6", rem: "1.5rem" },
  { className: "w-8", label: "8", rem: "2rem" },
  { className: "w-12", label: "12", rem: "3rem" },
  { className: "w-16", label: "16", rem: "4rem" },
  { className: "w-24", label: "24", rem: "6rem" },
]

export default function SpacingPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Spacing</h1>
        <p className="text-muted-foreground">
          The Tailwind spacing scale, each step built on a 0.25rem base unit.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-4">
            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">
              {step.label} · {step.rem}
            </span>
            <div className="flex h-6 flex-1 items-center">
              <div className={`h-4 rounded-sm bg-primary ${step.className}`} />
            </div>
            <span className="w-28 shrink-0 text-right font-mono text-xs text-muted-foreground">
              {`w-${step.label}`}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
