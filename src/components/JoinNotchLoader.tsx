"use client";

import dynamic from "next/dynamic";

const JoinNotch = dynamic(
  () => import("@/components/JoinNotch").then((m) => ({ default: m.JoinNotch })),
  { ssr: false }
);

export function JoinNotchLoader() {
  return <JoinNotch />;
}
