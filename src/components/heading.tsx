import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

function Heading({ title, description, icon: Icon }: HeadingProps) {
  return (
    <div className="px-4 lg:px-6 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md bg-primary/10")}>
        <Icon className={cn("w-8 h-8 text-primary")} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default Heading;
