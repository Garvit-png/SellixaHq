import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { GridTrailCanvas } from "@/components/ui/GridTrailCanvas";

export const metadata: Metadata = {
  title: "Sellixa",
  description: "Monetize your audience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, outfit.variable, "font-sans", geist.variable)}
    >
      <body className="bg-white text-black min-h-screen flex flex-col font-sans overflow-x-clip selection:bg-accent selection:text-white">
        <GridTrailCanvas />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
