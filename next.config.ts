import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  async redirects() {
    return [
      {
        source: "/why-this-site-exists",
        destination: "/",
        permanent: true,
      },
      {
        source: "/writing/i-have-been-writing-for-years",
        destination: "/",
        permanent: true,
      },
      {
        source: "/videos/welcome-to-making-sense-of-complex-systems",
        destination: "/",
        permanent: true,
      },
      {
        source: "/start-here",
        destination: "/learn/global-life-sciences",
        permanent: true,
      },
      {
        source: "/explainers",
        destination: "/learn",
        permanent: true,
      },
      {
        source: "/explainers/one-medicine-five-systems",
        destination: "/learn/one-medicine-five-systems",
        permanent: true,
      },
      {
        source: "/explainers/four-wall-vs-network-visibility",
        destination: "/learn/four-wall-vs-network-visibility",
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
