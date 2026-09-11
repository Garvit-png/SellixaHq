"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mark as mounted so we can safely manipulate the DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sourceRef.current && videoRef.current) {
          // Set src imperatively to avoid any React re-render diffing issues
          sourceRef.current.src = src;
          videoRef.current.load();
          observer.disconnect();

          if (props.autoPlay) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                // Autoplay policy might block it if not muted, but our videos are muted
                console.warn("Video autoplay prevented:", error);
              });
            }
          }
        }
      },
      {
        rootMargin: "400px", // Load when it's 400px away from viewport to ensure smooth playback when it enters
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [mounted, src, props.autoPlay]);

  return (
    <div suppressHydrationWarning className="contents">
      <video
        ref={videoRef}
        className={className}
        preload="none"
        suppressHydrationWarning
        {...props}
      >
        {/* Always render <source> with no src — set imperatively after intersection to keep SSR/client tree identical */}
        <source ref={sourceRef} type="video/mp4" />
      </video>
    </div>
  );
}
