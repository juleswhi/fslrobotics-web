import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar";

import { siteConfig } from "@/config/site";

const jetBrains = JetBrains_Mono({ subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <head/>
      <body className={cn("bg-black min-h-screen text-white w-full", jetBrains.className)}>
        <div className="relative flex flex-col h-screen">
          <Navbar/>

          <main className="z-0 w-full">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
