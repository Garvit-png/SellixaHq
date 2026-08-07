"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let resolved = false;

    const tryFadeOut = () => {
      if (resolved) return;
      resolved = true;
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    // Wait for both: page load AND minimum 3 seconds
    let pageLoaded = document.readyState === "complete";
    let timerDone = false;

    const onLoad = () => { pageLoaded = true; if (timerDone) tryFadeOut(); };
    const onTimer = () => { timerDone = true; if (pageLoaded) tryFadeOut(); else window.addEventListener("load", onLoad, { once: true }); };

    if (!pageLoaded) window.addEventListener("load", onLoad, { once: true });
    const minTimer = setTimeout(onTimer, 3000);

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
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      <div className="ow-hp-loader" role="status" aria-label="Loading region">
        <div className="ow-hp-loader__head">
          <span className="ow-hp-loader__label">LOADING</span>
          <span className="ow-hp-loader__pct">SELLIXA </span>
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
