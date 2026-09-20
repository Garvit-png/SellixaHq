"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sourceRef.current && videoRef.current) {
          sourceRef.current.src = src;
          videoRef.current.load();
          observer.disconnect();

          if (props.autoPlay) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.warn("Video autoplay prevented:", error);
              });
            }
          }
        }
      },
      { rootMargin: "400px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [mounted, src, props.autoPlay]);

  // Render nothing on the server — a same-size placeholder keeps layout stable.
  // This avoids any SSR/client tree mismatch for the video element.
  if (!mounted) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      preload="none"
      {...props}
    >
      <source ref={sourceRef} type="video/mp4" />
    </video>
  );
}
