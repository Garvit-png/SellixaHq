import type { Metadata } from "next";
import { Inter, Outfit, Geist, Pixelify_Sans, VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { PageLoader } from "@/components/PageLoader";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const pixelifySans = Pixelify_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const vt323 = VT323({
  variable: "--font-hud",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SELLIXA | We Build Startups Fast",
  description: "We are an elite software agency that builds, ships, and scales startups fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth antialiased", inter.variable, outfit.variable, "font-sans", geist.variable, pixelifySans.variable, vt323.variable)}
    >
      <head>
        {/* Preload hero video for faster first-paint */}
        <link rel="preload" as="video" href="/sellixa.mp4" type="video/mp4" />
        {/* Preload critical above-fold images */}
        <link rel="preload" as="image" href="/you_have.png" />
        <link rel="preload" as="image" href="/group.jpg" />
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col font-sans overflow-x-clip selection:bg-accent selection:text-white">
        <NoiseOverlay />
        <PageLoader />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
