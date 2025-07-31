// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
