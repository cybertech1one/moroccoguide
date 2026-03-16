// ═══════════════════════════════════════════════════════════════
// MOROCCO GUIDE — Dynamic Open Graph Image Generation
// Generates branded, Moroccan-styled OG images for social sharing
// Using Next.js ImageResponse (Satori) API
//
// Usage:
//   /api/og?title=Marrakech&description=The+Red+City&type=city
//   /api/og?title=Sahara+Desert+Tour&type=tour
//   /api/og (defaults to CityGuide branding)
//
// Types: default, city, tour, restaurant, attraction
// Output: 1200x630 PNG with Moroccan geometric patterns
// ═══════════════════════════════════════════════════════════════

import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';

export const runtime = 'edge';

// ── Brand Colors ──
const BRAND = {
  charcoal: '#1A1814',
  charcoalLight: '#2A2820',
  cinnamon: '#A0522D',
  cinnamonLight: '#B8693E',
  gold: '#C4960C',
  goldLight: '#D4A83C',
  cream: '#FAF8F5',
  warmGray: '#D4C4AD',
  darkText: '#14120F',
} as const;

// ── Type-specific accent palettes ──
const TYPE_PALETTES: Record<
  string,
  { accent: string; accentLight: string; badge: string; badgeText: string; label: string }
> = {
  city: {
    accent: '#1B4965',
    accentLight: '#2C7DA0',
    badge: '#1B4965',
    badgeText: '#FFFFFF',
    label: 'City Guide',
  },
  tour: {
    accent: '#1E6B4E',
    accentLight: '#2D9B6E',
    badge: '#1E6B4E',
    badgeText: '#FFFFFF',
    label: 'Tour',
  },
  restaurant: {
    accent: BRAND.cinnamon,
    accentLight: BRAND.cinnamonLight,
    badge: BRAND.cinnamon,
    badgeText: '#FFFFFF',
    label: 'Restaurant',
  },
  attraction: {
    accent: '#8B1A1A',
    accentLight: '#B82C2C',
    badge: '#8B1A1A',
    badgeText: '#FFFFFF',
    label: 'Attraction',
  },
  default: {
    accent: BRAND.cinnamon,
    accentLight: BRAND.cinnamonLight,
    badge: BRAND.gold,
    badgeText: BRAND.darkText,
    label: '',
  },
};

// ── Moroccan Geometric Pattern (CSS-only zellige-inspired) ──
function GeometricPattern({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        opacity,
      }}
    >
      {/* Primary star grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'repeating-conic-gradient(' +
            BRAND.gold +
            ' 0% 25%, transparent 0% 50%) 0 0 / 48px 48px',
        }}
      />
      {/* Offset diamond grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'repeating-conic-gradient(' +
            BRAND.cinnamon +
            ' 0% 25%, transparent 0% 50%) 24px 24px / 48px 48px',
          opacity: 0.5,
        }}
      />
    </div>
  );
}

// ── Decorative Moroccan border frame ──
function MoroccanBorder() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        pointerEvents: 'none',
      }}
    >
      {/* Top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          display: 'flex',
          background:
            'repeating-linear-gradient(90deg, ' +
            BRAND.gold +
            ' 0px, ' +
            BRAND.gold +
            ' 18px, transparent 18px, transparent 22px, ' +
            BRAND.cinnamon +
            ' 22px, ' +
            BRAND.cinnamon +
            ' 40px, transparent 40px, transparent 44px)',
        }}
      />
      {/* Bottom border */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10px',
          display: 'flex',
          background:
            'repeating-linear-gradient(90deg, ' +
            BRAND.cinnamon +
            ' 0px, ' +
            BRAND.cinnamon +
            ' 18px, transparent 18px, transparent 22px, ' +
            BRAND.gold +
            ' 22px, ' +
            BRAND.gold +
            ' 40px, transparent 40px, transparent 44px)',
        }}
      />
      {/* Left border */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 0,
          bottom: 10,
          width: '10px',
          display: 'flex',
          background:
            'repeating-linear-gradient(180deg, ' +
            BRAND.gold +
            ' 0px, ' +
            BRAND.gold +
            ' 18px, transparent 18px, transparent 22px, ' +
            BRAND.cinnamon +
            ' 22px, ' +
            BRAND.cinnamon +
            ' 40px, transparent 40px, transparent 44px)',
        }}
      />
      {/* Right border */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 0,
          bottom: 10,
          width: '10px',
          display: 'flex',
          background:
            'repeating-linear-gradient(180deg, ' +
            BRAND.cinnamon +
            ' 0px, ' +
            BRAND.cinnamon +
            ' 18px, transparent 18px, transparent 22px, ' +
            BRAND.gold +
            ' 22px, ' +
            BRAND.gold +
            ' 40px, transparent 40px, transparent 44px)',
        }}
      />
      {/* Corner diamonds */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: '18px',
            height: '18px',
            background: BRAND.gold,
            transform: 'rotate(45deg)',
            display: 'flex',
          }}
        />
      ))}
    </div>
  );
}

