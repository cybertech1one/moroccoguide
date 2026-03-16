import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ═══════════════════════════════════════════════════════════════
// CityGuide Morocco — Edge Middleware
// Security headers, SEO enforcement, path blocking, trailing
// slash redirect, canonical URL handling, and rate limiting
// ═══════════════════════════════════════════════════════════════

const CANONICAL_HOST = 'citytoursmorocco.com';
const CANONICAL_PROTOCOL = 'https';

// ── Simple In-Memory Rate Limiter ──
// Note: This resets on each cold start and is per-edge-instance.
// For production at scale, use Redis or a dedicated rate-limiting service.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

// Periodic cleanup to prevent memory leaks (runs every ~100 requests)
let requestCounter = 0;
function cleanupRateLimitMap() {
  requestCounter++;
  if (requestCounter % 100 === 0) {
    const now = Date.now();
    for (const [key, value] of rateLimitMap) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }
}

// ── Suspicious Paths to Block ──
const BLOCKED_PATHS = [
  '/wp-admin',
  '/wp-login',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  '/xmlrpc',
  '/.env',
  '/.git',
  '/.htaccess',
  '/phpmyadmin',
  '/pma',
  '/admin.php',
  '/cgi-bin',
  '/config.php',
  '/eval-stdin.php',
  '/vendor/phpunit',
];

// ── SEO Redirect Map: old/common URLs -> canonical paths ──
// 301 permanent redirects for URL migration, common typos, and legacy paths
const SEO_REDIRECTS: Record<string, string> = {
  // Common alternate spellings and old paths
  '/marrakech': '/cities/marrakech',
  '/marrakesh': '/cities/marrakech',
  '/fez': '/cities/fes',
  '/casablanca': '/cities/casablanca',
  '/rabat': '/cities/rabat',
  '/chefchaouen': '/cities/chefchaouen',
  '/essaouira': '/cities/essaouira',
  '/tangier': '/cities/tangier',
  '/agadir': '/cities/agadir',
  '/meknes': '/cities/meknes',
  // Legacy content paths
  '/travel-guide': '/llmo',
  '/guide': '/llmo',
  '/morocco-guide': '/llmo',
  '/morocco-faq': '/faq',
  '/questions': '/faq',
  '/help': '/faq',
  // Common resource paths
  '/destinations': '/cities',
  '/places': '/cities',
  '/things-to-do': '/attractions',
  '/sightseeing': '/attractions',
  '/hotels': '/accommodations',
  '/riads': '/accommodations',
  '/where-to-stay': '/accommodations',
  '/where-to-eat': '/restaurants',
  '/dining': '/restaurants',
  '/excursions': '/tours',
  '/trips': '/tours',
  '/plan': '/tools/planner',
  '/budget': '/tools/budget',
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') ?? '';
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  // ── Cleanup stale rate limit entries ──
  cleanupRateLimitMap();

  // ── Block Suspicious Paths ──
  const lowerPath = pathname.toLowerCase();
  if (BLOCKED_PATHS.some((blocked) => lowerPath.startsWith(blocked))) {
    return new NextResponse(null, { status: 404 });
  }

  // ── Rate Limiting ──
  if (ip !== 'unknown' && isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  // ── Canonical Host Enforcement (www -> non-www) ──
  // Redirect www.citytoursmorocco.com -> citytoursmorocco.com for canonical URL consistency
  if (host.startsWith('www.')) {
    const canonicalUrl = `${CANONICAL_PROTOCOL}://${CANONICAL_HOST}${pathname}${search}`;
    return NextResponse.redirect(canonicalUrl, 301);
  }

  // ── SEO 301 Redirects for old/common URLs ──
  const redirectTarget = SEO_REDIRECTS[lowerPath];
  if (redirectTarget) {
    const url = request.nextUrl.clone();
    url.pathname = redirectTarget;
    return NextResponse.redirect(url, 301);
  }

  // ── Redirect Trailing Slashes ──
  // Avoid duplicate content: /cities/ -> /cities
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  // ── Apply Security Headers ──
  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // ── Performance: Cache-Control for HTML pages ──
  // stale-while-revalidate lets CDNs serve stale content instantly
  // while revalidating in the background — crucial for perceived speed.
  if (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    );
  }

  // ── Performance: Vary header for proper CDN caching ──
  response.headers.set('Vary', 'Accept-Encoding');

  // ── SEO: X-Robots-Tag Header ──
  // Provides robots directives at the HTTP header level (supplements meta robots)
  if (pathname.startsWith('/api/')) {
    // Prevent search engines from indexing API endpoints
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  } else if (pathname.startsWith('/search')) {
    // Search results pages should not be indexed (dynamic, duplicate content)
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  } else {
    // All public pages: index and follow, allow large previews
    response.headers.set(
      'X-Robots-Tag',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
  }

  // ── SEO: Structured Link Headers for important resources ──
  // Helps search engines and browsers discover key resources
  const linkHeaders: string[] = [
    `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}${pathname}>; rel="canonical"`,
    `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}/sitemap.xml>; rel="sitemap"`,
  ];

  // Add hreflang link headers for language alternates
  if (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
    linkHeaders.push(
      `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}${pathname}>; rel="alternate"; hreflang="en"`,
      `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}/fr${pathname}>; rel="alternate"; hreflang="fr"`,
      `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}/ar${pathname}>; rel="alternate"; hreflang="ar"`,
      `<${CANONICAL_PROTOCOL}://${CANONICAL_HOST}${pathname}>; rel="alternate"; hreflang="x-default"`
    );
  }

  response.headers.set('Link', linkHeaders.join(', '));

  // ── Request Logging (Development) ──
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${pathname} — IP: ${ip}`
    );
  }

  return response;
}

// ── Matcher Configuration ──
// Run middleware on all routes except static assets and Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icon.svg, apple-touch-icon.png (browser icons)
     * - Static asset extensions
     */
    '/((?!_next/static|_next/image|favicon\\.ico|icon\\.svg|apple-touch-icon\\.png|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|eot)$).*)',
  ],
};
