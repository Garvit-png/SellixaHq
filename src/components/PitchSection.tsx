"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useMobile } from "@/hooks/use-mobile";

const ElasticMesh = dynamic(() => import("@/components/ElasticMesh"), { ssr: false });

export function PitchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMobile();

  return (
    <section id="pitch" ref={sectionRef} className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 py-24 overflow-hidden bg-black">
      {/* Paint spill */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[10vh] md:h-[15vh] text-[#ffff00] fill-current">
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      {isMobile === true ? (
        /* Mobile: plain static image, no WebGL */
        <div className="w-full mt-16 rounded-[25px] overflow-hidden flex items-center justify-center bg-black" style={{ height: 'auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/you_have.png" alt="You have the audience" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      ) : (
        /* Desktop: full ElasticMesh */
        <div className="w-full mt-16" style={{ height: '100vh' }}>
          <ElasticMesh
            image="/you_have.png"
            highlight="#ffff00"
            showGrid={false}
            borderRadius={25}
            stiffness={0.05}
            damping={0.2}
            grabRadius={0.6}
            pull={0.4}
            wobble={5}
            tilt={14}
            shading={0.5}
            resolution={25}
            interaction="hover"
            enabled
          />
        </div>
      )}
    </section>
  );
}
