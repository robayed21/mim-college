import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "mimgovcollege.edu.bd" }],
  },
};

export default nextConfig;
