import {
  Home,
  Search,
  Settings,
  User,
  Users,
  Mail,
  Bell,
  Calendar,
  Clock,
  Star,
  Heart,
  Check,
  X,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Trash2,
  Pencil,
  Copy,
  Download,
  Upload,
  Share2,
  Link,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  File,
  Folder,
  Image,
  Camera,
  Video,
  Music,
  Play,
  Pause,
  Volume2,
  Wifi,
  Battery,
  type LucideIcon,
} from "lucide-react"

const icons: { name: string; Icon: LucideIcon }[] = [
  { name: "Home", Icon: Home },
  { name: "Search", Icon: Search },
  { name: "Settings", Icon: Settings },
  { name: "User", Icon: User },
  { name: "Users", Icon: Users },
  { name: "Mail", Icon: Mail },
  { name: "Bell", Icon: Bell },
  { name: "Calendar", Icon: Calendar },
  { name: "Clock", Icon: Clock },
  { name: "Star", Icon: Star },
  { name: "Heart", Icon: Heart },
  { name: "Check", Icon: Check },
  { name: "X", Icon: X },
  { name: "Plus", Icon: Plus },
  { name: "Minus", Icon: Minus },
  { name: "ChevronRight", Icon: ChevronRight },
  { name: "ChevronLeft", Icon: ChevronLeft },
  { name: "ChevronDown", Icon: ChevronDown },
  { name: "ChevronUp", Icon: ChevronUp },
  { name: "ArrowRight", Icon: ArrowRight },
  { name: "ArrowLeft", Icon: ArrowLeft },
  { name: "ArrowUp", Icon: ArrowUp },
  { name: "ArrowDown", Icon: ArrowDown },
  { name: "Menu", Icon: Menu },
  { name: "MoreHorizontal", Icon: MoreHorizontal },
  { name: "MoreVertical", Icon: MoreVertical },
  { name: "Trash2", Icon: Trash2 },
  { name: "Pencil", Icon: Pencil },
  { name: "Copy", Icon: Copy },
  { name: "Download", Icon: Download },
  { name: "Upload", Icon: Upload },
  { name: "Share2", Icon: Share2 },
  { name: "Link", Icon: Link },
  { name: "Lock", Icon: Lock },
  { name: "Unlock", Icon: Unlock },
  { name: "Eye", Icon: Eye },
  { name: "EyeOff", Icon: EyeOff },
  { name: "File", Icon: File },
  { name: "Folder", Icon: Folder },
  { name: "Image", Icon: Image },
  { name: "Camera", Icon: Camera },
  { name: "Video", Icon: Video },
  { name: "Music", Icon: Music },
  { name: "Play", Icon: Play },
  { name: "Pause", Icon: Pause },
  { name: "Volume2", Icon: Volume2 },
  { name: "Wifi", Icon: Wifi },
  { name: "Battery", Icon: Battery },
]

export default function IconsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Icons</h1>
        <p className="text-muted-foreground">
          A sample of 48 common lucide-react icons — the library ships
          thousands more, all with the same consistent stroke style.
        </p>
      </header>

      <section className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8">
        {icons.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-lg border border-border p-3"
          >
            <Icon className="size-5" />
            <span className="text-center font-mono text-[10px] text-muted-foreground">
              {name}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
