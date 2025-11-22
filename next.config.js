/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/kelly',
        destination: '/portfolio/index.html',
      },
    ];
  },
};

module.exports = nextConfig;