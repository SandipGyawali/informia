"use client";
import { cn } from "@/lib/utils";
import { menuItems } from "@/utils/menu-options";
import { Hash, Package2, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ModeToggle } from "../toggle-theme";
import Image from "next/image";

function SideBar() {
  const pathname = usePathname();
  const [navItems, setNavItems] = useState([...menuItems]);

  return (
    <div className="h-screen hidden border-r border-gray-100 dark:border-gray-600 bg-muted/40 md:block">
      <div className="flex h-full flex-col gap-2">
        <div className="flex justify-center h-14 items-center p-1 lg:h-[60px] lg:px-2">
          {/* <UserProfile /> */}
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="w-32  mt-8"
          />
        </div>
        <nav className="grid items-start px-1 text-sm font-medium lg:px-4">
          {navItems.map(({ name, icon, link, id }, idx) => (
            <div key={idx}>
              {id && (
                <div
                  className={cn(
                    "flex items-center mt-8 mb-2",
                    id === "filters" && "my-0"
                  )}
                />
              )}
              <div className={cn("flex items-center lg:w-full")}>
                <div
                  className={cn(
                    "flex items-center text-left lg:gap-3 rounded-lg py-2 transition-all hover:text-primary justify-between w-full",
                    pathname === link
                      ? "active rounded-lg bg-primary/10 text-primary transition-all hover:text-primary"
                      : "text-foreground "
                  )}
                >
                  <Link
                    key={idx}
                    href={link}
                    className={cn(
                      "flex items-center text-left gap-3 rounded-lg transition-all hover:text-primary w-full"
                    )}
                  >
                    <div className="flex gap-4 items-center w-full">
                      <div className="flex gap-2 items-center">
                        <p className="flex text-base text-left">
                          {icon || <Hash />}
                        </p>
                        <p>{name}</p>
                      </div>
                    </div>
                  </Link>
                  {id === "filters" && (
                    <Dialog>
                      <DialogTrigger id="closeDialog">
                        <PlusIcon
                          className="h-5 w-5"
                          aria-label="Add a Label"
                        />
                      </DialogTrigger>
                      {/* <AddLabelDialog /> */}
                    </Dialog>
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-0 px-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
