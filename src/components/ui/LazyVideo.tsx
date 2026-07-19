"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
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
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current && props.autoPlay) {
      // Some mobile browsers need a direct play call when src is set dynamically
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay policy might block it if not muted, but our videos are muted
          console.warn("Video autoplay prevented:", error);
        });
      }
    }
  }, [shouldLoad, props.autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      preload={shouldLoad ? "auto" : "none"}
      // We still pass autoPlay because React needs it for muted autoplay on iOS
      {...props}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
