"use client";

import Link from "next/link";

export function JoinNotch() {
  return (
    <Link
      href="/join"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] select-none group"
    >
      <div
        className="relative flex flex-col items-center justify-center gap-3 bg-black text-[#ffff00] font-mono font-bold tracking-[0.2em] uppercase text-[11px] px-3 py-6 rounded-l-xl shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-in-out group-hover:bg-[#ffff00] group-hover:text-black group-hover:px-5"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffff00] group-hover:bg-black animate-pulse shrink-0" />
        <span>Join Sellixa</span>
      </div>
    </Link>
  );
}
