"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // Lenis smooth scroll completely disabled per user request to use default browser scroll
  return <>{children}</>;
}
