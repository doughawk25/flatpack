const shadows = [
  { className: "shadow-2xs", label: "shadow-2xs" },
  { className: "shadow-xs", label: "shadow-xs" },
  { className: "shadow-sm", label: "shadow-sm" },
  { className: "shadow-md", label: "shadow-md" },
  { className: "shadow-lg", label: "shadow-lg" },
  { className: "shadow-xl", label: "shadow-xl" },
  { className: "shadow-2xl", label: "shadow-2xl" },
]

export default function ShadowsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Shadows</h1>
        <p className="text-muted-foreground">
          Tailwind&apos;s elevation scale on a bg-card surface.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {shadows.map((shadow) => (
          <div key={shadow.label} className="flex flex-col items-center gap-3">
            <div
              className={`flex h-24 w-full items-center justify-center rounded-lg border border-border bg-card ${shadow.className}`}
            />
            <span className="font-mono text-xs text-muted-foreground">
              {shadow.label}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
