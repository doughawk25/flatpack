export type NavItem = {
  slug: string
  title: string
  description: string
}

export const foundations: NavItem[] = [
  { slug: "logo", title: "Logo", description: "The mark, how it behaves across surfaces, and the rules that keep it legible." },
  { slug: "colors", title: "Colors", description: "Every color token in the system, as CSS variables that flip with the theme." },
  { slug: "typography", title: "Typography", description: "Font stacks, the type scale, and weights." },
  { slug: "spacing", title: "Spacing", description: "The spacing scale utilities are built on." },
  { slug: "radius", title: "Radius", description: "Corner radii, derived from the --radius token." },
  { slug: "shadows", title: "Shadows", description: "Elevation via the shadow scale." },
  { slug: "motion", title: "Motion", description: "Animation primitives from motion.dev." },
  { slug: "icons", title: "Icons", description: "Lucide icons, tree-shakeable and consistent." },
]

const titleOverrides: Record<string, string> = {
  "alert-dialog": "Alert Dialog",
  "aspect-ratio": "Aspect Ratio",
  "button-group": "Button Group",
  "context-menu": "Context Menu",
  "dropdown-menu": "Dropdown Menu",
  "hover-card": "Hover Card",
  "input-group": "Input Group",
  "input-otp": "Input OTP",
  "message-scroller": "Message Scroller",
  "native-select": "Native Select",
  "navigation-menu": "Navigation Menu",
  "radio-group": "Radio Group",
  "scroll-area": "Scroll Area",
  "toggle-group": "Toggle Group",
}

const componentDescriptions: Record<string, string> = {
  accordion: "Vertically stacked sections that expand one at a time.",
  alert: "Callout for statuses and important context.",
  "alert-dialog": "Modal confirmation for destructive or irreversible actions.",
  "aspect-ratio": "Constrains content to a fixed width-to-height ratio.",
  attachment: "File attachment display with metadata.",
  avatar: "User image with fallback initials, groupable.",
  badge: "Small status label in several variants.",
  breadcrumb: "Hierarchical path back to where you came from.",
  bubble: "Chat bubble for conversational UIs.",
  button: "The workhorse. Variants, sizes, icons, loading.",
  "button-group": "Related actions, visually joined.",
  calendar: "Date picking on react-day-picker.",
  card: "Surface with header, content, and footer slots.",
  carousel: "Swipeable content on Embla.",
  chart: "Recharts wired to the token system.",
  checkbox: "Binary choice with indeterminate support.",
  collapsible: "Show and hide a region with a trigger.",
  combobox: "Autocomplete input over a filterable list.",
  command: "Command palette with fuzzy filtering.",
  "context-menu": "Right-click menu with items, groups, and shortcuts.",
  dialog: "Modal window over the page.",
  drawer: "Panel that slides from the screen edge.",
  "dropdown-menu": "Menu of actions behind a trigger.",
  empty: "Empty-state placeholder with action.",
  field: "Form field composition: label, control, error.",
  "hover-card": "Preview card on hover.",
  input: "Single-line text input.",
  "input-group": "Input with leading/trailing addons.",
  "input-otp": "Segmented one-time-code entry.",
  item: "List item with media, content, and actions.",
  kbd: "Keyboard shortcut hint.",
  label: "Accessible label for form controls.",
  marker: "Inline marker for annotating content.",
  menubar: "Horizontal app menu with nested menus.",
  message: "Chat message row with author and actions.",
  "message-scroller": "Auto-scrolling message viewport for chat.",
  "native-select": "Styled native <select> element.",
  "navigation-menu": "Site navigation with flyout panels.",
  pagination: "Page navigation with previous/next.",
  popover: "Floating panel anchored to a trigger.",
  progress: "Determinate progress indicator.",
  "radio-group": "Single choice among options.",
  resizable: "Drag-to-resize panel layouts.",
  "scroll-area": "Custom scrollbars over native scrolling.",
  select: "Listbox select with groups and keyboard support.",
  separator: "Horizontal or vertical divider.",
  sheet: "Side panel dialog for secondary flows.",
  sidebar: "The app-shell navigation rail — this site runs on it.",
  skeleton: "Loading placeholder shapes.",
  slider: "Value selection along a track.",
  sonner: "Toast notifications via Sonner.",
  spinner: "Loading spinner.",
  switch: "On/off toggle.",
  table: "Data table primitives.",
  tabs: "Switch between views in place.",
  textarea: "Multi-line text input.",
  toast: "Toast primitives Sonner renders with.",
  toggle: "Pressed/unpressed button state.",
  "toggle-group": "Single or multiple toggles, grouped.",
  tooltip: "Label on hover or focus.",
}

function toTitle(slug: string) {
  return (
    titleOverrides[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  )
}

export const components: NavItem[] = Object.keys(componentDescriptions)
  .sort()
  .map((slug) => ({
    slug,
    title: toTitle(slug),
    description: componentDescriptions[slug],
  }))

export const navigation = [
  { title: "Foundations", base: "/foundations", items: foundations },
  { title: "Components", base: "/components", items: components },
] as const
