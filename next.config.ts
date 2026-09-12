import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Fix Turbopack root detection warning
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Image optimization — serve AVIF/WebP, cache aggressively
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Allow external avatar CDN used in EarlyPartnersSection
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },

  // Strict mode off — avoids double render in dev
  reactStrictMode: false,

  experimental: {
    // Optimize package imports — tree-shake icon/animation libraries
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-avatar",
    ],
  },

  // Drop heavy server-side deps from client bundle tracing
  outputFileTracingExcludes: {
    "*": [
      "./node_modules/face-api.js/**",
      "./node_modules/@tensorflow/**",
    ],
  },

  // Aggressive HTTP caching for static assets served from /public/
  // /_next/static/ already gets immutable headers from Next.js by default
  async headers() {
    return [
      // JS/CSS chunks — immutable (content-hashed filenames, safe to cache forever)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Videos — 7 days, serve stale while revalidating in background
      {
        source: "/:path*.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      // Images — 30 days
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      // Fonts — immutable (filenames are hashed)
      {
        source: "/:path*.(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // PDFs — 1 day
      {
        source: "/:path*.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
