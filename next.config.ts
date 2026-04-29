import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aquila-consulting.com',
      },
    ],
  },
};

export default nextConfig;
