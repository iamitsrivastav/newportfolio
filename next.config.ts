import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Repository name as base path
  // Deployed at: https://iamitsrivastav.github.io/newportfolio/
  basePath: "/newportfolio",

  // Required for static export — disables Next.js image optimization
  // (no server-side image processing on GitHub Pages)
  images: {
    unoptimized: true,
  },

  // Trailing slash ensures correct asset resolution on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
