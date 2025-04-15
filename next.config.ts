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
  async headers() {
    return [
      {
        source: '/(.*)', // Применяем ко всем маршрутам
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "frame-src 'self' https://player.twitch.tv",
              "frame-ancestors 'self' https://tripanulo.site https://player.twitch.tv",
              "script-src 'self' 'unsafe-inline'", // Только если нужны inline-скрипты
              "style-src 'self' 'unsafe-inline'", // Только если нужны inline-стили
              "img-src 'self' data: https://static-cdn.jtvnw.net",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
