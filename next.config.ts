import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Strict mode off — avoids double render in dev which tanks perf
  reactStrictMode: false,

  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Turbopack already set via CLI
  },
};

export default nextConfig;
