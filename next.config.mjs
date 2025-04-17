/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 SKIP type checking during build
  },
};

export default nextConfig;
