import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/why-this-site-exists",
        destination: "/writing/i-have-been-writing-for-years",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
