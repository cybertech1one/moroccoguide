import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  /* ── Image Optimization ── */
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year (images are content-hashed)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },

  /* ── Experimental Performance Features ── */
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',    // 300+ icon barrel file - only import used icons
      'framer-motion',   // Heavy animation library - tree-shake aggressively
      'date-fns',        // 200+ function barrel file - only import used fns
      'recharts',        // Chart library - only import used chart types
    ],
  },

  /* ── HTTP Headers ── */
  headers: async () => [
    /* -- Immutable hashed assets (_next/static) -- */
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    /* -- Optimized images served by Next.js -- */
    {
      source: '/_next/image(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    /* -- Static files in /public (fonts, icons, images) -- */
    {
      source: '/(.*)\\.(ico|svg|png|jpg|jpeg|webp|avif|woff|woff2|ttf|eot)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    /* -- Site manifest & web app config -- */
    {
      source: '/site.webmanifest',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=604800',
        },
        { key: 'Content-Type', value: 'application/manifest+json' },
      ],
    },
    /* -- All routes: security + performance headers -- */
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.supabase.co",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: blob: https://upload.wikimedia.org https://*.supabase.co https://*.tile.openstreetmap.org https://*.basemaps.cartocdn.com",
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://nominatim.openstreetmap.org https://api.open-meteo.com",
            "frame-ancestors 'none'",
          ].join('; '),
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ],
    },
  ],
};

export default nextConfig;
