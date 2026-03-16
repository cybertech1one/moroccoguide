import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #1A1814 0%, #2A2820 50%, #1A1814 100%)',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '3px solid rgba(196, 150, 12, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(145deg, #C4960C 0%, #D4A83C 50%, #C4960C 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '44px',
                fontWeight: 800,
                color: '#1A1814',
                letterSpacing: '-1px',
              }}
            >
              CG
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
