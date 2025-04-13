import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [{ hostname: 'static-cdn.jtvnw.net' }, { hostname: 'yt3.googleusercontent.com' }],
  },
  basePath: '/sgg',
  serverRuntimeConfig: {},
};

export default nextConfig;
