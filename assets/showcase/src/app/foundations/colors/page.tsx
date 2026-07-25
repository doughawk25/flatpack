import { colorRamps } from "@/lib/color-ramps"

type Swatch = {
  name: string
  varName: string
  bg: string
}

type Group = {
  title: string
  description: string
  swatches: Swatch[]
}

const groups: Group[] = [
  {
    title: "Core",
    description: "Semantic tokens used for actions, feedback, and structure.",
    swatches: [
      { name: "primary", varName: "--primary", bg: "bg-primary" },
      { name: "secondary", varName: "--secondary", bg: "bg-secondary" },
      { name: "muted", varName: "--muted", bg: "bg-muted" },
      { name: "accent", varName: "--accent", bg: "bg-accent" },
      { name: "destructive", varName: "--destructive", bg: "bg-destructive" },
      { name: "border", varName: "--border", bg: "bg-border" },
      { name: "input", varName: "--input", bg: "bg-input" },
      { name: "ring", varName: "--ring", bg: "bg-ring" },
    ],
  },
  {
    title: "Surfaces",
    description: "Background and foreground pairs for page and elevated surfaces.",
    swatches: [
      { name: "background", varName: "--background", bg: "bg-background" },
      { name: "foreground", varName: "--foreground", bg: "bg-foreground" },
      { name: "card", varName: "--card", bg: "bg-card" },
      { name: "card-foreground", varName: "--card-foreground", bg: "bg-card-foreground" },
      { name: "popover", varName: "--popover", bg: "bg-popover" },
      { name: "popover-foreground", varName: "--popover-foreground", bg: "bg-popover-foreground" },
    ],
  },
  {
    title: "Charts",
    description: "A five-step categorical scale for data visualization.",
    swatches: [
      { name: "chart-1", varName: "--chart-1", bg: "bg-chart-1" },
      { name: "chart-2", varName: "--chart-2", bg: "bg-chart-2" },
      { name: "chart-3", varName: "--chart-3", bg: "bg-chart-3" },
      { name: "chart-4", varName: "--chart-4", bg: "bg-chart-4" },
      { name: "chart-5", varName: "--chart-5", bg: "bg-chart-5" },
    ],
  },
  {
    title: "Sidebar",
    description: "An isolated token set so navigation shells can diverge from the page theme.",
    swatches: [
      { name: "sidebar", varName: "--sidebar", bg: "bg-sidebar" },
      { name: "sidebar-foreground", varName: "--sidebar-foreground", bg: "bg-sidebar-foreground" },
      { name: "sidebar-primary", varName: "--sidebar-primary", bg: "bg-sidebar-primary" },
      { name: "sidebar-primary-foreground", varName: "--sidebar-primary-foreground", bg: "bg-sidebar-primary-foreground" },
      { name: "sidebar-accent", varName: "--sidebar-accent", bg: "bg-sidebar-accent" },
      { name: "sidebar-accent-foreground", varName: "--sidebar-accent-foreground", bg: "bg-sidebar-accent-foreground" },
      { name: "sidebar-border", varName: "--sidebar-border", bg: "bg-sidebar-border" },
      { name: "sidebar-ring", varName: "--sidebar-ring", bg: "bg-sidebar-ring" },
    ],
  },
]

export default function ColorsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Colors</h1>
        <p className="text-muted-foreground">
          Every color token defined in globals.css, grouped by role.
        </p>
      </header>

      {groups.map((group) => (
        <section key={group.title} className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-medium">{group.title}</h2>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.swatches.map((swatch) => (
              <div key={swatch.name} className="flex flex-col gap-2">
                <div
                  className={`h-20 rounded-lg border border-border ${swatch.bg}`}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{swatch.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {swatch.varName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-medium">Primitives</h2>
          <p className="text-sm text-muted-foreground">
            The raw Tailwind color ramps underneath the semantic tokens — 22
            hues, 11 steps each. Semantic tokens point at values like these;
            when you customize, you remap the semantics, not the ramps.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="hidden pl-20 sm:grid sm:grid-cols-11 sm:gap-1">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
              (step) => (
                <span
                  key={step}
                  className="text-center font-mono text-[10px] text-muted-foreground"
                >
                  {step}
                </span>
              )
            )}
          </div>
          {colorRamps.map((ramp) => (
            <div key={ramp.hue} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-0">
              <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                {ramp.hue}
              </span>
              <div className="grid flex-1 grid-cols-11 gap-1">
                {ramp.swatches.map((swatch) => (
                  <div
                    key={swatch.step}
                    title={`${ramp.hue}-${swatch.step}`}
                    className={`h-8 rounded-md ${swatch.className}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Reference any step directly with utilities like{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
            bg-blue-500
          </code>{" "}
          or as CSS variables via{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
            var(--color-blue-500)
          </code>
          .
        </p>
      </section>
    </div>
  )
}
