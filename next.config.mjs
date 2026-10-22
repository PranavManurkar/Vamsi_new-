/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/faculty", permanent: true },
      { source: "/openings", destination: "/join", permanent: true },
      { source: "/resources", destination: "/teaching", permanent: true },
    ];
  },
};

export default nextConfig;
