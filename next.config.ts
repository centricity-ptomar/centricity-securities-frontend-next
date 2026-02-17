import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // If deploying to a subpath, set basePath and assetPrefix:
  basePath: '/centricity-securities-frontend-next', // Replace with your repo name (must start with a slash)
  assetPrefix: '/centricity-securities-frontend-next/', // Replace with your repo name (must end with a slash)
  // Optional: Configure images if needed for static export
  images: {
    unoptimized: true, // Disable Next.js image optimization as it requires a server
  },
};

module.exports = nextConfig;
