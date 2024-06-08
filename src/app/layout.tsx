import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import GeminiContextProvider from "@/context/gemini-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Informia",
  description: "Chatgpt and gemini clone created using gemini api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <GeminiContextProvider>{children}</GeminiContextProvider>
        </Theme>
      </body>
    </html>
  );
}
