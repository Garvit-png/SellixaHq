"use client";

import { useEffect, useState } from "react";
import { useLoadingContext } from "./LoadingContext";

// Must match the CSS animation duration in globals.css (.ow-hp-loader__fill)
const BAR_DURATION_MS = 3000;
// Extra buffer after the bar finishes before we start fading
const POST_BAR_BUFFER_MS = 100;
// Fade-out transition duration (matches the inline transition below)
const FADE_DURATION_MS = 600;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { onLoaderDone } = useLoadingContext();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Promise that resolves once the DOM is interactive
    const domReady = new Promise<void>((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve(), { once: true });
      } else {
        resolve();
      }
    });

    // Promise that resolves after the bar animation completes
    const barTimer = new Promise<void>((resolve) =>
      setTimeout(resolve, BAR_DURATION_MS + POST_BAR_BUFFER_MS)
    );

    // Wait for BOTH — whichever is later wins, so the bar always plays fully
    // and the DOM is guaranteed ready when we dismiss.
    Promise.all([domReady, barTimer]).then(() => {
      setFadeOut(true);
      // Signal the rest of the page to render immediately as fade begins
      onLoaderDone();
      setTimeout(() => setVisible(false), FADE_DURATION_MS);
    });
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
