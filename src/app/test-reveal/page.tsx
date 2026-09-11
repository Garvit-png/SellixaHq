"use client";
import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal";
export default function Test() {
  return (
    <div>
      <div className="h-screen bg-black text-white p-10">Scroll down</div>
      <ScrollDissolveReveal imageFront="/shwe.jpeg" imageBack="/soni.jpeg" />
      <div className="h-screen bg-black text-white p-10">Scroll more</div>
    </div>
  );
}
