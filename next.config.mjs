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
  // Design URLs (Figma Make redesign) -> existing routes, which stay canonical.
  async redirects() {
    return [
      { source: "/about", destination: "/faculty", permanent: true },
      { source: "/openings", destination: "/join", permanent: true },
      { source: "/teaching", destination: "/resources", permanent: true },
      { source: "/research/:topic", destination: "/research", permanent: true },
    ];
  },
};

export default nextConfig;
