"use client";

import dynamic from "next/dynamic";

const JoinForm = dynamic(() => import("./JoinForm"), { ssr: false });

export default function JoinPage() {
  return <JoinForm />;
}
