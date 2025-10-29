import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [320, 480, 640, 768],
    qualities: [75, 90, 100],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
