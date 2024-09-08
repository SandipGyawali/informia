"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { dashboardTools } from "@/utils/dashboard-tools";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-16">
      <div className="mb-12 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6f9891] to-[#4a7c73]">
          Explore Informia..
        </h2>
        <p className="text-lg text-muted-foreground mt-2 font-base">
          Experience the power of AI with intuitive tools, and enhancing you
          work.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {dashboardTools.map((tool) => (
          <Card
            onClick={() => router.push(tool.link)}
            key={tool.link}
            className={cn(
              "p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200",
              "hover:bg-primary/5 bg-white cursor-pointer overflow-hidden"
            )}
          >
            <div className="flex items-center gap-4">
              <div
                className={cn("p-3 rounded-md", "bg-primary/10 text-primary")}
              >
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
              </div>
              <ArrowRight className="text-gray-400 hover:text-primary transition-colors" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