// ── Brand Logo Component ──
function BrandLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, ' + BRAND.gold + ', ' + BRAND.goldLight + ')',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          color: BRAND.darkText,
          fontWeight: 800,
          letterSpacing: '-0.5px',
        }}
      >
        CG
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: '26px',
            fontWeight: 700,
            color: BRAND.cream,
            letterSpacing: '0.5px',
          }}
        >
          CityGuide
        </span>
        <span
          style={{
            fontSize: '12px',
            color: BRAND.gold,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Morocco Travel
        </span>
      </div>
    </div>
  );
}

// ── Decorative separator ──
function GoldSeparator() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '2px',
          background: BRAND.gold,
          display: 'flex',
        }}
      />
      <div
        style={{
          width: '7px',
          height: '7px',
          background: BRAND.gold,
          transform: 'rotate(45deg)',
          display: 'flex',
        }}
      />
      <div
        style={{
          width: '24px',
          height: '2px',
          background: BRAND.gold,
          display: 'flex',
        }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Layout: Default — Full branded CityGuide image
// ══════════════════════════════════════════════════════════════
function DefaultLayout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'linear-gradient(145deg, ' +
            BRAND.charcoal +
            ' 0%, ' +
            BRAND.charcoalLight +
            ' 40%, #302C24 70%, ' +
            BRAND.charcoal +
            ' 100%)',
        }}
      />
      <GeometricPattern opacity={0.07} />
      <MoroccanBorder />

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 56px',
          flex: 1,
          position: 'relative',
        }}
      >
        <BrandLogo />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '920px',
          }}
        >
          <GoldSeparator />
          <h1
            style={{
              fontSize: title.length > 40 ? '48px' : '58px',
              fontWeight: 700,
              color: BRAND.cream,
              lineHeight: 1.12,
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {title.length > 60 ? title.slice(0, 57) + '...' : title}
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: BRAND.warmGray,
              lineHeight: 1.4,
              margin: 0,
              opacity: 0.9,
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + '...'
              : description}
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              fontSize: '17px',
              color: BRAND.gold,
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            citytoursmorocco.com
          </span>
          <div style={{ display: 'flex', gap: '5px', opacity: 0.35 }}>
            {[14, 10, 7, 10, 14].map((size, i) => (
              <div
                key={i}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: BRAND.gold,
                  transform: 'rotate(45deg)',
                  display: 'flex',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Layout: City — Split layout with city emphasis
// ══════════════════════════════════════════════════════════════
function CityLayout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const palette = TYPE_PALETTES.city;

  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Left panel: charcoal with brand */}
      <div
        style={{
          width: '400px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 36px',
          background:
            'linear-gradient(180deg, ' + BRAND.charcoal + ' 0%, #0F0E0B 100%)',
          position: 'relative',
        }}
      >
        <GeometricPattern opacity={0.05} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, ' + BRAND.gold + ', ' + BRAND.goldLight + ')',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              color: BRAND.darkText,
              fontWeight: 800,
            }}
          >
            CG
          </div>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: BRAND.cream,
              marginTop: '8px',
            }}
          >
            CityGuide
          </span>
          <span
            style={{
              fontSize: '11px',
              color: BRAND.gold,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Morocco Travel
          </span>
        </div>
        <span
          style={{
            fontSize: '14px',
            color: BRAND.gold,
            fontWeight: 600,
            position: 'relative',
          }}
        >
          citytoursmorocco.com
        </span>
      </div>

      {/* Right panel: blue accent with content */}
      <div
        style={{
          width: '800px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 56px',
          background:
            'linear-gradient(145deg, ' +
            palette.accent +
            ' 0%, ' +
            palette.accentLight +
            ' 100%)',
          position: 'relative',
        }}
      >
        <GeometricPattern opacity={0.08} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '6px 18px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
            }}
          >
            {palette.label}
          </div>
          <GoldSeparator />
          <h1
            style={{
              fontSize: title.length > 30 ? '52px' : '64px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.08,
              margin: 0,
              textShadow: '0 2px 16px rgba(0,0,0,0.3)',
            }}
          >
            {title.length > 50 ? title.slice(0, 47) + '...' : title}
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '600px',
            }}
          >
            {description.length > 100
              ? description.slice(0, 97) + '...'
              : description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Layout: Tour — Adventure-themed with cinnamon accents
// ══════════════════════════════════════════════════════════════
function TourLayout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const palette = TYPE_PALETTES.tour;

  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'linear-gradient(160deg, ' +
            BRAND.charcoal +
            ' 0%, #1C2A1F 50%, ' +
            palette.accent +
            ' 100%)',
        }}
      />
      <GeometricPattern opacity={0.06} />
      <MoroccanBorder />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 56px',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <BrandLogo />
          <div
            style={{
              display: 'flex',
              padding: '8px 22px',
              borderRadius: '24px',
              background: palette.badge,
              color: palette.badgeText,
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            {palette.label}
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '900px',
          }}
        >
          <GoldSeparator />
          <h1
            style={{
              fontSize: title.length > 40 ? '46px' : '56px',
              fontWeight: 700,
              color: BRAND.cream,
              lineHeight: 1.12,
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {title.length > 60 ? title.slice(0, 57) + '...' : title}
          </h1>
          <p
            style={{
              fontSize: '21px',
              color: BRAND.warmGray,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + '...'
              : description}
          </p>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              fontSize: '17px',
              color: BRAND.gold,
              fontWeight: 600,
            }}
          >
            citytoursmorocco.com
          </span>
          {/* Tour compass decoration */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              opacity: 0.4,
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                border: '2px solid ' + BRAND.gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  background: BRAND.gold,
                  transform: 'rotate(45deg)',
                  display: 'flex',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Layout: Restaurant — Warm cinnamon tones
// ══════════════════════════════════════════════════════════════
function RestaurantLayout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const palette = TYPE_PALETTES.restaurant;

  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Background: warm charcoal with cinnamon glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'linear-gradient(145deg, ' +
            BRAND.charcoal +
            ' 0%, #2A1F17 45%, #3D2A1C 70%, ' +
            BRAND.charcoal +
            ' 100%)',
        }}
      />
      {/* Warm radial glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'radial-gradient(ellipse at 75% 50%, rgba(160,82,45,0.15) 0%, transparent 60%)',
        }}
      />
      <GeometricPattern opacity={0.05} />
      <MoroccanBorder />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 56px',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <BrandLogo />
          <div
            style={{
              display: 'flex',
              padding: '8px 22px',
              borderRadius: '24px',
              background: palette.badge,
              color: palette.badgeText,
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            {palette.label}
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '2px',
                background: BRAND.cinnamon,
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '7px',
                height: '7px',
                background: BRAND.cinnamon,
                transform: 'rotate(45deg)',
                display: 'flex',
              }}
            />
            <div
              style={{
                width: '24px',
                height: '2px',
                background: BRAND.cinnamon,
                display: 'flex',
              }}
            />
          </div>
          <h1
            style={{
              fontSize: title.length > 40 ? '46px' : '56px',
              fontWeight: 700,
              color: BRAND.cream,
              lineHeight: 1.12,
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {title.length > 60 ? title.slice(0, 57) + '...' : title}
          </h1>
          <p
            style={{
              fontSize: '21px',
              color: BRAND.warmGray,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + '...'
              : description}
          </p>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              fontSize: '17px',
              color: BRAND.gold,
              fontWeight: 600,
            }}
          >
            citytoursmorocco.com
          </span>
          <div style={{ display: 'flex', gap: '5px', opacity: 0.3 }}>
            {[14, 10, 7, 10, 14].map((size, i) => (
              <div
                key={i}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  background: BRAND.cinnamon,
                  transform: 'rotate(45deg)',
                  display: 'flex',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Layout: Attraction — Bold with crimson accent
// ══════════════════════════════════════════════════════════════
function AttractionLayout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const palette = TYPE_PALETTES.attraction;

  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Background with warm-to-crimson gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          background:
            'linear-gradient(155deg, ' +
            BRAND.charcoal +
            ' 0%, #2A1818 50%, #3A1A1A 75%, ' +
            BRAND.charcoal +
            ' 100%)',
        }}
      />
      <GeometricPattern opacity={0.06} />

      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          display: 'flex',
          background:
            'linear-gradient(90deg, ' +
            palette.accent +
            ', ' +
            BRAND.gold +
            ', ' +
            palette.accent +
            ')',
        }}
      />
      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          display: 'flex',
          background:
            'linear-gradient(90deg, ' +
            BRAND.gold +
            ', ' +
            palette.accent +
            ', ' +
            BRAND.gold +
            ')',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 56px',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Top */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <BrandLogo />
          <div
            style={{
              display: 'flex',
              padding: '8px 22px',
              borderRadius: '24px',
              background: palette.badge,
              color: palette.badgeText,
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            {palette.label}
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '900px',
          }}
        >
          <GoldSeparator />
          <h1
            style={{
              fontSize: title.length > 40 ? '46px' : '56px',
              fontWeight: 700,
              color: BRAND.cream,
              lineHeight: 1.12,
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {title.length > 60 ? title.slice(0, 57) + '...' : title}
          </h1>
          <p
            style={{
              fontSize: '21px',
              color: BRAND.warmGray,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + '...'
              : description}
          </p>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              fontSize: '17px',
              color: BRAND.gold,
              fontWeight: 600,
            }}
          >
            citytoursmorocco.com
          </span>
          {/* Star decoration */}
          <div style={{ display: 'flex', gap: '12px', opacity: 0.3 }}>
            {[0, 1, 2].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    background: BRAND.gold,
                    transform: 'rotate(45deg)',
                    display: 'flex',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// Route Handler
// ══════════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get('title') ?? 'CityGuide';
  const description =
    searchParams.get('description') ?? 'Your Complete Morocco Travel Companion';
  const type = searchParams.get('type') ?? 'default';

  // Select layout based on type
  let element: React.ReactElement;

  switch (type) {
    case 'city':
      element = <CityLayout title={title} description={description} />;
      break;
    case 'tour':
      element = <TourLayout title={title} description={description} />;
      break;
    case 'restaurant':
      element = <RestaurantLayout title={title} description={description} />;
      break;
    case 'attraction':
      element = <AttractionLayout title={title} description={description} />;
      break;
    default:
      element = <DefaultLayout title={title} description={description} />;
      break;
  }

  return new ImageResponse(element, {
    width: 1200,
    height: 630,
    headers: {
      'Cache-Control':
        'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
      'CDN-Cache-Control': 'public, max-age=604800',
    },
  });
}
