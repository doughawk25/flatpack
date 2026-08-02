/**
 * Where the design-system showcase is mounted.
 *
 * Greenfield scaffold: "" — the showcase IS the site (/, /components, /foundations).
 * Installed into an existing app: "/system" — the showcase lives in its own wing
 * (/system, /system/components, /system/foundations) and never touches the
 * host app's routes. The install playbook sets this; everything that renders a
 * link reads it, so it is the single line that moves the whole showcase.
 */
export const SYSTEM_BASE: string = ""

/** Prefix a showcase-internal path with the mount point. sys("/") is the overview. */
export function sys(path: string): string {
  if (path === "/") return SYSTEM_BASE || "/"
  return `${SYSTEM_BASE}${path}`
}
