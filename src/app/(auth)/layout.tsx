"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageRoute = {
    pathname: pathname === "/login" ? "/signup" : "/login",
    label: pathname === "/login" ? "SignUp" : "Login",
  };

  console.log(pageRoute);

  return (
    <div className="flex w-full h-screen">
      {/* Form Section */}
      <div className="w-full flex items-center justify-center px-8 md:px-16 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="flex mb-4 hover:underline">
            <ChevronLeft />
            <Link href={`${pageRoute.pathname}`}>{pageRoute.label}</Link>
          </div>

          {/* Salon Introduction */}
          <h1 className="text-3xl font-bold">Welcome to Informia</h1>
          <p className="mt-2 text-sm">Manage your life with a todo.</p>

          {children}
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-black dark:bg-white">
        <div className="image-wrapper">
          <Image src="/logo.png" width={500} height={500} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
