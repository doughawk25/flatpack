const radii = [
  { className: "rounded-sm", label: "rounded-sm", formula: "--radius * 0.6" },
  { className: "rounded-md", label: "rounded-md", formula: "--radius * 0.8" },
  { className: "rounded-lg", label: "rounded-lg", formula: "--radius (base)" },
  { className: "rounded-xl", label: "rounded-xl", formula: "--radius * 1.4" },
  { className: "rounded-2xl", label: "rounded-2xl", formula: "--radius * 1.8" },
  { className: "rounded-3xl", label: "rounded-3xl", formula: "--radius * 2.2" },
  { className: "rounded-full", label: "rounded-full", formula: "9999px (fixed)" },
]

export default function RadiusPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Radius</h1>
        <p className="text-muted-foreground">
          Every step but rounded-full derives from the single --radius token
          (0.625rem) in globals.css.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {radii.map((radius) => (
          <div key={radius.label} className="flex flex-col gap-2">
            <div
              className={`flex h-24 items-center justify-center border border-border bg-card ${radius.className}`}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{radius.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {radius.formula}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
