/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Single worker so page-data collection reads build output serially
  // instead of via multiple concurrent child processes — fewer file handles
  // open at once means fewer collisions with OneDrive's sync locks (see the
  // webpack.cache note below).
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    // This project lives inside an actively-synced OneDrive folder. OneDrive's
    // real-time sync intermittently locks webpack's persistent cache pack
    // files mid-rename, which corrupts the build and cascades into spurious
    // "Cannot find module for page" errors during page-data collection.
    // Disabling the filesystem cache trades a bit of rebuild speed for a
    // build that doesn't randomly break depending on OneDrive's sync timing.
    config.cache = false;
    return config;
  },
};

export default nextConfig;
