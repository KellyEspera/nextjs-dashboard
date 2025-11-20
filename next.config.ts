import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/kelly',
        destination: '/portfolio/index.html',
      },
    ];
  },
};

export default nextConfig;
