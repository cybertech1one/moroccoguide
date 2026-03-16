import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Universal rule: all crawlers get the same access.
        // When every bot has identical allow/disallow, a single wildcard
        // rule is cleaner and avoids duplicate parsing overhead.
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/search',   // Dynamic search results = duplicate content
        ],
      },
    ],
    sitemap: 'https://citytoursmorocco.com/sitemap.xml',
    host: 'https://citytoursmorocco.com',
  };
}
