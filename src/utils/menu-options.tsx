import {
  Braces,
  Image,
  LayoutDashboard,
  Mail,
  Music,
  Settings,
  Video,
} from "lucide-react";

const className = "w-4 h-4";

export const menuItems = [
  {
    id: "primary",
    name: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard className={className} />,
  },
  {
    name: "Message",
    link: "/message",
    icon: <Mail className={className} />,
  },
  {
    name: "Generate Image",
    link: "/image",
    icon: <Image className={className} />,
  },
  {
    name: "Generate Video",
    link: "/video",
    icon: <Video className={className} />,
  },
  {
    name: "Generate Music",
    link: "/music",
    icon: <Music className={className} />,
  },
  {
    name: "Generate Code",
    link: "/code",
    icon: <Braces className={className} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings className={className} />,
  },
];
