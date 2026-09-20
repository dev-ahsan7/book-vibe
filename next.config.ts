import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
