import { ImageResponse } from 'next/og';

export const alt = 'CityGuide - Your Complete Morocco Travel Companion';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '52px 60px',
          fontFamily: 'Georgia, serif',
          background: 'linear-gradient(145deg, #1A1814 0%, #2A2820 35%, #302C24 60%, #1A1814 100%)',
          position: 'relative',
        }}
      >
        {/* Top border accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            display: 'flex',
            background: 'linear-gradient(90deg, #C4960C, #A0522D, #C4960C)',
          }}
        />
        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            display: 'flex',
            background: 'linear-gradient(90deg, #A0522D, #C4960C, #A0522D)',
          }}
        />

        {/* Top: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C4960C, #D4A83C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: '#14120F',
              fontWeight: 800,
            }}
          >
            CG
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '30px', fontWeight: 700, color: '#FAF8F5' }}>
              CityGuide
            </span>
            <span
              style={{
                fontSize: '13px',
                color: '#C4960C',
                letterSpacing: '3px',
                textTransform: 'uppercase' as const,
                fontWeight: 600,
              }}
            >
              Morocco Travel
            </span>
          </div>
        </div>

        {/* Center: Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '920px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '60px', height: '3px', background: '#C4960C', display: 'flex' }} />
            <div
              style={{
                width: '8px',
                height: '8px',
                background: '#C4960C',
                transform: 'rotate(45deg)',
                display: 'flex',
              }}
            />
            <div style={{ width: '30px', height: '3px', background: '#C4960C', display: 'flex' }} />
          </div>

          <div
            style={{
              fontSize: '54px',
              fontWeight: 700,
              color: '#FAF8F5',
              lineHeight: 1.12,
            }}
          >
            Your Complete Morocco Travel Companion
          </div>

          <div
            style={{
              fontSize: '22px',
              color: '#D4C4AD',
              lineHeight: 1.45,
              opacity: 0.9,
              maxWidth: '800px',
            }}
          >
            Explore imperial cities, Sahara desert tours, authentic riads, Moroccan cuisine, and unforgettable local experiences.
          </div>
        </div>

        {/* Bottom: URL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '18px', color: '#C4960C', fontWeight: 600 }}>
            cityguide.ma
          </span>
          <div
            style={{
              width: '4px',
              height: '4px',
              background: '#C4960C',
              borderRadius: '50%',
              display: 'flex',
              opacity: 0.5,
            }}
          />
          <span style={{ fontSize: '14px', color: '#D4C4AD', opacity: 0.7 }}>
            Discover Morocco
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
