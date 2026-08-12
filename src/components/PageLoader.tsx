"use client";

import { useEffect, useState } from "react";

// Images and videos to preload during the loading screen
const PRELOAD_IMAGES = [
  "/sellixa.mp4",
  "/you_have.png",
  "/group.jpg",
  "/groupColored.jpeg",
  "/garvit145.png",
  "/shwe.jpeg",
  "/prabhas3.png",
];

function preloadAssets(): Promise<void[]> {
  return Promise.all(
    PRELOAD_IMAGES.map(
      (src) =>
        new Promise<void>((resolve) => {
          if (src.endsWith(".mp4")) {
            // For video — just fetch headers, don't download full file
            const v = document.createElement("video");
            v.preload = "metadata";
            v.src = src;
            v.onloadedmetadata = () => resolve();
            v.onerror = () => resolve(); // fail silently
            setTimeout(resolve, 2000); // max 2s per video
          } else {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // fail silently
          }
        })
    )
  );
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let resolved = false;

    const tryFadeOut = () => {
      if (resolved) return;
      resolved = true;
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800);
    };

    const isMobile = window.innerWidth < 768;
    // Desktop: 5s minimum so assets load in bg
    // Mobile: 2.5s minimum
    const minMs = isMobile ? 2500 : 5000;

    // Start preloading assets immediately
    preloadAssets();

    let timerDone = false;
    let pageLoaded = document.readyState === "complete";

    const onLoad = () => {
      pageLoaded = true;
      if (timerDone) tryFadeOut();
    };

    const onTimer = () => {
      timerDone = true;
      if (pageLoaded) tryFadeOut();
      else window.addEventListener("load", onLoad, { once: true });
    };

    if (!pageLoaded) window.addEventListener("load", onLoad, { once: true });
    const minTimer = setTimeout(onTimer, minMs);

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="ow-hp-loader-overlay"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <div className="ow-hp-loader" role="status" aria-label="Loading region">
        <div className="ow-hp-loader__head">
          <span className="ow-hp-loader__label">LOADING</span>
          <span className="ow-hp-loader__pct">SELLIXA</span>
        </div>
        <div className="ow-hp-loader__bar">
          <div className="ow-hp-loader__fill"></div>
          <div className="ow-hp-loader__pips" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
