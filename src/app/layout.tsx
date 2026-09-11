import type { Metadata } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClientProviders } from "@/components/ClientProviders";
import { LoadingProvider } from "@/components/LoadingContext";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const geist  = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter  = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-heading", subsets: ["latin"] });

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
      className={cn("antialiased", inter.variable, outfit.variable, "font-sans", geist.variable)}
    >
      <head />
      <body className="bg-white text-black min-h-screen flex flex-col font-sans overflow-x-clip selection:bg-accent selection:text-white">
        <LoadingProvider>
          <SmoothScrolling>
            <ClientProviders />
            <main className="flex-grow">{children}</main>
          </SmoothScrolling>
        </LoadingProvider>
      </body>
    </html>
  );
}
