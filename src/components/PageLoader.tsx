"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    let resolved = false;

    const tryFadeOut = () => {
      if (resolved) return;
      resolved = true;
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    // Use DOMContentLoaded (DOM parsed + JS ready) NOT window.load
    // window.load waits for ALL resources including videos — that's the LCP killer.
    // DOMContentLoaded fires as soon as the DOM is interactive, usually <1s.
    // We add a 300ms buffer to let first paint settle.
    const BUFFER_MS = 300;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(tryFadeOut, BUFFER_MS);
      }, { once: true });
    } else {
      // readyState is "interactive" or "complete" — DOM is already ready
      setTimeout(tryFadeOut, BUFFER_MS);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="ow-hp-loader-overlay"
      style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.6s ease-in-out" }}
    >
      {/* On mobile just show a plain black screen, no heavy animation */}
      {isMobile ? null : (
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
      )}
    </div>
  );
}
