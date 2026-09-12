import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClientProviders } from "@/components/ClientProviders";
import { LoadingProvider } from "@/components/LoadingContext";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
      className={cn("antialiased font-sans", geist.variable)}
    >
      <head />
      <body className="bg-white text-black min-h-screen flex flex-col font-sans overflow-x-clip selection:bg-accent selection:text-white">
        <LoadingProvider>
          <ClientProviders />
          <main className="flex-grow">{children}</main>
        </LoadingProvider>
      </body>
    </html>
  );
}
