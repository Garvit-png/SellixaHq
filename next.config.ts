import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

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
};

export default nextConfig;
