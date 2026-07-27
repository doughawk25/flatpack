import { MonadLogo } from "@/components/monad-logo"
import { Card } from "@/components/ui/card"

const sizes = [
  { label: "Large", height: "h-12", px: "48px" },
  { label: "Default", height: "h-8", px: "32px" },
  { label: "Small", height: "h-5", px: "20px" },
  { label: "Minimum", height: "h-3", px: "12px" },
]

export default function LogoPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Foundations
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Logo</h1>
        <p className="text-muted-foreground">
          The wordmark, its color behavior, and the rules that keep it legible.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Primary wordmark</h2>
        <Card className="flex items-center justify-center bg-muted/40 p-16">
          <MonadLogo className="h-16 w-auto text-foreground" />
        </Card>
        <p className="text-sm text-muted-foreground">
          The mark is a single SVG path filled with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            currentColor
          </code>
          , so it inherits text color and needs no light/dark variants. Import{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            MonadLogo
          </code>{" "}
          from{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            @/components/monad-logo
          </code>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">On surfaces</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="flex flex-col gap-3 p-6">
            <h3 className="text-sm font-medium">On light</h3>
            <div className="flex aspect-video items-center justify-center rounded-lg border bg-white">
              <MonadLogo className="h-8 w-auto text-neutral-950" />
            </div>
          </Card>
          <Card className="flex flex-col gap-3 p-6">
            <h3 className="text-sm font-medium">On dark</h3>
            <div className="flex aspect-video items-center justify-center rounded-lg bg-neutral-950">
              <MonadLogo className="h-8 w-auto text-white" />
            </div>
          </Card>
          <Card className="flex flex-col gap-3 p-6">
            <h3 className="text-sm font-medium">On brand</h3>
            <div className="flex aspect-video items-center justify-center rounded-lg bg-primary">
              <MonadLogo className="h-8 w-auto text-primary-foreground" />
            </div>
          </Card>
          <Card className="flex flex-col gap-3 p-6">
            <h3 className="text-sm font-medium">On imagery</h3>
            <div
              className="flex aspect-video items-center justify-center rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url(/example-bg.jpg)" }}
            >
              <MonadLogo className="h-8 w-auto text-white" />
            </div>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Sizes</h2>
        <Card className="flex flex-col divide-y">
          {sizes.map((size) => (
            <div
              key={size.label}
              className="flex items-center justify-between gap-6 px-6 py-5"
            >
              <MonadLogo className={`${size.height} w-auto text-foreground`} />
              <div className="text-right">
                <p className="text-sm font-medium">{size.label}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {size.px}
                </p>
              </div>
            </div>
          ))}
        </Card>
        <p className="text-sm text-muted-foreground">
          Never render below 12px tall — the pixel counters close up and the
          wordmark stops reading.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Clear space</h2>
        <Card className="flex items-center justify-center p-8">
          <div className="rounded-lg border border-dashed border-border p-8">
            <MonadLogo className="h-10 w-auto text-foreground" />
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Keep clear space on all sides equal to the cap height of the mark.
          Nothing — type, rules, or imagery — enters that margin.
        </p>
      </section>
    </div>
  )
}
