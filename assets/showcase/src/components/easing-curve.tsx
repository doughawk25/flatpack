"use client"

function parseCubicBezier(value: string): [number, number, number, number] | null {
  const match = value.match(/cubic-bezier\(([^)]+)\)/)
  if (!match) return null
  const parts = match[1].split(",").map((s) => parseFloat(s.trim()))
  if (parts.length !== 4) return null
  return parts as [number, number, number, number]
}

// Velocity (derivative) of cubic bezier y-component at t
function bezierVelocity(t: number, y1: number, y2: number): number {
  const mt = 1 - t
  return 3 * mt * (1 - 3 * t) * y1 + 3 * t * (2 - 3 * t) * y2 + 3 * t * t
}

export function EasingCurveGraph({ value }: { value: string }) {
  const coords = parseCubicBezier(value)
  if (!coords) return null

  const [x1, y1, x2, y2] = coords
  const w = 80
  const h = 48
  const padding = 4

  // Scale y to fit overshoot (e.g. spring has y1=1.56)
  const yMin = Math.min(0, y1, y2)
  const yMax = Math.max(1, y1, y2)
  const yRange = yMax - yMin || 1

  const toSvg = (x: number, y: number) => {
    const sx = padding + x * (w - padding * 2)
    const sy = h - padding - ((y - yMin) / yRange) * (h - padding * 2)
    return `${sx},${sy}`
  }

  const path = `M ${toSvg(0, 0)} C ${toSvg(x1, y1)} ${toSvg(x2, y2)} ${toSvg(1, 1)}`

  const samples = 50
  const velocities: number[] = []
  for (let i = 0; i <= samples; i++) {
    velocities.push(bezierVelocity(i / samples, y1, y2))
  }
  const vMin = Math.min(0, ...velocities)
  const vMax = Math.max(1, ...velocities)
  const vRange = vMax - vMin || 1
  const speedPath = Array.from({ length: samples + 1 }, (_, i) => {
    const t = i / samples
    const v = velocities[i]!
    const sy = h - padding - ((v - vMin) / vRange) * (h - padding * 2)
    return `${padding + t * (w - padding * 2)},${sy}`
  }).join(" L ")

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="mb-0.5 text-[10px] text-muted-foreground/70">Progress</p>
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-10 w-full text-muted-foreground"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1={padding} y1={h - padding} x2={w - padding} y2={h - padding} stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
          <line x1={padding} y1={padding} x2={padding} y2={h - padding} stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="mb-0.5 text-[10px] text-muted-foreground/70">Speed</p>
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-10 w-full text-muted-foreground"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1={padding} y1={h - padding} x2={w - padding} y2={h - padding} stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
          <line x1={padding} y1={padding} x2={padding} y2={h - padding} stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d={`M ${speedPath}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
