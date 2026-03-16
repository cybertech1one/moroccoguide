// ═══════════════════════════════════════════════════════════════
// MOROCCO GUIDE — Dynamic Favicon (32x32)
// Next.js metadata file convention: generates /favicon.ico
// Uses ImageResponse to render "CG" on a charcoal/gold gradient
// ═══════════════════════════════════════════════════════════════

import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          background: 'linear-gradient(145deg, #1A1814 0%, #2A2820 50%, #1A1814 100%)',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            border: '1.5px solid rgba(196, 150, 12, 0.4)',
            borderRadius: '6px',
          }}
        />
        <span
          style={{
            fontSize: '14px',
            fontWeight: 800,
            color: '#C4960C',
            letterSpacing: '-0.5px',
          }}
        >
          CG
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
