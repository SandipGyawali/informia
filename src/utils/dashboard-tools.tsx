import {
  Braces,
  Image,
  LayoutDashboard,
  Mail,
  Music,
  Settings,
  Video,
} from "lucide-react";

const className = "w-8 h-8 text-primary";

export const dashboardTools = [
  {
    id: "primary",
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard className={className} />,
    description: "Overview of your activities and metrics.",
  },
  {
    name: "Message",
    link: "/message",
    icon: <Mail className={className} />,
    description: "Manage and view your messages.",
  },
  {
    name: "Generate Image",
    link: "/image",
    icon: <Image className={className} />,
    description: "Create and edit images.",
  },
  {
    name: "Generate Video",
    link: "/video",
    icon: <Video className={className} />,
    description: "Produce and edit videos.",
  },
  {
    name: "Generate Music",
    link: "/music",
    icon: <Music className={className} />,
    description: "Compose and produce music.",
  },
  {
    name: "Generate Code",
    link: "/code",
    icon: <Braces className={className} />,
    description: "Write and manage your code.",
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings className={className} />,
    description: "Adjust your preferences and configurations.",
  },
];
