/** @type {import('next').NextConfig} */
const nextConfig = {
  // Faster compilation
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
